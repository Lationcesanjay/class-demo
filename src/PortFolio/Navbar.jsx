import { Outlet, Link } from "react-router-dom";
import './Css/project.css'
export const Navbar22 = () => {
  return (
    <div className="grid">
      <nav className="navli">
        <ul className="flex p-2 justify-evenly m-0">
          <li>
            <Link className="hover" to="/homePage">Home Page</Link>
          </li>
          <li>
            <Link className="hover" to="/project">Project</Link>
          </li>
          <li>
            <Link className="hover" to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link className="hover" to="/about">About</Link>
          </li>
          <li>
            <Link className="hover" to="/links">Links</Link>
          </li>
           
        </ul>
      </nav>
      <Outlet />
     
    </div>
  );
};

