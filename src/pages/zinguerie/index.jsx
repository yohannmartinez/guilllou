import { AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "swiper/css";
import Reviews from "../../components/reviews";
import Presentation from "./presentation";

const Zinguerie = () => {
  return (
    <>
      <AnimatePresence>
        <Navbar bottomBar={true} />
        <Presentation />
        <Reviews />
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default Zinguerie;
