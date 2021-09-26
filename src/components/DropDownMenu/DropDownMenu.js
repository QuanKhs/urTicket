import React from 'react';
import useComponentVisible from 'hooks/useComponentVisible';
import { Link } from 'react-router-dom';
import { IconLogout, IconUser } from 'components/Icons';
import { useDispatch } from 'react-redux';
import { logout } from 'app/authSlice';


const DropDownMenu = (props) => {
    const { avatar } = props;
    const { ref, isVisible, setIsVisible } = useComponentVisible(false);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div
            ref={ref}
            className="relative inline-block text-left"
        >
            <div
                className="avatar-user rounded-full h-14 w-14 flex justify-center items-center cursor-pointer"
                style={{ padding: '1px' }}
                onClick={() => setIsVisible(!isVisible)}
            >
                <img className="h-12 w-12 rounded-full" src={avatar || 'https://ur-ticket-public-bucket.s3.amazonaws.com/0c0f0e89-a499-4138-8032-9b6ad3c217e0-chopper_avatar.png'} alt="avatar" />
            </div>
            {isVisible && (
                <div className="origin-top-right absolute -right-8 top-16 w-36 rounded-md text-center bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div
                        className="text-center"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <Link
                            className="flex items-center px-4 py-2 text-md text-white hover:bg-gray-900  hover:text-white-500 cursor-pointer"
                            role="menuitem"
                            to="/profile/me"
                        >
                            <IconUser width={22} height={22} fillColor={'#dbe2fb'} />
                            <span className="flex flex-col ml-1">My Profile</span>
                        </Link>
                        <Link
                            className="flex items-center px-4 py-2 text-md text-white hover:bg-gray-900 hover:text-white-500 cursor-pointer"
                            role="menuitem"
                        >
                            <IconLogout width={22} height={22} fillColor={'#dbe2fb'} />
                            <span className="flex flex-col ml-1 " onClick={() => handleLogout()}>Logout</span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};
export default DropDownMenu;