
function Item(props) {
    return (
      <>
        <div className={`${props.opt} md:w-1/6 py-9 text-white font-bold text-center`}> 
            <img className="mx-auto" src={props.path}/>
            <h3> {props.title} </h3>
           
        </div>
      </>
    );
  }
  
  export default Item;