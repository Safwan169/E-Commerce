import React, { useContext, useEffect, useState } from 'react';
import { context } from './Authentication';
import axios from 'axios';
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {


    const { searchData, search, loading, setLoading } = useContext(context)

    const [main, setMain] = useState()





    useEffect(() => {
        const data = {
            name: search
        }
        axios.post('https://e-commerce-server-side-beta.vercel.app/product', data)
            .then(res => setMain(res.data))
    }, [search, loading])


    let lol = searchData?.length
    console.log(lol)
    let pagenationBttn = Math.ceil(parseInt(lol) / 8)
    console.log(pagenationBttn)


    const data = []

    for (let index = 0; index < pagenationBttn; index++) {
        data.push(index)
    }


    const handleOption = (e) => {
        const text = e.target.value
        if (text == 'low') {
            const data1 = main?.sort((a, b) => a.price - b.price)
            console.log('data', data1)

            return setMain(data1)
        }
        else if (text == 'high') {
            const data = main?.sort((a, b) => b.price - a.price)


            return setMain(data)


        }



    }


    const handleBrand = (e) => {
        const text = e.target.value

        const data = searchData?.filter(data => data.brand == text)

        setMain(searchData)
        setMain(data)




    }
    const handleCategory = (e) => {
        const text = e.target.value

        const data = main?.filter(data => data.category == text)
        setMain(data)



    }


    // for price
    const handlePrice = (e) => {
        e.preventDefault()

        const min = e.target.min.value || 0
        const max = e.target.max.value
        setMain(searchData)

        const data = main.filter(data => data?.price > min && data?.price < max)
        setMain(data)
    }
    const [btn, SetBtn] = useState(0)


    const handleBtn = (data) => {
        SetBtn(data)



    }
    useEffect(() => {
        axios.post(`https://e-commerce-server-side-beta.vercel.app/all?size=${btn}`)
            .then(res => { setMain(res.data), console.log(res.data) })

    }, [btn])

    const handlePre = () => {
        if (parseInt(btn)!== 0) {
            SetBtn((btn)-1)


        }
    }
    const handleNxt = () => {
        if (parseInt(btn)!== pagenationBttn) {
            SetBtn((btn)+1)


        }
    }


    return (
        <>
            <div className="flex">


                <div className='flex justify-end mt-4 mr-3'>
                    <select onChange={handleOption} className="select select-bordered  max-w-xs">


                        <option disabled selected>Featured</option>
                        <option value={'low'} className='' >Low To High</option>

                        <option value={'high'}>High To Low</option>
                    </select>
                </div>

                <div>
                    <div className='flex justify-end mt-4 mr-3'>

                        <select onChange={handleBrand} className="select select-bordered  max-w-xs">


                            <option disabled selected>Brand</option>
                            {
                                searchData?.map(data =>
                                    <option value={data?.brand} className='' >{
                                        data?.brand ? `${data?.brand}` : ""
                                    }
                                    </option>

                                )
                            }
                        </select>

                    </div>

                </div>
                <div>
                    <div className='flex justify-end mt-4 mr-3'>

                        <select onChange={handleCategory} className="select select-bordered  max-w-xs">


                            <option disabled selected>Category</option>
                            {
                                searchData?.map(data =>
                                    <option value={data?.category} className='' >{
                                        data?.category ? `${data?.category}` : ""
                                    }
                                    </option>

                                )
                            }
                        </select>

                    </div>

                </div>
                <div>
                    <form onSubmit={handlePrice} className='flex gap-5 justify-end  items-center mt-3 mr-3'>

                        <input placeholder='min' className='w-20 h-12 text-xs rounded-xl border border-black border-solid' name='min' type="number" />
                        <input placeholder='max' className='w-20 h-12 text-xs rounded-xl border border-black border-solid' name='max' type="number" />
                        <button className='bg-blue-400 text-white font-bold w-10 h-7 justify-center items-center flex'><IoIosArrowForward /></button>
                    </form>

                </div>
            </div>




            <div className={main ? "grid grid-cols-4 gap-3 " : 'hidden'}>
                {
                    main?.map(data => <div className="card w-[300px] card-compact bg-base-100  shadow-xl">
                        <figure>
                            <img className='h-[200px]'
                                src={data?.images[0]}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-left leading-10">{data?.title}</h2>
                            <h2 className="card-title">{data?.brand}</h2>
                            <p>{data.description}</p>
                            <p className='text-xl text-blue-400'>{data?.category}</p>
                            <p>{data.meta.createdAt}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">${data?.price}</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
           

                <div className=' flex mx-auto mt-6 border b  gap-1 w-64 '>
                <button onClick={handlePre} className='text-black border border-solid w-20   border-gray-400'>Previous</button>


                    {data?.map(data => <button onClick={() => handleBtn(data)} value={data} className={btn == data ? 'text-white bg-blue-500 border w-5 text-center rounded-lg  border-solid border-gray-400' : " border w-5 text-center rounded-lg text-black border-solid border-gray-400"}>{data + 1}</button>)}
                    <button onClick={handleNxt} className='text-black border border-solid w-20   border-gray-400'>Next</button>
               
                </div>

       

        </>
    );
};

export default Home;