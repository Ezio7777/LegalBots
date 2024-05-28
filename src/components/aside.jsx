import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/aside.css";

function aside() {
  return (
    <Card className="aside_full_body">
      <Card.Body>
        <h1 className="aside_header">Event Categories</h1>
        <ul className="aside_items">
          <li className="aside_list_item">
            <i class="fa-solid fa-arrow-right-long"></i>&nbsp; Event Calender
          </li>
          <li className="aside_list_item">
            <i class="fa-solid fa-arrow-right-long"></i>&nbsp; College Fests{" "}
            <span className="no_of_items_in_aside_items">(16)</span>
          </li>
          <li className="aside_list_item">
            <i class="fa-solid fa-arrow-right-long"></i>&nbsp; Competitions{" "}
            <span className="no_of_items_in_aside_items">(291)</span>
          </li>
          <li className="aside_list_item">
            <i class="fa-solid fa-arrow-right-long"></i>&nbsp; International
            Moots <span className="no_of_items_in_aside_items">(30)</span>
          </li>
          <li className="aside_list_item">
            <i class="fa-solid fa-arrow-right-long"></i>&nbsp; National Moots{" "}
            <span className="no_of_items_in_aside_items">(134)</span>
          </li>
          <li className="aside_list_item">
            <i class="fa-solid fa-arrow-right-long"></i>&nbsp; Others{" "}
            <span className="no_of_items_in_aside_items">(69)</span>
          </li>
          <li className="aside_list_item">
            <i class="fa-solid fa-arrow-right-long"></i>&nbsp; Papers{" "}
            <span className="no_of_items_in_aside_items">(355)</span>
          </li>
          <li className="aside_list_item">
            <i class="fa-solid fa-arrow-right-long"></i>&nbsp; Seminars and
            Webinars <span className="no_of_items_in_aside_items">(250)</span>
          </li>
          <li className="aside_list_item">
            <i class="fa-solid fa-arrow-right-long"></i>&nbsp; All{" "}
            <span className="no_of_items_in_aside_items">(1145) </span>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default aside;
