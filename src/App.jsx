import React from 'react'
import styles from './styles'
import {Navbar, Facturacion, Footer, Estadisticas, Negocios, RepartoTarjeta, CTA, Main, Clientes, Testimonios} from './componentes/Index'
import GetStarted from './componentes/GetStarted';

const App = ()=> (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Main/>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Estadisticas/>
            <Negocios/>
            <Facturacion/>
            <RepartoTarjeta/>
            <Testimonios/>
            <Clientes/>
            <CTA/>
            <Footer/>
          </div>
        </div>
    </div>
  );

export default App