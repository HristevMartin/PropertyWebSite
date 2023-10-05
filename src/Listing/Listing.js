import { useEffect, useState } from "react";
import "./Listing.css";
// import Link from react
import { Link } from "react-router-dom";

function Listing() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  async function fetchData() {
    const request = await fetch(
      `http://127.0.0.1:8000/api/building?page=${currentPage}`
    );

    const data = await request.json();

    const PAGE_SIZE = 8;
    const maxPage = Math.ceil(data.count / PAGE_SIZE);
    setMaxPage(maxPage);

    setData(data.results);
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  console.log("show me data", data);

  return (
    <div className="outer-card">
      <h2>Browse Headings</h2>
      <div className="test-card">
          {data.map((item) => {
            return (
              <div className="actual-card" key={item.id}>
                <img src={item.src.split(',')[0]} />
                <h3>{item.title}</h3>
                <p>{item.location}</p>
                <p className="product-price">{item.price}</p>
                <button className="actual-card-button">
                  <Link to={`/property/detail/${item.id}`} className="link-button">Details</Link>
                </button>
              </div>
            );
          })}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage} of {maxPage}</span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, maxPage))} disabled={currentPage === maxPage} >Next</button>
      </div>
    </div>
  );
}

export default Listing;
