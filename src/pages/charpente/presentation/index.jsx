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

import Charpente1 from "../../../assets/images/charpente/charpente1.png";
import Charpente2 from "../../../assets/images/charpente/charpente2.png";
import Charpente3 from "../../../assets/images/charpente/charpente3.png";

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

const Presentation = () => {
  return (
    <Wrapper>
      <PageWrap>
        <FadeOnView>
          <StyledLayout>
            <Logo>Guillou couverture</Logo>
            <StyledTitle>Charpente</StyledTitle>
            <Gap />
            <SideBySide imagePosition="right" image={Charpente1}>
              <ContentWrapper>
                <StyledSectionTitle>La charpente</StyledSectionTitle>
                <StyledText>
                  La charpente constitue un agencement de pièces en bois ou en
                  métal, ayant pour fonction de soutenir et recouvrir votre
                  structure, tout en étant un élément essentiel de votre
                  toiture. Souvent désignée comme l'ossature composée de poteaux
                  et de poutres, elle supporte le poids de la couverture ainsi
                  que les charges verticales telles que la neige ou la glace
                  dues aux conditions climatiques.
                </StyledText>
              </ContentWrapper>
            </SideBySide>
            <Gap />
            <SideBySide imagePosition="left" image={Charpente2}>
              <ContentWrapper>
                <StyledSectionTitle>
                  Nos préstations en charpente
                </StyledSectionTitle>
                <StyledText>
                  Qu'il s'agisse de l'installation d'une charpente pour une
                  nouvelle construction, de la réparation suite à une rénovation
                  de couverture, ou de la protection contre les parasites, nos
                  charpentiers qualifiés sont à votre disposition. Il peut
                  également être préconisé de faire vérifier votre charpente
                  avant l'apparition de problèmes.
                </StyledText>
              </ContentWrapper>
            </SideBySide>
            <Gap />
            <SideBySide imagePosition="right" image={Charpente3}>
              <ContentWrapper>
                <StyledSectionTitle>
                  Nos préstations en charpente
                </StyledSectionTitle>
                <StyledText>
                  Avec de nombreuses années d’expérience, Guillou couverture met
                  à votre service l'expertise de ses charpentiers pour une
                  inspection complète de votre charpente et un devis sans
                  engagement. Votre artisan couvreur charpentier saura vous
                  conseiller sur le type de charpente le plus adapté à votre
                  projet, car nous maîtrisons la conception et possédons une
                  expérience approfondie dans la rénovation de tous types et
                  styles de charpentes.
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