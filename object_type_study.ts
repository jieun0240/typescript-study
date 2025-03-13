// // // 객체 정의
// // const poet = {
// //     born: 1935,
// //     name: "Mary Oliver",
// // };

// // console.log(poet.born);
// // console.log(poet.name);
// // // console.log(poet.a); //에러
// // const poet: {
// //     born: number;
// //     name: string;
// // } = {
// //     born: 1935;
// //     name: "Mary Oliver";
// // };

// // object 타입으로 설정된 상수에 객체 대입
// const someObject: object = {
//     someProp1: "hello",
//     someProp2: 42,
// };
// // object 타입은 값이 "객체"임을 보장할 뿐, 그 외의 속성, 메서드와 관련된 일체의 정보가 없으므로, 실제로 존재하는 속성, 메서드에도 접근 불가
// // console.log(someObject.someProp1);
// // console.log(someObject.someProp2);

// // 모든 객체 타입의 값이 접근할 수 있는 Object.prototype의 메서드들은 접근 가능
// someObject.toString();
// someObject.valueOf();
// someObject.hasOwnProperty("someProp1");

// // // 아무 문제 없이 대입 가능
// // poetLater = {
// //     born: 1935,
// //     name: "Mary Oliver",
// // };

// // // 객체가 아닌 값 대입 불가
// // // Type 'string' is not assignable to type '{ born: number; name: string; }'
// // poetLater = "Sappho";
// // // 객체여도 구조(타입)가 맞지 않으므로 대입 불가
// // poetLater = { born: "1935", name: 1234 };
// // // 포함되면 안되는 속성이 있어도 대입 불가
// // poetLater = { born: 1935, name: "Mary Oliver", end: 2024 };
// // // 새 속성을 추가하는 것도 불가함을 유의! (자바스크립트에서는 잘 됨)
// // poetLater.hello = 1234;

// // // 타입 별칭을 이용하여 객체의 타입 설정
// // type Poet = {
// //     born: number;
// //     name: string;
// // };

// // // 이후 객체값을 Poet 타입으로 설정 가능
// // let poetValue: Poet;

// // poetValue = {
// //     born: 1935,
// //     name: "Sara Teasdale",
// // };

// // type WithFirstName = {
// //     firstName: string;
// // };
// // type WithLastName = {
// //     lastName: string;
// // };

// // // hasBoth가 WithFirstName, WithLastName 둘 중 어떠한 타입도 아닌 객체 리터럴 타입임을 유의
// // // (단, 두 타입에서 요구하는 값을 모두 가지고 있긴 함)
// // const hasBoth = {
// //     firstName: "Lucille",
// //     lastName: "Clifton",
// // };

// // // hasBoth에 firstName 속성이 있고 string 타입이므로(즉, 구조적으로 동일하므로) 대입 가능
// // let withFirstName: WithFirstName = hasBoth;
// // // hasBoth에 lastName 속성이 있고 string 타입이므로(즉, 구조적으로 동일하므로) 대입 가능
// // let withLastName: WithLastName = hasBoth;

// // type User = {
// //     name: string;
// //     age: number;
// // }

// // // 케이스 1: 초과된 속성이 포함된 객체 리터럴 값의 할당은 불가
// // const john: User = {
// //     name: "John",
// //     age: 30,
// //     // occupation: "developer" // 에러 발생 => 초과 속성 검사에 걸림
// // };

// // // 케이스 2: 중간 변수를 통한 할당
// // // (johnObj는 User 타입이 아님을 유의!)
// // const johnObj = {
// //     name: "John",
// //     age: 30,
// //     occupation: "developer"
// // };





// //25/03/10

// // // 구조적 타이핑의 원칙에 따라 대입을 허용
// // const john2: User = johnObj;
// // const john3: User = { name: "John", age: 30,  occupation: "developer"};
// // // (단, john2를 User 타입으로 인식하고 있으므로, User 타입에 포함되지 않는 값에는 접근 불가)
// // // console.log(john2.occupation);

// // // 로그인 관련 사용자 정보
// // type UserCredentials = {
// //     username: string;
// //     password: string;
// // }

// // // 사용자 정보를 받는 login 함수 정의
// // function login(credentials: UserCredentials) {
// //     // ...
// // }

// // // 케이스 1: 혹시 모를 실수를 잡아낼 수 있음
// // login({
// //     username: "john",
// //     password: "123456" // 에러 발생, 좀 더 엄격한 검사를 통해서 실수를 발견할 수 있음
// // });

// // // 케이스 2: 출처가 다른 곳에서 온 데이터는 더 유연하게 처리 가능
// // const savedCredentials = {
// //     username: "john",
// //     password: "123456",
// //     lastLogin: "2024-02-07" // 추가 정보가 있어도 허용
// // };
// // login(savedCredentials);

// // // 중첩된 객체(author)의 형태도 정의한 타입 별칭을 정의
// // type Poem = {
// //     author: {
// //         firstName: string;
// //         lastName: string;
// //     };
// //     name: string;
// // }

// // // 정확하게 값을 할당했으므로 대입 가능
// // const poemMatch: Poem = {
// //     author: {
// //         firstName: "Sylvia",
// //         lastName: "Plath",
// //     },
// //     name: "Lady Lazarus",
// // };

