import React, { useState, useContext, useEffect } from "react";
import { fs } from "./config/firebase";
const FirebaseContext = React.createContext();

export function useFirebase() {
  return useContext(FirebaseContext);
}
export function FirebaseProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const getPatient = async () => {
    const patients = await fs.collection("patients").get();
    const patientsArray = [];
    patients.docs.forEach((snap) => {
      const data = snap.data();

      patientsArray.push({ ...data });
      if (patientsArray.length === patients.docs.length) {
        setPatients(patientsArray);
      }
    });
  };

  useEffect(() => {
    getPatient();
  }, []);

  const value = { patients };
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
