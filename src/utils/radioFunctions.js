export const handleNextFunction = (
  setFunction,
  value,
  length,
  alertFunction
) => {
  value < length ? setFunction(value + 1) : alertFunction('Last Station');
};
export const handlePrevFunction = (setFunction, value, alertFunction) => {
  value >= 1 ? setFunction(value - 1) : alertFunction('First Station');
};
