import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CourseListItem from "./components/CourseListItemStudent";
import { Link } from "react-router-dom";
import { fetchStudentDetails } from "./StudentSlice";
import Spinner from "./components/Spinner";
import Pagination from "./components/Pagination";

function App() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const studentId = 103;
  const studentDetails = useSelector((state) => state.student.studentDeatils);
  const studentCourses = useSelector((state) => state.student.studentCourses);
  const isLoading = useSelector((state) => state.student.isLoading);
  const totalCount = useSelector((state) => state.student.totalCount);

  useEffect(() => {
    dispatch(
      fetchStudentDetails({currentPage: currentPage, limit: limit, studentId: studentId})
    );
  }, [dispatch, currentPage]);

  return (
    <>
      <Navbar />
      {isLoading ? 
        <Spinner />
       : 
      <div>
        <div className="container">
          <h3 className="text-center mb-3">Welcome &nbsp; {studentDetails.name}...!</h3>
          
          <div className="container text-bg-info py-1">
          <h4 className="text-center">Your Courses</h4>
            <div className="container">
              {studentCourses.map((element) => {
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
          
        </div>
      </div>}
    </>
  );
  
}

export default App;
