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

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null);
}

export {
    LibMgrCallback,
    Callback,
    Book,
    DamageLogger as Logger,
    Person,
    Author,
    Librarian,
    TOptions,
    Magazine,
    ShelfItem,
};
