// // class WithValue {
// //     // 직접 필드값을 초기화했으므로 OK
// //     immediate = 0;
// //     // 생성자에서 필드값을 초기화했으므로 OK
// //     later: number;
// //     // 유니언 연산자를 통해서 undefined 값 대입을 허용했으므로 허용
// //     // (이후, undefined로 필드값이 초기화)
// //     mayBeUndefined: number | undefined;
// //     // 단언 연산자(!)를 사용하면 undefined를 설정하지 않아도 됨
// //     // (이후, undefined로 필드값이 초기화)
// //     definitelyAssigned!: number;
// //     // Initialization Checking 옵션 활성화하면, 에러가 발생함
// //     unused: number;
    
// //     constructor() {
// //         this.later = 1;
// //     }
// // }

// // class Configuration {
// //     // 선언 시점에서 초기화
// //     readonly apiKey: string = "default-key";
// //     // 생성자에서 초기화
// //     readonly serverUrl: string;
    
// //     constructor(serverUrl: string) {
// //         this.serverUrl = serverUrl;
// //     }
    
// //     // updateConfig() {
// //     //     // 생성자 외의 장소에서는 깂 수정 불가
// //     //     // Error: Cannot assign to 'apiKey' because it is a read-only property
// //     //     this.apiKey = "new-key";
// //     //     // Error: Cannot assign to 'serverUrl' because it is a read-only property
// //     //     this.serverUrl = "new-url";
// //     // }
// // }

// // // start, move 기능 메서드를 포함한 Vehicle 클래스 정의
// // class Vehicle {
// //     start() { return "시동 걸림"; }
// //     move() { return "이동 중"; }
// // }

// // // Vehicle 타입의 값을 파라미터로 받는 함수 정의
// // function driveVehicle(vehicle: Vehicle) {
// //     console.log(vehicle.start());
// //     console.log(vehicle.move());
// // }

// // // 원본 클래스의 인스턴스는 아무 문제 없이 전달 가능
// // const car = new Vehicle();
// // driveVehicle(car);

// // // 같은 구조(같은 메서드 제공)를 가진 클래스 정의
// // class Bicycle {
// //     start() { return "페달 준비"; }
// //     move() { return "페달링"; }
// // }
// // // 비록 클래스의 타입이 달라도 구조적 타이핑이 원칙에 따라 허용함
// // driveVehicle(new Bicycle());

// // // 같은 구조를 가진 객체 리터럴 값 정의
// // const drone = {
// //     start: () => "프로펠러 작동",
// //     move: () => "비행 중",
// //     extraFeature: () => "촬영" // 추가 속성이 있어도 하용
// // };
// // // 객체 리터럴이지만 start, move 메서드를 가지고 있으므로 허용
// // driveVehicle(drone);

// // // 필요한 구조가 부족한 경우
// // const invalidVehicle = {
// //     start: () => "시작"
// //     // move 메서드가 없음
// // };
// // // // 에러가 발생
// // // // Error: Property 'move' is missing
// // // driveVehicle(invalidVehicle);

// // /* 
// // 덕 타이핑?

// // - 덕 타이핑이란 "오리처럼 걷고, 오리처럼 울면 그것은 오리다"라는 원칙을 따르는 타입 시스템으로 객체가 특정 타입이 될 수 있는지를 판단할 때, 그 객체의 실제 타입이나 상속 관계가 아닌 객체가 가진 속성과 메서드로 판단하자는 타입 철학
// // - 즉, 객체가 필요한 모든 속성과 메서드를 가지고 있다면, 그 객체는 해당 타입으로 취급됨. 자바스크립트가 대표적인 덕 타이핑 언어이며, 타입스크립트는 이 원칙을 "컴파일 타임"에 적용한다고 볼 수 있음
// //  */



// // // 인터페이스 정의
// // interface Learner {
// //     name: string;
// //     study(hours: number): void;
// // }

// // // Learner 인터페이스 구현
// // class Student implements Learner {
// //     // (인터페이스를 "상속"하지 않고 "구현"하고 있으므로, 상속과 같이 자동으로 필드 혹은 메서드가 생기지는 않는 점을 유의)
// //     // 인터페이스에서 정의한 속성 구현
// //     name: string;
// //     // 인터페이스에서 정의한 메서드 구현
// //     study(hours: number) {
// //         console.log(`${this.name}이(가) ${hours}시간 동안 공부합니다.`);
// //     }
// //     // 클래스만의 추가 메서드 구현 가능
// //     takeBreak() {
// //         console.log("휴식 시간!");
// //     }
// //     constructor(name: string) {
// //         this.name = name;
// //     }
// // }

// // const student = new Student("Kim");
// // student.study(2); // "Kim이(가) 2시간 동안 공부합니다."
// // student.takeBreak(); // "휴식 시간!"






// // interface Graded {
// //     grades: number[];
// // }

