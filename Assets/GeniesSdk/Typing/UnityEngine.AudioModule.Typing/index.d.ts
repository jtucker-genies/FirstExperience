
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine' {
    import * as System from 'System'
    import * as UnityEngine_AudioSettings from 'UnityEngine.AudioSettings'
    import * as UnityEngine_Audio from 'UnityEngine.Audio'
    import * as UnityEngine_AudioClip from 'UnityEngine.AudioClip'
    import * as Unity_Collections from 'Unity.Collections'

    /**
    * Controls the global audio settings from script.
    */
    class AudioSettings extends System.Object {

        /**
        * Returns the speaker mode capability of the current audio driver. (Read Only)
        */
        public static get driverCapabilities(): AudioSpeakerMode;
        /**
        * AudioSettings.speakerMode is deprecated. Use AudioSettings.GetConfiguration and AudioSettings.Reset to adjust audio settings instead.
        */
        public static get speakerMode(): AudioSpeakerMode;
        public static set speakerMode(value: AudioSpeakerMode);
        /**
        * Returns the current time of the audio system.
        */
        public static get dspTime(): double;
        /**
        * Get the mixer's current output rate.
        */
        public static get outputSampleRate(): int;
        public static set outputSampleRate(value: int);

        public constructor ()
        /**
        * Get the mixer's buffer size in samples.
        * @param bufferLength Is the length of each buffer in the ring buffer.
        * @param numBuffers Is number of buffers.
        */
        public static GetDSPBufferSize ($bufferLength: $Ref<int>, $numBuffers: $Ref<int>) : void
        /**
        * Returns the current configuration of the audio device and system. The values in the struct may then be modified and reapplied via AudioSettings.Reset.
        * @returns The new configuration to be applied.
        */
        public static GetConfiguration () : AudioConfiguration
        /**
        * Changes the device configuration and invokes the AudioSettings.OnAudioConfigurationChanged delegate with the argument deviceWasChanged=false. There's no guarantee that the exact settings specified are used, but Unity automatically uses the closest match that it supports. Note: This can cause main thread stalls if AudioSettings.Reset is called when objects are loading asynchronously.
        * @param config The new configuration to be used.
        * @returns True if all settings could be successfully applied.
        */
        public static Reset ($config: AudioConfiguration) : boolean
        public static add_OnAudioConfigurationChanged ($value: UnityEngine_AudioSettings.AudioConfigurationChangeHandler) : void
        public static remove_OnAudioConfigurationChanged ($value: UnityEngine_AudioSettings.AudioConfigurationChangeHandler) : void
    }

    /**
    * Specifies the current properties or desired properties to be set for the audio system.
    */
    class AudioConfiguration extends System.ValueType {

        /**
        * The current speaker mode used by the audio output device.
        */
        public speakerMode : AudioSpeakerMode
        /**
        * The length of the DSP buffer in samples determining the latency of sounds by the audio output device.
        */
        public dspBufferSize : int
        /**
        * The current sample rate of the audio output device used.
        */
        public sampleRate : int
        /**
        * The current maximum number of simultaneously audible sounds in the game.
        */
        public numRealVoices : int
        /**
        * The  maximum number of managed sounds in the game. Beyond this limit sounds will simply stop playing.
        */
        public numVirtualVoices : int

    }

    /**
    * These are speaker types defined for use with AudioSettings.speakerMode.
    */
    enum AudioSpeakerMode {
        Raw = 0,
        Mono = 1,
        Stereo = 2,
        Quad = 3,
        Surround = 4,
        Mode5point1 = 5,
        Mode7point1 = 6,
        Prologic = 7 
    }

    /**
    * A representation of audio sources in 3D.
    */
    class AudioSource extends AudioBehaviour {

        /**
        * The volume of the audio source (0.0 to 1.0).
        */
        public get volume(): float;
        public set volume(value: float);
        /**
        * The pitch of the audio source.
        */
        public get pitch(): float;
        public set pitch(value: float);
        /**
        * Playback position in seconds.
        */
        public get time(): float;
        public set time(value: float);
        /**
        * Playback position in PCM samples.
        */
        public get timeSamples(): int;
        public set timeSamples(value: int);
        /**
        * The default AudioClip to play.
        */
        public get clip(): AudioClip;
        public set clip(value: AudioClip);
        /**
        * The target group to which the AudioSource should route its signal.
        */
        public get outputAudioMixerGroup(): UnityEngine_Audio.AudioMixerGroup;
        public set outputAudioMixerGroup(value: UnityEngine_Audio.AudioMixerGroup);
        /**
        * Is the clip playing right now (Read Only)?
        */
        public get isPlaying(): boolean;
        /**
        * True if all sounds played by the AudioSource (main sound started by Play() or playOnAwake as well as one-shots) are culled by the audio system.
        */
        public get isVirtual(): boolean;
        /**
        * Is the audio clip looping?
        */
        public get loop(): boolean;
        public set loop(value: boolean);
        /**
        * This makes the audio source not take into account the volume of the audio listener.
        */
        public get ignoreListenerVolume(): boolean;
        public set ignoreListenerVolume(value: boolean);
        /**
        * If set to true, the audio source will automatically start playing on awake.
        */
        public get playOnAwake(): boolean;
        public set playOnAwake(value: boolean);
        /**
        * Allows AudioSource to play even though AudioListener.pause is set to true. This is useful for the menu element sounds or background music in pause menus.
        */
        public get ignoreListenerPause(): boolean;
        public set ignoreListenerPause(value: boolean);
        /**
        * Whether the Audio Source should be updated in the fixed or dynamic update.
        */
        public get velocityUpdateMode(): AudioVelocityUpdateMode;
        public set velocityUpdateMode(value: AudioVelocityUpdateMode);
        /**
        * Pans a playing sound in a stereo way (left or right). This only applies to sounds that are Mono or Stereo.
        */
        public get panStereo(): float;
        public set panStereo(value: float);
        /**
        * Sets how much this AudioSource is affected by 3D spatialisation calculations (attenuation, doppler etc). 0.0 makes the sound full 2D, 1.0 makes it full 3D.
        */
        public get spatialBlend(): float;
        public set spatialBlend(value: float);
        /**
        * Enables or disables spatialization.
        */
        public get spatialize(): boolean;
        public set spatialize(value: boolean);
        /**
        * Determines if the spatializer effect is inserted before or after the effect filters.
        */
        public get spatializePostEffects(): boolean;
        public set spatializePostEffects(value: boolean);
        /**
        * The amount by which the signal from the AudioSource will be mixed into the global reverb associated with the Reverb Zones.
        */
        public get reverbZoneMix(): float;
        public set reverbZoneMix(value: float);
        /**
        * Bypass effects (Applied from filter components or global listener filters).
        */
        public get bypassEffects(): boolean;
        public set bypassEffects(value: boolean);
        /**
        * When set global effects on the AudioListener will not be applied to the audio signal generated by the AudioSource. Does not apply if the AudioSource is playing into a mixer group.
        */
        public get bypassListenerEffects(): boolean;
        public set bypassListenerEffects(value: boolean);
        /**
        * When set doesn't route the signal from an AudioSource into the global reverb associated with reverb zones.
        */
        public get bypassReverbZones(): boolean;
        public set bypassReverbZones(value: boolean);
        /**
        * Sets the Doppler scale for this AudioSource.
        */
        public get dopplerLevel(): float;
        public set dopplerLevel(value: float);
        /**
        * Sets the spread angle (in degrees) of a 3d stereo or multichannel sound in speaker space.
        */
        public get spread(): float;
        public set spread(value: float);
        /**
        * Sets the priority of the AudioSource.
        */
        public get priority(): int;
        public set priority(value: int);
        /**
        * Un- / Mutes the AudioSource. Mute sets the volume=0, Un-Mute restore the original volume.
        */
        public get mute(): boolean;
        public set mute(value: boolean);
        /**
        * Within the Min distance the AudioSource will cease to grow louder in volume.
        */
        public get minDistance(): float;
        public set minDistance(value: float);
        /**
        * (Logarithmic rolloff) MaxDistance is the distance a sound stops attenuating at.
        */
        public get maxDistance(): float;
        public set maxDistance(value: float);
        /**
        * Sets/Gets how the AudioSource attenuates over distance.
        */
        public get rolloffMode(): AudioRolloffMode;
        public set rolloffMode(value: AudioRolloffMode);

        private constructor ()
        public Play () : void
        /**
        * Plays the clip.
        * @param delay Deprecated. Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
        */
        public Play ($delay: bigint) : void
        /**
        * Plays the clip with a delay specified in seconds. Users are advised to use this function instead of the old Play(delay) function that took a delay specified in samples relative to a reference rate of 44.1 kHz as an argument.
        * @param delay Delay time specified in seconds.
        */
        public PlayDelayed ($delay: float) : void
        /**
        * Plays the clip at a specific time on the absolute time-line that AudioSettings.dspTime reads from.
        * @param time Time in seconds on the absolute time-line that AudioSettings.dspTime refers to for when the sound should start playing.
        */
        public PlayScheduled ($time: double) : void
        /**
        * Plays an AudioClip, and scales the AudioSource volume by volumeScale.
        * @param clip The clip being played.
        * @param volumeScale The scale of the volume. Unity automatically clamps negative scales to zero. Note: Scales larger than one might cause clipping.
        */
        public PlayOneShot ($clip: AudioClip) : void
        /**
        * Plays an AudioClip, and scales the AudioSource volume by volumeScale.
        * @param clip The clip being played.
        * @param volumeScale The scale of the volume. Unity automatically clamps negative scales to zero. Note: Scales larger than one might cause clipping.
        * @methodSwap PlayOneShot_EBB7509C_H4909109B
        */
        public PlayOneShot ($clip: AudioClip, $volumeScale: float) : void
        /**
        * Changes the time at which a sound that has already been scheduled to play will start.
        * @param time Time in seconds.
        */
        public SetScheduledStartTime ($time: double) : void
        /**
        * Changes the time at which a sound that has already been scheduled to play will end. Notice that depending on the timing not all rescheduling requests can be fulfilled.
        * @param time Time in seconds.
        */
        public SetScheduledEndTime ($time: double) : void
        /**
        * Stops playing the clip.
        */
        public Stop () : void
        /**
        * Pauses playing the clip.
        */
        public Pause () : void
        /**
        * Unpause the paused playback of this AudioSource.
        */
        public UnPause () : void
        /**
        * Plays an AudioClip at a given position in world space.
        * @param clip Audio data to play.
        * @param position Position in world space from which sound originates.
        * @param volume Playback volume.
        */
        public static PlayClipAtPoint ($clip: AudioClip, $position: Vector3) : void
        /**
        * Plays an AudioClip at a given position in world space.
        * @param clip Audio data to play.
        * @param position Position in world space from which sound originates.
        * @param volume Playback volume.
        * @methodSwap PlayClipAtPoint_EBB7509C_H5F7485F0
        */
        public static PlayClipAtPoint ($clip: AudioClip, $position: Vector3, $volume: float) : void
        /**
        * Set the custom curve for the given AudioSourceCurveType.
        * @param type The curve type that should be set.
        * @param curve The curve that should be applied to the given curve type.
        */
        public SetCustomCurve ($type: AudioSourceCurveType, $curve: AnimationCurve) : void
        /**
        * Get the current custom curve for the given AudioSourceCurveType.
        * @param type The curve type to get.
        * @returns The custom AnimationCurve corresponding to the given curve type.
        */
        public GetCustomCurve ($type: AudioSourceCurveType) : AnimationCurve
        /**
        * Provides a block of the currently playing source's output data.
        * @param samples The array to populate with audio samples. Its length must be a power of 2.
        * @param channel The channel to sample from.
        */
        public GetOutputData ($samples: float[], $channel: int) : void
        /**
        * Provides a block of the currently playing audio source's spectrum data.
        * @param samples The array to populate with audio samples. Its length must be a power of 2.
        * @param channel The channel to sample from.
        * @param window The FFTWindow type to use when sampling.
        */
        public GetSpectrumData ($samples: float[], $channel: int, $window: FFTWindow) : void
        /**
        * Sets a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
        * @param index Zero-based index of user-defined parameter to be set.
        * @param value New value of the user-defined parameter.
        * @returns True, if the parameter could be set.
        */
        public SetSpatializerFloat ($index: int, $value: float) : boolean
        /**
        * Reads a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
        * @param index Zero-based index of user-defined parameter to be read.
        * @param value Return value of the user-defined parameter that is read.
        * @returns True, if the parameter could be read.
        */
        public GetSpatializerFloat ($index: int, $value: $Ref<float>) : boolean
        /**
        * Reads a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
        * @param index Zero-based index of user-defined parameter to be read.
        * @param value Return value of the user-defined parameter that is read.
        * @returns True, if the parameter could be read.
        */
        public GetAmbisonicDecoderFloat ($index: int, $value: $Ref<float>) : boolean
        /**
        * Sets a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
        * @param index Zero-based index of user-defined parameter to be set.
        * @param value New value of the user-defined parameter.
        * @returns True, if the parameter could be set.
        */
        public SetAmbisonicDecoderFloat ($index: int, $value: float) : boolean
    }

    class AudioBehaviour extends Behaviour {

        private constructor ()
    }

    /**
    * Behaviours are Components that can be enabled or disabled.
    */
    interface Behaviour {

    }

    /**
    * Base class for everything attached to a GameObject.
    */
    interface Component {

    }

    /**
    * Base class for all objects Unity can reference.
    */
    interface Object {

    }

    /**
    * A container for audio data.
    */
    class AudioClip extends Object {

        /**
        * The length of the audio clip in seconds. (Read Only)
        */
        public get length(): float;
        /**
        * The length of the audio clip in samples. (Read Only)
        */
        public get samples(): int;
        /**
        * The number of channels in the audio clip. (Read Only)
        */
        public get channels(): int;
        /**
        * The sample frequency of the clip in Hertz. (Read Only)
        */
        public get frequency(): int;
        /**
        * The load type of the clip (read-only).
        */
        public get loadType(): AudioClipLoadType;
        /**
        * Preloads audio data of the clip when the clip asset is loaded. When this flag is off, scripts have to call AudioClip.LoadAudioData() to load the data before the clip can be played. Properties like length, channels and format are available before the audio data has been loaded.
        */
        public get preloadAudioData(): boolean;
        /**
        * Returns true if this audio clip is ambisonic (read-only).
        */
        public get ambisonic(): boolean;
        /**
        * Corresponding to the "Load In Background" flag in the inspector, when this flag is set, the loading will happen delayed without blocking the main thread.
        */
        public get loadInBackground(): boolean;
        /**
        * Returns the current load state of the audio data associated with an AudioClip.
        */
        public get loadState(): AudioDataLoadState;

        /**
        * Loads the audio data of a clip. Clips that have "Preload Audio Data" set will load the audio data automatically.
        * @returns Returns true if loading succeeded.
        */
        public LoadAudioData () : boolean
        /**
        * Unloads the audio data associated with the clip. This works only for AudioClips that are based on actual sound file assets.
        * @returns Returns false if unloading failed.
        */
        public UnloadAudioData () : boolean
        /**
        * Fills an array with sample data from the clip.
        */
        public GetData ($data: float[], $offsetSamples: int) : boolean
        /**
        * Set sample data in a clip.
        */
        public SetData ($data: float[], $offsetSamples: int) : boolean
        /**
        * Creates a user AudioClip with a name and with the given length in samples, channels and frequency.
        * @param name Name of clip.
        * @param lengthSamples Number of sample frames.
        * @param channels Number of channels per frame.
        * @param frequency Sample frequency of clip.
        * @param _3D Audio clip is played back in 3D.
        * @param stream True if clip is streamed, that is if the pcmreadercallback generates data on the fly.
        * @param pcmreadercallback This callback is invoked to generate a block of sample data. Non-streamed clips call this only once at creation time while streamed clips call this continuously.
        * @param pcmsetpositioncallback This callback is invoked whenever the clip loops or changes playback position.
        * @returns A reference to the created AudioClip.
        * @methodSwap Create_EBB7509C_CE63D9EF
        */
        public static Create ($name: string, $lengthSamples: int, $channels: int, $frequency: int, $stream: boolean) : AudioClip
        /**
        * Creates a user AudioClip with a name and with the given length in samples, channels and frequency.
        * @param name Name of clip.
        * @param lengthSamples Number of sample frames.
        * @param channels Number of channels per frame.
        * @param frequency Sample frequency of clip.
        * @param _3D Audio clip is played back in 3D.
        * @param stream True if clip is streamed, that is if the pcmreadercallback generates data on the fly.
        * @param pcmreadercallback This callback is invoked to generate a block of sample data. Non-streamed clips call this only once at creation time while streamed clips call this continuously.
        * @param pcmsetpositioncallback This callback is invoked whenever the clip loops or changes playback position.
        * @returns A reference to the created AudioClip.
        * @methodSwap Create_EBB7509C_H2EA37343
        */
        public static Create ($name: string, $lengthSamples: int, $channels: int, $frequency: int, $stream: boolean, $pcmreadercallback: UnityEngine_AudioClip.PCMReaderCallback) : AudioClip
        /**
        * Creates a user AudioClip with a name and with the given length in samples, channels and frequency.
        * @param name Name of clip.
        * @param lengthSamples Number of sample frames.
        * @param channels Number of channels per frame.
        * @param frequency Sample frequency of clip.
        * @param _3D Audio clip is played back in 3D.
        * @param stream True if clip is streamed, that is if the pcmreadercallback generates data on the fly.
        * @param pcmreadercallback This callback is invoked to generate a block of sample data. Non-streamed clips call this only once at creation time while streamed clips call this continuously.
        * @param pcmsetpositioncallback This callback is invoked whenever the clip loops or changes playback position.
        * @returns A reference to the created AudioClip.
        * @methodSwap Create_EBB7509C_FE8ECF41
        */
        public static Create ($name: string, $lengthSamples: int, $channels: int, $frequency: int, $stream: boolean, $pcmreadercallback: UnityEngine_AudioClip.PCMReaderCallback, $pcmsetpositioncallback: UnityEngine_AudioClip.PCMSetPositionCallback) : AudioClip
    }

    /**
    * Determines how the audio clip is loaded in.
    */
    enum AudioClipLoadType {
        DecompressOnLoad = 0,
        CompressedInMemory = 1,
        Streaming = 2 
    }

    /**
    * Value describing the current load state of the audio data associated with an AudioClip.
    */
    enum AudioDataLoadState {
        Unloaded = 0,
        Loading = 1,
        Loaded = 2,
        Failed = 3 
    }

    /**
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * This defines the curve type of the different custom curves that can be queried and set within the AudioSource.
    */
    enum AudioSourceCurveType {
        CustomRolloff = 0,
        SpatialBlend = 1,
        ReverbZoneMix = 2,
        Spread = 3 
    }

    /**
    * Store a collection of Keyframes that can be evaluated over time.
    */
    interface AnimationCurve extends System.IEquatable$1<AnimationCurve> {

    }

    /**
    * Spectrum analysis windowing types.
    */
    enum FFTWindow {
        Rectangular = 0,
        Triangle = 1,
        Hamming = 2,
        Hanning = 3,
        Blackman = 4,
        BlackmanHarris = 5 
    }

    /**
    * Describes when an AudioSource or AudioListener is updated.
    */
    enum AudioVelocityUpdateMode {
        Auto = 0,
        Fixed = 1,
        Dynamic = 2 
    }

    /**
    * Rolloff modes that a 3D sound can have in an audio source.
    */
    enum AudioRolloffMode {
        Logarithmic = 0,
        Linear = 1,
        Custom = 2 
    }

    /**
    * The Audio Low Pass Filter passes low frequencies of an AudioSource or all sounds reaching an AudioListener, while removing frequencies higher than the Cutoff Frequency.
    */
    class AudioLowPassFilter extends Behaviour {

        /**
        * Returns or sets the current custom frequency cutoff curve.
        */
        public get customCutoffCurve(): AnimationCurve;
        public set customCutoffCurve(value: AnimationCurve);
        /**
        * Lowpass cutoff frequency in hz. 10.0 to 22000.0. Default = 5000.0.
        */
        public get cutoffFrequency(): float;
        public set cutoffFrequency(value: float);
        /**
        * Determines how much the filter's self-resonance is dampened.
        */
        public get lowpassResonanceQ(): float;
        public set lowpassResonanceQ(value: float);

        private constructor ()
    }

    /**
    * The Audio High Pass Filter passes high frequencies of an AudioSource, and cuts off signals with frequencies lower than the Cutoff Frequency.
    */
    class AudioHighPassFilter extends Behaviour {

        /**
        * Highpass cutoff frequency in hz. 10.0 to 22000.0. Default = 5000.0.
        */
        public get cutoffFrequency(): float;
        public set cutoffFrequency(value: float);
        /**
        * Determines how much the filter's self-resonance isdampened.
        */
        public get highpassResonanceQ(): float;
        public set highpassResonanceQ(value: float);

        private constructor ()
    }

    /**
    * The Audio Reverb Filter takes an Audio Clip and distorts it to create a custom reverb effect.
    */
    class AudioReverbFilter extends Behaviour {

        /**
        * Set/Get reverb preset properties.
        */
        public get reverbPreset(): AudioReverbPreset;
        public set reverbPreset(value: AudioReverbPreset);
        /**
        * Mix level of dry signal in output in millibels (mB). Ranges from -10000.0 to 0.0. Default is 0.
        */
        public get dryLevel(): float;
        public set dryLevel(value: float);
        /**
        * Room effect level at low frequencies in millibels (mB). Ranges from -10000.0 to 0.0. Default is 0.0.
        */
        public get room(): float;
        public set room(value: float);
        /**
        * Room effect high-frequency level re. low frequency level in millibels (mB). Ranges from -10000.0 to 0.0. Default is 0.0.
        */
        public get roomHF(): float;
        public set roomHF(value: float);
        /**
        * Reverberation decay time at low-frequencies in seconds. Ranges from 0.1 to 20.0. Default is 1.0.
        */
        public get decayTime(): float;
        public set decayTime(value: float);
        /**
        * Decay HF Ratio : High-frequency to low-frequency decay time ratio. Ranges from 0.1 to 2.0. Default is 0.5.
        */
        public get decayHFRatio(): float;
        public set decayHFRatio(value: float);
        /**
        * Early reflections level relative to room effect in millibels (mB). Ranges from -10000.0 to 1000.0. Default is -10000.0.
        */
        public get reflectionsLevel(): float;
        public set reflectionsLevel(value: float);
        /**
        * Late reverberation level relative to room effect in millibels (mB). Ranges from -10000.0 to 2000.0. Default is 0.0.
        */
        public get reflectionsDelay(): float;
        public set reflectionsDelay(value: float);
        /**
        * Late reverberation level relative to room effect in millibels (mB). Ranges from -10000.0 to 2000.0. Default is 0.0.
        */
        public get reverbLevel(): float;
        public set reverbLevel(value: float);
        /**
        * Late reverberation delay time relative to first reflection in seconds. Ranges from 0.0 to 0.1. Default is 0.04.
        */
        public get reverbDelay(): float;
        public set reverbDelay(value: float);
        /**
        * Reverberation diffusion (echo density) in percent. Ranges from 0.0 to 100.0. Default is 100.0.
        */
        public get diffusion(): float;
        public set diffusion(value: float);
        /**
        * Reverberation density (modal density) in percent. Ranges from 0.0 to 100.0. Default is 100.0.
        */
        public get density(): float;
        public set density(value: float);
        /**
        * Reference high frequency in hertz (Hz). Ranges from 1000.0 to 20000.0. Default is 5000.0.
        */
        public get hfReference(): float;
        public set hfReference(value: float);
        /**
        * Room effect low-frequency level in millibels (mB). Ranges from -10000.0 to 0.0. Default is 0.0.
        */
        public get roomLF(): float;
        public set roomLF(value: float);
        /**
        * Reference low-frequency in hertz (Hz). Ranges from 20.0 to 1000.0. Default is 250.0.
        */
        public get lfReference(): float;
        public set lfReference(value: float);

        private constructor ()
    }

    /**
    * Reverb presets used by the Reverb Zone class and the audio reverb filter.
    */
    enum AudioReverbPreset {
        Off = 0,
        Generic = 1,
        PaddedCell = 2,
        Room = 3,
        Bathroom = 4,
        Livingroom = 5,
        Stoneroom = 6,
        Auditorium = 7,
        Concerthall = 8,
        Cave = 9,
        Arena = 10,
        Hangar = 11,
        CarpetedHallway = 12,
        Hallway = 13,
        StoneCorridor = 14,
        Alley = 15,
        Forest = 16,
        City = 17,
        Mountains = 18,
        Quarry = 19,
        Plain = 20,
        ParkingLot = 21,
        SewerPipe = 22,
        Underwater = 23,
        Drugged = 24,
        Dizzy = 25,
        Psychotic = 26,
        User = 27 
    }

    /**
    * An enum containing different compression types.
    */
    enum AudioCompressionFormat {
        PCM = 0,
        Vorbis = 1,
        ADPCM = 2,
        MP3 = 3,
        VAG = 4,
        HEVAG = 5,
        XMA = 6,
        AAC = 7,
        GCADPCM = 8,
        ATRAC9 = 9 
    }

    /**
    * Representation of a listener in 3D space.
    */
    class AudioListener extends AudioBehaviour {

        /**
        * Controls the game sound volume (0.0 to 1.0).
        */
        public static get volume(): float;
        public static set volume(value: float);
        /**
        * The paused state of the audio system.
        */
        public static get pause(): boolean;
        public static set pause(value: boolean);
        /**
        * This lets you set whether the Audio Listener should be updated in the fixed or dynamic update.
        */
        public get velocityUpdateMode(): AudioVelocityUpdateMode;
        public set velocityUpdateMode(value: AudioVelocityUpdateMode);

        private constructor ()
        /**
        * Provides a block of the listener (master)'s output data.
        * @param samples The array to populate with audio samples. Its length must be a power of 2.
        * @param channel The channel to sample from.
        */
        public static GetOutputData ($samples: float[], $channel: int) : void
        /**
        * Provides a block of the listener (master)'s spectrum data.
        * @param samples The array to populate with audio samples. Its length must be a power of 2.
        * @param channel The channel to sample from.
        * @param window The FFTWindow type to use when sampling.
        */
        public static GetSpectrumData ($samples: float[], $channel: int, $window: FFTWindow) : void
    }

    /**
    * Reverb Zones are used when you want to create location based ambient effects in the Scene.
    */
    class AudioReverbZone extends Behaviour {

        /**
        * The distance from the centerpoint that the reverb will have full effect at. Default = 10.0.
        */
        public get minDistance(): float;
        public set minDistance(value: float);
        /**
        * The distance from the centerpoint that the reverb will not have any effect. Default = 15.0.
        */
        public get maxDistance(): float;
        public set maxDistance(value: float);
        /**
        * Set/Get reverb preset properties.
        */
        public get reverbPreset(): AudioReverbPreset;
        public set reverbPreset(value: AudioReverbPreset);
        /**
        * Room effect level (at mid frequencies).
        */
        public get room(): int;
        public set room(value: int);
        /**
        * Relative room effect level at high frequencies.
        */
        public get roomHF(): int;
        public set roomHF(value: int);
        /**
        * Relative room effect level at low frequencies.
        */
        public get roomLF(): int;
        public set roomLF(value: int);
        /**
        * Reverberation decay time at mid frequencies.
        */
        public get decayTime(): float;
        public set decayTime(value: float);
        /**
        * High-frequency to mid-frequency decay time ratio.
        */
        public get decayHFRatio(): float;
        public set decayHFRatio(value: float);
        /**
        * Early reflections level relative to room effect.
        */
        public get reflections(): int;
        public set reflections(value: int);
        /**
        * Initial reflection delay time.
        */
        public get reflectionsDelay(): float;
        public set reflectionsDelay(value: float);
        /**
        * Late reverberation level relative to room effect.
        */
        public get reverb(): int;
        public set reverb(value: int);
        /**
        * Late reverberation delay time relative to initial reflection.
        */
        public get reverbDelay(): float;
        public set reverbDelay(value: float);
        /**
        * Reference high frequency (hz).
        */
        public get HFReference(): float;
        public set HFReference(value: float);
        /**
        * Reference low frequency (hz).
        */
        public get LFReference(): float;
        public set LFReference(value: float);
        /**
        * Value that controls the echo density in the late reverberation decay.
        */
        public get diffusion(): float;
        public set diffusion(value: float);
        /**
        * Value that controls the modal density in the late reverberation decay.
        */
        public get density(): float;
        public set density(value: float);

        private constructor ()
    }

    /**
    * The Audio Distortion Filter distorts the sound from an AudioSource or sounds reaching the AudioListener.
    */
    class AudioDistortionFilter extends Behaviour {

        /**
        * Distortion value. 0.0 to 1.0. Default = 0.5.
        */
        public get distortionLevel(): float;
        public set distortionLevel(value: float);

        private constructor ()
    }

    /**
    * The Audio Echo Filter repeats a sound after a given Delay, attenuating the repetitions based on the Decay Ratio.
    */
    class AudioEchoFilter extends Behaviour {

        /**
        * Echo delay in ms. 10 to 5000. Default = 500.
        */
        public get delay(): float;
        public set delay(value: float);
        /**
        * Echo decay per delay. 0 to 1. 1.0 = No decay, 0.0 = total decay (i.e. simple 1 line delay). Default = 0.5.
        */
        public get decayRatio(): float;
        public set decayRatio(value: float);
        /**
        * Volume of original signal to pass to output. 0.0 to 1.0. Default = 1.0.
        */
        public get dryMix(): float;
        public set dryMix(value: float);
        /**
        * Volume of echo signal to pass to output. 0.0 to 1.0. Default = 1.0.
        */
        public get wetMix(): float;
        public set wetMix(value: float);

        private constructor ()
    }

    /**
    * The Audio Chorus Filter takes an Audio Clip and processes it creating a chorus effect.
    */
    class AudioChorusFilter extends Behaviour {

        /**
        * Volume of original signal to pass to output. 0.0 to 1.0. Default = 0.5.
        */
        public get dryMix(): float;
        public set dryMix(value: float);
        /**
        * Volume of 1st chorus tap. 0.0 to 1.0. Default = 0.5.
        */
        public get wetMix1(): float;
        public set wetMix1(value: float);
        /**
        * Volume of 2nd chorus tap. This tap is 90 degrees out of phase of the first tap. 0.0 to 1.0. Default = 0.5.
        */
        public get wetMix2(): float;
        public set wetMix2(value: float);
        /**
        * Volume of 3rd chorus tap. This tap is 90 degrees out of phase of the second tap. 0.0 to 1.0. Default = 0.5.
        */
        public get wetMix3(): float;
        public set wetMix3(value: float);
        /**
        * Chorus delay in ms. 0.1 to 100.0. Default = 40.0 ms.
        */
        public get delay(): float;
        public set delay(value: float);
        /**
        * Chorus modulation rate in hz. 0.0 to 20.0. Default = 0.8 hz.
        */
        public get rate(): float;
        public set rate(value: float);
        /**
        * Chorus modulation depth. 0.0 to 1.0. Default = 0.03.
        */
        public get depth(): float;
        public set depth(value: float);

        private constructor ()
    }

    /**
    * Use this class to record to an AudioClip using a connected microphone.
    */
    class Microphone extends System.Object {

        /**
        * A list of available microphone devices, identified by name.
        */
        public static get devices(): string[];

        public constructor ()
        /**
        * Start Recording with device.
        * @param deviceName The name of the device.
        * @param loop Indicates whether the recording should continue recording if lengthSec is reached, and wrap around and record from the beginning of the AudioClip.
        * @param lengthSec Is the length of the AudioClip produced by the recording.
        * @param frequency The sample rate of the AudioClip produced by the recording.
        * @returns The function returns null if the recording fails to start.
        */
        public static Start ($deviceName: string, $loop: boolean, $lengthSec: int, $frequency: int) : AudioClip
        /**
        * Stops recording.
        * @param deviceName The name of the device.
        */
        public static End ($deviceName: string) : void
        /**
        * Query if a device is currently recording.
        * @param deviceName The name of the device.
        */
        public static IsRecording ($deviceName: string) : boolean
        /**
        * Get the position in samples of the recording.
        * @param deviceName The name of the device.
        */
        public static GetPosition ($deviceName: string) : int
        /**
        * Get the frequency capabilities of a device.
        * @param deviceName The name of the device.
        * @param minFreq Returns the minimum sampling frequency of the device.
        * @param maxFreq Returns the maximum sampling frequency of the device.
        */
        public static GetDeviceCaps ($deviceName: string, $minFreq: $Ref<int>, $maxFreq: $Ref<int>) : void
    }

    /**
    * Allow recording the main output of the game or specific groups in the AudioMixer.
    */
    class AudioRenderer extends System.Object {

        public constructor ()
        /**
        * Enters audio recording mode. After this Unity will output silence until AudioRenderer.Stop is called.
        * @returns True if the engine was switched into output recording mode. False if it is already recording.
        */
        public static Start () : boolean
        /**
        * Exits audio recording mode. After this audio output will be audible again.
        * @returns True if the engine was recording when this function was called.
        */
        public static Stop () : boolean
        /**
        * Returns the number of samples available since the last time AudioRenderer.Render was called. This is dependent on the frame capture rate.
        * @returns Number of samples available since last recorded frame.
        */
        public static GetSampleCountForCaptureFrame () : int
        public static Render ($buffer: Unity_Collections.NativeArray$1<float>) : boolean
    }

    enum WebCamFlags {
        FrontFacing = 1,
        AutoFocusPointSupported = 2 
    }

    /**
    * Enum representing the different types of web camera device.
    */
    enum WebCamKind {
        WideAngle = 1,
        Telephoto = 2,
        ColorAndDepth = 3,
        UltraWideAngle = 4 
    }

    /**
    * A structure describing the webcam device.
    */
    class WebCamDevice extends System.ValueType {

        /**
        * A human-readable name of the device. Varies across different systems.
        */
        public get name(): string;
        /**
        * True if camera faces the same direction a screen does, false otherwise.
        */
        public get isFrontFacing(): boolean;
        /**
        * Property of type WebCamKind denoting the kind of webcam device.
        */
        public get kind(): WebCamKind;
        /**
        * A string identifier used to create a depth data based WebCamTexture.
        */
        public get depthCameraName(): string;
        /**
        * Returns true if the camera supports automatic focusing on points of interest and false otherwise.
        */
        public get isAutoFocusPointSupported(): boolean;
        /**
        * Possible WebCamTexture resolutions for this device.
        */
        public get availableResolutions(): Resolution[];

    }

    /**
    * Represents a display resolution.
    */
    interface Resolution {

    }

    /**
    * WebCam Textures are textures onto which the live video input is rendered.
    */
    class WebCamTexture extends Texture {

        /**
        * Return a list of available devices.
        */
        public static get devices(): WebCamDevice[];
        /**
        * Returns if the camera is currently playing.
        */
        public get isPlaying(): boolean;
        /**
        * Set this to specify the name of the device to use.
        */
        public get deviceName(): string;
        public set deviceName(value: string);
        /**
        * Set the requested frame rate of the camera device (in frames per second).
        */
        public get requestedFPS(): float;
        public set requestedFPS(value: float);
        /**
        * Set the requested width of the camera device.
        */
        public get requestedWidth(): int;
        public set requestedWidth(value: int);
        /**
        * Set the requested height of the camera device.
        */
        public get requestedHeight(): int;
        public set requestedHeight(value: int);
        /**
        * Returns an clockwise angle (in degrees), which can be used to rotate a polygon so camera contents are shown in correct orientation.
        */
        public get videoRotationAngle(): int;
        /**
        * Returns if the texture image is vertically flipped.
        */
        public get videoVerticallyMirrored(): boolean;
        /**
        * Did the video buffer update this frame?
        */
        public get didUpdateThisFrame(): boolean;
        /**
        * This property allows you to set/get the auto focus point of the camera. This works only on Android and iOS devices.
        */
        public get autoFocusPoint(): System.Nullable$1<Vector2>;
        public set autoFocusPoint(value: System.Nullable$1<Vector2>);
        /**
        * This property is true if the texture is based on depth data.
        */
        public get isDepth(): boolean;

        /**
        * Create a WebCamTexture.
        * @param deviceName The name of the video input device to be used.
        * @param requestedWidth The requested width of the texture.
        * @param requestedHeight The requested height of the texture.
        * @param requestedFPS The requested frame rate of the texture.
        */
        public constructor ($deviceName: string, $requestedWidth: int, $requestedHeight: int, $requestedFPS: int)
        /**
        * Create a WebCamTexture.
        * @param deviceName The name of the video input device to be used.
        * @param requestedWidth The requested width of the texture.
        * @param requestedHeight The requested height of the texture.
        * @param requestedFPS The requested frame rate of the texture.
        */
        public constructor ($deviceName: string, $requestedWidth: int, $requestedHeight: int)
        /**
        * Create a WebCamTexture.
        * @param deviceName The name of the video input device to be used.
        * @param requestedWidth The requested width of the texture.
        * @param requestedHeight The requested height of the texture.
        * @param requestedFPS The requested frame rate of the texture.
        */
        public constructor ($deviceName: string)
        /**
        * Create a WebCamTexture.
        * @param deviceName The name of the video input device to be used.
        * @param requestedWidth The requested width of the texture.
        * @param requestedHeight The requested height of the texture.
        * @param requestedFPS The requested frame rate of the texture.
        */
        public constructor ($requestedWidth: int, $requestedHeight: int, $requestedFPS: int)
        /**
        * Create a WebCamTexture.
        * @param deviceName The name of the video input device to be used.
        * @param requestedWidth The requested width of the texture.
        * @param requestedHeight The requested height of the texture.
        * @param requestedFPS The requested frame rate of the texture.
        */
        public constructor ($requestedWidth: int, $requestedHeight: int)
        /**
        * Create a WebCamTexture.
        * @param deviceName The name of the video input device to be used.
        * @param requestedWidth The requested width of the texture.
        * @param requestedHeight The requested height of the texture.
        * @param requestedFPS The requested frame rate of the texture.
        */
        public constructor ()
        /**
        * Starts the camera.
        */
        public Play () : void
        /**
        * Pauses the camera.
        */
        public Pause () : void
        /**
        * Stops the camera.
        */
        public Stop () : void
        /**
        * Gets the pixel color at coordinates (x, y).
        * @param x The x coordinate of the pixel to get. The range is 0 through the (texture width - 1).
        * @param y The y coordinate of the pixel to get. The range is 0 through the (texture height - 1).
        * @returns The pixel color.
        */
        public GetPixel ($x: int, $y: int) : Color
        /**
        * Gets the pixel color data for a mipmap level as Color structs.
        * @returns An array that contains the pixel colors.
        */
        public GetPixels () : Color[]
        /**
        * Gets the pixel color data for part of the texture as Color structs.
        * @param x The starting x position of the section to fetch.
        * @param y The starting y position of the section to fetch.
        * @param blockWidth The width of the section to fetch.
        * @param blockHeight The height of the section to fetch.
        * @returns An array that contains the pixel colors.
        * @methodSwap GetPixels_EBB7509C_H7CC42739
        */
        public GetPixels ($x: int, $y: int, $blockWidth: int, $blockHeight: int) : Color[]
        public GetPixels32 () : Color32[]
        /**
        * Gets the pixel color data for a mipmap level as Color32 structs.
        * @param colors An optional array to write the pixel data to.
        * @returns An array that contains the pixel colors.
        */
        public GetPixels32 ($colors: Color32[]) : Color32[]
    }

    /**
    * Base class for Texture handling.
    */
    interface Texture {

    }

    /**
    * Representation of RGBA colors.
    */
    interface Color extends System.IFormattable, System.IEquatable$1<Color> {

    }

    /**
    * Representation of RGBA colors in 32 bit format.
    */
    interface Color32 extends System.IFormattable {

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IFormattable {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

    interface MulticastDelegate {
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
    }
    var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }

    interface Delegate extends ICloneable, System_Runtime_Serialization.ISerializable {

    }

    interface ICloneable {

    }

    interface IAsyncResult {

    }

    interface AsyncCallback {
        (ar: IAsyncResult) : void; 
        Invoke?: (ar: IAsyncResult) => void;
    }
    var AsyncCallback: { new (func: (ar: IAsyncResult) => void): AsyncCallback; }

    interface IntPtr extends System_Runtime_Serialization.ISerializable, IEquatable$1<IntPtr> {

    }

    interface IEquatable$1<T> {

        Equals? ($other: T) : boolean
    }

    interface Action$1<T> {
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
    }

    interface IDisposable {

    }

    interface Nullable$1<T> {

    }

}

