import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import '../styles/Collapse.css';

function Collapse ({ open, children, title, className }) {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${className}`}>
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
