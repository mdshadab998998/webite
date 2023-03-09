import Banner from "./component/Homepage/Banner/Banner";
import Navbar from "./component/Homepage/header/Navbar";
// import Card from "./component/Homepage/cardbanner/Card";
import Cardgroup from "./component/Homepage/cardbanner/Cardgroup";
import Footer from "./component/Homepage/Footer/Footer";

const App=()=>{
  return(
    <>
    <Navbar />
    <Banner src="bannerimage.svg" />
    <Cardgroup />
    <Banner src="coder.gif" cls="center" revr="rev"/>
    <Footer />
    </>
  )
}

export default App;
