import React from "react";
import { patient } from "./tempdata";
import { useFirebase } from "./FirestoreContext";

function Article() {
  const { test } = useFirebase();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
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
              type="number"
              maxLength={30}
              placeholder="Kad Pengenalan "
            ></input>
            <button onClick={(e) => handleSubmit(e)} className="btn-submit">
              Semak
            </button>
          </div>
        </form>
        <PatientDetail />
      </div>
    </article>
  );
}

export default Article;

function PatientDetail() {
  const { name, age, gender, dos, doa, dod } = patient;
  return (
    <div className="patient-detail-container">
      <div className="patient-detail">
        <h3 className="patient-name">{name}</h3>
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
