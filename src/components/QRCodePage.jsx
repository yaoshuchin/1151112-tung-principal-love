import React, { useState } from "react";
import { qrLinks, personalInfo } from "../data/siteData";
import {
  QrCode,
  Copy,
  Check,
  ZoomIn,
  Download,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  X,
  Share2,
  Maximize2
} from "lucide-react";

export default function QRCodePage({ onBackToHome }) {
  const [copiedType, setCopiedType] = useState(null);
  const [zoomModal, setZoomModal] = useState({
    isOpen: false,
    image: null,
    title: "",
    url: "",
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const openZoom = (image, title, url) => {
    setZoomModal({
      isOpen: true,
      image,
      title,
      url,
    });
  };

  const closeZoom = () => {
    setZoomModal({
      isOpen: false,
      image: null,
      title: "",
      url: "",
    });
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
      {/* Top Breadcrumb & Back to Home */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center space-x-2 text-sm font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回官網首頁</span>
        </button>

        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
          南投縣116年國中校長甄選 · 分享專頁
        </span>
      </div>

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-bold mb-4 border border-blue-200 dark:border-blue-800">
          <QrCode className="w-4 h-4 text-blue-600" />
          <span>二維碼與短網址專區</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-serif mb-4">
          官網專屬 QR Code 與短網址
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 via-red-500 to-blue-600 mx-auto rounded-full mb-5" />
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          二維碼標準展示尺寸為 <strong className="text-amber-600 dark:text-amber-400 font-bold">500 × 500</strong> 像素，
          點擊任一 QR Code 即可全螢幕放大至 <strong className="text-blue-600 dark:text-blue-400 font-bold">1000 × 1000</strong> 像素超高解析度。<br className="hidden sm:inline" />
          同時提供<strong>主通道</strong>與<strong>備用通道</strong>雙重短網址，適合會議投影、手機掃碼與文宣印製。
        </p>
      </div>

      {/* Two QR Code Cards Grid: Primary and Backup */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Card 1: Primary QR Code (TinyURL) */}
        <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-8 border-2 border-amber-300/80 dark:border-amber-600/60 shadow-xl flex flex-col justify-between hover:shadow-2xl transition">
          <div>
            {/* Header Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-lg text-xs font-black bg-amber-500 text-slate-950 uppercase tracking-wider shadow-sm flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>【主通道】{qrLinks.primary.title}</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {qrLinks.primary.provider} 驅動
              </span>
            </div>

            {/* Short URL Box */}
            <div className="mb-6 p-4 rounded-2xl bg-amber-50/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800/80">
              <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold mb-1 flex items-center justify-between">
                <span>短網址連結：</span>
                <span className="text-[11px] text-slate-500">主推薦使用</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <code className="text-base sm:text-lg font-mono font-black text-blue-700 dark:text-sky-300 break-all select-all">
                  {qrLinks.primary.shortUrl}
                </code>
                <button
                  onClick={() => handleCopy(qrLinks.primary.shortUrl, "primary")}
                  className={`p-2.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition shrink-0 ${
                    copiedType === "primary"
                      ? "bg-emerald-600 text-white"
                      : "bg-amber-500 hover:bg-amber-600 text-slate-950"
                  }`}
                  title="複製短網址"
                >
                  {copiedType === "primary" ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>已複製</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>複製網址</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* QR Code 500x500 Container */}
            <div className="text-center mb-6">
              <div className="inline-block relative group">
                <div
                  onClick={() =>
                    openZoom(
                      qrLinks.primary.qr1000,
                      "【主通道】官網專屬 QR Code",
                      qrLinks.primary.shortUrl
                    )
                  }
                  className="cursor-pointer relative rounded-2xl overflow-hidden p-4 bg-white border-4 border-amber-400/80 shadow-lg hover:shadow-2xl transition duration-300 group-hover:border-amber-500"
                  style={{ width: "100%", maxWidth: "500px", aspectRatio: "1/1" }}
                  title="點擊放大至 1000 × 1000 像素"
                >
                  <img
                    src={qrLinks.primary.qr500}
                    alt="主通道 QR Code 500x500"
                    className="w-full h-full object-contain mx-auto"
                    width={500}
                    height={500}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                    <Maximize2 className="w-12 h-12 text-amber-400 mb-2 animate-bounce-slow" />
                    <span className="font-extrabold text-base sm:text-lg">
                      點擊放大至 1000 × 1000 像素
                    </span>
                    <span className="text-xs text-amber-300 mt-1">
                      超高畫質全螢幕投影檢視
                    </span>
                  </div>
                </div>

                <div className="mt-2 text-xs text-slate-500 font-medium">
                  展示尺寸：<span className="font-bold text-slate-800 dark:text-slate-200">500 × 500 px</span>（點擊可放大至 1000 × 1000 px）
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {qrLinks.primary.note}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={() =>
                openZoom(
                  qrLinks.primary.qr1000,
                  "【主通道】官網專屬 QR Code",
                  qrLinks.primary.shortUrl
                )
              }
              className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center space-x-1 transition"
            >
              <ZoomIn className="w-4 h-4 text-amber-500" />
              <span>放大 (1000px)</span>
            </button>

            <a
              href={qrLinks.primary.qr1000}
              download="董勳遠校長官網_主通道QR碼_1000x1000.png"
              className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1 shadow transition"
            >
              <Download className="w-4 h-4" />
              <span>下載 1000px 圖檔</span>
            </a>

            <a
              href={qrLinks.primary.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 sm:col-span-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-1 transition shadow"
            >
              <ExternalLink className="w-4 h-4" />
              <span>開啟短網址</span>
            </a>
          </div>
        </div>

        {/* Card 2: Backup QR Code (is.gd) */}
        <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-8 border-2 border-emerald-300/80 dark:border-emerald-600/60 shadow-xl flex flex-col justify-between hover:shadow-2xl transition">
          <div>
            {/* Header Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-lg text-xs font-black bg-emerald-600 text-white uppercase tracking-wider shadow-sm flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>【備用通道】{qrLinks.backup.title}</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {qrLinks.backup.provider} 驅動
              </span>
            </div>

            {/* Short URL Box */}
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50/80 dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-800/80">
              <div className="text-xs text-emerald-800 dark:text-emerald-300 font-semibold mb-1 flex items-center justify-between">
                <span>備用短網址連結：</span>
                <span className="text-[11px] text-slate-500">獨立備援線路</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <code className="text-base sm:text-lg font-mono font-black text-emerald-700 dark:text-emerald-300 break-all select-all">
                  {qrLinks.backup.shortUrl}
                </code>
                <button
                  onClick={() => handleCopy(qrLinks.backup.shortUrl, "backup")}
                  className={`p-2.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition shrink-0 ${
                    copiedType === "backup"
                      ? "bg-emerald-600 text-white"
                      : "bg-emerald-500 hover:bg-emerald-600 text-white"
                  }`}
                  title="複製備用短網址"
                >
                  {copiedType === "backup" ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>已複製</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>複製網址</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* QR Code 500x500 Container */}
            <div className="text-center mb-6">
              <div className="inline-block relative group">
                <div
                  onClick={() =>
                    openZoom(
                      qrLinks.backup.qr1000,
                      "【備用通道】官網專屬備用 QR Code",
                      qrLinks.backup.shortUrl
                    )
                  }
                  className="cursor-pointer relative rounded-2xl overflow-hidden p-4 bg-white border-4 border-emerald-400/80 shadow-lg hover:shadow-2xl transition duration-300 group-hover:border-emerald-500"
                  style={{ width: "100%", maxWidth: "500px", aspectRatio: "1/1" }}
                  title="點擊放大至 1000 × 1000 像素"
                >
                  <img
                    src={qrLinks.backup.qr500}
                    alt="備用通道 QR Code 500x500"
                    className="w-full h-full object-contain mx-auto"
                    width={500}
                    height={500}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                    <Maximize2 className="w-12 h-12 text-emerald-400 mb-2 animate-bounce-slow" />
                    <span className="font-extrabold text-base sm:text-lg">
                      點擊放大至 1000 × 1000 像素
                    </span>
                    <span className="text-xs text-emerald-300 mt-1">
                      超高畫質全螢幕投影檢視
                    </span>
                  </div>
                </div>

                <div className="mt-2 text-xs text-slate-500 font-medium">
                  展示尺寸：<span className="font-bold text-slate-800 dark:text-slate-200">500 × 500 px</span>（點擊可放大至 1000 × 1000 px）
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {qrLinks.backup.note}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={() =>
                openZoom(
                  qrLinks.backup.qr1000,
                  "【備用通道】官網專屬備用 QR Code",
                  qrLinks.backup.shortUrl
                )
              }
              className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center space-x-1 transition"
            >
              <ZoomIn className="w-4 h-4 text-emerald-600" />
              <span>放大 (1000px)</span>
            </button>

            <a
              href={qrLinks.backup.qr1000}
              download="董勳遠校長官網_備用QR碼_1000x1000.png"
              className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-1 shadow transition"
            >
              <Download className="w-4 h-4" />
              <span>下載 1000px 圖檔</span>
            </a>

            <a
              href={qrLinks.backup.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 sm:col-span-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-1 transition shadow"
            >
              <ExternalLink className="w-4 h-4" />
              <span>開啟備用網址</span>
            </a>
          </div>
        </div>
      </div>

      {/* Official Direct Full URL Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-500 text-white uppercase tracking-wider">
              官方完整發布網址 (GitHub Pages)
            </span>
            <div className="text-sm sm:text-base font-mono font-bold text-slate-200 break-all select-all">
              {qrLinks.officialUrl}
            </div>
            <p className="text-xs text-slate-400">
              若在特殊網路或防火牆環境，亦可直接輸入此原始完整網址訪問
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => handleCopy(qrLinks.officialUrl, "official")}
              className={`py-3 px-5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition shadow ${
                copiedType === "official"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
              }`}
            >
              {copiedType === "official" ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>已複製完整網址</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>複製完整網址</span>
                </>
              )}
            </button>

            <a
              href={qrLinks.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center space-x-1.5 transition shadow"
            >
              <ExternalLink className="w-4 h-4" />
              <span>新分頁開啟</span>
            </a>
          </div>
        </div>
      </div>

      {/* 1000x1000 Lightbox Modal */}
      {zoomModal.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={closeZoom}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col items-center max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-serif">
                  {zoomModal.title}
                </h3>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                  1000 × 1000 像素超高解析度
                </span>
              </div>
              <button
                onClick={closeZoom}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* 1000x1000 QR Code Display Box */}
            <div
              className="relative rounded-2xl overflow-hidden p-6 bg-white border-4 border-slate-200 shadow-2xl my-2 max-w-[700px] w-full aspect-square flex items-center justify-center"
              style={{ width: "100%", maxWidth: "680px" }}
            >
              <img
                src={zoomModal.image}
                alt="QR Code 1000x1000"
                className="w-full h-full object-contain mx-auto"
                width={1000}
                height={1000}
              />
            </div>

            {/* Target URL */}
            <div className="w-full mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-xs text-slate-500 dark:text-slate-400 mr-2">對應短網址：</span>
              <code className="text-sm font-mono font-bold text-blue-600 dark:text-sky-300">
                {zoomModal.url}
              </code>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <a
                href={zoomModal.image}
                download="董勳遠校長官網_二維碼_1000x1000.png"
                className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm flex items-center space-x-2 shadow-lg transition"
              >
                <Download className="w-4 h-4" />
                <span>下載此 1000 × 1000 高清圖檔</span>
              </a>

              <button
                onClick={() => handleCopy(zoomModal.url, "modal")}
                className="py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm flex items-center space-x-2 transition"
              >
                {copiedType === "modal" ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>已複製短網址</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>複製短網址</span>
                  </>
                )}
              </button>

              <button
                onClick={closeZoom}
                className="py-3 px-5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-sm transition"
              >
                關閉放大
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
