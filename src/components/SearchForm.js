/* eslint-disable */
import React, { useCallback } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./styles/suggestions.css";
import "./styles/SearchForm.css";
import debounce from "lodash.debounce";
import { useSearchParams } from "react-router-dom";

const SearchForm = (props) => {
  const [suggestions, setSuggestions] = useState({});
  const [userApi, setUserApi] = useState("");
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const debouncedChangeHandler = useCallback(
    debounce((searchParams) => {
      const url = `https://api.github.com/search/users?${searchParams}`;
      console.log(url);
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          setSuggestions(res.data);
          console.log(suggestions);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 200),
    []
  );

  useEffect(() => {
    const urltaken = document.location.search;
    console.log(urltaken);
    let urlchecking = new URLSearchParams(urltaken);
    let check = urlchecking.get("q");
    console.log(check);
    const urlll = `https://api.github.com/users/${check}`;
    if (check != null) {
      axios
        .get(`https://api.github.com/users/${check}`)
        .then((response) => {
          console.log(response);
          props.receiveData(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const onChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setDropDownOpen(true);
    } else {
      setDropDownOpen(false);
    }

    const param = new URLSearchParams();
    param.set("q", e.target.value);
    setSearchParams(param);
  };

  useEffect(() => {
    debouncedChangeHandler(searchParams);
  }, [searchParams]);

  const onclickHandler = (event) => {
    console.log(event.target.innerText);
    setUserApi(event.target.innerText);
  };

  useEffect(() => {
    const nurl = `https://api.github.com/users/${userApi}`;
    console.log(nurl);
    axios
      .get(nurl)
      .then((response) => {
        console.log(response);
        props.receiveData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userApi]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setUserApi(e.target[0].value);
    console.log(e.target[0].value);
    setDropDownOpen(false);
    setSuggestions([]);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="searchForm">
        <input
          type="text"
          value={searchParams.get("q") ?? ""}
          onChange={onChangeHandler}
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
            suggestions.items.map((value) => {
              return (
                <button className="item" onClick={onclickHandler}>
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
