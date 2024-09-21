import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Demo = () => {

  const [data, setdata] = useState({ name: "", address: "", country: "", state: "", qualification: "", relegion: "" });
  const [countries, setcountries] = useState([]);
  //const [ states, setstates] =  useState([]);
  //const [ message, setmessage] = useState(" ");./,

  const handelchange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setdata({ ...data, [name]: value })
  }

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/table', data)
      if (response.status === 201) {
        alert("data sumbit succesfully")
        fetchCountries()
      }
      else {
        alert("data error")
      }

    } catch (error) {
      console.log("error:", error)

    }



  }
  const fetchCountries = async () => {
    try {
      const getcountry = await axios.get('http://localhost:5000/table');
      if (getcountry.status === 201) {
        setcountries(getcountry.data);
        console.log(getcountry.data);
      } else {
        alert(" loading fail")
      }
    } catch (error) {
      console.error(' error logging in:', error);
    }
  }
  //const fetchStates = async () =>{

  //}
  const delemployee = async (id) => {
    try {
      const delemp = await axios.delete(`http://localhost:5000/table/${id}`);
      if (delemp.status === 201) {
        console.log('deleted succsessfully')
        alert('successfully deleted ');
        fetchCountries()

      } else {
        alert('error occured')
      }
    } catch (error) {
      console.log('error occured')

    }
  }
  useEffect(() => {
    fetchCountries();

  }, [])



  return (
    <div className="container mt-5">
      <div className="row">
        {/* Employee Registration Form */}
        <div className='col-lg-4 col-md-4 col-sm-12 px-2'>
          <form className="border p-2" style={{ borderColor: "Red" }}>
            <h4 className="text-center mb-2" style={{ color: "Red" }}>
              Employee Registration
            </h4>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ color: "Red" }}>Name</label>
              <input type="text" className="form-control border border-dark" id="name" name="name" onChange={handelchange} />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label" style={{ color: "Red" }}>Address</label>
              <input type="text" className="form-control border border-dark" id="address" name="address" onChange={handelchange} />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label" style={{ color: "Red" }}>Country</label>
              <input type="text" className="form-control border border-dark" id="country" name="country" onChange={handelchange} />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label" style={{ color: "Red" }}>State</label>
              <input type="text" className="form-control border border-danger" id="state" name="state" onChange={handelchange} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "Red" }}>Qualification</label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input className="form-check-input" type="checkbox" id="bca" value="bca" name="qualification" onChange={handelchange} />
                  <label className="form-check-label" htmlFor="bca" style={{ color: "Red" }}>BCA</label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="checkbox" id="mca" value="mca" name="qualification" onChange={handelchange} />
                  <label className="form-check-label" htmlFor="mca" style={{ color: "Red" }}>MCA</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="btech" value="btech" name="qualification" onChange={handelchange} />
                  <label className="form-check-label" htmlFor="btech" style={{ color: "Red" }}>B.Tech</label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "Red" }}>Religion</label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="relegion" id="hindu" value="hindu" onChange={handelchange} />
                  <label className="form-check-label" htmlFor="hindu" style={{ color: "Red" }}>Hindu</label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="relegion" id="muslim" value="muslim" onChange={handelchange} />
                  <label className="form-check-label" htmlFor="muslim" style={{ color: "Red" }}>Muslim</label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="relegion" id="sikh" value="sikh" onChange={handelchange} />
                  <label className="form-check-label" htmlFor="sikh" style={{ color: "Red" }}>Sikh</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="relegion" id="christian" value="christian" onChange={handelchange} />
                  <label className="form-check-label" htmlFor="christian" style={{ color: "Red" }}>Christian</label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-danger w-100" onClick={submit}>Add Employee</button>
          </form>
        </div>

        {/* Employee List Table */}
        <div className='col-lg-8 col-md-8 col-sm-12 px-2'>
          <table className="table table-bordered border-danger text-danger">
            <thead>
              <tr>
                <th colSpan="7" className="text-center">Employee list</th>
              </tr>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Country</th>
                <th scope="col">State</th>
                <th scope="col">Qualification</th>
                <th scope="col">Religion</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((data, index) => (
                <tr key={data._id}>
                  <td>{data.name}</td>
                  <td>{data.address}</td>
                  <td>{data.country}</td>
                  <td>{data.state}</td>
                  <td>{data.qualification}</td>
                  <td>{data.relegion}</td>
                  <td>
                    <Link to={`/edit/${data._id}`} type="button" className="btn btn-warning">Edit</Link>
                    <button type="button" className="btn btn-primary">View</button>
                    <button type="button" className='btn btn-danger' onClick={() => delemployee(data._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Demo;