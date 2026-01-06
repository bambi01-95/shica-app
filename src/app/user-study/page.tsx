"use client";

import { useState } from "react";
import Sidebar from "../../../features/docs/components/Sidebar";
import LessonContent from "../../../features/docs/components/LessonContent";
import NavigationButtons from "../../../features/docs/components/NavigationButtons";
// import { userstudy } from "../../../features/docs/data/userstudy";

export function UserStudyPage() {
  const [currentLesson, setCurrentLesson] = useState(0);

  const handleLessonChange = (index: number) => {
    setCurrentLesson(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const navigate = (direction: number) => {
  //   const newLesson = currentLesson + direction;
  //   if (newLesson >= 0 && newLesson < userstudy.length) {
  //     handleLessonChange(newLesson);
  //   }
  // };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="px-5 mb-20 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr]">
          {/* <Sidebar
            lessons={userstudy}
            currentLesson={currentLesson}
            onLessonSelect={handleLessonChange}
          /> */}
          <p></p>

          <main className="bg-white p-6 lg:p-10">
            <article>
              {/* <LessonContent lesson={userstudy[currentLesson]} />

              <NavigationButtons
                currentLesson={currentLesson}
                totalLessons={userstudy.length}
                onNavigate={navigate}
              /> */}
              <p className="text-center text-gray-500 text-lg">
                User Study page under construction...
              </p>
              <p className="text-center text-gray-500 text-lg">
                Open this page (2026-01-14) again later to see the user study
                content.
              </p>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
export default UserStudyPage;
