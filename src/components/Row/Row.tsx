import React from "react";
import "../../App.css";
import "./style.css";

export const Row = () => {
  return (
    <>
      <ul className="hours-table">
        <li style={{ marginLeft: "38px" }}>Seg</li>
        <li>Ter</li>
        <li>Qua</li>
        <li>Qui</li>
        <li>Sex</li>
        <li style={{ marginRight: "64px" }}>Sáb</li>
      </ul>
      <ul className="hours-table">
        <li>06:00 - 07:00</li>
        <li>06:00 - 07:00</li>
        <li>06:00 - 07:00</li>
        <li>06:00 - 07:00</li>
        <li>06:00 - 07:00</li>
        <li>10:00 - 11:00</li>
      </ul>
      <ul className="hours-table">
        <li>07:00 - 08:00</li>
        <li>07:00 - 08:00</li>
        <li>07:00 - 08:00</li>
        <li>07:00 - 08:00</li>
        <li>07:00 - 08:00</li>
        <li id="indispo-hours">Indisponivél</li>
      </ul>
      <ul className="hours-table">
        <li id="kids-and-teens-hours">09:00 - 09:50</li>
        <li id="indispo-hours">Indisponivél</li>
        <li id="kids-and-teens-hours">09:00 - 09:50</li>
        <li id="indispo-hours">Indisponivél</li>
        <li id="kids-and-teens-hours">09:00 - 09:50</li>
        <li id="indispo-hours">Indisponivél</li>
      </ul>
      <ul className="hours-table">
        <li>17:00 - 18:00</li>
        <li>17:00 - 18:00</li>
        <li>17:00 - 18:00</li>
        <li>17:00 - 18:00</li>
        <li>17:00 - 18:00</li>
        <li id="indispo-hours">Indisponivél</li>
      </ul>
      <ul className="hours-table">
        <li id="kids-hours">18:30 - 19:20</li>
        <li id="teens-hours">18:30 - 19:20</li>
        <li id="kids-hours">18:30 - 19:20</li>
        <li id="teens-hours">18:30 - 19:20</li>
        <li id="kids-hours">18:30 - 19:20</li>
        <li id="indispo-hours">Indisponivél</li>
      </ul>
      <ul className="hours-table">
        <li>19:30 - 20:45</li>
        <li>19:30 - 20:45</li>
        <li>19:30 - 20:45</li>
        <li>19:30 - 20:45</li>
        <li>19:30 - 20:45</li>
        <li id="indispo-hours">Indisponivél</li>
      </ul>
      <ul className="hours-table">
        <li>21:00 - 22:00</li>
        <li>21:00 - 22:00</li>
        <li>21:00 - 22:00</li>
        <li>21:00 - 22:00</li>
        <li id="indispo-hours">Indisponivél</li>
        <li id="indispo-hours">Indisponivél</li>
      </ul>
    </>
  );
};
