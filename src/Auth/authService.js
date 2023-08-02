import axios from 'axios'

// const API_URL = '/api/users/'

//register user
const register = async (userData) => {
  try {
    const response = await axios.post(
      'https://dav-l8ju.onrender.com/api/v1/auth/signup',
      userData
    )

    console.log(response)
    localStorage.setItem('user', JSON.stringify(response.data))

    return response.data
  } catch (error) {
    console.log(error.response)
  }

  // if(response.data){
  // localStorage.setItem('user', JSON.stringify(response.data))
  // }
}

//login user
const login = async (userData) => {
  try {
    const response = await axios.post(
      'https://dav-l8ju.onrender.com/api/v1/auth/login',
      userData
    )

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
  } catch (error) {
    console.log(error.response)
  }
}

const logout = () => {
  // logout user
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
