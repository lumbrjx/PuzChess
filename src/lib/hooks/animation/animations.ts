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
      display: "hidden",
    },
    inInitial: {
      width: "100%",
      display: "static",
    },
  };
  return { ButtonAnimation, HeroAnimation, sectionAnimation };
};
