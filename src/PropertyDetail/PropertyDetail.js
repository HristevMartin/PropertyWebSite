import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PropertyDetail.css";
import { useParams } from "react-router-dom";

function PropertyDetail() {
  let { id } = useParams();
  let [item, setItem] = useState(null);

  async function fetchSingleItem() {
    const request = await fetch(`http://127.0.0.1:8000/api/building/${id}`);
    const data = await request.json();
    setItem(data);
  }

  useEffect(() => {
    fetchSingleItem();
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  const images = item.src.split(",");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="property-detail-container-wrapper">
      <div className="container  mt-3">
        <div className="row">
          <div className="col-md-12">
            <h1>{item.title}</h1>
            <p className="text-muted">{item.location}</p>
            <div className="slider-wrapper">
              
              <Slider
                className="slider"
                {...settings}
              >
                {images.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt="Property" className="slider-image" />
                  </div>
                ))}
              </Slider>

            </div>

            <h5 className="mt-4 property-about">About this property</h5>
            <p>{item.second_title}</p>
            <h5 className="mt-4">Details</h5>
            <p>{item.meta_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
