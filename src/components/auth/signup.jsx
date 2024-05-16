import React from 'react'

export default function Signup() {
  return (
    <>
    <div>
        <h2> login</h2>
        <form action="logim">
            <label htmlFor="username" >Username</label>
            <input type="username" required placeholder='username'/>
            <label htmlFor="email" >Email</label>
            <input type="email" required placeholder='Email '/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
        </form>
    </div>
    </>
  )
}
