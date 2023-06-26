import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav1.css";
import Logo from "../images/Newphotos/WINTERFUEL.png";
import queststart from "../images/Newphotos/strtq.png";
import { HamburgerIcon } from '@chakra-ui/icons'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
function Navbar() {
  return (
    <div className="navbar1">

      <img as={NavLink} to="/MyQuest" className="logo" src={Logo} alt="winterfuel logo" />
      <div className="mid">
        <li>
          <Link to="" className="navbar">
            About us           </Link>
        </li>
        <li>
          <Link to="/login" className="navbar">
            Set Up Quest
          </Link>
        </li>
        <li>
          <Link to="/MyQuest" className="navbar">
            Start Questing
          </Link>
        </li>
      </div>
      <div className="nav2">


        <NavLink>
          <Link to="/MyQuest">
            <div className="imgbtn">

              <img src={queststart} alt="" />
            </div>
          </Link>
        </NavLink>
      </div>
      <Menu
      >
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
          class={'menubtn'}
        />
        <MenuList
          style={{
            backgroundColor: '#040010',
            padding: '0px 20px 20px 20px'

          }}>
          <ul class={'menulistUl'}>

            <li>
              <MenuItem as={Link}
                style={{
                  backgroundColor: '#040010',
                }}
               
              to="" 
            className="menuItem"
            >
              About us
            </MenuItem>
          </li>
          <li>
            <MenuItem as={Link} style={{ backgroundColor: '#040010' }} to="/login" className="menuItem">
              Set Up Quest
            </MenuItem>
          </li>
          <li>
            <MenuItem as={Link} style={{ backgroundColor: '#040010' }} to="/MyQuest" className="menuItem">
              Explore Quest
            </MenuItem>
          </li>
          <li>

            <Link to="/MyQuest">

              <img className="imgbtn " src={queststart} alt="" />
            </Link>
          </li>
        </ul>
      </MenuList>
    </Menu>
    </div >
  );
}

export default Navbar;
