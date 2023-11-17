function distributeGifts(
  packOfGifts: Array<string>,
  reindeers: Array<string>
): number {
  const weightPackages = packOfGifts.reduce(
    (accumulatedWeight, gift) => accumulatedWeight + gift.length,
    0
  );

  const reindeersCapacity = reindeers.reduce(
    (accumulatedWeight, reindeer) => accumulatedWeight + reindeer.length,
    0
  );

  const capacity = Math.abs(
    Math.floor((2 * reindeersCapacity) / weightPackages)
  );

  return capacity;
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
