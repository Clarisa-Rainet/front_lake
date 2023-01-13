import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { Fade } from 'react-reveal'
import utils from '../../utils'

import icones from '../../assets/static/icones_viver.png'
import viver from '../../assets/file/viver.png'
import cta from '../../assets/ctas/CTAviver.png'



export default function Page(props) {
  const [isMobile] = useState(utils.mobile());

  const renderImg = (el) => {
    return (
      <SplideSlide className="d-flex justify-center items-center">
        <div className="diferencial-item">
          <img src={el.foto} className="" />
          <div className="d-flex diferencial-text">
            {el.descricao}
          </div>
        </div>
      </SplideSlide>
    )
  }

  return (
    isMobile ?
      <ScrollableAnchor id={'descricao'}>
        <div className="bg-descricaoMobile">
          <Fade left duration={2000}>
            <div className="flex flex-col mx-6">
              <div className="flex-auto flex-col justify-center justify-items-center items-center">
                <div className="flex justify-center	pt-10 pb-4">
                  <img src={viver} className="flex img-descricao justify-center" />
                </div>
                <div className="flex text-descricao pb-6 justify-center">
                  O Front Lake Condominium Club está <br />
                  localizado em frente ao Lago Azul, em <br />
                  Rio Claro. Um empreendimento que <br />
                  proporciona uma das vistas mais <br />
                  lindas da cidade.
                </div>
              </div>
              <div className="flex">
                <div className="flex img-icones">
                  <img src={icones} />
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5519996965525" >
                  <img src={cta} className="flex justify-center descricao-img" />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </ScrollableAnchor>
      :
      <ScrollableAnchor id={'descricao'}>
        <div className="bg-descricao">
          <Fade left duration={2000}>
            <div className="flex flex-row mx-6">
              <div className="flex">
                <div className="flex img-icones">
                  <img src={icones} />
                </div>
              </div>
              <div className="flex-auto flex-col justify-center justify-items-center items-center">
                <div className="flex justify-center	pt-20 pb-10">
                  <img src={viver} className="flex img-descricao justify-center" />
                </div>
                <div className="flex text-descricao pb-6 justify-center">
                  O Front Lake Condominium Club está <br />
                  localizado em frente ao Lago Azul, em <br />
                  Rio Claro. Um empreendimento que <br />
                  proporciona uma das vistas mais <br />
                  lindas da cidade.
                </div>
                <div className="flex justify-center">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5519996965525" >
                    <img src={cta} className="flex justify-center descricao-img" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </ScrollableAnchor>
  )
}
