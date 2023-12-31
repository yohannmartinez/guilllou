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

import Isolation1 from "../../../assets/images/isolation/isolation1.png";
import Isolation2 from "../../../assets/images/isolation/isolation2.png";
import Isolation3 from "../../../assets/images/isolation/isolation3.png";
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
  @media (max-width: 600px) {
    height: 7em;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2em;
`;

const ButtonContainer = styled.div`
  display: flex;
  @media (max-width: 750px) {
    justify-content: center;
  }
`;

const Presentation = () => {
  return (
    <Wrapper>
      <PageWrap>
        <FadeOnView>
          <StyledLayout>
            <Logo>Guillou couverture</Logo>
            <StyledTitle>Isolation</StyledTitle>
            <Gap />
            <SideBySide imagePosition="left" image={Isolation1}>
              <ContentWrapper>
                <StyledSectionTitle>
                  L'isolation de vos combles
                </StyledSectionTitle>
                <StyledText>
                  une bonne isolation est importante pour créer un environnement
                  intérieur confortable, économe en énergie et respectueux de
                  l'environnement. En tant qu'experts dévoués dans le domaine de
                  l'isolation des combles, nous sommes là pour transformer votre
                  espace de vie.
                </StyledText>
                <ButtonContainer>
                  <StyledButton
                    background="black"
                    color="white"
                    onClick={() =>
                      (window.location.href = "mailto:0610400001@orange.fr")
                    }
                  >
                    Faire un devis
                  </StyledButton>
                </ButtonContainer>
              </ContentWrapper>
            </SideBySide>
            <Gap />
            <SideBySide imagePosition="right" image={Isolation2}>
              <ContentWrapper>
                <StyledSectionTitle>
                  Notre approche professionnelle
                </StyledSectionTitle>
                <StyledText>
                  Nos professionnels expérimentés effectuent une{" "}
                  <b style={{ color: "black" }}>
                    évaluation approfondie de vos combles
                  </b>{" "}
                  pour déterminer la meilleure solution d'isolation{" "}
                  <b style={{ color: "black" }}>adaptée à vos besoins</b>. Que
                  vous optiez pour une isolation en laine minérale, en cellulose
                  ou tout autre matériau, nous vous garantissons une{" "}
                  <b style={{ color: "black" }}>
                    installation soigneuse et conforme aux normes en vigueur
                  </b>
                  .
                </StyledText>
              </ContentWrapper>
            </SideBySide>
            <Gap />
            <SideBySide imagePosition="left" image={Isolation3}>
              <ContentWrapper>
                <StyledSectionTitle>
                  Un avenir plus confortable et durable
                </StyledSectionTitle>
                <StyledText>
                  Améliorez votre qualité de vie tout en contribuant à la
                  préservation de notre planète. Contactez-nous dès aujourd'hui
                  pour discuter de vos besoins en matière d'isolation des
                  combles.{" "}
                  <b style={{ color: "black" }}>
                    Nous sommes là pour vous guider à chaque étape, de
                    l'évaluation initiale à la réalisation du projet.
                  </b>
                </StyledText>
              </ContentWrapper>
            </SideBySide>
            <Gap />
            <SideBySide imagePosition="right" coordinates={true}>
              <ContentWrapper>
                <StyledSectionTitle>
                  La zone d'activité de notre entreprise
                </StyledSectionTitle>
                <StyledText>
                  Nous intervenons principalement aux alentours de
                  Saint-Nom-la-Bretèche mais sommes actifs dans tout le
                  département des Yvelines (78).
                </StyledText>
                <ButtonContainer>
                  <StyledButton
                    background="black"
                    color="white"
                    onClick={() =>
                      (window.location.href = "mailto:0610400001@orange.fr")
                    }
                  >
                    Faire un devis
                  </StyledButton>
                </ButtonContainer>
              </ContentWrapper>
            </SideBySide>
          </StyledLayout>
        </FadeOnView>
      </PageWrap>
    </Wrapper>
  );
};

export default Presentation;
