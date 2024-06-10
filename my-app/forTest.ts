// Декоратор метода
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Call: ${propertyKey}(${args.join(', ')})`);
        const result = originalMethod.apply(this, args);
        console.log(`Return: ${result}`);
        return result;
    };

    return descriptor;
}

// Класс с декорированным методом
class ExampleService {
    @Log
    multiply(a: number, b: number): number {
        return a * b;
    }
}

// Тестирование
const service = new ExampleService();
service.multiply(2, 3);

// function AddProperty(propertyName: string, value: any) {
//     return function (constructor: Function) {
//         constructor.prototype[propertyName] = value;
//     };
// }
// @AddProperty('role', 'admin')
// class User {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// const user1 = new User('John');
// console.log(user1.role); // admin

// function ReadOnly(target: any, key: string): any {
//     const descriptor: PropertyDescriptor = {
//         writable: false
//     };
//     return descriptor;
// }

// class Car {
//     @ReadOnly
//     make: string;

//     constructor(make: string) {
//         this.make = make;
//     }
// }

// const car = new Car('Toyota');
// car.make = 'Honda'; // Ошибка: свойство 'make' доступно только для чтения
