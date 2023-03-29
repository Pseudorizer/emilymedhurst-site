#!/bin/sh

FILES=$(find "$(pwd)/src" -name '*.svx' -exec printf '"%s", ' {} + | sed 's/, $//')

if [ -z "$FILES" ]; then
  exit
fi

sed -i "/adapter: vercel()/a\ \ prerender: {entries: [$FILES],}," ./svelte.config.js
