import React from "react";

function Article() {
  return (
    <article>
      <div className="article-container">
        <form className="form-kkm">
          <label>
            Please key in your IC number to check your quarantine status
          </label>
          <input
            type="number"
            maxLength={30}
            placeholder="Kad Pengenalan "
          ></input>
          <button className="btn-submit">Semak</button>
        </form>
      </div>
    </article>
  );
}

export default Article;
