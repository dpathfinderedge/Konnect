import React, { useState, useContext  } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo  from '../images/logo.png';

import { TransactionContext } from '../context/TransactionContext';


const NavbarItem = ({ title, classProps}) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
}
 
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { currentAccount } = useContext(TransactionContext);

  return (
    <nav className="w-full flex justify-between md:justify-center items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}

        {!currentAccount && (
          <li className="bg-[#2952e3] cursor-pointer py-2 px-7 mx-4 rounded-full hover:bg-[#2546bd]">
          Login
        </li>
        )}
        
      </ul>
      <div className="flex relative">
        {toggleMenu
          ? <AiOutlineClose fontSize={25} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
          : <HiMenu fontSize={25} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
            "
          >
            <li className="text-xl text-white w-full my-2 cursor-pointer">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
              <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
 
export default Navbar;