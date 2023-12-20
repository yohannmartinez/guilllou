import styled from "styled-components";
import "swiper/css";

import PageWrap from "../../../components/pageWrap";
import Title from "../../../components/title";

import Layout from "../../../components/layout";
import FadeOnView from "../../../components/fadeOnview";
import LogoWhite from "../../../assets/images/minLogoBlack.png";
import Text from "../../../components/text";
import SideBySide from "../../../components/sideBySide";
import SectionTitle from "../../../components/sectionTitle";

import Demoussage1 from "../../../assets/images/demoussage/demoussage1.png";
import Demoussage2 from "../../../assets/images/demoussage/demoussage2.png";
import Button from "../../../components/button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 200px 0;
`;

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  text-align: center;
  width: 100%;
  max-width: 700px;
`;
const Logo = styled(Text)`
  font-size: 18px;
  color: black;
  font-weight: 600;
  margin-bottom: 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    height: 40px;
    width: 40px;
    background: ${() => `url('${LogoWhite}')`};
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    transform: translate(-50%, -100%);
  }
`;

const ContentWrapper = styled.div`
  @media (min-width: 750px) {
    max-width: 40rem;
  }
`;

const StyledText = styled(Text)`
  margin-top: 1.5rem;

  @media (min-width: 0px) {
    text-align: center;
  }

  @media (min-width: 750px) {
    text-align: left;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  @media (min-width: 0px) {
    text-align: center;
  }

  @media (min-width: 750px) {
    text-align: left;
  }
`;

const Gap = styled.div`
  height: 12em;
`;

const StyledButton = styled(Button)`
  margin-top: 2em;
`;

const Presentation = () => {
  return (
    <Wrapper>
      <PageWrap>
        <FadeOnView>
          <StyledLayout>
            <Logo>Guillou couverture</Logo>
            <StyledTitle>Démoussage</StyledTitle>
            <Gap />
            <SideBySide imagePosition="left" image={Demoussage1}>
              <ContentWrapper>
                <StyledSectionTitle>Le démoussage</StyledSectionTitle>
                <StyledText>
                  Il revêt une importance cruciale d'entretenir régulièrement le
                  toit, en particulier s'il est constitué de tuiles ou
                  d'ardoises, au moins une fois par an. Cette démarche vise à
                  éliminer toutes les impuretés et à procéder à un démoussage
                  afin de se débarrasser des mousses et des lichens qui peuvent
                  s'installer à la surface du toit. Étant donné le rôle
                  prépondérant de la toiture dans le maintien du confort et de
                  l'esthétique de la maison, il est avisé de réaliser les
                  interventions et les travaux appropriés pour préserver son
                  étanchéité et sa durabilité au fil du temps.
                </StyledText>
                <StyledButton
                  background="black"
                  color="white"
                  onClick={() =>
                    (window.location.href = "mailto:me@example.com")
                  }
                >
                  Faire un devis
                </StyledButton>
              </ContentWrapper>
            </SideBySide>
            <Gap />
            <SideBySide imagePosition="right" image={Demoussage2}>
              <ContentWrapper>
                <StyledSectionTitle>Nos expertises</StyledSectionTitle>
                <StyledText>
                  Notre entreprise{" "}
                  <b style={{ color: "black" }}>
                    Guillou Couverture vous propose ses services d'entretien, et
                    met à votre disposition une équipe de démoussage et de
                    nettoyage pour votre toiture.
                  </b>{" "}
                  Experts dans le domaine, cette prestation assurera{" "}
                  <b style={{ color: "black" }}>
                    une toiture plus solide, saine et étanche qui n'aura pas de
                    difficulté à affronter les différentes intempéries et les
                    changements climatiques.
                  </b>
                </StyledText>
              </ContentWrapper>
            </SideBySide>
          </StyledLayout>
        </FadeOnView>
      </PageWrap>
    </Wrapper>
  );
};

export default Presentation;
