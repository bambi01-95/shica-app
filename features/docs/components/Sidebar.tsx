// components/Sidebar.tsx
import { useState } from 'react';

// components/Sidebar.tsx
interface SidebarProps {
  lessons: Array<{ id: number; title: string }>;
  currentLesson: number;
  onLessonSelect: (index: number) => void;
}

function Sidebar({ lessons, currentLesson, onLessonSelect }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLessonSelect = (index: number) => {
    onLessonSelect(index);
    setIsOpen(false); // モバイルでレッスン選択後にメニューを閉じる
  };

  return (
    <>
      {/* モバイル用ハンバーガーメニューボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 left-6 z-50 w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        aria-label="メニュー"
      >
        {isOpen ? <div className="text-2xl font-light">×</div> : <div className="text-2xl">≡</div>}
      </button>

      {/* オーバーレイ (モバイルのみ) */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* サイドバー */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen lg:h-fit lg:top-6
          w-64 lg:w-auto
          bg-white border-r border-gray-200
          z-40 lg:z-0
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="px-6 py-5 h-full overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 mt-12 lg:mt-0">
            Lessons
          </h3>

          <ul className="space-y-1">
            {lessons.map((lesson, index) => {
              const active = currentLesson === index;

              return (
                <li
                  key={lesson.id}
                  onClick={() => handleLessonSelect(index)}
                  className={`
                    cursor-pointer px-3 py-2 text-sm transition-colors rounded-md
                    ${
                      active
                        ? "border-l-4 border-slate-500 bg-slate-50 text-slate-900 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {lesson.title}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
