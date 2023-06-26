import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { Button, MenuButton, Menu, MenuList, MenuItem, } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { connectWallet, setButtonState, xp as XpUpdate } from "../../../redux/user/user.actions";
import WalletIcon from "../../../assets/WalletIcon";
import { FiLogOut } from "react-icons/fi";






function Nav() {

  const {
    walletAddress,
    pointXp,
    buttonState,
  } = useSelector(
    (state) => state.userManager
  );

  const [clicked, setClicked] = useState(false);

  let dispatch = useDispatch();
  console.log(walletAddress, "mainu ");
  const handleClick = () => {
    setClicked(!clicked);
  };

  const connectWalletonClick = async () => {
    dispatch(connectWallet());

  }


  const onLogout = () => {
    dispatch(XpUpdate(0));
    localStorage.clear();
    dispatch(setButtonState('Connect wallet'))
  }

  return (
    <div className="startdivNav">
      <ul id="list" className={clicked ? "#list active" : "#list"}>
        <li>
          {/* <NavLink to="/login" className="navbar">
            Set Up Quest
          </NavLink> */}
        </li>
        <li>
          {/* <NavLink to="/MyQuest" className="navbar">
            Explore Quest
          </NavLink> */}
        </li>

        <li>
          <NavLink className="navbarBtn">
            {/* wallet connect used here */}
            {pointXp > 0 ? (
              <span id="xp">{pointXp}Xp</span>
            ) : (
              <span></span>
            )}

            {(buttonState === 'Connect wallet' || buttonState === 'Connecting...') ? <Button
              aria-label='Options'
              rightIcon={<WalletIcon />}
              variant='outline'
              id='connect_wallet'
              borderRadius='50px'
              top='3px' right='0px'
              _hover={{ backgroundColor: 'rgb(5, 5, 175)' }}
              onClick={() => (buttonState !== ('Connect wallet' || 'Connecting...') ? () => { } : connectWalletonClick())}
            >{buttonState}</Button>
              : <Menu >
                <MenuButton
                  aria-label='Options'
                  as={Button}
                  rightIcon={<WalletIcon />}
                  variant='outline'
                  id='connect_wallet'
                  borderRadius='50px'
                  top='3px' right='0px'
                  _hover={{ backgroundColor: 'rgb(5, 5, 175)' }}
                  // onClick={() => (buttonState !== ('Connect wallet' || 'Connecting...') ? () => { } : connectWalletonClick())}
                >{buttonState}</MenuButton>

                <MenuList backgroundColor='blue'>
                  <MenuItem icon={<FiLogOut />} color='red' border='none' onClick={() => onLogout()} >
                    Logout
                  </MenuItem>

                </MenuList>
              </Menu>}
            {/* wallet connect function from here */}
          </NavLink>
        </li>
      </ul>
      <div className="icon" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
}

export default Nav;
