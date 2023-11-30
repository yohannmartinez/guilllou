import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  gap: 4em;
  display: flex;

  @media (min-width: 0px) {
    flex-direction: column;
  }

  @media (min-width: 750px) {
    flex-direction: ${({ imagePosition }) =>
      imagePosition === "right" ? "row-reverse" : "row"};
  }
`;

const Image = styled.div`
  flex: 1;
  position: relative;
  max-width: 500px;

  position: relative;
  z-index: 10;
  background: ${({ image }) => `url('${image}')`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 0px) {
    min-height: 300px;
    height: 300px;
  }

  @media (min-width: 750px) {
    min-height: 500px;
    height: 500px;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideBySide = ({ className, imagePosition, children, image }) => {
  return (
    <Container className={className} imagePosition={imagePosition}>
      <Image image={image} />
      <Content>{children}</Content>
    </Container>
  );
};

export default SideBySide;
