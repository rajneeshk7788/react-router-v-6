import React from 'react'

const Login = () => {
    return (
        <>
            <div className="form">
                <form>
                    <div className="input-container">
                        <input type="text" name="uname" required placeholder='Enter user Name' />
                    </div>
                    <div className="input-container">
                        <input type="password" name="pass" required placeholder='Enter password'/>
                    </div>
                    <div className="button-container">
                        <button>LogIn</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login