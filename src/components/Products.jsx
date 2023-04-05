import Counter from "./Counter";
import Product from "./Product";

import { v4 as uuid } from "uuid";
import { useState , useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";


function Products() {

const {products , addProduct } = useContext(ProductContext)









  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  let showList = true;


  const titleInput = (e) => {
    if (e.target.value === "") {
      setMessage("this is Required !")
    } else if (e.target.value.trim().length <3 ) {
      setMessage("Please tape more than 3 characters");
    } else {
      setMessage(null);
      setTitle(e.target.value);
    }
  };

  const priceInput = (e) => {
    setPrice(e.target.value);
  };


  //! submit a new product
  const submitForm = (e) => {
    e.preventDefault();

    let myProduct = {
      id: uuid(),
      label: title,
      price,
    };

    addProduct(myProduct)

    setTitle("");
    setPrice(0);
  };

 

  return (
    <div>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime
        similique eaque nihil velit,
      </p>

      <form onSubmit={submitForm}>
        <div className="form-group my-2">
          <label htmlFor="" className="form-label"></label>
          <input
            defaultValue={title}
            onChange={titleInput}
            type="text"
            className="form-control"
          />

          {message && <div className="alert alert-danger">{message}</div>}
        </div>

        <div className="form-group my-2">
          <label htmlFor="" className="form-label"></label>
          <input
            defaultValue={price}
            onChange={priceInput}
            type="number"
            className="form-control"
          />
        </div>

        <button className="btn btn-success my-2 mb-2">Save</button>
      </form>

      <Counter />

      {showList && (
        <div>
          {products.map((product, i) => (
            <div key={i}>
              <Product id={product.id}>
                <div className="card-body">
                  <p>Lorem ipsum dolor sit.</p>
                  <h4 className="card-title">{product.label}</h4>
                  <p className="card-text">
                    <button className="btn btn-danger">{product.price}</button>
                  </p>
                </div>
              </Product>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
