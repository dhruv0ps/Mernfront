import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navigator = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center bg-black h-24 max-w-[1700px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Trace.</h1>
      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to='/'>Home</Link></li>
        <li className='p-4'><Link to='/company'>Company</Link></li>
        <li className='p-4'><Link to='/resource'>Resource</Link></li>
        <li className='p-4'><Link to='/contact'>Contact</Link></li>
      </ul>
      
      {/* Mobile Menu Button */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Trace.</h1>
        <li className='p-4 border-b border-gray-600'>
          <Link to='/' onClick={handleNav}>Home</Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link to='/company' onClick={handleNav}>Company</Link>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <Link to='/resource' onClick={handleNav}>Resource</Link>
        </li>
        <li className='p-4'>
          <Link to='/contact' onClick={handleNav}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigator;
