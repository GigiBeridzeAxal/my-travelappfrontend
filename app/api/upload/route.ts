import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import bcrypt from 'bcryptjs'
import axios from "axios";

export const POST = async (req, res) => {
    const formData = await req.formData();



   

       


    const file = formData.get("file");
    const Secure = formData.get('Secure')
    const price = formData.get('price')
    const tourtime = formData.get('tourtime')
    const transport = formData.get('transport')
    const hotelstar = formData.get('hotelstar')
    const category = formData.get('category')
    const location = formData.get('location')
    console.log("Hello world")

    if(!file || !Secure || !price || !tourtime || !transport || !hotelstar || !category || !location){
        console.log("not good")
        return NextResponse.json({error:"All Fields are Required"})
  
    }else{
        
        if(bcrypt.compare(process.env.NEXT_PUBLIC_SECRETKEY , Secure)){

             const buffer = Buffer.from(await file.arrayBuffer());
             const filename = Date.now() + file.name.replaceAll(" ", "_");
             try {
                await writeFile(
                path.join(process.cwd(), "public/dataimage/" + filename),buffer
                )
                if(writeFile){
                    axios.post(process.env.NEXT_PUBLIC_BACKEND, {
                        Secure:Secure,
                        image:filename,
                        price:price,
                        location:location,
                        hotelstar:hotelstar,
                        transport:transport,
                        tourtime:tourtime,
                        category:category
                    } )
                }
                ; } catch (error) {
                    console.log("Error occured ", error);

                  }



        }else{
            console.log("not good")
        }
        
    }


    console.log(Secure)

    return NextResponse.json({file})

    
};


