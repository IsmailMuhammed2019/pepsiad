import React from 'react'
import can from './imgs/can.png'

const Content = () => {
  return (
    <div className='container'>
      <div className='text'>
        <h1>
          BE YOUNG, HAVE FUN,
          <br />
          <span>DRINK PEPSI</span>
        </h1>
        <p>
          Pepsi is a carbonated soft drink manufactured by PepsiCo.
          <br />
          Originally created and developed in 1893 by Caleb Bradham <br/>and
          introduced as Brad's Drink, it was renamed as Pepsi-
          <br />
          Cola in 1898, and then shortended to Pepsi in 1961.
        </p>
      </div>
      <div className='App-logo'>
        <img src={can} alt='' srcset='' />
      </div>
    </div>
  )
}

export default Content