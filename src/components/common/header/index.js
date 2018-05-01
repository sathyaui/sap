import React from 'react';

import TodayDate from './todayDate';
import Navigation from '../navigation';

const Header = ({title, icon}) => (
  <header>
    <TodayDate />
    <Navigation title={title} icon={icon} />
  </header>
)

export default Header;
