import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineLogin, AiOutlineLogout, AiOutlineShoppingCart } from 'react-icons/ai';
import { TbSunFilled, TbMoonFilled } from 'react-icons/tb';
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import Swal from 'sweetalert2'


const Navbar = () => {
    const cart = JSON.parse(localStorage.getItem('productName'));
    const { user, logOut, setTheme, theme } = useContext(AuthContext)

    const toggleDarkMode = () => {
        if (theme === 'light') setTheme('dark');
        else setTheme('light')
    }

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '##30',
            confirmButtonText: 'Log Out'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Success',
                    'Logged out successfully.',
                    'success'
                )
                logOut()
            }
        })
    }

    return (
        <div className="sticky bg-base-100 top-0 z-20">
            <div className="navbar border-b py-5">
                {/* this is the mobile view navbar */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'/'}><li className="hover:text-pink-400 p-2 rounded-xl font-semibold">Home</li></NavLink>
                            <NavLink to={'/all'}><li className="hover:text-pink-400 p-2 rounded-xl font-semibold">Products</li></NavLink>
                            {user && <><NavLink to={'/add'}><li className="hover:text-pink-400 p-2 rounded-xl font-semibold">Add Product</li></NavLink>
                                <NavLink to={'/news'}><li className="hover:text-pink-400 p-2 rounded-xl font-semibold">News</li></NavLink></>}
                        </ul>
                    </div>
                    {/* this is the desktop view navbar */}
                    <a className="flex grow items-center font-bold cursor-default normal-case text-xl"><img className="w-10 rounded-full mr-2" src="https://previews.123rf.com/images/defmorph/defmorph1806/defmorph180600011/103110671-vector-icon-hi-tech-company-logo-design-business-symbol-concept-minimal-line-style-eps-10.jpg" alt="logo" />Brand Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 cursor-pointer">
                        <NavLink to={'/'}><li className="hover:text-pink-400 p-2 rounded-xl font-semibold">Home</li></NavLink>
                        <NavLink to={'/all'}><li className="hover:text-pink-400 p-2 rounded-xl font-semibold">Products</li></NavLink>
                        {user && <><NavLink to={'/add'}><li className="hover:text-pink-400 p-2 rounded-xl font-semibold">Add Product</li></NavLink>
                            <NavLink to={'/news'}><li className="hover:text-pink-400 p-2 rounded-xl font-semibold">News</li></NavLink></>}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && <NavLink to={'/cart'}><h2 tabIndex={1} className="p-2 text-xl rounded-xl hover:bg-pink-100 indicator mr-4"><span className="indicator-item badge badge-secondary">{cart.length}</span> <AiOutlineShoppingCart></AiOutlineShoppingCart></h2></NavLink>}
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <h2 tabIndex={0} className="hover:bg-pink-100 text-xl rounded-xl p-2 mr-4">{user ? <img className="w-8 rounded-full" src={user.photoURL} /> : <AiOutlineUser></AiOutlineUser>}</h2>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <div className="flex items-center gap-1 mb-3 mt-2">
                                <img className="w-10 rounded-full" src={user?.photoURL || 'https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA='} alt="" />
                                <div className="text-xs text-gray-500">
                                    <h2 className="font-bold">{user?.displayName || `user_${parseInt(Math.random() * 1000000)}`}</h2>
                                </div>
                            </div>
                            <hr className="mb-3" />
                            <li><a onClick={toggleDarkMode}>{theme === "light" ? <TbSunFilled></TbSunFilled> : <TbMoonFilled></TbMoonFilled>} Theme</a></li>
                            {!user && <NavLink to={'/login'}><li><a><AiOutlineLogin></AiOutlineLogin>Login</a></li></NavLink>}
                            {user && <NavLink><li><a onClick={handleLogOut}><AiOutlineLogout></AiOutlineLogout>Log Out</a></li></NavLink>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;