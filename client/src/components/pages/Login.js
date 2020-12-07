import React, { useState, useContext, } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../App'
import M from 'materialize-css'

const Login = () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const PostData = () => {
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            M.toast({ html: "Invalid Email" })
            return
        }
        fetch('/login', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error })
                }
                else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    dispatch({type:"USER", payload:data.user})


                    //can add color later to toast
                    M.toast({ html: "Login Successful" })
                    history.push('/')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>Petstagram</h2>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #1e88e5 blue darken-1"
                    onClick={() => PostData()}
                >
                    Login
               </button>

                <h5>
                    <Link to="/signup">New to Petstagram? Signup</Link>
                </h5>

            </div>
        </div>
    )
}

export default Login