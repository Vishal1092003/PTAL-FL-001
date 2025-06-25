
export const isAuthenticated = () => {
  // Simulating auth: replace with real token/session check
  return localStorage.getItem("auth") === "true";
};


// src/user/auth.jsx
export function isAuthenticated() {
  // Return true if we have a non-empty authToken
  const token = localStorage.getItem("authToken");
  return Boolean(token);
}
