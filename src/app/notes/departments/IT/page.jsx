'use client';

import React, { useState } from "react";
import itData from "../../data/it"; // Importing only itData
import "../../notes.css";

const IT = () => {
  const [filterSemester, setFilterSemester] = useState("All");
  const [filterSubject, setFilterSubject] = useState("All");

  const handleFilterSemesterChange = (e) => {
    setFilterSemester(e.target.value);
  };

  const handleFilterSubjectChange = (e) => {
    setFilterSubject(e.target.value);
  };

  const filteredNotes = itData.filter((note) => {
    if (
      filterSemester === "All" &&
      filterSubject === "All"
    )
      return true;
    if (
      filterSemester !== "All" &&
      filterSubject === "All"
    )
      return note.semester === filterSemester;
    if (
      filterSemester === "All" &&
      filterSubject !== "All"
    )
      return note.subject === filterSubject;
    return (
      note.semester === filterSemester &&
      note.subject === filterSubject
    );
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="middleTitle">IT Department</h1>
      </div>
      <div className="filter-list-container">
        <h3 style={{ paddingTop: "10px" }}>Semester</h3>
        <select
          className="filter-select"
          value={filterSemester}
          onChange={handleFilterSemesterChange}
        >
          <option value="All">All</option>
          <option value="Sem1">Sem3</option>
        </select>
        <h3 style={{ paddingTop: "10px" }}>Subject</h3>
        <select
          className="filter-select"
          value={filterSubject}
          onChange={handleFilterSubjectChange}
        >
          <option value="All">All</option>
          <option value="Maths">Maths III</option>
          <option value="DS">DS</option>
          <option value="DBMS">DBMS</option>
          <option value="COA">COA</option>
          <option value="SE">Soft Engg.</option>
        </select>
      </div>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <a
              href={note.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {note.note} ({note.semester}, {note.subject}) -{" "}
              <span style={{ color: "grey" }}>{note.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IT;