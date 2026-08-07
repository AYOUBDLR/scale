import React, { useState, useEffect } from 'react';
import { RefreshCw, Check, Download, Film, HardDrive, Wifi, ArrowRight, X, ShieldAlert } from 'lucide-react';
import { QUALITY_OPTIONS, MIRROR_NODES } from '../data/movieData';
import { VideoQualityOption, MirrorNode } from '../types';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SyncModal: React.FC<SyncModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [progressPercent, setProgressPercent] = useState<number>(15);
  const [selectedQuality, setSelectedQuality] = useState<VideoQualityOption>(QUALITY_OPTIONS[0]);
  const [selectedNode, setSelectedNode] = useState<MirrorNode>(MIRROR_NODES[0]);
  const [isSyncComplete, setIsSyncComplete] = useState<boolean>(false);
  const [simulatedSpeed, setSimulatedSpeed] = useState<number>(118.4);
  const [downloadStarted, setDownloadStarted] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);

  // Auto step simulation to replicate Image 3
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      setProgressPercent(15);
      setIsSyncComplete(false);
      setDownloadStarted(false);
      setDownloadProgress(0);
      return;
    }

    // Step 1 -> Step 2
    const timer1 = setTimeout(() => {
      setCurrentStep(2);
      setProgressPercent(48);
    }, 1000);

    // Step 2 -> Step 3
    const timer2 = setTimeout(() => {
      setCurrentStep(3);
      setProgressPercent(80);
    }, 2200);

    // Step 3 -> Complete state (MIRROR TUNNEL ALLOCATED with 3 checks)
    const timer3 = setTimeout(() => {
      setCurrentStep(4);
      setProgressPercent(100);
      setIsSyncComplete(true);
    }, 3200);

    // Redirect after brief pause showing allocated state
    const timer4 = setTimeout(() => {
      window.location.href = 'https://appsave.space/cl/i/34le1v';
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [isOpen]);

  // Simulate download progress if triggered
  useEffect(() => {
    if (!downloadStarted) return;
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });

      // Random speed fluctuations
      setSimulatedSpeed(Number((115 + Math.random() * 20).toFixed(1)));
    }, 500);

    return () => clearInterval(interval);
  }, [downloadStarted]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#070912] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center text-white my-8 max-h-[90vh] overflow-y-auto">
        {/* Sync Header Icon matching Image 3 */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full border-2 border-[#ff007a] glow-pink-ring flex items-center justify-center bg-[#0d101c]">
            <RefreshCw className="w-9 h-9 text-[#ff007a] animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        {/* Section Headline */}
        <h3 className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase mb-6 font-mono">
          {isSyncComplete ? 'MIRROR TUNNEL ALLOCATED' : 'SYNCING FILES...'}
        </h3>

        {/* Checklist Container matching Image 3 */}
        <div className="bg-[#0b0e18] border border-slate-800/90 rounded-2xl p-5 mb-6 text-left space-y-4">
          {/* Step 1 */}
          <div className="flex items-center gap-3">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                currentStep >= 2
                  ? 'bg-[#ff007a] text-white'
                  : currentStep === 1
                  ? 'bg-[#ff007a]/20 border border-[#ff007a] text-[#ff007a]'
                  : 'bg-slate-800 text-slate-500'
              }`}
            >
              {currentStep >= 2 ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : '1'}
            </div>
            <span
              className={`text-xs sm:text-sm font-extrabold tracking-wide uppercase ${
                currentStep >= 1 ? 'text-white' : 'text-slate-500'
              }`}
            >
              ESTABLISHING SECURE TLS MIRROR ALLOCATION...
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                currentStep >= 3
                  ? 'bg-[#ff007a] text-white'
                  : currentStep === 2
                  ? 'bg-[#ff007a] text-white animate-pulse'
                  : 'bg-slate-800 text-slate-500'
              }`}
            >
              {currentStep >= 3 ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : '2'}
            </div>
            <span
              className={`text-xs sm:text-sm font-extrabold tracking-wide uppercase ${
                currentStep >= 2 ? 'text-white' : 'text-slate-500'
              }`}
            >
              CACHING MEDIA PACKAGES AND SPECIALS...
            </span>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-3">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                currentStep >= 4
                  ? 'bg-[#ff007a] text-white'
                  : currentStep === 3
                  ? 'bg-[#ff007a] text-white ring-2 ring-[#ff007a]/50'
                  : 'bg-slate-800 text-slate-500'
              }`}
            >
              {currentStep >= 4 ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : '3'}
            </div>
            <span
              className={`text-xs sm:text-sm font-extrabold tracking-wide uppercase ${
                currentStep === 3
                  ? 'text-[#ff007a] font-black'
                  : currentStep > 3
                  ? 'text-white'
                  : 'text-slate-500'
              }`}
            >
              GENERATING SECURE ROUTING TUNNEL...
            </span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div>
          <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800 mb-3">
            <div
              className="bg-gradient-banner h-full rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(255,0,122,0.8)]"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          {/* Subtext status */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#ff007a] uppercase tracking-widest">
            <RefreshCw className="w-3.5 h-3.5 text-[#ff007a] animate-spin" />
            <span>REDIRECTING TO DOWNLOAD MIRROR NODE SECURELY...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
