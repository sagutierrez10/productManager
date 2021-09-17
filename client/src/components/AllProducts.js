import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("***** res is this", res)
                setAllProducts(res.data.results)
            })
            .catch(err => console.log("Error---->", err))
    }, [])

    // let [formInfo, setFormInfo]= useState({
    //     title: null,
    //     price: null,
    //     description: null
    // })

    // const changeHandler = (e)=>{
    //     console.log("changign something")
    //     console.log(e.target.name, e.target.value)
    //     setFormInfo({
    //         ...formInfo,
    //         [e.target.name]:e.target.value
    //     })
    // }

    // const submitHandler= (e)=>{
    //     e.preventDefault()
    //     console.log("submitted", formInfo);
    //     axios.post("http://localhost:8000/api/products", formInfo)
    //         .then(res=>{
    //             console.log("response after submitting form request",res)
    //         })
    //         .catch(err=>console.log(err))
    // }

    return (
        <div>
    {/* //             <form onSubmit={submitHandler}>
    //             <div className="form-group row">
    //                 <label for="inputEmail3" className="col-sm-2 col-form-label">Title:</label>
    //                 <div className="col-sm-10">
    //                     <input onChange={changeHandler} type="name" className="form-control" name="title"/>
    //                 </div>
    //                 <label for="inputEmail3" className="col-sm-2 col-form-label">Price:</label>
    //                 <div className="col-sm-10">
    //                     <input onChange={changeHandler} type="number" className="form-control" name="price"/>
    //                 </div>
    //                 <label for="inputEmail3" className="col-sm-2 col-form-label">Description:</label>
    //                 <div className="col-sm-10">
    //                     <input type="name" onChange={changeHandler} className="form-control" name="description"/>
    //                     <br></br>
    //                     <p style={{textAlign:"right"}}><button type="submit" className="btn btn-light">Create</button></p>
    //                 </div>
    //             </div>
    //             </form>
                <hr></hr> */}
                <h3>All Products:</h3>
                {allProducts.map((product, i) => {
                    return <ul key={i} style={{ listStyleType: "none" }}>
                        <li><Link to={`/products/${product._id}`}>{product.title}</Link></li>
                    </ul>
                })}
        </div>
            );
};


            export default AllProducts;