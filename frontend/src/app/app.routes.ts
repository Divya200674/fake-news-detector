import { Routes } from '@angular/router';

// Page Components
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { TextDetection } from './pages/text-detection/text-detection';
import { ImageDetection } from './pages/image-detection/image-detection';
import { VideoDetection } from './pages/video-detection/video-detection';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard },
  { path: 'text-detection', component: TextDetection },
  { path: 'image-detection', component: ImageDetection },
  { path: 'video-detection', component: VideoDetection },
  { path: '**', redirectTo: '' }
];