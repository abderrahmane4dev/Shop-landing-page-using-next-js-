import Item from './item.js'
import img1 from '../assets/pictures/shoes.png'
import img2 from '../assets/pictures/underwear.png'
import img3 from '../assets/pictures/pent.png'
import img4 from '../assets/pictures/t_shart.png'
import img5 from '../assets/pictures/jakit.png'
import img6 from '../assets/pictures/helbet.png'
function Under() {
    return (
      <>
      <div className='font-[Poppins]'>
              
            <div className='md:flex flex-wrap sm:grid sm:grid-cols-3 md:justify-between w-full  '> 
        <Item opt="bg-yellow-400" path={img1.src} title="SHOES"/>
        <Item opt="bg-sky-900" path={img2.src} title="UNDERWEAR"/>
        <Item opt="bg-yellow-400" path={img3.src} title="PANTE & SOCKS"/>
        <Item opt="bg-sky-900" path={img4.src} title="TSHIRT & TANKSHOP"/>
        <Item opt="bg-yellow-400" path={img5.src} title="CARDIGANS & JUMPERS"/>
        <Item opt="bg-sky-900" path={img6.src} title="TOP & HAT "/>
       
            </div>
            <div> 

            </div>
            </div>
      </>
    );
  }
  
  export default Under;