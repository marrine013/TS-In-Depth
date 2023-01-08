import { ReferenceItem, UL, RefBook, Library } from './classes';
import { Category } from './enums';
import { printRefBook, createCustomerID, getAllBooks } from './functions';
import { Book, Librarian, Logger } from './interfaces';
import { PersonBook } from './types';

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');

// ---------------------------------------------------------------

// alias or type

// interface

// ==========================================================
// Task 02.01

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());

// logBookTitles(getBookTitlesByCategory(Category.Javascript));

// console.log(getBookAuthorByIndex(0));

// calcTotalPages();

// +++++++++++++++++++++++++++++++++++++++++++++
// Task 03.01

// const myID: string = createCustomerID('Ann', 10);
// // console.log(myID);

// // 1й способ задания функционального типа:
// // let idGenerator: (name: string, id: number) => string;
// // 2й способ задания функционального типа:
// let idGenerator: typeof createCustomerID; /* позиция типа */
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;

// const a = typeof createCustomerID; /* позиция значения (просто для примера тут) */

// console.log(idGenerator('Boris', 20));

// +++++++++++++++++++++++++++++++++++++++++++++
// Task 03.02

/* createCustomer('Marrine');
createCustomer('Marrine', 45);
createCustomer('Marrine', 45, 'London'); */

// console.log(getBookTitlesByCategory());

// logFirstAvailable();

// console.log(getBookByID(1));

/* console.log(сheckoutBooks('NoNameCustomer', 1, 2, 4));
console.log(сheckoutBooks('Ann', ...[1, 2, 4])); */

/* Task 03.03. Function Overloading */

/* console.log(getTitles(1, true));
console.log(getTitles(true));
console.log(getTitles(false));
console.log(getTitles('Lea Verou')); */

// Task 03.04. Assertion Functions

/* console.log(bookTitleTransform('Learn Typescript'));
console.log(bookTitleTransform(1)); */

// Task 04.01. Defining an Interface

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
//     // ниже альтернативный вариант добавления метода
//     markDamaged(reason: string) {
//         console.log(`Damaged: ${reason}`);
//     },
// };

/* myBook.markDamaged('missing back cover');

printBook(myBook); */

// Task 04.02. Defining an Interface for Function Types

// // const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);

// Task 04.03. Extending Interface

/* const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@mail.com',
    numBooksPublished: 1,
};

const favoriteLibrarian: Librarian = {
    name: 'Dan',
    email: 'dan@mail.com',
    department: 'IT',
    assistCustomer: null,
}; */

// Task 04.04. Optional Chaining

/* const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[0]); */

// Task 04.05. Keyof Operator

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01. Creating and Using Classes
// Task 05.03. Creating Abstract Classes

/* const ref = new ReferenceItem(1, 'Learn Typescript', 2022);
console.log(ref);
ref.printItem();
ref.publisher = 'abc group';
console.log(ref.publisher);
console.log(ref.getID()); */

// Task 05.02. Extending Classes

// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn Typescript', 2022, 2);
// const refBook: RefBook = new RefBook(1, 'Learn Typescript', 2022, 2);
// refBook.printItem();
// refBook.printCitation();

// Task 05.04. Interfaces for Class Types

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn Typescript');

// const b: number | string = 'Abc';
// (<string>b).toUpperCase(); /* тип переменной сужается за счет (<string>  ), без этого может ругаться редактор*/
// (b as string).toUpperCase(); /* другой вариант сужения типа*/

// Task 05.05. Intersection and Union Types

// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@mail.com',
//     id: 1,
//     title: 'unknown',
// };

// Task 06.03, 06.04
// const refBook: RefBook = new RefBook(1, 'Learn Typescript', 2022, 2);
// printRefBook(refBook);

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05
//  const flag = true;

// // promise
// // if (flag) {
// //     import('./classes')
// //         .then(o => {
// //             const reader = new o.Reader();
// //             reader.name = 'Anna';
// //             reader.take(getAllBooks()[0]);

// //             console.log(reader);
// //         })
// //         .catch(err => console.log(err))
// //         .finally(() => console.log('complete'));
// // }

// // await
// if (flag) {
//     const o = await import('./classes');

//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }

// Task 06.06

// let library: Library = {
//     id: 1,
//     address: '',
//     name: 'Anna',
// };

// console.log(library);

// let lib: Library = new Library();
