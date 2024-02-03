export const provideTokenValue = <T, V>(token: T, value: V) => {
    return { provide: token, useValue: value }
}
