import React from 'react'

export default function Header() {
  return (
    <div className="header">
       <img className='backgroundimage' width={1920} src={'./Background.png'} alt="" />
      <div className="headerframe">

        <div className="leftsideheader">
          <div className="logoheader">
            <img width={60} src="mainlogo.png" alt="" />
            <div className="mainlogoheadertext"><div className="pulse text-white">Pulse</div> <div className="travel text-gray-300">Travel</div></div>
          </div>
        </div>
        <div className="rightsideheader">
          <div className="headersections">
            <a href="" className="turebisection">ტურები</a>
            <a href="" className="georgiansection">იმოგზაურე საქართველოში</a>
            <a href="" className="yeatbest">წლის საუკეთესო</a>
            <a href="" className="contactheader">კონტაქტი</a>
          </div>
        </div>
      </div>
    </div>
  )
}
