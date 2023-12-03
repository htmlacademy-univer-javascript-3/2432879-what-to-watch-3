export const runTimeCoverter = (runTime: number) => {
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;

  return `${hours}h ${minutes}m`;
};
