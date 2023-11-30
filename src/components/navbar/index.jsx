import { styled } from "styled-components";
import { motion } from "framer-motion";

import LogoSvg from "../../assets/images/logo.svg";
import PageWrap from "../pageWrap";
import Text from "../text";
import { colors } from "../../styles";
import Button from "../button";

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 15px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  height: 60px;
  width: 60px;
  background: ${() => `url('${LogoSvg}')`};
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
`;

const LinksContainer = styled.div`
  display: flex;
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
  &:hover {
    color: #000;
  }
`;

const Navbar = () => {
  return (
    <Container
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: "1" }}
      transition={{ duration: 0.4, ease: [0.6, 0.01, -0.05, 0.95] }}
    >
      <PageWrap>
        <Wrapper>
          <Logo />
          <LinksContainer>
            <Link>
              <StyledText color={colors.text}>Accueil</StyledText>
            </Link>
            <Link>
              <StyledText color={colors.text}>Couverture</StyledText>
            </Link>
            <Link>
              <StyledText color={colors.text}>Charpente</StyledText>
            </Link>
            <Link>
              <StyledText color={colors.text}>Isolation</StyledText>
            </Link>
            <Link>
              <StyledText color={colors.text}>Zinguerie</StyledText>
            </Link>
            <Link>
              <StyledText color={colors.text}>Ravalement</StyledText>
            </Link>
            <StyledButton
              background={"#000"}
              color={"#fff"}
              onClick={() => {
                console.log("coucou");
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
