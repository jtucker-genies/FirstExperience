
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine.Timeline' {
    import * as UnityEngine_Playables from 'UnityEngine.Playables'
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_Timeline_ActivationTrack from 'UnityEngine.Timeline.ActivationTrack'
    import * as UnityEngine_Timeline_TimelineClip from 'UnityEngine.Timeline.TimelineClip'
    import * as UnityEngine_Timeline_TimelineAsset from 'UnityEngine.Timeline.TimelineAsset'
    import * as UnityEngine_Timeline_AnimationPlayableAsset from 'UnityEngine.Timeline.AnimationPlayableAsset'
    import * as UnityEngine_Timeline_ActivationControlPlayable from 'UnityEngine.Timeline.ActivationControlPlayable'
    import * as UnityEngine_Events from 'UnityEngine.Events'

    class ActivationTrack extends TrackAsset {

        public get start(): double;
        public get end(): double;
        public get duration(): double;
        public get muted(): boolean;
        public set muted(value: boolean);
        public get mutedInHierarchy(): boolean;
        public get timelineAsset(): TimelineAsset;
        public get parent(): UnityEngine_Playables.PlayableAsset;
        public get isEmpty(): boolean;
        public get hasClips(): boolean;
        public get hasCurves(): boolean;
        public get isSubTrack(): boolean;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get curves(): UnityEngine.AnimationClip;
        public get locked(): boolean;
        public set locked(value: boolean);
        public get lockedInHierarchy(): boolean;
        public get supportsNotifications(): boolean;
        public get postPlaybackState(): UnityEngine_Timeline_ActivationTrack.PostPlaybackState;
        public set postPlaybackState(value: UnityEngine_Timeline_ActivationTrack.PostPlaybackState);

        private constructor ()
        public CreateTrackMixer ($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject, $inputCount: int) : UnityEngine_Playables.Playable
        public GatherProperties ($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector) : void
    }

    class TrackAsset extends UnityEngine_Playables.PlayableAsset implements ICurvesOwner, IPropertyPreview, UnityEngine.ISerializationCallbackReceiver {

        public get start(): double;
        public get end(): double;
        public get duration(): double;
        public get muted(): boolean;
        public set muted(value: boolean);
        public get mutedInHierarchy(): boolean;
        public get timelineAsset(): TimelineAsset;
        public get parent(): UnityEngine_Playables.PlayableAsset;
        public get isEmpty(): boolean;
        public get hasClips(): boolean;
        public get hasCurves(): boolean;
        public get isSubTrack(): boolean;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get curves(): UnityEngine.AnimationClip;
        public get locked(): boolean;
        public set locked(value: boolean);
        public get lockedInHierarchy(): boolean;
        public get supportsNotifications(): boolean;

        public GetClips () : System_Collections_Generic.IEnumerable$1<TimelineClip>
        public GetChildTracks () : System_Collections_Generic.IEnumerable$1<TrackAsset>
        public CreateCurves ($curvesClipName: string) : void
        public CreateTrackMixer ($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject, $inputCount: int) : UnityEngine_Playables.Playable
        public CreatePlayable ($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject) : UnityEngine_Playables.Playable
        public CreateDefaultClip () : TimelineClip
        public CreateClip<T extends UnityEngine.ScriptableObject & UnityEngine_Playables.IPlayableAsset> () : TimelineClip
        public DeleteClip ($clip: TimelineClip) : boolean
        /**
        * @methodSwap CreateMarker_EBB7509C_H14C09DAA
        */
        public CreateMarker ($type: System.Type, $time: double) : IMarker
        /**
        * @methodSwap CreateMarker_EBB7509C_H328EE55B
        */
        public CreateMarker<T extends UnityEngine.ScriptableObject & IMarker> ($time: double) : T
        public DeleteMarker ($marker: IMarker) : boolean
        public GetMarkers () : System_Collections_Generic.IEnumerable$1<IMarker>
        public GetMarkerCount () : int
        public GetMarker ($idx: int) : IMarker
        public GatherProperties ($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector) : void
        public CanCreateTrackMixer () : boolean
        private constructor ()
    }

    interface IPropertyPreview {

        GatherProperties? ($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector) : void
    }

    interface IPropertyCollector {

        PushActiveGameObject? ($gameObject: UnityEngine.GameObject) : void
        PopActiveGameObject? () : void
        AddFromClip? ($clip: UnityEngine.AnimationClip) : void
        AddFromClips? ($clips: System_Collections_Generic.IEnumerable$1<UnityEngine.AnimationClip>) : void
        AddFromName?<T extends UnityEngine.Component> ($name: string) : void
        AddFromClip? ($obj: UnityEngine.GameObject, $clip: UnityEngine.AnimationClip) : void
        AddFromClips? ($obj: UnityEngine.GameObject, $clips: System_Collections_Generic.IEnumerable$1<UnityEngine.AnimationClip>) : void
        AddFromName?<T extends UnityEngine.Component> ($obj: UnityEngine.GameObject, $name: string) : void
        AddFromName? ($component: UnityEngine.Component, $name: string) : void
        AddFromComponent? ($obj: UnityEngine.GameObject, $component: UnityEngine.Component) : void
        AddObjectProperties? ($obj: UnityEngine.Object, $clip: UnityEngine.AnimationClip) : void
    }

    class TimelineClip extends System.Object implements ICurvesOwner, UnityEngine.ISerializationCallbackReceiver {

        public static kDefaultClipCaps : ClipCaps
        public static kDefaultClipDurationInSeconds : float
        public static kTimeScaleMin : double
        public static kTimeScaleMax : double
        public get hasPreExtrapolation(): boolean;
        public get hasPostExtrapolation(): boolean;
        public get timeScale(): double;
        public set timeScale(value: double);
        public get start(): double;
        public set start(value: double);
        public get duration(): double;
        public set duration(value: double);
        public get end(): double;
        public get clipIn(): double;
        public set clipIn(value: double);
        public get displayName(): string;
        public set displayName(value: string);
        public get clipAssetDuration(): double;
        public get curves(): UnityEngine.AnimationClip;
        public get hasCurves(): boolean;
        public get asset(): UnityEngine.Object;
        public set asset(value: UnityEngine.Object);
        public get easeInDuration(): double;
        public set easeInDuration(value: double);
        public get easeOutDuration(): double;
        public set easeOutDuration(value: double);
        public get easeOutTime(): double;
        public get blendInDuration(): double;
        public set blendInDuration(value: double);
        public get blendOutDuration(): double;
        public set blendOutDuration(value: double);
        public get blendInCurveMode(): UnityEngine_Timeline_TimelineClip.BlendCurveMode;
        public set blendInCurveMode(value: UnityEngine_Timeline_TimelineClip.BlendCurveMode);
        public get blendOutCurveMode(): UnityEngine_Timeline_TimelineClip.BlendCurveMode;
        public set blendOutCurveMode(value: UnityEngine_Timeline_TimelineClip.BlendCurveMode);
        public get hasBlendIn(): boolean;
        public get hasBlendOut(): boolean;
        public get mixInCurve(): UnityEngine.AnimationCurve;
        public set mixInCurve(value: UnityEngine.AnimationCurve);
        public get mixInPercentage(): float;
        public get mixInDuration(): double;
        public get mixOutCurve(): UnityEngine.AnimationCurve;
        public set mixOutCurve(value: UnityEngine.AnimationCurve);
        public get mixOutTime(): double;
        public get mixOutDuration(): double;
        public get mixOutPercentage(): float;
        public get recordable(): boolean;
        public get clipCaps(): ClipCaps;
        public get animationClip(): UnityEngine.AnimationClip;
        public get postExtrapolationMode(): UnityEngine_Timeline_TimelineClip.ClipExtrapolation;
        public get preExtrapolationMode(): UnityEngine_Timeline_TimelineClip.ClipExtrapolation;
        public get extrapolatedStart(): double;
        public get extrapolatedDuration(): double;

        public GetParentTrack () : TrackAsset
        public EvaluateMixOut ($time: double) : float
        public EvaluateMixIn ($time: double) : float
        public ToLocalTime ($time: double) : double
        public ToLocalTimeUnbound ($time: double) : double
        public IsExtrapolatedTime ($sequenceTime: double) : boolean
        public IsPreExtrapolatedTime ($sequenceTime: double) : boolean
        public IsPostExtrapolatedTime ($sequenceTime: double) : boolean
        public CreateCurves ($curvesClipName: string) : void
        public ToString () : string
        public ConformEaseValues () : void
    }

    enum ClipCaps {
        None = 0,
        Looping = 1,
        Extrapolation = 2,
        ClipIn = 4,
        SpeedMultiplier = 8,
        Blending = 16,
        AutoScale = 40,
        All = -1 
    }

    interface IMarker {

        time? : double
        readonly parent? : TrackAsset

        Initialize? ($parent: TrackAsset) : void
    }

    class TimelineAsset extends UnityEngine_Playables.PlayableAsset implements IPropertyPreview, ITimelineClipAsset, UnityEngine.ISerializationCallbackReceiver {

        public get editorSettings(): UnityEngine_Timeline_TimelineAsset.EditorSettings;
        public get duration(): double;
        public get fixedDuration(): double;
        public set fixedDuration(value: double);
        public get durationMode(): UnityEngine_Timeline_TimelineAsset.DurationMode;
        public set durationMode(value: UnityEngine_Timeline_TimelineAsset.DurationMode);
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get clipCaps(): ClipCaps;
        public get outputTrackCount(): int;
        public get rootTrackCount(): int;
        public get markerTrack(): MarkerTrack;

        private constructor ()
        public GetRootTrack ($index: int) : TrackAsset
        public GetRootTracks () : System_Collections_Generic.IEnumerable$1<TrackAsset>
        public GetOutputTrack ($index: int) : TrackAsset
        public GetOutputTracks () : System_Collections_Generic.IEnumerable$1<TrackAsset>
        public CreatePlayable ($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject) : UnityEngine_Playables.Playable
        public GatherProperties ($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector) : void
        public CreateMarkerTrack () : void
        public CreateTrack ($type: System.Type, $parent: TrackAsset, $name: string) : TrackAsset
        public CreateTrack<T extends TrackAsset> ($parent: TrackAsset, $trackName: string) : T
        public CreateTrack<T extends TrackAsset> ($trackName: string) : T
        public CreateTrack<T extends TrackAsset> () : T
        public DeleteClip ($clip: TimelineClip) : boolean
        public DeleteTrack ($track: TrackAsset) : boolean
    }

    interface ITimelineClipAsset {

        readonly clipCaps? : ClipCaps

    }

    enum StandardFrameRates {
        Fps24 = 0,
        Fps23_97 = 1,
        Fps25 = 2,
        Fps30 = 3,
        Fps29_97 = 4,
        Fps50 = 5,
        Fps60 = 6,
        Fps59_94 = 7 
    }

    class MarkerTrack extends TrackAsset {

        public get start(): double;
        public get end(): double;
        public get duration(): double;
        public get muted(): boolean;
        public set muted(value: boolean);
        public get mutedInHierarchy(): boolean;
        public get timelineAsset(): TimelineAsset;
        public get parent(): UnityEngine_Playables.PlayableAsset;
        public get isEmpty(): boolean;
        public get hasClips(): boolean;
        public get hasCurves(): boolean;
        public get isSubTrack(): boolean;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get curves(): UnityEngine.AnimationClip;
        public get locked(): boolean;
        public set locked(value: boolean);
        public get lockedInHierarchy(): boolean;
        public get supportsNotifications(): boolean;

        private constructor ()
    }

    class AnimationPlayableAsset extends UnityEngine_Playables.PlayableAsset implements IPropertyPreview, ITimelineClipAsset, UnityEngine.ISerializationCallbackReceiver {

        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        public get rotation(): UnityEngine.Quaternion;
        public set rotation(value: UnityEngine.Quaternion);
        public get eulerAngles(): UnityEngine.Vector3;
        public set eulerAngles(value: UnityEngine.Vector3);
        public get useTrackMatchFields(): boolean;
        public set useTrackMatchFields(value: boolean);
        public get matchTargetFields(): MatchTargetFields;
        public set matchTargetFields(value: MatchTargetFields);
        public get removeStartOffset(): boolean;
        public set removeStartOffset(value: boolean);
        public get applyFootIK(): boolean;
        public set applyFootIK(value: boolean);
        public get loop(): UnityEngine_Timeline_AnimationPlayableAsset.LoopMode;
        public set loop(value: UnityEngine_Timeline_AnimationPlayableAsset.LoopMode);
        public get clip(): UnityEngine.AnimationClip;
        public set clip(value: UnityEngine.AnimationClip);
        public get duration(): double;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get clipCaps(): ClipCaps;

        private constructor ()
        public CreatePlayable ($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject) : UnityEngine_Playables.Playable
        public ResetOffsets () : void
        public GatherProperties ($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector) : void
    }

    enum MatchTargetFields {
        PositionX = 1,
        PositionY = 2,
        PositionZ = 4,
        RotationX = 8,
        RotationY = 16,
        RotationZ = 32 
    }

    enum TrackOffset {
        ApplyTransformOffsets = 0,
        ApplySceneOffsets = 1,
        Auto = 2 
    }

    class AnimationTrack extends TrackAsset implements ILayerable {

        public get start(): double;
        public get end(): double;
        public get duration(): double;
        public get muted(): boolean;
        public set muted(value: boolean);
        public get mutedInHierarchy(): boolean;
        public get timelineAsset(): TimelineAsset;
        public get parent(): UnityEngine_Playables.PlayableAsset;
        public get isEmpty(): boolean;
        public get hasClips(): boolean;
        public get hasCurves(): boolean;
        public get isSubTrack(): boolean;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get curves(): UnityEngine.AnimationClip;
        public get locked(): boolean;
        public set locked(value: boolean);
        public get lockedInHierarchy(): boolean;
        public get supportsNotifications(): boolean;
        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        public get rotation(): UnityEngine.Quaternion;
        public set rotation(value: UnityEngine.Quaternion);
        public get eulerAngles(): UnityEngine.Vector3;
        public set eulerAngles(value: UnityEngine.Vector3);
        public get trackOffset(): TrackOffset;
        public set trackOffset(value: TrackOffset);
        public get matchTargetFields(): MatchTargetFields;
        public set matchTargetFields(value: MatchTargetFields);
        public get infiniteClip(): UnityEngine.AnimationClip;
        public get avatarMask(): UnityEngine.AvatarMask;
        public set avatarMask(value: UnityEngine.AvatarMask);
        public get applyAvatarMask(): boolean;
        public set applyAvatarMask(value: boolean);
        public get inClipMode(): boolean;
        public get infiniteClipOffsetPosition(): UnityEngine.Vector3;
        public set infiniteClipOffsetPosition(value: UnityEngine.Vector3);
        public get infiniteClipOffsetRotation(): UnityEngine.Quaternion;
        public set infiniteClipOffsetRotation(value: UnityEngine.Quaternion);
        public get infiniteClipOffsetEulerAngles(): UnityEngine.Vector3;
        public set infiniteClipOffsetEulerAngles(value: UnityEngine.Vector3);
        public get infiniteClipPreExtrapolation(): UnityEngine_Timeline_TimelineClip.ClipExtrapolation;
        public set infiniteClipPreExtrapolation(value: UnityEngine_Timeline_TimelineClip.ClipExtrapolation);
        public get infiniteClipPostExtrapolation(): UnityEngine_Timeline_TimelineClip.ClipExtrapolation;
        public set infiniteClipPostExtrapolation(value: UnityEngine_Timeline_TimelineClip.ClipExtrapolation);

        private constructor ()
        public CreateClip ($clip: UnityEngine.AnimationClip) : TimelineClip
        public CreateInfiniteClip ($infiniteClipName: string) : void
        public CreateRecordableClip ($animClipName: string) : TimelineClip
        public GatherProperties ($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector) : void
        public CreateClip<T extends UnityEngine.ScriptableObject & UnityEngine_Playables.IPlayableAsset> () : TimelineClip
    }

    interface ILayerable {

        CreateLayerMixer? ($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject, $inputCount: int) : UnityEngine_Playables.Playable
    }

    class AudioPlayableAsset extends UnityEngine_Playables.PlayableAsset implements ITimelineClipAsset {

        public get clip(): UnityEngine.AudioClip;
        public set clip(value: UnityEngine.AudioClip);
        public get loop(): boolean;
        public set loop(value: boolean);
        public get duration(): double;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get clipCaps(): ClipCaps;

        private constructor ()
        public CreatePlayable ($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject) : UnityEngine_Playables.Playable
    }

    class AudioTrack extends TrackAsset {

        public get start(): double;
        public get end(): double;
        public get duration(): double;
        public get muted(): boolean;
        public set muted(value: boolean);
        public get mutedInHierarchy(): boolean;
        public get timelineAsset(): TimelineAsset;
        public get parent(): UnityEngine_Playables.PlayableAsset;
        public get isEmpty(): boolean;
        public get hasClips(): boolean;
        public get hasCurves(): boolean;
        public get isSubTrack(): boolean;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get curves(): UnityEngine.AnimationClip;
        public get locked(): boolean;
        public set locked(value: boolean);
        public get lockedInHierarchy(): boolean;
        public get supportsNotifications(): boolean;

        private constructor ()
        public CreateClip ($clip: UnityEngine.AudioClip) : TimelineClip
        public CreateClip<T extends UnityEngine.ScriptableObject & UnityEngine_Playables.IPlayableAsset> () : TimelineClip
    }

    class ControlPlayableAsset extends UnityEngine_Playables.PlayableAsset implements IPropertyPreview, ITimelineClipAsset {

        public sourceGameObject : UnityEngine.ExposedReference$1<UnityEngine.GameObject>
        public prefabGameObject : UnityEngine.GameObject
        public updateParticle : boolean
        public particleRandomSeed : uint
        public updateDirector : boolean
        public updateITimeControl : boolean
        public searchHierarchy : boolean
        public active : boolean
        public postPlayback : UnityEngine_Timeline_ActivationControlPlayable.PostPlaybackState
        public get duration(): double;
        public get clipCaps(): ClipCaps;

        private constructor ()
        public OnEnable () : void
        public CreatePlayable ($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject) : UnityEngine_Playables.Playable
        public GatherProperties ($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector) : void
    }

    class ControlTrack extends TrackAsset {

        public get start(): double;
        public get end(): double;
        public get duration(): double;
        public get muted(): boolean;
        public set muted(value: boolean);
        public get mutedInHierarchy(): boolean;
        public get timelineAsset(): TimelineAsset;
        public get parent(): UnityEngine_Playables.PlayableAsset;
        public get isEmpty(): boolean;
        public get hasClips(): boolean;
        public get hasCurves(): boolean;
        public get isSubTrack(): boolean;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get curves(): UnityEngine.AnimationClip;
        public get locked(): boolean;
        public set locked(value: boolean);
        public get lockedInHierarchy(): boolean;
        public get supportsNotifications(): boolean;

        private constructor ()
        public GatherProperties ($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector) : void
    }

    interface INotificationOptionProvider {

        readonly flags? : NotificationFlags

    }

    enum NotificationFlags {
        TriggerInEditMode = 1,
        Retroactive = 2,
        TriggerOnce = 4 
    }

    class Marker extends UnityEngine.ScriptableObject implements IMarker {

        public get parent(): TrackAsset;
        public get time(): double;
        public set time(value: double);

        public OnInitialize ($aPent: TrackAsset) : void
        private constructor ()
    }

    class SignalTrack extends MarkerTrack {

        public get start(): double;
        public get end(): double;
        public get duration(): double;
        public get muted(): boolean;
        public set muted(value: boolean);
        public get mutedInHierarchy(): boolean;
        public get timelineAsset(): TimelineAsset;
        public get parent(): UnityEngine_Playables.PlayableAsset;
        public get isEmpty(): boolean;
        public get hasClips(): boolean;
        public get hasCurves(): boolean;
        public get isSubTrack(): boolean;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get curves(): UnityEngine.AnimationClip;
        public get locked(): boolean;
        public set locked(value: boolean);
        public get lockedInHierarchy(): boolean;
        public get supportsNotifications(): boolean;

        private constructor ()
    }

    class SignalAsset extends UnityEngine.ScriptableObject {

        private constructor ()
    }

    class SignalEmitter extends Marker implements INotificationOptionProvider, UnityEngine_Playables.INotification {

        public get parent(): TrackAsset;
        public get time(): double;
        public set time(value: double);
        public get retroactive(): boolean;
        public set retroactive(value: boolean);
        public get emitOnce(): boolean;
        public set emitOnce(value: boolean);
        public get asset(): SignalAsset;
        public set asset(value: SignalAsset);

        private constructor ()
    }

    class SignalReceiver extends UnityEngine.MonoBehaviour implements UnityEngine_Playables.INotificationReceiver {

        private constructor ()
        public OnNotify ($origin: UnityEngine_Playables.Playable, $notification: UnityEngine_Playables.INotification, $context: any) : void
        public AddReaction ($asset: SignalAsset, $reaction: UnityEngine_Events.UnityEvent) : void
        public AddEmptyReaction ($reaction: UnityEngine_Events.UnityEvent) : int
        public Remove ($asset: SignalAsset) : void
        public GetRegisteredSignals () : System_Collections_Generic.IEnumerable$1<SignalAsset>
        public GetReaction ($key: SignalAsset) : UnityEngine_Events.UnityEvent
        public Count () : int
        public ChangeSignalAtIndex ($idx: int, $newKey: SignalAsset) : void
        public RemoveAtIndex ($idx: int) : void
        public ChangeReactionAtIndex ($idx: int, $reaction: UnityEngine_Events.UnityEvent) : void
        public GetReactionAtIndex ($idx: int) : UnityEngine_Events.UnityEvent
        public GetSignalAssetAtIndex ($idx: int) : SignalAsset
    }

    class TrackAssetExtensions {

        public static GetGroup ($asset: TrackAsset) : GroupTrack
        public static SetGroup ($asset: TrackAsset, $group: GroupTrack) : void
    }

    class GroupTrack extends TrackAsset {

        public get start(): double;
        public get end(): double;
        public get duration(): double;
        public get muted(): boolean;
        public set muted(value: boolean);
        public get mutedInHierarchy(): boolean;
        public get timelineAsset(): TimelineAsset;
        public get parent(): UnityEngine_Playables.PlayableAsset;
        public get isEmpty(): boolean;
        public get hasClips(): boolean;
        public get hasCurves(): boolean;
        public get isSubTrack(): boolean;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get curves(): UnityEngine.AnimationClip;
        public get locked(): boolean;
        public set locked(value: boolean);
        public get lockedInHierarchy(): boolean;
        public get supportsNotifications(): boolean;

        private constructor ()
    }

    class ActivationControlPlayable extends UnityEngine_Playables.PlayableBehaviour {

        public gameObject : UnityEngine.GameObject
        public postPlayback : UnityEngine_Timeline_ActivationControlPlayable.PostPlaybackState

        public constructor ()
        public static Create ($graph: UnityEngine_Playables.PlayableGraph, $gameObject: UnityEngine.GameObject, $postPlaybackState: UnityEngine_Timeline_ActivationControlPlayable.PostPlaybackState) : UnityEngine_Playables.ScriptPlayable$1<ActivationControlPlayable>
        public OnBehaviourPlay ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
        public OnBehaviourPause ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
        public ProcessFrame ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData, $userData: any) : void
        public OnGraphStart ($playable: UnityEngine_Playables.Playable) : void
        public OnPlayableDestroy ($playable: UnityEngine_Playables.Playable) : void
    }

    class DirectorControlPlayable extends UnityEngine_Playables.PlayableBehaviour {

        public director : UnityEngine_Playables.PlayableDirector

        public constructor ()
        public static Create ($graph: UnityEngine_Playables.PlayableGraph, $director: UnityEngine_Playables.PlayableDirector) : UnityEngine_Playables.ScriptPlayable$1<DirectorControlPlayable>
        public OnPlayableDestroy ($playable: UnityEngine_Playables.Playable) : void
        public PrepareFrame ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
        public OnBehaviourPlay ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
        public OnBehaviourPause ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
        public ProcessFrame ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData, $playerData: any) : void
    }

    interface ITimeControl {

        SetTime? ($time: double) : void
        OnControlTimeStart? () : void
        OnControlTimeStop? () : void
    }

    class ParticleControlPlayable extends UnityEngine_Playables.PlayableBehaviour {

        public get particleSystem(): UnityEngine.ParticleSystem;

        public constructor ()
        public static Create ($graph: UnityEngine_Playables.PlayableGraph, $component: UnityEngine.ParticleSystem, $randomSeed: uint) : UnityEngine_Playables.ScriptPlayable$1<ParticleControlPlayable>
        public Initialize ($ps: UnityEngine.ParticleSystem, $randomSeed: uint) : void
        public OnPlayableDestroy ($playable: UnityEngine_Playables.Playable) : void
        public PrepareFrame ($playable: UnityEngine_Playables.Playable, $data: UnityEngine_Playables.FrameData) : void
        public OnBehaviourPlay ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
        public OnBehaviourPause ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
    }

    class PrefabControlPlayable extends UnityEngine_Playables.PlayableBehaviour {

        public get prefabInstance(): UnityEngine.GameObject;

        public constructor ()
        public static Create ($graph: UnityEngine_Playables.PlayableGraph, $prefabGameObject: UnityEngine.GameObject, $parentTransform: UnityEngine.Transform) : UnityEngine_Playables.ScriptPlayable$1<PrefabControlPlayable>
        public Initialize ($prefabGameObject: UnityEngine.GameObject, $parentTransform: UnityEngine.Transform) : UnityEngine.GameObject
        public OnPlayableDestroy ($playable: UnityEngine_Playables.Playable) : void
        public OnBehaviourPlay ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
        public OnBehaviourPause ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
    }

    class TimeControlPlayable extends UnityEngine_Playables.PlayableBehaviour {

        public constructor ()
        public static Create ($graph: UnityEngine_Playables.PlayableGraph, $timeControl: ITimeControl) : UnityEngine_Playables.ScriptPlayable$1<TimeControlPlayable>
        public Initialize ($timeControl: ITimeControl) : void
        public PrepareFrame ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
        public OnBehaviourPlay ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
        public OnBehaviourPause ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
    }

    class TimeNotificationBehaviour extends UnityEngine_Playables.PlayableBehaviour {

        public set timeSource(value: UnityEngine_Playables.Playable);

        public constructor ()
        public static Create ($graph: UnityEngine_Playables.PlayableGraph, $duration: double, $loopMode: UnityEngine_Playables.DirectorWrapMode) : UnityEngine_Playables.ScriptPlayable$1<TimeNotificationBehaviour>
        public AddNotification ($time: double, $payload: UnityEngine_Playables.INotification, $flags?: NotificationFlags) : void
        public OnGraphStart ($playable: UnityEngine_Playables.Playable) : void
        public OnBehaviourPause ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
        public PrepareFrame ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
    }

    class PlayableTrack extends TrackAsset {

        public get start(): double;
        public get end(): double;
        public get duration(): double;
        public get muted(): boolean;
        public set muted(value: boolean);
        public get mutedInHierarchy(): boolean;
        public get timelineAsset(): TimelineAsset;
        public get parent(): UnityEngine_Playables.PlayableAsset;
        public get isEmpty(): boolean;
        public get hasClips(): boolean;
        public get hasCurves(): boolean;
        public get isSubTrack(): boolean;
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        public get curves(): UnityEngine.AnimationClip;
        public get locked(): boolean;
        public set locked(value: boolean);
        public get lockedInHierarchy(): boolean;
        public get supportsNotifications(): boolean;

        private constructor ()
    }

    enum TrackBindingFlags {
        None = 0,
        AllowCreateComponent = 1,
        All = 1 
    }

    class TimelinePlayable extends UnityEngine_Playables.PlayableBehaviour {

        public constructor ()
        public static Create ($graph: UnityEngine_Playables.PlayableGraph, $tracks: System_Collections_Generic.IEnumerable$1<TrackAsset>, $go: UnityEngine.GameObject, $autoRebalance: boolean, $createOutputs: boolean) : UnityEngine_Playables.ScriptPlayable$1<TimelinePlayable>
        public Compile ($graph: UnityEngine_Playables.PlayableGraph, $timelinePlayable: UnityEngine_Playables.Playable, $tracks: System_Collections_Generic.IEnumerable$1<TrackAsset>, $go: UnityEngine.GameObject, $autoRebalance: boolean, $createOutputs: boolean) : void
        public PrepareFrame ($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData) : void
    }

    class TimelineClipExtensions {

        public static MoveToTrack ($clip: TimelineClip, $destinationTrack: TrackAsset) : void
        public static TryMoveToTrack ($clip: TimelineClip, $destinationTrack: TrackAsset) : boolean
    }

    interface ActivationTrack {

        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.GetGroup
        */
        GetGroup () : GroupTrack
        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.SetGroup
        */
        SetGroup ($group: GroupTrack) : void
    }

    interface TrackAsset {

        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.GetGroup
        */
        GetGroup () : GroupTrack
        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.SetGroup
        */
        SetGroup ($group: GroupTrack) : void
    }

    interface MarkerTrack {

        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.GetGroup
        */
        GetGroup () : GroupTrack
        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.SetGroup
        */
        SetGroup ($group: GroupTrack) : void
    }

    interface AnimationTrack {

        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.GetGroup
        */
        GetGroup () : GroupTrack
        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.SetGroup
        */
        SetGroup ($group: GroupTrack) : void
    }

    interface AudioTrack {

        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.GetGroup
        */
        GetGroup () : GroupTrack
        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.SetGroup
        */
        SetGroup ($group: GroupTrack) : void
    }

    interface ControlTrack {

        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.GetGroup
        */
        GetGroup () : GroupTrack
        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.SetGroup
        */
        SetGroup ($group: GroupTrack) : void
    }

    interface SignalTrack {

        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.GetGroup
        */
        GetGroup () : GroupTrack
        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.SetGroup
        */
        SetGroup ($group: GroupTrack) : void
    }

    interface GroupTrack {

        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.GetGroup
        */
        GetGroup () : GroupTrack
        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.SetGroup
        */
        SetGroup ($group: GroupTrack) : void
    }

    interface PlayableTrack {

        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.GetGroup
        */
        GetGroup () : GroupTrack
        /**
        * @extension UnityEngine.Timeline.TrackAssetExtensions.SetGroup
        */
        SetGroup ($group: GroupTrack) : void
    }

    interface TimelineClip {

        /**
        * @extension UnityEngine.Timeline.TimelineClipExtensions.MoveToTrack
        */
        MoveToTrack ($destinationTrack: TrackAsset) : void
        /**
        * @extension UnityEngine.Timeline.TimelineClipExtensions.TryMoveToTrack
        */
        TryMoveToTrack ($destinationTrack: TrackAsset) : boolean
    }

}

