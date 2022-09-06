import {MdOutlineEmail,MdShoppingBag} from "react-icons/md";

import img from "../assets/pictures/logo.png";
function SectionOut() {
    return (
      <>
       <div className="flex py-3 flex-row justify-between md:px-24 px-9 w-full bg-white"> 
        <div className="md:flex hidden items-center"> 
        <MdOutlineEmail className="text-sky-900 w-16" size="1.5rem"/> 
        <a>demo@gmail.com </a>
        </div>
        <div className="flex"> 
         <img src={img.src}/>
        </div>
        <div className="md:flex hidden items-center"> 
        <MdShoppingBag  size="1.5rem"/>
        <button className="bg-sky-900 text-white rounded-full px-5"> Order now</button>
        </div>
       </div>
      </>
    );
  }
  
  export default SectionOut;