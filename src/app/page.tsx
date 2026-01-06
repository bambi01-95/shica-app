"use client";

import Header from "../../features/docs/components/Header";
import Footer from "../../features/docs/components/Footer";
import LessonContent from "../../features/docs/components/LessonContent";
import { home } from "../../features/docs/data/home";

export function ShicaHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        title="Shica Programming Language"
        subtitle="Introduction to W-Shica programming language."
      />

      <div className="max-w-6xl mx-auto">
        <div className="px-5 mb-20 lg:px-0">
          <div className="grid grid-cols-1">
            <main className="bg-white p-6 lg:p-10">
              <article>
                <LessonContent lesson={home[0]} />
              </article>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ShicaHomePage;
