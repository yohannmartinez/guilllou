import styled from "styled-components";
import "swiper/css";

import PageWrap from "../../../components/pageWrap";
import Title from "../../../components/title";

import Layout from "../../../components/layout";
import FadeOnView from "../../../components/fadeOnview";
import LogoWhite from "../../../assets/images/minLogoBlack.svg";
import Text from "../../../components/text";
import SideBySide from "../../../components/sideBySide";
import SectionTitle from "../../../components/sectionTitle";

import Zinguerie1 from "../../../assets/images/zinguerie/zinguerie2.png";
import Zinguerie2 from "../../../assets/images/zinguerie/zinguerie3.png";
import Zinguerie3 from "../../../assets/images/zinguerie/zinguerie1.png";

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
            <StyledTitle>Zinguerie</StyledTitle>
            <Gap />
            <SideBySide imagePosition="right" image={Zinguerie1}>
              <ContentWrapper>
                <StyledSectionTitle>La zinguerie</StyledSectionTitle>
                <StyledText>
                  Le zinc, dans le contexte de la toiture, offre une multitude
                  d'avantages. Principalement reconnu pour sa durabilité et son
                  imperméabilité, ce métal présente une facilité de manipulation
                  lui permettant de s'adapter à diverses formes. Il est utilisé
                  pour orienter efficacement les eaux de pluie à travers des
                  éléments tels que les gouttières et les descentes d'eau,
                  assurant une étanchéité dans les zones où les tuiles et les
                  ardoises ne suffisent pas à une couverture complète.
                </StyledText>
              </ContentWrapper>
            </SideBySide>
            <Gap />
            <SideBySide imagePosition="left" image={Zinguerie2}>
              <ContentWrapper>
                <StyledSectionTitle>Nos expertises</StyledSectionTitle>
                <StyledText>
                  Guillou Couverture propose son expertise dans de multiple
                  interventions en zinguerie. De la préparation et la pose d’un
                  système d’évacuation des eaux de pluies, à l’aménagement des
                  gouttières (gouttière zinc, gouttière alu, gouttière pvc,
                  gouttière plastique…),jusqu'à la rénovation de faîtage.
                </StyledText>
              </ContentWrapper>
            </SideBySide>
            <Gap />
            <SideBySide imagePosition="right" image={Zinguerie3}>
              <ContentWrapper>
                <StyledSectionTitle>Besoin de retouches ?</StyledSectionTitle>
                <StyledText>
                  En effet, avec le temps, les soudures peuvent se dégrader et
                  laisser passer l'humidité. C'est pourquoi notre équipe, engage
                  son expertise pour régler efficacement vos problèmes de
                  zinguerie.
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
