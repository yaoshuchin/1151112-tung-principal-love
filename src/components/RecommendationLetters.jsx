import React, { useState } from "react";
import { recommendationLetters } from "../data/siteData";
import { Award, FileText, CheckCircle2, Quote, ZoomIn, UserCheck, ShieldCheck } from "lucide-react";

export default function RecommendationLetters({ onOpenImage }) {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "全部推薦 (6)" },
    { id: "leader", label: "校長與民代" },
    { id: "teacher", label: "教學夥伴" },
    { id: "student", label: "培育學子" },
  ];

  const filteredLetters = recommendationLetters.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "leader") return item.id === "chen" || item.id === "you" || item.id === "wu";
    if (activeTab === "teacher") return item.id === "jian";
    if (activeTab === "student") return item.id === "tseng" || item.id === "yang";
    return true;
  });

  return (
    <section id="recommendations" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>各界賢達 · 一致肯定</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif">
            親筆推薦函原件見證
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            從頂頭校長、立法委員、家長會長，到同甘共苦的導師、逆風重生的少年與世界金牌國手。<br className="hidden sm:inline" />
            每一張蓋印、每一筆字跡，都是董勳遠主任23年無悔奉獻的最真摯背書。
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  activeTab === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Letters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLetters.map((rec) => (
            <div
              key={rec.id}
              className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 mb-2">
                      {rec.relationship}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif">
                      {rec.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {rec.title}
                    </p>
                  </div>
                  <UserCheck className="w-6 h-6 text-blue-500 flex-shrink-0" />
                </div>

                {/* Scanned Original Preview Thumbnail */}
                <div
                  className="relative rounded-xl overflow-hidden mb-5 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer group/img"
                  onClick={() => onOpenImage(rec.image, `${rec.name} 親筆推薦函原件`, rec.quote)}
                >
                  <img
                    src={rec.image}
                    alt={`${rec.name} 推薦函`}
                    className="w-full h-48 object-cover object-top filter group-hover/img:brightness-95 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover/img:bg-slate-900/10 transition flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-white text-xs font-semibold backdrop-blur flex items-center space-x-1 shadow">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>點擊查看親筆原件</span>
                    </span>
                  </div>
                </div>

                {/* Pull Quote */}
                <div className="mb-4 p-3 rounded-xl bg-blue-50/70 dark:bg-slate-900/60 border-l-4 border-blue-500 flex items-start space-x-2">
                  <Quote className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 italic leading-snug">
                    {rec.quote}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {rec.summary}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>收錄於116年甄試備審資料</span>
                </span>
                <button
                  onClick={() => onOpenImage(rec.image, `${rec.name} 親筆推薦函原件`, rec.quote)}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center space-x-1"
                >
                  <span>看原函</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
