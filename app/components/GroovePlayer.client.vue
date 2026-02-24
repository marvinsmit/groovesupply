<script setup lang="ts">
import { onMounted } from 'vue';
import YouTubePlayer from 'youtube-player';
import PlayerStates from 'youtube-player/dist/constants/PlayerStates';
import type { YouTubePlayer as YoutubePlayerType } from 'youtube-player/dist/types';
import { type YouTubePlaylistItem } from '~/types/youtube';

const props = defineProps<{
    video: YouTubePlaylistItem | null
    onVideoEnd: () => Promise<void>
}>()

let player: YoutubePlayerType;

onMounted(async () => {
    player = YouTubePlayer('yt-player', {
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
        }
    });
    player.on('ready', async () => {
        if (props.video) {
            await player.loadVideoById(props.video?.snippet.resourceId.videoId)
            player.playVideo();
        }
    })
    player.on('stateChange', function (event) {
        if (event.data === PlayerStates.ENDED) {
            props.onVideoEnd();
        }
    });
})

watch(
    () => props.video?.snippet.resourceId.videoId,
    (newId) => { if (player && newId) { player.loadVideoById(newId) } }
)
</script>

<template>
    <div class="w-screen h-screen rounded-md overflow-hidden shadow-2xl">
        <div id="yt-player" class="w-full h-full"></div>
    </div>
</template>