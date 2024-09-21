import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [data, setdata] = useState({
    name: "",
    address: "",
    country: "",
    state: "",
    qualification: "",
    relegion: "",
  });
  const { id } = useParams();

  const handelchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };


  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/table", data);
      if (response.status === 201) {
        alert("data posted successfully");
      
      } else {
        alert("error occured");
      }
    } catch (error) {
      console.error("Error posting employee:", error);
    }
  };


  return (
    <div>
      <h3>Id is {id}</h3>
      <div className="col-lg-4 col-md-4 col-sm-12 px-2">
        <form className="border p-2" style={{ borderColor: "Red" }}>
          <h4 className="text-center mb-2" style={{ color: "Red" }}>
            Employee Registration
          </h4>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
              style={{ color: "Red" }}
            >
              Name
            </label>
            <input
              type="text"
              className="form-control border border-dark"
              id="name"
              name="name"
              onChange={handelchange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="address"
              className="form-label"
              style={{ color: "Red" }}
            >
              Address
            </label>
            <input
              type="text"
              className="form-control border border-dark"
              id="address"
              name="address"
              onChange={handelchange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="country"
              className="form-label"
              style={{ color: "Red" }}
            >
              Country
            </label>
            <input
              type="text"
              className="form-control border border-dark"
              id="country"
              name="country"
              onChange={handelchange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="state"
              className="form-label"
              style={{ color: "Red" }}
            >
              State
            </label>
            <input
              type="text"
              className="form-control border border-danger"
              id="state"
              name="state"
              onChange={handelchange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "Red" }}>
              Qualification
            </label>
            <div className="d-flex">
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="radio"
                  id="bca"
                  name="qualification"
                  value="BCA" // Add this value attribute
                  onChange={handelchange}
                />
                <label
                  className="form-check-label"
                  htmlFor="bca"
                  style={{ color: "Red" }}
                >
                  BCA
                </label>
              </div>
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="radio"
                  id="mca"
                  name="qualification"
                  value="MCA" // Add this value attribute
                  onChange={handelchange}
                />
                <label
                  className="form-check-label"
                  htmlFor="mca"
                  style={{ color: "Red" }}
                >
                  MCA
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="btech"
                  name="qualification"
                  value="B.Tech" // Add this value attribute
                  onChange={handelchange}
                />
                <label
                  className="form-check-label"
                  htmlFor="btech"
                  style={{ color: "Red" }}
                >
                  B.Tech
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "Red" }}>
              Religion
            </label>
            <div className="d-flex">
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="relegion"
                  id="hindu"
                  value="Hindu" // Add this value attribute
                  onChange={handelchange}
                />
                <label
                  className="form-check-label"
                  htmlFor="hindu"
                  style={{ color: "Red" }}
                >
                  Hindu
                </label>
              </div>
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="relegion"
                  id="muslim"
                  value="Muslim" // Add this value attribute
                  onChange={handelchange}
                />
                <label
                  className="form-check-label"
                  htmlFor="muslim"
                  style={{ color: "Red" }}
                >
                  Muslim
                </label>
              </div>
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="relegion"
                  id="sikh"
                  value="Sikh" // Add this value attribute
                  onChange={handelchange}
                />
                <label
                  className="form-check-label"
                  htmlFor="sikh"
                  style={{ color: "Red" }}
                >
                  Sikh
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="relegion"
                  id="christian"
                  value="Christian" // Add this value attribute
                  onChange={handelchange}
                />
                <label
                  className="form-check-label"
                  htmlFor="christian"
                  style={{ color: "Red" }}
                >
                  Christian
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-outline-danger w-100"
            onClick={submit}
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
