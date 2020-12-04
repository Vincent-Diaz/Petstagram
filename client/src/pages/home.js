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
            <div>
                <Navigation {...post0} />
                <form>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="caption">Caption</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary" id="uploadBtn">Upload</button>
                </form>
                <Post {...post0} />
                <Post {...post1} />
                <Post {...post2} />
            </div>
        </>
    );
}

export default Home;