
import React from 'react';
import Logo from '../Logo/Logo';

import './AppNavBar.scss';

class AppNavBar extends React.Component {
  render() {
    return (
      <div className="AppNavBar">
        <div className="AppNavBarInner">
          <a href="/" className="AppNavBarLogoLink">
            <h1>Countries App</h1>
            {/* <Logo /> */}
          </a>
        </div>
      </div>
    );
  }
}

export default AppNavBar;