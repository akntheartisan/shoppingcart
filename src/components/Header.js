import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Globolcontext } from "../App";

const Header = () => {
  const { cart } = useContext(Globolcontext);

  return (
    <div className="navbar">
      <h2 className="logo">Logo</h2>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        {/* <li><Link to={"/cart"}>View Cart</Link></li> */}
        <li>
          <Badge
            badgeContent={cart.length < 10 ? cart.length : "10+"}
            color="primary"
          >
            <Link to={"/cart"}>
              <ShoppingCartIcon />
            </Link>
          </Badge>
        </li>
      </ul>
    </div>
  );
};

export default Header;
