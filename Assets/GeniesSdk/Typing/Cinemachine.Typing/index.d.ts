
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'RootNamespace' {
    import * as Cinemachine from 'Cinemachine'
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as Cinemachine_CinemachineCore from 'Cinemachine.CinemachineCore'
    import * as UnityEngine_Playables from 'UnityEngine.Playables'
    import * as UnityEngine_Timeline from 'UnityEngine.Timeline'

    class CinemachineCameraOffset extends Cinemachine.CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;
        public m_Offset : UnityEngine.Vector3
        public m_ApplyAfter : Cinemachine_CinemachineCore.Stage
        public m_PreserveComposition : boolean

        private constructor ()
    }

    class CinemachineRecomposer extends Cinemachine.CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;
        public m_ApplyAfter : Cinemachine_CinemachineCore.Stage
        public m_Tilt : float
        public m_Pan : float
        public m_Dutch : float
        public m_ZoomScale : float
        public m_FollowAttachment : float
        public m_LookAtAttachment : float

        private constructor ()
        public PrePipelineMutateCameraStateCallback ($vcam: Cinemachine.CinemachineVirtualCameraBase, $curState: $Ref<Cinemachine.CameraState>, $deltaTime: float) : void
    }

    class CinemachineTouchInputMapper extends UnityEngine.MonoBehaviour {

        public TouchSensitivityX : float
        public TouchSensitivityY : float
        public TouchXInputMapTo : string
        public TouchYInputMapTo : string

        private constructor ()
    }

    class CinemachineShot extends UnityEngine_Playables.PlayableAsset implements UnityEngine_Timeline.IPropertyPreview {

        public DisplayName : string
        public VirtualCamera : UnityEngine.ExposedReference$1<Cinemachine.CinemachineVirtualCameraBase>

        private constructor ()
        public CreatePlayable ($graph: UnityEngine_Playables.PlayableGraph, $owner: UnityEngine.GameObject) : UnityEngine_Playables.Playable
        public GatherProperties ($director: UnityEngine_Playables.PlayableDirector, $driver: UnityEngine_Timeline.IPropertyCollector) : void
    }

    class CinemachineTrack extends UnityEngine_Timeline.TrackAsset {

        private constructor ()
        public CreateTrackMixer ($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject, $inputCount: int) : UnityEngine_Playables.Playable
    }

}

