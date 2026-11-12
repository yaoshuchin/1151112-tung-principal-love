import React from "react";
import { personalInfo } from "../data/siteData";
import { Phone, Mail, MapPin, ArrowUp, Heart, Sparkles, BookOpen } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "首頁簡介", href: "#top" },
    { label: "教育飛輪", href: "#flywheel" },
    { label: "感動故事", href: "#stories" },
    { label: "推薦函原件", href: "#recommendations" },
    { label: "殊榮與歷練", href: "#honors" },
    { label: "媒體報導", href: "#media" },
    { label: "光影藝廊", href: "#gallery" },
    { label: "治校藍圖", href: "#vision" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 relative overflow-hidden border-t border-slate-800">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-amber-500/10 via-red-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Col 1: Bio & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                董
              </span>
              <div>
                <h3 className="text-xl font-bold text-white font-serif tracking-wide">
                  {personalInfo.name} <span className="text-sm font-normal text-slate-400">主任</span>
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              「{personalInfo.motto}」<br />
              {personalInfo.subMotto}
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 italic font-serif">
              "{personalInfo.lifePoem}"
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              快速導覽
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Service */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              聯絡方式與服務單位
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>南投縣立南投國民中學（南投縣南投市祖祠路360號）</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-amber-400 transition">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-amber-400 transition">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © 2026 董勳遠 主任 · 116年國中校長甄選個人品牌網站 · 本站資料與文稿均本於南投縣立南投國中及個人真實教育履歷
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-white transition flex items-center space-x-1.5 shadow"
            title="回到頁首"
          >
            <ArrowUp className="w-4 h-4" />
            <span>TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
