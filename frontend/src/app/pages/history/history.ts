import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface HistoryItem {
  id: number;
  date: string;
  type: string;
  name: string;
  prediction: string;
  confidence: string;
  link: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class History {
  // Initial history data list
  historyList = signal<HistoryItem[]>([
    { id: 1, date: '21 Jul', type: 'Text', name: 'news.txt', prediction: 'Fake', confidence: '98%', link: '/text-detection' },
    { id: 2, date: '20 Jul', type: 'Image', name: 'image.jpg', prediction: 'Real', confidence: '95%', link: '/image-detection' },
    { id: 3, date: '19 Jul', type: 'URL', name: 'bbc.com/news', prediction: 'Real', confidence: '99%', link: '/url-detection' }
  ]);

  // Filter and search state
  selectedFilter = signal<string>('All');
  searchQuery = signal<string>('');

  // Filtered items computed based on dropdown selection & search text
  filteredHistory = computed(() => {
    const filter = this.selectedFilter().toLowerCase();
    const query = this.searchQuery().toLowerCase().trim();

    return this.historyList().filter(item => {
      const matchesType = filter === 'all' || item.type.toLowerCase() === filter;
      const matchesQuery = !query || item.name.toLowerCase().includes(query);
      return matchesType && matchesQuery;
    });
  });

  // Delete individual item
  deleteItem(id: number) {
    this.historyList.update(list => list.filter(item => item.id !== id));
  }

  // Clear all items
  deleteAllHistory() {
    this.historyList.set([]);
  }
}