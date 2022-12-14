import React, {useContext} from 'react'
import AuthContext from '../Context/AuthContext'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
 
  return (
    <div>
        <form onSubmit={loginUser}>
             <input type="text" name="username" placeholder="username"/>
             <input type="password" name="password" placeholder="password"/>
             <input type="submit" value="Login"/>
        </form> 
    </div>
  )
}

export default LoginPage