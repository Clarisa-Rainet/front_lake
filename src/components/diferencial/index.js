import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { Fade } from 'react-reveal'
import utils from '../../utils'

import elevadores from '../../assets/icon/elevadores.png'
import localizacao from '../../assets/icon/localizacao.png'
import churrasqueira from '../../assets/icon/churrasqueira.png'
import arCondicionado from '../../assets/icon/ar_condicionado.png'
import planta from '../../assets/icon/planta_diferenciais.png'
import visite from '../../assets/ctas/CTAdiferenciais.png'

import diferencial from '../../assets/file/diferenciais.png'



export default function Page(props) {
  const [isMobile] = useState(utils.mobile());
  const arrayFotos = [
    { foto: elevadores, descricao: '3 Elevadores por Torre' },
    { foto: localizacao, descricao: 'localização privilegiada' },
    { foto: churrasqueira, descricao: 'varanda com churrasqueira' },
    { foto: arCondicionado, descricao: 'suporta até 4 pontos de ar-condicionado' },
    { foto: planta, descricao: 'planta adaptável' },
  ]

  const renderImg = (el) => {
    return (
      <SplideSlide className="flex justify-center items-center">
        <div className="diferencial-item">
          <img src={el.foto} className="" />
          <div className="flex diferencial-text">
            {el.descricao}
          </div>
        </div>
      </SplideSlide>
    )
  }

  return (
    isMobile ?
      <div className="bg-diferencialMobile">
        <Fade>
          <div className="flex flex-col justify-center items-center">
            <div className="justify-center">
              <img src={diferencial} className="diferencial" />
            </div>
          </div>

          <div className="flex flex-col pl-10">
            <div className="flex-wrap diferencial-content">
              <div className="flex diferencial-item">
                <img src={elevadores} className="diferencial-box" />
                <div className="flex diferencial-text">
                  3 Elevadores por Torre
                </div>
              </div>
            </div>

            <div className="flex-wrap diferencial-content">
              <div className="diferencial-item">
                <img src={localizacao} className="diferencial-box" />
                <div className="flex diferencial-text">
                  localização privilegiada
                </div>
              </div>
            </div>

            <div className="flex-wrap diferencial-content">
              <div className="diferencial-item">
                <img src={churrasqueira} className="diferencial-box" />
                <div className="flex diferencial-text">
                  varanda com churrasqueira
                </div>
              </div>

              <div className="flex-wrap diferencial-content">
                <div className="diferencial-item">
                  <img src={arCondicionado} className="diferencial-box" />
                  <div className="flex diferencial-text">
                    suporta até 4 pontos de<br /> ar-condicionado
                  </div>
                </div>
              </div>

              <div className="flex-wrap diferencial-content">
                <div className="diferencial-item">
                  <img src={planta} className="diferencial-box" />
                  <div className="flex diferencial-text">
                    planta adaptável
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-auto justify-start self-start py-10">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519996965525" >
              <img src={visite} className="img-diferencial" />
            </a>
          </div>
        </Fade >
      </div >
      :
      <ScrollableAnchor id={'diferencial'}>
        <div className="bg-diferencial py-20">
          <Fade>
            <div className="flex flex-grid items-start">

              <div className="flex flex-col items-start">
                <div className="justify-center pb-10">
                  <img src={diferencial} className="w-auto pl-20" />
                </div>

                <div className="flex flex-grid diferencial-content items-center pl-20">
                  <div className="flex-col diferencial-content">
                    <div className="diferencial-item">
                      <img src={elevadores} className="diferencial-box" />
                      <div className="flex diferencial-text">
                        3 Elevadores <br />por Torre
                      </div>
                    </div>

                    <div className="diferencial-item">
                      <img src={localizacao} className="diferencial-box" />
                      <div className="flex diferencial-text">
                        localização <br />privilegiada
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex-col diferencial-content pt-10">
                <div className="diferencial-item ml-2">
                  <img src={churrasqueira} className="diferencial-box pr-2" />
                  <div className="flex diferencial-text">
                    varanda com <br />churrasqueira
                  </div>
                </div>

                <div className="diferencial-item ml-14">
                  <img src={arCondicionado} className="diferencial-box1" />
                  <div className="flex diferencial-text">
                    suporta até 4 pontos <br />de ar-condicionado
                  </div>
                </div>

                <div className="diferencial-item ml-6">
                  <img src={planta} className="diferencial-box pr-2" />
                  <div className="flex diferencial-text">
                    planta adaptável
                  </div>
                </div>
              </div>

            </div>
            <div className="flex flex-auto justify-start self-start pt-10">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5519996965525" >
                <img src={visite} className="img-diferencial" />
              </a>
            </div>
          </Fade>
        </div>
      </ScrollableAnchor>
  )
}
