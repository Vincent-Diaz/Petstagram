import React, { useState, useRef } from "react";
// import testPost from "../testPost.json";
// import Post from '../components/Post/Post'
// import Navigation from '../components/Navigation/Navigation'
// import Button from '../components/Button';
import API from "../utils/api";

function Test() {
  const [searchFriend, setSearchFriend] = useState("");
  const [result, setResult] = useState([]);
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchFriend(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("search term", searchFriend);
    API.findFriendsbyUserName(searchFriend)
       .then((res) => {
        // console.log(res.data);
        setResult(res.data)
        console.log("result", result)
        console.log("submited");
        })
        .catch((err) => console.log(err));
  };

  const renderFriendList = () =>{

  }
  return (
    <>
      <h4>Find friends</h4>
      <form onSubmit={handleSearch}>
        <input
          onChange={handleInputChange}
          placeholder="username"
          value={searchFriend}
        />
      </form>

      <div>
        <h4></h4>
        <button type="submit" className="btn btn-success">
          Follow
        </button>
      </div>
    </>
  );
}

export default Test;
