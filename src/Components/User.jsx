import React, { useEffect, useState } from 'react';

const User = ({ usersPromise }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersPromise
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.error('Failed to load users:', error);
            });
    }, [usersPromise]);

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        console.log(user);

        // create user in the server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('data after post', data);
            const newUsers = [...users, data];
            setUsers(newUsers);
            e.target.reset();
        });
    }

    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input name='name' type="text" placeholder="Name" />
                <br />
                <input name='email' type="email" placeholder="Email" />
                <br />
                <input type="submit" value="Add User" />
            </form>
            
            <div>
                {
                    users.map(user => (
                        <p key={user.id}>{user.name} : {user.email}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default User;