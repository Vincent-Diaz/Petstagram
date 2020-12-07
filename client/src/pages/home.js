import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Redirect, Link } from "react-router-dom";
// import testPost from "../testPost.json";
import Post from '../components/Post/Post'
// import Icon from 'react-icons-kit'
// import {cameraRetro} from 'react-icons-kit/fa/cameraRetro'
// import {Container} from 'react-bootstrap';
import Navigation from '../components/Navigation';


function Home() {
    // const [imageData, setImgData] = useState('')
    // const [upImg, setUp] = useState('')
    // const [title, setTitle] = useState('')
    // const [name, setName] = useState('')
    // const [caption, setCaption] = useState('')
    // const [redirect, setRedirect] = useState(false)
    const [imgs, setImgs] = useState([])
    // const [refresh, setRefresh] = useState(false)
    // const[showUp, setShow]=useState(true)
    // const post0 = testPost[0]
    // const post1 = testPost[1]
    // const post2 = testPost[2]

    useEffect(() => {
        // console.log(imgs)
        axios.get('/api/img/myPost')
            .then(res => {
                setImgs(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    ////// track change of file input and capture data
    // const handleImageChnage = (event) => {
    //     setImgData(event.target.files[0])
    // }

    ///////// handle form inputs and saves data for sending to db
    // const handleDataChange = (event) => {
    //     let name = event.target.id
    //     let val = event.target.value
    //     if (name === "name") {
    //         setName(val)
    //     }
    //     if (name === "title") {
    //         setTitle(val)
    //     }
    //     else if (name === "caption") {
    //         setCaption(val)
    //     }
    // }

    // const handleFile = (event) => {
    //     event.preventDefault();
    //     var formData = new FormData();
    //     formData.append('file', imageData);
    //     formData.append('name', name);
    //     formData.append('caption', caption);

    //     for (var p of formData) {
    //         // console.log(p);
    //     }
    //     axios.post('/api/img/imgup', formData).then((response) => {
    //         console.log("hello peeps")
    //         axios.get('/api/img/myPost')
    //         .then(res => {
    //             setImgs(res.data)
    //             console.log(res)
    //         })
    //         .catch(err => console.log(err))
    //         console.log(response)
    //         setUp(response.data)
    //         // setRedirect(true)
    //     })
    
    // }

    //////////add url caption and title to db
    // const addPic = () => {
    //     const pObj = {
    //         title: title,
    //         imageUrl: upImg,
    //         caption: caption
    //     }

    //     axios.post('api/img/dbimg', pObj).then(res => {
    //         // console.log(res)
    //         // setRedirect(true)
    //     })
    // }
    return (
            // <div>
            //     <Link to="/test">Test</Link>
            // {/* {redirect?<Redirect push to='/home'/>:<div></div>} */}
            //     <form>
            //         <div className="form-group">
            //             <label htmlFor="imageUp"><h2>Upload Image</h2>
            //             <Icon icon={cameraRetro} size={40}/> Click camera icon to choose file
            //             {/* <input id='name' name='name' type='text' placeholder="Name" value={name} onChange={handleDataChange} /> */}
            //                 <input id="imageUp" type={'file'} accept="image/*" name="file" encType="multipart/form-data" onChange={handleImageChnage} />
            //             </label>
            //             {/* <img id="upImg"src={upImg} alt="pic"/> */}
            //         </div>
            //         <div className="form-group">
            //             {/* <label htmlFor="caption"><h3>Caption</h3></label> */}
            //             {/* <input type="text" className="form-control" id="exampleInputPassword1" /> */}
            //             <textarea id='caption' className="form-control" name='caption' type='text' placeholder="Caption" value={caption}onChange={handleDataChange} />
            //         </div>
            //         <button type="submit" className="btn btn-primary" id="uploadBtn" onClick={handleFile, addPic}>Upload</button>
            //     </form>

                <div>
                    <Navigation />
                    {imgs.length >0 ?
                    imgs.reverse().map((data) => {
                        return(
                            <Post 
                            key={data._id}
                            title= {data.title}
                            imageUrl= {data.imageUrl}
                            caption= {data.caption}
                            />
                        )
                    }):<div></div>}
                </div>
                // {/* <Post {...post0} />
                // <Post {...post1} />
                // <Post {...post2} /> */}
            // </div>
    )
}

export default Home;