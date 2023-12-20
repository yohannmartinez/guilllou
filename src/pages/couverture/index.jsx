import { AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "swiper/css";
import Reviews from "../../components/reviews";
import Presentation from "./presentation";
import Photos from "../../components/photos";
import { photosList } from "./photosList";

const Couverture = () => {
  return (
    <>
      <AnimatePresence>
        <Navbar bottomBar={true} />
        <Presentation />
        <Photos photosList={photosList} />
        <Reviews />
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default Couverture;
