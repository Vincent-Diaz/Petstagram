import React, {useState} from "react";
// import testPost from "../testPost.json";
// import Post from '../components/Post/Post'
// import Navigation from '../components/Navigation/Navigation'
import API from "../utils/api";

function Test() {
    const [searchUserName, setSearchUserName] = useState("");
    const [result, setResult] = useState([]);

    const handleInputChange =(event) =>{
        setSearchUserName(event.target.value);
    }
     
    const handleFormSubmit = event => {
        event.preventDefault();
        API.findFriendsbyUserName(searchUserName)
        .then(res => setResult(res.data))
        .then(console.log("hey"));
    }

    
    return (
        <>
            <h1>hello</h1>
            <form onClick={handleFormSubmit}>
            <input  onChange={handleInputChange} value={searchUserName}placeholder='username' />
                <button type="submit">Search</button>
            </form>
            <div>
            {/* {result[0].userName} */}
            </div>

            {/* {result.length ? (
                <ul>
                    <li>{result[0].userName}</li>
                </ul>)
                : (<h3>No such username </h3>)} */}
        </>
        )
   
}

export default Test;