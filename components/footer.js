import img1 from "../assets/pictures/icon_mony.png"
import img2 from "../assets/pictures/icon_gift.png"
import img3 from "../assets/pictures/icon_car.png"
function Footer() {
    return (
      <>
       <div className=" mt-24 pt-9 w-full bg-sky-900"> 
        <div className="flex font-semibold flex-col md:flex-row w-full px-9 lg:px-24 text-center md:absolute  md:mt-[-70px]  justify-around ">
        <div className="bg-white shadow-sm shadow-black py-10  px-28 rounded">
        <img className="mx-auto" src={img1.src}/>
        <h3 className=" mt-4"> Money Back</h3>
        </div>
        <div className="bg-white shadow-sm shadow-black  py-10  px-28 rounded">
        <img className="mx-auto" src={img2.src}/>
        <h3 className=" mt-4"> Special Gift</h3>
        </div>
        <div className="bg-white shadow-sm shadow-black py-10  px-28 rounded">
        <img className="mx-auto" src={img3.src}/>
        <h3 className="mt-4"> Free Shipping</h3>
        </div>
        </div>


        <div className="flex flex-col w-full md:flex-row px-9 lg:px-24 py-36 "> 
        <div className="text-white  md:my-0 my-6  px-9">
        <h2 className="font-semibold "> INFORMATION</h2>
        <p className="mt-4 leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have 
          suffered alteration in some form, by injected 
          humour, or randomised words which don't look even slightly believable</p>
        </div>
        <div className="text-white md:my-0 my-6 px-9">
        <h2 className="font-semibold"> MY ACCOUNT</h2>
        <p className="mt-4 leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have 
          suffered alteration in some form, by injected 
          humour, or randomised words which don't look even slightly believable</p>
        </div>
        <div className="text-white  md:my-0 my-6  px-9">
        <h2 className="font-semibold"> ABOUT</h2>
        <p className="mt-4 leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have 
          suffered alteration in some form, by injected 
          humour, or randomised words which don't look even slightly believable</p>
        </div>
        <div className="text-white  md:my-0 my-6  px-9">
        <h2 className="font-semibold"> CONTACTS</h2>
        <p className="mt-4 leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have 
          suffered alteration in some form, by injected 
          humour, or randomised words which don't look even slightly believable</p>
        </div>
     
        </div>
       </div>
      </>
    );
  }
  
  export default Footer;