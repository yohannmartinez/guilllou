import { AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "swiper/css";
import Reviews from "../../components/reviews";
import Presentation from "./presentation";
import { Helmet } from "react-helmet";

const Zinguerie = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Travaux de zinguerie dans le 78</title>
        <meta
          name="description"
          content="Un projet de zinguerie ? Notre société Guillou couverture met à votre service son experience de plus de 20 ans autour de Saint-nom-la-breteche et dans le 78"
        />
        <meta property="og:type" content="siteweb" />
        <meta property="og:title" content="Guillou Couverture" />
        <meta
          property="og:description"
          content="Un projet de zinguerie ? Notre société Guillou couverture met à votre service son experience de plus de 20 ans autour de Saint-nom-la-breteche et dans le 78"
        />
        <meta name="twitter:creator" content="Guillou Couverture" />
        <meta name="twitter:card" content="siteweb" />
        <meta name="twitter:title" content="Guillou Couverture" />
        <meta
          name="twitter:description"
          content="Un projet de zinguerie ? Notre société Guillou couverture met à votre service son experience de plus de 20 ans autour de Saint-nom-la-breteche et dans le 78"
        />
      </Helmet>
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
