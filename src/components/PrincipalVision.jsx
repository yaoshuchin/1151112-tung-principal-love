import React from "react";
import { personalInfo } from "../data/siteData";
import { Compass, Sparkles, CheckCircle2, FileDown, HeartHandshake, Shield, Target, Lightbulb, Users, BookOpen } from "lucide-react";

export default function PrincipalVision() {
  const pillars = [
    {
      num: "01",
      title: "教練式行政領導 · 成就教師專業",
      desc: "行政是教學最強大的後盾！秉持「以身作則、真誠關懷」，激發教師熱情、保障教師尊嚴，打造溫暖共好的同心圓團隊。",
      icon: Users,
      color: "from-amber-500 to-orange-500",
    },
    {
      num: "02",
      title: "韌性與天賦舞台 · 辦一所不怕失敗的學校",
      desc: "教育不是把孩子排成一條線，而是拉成一條橫線。無論孩子起點如何，給予舞台、陪伴試錯，讓每個孩子比昨天更優秀。",
      icon: Target,
      color: "from-blue-600 to-cyan-500",
    },
    {
      num: "03",
      title: "學校・家庭・社區 · 建構共好生態網絡",
      desc: "深化親師互信合作，主動連結企業善心、校友力量與在地人文特色，為南投的孩子引進全球視野與永續資源。",
      icon: HeartHandshake,
      color: "from-emerald-600 to-teal-500",
    },
  ];

  const commitments = [
    "校長每日清晨 7:00 親自於校門口迎接師生，以笑容點亮校園",
    "落實「拔尖扶弱」，成立學力夜讀與才藝扶助專案",
    "推動友善校園零霸凌，用童軍日行一善深植感恩品格",
    "強化智慧校園與跨域STEAM創客教室，賦能科技素養",
    "拓展跨國姐妹校交流與雙語浸潤，為偏鄉孩子插上世界翅膀",
    "親師共學共善，活化社區圖書館共讀站，讓書香長流",
  ];

  return (
    <section id="vision" className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-sm font-semibold mb-4 border border-amber-200 dark:border-amber-800">
            <Compass className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
            <span>治校藍圖 · 116年校長甄選</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif">
            治校願景與承諾
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-red-600 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-xl font-bold text-amber-700 dark:text-amber-400 font-serif">
            「打造一所不怕失敗！讓孩子擁有韌性與夢想的學校！」
          </p>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            以 23 年基層淬鍊的毅力，為每一位孩子的未來掌舵領航。
          </p>
        </div>

        {/* 3 Pillars of Governance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-700 shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-10 rounded-bl-full pointer-events-none group-hover:opacity-20 transition`} />
                <span className="text-4xl font-black text-slate-200 dark:text-slate-700 font-serif block mb-4">
                  {pillar.num}
                </span>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-md mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Commitments */}
        <div className="bg-slate-900 dark:bg-slate-800/90 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="max-w-2xl mb-8">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-2">
                Action Plan & Core Commitments
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif">
                校長治校六大行動承諾
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                校長不是高高在上的指揮者，而是穿上布鞋、彎腰挽袖的教育第一線僕人。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {commitments.map((text, i) => (
                <div key={i} className="flex items-start space-x-3.5 bg-slate-800/60 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-700/60">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-200 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Educational Motto & Dedication Section */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center lg:text-left">
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3 backdrop-blur">
                <Sparkles className="w-3.5 h-3.5" />
                <span>教育初心 · 終身承諾</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-serif tracking-tight">
                「要留卓越在教育，成就每一位南投孩子！」
              </h3>
              <p className="mt-3 text-sm sm:text-base text-amber-50 leading-relaxed font-serif italic">
                "{personalInfo.lifePoem}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="#top"
                className="px-8 py-4 rounded-2xl bg-white text-amber-900 font-extrabold shadow-xl hover:bg-amber-50 hover:scale-105 active:scale-95 transition flex items-center justify-center space-x-2.5 text-base"
              >
                <span>回到頁首探索</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
