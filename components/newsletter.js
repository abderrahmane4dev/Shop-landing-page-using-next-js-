function Newsletter() {
    return (
      <>
        <div className="lg:px-24 px-9 mt-24 lg:flex "> 
            <div className="px-5 text-center lg:w-1/2"> 
              <h1 className=" md:py-0 py-4 text-3xl font-bold "> 
                Subscribe to our newsletter
              </h1>
            </div>  
            <div className="flex px-9 lg:w-1/2 flex-col"> 
                  <input className="w-full border-2 border-black py-4 px-5 place-self-end rounded-full" type="email" placeholder="Enter your email" />
                  <button className="mt-3 rounded-full right place-self-end text-white font-normal py-3  w-1/4 bg-sky-900"> Subscribe</button>
            </div>
        </div>
      </>
    );
  }
  
  export default Newsletter;