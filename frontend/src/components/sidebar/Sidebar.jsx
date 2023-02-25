import React, { useState } from 'react';
import { RiProductHuntLine } from 'react-icons/ri';
import { HiMenuAlt3 } from 'react-icons/hi';
import menu from '../../data/sidebar';

import './Sidebar.scss';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='layout'>
      <div className='sidebar' style={{ width: isOpen ? '230px' : '60px' }}>
        <div className='top_section'>
          <div
            className='logo'
            style={{ cursor: 'pointer', display: isOpen ? 'block' : 'none' }}
          >
            <RiProductHuntLine size={35} />
          </div>
          <div
            className='bars'
            style={{ cursor: 'pointer', marginLeft: isOpen ? '100px' : '0px' }}
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
