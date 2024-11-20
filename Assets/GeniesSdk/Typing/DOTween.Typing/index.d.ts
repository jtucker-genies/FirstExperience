
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'DG.Tweening' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as DG_Tweening_Plugins_Options from 'DG.Tweening.Plugins.Options'
    import * as DG_Tweening_Core from 'DG.Tweening.Core'
    import * as DG_Tweening_Plugins_Core from 'DG.Tweening.Plugins.Core'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as DG_Tweening_Core_Enums from 'DG.Tweening.Core.Enums'
    import * as DG_Tweening_Plugins_Core_PathCore from 'DG.Tweening.Plugins.Core.PathCore'

    enum AutoPlay {
        None = 0,
        AutoPlaySequences = 1,
        AutoPlayTweeners = 2,
        All = 3 
    }

    enum AxisConstraint {
        None = 0,
        X = 2,
        Y = 4,
        Z = 8,
        W = 16 
    }

    class Color2 extends System.ValueType {

        public ca : UnityEngine.Color
        public cb : UnityEngine.Color

        public constructor ($ca: UnityEngine.Color, $cb: UnityEngine.Color)
        public static op_Addition ($c1: Color2, $c2: Color2) : Color2
        public static op_Subtraction ($c1: Color2, $c2: Color2) : Color2
        public static op_Multiply ($c1: Color2, $f: float) : Color2
    }

    interface TweenCallback {
        () : void; 
        Invoke?: () => void;
    }
    var TweenCallback: { new (func: () => void): TweenCallback; }

    interface TweenCallback$1<T> {
        (value: T) : void; 
        Invoke?: (value: T) => void;
    }

    interface EaseFunction {
        (time: float, duration: float, overshootOrAmplitude: float, period: float) : float; 
        Invoke?: (time: float, duration: float, overshootOrAmplitude: float, period: float) => float;
    }
    var EaseFunction: { new (func: (time: float, duration: float, overshootOrAmplitude: float, period: float) => float): EaseFunction; }

    class DOTween extends System.Object {

        public static Version : string
        public static useSafeMode : boolean
        public static nestedTweenFailureBehaviour : DG_Tweening_Core_Enums.NestedTweenFailureBehaviour
        public static timeScale : float
        public static useSmoothDeltaTime : boolean
        public static maxSmoothUnscaledTime : float
        public static onWillLog : System.Func$3<UnityEngine.LogType, any, boolean>
        public static drawGizmos : boolean
        public static debugMode : boolean
        public static defaultUpdateType : UpdateType
        public static defaultTimeScaleIndependent : boolean
        public static defaultAutoPlay : AutoPlay
        public static defaultAutoKill : boolean
        public static defaultLoopType : LoopType
        public static defaultRecyclable : boolean
        public static defaultEaseType : Ease
        public static defaultEaseOvershootOrAmplitude : float
        public static defaultEasePeriod : float
        public static instance : DG_Tweening_Core.DOTweenComponent
        public static get logBehaviour(): LogBehaviour;
        public static set logBehaviour(value: LogBehaviour);
        public static get debugStoreTargetId(): boolean;
        public static set debugStoreTargetId(value: boolean);

        public constructor ()
        public static Init ($recycleAllByDefault?: System.Nullable$1<boolean>, $useSafeMode?: System.Nullable$1<boolean>, $logBehaviour?: System.Nullable$1<LogBehaviour>) : IDOTweenInit
        public static SetTweensCapacity ($tweenersCapacity: int, $sequencesCapacity: int) : void
        public static Clear ($destroy?: boolean) : void
        public static ClearCachedTweens () : void
        public static Validate () : int
        public static ManualUpdate ($deltaTime: float, $unscaledDeltaTime: float) : void
        /**
        * @methodSwap To_EBB7509C_H38C21F7B
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<float>, $setter: DG_Tweening_Core.DOSetter$1<float>, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap To_EBB7509C_H847F1994
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<double>, $setter: DG_Tweening_Core.DOSetter$1<double>, $endValue: double, $duration: float) : DG_Tweening_Core.TweenerCore$3<double, double, DG_Tweening_Plugins_Options.NoOptions>
        /**
        * @methodSwap To_EBB7509C_C2FBE375
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<int>, $setter: DG_Tweening_Core.DOSetter$1<int>, $endValue: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<int, int, DG_Tweening_Plugins_Options.NoOptions>
        /**
        * @methodSwap To_EBB7509C_H8E04BB90
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<uint>, $setter: DG_Tweening_Core.DOSetter$1<uint>, $endValue: uint, $duration: float) : DG_Tweening_Core.TweenerCore$3<uint, uint, DG_Tweening_Plugins_Options.UintOptions>
        /**
        * @methodSwap To_EBB7509C_D6CABAC6
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<bigint>, $setter: DG_Tweening_Core.DOSetter$1<bigint>, $endValue: bigint, $duration: float) : DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>
        /**
        * @methodSwap To_EBB7509C_H35BCAD88
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<string>, $setter: DG_Tweening_Core.DOSetter$1<string>, $endValue: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<string, string, DG_Tweening_Plugins_Options.StringOptions>
        /**
        * @methodSwap To_EBB7509C_H79BFE5D2
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector2>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector2>, $endValue: UnityEngine.Vector2, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap To_EBB7509C_BB53AD2F
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector3>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector3>, $endValue: UnityEngine.Vector3, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap To_EBB7509C_H5AF5FC78
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector4>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector4>, $endValue: UnityEngine.Vector4, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap To_EBB7509C_H4354AC5
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Quaternion>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Quaternion>, $endValue: UnityEngine.Vector3, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>
        /**
        * @methodSwap To_EBB7509C_FE3FFC6
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Color>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Color>, $endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap To_EBB7509C_H4E5B5097
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Rect>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Rect>, $endValue: UnityEngine.Rect, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Rect, UnityEngine.Rect, DG_Tweening_Plugins_Options.RectOptions>
        /**
        * @methodSwap To_EBB7509C_D310F9F0
        */
        public static To ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.RectOffset>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.RectOffset>, $endValue: UnityEngine.RectOffset, $duration: float) : Tweener
        /**
        * @methodSwap To_EBB7509C_DE692F98
        */
        public static To<T1,T2,TPlugOptions extends DG_Tweening_Plugins_Options.IPlugOptions> ($plugin: DG_Tweening_Plugins_Core.ABSTweenPlugin$3<T1, T2, TPlugOptions>, $getter: DG_Tweening_Core.DOGetter$1<T1>, $setter: DG_Tweening_Core.DOSetter$1<T1>, $endValue: T2, $duration: float) : DG_Tweening_Core.TweenerCore$3<T1, T2, TPlugOptions>
        public static ToAxis ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector3>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector3>, $endValue: float, $duration: float, $axisConstraint?: AxisConstraint) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        public static ToAlpha ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Color>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Color>, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap To_EBB7509C_H72986B0B
        */
        public static To ($setter: DG_Tweening_Core.DOSetter$1<float>, $startValue: float, $endValue: float, $duration: float) : Tweener
        public static Punch ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector3>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector3>, $direction: UnityEngine.Vector3, $duration: float, $vibrato?: int, $elasticity?: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>
        /**
        * @methodSwap Shake_EBB7509C_H557D0BE1
        */
        public static Shake ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector3>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector3>, $duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $ignoreZAxis?: boolean, $fadeOut?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>
        /**
        * @methodSwap Shake_EBB7509C_H928FD846
        */
        public static Shake ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector3>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector3>, $duration: float, $strength: UnityEngine.Vector3, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>
        public static ToArray ($getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector3>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector3>, $endValues: UnityEngine.Vector3[], $durations: float[]) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>
        public static Sequence () : Sequence
        public static CompleteAll ($withCallbacks?: boolean) : int
        public static Complete ($targetOrId: any, $withCallbacks?: boolean) : int
        public static FlipAll () : int
        public static Flip ($targetOrId: any) : int
        public static GotoAll ($to: float, $andPlay?: boolean) : int
        public static Goto ($targetOrId: any, $to: float, $andPlay?: boolean) : int
        public static KillAll ($complete?: boolean) : int
        public static KillAll ($complete: boolean, ...idsOrTargetsToExclude: any[]) : int
        public static Kill ($targetOrId: any, $complete?: boolean) : int
        public static PauseAll () : int
        public static Pause ($targetOrId: any) : int
        public static PlayAll () : int
        public static Play ($targetOrId: any) : int
        public static Play ($target: any, $id: any) : int
        public static PlayBackwardsAll () : int
        public static PlayBackwards ($targetOrId: any) : int
        public static PlayBackwards ($target: any, $id: any) : int
        public static PlayForwardAll () : int
        public static PlayForward ($targetOrId: any) : int
        public static PlayForward ($target: any, $id: any) : int
        public static RestartAll ($includeDelay?: boolean) : int
        /**
        * @methodSwap Restart_EBB7509C_H5463266B
        */
        public static Restart ($targetOrId: any, $includeDelay?: boolean, $changeDelayTo?: float) : int
        /**
        * @methodSwap Restart_EBB7509C_DD475087
        */
        public static Restart ($target: any, $id: any, $includeDelay?: boolean, $changeDelayTo?: float) : int
        public static RewindAll ($includeDelay?: boolean) : int
        public static Rewind ($targetOrId: any, $includeDelay?: boolean) : int
        public static SmoothRewindAll () : int
        public static SmoothRewind ($targetOrId: any) : int
        public static TogglePauseAll () : int
        public static TogglePause ($targetOrId: any) : int
        public static IsTweening ($targetOrId: any, $alsoCheckIfIsPlaying?: boolean) : boolean
        public static TotalPlayingTweens () : int
        public static PlayingTweens ($fillableList?: System_Collections_Generic.List$1<Tween>) : System_Collections_Generic.List$1<Tween>
        public static PausedTweens ($fillableList?: System_Collections_Generic.List$1<Tween>) : System_Collections_Generic.List$1<Tween>
        public static TweensById ($id: any, $playingOnly?: boolean, $fillableList?: System_Collections_Generic.List$1<Tween>) : System_Collections_Generic.List$1<Tween>
        public static TweensByTarget ($target: any, $playingOnly?: boolean, $fillableList?: System_Collections_Generic.List$1<Tween>) : System_Collections_Generic.List$1<Tween>
    }

    interface IDOTweenInit {

        SetCapacity? ($tweenersCapacity: int, $sequencesCapacity: int) : IDOTweenInit
    }

    enum LogBehaviour {
        Default = 0,
        Verbose = 1,
        ErrorsOnly = 2 
    }

    class Tweener extends Tween {

        public timeScale : float
        public isBackwards : boolean
        public id : any
        public stringId : string
        public intId : int
        public target : any
        public onPlay : TweenCallback
        public onPause : TweenCallback
        public onRewind : TweenCallback
        public onUpdate : TweenCallback
        public onStepComplete : TweenCallback
        public onComplete : TweenCallback
        public onKill : TweenCallback
        public onWaypointChange : TweenCallback$1<int>
        public easeOvershootOrAmplitude : float
        public easePeriod : float
        public debugTargetId : string
        public get isRelative(): boolean;
        public get active(): boolean;
        public get fullPosition(): float;
        public set fullPosition(value: float);
        public get hasLoops(): boolean;
        public get playedOnce(): boolean;
        public get position(): float;

        public ChangeStartValue ($newStartValue: any, $newDuration?: float) : Tweener
        /**
        * @methodSwap ChangeEndValue_EBB7509C_H8A32E551
        */
        public ChangeEndValue ($newEndValue: any, $newDuration?: float, $snapStartValue?: boolean) : Tweener
        public ChangeEndValue ($newEndValue: any, $snapStartValue: boolean) : Tweener
        public ChangeValues ($newStartValue: any, $newEndValue: any, $newDuration?: float) : Tweener
    }

    class Tween extends DG_Tweening_Core.ABSSequentiable {

        public timeScale : float
        public isBackwards : boolean
        public id : any
        public stringId : string
        public intId : int
        public target : any
        public onPlay : TweenCallback
        public onPause : TweenCallback
        public onRewind : TweenCallback
        public onUpdate : TweenCallback
        public onStepComplete : TweenCallback
        public onComplete : TweenCallback
        public onKill : TweenCallback
        public onWaypointChange : TweenCallback$1<int>
        public easeOvershootOrAmplitude : float
        public easePeriod : float
        public debugTargetId : string
        public get isRelative(): boolean;
        public get active(): boolean;
        public get fullPosition(): float;
        public set fullPosition(value: float);
        public get hasLoops(): boolean;
        public get playedOnce(): boolean;
        public get position(): float;

    }

    enum ScrambleMode {
        None = 0,
        All = 1,
        Uppercase = 2,
        Lowercase = 3,
        Numerals = 4,
        Custom = 5 
    }

    enum RotateMode {
        Fast = 0,
        FastBeyond360 = 1,
        WorldAxisAdd = 2,
        LocalAxisAdd = 3 
    }

    class Sequence extends Tween {

        public timeScale : float
        public isBackwards : boolean
        public id : any
        public stringId : string
        public intId : int
        public target : any
        public onPlay : TweenCallback
        public onPause : TweenCallback
        public onRewind : TweenCallback
        public onUpdate : TweenCallback
        public onStepComplete : TweenCallback
        public onComplete : TweenCallback
        public onKill : TweenCallback
        public onWaypointChange : TweenCallback$1<int>
        public easeOvershootOrAmplitude : float
        public easePeriod : float
        public debugTargetId : string
        public get isRelative(): boolean;
        public get active(): boolean;
        public get fullPosition(): float;
        public set fullPosition(value: float);
        public get hasLoops(): boolean;
        public get playedOnce(): boolean;
        public get position(): float;

    }

    enum UpdateType {
        Normal = 0,
        Late = 1,
        Fixed = 2,
        Manual = 3 
    }

    enum LoopType {
        Restart = 0,
        Yoyo = 1,
        Incremental = 2 
    }

    enum Ease {
        Unset = 0,
        Linear = 1,
        InSine = 2,
        OutSine = 3,
        InOutSine = 4,
        InQuad = 5,
        OutQuad = 6,
        InOutQuad = 7,
        InCubic = 8,
        OutCubic = 9,
        InOutCubic = 10,
        InQuart = 11,
        OutQuart = 12,
        InOutQuart = 13,
        InQuint = 14,
        OutQuint = 15,
        InOutQuint = 16,
        InExpo = 17,
        OutExpo = 18,
        InOutExpo = 19,
        InCirc = 20,
        OutCirc = 21,
        InOutCirc = 22,
        InElastic = 23,
        OutElastic = 24,
        InOutElastic = 25,
        InBack = 26,
        OutBack = 27,
        InOutBack = 28,
        InBounce = 29,
        OutBounce = 30,
        InOutBounce = 31,
        Flash = 32,
        InFlash = 33,
        OutFlash = 34,
        InOutFlash = 35,
        INTERNAL_Zero = 36,
        INTERNAL_Custom = 37 
    }

    class DOVirtual {

        public static Float ($from: float, $to: float, $duration: float, $onVirtualUpdate: TweenCallback$1<float>) : Tweener
        /**
        * @methodSwap EasedValue_EBB7509C_H393CEAB0
        */
        public static EasedValue ($from: float, $to: float, $lifetimePercentage: float, $easeType: Ease) : float
        /**
        * @methodSwap EasedValue_EBB7509C_H7A66CC45
        */
        public static EasedValue ($from: float, $to: float, $lifetimePercentage: float, $easeType: Ease, $overshoot: float) : float
        /**
        * @methodSwap EasedValue_EBB7509C_H9D7B4862
        */
        public static EasedValue ($from: float, $to: float, $lifetimePercentage: float, $easeType: Ease, $amplitude: float, $period: float) : float
        /**
        * @methodSwap EasedValue_EBB7509C_H8A661312
        */
        public static EasedValue ($from: float, $to: float, $lifetimePercentage: float, $easeCurve: UnityEngine.AnimationCurve) : float
        public static DelayedCall ($delay: float, $callback: TweenCallback, $ignoreTimeScale?: boolean) : Tween
    }

    class EaseFactory extends System.Object {

        public constructor ()
        /**
        * @methodSwap StopMotion_EBB7509C_AAD63853
        */
        public static StopMotion ($motionFps: int, $ease?: System.Nullable$1<Ease>) : EaseFunction
        /**
        * @methodSwap StopMotion_EBB7509C_H796A1AC8
        */
        public static StopMotion ($motionFps: int, $animCurve: UnityEngine.AnimationCurve) : EaseFunction
        /**
        * @methodSwap StopMotion_EBB7509C_H4F08394E
        */
        public static StopMotion ($motionFps: int, $customEase: EaseFunction) : EaseFunction
    }

    enum LinkBehaviour {
        PauseOnDisable = 0,
        PauseOnDisablePlayOnEnable = 1,
        PauseOnDisableRestartOnEnable = 2,
        PlayOnEnable = 3,
        RestartOnEnable = 4,
        KillOnDisable = 5,
        KillOnDestroy = 6,
        CompleteOnDisable = 7,
        CompleteAndKillOnDisable = 8,
        RewindOnDisable = 9,
        RewindAndKillOnDisable = 10 
    }

    enum PathMode {
        Ignore = 0,
        Full3D = 1,
        TopDown2D = 2,
        Sidescroller2D = 3 
    }

    enum PathType {
        Linear = 0,
        CatmullRom = 1,
        CubicBezier = 2 
    }

    class TweenExtensions {

        public static Complete ($t: Tween) : void
        public static Complete ($t: Tween, $withCallbacks: boolean) : void
        public static Flip ($t: Tween) : void
        public static ForceInit ($t: Tween) : void
        /**
        * @methodSwap Goto_EBB7509C_E1C176D8
        */
        public static Goto ($t: Tween, $to: float, $andPlay?: boolean) : void
        public static Kill ($t: Tween, $complete?: boolean) : void
        public static Pause<T extends Tween> ($t: T) : T
        public static Play<T extends Tween> ($t: T) : T
        public static PlayBackwards ($t: Tween) : void
        public static PlayForward ($t: Tween) : void
        /**
        * @methodSwap Restart_EBB7509C_BA558FEA
        */
        public static Restart ($t: Tween, $includeDelay?: boolean, $changeDelayTo?: float) : void
        public static Rewind ($t: Tween, $includeDelay?: boolean) : void
        public static SmoothRewind ($t: Tween) : void
        public static TogglePause ($t: Tween) : void
        /**
        * @methodSwap GotoWaypoint_EBB7509C_H40296D8E
        */
        public static GotoWaypoint ($t: Tween, $waypointIndex: int, $andPlay?: boolean) : void
        public static WaitForCompletion ($t: Tween) : UnityEngine.YieldInstruction
        public static WaitForRewind ($t: Tween) : UnityEngine.YieldInstruction
        public static WaitForKill ($t: Tween) : UnityEngine.YieldInstruction
        /**
        * @methodSwap WaitForElapsedLoops_EBB7509C_H3AE295E1
        */
        public static WaitForElapsedLoops ($t: Tween, $elapsedLoops: int) : UnityEngine.YieldInstruction
        /**
        * @methodSwap WaitForPosition_EBB7509C_H84EE7387
        */
        public static WaitForPosition ($t: Tween, $position: float) : UnityEngine.YieldInstruction
        public static WaitForStart ($t: Tween) : UnityEngine.Coroutine
        public static CompletedLoops ($t: Tween) : int
        public static Delay ($t: Tween) : float
        public static ElapsedDelay ($t: Tween) : float
        public static Duration ($t: Tween, $includeLoops?: boolean) : float
        public static Elapsed ($t: Tween, $includeLoops?: boolean) : float
        public static ElapsedPercentage ($t: Tween, $includeLoops?: boolean) : float
        public static ElapsedDirectionalPercentage ($t: Tween) : float
        public static IsActive ($t: Tween) : boolean
        public static IsBackwards ($t: Tween) : boolean
        public static IsComplete ($t: Tween) : boolean
        public static IsInitialized ($t: Tween) : boolean
        public static IsPlaying ($t: Tween) : boolean
        public static Loops ($t: Tween) : int
        /**
        * @methodSwap PathGetPoint_EBB7509C_H84EE7387
        */
        public static PathGetPoint ($t: Tween, $pathPercentage: float) : UnityEngine.Vector3
        /**
        * @methodSwap PathGetDrawPoints_EBB7509C_H3AE295E1
        */
        public static PathGetDrawPoints ($t: Tween, $subdivisionsXSegment?: int) : UnityEngine.Vector3[]
        public static PathLength ($t: Tween) : float
    }

    class ShortcutExtensions {

        /**
        * @methodSwap DOAspect_EBB7509C_H9FC3EAFF
        */
        public static DOAspect ($target: UnityEngine.Camera, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOColor_EBB7509C_H1EA74B62
        */
        public static DOColor ($target: UnityEngine.Camera, $endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOFarClipPlane_EBB7509C_H9FC3EAFF
        */
        public static DOFarClipPlane ($target: UnityEngine.Camera, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOFieldOfView_EBB7509C_H9FC3EAFF
        */
        public static DOFieldOfView ($target: UnityEngine.Camera, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DONearClipPlane_EBB7509C_H9FC3EAFF
        */
        public static DONearClipPlane ($target: UnityEngine.Camera, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOOrthoSize_EBB7509C_H9FC3EAFF
        */
        public static DOOrthoSize ($target: UnityEngine.Camera, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOPixelRect_EBB7509C_H47FF15B5
        */
        public static DOPixelRect ($target: UnityEngine.Camera, $endValue: UnityEngine.Rect, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Rect, UnityEngine.Rect, DG_Tweening_Plugins_Options.RectOptions>
        /**
        * @methodSwap DORect_EBB7509C_H47FF15B5
        */
        public static DORect ($target: UnityEngine.Camera, $endValue: UnityEngine.Rect, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Rect, UnityEngine.Rect, DG_Tweening_Plugins_Options.RectOptions>
        /**
        * @methodSwap DOShakePosition_EBB7509C_F9F3332A
        */
        public static DOShakePosition ($target: UnityEngine.Camera, $duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOShakePosition_EBB7509C_H424116E
        */
        public static DOShakePosition ($target: UnityEngine.Camera, $duration: float, $strength: UnityEngine.Vector3, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOShakeRotation_EBB7509C_F9F3332A
        */
        public static DOShakeRotation ($target: UnityEngine.Camera, $duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOShakeRotation_EBB7509C_H424116E
        */
        public static DOShakeRotation ($target: UnityEngine.Camera, $duration: float, $strength: UnityEngine.Vector3, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOColor_EBB7509C_H12FC6D8D
        */
        public static DOColor ($target: UnityEngine.Light, $endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOIntensity_EBB7509C_H33711918
        */
        public static DOIntensity ($target: UnityEngine.Light, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOShadowStrength_EBB7509C_H33711918
        */
        public static DOShadowStrength ($target: UnityEngine.Light, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOColor_EBB7509C_A839E37C
        */
        public static DOColor ($target: UnityEngine.LineRenderer, $startValue: Color2, $endValue: Color2, $duration: float) : Tweener
        /**
        * @methodSwap DOColor_EBB7509C_H4D8CF334
        */
        public static DOColor ($target: UnityEngine.Material, $endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOColor_EBB7509C_H64FA28E
        */
        public static DOColor ($target: UnityEngine.Material, $endValue: UnityEngine.Color, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOColor_EBB7509C_H8CEA9E89
        */
        public static DOColor ($target: UnityEngine.Material, $endValue: UnityEngine.Color, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOFade_EBB7509C_B9D3FE95
        */
        public static DOFade ($target: UnityEngine.Material, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOFade_EBB7509C_C7F0A531
        */
        public static DOFade ($target: UnityEngine.Material, $endValue: float, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOFade_EBB7509C_H57D2CA04
        */
        public static DOFade ($target: UnityEngine.Material, $endValue: float, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOFloat_EBB7509C_C7F0A531
        */
        public static DOFloat ($target: UnityEngine.Material, $endValue: float, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOFloat_EBB7509C_H57D2CA04
        */
        public static DOFloat ($target: UnityEngine.Material, $endValue: float, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOOffset_EBB7509C_B42F766C
        */
        public static DOOffset ($target: UnityEngine.Material, $endValue: UnityEngine.Vector2, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOOffset_EBB7509C_BC14B96
        */
        public static DOOffset ($target: UnityEngine.Material, $endValue: UnityEngine.Vector2, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOTiling_EBB7509C_B42F766C
        */
        public static DOTiling ($target: UnityEngine.Material, $endValue: UnityEngine.Vector2, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOTiling_EBB7509C_BC14B96
        */
        public static DOTiling ($target: UnityEngine.Material, $endValue: UnityEngine.Vector2, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOVector_EBB7509C_BBE8387C
        */
        public static DOVector ($target: UnityEngine.Material, $endValue: UnityEngine.Vector4, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOVector_EBB7509C_AF9020A7
        */
        public static DOVector ($target: UnityEngine.Material, $endValue: UnityEngine.Vector4, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOResize_EBB7509C_H95DEA7C
        */
        public static DOResize ($target: UnityEngine.TrailRenderer, $toStartWidth: float, $toEndWidth: float, $duration: float) : Tweener
        /**
        * @methodSwap DOTime_EBB7509C_H64B355EB
        */
        public static DOTime ($target: UnityEngine.TrailRenderer, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOMove_EBB7509C_H4ED540EB
        */
        public static DOMove ($target: UnityEngine.Transform, $endValue: UnityEngine.Vector3, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOMoveX_EBB7509C_FA030C97
        */
        public static DOMoveX ($target: UnityEngine.Transform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOMoveY_EBB7509C_FA030C97
        */
        public static DOMoveY ($target: UnityEngine.Transform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOMoveZ_EBB7509C_FA030C97
        */
        public static DOMoveZ ($target: UnityEngine.Transform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOLocalMove_EBB7509C_H4ED540EB
        */
        public static DOLocalMove ($target: UnityEngine.Transform, $endValue: UnityEngine.Vector3, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOLocalMoveX_EBB7509C_FA030C97
        */
        public static DOLocalMoveX ($target: UnityEngine.Transform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOLocalMoveY_EBB7509C_FA030C97
        */
        public static DOLocalMoveY ($target: UnityEngine.Transform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOLocalMoveZ_EBB7509C_FA030C97
        */
        public static DOLocalMoveZ ($target: UnityEngine.Transform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DORotate_EBB7509C_H3ECEEF9E
        */
        public static DORotate ($target: UnityEngine.Transform, $endValue: UnityEngine.Vector3, $duration: float, $mode?: RotateMode) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>
        /**
        * @methodSwap DORotateQuaternion_EBB7509C_H5B4D704E
        */
        public static DORotateQuaternion ($target: UnityEngine.Transform, $endValue: UnityEngine.Quaternion, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Quaternion, DG_Tweening_Plugins_Options.NoOptions>
        /**
        * @methodSwap DOLocalRotate_EBB7509C_H3ECEEF9E
        */
        public static DOLocalRotate ($target: UnityEngine.Transform, $endValue: UnityEngine.Vector3, $duration: float, $mode?: RotateMode) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>
        /**
        * @methodSwap DOLocalRotateQuaternion_EBB7509C_H5B4D704E
        */
        public static DOLocalRotateQuaternion ($target: UnityEngine.Transform, $endValue: UnityEngine.Quaternion, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Quaternion, DG_Tweening_Plugins_Options.NoOptions>
        /**
        * @methodSwap DOScale_EBB7509C_B1D36C00
        */
        public static DOScale ($target: UnityEngine.Transform, $endValue: UnityEngine.Vector3, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOScale_EBB7509C_H82C2C8BC
        */
        public static DOScale ($target: UnityEngine.Transform, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOScaleX_EBB7509C_H82C2C8BC
        */
        public static DOScaleX ($target: UnityEngine.Transform, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOScaleY_EBB7509C_H82C2C8BC
        */
        public static DOScaleY ($target: UnityEngine.Transform, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOScaleZ_EBB7509C_H82C2C8BC
        */
        public static DOScaleZ ($target: UnityEngine.Transform, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOLookAt_EBB7509C_BCBDB104
        */
        public static DOLookAt ($target: UnityEngine.Transform, $towards: UnityEngine.Vector3, $duration: float, $axisConstraint?: AxisConstraint, $up?: System.Nullable$1<UnityEngine.Vector3>) : Tweener
        /**
        * @methodSwap DOPunchPosition_EBB7509C_E2AF971F
        */
        public static DOPunchPosition ($target: UnityEngine.Transform, $punch: UnityEngine.Vector3, $duration: float, $vibrato?: int, $elasticity?: float, $snapping?: boolean) : Tweener
        /**
        * @methodSwap DOPunchScale_EBB7509C_E2DC2584
        */
        public static DOPunchScale ($target: UnityEngine.Transform, $punch: UnityEngine.Vector3, $duration: float, $vibrato?: int, $elasticity?: float) : Tweener
        /**
        * @methodSwap DOPunchRotation_EBB7509C_E2DC2584
        */
        public static DOPunchRotation ($target: UnityEngine.Transform, $punch: UnityEngine.Vector3, $duration: float, $vibrato?: int, $elasticity?: float) : Tweener
        /**
        * @methodSwap DOShakePosition_EBB7509C_H9D4C0AF4
        */
        public static DOShakePosition ($target: UnityEngine.Transform, $duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $snapping?: boolean, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOShakePosition_EBB7509C_H7A6432E4
        */
        public static DOShakePosition ($target: UnityEngine.Transform, $duration: float, $strength: UnityEngine.Vector3, $vibrato?: int, $randomness?: float, $snapping?: boolean, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOShakeRotation_EBB7509C_H28250813
        */
        public static DOShakeRotation ($target: UnityEngine.Transform, $duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOShakeRotation_EBB7509C_C5DF3783
        */
        public static DOShakeRotation ($target: UnityEngine.Transform, $duration: float, $strength: UnityEngine.Vector3, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOShakeScale_EBB7509C_H28250813
        */
        public static DOShakeScale ($target: UnityEngine.Transform, $duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOShakeScale_EBB7509C_C5DF3783
        */
        public static DOShakeScale ($target: UnityEngine.Transform, $duration: float, $strength: UnityEngine.Vector3, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOJump_EBB7509C_E2AF971F
        */
        public static DOJump ($target: UnityEngine.Transform, $endValue: UnityEngine.Vector3, $jumpPower: float, $numJumps: int, $duration: float, $snapping?: boolean) : Sequence
        /**
        * @methodSwap DOLocalJump_EBB7509C_E2AF971F
        */
        public static DOLocalJump ($target: UnityEngine.Transform, $endValue: UnityEngine.Vector3, $jumpPower: float, $numJumps: int, $duration: float, $snapping?: boolean) : Sequence
        /**
        * @methodSwap DOPath_EBB7509C_AE06B175
        */
        public static DOPath ($target: UnityEngine.Transform, $path: UnityEngine.Vector3[], $duration: float, $pathType?: PathType, $pathMode?: PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<UnityEngine.Color>) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @methodSwap DOLocalPath_EBB7509C_AE06B175
        */
        public static DOLocalPath ($target: UnityEngine.Transform, $path: UnityEngine.Vector3[], $duration: float, $pathType?: PathType, $pathMode?: PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<UnityEngine.Color>) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @methodSwap DOPath_EBB7509C_D8CF4541
        */
        public static DOPath ($target: UnityEngine.Transform, $path: DG_Tweening_Plugins_Core_PathCore.Path, $duration: float, $pathMode?: PathMode) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @methodSwap DOLocalPath_EBB7509C_D8CF4541
        */
        public static DOLocalPath ($target: UnityEngine.Transform, $path: DG_Tweening_Plugins_Core_PathCore.Path, $duration: float, $pathMode?: PathMode) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @methodSwap DOTimeScale_EBB7509C_A7BEB9D8
        */
        public static DOTimeScale ($target: Tween, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOBlendableColor_EBB7509C_H12FC6D8D
        */
        public static DOBlendableColor ($target: UnityEngine.Light, $endValue: UnityEngine.Color, $duration: float) : Tweener
        /**
        * @methodSwap DOBlendableColor_EBB7509C_H4D8CF334
        */
        public static DOBlendableColor ($target: UnityEngine.Material, $endValue: UnityEngine.Color, $duration: float) : Tweener
        /**
        * @methodSwap DOBlendableColor_EBB7509C_H64FA28E
        */
        public static DOBlendableColor ($target: UnityEngine.Material, $endValue: UnityEngine.Color, $property: string, $duration: float) : Tweener
        /**
        * @methodSwap DOBlendableColor_EBB7509C_H8CEA9E89
        */
        public static DOBlendableColor ($target: UnityEngine.Material, $endValue: UnityEngine.Color, $propertyID: int, $duration: float) : Tweener
        /**
        * @methodSwap DOBlendableMoveBy_EBB7509C_H4ED540EB
        */
        public static DOBlendableMoveBy ($target: UnityEngine.Transform, $byValue: UnityEngine.Vector3, $duration: float, $snapping?: boolean) : Tweener
        /**
        * @methodSwap DOBlendableLocalMoveBy_EBB7509C_H4ED540EB
        */
        public static DOBlendableLocalMoveBy ($target: UnityEngine.Transform, $byValue: UnityEngine.Vector3, $duration: float, $snapping?: boolean) : Tweener
        /**
        * @methodSwap DOBlendableRotateBy_EBB7509C_H3ECEEF9E
        */
        public static DOBlendableRotateBy ($target: UnityEngine.Transform, $byValue: UnityEngine.Vector3, $duration: float, $mode?: RotateMode) : Tweener
        /**
        * @methodSwap DOBlendableLocalRotateBy_EBB7509C_H3ECEEF9E
        */
        public static DOBlendableLocalRotateBy ($target: UnityEngine.Transform, $byValue: UnityEngine.Vector3, $duration: float, $mode?: RotateMode) : Tweener
        /**
        * @methodSwap DOBlendablePunchRotation_EBB7509C_E2DC2584
        */
        public static DOBlendablePunchRotation ($target: UnityEngine.Transform, $punch: UnityEngine.Vector3, $duration: float, $vibrato?: int, $elasticity?: float) : Tweener
        /**
        * @methodSwap DOBlendableScaleBy_EBB7509C_B1D36C00
        */
        public static DOBlendableScaleBy ($target: UnityEngine.Transform, $byValue: UnityEngine.Vector3, $duration: float) : Tweener
        public static DOComplete ($target: UnityEngine.Component, $withCallbacks?: boolean) : int
        public static DOComplete ($target: UnityEngine.Material, $withCallbacks?: boolean) : int
        public static DOKill ($target: UnityEngine.Component, $complete?: boolean) : int
        public static DOKill ($target: UnityEngine.Material, $complete?: boolean) : int
        public static DOFlip ($target: UnityEngine.Component) : int
        public static DOFlip ($target: UnityEngine.Material) : int
        /**
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        public static DOGoto ($target: UnityEngine.Component, $to: float, $andPlay?: boolean) : int
        /**
        * @methodSwap DOGoto_EBB7509C_H7D25926B
        */
        public static DOGoto ($target: UnityEngine.Material, $to: float, $andPlay?: boolean) : int
        public static DOPause ($target: UnityEngine.Component) : int
        public static DOPause ($target: UnityEngine.Material) : int
        public static DOPlay ($target: UnityEngine.Component) : int
        public static DOPlay ($target: UnityEngine.Material) : int
        public static DOPlayBackwards ($target: UnityEngine.Component) : int
        public static DOPlayBackwards ($target: UnityEngine.Material) : int
        public static DOPlayForward ($target: UnityEngine.Component) : int
        public static DOPlayForward ($target: UnityEngine.Material) : int
        public static DORestart ($target: UnityEngine.Component, $includeDelay?: boolean) : int
        public static DORestart ($target: UnityEngine.Material, $includeDelay?: boolean) : int
        public static DORewind ($target: UnityEngine.Component, $includeDelay?: boolean) : int
        public static DORewind ($target: UnityEngine.Material, $includeDelay?: boolean) : int
        public static DOSmoothRewind ($target: UnityEngine.Component) : int
        public static DOSmoothRewind ($target: UnityEngine.Material) : int
        public static DOTogglePause ($target: UnityEngine.Component) : int
        public static DOTogglePause ($target: UnityEngine.Material) : int
    }

    class TweenParams extends System.Object {

        public static Params : TweenParams

        public constructor ()
        public Clear () : TweenParams
        public SetAutoKill ($autoKillOnCompletion?: boolean) : TweenParams
        public SetId ($id: any) : TweenParams
        public SetTarget ($target: any) : TweenParams
        public SetLoops ($loops: int, $loopType?: System.Nullable$1<LoopType>) : TweenParams
        public SetEase ($ease: Ease, $overshootOrAmplitude?: System.Nullable$1<float>, $period?: System.Nullable$1<float>) : TweenParams
        public SetEase ($animCurve: UnityEngine.AnimationCurve) : TweenParams
        public SetEase ($customEase: EaseFunction) : TweenParams
        public SetRecyclable ($recyclable?: boolean) : TweenParams
        public SetUpdate ($isIndependentUpdate: boolean) : TweenParams
        public SetUpdate ($updateType: UpdateType, $isIndependentUpdate?: boolean) : TweenParams
        public OnStart ($action: TweenCallback) : TweenParams
        public OnPlay ($action: TweenCallback) : TweenParams
        public OnRewind ($action: TweenCallback) : TweenParams
        public OnUpdate ($action: TweenCallback) : TweenParams
        public OnStepComplete ($action: TweenCallback) : TweenParams
        public OnComplete ($action: TweenCallback) : TweenParams
        public OnKill ($action: TweenCallback) : TweenParams
        public OnWaypointChange ($action: TweenCallback$1<int>) : TweenParams
        public SetDelay ($delay: float) : TweenParams
        public SetRelative ($isRelative?: boolean) : TweenParams
        public SetSpeedBased ($isSpeedBased?: boolean) : TweenParams
    }

    class TweenSettingsExtensions {

        public static SetAutoKill<T extends Tween> ($t: T) : T
        public static SetAutoKill<T extends Tween> ($t: T, $autoKillOnCompletion: boolean) : T
        public static SetId<T extends Tween> ($t: T, $objectId: any) : T
        public static SetId<T extends Tween> ($t: T, $stringId: string) : T
        /**
        * @methodSwap SetId_EBB7509C_H6D080506
        */
        public static SetId<T extends Tween> ($t: T, $intId: int) : T
        public static SetLink<T extends Tween> ($t: T, $gameObject: UnityEngine.GameObject) : T
        public static SetLink<T extends Tween> ($t: T, $gameObject: UnityEngine.GameObject, $behaviour: LinkBehaviour) : T
        public static SetTarget<T extends Tween> ($t: T, $target: any) : T
        /**
        * @methodSwap SetLoops_EBB7509C_H6D080506
        */
        public static SetLoops<T extends Tween> ($t: T, $loops: int) : T
        /**
        * @methodSwap SetLoops_EBB7509C_H75B26E92
        */
        public static SetLoops<T extends Tween> ($t: T, $loops: int, $loopType: LoopType) : T
        public static SetEase<T extends Tween> ($t: T, $ease: Ease) : T
        /**
        * @methodSwap SetEase_EBB7509C_D4424BD2
        */
        public static SetEase<T extends Tween> ($t: T, $ease: Ease, $overshoot: float) : T
        /**
        * @methodSwap SetEase_EBB7509C_DAC7650B
        */
        public static SetEase<T extends Tween> ($t: T, $ease: Ease, $amplitude: float, $period: float) : T
        public static SetEase<T extends Tween> ($t: T, $animCurve: UnityEngine.AnimationCurve) : T
        public static SetEase<T extends Tween> ($t: T, $customEase: EaseFunction) : T
        public static SetRecyclable<T extends Tween> ($t: T) : T
        public static SetRecyclable<T extends Tween> ($t: T, $recyclable: boolean) : T
        public static SetUpdate<T extends Tween> ($t: T, $isIndependentUpdate: boolean) : T
        public static SetUpdate<T extends Tween> ($t: T, $updateType: UpdateType) : T
        public static SetUpdate<T extends Tween> ($t: T, $updateType: UpdateType, $isIndependentUpdate: boolean) : T
        public static OnStart<T extends Tween> ($t: T, $action: TweenCallback) : T
        public static OnPlay<T extends Tween> ($t: T, $action: TweenCallback) : T
        public static OnPause<T extends Tween> ($t: T, $action: TweenCallback) : T
        public static OnRewind<T extends Tween> ($t: T, $action: TweenCallback) : T
        public static OnUpdate<T extends Tween> ($t: T, $action: TweenCallback) : T
        public static OnStepComplete<T extends Tween> ($t: T, $action: TweenCallback) : T
        public static OnComplete<T extends Tween> ($t: T, $action: TweenCallback) : T
        public static OnKill<T extends Tween> ($t: T, $action: TweenCallback) : T
        public static OnWaypointChange<T extends Tween> ($t: T, $action: TweenCallback$1<int>) : T
        public static SetAs<T extends Tween> ($t: T, $asTween: Tween) : T
        public static SetAs<T extends Tween> ($t: T, $tweenParams: TweenParams) : T
        public static Append ($s: Sequence, $t: Tween) : Sequence
        public static Prepend ($s: Sequence, $t: Tween) : Sequence
        public static Join ($s: Sequence, $t: Tween) : Sequence
        /**
        * @methodSwap Insert_EBB7509C_H50A5ED8
        */
        public static Insert ($s: Sequence, $atPosition: float, $t: Tween) : Sequence
        /**
        * @methodSwap AppendInterval_EBB7509C_H88207AB
        */
        public static AppendInterval ($s: Sequence, $interval: float) : Sequence
        /**
        * @methodSwap PrependInterval_EBB7509C_H88207AB
        */
        public static PrependInterval ($s: Sequence, $interval: float) : Sequence
        public static AppendCallback ($s: Sequence, $callback: TweenCallback) : Sequence
        public static PrependCallback ($s: Sequence, $callback: TweenCallback) : Sequence
        /**
        * @methodSwap InsertCallback_EBB7509C_H5A1C8B83
        */
        public static InsertCallback ($s: Sequence, $atPosition: float, $callback: TweenCallback) : Sequence
        public static From<T extends Tweener> ($t: T) : T
        public static From<T extends Tweener> ($t: T, $isRelative: boolean) : T
        public static From<T1,T2,TPlugOptions extends DG_Tweening_Plugins_Options.IPlugOptions> ($t: DG_Tweening_Core.TweenerCore$3<T1, T2, TPlugOptions>, $fromValue: T2, $setImmediately?: boolean, $isRelative?: boolean) : DG_Tweening_Core.TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @methodSwap From_EBB7509C_E2F0714C
        */
        public static From ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>, $fromAlphaValue: float, $setImmediately?: boolean, $isRelative?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap From_EBB7509C_BD94BDDE
        */
        public static From ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>, $fromValue: float, $setImmediately?: boolean, $isRelative?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap SetDelay_EBB7509C_EB9E40E2
        */
        public static SetDelay<T extends Tween> ($t: T, $delay: float) : T
        /**
        * @methodSwap SetDelay_EBB7509C_H472A1A61
        */
        public static SetDelay<T extends Tween> ($t: T, $delay: float, $asPrependedIntervalIfSequence: boolean) : T
        public static SetRelative<T extends Tween> ($t: T) : T
        public static SetRelative<T extends Tween> ($t: T, $isRelative: boolean) : T
        public static SetSpeedBased<T extends Tween> ($t: T) : T
        public static SetSpeedBased<T extends Tween> ($t: T, $isSpeedBased: boolean) : T
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>, $snapping: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>, $snapping: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>, $axisConstraint: AxisConstraint, $snapping?: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>, $snapping: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>, $axisConstraint: AxisConstraint, $snapping?: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>, $snapping: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>, $axisConstraint: AxisConstraint, $snapping?: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>, $useShortest360Route?: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>, $alphaOnly: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Rect, UnityEngine.Rect, DG_Tweening_Plugins_Options.RectOptions>, $snapping: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<string, string, DG_Tweening_Plugins_Options.StringOptions>, $richTextEnabled: boolean, $scrambleMode?: ScrambleMode, $scrambleChars?: string) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>, $snapping: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>, $axisConstraint: AxisConstraint, $snapping?: boolean) : Tweener
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $lockPosition: AxisConstraint, $lockRotation?: AxisConstraint) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        public static SetOptions ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $closePath: boolean, $lockPosition?: AxisConstraint, $lockRotation?: AxisConstraint) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        public static SetLookAt ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $lookAtPosition: UnityEngine.Vector3, $forwardDirection?: System.Nullable$1<UnityEngine.Vector3>, $up?: System.Nullable$1<UnityEngine.Vector3>) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        public static SetLookAt ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $lookAtPosition: UnityEngine.Vector3, $stableZRotation: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        public static SetLookAt ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $lookAtTransform: UnityEngine.Transform, $forwardDirection?: System.Nullable$1<UnityEngine.Vector3>, $up?: System.Nullable$1<UnityEngine.Vector3>) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        public static SetLookAt ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $lookAtTransform: UnityEngine.Transform, $stableZRotation: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @methodSwap SetLookAt_EBB7509C_H69D03BB
        */
        public static SetLookAt ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $lookAhead: float, $forwardDirection?: System.Nullable$1<UnityEngine.Vector3>, $up?: System.Nullable$1<UnityEngine.Vector3>) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @methodSwap SetLookAt_EBB7509C_H563C0EA4
        */
        public static SetLookAt ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $lookAhead: float, $stableZRotation: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
    }

    enum TweenType {
        Tweener = 0,
        Sequence = 1,
        Callback = 2 
    }

    interface Tweener {

        /**
        * @extension DG.Tweening.TweenExtensions.Complete
        */
        Complete () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Complete
        */
        Complete ($withCallbacks: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Flip
        */
        Flip () : void
        /**
        * @extension DG.Tweening.TweenExtensions.ForceInit
        */
        ForceInit () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Goto
        * @methodSwap Goto_EBB7509C_E1C176D8
        */
        Goto ($to: float, $andPlay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Kill
        */
        Kill ($complete?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Pause
        */
        Pause () : Tweener
        /**
        * @extension DG.Tweening.TweenExtensions.Play
        */
        Play () : Tweener
        /**
        * @extension DG.Tweening.TweenExtensions.PlayBackwards
        */
        PlayBackwards () : void
        /**
        * @extension DG.Tweening.TweenExtensions.PlayForward
        */
        PlayForward () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Restart
        * @methodSwap Restart_EBB7509C_BA558FEA
        */
        Restart ($includeDelay?: boolean, $changeDelayTo?: float) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Rewind
        */
        Rewind ($includeDelay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.SmoothRewind
        */
        SmoothRewind () : void
        /**
        * @extension DG.Tweening.TweenExtensions.TogglePause
        */
        TogglePause () : void
        /**
        * @extension DG.Tweening.TweenExtensions.GotoWaypoint
        * @methodSwap GotoWaypoint_EBB7509C_H40296D8E
        */
        GotoWaypoint ($waypointIndex: int, $andPlay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForCompletion
        */
        WaitForCompletion () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForRewind
        */
        WaitForRewind () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForKill
        */
        WaitForKill () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForElapsedLoops
        * @methodSwap WaitForElapsedLoops_EBB7509C_H3AE295E1
        */
        WaitForElapsedLoops ($elapsedLoops: int) : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForPosition
        * @methodSwap WaitForPosition_EBB7509C_H84EE7387
        */
        WaitForPosition ($position: float) : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForStart
        */
        WaitForStart () : UnityEngine.Coroutine
        /**
        * @extension DG.Tweening.TweenExtensions.CompletedLoops
        */
        CompletedLoops () : int
        /**
        * @extension DG.Tweening.TweenExtensions.Delay
        */
        Delay () : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedDelay
        */
        ElapsedDelay () : float
        /**
        * @extension DG.Tweening.TweenExtensions.Duration
        */
        Duration ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.Elapsed
        */
        Elapsed ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedPercentage
        */
        ElapsedPercentage ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage
        */
        ElapsedDirectionalPercentage () : float
        /**
        * @extension DG.Tweening.TweenExtensions.IsActive
        */
        IsActive () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsBackwards
        */
        IsBackwards () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsComplete
        */
        IsComplete () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsInitialized
        */
        IsInitialized () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsPlaying
        */
        IsPlaying () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.Loops
        */
        Loops () : int
        /**
        * @extension DG.Tweening.TweenExtensions.PathGetPoint
        * @methodSwap PathGetPoint_EBB7509C_H84EE7387
        */
        PathGetPoint ($pathPercentage: float) : UnityEngine.Vector3
        /**
        * @extension DG.Tweening.TweenExtensions.PathGetDrawPoints
        * @methodSwap PathGetDrawPoints_EBB7509C_H3AE295E1
        */
        PathGetDrawPoints ($subdivisionsXSegment?: int) : UnityEngine.Vector3[]
        /**
        * @extension DG.Tweening.TweenExtensions.PathLength
        */
        PathLength () : float
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTimeScale
        * @methodSwap DOTimeScale_EBB7509C_A7BEB9D8
        */
        DOTimeScale ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAutoKill
        */
        SetAutoKill () : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAutoKill
        */
        SetAutoKill ($autoKillOnCompletion: boolean) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        */
        SetId ($objectId: any) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        */
        SetId ($stringId: string) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        * @methodSwap SetId_EBB7509C_H44C2A3E2
        */
        SetId ($intId: int) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLink
        */
        SetLink ($gameObject: UnityEngine.GameObject) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLink
        */
        SetLink ($gameObject: UnityEngine.GameObject, $behaviour: LinkBehaviour) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetTarget
        */
        SetTarget ($target: any) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLoops
        * @methodSwap SetLoops_EBB7509C_H44C2A3E2
        */
        SetLoops ($loops: int) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLoops
        * @methodSwap SetLoops_EBB7509C_CE440C16
        */
        SetLoops ($loops: int, $loopType: LoopType) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($ease: Ease) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        * @methodSwap SetEase_EBB7509C_BAB57526
        */
        SetEase ($ease: Ease, $overshoot: float) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        * @methodSwap SetEase_EBB7509C_H466D45BF
        */
        SetEase ($ease: Ease, $amplitude: float, $period: float) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($animCurve: UnityEngine.AnimationCurve) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($customEase: EaseFunction) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRecyclable
        */
        SetRecyclable () : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRecyclable
        */
        SetRecyclable ($recyclable: boolean) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($isIndependentUpdate: boolean) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($updateType: UpdateType) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($updateType: UpdateType, $isIndependentUpdate: boolean) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnStart
        */
        OnStart ($action: TweenCallback) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnPlay
        */
        OnPlay ($action: TweenCallback) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnPause
        */
        OnPause ($action: TweenCallback) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnRewind
        */
        OnRewind ($action: TweenCallback) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnUpdate
        */
        OnUpdate ($action: TweenCallback) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnStepComplete
        */
        OnStepComplete ($action: TweenCallback) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnComplete
        */
        OnComplete ($action: TweenCallback) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnKill
        */
        OnKill ($action: TweenCallback) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnWaypointChange
        */
        OnWaypointChange ($action: TweenCallback$1<int>) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAs
        */
        SetAs ($asTween: Tween) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAs
        */
        SetAs ($tweenParams: TweenParams) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.From
        */
        From () : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.From
        */
        From ($isRelative: boolean) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetDelay
        * @methodSwap SetDelay_EBB7509C_H95E69766
        */
        SetDelay ($delay: float) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetDelay
        * @methodSwap SetDelay_EBB7509C_E38F7245
        */
        SetDelay ($delay: float, $asPrependedIntervalIfSequence: boolean) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRelative
        */
        SetRelative () : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRelative
        */
        SetRelative ($isRelative: boolean) : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetSpeedBased
        */
        SetSpeedBased () : Tweener
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetSpeedBased
        */
        SetSpeedBased ($isSpeedBased: boolean) : Tweener
        /**
        * @extension DG.Tweening.Core.Extensions.SetSpecialStartupMode
        */
        SetSpecialStartupMode ($mode: DG_Tweening_Core_Enums.SpecialStartupMode) : Tweener
    }

    interface Tween {

        /**
        * @extension DG.Tweening.TweenExtensions.Complete
        */
        Complete () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Complete
        */
        Complete ($withCallbacks: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Flip
        */
        Flip () : void
        /**
        * @extension DG.Tweening.TweenExtensions.ForceInit
        */
        ForceInit () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Goto
        * @methodSwap Goto_EBB7509C_E1C176D8
        */
        Goto ($to: float, $andPlay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Kill
        */
        Kill ($complete?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Pause
        */
        Pause () : Tween
        /**
        * @extension DG.Tweening.TweenExtensions.Play
        */
        Play () : Tween
        /**
        * @extension DG.Tweening.TweenExtensions.PlayBackwards
        */
        PlayBackwards () : void
        /**
        * @extension DG.Tweening.TweenExtensions.PlayForward
        */
        PlayForward () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Restart
        * @methodSwap Restart_EBB7509C_BA558FEA
        */
        Restart ($includeDelay?: boolean, $changeDelayTo?: float) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Rewind
        */
        Rewind ($includeDelay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.SmoothRewind
        */
        SmoothRewind () : void
        /**
        * @extension DG.Tweening.TweenExtensions.TogglePause
        */
        TogglePause () : void
        /**
        * @extension DG.Tweening.TweenExtensions.GotoWaypoint
        * @methodSwap GotoWaypoint_EBB7509C_H40296D8E
        */
        GotoWaypoint ($waypointIndex: int, $andPlay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForCompletion
        */
        WaitForCompletion () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForRewind
        */
        WaitForRewind () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForKill
        */
        WaitForKill () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForElapsedLoops
        * @methodSwap WaitForElapsedLoops_EBB7509C_H3AE295E1
        */
        WaitForElapsedLoops ($elapsedLoops: int) : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForPosition
        * @methodSwap WaitForPosition_EBB7509C_H84EE7387
        */
        WaitForPosition ($position: float) : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForStart
        */
        WaitForStart () : UnityEngine.Coroutine
        /**
        * @extension DG.Tweening.TweenExtensions.CompletedLoops
        */
        CompletedLoops () : int
        /**
        * @extension DG.Tweening.TweenExtensions.Delay
        */
        Delay () : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedDelay
        */
        ElapsedDelay () : float
        /**
        * @extension DG.Tweening.TweenExtensions.Duration
        */
        Duration ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.Elapsed
        */
        Elapsed ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedPercentage
        */
        ElapsedPercentage ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage
        */
        ElapsedDirectionalPercentage () : float
        /**
        * @extension DG.Tweening.TweenExtensions.IsActive
        */
        IsActive () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsBackwards
        */
        IsBackwards () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsComplete
        */
        IsComplete () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsInitialized
        */
        IsInitialized () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsPlaying
        */
        IsPlaying () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.Loops
        */
        Loops () : int
        /**
        * @extension DG.Tweening.TweenExtensions.PathGetPoint
        * @methodSwap PathGetPoint_EBB7509C_H84EE7387
        */
        PathGetPoint ($pathPercentage: float) : UnityEngine.Vector3
        /**
        * @extension DG.Tweening.TweenExtensions.PathGetDrawPoints
        * @methodSwap PathGetDrawPoints_EBB7509C_H3AE295E1
        */
        PathGetDrawPoints ($subdivisionsXSegment?: int) : UnityEngine.Vector3[]
        /**
        * @extension DG.Tweening.TweenExtensions.PathLength
        */
        PathLength () : float
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTimeScale
        * @methodSwap DOTimeScale_EBB7509C_A7BEB9D8
        */
        DOTimeScale ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAutoKill
        */
        SetAutoKill () : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAutoKill
        */
        SetAutoKill ($autoKillOnCompletion: boolean) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        */
        SetId ($objectId: any) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        */
        SetId ($stringId: string) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        * @methodSwap SetId_EBB7509C_H3AE295E1
        */
        SetId ($intId: int) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLink
        */
        SetLink ($gameObject: UnityEngine.GameObject) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLink
        */
        SetLink ($gameObject: UnityEngine.GameObject, $behaviour: LinkBehaviour) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetTarget
        */
        SetTarget ($target: any) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLoops
        * @methodSwap SetLoops_EBB7509C_H3AE295E1
        */
        SetLoops ($loops: int) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLoops
        * @methodSwap SetLoops_EBB7509C_H963B2669
        */
        SetLoops ($loops: int, $loopType: LoopType) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($ease: Ease) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        * @methodSwap SetEase_EBB7509C_AC5B007
        */
        SetEase ($ease: Ease, $overshoot: float) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        * @methodSwap SetEase_EBB7509C_H148DBB58
        */
        SetEase ($ease: Ease, $amplitude: float, $period: float) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($animCurve: UnityEngine.AnimationCurve) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($customEase: EaseFunction) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRecyclable
        */
        SetRecyclable () : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRecyclable
        */
        SetRecyclable ($recyclable: boolean) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($isIndependentUpdate: boolean) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($updateType: UpdateType) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($updateType: UpdateType, $isIndependentUpdate: boolean) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnStart
        */
        OnStart ($action: TweenCallback) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnPlay
        */
        OnPlay ($action: TweenCallback) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnPause
        */
        OnPause ($action: TweenCallback) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnRewind
        */
        OnRewind ($action: TweenCallback) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnUpdate
        */
        OnUpdate ($action: TweenCallback) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnStepComplete
        */
        OnStepComplete ($action: TweenCallback) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnComplete
        */
        OnComplete ($action: TweenCallback) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnKill
        */
        OnKill ($action: TweenCallback) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnWaypointChange
        */
        OnWaypointChange ($action: TweenCallback$1<int>) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAs
        */
        SetAs ($asTween: Tween) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAs
        */
        SetAs ($tweenParams: TweenParams) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetDelay
        * @methodSwap SetDelay_EBB7509C_H84EE7387
        */
        SetDelay ($delay: float) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetDelay
        * @methodSwap SetDelay_EBB7509C_E1C176D8
        */
        SetDelay ($delay: float, $asPrependedIntervalIfSequence: boolean) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRelative
        */
        SetRelative () : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRelative
        */
        SetRelative ($isRelative: boolean) : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetSpeedBased
        */
        SetSpeedBased () : Tween
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetSpeedBased
        */
        SetSpeedBased ($isSpeedBased: boolean) : Tween
        /**
        * @extension DG.Tweening.Core.Extensions.SetSpecialStartupMode
        */
        SetSpecialStartupMode ($mode: DG_Tweening_Core_Enums.SpecialStartupMode) : Tween
    }

    interface Sequence {

        /**
        * @extension DG.Tweening.TweenExtensions.Complete
        */
        Complete () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Complete
        */
        Complete ($withCallbacks: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Flip
        */
        Flip () : void
        /**
        * @extension DG.Tweening.TweenExtensions.ForceInit
        */
        ForceInit () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Goto
        * @methodSwap Goto_EBB7509C_E1C176D8
        */
        Goto ($to: float, $andPlay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Kill
        */
        Kill ($complete?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Pause
        */
        Pause () : Sequence
        /**
        * @extension DG.Tweening.TweenExtensions.Play
        */
        Play () : Sequence
        /**
        * @extension DG.Tweening.TweenExtensions.PlayBackwards
        */
        PlayBackwards () : void
        /**
        * @extension DG.Tweening.TweenExtensions.PlayForward
        */
        PlayForward () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Restart
        * @methodSwap Restart_EBB7509C_BA558FEA
        */
        Restart ($includeDelay?: boolean, $changeDelayTo?: float) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Rewind
        */
        Rewind ($includeDelay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.SmoothRewind
        */
        SmoothRewind () : void
        /**
        * @extension DG.Tweening.TweenExtensions.TogglePause
        */
        TogglePause () : void
        /**
        * @extension DG.Tweening.TweenExtensions.GotoWaypoint
        * @methodSwap GotoWaypoint_EBB7509C_H40296D8E
        */
        GotoWaypoint ($waypointIndex: int, $andPlay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForCompletion
        */
        WaitForCompletion () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForRewind
        */
        WaitForRewind () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForKill
        */
        WaitForKill () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForElapsedLoops
        * @methodSwap WaitForElapsedLoops_EBB7509C_H3AE295E1
        */
        WaitForElapsedLoops ($elapsedLoops: int) : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForPosition
        * @methodSwap WaitForPosition_EBB7509C_H84EE7387
        */
        WaitForPosition ($position: float) : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForStart
        */
        WaitForStart () : UnityEngine.Coroutine
        /**
        * @extension DG.Tweening.TweenExtensions.CompletedLoops
        */
        CompletedLoops () : int
        /**
        * @extension DG.Tweening.TweenExtensions.Delay
        */
        Delay () : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedDelay
        */
        ElapsedDelay () : float
        /**
        * @extension DG.Tweening.TweenExtensions.Duration
        */
        Duration ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.Elapsed
        */
        Elapsed ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedPercentage
        */
        ElapsedPercentage ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage
        */
        ElapsedDirectionalPercentage () : float
        /**
        * @extension DG.Tweening.TweenExtensions.IsActive
        */
        IsActive () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsBackwards
        */
        IsBackwards () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsComplete
        */
        IsComplete () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsInitialized
        */
        IsInitialized () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsPlaying
        */
        IsPlaying () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.Loops
        */
        Loops () : int
        /**
        * @extension DG.Tweening.TweenExtensions.PathGetPoint
        * @methodSwap PathGetPoint_EBB7509C_H84EE7387
        */
        PathGetPoint ($pathPercentage: float) : UnityEngine.Vector3
        /**
        * @extension DG.Tweening.TweenExtensions.PathGetDrawPoints
        * @methodSwap PathGetDrawPoints_EBB7509C_H3AE295E1
        */
        PathGetDrawPoints ($subdivisionsXSegment?: int) : UnityEngine.Vector3[]
        /**
        * @extension DG.Tweening.TweenExtensions.PathLength
        */
        PathLength () : float
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTimeScale
        * @methodSwap DOTimeScale_EBB7509C_A7BEB9D8
        */
        DOTimeScale ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAutoKill
        */
        SetAutoKill () : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAutoKill
        */
        SetAutoKill ($autoKillOnCompletion: boolean) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        */
        SetId ($objectId: any) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        */
        SetId ($stringId: string) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        * @methodSwap SetId_EBB7509C_H48486DD
        */
        SetId ($intId: int) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLink
        */
        SetLink ($gameObject: UnityEngine.GameObject) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLink
        */
        SetLink ($gameObject: UnityEngine.GameObject, $behaviour: LinkBehaviour) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetTarget
        */
        SetTarget ($target: any) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLoops
        * @methodSwap SetLoops_EBB7509C_H48486DD
        */
        SetLoops ($loops: int) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLoops
        * @methodSwap SetLoops_EBB7509C_H3CCE962D
        */
        SetLoops ($loops: int, $loopType: LoopType) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($ease: Ease) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        * @methodSwap SetEase_EBB7509C_C27A61CB
        */
        SetEase ($ease: Ease, $overshoot: float) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        * @methodSwap SetEase_EBB7509C_AD6255C
        */
        SetEase ($ease: Ease, $amplitude: float, $period: float) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($animCurve: UnityEngine.AnimationCurve) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($customEase: EaseFunction) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRecyclable
        */
        SetRecyclable () : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRecyclable
        */
        SetRecyclable ($recyclable: boolean) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($isIndependentUpdate: boolean) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($updateType: UpdateType) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($updateType: UpdateType, $isIndependentUpdate: boolean) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnStart
        */
        OnStart ($action: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnPlay
        */
        OnPlay ($action: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnPause
        */
        OnPause ($action: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnRewind
        */
        OnRewind ($action: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnUpdate
        */
        OnUpdate ($action: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnStepComplete
        */
        OnStepComplete ($action: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnComplete
        */
        OnComplete ($action: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnKill
        */
        OnKill ($action: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnWaypointChange
        */
        OnWaypointChange ($action: TweenCallback$1<int>) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAs
        */
        SetAs ($asTween: Tween) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAs
        */
        SetAs ($tweenParams: TweenParams) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.Append
        */
        Append ($t: Tween) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.Prepend
        */
        Prepend ($t: Tween) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.Join
        */
        Join ($t: Tween) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.Insert
        */
        Insert ($atPosition: float, $t: Tween) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.AppendInterval
        */
        AppendInterval ($interval: float) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.PrependInterval
        */
        PrependInterval ($interval: float) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.AppendCallback
        */
        AppendCallback ($callback: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.PrependCallback
        */
        PrependCallback ($callback: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.InsertCallback
        */
        InsertCallback ($atPosition: float, $callback: TweenCallback) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetDelay
        * @methodSwap SetDelay_EBB7509C_H88207AB
        */
        SetDelay ($delay: float) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetDelay
        * @methodSwap SetDelay_EBB7509C_F2CEE06C
        */
        SetDelay ($delay: float, $asPrependedIntervalIfSequence: boolean) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRelative
        */
        SetRelative () : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRelative
        */
        SetRelative ($isRelative: boolean) : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetSpeedBased
        */
        SetSpeedBased () : Sequence
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetSpeedBased
        */
        SetSpeedBased ($isSpeedBased: boolean) : Sequence
        /**
        * @extension DG.Tweening.Core.Extensions.SetSpecialStartupMode
        */
        SetSpecialStartupMode ($mode: DG_Tweening_Core_Enums.SpecialStartupMode) : Sequence
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

    interface IEquatable$1<T> {

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

    interface Nullable$1<T> {

    }

    interface Char extends IComparable, IComparable$1<number>, IConvertible, IEquatable$1<number> {

    }

    interface IComparable$1<T> {

    }

    interface Func$3<T1,T2,TResult> {
        (arg1: T1, arg2: T2) : TResult; 
        Invoke?: (arg1: T1, arg2: T2) => TResult;
    }

    interface Action$4<T1,T2,T3,T4> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void;
    }

}

declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as DG_Tweening_Plugins_Options from 'DG.Tweening.Plugins.Options'
    import * as DG_Tweening_Core from 'DG.Tweening.Core'
    import * as DG_Tweening from 'DG.Tweening'
    import * as DG_Tweening_Plugins_Core_PathCore from 'DG.Tweening.Plugins.Core.PathCore'

    /**
    * Representation of RGBA colors.
    */
    interface Color extends System.IFormattable, System.IEquatable$1<Color> {

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * Representation of four-dimensional vectors.
    */
    interface Vector4 extends System.IFormattable, System.IEquatable$1<Vector4> {

    }

    /**
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    /**
    * A 2D Rectangle defined by X and Y position, width and height.
    */
    interface Rect extends System.IFormattable, System.IEquatable$1<Rect> {

    }

    /**
    * Offsets for rectangles, borders, etc.
    */
    interface RectOffset extends System.IFormattable {

    }

    /**
    * The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback.
    */
    enum LogType {
        Error = 0,
        Assert = 1,
        Warning = 2,
        Log = 3,
        Exception = 4 
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
    * Base class for all objects Unity can reference.
    */
    interface Object {

    }

    /**
    * Store a collection of Keyframes that can be evaluated over time.
    */
    interface AnimationCurve extends System.IEquatable$1<AnimationCurve> {

    }

    /**
    * Base class for all yield instructions.
    */
    interface YieldInstruction {

    }

    /**
    * MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions.
    */
    interface Coroutine {

    }

    /**
    * A Camera is a device through which the player views the world.
    */
    interface Camera {

    }

    /**
    * Script interface for.
    */
    interface Light {

    }

    /**
    * The line renderer is used to draw free-floating lines in 3D space.
    */
    interface LineRenderer {

    }

    /**
    * General functionality for all renderers.
    */
    interface Renderer {

    }

    /**
    * The material class.
    */
    interface Material {

    }

    /**
    * The trail renderer is used to make trails behind objects in the Scene as they move about.
    */
    interface TrailRenderer {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * A class you can derive from if you want to create objects that live independently of GameObjects.
    */
    interface ScriptableObject {

    }

    interface Camera {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOAspect
        */
        DOAspect ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOColor
        * @methodSwap DOColor_EBB7509C_H1EA74B62
        */
        DOColor ($endValue: Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<Color, Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFarClipPlane
        */
        DOFarClipPlane ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFieldOfView
        */
        DOFieldOfView ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DONearClipPlane
        */
        DONearClipPlane ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOOrthoSize
        */
        DOOrthoSize ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPixelRect
        */
        DOPixelRect ($endValue: Rect, $duration: float) : DG_Tweening_Core.TweenerCore$3<Rect, Rect, DG_Tweening_Plugins_Options.RectOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORect
        */
        DORect ($endValue: Rect, $duration: float) : DG_Tweening_Core.TweenerCore$3<Rect, Rect, DG_Tweening_Plugins_Options.RectOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShakePosition
        * @methodSwap DOShakePosition_EBB7509C_F9F3332A
        */
        DOShakePosition ($duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShakePosition
        * @methodSwap DOShakePosition_EBB7509C_H424116E
        */
        DOShakePosition ($duration: float, $strength: Vector3, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShakeRotation
        * @methodSwap DOShakeRotation_EBB7509C_F9F3332A
        */
        DOShakeRotation ($duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShakeRotation
        * @methodSwap DOShakeRotation_EBB7509C_H424116E
        */
        DOShakeRotation ($duration: float, $strength: Vector3, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

    interface Light {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOColor
        * @methodSwap DOColor_EBB7509C_H12FC6D8D
        */
        DOColor ($endValue: Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<Color, Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOIntensity
        */
        DOIntensity ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShadowStrength
        */
        DOShadowStrength ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOBlendableColor
        * @methodSwap DOBlendableColor_EBB7509C_H12FC6D8D
        */
        DOBlendableColor ($endValue: Color, $duration: float) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

    interface LineRenderer {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOColor
        * @methodSwap DOColor_EBB7509C_A839E37C
        */
        DOColor ($startValue: DG_Tweening.Color2, $endValue: DG_Tweening.Color2, $duration: float) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

    interface Material {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOColor
        * @methodSwap DOColor_EBB7509C_H4D8CF334
        */
        DOColor ($endValue: Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<Color, Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOColor
        * @methodSwap DOColor_EBB7509C_H64FA28E
        */
        DOColor ($endValue: Color, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<Color, Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOColor
        * @methodSwap DOColor_EBB7509C_H8CEA9E89
        */
        DOColor ($endValue: Color, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<Color, Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFade
        * @methodSwap DOFade_EBB7509C_B9D3FE95
        */
        DOFade ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<Color, Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFade
        * @methodSwap DOFade_EBB7509C_C7F0A531
        */
        DOFade ($endValue: float, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<Color, Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFade
        * @methodSwap DOFade_EBB7509C_H57D2CA04
        */
        DOFade ($endValue: float, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<Color, Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFloat
        * @methodSwap DOFloat_EBB7509C_C7F0A531
        */
        DOFloat ($endValue: float, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFloat
        * @methodSwap DOFloat_EBB7509C_H57D2CA04
        */
        DOFloat ($endValue: float, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOOffset
        * @methodSwap DOOffset_EBB7509C_B42F766C
        */
        DOOffset ($endValue: Vector2, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOOffset
        * @methodSwap DOOffset_EBB7509C_BC14B96
        */
        DOOffset ($endValue: Vector2, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTiling
        * @methodSwap DOTiling_EBB7509C_B42F766C
        */
        DOTiling ($endValue: Vector2, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTiling
        * @methodSwap DOTiling_EBB7509C_BC14B96
        */
        DOTiling ($endValue: Vector2, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOVector
        * @methodSwap DOVector_EBB7509C_BBE8387C
        */
        DOVector ($endValue: Vector4, $property: string, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector4, Vector4, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOVector
        * @methodSwap DOVector_EBB7509C_AF9020A7
        */
        DOVector ($endValue: Vector4, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector4, Vector4, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOBlendableColor
        * @methodSwap DOBlendableColor_EBB7509C_H4D8CF334
        */
        DOBlendableColor ($endValue: Color, $duration: float) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOBlendableColor
        * @methodSwap DOBlendableColor_EBB7509C_H64FA28E
        */
        DOBlendableColor ($endValue: Color, $property: string, $duration: float) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOBlendableColor
        * @methodSwap DOBlendableColor_EBB7509C_H8CEA9E89
        */
        DOBlendableColor ($endValue: Color, $propertyID: int, $duration: float) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_H7D25926B
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

    interface TrailRenderer {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOResize
        */
        DOResize ($toStartWidth: float, $toEndWidth: float, $duration: float) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTime
        */
        DOTime ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

    interface Transform {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOMove
        */
        DOMove ($endValue: Vector3, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOMoveX
        */
        DOMoveX ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOMoveY
        */
        DOMoveY ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOMoveZ
        */
        DOMoveZ ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOLocalMove
        */
        DOLocalMove ($endValue: Vector3, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOLocalMoveX
        */
        DOLocalMoveX ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOLocalMoveY
        */
        DOLocalMoveY ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOLocalMoveZ
        */
        DOLocalMoveZ ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORotate
        */
        DORotate ($endValue: Vector3, $duration: float, $mode?: DG_Tweening.RotateMode) : DG_Tweening_Core.TweenerCore$3<Quaternion, Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORotateQuaternion
        */
        DORotateQuaternion ($endValue: Quaternion, $duration: float) : DG_Tweening_Core.TweenerCore$3<Quaternion, Quaternion, DG_Tweening_Plugins_Options.NoOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOLocalRotate
        */
        DOLocalRotate ($endValue: Vector3, $duration: float, $mode?: DG_Tweening.RotateMode) : DG_Tweening_Core.TweenerCore$3<Quaternion, Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOLocalRotateQuaternion
        */
        DOLocalRotateQuaternion ($endValue: Quaternion, $duration: float) : DG_Tweening_Core.TweenerCore$3<Quaternion, Quaternion, DG_Tweening_Plugins_Options.NoOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOScale
        * @methodSwap DOScale_EBB7509C_B1D36C00
        */
        DOScale ($endValue: Vector3, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOScale
        * @methodSwap DOScale_EBB7509C_H82C2C8BC
        */
        DOScale ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOScaleX
        */
        DOScaleX ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOScaleY
        */
        DOScaleY ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOScaleZ
        */
        DOScaleZ ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOLookAt
        */
        DOLookAt ($towards: Vector3, $duration: float, $axisConstraint?: DG_Tweening.AxisConstraint, $up?: System.Nullable$1<Vector3>) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPunchPosition
        */
        DOPunchPosition ($punch: Vector3, $duration: float, $vibrato?: int, $elasticity?: float, $snapping?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPunchScale
        */
        DOPunchScale ($punch: Vector3, $duration: float, $vibrato?: int, $elasticity?: float) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPunchRotation
        */
        DOPunchRotation ($punch: Vector3, $duration: float, $vibrato?: int, $elasticity?: float) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShakePosition
        * @methodSwap DOShakePosition_EBB7509C_H9D4C0AF4
        */
        DOShakePosition ($duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $snapping?: boolean, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShakePosition
        * @methodSwap DOShakePosition_EBB7509C_H7A6432E4
        */
        DOShakePosition ($duration: float, $strength: Vector3, $vibrato?: int, $randomness?: float, $snapping?: boolean, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShakeRotation
        * @methodSwap DOShakeRotation_EBB7509C_H28250813
        */
        DOShakeRotation ($duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShakeRotation
        * @methodSwap DOShakeRotation_EBB7509C_C5DF3783
        */
        DOShakeRotation ($duration: float, $strength: Vector3, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShakeScale
        * @methodSwap DOShakeScale_EBB7509C_H28250813
        */
        DOShakeScale ($duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOShakeScale
        * @methodSwap DOShakeScale_EBB7509C_C5DF3783
        */
        DOShakeScale ($duration: float, $strength: Vector3, $vibrato?: int, $randomness?: float, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOJump
        */
        DOJump ($endValue: Vector3, $jumpPower: float, $numJumps: int, $duration: float, $snapping?: boolean) : DG_Tweening.Sequence
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOLocalJump
        */
        DOLocalJump ($endValue: Vector3, $jumpPower: float, $numJumps: int, $duration: float, $snapping?: boolean) : DG_Tweening.Sequence
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPath
        * @methodSwap DOPath_EBB7509C_AE06B175
        */
        DOPath ($path: Vector3[], $duration: float, $pathType?: DG_Tweening.PathType, $pathMode?: DG_Tweening.PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<Color>) : DG_Tweening_Core.TweenerCore$3<Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOLocalPath
        * @methodSwap DOLocalPath_EBB7509C_AE06B175
        */
        DOLocalPath ($path: Vector3[], $duration: float, $pathType?: DG_Tweening.PathType, $pathMode?: DG_Tweening.PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<Color>) : DG_Tweening_Core.TweenerCore$3<Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPath
        * @methodSwap DOPath_EBB7509C_D8CF4541
        */
        DOPath ($path: DG_Tweening_Plugins_Core_PathCore.Path, $duration: float, $pathMode?: DG_Tweening.PathMode) : DG_Tweening_Core.TweenerCore$3<Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOLocalPath
        * @methodSwap DOLocalPath_EBB7509C_D8CF4541
        */
        DOLocalPath ($path: DG_Tweening_Plugins_Core_PathCore.Path, $duration: float, $pathMode?: DG_Tweening.PathMode) : DG_Tweening_Core.TweenerCore$3<Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOBlendableMoveBy
        */
        DOBlendableMoveBy ($byValue: Vector3, $duration: float, $snapping?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOBlendableLocalMoveBy
        */
        DOBlendableLocalMoveBy ($byValue: Vector3, $duration: float, $snapping?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOBlendableRotateBy
        */
        DOBlendableRotateBy ($byValue: Vector3, $duration: float, $mode?: DG_Tweening.RotateMode) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOBlendableLocalRotateBy
        */
        DOBlendableLocalRotateBy ($byValue: Vector3, $duration: float, $mode?: DG_Tweening.RotateMode) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOBlendablePunchRotation
        */
        DOBlendablePunchRotation ($punch: Vector3, $duration: float, $vibrato?: int, $elasticity?: float) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOBlendableScaleBy
        */
        DOBlendableScaleBy ($byValue: Vector3, $duration: float) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

    interface MonoBehaviour {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

    interface Behaviour {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

    interface Component {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

    interface Renderer {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

declare module 'DG.Tweening.Core' {
    import * as DG_Tweening from 'DG.Tweening'
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as DG_Tweening_Core_DOTweenSettings from 'DG.Tweening.Core.DOTweenSettings'
    import * as DG_Tweening_Core_Enums from 'DG.Tweening.Core.Enums'
    import * as DG_Tweening_Plugins_Options from 'DG.Tweening.Plugins.Options'

    class TweenerCore$3<T1,T2,TPlugOptions> extends DG_Tweening.Tweener {

        public timeScale : float
        public isBackwards : boolean
        public id : any
        public stringId : string
        public intId : int
        public target : any
        public onPlay : TweenCallback
        public onPause : TweenCallback
        public onRewind : TweenCallback
        public onUpdate : TweenCallback
        public onStepComplete : TweenCallback
        public onComplete : TweenCallback
        public onKill : TweenCallback
        public onWaypointChange : TweenCallback$1<int>
        public easeOvershootOrAmplitude : float
        public easePeriod : float
        public debugTargetId : string
        public get isRelative(): boolean;
        public get active(): boolean;
        public get fullPosition(): float;
        public set fullPosition(value: float);
        public get hasLoops(): boolean;
        public get playedOnce(): boolean;
        public get position(): float;
        public startValue : T2
        public endValue : T2
        public changeValue : T2
        public plugOptions : TPlugOptions
        public getter : DOGetter$1<T1>
        public setter : DOSetter$1<T1>

        /**
        * @methodSwap ChangeStartValue_EBB7509C_EBCCBC92
        */
        public ChangeStartValue ($newStartValue: any, $newDuration?: float) : DG_Tweening.Tweener
        public ChangeEndValue ($newEndValue: any, $snapStartValue: boolean) : DG_Tweening.Tweener
        /**
        * @methodSwap ChangeEndValue_EBB7509C_H8A32E551
        */
        public ChangeEndValue ($newEndValue: any, $newDuration?: float, $snapStartValue?: boolean) : DG_Tweening.Tweener
        /**
        * @methodSwap ChangeValues_EBB7509C_H39496C2E
        */
        public ChangeValues ($newStartValue: any, $newEndValue: any, $newDuration?: float) : DG_Tweening.Tweener
        /**
        * @methodSwap ChangeStartValue_EBB7509C_EB9E40E2
        */
        public ChangeStartValue ($newStartValue: T2, $newDuration?: float) : TweenerCore$3<T1, T2, TPlugOptions>
        public ChangeEndValue ($newEndValue: T2, $snapStartValue: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @methodSwap ChangeEndValue_EBB7509C_H472A1A61
        */
        public ChangeEndValue ($newEndValue: T2, $newDuration?: float, $snapStartValue?: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @methodSwap ChangeValues_EBB7509C_AC5CF4BE
        */
        public ChangeValues ($newStartValue: T2, $newEndValue: T2, $newDuration?: float) : TweenerCore$3<T1, T2, TPlugOptions>
    }

    class ABSSequentiable extends System.Object {

    }

    interface DOGetter$1<T> {
        () : T; 
        Invoke?: () => T;
    }

    interface DOSetter$1<T> {
        (pNewValue: T) : void; 
        Invoke?: (pNewValue: T) => void;
    }

    class DOTweenComponent extends UnityEngine.MonoBehaviour implements DG_Tweening.IDOTweenInit {

        public inspectorUpdater : int

        private constructor ()
        public OnApplicationPause ($pauseStatus: boolean) : void
        public SetCapacity ($tweenersCapacity: int, $sequencesCapacity: int) : DG_Tweening.IDOTweenInit
    }

    class Debugger {

        public static get logPriority(): int;

        public static Log ($message: any) : void
        public static LogWarning ($message: any, $t?: DG_Tweening.Tween) : void
        public static LogError ($message: any) : void
        public static LogReport ($message: any) : void
        public static LogSafeModeReport ($message: any) : void
        public static LogInvalidTween ($t: DG_Tweening.Tween) : void
        public static LogNestedTween ($t: DG_Tweening.Tween) : void
        public static LogNullTween ($t: DG_Tweening.Tween) : void
        public static LogNonPathTween ($t: DG_Tweening.Tween) : void
        public static LogMissingMaterialProperty ($propertyName: string) : void
        /**
        * @methodSwap LogMissingMaterialProperty_EBB7509C_F92D023A
        */
        public static LogMissingMaterialProperty ($propertyId: int) : void
        public static LogRemoveActiveTweenError ($errorInfo: string, $t: DG_Tweening.Tween) : void
        public static LogAddActiveTweenError ($errorInfo: string, $t: DG_Tweening.Tween) : void
        public static SetLogPriority ($logBehaviour: DG_Tweening.LogBehaviour) : void
    }

    class DOTweenSettings extends UnityEngine.ScriptableObject {

        public static AssetName : string
        public static AssetFullFilename : string
        public useSafeMode : boolean
        public safeModeOptions : DG_Tweening_Core_DOTweenSettings.SafeModeOptions
        public timeScale : float
        public useSmoothDeltaTime : boolean
        public maxSmoothUnscaledTime : float
        public rewindCallbackMode : DG_Tweening_Core_Enums.RewindCallbackMode
        public logBehaviour : DG_Tweening.LogBehaviour
        public drawGizmos : boolean
        public defaultRecyclable : boolean
        public defaultAutoPlay : DG_Tweening.AutoPlay
        public defaultUpdateType : DG_Tweening.UpdateType
        public defaultTimeScaleIndependent : boolean
        public defaultEaseType : DG_Tweening.Ease
        public defaultEaseOvershootOrAmplitude : float
        public defaultEasePeriod : float
        public defaultAutoKill : boolean
        public defaultLoopType : DG_Tweening.LoopType
        public debugMode : boolean
        public debugStoreTargetId : boolean
        public showPreviewPanel : boolean
        public storeSettingsLocation : DG_Tweening_Core_DOTweenSettings.SettingsLocation
        public modules : DG_Tweening_Core_DOTweenSettings.ModulesSetup
        public showPlayingTweens : boolean
        public showPausedTweens : boolean

        private constructor ()
    }

    class Extensions {

        public static SetSpecialStartupMode<T extends DG_Tweening.Tween> ($t: T, $mode: DG_Tweening_Core_Enums.SpecialStartupMode) : T
        public static Blendable<T1,T2,TPlugOptions extends DG_Tweening_Plugins_Options.IPlugOptions> ($t: TweenerCore$3<T1, T2, TPlugOptions>) : TweenerCore$3<T1, T2, TPlugOptions>
        public static NoFrom<T1,T2,TPlugOptions extends DG_Tweening_Plugins_Options.IPlugOptions> ($t: TweenerCore$3<T1, T2, TPlugOptions>) : TweenerCore$3<T1, T2, TPlugOptions>
    }

    class DOTweenExternalCommand {

        public static add_SetOrientationOnPath ($value: System.Action$4<DG_Tweening_Plugins_Options.PathOptions, DG_Tweening.Tween, UnityEngine.Quaternion, UnityEngine.Transform>) : void
        public static remove_SetOrientationOnPath ($value: System.Action$4<DG_Tweening_Plugins_Options.PathOptions, DG_Tweening.Tween, UnityEngine.Quaternion, UnityEngine.Transform>) : void
    }

    interface TweenerCore$3<T1,T2,TPlugOptions> {

        /**
        * @extension DG.Tweening.TweenExtensions.Complete
        */
        Complete () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Complete
        */
        Complete ($withCallbacks: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Flip
        */
        Flip () : void
        /**
        * @extension DG.Tweening.TweenExtensions.ForceInit
        */
        ForceInit () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Goto
        * @methodSwap Goto_EBB7509C_E1C176D8
        */
        Goto ($to: float, $andPlay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Kill
        */
        Kill ($complete?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Pause
        */
        Pause () : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenExtensions.Play
        */
        Play () : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenExtensions.PlayBackwards
        */
        PlayBackwards () : void
        /**
        * @extension DG.Tweening.TweenExtensions.PlayForward
        */
        PlayForward () : void
        /**
        * @extension DG.Tweening.TweenExtensions.Restart
        * @methodSwap Restart_EBB7509C_BA558FEA
        */
        Restart ($includeDelay?: boolean, $changeDelayTo?: float) : void
        /**
        * @extension DG.Tweening.TweenExtensions.Rewind
        */
        Rewind ($includeDelay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.SmoothRewind
        */
        SmoothRewind () : void
        /**
        * @extension DG.Tweening.TweenExtensions.TogglePause
        */
        TogglePause () : void
        /**
        * @extension DG.Tweening.TweenExtensions.GotoWaypoint
        * @methodSwap GotoWaypoint_EBB7509C_H40296D8E
        */
        GotoWaypoint ($waypointIndex: int, $andPlay?: boolean) : void
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForCompletion
        */
        WaitForCompletion () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForRewind
        */
        WaitForRewind () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForKill
        */
        WaitForKill () : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForElapsedLoops
        * @methodSwap WaitForElapsedLoops_EBB7509C_H3AE295E1
        */
        WaitForElapsedLoops ($elapsedLoops: int) : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForPosition
        * @methodSwap WaitForPosition_EBB7509C_H84EE7387
        */
        WaitForPosition ($position: float) : UnityEngine.YieldInstruction
        /**
        * @extension DG.Tweening.TweenExtensions.WaitForStart
        */
        WaitForStart () : UnityEngine.Coroutine
        /**
        * @extension DG.Tweening.TweenExtensions.CompletedLoops
        */
        CompletedLoops () : int
        /**
        * @extension DG.Tweening.TweenExtensions.Delay
        */
        Delay () : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedDelay
        */
        ElapsedDelay () : float
        /**
        * @extension DG.Tweening.TweenExtensions.Duration
        */
        Duration ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.Elapsed
        */
        Elapsed ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedPercentage
        */
        ElapsedPercentage ($includeLoops?: boolean) : float
        /**
        * @extension DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage
        */
        ElapsedDirectionalPercentage () : float
        /**
        * @extension DG.Tweening.TweenExtensions.IsActive
        */
        IsActive () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsBackwards
        */
        IsBackwards () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsComplete
        */
        IsComplete () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsInitialized
        */
        IsInitialized () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.IsPlaying
        */
        IsPlaying () : boolean
        /**
        * @extension DG.Tweening.TweenExtensions.Loops
        */
        Loops () : int
        /**
        * @extension DG.Tweening.TweenExtensions.PathGetPoint
        * @methodSwap PathGetPoint_EBB7509C_H84EE7387
        */
        PathGetPoint ($pathPercentage: float) : UnityEngine.Vector3
        /**
        * @extension DG.Tweening.TweenExtensions.PathGetDrawPoints
        * @methodSwap PathGetDrawPoints_EBB7509C_H3AE295E1
        */
        PathGetDrawPoints ($subdivisionsXSegment?: int) : UnityEngine.Vector3[]
        /**
        * @extension DG.Tweening.TweenExtensions.PathLength
        */
        PathLength () : float
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTimeScale
        * @methodSwap DOTimeScale_EBB7509C_A7BEB9D8
        */
        DOTimeScale ($endValue: float, $duration: float) : TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAutoKill
        */
        SetAutoKill () : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAutoKill
        */
        SetAutoKill ($autoKillOnCompletion: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        */
        SetId ($objectId: any) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        */
        SetId ($stringId: string) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetId
        * @methodSwap SetId_EBB7509C_C4CDB5F1
        */
        SetId ($intId: int) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLink
        */
        SetLink ($gameObject: UnityEngine.GameObject) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLink
        */
        SetLink ($gameObject: UnityEngine.GameObject, $behaviour: DG_Tweening.LinkBehaviour) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetTarget
        */
        SetTarget ($target: any) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLoops
        * @methodSwap SetLoops_EBB7509C_C4CDB5F1
        */
        SetLoops ($loops: int) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetLoops
        * @methodSwap SetLoops_EBB7509C_A1956779
        */
        SetLoops ($loops: int, $loopType: DG_Tweening.LoopType) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($ease: DG_Tweening.Ease) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        * @methodSwap SetEase_EBB7509C_H7ECA3FD7
        */
        SetEase ($ease: DG_Tweening.Ease, $overshoot: float) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        * @methodSwap SetEase_EBB7509C_H706F69A8
        */
        SetEase ($ease: DG_Tweening.Ease, $amplitude: float, $period: float) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($animCurve: UnityEngine.AnimationCurve) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetEase
        */
        SetEase ($customEase: DG_Tweening.EaseFunction) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRecyclable
        */
        SetRecyclable () : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRecyclable
        */
        SetRecyclable ($recyclable: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($isIndependentUpdate: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($updateType: DG_Tweening.UpdateType) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetUpdate
        */
        SetUpdate ($updateType: DG_Tweening.UpdateType, $isIndependentUpdate: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnStart
        */
        OnStart ($action: DG_Tweening.TweenCallback) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnPlay
        */
        OnPlay ($action: DG_Tweening.TweenCallback) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnPause
        */
        OnPause ($action: DG_Tweening.TweenCallback) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnRewind
        */
        OnRewind ($action: DG_Tweening.TweenCallback) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnUpdate
        */
        OnUpdate ($action: DG_Tweening.TweenCallback) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnStepComplete
        */
        OnStepComplete ($action: DG_Tweening.TweenCallback) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnComplete
        */
        OnComplete ($action: DG_Tweening.TweenCallback) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnKill
        */
        OnKill ($action: DG_Tweening.TweenCallback) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.OnWaypointChange
        */
        OnWaypointChange ($action: DG_Tweening.TweenCallback$1<int>) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAs
        */
        SetAs ($asTween: DG_Tweening.Tween) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetAs
        */
        SetAs ($tweenParams: DG_Tweening.TweenParams) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.From
        */
        From () : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.From
        */
        From ($isRelative: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.From<T1, T2, TPlugOptions extends DG_Tweening_Plugins_Options.IPlugOptions>
        */
        From ($fromValue: T2, $setImmediately?: boolean, $isRelative?: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetDelay
        * @methodSwap SetDelay_EBB7509C_D4809BB7
        */
        SetDelay ($delay: float) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetDelay
        * @methodSwap SetDelay_EBB7509C_H8EE80B88
        */
        SetDelay ($delay: float, $asPrependedIntervalIfSequence: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRelative
        */
        SetRelative () : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetRelative
        */
        SetRelative ($isRelative: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetSpeedBased
        */
        SetSpeedBased () : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.TweenSettingsExtensions.SetSpeedBased
        */
        SetSpeedBased ($isSpeedBased: boolean) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.Core.Extensions.SetSpecialStartupMode
        */
        SetSpecialStartupMode ($mode: DG_Tweening_Core_Enums.SpecialStartupMode) : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.Core.Extensions.Blendable<T1, T2, TPlugOptions extends DG_Tweening_Plugins_Options.IPlugOptions>
        */
        Blendable () : TweenerCore$3<T1, T2, TPlugOptions>
        /**
        * @extension DG.Tweening.Core.Extensions.NoFrom<T1, T2, TPlugOptions extends DG_Tweening_Plugins_Options.IPlugOptions>
        */
        NoFrom () : TweenerCore$3<T1, T2, TPlugOptions>
    }

    interface DOTweenComponent {

        /**
        * @extension DG.Tweening.ShortcutExtensions.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOGoto
        * @methodSwap DOGoto_EBB7509C_DD08395
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORestart
        */
        DORestart ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DORewind
        */
        DORewind ($includeDelay?: boolean) : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.ShortcutExtensions.DOTogglePause
        */
        DOTogglePause () : int
    }

}

declare module 'DG.Tweening.Plugins.Options' {
    import * as System from 'System'
    import * as DG_Tweening from 'DG.Tweening'
    import * as UnityEngine from 'UnityEngine'

    interface IPlugOptions {

        Reset? () : void
    }

    class FloatOptions extends System.ValueType implements IPlugOptions {

        public snapping : boolean

        public Reset () : void
    }

    class NoOptions extends System.ValueType implements IPlugOptions {

        public Reset () : void
    }

    class UintOptions extends System.ValueType implements IPlugOptions {

        public isNegativeChangeValue : boolean

        public Reset () : void
    }

    class StringOptions extends System.ValueType implements IPlugOptions {

        public richTextEnabled : boolean
        public scrambleMode : DG_Tweening.ScrambleMode
        public scrambledChars : number[]

        public Reset () : void
    }

    class VectorOptions extends System.ValueType implements IPlugOptions {

        public axisConstraint : DG_Tweening.AxisConstraint
        public snapping : boolean

        public Reset () : void
    }

    class QuaternionOptions extends System.ValueType implements IPlugOptions {

        public rotateMode : DG_Tweening.RotateMode
        public axisConstraint : DG_Tweening.AxisConstraint
        public up : UnityEngine.Vector3

        public Reset () : void
    }

    class ColorOptions extends System.ValueType implements IPlugOptions {

        public alphaOnly : boolean

        public Reset () : void
    }

    class RectOptions extends System.ValueType implements IPlugOptions {

        public snapping : boolean

        public Reset () : void
    }

    class Vector3ArrayOptions extends System.ValueType implements IPlugOptions {

        public axisConstraint : DG_Tweening.AxisConstraint
        public snapping : boolean

        public Reset () : void
    }

    class PathOptions extends System.ValueType implements IPlugOptions {

        public mode : DG_Tweening.PathMode
        public orientType : OrientType
        public lockPositionAxis : DG_Tweening.AxisConstraint
        public lockRotationAxis : DG_Tweening.AxisConstraint
        public isClosedPath : boolean
        public lookAtPosition : UnityEngine.Vector3
        public lookAtTransform : UnityEngine.Transform
        public lookAhead : float
        public hasCustomForwardDirection : boolean
        public forward : UnityEngine.Quaternion
        public useLocalPosition : boolean
        public parent : UnityEngine.Transform
        public isRigidbody : boolean
        public stableZRotation : boolean

        public Reset () : void
    }

    enum OrientType {
        None = 0,
        ToPath = 1,
        LookAtTransform = 2,
        LookAtPosition = 3 
    }

}

declare module 'DG.Tweening.Plugins.Core' {
    import * as System from 'System'
    import * as DG_Tweening_Core from 'DG.Tweening.Core'
    import * as DG_Tweening from 'DG.Tweening'
    import * as DG_Tweening_Core_Enums from 'DG.Tweening.Core.Enums'

    class ABSTweenPlugin$3<T1,T2,TPlugOptions> extends System.Object implements ITweenPlugin {

        public Reset ($t: DG_Tweening_Core.TweenerCore$3<T1, T2, TPlugOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<T1, T2, TPlugOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<T1, T2, TPlugOptions>, $fromValue: T2, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<T1, T2, TPlugOptions>, $value: T1) : T2
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<T1, T2, TPlugOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<T1, T2, TPlugOptions>) : void
        public GetSpeedBasedDuration ($options: TPlugOptions, $unitsXSecond: float, $changeValue: T2) : float
        public EvaluateAndApply ($options: TPlugOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<T1>, $setter: DG_Tweening_Core.DOSetter$1<T1>, $elapsed: float, $startValue: T2, $changeValue: T2, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    interface ITweenPlugin {

    }

    interface ITPlugin$4<T1,T2,TPlugOptions,TPlugin> {

    }

    interface IPlugSetter$4<T1,T2,TPlugin,TPlugOptions> {

        Getter? () : DG_Tweening_Core.DOGetter$1<T1>
        Setter? () : DG_Tweening_Core.DOSetter$1<T1>
        EndValue? () : T2
        GetOptions? () : TPlugOptions
    }

}

declare module 'DG.Tweening.Core.Enums' {

    enum UpdateNotice {
        None = 0,
        RewindStep = 1 
    }

    enum NestedTweenFailureBehaviour {
        TryToPreserveSequence = 0,
        KillWholeSequence = 1 
    }

    enum RewindCallbackMode {
        FireIfPositionChanged = 0,
        FireAlwaysWithRewind = 1,
        FireAlways = 2 
    }

    enum SpecialStartupMode {
        None = 0,
        SetLookAt = 1,
        SetShake = 2,
        SetPunch = 3,
        SetCameraShakePosition = 4 
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

declare module 'DG.Tweening.Plugins.Core.PathCore' {
    import * as System from 'System'
    import * as DG_Tweening from 'DG.Tweening'
    import * as UnityEngine from 'UnityEngine'

    class Path extends System.Object {

        public wpLengths : float[]
        public wps : UnityEngine.Vector3[]

        public constructor ($type: DG_Tweening.PathType, $waypoints: UnityEngine.Vector3[], $subdivisionsXSegment: int, $gizmoColor?: System.Nullable$1<UnityEngine.Color>)
    }

    class ControlPoint extends System.ValueType {

        public a : UnityEngine.Vector3
        public b : UnityEngine.Vector3

        public constructor ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3)
        public ToString () : string
        public static op_Addition ($cp: ControlPoint, $v: UnityEngine.Vector3) : ControlPoint
    }

}

declare module 'DG.Tweening.Plugins' {
    import * as DG_Tweening_Plugins_Core from 'DG.Tweening.Plugins.Core'
    import * as System from 'System'
    import * as DG_Tweening_Plugins_Options from 'DG.Tweening.Plugins.Options'
    import * as DG_Tweening_Core from 'DG.Tweening.Core'
    import * as DG_Tweening from 'DG.Tweening'
    import * as DG_Tweening_Core_Enums from 'DG.Tweening.Core.Enums'
    import * as UnityEngine from 'UnityEngine'
    import * as DG_Tweening_Plugins_Core_PathCore from 'DG.Tweening.Plugins.Core.PathCore'

    class DoublePlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<double,double,DG_Tweening_Plugins_Options.NoOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<double, double, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<double, double, DG_Tweening_Plugins_Options.NoOptions>, $isRelative: boolean) : void
        /**
        * @methodSwap SetFrom_EBB7509C_H4B76F921
        */
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<double, double, DG_Tweening_Plugins_Options.NoOptions>, $fromValue: double, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<double, double, DG_Tweening_Plugins_Options.NoOptions>, $value: double) : double
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<double, double, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<double, double, DG_Tweening_Plugins_Options.NoOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.NoOptions, $unitsXSecond: float, $changeValue: double) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.NoOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<double>, $setter: DG_Tweening_Core.DOSetter$1<double>, $elapsed: float, $startValue: double, $changeValue: double, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class LongPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<bigint,bigint,DG_Tweening_Plugins_Options.NoOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>, $fromValue: bigint, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>, $value: bigint) : bigint
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.NoOptions, $unitsXSecond: float, $changeValue: bigint) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.NoOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<bigint>, $setter: DG_Tweening_Core.DOSetter$1<bigint>, $elapsed: float, $startValue: bigint, $changeValue: bigint, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class UlongPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<bigint,bigint,DG_Tweening_Plugins_Options.NoOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>, $fromValue: bigint, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>, $value: bigint) : bigint
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<bigint, bigint, DG_Tweening_Plugins_Options.NoOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.NoOptions, $unitsXSecond: float, $changeValue: bigint) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.NoOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<bigint>, $setter: DG_Tweening_Core.DOSetter$1<bigint>, $elapsed: float, $startValue: bigint, $changeValue: bigint, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class Vector3ArrayPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.Vector3,UnityEngine.Vector3[],DG_Tweening_Plugins_Options.Vector3ArrayOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>, $fromValue: UnityEngine.Vector3[], $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>, $value: UnityEngine.Vector3) : UnityEngine.Vector3[]
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3[], DG_Tweening_Plugins_Options.Vector3ArrayOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.Vector3ArrayOptions, $unitsXSecond: float, $changeValue: UnityEngine.Vector3[]) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.Vector3ArrayOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector3>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector3>, $elapsed: float, $startValue: UnityEngine.Vector3[], $changeValue: UnityEngine.Vector3[], $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class PathPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.Vector3,DG_Tweening_Plugins_Core_PathCore.Path,DG_Tweening_Plugins_Options.PathOptions> {

        public static MinLookAhead : float

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $fromValue: DG_Tweening_Plugins_Core_PathCore.Path, $setImmediately: boolean, $isRelative: boolean) : void
        public static Get () : DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>, $value: UnityEngine.Vector3) : DG_Tweening_Plugins_Core_PathCore.Path
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.PathOptions, $unitsXSecond: float, $changeValue: DG_Tweening_Plugins_Core_PathCore.Path) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.PathOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector3>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector3>, $elapsed: float, $startValue: DG_Tweening_Plugins_Core_PathCore.Path, $changeValue: DG_Tweening_Plugins_Core_PathCore.Path, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
        public SetOrientation ($options: DG_Tweening_Plugins_Options.PathOptions, $t: DG_Tweening.Tween, $path: DG_Tweening_Plugins_Core_PathCore.Path, $pathPerc: float, $tPos: UnityEngine.Vector3, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class ColorPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.Color,UnityEngine.Color,DG_Tweening_Plugins_Options.ColorOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>, $fromValue: UnityEngine.Color, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>, $value: UnityEngine.Color) : UnityEngine.Color
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.ColorOptions, $unitsXSecond: float, $changeValue: UnityEngine.Color) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.ColorOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Color>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Color>, $elapsed: float, $startValue: UnityEngine.Color, $changeValue: UnityEngine.Color, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class IntPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<int,int,DG_Tweening_Plugins_Options.NoOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<int, int, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<int, int, DG_Tweening_Plugins_Options.NoOptions>, $isRelative: boolean) : void
        /**
        * @methodSwap SetFrom_EBB7509C_H50766BE4
        */
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<int, int, DG_Tweening_Plugins_Options.NoOptions>, $fromValue: int, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<int, int, DG_Tweening_Plugins_Options.NoOptions>, $value: int) : int
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<int, int, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<int, int, DG_Tweening_Plugins_Options.NoOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.NoOptions, $unitsXSecond: float, $changeValue: int) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.NoOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<int>, $setter: DG_Tweening_Core.DOSetter$1<int>, $elapsed: float, $startValue: int, $changeValue: int, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class QuaternionPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.Quaternion,UnityEngine.Vector3,DG_Tweening_Plugins_Options.QuaternionOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>, $fromValue: UnityEngine.Vector3, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>, $value: UnityEngine.Quaternion) : UnityEngine.Vector3
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.QuaternionOptions, $unitsXSecond: float, $changeValue: UnityEngine.Vector3) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.QuaternionOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Quaternion>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Quaternion>, $elapsed: float, $startValue: UnityEngine.Vector3, $changeValue: UnityEngine.Vector3, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class RectOffsetPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.RectOffset,UnityEngine.RectOffset,DG_Tweening_Plugins_Options.NoOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.RectOffset, UnityEngine.RectOffset, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.RectOffset, UnityEngine.RectOffset, DG_Tweening_Plugins_Options.NoOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.RectOffset, UnityEngine.RectOffset, DG_Tweening_Plugins_Options.NoOptions>, $fromValue: UnityEngine.RectOffset, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.RectOffset, UnityEngine.RectOffset, DG_Tweening_Plugins_Options.NoOptions>, $value: UnityEngine.RectOffset) : UnityEngine.RectOffset
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.RectOffset, UnityEngine.RectOffset, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.RectOffset, UnityEngine.RectOffset, DG_Tweening_Plugins_Options.NoOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.NoOptions, $unitsXSecond: float, $changeValue: UnityEngine.RectOffset) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.NoOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<UnityEngine.RectOffset>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.RectOffset>, $elapsed: float, $startValue: UnityEngine.RectOffset, $changeValue: UnityEngine.RectOffset, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class RectPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.Rect,UnityEngine.Rect,DG_Tweening_Plugins_Options.RectOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Rect, UnityEngine.Rect, DG_Tweening_Plugins_Options.RectOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Rect, UnityEngine.Rect, DG_Tweening_Plugins_Options.RectOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Rect, UnityEngine.Rect, DG_Tweening_Plugins_Options.RectOptions>, $fromValue: UnityEngine.Rect, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Rect, UnityEngine.Rect, DG_Tweening_Plugins_Options.RectOptions>, $value: UnityEngine.Rect) : UnityEngine.Rect
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Rect, UnityEngine.Rect, DG_Tweening_Plugins_Options.RectOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Rect, UnityEngine.Rect, DG_Tweening_Plugins_Options.RectOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.RectOptions, $unitsXSecond: float, $changeValue: UnityEngine.Rect) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.RectOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Rect>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Rect>, $elapsed: float, $startValue: UnityEngine.Rect, $changeValue: UnityEngine.Rect, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class UintPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<uint,uint,DG_Tweening_Plugins_Options.UintOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<uint, uint, DG_Tweening_Plugins_Options.UintOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<uint, uint, DG_Tweening_Plugins_Options.UintOptions>, $isRelative: boolean) : void
        /**
        * @methodSwap SetFrom_EBB7509C_CD3B1C80
        */
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<uint, uint, DG_Tweening_Plugins_Options.UintOptions>, $fromValue: uint, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<uint, uint, DG_Tweening_Plugins_Options.UintOptions>, $value: uint) : uint
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<uint, uint, DG_Tweening_Plugins_Options.UintOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<uint, uint, DG_Tweening_Plugins_Options.UintOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.UintOptions, $unitsXSecond: float, $changeValue: uint) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.UintOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<uint>, $setter: DG_Tweening_Core.DOSetter$1<uint>, $elapsed: float, $startValue: uint, $changeValue: uint, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class Vector2Plugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.Vector2,UnityEngine.Vector2,DG_Tweening_Plugins_Options.VectorOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>, $fromValue: UnityEngine.Vector2, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>, $value: UnityEngine.Vector2) : UnityEngine.Vector2
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.VectorOptions, $unitsXSecond: float, $changeValue: UnityEngine.Vector2) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.VectorOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector2>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector2>, $elapsed: float, $startValue: UnityEngine.Vector2, $changeValue: UnityEngine.Vector2, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class Vector4Plugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.Vector4,UnityEngine.Vector4,DG_Tweening_Plugins_Options.VectorOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>, $fromValue: UnityEngine.Vector4, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>, $value: UnityEngine.Vector4) : UnityEngine.Vector4
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector4, UnityEngine.Vector4, DG_Tweening_Plugins_Options.VectorOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.VectorOptions, $unitsXSecond: float, $changeValue: UnityEngine.Vector4) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.VectorOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector4>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector4>, $elapsed: float, $startValue: UnityEngine.Vector4, $changeValue: UnityEngine.Vector4, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class StringPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<string,string,DG_Tweening_Plugins_Options.StringOptions> {

        public constructor ()
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<string, string, DG_Tweening_Plugins_Options.StringOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<string, string, DG_Tweening_Plugins_Options.StringOptions>, $fromValue: string, $setImmediately: boolean, $isRelative: boolean) : void
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<string, string, DG_Tweening_Plugins_Options.StringOptions>) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<string, string, DG_Tweening_Plugins_Options.StringOptions>, $value: string) : string
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<string, string, DG_Tweening_Plugins_Options.StringOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<string, string, DG_Tweening_Plugins_Options.StringOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.StringOptions, $unitsXSecond: float, $changeValue: string) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.StringOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<string>, $setter: DG_Tweening_Core.DOSetter$1<string>, $elapsed: float, $startValue: string, $changeValue: string, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class FloatPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<float,float,DG_Tweening_Plugins_Options.FloatOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>, $isRelative: boolean) : void
        /**
        * @methodSwap SetFrom_EBB7509C_H63C0FE2D
        */
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>, $fromValue: float, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>, $value: float) : float
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.FloatOptions, $unitsXSecond: float, $changeValue: float) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.FloatOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<float>, $setter: DG_Tweening_Core.DOSetter$1<float>, $elapsed: float, $startValue: float, $changeValue: float, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

    class Vector3Plugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.Vector3,UnityEngine.Vector3,DG_Tweening_Plugins_Options.VectorOptions> {

        public constructor ()
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>, $fromValue: UnityEngine.Vector3, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>, $value: UnityEngine.Vector3) : UnityEngine.Vector3
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.VectorOptions, $unitsXSecond: float, $changeValue: UnityEngine.Vector3) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.VectorOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Vector3>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Vector3>, $elapsed: float, $startValue: UnityEngine.Vector3, $changeValue: UnityEngine.Vector3, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

}

declare module 'DG.Tweening.CustomPlugins' {
    import * as DG_Tweening_Plugins_Core from 'DG.Tweening.Plugins.Core'
    import * as UnityEngine from 'UnityEngine'
    import * as DG_Tweening_Plugins_Options from 'DG.Tweening.Plugins.Options'
    import * as DG_Tweening_Core from 'DG.Tweening.Core'
    import * as System from 'System'
    import * as DG_Tweening from 'DG.Tweening'
    import * as DG_Tweening_Core_Enums from 'DG.Tweening.Core.Enums'

    class PureQuaternionPlugin extends DG_Tweening_Plugins_Core.ABSTweenPlugin$3<UnityEngine.Quaternion,UnityEngine.Quaternion,DG_Tweening_Plugins_Options.NoOptions> {

        public constructor ()
        public static Plug () : PureQuaternionPlugin
        public Reset ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Quaternion, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Quaternion, DG_Tweening_Plugins_Options.NoOptions>, $isRelative: boolean) : void
        public SetFrom ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Quaternion, DG_Tweening_Plugins_Options.NoOptions>, $fromValue: UnityEngine.Quaternion, $setImmediately: boolean, $isRelative: boolean) : void
        public ConvertToStartValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Quaternion, DG_Tweening_Plugins_Options.NoOptions>, $value: UnityEngine.Quaternion) : UnityEngine.Quaternion
        public SetRelativeEndValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Quaternion, DG_Tweening_Plugins_Options.NoOptions>) : void
        public SetChangeValue ($t: DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Quaternion, DG_Tweening_Plugins_Options.NoOptions>) : void
        public GetSpeedBasedDuration ($options: DG_Tweening_Plugins_Options.NoOptions, $unitsXSecond: float, $changeValue: UnityEngine.Quaternion) : float
        public EvaluateAndApply ($options: DG_Tweening_Plugins_Options.NoOptions, $t: DG_Tweening.Tween, $isRelative: boolean, $getter: DG_Tweening_Core.DOGetter$1<UnityEngine.Quaternion>, $setter: DG_Tweening_Core.DOSetter$1<UnityEngine.Quaternion>, $elapsed: float, $startValue: UnityEngine.Quaternion, $changeValue: UnityEngine.Quaternion, $duration: float, $usingInversePosition: boolean, $updateNotice: DG_Tweening_Core_Enums.UpdateNotice) : void
    }

}

declare module 'DG.Tweening.Core.DOTweenSettings' {
    import * as System from 'System'
    import * as DG_Tweening_Core_Enums from 'DG.Tweening.Core.Enums'

    class SafeModeOptions extends System.Object {

        public nestedTweenFailureBehaviour : DG_Tweening_Core_Enums.NestedTweenFailureBehaviour

        public constructor ()
    }

    enum SettingsLocation {
        AssetsDirectory = 0,
        DOTweenDirectory = 1,
        DemigiantDirectory = 2 
    }

    class ModulesSetup extends System.Object {

        public showPanel : boolean
        public audioEnabled : boolean
        public physicsEnabled : boolean
        public physics2DEnabled : boolean
        public spriteEnabled : boolean
        public uiEnabled : boolean
        public textMeshProEnabled : boolean
        public tk2DEnabled : boolean
        public deAudioEnabled : boolean
        public deUnityExtendedEnabled : boolean

        public constructor ()
    }

}

declare module 'DG.Tweening.Core.Easing' {
    import * as System from 'System'
    import * as DG_Tweening from 'DG.Tweening'
    import * as UnityEngine from 'UnityEngine'

    class Bounce {

        public static EaseIn ($time: float, $duration: float, $unusedOvershootOrAmplitude: float, $unusedPeriod: float) : float
        public static EaseOut ($time: float, $duration: float, $unusedOvershootOrAmplitude: float, $unusedPeriod: float) : float
        public static EaseInOut ($time: float, $duration: float, $unusedOvershootOrAmplitude: float, $unusedPeriod: float) : float
    }

    class EaseManager {

        /**
        * @methodSwap Evaluate_EBB7509C_H6286A7CA
        */
        public static Evaluate ($t: DG_Tweening.Tween, $time: float, $duration: float, $overshootOrAmplitude: float, $period: float) : float
        /**
        * @methodSwap Evaluate_EBB7509C_BF139C41
        */
        public static Evaluate ($easeType: DG_Tweening.Ease, $customEase: DG_Tweening.EaseFunction, $time: float, $duration: float, $overshootOrAmplitude: float, $period: float) : float
        public static ToEaseFunction ($ease: DG_Tweening.Ease) : DG_Tweening.EaseFunction
    }

    class EaseCurve extends System.Object {

        public constructor ($animCurve: UnityEngine.AnimationCurve)
        public Evaluate ($time: float, $duration: float, $unusedOvershoot: float, $unusedPeriod: float) : float
    }

    class Flash {

        public static Ease ($time: float, $duration: float, $overshootOrAmplitude: float, $period: float) : float
        public static EaseIn ($time: float, $duration: float, $overshootOrAmplitude: float, $period: float) : float
        public static EaseOut ($time: float, $duration: float, $overshootOrAmplitude: float, $period: float) : float
        public static EaseInOut ($time: float, $duration: float, $overshootOrAmplitude: float, $period: float) : float
    }

}

