export interface MirrorNode {
  id: string;
  name: string;
  location: string;
  speed: string; // e.g. "1.2 GB/s"
  ping: number; // e.g. 18ms
  status: 'online' | 'busy' | 'offline';
  load: number; // e.g. 34%
}

export interface VideoQualityOption {
  id: string;
  label: string; // "2160p 4K HDR"
  resolution: string; // "3840x2160"
  bitrate: string; // "45 Mbps"
  size: string; // "18.4 GB"
  format: string; // "MKV / HEVC"
  recommended?: boolean;
}

export interface DownloadProgressState {
  isDownloading: boolean;
  step: number; // 0, 1, 2, 3, 4
  stepDescription: string;
  progressPercent: number;
  currentSpeed: number; // in MB/s
  downloadedMB: number;
  totalMB: number;
  timeRemainingSeconds: number;
  selectedQuality: VideoQualityOption;
  selectedNode: MirrorNode;
  isComplete: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verifiedMirrorUser: boolean;
}
