import React from "react";
import testPost from "../testPost.json";
import Post from '../components/Post/Post'
import Navigation from '../components/Navigation/Navigation'


function Home() {
    const post0 = testPost[0]
    const post1 = testPost[1]
    const post2 = testPost[2]
    return (
        <>
            <Navigation {...post0} />
           <Post {...post0}/> 
           <Post {...post1}/>
           <Post {...post2}/>
        </>
    );
}

export default Home;