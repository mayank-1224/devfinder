import React, { useCallback } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./styles/suggestions.css";
import "./styles/SearchForm.css";
import debounce from "lodash.debounce";
import { useSearchParams } from "react-router-dom";

const SearchForm = (props) => {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState({});
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urltaken = document.location.search;
    console.log(urltaken);
    let urlchecking = new URLSearchParams(urltaken);
    let check = urlchecking.get("q");
    console.log(check);
    if (check != null) {
      axios
        .get(`https://api.github.com/users/${check}`)
        .then((response) => {
          console.log(response);
          props.onSubmit(response);
        })
        .catch((err) => {
          console.log(err);
          // alert("OOPs!!!API not working. Try after sometime");
        });
    }
  }, []);

  useEffect(() => {
    debouncedChangeHandler(searchParams);
  }, [searchParams]);
  const debouncedChangeHandler = useCallback(
    debounce((searchParams) => {
      const url = `https://api.github.com/search/users?${searchParams}`;
      axios
        .get(url)
        .then((res) => {
          setSuggestions(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 200),
    []
  );

  const clickHandler = (e) => {
    setUserInput(e.target.outerText);
  };

  const changeHandler = (event) => {
    setUserInput(event.target.value);
    if (event.target.value.length > 0) {
      setDropDownOpen(true);
    } else {
      setDropDownOpen(false);
    }

    const param = new URLSearchParams();
    param.set("q", event.target.value);
    setSearchParams(param);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    props.receiveData(userInput);
    setDropDownOpen(false);
    setUserInput("");
    setSuggestions({});
  };
  return (
    <>
      <form onSubmit={SubmitHandler} className="searchForm">
        {/* <img src={search} alt="search" className="searchIcon"></img> */}
        <input
          type="text"
          value={searchParams.get("q") ?? ""}
          onChange={changeHandler}
          placeholder="Search GitHub username..."
          className="inputField"
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
      {dropDownOpen && (
        <div className="result">
          {suggestions.items &&
            suggestions.items.map((value, key) => {
              return (
                <button className="item" value={value} onClick={clickHandler}>
                  <p>{value.login}</p>
                </button>
              );
            })}
        </div>
      )}
    </>
  );
};

export default SearchForm;
