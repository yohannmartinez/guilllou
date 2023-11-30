import { styled } from "styled-components";

const StyledTitle = styled.h1`
  color: ${({ color }) => color};
  font-weight: 600;
  word-spacing: 0.5rem;
  margin: 0;

  @media (min-width: 0px) {
    font-size: 4.7rem;
    line-height: 1.3;
    letter-spacing: -0.25rem;
  }

  @media (min-width: 768px) {
    font-size: 6rem;
    letter-spacing: -0.4rem;
  }

  @media (min-width: 1240px) {
    font-size: 7.2rem;
    line-height: 9rem;
  }
`;

const Title = ({ className, children, color }) => {
  return (
    <StyledTitle className={className} color={color}>
      {children}
    </StyledTitle>
  );
};

export default Title;
