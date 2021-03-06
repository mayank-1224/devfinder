/* eslint-disable */

// import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// import "./Search.css";
// import "./SearchMobile.css";
// import "./suggestions.css";
// import debounce from "lodash.debounce";
// import SearchIcon from "./images/icons8-search.svg";
// import { useSearchParams } from "react-router-dom";

import React, { useCallback } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./styles/suggestions.css";
import "./styles/SearchForm.css";
import debounce from "lodash.debounce";
import { useSearchParams } from "react-router-dom";

const SearchForm = (passUserdata) => {
  const [suggestions, setSuggestions] = useState({});
  const [userApi, setUserApi] = useState("");
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // const urlchecking = new URLSearchParams();
  // urlchecking.get();
  // console.log(urlchecking.get());

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
          passUserdata.onSubmit(response);
        })
        .catch((err) => {
          console.log(err);
          // alert("OOPs!!!API not working. Try after sometime");
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
    // setUsername(event.target.innerText);
    setUserApi(event.target.innerText);
  };

  useEffect(() => {
    const nurl = `https://api.github.com/users/${userApi}`;
    console.log(nurl);
    axios
      .get(`https://api.github.com/users/${userApi}`)
      .then((response) => {
        console.log(response);
        passUserdata.receiveData(response);
      })
      .catch((err) => {
        console.log(err);
        // alert("OOPs!!!API not working. Try after sometime");
      });
  }, [userApi]);

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
          // alert("OOPs!!!API not working.  Try after sometime");
        });
    }, 200),
    []
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // setUsername("");
    setUserApi(e.target[0].value);
    console.log(e.target[0].value);
    setDropDownOpen(false);
    setSuggestions([]);
  };

  // react-router-dom
  // const [sp,setSearchparams]=useSearchParams()
  // const sp = new URLSearchParams()
  //sp.set('username',e.target.value)
  //setSearchparams(sp)
  //sp.get('username') ==null???value

  return (
    <>
      <form onSubmit={onSubmitHandler} className="searchForm">
        {/* <img src={search} alt="search" className="searchIcon"></img> */}
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
            suggestions.items.map((value, key) => {
              return (
                <button className="item" onClick={onclickHandler}>
                  <p>{value.login}</p>
                </button>
              );
            })}
        </div>
      )}
    </>
    // <>
    //   <form onClick={onSubmitHandler}>
    //     <div className="search">
    //       <input
    //         type="text"
    //         name="username"
    //         className="userInput"
    //         placeholder="Search GitHub username..."
    //         value={searchParams.get("q") ?? ""}
    //         onChange={onChangeHandler}
    //       />
    //       <button className="sub-btn" type="submit">
    //         {" "}
    //         Search
    //       </button>
    //     </div>
    //     {dropDownOpen && (
    //       <div className="result">
    //         {suggestions &&
    //           suggestions.map((suggestedName) => {
    //             return (
    //               <button className="item" onClick={onclickHandler}>
    //                 <p>{suggestedName.login}</p>
    //               </button>
    //             );
    //           })}
    //       </div>
    //     )}
    //   </form>
    // </>
  );
};

export default SearchForm;
// debounce

// import React, { useCallback } from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import "./styles/suggestions.css";
// import "./styles/SearchForm.css";
// import debounce from "lodash.debounce";
// import { useSearchParams } from "react-router-dom";

// const SearchForm = (props) => {
//   const [userInput, setUserInput] = useState("");
//   const [suggestions, setSuggestions] = useState({});
//   const [dropDownOpen, setDropDownOpen] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const urltaken = document.location.search;
//     console.log(urltaken);
//     let urlchecking = new URLSearchParams(urltaken);
//     let check = urlchecking.get("q");
//     console.log(check);
//     if (check != null) {
//       axios
//         .get(`https://api.github.com/users/${check}`)
//         .then((response) => {
//           console.log(response);
//           props.receiveData(response);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, []);

//   useEffect(() => {
//     debouncedChangeHandler(searchParams);
//   }, [searchParams]);

//   const debouncedChangeHandler = useCallback(
//     debounce((searchParams) => {
//       const url = `https://api.github.com/search/users?${searchParams}`;
//       axios
//         .get(url)
//         .then((res) => {
//           setSuggestions(res.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, 200),
//     []
//   );

//   const clickHandler = (e) => {
//     setUserInput(e.target.outerText);
//     //console.log(userInput);
//     props.receiveData(userInput);
//   };

//   const changeHandler = (event) => {
//     setUserInput(event.target.value);
//     console.log(userInput);
//     if (event.target.value.length > 0) {
//       setDropDownOpen(true);
//     } else {
//       setDropDownOpen(false);
//     }

//     const param = new URLSearchParams();
//     param.set("q", event.target.value);
//     setSearchParams(param);
//     setUserInput(event.target.value);
//   };

//   const SubmitHandler = (e) => {
//     e.preventDefault();
//     // console.log(userInput);
//     props.receiveData(userInput);
//     setDropDownOpen(false);
//     setSuggestions({});
//   };
//   return (
//     <>
//       <form onSubmit={SubmitHandler} className="searchForm">
//         {/* <img src={search} alt="search" className="searchIcon"></img> */}
//         <input
//           type="text"
//           value={searchParams.get("q") ?? ""}
//           onChange={changeHandler}
//           placeholder="Search GitHub username..."
//           className="inputField"
//         />
//         <button type="submit" className="searchButton">
//           Search
//         </button>
//       </form>
//       {dropDownOpen && (
//         <div className="result">
//           {suggestions.items &&
//             suggestions.items.map((value, key) => {
//               return (
//                 <button className="item" value={value} onClick={clickHandler}>
//                   <p>{value.login}</p>
//                 </button>
//               );
//             })}
//         </div>
//       )}
//     </>
//   );
// };

// export default SearchForm;
