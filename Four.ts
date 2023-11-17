type Box = { l: number; w: number; h: number };
type Boxes = Array<Box>;

const boxVolume = ({ box }: { box: Box }): number => box.h * box.l * box.w;
const boxFit = ({ boxA, boxB }: { boxA: Box; boxB: Box }): boolean => {
  return boxA.h < boxB.h && boxA.l < boxB.l && boxA.w < boxB.w;
};

function fitsInOneBox(boxes: Array<Box>): boolean {
  const orderesBoxes = boxes.sort(
    (a, b) => boxVolume({ box: a }) - boxVolume({ box: b })
  );

  let fitsInOneBoxReturn = true;

  // console.log({ orderesBoxes });
  for (let i = 0; i < orderesBoxes.length - 1; i++) {
    if (!boxFit({ boxA: orderesBoxes[i], boxB: orderesBoxes[i + 1] }))
      fitsInOneBoxReturn = false;
  }

  return fitsInOneBoxReturn;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]; // true

const boxesB = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
]; // false

const boxesC = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]; // false

console.log(fitsInOneBox(boxesC)); // true
