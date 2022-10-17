import React from 'react'
import can from './imgs/can.png'

const Content = () => {
  return (
    <div className='container'>
      <div>
        <div className='text'>
          <h1>
            BE YOUNG, HAVE FUN,
            <br />
            <span className='big'>DRINK PEPSI</span>
          </h1>
          <p className='textcontent'>
            Pepsi is a carbonated soft drink manufactured by PepsiCo.
            <br />
            Originally created and developed in 1893 by Caleb Bradham <br />
            and introduced as Brad's Drink, it was renamed as Pepsi-
            <br />
            Cola in 1898, and then shortended to Pepsi in 1961.
          </p>
        </div>
        <button className='btn grey bottom'>BUY NOW</button>
      </div>
      <div className='App-logo'>
        <img src={can} alt='' srcset='' />
      </div>
    </div>
  )
}

export default Content