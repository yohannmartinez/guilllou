import { styled } from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 40px;
`;

const PageWrap = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrap;
