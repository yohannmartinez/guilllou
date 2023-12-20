import { styled } from "styled-components";
import PageWrap from "../../../components/pageWrap";
import { easeIn, easeInOut, motion } from "framer-motion";
import useHeader from "./useHeader";
import Text from "../../../components/text";
import Button from "../../../components/button";
import LogoWhite from "../../../assets/images/minLogoWhite.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`;

const Content = styled(motion.div)`
  height: calc(100vh - 200px);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => `url("${background}")`};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const SubTitle = styled(Text)`
  font-size: 18px;
  color: white;
  font-weight: 600;
  margin-bottom: 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    height: 60px;
    width: 60px;
    background: ${() => `url('${LogoWhite}')`};
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    transform: translate(-50%, -100%);
  }
`;

const LettersContainer = styled(motion.div)`
  overflow: hidden;
  margin-bottom: 40px;
`;

const Letter = styled(motion.div)`
  color: white;
  font-size: 90px;
  font-weight: 600;
  display: inline-block;
  letter-spacing: -4.5px;
`;

const Steps = styled(motion.div)`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  display: flex;
  z-index: 2;
`;

const Step = styled(motion.div)`
  width: ${({ isCurrentStep }) => {
    return isCurrentStep ? "40px" : "10px";
  }};
  height: 10px;
  background: white;
  border-radius: 50px;
  cursor: pointer;
  margin: 0 3px;
  transition: 0.5s;
  overflow: hidden;
`;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { y: 300 },
  show: { y: 0 },
};

const Header = () => {
  const { step, stepDetails, isChanging, steps, changeStep } = useHeader();
  return (
    <Container>
      <PageWrap>
        <Content
          background={stepDetails.background}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: easeInOut,
          }}
        >
          {!isChanging && (
            <ContentContainer>
              <SubTitle>{stepDetails.subTitle}</SubTitle>
              <LettersContainer
                variants={container}
                initial="hidden"
                animate="show"
              >
                {stepDetails.title.split("").map((letter, index) => (
                  <Letter
                    key={`headerLetter${index}`}
                    variants={item}
                    transition={{ bounce: 0 }}
                  >
                    {letter === " " ? <>&nbsp;</> : letter}
                  </Letter>
                ))}
              </LettersContainer>
              <Button
                background={"#fff"}
                color={"#111"}
                onClick={() => {
                  console.log("coucou");
                }}
              >
                {stepDetails.buttonText}
              </Button>
            </ContentContainer>
          )}
          <Steps>
            {steps.map((item, index) => {
              const isCurrentStep = index === step;
              return (
                <Step
                  index={`headerStepIndex${index}`}
                  isCurrentStep={isCurrentStep}
                  onClick={() => {
                    changeStep(index);
                  }}
                ></Step>
              );
            })}
          </Steps>
        </Content>
      </PageWrap>
    </Container>
  );
};

export default Header;
