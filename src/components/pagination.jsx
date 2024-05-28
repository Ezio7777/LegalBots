import React, { useState } from "react";
import "../styles/pagination.css"; // Make sure to import the CSS file

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 10;

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="pagination_full_body mt-5 mb-3">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className={`page-item ${activePage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#!"
              tabIndex="-1"
              onClick={() => handlePageClick(activePage - 1)}
            >
              <i className="fa-solid fa-angles-left"></i>
            </a>
          </li>
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <li key={page} className="page-item ml-2">
                <a
                  className={`page-link page_pagination_item ${
                    activePage === page ? "active_page" : ""
                  }`}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </a>
              </li>
            );
          })}
          <li
            className={`page-item ${
              activePage === totalPages ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              onClick={() => handlePageClick(activePage + 1)}
            >
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