declare module 'UnityEngine.AudioSettings' {
    import * as System from 'System'

    /**
    * A delegate called whenever the global audio settings are changed, either by AudioSettings.Reset or by an external device change such as the OS control panel changing the sample rate or because the default output device was changed, for example when plugging in an HDMI monitor or a USB headset.
    * @param deviceWasChanged True if the change was caused by an device change.
    */
    interface AudioConfigurationChangeHandler {
        (deviceWasChanged: boolean) : void; 
        Invoke?: (deviceWasChanged: boolean) => void;
    }
    var AudioConfigurationChangeHandler: { new (func: (deviceWasChanged: boolean) => void): AudioConfigurationChangeHandler; }

    /**
    * This class encapsulates properties and methods to handle audio output thread on iOS/Android.
    */
    class Mobile {

        public static get muteState(): boolean;
        public static get stopAudioOutputOnMute(): boolean;
        public static set stopAudioOutputOnMute(value: boolean);
        public static get audioOutputStarted(): boolean;

        public static StartAudioOutput () : void
        public static StopAudioOutput () : void
        public static add_OnMuteStateChanged ($value: System.Action$1<boolean>) : void
        public static remove_OnMuteStateChanged ($value: System.Action$1<boolean>) : void
    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

declare module 'UnityEngine.AudioClip' {
    import * as System from 'System'

