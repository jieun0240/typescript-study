// Mapped Types
// 매핑된 타입(Mapped Type)은 타입스크립트에서 기존 타입을 변환하여 새로운 타입을 생성하는 방법

export const asdf = 100

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// }

// 모든 속성을 선택적 속성으로 변환
type PartialUser = {
    // ?를 붙여 선택적 속성으로 변경
    [P in keyof User]?: User[P];
};

// // PartialUser 타입을 이용하여 User 타입의 일부 속성만 사용하여 객체 생성 가능
// const partialUser: PartialUser = {
//     id: 1,
//     name: "John"
//     // email과 age 속성은 모두 선택적이므로 생략 가능
// };

type PartialUser2 = Partial<User>

type ReadonlyUser = {
    // readonly를 붙여 읽기 전용 속성으로 변경
    readonly [P in keyof User]: User[P];
};

// // 사용 예시
// const readonlyUser: ReadonlyUser = {
//     id: 1,
//     name: "John",
//     email: "john@example.com",
//     age: 30
// };
// 에러 => 읽기 전용 속성이므로 재할당 불가
// readonlyUser.id = 2;

type ReadonlyUser2 = Readonly<User>

// User 타입의 속성 중 name과 email만 속성으로 사용하는 새 타입 정의
type PickedUser = {
    [P in "name" | "email"]: User[P];
}

type Picked2 = Pick<User, "name" | "email">


// Partial 유틸리티 타입의 내부 구현
type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

type MyPartialUser1 = MyPartial<User>


// Readonly 유틸리티 타입의 내부 구현
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Pick 유틸리티 타입의 내부 구현
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type Picked3 = MyPick<User, "name" | "email">










// 조건부 타입 개념
// 조건부 타입은 타입스크립트에서 제공하는 기능으로, 조건에 따라 타입을 동적으로 결정할 수 있게 도와주는 문법

type Check<T> = T extends string ? "문자열" : "문자열 아님";
// A의 타입은 "문자열"
type A = Check<string>;
// B의 타입은 "문자열 아님"
type B = Check<number>;


type IsString<T> = T extends string ? true : false;
// true
type Result1 = IsString<string>;
// false
type Result2 = IsString<number>;


//분산적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;
// 당연히 string
let a: StringNumberSwitch<number>;
// 당연히 number
let b: StringNumberSwitch<string>;
// 타입이 number가 아니고 "string | number"임을 유의
let c: StringNumberSwitch<number | string>;


// never 타입은 타입스크립트에서 "값을 가질 수 없는 타입"을 의미하며, 조건부 타입에서는 특정 타입을 제거하는 목적으로 사용됨
type Filter<T, U> = T extends U ? T : never;
// string 타입만 추출하므로, StringOnly의 타입은 string
type StringOnly = Filter<string | number | boolean, string>;

type NonNullable<T> = T extends null | undefined ? never : T;
// Example은 string 타입
type Example = NonNullable<string | null | undefined>;



// // T가 id 속성(타입은 아무 타입도 OK)을 가진 객체인지 확인하는 조건부 타입
// type HasId<T> = T extends { id: any } ? true : false;

// interface User {
//     id: number;
//     name: string;
// }

// interface Settings {
//     // id: string;
//     theme: string;
//     notifications: boolean;
// }

// type UserHasId = HasId<User>; // true
// type SettingsHasId = HasId<Settings>; // false


// // T가 배열인지 확인하는 조건부 타입
// type IsArray<T> = T extends any[] ? true : false;
// type StringIsArray = IsArray<string>; // false
// type StringArrayIsArray = IsArray<string[]>; // true


// // T가 배열이면 원래 타입을, 아니면 배열로 감싸는 타입
// type EnsureArray<T> = T extends any[] ? T : T[];
// type StringAsArray = EnsureArray<string>; // string[]
// type NumberArrayAsArray = EnsureArray<number[]>; // number[]



// infer 키워드
//infer 키워드는 타입스크립트의 조건부 타입에서 타입을 추론하고 "캡처"하는 데 사용됨

type ArrayElement<T> = T extends (infer E)[] ? E : never;

// 상세 내부 로직 흐름 따라가보기
// 1) T는 number[]로 대체
// 2) 따라서 "type ArrayElement<number[]> = number[] extends (infer E)[] ? E : never"로 바뀜
// 3) 그런데, 먼저 이것이 배열인지를 먼저 판별( (infer E)[] )하는데, 배열을 전달한 것이 맞으니까 참으로 평가
// 4) 이후 배열 형식의 앞에 붙은 타입(여기서는 number)을 infer E를 이용해서 타입 캡쳐
// 5) 따라서 E에 number 타입이 캡쳐되고 반환됨
type NumberType = ArrayElement<number[]>; // number

// 1) T는 number로 대체
// 2) 따라서 "type ArrayElement<number> = number extends (infer E)[] ? E : never"로 바뀜
// 3) 그런데 배열 형식이 아니기 때문에 바로 조건이 거짓이 되고, never 타입이 반환됨
type NeverType = ArrayElement<number>; // never

// 유니언 타입 추출도 가능
type MixedArray = (string | number)[];
type MixedType = ArrayElement<MixedArray>; // string | number

// Q) 과정 직접 적어보기
type StringType = ArrayElement<string[]>; // string





type PromiseValue<T> = T extends Promise<infer V> ? V : T;

// 상세 내부 로직 흐름 따라가보기
// 1) T는 Promise<string>으로 대체
// 2) 따라서 "type PromiseValue<Promise<string>> = Promise<string> extends Promise<infer V> ? V : T;"로 바뀜
// 3) 그런데, 먼저 이것이 프라미스 인터페이스인지를 먼저 판별하는데, 프라미스를 전달한 것이 맞으니까 참으로 평가
// 4) 이후 프라미스 내부에 포함된 값을 infer V를 이용해서 타입 캡쳐
// 5) 타입 캡쳐한 V 타입(여기서는 string)을 반환
type ResolvedType1 = PromiseValue<Promise<string>>; // string

// 프라미스가 전달된 것이 아니므로, 조건이 거짓이 되고 전달한 타입 그대로(여기서는 number) 반환
type ResolvedType2 = PromiseValue<number>; // number



// // () => void
// // (a: number) => number

// // (...args: any[]) => infer R 패턴은 "임의의 파라미터 개수를 가진(0개도 포함) 함수" 패턴을 파악하기 위해서 사용
// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }

// type GreetReturn = MyReturnType<typeof greet>; // string
// type GreetReturn2 = ReturnType<typeof greet>; // string
// type AnyType = MyReturnType<number>;



// fast fail...차라리 캐치해서 에러 나버려,, 빠른 시일내에 실패 하그라.
type FirstParameter<T> = T extends (first: infer P, ...args: any[]) => any ? P : never;

function greet(name: string, age: number): void {
    console.log(`Hello ${name}, you are ${age} years old`);
}
function func(): void {}

type GreetFirstParameter = FirstParameter<typeof greet>
type UnknownType = FirstParameter<typeof func>; // unknown





type MyInstanceType<T> = T extends (new (...args: any[]) => infer R) ? R : any;

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const p = new Person("John")

// (name: string) => Person
type PersonInstanceType = MyInstanceType<typeof Person>; // Person




// keyof User는 ("name" | "email" | "age") 유니언 타입이 됨
type PropType<T, K extends keyof T> = T extends { [prop in K]: infer R } ? R : never;

type User = {
    name: string;
    email: string;
    age: number;
};

type UserNameType = PropType<User, 'name'>; // string

type UserEmailAgeTypes = PropType<User, 'email' | 'age'>; // string | number
