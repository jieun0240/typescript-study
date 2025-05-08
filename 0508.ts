// // Omit : 생략
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
// }

// // Pick 타입 적용 => 필요한 속성만 선택
// type PickUser = Pick<User, "id" | "name">;
// // 결과: { id: number; name: string }
// const user1: PickUser = { id: 1, name: "Alice" };

// // Omit 타입 적용 => 특정 속성을 제외하고 나머지를 유지
// type OmitUser = Omit<User, "email" | "password">;
// // 결과: { id: number; name: string }
// const user2: OmitUser = { id: 2, name: "Bob" };


// //Readonly : 읽기 전용 =================================================================================================================================
// interface User {
//     id: number;
//     name: string;
// }

// // Readonly 타입 적용 => 이후 모든 속성이 수정 불가능해짐
// const user: Readonly<User> = { id: 1, name: "Alice" };

// // 에러 발생 => 모든 속성이 읽기 전용 속성이 되었으므로 수정할 수 없음
// user.id = 2;
// user.name = "Bob";


// // as const를 이용하여 상수로 변경하는 것과의 차이점 

// // 1. Readonly 유틸리티 타입 사용 -----------------------------------------------------------------
// interface Config {
//     apiUrl: string;
//     maxRetries: number;
// }
// // 객체의 프로퍼티를 읽기 전용으로 만들지만 기존 속성 타입을 리터럴 타입으로 좁히지 않음
// const config1: Readonly<Config> = {
//     apiUrl: "https://api.example.com",
//     maxRetries: 3
// };
// // 에러 => 읽기 전용 속성이므로 값을 할당할 수 없음 (하지만 apiUrl의 타입은 여전히 'string'으로 넓은 타입)
// // config1.apiUrl = "new-url";

// // 2. as const 사용  -------------------------------------------------------------------------------
// // 객체를 읽기 전용으로 만들고 모든 값을 정확한 리터럴 타입으로 좁힘
// const config2 = {
//     apiUrl: "https://api.example.com",
//     maxRetries: 3
// } as const;
// // 에러 => 읽기 전용 속성이므로 값을 할당할 수 없음 (apiUrl의 타입은 정확히 "https://api.example.com" 리터럴 타입으로 좁혀짐)
// // config2.apiUrl = "new-url";


// // Record =================================================================================================================================
// // Record는 객체의 키(Key)와 값(Value) 타입을 미리 지정할 수 있도록 도와주는 유틸리티 타입
// // 키와 값 타입의 타입 안정성이 확보된 일종의 Map이라고 이해해도 무방함

// // ex 1 ---------------------------------------------------------------------------------------------------------------------------------
// type UserRole = "admin" | "user" | "guest";

// // 사용자 아이디(string) key에 사용자 권한 정보 value를 매핑하는 객체
// const userRoles: Record<string, UserRole> = {
//     alice: "admin",
//     bob: "user",
//     charlie: "guest",
// };

// // 올바른 키(사용자 아이디)에 허용하는 권한 추가 => 정상 동작
// userRoles.david = "user";
// // // 에러 발생 => "superadmin"은 UserRole 타입에 없음
// // userRoles.eve = "superadmin";

// // ex 2 -----------------------------------------------------------------------------------------------------------------------------------
// // 다국어 지원 구현
// type Language = "en" | "ko" | "fr";

// // 다국어 메시지 매핑
// const messages: Record<Language, string> = {
//     en: "Hello",
//     ko: "안녕하세요",
//     fr: "Bonjour",
// };

// function getMessage(lang: Language): string {
//     return messages[lang];
// }

// console.log(getMessage("en")); // "Hello"
// console.log(getMessage("ko")); // "안녕하세요"
// console.log(getMessage("fr")); // "Bonjour"

// // ex 3 -----------------------------------------------------------------------------------------------------------------------------------
// // API 응답 상태 코드에 따른 메시지 정의
// type StatusCode = 200 | 404 | 500;

// const statusMessages: Record<StatusCode, string> = {
//     200: "Success",
//     404: "Not Found",
//     500: "Server Error"
// };

// function getStatusMessage(code: StatusCode): string {
//     return statusMessages[code];
// }

// console.log(getStatusMessage(404)); // "Not Found"



