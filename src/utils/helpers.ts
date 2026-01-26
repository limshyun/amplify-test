// Refactored utility functions with improved type safety and readability

interface UserInput {
  active: boolean;
  type: string;
  age: number;
  verified: boolean;
  name: string;
  email: string;
}

interface ProcessedUser {
  name: string;
  email: string;
  age: number;
  type: 'adult_verified_user' | 'adult_unverified_user' | 'minor_verified_user' | 'minor_unverified_user';
}

export function processData(data: UserInput[]): ProcessedUser[] {
  const results: ProcessedUser[] = [];

  for (const item of data) {
    // Skip inactive or non-user items
    if (!item.active || item.type !== 'user') {
      continue;
    }

    // Determine user category
    const isAdult = item.age >= 18;
    const userType = isAdult
      ? (item.verified ? 'adult_verified_user' : 'adult_unverified_user')
      : (item.verified ? 'minor_verified_user' : 'minor_unverified_user');

    results.push({
      name: item.name,
      email: item.email,
      age: item.age,
      type: userType
    });
  }

  return results;
}

type MathOperation = '+' | '-' | '*' | '/' | '%' | '**';

export function calc(firstNumber: number, secondNumber: number, operation: MathOperation): number {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    case '%':
      return firstNumber % secondNumber;
    case '**':
      return firstNumber ** secondNumber;
    default:
      return 0;
  }
}

export function fmt(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const padZero = (num: number): string => num < 10 ? `0${num}` : `${num}`;

  return `${year}-${padZero(month)}-${padZero(day)} ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

export function validateEmail(email: string): boolean {
  // Basic email validation checks
  if (email.length < 5) {
    return false;
  }

  if (email.indexOf('@') === -1) {
    return false;
  }

  if (email.indexOf('.') === -1) {
    return false;
  }

  if (email.indexOf(' ') !== -1) {
    return false;
  }

  return true;
}

export function merge<T extends Record<string, unknown>, U extends Record<string, unknown>>(
  firstObject: T,
  secondObject: U
): T & U {
  const result = {} as T & U;

  for (const key in firstObject) {
    result[key] = firstObject[key];
  }

  for (const key in secondObject) {
    result[key] = secondObject[key];
  }

  return result;
}

type DebouncedFunction<T extends unknown[]> = (...args: T) => void;

export function debounce<T extends unknown[]>(
  func: (...args: T) => void,
  delayMs: number
): DebouncedFunction<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function(...args: T): void {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delayMs);
  };
}
