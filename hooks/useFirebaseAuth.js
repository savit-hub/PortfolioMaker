import { useState, useEffect } from "react";
import app, { auth, googleProvider } from "@/config/app";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  const signOut = () => auth.signOut();

  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    console.log("authstate", authState);
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    signInWithGoogle,
  };
}
