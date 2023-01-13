import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'
import utils from '../../utils'


import mapa from '../../assets/static/mapa_local.png'
import visite from '../../assets/ctas/CTAmapa.png'
import textMapa from '../../assets/file/textMapa.png'
import academia from '../../assets/static/academia.png'
import brinquedoteca from '../../assets/static/brinquedoteca.png'
import quadra from '../../assets/static/quadra.png'
import salao from '../../assets/static/salao_festa.png'
import detalhe from '../../assets/file/detalhe_laranja.png'
import detalhe1 from '../../assets/file/laranja_detalhe.png'


export default function Page(props) {
  const [isMobile] = useState(utils.mobile());

  return (
    isMobile ?
      <ScrollableAnchor id={'mapa'}>
        <div className="flex flex-col bg-mapaMobile">
          <Fade duration={2000}>
            <div className="w-full flex flex-col p-10">
              <div className="w-full flex flex-col relative pt-12">
                <img src={detalhe} className="flex detalhe" />
                <div className="flex-auto mapa-text absolute">
                  O condomínio oferece lazer para
                  crianças e adultos, pensando na
                  qualidade de vida de todos. Academia,
                  salão de jogos, salão de festas, quadra
                  poliesportiva, churrasqueiras, saunas
                  e piscinas.
                </div>
              </div>
              <div className="flex flex-col justify-center self-center">
                <img src={textMapa} className="text-mapa relative" />
                <div className="flex flex-col justify-end self-end pb-6">
                  <img src={detalhe1} className="flex detalhe1 absolute" />
                </div>
              </div>

              <div className="flex flex-col">

                <div className="flex flex-row">
                  <div className='flex-auto'>
                    <img src={academia} className="academia pr-1" />
                  </div>
                  <div className='flex-auto'>
                    <img src={brinquedoteca} className="brinquedoteca pl-1" />
                  </div>
                </div>

                <div className="flex flex-row">

                  <div className='flex-auto'>
                    <img src={quadra} className="quadra pr-1" />
                  </div>
                  <div className='flex-auto'>
                    <img src={salao} className="salao pl-1" />
                  </div>
                </div>
              </div>
              <div className="w-full flex-col">
                <div className="flex flex-col items-center justify-center">
                  <a
                    className="noHover"
                    target="_blank"
                    href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.8693852778597!2d-47.54467887082749!3d-22.4486821595993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7d0bc1f50b67b%3A0x9443b97a3819e661!2sR.%20Tr%C3%AAs%2C%20Santa%20Gertrudes%20-%20SP%2C%2013510-000!5e0!3m2!1spt-BR!2sbr!4v1671659272434!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy'>
                    <img src={mapa} className="mapa pt-6" />
                  </a>
                  <div className="mapa-address pt-6">
                    rua 03, nº 3246 - vila operária - rio claro | sp  <br />
                  </div>
                </div>

                <div className="relative flex flex-auto justify-center self-center">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5519996965525" >
                    <img src={visite} className="img-mapa" />
                  </a>
                </div>
              </div>
            </div>

          </Fade>
        </div>
      </ScrollableAnchor>
      :
      <ScrollableAnchor id={'mapa'}>
        <div className="flex flex-grid bg-mapa pl-20">
          <Fade duration={2000}>
            <div className="w-full flex flex-col p-10">
              <div className="w-full flex flex-col relative">
                <img src={detalhe} className="flex detalhe" />
                <div className="flex-auto mapa-text absolute">
                  O condomínio oferece lazer para
                  crianças e adultos, pensando na
                  qualidade de vida de todos. Academia,
                  salão de jogos, salão de festas, quadra
                  poliesportiva, churrasqueiras, saunas
                  e piscinas.
                </div>
              </div>
              <div className="flex flex-col justify-center self-center">
                <img src={textMapa} className="text-mapa" />
              </div>
              <div className="w-full flex-col">
                <div className="flex flex-col items-center justify-center">
                  <a
                    className="noHover"
                    target="_blank"
                    href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.8693852778597!2d-47.54467887082749!3d-22.4486821595993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7d0bc1f50b67b%3A0x9443b97a3819e661!2sR.%20Tr%C3%AAs%2C%20Santa%20Gertrudes%20-%20SP%2C%2013510-000!5e0!3m2!1spt-BR!2sbr!4v1671659272434!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy'>
                    <img src={mapa} className="mapa px-6" />
                  </a>
                  <div className="mapa-address">
                    rua 03, nº 3246 - vila operária - rio claro | sp  <br />
                  </div>
                </div>

                <div className="relative flex flex-auto justify-center self-center">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5519996965525" >
                    <img src={visite} className="img-mapa" />
                    {/* <div className="flex justify-center">
                      <div className="absolute mapa-visite">
                        visite o decorado no local
                      </div>
                      <div className="absolute mapa-whats">
                        Agende sua visita pelo Whatsapp: (19) 97413.9043
                      </div>
                    </div> */}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col pr-20">

              <div className="flex flex-row">
                <div className='flex-auto'>
                  <img src={academia} className="academia px-2" />
                </div>
                <div className='flex-auto'>
                  <img src={brinquedoteca} className="brinquedoteca px-2" />
                </div>
              </div>

              <div className="flex flex-row">

                <div className='flex-auto'>
                  <img src={quadra} className="quadra px-2" />
                </div>
                <div className='flex-auto'>
                  <img src={salao} className="salao px-2" />
                </div>
              </div>
            </div>

          </Fade>
        </div>
      </ScrollableAnchor>
  )
}
