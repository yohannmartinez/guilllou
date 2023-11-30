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
            <SideBySide image={ImagePresentation}>
              <ContentWrapper>
                <StyledSectionTitle>
                  L'entreprise Guillou couverture
                </StyledSectionTitle>
                <StyledText>
                  Nous mettons notre expérience de plus de 20 ans et notre
                  savoir-faire au service de vos travaux de couverture.
                  Utilisant les meilleures techniques, travaillant avec des
                  outils de qualité et en partenariat avec des marques de renom,
                  vous vous octroierez une sérénité en nous confiant votre
                  projet.
                </StyledText>
              </ContentWrapper>
            </SideBySide>
          </FadeOnView>
          <Gap />
          <FadeOnView>
            <SideBySide imagePosition="right" image={Garantie}>
              <ContentWrapper>
                <StyledSectionTitle>
                  Une garantie 10 ans constructeur
                </StyledSectionTitle>
                <StyledText>
                  Tous les travaux effectués par notre entreprises sont
                  accompagnés d'une garantie de 10 ans En gage de qualité. Nous
                  tenons à ce que nos clients puisse avancer sereinement avec
                  les modifications que nous apportons.
                </StyledText>
                <StyledButton background="black" color="white">
                  Faire un devis
                </StyledButton>
              </ContentWrapper>
            </SideBySide>
          </FadeOnView>
          <Gap />
          <FadeOnView>
            <SideBySide image={ZoneActivite}>
              <ContentWrapper>
                <StyledSectionTitle>
                  La zone d'activité de notre entreprise
                </StyledSectionTitle>
                <StyledText>
                  Nous intervenons dans tout le département de l'Eure-et-loire
                  (28), mais aussi dans l'essone (91). Au dela-le les frais de
                  déplacements supérieurs à 100km seront facturés.
                </StyledText>
                <StyledButton background="black" color="white">
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
