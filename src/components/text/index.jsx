import { styled } from "styled-components";

const StyledText = styled.p`
  color: #545454;
  font-weight: 500;
  line-height: 2em;
  word-spacing: 0.15rem;
  margin: 0;

  @media (min-width: 0px) {
    font-size: 1.4rem;
    letter-spacing: -0.05rem;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1240px) {
    font-size: 1.5rem;
  }
`;

const Text = ({ className, children, color }) => {
  return (
    <StyledText className={className} color={color}>
      {children}
    </StyledText>
  );
};

export default Text;
