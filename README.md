# GrooveSupply

GrooveSupply is a small hobby project built out of a genuine love for live music. It’s a shuffle-based YouTube playlist experience that delivers a daily dose of hidden live music gems — from intimate studio sessions to electrifying festival performances.

No recommendation algorithm. No endless scrolling.  
Just press shuffle and let the groove surprise you.

Check it out on https://groovesupply.nl/

## About the Project

Over the years, I collected a large playlist of live performances on YouTube. Instead of manually picking videos or relying on YouTube’s suggestions, I wanted a focused experience:

- A true shuffle mechanism  
- Automatic playback  
- Seamless “auto next” when a video ends  
- A persistent watch history  
- The ability to resume where I left off  

GrooveSupply started as a fun side project and evolved into a frontend showcase built with a modern Vue/Nuxt stack.

## Tech Stack

- Nuxt 3  
- Vue 3  
- TypeScript  
- TailwindCSS  
- YouTube Data API v3  
- YouTube IFrame Player API  
- LocalStorage for client-side persistence  

## Features

- Embedded YouTube player with autoplay  
- Automatic next video when playback ends  
- Smart shuffle (prioritizes unseen videos)  
- Watch history with titles and thumbnails  
- Resume playback from last session  
- Fully typed state management  
- Clean, dark-focused UI  

## Architecture Overview

1. The full playlist is fetched via the YouTube Data API (with pagination support).
2. Videos are normalized into a typed internal model.
3. Shuffle logic prioritizes unseen videos before repeating.
4. Playback is handled using the official YouTube IFrame API.
5. Player state changes are observed to trigger automatic transitions.
6. History and watched state are persisted using `localStorage`.

The project intentionally avoids heavy wrapper libraries in favor of direct API integration, making script loading, event handling, and client-only rendering explicit and controlled.

## What This Project Demonstrates

- API integration and pagination handling  
- SSR-safe third-party script loading in Nuxt  
- Event-driven video control  
- Typed state modeling with TypeScript  
- Local persistence strategies  
- Component-driven UI architecture  
- Clean separation of concerns (composables, components, types)  

## Philosophy

GrooveSupply isn’t meant to replace streaming platforms.  
It’s a personal tool for rediscovering performances that deserve attention.

It’s about the spontaneity of shuffle.  
It’s about the energy of live music.  
It’s about letting the stage lights turn on without knowing what comes next.
