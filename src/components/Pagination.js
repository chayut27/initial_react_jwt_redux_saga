import React, { useState, useEffect } from "react";

function Pagination({ page, total, limit, changePage }) {

  const [perPage, setPerPage] = useState(0)

  useEffect(() => {
    setPerPage(Math.ceil(total / limit))
  }, [])


  return (
    <>
      <nav className="app-pagination">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <a
              className="page-link shadow-none"
              tabIndex={-1}
              href="#"
              onClick={() => changePage(page - 1)}
            >
              Previous
            </a>
          </li>
          {Array.from({ length: perPage }, (_, i) => {
            return (
              <li key={i} className={`page-item ${i + 1 === page ? 'active' : ''}`}>
                <a className="page-link shadow-none" href="#" onClick={() => changePage(i + 1)}>
                  {i + 1}
                </a>
              </li>
            )
          })}
          <li className={`page-item ${page === perPage ? 'disabled' : ''}`}>
            <a className="page-link shadow-none" href="#" onClick={() => changePage(page + 1)}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
