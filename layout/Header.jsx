import './Header.css'

import React from 'react';

const Header = () => {
    return (
        <div>
<div className="header-search">
        <input type="search" placeholder="Search..." />
        <button>
          <i className="fas fa-search" />
        </button>
      </div>
        </div>
    );
};

export default Header;


