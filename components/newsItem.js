function NewsItem(props) {
    return (
      <>
        <div className="lg:flex lg:w-3/4 mx-auto mt-9  ">
        <div className="w-full lg:w-1/2"> 
            <img className="w-full lg:min-h-full" src={props.path}/>
        </div>
        <div className="w-full lg:w-1/2 lg:px-9 flex flex-col justify-around "> 
            <h2 className="text-2xl lg:my-0 my-5 font-bold"> Specimen book. It has survived not only five </h2>
            <div className="flex justify-between underline decoration-yellow-400 underline-offset-4"> 
                <a> 7 july 2019 </a>
                <a> like comment  </a>
            </div>
            <p className="text-lg self-end font-normal ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        </div>
      </>
    );
  }
  
  export default NewsItem;