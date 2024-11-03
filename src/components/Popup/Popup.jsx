import React from "react";

const Popup = ({ close, details }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Your age in:</h2>
        <p className="details-info">
          Years: {details.totalYears}
          <br />
          Months: {details.totalMonths}
          <br />
          Weeks: {details.totalWeeks}
          <br />
          Days: {details.totalDays}
          <br />
        </p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
