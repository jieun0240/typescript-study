// // // // 튜플
// // // let point: [number, number] = [10, 20];
// // // let point3D: [number, number, number] = [10, 20, 30];
// // // let nameAge: [string, number] = ["Alice", 25];
// // // //튜플 타입도 타입 별칭으로 정의 가능
// // // // 좌표를 나타내는 튜플 타입 정의
// // // type Point = [number, number];
// // // // 사용자 정보를 나타내는 튜플 타입 정의
// // // type UserInfo = [string, number, boolean];
// // // // 사용 예시
// // // let point1: Point = [10, 20];
// // // let point2: Point = [30, 40];
// // // let user1: UserInfo = ["Alice", 25, true];
// // // let user2: UserInfo = ["Bob", 30, false];
// // // // 위에서 정의한 Point 타입으로도 설정 가능
// // // function convertCoordinates(point: [number, number]): [number, number] {
// // //     return [point[0] * 2, point[1] * 2];
// // // }
// // // const [newX, newY] = convertCoordinates([10, 20]);
// // // // // 인터페이스
// // // // type Poet = {
// // // //     born: number;
// // // //     name: string;
// // // // };
// // // // 인터페이스를 이용해도 똑같은 객체 타입을 정의할 수 있음
// // // // (여기에서는, 사실상 같은 의미로 사용됨)
// // // interface Poet {
// // //     born: number;
// // //     name: string;
// // // }
// // // interface Page {
// // //     // readonly 키워드를 이용하여 text 속성을 읽기 전용 속성으로 설정
// // //     readonly text: string;
// // // }
// // // //readonly 키워드를 사용하여 읽기 전용 속성 정의 가능
// // // // 처음 값 설정시에는 문제 없으나
// // // let page: Page = { text: "Hello, world" };
// // // // 새로 값을 대입할 경우 에러 발생
// // // // Cannot assign to 'text' because it is a read-only property.
// // // // page.text = "Bye, world";
// // // function read(page: Page) {
// // //     // readonly 속성이므로 읽기는 가능
// // //     console.log(page.text);
// // //     // 값은 변경 불가
// // //     // Cannot assign to 'text' because it is a read-only property.
// // //     // page.text += "!";
// // // }
// // // // 해당 객체는 Page와 같은 모양새를 하고 있지만 Page 타입은 아님을 유의!
// // // const pageIsh = {
// // //     text: "Hello, world!",
// // // };
// // // // 따라서, text 값을 자유롭게 수정 가능
// // // pageIsh.text += "!";
// // // // 하지만, 해당 객체를 read 함수로 넘기면, 내부적으로 Page 타입으로 취급하므로 readonly로 수정 불가
// // // read(pageIsh);
// // // // 메서드가 포함된 인터페이스 예시
// // // interface Logger {
// // //     logMessage(message: string): void;
// // // }
// // // // 인터페이스를 구현하는 객체
// // // const consoleLogger: Logger = {
// // //     // 메서드 구현
// // //     logMessage(message) {
// // //         console.log(`[LOG]: ${message}`);
// // //     }
// // // };
// // // // [LOG]: This is a log message.
// // // consoleLogger.logMessage("This is a log message.");
// // //Q) 다음과 같은 결과로 계산이 될 수 있도록 Calculator 인터페이스를 정의하고 해당 인터페이스를 따르는 객체를 대입받은 calc 변수 생성
// // // 인터에 정의
// // interface Calculator {
// //     add(a: number, b: number): number;
// //     subtract(a: number, b: number): number;
// // }
// // // 인터페이스 구현 객체 이게 이제 사용하는거
// // const calc: Calculator = {
// //     add: (a, b) => a + b,
// //     subtract: (a, b) => a - b
// // };
// // // 값 주입
// // const result1 = calc.add(1, 2);
// // const result2 = calc.subtract(5, 3);
// // // 출력
// // console.log(result1, result2);
// // // 중첩 인터페이스
// // // 인터페이스 확장
// // interface Writing {
// //     title: string;
// // }
// // // 인터페이스 상속 (자바 언어와 같다고 이해)
// // // (기존의 Writing 인터페이스에 포함된 title 속성을 포함하면서 pages 속성을 추가한 Novella 인터페이스 정의)
// // interface Novella extends Writing {
// //     pages: number;
// // }
// // // Novella 인터페이스를 준수하는 객체 대입
// // let myNovella: Novella = {
// //     title: "Ethan Frome",
// //     pages: 195,
// // };
// // interface WithNullableName {
// //     // name은 string이거나 null일 수 있음
// //     name: string | null;
// // }
// // // 더 좁은 타입으로의 재정의는 가능하지만
// // interface WithNonNullableName extends WithNullableName {
// //     // string은 "string | null"의 부분 집합 타입이므로 가능
// //     name: string;
// // }
// // // // 더 넓은 타입으로의 재정의는 불가
// // // // "number | string" 타입의 값을 "string | null"에 할당할 수 없음
// // // interface WithNumericName extends WithNullableName {
// // //     name: number | string;
// // // }
// // // // 부모 인터페이스
// // // interface Parent {
// // //     value: string;
// // // }
// // // // 자식 인터페이스가 부모를 확장하면서 value 타입을 넓힘
// // // interface Child extends Parent {
// // //     value: string | number; // 더 넓은 타입으로 확장
// // // }
// // // // Parent 타입을 기대하는 함수
// // // const processParent = (p: Parent) => {
// // //     // Parent.value가 string이라고 가정하고 toLowerCase() 호출
// // //     console.log(p.value.toLowerCase());
// // // };
// // // // Child 인스턴스 생성 (value에 number 사용)
// // // const child: Child = {
// // //     value: 123, // number를 허용
// // // };
// // // // 런타임 에러: 123.toLowerCase는 함수가 아닙니다. => 문제 발생!
// // // processParent(child); 
// interface GivesNumber {
//     giveNumber(): number;
// }
// interface GivesString {
//     giveString(): string;
// }
// // 두 인터페이스를 동시에 확장하며 메서드 추가 정의
// interface GivesBothAndEither extends GivesNumber, GivesString {
//     giveEither(): number | string;
// }
// // 타입 별칭 정의
// type Animal = {
//     name: string;
//     color: string;
// };
// // 타입 별칭을 확장하는 인터페이스
// interface Dog extends Animal {
//     breed: string;
// }
// // 인터페이스 병합
// interface Merged {
//     fromFirst: string;
// }
// // 똑같은 이름의 인터페이스를 정의하면서 추가 속성 정의 가능
// // (마치 인터페이스를 확장한 것처럼 인터페이스에 추가 속성이 포함됨)
// interface Merged {
//     fromSecond: number;
// }
// // fromFirst, fromSecond를 모두 포함한 객체 생성 가능
// let merged: Merged = {
//     fromFirst: "Hello",
//     fromSecond: 123,
// };
// // Window, Document, HTMLElement 등 브라우저 환경에서 사용되는 모든 웹 API들의 타입 정의가 포함되어 있는 "lib.dom.d.ts"에 정의된 Window 인터페이스를 확장
// interface Window {
//     myEnvironmentVariable: string;
// }
// window.myEnvironmentVariable;
// // 인덱스 시그니쳐 활용
// interface WordCounts {
//     // 모든 string 키에 대해 number 타입 값을 가질 수 있음
//     [key: string]: number;
// }
// const counts: WordCounts = {};
// counts.apple = 1; // OK
// counts.banana = 2; // OK
// // // Error: string을 number에 할당할 수 없음
// // counts.cherry = "three";
// interface Dictionary {
//     // 모든 string 키에 대해 string 타입 값을 가질 수 있음
//     [key: string]: string;
// }
// const dict: Dictionary = {
//     apple: "사과",
//     banana: "바나나",
//     cherry: "체리"
// };
// // 제공할 수 있는 설정값을 string, number, boolean 타입의 값으로 제한
// interface Config {
//     [setting: string]: string | number | boolean;
// }
// const appConfig: Config = {
//     apiUrl: "https://api.example.com",
//     timeout: 5000,
//     enableCache: true,
//     // 어떤 이름의 설정이든 추가 가능
//     newSetting: "value",
//     // Error: object 타입은 허용되지 않음
//     // oops: {}
// };
// interface ApiResponse {
//     // 응답코드를 저장할 status라는 키를 포함해야 하며, 반드시 숫자값이어야 함
//     status: number;
//     // 그 외에 어떤 문자열 키든 추가할 수 있지만, 그 값은 "string | number | boolean | object" 타입이어야 함
//     [key: string]: string | number | boolean | object;
// }
// const response: ApiResponse = {
//     status: 200,
//     data: { id: 1, name: "Product" },
//     success: true,
//     message: "OK"
// };
// // 인터페이스 vs 타입 별칭
// /* 이후에도 여러 코드에서 사용될 객체의 형태를 정의할 때는 인터페이스를, 
// adhoc하게 일회성으로 사용할 타입 조합이 필요할 때는 타입 별칭을 사용하는 것이 일반적인 가이드라인
// 차이1) 인터페이스는 선언 병합 가능, 타입 별칭은 불가 */
// // 1. 선언 병합
// // 인터페이스는 가능
// interface User {
//     name: string;
// }
// interface User {
//     age: number;
// }
// // 결과적으로 User는 { name: string; age: number; }
// // // 타입 별칭은 불가능
// // type Animal = {
// //     name: string;
// // }
// // // Error: Duplicate identifier 'Animal'
// // type Animal = {
// //   age: number;
// // }
// // 2. 확장 방식
// // 인터페이스는 extends 키워드 사용
// interface Vehicle {
//     wheels: number;
// }
// interface Car extends Vehicle {
//     doors: number;
// }
// // 타입 별칭은 교차 타입(&) 사용
// type Shape = {
//     color: string;
// };
// type Circle = Shape & {
//     radius: number;
// };
// // 3. 유니온 타입 정의
// // 성공 응답 타입
// interface Success {
//     status: "success";
//     data: string;
// }
// // 에러 응답 타입
// interface Error {
//     status: "error";
//     message: string;
// }
// // 인터페이스는 유니언 타입 정의 불가 
// // (애초에 =를 이용한 대입 자체가 불가)
// // interface Status = Success | Error;
// // 타입 별칭으로는 유니언 타입 정의 가능
// type StatusType = Success | Error;
// 클래스 (기초)
var Student = /** @class */ (function () {
    // 생성자
    function Student(name, age, id) {
        this.name = name;
        this.age = age;
        this.grade = 1;
        this.id = id;
    }
    // 메서드
    Student.prototype.study = function (subject) {
        console.log("".concat(this.name, "\uC774(\uAC00) ").concat(subject, "\uB97C \uACF5\uBD80\uD569\uB2C8\uB2E4."));
    };
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    Student.prototype.promote = function () {
        this.grade += 1;
    };
    return Student;
}());
// 인스턴스 생성 및 활용 예시
var student = new Student("Kim", 20, "2024-001");
student.study("TypeScript"); // "Kim이(가) TypeScript를 공부합니다."
student.promote();
console.log(student.getGrade()); // 2