// // interface Reporter {
// //     report: () => string;
// // }

// // // 두 인터페이스를 모두 구현한 클래스 정의
// // class ReportCard implements Graded, Reporter {
// //     // Graded 인터페이스의 grades 속성 구현
// //     grades: number[];

// //     constructor(grades: number[]) {
// //         this.grades = grades;
// //     }

// //     // Reporter 인터페이스의 report 메서드 구현
// //     report() {
// //         return this.grades.join(", ");
// //     }
// // }

// // class Teacher {
// //     teach() {
// //         console.log("The surest test of discipline is its absence.");
// //     }
// // }

// // // Teacher 클래스 상속
// // class StudentTeacher extends Teacher {
// //     // 인터페이스와 달리, 따로 teach 메서드 구현은 필요 없음
// //     // (물론, 필요한 경우 메서드 오버라이드 가능)
// //     learn() {
// //         console.log("I cannot afford the luxury of a closed mind.");
// //     }
// // }

// // const teacher = new StudentTeacher();
// // teacher.teach(); // 허용 (부모로부터 상속받은 메서드)
// // teacher.learn(); // 허용 (자신의 메서드)
// // // teacher.other(); // 에러 (존재하지 않는 메서드)




// // 부모 클래스 정의
// class Lesson {
//     subject: string;
//     constructor(subject: string) {
//         this.subject = subject;
//     }
// }

// // 자식 클래스 정의
// class OnlineLesson extends Lesson {
//     url: string;
//     constructor(subject: string, url: string) {
//         super(subject);
//         this.url = url;
//     }
// }

// let lesson: Lesson;
// // 자식 타입을 부모 타입으로 대입 (업캐스팅)
// lesson = new OnlineLesson("coding", "oreilly.com");
// console.log(lesson.subject);
// // // Lesson 타입으로 인식하고 있고 해당 타입에는 url 필드가 없으므로, 에러 발생
// // console.log(lesson.url);
// // let online: OnlineLesson;
// // // lesson 값의 타입이 Lesson이므로 직접 대입은 불가하므로, 에러 발생
// // online = lesson;
// // // as 키워드를 이용하여 직접 타입 변환 필요
// // online = lesson as OnlineLesson;
// // console.log(online.url);








// class GradeAnnouncer {
//     message: string;
//     constructor(grade: number) {
//         this.message = grade < 65 ? "Maybe next time..." : "You pass!";
//     }
// }

// class PassingAnnouncer extends GradeAnnouncer {
//     constructor() {
//         // 반드시 super 키워드를 이용해서 부모 생성자 호출 필요
//         super(100);
//     }
// }

// class FailingAnnouncer extends GradeAnnouncer {
//     // Constructors for derived classes must contain a 'super' call
//     // constructor() {}
// }

// class Parent {
//     constructor() {}
// }

// class Child extends Parent {
//     // 케이스 1: 생성자 자체를 생략
//     // (내부적으로 super 호출을 수행하는 빈 생성자 추가)
// }

// class AnotherChild extends Parent {
//     // 케이스 2: 생성자를 정의했다면 super() 필수
//     constructor() {
//         // 이걸 생략하면 에러 발생
//         super();
//     }
// }







// // // 오버라이드 대상 클래스 작성
// // class Animal {
// //     name: string;
// //     constructor(name: string) {
// //         this.name = name;
// //     }
// //     speak(): void {
// //         console.log(`${this.name} makes a sound.`);
// //     }
// //     eat(): void {
// //         console.log(`${this.name} is eating.`);
// //     }
// // }

// // // 상속받는 클래스 작성
// // class Dog extends Animal {
// //     breed: string;
// //     constructor(name: string, breed: string) {
// //         // 부모 클래스의 생성자 호출
// //         super(name);
// //         this.breed = breed;
// //     }
// //     // speak 메서드 오버라이드
// //     speak(): void {
// //         // 부모 클래스의 메서드 호출 가능 (호출이 필수는 아님)
// //         super.speak();
// //         console.log(`${this.name} barks: Woof! Woof!`);
// //     }
// //     // eat 메서드 오버라이드
// //     eat(): void {
// //         console.log(`${this.breed} dog ${this.name} is eating quickly.`);
// //         // 부모 메서드 호출을 마지막에 할 수도 있음
// //         super.eat();
// //     }
// //     // 자식 클래스만의 새로운 메서드 추가 가능
// //     fetch(): void {
// //         console.log(`${this.name} fetches the ball!`);
// //     }
// // }

// // // 자식 객체 생성
// // const errorLogger: ErrorLogger = new ErrorLogger();
// // errorLogger.log("Error message", "warn", new Date());
// // // 부모 타입(Logger)로 대입
// // const logger: Logger = errorLogger;
// // // 이후에는 부모 타입의 메서드만 호출 가능 (세 번째 매개변수 사용 불가)
// // logger.log("Error message", "warn", new Date());
// // // 그러나, 부모 타입의 메서드를 호출할 수 있음 (리스코프 치환 원칙 위배하지 않음)
// // logger.log("Error message", "warn");








