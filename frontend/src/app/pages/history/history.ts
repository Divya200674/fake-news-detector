import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface HistoryItem {
  id: number;
  date: string;
  type: string;
  name: string;
  prediction: 'Fake' | 'Real';
  confidence: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './history.html',
  styleUrls: ['./history.css']
})
export class History {
  searchQuery: string = '';
  selectedType: string = 'all';

  historyData: HistoryItem[] = [
    { id: 1, date: '21 Jul', type: 'Text', name: 'news.txt', prediction: 'Fake', confidence: '98%' },
    { id: 2, date: '20 Jul', type: 'Image', name: 'image.jpg', prediction: 'Real', confidence: '95%' },
    { id: 3, date: '19 Jul', type: 'URL', name: 'https://example-news.com', prediction: 'Fake', confidence: '91%' },
    { id: 4, date: '18 Jul', type: 'Video', name: 'deepfake_clip.mp4', prediction: 'Fake', confidence: '89%' },
    { id: 5, date: '17 Jul', type: 'Audio', name: 'speech_recording.wav', prediction: 'Real', confidence: '94%' }
  ];

  get filteredHistory(): HistoryItem[] {
    return this.historyData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            item.date.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            item.confidence.includes(this.searchQuery);

      const matchesType = this.selectedType === 'all' || 
                          item.type.toLowerCase() === this.selectedType.toLowerCase();

      return matchesSearch && matchesType;
    });
  }

  deleteItem(id: number): void {
    this.historyData = this.historyData.filter(item => item.id !== id);
  }

  clearAll(): void {
    if (confirm('Are you sure you want to clear all history?')) {
      this.historyData = [];
    }
  }
}