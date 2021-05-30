import React from 'react'
import Button from "../../components/Button/Button";
import styled from 'styled-components'

interface Props {
  to: string;
}

const SwitchButtonStyled = styled(Button)`
  padding: 15px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border: 1px solid #fff;
  margin-right: 10px;
  vertical-align: sub;

  &.bsc {
    &:hover {
      background-color: #F0B90B;
    }
  }

  .text {
    display: none;
  }

  @media(min-width:600px) {
    padding: 15px 20px;

    svg {
      padding-right: 10px;
    }

    .text {
      display: block;
    }

  }
`

const SwitchButton: React.FC<Props> = ({to}) => {

  const goToUrl = () => {
    if (to === 'polygon') {
      return "https://polygon.prismfinance.net";
    }
    return "https://bsc.prismfinance.net";
  }

  return (
    <a href={goToUrl()}>
      <SwitchButtonStyled className={to}>
        {
          to === 'polygon' &&
          <>
            <svg height="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 38.4 33.5" xmlSpace="preserve" fill="#ffffff"><g><path className="st0" d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3 c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7 c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7 c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1 L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7 c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z" /></g></svg>
            <span className="text">Switch to Polygon</span>
          </>
        }
        {
          to === 'bsc' &&
          <>
            <svg height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500.01 2500" fill="#ffffff"><g id="Layer_2"><g id="Layer_1-2" ><path className="cls-1" d="M764.48,1050.52,1250,565l485.75,485.73,282.5-282.5L1250,0,482,768l282.49,282.5M0,1250,282.51,967.45,565,1249.94,282.49,1532.45Zm764.48,199.51L1250,1935l485.74-485.72,282.65,282.35-.14.15L1250,2500,482,1732l-.4-.4,282.91-282.12M1935,1250.12l282.51-282.51L2500,1250.1,2217.5,1532.61Z"/><path className="cls-1" d="M1536.52,1249.85h.12L1250,963.19,1038.13,1175h0l-24.34,24.35-50.2,50.21-.4.39.4.41L1250,1536.81l286.66-286.66.14-.16-.26-.14"/></g></g></svg>
            <span className="text">Switch to BSC</span>
          </>
        }
      </SwitchButtonStyled>
    </a>
  )
}

export default SwitchButton
