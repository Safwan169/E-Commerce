import { spread } from 'axios';
import React, { useEffect, useState, useNavigation } from 'react';
import { Rating, ThinStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useNavigate } from 'react-router-dom';

const Date1 = ({ data }) => {
    // console.log(data)
    const { brand, category, meta, title, price, rating, reviews, description, images, _id, id } = data
    // console.log(rating)
    // console.log(data1)
    const [ti, setTi] = useState()
    const Title = title.split(' ')

    // const [pre,setPre]=useState()
    // setPre(  price.toString().split(' . '))

    const pre = Math.ceil(price) * 100
    useEffect(() => {





        if (Title.length >= 4) {

            if (Title.length >= 5) {
                setTi(Title.slice(0, 3) + '...')

            }
            else if (Title.length == 4) { setTi(Title.slice(0, 3) + "...") }
            else setTi(Title.slice(0, 4) + "...")

        }
        else {
            setTi(title)
        }
    }, [title])
    const getSlicedText = (text) => {
        const wordsArray = text.split(' ');


        if (wordsArray.length >= 11) {
            return wordsArray.slice(0, 10).join(' ') + '...';
        } else {
            return text;
        }
    };
    const date = new Date(meta.createdAt)
    // console.log(date.toLocaleString())
    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }

    const navigate = useNavigate()

    // for details 
    const handleSubmit = id => {


        navigate(`/details/${id}`)

    }

    return (
        <div onClick={()=>handleSubmit(_id)} className="card w-full  group border-solid hover:shadow-md full card-compact bg-base-100 border border-gray-100  ">
            <figure className='group-hover:opacity-75'>
                {/* <img className='imge bg-cover h-[200px]'
                                src={data?.images[0]}
                                alt="Shoes" /> */}
                <img className='imge bg-cover object-cover object-center  h-[200px]' 
                src={data?.images[0]}
                    srcset={`${data.images[0]} 1x,`}
                    alt={data.images[1]}
                    loading="lazy"></img>

            </figure>
            <div className="card-body gap-0">
                <h2 className="text-left  text-xl items-end flex leading-10">{ti}</h2>
                <h2 className=" card-title">{brand || 'No Brand'}</h2>
                {/* <p>{getSlicedText(description)}</p> */}
                <p className='text-xl  text-gray-400'>{category}</p>

                <div className=" flex  justify-start ">
                    <p className="text-orange-400 text-xl font-semibold text-left btn-primary">৳ {pre}</p>
                </div>

                <p className='flex items-center   gap-1 text-gray-400 '><Rating itemStyles={myStyles} readOnly style={{ maxWidth: 100 }} value={rating} /><span className='mt-1 font-mono'>({reviews.length})</span></p>

                <p className='text-right text-gray-300 font-medium hover:text-orange-400'>{date.toLocaleString()}</p>

            </div>
        </div>


       
    );
};

export default Date1;