

function ProdItem(props) {
    return (
      <>
        <div className="px-5 lg:mt-0 mt-8"> 
        <div className=" bg-gray-200 py-16 px-1.5">
   <img  className="mx-auto" src={props.path}/>
   </div>
   <h4 className="mt-2"> {props.title}</h4>
        </div>
      </>
    );
  }
  
  export default ProdItem;