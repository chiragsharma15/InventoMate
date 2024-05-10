import LandingHeader from "../components/LandingHeader";
import GetStarted from "../components/GetStarted";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
function LandingPage() {
    return (
        <>
        <Navbar/>
        <LandingHeader />
        <GetStarted />
        <GetInTouch />
        <Footer/>
        </>
    
      )
}

export default LandingPage;