declare module 'Cinemachine' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as Cinemachine_CinemachineCore from 'Cinemachine.CinemachineCore'
    import * as Cinemachine_AxisState from 'Cinemachine.AxisState'
    import * as Cinemachine_CinemachineVirtualCameraBase from 'Cinemachine.CinemachineVirtualCameraBase'
    import * as Cinemachine_CameraState from 'Cinemachine.CameraState'
    import * as Cinemachine_LensSettings from 'Cinemachine.LensSettings'
    import * as UnityEngine_Camera from 'UnityEngine.Camera'
    import * as Cinemachine_CinemachineBlendListCamera from 'Cinemachine.CinemachineBlendListCamera'
    import * as Cinemachine_CinemachineBlendDefinition from 'Cinemachine.CinemachineBlendDefinition'
    import * as Cinemachine_CinemachineBrain from 'Cinemachine.CinemachineBrain'
    import * as Cinemachine_CinemachineBlenderSettings from 'Cinemachine.CinemachineBlenderSettings'
    import * as Cinemachine_CinemachineCollider from 'Cinemachine.CinemachineCollider'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as Cinemachine_CinemachineConfiner from 'Cinemachine.CinemachineConfiner'
    import * as Cinemachine_CinemachineDollyCart from 'Cinemachine.CinemachineDollyCart'
    import * as Cinemachine_CinemachinePathBase from 'Cinemachine.CinemachinePathBase'
    import * as Cinemachine_CinemachineOrbitalTransposer from 'Cinemachine.CinemachineOrbitalTransposer'
    import * as Cinemachine_CinemachineTransposer from 'Cinemachine.CinemachineTransposer'
    import * as Cinemachine_CinemachineFreeLook from 'Cinemachine.CinemachineFreeLook'
    import * as Cinemachine_CinemachineVirtualCamera from 'Cinemachine.CinemachineVirtualCamera'
    import * as Cinemachine_CinemachineTargetGroup from 'Cinemachine.CinemachineTargetGroup'
    import * as Cinemachine_CinemachinePath from 'Cinemachine.CinemachinePath'
    import * as Cinemachine_CinemachineSmoothPath from 'Cinemachine.CinemachineSmoothPath'
    import * as Cinemachine_CinemachineStateDrivenCamera from 'Cinemachine.CinemachineStateDrivenCamera'
    import * as Cinemachine_CinemachineStoryboard from 'Cinemachine.CinemachineStoryboard'
    import * as Cinemachine_NoiseSettings from 'Cinemachine.NoiseSettings'
    import * as Cinemachine_CinemachineFramingTransposer from 'Cinemachine.CinemachineFramingTransposer'
    import * as Cinemachine_CinemachineGroupComposer from 'Cinemachine.CinemachineGroupComposer'
    import * as Cinemachine_CinemachinePOV from 'Cinemachine.CinemachinePOV'
    import * as Cinemachine_CinemachineTrackedDolly from 'Cinemachine.CinemachineTrackedDolly'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as Cinemachine_CinemachineTriggerAction from 'Cinemachine.CinemachineTriggerAction'
    import * as Cinemachine_CinemachineImpulseManager from 'Cinemachine.CinemachineImpulseManager'
    import * as Cinemachine_CinemachineImpulseDefinition from 'Cinemachine.CinemachineImpulseDefinition'
    import * as Cinemachine_CinemachineImpulseManager_ImpulseEvent from 'Cinemachine.CinemachineImpulseManager.ImpulseEvent'
    import * as Cinemachine_CinemachineImpulseListener from 'Cinemachine.CinemachineImpulseListener'

    class CinemachineExtension extends UnityEngine.MonoBehaviour {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;

        public PrePipelineMutateCameraStateCallback ($vcam: CinemachineVirtualCameraBase, $curState: $Ref<CameraState>, $deltaTime: float) : void
        public InvokePostPipelineStageCallback ($vcam: CinemachineVirtualCameraBase, $stage: Cinemachine_CinemachineCore.Stage, $state: $Ref<CameraState>, $deltaTime: float) : void
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float) : boolean
        public GetMaxDampTime () : float
        private constructor ()
    }

    class CinemachineVirtualCameraBase extends UnityEngine.MonoBehaviour implements ICinemachineCamera, UnityEngine.ISerializationCallbackReceiver {

        public m_ExcludedPropertiesInInspector : string[]
        public m_LockStageInInspector : Cinemachine_CinemachineCore.Stage[]
        public m_Priority : int
        public FollowTargetAttachment : float
        public LookAtTargetAttachment : float
        public m_StandbyUpdate : Cinemachine_CinemachineVirtualCameraBase.StandbyUpdateMode
        public get ValidatingStreamVersion(): int;
        public get Name(): string;
        public get Description(): string;
        public get Priority(): int;
        public set Priority(value: int);
        public get VirtualCameraGameObject(): UnityEngine.GameObject;
        public get IsValid(): boolean;
        public get State(): CameraState;
        public get ParentCamera(): ICinemachineCamera;
        public get LookAt(): UnityEngine.Transform;
        public set LookAt(value: UnityEngine.Transform);
        public get Follow(): UnityEngine.Transform;
        public set Follow(value: UnityEngine.Transform);
        public get PreviousStateIsValid(): boolean;
        public set PreviousStateIsValid(value: boolean);
        public get FollowTargetChanged(): boolean;
        public get LookAtTargetChanged(): boolean;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetAsVcam(): CinemachineVirtualCameraBase;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetAsVcam(): CinemachineVirtualCameraBase;

        public GetMaxDampTime () : float
        /**
        * @methodSwap DetachedFollowTargetDamp_EBB7509C_E4172388
        */
        public DetachedFollowTargetDamp ($initial: float, $dampTime: float, $deltaTime: float) : float
        /**
        * @methodSwap DetachedFollowTargetDamp_EBB7509C_H36932E5C
        */
        public DetachedFollowTargetDamp ($initial: UnityEngine.Vector3, $dampTime: UnityEngine.Vector3, $deltaTime: float) : UnityEngine.Vector3
        /**
        * @methodSwap DetachedFollowTargetDamp_EBB7509C_H79E99160
        */
        public DetachedFollowTargetDamp ($initial: UnityEngine.Vector3, $dampTime: float, $deltaTime: float) : UnityEngine.Vector3
        /**
        * @methodSwap DetachedLookAtTargetDamp_EBB7509C_E4172388
        */
        public DetachedLookAtTargetDamp ($initial: float, $dampTime: float, $deltaTime: float) : float
        /**
        * @methodSwap DetachedLookAtTargetDamp_EBB7509C_H36932E5C
        */
        public DetachedLookAtTargetDamp ($initial: UnityEngine.Vector3, $dampTime: UnityEngine.Vector3, $deltaTime: float) : UnityEngine.Vector3
        /**
        * @methodSwap DetachedLookAtTargetDamp_EBB7509C_H79E99160
        */
        public DetachedLookAtTargetDamp ($initial: UnityEngine.Vector3, $dampTime: float, $deltaTime: float) : UnityEngine.Vector3
        public AddExtension ($extension: CinemachineExtension) : void
        public RemoveExtension ($extension: CinemachineExtension) : void
        public IsLiveChild ($vcam: ICinemachineCamera, $dominantChildOnly?: boolean) : boolean
        public UpdateCameraState ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public InternalUpdateCameraState ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public GetInputAxisProvider () : Cinemachine_AxisState.IInputAxisProvider
        public ResolveLookAt ($localLookAt: UnityEngine.Transform) : UnityEngine.Transform
        public ResolveFollow ($localFollow: UnityEngine.Transform) : UnityEngine.Transform
        public MoveToTopOfPrioritySubqueue () : void
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public CancelDamping ($updateNow?: boolean) : void
        private constructor ()
    }

    interface ICinemachineCamera {

        readonly Name? : string
        readonly Description? : string
        Priority? : int
        LookAt? : UnityEngine.Transform
        Follow? : UnityEngine.Transform
        readonly State? : CameraState
        readonly VirtualCameraGameObject? : UnityEngine.GameObject
        readonly IsValid? : boolean
        readonly ParentCamera? : ICinemachineCamera

        IsLiveChild? ($vcam: ICinemachineCamera, $dominantChildOnly?: boolean) : boolean
        UpdateCameraState? ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        InternalUpdateCameraState? ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        OnTransitionFromCamera? ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        OnTargetObjectWarped? ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
    }

    class CameraState extends System.ValueType {

        public Lens : LensSettings
        public ReferenceUp : UnityEngine.Vector3
        public ReferenceLookAt : UnityEngine.Vector3
        public static kNoPoint : UnityEngine.Vector3
        public RawPosition : UnityEngine.Vector3
        public RawOrientation : UnityEngine.Quaternion
        public PositionDampingBypass : UnityEngine.Vector3
        public ShotQuality : float
        public PositionCorrection : UnityEngine.Vector3
        public OrientationCorrection : UnityEngine.Quaternion
        public BlendHint : Cinemachine_CameraState.BlendHintValue
        public get HasLookAt(): boolean;
        public get CorrectedPosition(): UnityEngine.Vector3;
        public get CorrectedOrientation(): UnityEngine.Quaternion;
        public get FinalPosition(): UnityEngine.Vector3;
        public get FinalOrientation(): UnityEngine.Quaternion;
        public static get Default(): CameraState;
        public get NumCustomBlendables(): int;

        public GetCustomBlendable ($index: int) : Cinemachine_CameraState.CustomBlendable
        public AddCustomBlendable ($b: Cinemachine_CameraState.CustomBlendable) : void
        public static Lerp ($stateA: CameraState, $stateB: CameraState, $t: float) : CameraState
    }

    class LensSettings extends System.ValueType {

        public static Default : LensSettings
        public FieldOfView : float
        public OrthographicSize : float
        public NearClipPlane : float
        public FarClipPlane : float
        public Dutch : float
        public ModeOverride : Cinemachine_LensSettings.OverrideModes
        public LensShift : UnityEngine.Vector2
        public GateFit : UnityEngine_Camera.GateFitMode
        public FocusDistance : float
        public get Orthographic(): boolean;
        public set Orthographic(value: boolean);
        public get SensorSize(): UnityEngine.Vector2;
        public set SensorSize(value: UnityEngine.Vector2);
        public get Aspect(): float;
        public get IsPhysicalCamera(): boolean;
        public set IsPhysicalCamera(value: boolean);

        public constructor ($verticalFOV: float, $orthographicSize: float, $nearClip: float, $farClip: float, $dutch: float)
        public static FromCamera ($fromCamera: UnityEngine.Camera) : LensSettings
        public SnapshotCameraReadOnlyProperties ($camera: UnityEngine.Camera) : void
        public SnapshotCameraReadOnlyProperties ($lens: $Ref<LensSettings>) : void
        public static Lerp ($lensA: LensSettings, $lensB: LensSettings, $t: float) : LensSettings
        public Validate () : void
    }

    interface ICinemachineTargetGroup {

        readonly Transform? : UnityEngine.Transform
        readonly BoundingBox? : UnityEngine.Bounds
        readonly Sphere? : UnityEngine.BoundingSphere
        readonly IsEmpty? : boolean

        GetViewSpaceBoundingBox? ($observer: UnityEngine.Matrix4x4) : UnityEngine.Bounds
        GetViewSpaceAngularBounds? ($observer: UnityEngine.Matrix4x4, $minAngles: $Ref<UnityEngine.Vector2>, $maxAngles: $Ref<UnityEngine.Vector2>, $zRange: $Ref<UnityEngine.Vector2>) : void
    }

    class Cinemachine3rdPersonAim extends CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;
        public AimCollisionFilter : UnityEngine.LayerMask
        public IgnoreTag : string
        public AimDistance : float
        public AimTargetReticle : UnityEngine.RectTransform
        public get AimTarget(): UnityEngine.Vector3;

        private constructor ()
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float) : boolean
    }

    class CinemachineBlendListCamera extends CinemachineVirtualCameraBase {

        public m_ExcludedPropertiesInInspector : string[]
        public m_LockStageInInspector : Cinemachine_CinemachineCore.Stage[]
        public m_Priority : int
        public FollowTargetAttachment : float
        public LookAtTargetAttachment : float
        public m_StandbyUpdate : Cinemachine_CinemachineVirtualCameraBase.StandbyUpdateMode
        public get ValidatingStreamVersion(): int;
        public get Name(): string;
        public get Description(): string;
        public get Priority(): int;
        public set Priority(value: int);
        public get VirtualCameraGameObject(): UnityEngine.GameObject;
        public get IsValid(): boolean;
        public get State(): CameraState;
        public get ParentCamera(): ICinemachineCamera;
        public get LookAt(): UnityEngine.Transform;
        public set LookAt(value: UnityEngine.Transform);
        public get Follow(): UnityEngine.Transform;
        public set Follow(value: UnityEngine.Transform);
        public get PreviousStateIsValid(): boolean;
        public set PreviousStateIsValid(value: boolean);
        public get FollowTargetChanged(): boolean;
        public get LookAtTargetChanged(): boolean;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetAsVcam(): CinemachineVirtualCameraBase;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetAsVcam(): CinemachineVirtualCameraBase;
        public m_LookAt : UnityEngine.Transform
        public m_Follow : UnityEngine.Transform
        public m_ShowDebugText : boolean
        public m_Loop : boolean
        public m_Instructions : Cinemachine_CinemachineBlendListCamera.Instruction[]
        public get LiveChild(): ICinemachineCamera;
        public set LiveChild(value: ICinemachineCamera);
        public get ChildCameras(): CinemachineVirtualCameraBase[];
        public get IsBlending(): boolean;

        private constructor ()
        public IsLiveChild ($vcam: ICinemachineCamera, $dominantChildOnly?: boolean) : boolean
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public InternalUpdateCameraState ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
    }

    class CinemachineBlendDefinition extends System.ValueType {

        public m_Style : Cinemachine_CinemachineBlendDefinition.Style
        public m_Time : float
        public m_CustomCurve : UnityEngine.AnimationCurve
        public get BlendTime(): float;
        public get BlendCurve(): UnityEngine.AnimationCurve;

        public constructor ($style: Cinemachine_CinemachineBlendDefinition.Style, $time: float)
    }

    interface ICameraOverrideStack {

        readonly DefaultWorldUp? : UnityEngine.Vector3

        SetCameraOverride? ($overrideId: int, $camA: ICinemachineCamera, $camB: ICinemachineCamera, $weightB: float, $deltaTime: float) : int
        ReleaseCameraOverride? ($overrideId: int) : void
    }

    class CinemachineBrain extends UnityEngine.MonoBehaviour implements ICameraOverrideStack {

        public m_ShowDebugText : boolean
        public m_ShowCameraFrustum : boolean
        public m_IgnoreTimeScale : boolean
        public m_WorldUpOverride : UnityEngine.Transform
        public m_UpdateMethod : Cinemachine_CinemachineBrain.UpdateMethod
        public m_BlendUpdateMethod : Cinemachine_CinemachineBrain.BrainUpdateMethod
        public m_DefaultBlend : CinemachineBlendDefinition
        public m_CustomBlends : CinemachineBlenderSettings
        public m_CameraCutEvent : Cinemachine_CinemachineBrain.BrainEvent
        public m_CameraActivatedEvent : Cinemachine_CinemachineBrain.VcamActivatedEvent
        public get OutputCamera(): UnityEngine.Camera;
        public get ControlledObject(): UnityEngine.GameObject;
        public set ControlledObject(value: UnityEngine.GameObject);
        public static get SoloCamera(): ICinemachineCamera;
        public static set SoloCamera(value: ICinemachineCamera);
        public get DefaultWorldUp(): UnityEngine.Vector3;
        public get ActiveVirtualCamera(): ICinemachineCamera;
        public get IsBlending(): boolean;
        public get ActiveBlend(): CinemachineBlend;
        public set ActiveBlend(value: CinemachineBlend);
        public get CurrentCameraState(): CameraState;

        private constructor ()
        public static GetSoloGUIColor () : UnityEngine.Color
        public ManualUpdate () : void
        public IsLiveInBlend ($vcam: ICinemachineCamera) : boolean
        public SetCameraOverride ($overrideId: int, $camA: ICinemachineCamera, $camB: ICinemachineCamera, $weightB: float, $deltaTime: float) : int
        public ReleaseCameraOverride ($overrideId: int) : void
        public ComputeCurrentBlend ($outputBlend: $Ref<CinemachineBlend>, $numTopLayersToExclude: int) : void
        public IsLive ($vcam: ICinemachineCamera, $dominantChildOnly?: boolean) : boolean
    }

    class CinemachineBlend extends System.Object {

        public CamA : ICinemachineCamera
        public CamB : ICinemachineCamera
        public BlendCurve : UnityEngine.AnimationCurve
        public TimeInBlend : float
        public Duration : float
        public get BlendWeight(): float;
        public get IsValid(): boolean;
        public get IsComplete(): boolean;
        public get Description(): string;
        public get State(): CameraState;

        public constructor ($a: ICinemachineCamera, $b: ICinemachineCamera, $curve: UnityEngine.AnimationCurve, $duration: float, $t: float)
        public Uses ($cam: ICinemachineCamera) : boolean
        public UpdateCameraState ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
    }

    class CinemachineBlenderSettings extends UnityEngine.ScriptableObject {

        public m_CustomBlends : Cinemachine_CinemachineBlenderSettings.CustomBlend[]
        public static kBlendFromAnyCameraLabel : string

        private constructor ()
        public GetBlendForVirtualCameras ($fromCameraName: string, $toCameraName: string, $defaultBlend: CinemachineBlendDefinition) : CinemachineBlendDefinition
    }

    class CinemachineClearShot extends CinemachineVirtualCameraBase {

        public m_ExcludedPropertiesInInspector : string[]
        public m_LockStageInInspector : Cinemachine_CinemachineCore.Stage[]
        public m_Priority : int
        public FollowTargetAttachment : float
        public LookAtTargetAttachment : float
        public m_StandbyUpdate : Cinemachine_CinemachineVirtualCameraBase.StandbyUpdateMode
        public get ValidatingStreamVersion(): int;
        public get Name(): string;
        public get Description(): string;
        public get Priority(): int;
        public set Priority(value: int);
        public get VirtualCameraGameObject(): UnityEngine.GameObject;
        public get IsValid(): boolean;
        public get State(): CameraState;
        public get ParentCamera(): ICinemachineCamera;
        public get LookAt(): UnityEngine.Transform;
        public set LookAt(value: UnityEngine.Transform);
        public get Follow(): UnityEngine.Transform;
        public set Follow(value: UnityEngine.Transform);
        public get PreviousStateIsValid(): boolean;
        public set PreviousStateIsValid(value: boolean);
        public get FollowTargetChanged(): boolean;
        public get LookAtTargetChanged(): boolean;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetAsVcam(): CinemachineVirtualCameraBase;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetAsVcam(): CinemachineVirtualCameraBase;
        public m_LookAt : UnityEngine.Transform
        public m_Follow : UnityEngine.Transform
        public m_ShowDebugText : boolean
        public m_ActivateAfter : float
        public m_MinDuration : float
        public m_RandomizeChoice : boolean
        public m_DefaultBlend : CinemachineBlendDefinition
        public m_CustomBlends : CinemachineBlenderSettings
        public get LiveChild(): ICinemachineCamera;
        public set LiveChild(value: ICinemachineCamera);
        public get IsBlending(): boolean;
        public get ActiveBlend(): CinemachineBlend;
        public get ChildCameras(): CinemachineVirtualCameraBase[];

        private constructor ()
        public IsLiveChild ($vcam: ICinemachineCamera, $dominantChildOnly?: boolean) : boolean
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public InternalUpdateCameraState ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public OnTransformChildrenChanged () : void
        public ResetRandomization () : void
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float) : void
    }

    class CinemachineCollider extends CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;
        public m_CollideAgainst : UnityEngine.LayerMask
        public m_IgnoreTag : string
        public m_TransparentLayers : UnityEngine.LayerMask
        public m_MinimumDistanceFromTarget : float
        public m_AvoidObstacles : boolean
        public m_DistanceLimit : float
        public m_MinimumOcclusionTime : float
        public m_CameraRadius : float
        public m_Strategy : Cinemachine_CinemachineCollider.ResolutionStrategy
        public m_MaximumEffort : int
        public m_SmoothingTime : float
        public m_Damping : float
        public m_DampingWhenOccluded : float
        public m_OptimalTargetDistance : float
        public get DebugPaths(): System_Collections_Generic.List$1<System_Collections_Generic.List$1<UnityEngine.Vector3>>;

        private constructor ()
        public IsTargetObscured ($vcam: ICinemachineCamera) : boolean
        public CameraWasDisplaced ($vcam: ICinemachineCamera) : boolean
        public GetCameraDisplacementDistance ($vcam: ICinemachineCamera) : float
        public GetMaxDampTime () : float
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
    }

    class CinemachineConfiner extends CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;
        public m_ConfineMode : Cinemachine_CinemachineConfiner.Mode
        public m_BoundingVolume : UnityEngine.Collider
        public m_BoundingShape2D : UnityEngine.Collider2D
        public m_ConfineScreenEdges : boolean
        public m_Damping : float
        public get IsValid(): boolean;

        private constructor ()
        public CameraWasDisplaced ($vcam: CinemachineVirtualCameraBase) : boolean
        public GetCameraDisplacementDistance ($vcam: CinemachineVirtualCameraBase) : float
        public GetMaxDampTime () : float
        public InvalidatePathCache () : void
    }

    class CinemachineConfiner2D extends CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;
        public m_BoundingShape2D : UnityEngine.Collider2D
        public m_Damping : float
        public m_MaxWindowSize : float

        private constructor ()
        public InvalidateCache () : void
        public ValidateCache ($cameraAspectRatio: float) : boolean
    }

    class CinemachineDollyCart extends UnityEngine.MonoBehaviour {

        public m_Path : CinemachinePathBase
        public m_UpdateMethod : Cinemachine_CinemachineDollyCart.UpdateMethod
        public m_PositionUnits : Cinemachine_CinemachinePathBase.PositionUnits
        public m_Speed : float
        public m_Position : float

        private constructor ()
    }

    class CinemachinePathBase extends UnityEngine.MonoBehaviour {

        public m_Resolution : int
        public m_Appearance : Cinemachine_CinemachinePathBase.Appearance
        public get MinPos(): float;
        public get MaxPos(): float;
        public get Looped(): boolean;
        public get DistanceCacheSampleStepsPerSegment(): int;
        public get PathLength(): float;

        public StandardizePos ($pos: float) : float
        public EvaluatePosition ($pos: float) : UnityEngine.Vector3
        public EvaluateTangent ($pos: float) : UnityEngine.Vector3
        public EvaluateOrientation ($pos: float) : UnityEngine.Quaternion
        public EvaluateLocalPosition ($pos: float) : UnityEngine.Vector3
        public EvaluateLocalTangent ($pos: float) : UnityEngine.Vector3
        public EvaluateLocalOrientation ($pos: float) : UnityEngine.Quaternion
        public FindClosestPoint ($p: UnityEngine.Vector3, $startSegment: int, $searchRadius: int, $stepsPerSegment: int) : float
        public MinUnit ($units: Cinemachine_CinemachinePathBase.PositionUnits) : float
        public MaxUnit ($units: Cinemachine_CinemachinePathBase.PositionUnits) : float
        public StandardizeUnit ($pos: float, $units: Cinemachine_CinemachinePathBase.PositionUnits) : float
        public EvaluatePositionAtUnit ($pos: float, $units: Cinemachine_CinemachinePathBase.PositionUnits) : UnityEngine.Vector3
        public EvaluateTangentAtUnit ($pos: float, $units: Cinemachine_CinemachinePathBase.PositionUnits) : UnityEngine.Vector3
        public EvaluateOrientationAtUnit ($pos: float, $units: Cinemachine_CinemachinePathBase.PositionUnits) : UnityEngine.Quaternion
        public InvalidateDistanceCache () : void
        public DistanceCacheIsValid () : boolean
        public StandardizePathDistance ($distance: float) : float
        public ToNativePathUnits ($pos: float, $units: Cinemachine_CinemachinePathBase.PositionUnits) : float
        public FromPathNativeUnits ($pos: float, $units: Cinemachine_CinemachinePathBase.PositionUnits) : float
        private constructor ()
    }

    class CinemachineExternalCamera extends CinemachineVirtualCameraBase {

        public m_ExcludedPropertiesInInspector : string[]
        public m_LockStageInInspector : Cinemachine_CinemachineCore.Stage[]
        public m_Priority : int
        public FollowTargetAttachment : float
        public LookAtTargetAttachment : float
        public m_StandbyUpdate : Cinemachine_CinemachineVirtualCameraBase.StandbyUpdateMode
        public get ValidatingStreamVersion(): int;
        public get Name(): string;
        public get Description(): string;
        public get Priority(): int;
        public set Priority(value: int);
        public get VirtualCameraGameObject(): UnityEngine.GameObject;
        public get IsValid(): boolean;
        public get State(): CameraState;
        public get ParentCamera(): ICinemachineCamera;
        public get LookAt(): UnityEngine.Transform;
        public set LookAt(value: UnityEngine.Transform);
        public get Follow(): UnityEngine.Transform;
        public set Follow(value: UnityEngine.Transform);
        public get PreviousStateIsValid(): boolean;
        public set PreviousStateIsValid(value: boolean);
        public get FollowTargetChanged(): boolean;
        public get LookAtTargetChanged(): boolean;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetAsVcam(): CinemachineVirtualCameraBase;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetAsVcam(): CinemachineVirtualCameraBase;
        public m_LookAt : UnityEngine.Transform
        public m_BlendHint : Cinemachine_CinemachineVirtualCameraBase.BlendHint

        private constructor ()
        public InternalUpdateCameraState ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
    }

    class CinemachineFollowZoom extends CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;
        public m_Width : float
        public m_Damping : float
        public m_MinFOV : float
        public m_MaxFOV : float

        private constructor ()
        public GetMaxDampTime () : float
    }

    class CinemachineFreeLook extends CinemachineVirtualCameraBase {

        public m_ExcludedPropertiesInInspector : string[]
        public m_LockStageInInspector : Cinemachine_CinemachineCore.Stage[]
        public m_Priority : int
        public FollowTargetAttachment : float
        public LookAtTargetAttachment : float
        public m_StandbyUpdate : Cinemachine_CinemachineVirtualCameraBase.StandbyUpdateMode
        public get ValidatingStreamVersion(): int;
        public get Name(): string;
        public get Description(): string;
        public get Priority(): int;
        public set Priority(value: int);
        public get VirtualCameraGameObject(): UnityEngine.GameObject;
        public get IsValid(): boolean;
        public get State(): CameraState;
        public get ParentCamera(): ICinemachineCamera;
        public get LookAt(): UnityEngine.Transform;
        public set LookAt(value: UnityEngine.Transform);
        public get Follow(): UnityEngine.Transform;
        public set Follow(value: UnityEngine.Transform);
        public get PreviousStateIsValid(): boolean;
        public set PreviousStateIsValid(value: boolean);
        public get FollowTargetChanged(): boolean;
        public get LookAtTargetChanged(): boolean;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetAsVcam(): CinemachineVirtualCameraBase;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetAsVcam(): CinemachineVirtualCameraBase;
        public m_LookAt : UnityEngine.Transform
        public m_Follow : UnityEngine.Transform
        public m_CommonLens : boolean
        public m_Lens : LensSettings
        public m_Transitions : Cinemachine_CinemachineVirtualCameraBase.TransitionParams
        public m_YAxis : AxisState
        public m_YAxisRecentering : Cinemachine_AxisState.Recentering
        public m_XAxis : AxisState
        public m_Heading : Cinemachine_CinemachineOrbitalTransposer.Heading
        public m_RecenterToTargetHeading : Cinemachine_AxisState.Recentering
        public m_BindingMode : Cinemachine_CinemachineTransposer.BindingMode
        public m_SplineCurvature : float
        public m_Orbits : Cinemachine_CinemachineFreeLook.Orbit[]
        public static CreateRigOverride : Cinemachine_CinemachineFreeLook.CreateRigDelegate
        public static DestroyRigOverride : Cinemachine_CinemachineFreeLook.DestroyRigDelegate
        public static get RigNames(): string[];

        private constructor ()
        public GetRig ($i: int) : CinemachineVirtualCamera
        public UpdateInputAxisProvider () : void
        public IsLiveChild ($vcam: ICinemachineCamera, $dominantChildOnly?: boolean) : boolean
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public InternalUpdateCameraState ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public GetLocalPositionForCameraFromInput ($t: float) : UnityEngine.Vector3
    }

    class CinemachineVirtualCamera extends CinemachineVirtualCameraBase {

        public m_ExcludedPropertiesInInspector : string[]
        public m_LockStageInInspector : Cinemachine_CinemachineCore.Stage[]
        public m_Priority : int
        public FollowTargetAttachment : float
        public LookAtTargetAttachment : float
        public m_StandbyUpdate : Cinemachine_CinemachineVirtualCameraBase.StandbyUpdateMode
        public get ValidatingStreamVersion(): int;
        public get Name(): string;
        public get Description(): string;
        public get Priority(): int;
        public set Priority(value: int);
        public get VirtualCameraGameObject(): UnityEngine.GameObject;
        public get IsValid(): boolean;
        public get State(): CameraState;
        public get ParentCamera(): ICinemachineCamera;
        public get LookAt(): UnityEngine.Transform;
        public set LookAt(value: UnityEngine.Transform);
        public get Follow(): UnityEngine.Transform;
        public set Follow(value: UnityEngine.Transform);
        public get PreviousStateIsValid(): boolean;
        public set PreviousStateIsValid(value: boolean);
        public get FollowTargetChanged(): boolean;
        public get LookAtTargetChanged(): boolean;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetAsVcam(): CinemachineVirtualCameraBase;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetAsVcam(): CinemachineVirtualCameraBase;
        public m_LookAt : UnityEngine.Transform
        public m_Follow : UnityEngine.Transform
        public m_Lens : LensSettings
        public m_Transitions : Cinemachine_CinemachineVirtualCameraBase.TransitionParams
        public static PipelineName : string
        public static CreatePipelineOverride : Cinemachine_CinemachineVirtualCamera.CreatePipelineDelegate
        public static DestroyPipelineOverride : Cinemachine_CinemachineVirtualCamera.DestroyPipelineDelegate

        private constructor ()
        public GetMaxDampTime () : float
        public InternalUpdateCameraState ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public InvalidateComponentPipeline () : void
        public GetComponentOwner () : UnityEngine.Transform
        public GetComponentPipeline () : CinemachineComponentBase[]
        public GetCinemachineComponent ($stage: Cinemachine_CinemachineCore.Stage) : CinemachineComponentBase
        public GetCinemachineComponent<T extends CinemachineComponentBase> () : T
        public AddCinemachineComponent<T extends CinemachineComponentBase> () : T
        public DestroyCinemachineComponent<T extends CinemachineComponentBase> () : void
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float) : void
    }

    class CinemachineComponentBase extends UnityEngine.MonoBehaviour {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;

        public PrePipelineMutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float, $transitionParams: $Ref<Cinemachine_CinemachineVirtualCameraBase.TransitionParams>) : boolean
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public GetMaxDampTime () : float
        private constructor ()
    }

    class CinemachineTargetGroup extends UnityEngine.MonoBehaviour implements ICinemachineTargetGroup {

        public m_PositionMode : Cinemachine_CinemachineTargetGroup.PositionMode
        public m_RotationMode : Cinemachine_CinemachineTargetGroup.RotationMode
        public m_UpdateMethod : Cinemachine_CinemachineTargetGroup.UpdateMethod
        public m_Targets : Cinemachine_CinemachineTargetGroup.Target[]
        public get Transform(): UnityEngine.Transform;
        public get BoundingBox(): UnityEngine.Bounds;
        public get Sphere(): UnityEngine.BoundingSphere;
        public get IsEmpty(): boolean;

        private constructor ()
        public AddMember ($t: UnityEngine.Transform, $weight: float, $radius: float) : void
        public RemoveMember ($t: UnityEngine.Transform) : void
        public FindMember ($t: UnityEngine.Transform) : int
        public GetWeightedBoundsForMember ($index: int) : UnityEngine.BoundingSphere
        public GetViewSpaceBoundingBox ($observer: UnityEngine.Matrix4x4) : UnityEngine.Bounds
        public DoUpdate () : void
        public GetViewSpaceAngularBounds ($observer: UnityEngine.Matrix4x4, $minAngles: $Ref<UnityEngine.Vector2>, $maxAngles: $Ref<UnityEngine.Vector2>, $zRange: $Ref<UnityEngine.Vector2>) : void
    }

    class AxisState extends System.ValueType {

        public Value : float
        public m_SpeedMode : Cinemachine_AxisState.SpeedMode
        public m_MaxSpeed : float
        public m_AccelTime : float
        public m_DecelTime : float
        public m_InputAxisName : string
        public m_InputAxisValue : float
        public m_InvertInput : boolean
        public m_MinValue : float
        public m_MaxValue : float
        public m_Wrap : boolean
        public m_Recentering : Cinemachine_AxisState.Recentering
        public get HasInputProvider(): boolean;
        public get ValueRangeLocked(): boolean;
        public set ValueRangeLocked(value: boolean);
        public get HasRecentering(): boolean;
        public set HasRecentering(value: boolean);

        public constructor ($minValue: float, $maxValue: float, $wrap: boolean, $rangeLocked: boolean, $maxSpeed: float, $accelTime: float, $decelTime: float, $name: string, $invert: boolean)
        public Validate () : void
        public Reset () : void
        public SetInputAxisProvider ($axis: int, $provider: Cinemachine_AxisState.IInputAxisProvider) : void
        public Update ($deltaTime: float) : boolean
    }

    class CinemachineMixingCamera extends CinemachineVirtualCameraBase {

        public m_ExcludedPropertiesInInspector : string[]
        public m_LockStageInInspector : Cinemachine_CinemachineCore.Stage[]
        public m_Priority : int
        public FollowTargetAttachment : float
        public LookAtTargetAttachment : float
        public m_StandbyUpdate : Cinemachine_CinemachineVirtualCameraBase.StandbyUpdateMode
        public get ValidatingStreamVersion(): int;
        public get Name(): string;
        public get Description(): string;
        public get Priority(): int;
        public set Priority(value: int);
        public get VirtualCameraGameObject(): UnityEngine.GameObject;
        public get IsValid(): boolean;
        public get State(): CameraState;
        public get ParentCamera(): ICinemachineCamera;
        public get LookAt(): UnityEngine.Transform;
        public set LookAt(value: UnityEngine.Transform);
        public get Follow(): UnityEngine.Transform;
        public set Follow(value: UnityEngine.Transform);
        public get PreviousStateIsValid(): boolean;
        public set PreviousStateIsValid(value: boolean);
        public get FollowTargetChanged(): boolean;
        public get LookAtTargetChanged(): boolean;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetAsVcam(): CinemachineVirtualCameraBase;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetAsVcam(): CinemachineVirtualCameraBase;
        public static MaxCameras : int
        public m_Weight0 : float
        public m_Weight1 : float
        public m_Weight2 : float
        public m_Weight3 : float
        public m_Weight4 : float
        public m_Weight5 : float
        public m_Weight6 : float
        public m_Weight7 : float
        public get ChildCameras(): CinemachineVirtualCameraBase[];

        private constructor ()
        /**
        * @methodSwap GetWeight_EBB7509C_F92D023A
        */
        public GetWeight ($index: int) : float
        /**
        * @methodSwap SetWeight_EBB7509C_A137D5B3
        */
        public SetWeight ($index: int, $w: float) : void
        public GetWeight ($vcam: CinemachineVirtualCameraBase) : float
        /**
        * @methodSwap SetWeight_EBB7509C_H62B9B62B
        */
        public SetWeight ($vcam: CinemachineVirtualCameraBase, $w: float) : void
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public OnTransformChildrenChanged () : void
        public IsLiveChild ($vcam: ICinemachineCamera, $dominantChildOnly?: boolean) : boolean
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public InternalUpdateCameraState ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
    }

    class CinemachinePath extends CinemachinePathBase {

        public m_Resolution : int
        public m_Appearance : Cinemachine_CinemachinePathBase.Appearance
        public get MinPos(): float;
        public get MaxPos(): float;
        public get Looped(): boolean;
        public get DistanceCacheSampleStepsPerSegment(): int;
        public get PathLength(): float;
        public m_Looped : boolean
        public m_Waypoints : Cinemachine_CinemachinePath.Waypoint[]

        private constructor ()
        public EvaluateLocalPosition ($pos: float) : UnityEngine.Vector3
        public EvaluateLocalTangent ($pos: float) : UnityEngine.Vector3
        public EvaluateLocalOrientation ($pos: float) : UnityEngine.Quaternion
    }

    class CinemachinePipeline extends UnityEngine.MonoBehaviour {

        private constructor ()
    }

    class CinemachinePixelPerfect extends CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;

        private constructor ()
    }

    class CinemachineSmoothPath extends CinemachinePathBase {

        public m_Resolution : int
        public m_Appearance : Cinemachine_CinemachinePathBase.Appearance
        public get MinPos(): float;
        public get MaxPos(): float;
        public get Looped(): boolean;
        public get DistanceCacheSampleStepsPerSegment(): int;
        public get PathLength(): float;
        public m_Looped : boolean
        public m_Waypoints : Cinemachine_CinemachineSmoothPath.Waypoint[]

        private constructor ()
        public InvalidateDistanceCache () : void
        public EvaluateLocalPosition ($pos: float) : UnityEngine.Vector3
        public EvaluateLocalTangent ($pos: float) : UnityEngine.Vector3
        public EvaluateLocalOrientation ($pos: float) : UnityEngine.Quaternion
    }

    class CinemachineStateDrivenCamera extends CinemachineVirtualCameraBase {

        public m_ExcludedPropertiesInInspector : string[]
        public m_LockStageInInspector : Cinemachine_CinemachineCore.Stage[]
        public m_Priority : int
        public FollowTargetAttachment : float
        public LookAtTargetAttachment : float
        public m_StandbyUpdate : Cinemachine_CinemachineVirtualCameraBase.StandbyUpdateMode
        public get ValidatingStreamVersion(): int;
        public get Name(): string;
        public get Description(): string;
        public get Priority(): int;
        public set Priority(value: int);
        public get VirtualCameraGameObject(): UnityEngine.GameObject;
        public get IsValid(): boolean;
        public get State(): CameraState;
        public get ParentCamera(): ICinemachineCamera;
        public get LookAt(): UnityEngine.Transform;
        public set LookAt(value: UnityEngine.Transform);
        public get Follow(): UnityEngine.Transform;
        public set Follow(value: UnityEngine.Transform);
        public get PreviousStateIsValid(): boolean;
        public set PreviousStateIsValid(value: boolean);
        public get FollowTargetChanged(): boolean;
        public get LookAtTargetChanged(): boolean;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetAsVcam(): CinemachineVirtualCameraBase;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetAsVcam(): CinemachineVirtualCameraBase;
        public m_LookAt : UnityEngine.Transform
        public m_Follow : UnityEngine.Transform
        public m_AnimatedTarget : UnityEngine.Animator
        public m_LayerIndex : int
        public m_ShowDebugText : boolean
        public m_Instructions : Cinemachine_CinemachineStateDrivenCamera.Instruction[]
        public m_DefaultBlend : CinemachineBlendDefinition
        public m_CustomBlends : CinemachineBlenderSettings
        public get LiveChild(): ICinemachineCamera;
        public set LiveChild(value: ICinemachineCamera);
        public get ChildCameras(): CinemachineVirtualCameraBase[];
        public get IsBlending(): boolean;
        public get ActiveBlend(): CinemachineBlend;

        private constructor ()
        public IsLiveChild ($vcam: ICinemachineCamera, $dominantChildOnly?: boolean) : boolean
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public InternalUpdateCameraState ($worldUp: UnityEngine.Vector3, $deltaTime: float) : void
        public OnTransformChildrenChanged () : void
        public static CreateFakeHash ($parentHash: int, $clip: UnityEngine.AnimationClip) : int
    }

    class CinemachineStoryboard extends CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;
        public static s_StoryboardGlobalMute : boolean
        public m_ShowImage : boolean
        public m_Image : UnityEngine.Texture
        public m_Aspect : Cinemachine_CinemachineStoryboard.FillStrategy
        public m_Alpha : float
        public m_Center : UnityEngine.Vector2
        public m_Rotation : UnityEngine.Vector3
        public m_Scale : UnityEngine.Vector2
        public m_SyncScale : boolean
        public m_MuteCamera : boolean
        public m_SplitView : float
        public m_RenderMode : Cinemachine_CinemachineStoryboard.StoryboardRenderMode
        public m_SortingOrder : int
        public m_PlaneDistance : float

        private constructor ()
    }

    class Cinemachine3rdPersonFollow extends CinemachineComponentBase {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public Damping : UnityEngine.Vector3
        public ShoulderOffset : UnityEngine.Vector3
        public VerticalArmLength : float
        public CameraSide : float
        public CameraDistance : float
        public CameraCollisionFilter : UnityEngine.LayerMask
        public IgnoreTag : string
        public CameraRadius : float
        public DampingIntoCollision : float
        public DampingFromCollision : float

        private constructor ()
        public GetMaxDampTime () : float
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public GetRigPositions ($root: $Ref<UnityEngine.Vector3>, $shoulder: $Ref<UnityEngine.Vector3>, $hand: $Ref<UnityEngine.Vector3>) : void
    }

    class CinemachineBasicMultiChannelPerlin extends CinemachineComponentBase {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public m_NoiseProfile : NoiseSettings
        public m_PivotOffset : UnityEngine.Vector3
        public m_AmplitudeGain : float
        public m_FrequencyGain : float

        private constructor ()
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
        public ReSeed () : void
    }

    class NoiseSettings extends SignalSourceAsset {

        public get SignalDuration(): float;
        public PositionNoise : Cinemachine_NoiseSettings.TransformNoiseParams[]
        public OrientationNoise : Cinemachine_NoiseSettings.TransformNoiseParams[]

        private constructor ()
        public static GetCombinedFilterResults ($noiseParams: Cinemachine_NoiseSettings.TransformNoiseParams[], $time: float, $timeOffsets: UnityEngine.Vector3) : UnityEngine.Vector3
        public GetSignal ($timeSinceSignalStart: float, $pos: $Ref<UnityEngine.Vector3>, $rot: $Ref<UnityEngine.Quaternion>) : void
    }

    class SignalSourceAsset extends UnityEngine.ScriptableObject implements ISignalSource6D {

        public get SignalDuration(): float;

        public GetSignal ($timeSinceSignalStart: float, $pos: $Ref<UnityEngine.Vector3>, $rot: $Ref<UnityEngine.Quaternion>) : void
        private constructor ()
    }

    interface ISignalSource6D {

        readonly SignalDuration? : float

        GetSignal? ($timeSinceSignalStart: float, $pos: $Ref<UnityEngine.Vector3>, $rot: $Ref<UnityEngine.Quaternion>) : void
    }

    class CinemachineComposer extends CinemachineComponentBase {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public m_TrackedObjectOffset : UnityEngine.Vector3
        public m_LookaheadTime : float
        public m_LookaheadSmoothing : float
        public m_LookaheadIgnoreY : boolean
        public m_HorizontalDamping : float
        public m_VerticalDamping : float
        public m_ScreenX : float
        public m_ScreenY : float
        public m_DeadZoneWidth : float
        public m_DeadZoneHeight : float
        public m_SoftZoneWidth : float
        public m_SoftZoneHeight : float
        public m_BiasX : float
        public m_BiasY : float
        public m_CenterOnActivate : boolean
        public get TrackedPoint(): UnityEngine.Vector3;

        private constructor ()
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public GetMaxDampTime () : float
        public PrePipelineMutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
    }

    class CinemachineFramingTransposer extends CinemachineComponentBase {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public m_TrackedObjectOffset : UnityEngine.Vector3
        public m_LookaheadTime : float
        public m_LookaheadSmoothing : float
        public m_LookaheadIgnoreY : boolean
        public m_XDamping : float
        public m_YDamping : float
        public m_ZDamping : float
        public m_TargetMovementOnly : boolean
        public m_ScreenX : float
        public m_ScreenY : float
        public m_CameraDistance : float
        public m_DeadZoneWidth : float
        public m_DeadZoneHeight : float
        public m_DeadZoneDepth : float
        public m_UnlimitedSoftZone : boolean
        public m_SoftZoneWidth : float
        public m_SoftZoneHeight : float
        public m_BiasX : float
        public m_BiasY : float
        public m_CenterOnActivate : boolean
        public m_GroupFramingMode : Cinemachine_CinemachineFramingTransposer.FramingMode
        public m_AdjustmentMode : Cinemachine_CinemachineFramingTransposer.AdjustmentMode
        public m_GroupFramingSize : float
        public m_MaxDollyIn : float
        public m_MaxDollyOut : float
        public m_MinimumDistance : float
        public m_MaximumDistance : float
        public m_MinimumFOV : float
        public m_MaximumFOV : float
        public m_MinimumOrthoSize : float
        public m_MaximumOrthoSize : float
        public get TrackedPoint(): UnityEngine.Vector3;
        public get LastBounds(): UnityEngine.Bounds;
        public get LastBoundsMatrix(): UnityEngine.Matrix4x4;

        private constructor ()
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public GetMaxDampTime () : float
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float, $transitionParams: $Ref<Cinemachine_CinemachineVirtualCameraBase.TransitionParams>) : boolean
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
    }

    class CinemachineGroupComposer extends CinemachineComposer {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public m_TrackedObjectOffset : UnityEngine.Vector3
        public m_LookaheadTime : float
        public m_LookaheadSmoothing : float
        public m_LookaheadIgnoreY : boolean
        public m_HorizontalDamping : float
        public m_VerticalDamping : float
        public m_ScreenX : float
        public m_ScreenY : float
        public m_DeadZoneWidth : float
        public m_DeadZoneHeight : float
        public m_SoftZoneWidth : float
        public m_SoftZoneHeight : float
        public m_BiasX : float
        public m_BiasY : float
        public m_CenterOnActivate : boolean
        public get TrackedPoint(): UnityEngine.Vector3;
        public m_GroupFramingSize : float
        public m_FramingMode : Cinemachine_CinemachineGroupComposer.FramingMode
        public m_FrameDamping : float
        public m_AdjustmentMode : Cinemachine_CinemachineGroupComposer.AdjustmentMode
        public m_MaxDollyIn : float
        public m_MaxDollyOut : float
        public m_MinimumDistance : float
        public m_MaximumDistance : float
        public m_MinimumFOV : float
        public m_MaximumFOV : float
        public m_MinimumOrthoSize : float
        public m_MaximumOrthoSize : float
        public get LastBounds(): UnityEngine.Bounds;
        public get LastBoundsMatrix(): UnityEngine.Matrix4x4;

        private constructor ()
        public GetMaxDampTime () : float
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
    }

    class CinemachineHardLockToTarget extends CinemachineComponentBase {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public m_Damping : float

        private constructor ()
        public GetMaxDampTime () : float
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
    }

    class CinemachineHardLookAt extends CinemachineComponentBase {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;

        private constructor ()
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
    }

    class CinemachineOrbitalTransposer extends CinemachineTransposer {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public m_BindingMode : Cinemachine_CinemachineTransposer.BindingMode
        public m_FollowOffset : UnityEngine.Vector3
        public m_XDamping : float
        public m_YDamping : float
        public m_ZDamping : float
        public m_AngularDampingMode : Cinemachine_CinemachineTransposer.AngularDampingMode
        public m_PitchDamping : float
        public m_YawDamping : float
        public m_RollDamping : float
        public m_AngularDamping : float
        public get HideOffsetInInspector(): boolean;
        public set HideOffsetInInspector(value: boolean);
        public get EffectiveOffset(): UnityEngine.Vector3;
        public m_Heading : Cinemachine_CinemachineOrbitalTransposer.Heading
        public m_RecenterToTargetHeading : Cinemachine_AxisState.Recentering
        public m_XAxis : AxisState
        public m_HeadingIsSlave : boolean

        private constructor ()
        /**
        * @methodSwap UpdateHeading_EBB7509C_EE3F4862
        */
        public UpdateHeading ($deltaTime: float, $up: UnityEngine.Vector3, $axis: $Ref<AxisState>) : float
        /**
        * @methodSwap UpdateHeading_EBB7509C_D9491365
        */
        public UpdateHeading ($deltaTime: float, $up: UnityEngine.Vector3, $axis: $Ref<AxisState>, $recentering: $Ref<Cinemachine_AxisState.Recentering>, $isLive: boolean) : float
        public UpdateInputAxisProvider () : void
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float, $transitionParams: $Ref<Cinemachine_CinemachineVirtualCameraBase.TransitionParams>) : boolean
        public GetAxisClosestValue ($cameraPos: UnityEngine.Vector3, $up: UnityEngine.Vector3) : float
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
        public GetTargetCameraPosition ($worldUp: UnityEngine.Vector3) : UnityEngine.Vector3
    }

    class CinemachineTransposer extends CinemachineComponentBase {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public m_BindingMode : Cinemachine_CinemachineTransposer.BindingMode
        public m_FollowOffset : UnityEngine.Vector3
        public m_XDamping : float
        public m_YDamping : float
        public m_ZDamping : float
        public m_AngularDampingMode : Cinemachine_CinemachineTransposer.AngularDampingMode
        public m_PitchDamping : float
        public m_YawDamping : float
        public m_RollDamping : float
        public m_AngularDamping : float
        public get HideOffsetInInspector(): boolean;
        public set HideOffsetInInspector(value: boolean);
        public get EffectiveOffset(): UnityEngine.Vector3;

        private constructor ()
        public GetMaxDampTime () : float
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public GetTargetCameraPosition ($worldUp: UnityEngine.Vector3) : UnityEngine.Vector3
        public GetReferenceOrientation ($worldUp: UnityEngine.Vector3) : UnityEngine.Quaternion
    }

    class CinemachinePOV extends CinemachineComponentBase {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public m_RecenterTarget : Cinemachine_CinemachinePOV.RecenterTargetMode
        public m_VerticalAxis : AxisState
        public m_VerticalRecentering : Cinemachine_AxisState.Recentering
        public m_HorizontalAxis : AxisState
        public m_HorizontalRecentering : Cinemachine_AxisState.Recentering
        public m_ApplyBeforeBody : boolean

        private constructor ()
        public UpdateInputAxisProvider () : void
        public PrePipelineMutateCameraState ($state: $Ref<CameraState>, $deltaTime: float) : void
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
        public GetRecenterTarget () : UnityEngine.Vector2
        public ForceCameraPosition ($pos: UnityEngine.Vector3, $rot: UnityEngine.Quaternion) : void
        public OnTransitionFromCamera ($fromCam: ICinemachineCamera, $worldUp: UnityEngine.Vector3, $deltaTime: float, $transitionParams: $Ref<Cinemachine_CinemachineVirtualCameraBase.TransitionParams>) : boolean
    }

    class CinemachineSameAsFollowTarget extends CinemachineComponentBase {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public m_Damping : float

        private constructor ()
        public GetMaxDampTime () : float
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
    }

    class CinemachineTrackedDolly extends CinemachineComponentBase {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get FollowTarget(): UnityEngine.Transform;
        public get LookAtTarget(): UnityEngine.Transform;
        public get AbstractFollowTargetGroup(): ICinemachineTargetGroup;
        public get FollowTargetGroup(): CinemachineTargetGroup;
        public get FollowTargetPosition(): UnityEngine.Vector3;
        public get FollowTargetRotation(): UnityEngine.Quaternion;
        public get AbstractLookAtTargetGroup(): ICinemachineTargetGroup;
        public get LookAtTargetGroup(): CinemachineTargetGroup;
        public get LookAtTargetPosition(): UnityEngine.Vector3;
        public get LookAtTargetRotation(): UnityEngine.Quaternion;
        public get VcamState(): CameraState;
        public get IsValid(): boolean;
        public get Stage(): Cinemachine_CinemachineCore.Stage;
        public get BodyAppliesAfterAim(): boolean;
        public get RequiresUserInput(): boolean;
        public m_Path : CinemachinePathBase
        public m_PathPosition : float
        public m_PositionUnits : Cinemachine_CinemachinePathBase.PositionUnits
        public m_PathOffset : UnityEngine.Vector3
        public m_XDamping : float
        public m_YDamping : float
        public m_ZDamping : float
        public m_CameraUp : Cinemachine_CinemachineTrackedDolly.CameraUpMode
        public m_PitchDamping : float
        public m_YawDamping : float
        public m_RollDamping : float
        public m_AutoDolly : Cinemachine_CinemachineTrackedDolly.AutoDolly

        private constructor ()
        public GetMaxDampTime () : float
        public MutateCameraState ($curState: $Ref<CameraState>, $deltaTime: float) : void
    }

    class CinemachineCore extends System.Object {

        public static kStreamingVersion : int
        public static sShowHiddenObjects : boolean
        public static GetInputAxis : Cinemachine_CinemachineCore.AxisInputDelegate
        public static UniformDeltaTimeOverride : float
        public static CurrentTimeOverride : float
        public static GetBlendOverride : Cinemachine_CinemachineCore.GetBlendOverrideDelegate
        public static CameraUpdatedEvent : Cinemachine_CinemachineBrain.BrainEvent
        public static CameraCutEvent : Cinemachine_CinemachineBrain.BrainEvent
        public static get Instance(): CinemachineCore;
        public static get DeltaTime(): float;
        public static get CurrentTime(): float;
        public get BrainCount(): int;
        public get VirtualCameraCount(): int;

        public constructor ()
        public GetActiveBrain ($index: int) : CinemachineBrain
        public GetVirtualCamera ($index: int) : CinemachineVirtualCameraBase
        public IsLive ($vcam: ICinemachineCamera) : boolean
        public IsLiveInBlend ($vcam: ICinemachineCamera) : boolean
        public GenerateCameraActivationEvent ($vcam: ICinemachineCamera, $vcamFrom: ICinemachineCamera) : void
        public GenerateCameraCutEvent ($vcam: ICinemachineCamera) : void
        public FindPotentialTargetBrain ($vcam: CinemachineVirtualCameraBase) : CinemachineBrain
        public OnTargetObjectWarped ($target: UnityEngine.Transform, $positionDelta: UnityEngine.Vector3) : void
    }

    class AxisBase extends System.ValueType {

        public m_Value : float
        public m_MinValue : float
        public m_MaxValue : float
        public m_Wrap : boolean

        public Validate () : void
    }

    class CinemachineInputAxisDriver extends System.ValueType {

        public multiplier : float
        public accelTime : float
        public decelTime : float
        public name : string
        public inputValue : float

        public Validate () : void
        /**
        * @methodSwap Update_EBB7509C_H4C21A091
        */
        public Update ($deltaTime: float, $axis: $Ref<AxisBase>) : boolean
        /**
        * @methodSwap Update_EBB7509C_H5457E2F9
        */
        public Update ($deltaTime: float, $axis: $Ref<AxisState>) : boolean
    }

    class RuntimeUtility {

        public static DestroyObject ($obj: UnityEngine.Object) : void
        public static IsPrefab ($gameObject: UnityEngine.GameObject) : boolean
        public static RaycastIgnoreTag ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $rayLength: float, $layerMask: int, $ignoreTag: $Ref<string>) : boolean
        public static SphereCastIgnoreTag ($rayStart: UnityEngine.Vector3, $radius: float, $dir: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $rayLength: float, $layerMask: int, $ignoreTag: $Ref<string>) : boolean
        public static NormalizeCurve ($curve: UnityEngine.AnimationCurve, $normalizeX: boolean, $normalizeY: boolean) : UnityEngine.AnimationCurve
    }

    class CinemachineInputProvider extends UnityEngine.MonoBehaviour implements Cinemachine_AxisState.IInputAxisProvider {

        public PlayerIndex : int
        public AutoEnableInputs : boolean
        public XYAxis : UnityEngine_InputSystem.InputActionReference
        public ZAxis : UnityEngine_InputSystem.InputActionReference

        private constructor ()
        public GetAxisValue ($axis: int) : float
    }

    class CinemachineTriggerAction extends UnityEngine.MonoBehaviour {

        public m_LayerMask : UnityEngine.LayerMask
        public m_WithTag : string
        public m_WithoutTag : string
        public m_SkipFirst : int
        public m_Repeating : boolean
        public m_OnObjectEnter : Cinemachine_CinemachineTriggerAction.ActionSettings
        public m_OnObjectExit : Cinemachine_CinemachineTriggerAction.ActionSettings

        private constructor ()
    }

    class GroupWeightManipulator extends UnityEngine.MonoBehaviour {

        public m_Weight0 : float
        public m_Weight1 : float
        public m_Weight2 : float
        public m_Weight3 : float
        public m_Weight4 : float
        public m_Weight5 : float
        public m_Weight6 : float
        public m_Weight7 : float

        private constructor ()
    }

    class CinemachineCollisionImpulseSource extends CinemachineImpulseSource {

        public m_ImpulseDefinition : CinemachineImpulseDefinition
        public m_DefaultVelocity : UnityEngine.Vector3
        public m_LayerMask : UnityEngine.LayerMask
        public m_IgnoreTag : string
        public m_UseImpactDirection : boolean
        public m_ScaleImpactWithMass : boolean
        public m_ScaleImpactWithSpeed : boolean

        private constructor ()
    }

    class CinemachineImpulseSource extends UnityEngine.MonoBehaviour {

        public m_ImpulseDefinition : CinemachineImpulseDefinition
        public m_DefaultVelocity : UnityEngine.Vector3

        private constructor ()
        public GenerateImpulseAtPositionWithVelocity ($position: UnityEngine.Vector3, $velocity: UnityEngine.Vector3) : void
        public GenerateImpulseWithVelocity ($velocity: UnityEngine.Vector3) : void
        public GenerateImpulseWithForce ($force: float) : void
        public GenerateImpulse () : void
        public GenerateImpulseAt ($position: UnityEngine.Vector3, $velocity: UnityEngine.Vector3) : void
        public GenerateImpulse ($velocity: UnityEngine.Vector3) : void
        /**
        * @methodSwap GenerateImpulse_EBB7509C_H82424F3E
        */
        public GenerateImpulse ($force: float) : void
    }

    class CinemachineImpulseDefinition extends System.Object {

        public m_ImpulseChannel : int
        public m_ImpulseShape : Cinemachine_CinemachineImpulseDefinition.ImpulseShapes
        public m_CustomImpulseShape : UnityEngine.AnimationCurve
        public m_ImpulseDuration : float
        public m_ImpulseType : Cinemachine_CinemachineImpulseDefinition.ImpulseTypes
        public m_DissipationRate : float
        public m_RawSignal : SignalSourceAsset
        public m_AmplitudeGain : float
        public m_FrequencyGain : float
        public m_RepeatMode : Cinemachine_CinemachineImpulseDefinition.RepeatMode
        public m_Randomize : boolean
        public m_TimeEnvelope : Cinemachine_CinemachineImpulseManager.EnvelopeDefinition
        public m_ImpactRadius : float
        public m_DirectionMode : Cinemachine_CinemachineImpulseManager_ImpulseEvent.DirectionMode
        public m_DissipationMode : Cinemachine_CinemachineImpulseManager_ImpulseEvent.DissipationMode
        public m_DissipationDistance : float
        public m_PropagationSpeed : float

        public constructor ()
        public OnValidate () : void
        public CreateEvent ($position: UnityEngine.Vector3, $velocity: UnityEngine.Vector3) : void
        public CreateAndReturnEvent ($position: UnityEngine.Vector3, $velocity: UnityEngine.Vector3) : Cinemachine_CinemachineImpulseManager.ImpulseEvent
    }

    class CinemachineFixedSignal extends SignalSourceAsset {

        public get SignalDuration(): float;
        public m_XCurve : UnityEngine.AnimationCurve
        public m_YCurve : UnityEngine.AnimationCurve
        public m_ZCurve : UnityEngine.AnimationCurve

        private constructor ()
        public GetSignal ($timeSinceSignalStart: float, $pos: $Ref<UnityEngine.Vector3>, $rot: $Ref<UnityEngine.Quaternion>) : void
    }

    class CinemachineImpulseListener extends CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;
        public m_ApplyAfter : Cinemachine_CinemachineCore.Stage
        public m_ChannelMask : int
        public m_Gain : float
        public m_Use2DDistance : boolean
        public m_UseCameraSpace : boolean
        public m_ReactionSettings : Cinemachine_CinemachineImpulseListener.ImpulseReaction

        private constructor ()
    }

    class CinemachineImpulseManager extends System.Object {

        public IgnoreTimeScale : boolean
        public static get Instance(): CinemachineImpulseManager;
        public get CurrentTime(): float;

        public GetImpulseAt ($listenerLocation: UnityEngine.Vector3, $distance2D: boolean, $channelMask: int, $pos: $Ref<UnityEngine.Vector3>, $rot: $Ref<UnityEngine.Quaternion>) : boolean
        public NewImpulseEvent () : Cinemachine_CinemachineImpulseManager.ImpulseEvent
        public AddImpulseEvent ($e: Cinemachine_CinemachineImpulseManager.ImpulseEvent) : void
        public Clear () : void
    }

    class CinemachineIndependentImpulseListener extends UnityEngine.MonoBehaviour {

        public m_ChannelMask : int
        public m_Gain : float
        public m_Use2DDistance : boolean
        public m_UseLocalSpace : boolean
        public m_ReactionSettings : Cinemachine_CinemachineImpulseListener.ImpulseReaction

        private constructor ()
    }

}

declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'

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
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    /**
    * A Camera is a device through which the player views the world.
    */
    interface Camera {

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * Interface to receive callbacks upon serialization and deserialization.
    */
    interface ISerializationCallbackReceiver {

    }

    /**
    * Represents an axis aligned bounding box.
    */
    interface Bounds extends System.IFormattable, System.IEquatable$1<Bounds> {

    }

    /**
    * A standard 4x4 transformation matrix.
    */
    interface Matrix4x4 extends System.IFormattable, System.IEquatable$1<Matrix4x4> {

    }

    /**
    * Describes a single bounding sphere for use by a CullingGroup.
    */
    interface BoundingSphere {

    }

    /**
    * A class you can derive from if you want to create objects that live independently of GameObjects.
    */
    interface ScriptableObject {

    }

    /**
    * Interface for objects used as resolvers on ExposedReferences.
    */
    interface IExposedPropertyTable {

    }

    /**
    * Creates a type whos value is resolvable at runtime.
    */
    interface ExposedReference$1<T> {

    }

    /**
    * Specifies Layers to use in a Physics.Raycast.
    */
    interface LayerMask {

    }

    /**
    * Position, size, anchor and pivot information for a rectangle.
    */
    interface RectTransform {

    }

    /**
    * Store a collection of Keyframes that can be evaluated over time.
    */
    interface AnimationCurve extends System.IEquatable$1<AnimationCurve> {

    }

    /**
    * Representation of RGBA colors.
    */
    interface Color extends System.IFormattable, System.IEquatable$1<Color> {

    }

    /**
    * A base class of all colliders.
    */
    interface Collider {

    }

    /**
    * Parent class for collider types used with 2D gameplay.
    */
    interface Collider2D {

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
    * Interface to control the Mecanim animation system.
    */
    interface Animator {

    }

    /**
    * Base class for Texture handling.
    */
    interface Texture {

    }

    /**
    * Representation of rays.
    */
    interface Ray extends System.IFormattable {

    }

    /**
    * Structure used to get information back from a raycast.
    */
    interface RaycastHit {

    }

    /**
    * A 2D Rectangle defined by X and Y position, width and height.
    */
    interface Rect extends System.IFormattable, System.IEquatable$1<Rect> {

    }

    /**
    * Styling information for GUI elements.
    */
    interface GUIStyle {

    }

    /**
    * Representation of four-dimensional vectors.
    */
    interface Vector4 extends System.IFormattable, System.IEquatable$1<Vector4> {

    }

    interface Vector2 {

        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.IsNaN
        */
        IsNaN () : boolean
        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.ClosestPointOnSegment
        */
        ClosestPointOnSegment ($s0: Vector2, $s1: Vector2) : float
        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.SquareNormalize
        */
        SquareNormalize () : Vector2
        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.Abs
        */
        Abs () : Vector2
        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.IsUniform
        */
        IsUniform () : boolean
    }

    interface Vector3 {

        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.IsNaN
        */
        IsNaN () : boolean
        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.ClosestPointOnSegment
        */
        ClosestPointOnSegment ($s0: Vector3, $s1: Vector3) : float
        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.ProjectOntoPlane
        */
        ProjectOntoPlane ($planeNormal: Vector3) : Vector3
        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.Abs
        */
        Abs () : Vector3
        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.IsUniform
        */
        IsUniform () : boolean
        /**
        * @extension Cinemachine.Utility.UnityVectorExtensions.AlmostZero
        */
        AlmostZero () : boolean
    }

    interface Quaternion {

        /**
        * @extension Cinemachine.Utility.UnityQuaternionExtensions.Normalized
        */
        Normalized () : Quaternion
        /**
        * @extension Cinemachine.Utility.UnityQuaternionExtensions.GetCameraRotationToTarget
        */
        GetCameraRotationToTarget ($lookAtDir: Vector3, $worldUp: Vector3) : Vector2
        /**
        * @extension Cinemachine.Utility.UnityQuaternionExtensions.ApplyCameraRotation
        */
        ApplyCameraRotation ($rot: Vector2, $worldUp: Vector3) : Quaternion
    }

    interface Rect {

        /**
        * @extension Cinemachine.Utility.UnityRectExtensions.Inflated
        */
        Inflated ($delta: Vector2) : Rect
    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

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

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

    interface IList extends ICollection {

    }

    interface ICollection extends IEnumerable {

    }

}

declare module 'Cinemachine.CameraState' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    class CustomBlendable extends System.ValueType {

        public m_Custom : UnityEngine.Object
        public m_Weight : float

        public constructor ($custom: UnityEngine.Object, $weight: float)
    }

    enum BlendHintValue {
        Nothing = 0,
        NoPosition = 1,
        NoOrientation = 2,
        NoTransform = 3,
        SphericalPositionBlend = 4,
        CylindricalPositionBlend = 8,
        RadialAimBlend = 16,
        IgnoreLookAtTarget = 32,
        NoLens = 64 
    }

}

declare module 'Cinemachine.LensSettings' {

    enum OverrideModes {
        None = 0,
        Orthographic = 1,
        Perspective = 2,
        Physical = 3 
    }

}

declare module 'UnityEngine.Camera' {

    /**
    * Enum used to specify how the sensor gate (sensor frame) defined by Camera.sensorSize fits into the resolution gate (render frame).
    */
    enum GateFitMode {
        Vertical = 1,
        Horizontal = 2,
        Fill = 3,
        Overscan = 4,
        None = 0 
    }

}

declare module 'Cinemachine.AxisState' {
    import * as System from 'System'
    import * as Cinemachine from 'Cinemachine'

    interface IInputAxisProvider {

        GetAxisValue? ($axis: int) : float
    }

    enum SpeedMode {
        MaxSpeed = 0,
        InputValueGain = 1 
    }

    class Recentering extends System.ValueType {

        public m_enabled : boolean
        public m_WaitTime : float
        public m_RecenteringTime : float

        public constructor ($enabled: boolean, $waitTime: float, $recenteringTime: float)
        public Validate () : void
        public CopyStateFrom ($other: $Ref<Recentering>) : void
        public CancelRecentering () : void
        public RecenterNow () : void
        public DoRecentering ($axis: $Ref<Cinemachine.AxisState>, $deltaTime: float, $recenterTarget: float) : void
    }

}

declare module 'Cinemachine.CinemachineCore' {
    import * as System from 'System'
    import * as Cinemachine from 'Cinemachine'
    import * as UnityEngine from 'UnityEngine'

    enum Stage {
        Body = 0,
        Aim = 1,
        Noise = 2,
        Finalize = 3 
    }

    interface AxisInputDelegate {
        (axisName: string) : float; 
        Invoke?: (axisName: string) => float;
    }
    var AxisInputDelegate: { new (func: (axisName: string) => float): AxisInputDelegate; }

    interface GetBlendOverrideDelegate {
        (fromVcam: Cinemachine.ICinemachineCamera, toVcam: Cinemachine.ICinemachineCamera, defaultBlend: Cinemachine.CinemachineBlendDefinition, owner: UnityEngine.MonoBehaviour) : Cinemachine.CinemachineBlendDefinition; 
        Invoke?: (fromVcam: Cinemachine.ICinemachineCamera, toVcam: Cinemachine.ICinemachineCamera, defaultBlend: Cinemachine.CinemachineBlendDefinition, owner: UnityEngine.MonoBehaviour) => Cinemachine.CinemachineBlendDefinition;
    }
    var GetBlendOverrideDelegate: { new (func: (fromVcam: Cinemachine.ICinemachineCamera, toVcam: Cinemachine.ICinemachineCamera, defaultBlend: Cinemachine.CinemachineBlendDefinition, owner: UnityEngine.MonoBehaviour) => Cinemachine.CinemachineBlendDefinition): GetBlendOverrideDelegate; }

}

declare module 'Cinemachine.CinemachineVirtualCameraBase' {
    import * as System from 'System'
    import * as Cinemachine_CinemachineBrain from 'Cinemachine.CinemachineBrain'

    enum StandbyUpdateMode {
        Never = 0,
        Always = 1,
        RoundRobin = 2 
    }

    enum BlendHint {
        None = 0,
        SphericalPosition = 1,
        CylindricalPosition = 2,
        ScreenSpaceAimWhenTargetsDiffer = 3 
    }

    class TransitionParams extends System.ValueType {

        public m_BlendHint : BlendHint
        public m_InheritPosition : boolean
        public m_OnCameraLive : Cinemachine_CinemachineBrain.VcamActivatedEvent

    }

}

declare module 'UnityEngine.Timeline' {
    import * as UnityEngine_Playables from 'UnityEngine.Playables'
    import * as UnityEngine from 'UnityEngine'

    interface IPropertyPreview {

    }

    interface IPropertyCollector {

    }

    interface TrackAsset extends ICurvesOwner, IPropertyPreview, UnityEngine.ISerializationCallbackReceiver {

    }

}

declare module 'UnityEngine.Playables' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'

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
    * Instantiates a PlayableGraph from a PlayableAsset and controls playback of Playable objects.
    * This API is mainly designed to provide scheduling and scene binding support and scheduling for the Timeline package. Our users may find limited use for it otherwise.
    * Most of the functionality of this class can be replicated by using PlayableGraph.
    */
    interface PlayableDirector extends UnityEngine.IExposedPropertyTable {

    }

}

