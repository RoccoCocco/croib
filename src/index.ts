const stringToIntArray = (input: string): number[] => input.split('').map((item) => parseInt(item, 10));

const randomDigits = (): string => {
  const random = String(Math.floor(Math.random() * 10 ** 10));
  const pad = '0000000000'.slice(random.length);
  return [random, pad].join('');
};

const calculateControlNumber = (digits: number[]): number => {
  const ccn = 11 - digits.reduce((carry, digit) => (((carry + digit) % 10 || 10) * 2) % 11, 10);

  return ccn === 10 ? 0 : ccn;
};

export const validateOIB = (oib: string): boolean => {
  const oibPattern = /^(\d{11})$/;
  if (!oib.match(oibPattern)) {
    return false;
  }

  const oibDigits = stringToIntArray(oib);
  const inputControlNumber = oibDigits.pop();
  const calculatedControlNumber = calculateControlNumber(oibDigits);
  const isValid = inputControlNumber === calculatedControlNumber;

  return isValid;
};

export const generateRandomOIB = (): string => {
  const base = randomDigits();
  const controlNumber = calculateControlNumber(stringToIntArray(base));
  return [base, controlNumber].join('');
};
