
import React, { useRef, useEffect, useState } from 'react'
import { Score } from './VexflowReact/vexflow-react'
import './App.css';
import { PlayStave } from './PlayStave/play-stave';
import { parseMidi } from './helpers/parse-midi'
const midifile = require('./assets/melody2.mid')


const change = [
  ['g3', 'd4', 'e4', 'e4'],
  ['g3', 'd4', 'e4', 'e4'],
  ['c3', 'd4', 'e4', 'f4'],
]


function App() {

  const [state, setState] = useState([
    ['g3', 'a4', 'b4', 'c4'],
    ['c3', 'd4', 'e4', 'f4'],
    ['c3', 'd4', 'e4', 'f4'],
  ]);

  useEffect(() => {
    (async () => {
      console.time("d")
      const tracks = await parseMidi(midifile)
      console.timeEnd("d")
      console.log(tracks)
    })();
  })

  function changeState() {
    setState(prev => change)
  }

  const w = window.innerWidth / 2

  return (
    <div className="App">
      <button onClick={changeState}>change</button>
      <PlayStave></PlayStave>
      <Score
        staves={state} width={w} timeSignature={'4/4'}
      />

    </div>
  );
}


export default App;
