# 🎶 GrooveSupply

**GrooveSupply** is a small hobby project built out of pure love for live music.  
It’s a shuffle-based YouTube playlist experience that serves you a daily dose of hidden live music gems — from intimate acoustic sessions to explosive festival performances.

No algorithms. No charts.  Just press shuffle and let the groove surprise you.

## ✨ Why I Built This

I’ve collected a large playlist of live performances over the years.  
Instead of endlessly scrolling through it, I wanted:

- 🎲 A true shuffle experience  
- 📺 Seamless autoplay  
- 🔁 Automatic “next” when a video ends  
- 🕘 A watch history to revisit great moments  
- 💾 Resume where you left off  

GrooveSupply started as a fun side project — and turned into a showcase of modern frontend architecture.

## 🧱 Tech Stack

Built with:

- Nuxt 3
- Vue 3
- TypeScript
- TailwindCSS
- YouTube IFrame Player API
- LocalStorage for persistence

## 🚀 Features

- 🎬 Embedded YouTube player
- ▶️ Autoplay on load
- ⏭ Auto-next when a video ends
- 🎲 Smart shuffle
- 🕘 Watch history with titles & thumbnails
- 💾 Persistent state using `localStorage`
- 💅 Clean, modern UI
- 🌙 Dark-mode focused design

## 🧠 How It Works

1. The full YouTube playlist is fetched via the **YouTube Data API (v3)**.
2. Videos are normalized into a typed internal format.
3. Shuffle logic selects unseen videos first.
4. Playback is handled using the official **YouTube IFrame API**.
5. When a video ends, the app automatically selects and loads the next one.
6. History and watched state are stored locally so you can resume later.
