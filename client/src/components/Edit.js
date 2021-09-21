import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Edit = () => {
    const {idParams} = useParams();

    const history= useHistory();

    const [productInfo, setProductInfo]= useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${idParams}`)
            .then(res=>{
                console.log("response when trying to get one product", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("error at oneProduct", err))
    },[])

const changeHandler = (e)=>{
    console.log("changing something")
    console.log(e.target.name, e.target.value)
    setProductInfo({
        ...productInfo,
        [e.target.name]:e.target.value
    })
}
const submitHandler= (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/products/${idParams}`, productInfo)
        .then(res=>{
            console.log("response after put request",res)
            // history.push("/") redirects to main page
            history.push(`/products/${idParams}`)
        })
        .catch(err=>console.log(err))
}

    return (
        <div>
            <form onSubmit={submitHandler}>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Title:</label>
                <div className="col-sm-10">
                    <input onChange={changeHandler} type="name" className="form-control" name="title" value={productInfo.title}/>
                </div>
                <label for="inputEmail3" className="col-sm-2 col-form-label">Price:</label>
                <div className="col-sm-10">
                    <input onChange={changeHandler} type="number" className="form-control" name="price" value={productInfo.price}/>
                </div>
                <label for="inputEmail3" className="col-sm-2 col-form-label">Description:</label>
                <div className="col-sm-10">
                    <input type="name" onChange={changeHandler} className="form-control" name="description" value={productInfo.description}/>
                    <br></br>
                    <p style={{textAlign:"right"}}><button type="submit" className="btn btn-light">Update</button></p>
                </div>
            </div>
            </form>
            <hr></hr>
    </div>
    );
};


export default Edit;