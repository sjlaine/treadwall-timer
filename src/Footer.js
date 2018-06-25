import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Icon } from 'react-icons-kit'
import { home2 } from 'react-icons-kit/icomoon';

const Footer = () => {
  return (
    <div>
      <Link to="/">
        <div style={{color: '#2d61b5'}}>
          <Icon size={64} icon={home2} />
        </div>
      </Link>
    </div>
  )
}

export default Footer;
