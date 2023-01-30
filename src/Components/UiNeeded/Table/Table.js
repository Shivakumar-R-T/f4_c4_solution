import React, { useState } from "react";

import "./Table.css";

const Table = ({ tableData, apiData }) => {

  return (
    <div className="table-container">
      <div className="table-body">
        {/* {console.log("Table",apiData[0]["id"])} */}
        <table border='' >
          <thead>
            <tr>
              {tableData?.map((tableRow, idx) => {
                return <th key={idx}>{tableRow[0]}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {tableData?.map((tableRow, idx) => {
              return (
                
                  <td>

                  {apiData?.map((indivData) => {
                    return <tr key={idx} className='row'>{tableRow[1](indivData)}</tr>;
                  })}
                  </td>
              

              );
            })}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Table;