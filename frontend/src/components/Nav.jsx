import { Link } from "react-router-dom";

import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/errorPage">Le concept</Link>
        </li>
        <li>
          <Link to="/errorPage">Protection des données</Link>
        </li>
        <li>
          <Link to="/errorPage">L'équipe</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
