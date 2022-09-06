import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import SectionOut from '../../components/Sectionout'
import Rights from '../../components/Rights'
import Divider from '../../components/divider'
import AboutSection from '../../components/AboutSection'
export default function About() {
    return (
        <>
   
  <SectionOut/>
   <Navbar/>
   <Divider title="About"/>
    <AboutSection/>
   <Footer/>
   <Rights/>
    </>
 
    );
  }