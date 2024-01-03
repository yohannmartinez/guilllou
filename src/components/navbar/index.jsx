import { styled } from "styled-components";
import { motion } from "framer-motion";

import LogoSvg from "../../assets/images/minLogo.png";
import MenuSvg from "../../assets/images/Vector.svg";
import PageWrap from "../pageWrap";
import Text from "../text";
import { colors } from "../../styles";
import Button from "../button";
import { useLocation } from "react-router-dom";
import MobileMenu from "./mobile";
import { useState } from "react";

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  border-bottom: ${({ bottomBar }) =>
    bottomBar ? "1px solid #e5e5e5" : "none"};
`;

const Wrapper = styled.div`
  padding: 15px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    padding: 15px 0px;
  }
  @media (max-width: 920px) {
    padding: 15px 0px;
  }
`;

const Logo = styled.div`
  height: 60px;
  width: 60px;
  background: ${() => `url('${LogoSvg}')`};
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 920px) {
    height: 40px;
    width: 40px;
  }
`;

const Menu = styled.div`
  height: 22px;
  width: 22px;
  background: ${() => `url('${MenuSvg}')`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  @media (min-width: 920px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  @media (max-width: 920px) {
    display: none;
  }
`;

const Link = styled.div`
  padding: 0 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-left: 15px;
`;

const StyledText = styled(Text)`
  font-weight: ${(props) => (props.isBold ? "bolder" : "auto")};
  color: ${(props) => (props.isBold ? "black" : "auto")};
  &:hover {
    color: #000;
  }
`;

const Navbar = ({ bottomBar }) => {
  const location = useLocation();
  const path = location.pathname;
  const isCurrentLocation = (route) => route === path;
  const [isMenuShown, setIsMenuShown] = useState(false);

  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };

  return (
    <Container
      bottomBar={bottomBar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: "1" }}
      transition={{ duration: 0.4, ease: [0.6, 0.01, -0.05, 0.95] }}
    >
      <PageWrap>
        <Wrapper>
          <Logo />
          <Menu onClick={toggleMenu} />
          <MobileMenu isShown={isMenuShown} toggleMenu={toggleMenu} />
          <LinksContainer>
            <Link onClick={() => (window.location.href = "/")}>
              <StyledText color={colors.text} isBold={isCurrentLocation("/")}>
                Accueil
              </StyledText>
            </Link>
            <Link onClick={() => (window.location.href = "/couverture")}>
              <StyledText
                color={colors.text}
                isBold={isCurrentLocation("/couverture")}
              >
                Couverture
              </StyledText>
            </Link>
            <Link onClick={() => (window.location.href = "/charpente")}>
              <StyledText
                color={colors.text}
                isBold={isCurrentLocation("/charpente")}
              >
                Charpente
              </StyledText>
            </Link>
            <Link onClick={() => (window.location.href = "/isolation")}>
              <StyledText
                color={colors.text}
                isBold={isCurrentLocation("/isolation")}
              >
                Isolation
              </StyledText>
            </Link>
            <Link onClick={() => (window.location.href = "/zinguerie")}>
              <StyledText
                color={colors.text}
                isBold={isCurrentLocation("/zinguerie")}
              >
                Zinguerie
              </StyledText>
            </Link>
            <Link onClick={() => (window.location.href = "/demoussage")}>
              <StyledText
                color={colors.text}
                isBold={isCurrentLocation("/demoussage")}
              >
                Démoussage
              </StyledText>
            </Link>
            <StyledButton
              background={"#000"}
              color={"#fff"}
              onClick={() => {
                window.open(
                  "https://www.pagesjaunes.fr/pros/50121137",
                  "_blank"
                );
              }}
            >
              Nous contacter
            </StyledButton>
          </LinksContainer>
        </Wrapper>
      </PageWrap>
    </Container>
  );
};

export default Navbar;
