import React, { useEffect, useState } from "react";
import { Link ,useNavigate , useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import Spinner from "./components/Spinner";

function CourseDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/courses?id=${searchParams.get("id")}`)
      .then((response) => {
        if(response.data.length === 0){
          navigate("/courses")
        }
        setData(response.data);
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <>
      <Navbar />
      {isLoading ? 
      <Spinner/> :
      <div className="container">
        <h1 className="text-center">{data[0].coursename}</h1>        

        <div className="row mt-3 align-items-center">
          <div className="col-lg-4">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/developer-working-using-java-programming-8602642-6814343.png"
              alt="Course Thumbnail"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-8">
            <dl className="row">
              <dt className="col-sm-3">Instructor</dt>
              <dd className="col-sm-9">{data[0].instructor}</dd>
              <dt className="col-sm-3">Description</dt>
              <dd className="col-sm-9">{data[0].description}</dd>
              <dt className="col-sm-3">Enrollment Status</dt>
              <dd className="col-sm-9">{data[0].enrollmentStatus}</dd>
              <dt className="col-sm-3">Duration</dt>
              <dd className="col-sm-9">{data[0].duration}</dd>
              <dt className="col-sm-3">Schedule</dt>
              <dd className="col-sm-9">{data[0].schedule}</dd>
              <dt className="col-sm-3">Location</dt>
              <dd className="col-sm-9">{data[0].location}</dd>
              <dt className="col-sm-3">Prerequisites</dt>
              <dd className="col-sm-9">
                <ol>
                  {data[0].prerequisites.map((val, key) => {
                    return <li key={key}>{val}</li>;
                  })}
                </ol>
              </dd>
            </dl>
          </div>
        </div>
        <div className="mt-4">
          <h4>Syllabus</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Topic</th>
                <th>Content</th>
              </tr>
            </thead>
            <tbody>
              {data[0].syllabus.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.week}</td>
                    <td>{val.topic}</td>
                    <td>{val.content}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>}

      

      
    </>
  );
}

export default CourseDetails;
