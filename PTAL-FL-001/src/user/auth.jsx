
export const isAuthenticated = () => {
  // Simulating auth: replace with real token/session check
  return localStorage.getItem("auth") === "true";
};
