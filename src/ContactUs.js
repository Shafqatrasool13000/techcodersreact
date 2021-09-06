import React from 'react'

const Contact = () => {
    return (
        <>
          <div className="container my-4">
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1">How many</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Tech Stack</option>
            <option>Web development</option>
            <option>App development</option>
            
          </select>
        </div>
        <div className="custom-control custom-checkbox my-1 mr-sm-2">
         
          <input
            type="checkbox"
            className="custom-control-input m-2"
            id="1customControlInline"
          />
          <label className="custom-control-label" for="1customControlInline"
            >Are you coder</label
          >
        </div>
        
        <div className="custom-control custom-checkbox my-1 mr-sm-2">
          
          <input
            type="checkbox"
            className="custom-control-input m-2"
            id="2customControlInline"
          />
          <label className="custom-control-label" for="2customControlInline"
            >Are you professor</label
          >
        </div>
        <div className="custom-control custom-checkbox my-1 mr-sm-2">
          
          <input
            type="checkbox"
            className="custom-control-input m-2"
            id="3customControlInline"
          />
          <label className="custom-control-label" for="3customControlInline"
            >Are you memberim</label
          >
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1"
            >Elaborate your problem</label
          >
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="btn btn-primary mt-4">Submit</div>
      </form>
    </div>  
        </>
    )
}

export default Contact