    /**
    * Delegate called each time AudioClip reads data.
    * @param data Array of floats containing data read from the clip.
    */
    interface PCMReaderCallback {
        (data: float[]) : void; 
        Invoke?: (data: float[]) => void;
    }
    var PCMReaderCallback: { new (func: (data: float[]) => void): PCMReaderCallback; }

    /**
    * Delegate called each time AudioClip changes read position.
    * @param position New position in the audio clip.
    */
    interface PCMSetPositionCallback {
        (position: int) : void; 
        Invoke?: (position: int) => void;
    }
    var PCMSetPositionCallback: { new (func: (position: int) => void): PCMSetPositionCallback; }

}

declare module 'UnityEngine.Audio' {
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_Internal from 'UnityEngine.Internal'
    import * as System from 'System'
    import * as UnityEngine_Playables from 'UnityEngine.Playables'

    /**
    * Object representing a group in the mixer.
    */
    class AudioMixerGroup extends UnityEngine.Object implements UnityEngine_Internal.ISubAssetNotDuplicatable {

        public get audioMixer(): AudioMixer;

    }

    /**
    * AudioMixer asset.
    */
    class AudioMixer extends UnityEngine.Object {

        /**
        * Routing target.
        */
        public get outputAudioMixerGroup(): AudioMixerGroup;
        public set outputAudioMixerGroup(value: AudioMixerGroup);
        /**
        * How time should progress for this AudioMixer. Used during Snapshot transitions.
        */
        public get updateMode(): AudioMixerUpdateMode;
        public set updateMode(value: AudioMixerUpdateMode);

