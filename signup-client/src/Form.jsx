import React from 'react'
import { SignUpUser } from './apiCalls'

const Form = () => {
    

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        // const userSignUpData = new FormData(e.target);
        // userSignUpData.set("username", userSignUpData.get("username"));
        // userSignUpData.set("email", userSignUpData.get("email"));
        // userSignUpData.set("password", userSignUpData.get("password"));
        // console.log(userSignUpData.values);
        const result = await SignUpUser( userData );
        // if(!result.error) {
        //     history.push("/users");
        // }
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="avatar">
                <img style={{cursor: "pointer"}} src="https://i.pravatar.cc/200" alt="random avatar" />
                <input style={{display: "none"}} type="file" name="avatar" id="avatar" accept="image/*"/>
            </label>

            <label htmlFor="username">
                Username: 
                <input type="text" name="username" id="username" />
            </label>

            <label htmlFor="email">
                Email: 
                <input type="text" name="email" id="email" />
            </label>

            <label htmlFor="password">
                Password: 
                <input type="password" name="password" id="password" />
            </label>

            <input type="submit" value="Signup" />
        </form>
    )
}

export default Form
