import { SetStateAction, useEffect, useState } from 'react';
import style from './reviews.module.scss';
import dots from '../assets/images/ic_dots.svg';
import dotsWhite from '../assets/images/ic_dots_white.svg';
import leftArrow from '../assets/images/ic_left_arrow.svg';
import rightArrow from '../assets/images/ic_right_arrow.svg';
import profileImage from '../assets/images/ic_profile_image.png';

const Reviews = () => {
    const reviewData = {
        name: { first: 'Edward', last: 'Newgate' },
        picture: { large: profileImage },
        location: { city: 'Founder', country: 'Circle' },
        thought: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.”',
    };

    const totalReviews = 4;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === totalReviews - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleControlClick = (index: SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    return (
        <section className={style.reviews}>
            <img alt='dots' className={style.dots} src={dots} width={130} height={115} />

            <div className={style.container}>
                <img alt='dots' className={style.dots} src={dotsWhite} width={130} height={115} />

                <div className={style.title}>What our customer are saying</div>

                <hr />

                <div className={style.review}>
                    <>
                        <div className={style.profile}>
                            <img className={style.picture} alt='profile-img' src={reviewData.picture.large} />
                            <div>
                                <div className={style.name}>
                                    {`${reviewData.name.first} ${reviewData.name.last}`}
                                </div>
                                {`${reviewData.location.city} ${reviewData.location.country}`}
                            </div>
                        </div>
                        <div className={style.thought}>
                            {reviewData.thought}
                        </div>
                    </>
                </div>
            </div>

            {totalReviews > 1 && (
                <div className={style.controls}>
                    <img
                        src={leftArrow}
                        className={style.arrow}
                        alt='left-arrow'
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalReviews - 1))}
                    />

                    {[...Array(totalReviews)].map((_, index) => (
                        <div
                            key={`control_${index}`}
                            className={`${style.control} ${currentIndex === index ? style.active : ''}`}
                            onClick={() => handleControlClick(index)}
                        />
                    ))}

                    <img
                        src={rightArrow}
                        className={style.arrow}
                        alt='right-arrow'
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex < totalReviews - 1 ? prevIndex + 1 : 0))}
                    />
                </div>
            )}
        </section>
    );
};

export default Reviews;