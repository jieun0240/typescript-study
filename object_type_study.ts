// // 객체 정의
// const poet = {
//     born: 1935,
//     name: "Mary Oliver",
// };

// console.log(poet.born);
// console.log(poet.name);
// // console.log(poet.a); //에러
// const poet: {
//     born: number;
//     name: string;
// } = {
//     born: 1935;
//     name: "Mary Oliver";
// };

// object 타입으로 설정된 상수에 객체 대입
const someObject: object = {
    someProp1: "hello",
    someProp2: 42,
};
// object 타입은 값이 "객체"임을 보장할 뿐, 그 외의 속성, 메서드와 관련된 일체의 정보가 없으므로, 실제로 존재하는 속성, 메서드에도 접근 불가
// console.log(someObject.someProp1);
// console.log(someObject.someProp2);

// 모든 객체 타입의 값이 접근할 수 있는 Object.prototype의 메서드들은 접근 가능
someObject.toString();
someObject.valueOf();
someObject.hasOwnProperty("someProp1");