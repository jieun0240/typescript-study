export const asdf = 100;

interface Person {
    name: string;
    age: number;
    address: string;
}

// PersonKeys는 ("name" | "age" | "address") 유니언 타입
type PersonKeys = keyof Person;

const key1: PersonKeys = "name";
const key2: PersonKeys = "age";
const key3: PersonKeys = "address";
// 불가
// const key4: PersonKeys = "hello";

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "Kim", age: 20, address: "Seoul" };
const prop1 = getProperty(person, "name");
const prop2 = getProperty(person, "age");
const prop3 = getProperty(person, "address");
// 불가
// const prop4 = getProperty(person, "hello");

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
// type A = number

// 단, 자바스크립트의 경우, 숫자 키를 자동으로 문자열로 변환하여 객체 프로퍼티로 사용하므로, 문자열 인덱스 시그니처를 가진 타입의 경우, 숫자도 유효한 키가 될 수 있기 때문에 keyof는 string | number 유니언 타입을 반환
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
// type M = string | number