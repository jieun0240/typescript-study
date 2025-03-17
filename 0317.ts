// // // // song의 타입을 any로 추정함
// // // function sing(song) {
// // //     console.log(`Singing: ${song}!`);
// // // }

// // // // song의 타입을 명시적으로 string으로 설정
// // // function singOne(song: string) {
// // //     console.log(`Singing: ${song}!`);
// // // }

// // // // 두 개의 파라미터를 설정하였으므로 인자를 반드시 2개 전달해야 함
// // // function singTwo(first: string, second: string) {
// // //     console.log(`${first} / ${second}`);
// // // }

// // // // OK
// // // singTwo("I Will Survive", "Higher Love");

// // // // 하나만 전달했으므로 에러
// // // // Error: Expected 2 arguments, but got 1.
// // // singTwo("Ball and Chain");

// // // // 초과 전달도 에러로 처리함을 유의
// // // singTwo("Go Your Own Way", "The Chain", "Dreams");

// // // // singer 값은 선택적으로 전달할 수 있도록 선택적 파라미터로 정의
// // // function announceSong(song: string, singer?: string) {
// // //     console.log(`Song: ${song}`);
// // //     // singer 값이 전달되었다면 출력
// // //     if (singer) {
// // //         console.log(`Singer: ${singer}`);
// // //     }
// // // }

// // // function announceSongBy(song: string, singer: string | undefined) { /* ... */ }

// // // rating 값은 선택적으로 전달할 수 있으며, 전달되지 않을 경우 기본값 0으로 설정됨
// // // 이 때 rating의 타입은 "number | undefined"가 됨
// // function rateSong(song: string, rating = 0) {
// //     console.log(`${song} gets ${rating}/5 stars!`);
// // }

// // // // rating은 선택적 파라미터로 취급되므로 값을 전달하지 않아도 됨 (0으로 전달)
// // // rateSong("Photograph");
// // // rateSong("Set Fire to the Rain", 5);
// // // // rating의 값이 undefined가 아니고 기본값인 0으로 설정됨
// // // rateSong("Hello", undefined);

// // // 나머지 매개변수(...)을 사용한 songs 파라미터는 가변 길이의 문자열 배열을 받게 됨
// // function singAllTheSongs(singer: string, ...songs: string[]) {
// //     for (const song of songs) {
// //         console.log(`${song}, by ${singer}`);
// //     }
// // }


// // // 첫 번째로 전달한 값은 모두 singer 파라미터의 값으로 설정됨
// // singAllTheSongs("Alicia Keys");
// // // "Bad Romance" 문자열부터 songs 배열에 포함됨
// // singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");


// // // 반환 타입을 "number"로 추론
// // function singSongs(songs: string[]) {
// //     for (const song of songs) {
// //         console.log(`${song}`);
// //     }
// //     // 반환문을 통해서 반환하는 값이 숫자
// //     return songs.length;
// // }




// // 함수 타입

// // add 변수에 함수 저장
// let add = function(a: number, b: number) {
//     return a + b;
// }

// /* 
//     (인자1: 타입1, 인자2: 타입2, ..., 인자n: 타입n) : 반환타입

//     예시)

//     () => string
//     (a: number, b: number) => number
//     (singer: string, songs: string[]) => void
// */

// // 어떤 인자값도 전달 받지 않고 문자열을 반환하는 함수를 저장할 수 있는 변수
// let f1: () => string;
// // 두 개의 숫자값을 전달 받아 숫자를 반환하는 함수를 저장할 수 있는 변수
// let f2: (a: number, b: number) => number;
// // 한 개의 필수 문자열과 선택적 문자열 배열을 전달 받지만, 반환값은 없는 함수를 저장할 수 있는 변수
// let f3: (singer: string, songs?: string[]) => void;

// // 화살표 함수 정의
// let arrow1 = (a: number, b: number): number => a + b;
// let arrow2 = (a: number, b: number) => a + b;

// const numbers = [1, 2, 3];
// // 그냥 다 써줘도 되지만
// const doubled1 = numbers.map((num: number): number => num * 2);
// // 파라미터, 반환값 타입을 생략해도 타입스크립트가 추론 가능
// // num 파라미터로 number로 추론
// const doubled2 = numbers.map(num => num * 2);

// // ====
// const songs = ["song1", "song2", "song3"];
// // 전달받은 인자 값의 함수 타입은 숫자 하나를 전달받아 문자열을 반환하는 함수
// function runOnSongs(getSongAt: (index: number) => string) {
//     for (let i = 0; i < songs.length; i += 1) {
//         console.log(getSongAt(i));
//     }
// }
// function getSongAt(index: number) {
//     return `${songs[index]}`;
// }
// // 함수 타입이 일치하므로 전달 가능
// runOnSongs(getSongAt);

