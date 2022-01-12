#!/bin/bash
#requires ffmpeg

for file in /path/to/files/*.aiff
do
    out="$(basename -s aiff $file)"
  ./ffmpeg.exe -i $(basename $file) -af loudnorm,silenceremove=start_periods=1:start_silence=0.02:start_threshold=-40dB,afade=out:st=3:d=1.5 ${out}mp3
done
