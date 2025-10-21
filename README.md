# Tuna Song Tracker in Preact - TSTP

## Simple app made in Preact to display the latest listened song with [Tuna](https://obsproject.com/forum/resources/tuna.843/)
<img width="914" height="289" alt="image" src="https://github.com/user-attachments/assets/bd7da308-e6e7-4525-bcc7-0ae68871ee56" />

## Current status
This project was made in like 3 hours over two separated days using Vite create-preact.  
Cleanup needs to be done to remove stuff remaining from the create app.  
This tracker doesn't have the intelligence yet to know if a song is still playing, and because of that it will remains on the latest played song forever.

## Installation
- First you need [Tuna](https://obsproject.com/forum/resources/tuna.843/) setup in OBS.
- Enable the Tuna server output on port 1608
- `git clone git@github.com:Pefouk/tuna-song-tracker-preact.git`
- `npm install`
- `npm run build`
- `npm run preview`
- Server will be up and running at `http://localhost:5173`

## Dev
- First you need [Tuna](https://obsproject.com/forum/resources/tuna.843/) setup in OBS.
- Enable the Tuna server output on port 1608
- `git clone git@github.com:Pefouk/tuna-song-tracker-preact.git`
- `npm install`
- `npm run dev`
- Server will be up and running at `http://localhost:4173`

## Suported sources
- Last.fm
