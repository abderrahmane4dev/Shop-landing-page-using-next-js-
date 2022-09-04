import NewsItem from "./newsItem.js";
import img1 from "../assets/pictures/news_img1.jpg"
import img2 from "../assets/pictures/news_img2.jpg"
import img3 from "../assets/pictures/news_img3.jpg"
function News() {
    return (
      <>
        <div className="px-9 lg:px-24 font-[Poppins]"> 
        <div> 
        <div className='border-b-4 my-16 border-yellow-400'>
         <h2 className='text-3xl font-bold mt-9 mb-4'> Featured News</h2>
          </div>
        </div>
        <div className="mx-auto">
          <NewsItem path={img1.src}/>
          <NewsItem path={img2.src}/>
          <NewsItem path={img3.src}/>
          </div>
        </div>
      </>
    );
  }
  
  export default News;