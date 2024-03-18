import React from "react";
import Card from "./Card";
import { useState } from "react"; 

const Cards = ({ courses, category }) => { // Destructure category from props
  const [likeCourses, setLikeCourses] = useState([]);
  
  let allCourses = [];
  
  const getCourses = () => {
    if (category === "All") {
      if (!courses) {
        return []; 
      }

      Object.values(courses).forEach((coursesCategory) => {
        coursesCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-cnter gap-4 mb-4">
      {getCourses().map((course) => (
        <Card 
          key={course.id} 
          course={course}  
          likeCourses={likeCourses} 
          setLikeCourses={setLikeCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
