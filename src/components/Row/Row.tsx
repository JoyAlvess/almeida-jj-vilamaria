import React from "react";
import "../../App.css";
import "./style.css";

export const Row = () => {
  return (
    <>
      <ul className="hours-table">
        <li style={{marginLeft: '38px'}}>Seg</li>
        <li>Ter</li>
        <li>Qua</li>
        <li>Qui</li>
        <li>Sex</li>
        <li style={{marginRight: '64px'}}>Sab</li>
      </ul>
      <ul className="hours-table">
        <li>06h - 07h</li>
        <li>06h - 07h</li>
        <li>06h - 07h</li>
        <li>06h - 07h</li>
        <li>06h - 07h</li>
        <li>10h - 11h</li>
      </ul>
      <ul className="hours-table">
        <li>07h - 08h</li>
        <li>07h - 08h</li>
        <li>07h - 08h</li>
        <li>07h - 08h</li>
        <li>07h - 08h</li>
        <li>--h - --h</li>
      </ul>
      <ul className="hours-table">
        <li>09h - 09:50</li>
        <li>--h - --h</li>
        <li>09h - 09:50</li>
        <li>--h - --h</li>
        <li>09h - 09:50</li>
        <li>--h - --h</li>
      </ul>
      <ul className="hours-table">
        <li>17h - 18h</li>
        <li>17h - 18h</li>
        <li>17h - 18h</li>
        <li>17h - 18h</li>
        <li>17h - 18h</li>
        <li>--h - --h</li>
      </ul>
      <ul className="hours-table">
        <li>18h - 19h</li>
        <li>18h - 19h</li>
        <li>18h - 19h</li>
        <li>18h - 19h</li>
        <li>18h - 19h</li>
        <li>--h - --h</li>
      </ul>
      <ul className="hours-table">
        <li>19h - 20h</li>
        <li>19h - 20h</li>
        <li>19h - 20h</li>
        <li>19h - 20h</li>
        <li>19h - 20h</li>
        <li>--h - --h</li>
      </ul>
      <ul className="hours-table">
        <li>21h - 22h</li>
        <li>21h - 22h</li>
        <li>21h - 22h</li>
        <li>21h - 22h</li>
        <li>--h - --h</li>
        <li>--h - --h</li>
      </ul>
    </>
  );
};
