import React from 'react';
import { useEffect, useState } from 'react'
import { getFormUserDataAuth } from '../../redux/actionCreators/userAC';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SignIn() {
  const dispatch = useDispatch()
  const history = useHistory();
  const HomeButton = () => {
    history.push("/");
  }
  const user = useSelector(state => state.user)

  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const inputHandlerEmail = (event) => {
    setInputEmail(event.target.value)
  }
  const inputHandlerPassword = (event) => {
    setInputPassword(event.target.value)
  }

  useEffect(() => {
    if (user.id) {
      localStorage.setItem('name', user.name)
      HomeButton();
    }
  }, [user]);

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(getFormUserDataAuth(inputEmail, inputPassword))
  }

  return (
    <div className='d-flex justify-content-center'>
      <form className='w-25' onSubmit={submitHandler}>
        <div className="mb-3 mt-3">
          <input type="email" onChange={inputHandlerEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' />
        </div>
        <div className="mb-3">
          <input type="password" onChange={inputHandlerPassword} className="form-control" id="exampleInputPassword1" placeholder="password" />
        </div>
        <button type="submit" className="btn btn-secondary">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
