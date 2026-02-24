import type { YouTubePlaylistItem } from "~/types/youtube";

export const useGroovePlayer = () => {
  const currentVideo = ref<YouTubePlaylistItem | null>(null);
  const history = ref<Set<YouTubePlaylistItem>>(new Set());

  const loadFromStorage = () => {
    const savedhistory = localStorage.getItem("groove-history");
    if (savedhistory) history.value = new Set(JSON.parse(savedhistory));
  };

  const saveToStorage = () => {
    localStorage.setItem("groove-history", JSON.stringify([...history.value]));
  };

  const pickRandom = (videos: YouTubePlaylistItem[]) => {
    const unseen = videos.filter((v) => !history.value.has(v));
    const pool = unseen.length ? unseen : videos;
    const random = pool[Math.floor(Math.random() * pool.length)];

    if (random) {
      currentVideo.value = random;
      history.value.add(random);
      saveToStorage();
      useHead({
        titleTemplate: () => {
          return `GrooveSupply - ${random.snippet.title}`;
        },
      });
    }
  };

  return {
    currentVideo,
    history,
    pickRandom,
    loadFromStorage,
  };
};
