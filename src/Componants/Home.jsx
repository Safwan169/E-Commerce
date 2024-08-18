import React, { useContext, useEffect, useState } from 'react';
import { context } from './Authentication';
import axios from 'axios';
import { IoIosArrowForward } from "react-icons/io";
import Date1 from './Date1';
// import Date from './Date';

const Home = () => {


    const { searchData, search, loading, setLoading } = useContext(context)

    const [main, setMain] = useState()





    useEffect(() => {
        const data = {
            name: search
        }
        axios.post('http://localhost:5000/product', data)
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
    const [text2, setText] = useState()
    const [text1, setText1] = useState('true')


    const handleOption = (e) => {
        const text = e.target.value
        setText(text)
        setText1(!text1)



    }

   
        useEffect(() => {
            if (text2 == 'high') {
                const data1 = main?.sort((a, b) => a?.price - b?.price)
                console.log('data', data1)
    
                return setMain(data1)
            }
            else if (text2 == 'low') {
                const data = main?.sort((a, b) => b?.price - a?.price)
    
                console.log('data', data)
    
                return setMain(data)
    
    
            }
            else if (text2 == 'new') {
                const data = main?.sort((a, b) => (new Date(a?.meta.createdAt)) - (new Date(b?.meta.createdAt)))
                console.log(data)
            }
        }, [text2])
        
    


    const [brand, setBrand] = useState()
    const [category, setCategory] = useState()
    const handleBrand = (e) => {
        const text = e.target.value
        console.log(text, 'brand')

        setBrand(text)

        // const data = searchData?.filter(data => data.brand == text)

        // setMain(searchData)
        // setMain(data)




    }
    const handleCategory = (e) => {
        const text = e.target.value
        console.log(text)
        setCategory(text)

        // const data = main?.filter(data => data.category == text)
        // setMain(data)



    }

    const [max, setMax] = useState()
    const [min, setMin] = useState()
    // for price
    const handlePrice = (e) => {
        e.preventDefault()

        const min = e.target.min.value || 0
        const max = e.target.max.value
        // setMin(min)
        // setMax(max)
        setMain(searchData)


        const data = main.filter(data => data?.price > min / 100 && data?.price < max / 100)
        console.log(data, 'sss')
        setMain(data)
    }

    useEffect(() => {
        axios.post(`http://localhost:5000/dd?category=${category}&brand=${brand}`)
            .then(res => { setMain(res.data), console.log(res.data) })

    }, [brand, category])


    const [btn, SetBtn] = useState(0)


    const handleBtn = (data) => {
        SetBtn(data)



    }




    useEffect(() => {
        axios.post(`http://localhost:5000/all?size=${btn}`)
            .then(res => { setMain(res.data), console.log(res.data) })

    }, [btn])
    const handlePre = () => {
        if (parseInt(btn) !== 0) {
            SetBtn((btn) - 1)


        }
    }
    const handleNxt = () => {
        if (parseInt(btn) !== pagenationBttn - 1) {
            SetBtn((btn) + 1)


        }
    }


    return (
        <>
            <div className="lg:flex " >


                <div className='flex justify-end mt-4 mr-3'>
                    <select onChange={handleOption} className="select select-bordered  max-w-xs">


                        <option disabled selected>Featured</option>
                        <option value={'low'} className='' >Low To High</option>

                        <option value={'high'}>High To Low</option>
                        <option value={'new'}> Newest first</option>
                    </select>
                </div>

                <div>
                    <div className='flex justify-end  mt-4 mr-3'>

                        <select onChange={handleBrand} className="select select-bordered h-8 max-w-xs">


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
                    <form onSubmit={handlePrice} className='flex justify-end  items-center mt-3 gap-2'>

                        <input placeholder='Min' className='w-20 h-10 text-gray-400 text-xs rounded-lg border border-gray-400 border-solid' name='min' type="number" />-
                        <input placeholder='Max' className='w-20 h-10 text-gray-400 text-xs rounded-lg border border-gray-400 border-solid' name='max' type="number" />
                        <button className='bg-orange-400 rounded-lg h-10 text-white font-bold w-10  justify-center items-center flex'><IoIosArrowForward /></button>
                    </form>

                </div>
            </div>




            <div className={main ? `${main?.length <= 3 ? "mx-auto lg:flex md:flex-wrap md:flex gap-4 mt-5 block ml-[9px] justify-center " : "mx-auto  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-3 justify-center items-center md:pl-12 mt-5 pl-[9px]  lg:pl-5 "} ` : 'hidden'}>
                {
                    main?.map(data => <Date1 data={data}></Date1>)
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