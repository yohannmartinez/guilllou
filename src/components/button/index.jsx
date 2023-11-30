import { styled } from "styled-components";

const StyledButton = styled.button`
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  padding: 15px 30px;
  border-radius: 500px;
  border: none;
  font-weight: 600;
  cursor: pointer;

  @media (min-width: 0px) {
    font-size: 1.3rem;
    letter-spacing: -0.05rem;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1240px) {
    font-size: 1.5rem;
  }
`;

const Button = ({ className, children, color, background, onClick }) => {
  return (
    <StyledButton
      className={className}
      color={color}
      background={background}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
