
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'RootNamespace' {
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as RootNamespace_UIVirtualButton from 'RootNamespace.UIVirtualButton'
    import * as System from 'System'
    import * as RootNamespace_UIVirtualJoystick from 'RootNamespace.UIVirtualJoystick'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as RootNamespace_UIVirtualTouchZone from 'RootNamespace.UIVirtualTouchZone'

    class UIVirtualButton extends UnityEngine.MonoBehaviour implements UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IPointerUpHandler {

        public buttonStateOutputEvent : RootNamespace_UIVirtualButton.BoolEvent
        public buttonClickOutputEvent : RootNamespace_UIVirtualButton.Event

        private constructor ()
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerUp ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerClick ($eventData: UnityEngine_EventSystems.PointerEventData) : void
    }

    class UIVirtualJoystick extends UnityEngine.MonoBehaviour implements UnityEngine_EventSystems.IDragHandler, UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IPointerUpHandler {

        public containerRect : UnityEngine.RectTransform
        public handleRect : UnityEngine.RectTransform
        public joystickRange : float
        public magnitudeMultiplier : float
        public invertXOutputValue : boolean
        public invertYOutputValue : boolean
        public joystickOutputEvent : RootNamespace_UIVirtualJoystick.Event

        private constructor ()
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerUp ($eventData: UnityEngine_EventSystems.PointerEventData) : void
    }

    class UIVirtualTouchZone extends UnityEngine.MonoBehaviour implements UnityEngine_EventSystems.IDragHandler, UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IPointerUpHandler {

        public OnPointerUpEvent : UnityEngine_Events.UnityEvent
        public containerRect : UnityEngine.RectTransform
        public handleRect : UnityEngine.RectTransform
        public clampToMagnitude : boolean
        public magnitudeMultiplier : float
        public invertXOutputValue : boolean
        public invertYOutputValue : boolean
        public touchZoneOutputEvent : RootNamespace_UIVirtualTouchZone.Event

        private constructor ()
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerUp ($eventData: UnityEngine_EventSystems.PointerEventData) : void
    }

    class BasicRigidBodyPush extends UnityEngine.MonoBehaviour {

        public pushLayers : UnityEngine.LayerMask
        public canPush : boolean
        public strength : float

        private constructor ()
    }

}

declare module 'UnityEngine.EventSystems' {
    import * as System from 'System'

    interface IPointerClickHandler extends IEventSystemHandler {

    }

    interface IEventSystemHandler {

    }

    interface IPointerDownHandler extends IEventSystemHandler {

    }

    interface IPointerUpHandler extends IEventSystemHandler {

    }

    interface PointerEventData {

    }

    interface BaseEventData {

    }

    interface AbstractEventData {

    }

    interface IDragHandler extends IEventSystemHandler {

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
    * Interface to receive callbacks upon serialization and deserialization.
    */
    interface ISerializationCallbackReceiver {

    }

    /**
    * Position, size, anchor and pivot information for a rectangle.
    */
    interface RectTransform {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * Specifies Layers to use in a Physics.Raycast.
    */
    interface LayerMask {

    }

    /**
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * A container for audio data.
    */
    interface AudioClip {

    }

}

declare module 'RootNamespace.UIVirtualButton' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    class BoolEvent extends UnityEngine_Events.UnityEvent$1<boolean> {

        public constructor ()
    }

    class Event extends UnityEngine_Events.UnityEvent {

        public constructor ()
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
    * A zero argument persistent callback that can be saved with the Scene.
    */
    interface UnityEvent {

    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface MulticastDelegate {
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
    }
    var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }

    interface Delegate extends ICloneable, System_Runtime_Serialization.ISerializable {

    }

    interface ICloneable {

    }

    interface IFormattable {

    }

    interface IEquatable$1<T> {

    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

}

declare module 'RootNamespace.UIVirtualJoystick' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    class Event extends UnityEngine_Events.UnityEvent$1<UnityEngine.Vector2> {

