// // 2024-06-04
// // 35th lesson TypeScript & Patterns

// // Lesson Schedule:
// // 1) Compiled va interpreted tillarini o'rganamiz
// // hamda ularning o'zaro solishtirma tahlili

// // 2) Typescript nima va uning mavjudga kelishi bizga
// // qanday muammolarni hal qilib beradi

// // 3) Typescriptda dynamic typing va interfacelar tushunchasi

// // 4) Burak backend loyihamizni typescriptda quramiz

// // 5) Patternlarni o'rganamiz va architecture va dizayn patternlarga to'xtalib o'tamiz

// // --------------------------------------------------------------------------------------------

// // 1) Compiled va interpreted tillari farqini o'rganib olamiz:

// // Compiled Languages => Java, GoLang, C, C++, C#, Rust

// // Compiled Java dasturlash tiliga misol:
// // Birinchi: Java tilida yozilgan kod to'liqligicha kompyuter tiliga o'tkaziladi, va bu jarayon compiling jarayoni deyiladi
// // Ikkinchi: Mashina o'girilgan tilni o'qiy boshlaydi va bu jarayon execution deb ataladi

// // Compiled Programming Languages'larning qisqagina ishlash formulasi:
// // First: Compiling
// // Second: Running

// // -----------------------------------------------------
// // interpreted Languages => NodeJS, Python, PHP, Ruby

// // Iterpreted NodeJS dasturlash tiliga misol:
// // Birinchi: Interpreted dasturlash tillari to'liq mashina tiliga o'girilmaydi.
// // Aksincha u to'g'ridan - to'g'ri execution'ni boshlab yuboradi

// // Interpreted Programming Languages'larning qisganiga ishlash formulasi:
// // First: Running

// // Interpreted Languages'ning ustunlik tomoni to'g'rida - to'g'ri execution qilish bo'lsa
// // kamchilik tomoni ham shu hisoblanadi

// // -------------------------------------------------------------
// // Masalan Compiled tillarida agar 10 qatorlik kodnig oltinchi qatorida
// // qandaydir xatolik mavjud bo'lsa, compiling to'xtab bizga errorni qaytaradi va kodni run qilmaydi

// // Interpreted tillarida esa, xato mavjud qatorga qadar kodlar ishga tushmaguncha bizga errorqaytarmaydi
// // Soddaroq qilganda, Compiled tillarida xato compiling jarayonidayoq aniqlansa, interpreted tillarida esa
// // xatoni execution jarayonidagina aniqlash mumkin

// // ------------------------------------------------------
// // Biz muhokama qilayotgan xato bular type'larga bog'liq bo'lgan error'lardir
// // Aynan mana shu kamchilik NodeJS'ni eng og'ir hamda ogriq nuqtalari edi.
// // Sababi katta loyihalarda type integration mavjud bo'lmasa loyihani amalga oshirish imkonsiz hisoblanadi
// // Bu muammoni esa bizga TypeScript hal qilib bergan. Ya'ni TypeScript Compiled Language'larda mavjud bo'lgan
// // static type'larga o'xshash dynamic type'larni NodeJS'imizga olib kelib berdi

// // ----------------------------------------------------------
// // TypeScript'ni o'zi nima? Tahlil qilib olamiz:

// // Demak biz yuqorida tahlil qildikki, TypeScript bizga type tushunshasini olib kelgan
// // ya'ni dynamic type integration'ni xosil qilib bergan instrument hisoblanar ekan.

// // TypeScript'ni alohida tahlil qilsak, TypeScript JavaScript'ni o'ziga 100% qamrab olgan
// // Ya'ni JavaScript'da nima bo'lsa, va nima ishlasa TypeScript'da ham shu narsa 100% qamrab olingan hisoblanar ekan

// // TypeScript va JavaScript forma ko'rishida:
// // TypeScript = JavaScript + TypeScript'ni o'ziga bog'liq bo'lgan elementlar va komponentlar

// // -------------------------------------------------------------
// // JavaScript'imiz to'liq TypeScript'ning ichida mujassam ekan!
// // Faqatgina TypeScript'ning JavaScript'dan farqi JavaScript'da mavjud bo'lmagan elemntlarga ega bo'lishidir

