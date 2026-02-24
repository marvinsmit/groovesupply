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