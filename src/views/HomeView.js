import React from "react";
import { Link } from "react-router-dom";
import "./HomeView.css";
function HomeView() {
  return (
    <div>
      <div className="home-header">
        <h1>Iron Cars</h1>
        <h2>We are happy to help you</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In provident
          omnis reprehenderit odit fuga voluptatum repellendus recusandae labore
          eveniet obcaecati, voluptates incidunt nemo, sint ipsam? Molestias ex
          reiciendis aut nesciunt suscipit facere quod dicta eius ut,
          reprehenderit facilis deleniti? Ea amet aliquam quisquam pariatur
          nesciunt temporibus odio nemo eos quibusdam?
        </p>
      </div>
      <div className="home-explore">
        <h2>Check out our listings</h2>
        <Link to="/listings" className="home-btn">
          Explore
        </Link>
      </div>
    </div>
  );
}

export default HomeView;
