import { Routes } from '@angular/router';

// Page Components

import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register.component';
import { Dashboard } from './pages/dashboard/dashboard';
import { TextDetection } from './pages/text-detection/text-detection';
import { ImageDetection } from './pages/image-detection/image-detection';
import { VideoDetection } from './pages/video-detection/video-detection';
import { AudioDetection } from './pages/audio-detection/audio-detection';
import { UrlDetection } from './pages/url-detection/url-detection';
import { History } from './pages/history/history';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: Dashboard },
  { path: 'text-detection', component: TextDetection },
  { path: 'image-detection', component: ImageDetection },
  { path: 'video-detection', component: VideoDetection },
  { path: 'audio-detection', component: AudioDetection },
  { path: 'url-detection', component: UrlDetection },
  { path: 'history', component: History },
  { path: 'profile', component: Profile },
  { path: '**', redirectTo: '' }
];