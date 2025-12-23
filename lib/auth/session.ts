export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("auth");
}

export function signIn() {
  if (typeof window !== "undefined") localStorage.setItem("auth", "true");
}

export function signOut() {
  if (typeof window !== "undefined") localStorage.removeItem("auth");
}
