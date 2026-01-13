// components/LessonContent.tsx
import { Lesson, ContentSection } from "../types/lesson";
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";
import TryIt from "./TryIt";
import Figure from "./Figure";

interface LessonContentProps {
  lesson: Lesson;
}

function LessonContent({ lesson }: LessonContentProps) {
  return (
    <article className="prose prose-slate max-w-none">
      {/* Lesson Title */}
      <h1 className="text-3xl font-semibold text-slate-900 mb-8">
        {lesson.title}
      </h1>

      {lesson.content.map((section: ContentSection, index: number) => (
        <section key={index} className="mb-10">
          {section.type === "heading" && (
            <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">
              {section.text}
            </h2>
          )}

          {section.type === "paragraph" && section.text != "" && (
            <p
              className="text-lg text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.text || "" }}
            />
          )}

          {section.type === "list" && (
            <ul className="list-disc ml-6 space-y-1 text-slate-700">
              {section.items?.map((item: string, i: number) => (
                <li className="text-lg" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {section.type === "code" && (
            <div className="my-6">
              <CodeBlock
                code={section.code || ""}
                output={section.output}
                filename={section.filename || ""}
              />
            </div>
          )}

          {section.type === "info" && (
            <div className="my-6">
              <InfoBox text={section.text || ""} />
            </div>
          )}

          {section.type === "figure" && section.src && (
            <Figure src={section.src} altText={section.altText || ""} />
          )}

          {section.type === "tryit" && (
            <div className="my-10">
              <TryIt
                title={section.text || ""}
                description={section.description}
                code={section.code}
              />
            </div>
          )}
          {section.type === "hint" && (
            <details className="my-6 rounded-lg border border-slate-100 bg-slate-100 px-4 py-3">
              <summary className="cursor-pointer select-none text-slate-800 font-medium">
                {section.title || "Hint"}
              </summary>

              {/* 開いた中身 */}
              <div className="mt-3 text-slate-700">
                {section.text && section.text !== "" && (
                  <p
                    className="text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
                )}

                {section.items && section.items.length > 0 && (
                  <ul className="list-disc ml-6 space-y-1">
                    {section.items.map((item, i) => (
                      <li className="text-lg" key={i}>
                        <p
                            className="text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                      </li>
                    ))}
                  </ul>
                )}

                {section.code && (
                  <div className="mt-4">
                    <CodeBlock
                      code={section.code}
                      output={section.output}
                      filename={"hint_example.shica"}
                    />
                  </div>
                )}
              </div>
            </details>
          )}
        </section>
      ))}
    </article>
  );
}

export default LessonContent;
