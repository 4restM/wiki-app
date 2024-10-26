import { useState } from "react";
import DOMPurify from "dompurify";

function Search() {
  const [searchedItem, setSearchedItem] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setHasSearched(true);
    try {
      const response = await fetch(
        `${apiBaseUrl}/api/search?query=${searchedItem}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const sanitizeAndTruncate = (snippet) => {
    const cleanSnippet = DOMPurify.sanitize(snippet);
    return cleanSnippet + "..";
  };

  return (
    <div className="container">
      <h1>Wiki Search</h1>
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <input
            type="text"
            value={searchedItem}
            onChange={(e) => setSearchedItem(e.target.value)}
            className="form-control"
            placeholder="Enter search..."
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : null}
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="mt-4">
        {!loading && hasSearched && results.length > 0 ? (
          <ul className="list-group">
            {results.map((result, index) => (
              <li key={index} className="list-group-item">
                <h5>
                  <a
                    href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {result.title}
                  </a>
                </h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitizeAndTruncate(result.snippet),
                  }}
                ></p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && hasSearched && <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default Search;
