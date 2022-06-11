import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table.jsx";
import { getData } from "./Redux/TableFeature/Action";
import { useSearchParams } from "react-router-dom";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const [searchPrams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchPrams.get("page") || 1));
  const [sort, setSort] = useState(searchPrams.get("sort") || 1);
    const [query, setQuery] = useState(searchPrams.get("query") || "");


  // const page = searchPrams.get("page");

  const dispatch = useDispatch();

  useEffect(() => {
    setSearchParams({ page, sort, query });
    dispatch(getData(page, sort, query));
  }, [page, query,sort, setSearchParams]);

  return (
    <div className="App">
      {/* <Navbar currentId={currentId} setCurrentId={setCurrentId} /> */}

      <Table currentId={currentId} setCurrentId={setCurrentId} page={page} setSort={setSort} setQuery={setQuery} />

      <div className="">
        <p className="text-center h6 my-3">Page: {page} </p>
        <button disabled={page === 1 ? true : false} onClick={() => setPage(page - 1)} className="btn btn-outline-success mx-2 px-3">
          Prev
        </button>
        <button onClick={() => setPage(page + 1)} className="btn btn-outline-success mx-2 px-3">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
