import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import CourseListItem from "./components/CourseListItem";
import { fetchCourses } from "./CourseSlice";
import Spinner from "./components/Spinner";
import Pagination from "./components/Pagination";

export default function Courses() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [queryText, setQueryText] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.course.courses);
  const loading = useSelector((state) => state.course.isLoading);
  const totalCount = useSelector((state) => state.course.totalCount);

  useEffect(() => {
    dispatch(
      fetchCourses({ currentPage: currentPage, limit: limit, query: "" })
    );
  }, [dispatch, currentPage]);
  function handleSearch(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(fetchUserData({ currentPage: 1, limit, query, sortBy, orderBy }));
  }
  return (
    <>
      <Navbar />

      <div className="container">
        <h3 className="text-center mb-3">All Courses</h3>

        <div className="container text-bg-info py-1">
          <form
            className="row justify-content-md-center py-2"
            role="search"
            onSubmit={handleSearch}
          >
            <div className="col-2">
              <select className="form-select" name="searchby">
                <option value="coursename" defaultValue>
                  Course
                </option>
                <option value="instructor">Instructor</option>
              </select>
            </div>
            <div className="col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="searchquery"
                  value={queryText}
                  onChange={(e) => setQueryText(e.target.value)}
                />
              </div>
            </div>
            <div className="col-1">
              <button type="submit" className="btn btn-primary">
                Seacrh
              </button>
            </div>
          </form>
          {loading ? (
            <Spinner />
          ) : (
            <div>
              <div className="container">
                {data.map((element) => {
                  return (
                    <CourseListItem
                      key={element.id}
                      id={element.id}
                      coursename={element.coursename}
                      instructor={element.instructor}
                      description={element.description}
                      duration={element.duration}
                      thumnail={element.thumbnail}
                    />
                  );
                })}
              </div>
              <Pagination
                totalCount={totalCount}
                limit={limit}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
  function handleSearch(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(
      fetchCourses({
        currentPage: 1,
        limit: limit,
        query: `${e.target[0].value}_like=${queryText}`,
      })
    );
  }
}
