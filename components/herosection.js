import Image from 'next/image'
import g from "../assets/pictures/banner.jpg"
import t from "../assets/pictures/ban_img.png"
function Hero() {
    return (
      <>
      <div className='w-full bg-cover  font-[Poppins]'
      style={{
        backgroundImage: `url(${g.src})`,
      
      }}>
        <div  className="flex flex-wrap  px-9 lg:px-24 justify-center "
     
      >
            <div className=' w-full md:w-1/2'> 
    <h1 className='text-sky-900 mt-32 font-bold text-7xl'> 
    Romofyi
    </h1>
    <h1 className='mt-5 text-yellow-400 font-normal text-8xl'> 
    Trands 2019
    </h1>
    <h3 className=' mt-9 text-4xl'> 
    A huge fashion collection for ever
    </h3>
    <button className='bg-blue-500 hover:bg-yellow-400  text-lg duration-500 p-5 text-white w-1/2 mt-9 md:w-2/6 rounded-full'> 
      SHOP NOW 
    </button>
            </div>
            <div className=' mt-9 md:mt-0 md:w-1/2'> 
      <img className='mx-auto' src={t.src}/>

            </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Hero;