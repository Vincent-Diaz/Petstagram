import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from '../components/Post/Post'
import Navigation from '../components/Navigation';


function Home() {
    const [imgs, setImgs] = useState([])

    useEffect(() => {
        axios.get('/api/img/myPost')
            .then(res => {
                setImgs(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (

        <div className='home'>
            <Navigation />
            {imgs.length > 0 ?
                imgs.reverse().map((data) => {
                    return (
                        <Post
                            key={data._id}
                            title={data.title}
                            imageUrl={data.imageUrl}
                            caption={data.caption}
                        />
                    )
                }) : <div></div>}
        </div>
    )
}

export default Home;