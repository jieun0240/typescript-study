/// <reference lib="esnext" />
// // **제네릭 함수**

// // 제네릭 함수 정의
// // 꺽쇠 내부의 타입인 T가 함수 호출 시점에 정해짐
// // (여기서 대문자 T는 예약어 같은 것이 아니라, 그냥 파라미터 이름처럼 내부적으로만 쓰이는 별명임을 유의)
// function identity<T>(input: T): T {
//     return input;
// }

// // 함수 사용 예시
// const myString1 = identity("hello"); // T는 string으로 추론
// const myNumber = identity(123); // T는 number로 추론

// // 다음과 같이 직접 타입을 명시적으로 설정해도 됨
// const myString2 = identity<string>("hello");

// // // 화살표 함수에서의 제네릭 (거의 안 씀)
// // const identity1 = <T>(input: T): T => input;

// /* 
// 제네릭의 주요 특징
//     1. 타입 파라미터를 통해 타입을 마치 변수처럼 사용
//     2. 함수나 클래스의 재사용성을 높임
//     3. 컴파일 시점의 타입 검사를 통해서 타입 안전성을 유지
// */

// function identity2<T>(input: T): T {
//     // T 형식에 length 속성이 있다는 보장이 없음 => 에러
//     // console.log(input.length);

//     // T 형식에 toUpperCase 메서드가 있다는 보장이 없음 => 에러
//     // input.toUpperCase();
    
//     // 타입에 제약 없는 기본적인 작업(출력, 값 반환)만 수행 가능
//     console.log(input);
//     return input;
// }



// // 제네릭은 데이터를 저장하고 조회하는 자료구조 클래스를 구현할 때 주로 활용됨
// // 데이터 저장 및 조회를 지원하는 제네릭 클래스 List 정의
// class List<T> {
//     constructor(private list: T[]) {}
//     push(data: T) {
//         this.list.push(data);
//     }
//     pop() {
//         return this.list.pop();
//     }
//     print() {
//         console.log(this.list);
//     }
// }

// const numberList = new List([1, 2, 3]);
// numberList.push(4);
// const stringList = new List(["a", "b"]);
// stringList.push("c");


// // 콜백 함수의 매개변수 타입을 알 수 없는 경우
// function logWrapper<Input>(callback: (input: Input) => void) {
//     // ...
// }

// // // 타입 추론 실패 - Input이 unknown으로 취급됨
// // logWrapper((input) => {
// //     // unknown 타입에는 length 속성이 없음 => 에러
// //     input.length;
// // });

// // 명시적으로 string 타입을 지정
// logWrapper<string>((input) => {
//     // input이 string임을 알고 있으므로 허용
//     input.length;
// });

// // First, Second라는 이름의 제네릭 타입을 설정하여 호출하는 제네릭 함수 정의
// function makeTuple<First, Second>(first: First, second: Second) {
//     return [first, second] as [First, Second];
// }

// // 전달된 값에 따라서, 타입을 자동 추론하므로 명시적 타입 지정 불필요
// let tuple = makeTuple(true, "abc"); // Frist => boolean, Second => string 으로 추론

// // 물론, 명시적으로 타입을 지정해도 무방함
// let tuple2 = makeTuple<number, string>(42, "hello");




// // 제네릭 인터페이스

// // 제네릭 인터페이스 정의
// // 구체적인 T 타입은 인터페이스 타입을 정의하는 시점에 전달
// interface Box<T> {
//     inside: T;
// }

// // string 타입의 Box
// let stringBox: Box<string> = {
//     // string 값 저장
//     inside: "abc"
// };

// // number 타입의 Box
// let numberBox: Box<number> = {
//     // number 값 저장
//     inside: 123
// };

// // // 잘못된 타입 할당
// // let incorrectBox: Box<number> = {
// //     // boolean은 number에 할당할 수 없음
// //     inside: false
// // };




// // 제네릭 클래스

// // 제네릭 클래스 정의
// class Secret<Key, Value> {
//     key: Key;
//     value: Value;

//     constructor(key: Key, value: Value) {
//         this.key = key;
//         this.value = value;
//     }

//     getValue(key: Key): Value | undefined {
//         return this.key === key
//             ? this.value
//             : undefined;
//     }
// }

// // number 타입의 키와 string 타입의 값을 가지는 Secret 인스턴스
// const storage = new Secret<number, string>(12345, "luggage");
// // v의 타입은 "string | undefined" 타입
// const v = storage.getValue(1987);




// // 부모 클래스(제네릭 클래스) 정의
// class Quote<T> {
//     lines: T;
//     constructor(lines: T) {
//         this.lines = lines;
//     }
// }

// // 구체적인 타입(여기서는 string 배열)을 지정하여 상속
// class SpokenQuote extends Quote<string[]> {
//     // 고유 메서드 정의
//     speak() {
//         // T가 string 배열 타입임을 알고 있으므로, join 메서드 호출에 문제가 없음
//         console.log(this.lines.join("\n"));
//     }
// }

