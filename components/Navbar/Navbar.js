import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <h2>Block Explorer</h2>
        <div className={styles.search_box}>
          <form>
            <input type="text" placeholder="Search by Address/Txn hash/Block" />
            <button> </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
