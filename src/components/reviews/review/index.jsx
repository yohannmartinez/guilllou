import { styled } from "styled-components";
import "swiper/css";
import StarsIcon from "../../../assets/images/stars.svg";
import Text from "../../text";

const Rate = styled.div`
  display: flex;
`;

const Stars = styled.div`
  width: 10rem;
  margin-left: 1rem;
  background-image: ${() => `url('${StarsIcon}')`};
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
`;

const ReviewTitle = styled(Text)`
  color: black;
  font-weight: 700;
  margin-top: 1.5em;
  pointer-events: none;
`;

const ReviewText = styled(Text)`
  line-height: 2.5em;
  margin-top: 0.3em;
`;

const Review = ({ review }) => {
  const { name, date, title, text } = review;
  return (
    <>
      <Rate>
        <Text>5.0</Text>
        <Stars />
      </Rate>
      <ReviewTitle>{title}</ReviewTitle>
      <ReviewText>{text}</ReviewText>
    </>
  );
};

export default Review;
