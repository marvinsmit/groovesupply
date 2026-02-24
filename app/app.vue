<script setup lang="ts">
import Controls from "./components/Controls.vue";
import { useGroovePlayer } from "./composables/useGroovePlayer";
import { usePlaylist } from "./composables/usePlaylist";
import type { YouTubePlaylistItem } from "./types/youtube";

const { videos, fetchPlaylist } = usePlaylist();
const {
    currentVideo,
    history,
    pickRandom,
    loadFromStorage
} = useGroovePlayer();

const ready = ref(false)
const showWelcome = ref(false);
const showInfo = ref(false)
const showHistory = ref(false)
const showSpinner = ref(false)

useSeoMeta({
    title: 'GrooveSupply',
})

onMounted(async () => {
    checkWelcome();
    loadFromStorage();
    await fetchPlaylist();
    pickRandom(videos.value);
    ready.value = true;
});

const checkWelcome = () => {
    const savedWelcome = localStorage.getItem('show-welcome')
    if (savedWelcome === null) { showWelcome.value = true }
    else { showWelcome.value = savedWelcome === 'true' }
}

const startGrooving = () => {
    showWelcome.value = false;
    localStorage.setItem("show-welcome", 'false');
}

const nextVideo = async () => {
    showSpinner.value = true
    pickRandom(videos.value);
    setTimeout(() => { showSpinner.value = false }, 1500)
};
</script>

<template>
    <div v-if="showWelcome === true" class="w-screen h-screen flex flex-col items-center justify-center bg-zinc-900">
        <WelcomeScreen :onClose="startGrooving" />
    </div>
    <div v-else>
        <div v-if="!ready" class="w-screen h-screen flex flex-col items-center justify-center bg-zinc-900">
            <GrooveSpinner />
        </div>
        <div v-else class="w-screen h-screen bg-zinc-900">
            <GrooveSpinner :show="showSpinner" />
            <GroovePlayer :video="currentVideo" :onVideoEnd="nextVideo" />
            <Controls :nextVideo="nextVideo" :showInfo="() => { showInfo = true }"
                :showHistory="() => { showHistory = true }" />
            <InfoModal :show="showInfo" :onClose="() => { showInfo = false }" />
            <HistoryModal :show="showHistory" :history="history" :onClose="() => { showHistory = false }"
                :onSelect="(video: YouTubePlaylistItem) => { currentVideo = video; showHistory = false }" />
        </div>
    </div>
</template>
