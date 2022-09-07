
function Divider(props) {
    return (
      <>
        <div className=' w-full py-7 text-2xl md:text-3xl text-center bg-amber-400 text-white font-bold '
        > 
           <h1>{props.title} </h1>
        </div>
      </>
    );
  }
  
  export default Divider;