declare module 'Cinemachine.CinemachineBlendListCamera' {
    import * as System from 'System'
    import * as Cinemachine from 'Cinemachine'

    class Instruction extends System.ValueType {

        public m_VirtualCamera : Cinemachine.CinemachineVirtualCameraBase
        public m_Hold : float
        public m_Blend : Cinemachine.CinemachineBlendDefinition

    }

}

declare module 'Cinemachine.CinemachineBlendDefinition' {

    enum Style {
        Cut = 0,
        EaseInOut = 1,
        EaseIn = 2,
        EaseOut = 3,
        HardIn = 4,
        HardOut = 5,
        Linear = 6,
        Custom = 7 
    }

}

declare module 'Cinemachine.CinemachineBrain' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    enum UpdateMethod {
        FixedUpdate = 0,
        LateUpdate = 1,
        SmartUpdate = 2,
        ManualUpdate = 3 
    }

    enum BrainUpdateMethod {
        FixedUpdate = 0,
        LateUpdate = 1 
    }

    class BrainEvent extends UnityEngine_Events.UnityEvent$1<Cinemachine.CinemachineBrain> {

        public constructor ()
    }

    class VcamActivatedEvent extends UnityEngine_Events.UnityEvent$2<Cinemachine.ICinemachineCamera,Cinemachine.ICinemachineCamera> {

        public constructor ()
    }

}

