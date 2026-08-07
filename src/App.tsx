import React, { useState } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { HeroSection } from './components/HeroSection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import { SyncModal } from './components/SyncModal';

export default function App() {
  const [isSyncModalOpen, setIsSyncModalOpen] = useState<boolean>(false);

  const handleOpenSyncModal = () => {
    setIsSyncModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080a12] text-white flex flex-col items-center justify-between selection:bg-[#ff007a] selection:text-white">
      {/* Container simulating high quality portal page */}
      <div className="w-full max-w-2xl mx-auto shadow-2xl bg-[#080a12] min-h-screen flex flex-col">
        {/* Top Gradient Banner */}
        <HeaderBanner />

        {/* Main Portal Body */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection onStartDownload={handleOpenSyncModal} />

          {/* Download & Stats Section */}
          <DownloadSection onStartDownload={handleOpenSyncModal} />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Syncing / Allocation Modal (Matches Image 3) */}
      <SyncModal
        isOpen={isSyncModalOpen}
        onClose={() => setIsSyncModalOpen(false)}
      />
    </div>
  );
}
