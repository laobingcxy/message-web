const TOKEN_KEY = 'token';

export function getTokenAUTH() {
    return localStorage.getItem(TOKEN_KEY);
}