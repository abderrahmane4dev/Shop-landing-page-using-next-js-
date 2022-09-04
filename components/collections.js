import img from '../assets/pictures/fashion.jpg'
function Collection() {
    return (
      <>
        <div className=' w-full lg:h-max bg-contain '
        > 
           <img src={img.src}/>
        </div>
      </>
    );
  }
  
  export default Collection;