import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Type, Palette, Sparkles, Moon, Sun, Droplets, Lock } from "lucide-react";

export default function CustomizationBar({ onLock }) {
  const {
    fontSize,
    setFontSize,
    bgScheme,
    setBgScheme,
    styleTheme,
    setStyleTheme,
  } = useTheme();

  return (
    <div className="w-full bg-slate-900 text-slate-200 border-b border-slate-800 text-xs py-2 px-4 select-none transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Website Title & Slogan */}
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="font-bold text-white tracking-wide">
            愛，讓孩子比昨天更優秀
          </span>
          <span className="hidden sm:inline text-slate-400">｜</span>
          <span className="hidden sm:inline text-slate-300">
            董勳遠主任 116年國中校長甄選官網
          </span>
        </div>

        {/* Right: Customization Controls (Font, Scheme, Style, Lock) */}
        <div className="flex flex-wrap items-center gap-3">
          {/* 1. 字體大小 (大 / 中 / 小) */}
          <div className="flex items-center space-x-1 bg-slate-800/90 rounded-lg p-0.5 border border-slate-700">
            <span className="text-[11px] text-slate-400 px-1.5 flex items-center space-x-0.5">
              <Type className="w-3 h-3 text-amber-400" />
              <span>字體</span>
            </span>
            <button
              onClick={() => setFontSize("sm")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                fontSize === "sm"
                  ? "bg-amber-500 text-slate-950 shadow"
                  : "text-slate-300 hover:text-white"
              }`}
              title="小字體 (緊湊)"
            >
              小
            </button>
            <button
              onClick={() => setFontSize("md")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                fontSize === "md"
                  ? "bg-amber-500 text-slate-950 shadow"
                  : "text-slate-300 hover:text-white"
              }`}
              title="中字體 (標準)"
            >
              中
            </button>
            <button
              onClick={() => setFontSize("lg")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                fontSize === "lg"
                  ? "bg-amber-500 text-slate-950 shadow"
                  : "text-slate-300 hover:text-white"
              }`}
              title="大字體 (舒適易讀)"
            >
              大
            </button>
          </div>

          {/* 2. 背景色系 (淺色 / 深色 / 淡藍) */}
          <div className="flex items-center space-x-1 bg-slate-800/90 rounded-lg p-0.5 border border-slate-700">
            <span className="text-[11px] text-slate-400 px-1.5 flex items-center space-x-0.5">
              <Palette className="w-3 h-3 text-cyan-400" />
              <span>背景</span>
            </span>
            <button
              onClick={() => setBgScheme("light")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition flex items-center space-x-1 ${
                bgScheme === "light"
                  ? "bg-white text-slate-900 shadow"
                  : "text-slate-300 hover:text-white"
              }`}
              title="淺色清亮背景"
            >
              <Sun className="w-2.5 h-2.5 text-amber-500" />
              <span>淺色</span>
            </button>
            <button
              onClick={() => setBgScheme("dark")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition flex items-center space-x-1 ${
                bgScheme === "dark"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-300 hover:text-white"
              }`}
              title="深色沉著模式"
            >
              <Moon className="w-2.5 h-2.5 text-indigo-300" />
              <span>深色</span>
            </button>
            <button
              onClick={() => setBgScheme("paleBlue")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition flex items-center space-x-1 ${
                bgScheme === "paleBlue"
                  ? "bg-sky-500 text-white shadow"
                  : "text-slate-300 hover:text-white"
              }`}
              title="淡雅天青水藍"
            >
              <Droplets className="w-2.5 h-2.5 text-sky-200" />
              <span>淡藍</span>
            </button>
          </div>

          {/* 3. 風格布景主題 (日式 / 中式 / 西式) */}
          <div className="flex items-center space-x-1 bg-slate-800/90 rounded-lg p-0.5 border border-slate-700">
            <span className="text-[11px] text-slate-400 px-1.5 flex items-center space-x-0.5">
              <Sparkles className="w-3 h-3 text-pink-400" />
              <span>風格</span>
            </span>
            <button
              onClick={() => setStyleTheme("japanese")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                styleTheme === "japanese"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-slate-300 hover:text-white"
              }`}
              title="日式和風侘寂"
            >
              日式
            </button>
            <button
              onClick={() => setStyleTheme("chinese")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                styleTheme === "chinese"
                  ? "bg-red-700 text-white shadow"
                  : "text-slate-300 hover:text-white"
              }`}
              title="中式翰墨書院"
            >
              中式
            </button>
            <button
              onClick={() => setStyleTheme("western")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                styleTheme === "western"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-300 hover:text-white"
              }`}
              title="西式歐美典雅"
            >
              西式
            </button>
          </div>

          {/* 4. 重新鎖定按鈕 (不提 049) */}
          {onLock && (
            <button
              onClick={onLock}
              className="px-2 py-1 rounded text-[11px] font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition flex items-center space-x-1"
              title="重新鎖定通道"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>鎖定</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
