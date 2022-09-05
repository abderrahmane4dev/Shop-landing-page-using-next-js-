import img1 from "../assets/pictures/icon_mony.png"
import img2 from "../assets/pictures/icon_gift.png"
import img3 from "../assets/pictures/icon_car.png"
function IconItem(props) {
    return (
      <>
         <div className="bg-white shadow-md shadow-gray-700 py-10  px-28 rounded-xl">
        <img className="mx-auto" src={props.path}/>
        <h3 className=" mt-4"> {props.title}</h3>
        </div>
      </>
    )
  }
  
  export default IconItem;