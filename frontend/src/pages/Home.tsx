import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import InfoBox from "../components/InfoBox";
import Testimonials from "../components/Testimonials";
import { useAuth } from "../context/AuthProvider";

function Home() {
  const { signOut } = useAuth();

  return (
    <>
      <HeroImage />
      <InfoBox />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
