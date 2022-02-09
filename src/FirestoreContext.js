import React, { useContext } from "react";

const FirebaseContext = React.createContext();

export function useFirebase() {
  return useContext(FirebaseContext);
}
export function FirebaseProvider({ children }) {
  const test = 123;
  const value = { test };
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
