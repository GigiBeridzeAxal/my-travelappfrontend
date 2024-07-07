'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Svg from './Svg'
import Link from 'next/link'


export default function Travel() {


    const [traveldata , settrveldata] = useState()

    useEffect(() => {

        const get = async() => {
   const getdata = await axios.post(process.env.NEXT_PUBLIC_GetTours  , {Secure:process.env.NEXT_PUBLIC_SECRETKEY})

        if(getdata){
            settrveldata(getdata.data)
            console.log(getdata.data)
        }

        }
        get()
     


    },[])
    if(traveldata == undefined){
        return null
    }

  return (
     <div className="travel">
        <div className="travelframe">

          <div className="europe">



          <div className="traveltittle">იმოგზაურე ევროპის მასშტაბით</div>

            <div className="travellist">
                {traveldata.filter(data => {return data.category.includes('europe')}).map(data => {return( <div className="traveldata ">
                
                <img className='imager' src={"dataimage/" + data.image} alt="" />

                   <div className="traveler">
                  
                    <div className="firstline flex items-center justify-between"><div className="travelprice text-green-500"> {data.price} ლ</div> <div className="location flex items-center gap-2"><img width={30} src="Locationgray.png" alt="" /> {data.location} </div> </div>
                    <div className="secondline gap-2 flex items-center"><img width={30} src="Timer.png " alt="" /> <div className="xangdzlivoba items-center gap-1 flex"><div className="text">ხანგრძლივობა: </div><div className="xantime">{data.tourtime} </div> დღე</div></div>
                    <div className="thirdline flex items-end gap-1"><img width={30} src="bed.png" alt="" /> <div className="textthirdline">სასტუმრო:</div> <div className="stars flex items-end gap-3"> <img className='goodpng' width={205} src={data.hotelstar + ".png"} alt="" /></div> </div>
                    <div className="thirdline flex justify-between items-center gap-1"><div className="fist flex items-center gap-1"><img width={30} src="eco.png" alt="" /> <div className="textthirdline">ტრანსპორტი:</div> <div className="stars flex items-end gap-3"><img className='goodpng' width={35} src={data.transport + ".png"} alt="" /></div></div> <div className="category flex items-center gap-2"> <img width={30} src="Globe.png" alt="" /> {data.category}</div> </div>
                   </div>
                   <Link  href={{
          query:'search/' + data._id
         }} className='dajavnshnabtn bg-emerald-300'>ტურის დაჯავშნა</Link>
                   
                </div>)               } )}

            </div>

          </div>
          <div className="europe">



<div className="traveltittle">იმოგზაურე ამერიკის მასშტაბით</div>

  <div className="travellist">
      {traveldata.filter(data => {return data.category.includes('america')}).map(data => {return( <div className="traveldata ">
      
      <img className='imager' src={"dataimage/" + data.image} alt="" />

         <div className="traveler">
        
          <div className="firstline flex items-center justify-between"><div className="travelprice text-green-500"> {data.price} ლ</div> <div className="location flex items-center gap-2"><img width={30} src="Locationgray.png" alt="" /> {data.location} </div> </div>
          <div className="secondline gap-2 flex items-center"><img width={30} src="Timer.png " alt="" /> <div className="xangdzlivoba items-center gap-1 flex"><div className="text">ხანგრძლივობა: </div><div className="xantime">{data.tourtime} </div> დღე</div></div>
          <div className="thirdline flex items-end gap-1"><img width={30} src="bed.png" alt="" /> <div className="textthirdline">სასტუმრო:</div> <div className="stars flex items-end gap-3"> <img className='goodpng' width={205} src={data.hotelstar + ".png"} alt="" /></div> </div>
          <div className="thirdline flex justify-between items-center gap-1"><div className="fist flex items-center gap-1"><img width={30} src="eco.png" alt="" /> <div className="textthirdline">ტრანსპორტი:</div> <div className="stars flex items-end gap-3"><img className='goodpng' width={35} src={data.transport + ".png"} alt="" /></div></div> <div className="category flex items-center gap-2"> <img width={30} src="Globe.png" alt="" /> {data.category}</div> </div>
         </div>
         <Link href={{
          pathname:'/search',
          query:{id:data._id}
         }} className='dajavnshnabtn bg-emerald-300'>ტურის დაჯავშნა</Link>
         
      </div>)               } )}

  </div>

</div>
<div className="europe">



<div className="traveltittle text-large">ექსტრემალური მოგზაურობა აზიაში</div>
<br />

  <div className="travellist bg-black">


      {traveldata.filter(data => {return data.category.includes('america')}).map(data => {return( <div className="traveldataer ">
      
      <img className='imager' src={"dataimage/" + data.image} alt="" />

         <div className="traveler ">
        
          <div className="firstline flex items-center justify-between"><div className="travelprice text-green-500"> {data.price} ლ</div> <div className="location flex items-center gap-2"><img width={30} src="Locationgray.png" alt="" /> {data.location} </div> </div>
          <div className="secondline gap-2 flex items-center"><img width={30} src="Timer.png " alt="" /> <div className="xangdzlivoba items-center gap-1 flex"><div className="text">ხანგრძლივობა: </div><div className="xantime">{data.tourtime} </div> დღე</div></div>
          <div className="thirdline flex items-end gap-1"><img width={30} src="bed.png" alt="" /> <div className="textthirdline">სასტუმრო:</div> <div className="stars flex items-end gap-3"> <img className='goodpng' width={205} src={data.hotelstar + ".png"} alt="" /></div> </div>
          <div className="thirdline flex justify-between items-center gap-1"><div className="fist flex items-center gap-1"><img width={30} src="eco.png" alt="" /> <div className="textthirdline">ტრანსპორტი:</div> <div className="stars flex items-end gap-3"><img className='goodpng' width={35} src={data.transport + ".png"} alt="" /></div></div> <div className="category flex items-center gap-2"> <img width={30} src="Globe.png" alt="" /> {data.category}</div> </div>
         </div>
         <Link href={{
          pathname:'/search',
          query:{id:data._id}
         }} className='dajavnshnabtn bg-emerald-300'>ტურის დაჯავშნა</Link>
         
      </div>)               } )}

  </div>

</div>


        </div>
     </div>
  )
}
