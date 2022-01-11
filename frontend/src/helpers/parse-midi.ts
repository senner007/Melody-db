const { Midi } = require('@tonejs/midi')

interface ITrack {
    notes: Array<INote>
}

interface INote {
    name: string;
    bars: number;
}

export async function parseMidi(path: string) {
    const midi = await Midi.fromUrl(path)
    //the file name decoded from the first track
    //get the tracks
    const tracks = midi.tracks.map((track: ITrack) => {
        //tracks have notes and controlChanges

        //notes are an array
        const notes = track.notes.map((note: INote) => {
            return [note.name, note.bars]
        })
        return notes
    })
    return tracks
}