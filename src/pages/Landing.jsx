import Footer from "../components/Landing/Footer";
// import Header from "../components/Landing/Header/Header";
import HeaderMobile from "../components/Landing/HeaderMobile/Header";
// import MaintContent from "../components/Landing/MainContent/MaintContent";
// import MaintContent2 from "../components/Landing/MainContentP2/MaintContent2";
import MaintContent3 from "../components/Landing/MainContentP2Mobile/MaintContent3";

function Landing() {
  return (
    <div>
      {/* <Header /> */}
      {/* <MaintContent /> */}
      {/* <MaintContent2 /> */}
      <HeaderMobile />
      <MaintContent3 />
      <Footer />
    </div>
  );
}

export default Landing;
