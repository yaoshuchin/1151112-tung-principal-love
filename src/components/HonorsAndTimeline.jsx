import React, { useState } from "react";
import { honorsList, careerTimeline, licenses } from "../data/siteData";
import { Award, Calendar, CheckCircle2, ChevronRight, Medal, ShieldCheck, Trophy, ZoomIn, Star, Sparkles } from "lucide-react";

export default function HonorsAndTimeline({ onOpenImage }) {
  const [activeTab, setActiveTab] = useState("honors");

  const awardPhotos = [
    {
      title: "馬英九前總統親頒 全國大愛菁師獎",
      image: "./images/awards/award_president_ma.jpg",
      badge: "民間師鐸獎最高榮譽",
      caption: "112年第十二屆教育大愛菁師獎，前總統馬英九先生親切頒獎致敬"
    },
    {
      title: "南投縣長許淑華親頒 杏壇芬芳獎",
      image: "./images/awards/award_magistrate_hsu.jpg",
      badge: "南投教育至高肯定",
      caption: "感謝南投縣長許淑華對基層教育與弱勢逆風少年輔導的大力肯定"
    },
    {
      title: "前教育部長吳清基勉勵擴大服務",
      image: "./images/awards/award_minister_wu.jpg",
      badge: "中央教育部期勉",
      caption: "大愛菁師獎會場，前教育部長吳清基親切期勉董主任更上一層樓發揮更大影響力"
    },
    {
      title: "彰化師大52週年 傑出校友",
      image: "./images/awards/award_ncue_52.jpg",
      badge: "母校最高榮耀",
      caption: "國立彰化師範大學校長陳明飛頒贈傑出校友之杏壇芬芳獎"
    }
  ];

  return (
    <section id="honors" className="py-24 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-sm font-semibold mb-4 border border-amber-200 dark:border-amber-800">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>春風化雨 · 實至名歸</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif">
            卓越榮譽與行政歷練
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-red-600 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            23 年基層扎根，由導師、組長、教務主任、補校主任到學務主任，三處室完整行政主管歷練。<br className="hidden sm:inline" />
            榮獲教育部杏壇芬芳獎、大愛菁師獎，以「今天勝過昨天」的毅力成就每一個孩子。
          </p>

          {/* Nav Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("honors")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition flex items-center space-x-2 ${
                activeTab === "honors"
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>殊榮榜與受獎紀錄</span>
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition flex items-center space-x-2 ${
                activeTab === "timeline"
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>23年行政歷練時間軸</span>
            </button>
            <button
              onClick={() => setActiveTab("licenses")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition flex items-center space-x-2 ${
                activeTab === "licenses"
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>專業證照與資格一覽</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Honors & Awards */}
        {activeTab === "honors" && (
          <div className="space-y-12 animate-fade-in">
            {/* Award Ceremony Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {awardPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 group hover:shadow-xl transition"
                >
                  <div
                    className="relative h-52 overflow-hidden cursor-pointer"
                    onClick={() => onOpenImage(photo.image, photo.title, photo.caption)}
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500 text-white shadow">
                      {photo.badge}
                    </div>
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-white/90 text-slate-900 text-xs font-bold shadow flex items-center space-x-1">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>點擊檢視原圖</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 line-clamp-1 font-serif">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Honors Badges List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {honorsList.map((honor, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-2xl border transition flex items-start space-x-4 ${
                    honor.highlight
                      ? "bg-gradient-to-r from-amber-50/80 to-white dark:from-slate-800 dark:to-slate-800/60 border-amber-300 dark:border-amber-700/80 shadow-md"
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      honor.highlight
                        ? "bg-amber-500 text-white shadow-md shadow-amber-500/30"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {honor.highlight ? <Trophy className="w-6 h-6" /> : <Medal className="w-6 h-6" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                        {honor.year}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-400">
                        頒獎單位：{honor.org}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {honor.title}
                    </h4>
                    {honor.desc && (
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {honor.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Career Timeline */}
        {activeTab === "timeline" && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-400 dark:border-amber-600 space-y-10 my-4">
              {careerTimeline.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-amber-500 group-hover:scale-125 transition" />

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                        {item.period}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {item.school}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-serif">
                      {item.role}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Licenses */}
        {activeTab === "licenses" && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {licenses.map((lic, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-amber-400 transition"
                >
                  <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 mb-2">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">國家專業檢定合格</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    {lic.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {lic.no}
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-400 flex items-center justify-between">
                    <span>核發機關</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{lic.auth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

