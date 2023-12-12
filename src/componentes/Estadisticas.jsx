import React, { useState, useEffect } from 'react';
import styles from '../styles';
import { stats } from '../constants';

const Estadisticas = () => {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 200) {
        setShowStats(true);
      } else {
        setShowStats(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
      style={{
        opacity: showStats ? 1 : 0,
        transition: 'opacity 2s ease-in-out',
      }}
    >
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            {stat.value}
          </h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Estadisticas;
