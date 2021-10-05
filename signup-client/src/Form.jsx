import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { SignUpUser } from './apiCalls';

const Form = () => {
    const history = useHistory();
    const [image, setImage] = useState();
    const fileInputRef = useRef();

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const userData = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            imageURL: image
        };
        
        const result = await SignUpUser( userData );

        if(!result.error) {
            history.push("/users");
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="avatar">
                Add Own Image
                <img style={{cursor: "pointer", objectFit: "cover"}} src={image ? image : "https://i.pravatar.cc/200"} alt="random avatar"/>
                <input style={{display: "none"}} type="file" name="avatar" id="avatar" accept="image/*" ref={fileInputRef} onChange={(e) => imageHandler(e)}/>
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
