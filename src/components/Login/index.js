// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const isUserAuthenticated = () => {
    const jwtTokenValue = Cookies.get('jwt_token')
    return jwtTokenValue !== undefined
  }

  const onLogin = async () => {
    const loginUrl = 'https://apis.ccbp.in/login'
    const loginRequestOptions = {
      method: 'POST',
      body: JSON.stringify({
        username: 'rahul',
        password: 'rahul@2021',
      }),
    }

    const loginResponse = await fetch(loginUrl, loginRequestOptions)
    const responseData = await loginResponse.json()

    if (loginResponse.ok) {
      const {jwtToken} = responseData.jwt_token

      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = props
      history.replace('/')
    }
  }

  const userIsAuthenticated = isUserAuthenticated()

  if (userIsAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-bg-container">
      <h1 className="login-header">Please Login</h1>
      <button type="button" className="login-button" onClick={onLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login