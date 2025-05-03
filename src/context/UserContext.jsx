import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Hardcoded user credentials
  const staticUser = {
    email: "admin@admin.com",
    password: "123456",
  };

  const login = ({ email, password }) => {
    if (email === staticUser.email && password === staticUser.password) {
      const userData = { email, role: staticUser.role };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData)); // Save to localStorage
      return { success: true, role: staticUser.role };
    }
    return { success: false, message: "Invalid credentials" };
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
