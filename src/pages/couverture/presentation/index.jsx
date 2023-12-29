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

import Couvreur1 from "../../../assets/images/couvreur/couvreur1.png";
import Couvreur2 from "../../../assets/images/couvreur/couvreur2.png";
import Couvreur3 from "../../../assets/images/couvreur/couvreur3.png";
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
            <StyledTitle>Couverture</StyledTitle>
            <Gap />
            <SideBySide imagePosition="left" image={Couvreur1}>
              <ContentWrapper>
                <StyledSectionTitle>La couverture</StyledSectionTitle>
                <StyledText>
                  En qualité d'artisan expérimenté, nous intervenons sur une
                  variété de toitures et sous-toitures pour concrétiser vos
                  projets en matière de couverture, toiture et charpente. Nos
                  experts spécialisés offrent des conseils personnalisés pour
                  orienter votre choix vers la couverture la mieux adaptée à vos
                  besoins spécifiques et à votre environnement.
                </StyledText>
                <StyledButton
                  background="black"
                  color="white"
                  onClick={() =>
                    (window.location.href = "mailto:0610400001@orange.fr")
                  }
                >
                  Faire un devis
                </StyledButton>
              </ContentWrapper>
            </SideBySide>
            <Gap />
            <SideBySide imagePosition="right" image={Couvreur2}>
              <ContentWrapper>
                <StyledSectionTitle>
                  Quel que soit votre projet
                </StyledSectionTitle>
                <StyledText>
                  Vous pouvez faire appels à nous pour n'importe quel type de
                  projet. Voici quelques exemples:
                  <b style={{ color: "black" }}>
                    <br />
                    - Réparation et rénovation de toiture
                    <br />
                    - Pose et réparation de gouttière
                    <br />
                    - Nettoyage de la toiture et façade
                    <br />
                    - Fuite et étanchéité de toiture
                    <br />
                    - Pose de velux
                    <br />
                  </b>
                </StyledText>
              </ContentWrapper>
            </SideBySide>
            <Gap />
            <SideBySide imagePosition="left" image={Couvreur3}>
              <ContentWrapper>
                <StyledSectionTitle>
                  Sécurité et professionnalisme
                </StyledSectionTitle>
                <StyledText>
                  Étant donné la nature en hauteur du métier de couvreur, nous
                  mettons à votre disposition des professionnels qualifiés,
                  habitués à travailler en altitude. Ils maîtrisent parfaitement
                  toutes les opérations nécessaires et respectent rigoureusement
                  les normes de sécurité inhérentes à ce type de travaux. Qu'il
                  fasse chaud ou froid, nos artisans couvreurs interviennent
                  tout au long de l'année pour des travaux de couverture ou de
                  toiture. Quelle que soit l'envergure de votre projet, notre
                  équipe dispose du savoir-faire et des équipements nécessaires
                  pour mener à bien les travaux.
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
                <StyledButton
                  background="black"
                  color="white"
                  onClick={() =>
                    (window.location.href = "mailto:0610400001@orange.fr")
                  }
                >
                  Faire un devis
                </StyledButton>
              </ContentWrapper>
            </SideBySide>
          </StyledLayout>
        </FadeOnView>
      </PageWrap>
    </Wrapper>
  );
};

export default Presentation;