declare module 'Cinemachine.CinemachineBlenderSettings' {
    import * as System from 'System'
    import * as Cinemachine from 'Cinemachine'

    class CustomBlend extends System.ValueType {

        public m_From : string
        public m_To : string
        public m_Blend : Cinemachine.CinemachineBlendDefinition

    }

}

declare module 'UnityEngine.Events' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    /**
    * One argument version of UnityEvent.
    */
    class UnityEvent$1<T0> extends UnityEventBase {

        public constructor ()
        public AddListener ($call: UnityAction$1<T0>) : void
        public RemoveListener ($call: UnityAction$1<T0>) : void
        public Invoke ($arg0: T0) : void
    }

    /**
    * Abstract base class for UnityEvents.
    */
    interface UnityEventBase extends UnityEngine.ISerializationCallbackReceiver {

    }

    interface UnityAction$1<T0> {
        (arg0: T0) : void; 
        Invoke?: (arg0: T0) => void;
    }

    /**
    * Two argument version of UnityEvent.
    */
    class UnityEvent$2<T0,T1> extends UnityEventBase {

        public constructor ()
        public AddListener ($call: UnityAction$2<T0, T1>) : void
        public RemoveListener ($call: UnityAction$2<T0, T1>) : void
        public Invoke ($arg0: T0, $arg1: T1) : void
    }

    interface UnityAction$2<T0,T1> {
        (arg0: T0, arg1: T1) : void; 
        Invoke?: (arg0: T0, arg1: T1) => void;
    }

    /**
    * A zero argument persistent callback that can be saved with the Scene.
    */
    interface UnityEvent {

    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

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

declare module 'Cinemachine.CinemachineCollider' {

    enum ResolutionStrategy {
        PullCameraForward = 0,
        PreserveCameraHeight = 1,
        PreserveCameraDistance = 2 
    }

}

declare module 'Cinemachine.CinemachineConfiner' {

    enum Mode {
        Confine2D = 0,
        Confine3D = 1 
    }

}

declare module 'Cinemachine.CinemachinePathBase' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    enum PositionUnits {
        PathUnits = 0,
        Distance = 1,
        Normalized = 2 
    }

    class Appearance extends System.Object {

        public pathColor : UnityEngine.Color
        public inactivePathColor : UnityEngine.Color
        public width : float

        public constructor ()
    }

}

