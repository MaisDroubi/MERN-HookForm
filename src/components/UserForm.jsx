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
     const firstNameValid = (firstname) => {
        if(firstname.length <2){
            return false;
        }
        return true;
    }
    const lastNameValid = (lastname) => {
        if(lastname.length <2){
            return false;
        }
        return true;
    }
    const emailValid = (email) => {
        if(email.length <5){
            return false;
        }
        return true;
    }
    const passwordValid = (pw) => {
        if(pw.length <8){
            return false;
        }
        return true;
    }
    const passwordMatch = (password, confirm) => {
        if(password === confirm){
            return true;
        }
        return false;
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div className="form-group">
                <label htmlFor="" className="form-group">First Name:</label>
                    <input type="text" name="firstname" value={UserForm.firstName} onChange={(e) => setFirstname(e.target.value)} />
                    {firstNameValid(firstname) ? null : <p>firstname must be at least 2 characters</p>}
                </div>
                <div className="form-group">
                <label htmlFor="" className="form-group">Last Name:</label>
                    <input type="text" name="lastname" value={UserForm.lastName} onChange={(e) => setLastname(e.target.value)} />
                    {lastNameValid(lastname) ? null : <p>lastname must be at least 2 characters</p>}
                </div>
                <div className="form-group">
                <label htmlFor="" className="form-group">Email:</label>
                    <input type="email" name="email" value={UserForm.email} onChange={(e) => setEmail(e.target.value)} />
                    {emailValid(email) ? null : <p>email must be at least 5 characters</p>}
                </div>
                <div className="form-group">
                <label htmlFor="" className="form-group">Password:</label>
                    <input type="password" name="password" value={UserForm.password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordValid(password) ? null : <p>password must be at least 8 characters</p>}
                </div>
                <div className="form-group">
                <label htmlFor="" className="form-group">Confirm Password:</label>
                    <input type="password" name="confPassword" value={UserForm.confpassword} onChange={(e) => setConfpassword(e.target.value)} />
                    {passwordValid(password) ? null : <p>password must be at least 8 characters</p>}
                    {passwordMatch(password, confpassword) ? null : <p>passwords must match!</p>}
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
