import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Header() {

  return (
    <div>
      <div style={{ textAlign: "center" }}>
      
      </div>
      <div style={{ textAlign: "center" }}>

      </div>
      <div style={{ textAlign: "center" }}>
        <ButtonGroup variant="text" aria-label="text primary button group">
          <Button>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
              to="/"
            >
              {" "}
              Home
            </NavLink>
          </Button>

          <Button>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
              to="/people"
            >
              {" "}
              People
            </NavLink>
          </Button>

          <Button>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
              to="/planets"
            >
              {" "}
              Planets
            </NavLink>
          </Button>

          <Button>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
              to="/starships"
            >
              {" "}
              Starships
            </NavLink>
          </Button>

        </ButtonGroup>
      </div>
    </div>
  );
}

export default Header;
