import { AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar";
import Header from "./header";
import Presentation from "./presentation";
import Reviews from "./reviews";
import Footer from "../../components/footer";
import "swiper/css";

const Home = () => {
  return (
    <>
      <AnimatePresence>
        <Navbar />
        <Header />
        <Presentation />
        <Reviews />
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default Home;
