import React from "react";
import { touchingStories } from "../data/siteData";
import { Heart, Quote, Sparkles, ZoomIn, Award, Users, BookOpen } from "lucide-react";

export default function TouchingStories({ onOpenImage }) {
  const icons = [Award, Heart, Users];

  return (
    <section id="stories" className="py-24 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-sm font-semibold mb-4 border border-red-200 dark:border-red-800">
            <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
            <span>教育傳奇 · 感動故事</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif">
            用生命托舉孩子的未來
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-red-600 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            從國中聯考七科 132 分的迷惘少年，蛻變成世界冠軍教練與杏壇芬芳獎得主。<br className="hidden sm:inline" />
            董勳遠主任深知後段班孩子的無助，他用一生誓言成為孩子生命中最堅實的靠山。
          </p>
        </div>

        {/* Stories List */}
        <div className="space-y-16 lg:space-y-24">
          {touchingStories.map((story, index) => {
            const Icon = icons[index % icons.length];
            const isReversed = index % 2 === 1;

            return (
              <div
                key={story.id}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-100 dark:border-slate-700/60 hover:shadow-2xl transition duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                      <button
                        onClick={() => onOpenImage(story.image, story.title, story.caption)}
                        className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white shadow-lg backdrop-blur hover:bg-amber-500 hover:text-white transition flex items-center space-x-1.5 text-xs font-medium"
                      >
                        <ZoomIn className="w-4 h-4" />
                        <span>查看大圖</span>
                      </button>

                      <div className="absolute bottom-4 left-4 right-20 text-white text-xs sm:text-sm font-medium line-clamp-2">
                        {story.caption}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    {/* Tag badge */}
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 text-xs font-bold mb-4 border border-amber-200 dark:border-amber-800">
                      <Icon className="w-3.5 h-3.5 text-amber-600" />
                      <span>{story.tag}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-snug font-serif">
                      {story.title}
                    </h3>

                    <p className="text-base sm:text-lg font-medium text-amber-600 dark:text-amber-400 mb-6 italic border-l-4 border-amber-500 pl-4 py-1">
                      {story.summary}
                    </p>

                    <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {story.content.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Pull Quote */}
                    <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-50/80 to-red-50/60 dark:from-slate-900/80 dark:to-slate-800/80 border-l-4 border-red-500 flex items-start space-x-3 shadow-sm">
                      <Quote className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 italic">
                        {story.highlightQuote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
