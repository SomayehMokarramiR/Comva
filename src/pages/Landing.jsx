// import Footer from "../components/Landing/Footer";
// import ContactUs from "../components/Landing/ContactUs/ContactUs";
import FooterMobile from "../components/Landing/FooterMobile";
import FrequentlyQuestions from "../components/Landing/FrequentlyQuestions/FrequentlyQuestions";
import Header from "../components/Landing/Header/Header";
// import MaintContent from "../components/Landing/MainContent/MaintContent";
// import MaintContent2 from "../components/Landing/MainContentP2/MaintContent2";
// import MaintContent3 from "../components/Landing/MainContentP2Mobile/MaintContent3";

function Landing() {
  return (
    <div>
      <Header />
      {/* <MaintContent /> */}
      {/* <MaintContent2 /> */}
      {/* <MaintContent3 /> */}
      <FrequentlyQuestions />
      {/* <ContactUs /> */}
      <FooterMobile />
      {/* <Footer /> */}
    </div>
  );
}

export default Landing;
