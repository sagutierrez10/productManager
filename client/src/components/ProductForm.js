import React, { useState} from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const ProductForm= ()=>{

    const history= useHistory();

let [formInfo, setFormInfo]= useState({
    title: null,
    price: null,
    description: null
})

let [validationErrors, setValidationErrors] = useState({})

const changeHandler = (e)=>{
    console.log("changign something")
    console.log(e.target.name, e.target.value)
    setFormInfo({
        ...formInfo,
        [e.target.name]:e.target.value
    })
}

const submitHandler= (e)=>{
    e.preventDefault()
    console.log("submitted", formInfo);
    axios.post("http://localhost:8000/api/products", formInfo)
        .then(res=>{
            console.log("response after submitting form request",res)
            if(res.data.err){
                setValidationErrors(res.data.err.errors)
            }else{
            history.push("/")
            }
        })
        .catch(err=>console.log(err))
}

return (
    <div>
            <form onSubmit={submitHandler}>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Title:</label>
                <div className="col-sm-10">
                    <input onChange={changeHandler} type="name" className="form-control" name="title"/>
                    <p className="text-danger">{validationErrors.title? validationErrors.title.message: ""}</p>
                </div>
                <label for="inputEmail3" className="col-sm-2 col-form-label">Price:</label>
                <div className="col-sm-10">
                    <input onChange={changeHandler} type="number" className="form-control" name="price"/>
                    <p className="text-danger">{validationErrors.price? validationErrors.price.message: ""}</p>
                </div>
                <label for="inputEmail3" className="col-sm-2 col-form-label">Description:</label>
                <div className="col-sm-10">
                    <input type="name" onChange={changeHandler} className="form-control" name="description"/>
                    <p className="text-danger">{validationErrors.description? validationErrors.description.message: ""}</p>
                    <br></br>
                    <p style={{textAlign:"right"}}><button type="submit" className="btn btn-light">Create</button></p>
                </div>
            </div>
            </form>
            <hr></hr>
    </div>
        );
};


        export default ProductForm;