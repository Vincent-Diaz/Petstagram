import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
        const history = useHistory()
        const [name,setName] = useState('')
        const [password,setPassword] = useState('')
        const [email,setEmail] = useState('')
        const PostData = () =>{
            if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
                M.toast({html: "Invalid Email"})
                return
            }
            fetch('/signup',{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    password,
                    email
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    M.toast({html:data.error})
                }
                else{
                    //can add color later to toast
                    M.toast({html:data.message})
                    history.push('/login')
                }
            }).catch(err=>{
                console.log(err)
            })
        }
        
    return (
        <div className="mycard">
            <div className="card auth-card">
               <h2>Petstagram</h2>
               <input 
               type="text"
               placeholder="name"
               value={name}
               onChange={(e)=>setName(e.target.value)}
               />
               <input 
               type="text"
               placeholder="email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />
               <input 
               type="text"
               placeholder="password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               />
               <button className="btn waves-effect waves-light #1e88e5 blue darken-1"
               onClick={()=>PostData()}
               >
                   Signup
               </button>

                <h5>
                   <Link to="/login">Already have an account ?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup