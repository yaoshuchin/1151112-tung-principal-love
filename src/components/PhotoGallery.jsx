import React, { useState } from "react";
import { photoGallery } from "../data/siteData";
import { Image, ZoomIn, Sparkles, Filter } from "lucide-react";

export default function PhotoGallery({ onOpenImage }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "全部影像" },
    { id: "honors", label: "國家榮譽" },
    { id: "sports_intl", label: "國際與體育" },
    { id: "character_reading", label: "品格與閱讀" },
    { id: "tech", label: "科技創新" },
  ];

  const filteredPhotos = photoGallery.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "honors") return item.category === "honors";
    if (activeCategory === "sports_intl")
      return item.category === "sports" || item.category === "international";
    if (activeCategory === "character_reading")
      return item.category === "character" || item.category === "reading";
    if (activeCategory === "tech") return item.category === "tech";
    return true;
  });

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-4 border border-purple-200 dark:border-purple-800">
            <Image className="w-4 h-4 text-purple-600" />
            <span>光影見證 · 紀實影像</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif">
            杏壇足跡寫真藝廊
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            從頒獎台上的至高殊榮，到異國球場上的勝利淚水；從晨間共讀的一盞暖燈，到偏鄉服務的燦爛笑顏。<br className="hidden sm:inline" />
            點擊任一張照片即可放大檢視完整高清原圖。
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  activeCategory === cat.id
                    ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item, index) => (
            <div
              key={index}
              onClick={() => onOpenImage(item.image, item.title, item.desc)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-md hover:shadow-2xl transition duration-500 aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition" />

              <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/60 text-white backdrop-blur opacity-0 group-hover:opacity-100 transition duration-300">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5 text-white transform translate-y-1 group-hover:translate-y-0 transition duration-300">
                <h4 className="font-bold text-base sm:text-lg mb-1 line-clamp-1 font-serif">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
