"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export interface OutputProps {
  width?: string;
  height?: string;
  isRounded?: boolean;
  logs?: Log[];
  onClear?: () => void;
}

export enum LogLevel {
  SHICA = "shica:",
  INFO = "info:",
  LOG = "log:",
  WARN = "warn:",
  ERROR = "error:",
  FATAL = "fatal:",
  DEBUG = "debug:",
  SUCCESS = "success: ",
}

export interface Log {
  level: LogLevel;
  message: string;
  timestamp: number;
}

const Code2Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <polyline points="6 8 2 12 6 16" />
    <polyline points="18 16 22 12 18 8" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const Output = ({
  width = "w-full",
  height = "h-full",
  isRounded = true,
  logs = [],
  onClear = () => {},
}: OutputProps) => {
  const [title] = useState("Output");
  const outputRef = useRef<HTMLDivElement>(null);

  // ユーザーが下端付近にいるなら自動追従する
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  // 下端判定の閾値（px）。少し余裕をもたせると体感が良い
  const BOTTOM_THRESHOLD = 24;

  const scrollToBottom = useCallback(() => {
    const el = outputRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  const handleScroll = useCallback(() => {
    const el = outputRef.current;
    if (!el) return;

    // 「下端までの残り距離」が threshold 以下なら下端付近
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setIsAutoScroll(distanceFromBottom <= BOTTOM_THRESHOLD);
  }, []);

  // logs が増えたら（追従中なら）最下部へ
  useEffect(() => {
    if (!isAutoScroll) return;
    scrollToBottom();
  }, [logs.length, isAutoScroll, scrollToBottom]);

  const getLogStyle = (level: LogLevel) => {
    switch (level) {
      case LogLevel.SHICA:
        return "text-orange-500";
      case LogLevel.SUCCESS:
      case LogLevel.INFO:
        return "text-gray-500";
      case LogLevel.LOG:
        return "text-green-500";
      case LogLevel.WARN:
        return "text-yellow-500";
      case LogLevel.ERROR:
        return "text-red-500";
      case LogLevel.DEBUG:
        return "text-gray-500";
      case LogLevel.FATAL:
        return "text-red-700 font-bold";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div
      className={`font-mono text-sm border flex flex-col ${
        isRounded ? "rounded-lg" : ""
      } ${height}`}
      style={{
        borderColor: "var(--color-code-background700)",
        width,
        overflow: "hidden",
      }}
    >
      {/* 固定ヘッダー */}
      <div
        className={`px-4 py-2 ${
          isRounded ? "rounded-t-lg" : ""
        } flex items-center justify-between shrink-0`}
        style={{
          backgroundColor: "var(--color-background-secondary)",
          color: "var(--color-code-text)",
          borderBottom: "1px solid var(--color-code-background700)",
        }}
      >
        <div className="flex items-center space-x-2">
          <Code2Icon className="w-4 h-4" />
          <span style={{ color: "var(--color-code-text)" }}>{title}</span>
          <span className="text-xs" style={{ color: "var(--color-code-text)" }}>
            ({logs.length} logs)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* 任意：追従解除中に「Follow」ボタンを出すと親切 */}
          {!isAutoScroll && (
            <button
              onClick={() => {
                scrollToBottom();
                setIsAutoScroll(true);
              }}
              className="text-xs px-2 py-1 rounded transition-colors hover:bg-opacity-20 hover:bg-white"
              style={{
                color: "var(--color-code-text)",
                backgroundColor: "var(--color-code-background700)",
              }}
            >
              Follow
            </button>
          )}
          <button
            onClick={onClear}
            className="text-xs px-2 py-1 rounded transition-colors hover:bg-opacity-20 hover:bg-white"
            style={{
              color: "var(--color-code-text)",
              backgroundColor: "var(--color-code-background700)",
            }}
          >
            Clear
          </button>
        </div>
      </div>

      {/* スクロール可能なアウトプットエリア */}
      <div
        ref={outputRef}
        onScroll={handleScroll}
        className="overflow-y-auto min-h-0 output-scroll"
        style={{
          backgroundColor: "var(--color-background-primary)",
          color: "var(--color-code-text)",
          flex: "1 1 0",
        }}
      >
        {logs.length === 0 ? (
          <div
            className="text-center py-8 px-4"
            style={{ color: "var(--color-code-text-secondary)" }}
          >
            No logs to display
          </div>
        ) : (
          <div className="p-4 pb-2">
            {logs.map((log, index) => (
              <div key={index} className={`mb-1 ${getLogStyle(log.level)}`}>
                <span
                  className="text-xs mr-2"
                  style={{ color: "var(--color-code-text-secondary)" }}
                >
                  [{new Date(log.timestamp).toLocaleTimeString()}]
                </span>
                <span className="text-xs mr-2 px-1 rounded">
                  {log.level.toUpperCase()}
                </span>
                <span className="whitespace-pre-wrap">{log.message}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* カスタムスクロールバー（クラスを合わせる） */}
      <style jsx>{`
        .output-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .output-scroll::-webkit-scrollbar-track {
          background: var(--color-background-primary);
        }
        .output-scroll::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
        }
        .output-scroll::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default Output;
