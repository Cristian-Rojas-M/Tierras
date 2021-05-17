import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.item}>
            <div className={styles.number}>
              <span
                onClick={() => paginate(number)}
              >
                {number}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
