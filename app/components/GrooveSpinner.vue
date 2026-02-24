<script setup lang="ts">
import {
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue';
</script>
<template>
    <TransitionRoot appear show as="template">
        <div class="fixed inset-0 z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/75" />
            </TransitionChild>
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-90"
                enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-90">
                <div class="w-full h-full flex gap-4 flex-col items-center justify-center">
                    <div class="relative">
                        <div
                            class="w-24 h-24 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin">
                        </div>
                    </div>
                    <h2 class="text-3xl font-bold tracking-wide text-white animate-pulse">
                        GrooveSupply!
                    </h2>
                </div>
            </TransitionChild>
        </div>
    </TransitionRoot>

</template>