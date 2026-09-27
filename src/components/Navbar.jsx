import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Dine & Reserve</h2>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/booking">Book Table</Link>
        <Link to="/history">Reservation History</Link>
      </div>
    </nav>
  );
}
export default Navbar;
 