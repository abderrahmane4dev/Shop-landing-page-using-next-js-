import ProdItem from './prodItem.js'
import img1 from "../assets/pictures/shoes1.png"
import img2 from "../assets/pictures/shoes2.png"
import img3 from "../assets/pictures/shoes3.png"
import img4 from "../assets/pictures/shoes4.png"
import img5 from "../assets/pictures/shoes5.png"
import img6 from "../assets/pictures/tisat1.png"
import img7 from "../assets/pictures/tisat2.png"
import img8 from "../assets/pictures/tisat3.png"
import img9 from "../assets/pictures/tisat4.png"
import img10 from "../assets/pictures/tisat5.png"
import img11 from "../assets/pictures/mix1.png"
import img12 from "../assets/pictures/mix2.png"
import img13 from "../assets/pictures/mix3.png"
import img14 from "../assets/pictures/mix4.png"
import img15 from "../assets/pictures/mix5.png"
import bg from "../assets/pictures/product_bg.jpg"
function Products() {
    return (
      <>
        <div className='w-full bg-contain  font-[Poppins] bg-origin-content '
        style={{
          backgroundImage: `url(${bg.src})`,
        
        }}> 
        <div className='px-9 lg:px-24'>
          <div className='border-b-4 my-9 border-yellow-400'>
         <h2 className='text-3xl font-bold mt-16 mb-4'> Featured Products</h2>
          </div>
   
    <div className='flex justify-around  content-around flex-wrap xl:gap-5 xl:grid xl:grid-cols-5'> 
   <ProdItem title="Short Openwork Cardigan $120.00" path={img1.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img2.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img3.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img4.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img5.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img6.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img7.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img8.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img9.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img10.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img11.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img12.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img13.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img14.src}/>
   <ProdItem title="Short Openwork Cardigan $120.00" path={img15.src}/>
   
    </div>
    <div className='mx-auto  text-center'> 
      <button className=' bg-sky-900  text-lg py-2 px-8 text-white  my-9  rounded-full'> 
        See More
      </button>
    </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Products;