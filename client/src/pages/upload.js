import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Icon from 'react-icons-kit'
import {cameraRetro} from 'react-icons-kit/fa/cameraRetro'
import { useStoreContext } from '../utils/GlobalStore';
import Navigation from '../components/Navigation'

function Upload() {

    const [state] = useStoreContext();
    const [imageData, setImgData] = useState('')
    const [upImg, setUp] = useState('')
    // const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [caption, setCaption] = useState('')
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        setName(state.userName)
    },[])

    const handleImageChnage = (event) => {
        setImgData(event.target.files[0])
    }

    const handleDataChange = (event) => {
        let name = event.target.id
        let val = event.target.value
        // if (name === "title") {
        //     setTitle(val)
        // }
         if (name === "caption") {
            setCaption(val)
        }
    }

    const handleFile = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append('file', imageData);
        formData.append('name', name);
        formData.append('caption', caption);

        for (var p of formData) {
            console.log(p);
        }
        axios.post('/api/img/imgup', formData).then((response) => {
            const pObj = {
                // title: title,
                imageUrl: upImg,
                caption: caption
            }
    
            axios.post('api/img/dbimg', pObj).then(res => {
                // console.log(res)
                setRedirect(true)
            })
            console.log(response)
            setUp(response.data)
            setRedirect(true)
        })
    
    }

    //////////add url caption and title to db
    // const addPic = () => {
    //     const pObj = {
    //         // title: title,
    //         imageUrl: upImg,
    //         caption: caption
    //     }

    //     axios.post('api/img/dbimg', pObj).then(res => {
    //         // console.log(res)
    //         setRedirect(true)
    //     })
    // }

    return(
        <div>
            {redirect?<Redirect push to='/home'/>:<div></div>}
            <Navigation />
                <form>
                    <div className="form-group" id="uploadForm">
                        <label htmlFor="imageUp"><h2>Upload Image</h2>
                        <Icon icon={cameraRetro} size={40}/> Click camera icon to choose file
                        {/* <input id='name' name='name' type='text' placeholder="Name" value={name} onChange={handleDataChange} /> */}
                            <input id="imageUp" type={'file'} accept="image/*" name="file" encType="multipart/form-data" onChange={handleImageChnage} />
                        </label>
                        {/* <img id="upImg"src={upImg} alt="pic"/> */}
                    </div>
                    <div className="form-group" id="uploadForm">
                        {/* <label htmlFor="caption"><h3>Caption</h3></label> */}
                        {/* <input type="text" className="form-control" id="exampleInputPassword1" /> */}
                        <textarea id='caption' className="form-control" name='caption' type='text' placeholder="Caption" value={caption}onChange={handleDataChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" id="uploadBtn" onClick={handleFile}>Upload</button>
                </form>
        </div>
    )
}
export default Upload