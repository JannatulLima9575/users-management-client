import React, { use } from 'react';

const User = ({usersPromise}) => {
        const users = use(usersPromise);
        console.log(users);

        const handleAddUser = e => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const user = { name, email}
            console.log(user);
        }
    return (
        <div>

            <form onSubmit={handleAddUser}>
                <input name='name' type="text"/>
                <br />
                <input name='email' type="email"/>
                <br />
                <input type="submit" value="Add User"/>
            </form>
            
            <div>
                {
                users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default User;