        /**
        * The name must be an exact match.
        * @param name Name of snapshot object to be returned.
        * @returns The snapshot identified by the name.
        */
        public FindSnapshot ($name: string) : AudioMixerSnapshot
        /**
        * Connected groups in the mixer form a path from the mixer's master group to the leaves. This path has the format Master GroupChild of Master GroupGrandchild of Master Group, and so on. For example, in the hierarchy below, the group DROPS has the path MasterWATERDROPS.  To return only the group called DROPS, enter DROPS. The substring MasterAMBIENCE returns three groups, AMBIENCECROWD, AMBIENCEROAD, and AMBIENCE. The substring R would return both ROAD and RIVER.
        * @param subPath Path sub-strings to match with.
        * @returns Groups in the mixer whose paths match the specified search path.
        */
        public FindMatchingGroups ($subPath: string) : AudioMixerGroup[]
        /**
        * Transitions to a weighted mixture of the snapshots specified. This can be used for games that specify the game state as a continuum between states or for interpolating snapshots from a triangulated map location.
        * @param snapshots The set of snapshots to be mixed.
        * @param weights The mix weights for the snapshots specified.
        * @param timeToReach Relative time after which the mixture should be reached from any current state.
        */
        public TransitionToSnapshots ($snapshots: AudioMixerSnapshot[], $weights: float[], $timeToReach: float) : void
        /**
        * Sets the value of the exposed parameter specified. When a parameter is exposed, it is not controlled by mixer snapshots. You can only change the parameter with this function.
        * @param name The name of an exposed Audio Mixer group parameter. To expose a parameter, go to the Audio Mixer group's Inspector window, right click the parameter you want to expose, and choose Expose [parameter name] to script.
        * @param value Use to set the exposed Audio Mixer group parameter to a new value.
        * @returns Returns false if the exposed parameter was not found or snapshots are currently being edited.
        */
        public SetFloat ($name: string, $value: float) : boolean
        /**
        * Resets an exposed parameter to its initial value.
        * @param name Exposed parameter.
        * @returns Returns false if the parameter was not found or could not be set.
        */
        public ClearFloat ($name: string) : boolean
        /**
        * Returns the value of the exposed parameter specified. If the parameter doesn't exist the function returns false. Prior to calling SetFloat and after ClearFloat has been called on this parameter the value returned will be that of the current snapshot or snapshot transition.
        * @param name Name of exposed parameter.
        * @param value Return value of exposed parameter.
        * @returns Returns false if the exposed parameter specified doesn't exist.
        */
        public GetFloat ($name: string, $value: $Ref<float>) : boolean
    }