// // 반환 타입 제약 3 => 접근 제한자(private, protected, public)는 부모와 같거나, 더 개방적이어야 함
// class Base {
//     // public 메서드
//     public publicMethod(): void {
//         console.log("Public method");
//     }
//     // protected 메서드
//     protected protectedMethod(): void {
//         console.log("Protected method");
//     }
// }

// class Derived extends Base {
//     // protected 제어자를 public 제어자로 바꾸어 더 개방적으로 조정하기 => 가능
//     public protectedMethod(): void {
//         super.protectedMethod();
//         console.log("Now public!");
//     }
//     // public 제어자를 private 제어자로 바꾸어 더 제한적으로 조정하기 => 불가능
//     // private publicMethod(): void {
//     //   console.log("Cannot restrict access");
//     // }
// }

// const derived: Derived = new Derived();
// // 자식 클래스에서 오버라이드 과정에서 public으로 더 개방적으로 바꾸었으므로 접근 가능
// derived.protectedMethod();
// const base: Base = derived;
// // // 부모 타입에서는 제어자가 protected 이므로, 접근 불가 (부모 타입의 제약 조건을 충실히 이행함 == 리스코프 치환 원칙 위배하지 않음)
// // base.protectedMethod();

// // 자식 클래스에서 public 제어자를 private으로 바꿀 수 있었다고 "가정"해보기!
// // 당연히 다음의 호출은 불가능
// derived.publicMethod();
// // 그러나 부모 타입으로 접근하면 접근이 가능해짐 (모순! => 부모 타입으로 타입 전환으로 자식 타입에 대한 제약을 우회할 수 있음)
// base.publicMethod();






// abstract 키워드를 사용하여 추상 클래스 정의
abstract class School {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // 추상 메서드 정의 (구현은 자식 클래스에서 진행)
    abstract getStudentTypes(): string[];

    // 구현 메서드도 가질 수 있음
    getName(): string {
        return this.name;
    }
}

// class Example {
//     // 기본적으로 모두 public 접근제어자가 붙어있다고 가정
//     publicField = "public";
//     // # 기호를 이용하여 private 필드 혹은 메서드 설정 가능 (자바스크립트 문법)
//     #privateField = "private";

//     // public 메서드
//     someMethod() {
//         // 클래스 내부에서는 private 메서드 호출 가능
//         this.#privateMethod();
//     }

//     // private 메서드 정의
//     #privateMethod() {
//         console.log(this.#privateField);
//     }
// }

class Base {
    // public => 어디에서나 접근 가능
    public value = "public";
    // protected => 클래스 내부 혹은 상속 클래스에서 접근 가능
    protected secret = "protected";
    // private => 클래스 내부에서만 접근 가능
    private hidden = "private";
    // 자바스크립트에서 제공하는 private 필드'
    // (타입스크립트에서는 가급적 private 키워드 활용 권장)
    #truePrivate = "real private";
}

// class SubClass extends Base {
//     method() {
//         this.value; // 허용 (public)
//         this.secret; // 허용 (protected)
//         this.hidden; // 에러 (private)
//         this.#truePrivate; // 에러 (private)
//     }
// }


// 일반적인 방식
class Student {
    // 필드 선언
    public name: string;
    public age: number;

    // 생성자로 전달받은 파라미터 값을 이용하여
    constructor(name: string, age: number) {
        // 필드값을 모두 초기화
        this.name = name;
        this.age = age;
    }
}

// // 매개변수 프로퍼티 사용하는 방식
// class StudentWithParams {
//     // 생성자의 매개변수 부분에 접근 제어자를 붙여서 필드 정의 및 초기화가 모두 이루어지도록 하는 문법
//     constructor(
//         public name: string,
//         public age: number
//     ) {} // 생성자 내용을 비워놔도 전달받은 값으로 필드값 초기화 완료
// }

// class Example {
//     constructor(
//         public name: string, // public 프로퍼티
//         private age: number, // private 프로퍼티
//         readonly id: string  // readonly 프로퍼티 (public)
//     ) {}
// }

//정적 필드와 메서드
class Example {
    // 정적 필드 (ES2022부터)
    static count = 0;
    // 정적 메서드 (ES2015부터)
    static increment() {
        Example.count++;
    }
}

// 클래스 이름으로만 정적 멤버에 접근 가능
console.log(Example.count); // 0
Example.increment();
console.log(Example.count); // 1

// 인스턴스를 통한 정적 필드, 메서드 접근은 불가
const instance = new Example();
// // Error: Property 'count' does not exist on type 'Example'
// console.log(instance.count);
// // Error: Property 'increment' does not exist on type 'Example'
// instance.increment();