// function logSong(song: string) {
//     return `${song}`;
// }
// // 함수 타입이 일치하지 않으므로 전달 불가
// // runOnSongs(logSong);


// // 문자열을 하나 받아 숫자를 반환하는 함수 타입에 타입 별칭 붙여주기
// type StringToNumber = (input: string) => number;
// // 이후 타입 별칭을 이용하여 타입 설정
// let stringToNumber: StringToNumber;

// // OK
// stringToNumber = (input) => input.length;
// // 에러
// // stringToNumber = (input) => input.toUpperCase();


// let singer: (song: string) => string;
// // singer 타입을 보고 song의 타입을 string으로 추론 가능 (물론, 직접 명시해도 무방함)
// singer = function (song) {
//     // 이 블록 내부에서 song은 string 타입으로 취급
//     return `Singing: ${song.toUpperCase()}!`;
// };

// const songs1 = ["Call Me", "Jolene", "The Chain"];
// // song을 string 타입으로 index를 number 타입으로 추론
// // (forEach의 콜백 함수 중 첫 번째는 제네릭 타입으로 전달받은 songs의 타입으로 보고 추론 가능, 두 번째 index 값은 number 타입으로 고정)
// songs.forEach((song, index) => {
//     console.log(`${song} is at index ${index}`);
// });









// 특수한 반환 타입

// void
function logSong(song: string | undefined): void {
    if(!song) {
        // 값을 반환하지 않고 함수 return
        return;
    }
    console.log(`${song}`);

    // 명시적으로 값을 반환하지 않도록 void로 설정하였으므로 에러 발생
    // Type 'boolean' is not assignable to type 'void'
    // return true;
}

// 다음 세 함수는 모두 유효
function nothingA(): void {
    // 암묵적으로 undefined 반환
}

function nothingB(): void {
    return; // 명시적으로 undefined 반환
}

function nothingC(): void {
    return undefined; // 직접 undefined 반환
}



// never

// 내부적으로 반드시 에러가 발생하여 값이 반환될 일이 없으므로 반환 타입을 never로 설정
function fail(message: string): never {
    throw new Error(`Invariant failure: ${message}`);
}

// 내부적으로 무한 반복 로직이 진행되어 값이 반환될 일이 없으므로 반환 타입을 never로 설정
function infiniteLoop1(): never {
    while (true) {
        console.log("Looping!");
    }
}

// // 단, 종료 조건이 명확하여 함수가 종료될 수 있는 경우 never 타입 설정과 관련된 에러가 발생함
// // A function returning 'never' cannot have a reachable end point.
// function infiniteLoop2(): never {
//     let i = 0
//     while (i !== 100) {
//         console.log("Looping!");
//         i += 1;
//     }
// }

// function startServer(): never {
//     // 서버 초기화
//     setupDatabase();
//     initializeRoutes();
    
//     // 서버 시작하고 영원히 실행
//     while (true) {
//         handleConnections();
//         processRequests();
//         // ... 기타 서버 작업
//     }
// }




// // 함수 오버로드

// // 오버로드 시그니처
// function add(a: number, b: number): number;
// // 오버로드 시그니처 2: 문자열 연결 기능
// function add(a: string, b: string): string;

// // 실제 구현부
// function add(a: number | string, b: number | string) {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;  // 숫자 더하기
//     }
//     if (typeof a === "string" && typeof b === "string") {
//         return a + b;  // 문자열 연결
//     }
//     throw new Error("인자는 모두 숫자이거나 모두 문자여야 합니다");
// }

// // 사용 예시
// console.log(add(1, 2)); // 3
// console.log(add("Hello ", "World")); // "Hello World"

// // 아래와 같은 호출이 가능하도록 오버로드 시그니쳐가 정의되지 않았으므로, 에러 발생
// // add(1, "2"); 

// // 오버로드 시그니처
// function calculateArea(radius: number): number;

// function calculateArea(width: number, height: number): number;

// function calculateArea(a: number, b?: number): number {
//     if (b === undefined) {
//         // 원의 면적
//         return Math.PI * a * a;
//     } else {
//         // 직사각형의 면적
//         return a * b;
//     }
// }





// // 타입 가드 함수

// // Animal, Dog, Cat 타입 별칭 정의
// type Animal = {
//     name: string;
// };
// type Dog = Animal & {
//     isBark: boolean;
// };
// type Cat = Animal & {
//     isScratch: boolean;
// };

