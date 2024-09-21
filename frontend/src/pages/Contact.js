import React from "react";

const Contact = () => {
  return (
//     <div>
//       <form>
//         <div class="mb-3">
//           <label for="exampleInputEmail1" class="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//           <div id="emailHelp" class="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div class="mb-3">
//           <label for="exampleInputPassword1" class="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>
//         <div class="mb-3 form-check">
//           <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//           <label class="form-check-label" for="exampleCheck1">
//             Check me out
//           </label>
//         </div>
//         <button type="submit" class="btn btn-primary">
//           Submit
//         </button>
//       </form>

//       <div className="card" style={{ width: "18rem" }}>
//         <img src="..." className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>

//       <table class="table">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">First</th>
//             <th scope="col">Last</th>
//             <th scope="col">Handle</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td colSpan="2">Larry the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </table>
//       <div class="text-center">
//         <img src="C:\Users\craj4\OneDrive\Desktop\Demo\frontend\src\pages\IMG_20211022_134423_499.webp" class="rounded" alt="..." />
//       </div>
//     </div>

<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Uttar Pradesh</option>
      <option>Chandigarh</option>
      <option>Bihar</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required/>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
   );
};

export default Contact;
