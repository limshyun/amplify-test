// Data processing utilities with some bugs

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

interface ProcessResult {
  success: boolean;
  data: User[];
  errors: string[];
}

// Bug 1: 타입 에러 - string을 number로 비교
export function filterAdultUsers(users: User[]): User[] {
  return users.filter(user => user.age > 18);
}

// Bug 2: null 체크 누락 - users가 null이면 에러
export function getActiveUserCount(users: User[] | null): number {
  if (!users) return 0;
  return users.filter(user => user.isActive).length;
}

// Bug 3: 무한 루프 가능성 - i를 감소시켜야 하는데 증가
export function removeInactiveUsers(users: User[]): User[] {
  const result = [...users];
  for (let i = result.length - 1; i >= 0; i--) {
    if (!result[i].isActive) {
      result.splice(i, 1);
    }
  }
  return result;
}

// Bug 4: 잘못된 조건문 - = 대신 == 사용, 그리고 undefined 체크 누락
export function findUserById(users: User[], id: number): User | undefined {
  for (const user of users) {
    if (user.id === id) {
      return user;
    }
  }
  return undefined;
}

// Bug 5: 배열 인덱스 오류 - length가 아닌 length + 1 사용
export function getLastUser(users: User[]): User | undefined {
  return users[users.length - 1];
}

// Bug 6: 비동기 에러 - await 누락
export async function fetchAndProcessUsers(url: string): Promise<ProcessResult> {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      success: true,
      data: data,
      errors: []
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      errors: [(error as Error).message]
    };
  }
}

// Bug 7: 메모리 누수 - 이벤트 리스너 제거 안함
export function setupUserListener(callback: (user: User) => void): () => void {
  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<User>;
    callback(customEvent.detail);
  };

  window.addEventListener('userUpdate', handler);
  // cleanup 함수 반환 안함
  return () => {
    window.removeEventListener('userUpdate', handler);
  };
}

// Bug 8: 잘못된 spread 연산자 사용
export function mergeUserData(user1: User, user2: Partial<User>): User {
  return { ...user1, ...user2 };
}

// Bug 9: 정렬 비교 함수 오류
export function sortUsersByAge(users: User[]): User[] {
  return users.sort((a, b) => a.age - b.age);
}

// Bug 10: 빈 배열 체크 누락
export function getAverageAge(users: User[]): number {
  if (users.length === 0) return 0;
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}
