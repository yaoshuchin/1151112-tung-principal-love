import React, { useState } from "react";
import { Lock, Sparkles, ArrowRight, AlertCircle, Shield } from "lucide-react";

export default function EntranceGate({ onAuthenticated }) {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password.trim() === "049") {
      setErrorMsg("");
      sessionStorage.setItem("site_authenticated", "true");
      onAuthenticated();
    } else {
      setErrorMsg("通行密碼不正確，請重新輸入");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md w-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-8 sm:p-10 shadow-2xl text-center">
        {/* Avatar */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <img
            src="./images/portrait/avatar.jpg"
            alt="董勳遠主任"
            className="w-full h-full rounded-full object-cover border-4 border-amber-500 shadow-xl"
          />
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow">
            <Lock className="w-4 h-4" />
          </div>
        </div>

        {/* Identification Badges */}
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>116年國中校長甄選 · 候選人個人品牌官網</span>
        </div>

        {/* Website Title */}
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-serif mb-2">
          愛，讓孩子比昨天更優秀
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 font-medium mb-1">
          董勳遠 主任（南投縣立南投國中）
        </p>

        <p className="text-xs text-amber-300/90 font-serif italic mb-6">
          「打造一所不怕失敗！讓孩子擁有韌性與夢想的學校」
        </p>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-6" />

        {/* Entrance Gate Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>請輸入通行密碼</span>
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg("");
                }}
                placeholder="請輸入密碼以進入"
                autoFocus
                className="w-full py-3.5 px-4 rounded-xl text-center text-lg tracking-widest bg-slate-800/90 border border-slate-600 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-white placeholder-slate-500 transition"
              />
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/70 border border-red-800/80 text-red-300 text-xs font-medium flex items-center justify-center space-x-1.5 animate-shake">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center space-x-2 text-sm group"
          >
            <span>確認驗證 · 進入網站</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>

        <p className="text-[11px] text-slate-400 mt-6">
          南投縣立南投國中 · 董勳遠主任個人官方網站
        </p>
      </div>
    </div>
  );
}
