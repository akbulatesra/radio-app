export const handleSelect = (value, main, other, other2) => {
  main(value);
  other(null);
  other2(null);
};