// // ReturnType =====================================================================================================================
// // 함수 정의
// function getUser(id: number) {
//     return { id, name: "Alice", email: "alice@example.com" };
// }

// // typeof 연산자를 통해서 "함수 타입" 추출
// // (id: number) => { id: number; name: string; email: string; }
// type GetUserType = typeof getUser;
// // 함수 타입 전달하여 "반환 타입" 추출
// // { id: number; name: string; email: string; }
// type UserType = ReturnType<GetUserType>;

// // 반환 타입으로 객체 생성
// const user: UserType = { id: 1, name: "Bob", email: "bob@example.com" };

// // Promise 타입값을 반환하는 비동기 함수에서 ReturnType 사용 예시 ----------------------------------------------------------------------
// // 비동기 함수 (혹은 프라미스를 반환하는 함수) 정의
// async function fetchData() {
//     return { success: true, data: [1, 2, 3] };
// }

// // ReturnType 적용시 반환 타입이 Promise인 것을 확인할 수 있음
// // Promise<{ success: boolean; data: number[]; }>
// type FetchDataReturnType = ReturnType<typeof fetchData>;
// // Awaited를 사용하여 프라미스가 해결(resolve)되었을 때의 타입을 추출
// type FetchDataResolvedType = Awaited<FetchDataReturnType>;
// // 단축하여 다음과 같이 코드 작성 가능
// type ResolvedType = Awaited<ReturnType<typeof fetchData>>;

// // ex 2 ------------------------------------------------------------------------------------------------------------------------------
// // 객체에 정의된 메서드의 반환 타입 추출
// const userService = {
//     getUser(id: number) {
//         return { id, name: "Charlie", age: 25 };
//     }
// };
// // 객체를 통해서 메서드를 접근하여 반환 타입 추출
// type GetUserReturnType = ReturnType<typeof userService.getUser>;

// // 클래스에 정의된 메서드의 반환 타입 추출
// class UserManager {
//     getUser(id: number) {
//         return { id, username: "user_" + id, isAdmin: false };
//     }
// }
// // 반환 타입 추출 (인스턴스 없이도 가능)
// type UserManagerReturnType = ReturnType<UserManager["getUser"]>;



// // Parameters =======================================================================================

// function add(a: number, b: number): number {
//     return a + b;
// }

// // Parameters 유틸리티 적용
// // AddParams 타입은 [number, number] 형식의 튜플 타입
// type AddParams = Parameters<typeof add>;

// const args: AddParams = [10, 20];

// console.log(add(...args)); // 30

// // ex 1 -----------------------------------------------------------------------------------------------
// function logMessage(message: string, level: "info" | "warn" | "error") {
//     console.log(`[${level.toUpperCase()}] ${message}`);
// }
// logMessage("System started", "info");

// // 추출된 파라미터 튜플 타입은 [string, "info" | "warn" | "error"]
// type LogParams = Parameters<typeof logMessage>;

// // 로깅을 파일에 저장하는 함수를 구현하는 과정에서 앞서 추출한 파라미터 타입을 그대로 사용
// function saveLogToFile(...args: LogParams) {
//     console.log("Saving log:", ...args);
// }

// // 기존 함수와 동일한 매개변수를 유지하며 새로운 기능을 추가 가능
// saveLogToFile("System started", "info");




// // Exclude ===========================================================================================================
// // Exclude는 타입 T에서 타입 U에 해당하는 부분을 제거한 새로운 타입을 만드는 유틸리티 타입
// // 유니언 타입에서 특정 타입을 제거할 때 유용하며 기존 타입을 수정하지 않고, 일부 요소만 제외한 타입을 만들 수 있어 타입 재사용성이 증가함

// // ex 1 --------------------------------------------------------------------------------------------------------------------------------------------
// // 모든 상태가 포함될 유니언 타입
// type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'failed' | 'cancelled';

// // 활성 상태 타입만 추출 (특정 문자열 리터럴 타입 제외)
// // 'pending' | 'in-progress'
// type ActiveTaskStatus = Exclude<TaskStatus, 'completed' | 'failed' | 'cancelled'>;

// function processActiveTask(status: ActiveTaskStatus) {
//     console.log(`Processing task with status: ${status}`);
// }

