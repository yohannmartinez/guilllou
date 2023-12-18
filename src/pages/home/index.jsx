import { AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar";
import Header from "./header";
import Presentation from "./presentation";
import Footer from "../../components/footer";
import "swiper/css";
import Partners from "./partners/partners";
import Reviews from "../../components/reviews";

const Home = () => {
  return (
    <>
      <AnimatePresence>
        <Navbar />
        <Header />
        <Presentation />
        <Reviews />
        <Partners />
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default Home;
