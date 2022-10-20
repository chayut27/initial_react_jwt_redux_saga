import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Pagination from "../../components/Pagination";

const User = (props) => {
  const dispatch = useDispatch();
  // const empReducer = useSelector((state) => state.empReducer);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const action = (type, payload) => dispatch({ type, payload });
  useEffect(() => {

    action("EMP_REQ");
    // action("OFFICE_REQ");
    // action("COMP_REQ");
    // action("GENDER_REQ");
    // action("TITLE_NAME_REQ");
    // action("HOSPITAL_REQ");
    // action("WORK_TIME_REQ");
  }, []);

  const changePage = (n_page) => {
    setPage(n_page)
  }

  // if (empReducer.isFetching) {
  //   return <Loading />;
  // }

  const empReducer = {
    emps: [
      { _id: '1', name: 'Package A' },
      { _id: '2', name: 'Package B' },
      { _id: '3', name: 'Package C' },
      { _id: '4', name: 'Package D' },
      { _id: '5', name: 'Package E' },
      { _id: '6', name: 'Package F' },
    ]
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>User Management</Breadcrumb.Item>
      </Breadcrumb>

      <div className="row g-3 mb-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-0 text-uppercase">User Management</h1>
        </div>
        <div className="col-auto">
          <div className="page-utilities">
            <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
              <div className="col-auto">
                <div className="relative">
                  <input
                    type="text"
                    id="search-docs"
                    name="searchdocs"
                    className="form-control rounded-pill px-5"
                    placeholder="Search ..."
                  />
                  <span class=" absolute inset-y-0 left-0 flex items-center pl-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="col-auto">
                <Link className="btn btn-outline-primary rounded-pill text-uppercase" to="./create">
                  Add Reseller <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>

                </Link>
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

        <ul className="nav app-nav-tabs my-5 bg-transparent border-bottom">
          <li className="nav-item me-2">
            <a href="#" className="nav-link active">Home</a>
          </li>
          <li className="nav-item me-2">
            <a href="#" className="nav-link">Sales</a>
          </li>
          <li className="nav-item me-2">
            <a href="#" className="nav-link">Credit top up</a>
          </li>
          <li className="nav-item me-2">
            <a href="#" className="nav-link">Commission</a>
          </li>
          <li className="nav-item me-2">
            <a href="#" className="nav-link">Transaction</a>
          </li>
        </ul>


        <div className="row row-cols-1 row-cols-md-3">
          {empReducer.emps?.map(res => {
            return (
              <div className="col" key={res.id}>
                <div className="card border-0 text-center shadow-md mb-5">
                  <div className="card-body">
                    <div className="row  g-0 align-items-center justify-content-center">
                      <div className="col-5">
                        <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="avatar lg shadow" alt="" />
                      </div>
                      <div className="col-6">
                        <h6>{res.name}</h6>
                        <div class="d-grid gap-2 col-12 mx-auto">
                          <button className="btn btn-info text-uppercase rounded-pill">edit <i className="bi bi-pencil" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>


        <Pagination page={page} total={empReducer.emps.length} limit={limit} changePage={changePage} />
      </div>
    </>
  );
};

export default User;
