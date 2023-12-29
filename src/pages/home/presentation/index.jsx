import { styled } from "styled-components";
import PageWrap from "../../../components/pageWrap";
import Title from "../../../components/title";
import FadeOnView from "../../../components/fadeOnview";
import Layout from "../../../components/layout";
import SideBySide from "../../../components/sideBySide";
import SectionTitle from "../../../components/sectionTitle";
import Text from "../../../components/text";
import ImagePresentation from "../../../assets/images/presentation.png";
import Garantie from "../../../assets/images/garantie.png";
import ZoneActivite from "../../../assets/images/zoneActivite.png";
import Button from "../../../components/button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
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
  height: 10em;
`;
const StyledButton = styled(Button)`
  margin-top: 2em;
`;
const Presentation = () => {
  return (
    <Wrapper>
      <PageWrap>
        <Layout>
          <Gap />
          <FadeOnView>
            <SideBySide iFrameLink={"test"}>
              <ContentWrapper>
                <StyledSectionTitle>
                  L'entreprise Guillou couverture
                </StyledSectionTitle>
                <StyledText>
                  Nous mettons notre expérience de plus de 20 ans et notre
                  savoir-faire au service de vos travaux de couverture. Alliant
                  expertise technique, matériaux de qualité supérieure, un souci
                  méticuleux du détail et des partenaires de renom, votre projet
                  n'attend que nous.
                </StyledText>
              </ContentWrapper>
            </SideBySide>
          </FadeOnView>
          <Gap />

          <FadeOnView>
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
          </FadeOnView>
          <Gap />
          <FadeOnView>
            <SideBySide image={Garantie}>
              <ContentWrapper>
                <StyledSectionTitle>Une garantie décennale</StyledSectionTitle>
                <StyledText>
                  Tous les travaux effectués par notre entreprises sont
                  accompagnés d'une garantie décennale en gage de qualité. Nous
                  tenons à ce que nos clients puisse avancer sereinement avec
                  les modifications que nous apportons.
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
          </FadeOnView>
          <Gap />
        </Layout>
      </PageWrap>
    </Wrapper>
  );
};

export default Presentation;
