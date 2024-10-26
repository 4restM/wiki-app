import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  // const [results, setResults] = useState([]);

  const handleSearch = async () => {
    console.log(`handleSearch fired - searching ${searchInput}`);
    // todo use fake data
    // todo use fetch to hit backend route
  };

  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control mr-3"
          placeholder="Search Wikipedia.."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          {" "}
          Search{" "}
        </button>
      </div>

      <div className="card">
        <p>Results will be displayed here</p>
      </div>
    </div>
  );
};

export default Search;
