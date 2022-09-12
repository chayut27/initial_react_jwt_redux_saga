import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const User = (props) => {
  console.log(props)
  const dispatch = useDispatch();
  const action = (type, payload) => dispatch({ type, payload });
  const empReducer = useSelector((state) => state.empReducer);
  const genderReducer = useSelector((state) => state.genderReducer);
  // const officeReducer = useSelector((state) => state.officeReducer);
  const token = localStorage.accessToken;
  useEffect(() => {
    action("EMP_REQ");
    action("OFFICE_REQ");
    action("COMP_REQ");
    action("GENDER_REQ");
    action("TITLE_NAME_REQ");
    action("HOSPITAL_REQ");
    action("WORK_TIME_REQ");
  }, []);

  if (empReducer.isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="row g-3 mb-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-0">Employees</h1>
        </div>
        <div className="col-auto">
          <div className="page-utilities">
            <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
              <div className="col-auto">
                <form className="docs-search-form row gx-1 align-items-center">
                  <div className="col-auto">
                    <input
                      type="text"
                      id="search-docs"
                      name="searchdocs"
                      className="form-control search-docs"
                      placeholder="Search"
                    />
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn app-btn-secondary">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              {/*//col*/}
              <div className="col-auto">
                <select className="form-select w-auto">
                  <option selected value="option-1">
                    All
                  </option>
                  <option value="option-2">Text file</option>
                  <option value="option-3">Image</option>
                  <option value="option-4">Spreadsheet</option>
                  <option value="option-5">Presentation</option>
                  <option value="option-6">Zip file</option>
                </select>
              </div>
              <div className="col-auto">
                <a className="btn app-btn-primary" href="#">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-upload me-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
                    />
                  </svg>
                  Upload File
                </a>
              </div>
            </div>
            {/*//row*/}
          </div>
          {/*//table-utilities*/}
        </div>
        {/*//col-auto*/}
      </div>
      {/*//row*/}

      <div>
        <div className="app-card app-card-orders-table shadow-sm mb-5">
          <div className="app-card-body">
            <div className="table-responsive">
              <table className="table app-table-hover mb-0 text-left">
                <thead>
                  <tr>
                    <th className="cell">Order</th>
                    <th className="cell">Product</th>
                    <th className="cell">Customer</th>
                    <th className="cell">Date</th>
                    <th className="cell">Status</th>
                    <th className="cell">Total</th>
                    <th className="cell" />
                  </tr>
                </thead>
                <tbody>
                  {empReducer.emps.map((res) => {
                    return (
                      <tr>
                        <td className="cell">{res._id}</td>
                        <td className="cell">
                          <span className="truncate">
                            Lorem ipsum dolor sit amet eget volutpat erat
                          </span>
                        </td>
                        <td className="cell">John Sanders</td>
                        <td className="cell">
                          <span>17 Oct</span>
                          <span className="note">2:16 PM</span>
                        </td>
                        <td className="cell">
                          <span className="badge bg-success">Paid</span>
                        </td>
                        <td className="cell">$259.35</td>
                        <td className="cell">
                          <div className="">
                            <div className="dropdown">
                              <div
                                className="btn btn-outline-light dropdown-toggle no-toggle-arrow"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-three-dots-vertical"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                                  />
                                </svg>
                              </div>
                              {/*//dropdown-toggle*/}
                              <ul className="dropdown-menu shadow-sm">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <svg
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 16 16"
                                      className="bi bi-eye me-2"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                      />
                                    </svg>
                                    View
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <svg
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 16 16"
                                      className="bi bi-pencil me-2"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                                      />
                                    </svg>
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <svg
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 16 16"
                                      className="bi bi-download me-2"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                                      />
                                    </svg>
                                    Download
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <svg
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 16 16"
                                      className="bi bi-trash me-2"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                      <path
                                        fillRule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      />
                                    </svg>
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/*//dropdown*/}
                          </div>
                          {/*//app-card-actions*/}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {genderReducer.emps.map((res) => {
                    return (
                      <p>{res.name.th}</p>
                    )

              })}
            </div>
            {/*//table-responsive*/}
          </div>
          {/*//app-card-body*/}
        </div>
        {/*//app-card*/}
        <nav className="app-pagination">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
        {/*//app-pagination*/}
      </div>
    </>
  );
};

export default User;
