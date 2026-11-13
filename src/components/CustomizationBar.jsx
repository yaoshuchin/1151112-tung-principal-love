import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Type, Palette, Sparkles, Lock } from "lucide-react";

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
    <div className="w-full bg-slate-950 text-slate-200 border-b border-slate-800/80 text-xs py-2 px-3 sm:px-4 select-none transition-colors sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
        {/* Left: Website Title */}
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="font-extrabold text-white tracking-wide text-xs sm:text-sm">
            愛，讓孩子比昨天更優秀
          </span>
          <span className="hidden md:inline text-slate-500">｜</span>
          <span className="hidden md:inline text-slate-300 text-xs">
            董勳遠主任 116年國中校長甄選官網
          </span>
        </div>

        {/* Right: Customization Controls with Distinct Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* 1. 標籤字體選擇: 大、中、小 */}
          <div className="flex items-center bg-slate-900 rounded-xl p-1 border border-slate-700/80 shadow-xs">
            <span className="text-[11px] font-bold text-amber-300 px-2 flex items-center space-x-1 border-r border-slate-700/80 mr-1">
              <Type className="w-3 h-3 text-amber-400" />
              <span>字體</span>
            </span>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setFontSize("lg")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  fontSize === "lg"
                    ? "bg-amber-500 text-slate-950 shadow-md font-black"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                title="大字體 (舒適閱卷推薦)"
              >
                大
              </button>
              <button
                onClick={() => setFontSize("md")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  fontSize === "md"
                    ? "bg-amber-500 text-slate-950 shadow-md font-black"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                title="中字體 (標準)"
              >
                中
              </button>
              <button
                onClick={() => setFontSize("sm")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  fontSize === "sm"
                    ? "bg-amber-500 text-slate-950 shadow-md font-black"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                title="小字體 (緊湊)"
              >
                小
              </button>
            </div>
          </div>

          {/* 2. 標籤背景選擇: 淺、深、藍、綠 */}
          <div className="flex items-center bg-slate-900 rounded-xl p-1 border border-slate-700/80 shadow-xs">
            <span className="text-[11px] font-bold text-cyan-300 px-2 flex items-center space-x-1 border-r border-slate-700/80 mr-1">
              <Palette className="w-3 h-3 text-cyan-400" />
              <span>背景</span>
            </span>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setBgScheme("light")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
                  bgScheme === "light"
                    ? "bg-white text-slate-950 shadow-md font-black"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                title="淺色背景"
              >
                <span className="w-2 h-2 rounded-full bg-slate-200 border border-slate-400"></span>
                <span>淺</span>
              </button>
              <button
                onClick={() => setBgScheme("dark")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
                  bgScheme === "dark"
                    ? "bg-indigo-600 text-white shadow-md font-black"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                title="深色背景"
              >
                <span className="w-2 h-2 rounded-full bg-slate-900 border border-indigo-400"></span>
                <span>深</span>
              </button>
              <button
                onClick={() => setBgScheme("blue")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
                  bgScheme === "blue" || bgScheme === "paleBlue"
                    ? "bg-sky-500 text-white shadow-md font-black"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                title="藍色背景 (溫潤天青水藍)"
              >
                <span className="w-2 h-2 rounded-full bg-sky-300 border border-sky-200"></span>
                <span>藍</span>
              </button>
              <button
                onClick={() => setBgScheme("green")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
                  bgScheme === "green"
                    ? "bg-emerald-600 text-white shadow-md font-black"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                title="綠色背景 (欣欣向榮翠綠清新)"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 border border-emerald-300"></span>
                <span>綠</span>
              </button>
            </div>
          </div>

          {/* 3. 風格布景主題標籤: 日式、中式、西式 */}
          <div className="hidden sm:flex items-center bg-slate-900 rounded-xl p-1 border border-slate-700/80 shadow-xs">
            <span className="text-[11px] font-bold text-pink-300 px-2 flex items-center space-x-1 border-r border-slate-700/80 mr-1">
              <Sparkles className="w-3 h-3 text-pink-400" />
              <span>風格</span>
            </span>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setStyleTheme("japanese")}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition ${
                  styleTheme === "japanese"
                    ? "bg-emerald-700 text-white shadow font-black"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                title="日式和風侘寂"
              >
                日式
              </button>
              <button
                onClick={() => setStyleTheme("chinese")}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition ${
                  styleTheme === "chinese"
                    ? "bg-red-700 text-white shadow font-black"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                title="中式翰墨書院"
              >
                中式
              </button>
              <button
                onClick={() => setStyleTheme("western")}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition ${
                  styleTheme === "western"
                    ? "bg-blue-600 text-white shadow font-black"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                title="西式歐美典雅"
              >
                西式
              </button>
            </div>
          </div>

          {/* 4. 重新鎖定按鈕 */}
          {onLock && (
            <button
              onClick={onLock}
              className="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-700/80 transition flex items-center space-x-1"
              title="重新鎖定通道"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">鎖定</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
