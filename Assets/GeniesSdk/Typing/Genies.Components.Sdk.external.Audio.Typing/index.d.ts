
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'RootNamespace' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as RootNamespace_PlayOnFrame from 'RootNamespace.PlayOnFrame'

    class AudioManager extends UnityEngine.MonoBehaviour implements IAudioManager {

        public sources : System_Collections_Generic.List$1<UnityEngine.AudioSource>
        public sources3D : System_Collections_Generic.List$1<UnityEngine.AudioSource>

        private constructor ()
        public PlayOneShot ($clip: UnityEngine.AudioClip) : boolean
        public PlayOneShotAtWorldLocation ($newLocation: UnityEngine.Vector3, $clip: UnityEngine.AudioClip) : boolean
        public PlayLoopedAudio ($clip: UnityEngine.AudioClip) : boolean
        public PlayLoopedAudioAtWorldLocation ($newLocation: UnityEngine.Vector3, $clip: UnityEngine.AudioClip) : boolean
        public StopLoopingAudio ($clip: UnityEngine.AudioClip) : boolean
        public StopAudio ($clip: UnityEngine.AudioClip) : boolean
        public IsPlayingAudio ($clip: UnityEngine.AudioClip) : boolean
        public StopAllLoopingAudio () : void
        public StopAllNonLoopingAudio () : void
        public StopAllAudio () : void
    }

    interface IAudioManager {

        PlayOneShot? ($clip: UnityEngine.AudioClip) : boolean
        PlayOneShotAtWorldLocation? ($newLocation: UnityEngine.Vector3, $clip: UnityEngine.AudioClip) : boolean
        PlayLoopedAudio? ($clip: UnityEngine.AudioClip) : boolean
        PlayLoopedAudioAtWorldLocation? ($newLocation: UnityEngine.Vector3, $clip: UnityEngine.AudioClip) : boolean
        StopLoopingAudio? ($clip: UnityEngine.AudioClip) : boolean
        StopAudio? ($clip: UnityEngine.AudioClip) : boolean
        IsPlayingAudio? ($clip: UnityEngine.AudioClip) : boolean
        StopAllLoopingAudio? () : void
        StopAllNonLoopingAudio? () : void
    }

    class PlayOnFrame extends UnityEngine.MonoBehaviour {

        public audioManager : AudioManager
        public soundEvent : RootNamespace_PlayOnFrame.SOUND_EVENT
        public clip : UnityEngine.AudioClip
        public soundLocation : UnityEngine.Vector3

        private constructor ()
    }

}

declare module 'UnityEngine' {
    import * as System from 'System'

    /**
    * A container for audio data.
    */
    interface AudioClip {

    }

    /**
    * Base class for all objects Unity can reference.
    */
    interface Object {

    }

    /**
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * MonoBehaviour is a base class that many Unity scripts derive from.
    */
    interface MonoBehaviour {

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
    * A representation of audio sources in 3D.
    */
    interface AudioSource {

    }

    interface AudioBehaviour {

    }

}

declare module 'System' {

    interface IFormattable {

    }

    interface IEquatable$1<T> {

    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

}

declare module 'System.Collections.Generic' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'

    interface List$1<T> extends IList$1<T>, System_Collections.IList, IReadOnlyList$1<T> {

    }

    interface IList$1<T> extends ICollection$1<T> {

    }

    interface ICollection$1<T> extends IEnumerable$1<T> {

    }

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

    }

    interface IReadOnlyList$1<T> extends IReadOnlyCollection$1<T> {

    }

    interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {

    }

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

    interface IList extends ICollection {

    }

    interface ICollection extends IEnumerable {

    }

}

declare module 'RootNamespace.PlayOnFrame' {

    enum SOUND_EVENT {
        PLAY_ONE_SHOT = 0,
        PLAY_ONE_SHOT_3D = 1,
        PLAY_LOOPING = 2,
        PLAY_LOOPING_3D = 3,
        STOP_LOOPING = 4,
        STOP_NON_LOOPING = 5,
        STOP_ALL_NON_LOOPING = 6,
        STOP_ALL_LOOPING = 7,
        STOP_ALL = 8 
    }

}

