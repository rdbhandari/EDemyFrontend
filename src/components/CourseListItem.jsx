import React from "react";
import { Link } from "react-router-dom";

export default function CourseListItem(props) {
  return (
    <Link to={`/course?id=${props.id}`} style={{ textDecoration: 'none' }}>
      <div className="card mb-2 px-3">
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
            <h5 className="card-title">{props.coursename}</h5>
            <div className="card-text ms-3">
              <dl className="row">
                <dt className="col-sm-2">Instructor</dt>
                <dd className="col-sm-10">{props.instructor}</dd>

                <dt className="col-sm-2">Description</dt>
                <dd className="col-sm-10">{props.description}
                </dd>
                <dt className="col-sm-2">Duration</dt>
                <dd className="col-sm-10">{props.duration}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
