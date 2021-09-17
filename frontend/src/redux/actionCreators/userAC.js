import { REMOVE_USER, SET_USER } from "../types/userTypes"

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  }
}

export const getFormUserData = (name, email, password) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/v1/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name,
      email,
      password,
    })
  })
  const data = await response.json()
  dispatch(setUser(data))
}

export const getFormUserDataAuth = (email, password) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data));
};
