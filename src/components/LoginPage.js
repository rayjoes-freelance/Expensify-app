import React from 'react';


export default () => (
    <div>
        <h1>Login Page</h1>
        <form>
            <label><b>Username</b></label>
            <input type='texte' placeholder='Username' required/>
            <label><b>Password</b></label>
            <input type='password' placeholder='Password' required/>
            <button>Login</button>
        </form>
    </div>
);