declare module 'Cinemachine.CinemachineDollyCart' {

    enum UpdateMethod {
        Update = 0,
        FixedUpdate = 1,
        LateUpdate = 2 
    }

}

declare module 'Cinemachine.CinemachineTargetGroup' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    enum PositionMode {
        GroupCenter = 0,
        GroupAverage = 1 
    }

    enum RotationMode {
        Manual = 0,
        GroupAverage = 1 
    }

    enum UpdateMethod {
        Update = 0,
        FixedUpdate = 1,
        LateUpdate = 2 
    }

    class Target extends System.ValueType {

        public target : UnityEngine.Transform
        public weight : float
        public radius : float

    }

}

declare module 'Cinemachine.CinemachineVirtualCamera' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as Cinemachine from 'Cinemachine'

    interface CreatePipelineDelegate {
        (vcam: Cinemachine.CinemachineVirtualCamera, name: string, copyFrom: Cinemachine.CinemachineComponentBase[]) : UnityEngine.Transform; 
        Invoke?: (vcam: Cinemachine.CinemachineVirtualCamera, name: string, copyFrom: Cinemachine.CinemachineComponentBase[]) => UnityEngine.Transform;
    }
    var CreatePipelineDelegate: { new (func: (vcam: Cinemachine.CinemachineVirtualCamera, name: string, copyFrom: Cinemachine.CinemachineComponentBase[]) => UnityEngine.Transform): CreatePipelineDelegate; }

    interface DestroyPipelineDelegate {
        (pipeline: UnityEngine.GameObject) : void; 
        Invoke?: (pipeline: UnityEngine.GameObject) => void;
    }
    var DestroyPipelineDelegate: { new (func: (pipeline: UnityEngine.GameObject) => void): DestroyPipelineDelegate; }

}

