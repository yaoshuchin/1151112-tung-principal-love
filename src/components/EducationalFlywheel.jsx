import React, { useState } from 'react';
import { HeartHandshake, Globe, Cpu, BookOpen, Compass, ChevronRight, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { flywheels } from '../data/siteData';

const iconMap = {
  HeartHandshake: HeartHandshake,
  Globe: Globe,
  Cpu: Cpu,
  BookOpen: BookOpen,
};

export default function EducationalFlywheel({ onOpenImageModal }) {
  const [activeTab, setActiveTab] = useState('character');

  const activeFlywheel = flywheels.find(f => f.id === activeTab) || flywheels[0];
  const ActiveIcon = iconMap[activeFlywheel.icon] || Compass;

  return (
    <section id="flywheel" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            教育治理願景 · 飛輪藍圖
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            以「愛與賞識」為軸，推動<span className="gradient-text">教育四大飛輪</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            透過品格賦能、國際翅膀、科技斜槓、閱讀立志，驅動學校持續進步，帶領每一位孩子築夢飛翔、自我實現！
          </p>
        </div>

        {/* Flywheel Poster Quick Peek Banner */}
        <div className="mb-12 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-500/10 blur-2xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 uppercase tracking-wider">
                核心理念全覽
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif">
                個人簡介 ～ 我有一個教育夢想（Takes Children to Build Dreams and Fly）
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl">
                宏觀視野 × 創新治理 ｜ 微觀執行 × 數據決策 ｜ 卓越學孝 × 教練領導 ➔ 成就孩子（Smile Effect & Filial Piety）
              </p>
            </div>
            <button
              onClick={() => onOpenImageModal('/images/flywheel/flywheel_poster.jpg', '董勳遠主任 - 我有一個教育夢想 (教育飛輪完整藍圖)')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-white text-slate-900 hover:bg-amber-400 hover:text-slate-950 shadow-md transition-all shrink-0"
            >
              <Maximize2 className="w-4 h-4 text-blue-600" />
              <span>閱覽完整高清海報</span>
            </button>
          </div>
        </div>

        {/* Flywheels Interactive Grid / Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {flywheels.map((fw) => {
            const Icon = iconMap[fw.icon] || Compass;
            const isSelected = activeTab === fw.id;
            return (
              <button
                key={fw.id}
                onClick={() => setActiveTab(fw.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-blue-50/80 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-blue-600 text-white shadow' : 'bg-white text-slate-600 border border-slate-200'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-blue-200/60 text-blue-900' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {fw.eng}
                  </span>
                </div>
                <div className={`font-bold text-base sm:text-lg ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                  {fw.name}
                </div>
                <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  {fw.summary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Flywheel Detailed Showcase Card */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Content & Bullet Points */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${activeFlywheel.badgeColor}`}>
                    {activeFlywheel.eng}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    {activeFlywheel.name}篇
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
                {activeFlywheel.summary}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold tracking-wider uppercase text-slate-500">
                  核心推動成果與實踐作為：
                </h4>
                <div className="space-y-2.5">
                  {activeFlywheel.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#stories"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>延伸閱讀真實現場故事</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Photographic Proof */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-900">
                <img
                  src={activeFlywheel.image}
                  alt={activeFlywheel.name}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                />
                <button
                  onClick={() => onOpenImageModal(activeFlywheel.image, `${activeFlywheel.name} - ${activeFlywheel.imageCaption}`)}
                  className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 flex items-center justify-center transition-colors"
                >
                  <span className="opacity-0 group-hover:opacity-100 px-3.5 py-1.5 rounded-lg bg-white/90 text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" /> 放大檢視
                  </span>
                </button>
                <div className="p-3 bg-white border-t border-slate-100 text-xs text-slate-600 text-center font-medium">
                  {activeFlywheel.imageCaption}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Coach Leadership Cycle Note */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/80 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs font-bold">
              ★
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-950">
                教練領導飛輪：願景描繪 ➔ 社群增能 ➔ 真誠關懷 ➔ 團隊協作
              </h4>
              <p className="text-xs text-amber-800 mt-0.5">
                領導者最大的成就，是把所有人的熱情都點燃，帶領親師生實現共同的願景與理想。
              </p>
            </div>
          </div>
          <a
            href="#timeline"
            className="text-xs font-bold text-amber-900 hover:text-amber-950 bg-amber-200/80 hover:bg-amber-300 px-3.5 py-1.5 rounded-lg transition-colors shrink-0"
          >
            檢視行政與教練歷練 ➔
          </a>
        </div>

      </div>
    </section>
  );
}
