import styled from "styled-components";
import ImageLogo from "../../assets/images/logoWhite.svg";
import SectionTitle from "../sectionTitle";
import Text from "../text";

const Container = styled.div`
  background: black;
  padding: 10em 10em;
  border-radius: 4em 4em 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 300px;
`;

const Logo = styled.img`
  height: 150px;
  margin-right: 20em;
  margin-bottom: 5em;
`;

const Texts = styled.div`
  display: flex;
  gap: 10em;
  flex: 1;
  justify-content: center;
  @media (max-width: 650px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;
const Section = styled.div``;

const StyledTitle = styled(Text)`
  color: white;
  font-weight: bold;
  margin-bottom: 1em;
`;

const Link = styled(Text)`
  color: #d3d3d3;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Logo src={ImageLogo} />
      <Texts>
        <Section>
          <StyledTitle>Lien Utiles</StyledTitle>
          <Link>Accueil</Link>
          <Link>Couverture</Link>
          <Link>Charpente</Link>
          <Link>Isolation</Link>
          <Link>Zinguerie</Link>
          <Link>Démoussage</Link>
        </Section>
        <Section>
          <StyledTitle>Nous Contacter</StyledTitle>
          <Link onClick={() => window.open("tel:+33630587266", "_self")}>
            Téléphone
          </Link>
          <Link
            onClick={() => (window.location.href = "mailto:me@example.com")}
          >
            Adresse e-mail
          </Link>
          <Link
            onClick={() => {
              window.open("https://www.pagesjaunes.fr/pros/50121137", "_blank");
            }}
          >
            Pages Jaunes
          </Link>
        </Section>
        <Section>
          <StyledTitle>Légal</StyledTitle>
          <Link>Politique de confidentialité</Link>
          <Link>Mentions légales</Link>
        </Section>
      </Texts>
    </Container>
  );
};

export default Footer;
