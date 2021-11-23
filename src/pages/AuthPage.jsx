import {useState} from 'react';
import SignUpForm from "../components/SignUpForm/SignUpForm";
import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm";

export default function AuthPage({setUser}) {
    const [showSignup, setShowSignup] = useState(true);
    return (
        <main>
            <button onClick={() => setShowSignup(!showSignup)}>{showSignup ? 'Login' : 'Sign up'}</button>
            {showSignup ?
            <SignUpForm setUser={setUser}/>
            :
            <LoginForm />}
        </main>
    );
};


