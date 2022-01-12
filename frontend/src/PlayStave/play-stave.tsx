import { useEffect, useState } from 'react'
const soundfile = require('../assets/Piano.mf.C4_cut.mp3')

async function loadSound(globalAudioContext: AudioContext) {

    // const audioContext = new AudioContext();
    
    // Fetch MP3 from URL
    const resp =  await fetch(soundfile);

    console.log(resp)
    
    // Turn into an array buffer of raw binary data
    const buf = await resp.arrayBuffer();
    
    // Decode the entire binary MP3 into an AudioBuffer
    return await globalAudioContext.decodeAudioData(buf);
    
  }
  
  async function playSound(audioContext: AudioContext, audioBuffer: AudioBuffer) {

    // Ensure we are in a resumed state
    await audioContext.resume();
  
    // Now create a new "Buffer Source" node for playing AudioBuffers
    const source = audioContext.createBufferSource();
    
    // Connect to destination
    source.connect(audioContext.destination);
    
    // Assign the loaded buffer
    source.buffer = audioBuffer;
    
    // Start (zero = play immediately)
    source.start(0);
  }

export function PlayStave() {


    const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null)
    const [audioContext] = useState(new AudioContext())

    useEffect(() => {
        ;(async () => {
            const audioBuffer = await loadSound(audioContext);
            setAudioBuffer(audioBuffer)
        })();
    }, [audioContext])

    async function playStave() {
        if (audioBuffer != null)
        await playSound(audioContext, audioBuffer)
    }

    return (
        <div>
            <button onClick={playStave}>Play</button>
        </div>
    )
}