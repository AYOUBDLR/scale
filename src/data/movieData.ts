import { MirrorNode, VideoQualityOption, ReviewItem } from '../types';
import southParkLogo from '../assets/images/south_park_logo_1790121923976.jpg';
import southParkBanner from '../assets/images/south_park_banner_1790121936663.jpg';

export const MOVIE_DATA = {
  title: 'SOUTH PARK',
  subtitle: 'EXCLUSIVE STREAMING & HIGH-SPEED OFFLINE MIRROR',
  releaseYear: '2026',
  duration: '1h 45m',
  rating: '4.9 / 5',
  totalConnections: '14,350+',
  synopsis:
    'Join Stan Marsh, Kyle Broflovski, Eric Cartman, and Kenny McCormick in South Park, Colorado. Stream and download exclusive uncensored specials and episodes in full pristine quality.',
  cast: [
    { name: 'Trey Parker', role: 'Stan Marsh / Eric Cartman / Randy Marsh' },
    { name: 'Matt Stone', role: 'Kyle Broflovski / Kenny McCormick / Butters' },
    { name: 'April Stewart', role: 'Sharon Marsh / Liane Cartman / Wendy' },
    { name: 'Mona Marshall', role: 'Sheila Broflovski / Linda Stotch' },
  ],
  trailerVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0', // or trailer fallback
  posterImage: southParkBanner,
  avatarImage: southParkLogo,
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
    author: 'CartmanOfficial',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '10 mins ago',
    comment: 'The 1080p mirror downloaded in seconds! Full uncensored audio is hilarious. Respect my authoritah!',
    verifiedMirrorUser: true,
  },
  {
    id: 'rev-2',
    author: 'StanMarsh_CO',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '25 mins ago',
    comment: 'Super fast download speed (120 MB/s). No ads, zero malware scan checked green. Awesome South Park stream channel.',
    verifiedMirrorUser: true,
  },
  {
    id: 'rev-3',
    author: 'KennyLives99',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '1 hour ago',
    comment: 'Clean preview player and instant sync tunnel creation. Direct mirror node allocated without issues.',
    verifiedMirrorUser: true,
  },
];
