input.onButtonPressed(Button.A, function () {
    if (note_playing == 0) {
        note_playing = 1
        if (randint(0, 10) > 5) {
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Whole))
        } else {
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.AcousticSnare)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.AcousticSnare)
            music.rest(music.beat(BeatFraction.Half))
        }
        if (randint(0, 10) > 5) {
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.AcousticSnare)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.HandClap)
            music.rest(music.beat(BeatFraction.Quarter))
        } else {
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.AcousticSnare)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.AcousticSnare)
            music.rest(music.beat(BeatFraction.Half))
        }
        note_playing = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (note_playing == 0) {
        note_playing = 1
        if (randint(0, 10) > 5) {
            midi.playDrum(DrumSound.AcousticSnare)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.AcousticSnare)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.AcousticBassDrum)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.HandClap)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.HandClap)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.AcousticSnare)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Quarter))
        } else {
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.AcousticSnare)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Half))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.AcousticSnare)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.BassDrum1)
            music.rest(music.beat(BeatFraction.Half))
        }
        note_playing = 0
    }
})
let note_playing = 0
note_playing = 0
midi.useRawSerial()
basic.forever(function () {
	
})
