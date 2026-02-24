<script setup lang="ts">
import {
    Dialog,
    DialogDescription,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue';

defineProps<{
    show: boolean
    onClose: () => void
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
                                GrooveSupply
                            </DialogTitle>
                            <DialogDescription>
                                <p class="text-sm/6">
                                    GrooveSupply is a hobby project born from the love of live music and late-night
                                    YouTube rabbit holes. It's your daily dose of hidden gems, festival energy, and
                                    unforgettable stage moments. No endless scrolling — just shuffle and let the groove
                                    take over.
                                </p>
                                <a class="flex gap-2 items-center mt-2 text-sm/6 text-zinc-900"
                                    href="https://github.com/marvinsmit/groovesupply" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-github" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                    Check it out on GitHub
                                </a>
                            </DialogDescription>
                            <button type="button"
                                class="rounded-md bg-indigo-500 hover:bg-indigo-700 text-white font-medium tracking-wide py-2 px-4 transition-all"
                                @click="onClose">
                                Let's go!
                            </button>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>