// // // 내부 객체인 author의 구조(shape)가 달라서 에러가 발생
// // const poemMismatch: Poem = {
// //     // Error: Type '{ name: string; }' is not assignable
// //     // to type '{ firstName: string; lastName: string; }'.
// //     // Object literal may only specify known properties, and 'name'
// //     // does not exist in type '{ firstName: string; lastName: string; }'.
// //     author: {
// //         name: "Sylvia Plath",
// //     },
// //     name: "Tulips",
// // };

// // editor 속성은 선택적 속성으로 제공하지 않아도 무방함
// // 반면, author 속성은 선택적 속성이 아니므로, 비록 값이 undefined일지라도 반드시 값을 제공해야 함
// // type Writers = {
// //     editor?: string;
// //     author: string | undefined;
// // };

// // // editor는 생략 가능, author는 undefined로 제공
// // const hasRequired: Writers = {
// //     author: undefined,
// // };
// // 필수 속성인 author 값을 제공하지 않아서 에러 발생
// // const missingRequired: Writers = {};

// // const poem = Math.random() > 0.5
// //     ? { name: "The Double Image", pages: 7 }
// //     : { name: "Her Kind", rhymes: true };

// // type, name 속성을 공통 속성으로 가지는 두 타입 정의
// type PoemWithPages = {
//     type: 'pages';  
//     name: string;
//     pages: number;
// };

// type PoemWithRhymes = {
//     type: 'rhymes';
//     name: string;
//     rhymes: boolean;
// };

// type Poem = PoemWithPages | PoemWithRhymes;

// // // 경우에 따라 pages 속성을 가지거나 rhymes 속성을 가질 수 있음
// // const poem: Poem = Math.random() > 0.5
// //     ? { name: "The Double Image", pages: 7, type: "pages" }
// //     : { name: "Her Kind", rhymes: true, type: "rhymes" };

// // // 공통적으로 존재하는 속성에는 모두 접근 가능하지만
// // console.log(poem.name);
// // console.log(poem.type);

// // // // 고유 속성에는 접근 불가능
// // // console.log(poem.pages); // poem이 PoemWithRhymes 일 수 있으므로 에러
// // // console.log(poem.rhymes); // poem이 PoemWithPages 일 수 있으므로 에러

// // // 타입 좁히기
// // if("pages" in poem) {
// //     // pages 속성이 포함되어 있으므로 PoemWithPages 타입으로 판단
// //     console.log(poem.pages);
// // }
// // if("rhymes" in poem) {
// //     // rhymes 속성이 포함되어 있으므로 PoemWithRhymes 타입으로 판단
// //     console.log(poem.rhymes);
// // }

// //=================================================================================================

// //구별된 유니언
// // // kind가 구별자
// // type Circle = {
// //     kind: "circle";
// //     radius: number;
// // }
// // type Square = {
// //     kind: "square";
// //     sideLength: number;
// // }
// // // type Shape = Circle | Square;

// // // status가 구별자
// // type SuccessResponse = {
// //     status: "success";
// //     data: any;
// // }
// // type ErrorResponse = {
// //     status: "error";
// //     error: string;
// // }

// // type ApiResponse = SuccessResponse | ErrorResponse;

// // type Shape = Circle | Square;
// // const c1 : Shape = { kind: "circle", radius: 8 };
// // const s1: Shape = { kind: "square", sideLength: 8};

// // console.log(c1.radius);
// // console.log(s1.sideLength);

// // function f(s: Shape) {
// //     // if("radius" in s) console.log(s.radius);
// //     // if("sideLength" in s) console.log(s.sideLength);
// //     if(s.kind === "circle") {
// //         console.log(s.radius);
// //     } 
// //     if (s.kind === "square") {
// //         console.log(s.sideLength);
// //     }
// // }




// // 결합 타입
// type HasName = {
//     name: string;
// };
// type HasAge = {
//     age: number;
// };

// // &는 |와는 다르게 둘 다 넣을 수 있음
// type Person = HasName & HasAge;

// const person: Person = {
//     name: "John", // HasName 타입의 요구사항
//     age: 30 // HasAge 타입의 요구사항
// };

// // 믹스인(mixin) 패턴
// // 타임스탬프 기능을 위한 타입 정의
// type Timestamped = {
//     createdAt: Date;
//     updatedAt: Date;
// };

// // 식별자 부여를 위한 타입 정의
// type Identifiable = {
//     id: string;
// };

// // 데이터베이스 엔티티를 위한 기본 타입 정의
// type DbRecord = Timestamped & Identifiable;

// // DbRecord의 모든 특성을 포함하며 추가적으로 사용자 정보를 포함하는 최종 타입 정의
// // (물론, name, email 속성을 UserRecord와 같은 타입으로 따로 정의해도 무방함)
// type User = DbRecord & {
//     name: string;
//     email: string;
// };

// // 믹스인
// const user: User = {
//     id: "123",                // Identifiable에 정의된 속성
//     createdAt: new Date(),    // Timestamped에 정의된 속성
//     updatedAt: new Date(),    // Timestamped에 정의된 속성
//     name: "John",             // User의 고유 속성
//     email: "john@example.com" // User의 고유 속성
// };

// //믹스인 패턴을 사용하면 속성이 여러개인 큰 클래스를 정의하거나, 복잡한 상속 구조를 생각할 필요 없이 바로 재사용 가능한 속성들을 조합하여 클래스를 생성할 수 있다는 장점이 있음