    /**
    * Object representing a snapshot in the mixer.
    */
    class AudioMixerSnapshot extends UnityEngine.Object implements UnityEngine_Internal.ISubAssetNotDuplicatable {

        public get audioMixer(): AudioMixer;

        /**
        * Performs an interpolated transition towards this snapshot over the time interval specified.
        * @param timeToReach Relative time after which this snapshot should be reached from any current state.
        */
        public TransitionTo ($timeToReach: float) : void
    }

    /**
    * The mode in which an AudioMixer should update its time.
    */
    enum AudioMixerUpdateMode {
        Normal = 0,
        UnscaledTime = 1 
    }

    /**
    * An implementation of IPlayable that controls an AudioClip.
    */
    class AudioClipPlayable extends System.ValueType implements System.IEquatable$1<AudioClipPlayable>, UnityEngine_Playables.IPlayable {

        /**
        * Creates an AudioClipPlayable in the PlayableGraph.
        * @param graph The PlayableGraph that will contain the new AnimationLayerMixerPlayable.
        * @param clip The AudioClip that will be added in the PlayableGraph.
        * @param looping True if the clip should loop, false otherwise.
        * @returns A AudioClipPlayable linked to the PlayableGraph.
        */
        public static Create ($graph: UnityEngine_Playables.PlayableGraph, $clip: UnityEngine.AudioClip, $looping: boolean) : AudioClipPlayable
        public GetHandle () : UnityEngine_Playables.PlayableHandle
        public Equals ($other: AudioClipPlayable) : boolean
        public GetClip () : UnityEngine.AudioClip
        public SetClip ($value: UnityEngine.AudioClip) : void
        public GetLooped () : boolean
        public SetLooped ($value: boolean) : void
        public IsChannelPlaying () : boolean
        public GetStartDelay () : double
        public GetPauseDelay () : double
        /**
        * @methodSwap Seek_EBB7509C_H5422A32D
        */
        public Seek ($startTime: double, $startDelay: double) : void
        /**
        * @methodSwap Seek_EBB7509C_H6544A31F
        */
        public Seek ($startTime: double, $startDelay: double, $duration: double) : void
        public static op_Implicit ($playable: AudioClipPlayable) : UnityEngine_Playables.Playable
        public static op_Explicit ($playable: UnityEngine_Playables.Playable) : AudioClipPlayable
    }

