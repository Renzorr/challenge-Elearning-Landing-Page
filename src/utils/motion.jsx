export const appearIn = (delay, duration) => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration,
      delay,
    },
  },
});

export const fadeIn = (direction, delay, duration) => ({
  initial: {
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration,
    },
  },
});
