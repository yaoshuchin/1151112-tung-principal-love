import React from "react";
import { mediaNews } from "../data/siteData";
import { Newspaper, Calendar, ExternalLink, ZoomIn, Eye, Sparkles } from "lucide-react";

export default function MediaAndNews({ onOpenImage }) {
  return (
    <section id="media" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-sm font-semibold mb-4 border border-emerald-200 dark:border-emerald-800">
            <Newspaper className="w-4 h-4 text-emerald-600" />
            <span>媒體報導 · 社會迴響</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif">
            各大媒體專題報導
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            中國時報、中央社、各大教育專刊深入專訪。<br className="hidden sm:inline" />
            記錄董勳遠主任在杏壇默默耕耘、自掏腰包貸款450萬育才與逆風少年的生命改變。
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaNews.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700 overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* News Image Preview */}
                <div
                  className="relative h-56 overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => onOpenImage(item.image, item.title, `${item.source} · ${item.date}`)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-600 text-white shadow">
                    {item.source}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900/80 text-white text-xs font-semibold backdrop-blur flex items-center space-x-1 shadow">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>查看報導剪報</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-xs text-slate-400 mb-2.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-serif leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenImage(item.image, item.title, `${item.source} · ${item.date}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-700/80 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-slate-600 transition flex items-center justify-center space-x-2"
                >
                  <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>檢視完整剪報原件</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
