import notfound from './assets/NotFoundimage.png'
import './notfound.css'
import {Link} from 'react-router-dom'
const NotFound=()=>{
    return(
        <div className="not-found">
            <img src={notfound} alt="Not Found" />
            <h1 className='heading'>Page Not Found</h1>
            <span className="para">we are sorry,the page you registered could not be found.</span>
            <span className="para">Please go back to the homepage.</span>
            <button className="button"><Link to='/home' className='link'>Home Page</Link></button>
        </div>
    )
}
export default NotFound;