import img1 from "../assets/pictures/icon_mony.png"
import img2 from "../assets/pictures/icon_gift.png"
import img3 from "../assets/pictures/icon_car.png"
import IconItem from "./IconItem";
import FooterItem from "./FooterItem";
function Footer() {
    return (
      <>
       <div className=" mt-24 pt-9 w-full bg-sky-900"> 
        <div className="flex font-semibold flex-col md:flex-row w-full px-9 lg:px-24 text-center md:absolute  md:mt-[-70px]  justify-around ">
        <IconItem title="Money Back" path={img1.src}/>
        <IconItem title="Special Gift" path={img2.src}/>
        <IconItem title="Free Shipping" path={img3.src}/>
        </div>


        <div className="flex flex-col w-full md:flex-row px-9 lg:px-24 pt-36 pb-16 "> 
        <FooterItem title="INFORMATION"/>
        <FooterItem title="MY ACCOUNT"/>
        <FooterItem title="ABOUT"/>
        <FooterItem title="CONTACTS"/>
      
     
        </div>
       </div>
      </>
    );
  }
  
  export default Footer;