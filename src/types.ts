import { createCustomer, getBooksByCategoryPromise } from './functions';
import { Author, Book, Person } from './interfaces';

/*
export type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}; */

export type BookProperties = keyof Book | 'isbn';

export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;

export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Author, 'email'>;

export type СreateCustomerFunctionType = typeof createCustomer;

export type fn = (a: string, b: number, c: boolean) => symbol;
export type Param1<T> = T extends (a: infer H, b: number, c: boolean) => symbol ? H : never;
export type Param2<T> = T extends (a: string, b: infer F, c: boolean) => symbol ? F : never;
export type Param3<T> = T extends (a: string, b: number, c: infer F) => symbol ? F : never;

export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

export type RequiredProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop;
}[keyof T];

export type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never;
}[keyof T];

export type BookRequiredProps = RequiredProps<Book>;
export type BookOptionalProps = OptionalProps<Book>;

export type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};

export type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
export type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never; /* получаем тип значения промиса */
export type Unarray<T> = T extends Array<infer R> ? R : never; /* получаем тип значения массива */

type pr = ReturnType<typeof getBooksByCategoryPromise>; /* type pr = Promise<string[] */
type pr1 = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>; /* type pr1 = string[] */
type pr2 = Unarray<Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>>; /* type pr2 = string */

// export { BookProperties, PersonBook, BookOrUndefined };
