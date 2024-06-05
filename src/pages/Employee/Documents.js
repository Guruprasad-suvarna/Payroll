import React from "react";
import "./Documents.css";

import { RiUpload2Line } from 'react-icons/ri';

const Documents =() =>{

    return(
    <div class="container">
      <h4>Documents</h4>
      <hr className="bg-success border-2 border-top border-success" />
      <div className="document-upload">
        <div>
          <label htmlFor="aadhaar-upload">
            <span>
              aadhaar
              <RiUpload2Line size={30} />
            </span>
          </label>
          <input id="aadhaar-upload" type="file" accept=".pdf,.jpg,.jpeg,.png"/>
        </div> 
<br/>
<br/>
        <div>
          <label htmlFor="aadhaar-upload">
            <span>
              Pan Card
              <RiUpload2Line size={30} />
            </span>
          </label>
          <input id="aadhaar-upload" type="file" accept=".pdf,.jpg,.jpeg,.png"/>
        </div> <br/><br/>

        <div>
          <label htmlFor="aadhaar-upload">
            <span>
              Passport
              <RiUpload2Line size={30} />
            </span>
          </label>
          <input id="aadhaar-upload" type="file" accept=".pdf,.jpg,.jpeg,.png"/>
        </div> 

        </div>
      </div>
    )
}
export default Documents;