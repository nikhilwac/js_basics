let timeDifferenceInSecondsInsleep = NaN; // Example value, can be any number

if (
  Number.isFinite(timeDifferenceInSecondsInsleep) &&
  timeDifferenceInSecondsInsleep > 0
) {
  console.log("number is ok");
} else {
  console.error("Invalid time difference during sleep, skipping adjustment.");
}
