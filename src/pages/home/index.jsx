import { AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar";
import Header from "./header";
import Presentation from "./presentation";
import Footer from "../../components/footer";
import "swiper/css";
import Partners from "./partners/partners";
import Reviews from "../../components/reviews";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Guillou Couverture</title>
        <meta
          name="description"
          content="Située à Saint-Nom-la-Bretèche, Guillou couverture 78 est votre spécialiste pour tous vos projets de couverture, zinguerie et charpente"
        />
        <meta property="og:type" content="siteweb" />
        <meta property="og:title" content="Guillou Couverture" />
        <meta
          property="og:description"
          content="Située à Saint-Nom-la-Bretèche, Guillou couverture 78 est votre spécialiste pour tous vos projets de couverture, zinguerie et charpente"
        />
        <meta name="twitter:creator" content="Guillou Couverture" />
        <meta name="twitter:card" content="siteweb" />
        <meta name="twitter:title" content="Guillou Couverture" />
        <meta
          name="twitter:description"
          content="Située à Saint-Nom-la-Bretèche, Guillou couverture 78 est votre spécialiste pour tous vos projets de couverture, zinguerie et charpente"
        />
      </Helmet>
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
