import React, { useContext, useEffect, useState } from 'react';
import { context } from './Authentication';
import axios from 'axios';

const Home = () => {


    const { searchData ,loading,setLoading} = useContext(context)

    const [main,setMain]=useState()

        
    useEffect(()=>{
        axios.post('http://localhost:5000/product')
        .then(res=>setMain(res.data))
    },[])



    // const {price}=searchData
    console.log(searchData)
    

    const handleOption = (e) => {
        const text=e.target.value
        setLoading(!loading)
                if (text=='low') {
                   const data1=  searchData?.sort((a,b)=>a.price-b.price)
                   console.log('data',data1)

                  return setMain(data1)
                }
                else if(text=='high'){
                    const data=  searchData?.sort((a,b)=>b.price-a.price)
                //    console.log('data',data)

                   return setMain(data)
                   

                }
        // console.log(e.target.value)
    }
    return (
        <>
            <div className='flex justify-end mt-4 mr-3'>
                    <select onChange={handleOption} className="select select-bordered  max-w-xs">


                        <option  disabled selected>Featured</option>
                        <option value={'low'}  className='' >Low To High</option>

                        <option value={'high'}>High To Low</option>
                    </select>
            </div>
           <div className="grid grid-cols-4">
           {
                main?.map(data=><div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                      <img
                        src={`${data.image}`}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{data.title}</h2>
                      <p>{data.description}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">{data.price}</button>
                      </div>
                    </div>
                  </div>)
            }
           </div>

        </>
    );
};

export default Home;