    /**
    * An implementation of IPlayable that controls an audio mixer.
    */
    class AudioMixerPlayable extends System.ValueType implements System.IEquatable$1<AudioMixerPlayable>, UnityEngine_Playables.IPlayable {

        public static Create ($graph: UnityEngine_Playables.PlayableGraph, $inputCount?: int, $normalizeInputVolumes?: boolean) : AudioMixerPlayable
        public GetHandle () : UnityEngine_Playables.PlayableHandle
        public Equals ($other: AudioMixerPlayable) : boolean
        public static op_Implicit ($playable: AudioMixerPlayable) : UnityEngine_Playables.Playable
        public static op_Explicit ($playable: UnityEngine_Playables.Playable) : AudioMixerPlayable
    }

    /**
    * A PlayableBinding that contains information representing an AudioPlayableOutput.
    */
    class AudioPlayableBinding {

        /**
        * Creates a PlayableBinding that contains information representing an AudioPlayableOutput.
        * @param key A reference to a UnityEngine.Object that acts as a key for this binding.
        * @param name The name of the AudioPlayableOutput.
        * @returns Returns a PlayableBinding that contains information that is used to create an AudioPlayableOutput.
        */
        public static Create ($name: string, $key: UnityEngine.Object) : UnityEngine_Playables.PlayableBinding
    }

