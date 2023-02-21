import React, { useState } from 'react'
import './form.css'
const Form = (props) => {
    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstName, lastName, email, password, confirmPassword }
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");
    // }
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <>
            <div className='formRoute'>
                <form onSubmit={ (e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                        {firstName.length < 2 && firstName.length > 0 ? (
                            <p>First Name must be at least 2 characters</p>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" onChange={(e) => setLastName(e.target.value)} />
                        {lastName.length < 2 && lastName.length > 0 ? (
                            <p>Last Name must be at least 2 characters</p>
                        ) : null}
                    </div>
                    <div>

                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} />
                        {email.length < 2 && email.length > 0 ? (
                            <p>Email must be at least 2 characters</p>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                        {password.length < 5 && password.length > 0 ? (
                            <p>Password must be at least 5 characters</p>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="Confirm confirmPassword">Confirm Password</label>
                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        {confirmPassword.length < 5 && confirmPassword.length > 0 ? (
                            
                            <p>Password must be at least 5 characters</p>
                        ) : null}
                    </div>

                        <button>Submit</button>
                </form>
            </div>


        </>

    )
}

export default Form
