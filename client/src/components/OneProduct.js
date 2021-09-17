import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from "axios";

const OneProduct = () => {
    const {idParams} = useParams();
    const [productInfo, setProductInfo]= useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${idParams}`)
            .then(res=>{
                console.log("rsponse when trying to get one product", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("error at oneProduct", err))
    },[])

    return (
        <div>
            <hr></hr>
            <h3>{productInfo.title}</h3>
            <h4>{productInfo.price}</h4>
            <h4>{productInfo.description}</h4>

        </div>
    );
};


export default OneProduct;