declare module 'Cinemachine.CinemachineOrbitalTransposer' {
    import * as System from 'System'
    import * as Cinemachine_CinemachineOrbitalTransposer_Heading from 'Cinemachine.CinemachineOrbitalTransposer.Heading'

    class Heading extends System.ValueType {

        public m_Definition : Cinemachine_CinemachineOrbitalTransposer_Heading.HeadingDefinition
        public m_VelocityFilterStrength : int
        public m_Bias : float

        public constructor ($def: Cinemachine_CinemachineOrbitalTransposer_Heading.HeadingDefinition, $filterStrength: int, $bias: float)
    }

}

declare module 'Cinemachine.CinemachineOrbitalTransposer.Heading' {

    enum HeadingDefinition {
        PositionDelta = 0,
        Velocity = 1,
        TargetForward = 2,
        WorldForward = 3 
    }

}

declare module 'Cinemachine.CinemachineTransposer' {

    enum BindingMode {
        LockToTargetOnAssign = 0,
        LockToTargetWithWorldUp = 1,
        LockToTargetNoRoll = 2,
        LockToTarget = 3,
        WorldSpace = 4,
        SimpleFollowWithWorldUp = 5 
    }

    enum AngularDampingMode {
        Euler = 0,
        Quaternion = 1 
    }

}

declare module 'Cinemachine.CinemachineFreeLook' {
    import * as System from 'System'
    import * as Cinemachine from 'Cinemachine'
    import * as UnityEngine from 'UnityEngine'

    class Orbit extends System.ValueType {

        public m_Height : float
        public m_Radius : float

        public constructor ($h: float, $r: float)
    }

    interface CreateRigDelegate {
        (vcam: Cinemachine.CinemachineFreeLook, name: string, copyFrom: Cinemachine.CinemachineVirtualCamera) : Cinemachine.CinemachineVirtualCamera; 
        Invoke?: (vcam: Cinemachine.CinemachineFreeLook, name: string, copyFrom: Cinemachine.CinemachineVirtualCamera) => Cinemachine.CinemachineVirtualCamera;
    }
    var CreateRigDelegate: { new (func: (vcam: Cinemachine.CinemachineFreeLook, name: string, copyFrom: Cinemachine.CinemachineVirtualCamera) => Cinemachine.CinemachineVirtualCamera): CreateRigDelegate; }

    interface DestroyRigDelegate {
        (rig: UnityEngine.GameObject) : void; 
        Invoke?: (rig: UnityEngine.GameObject) => void;
    }
    var DestroyRigDelegate: { new (func: (rig: UnityEngine.GameObject) => void): DestroyRigDelegate; }

}

declare module 'Cinemachine.CinemachinePath' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    class Waypoint extends System.ValueType {

        public position : UnityEngine.Vector3
        public tangent : UnityEngine.Vector3
        public roll : float

    }

}

declare module 'Cinemachine.CinemachineSmoothPath' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    class Waypoint extends System.ValueType {

        public position : UnityEngine.Vector3
        public roll : float

    }

}

declare module 'Cinemachine.CinemachineStateDrivenCamera' {
    import * as System from 'System'
    import * as Cinemachine from 'Cinemachine'

    class Instruction extends System.ValueType {

        public m_FullHash : int
        public m_VirtualCamera : Cinemachine.CinemachineVirtualCameraBase
        public m_ActivateAfter : float
        public m_MinDuration : float

    }

}

declare module 'Cinemachine.CinemachineStoryboard' {

    enum FillStrategy {
        BestFit = 0,
        CropImageToFit = 1,
        StretchToFit = 2 
    }

    enum StoryboardRenderMode {
        ScreenSpaceOverlay = 0,
        ScreenSpaceCamera = 1 
    }

}

declare module 'Cinemachine.NoiseSettings' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    class TransformNoiseParams extends System.ValueType {

        public X : NoiseParams
        public Y : NoiseParams
        public Z : NoiseParams

        public GetValueAt ($time: float, $timeOffsets: UnityEngine.Vector3) : UnityEngine.Vector3
    }

    class NoiseParams extends System.ValueType {

        public Frequency : float
        public Amplitude : float
        public Constant : boolean

        public GetValueAt ($time: float, $timeOffset: float) : float
    }

}

declare module 'Cinemachine.CinemachineFramingTransposer' {

    enum FramingMode {
        Horizontal = 0,
        Vertical = 1,
        HorizontalAndVertical = 2,
        None = 3 
    }

    enum AdjustmentMode {
        ZoomOnly = 0,
        DollyOnly = 1,
        DollyThenZoom = 2 
    }

}

declare module 'Cinemachine.CinemachineGroupComposer' {

    enum FramingMode {
        Horizontal = 0,
        Vertical = 1,
        HorizontalAndVertical = 2 
    }

    enum AdjustmentMode {
        ZoomOnly = 0,
        DollyOnly = 1,
        DollyThenZoom = 2 
    }

}

declare module 'Cinemachine.CinemachinePOV' {

    enum RecenterTargetMode {
        None = 0,
        FollowTargetForward = 1,
        LookAtTargetForward = 2 
    }

}

declare module 'Cinemachine.CinemachineTrackedDolly' {
    import * as System from 'System'

    enum CameraUpMode {
        Default = 0,
        Path = 1,
        PathNoRoll = 2,
        FollowTarget = 3,
        FollowTargetNoRoll = 4 
    }

    class AutoDolly extends System.ValueType {

        public m_Enabled : boolean
        public m_PositionOffset : float
        public m_SearchRadius : int
        public m_SearchResolution : int

        public constructor ($enabled: boolean, $positionOffset: float, $searchRadius: int, $stepsPerSegment: int)
    }

}

declare module 'UnityEngine.InputSystem' {
    import * as UnityEngine from 'UnityEngine'

    interface InputActionReference {

    }

}

declare module 'Cinemachine.CinemachineTriggerAction' {
    import * as System from 'System'
    import * as Cinemachine_CinemachineTriggerAction_ActionSettings from 'Cinemachine.CinemachineTriggerAction.ActionSettings'
    import * as UnityEngine from 'UnityEngine'

    class ActionSettings extends System.ValueType {

        public m_Action : Cinemachine_CinemachineTriggerAction_ActionSettings.Mode
        public m_Target : UnityEngine.Object
        public m_BoostAmount : int
        public m_StartTime : float
        public m_Mode : Cinemachine_CinemachineTriggerAction_ActionSettings.TimeMode
        public m_Event : Cinemachine_CinemachineTriggerAction_ActionSettings.TriggerEvent

        public constructor ($action: Cinemachine_CinemachineTriggerAction_ActionSettings.Mode)
        public Invoke () : void
    }

}

