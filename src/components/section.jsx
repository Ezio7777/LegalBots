import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "react-bootstrap/Card";
import "../styles/section.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Gcard from "./section-card-grid";
import Lcard from "./section-card-list";
import Data from "../data/data";
import Pagination from "./pagination";

const TooltipButton = ({ icon, tooltipText, onClick, isActive }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        type="button"
        className={`btn btn-light grid_list_btn ${
          isActive ? "active_list_grid" : ""
        }`}
        onClick={onClick}
      >
        <i className={`fa-solid ${icon}`}></i>
      </button>
      {showTooltip && <div className="tooltip">{tooltipText}</div>}
    </div>
  );
};
const Section = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [view, setView] = useState("grid");

  const handleInputClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Card className="section_full_body">
      <Card.Body>
        <h1 className="section_header">Legal Events</h1>

        {/* 1strow */}

        <div className="row">
          <div className="col-xl-4 col-md-6 section_1st_items mb-2">
            <button
              type="button"
              class="btn btn-warning btn-md btn-block advertise_btn "
            >
              <i class="fa-solid fa-pen-to-square"></i> &nbsp;ADVERTISE WITH US
            </button>
          </div>
          <div className="col-xl-4 col-md-6 section_1st_items mb-2">
            <TooltipButton
              icon="fa-list"
              tooltipText="List View"
              onClick={() => setView("list")}
              isActive={view === "list"}
            />
            <TooltipButton
              icon="fa-grip"
              tooltipText="Grid View"
              onClick={() => setView("grid")}
              isActive={view === "grid"}
            />
          </div>
          <div className="col-xl-4 col-md-12 mb- search_section">
            <form class="form-inline search_section_go">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-warning" type="submit">
                GO
              </button>
            </form>
          </div>
        </div>

        <hr />

        {/* 2ndrow */}

        <div className="row sndrow">
          <div className="col-xl-4  col-md-12 mb-2">
            <DropdownButton
              id="dropdown-basic-button"
              title="Select Category"
              variant=""
              className="dropdown_btns"
            >
              <Dropdown.Item as="button" className="drop_items">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onClick={handleInputClick}
                />
              </Dropdown.Item>
              <Dropdown.Item as="button" className="drop_items">
                College Fest
              </Dropdown.Item>
              <Dropdown.Item as="button" className="drop_items">
                Competitions
              </Dropdown.Item>
              <Dropdown.Item as="button" className="drop_items">
                Other
              </Dropdown.Item>
              <Dropdown.Item as="button" className="drop_items">
                Paper
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col-xl-4 col-md-12 mb-2">
            <DropdownButton
              id="dropdown-basic-button"
              title="Select City"
              variant=""
              className="dropdown_btns"
            >
              <Dropdown.Item as="button" className="drop_items">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onClick={handleInputClick}
                />
              </Dropdown.Item>
              <Dropdown.Item as="button" className="drop_items">
                Kolkata
              </Dropdown.Item>
              <Dropdown.Item as="button" className="drop_items">
                Mumbai
              </Dropdown.Item>
              <Dropdown.Item as="button" className="drop_items">
                Delhi
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col-xl-4 col-md-12 mb-2">
            <DropdownButton
              id="dropdown-basic-button"
              title="Select Order"
              variant=""
              className="dropdown_btns"
            >
              <Dropdown.Item as="button" className="drop_items">
                Latest
              </Dropdown.Item>
              <Dropdown.Item as="button" className="drop_items">
                Earliest
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        {/* 3rdrow */}

        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-2">
            <div className="">
              <h1 className="m-1 date_header">
                Form Date <span>*</span>
              </h1>
            </div>

            <div className="input-group date date_input_size" id="datepicker">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="form-control"
                placeholderText="Select a date"
              />
            </div>
          </div>

          <div className="col-xl-3 col-sm-6  mb-2">
            <div className="">
              <h1 className="m-1 date_header">
                To Date <span>*</span>
              </h1>
            </div>

            <div className="input-group date date_input_size" id="datepicker">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                className="form-control"
                placeholderText="Select a date"
              />
            </div>
          </div>
          <div className="col-xl-3 col-sm-6  mb-2">
            <div className="">
              <h1 className="m-1 date_header">Program Fee</h1>
            </div>
            <DropdownButton
              id="dropdown-basic-button"
              title="ALL"
              variant=""
              className="dropdown_btns"
            >
              <Dropdown.Item as="button" className="drop_items">
                ALL
              </Dropdown.Item>
              <Dropdown.Item as="button" className="drop_items">
                Free
              </Dropdown.Item>
              <Dropdown.Item as="button" className="drop_items">
                Paid
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col-xl-3 filter_clear_box col-sm-12">
            <button type="button" class="btn btn-lg btn-dark mb-2 mr-3">
              Filter
            </button>
            <button type="button" class="btn btn-lg btn-dark mb-2">
              Clear
            </button>
          </div>
        </div>

        {/* cardsList */}

        <div className="row mt-5">
          {Data.map((item) => {
            return (
              <div
                className={`col-${
                  view === "grid" ? "xl-4 col-md-6" : "xl-12"
                } mb-4`}
                key={item.id}
              >
                {view === "grid" ? (
                  <Gcard data={item} />
                ) : (
                  <Lcard data={item} />
                )}
              </div>
            );
          })}
        </div>

        {/* Pagination  */}

        <Pagination />
      </Card.Body>
    </Card>
  );
};

export default Section;
