import React from 'react'

export default function Search() {
  return (
     <div className="search">
      <div className="searchframe">

       <div className="searchtittle text-white">Pulse Travel - იმოგზაურე მსოფლიოს გარშემო საუკეთესო გარემოში</div>

       <div className="searchinput flex align-center"><img width={50} src="Search.png" alt="" /><input placeholder='მოძებნე ტურები...' type="text" /></div>
        <button className='allroutesbtn' >ყველა მარშუტი</button>
      </div>
     </div>
  )
}
