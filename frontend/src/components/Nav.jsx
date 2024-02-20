import { Link } from "react-router-dom";

import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/concept">Le concept</Link>
        </li>
        <li>
          <Link to="/dataProtection">Protection des données</Link>
        </li>
        <li>
          <Link to="/team">L'équipe</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