declare module 'Cinemachine.CinemachineTriggerAction.ActionSettings' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    enum Mode {
        Custom = 0,
        PriorityBoost = 1,
        Activate = 2,
        Deactivate = 3,
        Enable = 4,
        Disable = 5,
        Play = 6,
        Stop = 7 
    }

    enum TimeMode {
        FromStart = 0,
        FromEnd = 1,
        BeforeNow = 2,
        AfterNow = 3 
    }

    class TriggerEvent extends UnityEngine_Events.UnityEvent {

        public constructor ()
    }

}

declare module 'Cinemachine.CinemachineImpulseManager' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as Cinemachine from 'Cinemachine'
    import * as Cinemachine_CinemachineImpulseManager_ImpulseEvent from 'Cinemachine.CinemachineImpulseManager.ImpulseEvent'

    class ImpulseEvent extends System.Object {

        public m_StartTime : float
        public m_Envelope : EnvelopeDefinition
        public m_SignalSource : Cinemachine.ISignalSource6D
        public m_Position : UnityEngine.Vector3
        public m_Radius : float
        public m_DirectionMode : Cinemachine_CinemachineImpulseManager_ImpulseEvent.DirectionMode
        public m_Channel : int
        public m_DissipationMode : Cinemachine_CinemachineImpulseManager_ImpulseEvent.DissipationMode
        public m_DissipationDistance : float
        public m_CustomDissipation : float
        public m_PropagationSpeed : float
        public get Expired(): boolean;

        public Cancel ($time: float, $forceNoDecay: boolean) : void
        public DistanceDecay ($distance: float) : float
        public GetDecayedSignal ($listenerPosition: UnityEngine.Vector3, $use2D: boolean, $pos: $Ref<UnityEngine.Vector3>, $rot: $Ref<UnityEngine.Quaternion>) : boolean
        public Clear () : void
    }

    class EnvelopeDefinition extends System.ValueType {

        public m_AttackShape : UnityEngine.AnimationCurve
        public m_DecayShape : UnityEngine.AnimationCurve
        public m_AttackTime : float
        public m_SustainTime : float
        public m_DecayTime : float
        public m_ScaleWithImpact : boolean
        public m_HoldForever : boolean
        public get Duration(): float;

        public static Default () : EnvelopeDefinition
        public GetValueAt ($offset: float) : float
        public ChangeStopTime ($offset: float, $forceNoDecay: boolean) : void
        public Clear () : void
        public Validate () : void
    }

}

declare module 'Cinemachine.CinemachineImpulseManager.ImpulseEvent' {

    enum DirectionMode {
        Fixed = 0,
        RotateTowardSource = 1 
    }

    enum DissipationMode {
        LinearDecay = 0,
        SoftDecay = 1,
        ExponentialDecay = 2 
    }

}

declare module 'Cinemachine.CinemachineImpulseDefinition' {

    enum ImpulseShapes {
        Custom = 0,
        Recoil = 1,
        Bump = 2,
        Explosion = 3,
        Rumble = 4 
    }

    enum ImpulseTypes {
        Uniform = 0,
        Dissipating = 1,
        Propagating = 2,
        Legacy = 3 
    }

    enum RepeatMode {
        Stretch = 0,
        Loop = 1 
    }

}

declare module 'Cinemachine.CinemachineImpulseListener' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as Cinemachine from 'Cinemachine'

    class ImpulseReaction extends System.ValueType {

        public m_SecondaryNoise : Cinemachine.NoiseSettings
        public m_AmplitudeGain : float
        public m_FrequencyGain : float
        public m_Duration : float

        public ReSeed () : void
        public GetReaction ($deltaTime: float, $impulsePos: UnityEngine.Vector3, $pos: $Ref<UnityEngine.Vector3>, $rot: $Ref<UnityEngine.Quaternion>) : boolean
    }

}

declare module 'Cinemachine.DocumentationSortingAttribute' {

    enum Level {
        Undoc = 0,
        API = 1,
        UserRef = 2 
    }

}

declare module 'Cinemachine.PostFX' {
    import * as Cinemachine from 'Cinemachine'
    import * as System from 'System'
    import * as Cinemachine_PostFX_CinemachineVolumeSettings from 'Cinemachine.PostFX.CinemachineVolumeSettings'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering'

    class CinemachinePostProcessing extends Cinemachine.CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;

        private constructor ()
    }

    class CinemachineVolumeSettings extends Cinemachine.CinemachineExtension {

        public get VirtualCamera(): CinemachineVirtualCameraBase;
        public get RequiresUserInput(): boolean;
        public static s_VolumePriority : float
        public m_FocusTracksTarget : boolean
        public m_FocusTracking : Cinemachine_PostFX_CinemachineVolumeSettings.FocusTrackingMode
        public m_FocusTarget : UnityEngine.Transform
        public m_FocusOffset : float
        public m_Profile : UnityEngine_Rendering.VolumeProfile
        public get IsValid(): boolean;

        private constructor ()
        public InvalidateCachedProfile () : void
    }

}

declare module 'Cinemachine.PostFX.CinemachineVolumeSettings' {

    enum FocusTrackingMode {
        None = 0,
        LookAtTarget = 1,
        FollowTarget = 2,
        CustomTarget = 3,
        Camera = 4 
    }

}

declare module 'UnityEngine.Rendering' {
    import * as UnityEngine from 'UnityEngine'

    interface VolumeProfile {

    }

}

declare module 'Cinemachine.Utility' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as System_Text from 'System.Text'
    import * as Cinemachine_Utility_CinemachineDebug from 'Cinemachine.Utility.CinemachineDebug'

    class CinemachineDebug extends System.Object {

        public static OnGUIHandlers : Cinemachine_Utility_CinemachineDebug.OnGUIDelegate

        public constructor ()
        public static ReleaseScreenPos ($client: UnityEngine.Object) : void
        public static GetScreenPos ($client: UnityEngine.Object, $text: string, $style: UnityEngine.GUIStyle) : UnityEngine.Rect
        public static SBFromPool () : System_Text.StringBuilder
        public static ReturnToPool ($sb: System_Text.StringBuilder) : void
    }

    class PositionPredictor extends System.Object {

        public Smoothing : float

        public constructor ()
        public IsEmpty () : boolean
        public ApplyTransformDelta ($positionDelta: UnityEngine.Vector3) : void
        public Reset () : void
        public AddPosition ($pos: UnityEngine.Vector3, $deltaTime: float, $lookaheadTime: float) : void
        public PredictPositionDelta ($lookaheadTime: float) : UnityEngine.Vector3
        public PredictPosition ($lookaheadTime: float) : UnityEngine.Vector3
    }

    class Damper {

        public static kNegligibleResidual : float

        /**
        * @methodSwap Damp_EBB7509C_E4172388
        */
        public static Damp ($initial: float, $dampTime: float, $deltaTime: float) : float
        /**
        * @methodSwap Damp_EBB7509C_H36932E5C
        */
        public static Damp ($initial: UnityEngine.Vector3, $dampTime: UnityEngine.Vector3, $deltaTime: float) : UnityEngine.Vector3
        /**
        * @methodSwap Damp_EBB7509C_H79E99160
        */
        public static Damp ($initial: UnityEngine.Vector3, $dampTime: float, $deltaTime: float) : UnityEngine.Vector3
    }

    class HeadingTracker extends System.Object {

        public get FilterSize(): int;

        public constructor ($filterSize: int)
        public Add ($velocity: UnityEngine.Vector3) : void
        public DecayHistory () : void
        public GetReliableHeading () : UnityEngine.Vector3
    }

    class SplineHelpers {

        public static Bezier3 ($t: float, $p0: UnityEngine.Vector3, $p1: UnityEngine.Vector3, $p2: UnityEngine.Vector3, $p3: UnityEngine.Vector3) : UnityEngine.Vector3
        public static BezierTangent3 ($t: float, $p0: UnityEngine.Vector3, $p1: UnityEngine.Vector3, $p2: UnityEngine.Vector3, $p3: UnityEngine.Vector3) : UnityEngine.Vector3
        public static BezierTangentWeights3 ($p0: UnityEngine.Vector3, $p1: UnityEngine.Vector3, $p2: UnityEngine.Vector3, $p3: UnityEngine.Vector3, $w0: $Ref<UnityEngine.Vector3>, $w1: $Ref<UnityEngine.Vector3>, $w2: $Ref<UnityEngine.Vector3>) : void
        public static Bezier1 ($t: float, $p0: float, $p1: float, $p2: float, $p3: float) : float
        public static BezierTangent1 ($t: float, $p0: float, $p1: float, $p2: float, $p3: float) : float
        public static ComputeSmoothControlPoints ($knot: $Ref<UnityEngine.Vector4[]>, $ctrl1: $Ref<UnityEngine.Vector4[]>, $ctrl2: $Ref<UnityEngine.Vector4[]>) : void
        public static ComputeSmoothControlPointsLooped ($knot: $Ref<UnityEngine.Vector4[]>, $ctrl1: $Ref<UnityEngine.Vector4[]>, $ctrl2: $Ref<UnityEngine.Vector4[]>) : void
    }

    class UnityVectorExtensions {

        public static Epsilon : float

        public static IsNaN ($v: UnityEngine.Vector2) : boolean
        public static IsNaN ($v: UnityEngine.Vector3) : boolean
        public static ClosestPointOnSegment ($p: UnityEngine.Vector3, $s0: UnityEngine.Vector3, $s1: UnityEngine.Vector3) : float
        public static ClosestPointOnSegment ($p: UnityEngine.Vector2, $s0: UnityEngine.Vector2, $s1: UnityEngine.Vector2) : float
        public static ProjectOntoPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
        public static SquareNormalize ($v: UnityEngine.Vector2) : UnityEngine.Vector2
        public static FindIntersection ($p1: $Ref<UnityEngine.Vector2>, $p2: $Ref<UnityEngine.Vector2>, $q1: $Ref<UnityEngine.Vector2>, $q2: $Ref<UnityEngine.Vector2>, $intersection: $Ref<UnityEngine.Vector2>) : int
        public static Abs ($v: UnityEngine.Vector2) : UnityEngine.Vector2
        public static Abs ($v: UnityEngine.Vector3) : UnityEngine.Vector3
        public static IsUniform ($v: UnityEngine.Vector2) : boolean
        public static IsUniform ($v: UnityEngine.Vector3) : boolean
        public static AlmostZero ($v: UnityEngine.Vector3) : boolean
        public static Angle ($v1: UnityEngine.Vector3, $v2: UnityEngine.Vector3) : float
        public static SignedAngle ($v1: UnityEngine.Vector3, $v2: UnityEngine.Vector3, $up: UnityEngine.Vector3) : float
        public static SafeFromToRotation ($v1: UnityEngine.Vector3, $v2: UnityEngine.Vector3, $up: UnityEngine.Vector3) : UnityEngine.Quaternion
        public static SlerpWithReferenceUp ($vA: UnityEngine.Vector3, $vB: UnityEngine.Vector3, $t: float, $up: UnityEngine.Vector3) : UnityEngine.Vector3
    }

    class UnityQuaternionExtensions {

        public static SlerpWithReferenceUp ($qA: UnityEngine.Quaternion, $qB: UnityEngine.Quaternion, $t: float, $up: UnityEngine.Vector3) : UnityEngine.Quaternion
        public static Normalized ($q: UnityEngine.Quaternion) : UnityEngine.Quaternion
        public static GetCameraRotationToTarget ($orient: UnityEngine.Quaternion, $lookAtDir: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : UnityEngine.Vector2
        public static ApplyCameraRotation ($orient: UnityEngine.Quaternion, $rot: UnityEngine.Vector2, $worldUp: UnityEngine.Vector3) : UnityEngine.Quaternion
    }

    class UnityRectExtensions {

        public static Inflated ($r: UnityEngine.Rect, $delta: UnityEngine.Vector2) : UnityEngine.Rect
    }

}

declare module 'System.Text' {
    import * as System from 'System'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface StringBuilder extends System_Runtime_Serialization.ISerializable {

    }

}

declare module 'Cinemachine.Utility.CinemachineDebug' {
    import * as System from 'System'

    interface OnGUIDelegate {
        () : void; 
        Invoke?: () => void;
    }
    var OnGUIDelegate: { new (func: () => void): OnGUIDelegate; }

}

