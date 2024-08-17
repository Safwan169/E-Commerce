import { spread } from 'axios';
import React, { useEffect, useState } from 'react';
import { Rating, ThinStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Date1 = ({data}) => {
    // console.log(data)
    const {brand,category,meta,title,price,rating,reviews ,description,images}=data
    // console.log(rating)
    // console.log(data1)
const [ti,setTi]=useState()
    const Title=title.split(' ')

    // const [pre,setPre]=useState()
    // setPre(  price.toString().split(' . '))

const pre=Math.floor(price)*100
    useEffect(()=>{


      


        if (Title.length>=4) {

            if (Title.length>=5) {
                setTi(Title.slice(0,3)+'...')
                
            }
            else if(Title.length==4){ setTi(Title.slice(0,3)+"...")}
            else setTi(Title.slice(0,4)+"...")
            
        }
        else{
            setTi(title)
        }
    },[title])
    const getSlicedText = (text) => {
        const wordsArray = text.split(' ');
      

        if (wordsArray.length >= 11) {
            return wordsArray.slice(0, 10).join(' ') + '...';
        } else {
            return text;
        }
    };
    const date=new Date(meta.createdAt)
    // console.log(date.toLocaleString())
    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
      }

      
    return (
        <div className="card w-[300px] card-compact bg-base-100  shadow-xl">
                        <figure>
                            <img className='h-[200px]'
                                src={images[0]}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-left  text-xl items-end flex leading-10">{ti}</h2>
                            <h2 className=" card-title">{brand || 'No Brand'}</h2>
                            <p>{getSlicedText(description)}</p>
                            <p className='text-xl  text-gray-400'>{category}</p>

                            <div className="card-actions justify-end">
                                <button className="text-orange-400 text-xl font-semibold text-left btn-primary">৳ {pre}</button>
                            </div>
                            
                            <p className='flex items-center   gap-1 text-gray-400 '><Rating itemStyles={myStyles} readOnly  style={{ maxWidth: 100 }} value={rating}  /><span className='mt-1 font-mono'>({reviews.length})</span></p>

                            <p className='text-right text-gray-300 font-medium hover:text-orange-400'>{date.toLocaleString()}</p>
                           
                        </div>
                    </div>
    );
};

export default Date1;