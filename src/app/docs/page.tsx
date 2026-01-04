"use client";

import { useState } from "react";
import Sidebar from "../../../features/docs/components/Sidebar";
import LessonContent from "../../../features/docs/components/LessonContent";
import NavigationButtons from "../../../features/docs/components/NavigationButtons";
import { lessons } from "../../../features/docs/data/lessons";

export function WShicaDocsPage() {
  const [currentLesson, setCurrentLesson] = useState(0);

  const handleLessonChange = (index: number) => {
    setCurrentLesson(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = (direction: number) => {
    const newLesson = currentLesson + direction;
    if (newLesson >= 0 && newLesson < lessons.length) {
      handleLessonChange(newLesson);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="px-5 mb-20 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr]">
          <Sidebar
            lessons={lessons}
            currentLesson={currentLesson}
            onLessonSelect={handleLessonChange}
          />

          <main className="bg-white p-6 lg:p-10">
            <article>
              <LessonContent lesson={lessons[currentLesson]} />

              <NavigationButtons
                currentLesson={currentLesson}
                totalLessons={lessons.length}
                onNavigate={navigate}
              />
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
export default WShicaDocsPage;