import { Routes } from '@angular/router';

// Page Component Imports
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { TextDetection } from './pages/text-detection/text-detection';
import { ImageDetection } from './pages/image-detection/image-detection';
import { VideoDetection } from './pages/video-detection/video-detection';
import { AudioDetection } from './pages/audio-detection/audio-detection';
import { UrlDetection } from './pages/url-detection/url-detection';
import { History } from './pages/history/history';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  // Default route (Home page)
  { path: '', component: Home },

  // Authentication Routes
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // User Dashboard
  { path: 'dashboard', component: Dashboard },

  // Detection Pages
  { path: 'text-detection', component: TextDetection },
  { path: 'image-detection', component: ImageDetection },
  { path: 'video-detection', component: VideoDetection },
  { path: 'audio-detection', component: AudioDetection },
  { path: 'url-detection', component: UrlDetection },

  // History & Profile Pages
  { path: 'history', component: History },
  { path: 'profile', component: Profile },

  // Fallback route: redirects any unknown URL back to Home
  { path: '**', redirectTo: '' }
];