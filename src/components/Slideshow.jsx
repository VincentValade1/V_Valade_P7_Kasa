import '../styles/Slideshow.css';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import logements from '../datas/logements.json';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function Slideshow({ slides }) {
    const { id } = useParams();
    const matchingAppart = logements.find((appart) => appart.id === id);

    const [current, setCurrent] = useState(0);
    const length = matchingAppart.pictures.length;
    console.log(length)

    const positionImage = current + 1

    function nextSlide() {
        setCurrent(current === length -1 ? 0 : current +1);
    }

    function previousSlide() {
        setCurrent(current === 0 ? length -1 : current -1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slideshow-section'>
            {matchingAppart.pictures.map((picture, index) => {
                if(length > 1) {
                    return (
                        <div key={index} className={index === current ? 'slide active' : 'slide'}>
                            {index === current && (<img src={picture} alt="apercu du logement" />)}
                            <span className='bulletpoint'>{positionImage}/{length}</span>
                            <FaChevronLeft className="arrow left" onClick={previousSlide} />
                            <FaChevronRight className="arrow right" onClick={nextSlide} />
                        </div>
                    )
                }else{
                    return (
                        <div key={index} className={index === current ? 'slide active' : 'slide'}>
                            {index === current && (<img src={picture} alt="apercu du logement" />)}
                        </div>
                    )
                }
            })}
        </section>
    )
}

export default Slideshow