// // 타입 가드 함수 정의
// // Dog 타입인지 판별하는 타입 가드 함수 정의
// // (반환 타입(animal is Dog)를 주목할 것)
// function isDog(animal: Animal): animal is Dog {
//     // 내용은 자유롭게 적어도 되고, 해당 타입임을 확인할 수 있는 조건 혹은 조건들을 검사하여, 최종적으로 boolean 값을 반환하도록 작성
//     return 'isBark' in animal;
// }
// // Cat 타입인지 판별하는 타입 가드 함수 정의
// function isCat(animal: Animal): animal is Cat {
//     return 'isScratch' in animal;
// }

// function dogOrCat(pet: Animal) {
//     // 타입 가드 함수를 활용하여, pet이 Dog 타입인지, Cat 타입인지 확인
//     if (isDog(pet)) {
//         // 타입 확인해보면 Dog 타입임을 확인 가능
//         console.log(`${pet.name}은 개입니다.`);
//     } else if (isCat(pet)) {
//         // 타입 확인해보면 Cat 타입임을 확인 가능
//         console.log(`${pet.name}은 고양이입니다.`);
//     }
// }

// const dog: Dog = { name: '멍멍이', isBark: true };
// const cat: Cat = { name: '야옹이', isScratch: true };
// dogOrCat(dog); // 멍멍이는 개입니다.
// dogOrCat(cat); // 야옹이는 고양이입니다.



// 배열

// // 허용
// const elements = [true, null, undefined, 42];
// // 이후에 문자열, 다른 배열 값도 추가 가능
// elements.push("even", ["more"]);


// // elements의 타입은 "(number | boolean | null | undefined)[]"으로 추론됨
// const elements = [true, null, undefined, 42];
// // 혹은 any 타입으로 설정
// const elements: any[] = [true, null, undefined, 42];

// // 타입을 string[]로 설정하여 문자열 배열임을 명시
// const stringArray: string[] = ["a", "b", "c"];
// stringArray.push("d");
// // 에러 발생
// stringArray.push(1);

// // 포함된 값들을 통해서 number[] 타입으로 추론
// const numberArray = [1, 2, 3];
// numberArray.push(4);
// // 에러 발생
// numberArray.push("Hello");

// const numberArray: Array<number> = [1, 2, 3];

// // 직접 유니언 타입의 배열 타입으로 정의하거나
// const namesMaybe1: (string | undefined)[] = ["Aqualtune", "Blenda", undefined];

// // 알아서 "(string | undefined)[]" 타입으로 추론
// const namesMaybe2 = ["Aqualtune", "Blenda", undefined];

// // never[] 타입으로 유추하므로, 이후 어떠한 값도 저장 불가
// let emptyArray = [];
// // let emptyArray: string = [];

// // any[] 타입으로 명시하면 어떠한 타입의 값도 저장 가능 (권장 X)
// let anyArray: any[] = [];
// anyArray.push(1);
// anyArray.push("hello");

// // 문자열 배열을 반환하는 함수 타입
// let createStrings: () => string[];
// // 문자열을 반환하는 함수의 배열
// let stringCreators: (() => string)[];
// // 문자열이나 숫자 배열을 저장할 수 있는 변수
// let stringOrArrayOfNumbers: string | number[];
// // 문자열 혹은 숫자를 저장할 수 있는 배열을 저장할 수 있는 변수
// let arrayOfStringOrNumbers: (string | number)[];


// 읽기 전용 배열

// ReadonlyArray<T> 형식으로 선언
const readOnlyNumbers: ReadonlyArray<number> = [1, 2, 3, 4];
// readonly T[] 형식으로도 선언 가능
const readOnlyStrings: readonly string[] = ["a", "b", "c"];
// // 일반 배열에 읽기 전용 배열 직접 할당은 불가
// const regularNumbers: number[] = readOnlyNumbers;
// 스프레드 연산자(...)를 통한 배열값 복사는 가능 (이 경우에는 새로운 배열을 생성)
const copyOfNumbers: number[] = [...readOnlyNumbers];


// 파라미터로 값이 전달되는 과정에서 읽기 전용 배열로 취급됨
function calculateSum(numbers: readonly number[]): number {
    // 따라서, 함수 내부에서는 내용 수정 불가
    // numbers.push(5);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const arr = [1, 2, 3, 4];
const sum = calculateSum(arr);
console.log(sum); // 10
// 원본 데이터인 arr은 읽기 전용 배열이 아니므로, 함수 바깥에서는 수정 가능함을 유의
arr.push(5);