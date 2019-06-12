# Nero Bottom - Widgets

![Nero - Bottom](images/nero-bottom.jpg)

## Chunkwm / macOS spaces

Provides current macOS _space_ ID and name, and [chunkwm](https://github.com/koekeishiya/chunkwm) layout mode.

Examples: `[04-cod]: bsp` / `[01-term]: mon` / `[01-ukw]: flo`

Amount of spaces, and their name can be customized in `chunkwm.sh`.

## MPC Status

Provides status (playing/paused/stopped) of [mpc](https://musicpd.org/clients/mpc/) plus artist, and song name.

Examples: `○ Dark Tranquillity - Encircled` / `‣ Dark Tranquillity - Encircled` / `○ mpc stopped...`

The artist/song label is truncated via `css` after `220px`.

## Day Progress (%)

Provides the percentage of the day elapsed. Wake up and bed time can be both customized in `day-progress.jsx`.
