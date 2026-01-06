// components/CodeBlock.tsx
"use client";
import React from "react";
import { Roboto_Mono } from "next/font/google";
import { highlightShicaCode } from "./ShicaHighlight";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface CodeBlockProps {
  code: string;
  output?: string;
  filename?: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  output,
  filename,
  language,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="my-6 rounded-md overflow-hidden border border-gray-200 bg-gray-50">
      {/* Header */}
      {(filename || language) && (
        <div className="flex justify-between items-center px-4 py-2 text-sm bg-gray-600 text-gray-100">
          <div className="flex gap-3">
            {filename && <span>{filename}</span>}
            {language && <span className="opacity-80">{language}</span>}
          </div>

          <button
            onClick={handleCopy}
            className="text-xs px-2 py-1 rounded bg-gray-500 hover:bg-gray-400 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}

      {/* Code */}
      <pre
        className={`${robotoMono.className} p-4 text-sm leading-6 overflow-x-auto whitespace-pre`}
        style={{ color: "var(--color-text-primary)" }}
        translate="no"
        dangerouslySetInnerHTML={{
          __html: highlightShicaCode(code),
        }}
      />

      {/* Output */}
      {output && (
        <div className="px-4 py-2 bg-gray-200 text-gray-500 text-sm border-t border-gray-200">
          <strong className="block mb-1">Output:</strong>
          <pre className="whitespace-pre-wrap" translate="no">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
