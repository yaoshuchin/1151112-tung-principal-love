import React, { useEffect } from "react";
import { X, ZoomIn, Download, ExternalLink } from "lucide-react";

export default function ImageLightboxModal({ isOpen, onClose, image, title, caption }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base md:text-lg truncate max-w-md md:max-w-xl">
              {title || "原圖檢視"}
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
              title="在新分頁開啟"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
              aria-label="關閉"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Preview Container */}
        <div className="flex-1 overflow-auto bg-slate-950/10 dark:bg-black flex items-center justify-center p-4 md:p-6 min-h-[360px] max-h-[70vh]">
          <img
            src={image}
            alt={title || "預覽圖片"}
            className="max-h-full max-w-full object-contain rounded-lg shadow-lg border border-slate-200/20"
          />
        </div>

        {/* Footer / Caption */}
        {caption && (
          <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-300">
            <p className="flex items-start space-x-2">
              <span className="text-amber-600 dark:text-amber-400 font-semibold flex-shrink-0">說明：</span>
              <span>{caption}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
