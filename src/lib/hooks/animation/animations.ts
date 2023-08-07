export const customAnimation = () => {
  const ButtonAnimation = {
    inInitial: { boxShadow: "0 0 0 0" },
  };
  const HeroAnimation = {
    initial: {
      y: 50,
      opacity: 0,
    },
    inInitial: {
      y: 0,
      opacity: 100,
    },
    inInitial2: {
      y: 0,
      opacity: 100,
    },
    inInitial3: {
      y: 0,
      opacity: 100,
    },
    inInitial4: {
      y: 0,
      opacity: 100,
    },
    inInitial5: {
      y: 0,
      opacity: 100,
    },
    diceInitial: {
      y: 50,
      opacity: 0,
      rotate: 25,
    },
    diceinInitial: {
      y: 0,
      opacity: 100,
      rotate: 0,
    },
  };
  const sectionAnimation = {
    initial: {
      width: 20,
      opacity: 0,
      display: "hidden",
    },
    inInitial: {
      width: "100%",
      opacity: 1,

      display: "static",
    },
  };
  const section2Animation = {
    initial: {
      top: 40,
      right: 20,

      display: "hidden",
    },
    initial2: {
      top: 20,
      right: 20,
      display: "hidden",
    },
    initial3: {
      top: 20,
      right: 20,
      display: "hidden",
    },
    inInitial1: {
      opacity: 1,

      right: -10,
      display: "static",
    },
    inInitial2: {
      right: 45,
      display: "static",
    },
    inInitial3: {
      top: -10,
      display: "static",
    },
    inInitial: {
      display: "static",
    },
  };
  const loadingAnimation = {
    initial: {
      y: 20,
      scale: 1,
    },
    inInitial: {
      scale: [1, 1.1, 1],
      y: [20, 0, 20],
    },
  };
  return {
    ButtonAnimation,
    HeroAnimation,
    sectionAnimation,
    section2Animation,
    loadingAnimation,
  };
};
