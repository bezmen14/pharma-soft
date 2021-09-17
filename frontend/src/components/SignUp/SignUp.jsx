import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFormUserData } from '../../redux/actionCreators/userAC';
import React from 'react';
import { useHistory } from 'react-router-dom';

function SignUp() {
  const dispatch = useDispatch()
  const history = useHistory();
  const user = useSelector(state => state.user)

  const [inputUser, setInputUser] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const inputHandlerName = (event) => {
    setInputUser(event.target.value)
  }
  const inputHandlerEmail = (event) => {
    setInputEmail(event.target.value)
  }
  const inputHandlerPassword = (event) => {
    setInputPassword(event.target.value)
  }

  const HomeButton = () => {
    history.push("/");
  }

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(getFormUserData(inputUser, inputEmail, inputPassword))
    setInputUser('')
    setInputEmail('')
    setInputPassword('')
  }
  useEffect(() => {
    if (user.id) {
      localStorage.setItem('name', user.name)
      HomeButton()
    }
  }, [user]);

  return (
    <div className='d-flex justify-content-center'>
      <form className='w-25' onSubmit={submitHandler}>
        <div className="mb-3 mt-3">
          <input type="text" onChange={inputHandlerName} className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='login' />
        </div>
        <div className="mb-3 mt-3">
          <input type="email" onChange={inputHandlerEmail} className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' />
        </div>
        <div className="mb-3">
          <input type="password" onChange={inputHandlerPassword} className="form-control" name="password" id="exampleInputPassword1" placeholder="password" />
        </div>
        <button type="submit" className="btn btn-secondary">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
