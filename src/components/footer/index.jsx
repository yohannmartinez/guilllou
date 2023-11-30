import styled from "styled-components";
import ImageLogo from "../../assets/images/logoWhite.svg";

const Container = styled.div`
  height: 30em;
  background: black;
  padding: 10em 10em;
  border-radius: 4em 4em 0 0;
`;

const Logo = styled.img`
  height: 150px;
`;

const Footer = () => {
  return (
    <Container>
      <Logo src={ImageLogo} />
    </Container>
  );
};

export default Footer;
