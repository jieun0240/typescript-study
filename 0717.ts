// 네임스페이스로 구조화
// MathUtils라는 namespace 생성
namespace MathUtils {
    // namespace 내부에 값, 함수 포함
    // export 키워드를 사용하여 내보냈으므로, 외부에서도 접근 가능
    export const PI = 3.14159;
    export function calculateCircleArea(radius: number): number {
        return PI * radius * radius;
    }
    // export하지 않으면 외부에서 접근 불가 (private)
    function helperFunction() { }
}

// Finance라는 다른 이름의 namespace 정의
namespace Finance {
    export const TAX_RATE = 0.1;
    export function calculateTax(price: number): number {
        return price * TAX_RATE;
    }
}

// 사용 시 네임스페이스를 통해 접근해야 하므로, 명확한 의미 전달 가능
const area = MathUtils.calculateCircleArea(5);
// helperFunction은 외부에서 접근 불가
// Property 'helperFunction' does not exist on type 'typeof MathUtils'
// MathUtils.helperFunction();
const tax = Finance.calculateTax(1000);
console.log(`Circle Area: ${area}, Tax: ${tax}`);