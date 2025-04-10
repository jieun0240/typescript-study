// // export const asdf = 100;

// // interface Person {
// //     name: string;
// //     age: number;
// //     address: {
// //         street: string;
// //         city: string;
// //         country: string;
// //     };
// // }

// // // Person 타입의 name 속성 타입 추출
// // type PersonName = Person["name"]; // string

// // // Person 타입의 address 속성 타입 추출
// // type Address = Person["address"]; // { street: string; city: string; country: string; }

// // // address 내부의 city 속성 타입 추출
// // type City = Person["address"]["city"]; // string

// // interface User {
// //     id: number;
// //     name: string;
// //     email: string;
// // }

// // // id와 name 속성 타입의 유니온
// // type UserIdOrName = User["id" | "name"]; // number | string

// // // 모든 속성 타입의 유니온
// // type UserProps = User[keyof User]; // number | string


// // // 배열 타입에서의 요소 타입 추출
// // type StringArray = string[];
// // // string[0], string[1], string[2]과 같이 숫자 인덱스를 통해서 접근할 수 있는 값의 타입은? => string
// // type StringItem = StringArray[number]; // string

// // // 튜플 타입에서의 특정 위치 요소 타입 추출
// // type Tuple = [string, number, boolean];
// // // 튜플 값의 0번 인덱스를 통해서 접근할 수 있는 타입은? => string
// // type TupleFirstValueType = Tuple[0];
// // // 튜플 값의 1번 인덱스를 통해서 접근할 수 있는 타입은? => number
// // type TupleSecondValueType = Tuple[1];
// // // 튜플 값의 2번 인덱스를 통해서 접근할 수 있는 타입은? => boolean
// // type TupleThirdValueType = Tuple[2];
// // // 튜플에 숫자를 통해 접근했을 때 얻을 수 있는 모든 요소 타입은? => string | number | boolean


// interface ApiResponse {
//     data: {
//         users: {
//             id: number;
//             name: string;
//             role: "admin" | "user";
//         }[];
//         pagination: {
//             total: number;
//             page: number;
//         };
//     };
//     status: number;
//     message: string;
// }

// // 사용자 타입만 추출
// // { id: number; name: string; role: "admin" | "user"; }
// type User = ApiResponse["data"]["users"][number];

// // 사용자 역할 타입만 추출
// // "admin" | "user"
// type UserRole = User["role"];

// const COLORS = {
//     red: "#FF0000",
//     green: "#00FF00",
//     blue: "#0000FF",
//     yellow: "#FFFF00"
// } as const;

// // 키 타입 추출
// // "red" | "green" | "blue" | "yellow"
// type ColorKey = keyof typeof COLORS;

// // 값 타입 추출
// // "#FF0000" | "#00FF00" | "#0000FF" | "#FFFF00"
// type ColorValue = typeof COLORS[keyof typeof COLORS];