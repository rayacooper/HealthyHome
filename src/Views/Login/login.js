import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import * as Actions from "../../Ducks/action_creator"
import Snackbar from "../Snackbar/Snackbar"
import "./login.css"
import httpRequest from "../../shared/services/http_request"

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isErr, setIsErr] = useState(false)
    const errMsg = "Invalid username and/or password."
    const logUserIn = (email, password) => {
        const loginUser = {
            email,
            password
        }
        setIsErr(false)
        httpRequest
            .post("/auth/login", {}, loginUser)
            .then(data => {
                props.setUser(data.user)
                props.history.push("/homehealth")
            })
            .catch(() => {
                setIsErr(true)
            })
    }

    const onSubmit = event => {
        // Prevents the form from reloading the page
        event.preventDefault()

        logUserIn(email, password)
    }
    return (
        <>
            <div className='login-box'>
                <h1 className='login-title'>Healthy Homes</h1>
                <form className='login-values' onSubmit={onSubmit}>
                    <input
                        autoComplete='on'
                        type='text'
                        placeholder='Email'
                        name='setEmail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        autoComplete='on'
                        type='password'
                        placeholder='Password'
                        name='setPassword'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type='submit' onClick={() => logUserIn(email, password)}>
                        Login
                    </button>
                    <Link className='link' to='/register'>
                        Register
                    </Link>
                </form>
            </div>
            {isErr ? <Snackbar message={errMsg} isActive={isErr} setIsActive={setIsErr} /> : null}
        </>
    )
}

export default connect(
    null,
    Actions
)(Login)
