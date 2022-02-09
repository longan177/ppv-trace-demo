import React, { useState } from "react";
import { patient } from "./tempdata";
import { useFirebase } from "./FirestoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fs } from "./config/firebase";

function Article() {
  const { patients } = useFirebase();
  const [patient, setpatient] = useState(null);
  const [input, setInput] = useState("");
  const [notFound, setnotFound] = useState(false);
  const ref = fs.collection("patients");

  const getPatient = () => {
    const patientIC = input.replace(/(\d{6})(\d{2})(\d{4})/, "$1-$2-$3");
    console.log(patientIC);
    ref.where("ic", "==", patientIC).onSnapshot((querySnapshot) => {
      const patient = querySnapshot.docs[0].data();
      console.log(patient);
      //   setpatient(patient);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    getPatient();
    // console.log("ok");
    // if (!input) {
    //   return;
    // }
    // console.log(input);
    // const findPatientByIC = patients.find((p) => {
    //   console.log(p.ic);
    //   //   const identityCard = p.ic.replace(/-/g, "");
    //   //   return identityCard === input;
    // });
    // if (!findPatientByIC) {
    //   setnotFound(true);
    // }
    // setpatient(findPatientByIC);
    // // console.log(findPatientByIC);
  };
  const handleChange = (value) => {
    setInput(value);
    setnotFound(false);
  };

  return (
    <article>
      <div className="article-container">
        <form className="form-kkm">
          <label>
            Please key in your IC number to check your quarantine status
          </label>
          <div className="form-input">
            <input
              className="input-ic"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              type="number"
              maxLength={30}
              placeholder="Kad Pengenalan (tanpa -) "
            ></input>
            <button onClick={(e) => handleSubmit(e)} className="btn-submit">
              Semak
            </button>
          </div>
        </form>
        {patient && <PatientDetail patient={patient} />}
        {notFound && "Patient not found!"}
      </div>
    </article>
  );
}

export default Article;

function PatientDetail(props) {
  const { name, age, gender, dos, doa, dod } = props.patient;
  return (
    <div className="patient-detail-container">
      <div className="patient-detail">
        <h3 className="patient-name">{name ? name : "Not found"}</h3>
        <div className="p-info patient-age">
          Age: <span>{age}</span>
        </div>
        <div className="p-info patient-gender">
          Gender: <span>{gender}</span>
        </div>
        <div className="p-info patient-dos">
          Date of swab : <span>{dos}</span>
        </div>
        <div className="p-info patient-doa">
          Date of admissions: <span>{doa}</span>
        </div>
        <div className="p-info patient-dod">
          Date of discharge: <span>{dod}</span>
        </div>
      </div>
    </div>
  );
}
