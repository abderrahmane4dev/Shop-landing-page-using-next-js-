import icon from "../assets/icons/menu-icon.svg"
import {AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
import React, { useState } from 'react'
function Navbar() {
  const links =[
    {name:"Home",Link:"/"},
    {name:"About",Link:"/secondary/about"},
    {name:"Products",Link:"/secondary/products"},
    {name:"Fashion",Link:"/secondary/fashion"},
    {name:"News",Link:"/secondary/news"},
    {name:"Contact us",Link:"/"},
  ] 
  const [open,setOpen]=useState(false);
    return (
      <>
        <div className="bg-sky-900 font-[Poppins]">
        <div className="px-0 md:px-9 lg:px-24 flex h-20  justify-content w-full"> 
          <div className="flex md:w-8/12 items-center uppercase font-semibold"> 
            <nav className=" w-full h-full  "> 
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    
     <AiOutlineMenu className="text-black"/>
      </div>
              <ul className={`md:flex text-white justify-around  bg-sky-900 md:bg-transparent md:pt-0 pt-9 md:pb-0 absolute md:static md:z-auto z-50 md:pl-0 pl-7 transition-all duration-500 ease-in ${open ? 'top-20  ':'top-[-490px] '} pb-12 w-full md:h-full` }> 
               
               {links.map((link,index)=> (
              <li key={index}  className="hover:bg-yellow-400 flex items-center md:justify-center md:pb-0 pb-10 w-full md:w-2/12 "> 
                
                <Link  href={`${link.Link}`}>
                {
  link.name 
}
                </Link>

              
              </li>
               ))}
              
               
              </ul>
            </nav>
         
          </div>
          <div className="h-full items-center relative w-10/12  justify-center  float-left md:float-none md:w-1/4 flex"> 
           
           <input className="h-2/5 pl-4 rounded-full focus:outline-none placeholder-grey-500 font-medium w-11/12 border-0  " type="text" placeholder="Search "/>
           <FaSearch className=" z-20 ml-[-30px]  "/>
          </div>
        </div>
        </div>
       
      </>
    );
  }
  
  export default Navbar;