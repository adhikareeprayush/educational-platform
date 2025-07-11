import Enrollment from "../../components/HomePage/Enrollment/Enrollment";
import Testimonials from "../../components/HomePage/Testimonials/Testimonials";
import Hero from "../../components/HomePage/Hero/Hero";
import SessionAnnouncement from "../../components/HomePage/SessionAnnouncement/SessionAnnouncement";
// import WhyUs from "../../components/HomePage/WhyUs/WhyUs";
import FAQ from "../../components/Shared/FAQ/FAQ";
import CustomerSupport from "../../components/Shared/CustomerSupport/CustomerSupport";
import { Helmet } from "react-helmet-async";
import UpcomingCourses from "../../components/HomePage/UpcomingCourses/UpcomingCourses";
import WhyPMGurukkul from "../../components/HomePage/WhyPMGurukkul/WhyPMGurukkul";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PMGURUKKUL | Achieve Digital Excellence</title>
      </Helmet>
      <Hero />
      <UpcomingCourses />
      <Enrollment />
      <SessionAnnouncement />
      {/* <WhyUs /> */}
      <WhyPMGurukkul/>
      <Testimonials />
      <FAQ />
      <CustomerSupport />
    </div>
  );
};

export default Home;
