"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Module?: any;
    __shicaVmLoadPromise?: Promise<any>;
  }
}

const SCRIPT_ID = "shica-vm-script";

function loadShicaOnce() {
  if (typeof window === "undefined") return Promise.reject("no window");

  // すでにロード済み
  if (window.Module && window.Module.ccall) return Promise.resolve(window.Module);

  // ロード中を共有（同時呼び出し対策）
  if (window.__shicaVmLoadPromise) return window.__shicaVmLoadPromise;

  window.__shicaVmLoadPromise = new Promise<any>((resolve, reject) => {
    // scriptを挿入する前に Module 設定を用意（重要）
    window.Module = window.Module || {};
    window.Module.locateFile = (path: string) => `/ide/js/${path}`;
    window.Module.onRuntimeInitialized = () => {
      try {
        const m = window.Module!;
        const ret = m.ccall("memory_init", "number", [], []);
        if (ret !== 0) throw new Error("Failed to initialize memory");

        m.timerPtr  = m.ccall("initWebTimerPtr", "number", [], []);
        m.clickPtr  = m.ccall("initWebClickSTTPtr", "number", [], []);
        m.agentsPtr = m.ccall("initALLAgentDataPtr", "number", ["number"], [12]);

        resolve(m);
      } catch (e) {
        reject(e);
      }
    };

    // scriptタグを一意化（重要）
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      // 既存scriptがあるのに初期化が進まない場合のため
      existing.addEventListener("error", () => reject(new Error("script load error")));
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "/ide/js/shica.js";
    script.async = true;
    script.onerror = () => reject(new Error("script load error"));
    document.body.appendChild(script);
  });

  return window.__shicaVmLoadPromise;
}

export function useVM() {
  const [Module, setModule] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let alive = true;
    loadShicaOnce()
      .then((m) => {
        if (!alive) return;
        setModule(m);
        setIsReady(true);
      })
      .catch((e) => {
        console.error(e);
      });
    return () => {
      alive = false;
    };
  }, []);

  return [Module, isReady] as const;
}
