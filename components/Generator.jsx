import React, { useState , useRef} from 'react'

const Generator = () => {
    const [password, setPassword] = useState(null);
    const length = useRef(8);
    const [success, setsuccess] = useState(false);
    const [success2, setsuccess2] = useState(false);

    const generatePassword = () => {
        if(length.current.value < 6 || length.current.value > 100) return alert('Please enter a number between 6 and 100');

        var pass = '';
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$@?&';
        for(var i = 0; i < length.current.value; i++){
            var random = Math.floor(Math.random() * chars.length + 1);
            pass += chars.charAt(random)
        }
        setsuccess(true);
        setInterval(() => {
            setsuccess(false);
        }, 2000);
        setPassword(pass);
    }

    const copyPassword = () => {
        if(!password) return alert('Generate a password first');
        navigator.clipboard.writeText(password);
        setsuccess2(true);
        setInterval(() => {
            setsuccess2(false);
        }, 2000);
    }

    return (
        <div className='container'>
            <input ref={length} />
            <button className={`btn ${success && 'success'}`} onClick={generatePassword}>Generate A Random Password</button>
            <div className="result">
                {password && <h1>
                    Your Password Is: {password}
                </h1>}
            </div>
            <button className={`btn ${success2 && 'success2'}`} onClick={copyPassword}>Copy To Clipboard</button>
        </div>
    )
}

export default Generator