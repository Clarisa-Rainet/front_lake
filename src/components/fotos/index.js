import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import utils from '../../utils'

import galeria from '../../assets/file/galeria.png'
import frontlake from '../../assets/logo/logo_frontlake.png'


import sala from '../../assets/static/sala.png'
import varanda from '../../assets/static/varanda.png'
import cozinha_sala from '../../assets/static/cozinha_sala.png'
import cozinha from '../../assets/static/cozinha.png'
import quarto from '../../assets/static/quarto.png'
import piscina from '../../assets/static/piscina.jpg'
import foto1 from '../../assets/static/foto1.jpg'
import foto2 from '../../assets/static/foto2.jpg'
import foto3 from '../../assets/static/foto3.jpg'
import foto4 from '../../assets/static/foto4.jpg'
import foto5 from '../../assets/static/foto5.jpg'
import foto6 from '../../assets/static/foto6.jpg'
import foto7 from '../../assets/static/foto7.jpg'
import foto8 from '../../assets/static/foto8.jpg'
import foto9 from '../../assets/static/foto9.jpg'
import foto10 from '../../assets/static/foto10.jpg'
import foto11 from '../../assets/static/foto11.jpg'
import foto12 from '../../assets/static/foto12.jpg'
import foto13 from '../../assets/static/foto13.jpg'
import foto14 from '../../assets/static/foto14.jpg'
import foto15 from '../../assets/static/foto15.jpg'
import foto16 from '../../assets/static/foto16.jpg'
import foto17 from '../../assets/static/foto17.jpg'
import foto18 from '../../assets/static/foto18.jpg'
import foto19 from '../../assets/static/foto19.jpg'
import foto20 from '../../assets/static/foto20.jpg'
import foto21 from '../../assets/static/foto21.jpg'
import foto22 from '../../assets/static/foto22.jpg'
import foto23 from '../../assets/static/foto23.jpg'
import foto24 from '../../assets/static/foto24.jpg'


