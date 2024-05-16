import React from 'react'

export default function login() {
  return (
    <>
    <div>
        <h2> login</h2>
        <form action="logim">
            <label htmlFor="email" >Email</label>
            <input type="email" required placeholder='Email '/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
        </form>
    </div>
    </>
  )
}
