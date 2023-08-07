export const customAnimation = () => {
  const ButtonAnimation = {
    initial: {
      boxShadow: "2px 2px 100px 10px rgba(76, 76, 76, 0.60)",
      backgroundColor: "green",
    },
    inInitial: { boxShadow: "0 0 0 0", backgroundColor: "#1D2A35" },
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
      opacity: 0,
      y: 20,
    },
    inInitial: {
      opacity: 1,
      scale: 1.1,
      y: 0,
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