    /**
    * A IPlayableOutput implementation that will be used to play audio.
    */
    class AudioPlayableOutput extends System.ValueType implements UnityEngine_Playables.IPlayableOutput {

        /**
        * Returns an invalid AudioPlayableOutput.
        */
        public static get Null(): AudioPlayableOutput;

        /**
        * Creates an AudioPlayableOutput in the PlayableGraph.
        * @param graph The PlayableGraph that will contain the AnimationPlayableOutput.
        * @param name The name of the output.
        * @param target The AudioSource that will play the AudioPlayableOutput source Playable.
        * @returns A new AudioPlayableOutput attached to the PlayableGraph.
        */
        public static Create ($graph: UnityEngine_Playables.PlayableGraph, $name: string, $target: UnityEngine.AudioSource) : AudioPlayableOutput
        public GetHandle () : UnityEngine_Playables.PlayableOutputHandle
        public GetTarget () : UnityEngine.AudioSource
        public SetTarget ($value: UnityEngine.AudioSource) : void
        /**
        * Gets the state of output playback when seeking.
        * @returns Returns true if the output plays when seeking. Returns false otherwise.
        */
        public GetEvaluateOnSeek () : boolean
        /**
        * Controls whether the output should play when seeking.
        * @param value Set to true to play the output when seeking. Set to false to disable audio scrubbing on this output. Default is true.
        */
        public SetEvaluateOnSeek ($value: boolean) : void
        public static op_Implicit ($output: AudioPlayableOutput) : UnityEngine_Playables.PlayableOutput
        public static op_Explicit ($output: UnityEngine_Playables.PlayableOutput) : AudioPlayableOutput
    }

}

declare module 'Unity.Collections' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    /**
    * A NativeArray exposes a buffer of native memory to managed code, making it possible to share data between managed and native without marshalling costs.
    */
    interface NativeArray$1<T> extends System_Collections_Generic.IEnumerable$1<T>, System.IDisposable, System.IEquatable$1<NativeArray$1<T>> {

    }

}

declare module 'System.Collections.Generic' {
    import * as System_Collections from 'System.Collections'

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

    }

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

}

declare module 'UnityEngine.Experimental.Audio' {
    import * as System from 'System'
    import * as Unity_Collections from 'Unity.Collections'
    import * as UnityEngine_Experimental_Audio_AudioSampleProvider from 'UnityEngine.Experimental.Audio.AudioSampleProvider'
    import * as UnityEngine from 'UnityEngine'

    /**
    * Provides access to the audio samples generated by Unity objects such as VideoPlayer.
    */
    class AudioSampleProvider extends System.Object implements System.IDisposable {