declare module 'UnityEngine.Playables' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'

    /**
    * Instantiates a PlayableGraph from a PlayableAsset and controls playback of Playable objects.
    * This API is mainly designed to provide scheduling and scene binding support and scheduling for the Timeline package. Our users may find limited use for it otherwise.
    * Most of the functionality of this class can be replicated by using PlayableGraph.
    */
    interface PlayableDirector extends UnityEngine.IExposedPropertyTable {

    }

    /**
    * A base class for assets that can be used to instantiate a Playable at runtime.
    */
    interface PlayableAsset extends IPlayableAsset {

    }

    /**
    * Interface that permits a class to inject playables into a graph.
    */
    interface IPlayableAsset {

    }

    /**
    * Playables are customizable runtime objects that can be connected together and are contained in a PlayableGraph to create complex behaviours.
    */
    interface Playable extends System.IEquatable$1<Playable>, IPlayable {

    }

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

    /**
    * Struct that holds information regarding an output of a PlayableAsset.
    */
    interface PlayableBinding {

    }

    /**
    * The base interface for all notifications sent through the playable system.
    */
    interface INotification {

    }

    /**
    * Implement this interface to create a class that will receives notifications from PlayableOutput.
    */
    interface INotificationReceiver {

    }

    /**
    * PlayableBehaviour is the base class from which every custom playable script derives.
    */
    interface PlayableBehaviour extends System.ICloneable, IPlayableBehaviour {

    }

    /**
    * Interface implemented by all C# Playable Behaviour implementations.
    */
    interface IPlayableBehaviour {

    }

    /**
    * A IPlayable implementation that contains a PlayableBehaviour for the PlayableGraph. PlayableBehaviour can be used to write custom Playable that implement their own PrepareFrame callback.
    */
    interface ScriptPlayable$1<T> extends System.IEquatable$1<ScriptPlayable$1<T>>, IPlayable {

    }

    /**
    * This structure contains the frame information a Playable receives in Playable.PrepareFrame.
    */
    interface FrameData {

    }

    /**
    * Wrap mode for Playables.
    */
    enum DirectorWrapMode {
        Hold = 0,
        Loop = 1,
        None = 2 
    }

}

declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'

    /**
    * Interface for objects used as resolvers on ExposedReferences.
    */
    interface IExposedPropertyTable {

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
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * Stores keyframe based animations.
    */
    interface AnimationClip {

    }

    /**
    * Base class for AnimationClips and BlendTrees.
    */
    interface Motion {

    }

    /**
    * Interface to receive callbacks upon serialization and deserialization.
    */
    interface ISerializationCallbackReceiver {

    }

    /**
    * A class you can derive from if you want to create objects that live independently of GameObjects.
    */
    interface ScriptableObject {

    }

    /**
    * Store a collection of Keyframes that can be evaluated over time.
    */
    interface AnimationCurve extends System.IEquatable$1<AnimationCurve> {

    }

    /**
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    /**
    * AvatarMask is used to mask out humanoid body parts and transforms.
    */
    interface AvatarMask {

    }

    /**
    * A container for audio data.
    */
    interface AudioClip {

    }

    /**
    * Creates a type whos value is resolvable at runtime.
    */
    interface ExposedReference$1<T> {

    }

    /**
    * MonoBehaviour is a base class that many Unity scripts derive from.
    */
    interface MonoBehaviour {

    }

    /**
    * Script interface for the Built-in Particle System. Unity's powerful and versatile particle system implementation.
    */
    interface ParticleSystem {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

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

declare module 'UnityEngine.Timeline.TimelineClip' {

    enum BlendCurveMode {
        Auto = 0,
        Manual = 1 
    }

    enum ClipExtrapolation {
        None = 0,
        Hold = 1,
        Loop = 2,
        PingPong = 3,
        Continue = 4 
    }

}

declare module 'System' {
    import * as System_Reflection from 'System.Reflection'
    import * as System_Runtime_InteropServices from 'System.Runtime.InteropServices'

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IFormattable {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

    interface IEquatable$1<T> {

    }

    interface Type extends System_Reflection.IReflect, System_Runtime_InteropServices._Type {

    }

    interface ICloneable {

    }

}

declare module 'System.Reflection' {
    import * as System from 'System'
    import * as System_Runtime_InteropServices from 'System.Runtime.InteropServices'

    interface IReflect {

    }

    interface MemberInfo extends ICustomAttributeProvider, System_Runtime_InteropServices._MemberInfo {

    }

    interface ICustomAttributeProvider {

    }

}

declare module 'System.Runtime.InteropServices' {

    interface _Type {

    }

    interface _MemberInfo {

    }

}

declare module 'UnityEngine.Timeline.TimelineAsset' {
    import * as System from 'System'
    import * as UnityEngine_Timeline from 'UnityEngine.Timeline'

    class EditorSettings extends System.Object {

        public get frameRate(): double;
        public set frameRate(value: double);
        public get scenePreview(): boolean;
        public set scenePreview(value: boolean);

        public constructor ()
        public SetStandardFrameRate ($enumValue: UnityEngine_Timeline.StandardFrameRates) : void
    }

    enum DurationMode {
        BasedOnClips = 0,
        FixedLength = 1 
    }

}

declare module 'UnityEngine.Timeline.ActivationTrack' {

    enum PostPlaybackState {
        Active = 0,
        Inactive = 1,
        Revert = 2,
        LeaveAsIs = 3 
    }

}

declare module 'UnityEngine.Timeline.AnimationPlayableAsset' {

    enum LoopMode {
        UseSourceAsset = 0,
        On = 1,
        Off = 2 
    }

}

declare module 'UnityEngine.Timeline.ActivationControlPlayable' {

    enum PostPlaybackState {
        Active = 0,
        Inactive = 1,
        Revert = 2 
    }

}

declare module 'UnityEngine.Events' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    /**
    * A zero argument persistent callback that can be saved with the Scene.
    */
    interface UnityEvent {

    }

    /**
    * Abstract base class for UnityEvents.
    */
    interface UnityEventBase extends UnityEngine.ISerializationCallbackReceiver {

    }

}

