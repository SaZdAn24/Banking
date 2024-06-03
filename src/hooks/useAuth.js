import { useState, useEffect, useContext, createContext } from 'react';

// Создаем контекст для аутентификации
const AuthContext = createContext();

// Провайдер для аутентификации
export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// Хук для использования контекста аутентификации
export const useAuth = () => {
    return useContext(AuthContext);
};

// Основной хук для аутентификации
const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    // Функция для входа
    const signIn = (email, password) => {
        // Логика для входа (замените на вашу)
        // Пример: обращение к API для аутентификации
        const fakeUser = { email };
        setUser(fakeUser);
        return fakeUser;
    };

    // Функция для выхода
    const signOut = () => {
        // Логика для выхода (замените на вашу)
        setUser(null);
    };

    // Получение текущего пользователя (если необходимо)
    useEffect(() => {
        // Логика для проверки текущего пользователя (например, проверка токена)
        const fakeUser = { email: 'test@example.com' };
        setUser(fakeUser);
    }, []);

    return {
        user,
        signIn,
        signOut,
    };
};
