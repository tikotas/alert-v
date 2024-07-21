export declare const createGenericContext: <T>(contextName: string) => readonly [() => T, import("react").Provider<T>];
export default createGenericContext;
