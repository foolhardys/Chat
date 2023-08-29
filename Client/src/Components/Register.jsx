import React, { useState } from 'react'

const Register = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = ()=>{

    }

    return (
        <div className='bg-gray-200 h-screen flex items-center justify-center gap-3 flex-col'>
            <form
                className='flex bg-gray-500 flex-col gap-5 p-8 rounded shadow-sm border w-80 '
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder='username...'
                    className=' p-2 rounded w-full'
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='password...'
                    className=' p-2 rounded w-full'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className='p-2 rounded text-md font-semiboldshadow-md bg-blue-500 hover:bg-blue-600 w-full'
                >Register</button>
            </form>
        </div>
    )
}

export default Register