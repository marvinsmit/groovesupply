<script setup lang="ts">
import {
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue';

defineProps<{
    onClose: () => void
}>()
</script>

<template>
    <TransitionRoot :show="true" :appear="true" as="template">
        <div as="div" @close="onClose" class="relative z-10">
            <TransitionChild as="div" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <img class="fixed inset-0 w-full h-full object-cover object-center" src="../assets/images/welcome-bg-2.jpg" />
                <div class="fixed inset-0 bg-black/75">
                </div>
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4">
                    <TransitionChild as="div" enter="duration-300 ease-out" enter-from="opacity-0 scale-90"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-90">
                        <div
                            class="w-full max-w-lg overflow-hidden rounded-md bg-white p-4 flex flex-col gap-4 transition-all">
                            <div as="h3" class="text-lg font-medium leading-6 text-zinc-900">
                                GrooveSupply
                            </div>
                            <div>
                                <p class="text-sm/6">
                                    GrooveSupply is a hobby project born from the love of live music and late-night
                                    YouTube rabbit holes. It's your daily dose of hidden gems, festival energy, and
                                    unforgettable stage moments. No endless scrolling — just shuffle and let the groove
                                    take over.
                                </p>
                            </div>
                            <button type="button"
                                class="rounded-md bg-indigo-500 hover:bg-indigo-700 text-white font-medium tracking-wide py-2 px-4 transition-all"
                                @click="onClose">
                                Let's go!
                            </button>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </div>
    </TransitionRoot>
</template>