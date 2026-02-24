<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { type YouTubePlaylistItem } from '~/types/youtube';

const props = defineProps<{
    video: YouTubePlaylistItem | null
    onEnd: () => Promise<void>
}>()

let player: any = null

const loadYouTubeAPI = (): Promise<void> => {
    return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
            resolve()
            return
        }

        const existingScript = document.querySelector(
            'script[src="https://www.youtube.com/iframe_api"]'
        )

        if (existingScript) {
            window.onYouTubeIframeAPIReady = () => resolve()
            return
        }

        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        window.onYouTubeIframeAPIReady = () => resolve()
        document.head.appendChild(tag)
    })
}

onMounted(async () => {
    await loadYouTubeAPI()

    if (window.YT && props.video) {
        player = new window.YT.Player('yt-player', {
            videoId: props.video.snippet.resourceId.videoId,
            playerVars: {
                autoplay: 1,
                controls: 0,
                modestbranding: 1,
                rel: 0,
            },
            events: {
                onStateChange: (event: any) => {
                    if (event.data === window.YT?.PlayerState.ENDED) {
                        props.onEnd()
                    }
                },
            },
        })
    }
})

watch(
    () => props.video?.snippet.resourceId.videoId,
    (newId) => {
        if (player && newId) {
            player.loadVideoById(newId)
        }
    }
)
</script>

<template>
    <div class="w-screen h-screen rounded-md overflow-hidden shadow-2xl">
        <div id="yt-player" class="w-full h-full"></div>
    </div>
</template>