import React, { useEffect, useState } from 'react'
import { getAllUsers } from './apiCalls';

const Users = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchData = async() => {
            const data = await getAllUsers();
            setUsers( data );
        };
        fetchData();
    }, []);

    console.log(users);

    return (
        <div>
            <h2>Users</h2>
            {users && users.map((item, index) => {
                return <div>
                    <img src={item.imageURL} alt="user avatar" />
                    <p>{item.username}</p>
                    <p>{item.email}</p>
                </div>
            })}
        </div>
    )
}

export default Users
