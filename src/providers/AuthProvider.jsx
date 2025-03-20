import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Sign in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email: userEmail};

        setUser(currentUser);
        setLoading(false);
        console.log("User State Changed: ", currentUser);

        // if user exists then issue a token
        if(currentUser) {
          // const loggedUser = {email: currentUser.email};
          axios.post('https://car-doctor-server-zeta-bice.vercel.app/jwt', loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log("Token response: ", res.data);
          })
        }else {
          axios.post('https://car-doctor-server-zeta-bice.vercel.app/logout', loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log(res.data);
          })
        }
    });

    return () => {
        unSubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signInWithGoogle,
    logoutUser,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