        /**
        * Unique identifier for this instance.
        */
        public get id(): uint;
        /**
        * Index of the track in the object that created this provider.
        */
        public get trackIndex(): ushort;
        /**
        * Object where this provider came from.
        */
        public get owner(): UnityEngine.Object;
        /**
        * True if the object is valid.
        */
        public get valid(): boolean;
        /**
        * The number of audio channels per sample frame.
        */
        public get channelCount(): ushort;
        /**
        * The expected playback rate for the sample frames produced by this class.
        */
        public get sampleRate(): uint;
        /**
        * The maximum number of sample frames that can be accumulated inside the internal buffer before an overflow event is emitted.
        */
        public get maxSampleFrameCount(): uint;
        /**
        * Number of sample frames available for consuming with Experimental.Audio.AudioSampleProvider.ConsumeSampleFrames.
        */
        public get availableSampleFrameCount(): uint;
        /**
        * Number of sample frames that can still be written to by the sample producer before overflowing.
        */
        public get freeSampleFrameCount(): uint;
        /**
        * Then the free sample count falls below this threshold, the Experimental.Audio.AudioSampleProvider.sampleFramesAvailable event and associated native is emitted.
        */
        public get freeSampleFrameCountLowThreshold(): uint;
        public set freeSampleFrameCountLowThreshold(value: uint);
        /**
        * Enables the Experimental.Audio.AudioSampleProvider.sampleFramesAvailable events.
        */
        public get enableSampleFramesAvailableEvents(): boolean;
        public set enableSampleFramesAvailableEvents(value: boolean);
        /**
        * If true, buffers produced by ConsumeSampleFrames will get padded when silence if there are less available than asked for. Otherwise, the extra sample frames in the buffer will be left unchanged.
        */
        public get enableSilencePadding(): boolean;
        public set enableSilencePadding(value: boolean);
        /**
        * Pointer to the native function that provides access to audio sample frames.
        */
        public static get consumeSampleFramesNativeFunction(): UnityEngine_Experimental_Audio_AudioSampleProvider.ConsumeSampleFramesNativeFunction;

        /**
        * Release internal resources. Inherited from IDisposable.
        */
        public Dispose () : void
        public ConsumeSampleFrames ($sampleFrames: Unity_Collections.NativeArray$1<float>) : uint
        /**
        * Set the native event handler for events emitted when the number of available sample frames crosses the threshold.
        * @param handler Pointer to the function to invoke when the event is emitted.
        * @param userData User data to be passed to the handler when invoked. The actual C type is void*.
        */
        public SetSampleFramesAvailableNativeHandler ($handler: UnityEngine_Experimental_Audio_AudioSampleProvider.SampleFramesEventNativeFunction, $userData: System.IntPtr) : void
        /**
        * Clear the native handler set with Experimental.Audio.AudioSampleProvider.SetSampleFramesAvailableNativeHandler.
        */
        public ClearSampleFramesAvailableNativeHandler () : void
        /**
        * Set the native event handler for events emitted when the internal sample frame buffer overflows.
        * @param handler Pointer to the function to invoke when the event is emitted.
        * @param userData User data to be passed to the handler when invoked. The actual C type is void*.
        */
        public SetSampleFramesOverflowNativeHandler ($handler: UnityEngine_Experimental_Audio_AudioSampleProvider.SampleFramesEventNativeFunction, $userData: System.IntPtr) : void
        /**
        * Clear the native handler set with Experimental.Audio.AudioSampleProvider.SetSampleFramesOverflowNativeHandler.
        */
        public ClearSampleFramesOverflowNativeHandler () : void
        public add_sampleFramesAvailable ($value: UnityEngine_Experimental_Audio_AudioSampleProvider.SampleFramesHandler) : void
        public add_sampleFramesOverflow ($value: UnityEngine_Experimental_Audio_AudioSampleProvider.SampleFramesHandler) : void
        public remove_sampleFramesAvailable ($value: UnityEngine_Experimental_Audio_AudioSampleProvider.SampleFramesHandler) : void
        public remove_sampleFramesOverflow ($value: UnityEngine_Experimental_Audio_AudioSampleProvider.SampleFramesHandler) : void
    }

}

declare module 'UnityEngine.Experimental.Audio.AudioSampleProvider' {
    import * as System from 'System'
    import * as UnityEngine_Experimental_Audio from 'UnityEngine.Experimental.Audio'

    /**
    * Type that represents the native function pointer for handling sample frame events.
    * @param userData User data specified when the handler was set. The actual C type is void*.
    * @param providerId Id of the provider. See Experimental.Audio.AudioSampleProvider.id.
    * @param sampleFrameCount Number of sample frames available or overflowed, depending on event type.
    */
    interface SampleFramesEventNativeFunction {
        (userData: System.IntPtr, providerId: uint, sampleFrameCount: uint) : void; 
        Invoke?: (userData: System.IntPtr, providerId: uint, sampleFrameCount: uint) => void;
    }
    var SampleFramesEventNativeFunction: { new (func: (userData: System.IntPtr, providerId: uint, sampleFrameCount: uint) => void): SampleFramesEventNativeFunction; }

    /**
    * Type that represents the native function pointer for consuming sample frames.
    * @param providerId Id of the provider. See Experimental.Audio.AudioSampleProvider.id.
    * @param interleavedSampleFrames Pointer to the sample frames buffer to fill. The actual C type is float*.
    * @param sampleFrameCount Number of sample frames that can be written into interleavedSampleFrames.
    */
    interface ConsumeSampleFramesNativeFunction {
        (providerId: uint, interleavedSampleFrames: System.IntPtr, sampleFrameCount: uint) : uint; 
        Invoke?: (providerId: uint, interleavedSampleFrames: System.IntPtr, sampleFrameCount: uint) => uint;
    }
    var ConsumeSampleFramesNativeFunction: { new (func: (providerId: uint, interleavedSampleFrames: System.IntPtr, sampleFrameCount: uint) => uint): ConsumeSampleFramesNativeFunction; }

    /**
    * Delegate for sample frame events.
    * @param provider Provider emitting the event.
    * @param sampleFrameCount How many sample frames are available, or were dropped, depending on the event.
    */
    interface SampleFramesHandler {
        (provider: UnityEngine_Experimental_Audio.AudioSampleProvider, sampleFrameCount: uint) : void; 
        Invoke?: (provider: UnityEngine_Experimental_Audio.AudioSampleProvider, sampleFrameCount: uint) => void;
    }
    var SampleFramesHandler: { new (func: (provider: UnityEngine_Experimental_Audio.AudioSampleProvider, sampleFrameCount: uint) => void): SampleFramesHandler; }

}

declare module 'UnityEngine.Playables' {
    import * as System from 'System'

    /**
    * Interface implemented by all C# Playable implementations.
    */
    interface IPlayable {

    }

    /**
    * Use the PlayableGraph to manage Playable creations and destructions.
    */
    interface PlayableGraph {

    }

    interface PlayableHandle extends System.IEquatable$1<PlayableHandle> {

    }

    /**
    * Playables are customizable runtime objects that can be connected together and are contained in a PlayableGraph to create complex behaviours.
    */
    interface Playable extends System.IEquatable$1<Playable>, IPlayable {

    }

    /**
    * Struct that holds information regarding an output of a PlayableAsset.
    */
    interface PlayableBinding {

    }

    /**
    * Interface implemented by all C# Playable output implementations.
    */
    interface IPlayableOutput {

    }

    interface PlayableOutputHandle extends System.IEquatable$1<PlayableOutputHandle> {

    }

    /**
    * See: Playables.IPlayableOutput.
    */
    interface PlayableOutput extends IPlayableOutput, System.IEquatable$1<PlayableOutput> {

    }

}

