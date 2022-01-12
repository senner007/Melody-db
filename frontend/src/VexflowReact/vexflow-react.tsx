import React, { useRef, useEffect } from 'react'
import VexFlow from 'vexflow'
import { IStaves } from "./IStaves" 

const VF = VexFlow.Flow
const { Formatter, Renderer, Stave, StaveNote } = VF

const clefWidth = 30;
const timeWidth = 30;


export function Score({
    staves = [],
    clef = 'treble',
    timeSignature = '4/4',
    width = 450,
    height = 150,
}: IStaves) {

    const container = useRef<HTMLDivElement>(null)
    const rendererRef = useRef<VexFlow.Flow.Renderer>()

    useEffect(() => {
        const containerCurrent = container.current
        if (containerCurrent == null) {
            return
        }

        rendererRef.current = new Renderer(
            containerCurrent,
            Renderer.Backends.SVG
        )

        const renderer = rendererRef.current
        renderer.resize(width, height)
        const context = renderer.getContext()

        context.setFont('Arial', 10).setBackgroundFillStyle('#eed')
        const clefAndTimeWidth = (clef ? clefWidth : 0) + (timeSignature ? timeWidth : 0);
        const staveWidth = (width - clefAndTimeWidth) / staves.length

        let currX = 0
        staves.forEach((notes: Array<any>, i) => {
            const stave = new Stave(currX, 0, staveWidth)
            if (i === 0) {
                stave.setWidth(staveWidth + clefAndTimeWidth)
                clef && stave.addClef(clef);
                timeSignature && stave.addTimeSignature(timeSignature);
            }
            currX += stave.getWidth()
            stave.setContext(context).draw()

            const processedNotes = notes
                .map(note => (typeof note === 'string' ? { key: note } : note))
                .map(note =>
                    Array.isArray(note) ? { key: note[0], duration: note[1] } : note
                )
                .map(({ key, ...rest }) =>
                    typeof key === 'string'
                        ? {
                            key: key.includes('/') ? key : `${key[0]}/${key.slice(1)}`,
                            ...rest,
                        }
                        : rest
                )
                .map(
                    ({ key, keys, duration = 'q' }) =>
                        new StaveNote({
                            keys: key ? [key] : keys,
                            duration: String(duration),
                        })
                )
            Formatter.FormatAndDraw(context, stave, processedNotes, {
                auto_beam: true,
                align_rests: true
            })
        })

        return function cleanup() {
            containerCurrent.innerHTML = "";
        };

    })

    return <div ref={container} />
}