import React from "react";
import "./body.css";
import { datas } from "../../data/data";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
const Body = () => {
  return (
    <>
    <div className="tab">
            <div className="item active">ALL</div>
            <div className="item">Manpower Supply</div>
            <div className="item">Mobile App/ Website</div>
            <div className="item">UI/UX Design</div>
        </div>
    <div className="container">
      {datas.map((data, index) => {
        return (
          <div className="box" key={index}>
            <Link to="/" className="images">
              <img src={data.image} alt="image" />
            </Link>
            <div className="wrapper">
              <p className="title">{data.title}</p>
              <AiOutlineRight />
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Body;
