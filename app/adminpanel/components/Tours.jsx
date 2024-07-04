'use client'
import React, { useState } from 'react'

export default function Tours() {

    const [image , setimage] = useState('')
    const [price , setprice] = useState('')
    const [tourtime , settourtime] = useState('')
    const [rating , setrating] = useState('')
    const [location , setlocation] = useState('')
    const [transport , settransport] = useState('air')



    const fileupload = (e) => {
        const image = e.target.files[0]
        const reader = new FileReader()

        reader.onloadend =() => {
            setimage(reader.result)



        }
        reader.readAsDataURL(image)

    }
  return (
    <div className="tours">

        <form onClick={() => document.querySelector('.tourimage').click()} action="">
            {image === '' ? <><div className="plus"><img width={70} src="cloud.png" alt="" /></div>
            <div className="tittleforupload">Upload Your Image</div></>  : <img width={300} src={image} alt="" />  }



                    <input onChange={(e) => fileupload(e) } className='tourimage' type="file" hidden />

        </form>
        <div className="tourstittle"><img width={30} src="price.png" alt="" /><div className="text">დააყენეთ ფასი</div></div>
        <input onChange={(e) => setprice(e.target.value)} type="number" placeholder='შეიყვანეთ ფასი' />
        <div className="tourstittle"><img width={30} src="Time.png" alt="" /><div className="text">აირჩიე ტურის ხანგრძლივობა</div></div>
        <input onChange={(e) => settourtime(e.target.value)} type="text" placeholder='შეიყვანეთ ხანგრძლივობა' />
        <div className="tourstittle"><img width={30} src="rating.png" alt="" /><div className="text">აირჩიე რეიტინგი</div></div>
        <input onChange={(e) => setrating(e.target.value)} min={1} max={5} type="number" placeholder='შეიყვანეთ სასტუმროს რეიტინგი' />
        <div className="tourstittle"><img width={30} src="Location.png" alt="" /><div className="text">აირჩიე ლოკაცია</div></div>
        <input onChange={(e) => setlocation(e.target.value)} type="text" placeholder='შეიყვანეთ ლოკაცია' />
         <div className="tourstittle"><img width={30} src="transport.png" alt="" /><div className="text">აირჩიე ტრანსპორტი</div></div>
        <div className="transportselector">
            {transport == 'air' ?             <a onClick={(e) => settransport('air')} className="airplane bg-emerald-100"><img width={100} src="Airplane.png" alt="" /></a> :             <a onClick={(e) => settransport('air')} className="airplane"><img width={100} src="Airplane.png" alt="" /></a>}
            {transport == 'car' ?                      <a onClick={(e) => settransport('car')} className="airplane bg-emerald-100 "><img width={100} src="Car.png" alt="" /></a> :                       <a onClick={(e) => settransport('car')} className="airplane "><img width={100} src="Car.png" alt="" /></a>}
            {transport == 'railcar' ?                        <a onClick={(e) => settransport('railcar')} className="airplane bg-emerald-100"><img width={100} src="Railcar.png" alt="" /></a> :                        <a onClick={(e) => settransport('railcar')} className="airplane"><img width={100} src="Railcar.png" alt="" /></a>}

 

        </div>

        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  დაამატეთ ტური
</button>
        

    </div>
  )
}