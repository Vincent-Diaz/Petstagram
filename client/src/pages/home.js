import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../utils/api";
import useDebounce from "../utils/debounceHook";
import Post from "../components/Post/Post";
import Navigation from "../components/Navigation";
import { Col, Row } from "../components/Grid";
import Avatar from '@material-ui/core/Avatar';

function Home() {
  const [imgs, setImgs] = useState([]);
  const [searchFriend, setSearchFriend] = useState("");
  const [userList, setUserList] = useState([]);
  const debouncedSearchTerm = useDebounce(searchFriend, 500);
  const [following, setFollowing] = useState([]);

  const handleUserInputChange = (event) => {
    const { value } = event.target;
    setSearchFriend(value);
  };

  useEffect(() => {
    if (!searchFriend) {
      return;
    }

    if (debouncedSearchTerm) {
      loadFriendList(searchFriend);
    }
  }, [debouncedSearchTerm]);

  const loadFriendList = (name) => {
    API.findFriendsbyUserName(name)
      .then((res) => {
        setUserList(res.data);
        console.log("userlist", userList);
      })
      .catch((err) => console.log(err));
  };

  const followingPeople = (name) => {
    API.followingPeople({ name: name })
      .then(console.log("you are following ", name))
      .catch((err) => console.log(err));
    setFollowing(name);
    console.log("following", following);
  };

  const alertMessage = (name) => {
    alert("You are following " + name);
  };
  useEffect(() => {
    axios
      .get("/api/img/myPost")
      .then((res) => {
        setImgs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navigation />
      <div>
        <Row>
          <Col size="md-8 sm-12">
            <div>
              {imgs.length > 0 ? (
                imgs.reverse().map((data) => {
                  return (
                    <Post
                      key={data._id}
                      title={data.title}
                      imageUrl={data.imageUrl}
                      caption={data.caption}
                    />
                  );
                })
              ) : (
                <div></div>
              )}
            </div>
          </Col>
          <Col size="md-4 sm-12">
              <h5>Search other people to connect</h5>
            <input
              onChange={handleUserInputChange}
              placeholder="username"
              value={searchFriend}
            />
            <div style={{borderStyle:'solid 1 px black'}}>
              <br/>
              {userList.map((user) => (
                 <Row key={user._id}>
                 <Col size="md-2">
                   <Avatar alt={user.userName} src="/static/images/avatar/1.jpg" />
                   <h5>{user.userName}</h5>
                 </Col>
                 <Col size="md-2">
                   <button
                     style={{ marginLeft: 5 }}
                     type="button"
                     className=" btn btn-info btn-sm"
                     onClick={() => {
                       followingPeople(searchFriend);
                       alertMessage(user.userName);
                     }}
                   >
                     Follow
                   </button>
                 </Col>
                 <Col size='md-8'></Col>
               </Row>
             ))}
           </div>
         </Col>
       </Row>
     </div>
   </div>
 );
}
export default Home;

