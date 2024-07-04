'use client'
import React, { useState } from 'react'
import Tours from './components/Tours'

export default function page() {

  const [selectedsection , setselectedsection] = useState('turebi')
  return (
   <div className="panel">
    <div className="panelframe">

      <div className="menubar">
        <div className="panellogo">
          <img width={70} src="mainlogo.png" alt="" />
          <div className="mainlogotext"><div className="pulse text-white">Pulse</div><div className="travel text-gray-300">Panel</div></div>
        </div>
        <br /><br />
          
          <div className="sections">
          <a onClick={() => setselectedsection('turebi')} className="tours">
            <img width={35} src="Eiffel.png" alt="" /> <div className="tourstittle">ტურები</div>
          </a>
          </div>
      </div>



      <div className="menu">

        {selectedsection == 'turebi'? <Tours></Tours> : <div></div>}





      </div>

    </div>
   </div>
  )
}
