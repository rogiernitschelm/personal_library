import React from 'react';

const Navigation = () => {
  return(
    <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Rogier <span className="hidden-sm-down">Nitschelm</span>.</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">StockSearch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">HappyLance</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
