import Header from "../components/Landing/Header/Header";
import FooterMobile from "../components/Landing/FooterMobile";

// import Footer from "../components/Landing/Footer";

// import Page5 from "../components/Landing/Page5/Page5";
// import Page3 from "../components/Landing/Page3.jsx/Page3";
// import Page7 from "../components/Landing/Page7/Page7";
// import Page6 from "../components/Landing/Page6.jsx/Page6";

// import FrequentlyQuestions from "../components/Landing/FrequentlyQuestions/FrequentlyQuestions";
// import ContactUs from "../components/Landing/ContactUs/ContactUs";

// import MaintContent from "../components/Landing/MainContent/MaintContent";
// import MaintContent2 from "../components/Landing/MainContentP2/MaintContent2";
import MaintContent3 from "../components/Landing/MainContentP2Mobile/MaintContent3";

function Landing() {
  return (
    <div>
      <Header />
      {/* <MaintContent2 /> */}
      <MaintContent3 />
      {/* <FrequentlyQuestions /> */}
      {/* <ContactUs /> */}

      <FooterMobile />
      {/* <Footer /> */}

      {/* <Page6 /> */}
      {/* <Page3 /> */}
      {/* <Page7 /> */}
      {/* <Page5 /> */}
    </div>
  );
}

export default Landing;