// // Value라는 다른 이름의 타입 매개변수를 사용
// class AttributedQuote<Value> extends Quote<Value> {
//     speaker: string;
    
//     constructor(value: Value, speaker: string) {
//         super(value);
//         this.speaker = speaker;
//     }
// }

// new Quote("The only real failure is the failure to try.").lines; // Type: string
// new Quote([4, 8, 15, 16, 23, 42]).lines; // Type: number[]
// new SpokenQuote([
//     "Greed is so destructive.",
//     "It destroys everything",
// ]).lines; // Type: string[]

// // // 에러 발생
// // // Type 'number' is not assignable to type 'string'
// // new SpokenQuote([4, 8, 15, 16, 23, 42])
// new AttributedQuote(
//     "The road to success is always under construction.",
//     "Lily Tomlin",
// );




// // 제네릭 인터페이스의 상속

// // 제네릭 인터페이스 정의
// interface ActingCredit<Role> {
//     role: Role;
// }

// // 올바른 구현
// class MoviePart implements ActingCredit<string> {
//     // role은 반드시 string 타입
//     role: string;
//     speaking: boolean;

//     constructor(role: string, speaking: boolean) {
//         this.role = role;
//         this.speaking = speaking;
//     }
// }

// // // 잘못된 구현
// // class IncorrectExtension implements ActingCredit<string> {
// //     // boolean 타입으로 설정 불가
// //     role: boolean;
// // }





// // 제네릭 타입 Key를 전달받는 제네릭 클래스 정의
// class CreatePairFactory<Key> {
//     key: Key;

//     constructor(key: Key) {
//         this.key = key;
//     }

//     // 메서드 자체의 제네릭 타입 Value를 전달받은 제네릭 메서드 정의
//     createPair<Value>(value: Value) {
//         return { key: this.key, value };
//     }
// }

// // 사용 예시
// const factory = new CreatePairFactory("role"); // Key는 string
// // Value 타입이 number로 추론됨
// const numberPair = factory.createPair(10); // { key: string, value: number }
// // Value 타입이 string으로 추론됨
// const stringPair = factory.createPair("Sophie"); // { key: string, value: string }


// // 정적 메서드

// class BothLogger<OnInstance> {
//     // 인스턴스 메서드: 클래스의 제네릭 타입 OnInstance 사용 가능
//     instanceLog(value: OnInstance) {
//         console.log(value);
//         return value;
//     }

//     // 정적 메서드: 클래스의 제네릭 타입 OnInstance 사용 불가
//     // 대신 자체 제네릭 타입 OnStatic 정의
//     static staticLog<OnStatic>(value: OnStatic) {
//         console.log(value);
//         return value;
//     }
// }

// // 인스턴스 메서드 사용
// const logger = new BothLogger<number[]>();
// logger.instanceLog([1, 2, 3]); // OK

// // 정적 메서드 사용
// BothLogger.staticLog([false, true]); // 타입 추론
// BothLogger.staticLog<string>("메시지"); // 명시적 타입 지정




// // 기본 제네릭 타입

// // 제네릭 인터페이스를 정의하는 과정에서 T 제네릭 타입의 기본 타입을 string으로 설정
// interface Quote<T = string> {
//     value: T;
// }

// // 명시적으로 T 타입을 number로 설정
// let explicit: Quote<number> = { value: 123 };
// // 기본 타입이 string이므로 문제 없이 대입 가능
// let implicit: Quote = { value: "hello" };
// // // 제네릭 타입을 명시하지 않으면 "기본 타입으로 가정"하므로, 에러가 발생
// // // (전달된 값으로 T 타입을 추론하지 않는 점을 유의)
// // let mismatch: Quote = { value: 123 };











// // 제네릭 타입 제약

// // number 타입의 length 속성을 가진 인터페이스 정의
// interface WithLength {
//     length: number;
// }

// // 전달된 타입(T)은 WithLength 타입의 요구 조건을 만족해야 함
// function logWithLength<T extends WithLength>(input: T) {
//     // 이제 블록 내부에서 T가 length 속성이 있고 number 타입임을 가정 할 수 있음
//     console.log(`Length: ${input.length}`);
//     return input;
// }

// // 사용 예시
// // 허용 => string은 length 속성을 가짐 (문자열 길이)
// logWithLength("문자열");
// // 허용 => 배열도 length 속성을 가짐 (배열 크기)
// logWithLength([1, 2, 3]);
// // 허용 => length 속성을 직접적으로 포함한 임의의 객체 전달
// logWithLength({ length: 123 });
// // // Date 타입 객체에는 length 속성이 없으므로 전달 불가
// // logWithLength(new Date());

// type HasLength = {
//     length: number;
// }
// // 타입 별칭 전달
// function func2<T extends HasLength>(input: T) {}

// // 인라인으로 직접 타입 정의
// function func3<T extends { length: number }>(input: T) {}

