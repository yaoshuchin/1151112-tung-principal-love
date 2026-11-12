import React from 'react';
import { Award, Compass, Heart, Sparkles, ChevronRight, UserCheck, CheckCircle2 } from 'lucide-react';
import { personalInfo, keyStats } from '../data/siteData';

export default function Hero({ onOpenFlywheelModal }) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Message & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Tag Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300 shadow-xs">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                教育部杏壇芬芳獎 · 全國大愛菁師獎
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                南投縣立南投國中 學務主任
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-700 tracking-wide">
                「愛，讓孩子比昨天更優秀」
              </h2>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                打造一所不怕失敗、<br className="hidden sm:inline" />
                讓孩子擁有<span className="gradient-text">「韌性與夢想」</span>的學校！
              </h1>
            </div>

            {/* Educator Philosophy Quote */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-xs text-slate-700 leading-relaxed text-sm sm:text-base">
              <p className="font-medium text-slate-800 mb-2">
                「我是大愛熱血教師 <strong className="text-blue-700 font-bold">董勳遠</strong>，在地南投竹山人。幼小父母常教誨：『做一個對社會有用的人，積陰德給後代！』」
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                在校務治理與教育現場，我始終思考領導決策是否有利孩子成長。辦一所不怕失敗的夢想學校，如同唐三藏西天取經之菩薩道修行，雖歷經千辛萬苦，確能使下一代勝過這一代。期許以卓越治理繳出豐碩成績單，為教育留下利他深遠的足跡！
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#flywheel"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>教育四大飛輪藍圖</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#stories"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:shadow transition-all"
              >
                <Heart className="w-4 h-4 text-red-500" />
                <span>讀逆風少年故事</span>
              </a>

              <a
                href="#recommendations"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
              >
                <UserCheck className="w-4 h-4 text-blue-600" />
                <span>各界親筆推薦函</span>
              </a>
            </div>

            {/* Quick Commitments Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>愛 × 賞識 × 領導力</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Smile Effect 微笑品格</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Every Child Matters</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Portrait & Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Card glow & border */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-blue-600/20 via-amber-400/20 to-indigo-600/20 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg border border-slate-100">
                  
                  {/* Portrait Image */}
                  <img
                    src="./images/portrait/avatar.jpg"
                    alt="董勳遠主任"
                    className="w-full h-80 sm:h-96 object-cover object-top"
                  />

                  {/* Gradient Overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent p-5 text-white">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
                          南投縣立南投國中
                        </div>
                        <h3 className="text-2xl font-bold font-serif">董勳遠 主任</h3>
                        <p className="text-xs text-slate-300 font-normal mt-0.5">
                          彰師大教育研究所碩士 · 國家級教練
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-bold shadow">
                          116 校長甄試
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Desk Motto */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-lg border border-slate-200 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0 font-bold">
                  ❤
                </div>
                <div>
                  <div className="text-[11px] font-bold text-red-600 uppercase tracking-wider">座右銘</div>
                  <div className="text-xs font-bold text-slate-800">
                    今天要勝過昨天；明天勝過今天！
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Golden Coach */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-amber-200 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-bold text-amber-900">
                  世界級金牌教練
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Key Statistics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all text-center group"
              >
                <div className="text-2xl sm:text-3xl font-black text-blue-700 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

