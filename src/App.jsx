import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import EntranceGate from "./components/EntranceGate";
import CustomizationBar from "./components/CustomizationBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EducationalFlywheel from "./components/EducationalFlywheel";
import TouchingStories from "./components/TouchingStories";
import RecommendationLetters from "./components/RecommendationLetters";
import HonorsAndTimeline from "./components/HonorsAndTimeline";
import MediaAndNews from "./components/MediaAndNews";
import PhotoGallery from "./components/PhotoGallery";
import PrincipalVision from "./components/PrincipalVision";
import Footer from "./components/Footer";
import ImageLightboxModal from "./components/ImageLightboxModal";

function MainContent() {
  const { fontSize, bgScheme, styleTheme } = useTheme();

  // Authentication Gate: Enter with password 049 (never mention 049 in UI)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("site_authenticated") === "true";
  });

  const handleLock = () => {
    sessionStorage.removeItem("site_authenticated");
    setIsAuthenticated(false);
  };

  const [modalState, setModalState] = useState({
    isOpen: false,
    image: null,
    title: "",
    caption: "",
  });

  const handleOpenImage = (image, title = "影像檢視", caption = "") => {
    setModalState({
      isOpen: true,
      image,
      title,
      caption,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  // If not authenticated, show entrance gate requiring password
  if (!isAuthenticated) {
    return <EntranceGate onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  const isDark = bgScheme === "dark";

  return (
    <div
      className={`min-h-screen theme-container font-scale-${fontSize} scheme-${bgScheme} style-${styleTheme} ${
        isDark ? "dark" : ""
      }`}
      id="top"
    >
      {/* Top Customization Bar: Font (大/中/小), Scheme (淺色/深色/淡藍), Style (日/中/西), Lock */}
      <CustomizationBar onLock={handleLock} />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenFlywheelModal={() =>
            handleOpenImage(
              "./images/flywheel/flywheel_poster.jpg",
              "董勳遠主任 - 我有一個教育夢想（教育飛輪完整藍圖）",
              "宏觀視野 × 創新治理 ｜ 卓越學孝 × 教練領導 ➔ 成就孩子"
            )
          }
        />

        {/* 2. Educational Flywheels */}
        <EducationalFlywheel onOpenImageModal={handleOpenImage} />

        {/* 3. Touching Stories & Turning Lives */}
        <TouchingStories onOpenImage={handleOpenImage} />

        {/* 4. Recommendation Letters & Endorsements */}
        <RecommendationLetters onOpenImage={handleOpenImage} />

        {/* 5. Honors, Administrative Timeline & Licenses */}
        <HonorsAndTimeline onOpenImage={handleOpenImage} />

        {/* 6. Media News & Press Clippings */}
        <MediaAndNews onOpenImage={handleOpenImage} />

        {/* 7. Photographic Gallery */}
        <PhotoGallery onOpenImage={handleOpenImage} />

        {/* 8. Principal Vision & Governance Blueprint */}
        <PrincipalVision />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        image={modalState.image}
        title={modalState.title}
        caption={modalState.caption}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