// // 유니온 타입도 가능 (T는 문자열이거나 숫자 배열이어야 함)
// function func4<T extends string | number[]>(input: T) {}








// // Promise와 제네릭

// // Promise 인터페이스의 제네릭 타입을 사용하여 resolve될 값의 타입을 지정 가능
// interface Promise<T> {
//     then<TResult>(
//         onfulfilled?: (value: T) => TResult | Promise<TResult>,
//         onrejected?: (reason: any) => TResult | Promise<TResult>
//     ): Promise<TResult>;
//     catch<TResult>(
//         onrejected?: (reason: any) => TResult | Promise<TResult>
//     ): Promise<TResult>;
// }

// // // tsconfig.json 설정 없이 ES5 문법 이상의 최신 기능 사용하기 위해서 설정

// // Promise<number> 타입 - 숫자를 반환하는 Promise
// function fetchNumber(): Promise<number> {
//     // 프라미스 객체 반환
//     return new Promise<number>((resolve, reject) => {
//         // 1초 뒤
//         setTimeout(() => {
//             const randomNum = Math.random() * 100;
//             // resolve 함수를 호출하여 프라미스를 이행
//             resolve(Math.floor(randomNum));
//         }, 1000);
//     });
// }

// // 여기서 전달된 num 값은 number 타입으로 인식됨
// fetchNumber().then(num => {
//     console.log(num);
//     // 따라서, 타입 안전한 메서드 호출 가능
//     console.log(num.toFixed(2));
// });


// // 제네릭 타입 T를 받아서 Promise<T> 타입을 반환하는 함수 정의
// function fetchGenericData<T>(data: T, delay: number): Promise<T> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             // delay만큼 대기 후, 전달된 data를 그대로 resolve 함수에 전달
//             resolve(data);
//         }, delay);
//     });
// }

// // 제네릭 타입을 number로 설정했으므로, data로 100을 전달하고 result 타입은 number로 추론됨
// fetchGenericData<number>(100, 1000).then((result) => {
//     console.log(result.toFixed(2)); // 100.00
// });

// // 제네릭 타입을 string으로 설정했으므로, data로 "Hello"를 전달하고 result 타입은 string로 추론됨
// fetchGenericData<string>("Hello", 500).then((result) => {
//     console.log(result.toUpperCase()); // "HELLO"
// });

// // 제네릭 타입을 "{ name: string; age: number }"으로 설정했으므로, data로 같은 구조를 가진 객체를 전달하고 result 타입은 역시 같은 객체 리터럴 타입으로 추론됨
// fetchGenericData({ name: "Alice", age: 25 }, 1500).then((result) => {
//     console.log(`${result.name} is ${result.age} years old.`);
// });



// // 많이 사용함 (꼭 기억해두기)

// // 사용자 정보를 담을 타입 정의
// interface User {
//     id: number; 
//     name: string;
//     email: string;
// }

// // 반환 타입은 Promise<User> 타입
// // 여기서는 API 호출을 통해서 User 객체를 반환받으므로 User를 Promise 타입으로 감싸서 반환
// function fetchUser(id: number) {
//     // 비동기 작업(API 호출)을 진행
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then(response => {
//             // 정상 응답 코드가 아닌 경우
//             if (!response.ok) {
//                 // 에러 발생
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             // json 메서드도 비동기 작업으로 Promise<any> 타입을 반환하므로 형변환을 통해서 Promise<User> 객체를 반환하도록 함
//             return response.json() as Promise<User>;
//         });
// }

// // user는 User 타입으로 인식됨
// fetchUser(1).then(user => {
//     // 따라서 name, email 속성에 접근 가능
//     console.log(`"${user.name}"의 이메일은 "${user.email}"이며 아이디는 ${user.id}입니다.`);
// });

interface User {
    id: number;
    name: string;
    email: string;
}

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
// 다양한 반환 데이터 타입을 지원하는 API 요청 함수
function apiRequest<T>(endpoint: string): Promise<T> {
    // 적절한 endpoint로 바꿔주고 fetch 함수를 통해 데이터를 가져옴
    return fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // 전달한 T 타입으로 형변환
            return response.json() as Promise<T>;
        });
}

function getUserData(userId: number): Promise<void> {
    return apiRequest<User>(`/users/${userId}`)
        .then(data => {
            console.log(`아이디: ${data.id}\n이름: ${data.name}\n이메일: ${data.email}`);
        })
        .catch(error => {
            console.error("API 요청 실패:", error);
        });
}

function getTodoData(todoId: number): Promise<void> {
    return apiRequest<Todo>(`/todos/${todoId}`)
        .then(data => {
            console.log(`사용자 아이디: ${data.userId}\n할 일: ${data.title}\n완료 여부: ${data.completed}`);
        })
        .catch(error => {
            console.error("API 요청 실패:", error);
        });
}

getUserData(1);
getTodoData(1);