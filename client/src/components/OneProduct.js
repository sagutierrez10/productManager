import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import { useHistory } from "react-router-dom";

const OneProduct = () => {
    const {idParams} = useParams();
    const [productInfo, setProductInfo]= useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${idParams}`)
            .then(res=>{
                console.log("rsponse when trying to get one product", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("error at oneProduct", err))
    },[])

    const deleteClickHandler=()=>{
        console.log("trying to delete product", productInfo._id)
        axios.delete(`http://localhost:8000/api/products/${productInfo._id}`)
            .then(res=>{
                console.log("response after axios delete-->", res)
                history.push("/")
            })
            .catch(err=>console.log("err when deleting-->", err))
    }

    return (
        <div>
            <hr></hr>
            <h3>{productInfo.title}</h3>
            <h4>{productInfo.price}</h4>
            <h4>{productInfo.description}</h4>
            <p><button onClick = {deleteClickHandler} className="btn btn-outline-danger">Delete Product</button></p>

        </div>
    );
};


export default OneProduct;