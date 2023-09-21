//converts seconds to minutes, secinds format

export const convertToReadableTimeInterval = (seconds: number) => {
  const numMinutes = Math.floor(seconds / 60);
  const numSeconds = seconds % 60;

  if (numMinutes > 0) return `${numMinutes} minutes ${numSeconds} seconds`;
  return `${numSeconds} seconds`;
};
