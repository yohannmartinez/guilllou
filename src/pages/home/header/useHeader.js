import { useEffect, useState } from "react";

const steps = [
  {
    subTitle: "Guillou couverture",
    title: "Couverture",
    buttonText: "En savoir plus",
    background:
      "https://www.renovationettravaux.fr/wp-content/uploads/2015/04/Pose-dune-toiture-en-tuile.jpg",
  },
  {
    subTitle: "Guillou couverture",
    title: "Charpente",
    buttonText: "En savoir plus",
    background:
      "https://www.renovationstoiture.com/wp-content/uploads/sites/9/2020/05/charpentenkit-pouquoi-pas.jpg",
  },
  {
    subTitle: "Guillou couverture",
    title: "Isolation",
    buttonText: "En savoir plus",
    background:
      "https://cdn.hellowatt.fr/media/uploads/zinnia/2023/02/27/isolation-toiture-interieure-prix.jpg",
  },
  {
    subTitle: "Guillou couverture",
    title: "Zinguerie",
    buttonText: "En savoir plus",
    background: "https://www.toitures-andre.be/images/photo-13.jpg",
  },
  {
    subTitle: "Guillou couverture",
    title: "Ravalement",
    buttonText: "En savoir plus",
    background:
      "https://www.cgroup.ch/wp-content/uploads/sites/3/2021/04/iStock-1273226188.jpg",
  },
];

const useHeader = () => {
  const [step, setStep] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setIsChanging(false);
      }, 100);
      setStep((previousValue) =>
        previousValue === steps.length - 1 ? 0 : previousValue + 1
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const changeStep = (stepToChange) => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 100);
    setStep(stepToChange);
  };

  return { isChanging, step, changeStep, stepDetails: steps[step], steps };
};

export default useHeader;
