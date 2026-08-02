import { Routes } from '@angular/router';

// Page Component Imports matching short class names
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { TextDetection } from './pages/text-detection/text-detection';
import { ImageDetection } from './pages/image-detection/image-detection';
import { VideoDetection } from './pages/video-detection/video-detection';
import { AudioDetection } from './pages/audio-detection/audio-detection';
import { UrlDetection } from './pages/url-detection/url-detection';
import { History } from './pages/history/history';
import { Profile } from './pages/profile/profile';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: 'text-detection', component: TextDetection },
  { path: 'image-detection', component: ImageDetection },
  { path: 'video-detection', component: VideoDetection },
  { path: 'audio-detection', component: AudioDetection },
  { path: 'url-detection', component: UrlDetection },
  { path: 'history', component: History },
  { path: 'profile', component: Profile },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '**', redirectTo: 'home' }
];