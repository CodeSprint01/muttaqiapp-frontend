export function generateRendomNumber() {
  let randomNumber = '';
  for (let i = 0; i < 10; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber;
}

export const ActiveClickOpacity = 0.7;
