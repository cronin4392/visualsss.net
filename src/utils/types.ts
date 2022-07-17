export type Maybe<T> = null | undefined | T;

export type ObjectType = Record<string, unknown>;

export type Override<T1, T2> = Omit<T1, keyof T2> & T2;
