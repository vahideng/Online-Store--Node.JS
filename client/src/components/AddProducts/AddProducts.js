import React from 'react';
import classes from './AddProduct.module.css';

const addProduct = props => {

  
  return(
    <div className={classes.Wrapper}>
      <form action="/admin/add-product" method="POST">
        <div class="form-group">
          <label for="exampleInputEmail1">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Add Products"
            name="product"
          />
          <small id="emailHelp" class="form-text text-muted">
            Its only accesible for admin not Meysam
          </small>
        </div>
  
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
} 


export default addProduct;
