/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ---------------------------------------------------------------
enum Category {
    Javascript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

// alias or type
/*
type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}; */

// interface
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void; // 1-й способ задать метод
    /* markDamaged?(reason: string): void;*/ // 2-й способ задать метод
    markDamaged?: DamageLogger; // 3-й способ задать метод (через интерфейс функционального типа), можно сделать и через алиас (type)
}

interface DamageLogger {
    (reason: string): void;
}

function getAllBooks(): readonly Book[] {
    const books = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.Javascript,
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.Javascript,
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.Javascript,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];
    return books;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);

    const title = books.find(book => book.available === true)?.title;
    console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(inputCategory: Category = Category.Javascript): string[] {
    const books = getAllBooks();

    return books.filter(({ category }) => category === inputCategory).map(({ title }) => title);
    // в строчке выше применена деструктуризация объекта
    //  return books.filter(book => book.category === inputCategory).map(book => book.title);
}

// string[] то же самое, что Array<string>
function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const { title, author } = books[index]; /* это {} деструктуризация массива */

    return [title, author];
}

function calcTotalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    const r = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    console.log(r);
}

// ==========================================================
// Task 02.01

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());

// logBookTitles(getBookTitlesByCategory(Category.Javascript));

// console.log(getBookAuthorByIndex(0));

// calcTotalPages();

// +++++++++++++++++++++++++++++++++++++++++++++
// Task 03.01

function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// 1й способ задания функционального типа:
// let idGenerator: (name: string, id: number) => string;
// 2й способ задания функционального типа:
let idGenerator: typeof createCustomerID; /* позиция типа */
idGenerator = (name: string, id: number) => `${id}/${name}`;
idGenerator = createCustomerID;

const a = typeof createCustomerID; /* позиция значения (просто для примера тут) */

// console.log(idGenerator('Boris', 20));

// +++++++++++++++++++++++++++++++++++++++++++++
// Task 03.02

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

/* createCustomer('Marrine');
createCustomer('Marrine', 45);
createCustomer('Marrine', 45, 'London'); */

// console.log(getBookTitlesByCategory());

// logFirstAvailable();

/* function getBookByID(id: number): Book {
    const books = getAllBooks();
    return books.find(book => book.id === id);
} */

// более универсальное, чем в верхнем варианте задание типа параметра чеерез интерфейс

function getBookByID(id: Book['id']): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

// console.log(getBookByID(1));

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);
    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

/* console.log(сheckoutBooks('NoNameCustomer', 1, 2, 4));
console.log(сheckoutBooks('Ann', ...[1, 2, 4])); */

/* Task 03.03. Function Overloading */

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args; // деструктуризация, в данном случае аналогично agrs[0];

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args; // деструктуризация

        return books.filter(book => book.id === id && book.available === available).map(book => book.title);

        // ниже необязательная проверка, просто для примера
        if (typeof id === 'number' && typeof available === 'boolean') {
        }
    }
}

/* console.log(getTitles(1, true));
console.log(getTitles(true));
console.log(getTitles(false));
console.log(getTitles('Lea Verou')); */

// Task 03.04. Assertion Functions

function assertStringValue(data: any): asserts data is string {
    if (typeof data !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

/* console.log(bookTitleTransform('Learn Typescript'));
console.log(bookTitleTransform(1)); */

// Task 04.01. Defining an Interface

function printBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3,
    pages: 200,
    // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
    // ниже альтернативный вариант добавления метода
    markDamaged(reason: string) {
        console.log(`Damaged: ${reason}`);
    },
};

/* myBook.markDamaged('missing back cover');

printBook(myBook); */

// Task 04.02. Defining an Interface for Function Types

const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);

// Task 04.03. Extending Interface

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

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

type BookProperties = keyof Book | 'isbn';

function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

console.log(getProperty(myBook, 'title'));
console.log(getProperty(myBook, 'markDamaged'));
console.log(getProperty(myBook, 'isbn'));
