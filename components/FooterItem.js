
function FooterItem(props) {
    return (
      <>
         <div className="text-white  md:my-0 my-6  px-9">
        <h2 className="font-semibold "> {props.title}</h2>
        <p className="mt-4 leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have 
          suffered alteration in some form, by injected 
          humour, or randomised words which don't look even slightly believable</p>
        </div>
      </>
    )
  }
  
  export default FooterItem;