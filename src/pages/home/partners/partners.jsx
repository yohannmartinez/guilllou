import styled from "styled-components";

import PageWrap from "../../../components/pageWrap";
import Title from "../../../components/title";

import Layout from "../../../components/layout";
import FadeOnView from "../../../components/fadeOnview";
import { partnersList } from "./partnersList";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
`;

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledTitle = styled(Title)`
  text-align: center;
  width: 100%;
  max-width: 700px;
`;

const LogosContainer = styled.div`
  width: 100%;
  margin-top: 8em;
  margin-bottom: 8em;
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 100px;
  height: 70px;
  background: ${({ image }) => `url('${image}')`};
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(1);
  opacity: 0.5;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const Partners = () => {
  return (
    <Wrapper>
      <PageWrap>
        <FadeOnView>
          <StyledLayout>
            <StyledTitle>Des parternaires de confiance</StyledTitle>
            <LogosContainer>
              {partnersList.map((partner) => (
                <Logo image={partner} />
              ))}
            </LogosContainer>
          </StyledLayout>
        </FadeOnView>
      </PageWrap>
    </Wrapper>
  );
};

export default Partners;
