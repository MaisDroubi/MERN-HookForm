import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confpassword };
        console.log("Welcome", newUser);
    };

    return (
        <div>
            <form onSubmit={createUser}>
                <div className="form-group">
                <label htmlFor="" className="form-group">First Name:
                    <input type="text" name="firstname" value={UserForm.firstName} onChange={(e) => setFirstname(e.target.value)} />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="" className="form-group">Last Name:                </label>
                    <input type="text" name="lastname" value={UserForm.lastName} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor="" className="form-group">Email:</label>
                    <input type="email" name="email" value={UserForm.email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor="" className="form-group">Password:</label>
                    <input type="password" name="password" value={UserForm.password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor="" className="form-group">Confirm Password:</label>
                    <input type="password" name="confPassword" value={UserForm.confpassword} onChange={(e) => setConfpassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h3>Your form data</h3>
            <p>firstName {firstname}</p>
            <p>lastName {lastname}</p>
            <p>email {email}</p>
            <p>password {password}</p>
            <p>confirm Password {confpassword}</p>
        </div>
    );
};

export default UserForm;
