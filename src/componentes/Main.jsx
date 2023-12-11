import React from 'react'
import styles from '../styles'
import { discount, robot} from '../assets'
import GetStarted from './GetStarted'

const Main = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='descuento' className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2 `}>
          Descuento de 
          <span className='text-white'> 20% </span>
          por
          <span className='text-white'> 1 mes </span>
          de cuenta
          </p>
        </div>


        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leadinf-[100px] leading-[75px]'>
            La nueva <br className='sm:block hidden'/>{" "}
            <span className='text-gradient'>GENERACION</span>{" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted></GetStarted>
          </div>
        </div>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leadinf-[100px] leading-[75px] w-full'>
        de método de pago.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Nuestro equipo de expertos utiliza una metodología para identificar las tarjetas de crédito que más se ajustan a sus necesidades. 
        Examinamos las tasas anuales efectivas, las comisiones anuales.</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter}`}>
        <img src={robot} className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] top-0 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Main