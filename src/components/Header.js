import React from 'react';

const Header = ({titulo}) => {
    return (    
        <ul className="nav justify-content-center bg-info">
  
             <a className="navbar-brand text-white" href="#!">{titulo}</a>
  
        </ul>
        

      );
}
 
export default Header;  