        public constructor ()
    }

}

declare module 'RootNamespace.UIVirtualTouchZone' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    class Event extends UnityEngine_Events.UnityEvent$1<UnityEngine.Vector2> {

        public constructor ()
    }

}

declare module 'StarterAssets' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'

    class FirstPersonController extends UnityEngine.MonoBehaviour {

        public MoveSpeed : float
        public SprintSpeed : float
        public RotationSpeed : float
        public SpeedChangeRate : float
        public JumpHeight : float
        public Gravity : float
        public JumpTimeout : float
        public FallTimeout : float
        public Grounded : boolean
        public GroundedOffset : float
        public GroundedRadius : float
        public GroundLayers : UnityEngine.LayerMask
        public CinemachineCameraTarget : UnityEngine.GameObject
        public TopClamp : float
        public BottomClamp : float

        private constructor ()
    }

    class StarterAssetsInputs extends UnityEngine.MonoBehaviour {

        public move : UnityEngine.Vector2
        public look : UnityEngine.Vector2
        public jump : boolean
        public sprint : boolean
        public analogMovement : boolean
        public cursorLocked : boolean
        public cursorInputForLook : boolean

        private constructor ()
        public OnMove ($value: UnityEngine_InputSystem.InputValue) : void
        public OnLook ($value: UnityEngine_InputSystem.InputValue) : void
        public OnJump ($value: UnityEngine_InputSystem.InputValue) : void
        public OnSprint ($value: UnityEngine_InputSystem.InputValue) : void
        public MoveInput ($newMoveDirection: UnityEngine.Vector2) : void
        public LookInput ($newLookDirection: UnityEngine.Vector2) : void
        public JumpInput ($newJumpState: boolean) : void
        public SprintInput ($newSprintState: boolean) : void
    }

    class UICanvasControllerInput extends UnityEngine.MonoBehaviour {

        public starterAssetsInputs : StarterAssetsInputs

        private constructor ()
        public VirtualMoveInput ($virtualMoveDirection: UnityEngine.Vector2) : void
        public VirtualLookInput ($virtualLookDirection: UnityEngine.Vector2) : void
        public VirtualJumpInput ($virtualJumpState: boolean) : void
        public VirtualSprintInput ($virtualSprintState: boolean) : void
    }

    class GeniesThirdPersonController extends UnityEngine.MonoBehaviour {

        public MoveSpeed : float
        public SprintSpeed : float
        public RotationSmoothTime : float
        public SpeedChangeRate : float
        public LandingAudioClip : UnityEngine.AudioClip
        public FootstepAudioClips : UnityEngine.AudioClip[]
        public FootstepAudioVolume : float
        public JumpHeight : float
        public Gravity : float
        public JumpTimeout : float
        public FallTimeout : float
        public Grounded : boolean
        public GroundedOffset : float
        public GroundedRadius : float
        public GroundLayers : UnityEngine.LayerMask
        public CinemachineCameraTarget : UnityEngine.GameObject
        public TopClamp : float
        public BottomClamp : float
        public CameraAngleOverride : float
        public LockCameraPosition : boolean

        private constructor ()
    }

    class ThirdPersonController extends UnityEngine.MonoBehaviour {

        public MoveSpeed : float
        public SprintSpeed : float
        public RotationSmoothTime : float
        public SpeedChangeRate : float
        public LandingAudioClip : UnityEngine.AudioClip
        public FootstepAudioClips : UnityEngine.AudioClip[]
        public FootstepAudioVolume : float
        public JumpHeight : float
        public Gravity : float
        public JumpTimeout : float
        public FallTimeout : float
        public Grounded : boolean
        public GroundedOffset : float
        public GroundedRadius : float
        public GroundLayers : UnityEngine.LayerMask
        public CinemachineCameraTarget : UnityEngine.GameObject
        public TopClamp : float
        public BottomClamp : float
        public CameraAngleOverride : float
        public LockCameraPosition : boolean

        private constructor ()
    }

}

declare module 'UnityEngine.InputSystem' {
    import * as System from 'System'

    interface InputValue {

    }

}

