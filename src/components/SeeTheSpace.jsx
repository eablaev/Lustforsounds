import React, {useState} from "react";

import styles from './Studio.module.css'

import pic1 from '../assets/SeeTheSpacePictures/1.jpeg'
import pic2 from '../assets/SeeTheSpacePictures/2.jpeg'
import pic3 from '../assets/SeeTheSpacePictures/3.jpeg'

const images = [pic1, pic2, pic3];




function SeeTheSpace() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
      };


    return (
        <>
            <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
                <button className={styles.prev} data-prev onClick={prevSlide}>Prev</button>
                <button className={styles.next} data-next onClick={nextSlide}>Next</button>
                <div className="nav-circles" data-nav-circles>
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                </div>
        
        </>
    );
}

export default SeeTheSpace;
