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

  useEffect(() => {
    // const action   = (type, payload) => dispatch({ type, payload });

    // action("EMP_REQ");
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

    ]
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Commission</Breadcrumb.Item>
      </Breadcrumb>

      <div className="row g-3 mb-4 align-items-center justify-content-between">
        <div className="col-auto">
          <h1 className="app-page-title mb-0">Commission</h1>
        </div>

      </div>
      {/*//row*/}

      <div>
        <nav id="orders-table-tab" className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4" role="tablist">
          <a className="flex-sm-fill text-sm-center nav-link active" id="orders-all-tab" data-bs-toggle="tab" href="#orders-all" role="tab" aria-controls="orders-all" aria-selected="true">Sale summary</a>
          <a className="flex-sm-fill text-sm-center nav-link" id="orders-paid-tab" data-bs-toggle="tab" href="#orders-paid" role="tab" aria-controls="orders-paid" aria-selected="false" tabIndex={-1}>Commission detail</a>
        </nav>



        <div className="tab-content" id="orders-table-tab-content">
          <div className="tab-pane fade active show" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
            <div className="row mb-4 justify-content-start justify-content-md-end">
              <div className="col-auto">
                <select className="form-select w-auto">
                  <option selected value="option-1">Sort by lasted</option>
                </select>
              </div>
            </div>
            <div className="app-card app-card-orders-table shadow-sm mb-5">
              <div className="app-card-body">

                <div className="table-responsive">
                  <table className="table mb-0 table-bordered text-center">
                    <thead>
                      <tr>
                        <th className="cell" width="33.33%">% commission</th>
                        <th className="cell" width="33.33%">Sale summary</th>
                        <th className="cell" width="33.33%">Commission summary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="cell">10.0 %</td>
                        <td className="cell">xxx,xxx baht</td>
                        <td className="cell">xx,xxx baht</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>{/*//app-card-body*/}
            </div>{/*//app-card*/}

            <div className="app-card app-card-orders-table shadow-sm mb-5">
              <div className="app-card-body">

                <div className="table-responsive">
                  <table className="table mb-0 app-table-hover table-bordered text-center">
                    <thead>
                      <tr>
                        <th className="cell" width="33.33%">Shop</th>
                        <th className="cell" width="33.33%">Sale summary</th>
                        <th className="cell" width="33.33%">Commission summary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="cell">Shop A</td>
                        <td className="cell">xxx,xxx baht</td>
                        <td className="cell">xx,xxx baht</td>
                      </tr>
                      <tr>
                        <td className="cell">Shop B</td>
                        <td className="cell">xxx,xxx baht</td>
                        <td className="cell">xx,xxx baht</td>
                      </tr>
                    </tbody>
                  </table>
                </div>


              </div>{/*//app-card-body*/}
            </div>{/*//app-card*/}

          </div>{/*//tab-pane*/}
          <div className="tab-pane fade" id="orders-paid" role="tabpanel" aria-labelledby="orders-paid-tab">
            <div className="row mb-4 justify-content-start justify-content-md-end">
              <div className="col-auto">
                <select className="form-select w-auto">
                  <option selected value="option-1">Sort by lasted</option>
                </select>
              </div>
            </div>
            <div className="app-card app-card-orders-table mb-5">

              <div className="app-card-body">

                <div className="table-responsive">
                  <table className="table app-table-hover text-center table-bordered mb-0">
                    <thead>
                      <tr>
                        <th className="cell" rowSpan={2}>Shop</th>
                        <th className="cell" colSpan={3}>Commission</th>
                      </tr>
                      <tr>
                        <th className="cell">Per day</th>
                        <th className="cell">Per year</th>
                        <th className="cell">Setting</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="cell">
                          Shop A
                        </td>
                        <td className="cell text-center fw-bold">259.00</td>
                        <td className="cell text-center fw-bold">259.00</td>
                        <td>
                          <button className="btn btn-info me-2">Edit</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="cell">
                          Shop B
                        </td>
                        <td className="cell text-center fw-bold">259.00</td>
                        <td className="cell text-center fw-bold">259.00</td>
                        <td>
                          <button className="btn btn-info me-2">Edit</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>{/*//table-responsive*/}
              </div>{/*//app-card-body*/}
            </div>{/*//app-card*/}
            <nav className="app-pagination">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>{/*//app-pagination*/}
          </div>{/*//tab-pane*/}
        </div>
      </div>

    </>
  );
};

export default User;