// // -------------------------------------------------------------
// // TypeScript & JavaScript'ning birgalikda ishlash jarayoni:
// // Biz source'imizni TypeScript'da yozamiz
// // lekin TypeScript o'zida compiling jarayonini hosil qilib
// // TypeScript'da yozgan kodlarimizni to'liq JavaScript'ga o'girib berar ekan

// // TypeScript & JavaScript'larni o'zaro birga ishlash mantig'ini Burak loyihamiznig
// // backend'ini yozishda to'liq va aniq tushunib yetamiz

// // ---------------------------------------------------------
// // Navbatdagi bo'lim: Dynamic Types & Interface Tushunchasi

// // -------------------------------------------
// // TypeScript'ning dynamic type'lari:
// // TypeScript'da variable'lar ikki xil bo'ladi:
// // 1) Primitve types
// // 2) Object types

// // Primitve types:
// // (reference'ga ega bo'lmagan) => string, number, boolean, null, undefined, symbol

// // Object types:
// // (reference'ga ega) => functions, arrays, classes etc.

// // ----------------------------------------------------------
// // Primitve type'larga misollar:
// // String Type
// // JavaScript'da variable'lar quyidagi ko'rinishda yoziladi:

// let box_js;
// box_js = "hello";
// box_js = 100; // no error occurred

// // TypeScript'da esa variable'lar quyidagi ko'rishida yoziladi:
// let box_ts: string;
// box_ts = "hello";
// box_ts = 100; // a compiling error occurred because of the string type

// // TypeScript'ni JavaScript'dan asosiy farqi, har bir variable uchun dynamic type'ni ko'rsatishimiz kerak bo'ladi

// // Number Type:
// const counter_1: number = 100; // no error occurred
// const counter_2: number = "devex"; // a compiling error occurred because of the number type

// // Quyidagi misolda number & string type'larini bir xil case'da ishlatishni ko'rib o'tamiz:
// let stage: number | string = "devex"; // 100;

// stage = 100; // no error will occurr because of the '|' or multiple types

// // Boolean type:
// const pending: boolean = true;

// // ------------------------------------------------------------
// // Object type'larga misol:
// // JavaScript'da object hosil qilish:
// let person_js = {
//     name: "Brian",
//     age: 25,
//     nation: "Mars"
// };

// // TypeScript'da object hosil qilish uchun biz interface'dan foydalanamiz:

// interface Person_Ts {
//     name: string;
//     age: number;
//     nation: string;
// };

// const person_ts: Person_Ts ={
//     name: "Brian",
//     age: 25, // If you use another data type instead of number an error will occurr because of the number type
//     nation: "Mars"
// }

// // Interface o'zi nima?
// // Interface'lar object singarin instance'ga ega bo'lmaydi, ular faqatgina type uchun xizmat qiladigan soya hisoblanadi

// // --------------------------------------------
// // Quyidagi misol singarin TypeScript'da object'larni instance'siz
// // to'g'ridan - tog'ri hosil qilib olsak bo'ladi lekin bu birozgina noqulaylik kelitirib chiqaradi:

// let employee: {
//     name: string;
//     age: number;
//     jobTitle: string;
//     nation: string;
//     planet: string;
//     married: boolean;
// } = {
//     name: "Brian",
//     age: 25,
//     jobTitle: "Web Developer",
//     nation: "Alien",
//     planet: "Mars",
//     married: false,
// }

// //  --------------------------------------------------
// // TypeScript'da array'larni qanday hosil qilamiz?
// let universe: string[]; // Your array only can includes string data types
// universe = ["voyager", "meteor", "planet", "cosmos", "planet", "saturn", "satellite"]; // Do not add any data types except string

// let numbers: number[]; // Your array only can includes number data types
// numbers = [1, 2, 3, 4, 5, 6, 7] // Do not add any data types except number

// // Agar bizga number & string data turlari yagona array tarkibida kerak bo'lsa
// // u holda yechimni quyidagicha qilamiz:

// let mix: (number | string)[];
// mix = ["voyager", 2, "meteor", 4, "planet", 6, "saturn", 7];

