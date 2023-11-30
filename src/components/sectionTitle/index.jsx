import styled from "styled-components";

const StyledTitle = styled.h1`
  color: black;
  font-weight: 500;
  word-spacing: 0.5rem;
  margin: 0;

  @media (min-width: 0px) {
    font-size: 3rem;
    line-height: 1.3;
    letter-spacing: -0.25rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: -0.3rem;
  }

  @media (min-width: 1240px) {
    font-size: 4rem;
    line-height: 5rem;
  }
`;

const SectionTitle = ({ className, children }) => (
  <StyledTitle className={className}>{children}</StyledTitle>
);

export default SectionTitle;
