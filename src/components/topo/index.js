import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'


import frontlake from '../../assets/logo/front_lake.png'
import topo from '../../assets/file/rio_claro.png'
import cta from '../../assets/ctas/CTAdecorado.png'

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)

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

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  return (
    isMobile ?
      <ScrollableAnchor id={'home'}>
        <div className="bg-topoMobile">
          <Fade>
            <div className="flex flex-col definicao flex-col">
              <div className="top-img py-16">
                <img
                  src={frontlake}
                  className="flex"
                  width="250"
                />
              </div>
              <div className="text-topo self-center">
                o privilégio de <br />viver o melhor de
              </div>
              <div className="flex rio-claro">
                <img src={topo} className="flex" />
              </div>

              <div className="flex justify-center">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5519996965525" >
                  <img src={cta} className="iflex mg-topo pt-10" />
                </a>
              </div>

            </div>
          </Fade>
        </div>
      </ScrollableAnchor>

      :
      <ScrollableAnchor id={'home'}>

        <div className="bg-topo">
          <Fade>
            <div className="flex definicao flex-col">
              <div className="top-img">
                <img
                  src={frontlake}
                  className="flex"
                  width="300"
                />
              </div>
              <div className="text-topo self-start">
                o privilégio de <br />viver o melhor de
              </div>
              <div className="flex rio-claro">
                <img src={topo} className="flex" />
              </div>

              <div className="relative flex flex-auto justify-start">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5519996965525" >
                  <img src={cta} className="img-topo pt-6" />
                </a>
              </div>

            </div>
          </Fade>
        </div>
      </ScrollableAnchor>
  )
}