// // --------------------------------------------------------
// // JavaScript'da classes:

// class Student_JS {
//     // You do not have to include this section in JavaScript:
//     // name;
//     // major;
//     // age;

//     constructor(name, major, age) {
//         this.name = name;
//         this.major = major;
//         this.age = age;
//     };
// };

// // TypeScript'da classes:
// class Student_TS {
//     // You have to include this section in TypeScript:
//     name: string;
//     major: string;
//     age: number;

//     constructor(name: string, major: string, age: number) {
//         this.name = name;
//         this.major = major;
//         this.age = age;
//    }
// }

// // Test Your TypeScript Class:
// const student_ts = new Student_TS("Brian", "Web Development", 25); // Argument Types should match with class data types

// // ---------------------------------------------------------------------
// // TypeScript'da type'larni interface ishlatmasdan to'g'ridan - to'g'ri type'lari bilan hosil qilishimiz mumkin.
// // Lekin interface'dan foydalanish bizga ko'plab imkoniyatlarni beradi

// // Check out more TypeScript tutorials here:
// // https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// // OR
// // https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/

// // --------------------------------------------------------------------------
// // Run server.ts

// // npm install typescript => It will installed as a dependency package
// // But we have to install is as devDependency package so use this command:

// // npm install typescript -D => It will installed as a devDependency package
// // npm install typescript --save-dev

// // This is main server.js file
// // TypeScript Lessons started here
// // 35th lesson: TypeScript & Patterns

// // Enjoy Life 😊😊😊!

// // Faqatgina develop jarayonida kerak bo'ladigon package'larni => devDepencies'ga install qilamiz
// // Loyihamizni ishlash jarayonida (production) kerak bo'ladigan package'larni => dependencies'ga install qilamiz

// // COMMAND LINES:
// // npm init --yes
// // npm i moment
// // npm i typescript -D
// // npm i typescript --save-dev
// // tsc --init
// // npm i nodemon -D
// // npm ts-node -D
// // npm i tsconfig-paths -D
// // npm i

// // Command at once and install all of them:
// // ./command.sh

// // -----------------------------------------------------------------------------
// // -----------------------------------------------------------------------------

// // -------------------------------------------------------------------------
// // Har qanday Front-end yoki Backend ma'lum bit Pattern'lar asosida quriladi
// // Asosan backend uchun bir necha xil programming language'lardan foydalanishimiz mumkin: Java, PHP, NodeJS, Python, GoLang, etc.

// // Har qaday programming tillaridan foydalanishimizga qaramasdan biz doim, Architectural va Pattern'lariga murojaat qilamiz

// // Va bular language'lar aro bir xil tushunchalar
// // Agar siz shu Architectural va Design Patternlarni yaxshi tushunib olsangiz, bir tildan boshqa bir tilga o'tishingiz juda ham oson kechadi

// // ------------------------------------------------------------------------
// // Backend bo'yicha eng mashxur Architectural Pattern'lar:
// // 1) MVC => Model-View-Controller
// // 2) DI => Dependency Injection

// // Frontend bo'yicha eng mashxur architectural pattern'lar:
// // 1) MVP => Model-View-Presenter

// // Backend bo'yicha eng mashxur Design Pattern'lar:
// // 1) Middleware
// // 2) Decorator

// // -----------------------------------------------------------------------
// // Architectural Pattern => Bu backend uchun suyak hisoblanadi. Ya'ni backendimizdagi ma'lumotlar oqimini tartibga soladigan arxitekturasi hisoblanadi
// // Design Pattern => Butun bir backend tizimidagi ma'lum bir bo'laklaridagi struktularni yechishda xizmat qiladigan pattern hisoblanadi (vositachi emas).

// // Architectural Pattern'ni misol sifatida butun boshlik insonning suyagi desak, Design Pattern bu o'sha insonning qo'l suyagi hisoblanadi. Ya'ni qo'l bu ma'lum bir vazifani bajaradigon bo'lim hisoblanadi.
// // Architectural Pattern esa o'sha insonning o'zi hisoblanadi

// // 35th - dars shu yerda yakunlandi
// // 수고 하셨습니다!
