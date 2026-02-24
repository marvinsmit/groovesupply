<script setup lang="ts">
import {
    Dialog,
    DialogDescription,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue';
import type { YouTubePlaylistItem } from '~/types/youtube';

defineProps<{
    show: boolean
    onClose: () => void
    onSelect: (video: YouTubePlaylistItem) => void;
    history: Set<YouTubePlaylistItem>
}>()
</script>

<template>
    <TransitionRoot appear :show="show" as="template">
        <Dialog as="div" @close="onClose" class="relative z-10">
            <TransitionChild as="div" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/75" />
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4">
                    <TransitionChild as="div" enter="duration-300 ease-out" enter-from="opacity-0 scale-90"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-90">
                        <DialogPanel
                            class="w-full max-w-lg overflow-hidden rounded-md bg-white p-4 flex flex-col gap-4 transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-zinc-900">
                                History
                            </DialogTitle>
                            <DialogDescription>
                                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pr-2 max-h-80 overflow-y-auto">
                                    <div v-for="item in Array.from(history).reverse()" :key="item.snippet.title"
                                        class="flex flex-col gap-2 text-xs text-zinc-700 hover:text-zinc-900 cursor-pointer"
                                        @click="onSelect(item)">
                                        <img :src="item.snippet.thumbnails.default.url" class="rounded-md" />
                                        <span class="h-8 overflow-hidden line-clamp-2 text-ellipsis">{{ item.snippet.title }}</span>
                                    </div>
                                </div   >
                            </DialogDescription>
                            <button type="button"
                                class="rounded-md bg-indigo-500 hover:bg-indigo-700 text-white font-medium tracking-wide py-2 px-4 transition-all"
                                @click="onClose">
                                Got it, thanks!
                            </button>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>