import React from "react";
import JSONdata from "./data.json";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "../App.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { SiApplepay } from 'react-icons/si';


const About = () => {
  const data = JSONdata;

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "completed",
      text: "completed",
      sort: true,
      filter: textFilter(),
    },
  ];

  console.info("data++ ", data);

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
        {
            text: "10",
            value: 10,
        },
        {
            text: "20",
            value: 20,
        },
        {
            text: "All",
            value: data.length,
        },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <div>
      <section id="about" class="about">
        <div class="container">
            <div> <SiApplepay fontSize="150px" /> </div>
          <div class="row boxsizing-width ">
            <div class="icon-boxes  d-flex flex-column align-items-stretch justify-content-center px-lg-5 abouttop">
              <BootstrapTable
                keyField="id"
                data={data}
                columns={columns}
                defaultSortDirection="asc"
                filter={filterFactory()}
                pagination={paginationFactory(options)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
