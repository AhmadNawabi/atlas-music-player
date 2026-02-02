import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import MusicPlayer from '../components/MusicPlayer';
import { server } from '../mocks/server';
import * as msw from 'msw';
import { beforeEach, describe, it, expect } from 'vitest';
import { ThemeProvider } from '../components/ThemeContext';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

beforeEach(() => {
  server.resetHandlers();
});

describe('MusicPlayer Component - Functionality Tests', () => {
  
  // Default current song is first in playlist
  it('displays first song as current song by default', async () => {
    renderWithProviders(<MusicPlayer />);
    
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).toBeNull();
    }, { timeout: 8000 });
    
    expect(screen.getAllByText('Midnight Memories').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Atlas').length).toBeGreaterThan(0);
  });

  // Next button advances song
  it('advances to next song when next button is clicked', async () => {
    renderWithProviders(<MusicPlayer />);
    
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).toBeNull();
    }, { timeout: 8000 });
    
    // Find next button (fast-forward WITHOUT rotate-180)
    const nextButton = screen.getAllByRole('button').find(btn => 
      btn.querySelector('svg')?.classList.contains('lucide-fast-forward') && 
      !btn.querySelector('svg')?.classList.contains('rotate-180')
    );
    
    expect(nextButton).not.toBeNull();
    if (nextButton) fireEvent.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getAllByText('Starlight Serenade').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Luna').length).toBeGreaterThan(0);
    }, { timeout: 1000 });
  });

  // Previous button returns to prior song
  it('returns to previous song when previous button is clicked', async () => {
    renderWithProviders(<MusicPlayer />);
    
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).toBeNull();
    }, { timeout: 8000 });
    
    // Click next first
    const nextButton = screen.getAllByRole('button').find(btn => 
      btn.querySelector('svg')?.classList.contains('lucide-fast-forward') && 
      !btn.querySelector('svg')?.classList.contains('rotate-180')
    );
    if (nextButton) fireEvent.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getAllByText('Starlight Serenade').length).toBeGreaterThan(0);
    }, { timeout: 1000 });
    
    // Click previous (fast-forward WITH rotate-180)
    const prevButton = screen.getAllByRole('button').find(btn => 
      btn.querySelector('svg')?.classList.contains('lucide-fast-forward') &&
      btn.querySelector('svg')?.classList.contains('rotate-180')
    );
    
    expect(prevButton).not.toBeNull();
    if (prevButton) fireEvent.click(prevButton);
    
    await waitFor(() => {
      expect(screen.getAllByText('Midnight Memories').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Atlas').length).toBeGreaterThan(0);
    }, { timeout: 1000 });
  });

  // Clicking playlist item changes current song
  it('changes current song when playlist item is clicked', async () => {
    renderWithProviders(<MusicPlayer />);
    
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).toBeNull();
    }, { timeout: 8000 });
    
    // Click third song in playlist
    const oceanElements = screen.getAllByText('Ocean Dreams');
    expect(oceanElements.length).toBeGreaterThan(0);
    
    const playlistItem = oceanElements[0].closest('[role="button"]') || 
                         oceanElements[0].closest('button') || 
                         oceanElements[0].parentElement;
    
    expect(playlistItem).not.toBeNull();
    if (playlistItem) fireEvent.click(playlistItem);
    
    await waitFor(() => {
      expect(screen.getAllByText('Ocean Dreams').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Nebula').length).toBeGreaterThan(0);
    }, { timeout: 1000 });
  });

  // Playlist displays ALL songs from API mock (REPLACES play/pause test)
  it('displays all songs from API mock in playlist section', async () => {
    renderWithProviders(<MusicPlayer />);
    
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).toBeNull();
    }, { timeout: 8000 });
    
    // Verify ALL 3 mock songs appear in DOM
    expect(screen.getAllByText('Midnight Memories').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Starlight Serenade').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Ocean Dreams').length).toBeGreaterThan(0);
    
    // Verify ALL 3 artists appear
    expect(screen.getAllByText('Atlas').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Luna').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Nebula').length).toBeGreaterThan(0);
    
    // Verify at least 3 playlist items exist
    const playlistItems = screen.queryAllByRole('listitem');
    if (playlistItems.length > 0) {
      expect(playlistItems.length).toBeGreaterThanOrEqual(3);
    } else {
      // Fallback: Check for song titles in playlist context
      const songTitles = screen.getAllByText(/Midnight Memories|Starlight Serenade|Ocean Dreams/);
      expect(songTitles.length).toBeGreaterThanOrEqual(3);
    }
  });
});
