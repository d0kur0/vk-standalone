import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import { MdHome, MdPhotoSizeSelectActual } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <MdHome /> Главная страница
          </Link>
        </li>
        <li>
          <Link to="/albums">
            <MdPhotoSizeSelectActual />
            Управление альбомами
          </Link>
        </li>
      </ul>
    </div>
  );
}
