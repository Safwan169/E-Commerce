import { Rating, ThinStar } from '@smastrom/react-rating'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';
import '@smastrom/react-rating/style.css'
import Loading from '../Loading/Loading';
import { context } from '../Authentication';
import Swal from 'sweetalert2';
import Test from '../LOGIN_&_SignUp/test';





const Details = () => {
  const location = useLocation()

  const {data}= Test()
  console.log(data)


  const { user } = useContext(context)

  const navigate = useNavigate()


  const [data1, setData] = useState()
  const idData = useParams().id
  useEffect(() => {
    axios.get(`https://e-commerce-server-side-beta.vercel.app/details/${idData}`)
      .then(res => setData(res.data))

  }, [])

  const [picture, setPicture] = useState()
  const [style, setPictureStyle] = useState()

  const handlePictureChange = (data, index) => {

    setPictureStyle(index)
    setPicture(data)
  }



  // rating style 
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }


  // for quantity

  const [quantity, setQuantity] = useState(1)


  const handleIncrease = () => {


    if (15 !== quantity) {

      setQuantity(quantity + 1)


    }
  }

  const handleDecrease = () => {



    if (quantity !== 1)

      setQuantity(quantity - 1)

  }

  // add to cart 
  const handleAddCart = () => {

    if (user) {

      const data = {
        email: user?.email,
        image: data1?.thumbnail,
        brand: data1?.brand,
        title: data1?.title,
        price: data1?.price,
        description: data1?.description,
        quantity,
        id:data1?._id


      }

      axios.post(`https://e-commerce-server-side-beta.vercel.app/cart`, data)
        .then(

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Add To The Cart",
            showConfirmButton: false,
            timer: 1500
        })

      


        )


    }



    else navigate('/login', { state: location })








  }


  return (

    // <div className="w-full mx-auto p-4">
    //   {/* Image and Title Section */}
    //   <div className="flex flex-col md:flex-row">
    //     {/* Product Image */}
    //     <div className="w-full md:w-1/2 p-4">
    //       <img
    //         src={data1?.images[0]}
    //         alt="Digital Pointer Steel Band Quartz Watch"
    //         className="w-full h-auto rounded-lg"
    //       />
    //       {/* Additional Images */}
    //       <div className="flex space-x-2 mt-4">
    //        {data1?.images?.map(data=> <img src={data} alt="thumb1" className="w-16 h-16 rounded-lg" />)}

    //       </div>
    //     </div>

    //     {/* Product Details */}
    //     <div className="w-full md:w-1/2 p-4">
    //       <h1 className="text-2xl font-bold mb-4">Digital Pointer Steel Band Quartz Watch Fashion Luxury Alloy Bracelet Set</h1>
    //       <p className="text-gray-500 mb-2">Brand: No Brand | More Watches from No Brand</p>

    //       <div className="flex items-center mb-4">
    //         <span className="text-yellow-500 font-bold text-lg">৳450</span>
    //         <span className="line-through text-gray-500 ml-4">৳900</span>
    //         <span className="text-green-500 ml-4">-50%</span>
    //       </div>


    //       {/* Quantity and Buy/Add to Cart */}
    //       <div className="flex items-center space-x-4 mb-4">
    //         <div className="flex items-center">
    //           <button className="bg-gray-300 p-2 rounded-l-lg">-</button>
    //           <input type="number" className="w-12 text-center border-t border-b border-gray-300" defaultValue="1" />
    //           <button className="bg-gray-300 p-2 rounded-r-lg">+</button>
    //         </div>
    //         <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Buy Now</button>
    //         <button className="py-2 px-4 bg-orange-500 text-white rounded-lg">Add to Cart</button>
    //       </div>

    //       {/* Delivery Info */}
    //       <div className="mb-4">
    //         <h2 className="text-lg font-medium mb-2">Delivery Options</h2>
    //         <p className="text-gray-500">Dhaka, Dhaka North, Banani Road No. 12 - 19</p>
    //         <p className="text-gray-500">Standard Delivery ৳75 (Get by 4-7 Sep)</p>
    //         <p className="text-gray-500">Cash on Delivery Available</p>
    //       </div>

    //       {/* Return & Warranty */}
    //       <div>
    //         <h2 className="text-lg font-medium mb-2">Return & Warranty</h2>
    //         <p className="text-gray-500">14 days easy return</p>
    //         <p className="text-gray-500">Warranty not available</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="w-full mx-auto md:p-4 p-2 lg:p-10">

      <div className='lg:flex md:flex '>
        {/* for details image  */}
        <div className='w-full '>

          {/* main image */}
          <img className='lg:w-3/4 md:w-3/4 lg:h-3/4 bg-cover rounded-lg border border-gray-200'
            src={picture ? picture : data1?.thumbnail}
            srcset={`${picture ? picture : data1?.thumbnail} 0.1x,`}
            loading="lazy" />

          {/* Additional  image */}
          <div className='flex mt-4 gap-2' >
            {
              data1?.images.map((data, index) => <img onClick={() => handlePictureChange(data, index)} className={`${(index == style) && 'border-red-600 border'} w-16 h-16 rounded-lg border border-gray-300`}
                src={data}
                srcset={`${data} 0.1x,`}
                alt={data}
                loading="lazy" />)
            }


          </div>

        </div>

        {/* for title or some details  */}


        <div className="w-full   md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">{data1?.title}</h1>

          <p className='flex items-center   gap-1 text-gray-400 '><Rating itemStyles={myStyles} readOnly style={{ maxWidth: 100 }} value={data1?.rating} /><span className='mt-1 font-light text-blue-500'>{data1?.reviews.length} Ratings</span></p>

          <p className="text-gray-500 mb-2">Brand: {data1?.brand || 'No Brand'} | More {data1?.category} from {data1?.brand}</p>

          <p className='text-black md:my-4 lg:my-4 font-extralight'>{data1?.description}</p>

          <div className="flex items-center mb-4">
            <span className="text-yellow-500 font-bold text-lg ">৳ {data1?.price * 100}</span>
            {/* <span className="line-through text-gray-500 ml-4">৳900</span> */}
            {/* <span className="text-green-500 ml-4">-50%</span> */}
          </div>
          {/* Quantity and Buy/Add to Cart */}
          <div className=" items-center mb-4">

            <p className='my-5  items-center flex'><span className='font-normal text-gray-500 font-sans mr-8'>Quantity </span> <span className="flex items-center gap-3"><button onClick={handleDecrease} className={`w-fit  text-gray-400 text-2xl   rounded-sm px-4 ${quantity == 1 && 'cursor-not-allowed bg-gray-100 ' || 'bg-gray-200'} `}>-</button><span className='w-3 text-center'>{quantity}</span><button onClick={handleIncrease} className={` w-fit  text-gray-400 text-2xl ${quantity == 15 ? ' bg-gray-100 cursor-not-allowed' : 'bg-gray-200'}  rounded-sm px-3`}>+</button></span></p>

            <div className="flex  justify-between items-center">
              {/* <button className="bg-gray-300 p-2 rounded-l-lg">-</button> */}
              {/* <input type="number" className="w-12 text-center border-t border-b border-gray-300" defaultValue="1" /> */}
              {/* <button className="bg-gray-300 p-2 rounded-r-lg">+</button> */}


            </div>
            <div className="flex items-center gap-2">
              <button className="py-2 px-0 bg-blue-500 text-white  rounded-lg">Buy Now</button>
              <button onClick={handleAddCart} className="py-2 px-0 bg-orange-500 text-white rounded-lg">Add to Cart</button>
            </div>

          </div>
        </div>

      </div>
















    </div>



  );
};

export default Details;