import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../Assets/images/logo.jpg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
    .then()
    .catch()
  }

    
    return (
      <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to ='/home'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link className="justify-between">
                        Parent
                        </Link>
                    </li>
                    <li><Link to = '/blog'>Blog</Link></li>
                </ul>
                </div>
                <img className= "me-3" src={image} alt="" />

                <Link className="btn btn-ghost uppercase text-xl">Home Food</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li><Link to='/' className='mr-5'>Home</Link></li>
                <li tabIndex={0}>
                    <Link className='mr-5'>Parent</Link>
                </li>
                <li><Link to='/blog' className='mr-5'>Blog</Link></li>
                <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
            <div className='d-flex align-items-center'>
            <>
            {
              user?.uid ? 
              <>
            {user?.displayName}
            <button className="btn btn-error" onClick={handleLogout}>Log Out</button>
              </>
              :
              <>
              
              <form className="d-flex">
            <Link to = '/register'><button type="button" className="btn btn-outline-info btn-lg me-2">Register</button></Link>
          </form>
          <form className="d-flex">
            <Link to = '/login'><button type="button" className="btn btn-outline-info btn-lg me-2">Login</button></Link>
          </form>
              
              </>

            }
            
            </>

            </div>
            <div className="navbar-end">
                <button className="btn btn-warning hover:bg-black hover:text-white hover:border-black text-[15px] font-semibold normal-case">Restaurant Search</button>
            </div>
        </div>

    );
};

export default Header;