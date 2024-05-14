import './App.css'
import React from 'react'
import logo from './assets/bitfxxlogo_rgbwhite.png'

const App = () => {
  return (
    <>
      <header>
        <div className="header-logo">
          <img src={logo} alt="bitfxxlogo" />
        </div>
        <div className="header-text">
          <h1>IndianStockSpark</h1>
        </div>
      </header>

      <nav>
        <div className="action-button">
          <div className="start-btn">
            <button>START</button>
          </div>
          <div className="stop-btn">
            <button>STOP</button>
          </div>
        </div>
      </nav>


      <div className="content">


        <div className="left-content">

        </div>

        <div className="right-content">
          <form className='tradingForm'>
            <input type="text" placeholder='Enter Volume' />
          </form>
        </div>

                  
      </div>
    </>
  );
}

export default App
