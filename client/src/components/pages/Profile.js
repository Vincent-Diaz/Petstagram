import React from 'react'

const Profile = () =>{
    return (
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div  style={{display:"flex", justifyContent:"space-around", margin:"18px 0px", borderBottom:"1px solid gray"}}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1546458904-143d1674858d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
                    <h4>Zinc</h4>
                    <div style={{display:"flex", justifyContent:"space-between", width:"110%"}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>
            
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1546458904-143d1674858d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1546458904-143d1674858d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1546458904-143d1674858d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1546458904-143d1674858d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1546458904-143d1674858d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            </div>
        </div>
    )
}

export default Profile