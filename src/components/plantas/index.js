import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import planta from '../../assets/static/planta.png'
import plantaHumanizada from '../../assets/static/Planta_Humanizada.jpg'
import frontLake from '../../assets/static/Front_Lake.jpg'
import visite from '../../assets/ctas/CTAplanta.png'
import ctaVisite from '../../assets/ctas/plantaMobile.png'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { getAllByTestId } from '@testing-library/react'

export default function Page(props) {
  const [indexSlide, setIndexSlide] = useState(0);
  const ref = useRef();
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  const moveSlide = (value) => {
    ref.current.splide.go(value);
  }
  const arrayFotos = [
    { planta: planta },
    { planta: plantaHumanizada },
    { planta: frontLake },
  ]
  const renderImg = (el) => {
    return (
      <SplideSlide className="w-full">
        <div className="flex items-center justify-center">
          <img src={el.planta} className="p-3 " />
        </div>
      </SplideSlide>
    )
  }

  return (
    isMobile ?
      <div className="bg-plantaMobile">
        <div className="flex-auto flex-col py-10" >
          <div className="planta-title">
            <div className="leading-relaxed" >
              INFRAESTRUTURA COMPLETA
            </div>
          </div>
          <div className="leading-relaxed planta-text">
            Apartamento com sala de estar e jantar, cozinha, área de serviço
            <br/> e 3 dormitórios sendo 1 suíte..
          </div>
        </div>
        {/* <div className="planta">
          <div className="flex">
            <img src={planta} className="flex img-planta" />
          </div>
        </div> */}
        <div className="planta">
          <Splide
            className="splide-badges col-12"
            options={{
              rewind: true,
              width: 'auto',
              height: '100%',
              gap: '0rem',
              perPage: 1,
              pagination: true,
              arrows: false,
            }}
          >
            {arrayFotos.map(el => { return (renderImg(el)) })}

          </Splide>
        </div>
        <div className="flex">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5519996965525" >
            <img src={ctaVisite} className="flex planta-img" />
          </a>
        </div>
      </div>

      :
      <ScrollableAnchor id={'planta'}>
        <div className="bg-planta">
          <div className="flex flex-col">
            <div className="planta-title pt-24">
              INFRAESTRUTURA COMPLETA
            </div>
            <div className="planta-text">
              Apartamento com sala de estar e jantar, cozinha, área de serviço 
              <br/>e 3 dormitórios sendo 1 suíte.
            </div>
          </div>
          <div className="flex">
            <div className="flex content-center justify-center">
              <Splide
                ref={ref}
                className="splide-badges col-12"
                options={{
                  rewind: true,
                  width: '80%',
                  gap: '0rem',
                  perPage: 1,
                  pagination: false,
                  arrows: !isMobile,
                }}
              >
                <SplideSlide className="flex justify-center items-center pr-0 pl-10" style={{ display: 'flex', alignSelf: 'center' }}>
                  <img src={planta} className="flex justify-center md-h-full planta" />
                </SplideSlide>
                <SplideSlide className="flex justify-center items-center pr-0 pl-10" style={{ display: 'flex', alignSelf: 'center' }}>
                  <img src={plantaHumanizada} className="flex justify-center	md-h-full planta" />
                </SplideSlide>
                <SplideSlide className="flex justify-center items-center pr-0 pl-10" style={{ display: 'flex', alignSelf: 'center' }}>
                  <img src={frontLake} className="flex justify-center md-h-full planta" />
                </SplideSlide>

              </Splide>
            </div>
          </div>
          <div className="flex">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519996965525" >
              <img src={visite} className="flex planta-img" />
            </a>
          </div>
        </div>
      </ScrollableAnchor>
  )
}
