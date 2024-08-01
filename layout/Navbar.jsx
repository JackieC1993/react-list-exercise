
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">StreetEasy</a>
      </div>
      <ul className="navbar-nav">
        <li>
          <a href="#">RENT</a>
        </li>
        <li>
          <a href="#">BUY</a>
        </li>
        <li>
          <a href="#">SELL</a>
        </li>
        <li>
          <a href="#">BUILDINGS</a>
        </li>
        <li>
          <a href="#">RESOURCES</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="search" placeholder="Search..." />
        <button>
          <i className="fas fa-search" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
