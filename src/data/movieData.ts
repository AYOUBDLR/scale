import { MirrorNode, VideoQualityOption, ReviewItem } from '../types';

export const MOVIE_DATA = {
  title: 'SPIDER-MAN: BRAND NEW DAY',
  subtitle: 'EXCLUSIVE STREAMING & HIGH-SPEED OFFLINE MIRROR',
  releaseYear: '2026',
  duration: '2h 28m',
  rating: '4.9 / 5',
  totalConnections: '12,801+',
  synopsis:
    'Peter Parker navigates a world where no one remembers his identity. Balancing college life, coffee shop shifts, and heroic duty, a mysterious new multiversal rift forces Spider-Man to forge a brand new path alongside trusted allies.',
  cast: [
    { name: 'Tom Holland', role: 'Peter Parker / Spider-Man' },
    { name: 'Zendaya', role: 'MJ Watson' },
    { name: 'Jacob Batalon', role: 'Ned Leeds' },
    { name: 'Sadie Sink', role: 'Felicia Hardy' },
    { name: 'Charlie Cox', role: 'Matt Murdock' },
  ],
  trailerVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0', // or trailer fallback
  posterImage: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=1200&q=80', // High res Spider-Man style hero photo
  avatarImage: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?auto=format&fit=crop&w=400&q=80',
};

export const QUALITY_OPTIONS: VideoQualityOption[] = [
  {
    id: '4k-hdr',
    label: '2160p 4K Ultra HD HDR',
    resolution: '3840 x 2160',
    bitrate: '52 Mbps',
    size: '18.4 GB',
    format: 'MKV (HEVC / Dolby Atmos 7.1)',
    recommended: true,
  },
  {
    id: '1080p-fullhd',
    label: '1080p Full HD Mirror',
    resolution: '1920 x 1080',
    bitrate: '14 Mbps',
    size: '4.2 GB',
    format: 'MP4 (H.264 / AAC 5.1)',
  },
  {
    id: '720p-web',
    label: '720p Fast Mobile Download',
    resolution: '1280 x 720',
    bitrate: '4 Mbps',
    size: '1.8 GB',
    format: 'MP4 (H.264 / Stereo)',
  },
];

export const MIRROR_NODES: MirrorNode[] = [
  {
    id: 'node-us-east',
    name: 'US East CDN Mirror (New York Node #1)',
    location: 'United States (N. Virginia)',
    speed: '1.45 GB/s',
    ping: 14,
    status: 'online',
    load: 28,
  },
  {
    id: 'node-eu-central',
    name: 'EU Central High-Speed (Frankfurt Node #4)',
    location: 'Germany (Frankfurt)',
    speed: '1.82 GB/s',
    ping: 22,
    status: 'online',
    load: 42,
  },
  {
    id: 'node-asia-tokyo',
    name: 'Asia Pacific Edge (Tokyo Node #2)',
    location: 'Japan (Tokyo)',
    speed: '1.10 GB/s',
    ping: 35,
    status: 'online',
    load: 19,
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'PeterP_Fan99',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '10 mins ago',
    comment: 'The 4K HDR mirror downloaded in under 2 minutes! Audio track in Dolby Atmos is incredible. Best movie portal ever!',
    verifiedMirrorUser: true,
  },
  {
    id: 'rev-2',
    author: 'WebSlinger_MJ',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '25 mins ago',
    comment: 'Super fast download speed (120 MB/s). No ads, zero virus scan checked green. Highly recommended mirror channel.',
    verifiedMirrorUser: true,
  },
  {
    id: 'rev-3',
    author: 'MCU_Archivist',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 hour ago',
    comment: 'Clean preview player and instant sync tunnel creation. SSL verified mirror node works effortlessly.',
    verifiedMirrorUser: true,
  },
];