import { TextCenter } from 'react-bootstrap-icons'

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)
  const ref = useRef();
  const [isMobile] = useState(utils.mobile());
  const arrayFotos = [
    sala,
    varanda,
    cozinha_sala,
    cozinha,
    quarto,
    piscina,
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
    foto16,
    foto17,
    foto18,
    foto19,
    foto20,
    foto21,
    foto22,
    foto23,
    foto24,
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const renderImg = (value) => {
    return (
      <SplideSlide className="flex py-0 justify-center items-center" style={{ display: "flex", alignSelf: 'center' }}>
        <img src={value} className="w-auto" />
      </SplideSlide>
    )
  }

  return (
    isMobile ?
      <div className="bg-galeriaMobile">

        <div className="flex flex-col justify-items-center items-center pt-10">
          <div className="pb-4">
            <img src={galeria} className="flex px-20" />
          </div>
          <div className="px-10">
            <img src={frontlake} width="300" />
          </div>
        </div>
          <div className='flex col-12 fotos'>
            <Splide
              className="splide-badges col-12"
              options={{
                rewind: true,
                width: 'auto',
                height: '100%',
                gap: '0rem',
                perPage: 1,
                pagination: false,
                arrows: true,
                type: 'loop',
              }}
            >
              {arrayFotos.map(el => { return (renderImg(el)) })}
            </Splide>
          </div>
          <div className="fotos-text pb-10">
            Um <strong className="font-orange">condomínio club</strong> pronto para morar!
          </div>
      </div>

      :
      <ScrollableAnchor id={'fotos'}>
        <div className="bg-galeria">

          <div className="flex flex-col justify-items-center items-center">
            <div className="flex py-2">
              <img src={galeria} className="flex pt-14" />
            </div>
            <div className="flex">
              <img src={frontlake} width="450" />
            </div>
          </div>

          <div class="transition duration-150 ease-out hover:ease-in">
            <div className="flex flex-col justify-center content-center	items-center	">
              <Splide
                ref={ref}
                className="splide-badges col-12"
                options={{
                  rewind: true,
                  width: '80%',
                  gap: '0rem',
                  perPage: 1,
                  pagination: isMobile,
                  arrows: !isMobile,
                }}
              >
                <SplideSlide className="flex items-center">
                  <div className="flex flex-col pr-2 pl-10">
                    <div className='flex flex-grid pb-1'>
                      <div className="flex-auto bloco">
                        <img src={sala} />
                      </div>
                      <div className="flex-auto bloco pl-1">
                        <img src={varanda} />
                      </div>
                    </div>

                    <div className="flex flex-grid">
                      <div className="flex-auto bloco">
                        <img src={cozinha_sala} />
                      </div>
                      <div className="flex-auto bloco px-1">
                        <img src={cozinha} />
                      </div>
                      <div className="flex-auto bloco">
                        <img src={quarto} />
                      </div>
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide className="flex items-center">
                  <div className="flex flex-col pr-2 pl-10">
                    <div className='flex flex-grid pb-1'>
                      <div className="flex-auto bloco">
                        <img src={foto1} />
                      </div>
                      <div className="flex-auto bloco px-1">
                        <img src={foto2} />
                      </div>
                      <div className="flex-auto bloco">
                        <img src={foto3} />
                      </div>
                    </div>

                    <div className="flex flex-grid">
                      <div className="flex-auto bloco">
                        <img src={piscina} />
                      </div>
                      <div className="flex-auto bloco">
                        <img src={foto4} />
                      </div>
                      <div className="flex-auto bloco px-1">
                        <img src={foto5} />
                      </div>
                      <div className="flex-auto bloco">
                        <img src={foto6} />
                      </div>
                    </div>
                  </div>

                </SplideSlide>

                <SplideSlide className="flex items-center">
                  <div className="flex flex-col pr-2 pl-10">
                    <div className='flex flex-grid pb-1'>
                      <div className="flex-auto bloco">
                        <img src={foto7} />
                      </div>
                      <div className="flex-auto bloco px-1">
                        <img src={foto8} />
                      </div>
                      <div className="flex-auto bloco">
                        <img src={foto9} />
                      </div>
                    </div>

                    <div className="flex flex-grid">
                      <div className="flex-auto bloco">
                        <img src={foto10} />
                      </div>

                      <div className="flex-auto bloco px-1">
                        <img src={foto11} />
                      </div>
                      <div className="flex-auto bloco">
                        <img src={foto12} />
                      </div>
                    </div>
                  </div>

                </SplideSlide>

                <SplideSlide className="flex items-center">
                  <div className="flex flex-col pr-2 pl-10">
                    <div className='flex flex-grid pb-1'>
                      <div className="flex-auto bloco">
                        <img src={foto13} />
                      </div>
                      <div className="flex-auto bloco px-1">
                        <img src={foto14} />
                      </div>
                      <div className="flex-auto bloco">
                        <img src={foto15} />
                      </div>
                    </div>

                    <div className="flex flex-grid">
                      <div className="flex-auto bloco pr-1">
                        <img src={foto16} />
                      </div>
                      <div className="flex-auto bloco">
                        <img src={foto17} />
                      </div>
                      <div className="flex-auto bloco pl-1">
                        <img src={foto18} />
                      </div>
                    </div>
                  </div>

                </SplideSlide>

                <SplideSlide className="flex items-center">
                  <div className="flex flex-col pr-2 pl-10">
                    <div className='flex flex-grid pb-1'>
                      <div className="flex-auto bloco">
                        <img src={foto19} />
                      </div>
                      <div className="flex-auto bloco px-1">
                        <img src={foto20} />
                      </div>
                      <div className="flex-auto bloco">
                        <img src={foto21} />
                      </div>
                    </div>

                    <div className="flex flex-grid">
                      <div className="flex-auto bloco pr-1">
                        <img src={foto22} />
                      </div>
                      <div className="flex-auto bloco">
                        <img src={foto23} />
                      </div>
                      <div className="flex-auto bloco pl-1">
                        <img src={foto24} />
                      </div>
                    </div>
                  </div>

                </SplideSlide>
              </Splide>

            </div>
          </div >
          <div className="fotos-text pb-12">
            Um <strong className="font-orange">condomínio club</strong> pronto para morar!
          </div>

        </div >
      </ScrollableAnchor >
  )
}
