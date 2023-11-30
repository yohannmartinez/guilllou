import { styled } from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 108rem;

  @media (min-width: 0px) {
    padding: 0 3rem;
  }

  @media (min-width: 500px) {
    padding: 0 5rem;
  }
`;

const Layout = ({ className, children }) => {
  return (
    <StyledLayout>
      <Container className={className}>{children}</Container>
    </StyledLayout>
  );
};

export default Layout;
