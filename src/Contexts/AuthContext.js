import React, {useContext, useState,useEffect} from "react";
import {auth} from "../Firebase"

const AuthContext= React.createContext();
export function useAuth(){
  return useContext(AuthContext);
}

export default function AuthProvider({ children }){
  const [currentUser,setCurrentUser] = useState();
  const [loading, setLoading] = useState();
   function signup(email,password){
     return (
 auth.createUserWithEmailAndPassword(email,password)
     )
   }
   function login(email,password){
     return (auth.signinWithEmailAndPassword(email,password))
   }
   function logout(){
    return auth.signout();
   }
   useEffect(() => {
   const unsubscribe=auth.onAuthStateChanged(user => {
     setLoading(false)
  setCurrentUser(user)
});
return unsubscribe;
},[]);
  const value={
    currentUser,
    login,
    signup,
    logout
  }
  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}