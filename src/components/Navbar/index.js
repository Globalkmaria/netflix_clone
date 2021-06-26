import React, { useEffect, useState } from 'react';
import { NavConatiner, NavImgLogo, NavImgAvatar } from './NavbarElement';
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    function blackNav() {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    }
    window.addEventListener('scroll', blackNav);
    return () => {
      window.removeEventListener('scroll', blackNav);
    };
  }, []);
  return (
    <NavConatiner show={show}>
      <NavImgLogo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <NavImgAvatar
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Profile"
      />
    </NavConatiner>
  );
}

export default Navbar;
