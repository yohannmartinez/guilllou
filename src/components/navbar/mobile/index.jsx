import styled from "styled-components";
import Text from "../../text";
import { colors } from "../../../styles";
import Button from "../../button";
import { useLocation } from "react-router-dom";
import CloseIcon from "../../../assets/images/Frame.svg";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  top: 0;
  left: ${({ isShown }) => (isShown ? "0" : "100vw")};
  z-index: 100;
  transition: 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.div`
  padding: 0 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  width: fit-content;
  font-size: 15px;
`;

const StyledText = styled(Text)`
  font-weight: ${(props) => (props.isBold ? "bolder" : "auto")};
  color: ${(props) => (props.isBold ? "black" : "auto")};
  font-size: 15px;
  &:hover {
    color: #000;
  }
`;

const CloseButton = styled.div`
  height: 30px;
  width: 30px;
  background: ${() => `url('${CloseIcon}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const MobileMenu = ({ isShown, toggleMenu }) => {
  const location = useLocation();
  const path = location.pathname;
  const isCurrentLocation = (route) => route === path;
  return (
    <Container isShown={isShown}>
      <CloseButton onClick={toggleMenu} />
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
            window.open("https://www.pagesjaunes.fr/pros/50121137", "_blank");
          }}
        >
          Nous contacter
        </StyledButton>
      </LinksContainer>
    </Container>
  );
};

export default MobileMenu;
