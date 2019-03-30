export const shortId = (): string => {
  return (Date.now() + Math.random()).toString(32);
};
