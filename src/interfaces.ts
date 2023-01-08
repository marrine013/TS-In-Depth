import { Category } from './enums';

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

interface TOptions {
    duration?: number;
    speed?: number;
}

export { Book, DamageLogger as Logger, Person, Author, Librarian, TOptions };
