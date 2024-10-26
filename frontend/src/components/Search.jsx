import { useState } from "react";

const Search = () => {
  const [searchedItem, setSearchedItem] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    console.log(`handleSearch fired - searching ${searchedItem}`);
    // const response = await fetch('FILLMEIN')
    const response = {
      batchcomplete: "",
      continue: { sroffset: 10, continue: "-||" },
      query: {
        searchinfo: {
          totalhits: 18618,
          suggestion: "plaza",
          suggestionsnippet: "plaza",
        },
        search: [
          {
            ns: 0,
            title: "Pizza",
            pageid: 24768,
            size: 63573,
            wordcount: 5477,
            snippet:
              '<span class="searchmatch">Pizza</span> is an Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at',
            timestamp: "2024-10-24T20:36:59Z",
          },
          {
            ns: 0,
            title: "Pizza Pizza",
            pageid: 382548,
            size: 8272,
            wordcount: 643,
            snippet:
              '<span class="searchmatch">Pizza</span> <span class="searchmatch">Pizza</span> Ltd. is a franchised Canadian <span class="searchmatch">pizza</span> quick-service restaurant with its headquarters in Toronto, Ontario. Its restaurants are mainly in the',
            timestamp: "2024-10-24T17:39:20Z",
          },
          {
            ns: 0,
            title: "Mikhail Gorbachev Pizza Hut commercial",
            pageid: 67069537,
            size: 23465,
            wordcount: 2135,
            snippet:
              'in a 1998 television advertisement for <span class="searchmatch">Pizza</span> Hut. It was filmed in November 1997 on Red Square and in a <span class="searchmatch">Pizza</span> Hut restaurant elsewhere in Moscow. It was',
            timestamp: "2024-03-13T08:41:55Z",
          },
          {
            ns: 0,
            title: "Pizza Hut",
            pageid: 37561,
            size: 82651,
            wordcount: 7548,
            snippet:
              '<span class="searchmatch">Pizza</span> Hut, LLC is an American multinational <span class="searchmatch">pizza</span> restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney',
            timestamp: "2024-09-25T03:33:20Z",
          },
          {
            ns: 0,
            title: "Chicago-style pizza",
            pageid: 509495,
            size: 18864,
            wordcount: 1625,
            snippet:
              'Chicago-style <span class="searchmatch">pizza</span> is <span class="searchmatch">pizza</span> prepared according to several styles developed in Chicago. It can refer to both the well-known deep-dish or stuffed <span class="searchmatch">pizzas</span> and the',
            timestamp: "2024-09-10T23:36:04Z",
          },
          {
            ns: 0,
            title: "Hawaiian pizza",
            pageid: 538419,
            size: 15772,
            wordcount: 1334,
            snippet:
              'Hawaiian <span class="searchmatch">pizza</span> is a <span class="searchmatch">pizza</span> originating in Canada, traditionally topped with pineapple, tomato sauce, mozzarella cheese, and either ham or bacon. Sam Panopoulos',
            timestamp: "2024-09-28T17:31:40Z",
          },
          {
            ns: 0,
            title: "Domino's",
            pageid: 794480,
            size: 80004,
            wordcount: 7021,
            snippet:
              'Domino\'s <span class="searchmatch">Pizza</span>, Inc., commonly referred to as Domino\'s, is an American multinational <span class="searchmatch">pizza</span> restaurant chain founded in 1960 and led by CEO Russell Weiner',
            timestamp: "2024-10-24T16:51:36Z",
          },
          {
            ns: 0,
            title: "History of pizza",
            pageid: 5659119,
            size: 39494,
            wordcount: 4431,
            snippet:
              'The history of <span class="searchmatch">pizza</span> began in antiquity, as various ancient cultures produced flatbreads with several toppings. <span class="searchmatch">Pizza</span> today is an Italian dish with a flat',
            timestamp: "2024-10-25T17:44:47Z",
          },
          {
            ns: 0,
            title: "Pizza Margherita",
            pageid: 2804244,
            size: 8851,
            wordcount: 823,
            snippet:
              '<span class="searchmatch">Pizza</span> Margherita or Margherita <span class="searchmatch">pizza</span> is a typical Neapolitan <span class="searchmatch">pizza</span>, roundish in shape with a raised edge (the cornicione) and garnished with hand-crushed',
            timestamp: "2024-10-14T04:09:53Z",
          },
          {
            ns: 0,
            title: "Good Pizza, Great Pizza",
            pageid: 77018457,
            size: 13077,
            wordcount: 1255,
            snippet:
              'Good <span class="searchmatch">Pizza</span>, Great <span class="searchmatch">Pizza</span> is a restaurant management video game developed by TapBlaze for iOS, Android, Fire OS, Nintendo Switch, macOS, and Windows. The',
            timestamp: "2024-10-22T23:30:42Z",
          },
        ],
      },
    };
    const data = response.query.search;

    setResults(data);
    // todo use fetch to hit backend route
  };

  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control mr-3"
          placeholder="Search Wikipedia.."
          onChange={(e) => setSearchedItem(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          {" "}
          Search{" "}
        </button>
      </div>
      {results.length > 0 ? (
        <div className="card">
          <ul className="list-group">
            {results.map((result, index) => (
              <li className="list-group-item" key={index}>
                {result.title}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
