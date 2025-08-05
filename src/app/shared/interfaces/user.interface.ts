export interface User {
    id?: string;
    email: string;
    password?: string;
    name: string;
    company?: string;
    cnpj?: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}
