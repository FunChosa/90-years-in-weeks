import React, { useCallback, useState } from "react";
import Board from "./components/Board/Board";
import Popup from "./components/Popup/Popup";
import dayjs from "dayjs";

const App = () => {
  const [weeks, setWeeks] = useState(0);
  const [birthdate, setBirthdate] = useState();
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({
    totalYears: 0,
    totalMonths: 0,
    totalDays: 0,
    totalWeeks: 0,
  });

  const calculateAge = useCallback(() => {
    const today = dayjs();
    const birthDateObj = dayjs(birthdate);
    const fullYear = new Date(birthdate).getFullYear();

    if (birthDateObj >= today) {
      setError("Birthdate cannot be in the future.");
      return 0;
    }

    if (birthDateObj.toString() === "Invalid Date") {
      setError("Invalid birth date.");
      return 0;
    }

    const diffDays = today.diff(birthDateObj, "day");
    const diffWeeks = today.diff(birthDateObj, "week");
    const diffMonths = today.diff(birthDateObj, "month");
    const diffYears = today.diff(birthDateObj, "year");

    if (diffDays == 0) {
      setError("Today? Really?");
      return 0;
    }

    if (diffWeeks <= 1) {
      setError("You are less than 1 week old.");
      return 0;
    }

    if (diffWeeks > 4696 || fullYear < 1900) {
      setError("Congratulations! You are better than 4696 weeks!");
      return 0;
    }

    setError("");

    setDetails({
      totalYears: diffYears,
      totalMonths: diffMonths,
      totalDays: diffDays,
      totalWeeks: diffWeeks,
    });

    setWeeks(diffWeeks);

    return diffWeeks;
  }, [birthdate]);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      calculateAge();
    }
  });

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="container">
      <div className="header">
        <span>
          {weeks > 0 && !error
            ? weeks + " / 4696" + " weeks"
            : "90 years in weeks"}
        </span>
        <input type="date" onChange={(e) => setBirthdate(e.target.value)} />
        <div className="buttons">
          <button type="submit" onClick={calculateAge} disabled={!birthdate}>
            Go!
          </button>
          <button
            onClick={() => {
              calculateAge();
              if (weeks > 0 && weeks <= 4696) {
                setModal(true);
              }
            }}
            disabled={!birthdate}
          >
            Details
          </button>
        </div>
        {error && <span>{error}</span>}
      </div>
      {weeks > 0 && !error && <Board weeks={weeks} />}
      {weeks > 0 && !error && modal && (
        <Popup close={closeModal} details={details} />
      )}
    </div>
  );
};

export default App;
