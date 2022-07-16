const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*";
const ambiguous = '()+_-=}{[]|:;"/?.><,`~';

interface IOptions {
  lowerCase: boolean;
  upperCase: boolean;
  numbers: boolean;
  symbols: boolean;
  ambiguous: boolean;
}

export default function generatePassword(length: number, options: IOptions) {
  let pool = "";
  let password = "";

  if (options.lowerCase) {
    pool += lowercase;
  }
  if (options.upperCase) {
    pool += uppercase;
  }
  if (options.numbers) {
    pool += numbers;
  }
  if (options.symbols) {
    pool += symbols;
  }
  if (options.ambiguous) {
    pool += ambiguous;
  }

  const poolLength = pool.length;

  for (let i = 0; i <= length; i++) {
    password += pool[getRandomNumber(poolLength)];
  }

  return password;
}

function getRandomNumber(max: number) {
  const random = Math.floor(Math.random() * max);
  return random;
}
