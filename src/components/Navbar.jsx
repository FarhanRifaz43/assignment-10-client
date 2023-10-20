import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineLogin } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const navLinks = <>
    <NavLink><li><a>Home</a></li></NavLink>
    <NavLink><li><a>Products</a></li></NavLink>
    <NavLink><li><a>Add Product</a></li></NavLink>
    <NavLink><li><a>My Cart</a></li></NavLink>
    <NavLink><li><a>My Profile</a></li></NavLink>
</>

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    const {user} = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            <div className="navbar bg-base-100 border-b py-5">
                {/* this is the mobile view navbar */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* this is the desktop view navbar */}
                    <a className="flex items-center font-bold cursor-default normal-case text-xl"><img className="w-10" src="https://previews.123rf.com/images/defmorph/defmorph1806/defmorph180600011/103110671-vector-icon-hi-tech-company-logo-design-business-symbol-concept-minimal-line-style-eps-10.jpg" alt="logo" />Brand Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost text-lg hover:bg-pink-100 rounded-full mr-4"><AiOutlineUser></AiOutlineUser></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <div className="flex items-center gap-1 mb-3 mt-2">
                                <img className="w-10 rounded-full" src={user.photoURL} alt=""/>
                                <div className="text-xs text-gray-500">
                                    <h2 className="font-bold">{user.displayName}</h2>
                                    <h2>{user.email}</h2>
                                </div>
                            </div>
                            <hr className="mb-3" />
                            <div className="flex justify-between items-center">
                            <NavLink><li><a>Dark theme</a></li></NavLink><input onClick={toggleTheme} type="checkbox" className="toggle toggle-warning ml-5"/>
                            </div>
                            <NavLink to={'/login'}><li><a><AiOutlineLogin></AiOutlineLogin>Login</a></li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;