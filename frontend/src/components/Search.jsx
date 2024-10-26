import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

function Search() {
  const [searchedItem, setSearchedItem] = useState("");
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]); // History state
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  // Fetch initial history on mount
  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/history`);
      if (response.ok) {
        const data = await response.json();
        setHistory(data);
      }
    } catch (error) {
      console.error("Error fetching history", error);
    }
  };

  const handleSearch = async (e, item = searchedItem) => {
    if (e) e.preventDefault();
    if (!item) return;

    setLoading(true);
    setHasSearched(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/search?query=${item}`);
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setResults(data);

      // Adding the searched item to history
      await fetch(`${apiBaseUrl}/api/history`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item }),
      });

      // Fetch updated history
      fetchHistory();
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

  const handleHistoryClick = (item) => {
    setSearchedItem(item); // Update the search input
    handleSearch(null, item); // Call handleSearch with the selected item
  };

  return (
    <div className="container">
      <h1>Wiki Search</h1>
      <form onSubmit={(e) => handleSearch(e)}>
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

      <div className="mt-5">
        <h3>Search History</h3>
        {history.length > 0 ? (
          <ul className="list-group">
            {history.map((item) => (
              <li
                key={item.id}
                className="list-group-item list-group-item-action"
                onClick={() => handleHistoryClick(item.item)} // Pass 'item' to handleHistoryClick
                style={{ cursor: "pointer" }}
              >
                {item.item}
              </li>
            ))}
          </ul>
        ) : (
          <p>No history available.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
