import React from "react";

function Nav() {
  return (
    <nav>
      <div className="nav-bar">
        <div className="logo">
          {/* <img src="/kkm.svg"></img> */}
          <img src="/logo-kkm.svg"></img>
        </div>
        <h1 className="title">Portal Rasmi PKRC Seri Bayu Kota Belud</h1>
        <div className="btn-login">Login</div>
      </div>
    </nav>
  );
}

export default Nav;
