import type { YouTubePlaylistItem } from "~/types/youtube";

export const usePlaylist = () => {
  const config = useRuntimeConfig();
  const videos = ref<YouTubePlaylistItem[]>([]);
  const loading = ref(false);

  const fetchPlaylist = async () => {
    loading.value = true;
    videos.value = [];

    let nextPageToken: string | undefined = undefined;

    do {
      const res: any = await $fetch(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
          params: {
            part: "snippet",
            maxResults: 50,
            playlistId: config.public.playlistId,
            pageToken: nextPageToken,
            key: config.public.youtubeApiKey,
          },
        },
      );

      videos.value.push(...res.items);
      nextPageToken = res.nextPageToken;
    } while (nextPageToken);

    loading.value = false;
  };
  
  return { videos, loading, fetchPlaylist };
};
