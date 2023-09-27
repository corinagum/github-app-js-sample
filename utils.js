export const roundRobin = (array, index) => {
  index = index || 0;

  if (array === undefined || array.length === 0 || !Array.isArray(array)) {
    throw new Error("Expected an array of values");
  }

  return () => {
    if (index >= array.length) {
      index = 0;
    }
    return array[index++];
  };
};