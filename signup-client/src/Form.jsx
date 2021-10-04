import React from 'react'

const Form = () => {
    return (
        <form>
            <img src="https://i.pravatar.cc/200" alt="random avatar" />

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
                <input type="text" name="password" id="password" />
            </label>

            <input type="submit" value="Signup" />
        </form>
    )
}

export default Form
