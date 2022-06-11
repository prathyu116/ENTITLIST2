import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData, sort } from "../Redux/TableFeature/Action";

const Table = ({ currentId, setCurrentId, setSort, setQuery }) => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const state = useSelector((store) => store.TableData.datas);

  // useEffect(() => {
  //   dispatch(getData());
  // }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                console.log(e.target.value);
                // setSearchParams({sort :e.target.value})
                setSort(e.target.value);
              }}
            >
              <option>SORT BY</option>
              {/* <option value="country">Sort by country</option> */}
              <option value="1">ID-LH</option>
              <option value="-1">ID-HL</option>
              {/* <option value="population">POPULATION</option> */}
            </select>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="Search...."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Country</th>
                  <th scope="col">City</th>
                  <th scope="col">Population</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {state
                  .map((data) => {
                    return (
                      <tr key={data.id}>
                        <th scope="row">{data.id}</th>
                        <td>{data.country}</td>
                        <td>{data.city}</td>
                        <td>{data.population}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-success"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => setCurrentId(data.id)}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => {
                              dispatch(deleteData(data.id));
                            }}
                          >
                            Danger
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
