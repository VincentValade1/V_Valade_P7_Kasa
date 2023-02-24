// import '../styles/Collapse.css'

// function Collapse ({children, className}) {
//     return ( 
//         <div className={`collapse ${className}`}>
//             {children}
//         </div>
//     )
// }

// export default Collapse

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import '../styles/Collapse.css'
// interface IProps {
//   open?: boolean;
//   title: string;
// }

function Collapse ({ open, children, title }) {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="full-collapse-card">
        <button className="collapse-card-header" type="button" onClick={handleFilterOpening}>
            <h2 className="collapse-card-title">{title}</h2>
            {!isOpen ? (
                <FontAwesomeIcon icon={faChevronDown} />
            ) : (
                <FontAwesomeIcon icon={faChevronUp} />
            )}
        </button>
        
        {isOpen && <div className="collapse-card-text">{children}</div>}
    </div>
  
    )
};

export default Collapse;
