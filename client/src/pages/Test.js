import React, { useState, useEffect } from "react";
// import testPost from "../testPost.json";
// import Post from '../components/Post/Post'
// import Navigation from '../components/Navigation/Navigation'
import Card from "../components/Card";
// import {Container} from "../components/Grid"
import API from "../utils/api";
import useDebounce from "../utils/debounceHook";

function Test() {
  const [searchFriend, setSearchFriend] = useState("");
  const [userList, setUserList] = useState([]);
  const debouncedSearchTerm = useDebounce(searchFriend, 500);
  const [following, setFollowing] = useState([])
  
  const handleUserInputChange = (event) => {
    const { value } = event.target;
    setSearchFriend(value);
  };
  useEffect(() => {
    if (!searchFriend) {
      return;
    }

    if (debouncedSearchTerm) {
      loadFriendList(searchFriend)
    }
  }, [debouncedSearchTerm]);

  // useEffect(()=>{
  //   loadFriendList(searchFriend);
  //   },
  //   [searchFriend]
  // );

  const handleUserSearch = (event) => {
    event.preventDefault();
    // if (searchFriend){
    //     loadFriendList(searchFriend) 
    // } 
  };

  const loadFriendList = (name) =>{
    API.findFriendsbyUserName(name)
    .then((res) => {
      // if (!res.data) {
      //   setErr("No results found.");
      // }
      setUserList(res.data)
     })
     .catch(err => console.log(err));
  }

  // useEffect(()=> {
  //   followingPeople(debouncedSearchTerm)
  //   },
  //   [debouncedSearchTerm]
  // );

  const followingPeople = (name) => {
    API.followingPeople({name:name})
    .then(console.log("you are following ", name))
    .catch(err => console.log(err));
    setFollowing(name);
  }

  const alertMessage = (name) =>{
    alert("You are following " + name )
  }

  return (
    <Card>
      <form onSubmit={handleUserSearch}>
        <input
          onChange={handleUserInputChange}
          placeholder="username"
          value={searchFriend}
        />
      </form>
      <div>
        {userList ? 
          (<div>
                <h3>{userList.userName}</h3>
                <button 
                  style={{marginLeft:5}}
                  type="button" 
                  className=" btn btn-primary btn-sm"
                  onClick={() => {
                    followingPeople(searchFriend);
                    alertMessage(searchFriend);
                  }}
                >
                  Follow
                </button>   
          </div>): ("")
          }
        
      </div>
    </Card>
  );
}

export default Test;
