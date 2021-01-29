import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState();
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    console.log("Logged in")
    console.log(currentUser);
    return(
      auth.signInWithEmailAndPassword(email, password)
      )
  }
  function logout() {
    console.log(currentUser);
    console.log("logout");
    return auth.signOut();
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log("State changed");
      console.log(currentUser)
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    login,
    signup,
    logout
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
