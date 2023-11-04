import React from "react";
import { Link } from "react-router-dom";

export default function CourseListItem(props) {
  const progress = Math.floor(Math.random() * 50) + 50;
  return (
    
      <div className="card mb-2 px-3">
        <Link to={`/course?id=${props.id}`} style={{ textDecoration: "none",  color: "black"}}>
        <div className="row align-items-center">
          <div className="col-sm-2 text-center ">
            <img
              src={props.thumnail}
              className="img-thumbnail rounded-start"
              alt="course-name"
            />
          </div>
          <div className="col-sm-10">
            <div className="card-body">
              <span className="card-title fw-bold fs-4">{props.coursename}</span>
              <div className="card-text ms-3">
                <dl className="row">
                  <dt className="col-sm-2">Instructor</dt>
                  <dd className="col-sm-10">{props.instructor}</dd>

                  <dt className="col-sm-2">Description</dt>
                  <dd className="col-sm-10">{props.description}</dd>
                  <dt className="col-sm-2">Duration</dt>
                  <dd className="col-sm-10">{props.duration}</dd>
                  <dt className="col-sm-2">Due Date</dt>
                  <dd className="col-sm-10">{`${Math.floor(Math.random() * 30)}/${ Math.floor(Math.random() * 12)+11}`}/2024</dd>
                </dl>
                
              </div>
            </div>
          </div>
        </div>
        </Link>
        <div className="row align-items-center justify-content-between">
                <div className="col-sm-8">
                    <div
                      class="progress"
                      role="progressbar"
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        class="progress-bar"
                        style={{ width: `${progress}%` }}
                      >
                        {progress}%
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Mark as completed
                      </label>
                    </div>
                  </div>
                </div>
      </div>
    
  );
}
