// // type 키워드와 유니언 타입을 사용하여 RawData 타입 별칭을 설정
// type RawData = boolean | number | string | null | undefined;

// // 이후 별칭을 이용하여 타입 설정 가능
// let rawDataFirst: RawData;
// let rawDataSecond: RawData;
// let rawDataThird: RawData;

// // 예시1)
// // 기본 타입 정의
// type StringOrNumber = string | number;
// type NumberOrBoolean = number | boolean;

// // 타입 결합하기
// type StringOrNumberOrBoolean = StringOrNumber | NumberOrBoolean;

// // 예시2)
// type Id = number | string;
// // "number | string | undefined | null" 타입과 같음
// type IdMaybe = Id | undefined | null;

// // 문자열 리터럴로 타입 지정
// type Str = 'Lee';

// // 유니온 타입으로 타입 지정
// type Union = string | null;

// // 문자열 유니온 타입으로 타입 지정
// type Name = 'Lee' | 'Kim';

// // 숫자 리터럴 유니온 타입으로 타입 지정
// type Num = 1 | 2 | 3 | 4 | 5;

// // 객체 리터럴 유니온 타입으로 타입 지정
// type Obj = {a: 1} | {b: 2};

// // 함수 유니온 타입으로 타입 지정
// type Func = (() => string) | (() => void);

// // 인터페이스 유니온 타입으로 타입 지정
// // type Shape = Square | Rectangle | Circle;

// // 튜플로 타입 지정
// type Tuple = [string, boolean];