
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
