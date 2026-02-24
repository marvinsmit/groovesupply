export interface YouTubePlaylistItem {
  id: string;
  snippet: {
    title: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}
