import loginimage from './assets/login-image.jpg'
import logincontainerimage from './assets/loginimage.png'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import './index.css'
const Login=()=>{

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleLogin = async (username, password) => {
        // console.log(username,password);
        console.log('hi')
        console.log(username);
        console.log(password);
        if (username === '') {
          toast.error('Enter the username');
          return;
        }
        if (password === '') {
          toast.error('Enter the password');
          return;
        }
        
        if(username!=='' && password!=='')
        {
        const data1={username,password}
        try {
          const response = await axios.post('https://apis.ccbp.in/login', JSON.stringify(data1));
          const token=response.data.jwt_token
          console.log(token)
          if(token!==undefined)
          {
            navigate('/home')
          }
          else 
          {
            navigate('/')
          }
        } catch (error) {
          // Provide a meaningful error message to the user
          console.error('Login error:', error);
        }
      }
      };

    return(
        <div className="login-page">
            <img src={loginimage} alt="login-image" className='image'/>
            <div className="login-container">
                <div className="top">
                    <img className="loginimage" src={logincontainerimage} alt="logincontainerImage"/>
                    <h1 className="header">Insta Share</h1>
                </div>
                <div className="authentication">
                    <h1 className="heading">USERNAME</h1>
                    
                    <input type="text" className="text-box" placeholder="Enter UserName..." value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
                    <h1 className='heading'>PASSWORD</h1>
            
                    <input type="password" className="text-box" placeholder="Enter Password..." value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <div className="Error"></div>
                    <br/><br/>
                    <button onClick={()=>handleLogin(username,password)} className="button">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login