// processActiveTask("pending"); // OK
// // // "completed"는 ActiveTaskStatus에 포함되지 않으므로 에러 발생
// // processActiveTask("completed");

// // ex 2 --------------------------------------------------------------------------------------------------------------------------------------------
// type Role = "admin" | "user" | "guest";

// // "guest" 권한 제거
// type AuthenticatedRole = Exclude<Role, "guest">;

// // 이제 AuthenticatedRole에는 "admin", "user"만 저장 가능
// let role: AuthenticatedRole = "admin";
// // // guest는 제외됨
// // role = "guest";

// // ex 3 --------------------------------------------------------------------------------------------------------------------------------------------
// // 표준화된 API 응답
// interface ApiResponse {
//     id: number;
//     name: string;
//     createdAt: string;
//     updatedAt: string;
//     deletedAt: string | null;
//     metadata: object;
// }

// // 내부용 필드 제외
// // 'id' | 'name' | 'createdAt' | 'updatedAt'
// type PublicFields = Exclude<keyof ApiResponse, 'metadata' | 'deletedAt'>;

// // API 응답으로 반환할 객체 생성 함수 (내부용 필드는 제외)
// function createPublicResponse(response: ApiResponse): Pick<ApiResponse, PublicFields> {
//     // 'metadata'와 'deletedAt' 필드는 제외
//     const { id, name, createdAt, updatedAt } = response;
//     return { id, name, createdAt, updatedAt };
// }

// const publicResponse = createPublicResponse({
//     id: 1,
//     name: "Kim",
//     createdAt: "2023-01-01T00:00:00Z",
//     updatedAt: "2023-01-02T00:00:00Z",
//     deletedAt: null,
//     metadata: {}
// });

// console.log(publicResponse);



// Extract ============================================================================================================
// Extract<T, U>는 타입 T에서 타입 U에 해당하는 부분만 남기는 유틸리티 타입으로 Exclude와 반대되는 역할을 수행함
// 유니언 타입에서 특정 타입만 뽑아낼 때 유용합니다. 필요하지 않은 타입은 제거하고, 필요한 타입만 추출하여 새로운 타입을 만들 때 사용

// ex 1 ---------------------------------------------------------------------------------------------------------------------
type Status = "pending" | "approved" | "rejected" | "canceled";

// 전체 유니언 타입 중 "rejected", "canceled" 리터럴 타입만 추출하여 실패 상태만 남기기
// "pending" | "approved"
type FailedStatus = Extract<Status, "rejected" | "canceled">;

// "rejected", "canceled" 값만 대입 가능
let failedStatus: FailedStatus = "rejected";
// failedStatus = "approved";

// ex 2 ---------------------------------------------------------------------------------------------------------------------
type Role = "admin" | "user" | "guest";
// 관리자만 추출
type AdminRole = Extract<Role, "admin">;
let role: AdminRole = "admin"; // 정상

// ex 3 ---------------------------------------------------------------------------------------------------------------------
// DOM에서 발생할 수 있는 이벤트 객체의 타입 정의
type DomEvent =
    | { type: 'click', x: number, y: number }
    | { type: 'dbclick', x: number, y: number }
    | { type: 'keydown', key: string }
    | { type: 'scroll', position: number }
    | { type: 'focus' }
    | { type: 'blur' };

// 좌표 정보가 있는 이벤트 타입만 추출
// { type: 'click', x: number, y: number } | { type: 'dbclick', x: number, y: number }
type EventWithCoordinates = Extract<DomEvent, { x: number, y: number }>;

function processCoordinateEvent(event: EventWithCoordinates) {
    console.log(`Event at coordinates: (${event.x}, ${event.y})`);
}

// 다음 코드는 실패 => 이유 생각해보기
// const clickEvent = { type: 'click', x: 100, y: 200 };
// processCoordinateEvent(clickEvent);

const clickEvent1 = { type: 'click', x: 100, y: 200 } as const;
const clickEvent2: EventWithCoordinates = { type: 'click', x: 100, y: 200 };
processCoordinateEvent(clickEvent1);
processCoordinateEvent(clickEvent2);
processCoordinateEvent({ type: 'click', x: 100, y: 200 });

const keyEvent = { type: 'keydown', key: 'Enter' };
// x, y 속성이 없어서 에러 발생
// processCoordinateEvent(keyEvent);