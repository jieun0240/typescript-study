// /// <reference lib="esnext" />

// function getRandomNumber(): Promise<number> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = false;
//             const random = Math.random();
//             if (success) {
//                 // 정상적으로 작업이 되면 resolve 함수로 랜덤 숫자 반환
//                 resolve(Math.floor(random * 100));
//             } else {
//                 // 실패시 reject 함수로 에러 객체 전달
//                 reject(new Error("숫자 생성에 실패했습니다"));
//             }
//         }, 500);
//     });
// }

// function displayRandomNumber() {
//     // catch 블록을 사용한 에러 처리
//     getRandomNumber()
//         .then(num => {
//             console.log(`생성된 랜덤 숫자: ${num}`);
//         })
//         .catch(error => {
//             // Error 객체인지 확인 후
//             if (error instanceof Error) {
//                 // 에러 메시지 출력
//                 console.error("오류 발생:", error.message);
//             }
//         });
// }

// displayRandomNumber();



// function getRandomNumber(): Promise<number> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = false;
//             const random = Math.random();
//             if (success) {
//                 resolve(Math.floor(random * 100));
//             } else {
//                 const errorType: any = "number";
//                 // 실패시 reject 함수로 에러 객체, 문자열, 숫자와 같은 다양한 타입값 전달
//                 if(errorType === "error") reject(new Error("숫자 생성에 실패했습니다"));
//                 else if(errorType === "number") reject(1);
//                 else if(errorType === "string") reject("a");
//             }
//         }, 500);
//     });
// }

// function displayRandomNumber() {
//     getRandomNumber()
//         .then(num => {
//             console.log(`생성된 랜덤 숫자: ${num}`);
//         })
//         // 여기서 error는 any 타입
//         .catch(error => {
//             // Error 객체인지 확인 후 (타입 좁히기)
//             if (error instanceof Error) {
//                 // 에러 메시지 출력
//                 console.error("오류 발생:", error.message);
//             } else {
//                 // Error 객체가 아닌 경우, typoef 연산자로 타입을 좁혀 다른 처리 가능
//                 if(typeof error === "number") console.log("숫자 오류 발생:", error);
//                 if(typeof error === "string") console.log("문자열 오류 발생:", error);
//             }
//         });
// }

// displayRandomNumber();




// // async 함수 활용

// // async 키워드를 사용하여 비동기 함수 정의
// // 반환 타입 안 써도 Promise<number> 타입으로 추론됨
// async function fetchNumber() {
//     // 1초 동안 기다리기
//     await new Promise((resolve) => setTimeout(resolve, 1000)); 
//     // 이후 숫자 반환 (숫자를 반환해도 async 함수이므로 자동으로 Promise로 감싼 Promise<number> 타입값이 반환됨을 유의)
//     return Math.floor(Math.random() * 100);
// }

// // 비동기 함수가 종료되기를 await 키워드를 이용하여 대기하고, 반환된 숫자를 출력하기 위해서 역시 같은 async 함수를 정의
// async function getNumber() {
//     const num = await fetchNumber();
//     console.log(num.toFixed(2)); // 타입 안전한 메서드 호출 가능
// }

// // 비동기 함수 실행
// getNumber();

// // getNumber는 비동기 함수이므로, 이후 작성된 코드가 바로 실행됨을 유의
// console.log("다른 작업 실행");

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

// 다양한 반환 데이터 타입을 지원하는 API 요청 함수 (비동기 함수 버전)
async function apiRequest<T>(endpoint: string): Promise<T> {
    // fetch 함수가 비동기 함수이므로 await 키워드로 동기식 처리
    const response = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json() as Promise<T>;
}

// async/await을 적용한 getUserData 함수
async function getUserData(userId: number): Promise<void> {
    // async/await 문법을 사용하므로, catch 메서드가 아닌, try/catch 문을 사용하여 에러 처리 가능
    try {
        const data = await apiRequest<User>(`/users/${userId}`);
        console.log(`아이디: ${data.id}\n이름: ${data.name}\n이메일: ${data.email}`);
    } catch (error) {
        console.error("API 요청 실패:", error);
    }
}

// async/await을 적용한 getTodoData 함수
async function getTodoData(todoId: number): Promise<void> {
    try {
        const data = await apiRequest<Todo>(`/todos/${todoId}`);
        console.log(`사용자 아이디: ${data.userId}\n할 일: ${data.title}\n완료 여부: ${data.completed}`);
    } catch (error) {
        console.error("API 요청 실패:", error);
    }
}

getUserData(1);
getTodoData(1);

// getUserData, getTodoData 모두 비동기 함수이므로, 이후 작성된 코드가 바로 실행됨을 유의
console.log("다른 작업 실행");