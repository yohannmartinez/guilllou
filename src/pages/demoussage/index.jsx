import { AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "swiper/css";
import Reviews from "../../components/reviews";
import Presentation from "./presentation";
import { Helmet } from "react-helmet";

const Demoussage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Guillou Couverture - Démoussage</title>
        <meta
          name="description"
          content="Besoin d'entretien sur votre toiture ? Notre société met à votre service son experience de plus de 20 ans autour de Saint-nom-la-breteche et dans le 78"
        />
        <meta property="og:type" content="siteweb" />
        <meta property="og:title" content="Guillou Couverture" />
        <meta
          property="og:description"
          content="Besoin d'entretien sur votre toiture ? Notre société met à votre service son experience de plus de 20 ans autour de Saint-nom-la-breteche et dans le 78"
        />
        <meta name="twitter:creator" content="Guillou Couverture" />
        <meta name="twitter:card" content="siteweb" />
        <meta name="twitter:title" content="Guillou Couverture" />
        <meta
          name="twitter:description"
          content="Besoin d'entretien sur votre toiture ? Notre société met à votre service son experience de plus de 20 ans autour de Saint-nom-la-breteche et dans le 78"
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

export default Demoussage;
