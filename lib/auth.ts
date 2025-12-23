export interface User {
  id: string;
  email: string;
  password?: string;
}

export interface AuthSession {
  user: User;
  token: string;
  refreshToken: string;
}

const USERS_KEY = "urofitness_users";
const SESSION_KEY = "urofitness_session";

export const authUtils = {
  // Mock token generation
  generateToken: () =>
    Math.random().toString(36).substring(2) + Date.now().toString(36),

  getUsers: (): User[] => {
    if (typeof window === "undefined") return [];
    const usersJson = localStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  },

  saveUser: (user: User) => {
    const users = authUtils.getUsers();
    const normalizedUser = { ...user, email: user.email.toLowerCase() };
    users.push(normalizedUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  setSession: (session: AuthSession) => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    // For compatibility with previous implementation
    localStorage.setItem("auth", "true");
  },

  getSession: (): AuthSession | null => {
    if (typeof window === "undefined") return null;
    const sessionJson = sessionStorage.getItem(SESSION_KEY);
    return sessionJson ? JSON.parse(sessionJson) : null;
  },

  logout: () => {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem("auth");
  },

  isAuthenticated: (): boolean => {
    return !!authUtils.getSession();
  },
};
