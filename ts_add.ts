// function tsAdd(x: number, y: number): number {
//     return x + y;
// }
// console.log(tsAdd(10,20));
// // console.log(tsAdd(10));
// // console.log(tsAdd(10,20,30));
// // console.log(tsAdd("10","20"));

// // let lengthOfWord = "hello".length;
// // let lengthOfWord = "hello".length();

// let randomString = Math.random() > 0.5 ? "hello" : "world";

// // 추론할 초기 대입값이 제공되지 않았으므로, 타입이 any로 추론됨
// // 근데 사실 any를 쓸거면 js를 ㅆ는게.... 이런 느낌이기 때문에 쓰지말자!!
// let anyValue;

// // 이후 아무 타입의 값이나 대입 가능
// anyValue = "hello";
// anyValue = 1234;

// // 단, 타입값에 대한 어떠한 가정도 하지 않으므로, 다음과 같이 존재하지 않는 속성 혹은 메서드 접근도 허용함을 유의
// anyValue.hello;
// anyValue.oops();

// // 초기 대입값이 없더라도, 명시적으로 타입을 선언할 수 있으므로 다음과 같이 타입을 설정하는 것이 권장됨
// let explicitValue: string;
// explicitValue = "world"; // OK
// // explicitValue = 1234; // 컴파일 오류!

// let someStringValue = "hello";
// someStringValue.toUpperCase();
// // 다음과 같이 메서드 이름에 오타를 친 경우에도 미리 파악 가능 (자바스크립트의 경우 런타임에 파악 가능)
// // someStringValue.toUperCase();

// let someNumberValue = 1234;
// // 숫자 타입 값에 존재하는 toFixed 메서드 호출 허용
// someNumberValue.toFixed(1);


//유니언 타입
let value1 = true ? 1 : "Hello";
// // 해당 메서드는 number 타입에만 존재 => 에러
// value1.toFixed();
// // 해당 메서드는 string 타입에만 존재 => 에러
// value1.toUpperCase();


// //타입 좁히기 (Narrowing)
// value1 = "Hello";
// // 대입된 값을 통해 현재 string 으로 타입값이 결정된 상황이므로, 문자열 관련 메서드 사용 가능
// value1.toUpperCase();
// // 단, 숫자 관련 메서드는 사용 불가
// value1.toFixed();  

// 직접 타입 체크
if (typeof value1 === "number") {
    // 이후 number 타입임이 확실시 되었으므로 toFixed 메서드 활용 가능
    value1.toFixed();
}

// 혹은 다음과 같이 직접 값의 내용을 체크 한 후
if (value1 === "Hello") {
    // string 타입임이 확실시 되었으므로 toUpperCase 메서드 활용 가능
    value1.toUpperCase();
}

// // 단, if 블록을 빠져나오면 실제 대입된 값의 타입을 확신할 수 없으므로 여전히 에러가 발생함을 유의
// value1.toFixed(); // 에러 발생
// value1.toUpperCase(); // 에러 발생


let value2: string | null = null;


//리터럴 타입 (Literal Type)
const constValue1 = "Hello";
//이렇게 사용하면 hello 타입 지정
let v: "Hello" = "Hello";

let direction: "East" | "West" | "South" | "North";
direction = "East";
// 방향과 관련된 4개의 문자열이 아니면 값 대입 불가
// direction = "Wsr";

let oneOrTwo: "one" | "two" | 1 | 2;
// 모두 가능
oneOrTwo = "one";
oneOrTwo = 2;

let stringOrNull = Math.random() > 0.5 ? "Hello" : null;

// 값이 null일 수도 있으므로 에러 발생
// 'stringOrNull' is possibly 'null'
// stringOrNull.toUpperCase();

// 다음과 같이 명시적으로 null 체크를 통해서(좁히기)
if(stringOrNull !== null) {
    // 값이 string 임을 확실히 하였으므로 메서드 사용 가능
    console.log(stringOrNull.toUpperCase());
}
// 혹은 truthy 체크를 할 수도 있음
if(stringOrNull) {
    console.log(stringOrNull.toUpperCase());
}

//템플릿 리터럴 타입 (*) *은 애매하신.. 근데 알면 좋으니까!!
type Greeting = `Hello, ${string}`;
const greet1: Greeting = "Hello, world"; // OK
const greet2: Greeting = "Hello, John";  // OK
//앞 값은 이미 있어서 그런가봥
// const greet3: Greeting = "Hi, there"; // 에러

// 유니언 타입 1
type Color = 'red' | 'green' | 'blue';
// 유니언 타입 2
type Shade = 'light' | 'dark';

type ColorVariant = `${Shade}-${Color}`;

// 생성된 타입: 'light-red' | 'light-green' | 'light-blue' | 'dark-red' | 'dark-green' | 'dark-blue'
const color1: ColorVariant = 'light-red'; // OK
const color2: ColorVariant = 'dark-blue'; // OK
//위에랑 마찬가지임
// const color3: ColorVariant = 'bright-red'; // 에러

type EventName = 'click' | 'hover' | 'focus';

function handleEvent(event: `on${EventName}`) {
    console.log(`Handling ${event} event`);
}

handleEvent('onclick'); // OK
handleEvent('onhover'); // OK
handleEvent('onfocus'); // OK
// handleEvent('onblur'); // 에러