import * as msw from 'msw';

export const handlers = [
  msw.http.get(/\/api\/v1\/playlist$/, () => {

    return msw.HttpResponse.json([
      {
        id: '1',
        title: 'Midnight Memories',
        artist: 'Atlas',
        album: 'Horizon',
        duration: '3:45',
        url: '/audio/midnight.mp3',
        cover: '/covers/midnight.jpg',
      },
      {
        id: '2',
        title: 'Starlight Serenade',
        artist: 'Luna',
        album: 'Celestial',
        duration: '4:20',
        url: '/audio/starlight.mp3',
        cover: '/covers/starlight.jpg',
      },
      {
        id: '3',
        title: 'Ocean Dreams',
        artist: 'Nebula',
        album: 'Deep Blue',
        duration: '3:58',
        url: '/audio/ocean.mp3',
        cover: '/covers/ocean.jpg',
      },
    ], { status: 200 });
  }),
];
