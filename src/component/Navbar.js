import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="login__button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav__section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png"
        />
      </div>
      <div className="menu__area">
        <ul className="menu__list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="menu__search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
