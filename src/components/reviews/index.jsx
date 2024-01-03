import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import PageWrap from "../pageWrap";
import Button from "../button";
import Text from "../text";
import Title from "../title";

import Review from "./review";
import { reviews } from "./reviews";
import Layout from "../layout";
import FadeOnView from "../fadeOnview";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
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

const StyledSwiper = styled(Swiper)`
  margin-top: 7em;
  margin-bottom: 10em;
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: auto;
  border: 1px solid #eaeaea;
  border-radius: 2em;
  box-sizing: border-box;

  @media (min-width: 0px) {
    width: 28rem;
  }

  @media (min-width: 500px) {
    width: 35rem;
  }
`;

const StyledReview = styled(StyledSwiperSlide)`
  background: white;
  z-index: 1;

  @media (min-width: 0px) {
    padding: 2rem 3rem 3.5rem 3rem;
  }

  @media (min-width: 500px) {
    padding: 2rem 2rem 3.5rem 2rem;
  }
`;

const AllReviewButton = styled(StyledSwiperSlide)`
  background: #212121;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    pointer-events: none;
    transition: 0.5s;
    z-index: -1;
  }

  &:hover::after {
    left: 0;
  }
`;

const AllReviewTitle = styled(Text)`
  text-align: center;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const Reviews = () => {
  return (
    <Wrapper>
      <PageWrap>
        <FadeOnView>
          <StyledLayout>
            <StyledTitle>Retour d'expérience de nos clients</StyledTitle>
            <StyledSwiper slidesPerView={"auto"} spaceBetween={30}>
              {reviews.map((review) => (
                <StyledReview>
                  <Review review={review} />
                </StyledReview>
              ))}

              <AllReviewButton>
                <AllReviewTitle>
                  La satisfaction de nos clients est notre priorité !
                </AllReviewTitle>

                <a href="mailto:0610400001@orange.fr">
                  <Button color="black" background="white">
                    Faire un devis
                  </Button>
                </a>
              </AllReviewButton>
            </StyledSwiper>
          </StyledLayout>
        </FadeOnView>
      </PageWrap>
    </Wrapper>
  );
};

export default Reviews;
