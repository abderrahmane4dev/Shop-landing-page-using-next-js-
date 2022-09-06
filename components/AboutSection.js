import img from '../assets/pictures/black-red.png'
function AboutSection() {
    return (
      <>
        <div className='lg:px-24 px-9 py-11 w-full lg:flex   '
        > 
          <div className='lg:w-1/2 w-full py-16'> 
            <h2 className='text-sky-900 my-4 text-2xl font-semibold'> 
            The standard Lorem Ipsum
            </h2>
            <p className='mb-9 text-xl'> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className='bg-sky-900 text-white rounded-full px-6 py-3 hover:bg-yellow-400 duration-500 font-medium '> 
                READ MORE 
            </button>
          </div>
          <div className='lg:w-1/2 w-full'> 
           <img src={img.src}/>
          </div>
        </div>
      </>
    );
  }
  
  export default AboutSection;