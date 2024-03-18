import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likeCourses, setLikeCourses }) => {
  function clickHandler() {
    if (likeCourses.includes(course.id)) {
      setLikeCourses(prev => prev.filter(cid => cid !== course.id));
      toast.warning("Like removed");
    } else {
      if (likeCourses.length === 0) {
        setLikeCourses([course.id]);
      } else {
        setLikeCourses(prev => [...prev, course.id]);
      }
      toast.success("Liked successful");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-40">
      <div className="relative">
        <img src={course.image.url} alt={course.title} />
        
        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3">
          <button className="absolute mt-2 ml-1.5" onClick={clickHandler}>
            {likeCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
              
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" className="size-4"/>
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">
          {course.description.length > 100 ? (
            course.description.substr(0, 100) + "..."
          ) : (
            course.description
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
