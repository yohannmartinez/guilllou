import styled from "styled-components";
import "swiper/css";

import PageWrap from "../pageWrap";
import Title from "../title";

import Layout from "../layout";
import FadeOnView from "../fadeOnview";

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

const PhotosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3em;
  margin: 8em 0 5em 0;
`;

const Photo = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-image: ${({ background }) => `url('${background}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Photos = ({ photosList }) => {
  return (
    <Wrapper>
      <PageWrap>
        <FadeOnView>
          <StyledLayout>
            <StyledTitle>Des photos de nos chantiers</StyledTitle>
            <PhotosContainer>
              {photosList.map((photo) => (
                <Photo background={photo} />
              ))}
            </PhotosContainer>
          </StyledLayout>
        </FadeOnView>
      </PageWrap>
    </Wrapper>
  );
};

export default Photos;
