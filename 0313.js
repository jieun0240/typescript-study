// // 열거형 타입
// // enum 키워드를 이용하여 Direction 열거형 타입 정의
// // 방향과 관련된 4개의 상수 추가
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }
// // let move = Direction.Up;
// // // 내부적으로는 숫자로 인식
// // console.log(move); // 0
// // move = Direction.Down;
// // console.log(move); // 1
// // enum HttpStatus {
// //     OK = 200,
// //     NotFound = 404,
// // }
// // console.log(HttpStatus.OK); // 200
// // console.log(HttpStatus.NotFound); // 404
// enum UserRole {
//     Admin = "ADMIN",
//     Editor = "EDITOR",
//     Viewer = "VIEWER",
// }
// let currentUserRole: UserRole = UserRole.Editor;
// console.log(currentUserRole); // "EDITOR"
// // Nullable type
// let nullableName: string | null = "John";
// nullableName = null;
// // Optional Chaining 연산자 (?.)
// // User 타입 정의
// type User = {
//     name: string;
//     // 일부 속성은 선택적 속성으로 정의
//     address?: {
//         city: string;
//         street?: string;
//     };
//     // 메서드도 정의
//     getFullAddress?: () => string;
// };
// // 실제 값이 null일 수도 있는 nullable 타입인 UserOrNull 타입 정의
// type UserOrNull = User | null;
// // API 호출 결과를 시뮬레이션
// // (실제로는 결과값이 null일 수도 있음)
// function getUser(id: number): UserOrNull {
//     if (id === 1) {
//         // 모든 내용이 포함된 객체
//         return {
//             name: "John",
//             address: { city: "Seoul", street: "Street 1" },
//             getFullAddress: function() {
//                 return `${this.address?.city || ""}, ${this.address?.street || ""}`;
//             }
//         };
//     } else if (id === 2) {
//         // 필수 내용만 포함된 객체
//         return {
//             name: "Jane"
//             // 선택인 address 속성 및 메서드 없음
//         };
//     } else {
//         // 사용자를 찾지 못하여 null 반환
//         return null;
//     }
// }
// // 유저 정보 조회
// const user1 = getUser(1);
// const user2 = getUser(2);
// const user3 = getUser(999);
// // Optional Chaining 연산자 없이 안전하게 접근하려면 여러 조건문이 필요
// if (user1 && user1.address) {
//     console.log(user1.address.city); // "Seoul"
// }
// // Nullable type!!
// // Optional Chaining 연산자를 사용하여 접근
// console.log(user1?.address?.city); // "Seoul"
// // user2까지는 접근하지만 이후 address 속성 접근 과정에서 바로 undefined 반환 (평가 중단)
// console.log(user2?.address?.city); 
// // user3 접근 과정에서 바로 undefined 반환
// console.log(user3?.address?.city);
// // 메서드 호출에도 Optional Chaining 연산자를 적용 가능
// console.log(user1?.getFullAddress?.()); // "Seoul, Street 1"
// console.log(user2?.getFullAddress?.()); // undefined 반환
// console.log(user3?.getFullAddress?.()); // undefined 반환
// // Null 병합 연산자 (??)
// // let userName1: string | null = null;
// // if(userName1 === null) {
// //     userName1 = null;
// // }
// let username1 = null;
// let result1 = username1 ?? "Guest";
// // "Guest" (username1이 null이므로)
// console.log(result1);
// let username2 = "John";
// let result2 = username2 ?? "Guest";
// // "John" (username2가 null이 아니므로)
// console.log(result2);
// Non-null 단언 연산자 (!)
// type MyType = string | null | undefined;
// let v1: MyType = null;
// let v2 = v1!;
// function getLength(text: string | null) {
//     // 타입스크립트는 text 값이 null일 수 있으므로 에러로 처리
//     // Object is possibly 'null'
//     // return text.length;
//     // Non-null 단언 연산자를 사용하면 타입 에러가 발생하지 않음
//     // (여기서는 text가 null이 아님을 단언)
//     return text!.length;
// }
// // getLength(null); // 망함.
// function safeGetLength(text: string | null) {
//     // if 문으로 null 체크를 하고 나면 타입스크립트는 해당 값이 null이 아님을 알 수 있음
//     if (text === null) {
//         return 0;
//     }
//     // 이 부분부터는 string 타입으로 인식, 따라서 단언 연산자가 필요 없음
//     return text.length;
// }
// // DOM 요소 접근 함수
// function updateElement() {
//     // getElementById는 요소가 없으면 null을 반환할 수도 있지만, (반환 타입이 "HTMLElement | null")
//     // 요소가 반드시 존재한다고 확신할 경우에 사용 가능
//     const element = document.getElementById('app')!;
//     element.innerHTML = 'Updated!';
// }
// unknown 타입
var unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = function () { };
// // 값에 대한 어떠한 가정도 하지 않으므로, 모든 속성, 메서드 접근 불허
// unknownVar.foo;
// // 모든 객체가 가지고 있는 toString 메서드 호출도 불허함
// unknownVar.toString();
// 값 출력 정도는 허용
console.log(unknownVar);
