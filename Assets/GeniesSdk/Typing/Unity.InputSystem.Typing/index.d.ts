
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine.InputSystem' {
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System from 'System'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'
    import * as UnityEngine_InputSystem_InputAction from 'UnityEngine.InputSystem.InputAction'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_InputSystem_InputBinding from 'UnityEngine.InputSystem.InputBinding'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as UnityEngine_InputSystem_Layouts from 'UnityEngine.InputSystem.Layouts'
    import * as UnityEngine_InputSystem_InputControlScheme from 'UnityEngine.InputSystem.InputControlScheme'
    import * as Unity_Collections from 'Unity.Collections'
    import * as System_Linq_Expressions from 'System.Linq.Expressions'
    import * as UnityEngine_InputSystem_InputActionRebindingExtensions from 'UnityEngine.InputSystem.InputActionRebindingExtensions'
    import * as UnityEngine_InputSystem_InputActionSetupExtensions from 'UnityEngine.InputSystem.InputActionSetupExtensions'
    import * as UnityEngine_InputSystem_InputBindingCompositeContext from 'UnityEngine.InputSystem.InputBindingCompositeContext'
    import * as UnityEngine_InputSystem_InputSettings from 'UnityEngine.InputSystem.InputSettings'
    import * as UnityEngine_InputSystem_InputRemoting from 'UnityEngine.InputSystem.InputRemoting'
    import * as UnityEngine_InputSystem_InputControlExtensions from 'UnityEngine.InputSystem.InputControlExtensions'
    import * as UnityEngine_InputSystem_InputProcessor from 'UnityEngine.InputSystem.InputProcessor'
    import * as UnityEngine_InputSystem_InputControlPath from 'UnityEngine.InputSystem.InputControlPath'
    import * as UnityEngine_InputSystem_Haptics from 'UnityEngine.InputSystem.Haptics'
    import * as UnityEngine_InputSystem_Controls from 'UnityEngine.InputSystem.Controls'
    import * as UnityEngine_InputSystem_DefaultInputActions from 'UnityEngine.InputSystem.DefaultInputActions'
    import * as UnityEngine_InputSystem_PlayerInput from 'UnityEngine.InputSystem.PlayerInput'
    import * as UnityEngine_InputSystem_UI from 'UnityEngine.InputSystem.UI'
    import * as UnityEngine_InputSystem_Users from 'UnityEngine.InputSystem.Users'
    import * as UnityEngine_InputSystem_PlayerInputManager from 'UnityEngine.InputSystem.PlayerInputManager'

    interface IInputActionCollection extends System_Collections_Generic.IEnumerable$1<InputAction> {

        bindingMask? : System.Nullable$1<InputBinding>
        devices? : System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>
        readonly controlSchemes? : UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControlScheme>

        Contains? ($action: InputAction) : boolean
        Enable? () : void
        Disable? () : void
    }

    class InputAction extends System.Object implements System.ICloneable, System.IDisposable {

        public get name(): string;
        public get type(): InputActionType;
        public get id(): System.Guid;
        public get expectedControlType(): string;
        public set expectedControlType(value: string);
        public get processors(): string;
        public get interactions(): string;
        public get actionMap(): InputActionMap;
        public get bindingMask(): System.Nullable$1<InputBinding>;
        public set bindingMask(value: System.Nullable$1<InputBinding>);
        public get bindings(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputBinding>;
        public get controls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get phase(): InputActionPhase;
        public get inProgress(): boolean;
        public get enabled(): boolean;
        public get triggered(): boolean;
        public get activeControl(): InputControl;
        public get wantsInitialStateCheck(): boolean;
        public set wantsInitialStateCheck(value: boolean);

        public constructor ()
        public constructor ($name?: string, $type?: InputActionType, $binding?: string, $interactions?: string, $processors?: string, $expectedControlType?: string)
        public Dispose () : void
        public ToString () : string
        public Enable () : void
        public Disable () : void
        public Clone () : InputAction
        public ReadValue<TValue> () : TValue
        public ReadValueAsObject () : any
        public Reset () : void
        public IsPressed () : boolean
        public IsInProgress () : boolean
        public WasPressedThisFrame () : boolean
        public WasReleasedThisFrame () : boolean
        public WasPerformedThisFrame () : boolean
        public GetTimeoutCompletionPercentage () : float
        public add_started ($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>) : void
        public add_canceled ($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>) : void
        public add_performed ($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>) : void
        public remove_started ($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>) : void
        public remove_canceled ($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>) : void
        public remove_performed ($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>) : void
    }

    enum InputActionType {
        Value = 0,
        Button = 1,
        PassThrough = 2 
    }

    class InputActionMap extends System.Object implements IInputActionCollection2, System.ICloneable, System.IDisposable, UnityEngine.ISerializationCallbackReceiver {

        public get name(): string;
        public get asset(): InputActionAsset;
        public get id(): System.Guid;
        public get enabled(): boolean;
        public get actions(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputAction>;
        public get bindings(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputBinding>;
        public get controlSchemes(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControlScheme>;
        public get bindingMask(): System.Nullable$1<InputBinding>;
        public set bindingMask(value: System.Nullable$1<InputBinding>);
        public get devices(): System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>;
        public set devices(value: System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>);

        public constructor ()
        public constructor ($name: string)
        public Dispose () : void
        public FindAction ($actionNameOrId: string, $throwIfNotFound?: boolean) : InputAction
        public FindAction ($id: System.Guid) : InputAction
        public IsUsableWithDevice ($device: InputDevice) : boolean
        public Enable () : void
        public Disable () : void
        public Clone () : InputActionMap
        public Contains ($action: InputAction) : boolean
        public ToString () : string
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<InputAction>
        public FindBinding ($mask: InputBinding, $action: $Ref<InputAction>) : int
        public static FromJson ($json: string) : InputActionMap[]
        public static ToJson ($maps: System_Collections_Generic.IEnumerable$1<InputActionMap>) : string
        public ToJson () : string
        public OnBeforeSerialize () : void
        public OnAfterDeserialize () : void
        public get_Item ($actionNameOrId: string) : InputAction
        public add_actionTriggered ($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>) : void
        public remove_actionTriggered ($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>) : void
    }

    interface IInputActionCollection2 extends IInputActionCollection {

        readonly bindings? : System_Collections_Generic.IEnumerable$1<InputBinding>

        FindAction? ($actionNameOrId: string, $throwIfNotFound?: boolean) : InputAction
        FindBinding? ($mask: InputBinding, $action: $Ref<InputAction>) : int
    }

    class InputBinding extends System.ValueType implements System.IEquatable$1<InputBinding> {

        public static Separator : number
        public get name(): string;
        public set name(value: string);
        public get id(): System.Guid;
        public set id(value: System.Guid);
        public get path(): string;
        public set path(value: string);
        public get overridePath(): string;
        public set overridePath(value: string);
        public get interactions(): string;
        public set interactions(value: string);
        public get overrideInteractions(): string;
        public set overrideInteractions(value: string);
        public get processors(): string;
        public set processors(value: string);
        public get overrideProcessors(): string;
        public set overrideProcessors(value: string);
        public get groups(): string;
        public set groups(value: string);
        public get action(): string;
        public set action(value: string);
        public get isComposite(): boolean;
        public set isComposite(value: boolean);
        public get isPartOfComposite(): boolean;
        public set isPartOfComposite(value: boolean);
        public get hasOverrides(): boolean;
        public get effectivePath(): string;
        public get effectiveInteractions(): string;
        public get effectiveProcessors(): string;

        public constructor ($path: string, $action?: string, $groups?: string, $processors?: string, $interactions?: string, $name?: string)
        public GetNameOfComposite () : string
        public static MaskByGroup ($group: string) : InputBinding
        public static MaskByGroups (...groups: string[]) : InputBinding
        public Equals ($other: InputBinding) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
        public ToDisplayString ($options?: UnityEngine_InputSystem_InputBinding.DisplayStringOptions, $control?: InputControl) : string
        public ToDisplayString ($deviceLayoutName: $Ref<string>, $controlPath: $Ref<string>, $options?: UnityEngine_InputSystem_InputBinding.DisplayStringOptions, $control?: InputControl) : string
        public Matches ($binding: InputBinding) : boolean
        public static op_Equality ($left: InputBinding, $right: InputBinding) : boolean
        public static op_Inequality ($left: InputBinding, $right: InputBinding) : boolean
    }

    class InputControl extends System.Object {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;

        public ToString () : string
        public EvaluateMagnitude () : float
        public TryGetChildControl ($path: string) : InputControl
        public TryGetChildControl<TControl extends InputControl> ($path: string) : TControl
        public GetChildControl ($path: string) : InputControl
        public GetChildControl<TControl extends InputControl> ($path: string) : TControl
        public ApplyParameterChanges () : void
        public get_Item ($path: string) : InputControl
    }

    class InputDevice extends InputControl {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;

        public constructor ()
        public MakeCurrent () : void
        public ExecuteCommand<TCommand extends UnityEngine_InputSystem_LowLevel.IInputDeviceCommandInfo> ($command: $Ref<TCommand>) : bigint
    }

    class InputActionAsset extends UnityEngine.ScriptableObject implements IInputActionCollection2 {

        public static Extension : string
        public get enabled(): boolean;
        public get actionMaps(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputActionMap>;
        public get controlSchemes(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControlScheme>;
        public get bindings(): System_Collections_Generic.IEnumerable$1<InputBinding>;
        public get bindingMask(): System.Nullable$1<InputBinding>;
        public set bindingMask(value: System.Nullable$1<InputBinding>);
        public get devices(): System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>;
        public set devices(value: System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>);

        private constructor ()
        public ToJson () : string
        public LoadFromJson ($json: string) : void
        public static FromJson ($json: string) : InputActionAsset
        public FindAction ($actionNameOrId: string, $throwIfNotFound?: boolean) : InputAction
        public FindBinding ($mask: InputBinding, $action: $Ref<InputAction>) : int
        public FindActionMap ($nameOrId: string, $throwIfNotFound?: boolean) : InputActionMap
        public FindActionMap ($id: System.Guid) : InputActionMap
        public FindAction ($guid: System.Guid) : InputAction
        public FindControlSchemeIndex ($name: string) : int
        public FindControlScheme ($name: string) : System.Nullable$1<InputControlScheme>
        public IsUsableWithDevice ($device: InputDevice) : boolean
        public Enable () : void
        public Disable () : void
        public Contains ($action: InputAction) : boolean
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<InputAction>
        public get_Item ($actionNameOrId: string) : InputAction
    }

    class InputControlScheme extends System.ValueType implements System.IEquatable$1<InputControlScheme> {

        public get name(): string;
        public get bindingGroup(): string;
        public set bindingGroup(value: string);
        public get deviceRequirements(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_InputControlScheme.DeviceRequirement>;

        public constructor ($name: string, $devices?: System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem_InputControlScheme.DeviceRequirement>, $bindingGroup?: string)
        public static FindControlSchemeForDevices<TDevices extends System_Collections_Generic.IReadOnlyList$1<InputDevice>,TSchemes extends System_Collections_Generic.IEnumerable$1<InputControlScheme>> ($devices: TDevices, $schemes: TSchemes, $mustIncludeDevice?: InputDevice, $allowUnsuccesfulMatch?: boolean) : System.Nullable$1<InputControlScheme>
        public static FindControlSchemeForDevices<TDevices extends System_Collections_Generic.IReadOnlyList$1<InputDevice>,TSchemes extends System_Collections_Generic.IEnumerable$1<InputControlScheme>> ($devices: TDevices, $schemes: TSchemes, $controlScheme: $Ref<InputControlScheme>, $matchResult: $Ref<UnityEngine_InputSystem_InputControlScheme.MatchResult>, $mustIncludeDevice?: InputDevice, $allowUnsuccessfulMatch?: boolean) : boolean
        public static FindControlSchemeForDevice<TSchemes extends System_Collections_Generic.IEnumerable$1<InputControlScheme>> ($device: InputDevice, $schemes: TSchemes) : System.Nullable$1<InputControlScheme>
        public SupportsDevice ($device: InputDevice) : boolean
        public PickDevicesFrom<TDevices extends System_Collections_Generic.IReadOnlyList$1<InputDevice>> ($devices: TDevices, $favorDevice?: InputDevice) : UnityEngine_InputSystem_InputControlScheme.MatchResult
        public Equals ($other: InputControlScheme) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
        public static op_Equality ($left: InputControlScheme, $right: InputControlScheme) : boolean
        public static op_Inequality ($left: InputControlScheme, $right: InputControlScheme) : boolean
    }

    class InputControlList$1<TControl> extends System.ValueType implements System_Collections_Generic.IList$1<TControl>, System.IDisposable, System_Collections_Generic.IReadOnlyList$1<TControl> {

        public get Count(): int;
        public get Capacity(): int;
        public set Capacity(value: int);
        public get IsReadOnly(): boolean;

        public constructor ($allocator: Unity_Collections.Allocator, $initialCapacity?: int)
        public constructor ($values: System_Collections_Generic.IEnumerable$1<TControl>, $allocator?: Unity_Collections.Allocator)
        public constructor (...values: TControl[])
        public Resize ($size: int) : void
        public Add ($item: TControl) : void
        public AddSlice<TList extends System_Collections_Generic.IReadOnlyList$1<TControl>> ($list: TList, $count?: int, $destinationIndex?: int, $sourceIndex?: int) : void
        public AddRange ($list: System_Collections_Generic.IEnumerable$1<TControl>, $count?: int, $destinationIndex?: int) : void
        public Remove ($item: TControl) : boolean
        public RemoveAt ($index: int) : void
        public CopyTo ($array: TControl[], $arrayIndex: int) : void
        public IndexOf ($item: TControl) : int
        /**
        * @methodSwap IndexOf_EBB7509C_H98F5CA19
        */
        public IndexOf ($item: TControl, $startIndex: int, $count?: int) : int
        public Insert ($index: int, $item: TControl) : void
        public Clear () : void
        public Contains ($item: TControl) : boolean
        /**
        * @methodSwap Contains_EBB7509C_H98F5CA19
        */
        public Contains ($item: TControl, $startIndex: int, $count?: int) : boolean
        public SwapElements ($index1: int, $index2: int) : void
        public Sort<TCompare extends System_Collections_Generic.IComparer$1<TControl>> ($startIndex: int, $count: int, $comparer: TCompare) : void
        public ToArray ($dispose?: boolean) : TControl[]
        public Dispose () : void
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<TControl>
        public ToString () : string
        public get_Item ($index: int) : TControl
        public set_Item ($index: int, $value: TControl) : void
        public [Symbol.iterator]() : IterableIterator<TControl>
    }

    enum InputActionPhase {
        Disabled = 0,
        Waiting = 1,
        Started = 2,
        Performed = 3,
        Canceled = 4 
    }

    interface IInputInteraction {

        Process? ($context: $Ref<InputInteractionContext>) : void
        Reset? () : void
    }

    class InputInteractionContext extends System.ValueType {

        public get action(): InputAction;
        public get control(): InputControl;
        public get phase(): InputActionPhase;
        public get time(): double;
        public get startTime(): double;
        public get timerHasExpired(): boolean;
        public get isWaiting(): boolean;
        public get isStarted(): boolean;

        public ComputeMagnitude () : float
        public ControlIsActuated ($threshold?: float) : boolean
        public Started () : void
        public Performed () : void
        public PerformedAndStayStarted () : void
        public PerformedAndStayPerformed () : void
        public Canceled () : void
        public Waiting () : void
        public SetTimeout ($seconds: float) : void
        public SetTotalTimeoutCompletionTime ($seconds: float) : void
        public ReadValue<TValue> () : TValue
    }

    interface IInputInteraction$1<TValue> extends IInputInteraction {

    }

    enum InputActionChange {
        ActionEnabled = 0,
        ActionDisabled = 1,
        ActionMapEnabled = 2,
        ActionMapDisabled = 3,
        ActionStarted = 4,
        ActionPerformed = 5,
        ActionCanceled = 6,
        BoundControlsAboutToChange = 7,
        BoundControlsChanged = 8 
    }

    class InputActionRebindingExtensions {

        public static GetParameterValue ($action: InputAction, $name: string, $bindingMask?: InputBinding) : System.Nullable$1<UnityEngine_InputSystem_Utilities.PrimitiveValue>
        /**
        * @methodSwap GetParameterValue_EBB7509C_B12665DA
        */
        public static GetParameterValue ($action: InputAction, $name: string, $bindingIndex: int) : System.Nullable$1<UnityEngine_InputSystem_Utilities.PrimitiveValue>
        public static GetParameterValue<TObject,TValue> ($action: InputAction, $expr: System_Linq_Expressions.Expression$1<System.Func$2<TObject, TValue>>, $bindingMask?: InputBinding) : System.Nullable$1<TValue>
        public static ApplyParameterOverride<TObject,TValue> ($action: InputAction, $expr: System_Linq_Expressions.Expression$1<System.Func$2<TObject, TValue>>, $value: TValue, $bindingMask?: InputBinding) : void
        public static ApplyParameterOverride<TObject,TValue> ($actionMap: InputActionMap, $expr: System_Linq_Expressions.Expression$1<System.Func$2<TObject, TValue>>, $value: TValue, $bindingMask?: InputBinding) : void
        public static ApplyParameterOverride<TObject,TValue> ($asset: InputActionAsset, $expr: System_Linq_Expressions.Expression$1<System.Func$2<TObject, TValue>>, $value: TValue, $bindingMask?: InputBinding) : void
        public static ApplyParameterOverride ($actionMap: InputActionMap, $name: string, $value: UnityEngine_InputSystem_Utilities.PrimitiveValue, $bindingMask?: InputBinding) : void
        public static ApplyParameterOverride ($asset: InputActionAsset, $name: string, $value: UnityEngine_InputSystem_Utilities.PrimitiveValue, $bindingMask?: InputBinding) : void
        public static ApplyParameterOverride ($action: InputAction, $name: string, $value: UnityEngine_InputSystem_Utilities.PrimitiveValue, $bindingMask?: InputBinding) : void
        /**
        * @methodSwap ApplyParameterOverride_EBB7509C_H43778C24
        */
        public static ApplyParameterOverride ($action: InputAction, $name: string, $value: UnityEngine_InputSystem_Utilities.PrimitiveValue, $bindingIndex: int) : void
        public static GetBindingIndex ($action: InputAction, $bindingMask: InputBinding) : int
        public static GetBindingIndex ($actionMap: InputActionMap, $bindingMask: InputBinding) : int
        public static GetBindingIndex ($action: InputAction, $group?: string, $path?: string) : int
        public static GetBindingForControl ($action: InputAction, $control: InputControl) : System.Nullable$1<InputBinding>
        public static GetBindingIndexForControl ($action: InputAction, $control: InputControl) : int
        public static GetBindingDisplayString ($action: InputAction, $options?: UnityEngine_InputSystem_InputBinding.DisplayStringOptions, $group?: string) : string
        public static GetBindingDisplayString ($action: InputAction, $bindingMask: InputBinding, $options?: UnityEngine_InputSystem_InputBinding.DisplayStringOptions) : string
        /**
        * @methodSwap GetBindingDisplayString_EBB7509C_H12AF7C67
        */
        public static GetBindingDisplayString ($action: InputAction, $bindingIndex: int, $options?: UnityEngine_InputSystem_InputBinding.DisplayStringOptions) : string
        /**
        * @methodSwap GetBindingDisplayString_EBB7509C_BBF9FDA7
        */
        public static GetBindingDisplayString ($action: InputAction, $bindingIndex: int, $deviceLayoutName: $Ref<string>, $controlPath: $Ref<string>, $options?: UnityEngine_InputSystem_InputBinding.DisplayStringOptions) : string
        public static ApplyBindingOverride ($action: InputAction, $newPath: string, $group?: string, $path?: string) : void
        public static ApplyBindingOverride ($action: InputAction, $bindingOverride: InputBinding) : void
        /**
        * @methodSwap ApplyBindingOverride_EBB7509C_EEFEF77
        */
        public static ApplyBindingOverride ($action: InputAction, $bindingIndex: int, $bindingOverride: InputBinding) : void
        /**
        * @methodSwap ApplyBindingOverride_EBB7509C_H78B04648
        */
        public static ApplyBindingOverride ($action: InputAction, $bindingIndex: int, $path: string) : void
        public static ApplyBindingOverride ($actionMap: InputActionMap, $bindingOverride: InputBinding) : int
        /**
        * @methodSwap ApplyBindingOverride_EBB7509C_H33420BC7
        */
        public static ApplyBindingOverride ($actionMap: InputActionMap, $bindingIndex: int, $bindingOverride: InputBinding) : void
        /**
        * @methodSwap RemoveBindingOverride_EBB7509C_H4E00C1B4
        */
        public static RemoveBindingOverride ($action: InputAction, $bindingIndex: int) : void
        public static RemoveBindingOverride ($action: InputAction, $bindingMask: InputBinding) : void
        public static RemoveAllBindingOverrides ($actions: IInputActionCollection2) : void
        public static RemoveAllBindingOverrides ($action: InputAction) : void
        public static ApplyBindingOverrides ($actionMap: InputActionMap, $overrides: System_Collections_Generic.IEnumerable$1<InputBinding>) : void
        public static RemoveBindingOverrides ($actionMap: InputActionMap, $overrides: System_Collections_Generic.IEnumerable$1<InputBinding>) : void
        public static ApplyBindingOverridesOnMatchingControls ($action: InputAction, $control: InputControl) : int
        public static ApplyBindingOverridesOnMatchingControls ($actionMap: InputActionMap, $control: InputControl) : int
        public static SaveBindingOverridesAsJson ($actions: IInputActionCollection2) : string
        public static SaveBindingOverridesAsJson ($action: InputAction) : string
        public static LoadBindingOverridesFromJson ($actions: IInputActionCollection2, $json: string, $removeExisting?: boolean) : void
        public static LoadBindingOverridesFromJson ($action: InputAction, $json: string, $removeExisting?: boolean) : void
        /**
        * @methodSwap PerformInteractiveRebinding_EBB7509C_H4E00C1B4
        */
        public static PerformInteractiveRebinding ($action: InputAction, $bindingIndex?: int) : UnityEngine_InputSystem_InputActionRebindingExtensions.RebindingOperation
    }

    class InputActionProperty extends System.ValueType implements System.IEquatable$1<InputActionReference>, System.IEquatable$1<InputAction>, System.IEquatable$1<InputActionProperty> {

        public get action(): InputAction;
        public get reference(): InputActionReference;

        public constructor ($action: InputAction)
        public constructor ($reference: InputActionReference)
        public Equals ($other: InputActionProperty) : boolean
        public Equals ($other: InputAction) : boolean
        public Equals ($other: InputActionReference) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public static op_Equality ($left: InputActionProperty, $right: InputActionProperty) : boolean
        public static op_Inequality ($left: InputActionProperty, $right: InputActionProperty) : boolean
    }

    class InputActionReference extends UnityEngine.ScriptableObject {

        public get asset(): InputActionAsset;
        public get action(): InputAction;

        private constructor ()
        public Set ($action: InputAction) : void
        public Set ($asset: InputActionAsset, $mapName: string, $actionName: string) : void
        public ToString () : string
        public static Create ($action: InputAction) : InputActionReference
        public ToInputAction () : InputAction
        public static op_Implicit ($reference: InputActionReference) : InputAction
    }

    class InputActionSetupExtensions {

        public static AddActionMap ($asset: InputActionAsset, $name: string) : InputActionMap
        public static AddActionMap ($asset: InputActionAsset, $map: InputActionMap) : void
        public static RemoveActionMap ($asset: InputActionAsset, $map: InputActionMap) : void
        public static RemoveActionMap ($asset: InputActionAsset, $nameOrId: string) : void
        public static AddAction ($map: InputActionMap, $name: string, $type?: InputActionType, $binding?: string, $interactions?: string, $processors?: string, $groups?: string, $expectedControlLayout?: string) : InputAction
        public static RemoveAction ($action: InputAction) : void
        public static RemoveAction ($asset: InputActionAsset, $nameOrId: string) : void
        public static AddBinding ($action: InputAction, $path: string, $interactions?: string, $processors?: string, $groups?: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static AddBinding ($action: InputAction, $control: InputControl) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static AddBinding ($action: InputAction, $binding?: InputBinding) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static AddBinding ($actionMap: InputActionMap, $path: string, $interactions?: string, $groups?: string, $action?: string, $processors?: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static AddBinding ($actionMap: InputActionMap, $path: string, $action: InputAction, $interactions?: string, $groups?: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static AddBinding ($actionMap: InputActionMap, $path: string, $action: System.Guid, $interactions?: string, $groups?: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static AddBinding ($actionMap: InputActionMap, $binding: InputBinding) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static AddCompositeBinding ($action: InputAction, $composite: string, $interactions?: string, $processors?: string) : UnityEngine_InputSystem_InputActionSetupExtensions.CompositeSyntax
        /**
        * @methodSwap ChangeBinding_EBB7509C_H4E00C1B4
        */
        public static ChangeBinding ($action: InputAction, $index: int) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static ChangeBinding ($action: InputAction, $name: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @methodSwap ChangeBinding_EBB7509C_BA746BE4
        */
        public static ChangeBinding ($actionMap: InputActionMap, $index: int) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static ChangeBindingWithId ($action: InputAction, $id: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static ChangeBindingWithId ($action: InputAction, $id: System.Guid) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static ChangeBindingWithGroup ($action: InputAction, $group: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static ChangeBindingWithPath ($action: InputAction, $path: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static ChangeBinding ($action: InputAction, $match: InputBinding) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static ChangeCompositeBinding ($action: InputAction, $compositeName: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        public static Rename ($action: InputAction, $newName: string) : void
        public static AddControlScheme ($asset: InputActionAsset, $controlScheme: InputControlScheme) : void
        public static AddControlScheme ($asset: InputActionAsset, $name: string) : UnityEngine_InputSystem_InputActionSetupExtensions.ControlSchemeSyntax
        public static RemoveControlScheme ($asset: InputActionAsset, $name: string) : void
        public static WithBindingGroup ($scheme: InputControlScheme, $bindingGroup: string) : InputControlScheme
        public static WithDevice ($scheme: InputControlScheme, $controlPath: string, $required: boolean) : InputControlScheme
        public static WithRequiredDevice ($scheme: InputControlScheme, $controlPath: string) : InputControlScheme
        public static WithOptionalDevice ($scheme: InputControlScheme, $controlPath: string) : InputControlScheme
        public static OrWithRequiredDevice ($scheme: InputControlScheme, $controlPath: string) : InputControlScheme
        public static OrWithOptionalDevice ($scheme: InputControlScheme, $controlPath: string) : InputControlScheme
    }

    class InputBindingComposite extends System.Object {

        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;

        public ReadValueAsObject ($context: $Ref<InputBindingCompositeContext>) : any
        public EvaluateMagnitude ($context: $Ref<InputBindingCompositeContext>) : float
        public static GetExpectedControlLayoutName ($composite: string, $part: string) : string
    }

    class InputBindingCompositeContext extends System.ValueType {

        public get controls(): System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem_InputBindingCompositeContext.PartBinding>;

        public EvaluateMagnitude ($partNumber: int) : float
        /**
        * @methodSwap ReadValue_EBB7509C_F92D023A
        */
        public ReadValue<TValue extends System.IComparable$1<TValue>> ($partNumber: int) : TValue
        /**
        * @methodSwap ReadValue_EBB7509C_H6CEE0A39
        */
        public ReadValue<TValue extends System.IComparable$1<TValue>> ($partNumber: int, $sourceControl: $Ref<InputControl>) : TValue
        /**
        * @methodSwap ReadValue_EBB7509C_CEA024A6
        */
        public ReadValue<TValue,TComparer extends System_Collections_Generic.IComparer$1<TValue>> ($partNumber: int, $comparer?: TComparer) : TValue
        /**
        * @methodSwap ReadValue_EBB7509C_H709A56FD
        */
        public ReadValue<TValue,TComparer extends System_Collections_Generic.IComparer$1<TValue>> ($partNumber: int, $sourceControl: $Ref<InputControl>, $comparer?: TComparer) : TValue
        public ReadValueAsButton ($partNumber: int) : boolean
        public ReadValueAsObject ($partNumber: int) : any
        public GetPressTime ($partNumber: int) : double
    }

    class InputBindingComposite$1<TValue> extends InputBindingComposite {

        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;

        public ReadValue ($context: $Ref<InputBindingCompositeContext>) : TValue
        public ReadValueAsObject ($context: $Ref<InputBindingCompositeContext>) : any
    }

    class InputSystem {

        public static get devices(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>;
        public static get disconnectedDevices(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>;
        public static get pollingFrequency(): float;
        public static set pollingFrequency(value: float);
        public static get onEvent(): UnityEngine_InputSystem_LowLevel.InputEventListener;
        public static set onEvent(value: UnityEngine_InputSystem_LowLevel.InputEventListener);
        public static get onAnyButtonPress(): System.IObservable$1<InputControl>;
        public static get settings(): InputSettings;
        public static set settings(value: InputSettings);
        public static get remoting(): InputRemoting;
        public static get version(): System.Version;
        public static get runInBackground(): boolean;
        public static set runInBackground(value: boolean);
        public static get metrics(): UnityEngine_InputSystem_LowLevel.InputMetrics;

        public static RegisterLayout ($type: System.Type, $name?: string, $matches?: System.Nullable$1<UnityEngine_InputSystem_Layouts.InputDeviceMatcher>) : void
        public static RegisterLayout<T extends InputControl> ($name?: string, $matches?: System.Nullable$1<UnityEngine_InputSystem_Layouts.InputDeviceMatcher>) : void
        public static RegisterLayout ($json: string, $name?: string, $matches?: System.Nullable$1<UnityEngine_InputSystem_Layouts.InputDeviceMatcher>) : void
        public static RegisterLayoutOverride ($json: string, $name?: string) : void
        public static RegisterLayoutMatcher ($layoutName: string, $matcher: UnityEngine_InputSystem_Layouts.InputDeviceMatcher) : void
        public static RegisterLayoutMatcher<TDevice extends InputDevice> ($matcher: UnityEngine_InputSystem_Layouts.InputDeviceMatcher) : void
        public static RegisterLayoutBuilder ($buildMethod: System.Func$1<UnityEngine_InputSystem_Layouts.InputControlLayout>, $name: string, $baseLayout?: string, $matches?: System.Nullable$1<UnityEngine_InputSystem_Layouts.InputDeviceMatcher>) : void
        public static RegisterPrecompiledLayout<TDevice extends InputDevice> ($metadata: string) : void
        public static RemoveLayout ($name: string) : void
        public static TryFindMatchingLayout ($deviceDescription: UnityEngine_InputSystem_Layouts.InputDeviceDescription) : string
        public static ListLayouts () : System_Collections_Generic.IEnumerable$1<string>
        public static ListLayoutsBasedOn ($baseLayout: string) : System_Collections_Generic.IEnumerable$1<string>
        public static LoadLayout ($name: string) : UnityEngine_InputSystem_Layouts.InputControlLayout
        public static LoadLayout<TControl extends InputControl> () : UnityEngine_InputSystem_Layouts.InputControlLayout
        public static GetNameOfBaseLayout ($layoutName: string) : string
        public static IsFirstLayoutBasedOnSecond ($firstLayoutName: string, $secondLayoutName: string) : boolean
        public static RegisterProcessor ($type: System.Type, $name?: string) : void
        public static RegisterProcessor<T> ($name?: string) : void
        public static TryGetProcessor ($name: string) : System.Type
        public static ListProcessors () : System_Collections_Generic.IEnumerable$1<string>
        public static AddDevice ($layout: string, $name?: string, $variants?: string) : InputDevice
        public static AddDevice<TDevice extends InputDevice> ($name?: string) : TDevice
        public static AddDevice ($description: UnityEngine_InputSystem_Layouts.InputDeviceDescription) : InputDevice
        public static AddDevice ($device: InputDevice) : void
        public static RemoveDevice ($device: InputDevice) : void
        public static FlushDisconnectedDevices () : void
        public static GetDevice ($nameOrLayout: string) : InputDevice
        public static GetDevice<TDevice extends InputDevice> () : TDevice
        public static GetDevice ($type: System.Type) : InputDevice
        public static GetDevice<TDevice extends InputDevice> ($usage: UnityEngine_InputSystem_Utilities.InternedString) : TDevice
        public static GetDevice<TDevice extends InputDevice> ($usage: string) : TDevice
        public static GetDeviceById ($deviceId: int) : InputDevice
        public static GetUnsupportedDevices () : System_Collections_Generic.List$1<UnityEngine_InputSystem_Layouts.InputDeviceDescription>
        public static GetUnsupportedDevices ($descriptions: System_Collections_Generic.List$1<UnityEngine_InputSystem_Layouts.InputDeviceDescription>) : int
        public static EnableDevice ($device: InputDevice) : void
        public static DisableDevice ($device: InputDevice, $keepSendingEvents?: boolean) : void
        public static TrySyncDevice ($device: InputDevice) : boolean
        public static ResetDevice ($device: InputDevice, $alsoResetDontResetControls?: boolean) : void
        public static PauseHaptics () : void
        public static ResumeHaptics () : void
        public static ResetHaptics () : void
        public static SetDeviceUsage ($device: InputDevice, $usage: string) : void
        public static SetDeviceUsage ($device: InputDevice, $usage: UnityEngine_InputSystem_Utilities.InternedString) : void
        public static AddDeviceUsage ($device: InputDevice, $usage: string) : void
        public static AddDeviceUsage ($device: InputDevice, $usage: UnityEngine_InputSystem_Utilities.InternedString) : void
        public static RemoveDeviceUsage ($device: InputDevice, $usage: string) : void
        public static RemoveDeviceUsage ($device: InputDevice, $usage: UnityEngine_InputSystem_Utilities.InternedString) : void
        public static FindControl ($path: string) : InputControl
        public static FindControls ($path: string) : InputControlList$1<InputControl>
        public static FindControls<TControl extends InputControl> ($path: string) : InputControlList$1<TControl>
        public static FindControls<TControl extends InputControl> ($path: string, $controls: $Ref<InputControlList$1<TControl>>) : int
        public static QueueEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        public static QueueEvent<TEvent extends UnityEngine_InputSystem_LowLevel.IInputEventTypeInfo> ($inputEvent: $Ref<TEvent>) : void
        public static QueueStateEvent<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($device: InputDevice, $state: TState, $time?: double) : void
        public static QueueDeltaStateEvent<TDelta> ($control: InputControl, $delta: TDelta, $time?: double) : void
        public static QueueConfigChangeEvent ($device: InputDevice, $time?: double) : void
        public static QueueTextEvent ($device: InputDevice, $character: number, $time?: double) : void
        public static Update () : void
        public static RegisterInteraction ($type: System.Type, $name?: string) : void
        public static RegisterInteraction<T> ($name?: string) : void
        public static TryGetInteraction ($name: string) : System.Type
        public static ListInteractions () : System_Collections_Generic.IEnumerable$1<string>
        public static RegisterBindingComposite ($type: System.Type, $name: string) : void
        public static RegisterBindingComposite<T> ($name?: string) : void
        public static TryGetBindingComposite ($name: string) : System.Type
        public static DisableAllEnabledActions () : void
        public static ListEnabledActions () : System_Collections_Generic.List$1<InputAction>
        public static ListEnabledActions ($actions: System_Collections_Generic.List$1<InputAction>) : int
        public static add_onLayoutChange ($value: System.Action$2<string, InputControlLayoutChange>) : void
        public static add_onDeviceChange ($value: System.Action$2<InputDevice, InputDeviceChange>) : void
        public static add_onFindLayoutForDevice ($value: UnityEngine_InputSystem_Layouts.InputDeviceFindControlLayoutDelegate) : void
        public static add_onBeforeUpdate ($value: System.Action) : void
        public static add_onAfterUpdate ($value: System.Action) : void
        public static add_onSettingsChange ($value: System.Action) : void
        public static add_onActionChange ($value: System.Action$2<any, InputActionChange>) : void
        public static remove_onLayoutChange ($value: System.Action$2<string, InputControlLayoutChange>) : void
        public static remove_onDeviceChange ($value: System.Action$2<InputDevice, InputDeviceChange>) : void
        public static remove_onFindLayoutForDevice ($value: UnityEngine_InputSystem_Layouts.InputDeviceFindControlLayoutDelegate) : void
        public static remove_onBeforeUpdate ($value: System.Action) : void
        public static remove_onAfterUpdate ($value: System.Action) : void
        public static remove_onSettingsChange ($value: System.Action) : void
        public static remove_onActionChange ($value: System.Action$2<any, InputActionChange>) : void
    }

    class InputSettings extends UnityEngine.ScriptableObject {

        public get updateMode(): UnityEngine_InputSystem_InputSettings.UpdateMode;
        public set updateMode(value: UnityEngine_InputSystem_InputSettings.UpdateMode);
        public get compensateForScreenOrientation(): boolean;
        public set compensateForScreenOrientation(value: boolean);
        public get defaultDeadzoneMin(): float;
        public set defaultDeadzoneMin(value: float);
        public get defaultDeadzoneMax(): float;
        public set defaultDeadzoneMax(value: float);
        public get defaultButtonPressPoint(): float;
        public set defaultButtonPressPoint(value: float);
        public get buttonReleaseThreshold(): float;
        public set buttonReleaseThreshold(value: float);
        public get defaultTapTime(): float;
        public set defaultTapTime(value: float);
        public get defaultSlowTapTime(): float;
        public set defaultSlowTapTime(value: float);
        public get defaultHoldTime(): float;
        public set defaultHoldTime(value: float);
        public get tapRadius(): float;
        public set tapRadius(value: float);
        public get multiTapDelayTime(): float;
        public set multiTapDelayTime(value: float);
        public get backgroundBehavior(): UnityEngine_InputSystem_InputSettings.BackgroundBehavior;
        public set backgroundBehavior(value: UnityEngine_InputSystem_InputSettings.BackgroundBehavior);
        public get editorInputBehaviorInPlayMode(): UnityEngine_InputSystem_InputSettings.EditorInputBehaviorInPlayMode;
        public set editorInputBehaviorInPlayMode(value: UnityEngine_InputSystem_InputSettings.EditorInputBehaviorInPlayMode);
        public get maxEventBytesPerUpdate(): int;
        public set maxEventBytesPerUpdate(value: int);
        public get maxQueuedEventsPerUpdate(): int;
        public set maxQueuedEventsPerUpdate(value: int);
        public get supportedDevices(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<string>;
        public set supportedDevices(value: UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<string>);
        public get disableRedundantEventsMerging(): boolean;
        public set disableRedundantEventsMerging(value: boolean);
        public get shortcutKeysConsumeInput(): boolean;
        public set shortcutKeysConsumeInput(value: boolean);

        private constructor ()
        public SetInternalFeatureFlag ($featureName: string, $enabled: boolean) : void
    }

    class InputRemoting extends System.Object implements System.IObservable$1<UnityEngine_InputSystem_InputRemoting.Message>, System.IObserver$1<UnityEngine_InputSystem_InputRemoting.Message> {

        public get sending(): boolean;

        public StartSending () : void
        public StopSending () : void
        public Subscribe ($observer: System.IObserver$1<UnityEngine_InputSystem_InputRemoting.Message>) : System.IDisposable
        public RemoveRemoteDevices ($participantId: int) : void
    }

    enum InputControlLayoutChange {
        Added = 0,
        Removed = 1,
        Replaced = 2 
    }

    enum InputDeviceChange {
        Added = 0,
        Removed = 1,
        Disconnected = 2,
        Reconnected = 3,
        Enabled = 4,
        Disabled = 5,
        UsageChanged = 6,
        ConfigurationChanged = 7,
        SoftReset = 8,
        HardReset = 9,
        Destroyed = 10 
    }

    class CommonUsages {

        public static Primary2DMotion : UnityEngine_InputSystem_Utilities.InternedString
        public static Secondary2DMotion : UnityEngine_InputSystem_Utilities.InternedString
        public static PrimaryAction : UnityEngine_InputSystem_Utilities.InternedString
        public static SecondaryAction : UnityEngine_InputSystem_Utilities.InternedString
        public static PrimaryTrigger : UnityEngine_InputSystem_Utilities.InternedString
        public static SecondaryTrigger : UnityEngine_InputSystem_Utilities.InternedString
        public static Modifier : UnityEngine_InputSystem_Utilities.InternedString
        public static Position : UnityEngine_InputSystem_Utilities.InternedString
        public static Orientation : UnityEngine_InputSystem_Utilities.InternedString
        public static Hatswitch : UnityEngine_InputSystem_Utilities.InternedString
        public static Back : UnityEngine_InputSystem_Utilities.InternedString
        public static Forward : UnityEngine_InputSystem_Utilities.InternedString
        public static Menu : UnityEngine_InputSystem_Utilities.InternedString
        public static Submit : UnityEngine_InputSystem_Utilities.InternedString
        public static Cancel : UnityEngine_InputSystem_Utilities.InternedString
        public static Horizontal : UnityEngine_InputSystem_Utilities.InternedString
        public static Vertical : UnityEngine_InputSystem_Utilities.InternedString
        public static Twist : UnityEngine_InputSystem_Utilities.InternedString
        public static Pressure : UnityEngine_InputSystem_Utilities.InternedString
        public static ScrollHorizontal : UnityEngine_InputSystem_Utilities.InternedString
        public static ScrollVertical : UnityEngine_InputSystem_Utilities.InternedString
        public static Point : UnityEngine_InputSystem_Utilities.InternedString
        public static LowFreqMotor : UnityEngine_InputSystem_Utilities.InternedString
        public static HighFreqMotor : UnityEngine_InputSystem_Utilities.InternedString
        public static LeftHand : UnityEngine_InputSystem_Utilities.InternedString
        public static RightHand : UnityEngine_InputSystem_Utilities.InternedString
        public static BatteryStrength : UnityEngine_InputSystem_Utilities.InternedString

    }

    class InputControl$1<TValue> extends InputControl {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public get value(): $Ref<TValue>;

        public ReadValue () : TValue
        public ReadValueFromPreviousFrame () : TValue
        public ReadDefaultValue () : TValue
        public ReadUnprocessedValue () : TValue
        public ProcessValue ($value: TValue) : TValue
        public ProcessValue ($value: $Ref<TValue>) : void
    }

    class InputControlExtensions {

        public static FindInParentChain<TControl extends InputControl> ($control: InputControl) : TControl
        /**
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        public static IsPressed ($control: InputControl, $buttonPressPoint?: float) : boolean
        /**
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        public static IsActuated ($control: InputControl, $threshold?: float) : boolean
        public static ReadValueAsObject ($control: InputControl) : any
        public static ReadDefaultValueAsObject ($control: InputControl) : any
        public static ReadValueFromEvent<TValue> ($control: InputControl$1<TValue>, $inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : TValue
        public static ReadValueFromEvent<TValue> ($control: InputControl$1<TValue>, $inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: $Ref<TValue>) : boolean
        public static ReadValueFromEventAsObject ($control: InputControl, $inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        public static ReadUnprocessedValueFromEvent<TValue> ($control: InputControl$1<TValue>, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : TValue
        public static ReadUnprocessedValueFromEvent<TValue> ($control: InputControl$1<TValue>, $inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: $Ref<TValue>) : boolean
        public static WriteValueFromObjectIntoEvent ($control: InputControl, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        public static WriteValueIntoState<TValue,TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($control: InputControl$1<TValue>, $value: TValue, $state: $Ref<TState>) : void
        public static WriteValueIntoEvent<TValue> ($control: InputControl, $value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        public static WriteValueIntoEvent<TValue> ($control: InputControl$1<TValue>, $value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        public static CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($device: InputDevice, $state: $Ref<TState>) : void
        public static CheckStateIsAtDefault ($control: InputControl) : boolean
        public static CheckStateIsAtDefaultIgnoringNoise ($control: InputControl) : boolean
        public static HasValueChangeInEvent ($control: InputControl, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        public static ResetToDefaultStateInEvent ($control: InputControl, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @methodSwap QueueValueChange_EBB7509C_H955A28D5
        */
        public static QueueValueChange<TValue> ($control: InputControl$1<TValue>, $value: TValue, $time?: double) : void
        public static FindControlsRecursive<TControl extends InputControl> ($parent: InputControl, $controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @methodSwap EnumerateControls_EBB7509C_DDA395E
        */
        public static EnumerateControls ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $flags: UnityEngine_InputSystem_InputControlExtensions.Enumerate, $device?: InputDevice, $magnitudeThreshold?: float) : UnityEngine_InputSystem_InputControlExtensions.InputEventControlCollection
        /**
        * @methodSwap EnumerateChangedControls_EBB7509C_BA69A38A
        */
        public static EnumerateChangedControls ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $device?: InputDevice, $magnitudeThreshold?: float) : UnityEngine_InputSystem_InputControlExtensions.InputEventControlCollection
        /**
        * @methodSwap HasButtonPress_EBB7509C_F6053317
        */
        public static HasButtonPress ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $magnitude?: float, $buttonControlsOnly?: boolean) : boolean
        /**
        * @methodSwap GetFirstButtonPressOrNull_EBB7509C_F6053317
        */
        public static GetFirstButtonPressOrNull ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $magnitude?: float, $buttonControlsOnly?: boolean) : InputControl
        /**
        * @methodSwap GetAllButtonPresses_EBB7509C_F6053317
        */
        public static GetAllButtonPresses ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $magnitude?: float, $buttonControlsOnly?: boolean) : System_Collections_Generic.IEnumerable$1<InputControl>
        public static Setup ($control: InputControl) : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        public static Setup ($device: InputDevice, $controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    class InputProcessor$1<TValue> extends InputProcessor {

        public get cachingPolicy(): UnityEngine_InputSystem_InputProcessor.CachingPolicy;

        public Process ($value: TValue, $control: InputControl) : TValue
        public ProcessAsObject ($value: any, $control: InputControl) : any
    }

    class InputProcessor extends System.Object {

        public get cachingPolicy(): UnityEngine_InputSystem_InputProcessor.CachingPolicy;

        public ProcessAsObject ($value: any, $control: InputControl) : any
    }

    class InputControlPath {

        public static Wildcard : string
        public static DoubleWildcard : string
        public static Separator : number

        public static Combine ($parent: InputControl, $path: string) : string
        public static ToHumanReadableString ($path: string, $options?: UnityEngine_InputSystem_InputControlPath.HumanReadableStringOptions, $control?: InputControl) : string
        public static ToHumanReadableString ($path: string, $deviceLayoutName: $Ref<string>, $controlPath: $Ref<string>, $options?: UnityEngine_InputSystem_InputControlPath.HumanReadableStringOptions, $control?: InputControl) : string
        public static TryGetDeviceUsages ($path: string) : string[]
        public static TryGetDeviceLayout ($path: string) : string
        public static TryGetControlLayout ($path: string) : string
        /**
        * @methodSwap TryFindControl_EBB7509C_H27D83791
        */
        public static TryFindControl ($control: InputControl, $path: string, $indexInPath?: int) : InputControl
        /**
        * @methodSwap TryFindControls_EBB7509C_H27D83791
        */
        public static TryFindControls ($control: InputControl, $path: string, $indexInPath?: int) : InputControl[]
        /**
        * @methodSwap TryFindControls_EBB7509C_A499FD01
        */
        public static TryFindControls ($control: InputControl, $path: string, $matches: $Ref<InputControlList$1<InputControl>>, $indexInPath?: int) : int
        /**
        * @methodSwap TryFindControl_EBB7509C_H27D83791
        */
        public static TryFindControl<TControl extends InputControl> ($control: InputControl, $path: string, $indexInPath?: int) : TControl
        /**
        * @methodSwap TryFindControls_EBB7509C_CFF2E61C
        */
        public static TryFindControls<TControl extends InputControl> ($control: InputControl, $path: string, $indexInPath: int, $matches: $Ref<InputControlList$1<TControl>>) : int
        /**
        * @methodSwap TryFindChild_EBB7509C_H27D83791
        */
        public static TryFindChild ($control: InputControl, $path: string, $indexInPath?: int) : InputControl
        /**
        * @methodSwap TryFindChild_EBB7509C_H27D83791
        */
        public static TryFindChild<TControl extends InputControl> ($control: InputControl, $path: string, $indexInPath?: int) : TControl
        public static Matches ($expected: string, $control: InputControl) : boolean
        public static MatchesPrefix ($expected: string, $control: InputControl) : boolean
        public static Parse ($path: string) : System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem_InputControlPath.ParsedPathComponent>
    }

    class Gamepad extends InputDevice implements UnityEngine_InputSystem_Haptics.IDualMotorRumble {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get buttonWest(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get buttonNorth(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get buttonSouth(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get buttonEast(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get leftStickButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get rightStickButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get startButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get selectButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get dpad(): UnityEngine_InputSystem_Controls.DpadControl;
        public get leftShoulder(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get rightShoulder(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get leftStick(): UnityEngine_InputSystem_Controls.StickControl;
        public get rightStick(): UnityEngine_InputSystem_Controls.StickControl;
        public get leftTrigger(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get rightTrigger(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get aButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get bButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get xButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get yButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get triangleButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get squareButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get circleButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get crossButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public static get current(): Gamepad;
        public static get all(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<Gamepad>;

        public constructor ()
        public MakeCurrent () : void
        public PauseHaptics () : void
        public ResumeHaptics () : void
        public ResetHaptics () : void
        public SetMotorSpeeds ($lowFrequency: float, $highFrequency: float) : void
        public get_Item ($button: UnityEngine_InputSystem_LowLevel.GamepadButton) : UnityEngine_InputSystem_Controls.ButtonControl
        public get_Item ($path: string) : InputControl
    }

    class Joystick extends InputDevice {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get trigger(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get stick(): UnityEngine_InputSystem_Controls.StickControl;
        public get twist(): UnityEngine_InputSystem_Controls.AxisControl;
        public get hatswitch(): UnityEngine_InputSystem_Controls.Vector2Control;
        public static get current(): Joystick;
        public static get all(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<Joystick>;

        public constructor ()
        public MakeCurrent () : void
    }

    enum Key {
        None = 0,
        Space = 1,
        Enter = 2,
        Tab = 3,
        Backquote = 4,
        Quote = 5,
        Semicolon = 6,
        Comma = 7,
        Period = 8,
        Slash = 9,
        Backslash = 10,
        LeftBracket = 11,
        RightBracket = 12,
        Minus = 13,
        Equals = 14,
        A = 15,
        B = 16,
        C = 17,
        D = 18,
        E = 19,
        F = 20,
        G = 21,
        H = 22,
        I = 23,
        J = 24,
        K = 25,
        L = 26,
        M = 27,
        N = 28,
        O = 29,
        P = 30,
        Q = 31,
        R = 32,
        S = 33,
        T = 34,
        U = 35,
        V = 36,
        W = 37,
        X = 38,
        Y = 39,
        Z = 40,
        Digit1 = 41,
        Digit2 = 42,
        Digit3 = 43,
        Digit4 = 44,
        Digit5 = 45,
        Digit6 = 46,
        Digit7 = 47,
        Digit8 = 48,
        Digit9 = 49,
        Digit0 = 50,
        LeftShift = 51,
        RightShift = 52,
        LeftAlt = 53,
        RightAlt = 54,
        AltGr = 54,
        LeftCtrl = 55,
        RightCtrl = 56,
        LeftMeta = 57,
        RightMeta = 58,
        LeftWindows = 57,
        RightWindows = 58,
        LeftApple = 57,
        RightApple = 58,
        LeftCommand = 57,
        RightCommand = 58,
        ContextMenu = 59,
        Escape = 60,
        LeftArrow = 61,
        RightArrow = 62,
        UpArrow = 63,
        DownArrow = 64,
        Backspace = 65,
        PageDown = 66,
        PageUp = 67,
        Home = 68,
        End = 69,
        Insert = 70,
        Delete = 71,
        CapsLock = 72,
        NumLock = 73,
        PrintScreen = 74,
        ScrollLock = 75,
        Pause = 76,
        NumpadEnter = 77,
        NumpadDivide = 78,
        NumpadMultiply = 79,
        NumpadPlus = 80,
        NumpadMinus = 81,
        NumpadPeriod = 82,
        NumpadEquals = 83,
        Numpad0 = 84,
        Numpad1 = 85,
        Numpad2 = 86,
        Numpad3 = 87,
        Numpad4 = 88,
        Numpad5 = 89,
        Numpad6 = 90,
        Numpad7 = 91,
        Numpad8 = 92,
        Numpad9 = 93,
        F1 = 94,
        F2 = 95,
        F3 = 96,
        F4 = 97,
        F5 = 98,
        F6 = 99,
        F7 = 100,
        F8 = 101,
        F9 = 102,
        F10 = 103,
        F11 = 104,
        F12 = 105,
        OEM1 = 106,
        OEM2 = 107,
        OEM3 = 108,
        OEM4 = 109,
        OEM5 = 110,
        IMESelected = 111 
    }

    class Keyboard extends InputDevice implements UnityEngine_InputSystem_LowLevel.ITextInputReceiver {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public static KeyCount : int
        public get keyboardLayout(): string;
        public get anyKey(): UnityEngine_InputSystem_Controls.AnyKeyControl;
        public get spaceKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get enterKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get tabKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get backquoteKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get quoteKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get semicolonKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get commaKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get periodKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get slashKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get backslashKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get leftBracketKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get rightBracketKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get minusKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get equalsKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get aKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get bKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get cKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get dKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get eKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get fKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get gKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get hKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get iKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get jKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get kKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get lKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get mKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get nKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get oKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get pKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get qKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get rKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get sKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get tKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get uKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get vKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get wKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get xKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get yKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get zKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get digit1Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get digit2Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get digit3Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get digit4Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get digit5Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get digit6Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get digit7Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get digit8Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get digit9Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get digit0Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get leftShiftKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get rightShiftKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get leftAltKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get rightAltKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get leftCtrlKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get rightCtrlKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get leftMetaKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get rightMetaKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get leftWindowsKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get rightWindowsKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get leftAppleKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get rightAppleKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get leftCommandKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get rightCommandKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get contextMenuKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get escapeKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get leftArrowKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get rightArrowKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get upArrowKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get downArrowKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get backspaceKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get pageDownKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get pageUpKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get homeKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get endKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get insertKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get deleteKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get capsLockKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get scrollLockKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numLockKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get printScreenKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get pauseKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpadEnterKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpadDivideKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpadMultiplyKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpadMinusKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpadPlusKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpadPeriodKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpadEqualsKey(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpad0Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpad1Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpad2Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpad3Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpad4Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpad5Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpad6Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpad7Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpad8Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get numpad9Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f1Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f2Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f3Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f4Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f5Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f6Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f7Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f8Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f9Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f10Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f11Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get f12Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get oem1Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get oem2Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get oem3Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get oem4Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get oem5Key(): UnityEngine_InputSystem_Controls.KeyControl;
        public get shiftKey(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get ctrlKey(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get altKey(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get imeSelected(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get allKeys(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Controls.KeyControl>;
        public static get current(): Keyboard;

        public constructor ()
        public SetIMEEnabled ($enabled: boolean) : void
        public SetIMECursorPosition ($position: UnityEngine.Vector2) : void
        public MakeCurrent () : void
        public OnTextInput ($character: number) : void
        public FindKeyOnCurrentKeyboardLayout ($displayName: string) : UnityEngine_InputSystem_Controls.KeyControl
        public OnIMECompositionChanged ($compositionString: UnityEngine_InputSystem_LowLevel.IMECompositionString) : void
        public get_Item ($key: Key) : UnityEngine_InputSystem_Controls.KeyControl
        public add_onTextInput ($value: System.Action$1<number>) : void
        public add_onIMECompositionChange ($value: System.Action$1<UnityEngine_InputSystem_LowLevel.IMECompositionString>) : void
        public remove_onTextInput ($value: System.Action$1<number>) : void
        public remove_onIMECompositionChange ($value: System.Action$1<UnityEngine_InputSystem_LowLevel.IMECompositionString>) : void
        public get_Item ($path: string) : InputControl
    }

    class Mouse extends Pointer {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get position(): UnityEngine_InputSystem_Controls.Vector2Control;
        public get delta(): UnityEngine_InputSystem_Controls.DeltaControl;
        public get radius(): UnityEngine_InputSystem_Controls.Vector2Control;
        public get pressure(): UnityEngine_InputSystem_Controls.AxisControl;
        public get press(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get displayIndex(): UnityEngine_InputSystem_Controls.IntegerControl;
        public static get current(): Pointer;
        public get scroll(): UnityEngine_InputSystem_Controls.DeltaControl;
        public get leftButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get middleButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get rightButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get backButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get forwardButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get clickCount(): UnityEngine_InputSystem_Controls.IntegerControl;

        public constructor ()
        public MakeCurrent () : void
        public WarpCursorPosition ($position: UnityEngine.Vector2) : void
    }

    class Pointer extends InputDevice implements UnityEngine_InputSystem_LowLevel.IInputStateCallbackReceiver {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get position(): UnityEngine_InputSystem_Controls.Vector2Control;
        public get delta(): UnityEngine_InputSystem_Controls.DeltaControl;
        public get radius(): UnityEngine_InputSystem_Controls.Vector2Control;
        public get pressure(): UnityEngine_InputSystem_Controls.AxisControl;
        public get press(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get displayIndex(): UnityEngine_InputSystem_Controls.IntegerControl;
        public static get current(): Pointer;

        public constructor ()
        public MakeCurrent () : void
    }

    enum PenButton {
        Tip = 0,
        Eraser = 1,
        BarrelFirst = 2,
        BarrelSecond = 3,
        InRange = 4,
        BarrelThird = 5,
        BarrelFourth = 6,
        Barrel1 = 2,
        Barrel2 = 3,
        Barrel3 = 5,
        Barrel4 = 6 
    }

    class Pen extends Pointer {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get position(): UnityEngine_InputSystem_Controls.Vector2Control;
        public get delta(): UnityEngine_InputSystem_Controls.DeltaControl;
        public get radius(): UnityEngine_InputSystem_Controls.Vector2Control;
        public get pressure(): UnityEngine_InputSystem_Controls.AxisControl;
        public get press(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get displayIndex(): UnityEngine_InputSystem_Controls.IntegerControl;
        public static get current(): Pointer;
        public get tip(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get eraser(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get firstBarrelButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get secondBarrelButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get thirdBarrelButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get fourthBarrelButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get inRange(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get tilt(): UnityEngine_InputSystem_Controls.Vector2Control;
        public get twist(): UnityEngine_InputSystem_Controls.AxisControl;

        public constructor ()
        public MakeCurrent () : void
        public get_Item ($button: PenButton) : UnityEngine_InputSystem_Controls.ButtonControl
        public get_Item ($path: string) : InputControl
    }

    class Sensor extends InputDevice {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);

        public constructor ()
    }

    class Accelerometer extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get acceleration(): UnityEngine_InputSystem_Controls.Vector3Control;
        public static get current(): Accelerometer;

        public constructor ()
        public MakeCurrent () : void
    }

    class Gyroscope extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get angularVelocity(): UnityEngine_InputSystem_Controls.Vector3Control;
        public static get current(): Gyroscope;

        public constructor ()
        public MakeCurrent () : void
    }

    class GravitySensor extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get gravity(): UnityEngine_InputSystem_Controls.Vector3Control;
        public static get current(): GravitySensor;

        public constructor ()
        public MakeCurrent () : void
    }

    class AttitudeSensor extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get attitude(): UnityEngine_InputSystem_Controls.QuaternionControl;
        public static get current(): AttitudeSensor;

        public constructor ()
        public MakeCurrent () : void
    }

    class LinearAccelerationSensor extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get acceleration(): UnityEngine_InputSystem_Controls.Vector3Control;
        public static get current(): LinearAccelerationSensor;

        public constructor ()
        public MakeCurrent () : void
    }

    class MagneticFieldSensor extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get magneticField(): UnityEngine_InputSystem_Controls.Vector3Control;
        public static get current(): MagneticFieldSensor;

        public constructor ()
        public MakeCurrent () : void
    }

    class LightSensor extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get lightLevel(): UnityEngine_InputSystem_Controls.AxisControl;
        public static get current(): LightSensor;

        public constructor ()
        public MakeCurrent () : void
    }

    class PressureSensor extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get atmosphericPressure(): UnityEngine_InputSystem_Controls.AxisControl;
        public static get current(): PressureSensor;

        public constructor ()
        public MakeCurrent () : void
    }

    class ProximitySensor extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get distance(): UnityEngine_InputSystem_Controls.AxisControl;
        public static get current(): ProximitySensor;

        public constructor ()
        public MakeCurrent () : void
    }

    class HumiditySensor extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get relativeHumidity(): UnityEngine_InputSystem_Controls.AxisControl;
        public static get current(): HumiditySensor;

        public constructor ()
        public MakeCurrent () : void
    }

    class AmbientTemperatureSensor extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get ambientTemperature(): UnityEngine_InputSystem_Controls.AxisControl;
        public static get current(): AmbientTemperatureSensor;

        public constructor ()
        public MakeCurrent () : void
    }

    class StepCounter extends Sensor {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get samplingFrequency(): float;
        public set samplingFrequency(value: float);
        public get stepCounter(): UnityEngine_InputSystem_Controls.IntegerControl;
        public static get current(): StepCounter;

        public constructor ()
        public MakeCurrent () : void
    }

    enum TouchPhase {
        None = 0,
        Began = 1,
        Moved = 2,
        Ended = 3,
        Canceled = 4,
        Stationary = 5 
    }

    class Touchscreen extends Pointer implements UnityEngine_InputSystem_LowLevel.ICustomDeviceReset, UnityEngine_InputSystem_LowLevel.IEventMerger {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get position(): UnityEngine_InputSystem_Controls.Vector2Control;
        public get delta(): UnityEngine_InputSystem_Controls.DeltaControl;
        public get radius(): UnityEngine_InputSystem_Controls.Vector2Control;
        public get pressure(): UnityEngine_InputSystem_Controls.AxisControl;
        public get press(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get displayIndex(): UnityEngine_InputSystem_Controls.IntegerControl;
        public static get current(): Pointer;
        public get primaryTouch(): UnityEngine_InputSystem_Controls.TouchControl;
        public get touches(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Controls.TouchControl>;

        public constructor ()
        public MakeCurrent () : void
    }

    class TrackedDevice extends InputDevice {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get trackingState(): UnityEngine_InputSystem_Controls.IntegerControl;
        public get isTracked(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get devicePosition(): UnityEngine_InputSystem_Controls.Vector3Control;
        public get deviceRotation(): UnityEngine_InputSystem_Controls.QuaternionControl;

        public constructor ()
    }

    class InputExtensions {

        public static IsInProgress ($phase: InputActionPhase) : boolean
        public static IsEndedOrCanceled ($phase: TouchPhase) : boolean
        public static IsActive ($phase: TouchPhase) : boolean
        public static IsModifierKey ($key: Key) : boolean
        public static IsTextInputKey ($key: Key) : boolean
    }

    class DefaultInputActions extends System.Object implements IInputActionCollection2, System.IDisposable {

        public get asset(): InputActionAsset;
        public get bindingMask(): System.Nullable$1<InputBinding>;
        public set bindingMask(value: System.Nullable$1<InputBinding>);
        public get devices(): System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>;
        public set devices(value: System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>);
        public get controlSchemes(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControlScheme>;
        public get bindings(): System_Collections_Generic.IEnumerable$1<InputBinding>;
        public get Player(): UnityEngine_InputSystem_DefaultInputActions.PlayerActions;
        public get UI(): UnityEngine_InputSystem_DefaultInputActions.UIActions;
        public get KeyboardMouseScheme(): InputControlScheme;
        public get GamepadScheme(): InputControlScheme;
        public get TouchScheme(): InputControlScheme;
        public get JoystickScheme(): InputControlScheme;
        public get XRScheme(): InputControlScheme;

        public constructor ()
        public Dispose () : void
        public Contains ($action: InputAction) : boolean
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<InputAction>
        public Enable () : void
        public Disable () : void
        public FindAction ($actionNameOrId: string, $throwIfNotFound?: boolean) : InputAction
        public FindBinding ($bindingMask: InputBinding, $action: $Ref<InputAction>) : int
    }

    class InputValue extends System.Object {

        public get isPressed(): boolean;

        public constructor ()
        public Get () : any
        public Get<TValue> () : TValue
    }

    class PlayerInput extends UnityEngine.MonoBehaviour {

        public static DeviceLostMessage : string
        public static DeviceRegainedMessage : string
        public static ControlsChangedMessage : string
        public get inputIsActive(): boolean;
        public get playerIndex(): int;
        public get splitScreenIndex(): int;
        public get actions(): InputActionAsset;
        public set actions(value: InputActionAsset);
        public get currentControlScheme(): string;
        public get defaultControlScheme(): string;
        public set defaultControlScheme(value: string);
        public get neverAutoSwitchControlSchemes(): boolean;
        public set neverAutoSwitchControlSchemes(value: boolean);
        public get currentActionMap(): InputActionMap;
        public set currentActionMap(value: InputActionMap);
        public get defaultActionMap(): string;
        public set defaultActionMap(value: string);
        public get notificationBehavior(): PlayerNotifications;
        public set notificationBehavior(value: PlayerNotifications);
        public get actionEvents(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_PlayerInput.ActionEvent>;
        public set actionEvents(value: UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_PlayerInput.ActionEvent>);
        public get deviceLostEvent(): UnityEngine_InputSystem_PlayerInput.DeviceLostEvent;
        public get deviceRegainedEvent(): UnityEngine_InputSystem_PlayerInput.DeviceRegainedEvent;
        public get controlsChangedEvent(): UnityEngine_InputSystem_PlayerInput.ControlsChangedEvent;
        public get camera(): UnityEngine.Camera;
        public set camera(value: UnityEngine.Camera);
        public get uiInputModule(): UnityEngine_InputSystem_UI.InputSystemUIInputModule;
        public set uiInputModule(value: UnityEngine_InputSystem_UI.InputSystemUIInputModule);
        public get user(): UnityEngine_InputSystem_Users.InputUser;
        public get devices(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>;
        public get hasMissingRequiredDevices(): boolean;
        public static get all(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<PlayerInput>;
        public static get isSinglePlayer(): boolean;

        private constructor ()
        public GetDevice<TDevice extends InputDevice> () : TDevice
        public ActivateInput () : void
        public DeactivateInput () : void
        public SwitchCurrentControlScheme (...devices: InputDevice[]) : boolean
        public SwitchCurrentControlScheme ($controlScheme: string, ...devices: InputDevice[]) : void
        public SwitchCurrentActionMap ($mapNameOrId: string) : void
        public static GetPlayerByIndex ($playerIndex: int) : PlayerInput
        public static FindFirstPairedToDevice ($device: InputDevice) : PlayerInput
        /**
        * @methodSwap Instantiate_EBB7509C_F101ABB9
        */
        public static Instantiate ($prefab: UnityEngine.GameObject, $playerIndex?: int, $controlScheme?: string, $splitScreenIndex?: int, $pairWithDevice?: InputDevice) : PlayerInput
        /**
        * @methodSwap Instantiate_EBB7509C_H1F8E5F09
        */
        public static Instantiate ($prefab: UnityEngine.GameObject, $playerIndex?: int, $controlScheme?: string, $splitScreenIndex?: int, ...pairWithDevices: InputDevice[]) : PlayerInput
        public DebugLogAction ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        public add_onActionTriggered ($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>) : void
        public add_onDeviceLost ($value: System.Action$1<PlayerInput>) : void
        public add_onDeviceRegained ($value: System.Action$1<PlayerInput>) : void
        public add_onControlsChanged ($value: System.Action$1<PlayerInput>) : void
        public remove_onActionTriggered ($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>) : void
        public remove_onDeviceLost ($value: System.Action$1<PlayerInput>) : void
        public remove_onDeviceRegained ($value: System.Action$1<PlayerInput>) : void
        public remove_onControlsChanged ($value: System.Action$1<PlayerInput>) : void
    }

    enum PlayerNotifications {
        SendMessages = 0,
        BroadcastMessages = 1,
        InvokeUnityEvents = 2,
        InvokeCSharpEvents = 3 
    }

    class PlayerInputManager extends UnityEngine.MonoBehaviour {

        public static PlayerJoinedMessage : string
        public static PlayerLeftMessage : string
        public get splitScreen(): boolean;
        public set splitScreen(value: boolean);
        public get maintainAspectRatioInSplitScreen(): boolean;
        public get fixedNumberOfSplitScreens(): int;
        public get splitScreenArea(): UnityEngine.Rect;
        public get playerCount(): int;
        public get maxPlayerCount(): int;
        public get joiningEnabled(): boolean;
        public get joinBehavior(): PlayerJoinBehavior;
        public set joinBehavior(value: PlayerJoinBehavior);
        public get joinAction(): InputActionProperty;
        public set joinAction(value: InputActionProperty);
        public get notificationBehavior(): PlayerNotifications;
        public set notificationBehavior(value: PlayerNotifications);
        public get playerJoinedEvent(): UnityEngine_InputSystem_PlayerInputManager.PlayerJoinedEvent;
        public get playerLeftEvent(): UnityEngine_InputSystem_PlayerInputManager.PlayerLeftEvent;
        public get playerPrefab(): UnityEngine.GameObject;
        public set playerPrefab(value: UnityEngine.GameObject);
        public static get instance(): PlayerInputManager;

        private constructor ()
        public EnableJoining () : void
        public DisableJoining () : void
        public JoinPlayerFromAction ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        public JoinPlayerFromActionIfNotAlreadyJoined ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        /**
        * @methodSwap JoinPlayer_EBB7509C_H4C9476E5
        */
        public JoinPlayer ($playerIndex?: int, $splitScreenIndex?: int, $controlScheme?: string, $pairWithDevice?: InputDevice) : PlayerInput
        /**
        * @methodSwap JoinPlayer_EBB7509C_H99D41D9D
        */
        public JoinPlayer ($playerIndex?: int, $splitScreenIndex?: int, $controlScheme?: string, ...pairWithDevices: InputDevice[]) : PlayerInput
        public add_onPlayerJoined ($value: System.Action$1<PlayerInput>) : void
        public add_onPlayerLeft ($value: System.Action$1<PlayerInput>) : void
        public remove_onPlayerJoined ($value: System.Action$1<PlayerInput>) : void
        public remove_onPlayerLeft ($value: System.Action$1<PlayerInput>) : void
    }

    enum PlayerJoinBehavior {
        JoinPlayersWhenButtonIsPressed = 0,
        JoinPlayersWhenJoinActionIsTriggered = 1,
        JoinPlayersManually = 2 
    }

    interface InputAction {

        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetParameterValue
        */
        GetParameterValue ($name: string, $bindingMask?: InputBinding) : System.Nullable$1<UnityEngine_InputSystem_Utilities.PrimitiveValue>
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetParameterValue
        * @methodSwap GetParameterValue_EBB7509C_B12665DA
        */
        GetParameterValue ($name: string, $bindingIndex: int) : System.Nullable$1<UnityEngine_InputSystem_Utilities.PrimitiveValue>
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetParameterValue<TObject, TValue>
        */
        GetParameterValue<TObject,TValue> ($expr: System_Linq_Expressions.Expression$1<System.Func$2<TObject, TValue>>, $bindingMask?: InputBinding) : System.Nullable$1<TValue>
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyParameterOverride<TObject, TValue>
        */
        ApplyParameterOverride<TObject,TValue> ($expr: System_Linq_Expressions.Expression$1<System.Func$2<TObject, TValue>>, $value: TValue, $bindingMask?: InputBinding) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyParameterOverride
        */
        ApplyParameterOverride ($name: string, $value: UnityEngine_InputSystem_Utilities.PrimitiveValue, $bindingMask?: InputBinding) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyParameterOverride
        * @methodSwap ApplyParameterOverride_EBB7509C_H43778C24
        */
        ApplyParameterOverride ($name: string, $value: UnityEngine_InputSystem_Utilities.PrimitiveValue, $bindingIndex: int) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetBindingIndex
        */
        GetBindingIndex ($bindingMask: InputBinding) : int
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetBindingIndex
        */
        GetBindingIndex ($group?: string, $path?: string) : int
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetBindingForControl
        */
        GetBindingForControl ($control: InputControl) : System.Nullable$1<InputBinding>
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetBindingIndexForControl
        */
        GetBindingIndexForControl ($control: InputControl) : int
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetBindingDisplayString
        */
        GetBindingDisplayString ($options?: UnityEngine_InputSystem_InputBinding.DisplayStringOptions, $group?: string) : string
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetBindingDisplayString
        */
        GetBindingDisplayString ($bindingMask: InputBinding, $options?: UnityEngine_InputSystem_InputBinding.DisplayStringOptions) : string
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetBindingDisplayString
        * @methodSwap GetBindingDisplayString_EBB7509C_H12AF7C67
        */
        GetBindingDisplayString ($bindingIndex: int, $options?: UnityEngine_InputSystem_InputBinding.DisplayStringOptions) : string
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetBindingDisplayString
        * @methodSwap GetBindingDisplayString_EBB7509C_BBF9FDA7
        */
        GetBindingDisplayString ($bindingIndex: int, $deviceLayoutName: $Ref<string>, $controlPath: $Ref<string>, $options?: UnityEngine_InputSystem_InputBinding.DisplayStringOptions) : string
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyBindingOverride
        */
        ApplyBindingOverride ($newPath: string, $group?: string, $path?: string) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyBindingOverride
        */
        ApplyBindingOverride ($bindingOverride: InputBinding) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyBindingOverride
        * @methodSwap ApplyBindingOverride_EBB7509C_EEFEF77
        */
        ApplyBindingOverride ($bindingIndex: int, $bindingOverride: InputBinding) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyBindingOverride
        * @methodSwap ApplyBindingOverride_EBB7509C_H78B04648
        */
        ApplyBindingOverride ($bindingIndex: int, $path: string) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.RemoveBindingOverride
        * @methodSwap RemoveBindingOverride_EBB7509C_H4E00C1B4
        */
        RemoveBindingOverride ($bindingIndex: int) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.RemoveBindingOverride
        */
        RemoveBindingOverride ($bindingMask: InputBinding) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.RemoveAllBindingOverrides
        */
        RemoveAllBindingOverrides () : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyBindingOverridesOnMatchingControls
        */
        ApplyBindingOverridesOnMatchingControls ($control: InputControl) : int
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.SaveBindingOverridesAsJson
        */
        SaveBindingOverridesAsJson () : string
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.LoadBindingOverridesFromJson
        */
        LoadBindingOverridesFromJson ($json: string, $removeExisting?: boolean) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.PerformInteractiveRebinding
        */
        PerformInteractiveRebinding ($bindingIndex?: int) : UnityEngine_InputSystem_InputActionRebindingExtensions.RebindingOperation
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.RemoveAction
        */
        RemoveAction () : void
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddBinding
        */
        AddBinding ($path: string, $interactions?: string, $processors?: string, $groups?: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddBinding
        */
        AddBinding ($control: InputControl) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddBinding
        */
        AddBinding ($binding?: InputBinding) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddCompositeBinding
        */
        AddCompositeBinding ($composite: string, $interactions?: string, $processors?: string) : UnityEngine_InputSystem_InputActionSetupExtensions.CompositeSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.ChangeBinding
        * @methodSwap ChangeBinding_EBB7509C_H4E00C1B4
        */
        ChangeBinding ($index: int) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.ChangeBinding
        */
        ChangeBinding ($name: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.ChangeBindingWithId
        */
        ChangeBindingWithId ($id: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.ChangeBindingWithId
        */
        ChangeBindingWithId ($id: System.Guid) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.ChangeBindingWithGroup
        */
        ChangeBindingWithGroup ($group: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.ChangeBindingWithPath
        */
        ChangeBindingWithPath ($path: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.ChangeBinding
        */
        ChangeBinding ($match: InputBinding) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.ChangeCompositeBinding
        */
        ChangeCompositeBinding ($compositeName: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.Rename
        */
        Rename ($newName: string) : void
    }

    interface InputActionMap {

        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyParameterOverride<TObject, TValue>
        */
        ApplyParameterOverride<TObject,TValue> ($expr: System_Linq_Expressions.Expression$1<System.Func$2<TObject, TValue>>, $value: TValue, $bindingMask?: InputBinding) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyParameterOverride
        */
        ApplyParameterOverride ($name: string, $value: UnityEngine_InputSystem_Utilities.PrimitiveValue, $bindingMask?: InputBinding) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.GetBindingIndex
        */
        GetBindingIndex ($bindingMask: InputBinding) : int
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyBindingOverride
        */
        ApplyBindingOverride ($bindingOverride: InputBinding) : int
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyBindingOverride
        * @methodSwap ApplyBindingOverride_EBB7509C_H33420BC7
        */
        ApplyBindingOverride ($bindingIndex: int, $bindingOverride: InputBinding) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.RemoveAllBindingOverrides
        */
        RemoveAllBindingOverrides () : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyBindingOverrides
        */
        ApplyBindingOverrides ($overrides: System_Collections_Generic.IEnumerable$1<InputBinding>) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.RemoveBindingOverrides
        */
        RemoveBindingOverrides ($overrides: System_Collections_Generic.IEnumerable$1<InputBinding>) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyBindingOverridesOnMatchingControls
        */
        ApplyBindingOverridesOnMatchingControls ($control: InputControl) : int
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.SaveBindingOverridesAsJson
        */
        SaveBindingOverridesAsJson () : string
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.LoadBindingOverridesFromJson
        */
        LoadBindingOverridesFromJson ($json: string, $removeExisting?: boolean) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddAction
        */
        AddAction ($name: string, $type?: InputActionType, $binding?: string, $interactions?: string, $processors?: string, $groups?: string, $expectedControlLayout?: string) : InputAction
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddBinding
        */
        AddBinding ($path: string, $interactions?: string, $groups?: string, $action?: string, $processors?: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddBinding
        */
        AddBinding ($path: string, $action: InputAction, $interactions?: string, $groups?: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddBinding
        */
        AddBinding ($path: string, $action: System.Guid, $interactions?: string, $groups?: string) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddBinding
        */
        AddBinding ($binding: InputBinding) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.ChangeBinding
        * @methodSwap ChangeBinding_EBB7509C_BA746BE4
        */
        ChangeBinding ($index: int) : UnityEngine_InputSystem_InputActionSetupExtensions.BindingSyntax
    }

    interface InputActionAsset {

        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyParameterOverride<TObject, TValue>
        */
        ApplyParameterOverride<TObject,TValue> ($expr: System_Linq_Expressions.Expression$1<System.Func$2<TObject, TValue>>, $value: TValue, $bindingMask?: InputBinding) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.ApplyParameterOverride
        */
        ApplyParameterOverride ($name: string, $value: UnityEngine_InputSystem_Utilities.PrimitiveValue, $bindingMask?: InputBinding) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.RemoveAllBindingOverrides
        */
        RemoveAllBindingOverrides () : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.SaveBindingOverridesAsJson
        */
        SaveBindingOverridesAsJson () : string
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.LoadBindingOverridesFromJson
        */
        LoadBindingOverridesFromJson ($json: string, $removeExisting?: boolean) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddActionMap
        */
        AddActionMap ($name: string) : InputActionMap
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddActionMap
        */
        AddActionMap ($map: InputActionMap) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.RemoveActionMap
        */
        RemoveActionMap ($map: InputActionMap) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.RemoveActionMap
        */
        RemoveActionMap ($nameOrId: string) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.RemoveAction
        */
        RemoveAction ($nameOrId: string) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddControlScheme
        */
        AddControlScheme ($controlScheme: InputControlScheme) : void
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.AddControlScheme
        */
        AddControlScheme ($name: string) : UnityEngine_InputSystem_InputActionSetupExtensions.ControlSchemeSyntax
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.RemoveControlScheme
        */
        RemoveControlScheme ($name: string) : void
    }

    interface IInputActionCollection2 {

        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.RemoveAllBindingOverrides
        */
        RemoveAllBindingOverrides? () : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.SaveBindingOverridesAsJson
        */
        SaveBindingOverridesAsJson? () : string
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.LoadBindingOverridesFromJson
        */
        LoadBindingOverridesFromJson? ($json: string, $removeExisting?: boolean) : void
    }

    interface DefaultInputActions {

        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.RemoveAllBindingOverrides
        */
        RemoveAllBindingOverrides () : void
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.SaveBindingOverridesAsJson
        */
        SaveBindingOverridesAsJson () : string
        /**
        * @extension UnityEngine.InputSystem.InputActionRebindingExtensions.LoadBindingOverridesFromJson
        */
        LoadBindingOverridesFromJson ($json: string, $removeExisting?: boolean) : void
    }

    interface InputControlScheme {

        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.WithBindingGroup
        */
        WithBindingGroup ($bindingGroup: string) : InputControlScheme
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.WithDevice
        */
        WithDevice ($controlPath: string, $required: boolean) : InputControlScheme
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.WithRequiredDevice
        */
        WithRequiredDevice ($controlPath: string) : InputControlScheme
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.WithOptionalDevice
        */
        WithOptionalDevice ($controlPath: string) : InputControlScheme
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.OrWithRequiredDevice
        */
        OrWithRequiredDevice ($controlPath: string) : InputControlScheme
        /**
        * @extension UnityEngine.InputSystem.InputActionSetupExtensions.OrWithOptionalDevice
        */
        OrWithOptionalDevice ($controlPath: string) : InputControlScheme
    }

    interface InputControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface InputDevice {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface InputControl$1<TValue> {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEvent<TValue>
        */
        ReadValueFromEvent ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : TValue
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEvent<TValue>
        */
        ReadValueFromEvent ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: $Ref<TValue>) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadUnprocessedValueFromEvent<TValue>
        */
        ReadUnprocessedValueFromEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : TValue
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadUnprocessedValueFromEvent<TValue>
        */
        ReadUnprocessedValueFromEvent ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: $Ref<TValue>) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoState<TValue, TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        WriteValueIntoState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($value: TValue, $state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.QueueValueChange<TValue>
        */
        QueueValueChange ($value: TValue, $time?: double) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface Gamepad {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface Joystick {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface Keyboard {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface Mouse {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface Pointer {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface Pen {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface Sensor {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface Accelerometer {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface Gyroscope {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface GravitySensor {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface AttitudeSensor {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface LinearAccelerationSensor {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface MagneticFieldSensor {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface LightSensor {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface PressureSensor {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface ProximitySensor {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface HumiditySensor {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface AmbientTemperatureSensor {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface StepCounter {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface Touchscreen {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface TrackedDevice {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends InputControl>
        */
        FindInParentChain<TControl extends InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends InputControl>
        */
        FindControlsRecursive<TControl extends InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

    interface InputActionPhase {

        /**
        * @extension UnityEngine.InputSystem.InputExtensions.IsInProgress
        */
        IsInProgress () : boolean
    }

    interface TouchPhase {

        /**
        * @extension UnityEngine.InputSystem.InputExtensions.IsEndedOrCanceled
        */
        IsEndedOrCanceled () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputExtensions.IsActive
        */
        IsActive () : boolean
    }

    interface Key {

        /**
        * @extension UnityEngine.InputSystem.InputExtensions.IsModifierKey
        */
        IsModifierKey () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputExtensions.IsTextInputKey
        */
        IsTextInputKey () : boolean
    }

}

declare module 'System.Collections.Generic' {
    import * as System_Collections from 'System.Collections'
    import * as System from 'System'

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

        GetEnumerator? () : IEnumerator$1<T>
    }

    interface IEnumerator$1<T> extends System_Collections.IEnumerator, System.IDisposable {

        readonly Current? : T

    }

    interface IReadOnlyList$1<T> extends IReadOnlyCollection$1<T> {

        get_Item? ($index: int) : T
    }

    interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {

        readonly Count? : int

    }

    interface IList$1<T> extends ICollection$1<T> {

    }

    interface ICollection$1<T> extends IEnumerable$1<T> {

    }

    interface IComparer$1<T> {

        Compare? ($x: T, $y: T) : int
    }

    interface KeyValuePair$2<TKey,TValue> {

    }

    interface List$1<T> extends IList$1<T>, System_Collections.IList, IReadOnlyList$1<T> {

    }

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

    interface IEnumerator {

    }

    interface IList extends ICollection {

    }

    interface ICollection extends IEnumerable {

    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'
    import * as System_Reflection from 'System.Reflection'
    import * as System_Runtime_InteropServices from 'System.Runtime.InteropServices'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    interface IDisposable {

    }

    interface ICloneable {

    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IFormattable {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

    interface Guid extends IFormattable, ISpanFormattable, IComparable, IComparable$1<Guid>, IEquatable$1<Guid> {

    }

    interface IComparable$1<T> {

        CompareTo? ($other: T) : int
    }

    interface IEquatable$1<T> {

        Equals? ($other: T) : boolean
    }

    interface Char extends IComparable, IComparable$1<number>, IConvertible, IEquatable$1<number> {

    }

    interface Predicate$1<T> {
        (obj: T) : boolean; 
        Invoke?: (obj: T) => boolean;
    }

    interface MulticastDelegate {
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
    }
    var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }

    interface Delegate extends ICloneable, System_Runtime_Serialization.ISerializable {

    }

    interface Type extends System_Reflection.IReflect, System_Runtime_InteropServices._Type {

    }

    interface Nullable$1<T> {

    }

    interface Action$1<T> {
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
    }

    enum TypeCode {
        Empty = 0,
        Object = 1,
        DBNull = 2,
        Boolean = 3,
        Char = 4,
        SByte = 5,
        Byte = 6,
        Int16 = 7,
        UInt16 = 8,
        Int32 = 9,
        UInt32 = 10,
        Int64 = 11,
        UInt64 = 12,
        Single = 13,
        Double = 14,
        Decimal = 15,
        DateTime = 16,
        String = 18 
    }

    interface IFormatProvider {

    }

    interface DateTime extends IFormattable, ISpanFormattable, IComparable, IComparable$1<DateTime>, IConvertible, System_Runtime_Serialization.ISerializable, IEquatable$1<DateTime> {

    }

    interface Decimal extends IFormattable, ISpanFormattable, IComparable, System_Runtime_Serialization.IDeserializationCallback, IComparable$1<Decimal>, IConvertible, IEquatable$1<Decimal> {

    }

    interface Func$2<T,TResult> {
        (arg: T) : TResult; 
        Invoke?: (arg: T) => TResult;
    }

    interface Func$3<T1,T2,TResult> {
        (arg1: T1, arg2: T2) : TResult; 
        Invoke?: (arg1: T1, arg2: T2) => TResult;
    }

    interface Action$2<T1,T2> {
        (arg1: T1, arg2: T2) : void; 
        Invoke?: (arg1: T1, arg2: T2) => void;
    }

    interface Func$1<TResult> {
        () : TResult; 
        Invoke?: () => TResult;
    }

    interface IObservable$1<T> {

        Subscribe? ($observer: IObserver$1<T>) : IDisposable
    }

    interface IObserver$1<T> {

        OnNext? ($value: T) : void
        OnError? ($error: Exception) : void
        OnCompleted? () : void
    }

    interface Exception extends System_Runtime_InteropServices._Exception, System_Runtime_Serialization.ISerializable {

    }

    interface Version extends ICloneable, ISpanFormattable, IComparable, IComparable$1<Version>, IEquatable$1<Version> {

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

    interface Action {
        () : void; 
        Invoke?: () => void;
    }
    var Action: { new (func: () => void): Action; }

    interface Action$3<T1,T2,T3> {
        (arg1: T1, arg2: T2, arg3: T3) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => void;
    }

    interface IAsyncDisposable {

    }

    interface MarshalByRefObject {

    }

    interface Action$4<T1,T2,T3,T4> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void;
    }

    interface Func$4<T1,T2,T3,TResult> {
        (arg1: T1, arg2: T2, arg3: T3) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => TResult;
    }

    interface IObservable$1<T> {

        /**
        * @extension UnityEngine.InputSystem.Utilities.Observable.Where<T>
        */
        Where? ($predicate: Func$2<T, boolean>) : IObservable$1<TValue>
        /**
        * @extension UnityEngine.InputSystem.Utilities.Observable.Select<T, TResult>
        */
        Select?<TResult> ($filter: Func$2<T, TResult>) : IObservable$1<TResult>
        /**
        * @extension UnityEngine.InputSystem.Utilities.Observable.SelectMany<T, TResult>
        */
        SelectMany?<TResult> ($filter: Func$2<T, System_Collections_Generic.IEnumerable$1<TResult>>) : IObservable$1<TResult>
        /**
        * @extension UnityEngine.InputSystem.Utilities.Observable.Take<T>
        */
        Take? ($count: int) : IObservable$1<TValue>
        /**
        * @extension UnityEngine.InputSystem.Utilities.Observable.CallOnce<T>
        */
        CallOnce? ($action: Action$1<T>) : IDisposable
        /**
        * @extension UnityEngine.InputSystem.Utilities.Observable.Call<T>
        */
        Call? ($action: Action$1<T>) : IDisposable
    }

}

declare module 'UnityEngine.InputSystem.InputBinding' {

    enum DisplayStringOptions {
        DontUseShortDisplayNames = 1,
        DontOmitDevice = 2,
        DontIncludeInteractions = 4,
        IgnoreBindingOverrides = 8 
    }

}

declare module 'UnityEngine.InputSystem.LowLevel' {
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as Unity_Collections from 'Unity.Collections'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine from 'UnityEngine'
    import * as System_IO from 'System.IO'
    import * as UnityEngine_InputSystem_LowLevel_InputEventTrace from 'UnityEngine.InputSystem.LowLevel.InputEventTrace'
    import * as UnityEngine_InputSystem_LowLevel_InputStateHistory from 'UnityEngine.InputSystem.LowLevel.InputStateHistory'
    import * as UnityEngine_InputSystem_LowLevel_InputStateHistory$1 from 'UnityEngine.InputSystem.LowLevel.InputStateHistory$1'
    import * as UnityEngine_InputSystem_InputControlExtensions from 'UnityEngine.InputSystem.InputControlExtensions'

    interface IInputDeviceCommandInfo {

        readonly typeStatic? : UnityEngine_InputSystem_Utilities.FourCC

    }

    class InputStateBlock extends System.ValueType {

        public static InvalidOffset : uint
        public static AutomaticOffset : uint
        public static FormatInvalid : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatBit : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatSBit : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatInt : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatUInt : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatShort : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatUShort : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatByte : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatSByte : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatLong : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatULong : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatFloat : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatDouble : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatVector2 : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatVector3 : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatQuaternion : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatVector2Short : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatVector3Short : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatVector2Byte : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatVector3Byte : UnityEngine_InputSystem_Utilities.FourCC
        public static FormatPose : UnityEngine_InputSystem_Utilities.FourCC
        public get format(): UnityEngine_InputSystem_Utilities.FourCC;
        public set format(value: UnityEngine_InputSystem_Utilities.FourCC);
        public get byteOffset(): uint;
        public set byteOffset(value: uint);
        public get bitOffset(): uint;
        public set bitOffset(value: uint);
        public get sizeInBits(): uint;
        public set sizeInBits(value: uint);

        public static GetSizeOfPrimitiveFormatInBits ($type: UnityEngine_InputSystem_Utilities.FourCC) : int
        public static GetPrimitiveFormatFromType ($type: System.Type) : UnityEngine_InputSystem_Utilities.FourCC
    }

    class InputEventPtr extends System.ValueType implements System.IEquatable$1<InputEventPtr> {

        public get valid(): boolean;
        public get handled(): boolean;
        public set handled(value: boolean);
        public get id(): int;
        public set id(value: int);
        public get type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get sizeInBytes(): uint;
        public get deviceId(): int;
        public set deviceId(value: int);
        public get time(): double;
        public set time(value: double);

        public IsA<TOtherEvent extends IInputEventTypeInfo> () : boolean
        public Next () : InputEventPtr
        public ToString () : string
        public Equals ($other: InputEventPtr) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public static op_Equality ($left: InputEventPtr, $right: InputEventPtr) : boolean
        public static op_Inequality ($left: InputEventPtr, $right: InputEventPtr) : boolean
    }

    interface IInputEventTypeInfo {

        readonly typeStatic? : UnityEngine_InputSystem_Utilities.FourCC

    }

    interface IInputStateTypeInfo {

        readonly format? : UnityEngine_InputSystem_Utilities.FourCC

    }

    class InputEventListener extends System.ValueType implements System.IObservable$1<InputEventPtr> {

        public Subscribe ($observer: System.IObserver$1<InputEventPtr>) : System.IDisposable
        public static op_Addition ($_: InputEventListener, $callback: System.Action$2<InputEventPtr, UnityEngine_InputSystem.InputDevice>) : InputEventListener
        public static op_Subtraction ($_: InputEventListener, $callback: System.Action$2<InputEventPtr, UnityEngine_InputSystem.InputDevice>) : InputEventListener
    }

    class InputMetrics extends System.ValueType {

        public get maxNumDevices(): int;
        public set maxNumDevices(value: int);
        public get currentNumDevices(): int;
        public set currentNumDevices(value: int);
        public get maxStateSizeInBytes(): int;
        public set maxStateSizeInBytes(value: int);
        public get currentStateSizeInBytes(): int;
        public set currentStateSizeInBytes(value: int);
        public get currentControlCount(): int;
        public set currentControlCount(value: int);
        public get currentLayoutCount(): int;
        public set currentLayoutCount(value: int);
        public get totalEventBytes(): int;
        public set totalEventBytes(value: int);
        public get totalEventCount(): int;
        public set totalEventCount(value: int);
        public get totalUpdateCount(): int;
        public set totalUpdateCount(value: int);
        public get totalEventProcessingTime(): double;
        public set totalEventProcessingTime(value: double);
        public get totalEventLagTime(): double;
        public set totalEventLagTime(value: double);
        public get averageEventBytesPerFrame(): float;
        public get averageProcessingTimePerEvent(): double;
        public get averageLagTimePerEvent(): double;

    }

    interface InputDeviceExecuteCommandDelegate {
        (command: $Ref<InputDeviceCommand>) : bigint; 
        Invoke?: (command: $Ref<InputDeviceCommand>) => bigint;
    }
    var InputDeviceExecuteCommandDelegate: { new (func: (command: $Ref<InputDeviceCommand>) => bigint): InputDeviceExecuteCommandDelegate; }

    class InputDeviceCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public static BaseCommandSize : int
        public static GenericFailure : bigint
        public static GenericSuccess : bigint
        public type : UnityEngine_InputSystem_Utilities.FourCC
        public sizeInBytes : int
        public get payloadSizeInBytes(): int;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public constructor ($type: UnityEngine_InputSystem_Utilities.FourCC, $sizeInBytes?: int)
        public static AllocateNative ($type: UnityEngine_InputSystem_Utilities.FourCC, $payloadSize: int) : Unity_Collections.NativeArray$1<byte>
    }

    interface ITextInputReceiver {

        OnTextInput? ($character: number) : void
        OnIMECompositionChanged? ($compositionString: IMECompositionString) : void
    }

    class IMECompositionString extends System.ValueType implements System_Collections_Generic.IEnumerable$1<number> {

        public get Count(): int;

        public constructor ($characters: string)
        public ToString () : string
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<number>
        public get_Item ($index: int) : number
    }

    interface IInputStateCallbackReceiver {

        OnNextUpdate? () : void
        OnStateEvent? ($eventPtr: InputEventPtr) : void
        GetStateOffsetForEvent? ($control: UnityEngine_InputSystem.InputControl, $eventPtr: InputEventPtr, $offset: $Ref<uint>) : boolean
    }

    class TouchState extends System.ValueType implements IInputStateTypeInfo {

        public touchId : int
        public position : UnityEngine.Vector2
        public delta : UnityEngine.Vector2
        public pressure : float
        public radius : UnityEngine.Vector2
        public phaseId : byte
        public tapCount : byte
        public displayIndex : byte
        public flags : byte
        public startTime : double
        public startPosition : UnityEngine.Vector2
        public static get Format(): UnityEngine_InputSystem_Utilities.FourCC;
        public get phase(): UnityEngine_InputSystem.TouchPhase;
        public set phase(value: UnityEngine_InputSystem.TouchPhase);
        public get isNoneEndedOrCanceled(): boolean;
        public get isInProgress(): boolean;
        public get isPrimaryTouch(): boolean;
        public set isPrimaryTouch(value: boolean);
        public get isIndirectTouch(): boolean;
        public set isIndirectTouch(value: boolean);
        public get isTap(): boolean;
        public set isTap(value: boolean);
        public get format(): UnityEngine_InputSystem_Utilities.FourCC;

        public ToString () : string
    }

    interface IInputStateChangeMonitor {

        NotifyControlStateChanged? ($control: UnityEngine_InputSystem.InputControl, $time: double, $eventPtr: InputEventPtr, $monitorIndex: bigint) : void
        NotifyTimerExpired? ($control: UnityEngine_InputSystem.InputControl, $time: double, $monitorIndex: bigint, $timerIndex: int) : void
    }

    class DisableDeviceCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create () : DisableDeviceCommand
    }

    class EnableDeviceCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create () : EnableDeviceCommand
    }

    class EnableIMECompositionCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get imeEnabled(): boolean;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create ($enabled: boolean) : EnableIMECompositionCommand
    }

    class InitiateUserAccountPairingCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create () : InitiateUserAccountPairingCommand
    }

    class QueryCanRunInBackground extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public canRunInBackground : boolean
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create () : QueryCanRunInBackground
    }

    class QueryDimensionsCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public outDimensions : UnityEngine.Vector2
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create () : QueryDimensionsCommand
    }

    class QueryEnabledStateCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public isEnabled : boolean
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create () : QueryEnabledStateCommand
    }

    class QueryKeyNameCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public scanOrKeyCode : int
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public ReadKeyName () : string
        public static Create ($key: UnityEngine_InputSystem.Key) : QueryKeyNameCommand
    }

    class QueryKeyboardLayoutCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public ReadLayoutName () : string
        public WriteLayoutName ($name: string) : void
        public static Create () : QueryKeyboardLayoutCommand
    }

    class QueryPairedUserAccountCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public handle : bigint
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get id(): string;
        public set id(value: string);
        public get name(): string;
        public set name(value: string);
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create () : QueryPairedUserAccountCommand
    }

    class RequestResetCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create () : RequestResetCommand
    }

    class RequestSyncCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create () : RequestSyncCommand
    }

    class SetIMECursorPositionCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get position(): UnityEngine.Vector2;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create ($cursorPosition: UnityEngine.Vector2) : SetIMECursorPositionCommand
    }

    class SetSamplingFrequencyCommand extends System.ValueType implements IInputDeviceCommandInfo {

        public baseCommand : InputDeviceCommand
        public frequency : float
        public static get Type(): UnityEngine_InputSystem_Utilities.FourCC;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create ($frequency: float) : SetSamplingFrequencyCommand
    }

    class GamepadState extends System.ValueType implements IInputStateTypeInfo {

        public buttons : uint
        public leftStick : UnityEngine.Vector2
        public rightStick : UnityEngine.Vector2
        public leftTrigger : float
        public rightTrigger : float
        public static get Format(): UnityEngine_InputSystem_Utilities.FourCC;
        public get format(): UnityEngine_InputSystem_Utilities.FourCC;

        public constructor (...buttons: GamepadButton[])
        public WithButton ($button: GamepadButton, $value?: boolean) : GamepadState
    }

    enum GamepadButton {
        DpadUp = 0,
        DpadDown = 1,
        DpadLeft = 2,
        DpadRight = 3,
        North = 4,
        East = 5,
        South = 6,
        West = 7,
        LeftStick = 8,
        RightStick = 9,
        LeftShoulder = 10,
        RightShoulder = 11,
        Start = 12,
        Select = 13,
        LeftTrigger = 32,
        RightTrigger = 33,
        X = 7,
        Y = 4,
        A = 6,
        B = 5,
        Cross = 6,
        Square = 7,
        Triangle = 4,
        Circle = 5 
    }

    interface IInputUpdateCallbackReceiver {

        OnUpdate? () : void
    }

    class KeyboardState extends System.ValueType implements IInputStateTypeInfo {

        public static get Format(): UnityEngine_InputSystem_Utilities.FourCC;
        public get format(): UnityEngine_InputSystem_Utilities.FourCC;

        public constructor (...pressedKeys: UnityEngine_InputSystem.Key[])
        public Set ($key: UnityEngine_InputSystem.Key, $state: boolean) : void
        public Press ($key: UnityEngine_InputSystem.Key) : void
        public Release ($key: UnityEngine_InputSystem.Key) : void
    }

    class MouseState extends System.ValueType implements IInputStateTypeInfo {

        public position : UnityEngine.Vector2
        public delta : UnityEngine.Vector2
        public scroll : UnityEngine.Vector2
        public buttons : ushort
        public displayIndex : ushort
        public clickCount : ushort
        public static get Format(): UnityEngine_InputSystem_Utilities.FourCC;
        public get format(): UnityEngine_InputSystem_Utilities.FourCC;

        public WithButton ($button: MouseButton, $state?: boolean) : MouseState
    }

    enum MouseButton {
        Left = 0,
        Right = 1,
        Middle = 2,
        Forward = 3,
        Back = 4 
    }

    class PenState extends System.ValueType implements IInputStateTypeInfo {

        public position : UnityEngine.Vector2
        public delta : UnityEngine.Vector2
        public tilt : UnityEngine.Vector2
        public pressure : float
        public twist : float
        public buttons : ushort
        public static get Format(): UnityEngine_InputSystem_Utilities.FourCC;
        public get format(): UnityEngine_InputSystem_Utilities.FourCC;

        public WithButton ($button: UnityEngine_InputSystem.PenButton, $state?: boolean) : PenState
    }

    class DeltaStateEvent extends System.ValueType implements IInputEventTypeInfo {

        public static Type : int
        public baseEvent : InputEvent
        public stateFormat : UnityEngine_InputSystem_Utilities.FourCC
        public stateOffset : uint
        public get deltaStateSizeInBytes(): uint;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public ToEventPtr () : InputEventPtr
        public static From ($control: UnityEngine_InputSystem.InputControl, $eventPtr: $Ref<InputEventPtr>, $allocator?: Unity_Collections.Allocator) : Unity_Collections.NativeArray$1<byte>
    }

    class InputEvent extends System.ValueType {

        public static InvalidEventId : int
        public get type(): UnityEngine_InputSystem_Utilities.FourCC;
        public set type(value: UnityEngine_InputSystem_Utilities.FourCC);
        public get sizeInBytes(): uint;
        public set sizeInBytes(value: uint);
        public get eventId(): int;
        public set eventId(value: int);
        public get deviceId(): int;
        public set deviceId(value: int);
        public get time(): double;
        public set time(value: double);
        public get handled(): boolean;
        public set handled(value: boolean);

        public constructor ($type: UnityEngine_InputSystem_Utilities.FourCC, $sizeInBytes: int, $deviceId: int, $time?: double)
        public ToString () : string
    }

    class DeviceConfigurationEvent extends System.ValueType implements IInputEventTypeInfo {

        public static Type : int
        public baseEvent : InputEvent
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public ToEventPtr () : InputEventPtr
        public static Create ($deviceId: int, $time: double) : DeviceConfigurationEvent
    }

    class DeviceRemoveEvent extends System.ValueType implements IInputEventTypeInfo {

        public static Type : int
        public baseEvent : InputEvent
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public ToEventPtr () : InputEventPtr
        public static Create ($deviceId: int, $time?: double) : DeviceRemoveEvent
    }

    class DeviceResetEvent extends System.ValueType implements IInputEventTypeInfo {

        public static Type : int
        public baseEvent : InputEvent
        public hardReset : boolean
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create ($deviceId: int, $hardReset?: boolean, $time?: double) : DeviceResetEvent
    }

    class IMECompositionEvent extends System.ValueType implements IInputEventTypeInfo {

        public static Type : int
        public baseEvent : InputEvent
        public compositionString : IMECompositionString
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public static Create ($deviceId: int, $compositionString: string, $time: double) : IMECompositionEvent
    }

    class InputEventBuffer extends System.ValueType implements System.ICloneable, System_Collections_Generic.IEnumerable$1<InputEventPtr>, System.IDisposable {

        public static BufferSizeUnknown : bigint
        public get eventCount(): int;
        public get sizeInBytes(): bigint;
        public get capacityInBytes(): bigint;
        public get data(): Unity_Collections.NativeArray$1<byte>;
        public get bufferPtr(): InputEventPtr;

        public constructor ($buffer: Unity_Collections.NativeArray$1<byte>, $eventCount: int, $sizeInBytes?: int, $transferNativeArrayOwnership?: boolean)
        public Reset () : void
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<InputEventPtr>
        public Dispose () : void
        public Clone () : InputEventBuffer
    }

    class InputEventTrace extends System.Object implements System_Collections_Generic.IEnumerable$1<InputEventPtr>, System.IDisposable {

        public static get FrameMarkerEvent(): UnityEngine_InputSystem_Utilities.FourCC;
        public get deviceId(): int;
        public set deviceId(value: int);
        public get enabled(): boolean;
        public get recordFrameMarkers(): boolean;
        public set recordFrameMarkers(value: boolean);
        public get eventCount(): bigint;
        public get totalEventSizeInBytes(): bigint;
        public get allocatedSizeInBytes(): bigint;
        public get maxSizeInBytes(): bigint;
        public get deviceInfos(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_LowLevel_InputEventTrace.DeviceInfo>;
        public get onFilterEvent(): System.Func$3<InputEventPtr, UnityEngine_InputSystem.InputDevice, boolean>;
        public set onFilterEvent(value: System.Func$3<InputEventPtr, UnityEngine_InputSystem.InputDevice, boolean>);

        public constructor ($device: UnityEngine_InputSystem.InputDevice, $bufferSizeInBytes?: bigint, $growBuffer?: boolean, $maxBufferSizeInBytes?: bigint, $growIncrementSizeInBytes?: bigint)
        public constructor ($bufferSizeInBytes?: bigint, $growBuffer?: boolean, $maxBufferSizeInBytes?: bigint, $growIncrementSizeInBytes?: bigint)
        public WriteTo ($filePath: string) : void
        public WriteTo ($stream: System_IO.Stream) : void
        public ReadFrom ($filePath: string) : void
        public ReadFrom ($stream: System_IO.Stream) : void
        public static LoadFrom ($filePath: string) : InputEventTrace
        public static LoadFrom ($stream: System_IO.Stream) : InputEventTrace
        public Replay () : UnityEngine_InputSystem_LowLevel_InputEventTrace.ReplayController
        public Resize ($newBufferSize: bigint, $newMaxBufferSize?: bigint) : boolean
        public Clear () : void
        public Enable () : void
        public Disable () : void
        public GetNextEvent ($current: $Ref<InputEventPtr>) : boolean
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<InputEventPtr>
        public Dispose () : void
        public add_onEvent ($value: System.Action$1<InputEventPtr>) : void
        public remove_onEvent ($value: System.Action$1<InputEventPtr>) : void
    }

    class StateEvent extends System.ValueType implements IInputEventTypeInfo {

        public static Type : int
        public baseEvent : InputEvent
        public stateFormat : UnityEngine_InputSystem_Utilities.FourCC
        public get stateSizeInBytes(): uint;
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        public ToEventPtr () : InputEventPtr
        public GetState<TState extends IInputStateTypeInfo> () : TState
        public static GetState<TState extends IInputStateTypeInfo> ($ptr: InputEventPtr) : TState
        public static GetEventSizeWithPayload<TState> () : int
        public static From ($device: UnityEngine_InputSystem.InputDevice, $eventPtr: $Ref<InputEventPtr>, $allocator?: Unity_Collections.Allocator) : Unity_Collections.NativeArray$1<byte>
        public static FromDefaultStateFor ($device: UnityEngine_InputSystem.InputDevice, $eventPtr: $Ref<InputEventPtr>, $allocator?: Unity_Collections.Allocator) : Unity_Collections.NativeArray$1<byte>
    }

    class TextEvent extends System.ValueType implements IInputEventTypeInfo {

        public static Type : int
        public baseEvent : InputEvent
        public character : int
        public get typeStatic(): UnityEngine_InputSystem_Utilities.FourCC;

        /**
        * @methodSwap Create_EBB7509C_H4DBA8DA5
        */
        public static Create ($deviceId: int, $character: number, $time?: double) : TextEvent
        /**
        * @methodSwap Create_EBB7509C_FB15C3E7
        */
        public static Create ($deviceId: int, $character: int, $time?: double) : TextEvent
    }

    enum InputUpdateType {
        None = 0,
        Dynamic = 1,
        Fixed = 2,
        BeforeRender = 4,
        Editor = 8,
        Manual = 16,
        Default = 11 
    }

    class InputState {

        public static get currentUpdateType(): InputUpdateType;
        public static get updateCount(): uint;
        public static get currentTime(): double;

        public static Change ($device: UnityEngine_InputSystem.InputDevice, $eventPtr: InputEventPtr, $updateType?: InputUpdateType) : void
        public static Change<TState> ($control: UnityEngine_InputSystem.InputControl, $state: TState, $updateType?: InputUpdateType, $eventPtr?: InputEventPtr) : void
        public static Change<TState> ($control: UnityEngine_InputSystem.InputControl, $state: $Ref<TState>, $updateType?: InputUpdateType, $eventPtr?: InputEventPtr) : void
        public static IsIntegerFormat ($format: UnityEngine_InputSystem_Utilities.FourCC) : boolean
        /**
        * @methodSwap AddChangeMonitor_EBB7509C_A10C7276
        */
        public static AddChangeMonitor ($control: UnityEngine_InputSystem.InputControl, $monitor: IInputStateChangeMonitor, $monitorIndex?: bigint, $groupIndex?: uint) : void
        /**
        * @methodSwap AddChangeMonitor_EBB7509C_C74643EA
        */
        public static AddChangeMonitor ($control: UnityEngine_InputSystem.InputControl, $valueChangeCallback: System.Action$4<UnityEngine_InputSystem.InputControl, double, InputEventPtr, bigint>, $monitorIndex?: int, $timerExpiredCallback?: System.Action$4<UnityEngine_InputSystem.InputControl, double, bigint, int>) : IInputStateChangeMonitor
        public static RemoveChangeMonitor ($control: UnityEngine_InputSystem.InputControl, $monitor: IInputStateChangeMonitor, $monitorIndex?: bigint) : void
        public static AddChangeMonitorTimeout ($control: UnityEngine_InputSystem.InputControl, $monitor: IInputStateChangeMonitor, $time: double, $monitorIndex?: bigint, $timerIndex?: int) : void
        public static RemoveChangeMonitorTimeout ($monitor: IInputStateChangeMonitor, $monitorIndex?: bigint, $timerIndex?: int) : void
        public static add_onChange ($value: System.Action$2<UnityEngine_InputSystem.InputDevice, InputEventPtr>) : void
        public static remove_onChange ($value: System.Action$2<UnityEngine_InputSystem.InputDevice, InputEventPtr>) : void
    }

    class InputStateHistory extends System.Object implements IInputStateChangeMonitor, System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem_LowLevel_InputStateHistory.Record>, System.IDisposable {

        public get Count(): int;
        public get version(): uint;
        public get historyDepth(): int;
        public set historyDepth(value: int);
        public get extraMemoryPerRecord(): int;
        public set extraMemoryPerRecord(value: int);
        public get updateMask(): InputUpdateType;
        public set updateMask(value: InputUpdateType);
        public get controls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem.InputControl>;
        public get onRecordAdded(): System.Action$1<UnityEngine_InputSystem_LowLevel_InputStateHistory.Record>;
        public set onRecordAdded(value: System.Action$1<UnityEngine_InputSystem_LowLevel_InputStateHistory.Record>);
        public get onShouldRecordStateChange(): System.Func$4<UnityEngine_InputSystem.InputControl, double, InputEventPtr, boolean>;
        public set onShouldRecordStateChange(value: System.Func$4<UnityEngine_InputSystem.InputControl, double, InputEventPtr, boolean>);

        public constructor ($maxStateSizeInBytes: int)
        public constructor ($path: string)
        public constructor ($control: UnityEngine_InputSystem.InputControl)
        public constructor ($controls: System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem.InputControl>)
        public Clear () : void
        public AddRecord ($record: UnityEngine_InputSystem_LowLevel_InputStateHistory.Record) : UnityEngine_InputSystem_LowLevel_InputStateHistory.Record
        public StartRecording () : void
        public StopRecording () : void
        public RecordStateChange ($control: UnityEngine_InputSystem.InputControl, $eventPtr: InputEventPtr) : UnityEngine_InputSystem_LowLevel_InputStateHistory.Record
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<UnityEngine_InputSystem_LowLevel_InputStateHistory.Record>
        public Dispose () : void
        public get_Item ($index: int) : UnityEngine_InputSystem_LowLevel_InputStateHistory.Record
        public set_Item ($index: int, $value: UnityEngine_InputSystem_LowLevel_InputStateHistory.Record) : void
    }

    class InputStateHistory$1<TValue> extends InputStateHistory implements System_Collections_Generic.IReadOnlyList$1<UnityEngine_InputSystem_LowLevel_InputStateHistory$1.Record<TValue>> {

        public get Count(): int;
        public get version(): uint;
        public get historyDepth(): int;
        public set historyDepth(value: int);
        public get extraMemoryPerRecord(): int;
        public set extraMemoryPerRecord(value: int);
        public get updateMask(): InputUpdateType;
        public set updateMask(value: InputUpdateType);
        public get controls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem.InputControl>;
        public get onRecordAdded(): System.Action$1<UnityEngine_InputSystem_LowLevel_InputStateHistory.Record>;
        public set onRecordAdded(value: System.Action$1<UnityEngine_InputSystem_LowLevel_InputStateHistory.Record>);
        public get onShouldRecordStateChange(): System.Func$4<UnityEngine_InputSystem.InputControl, double, InputEventPtr, boolean>;
        public set onShouldRecordStateChange(value: System.Func$4<UnityEngine_InputSystem.InputControl, double, InputEventPtr, boolean>);

        public constructor ($maxStateSizeInBytes?: System.Nullable$1<int>)
        public constructor ($control: UnityEngine_InputSystem.InputControl$1<TValue>)
        public constructor ($path: string)
        public AddRecord ($record: UnityEngine_InputSystem_LowLevel_InputStateHistory$1.Record<TValue>) : UnityEngine_InputSystem_LowLevel_InputStateHistory$1.Record<TValue>
        public RecordStateChange ($control: UnityEngine_InputSystem.InputControl$1<TValue>, $value: TValue, $time?: double) : UnityEngine_InputSystem_LowLevel_InputStateHistory$1.Record<TValue>
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<UnityEngine_InputSystem_LowLevel_InputStateHistory$1.Record<TValue>>
        public get_Item ($index: int) : UnityEngine_InputSystem_LowLevel_InputStateHistory$1.Record<TValue>
        public set_Item ($index: int, $value: UnityEngine_InputSystem_LowLevel_InputStateHistory$1.Record<TValue>) : void
        public constructor ($maxStateSizeInBytes: int)
        public constructor ($control: UnityEngine_InputSystem.InputControl)
        public constructor ($controls: System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem.InputControl>)
        public AddRecord ($record: UnityEngine_InputSystem_LowLevel_InputStateHistory.Record) : UnityEngine_InputSystem_LowLevel_InputStateHistory.Record
        public RecordStateChange ($control: UnityEngine_InputSystem.InputControl, $eventPtr: InputEventPtr) : UnityEngine_InputSystem_LowLevel_InputStateHistory.Record
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<UnityEngine_InputSystem_LowLevel_InputStateHistory.Record>
        public get_Item ($index: int) : UnityEngine_InputSystem_LowLevel_InputStateHistory.Record
        public set_Item ($index: int, $value: UnityEngine_InputSystem_LowLevel_InputStateHistory.Record) : void
        public [Symbol.iterator]() : IterableIterator<UnityEngine_InputSystem_LowLevel_InputStateHistory.Record>
    }

    interface InputEventPtr {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.EnumerateControls
        */
        EnumerateControls ($flags: UnityEngine_InputSystem_InputControlExtensions.Enumerate, $device?: UnityEngine_InputSystem.InputDevice, $magnitudeThreshold?: float) : UnityEngine_InputSystem_InputControlExtensions.InputEventControlCollection
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.EnumerateChangedControls
        */
        EnumerateChangedControls ($device?: UnityEngine_InputSystem.InputDevice, $magnitudeThreshold?: float) : UnityEngine_InputSystem_InputControlExtensions.InputEventControlCollection
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasButtonPress
        */
        HasButtonPress ($magnitude?: float, $buttonControlsOnly?: boolean) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.GetFirstButtonPressOrNull
        */
        GetFirstButtonPressOrNull ($magnitude?: float, $buttonControlsOnly?: boolean) : UnityEngine_InputSystem.InputControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.GetAllButtonPresses
        */
        GetAllButtonPresses ($magnitude?: float, $buttonControlsOnly?: boolean) : System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem.InputControl>
    }

    interface InputEventListener {

        /**
        * @extension UnityEngine.InputSystem.Utilities.Observable.ForDevice
        */
        ForDevice ($device: UnityEngine_InputSystem.InputDevice) : System.IObservable$1<InputEventPtr>
        /**
        * @extension UnityEngine.InputSystem.Utilities.Observable.ForDevice<TDevice extends UnityEngine_InputSystem.InputDevice>
        */
        ForDevice<TDevice extends UnityEngine_InputSystem.InputDevice> () : System.IObservable$1<InputEventPtr>
    }

}

declare module 'UnityEngine.InputSystem.Utilities' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_Utilities_ReadOnlyArray$1 from 'UnityEngine.InputSystem.Utilities.ReadOnlyArray$1'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine_InputSystem_InputAction from 'UnityEngine.InputSystem.InputAction'
    import * as UnityEngine_InputSystem_Utilities_InputActionTrace from 'UnityEngine.InputSystem.Utilities.InputActionTrace'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as UnityEngine from 'UnityEngine'

    class FourCC extends System.ValueType implements System.IEquatable$1<FourCC> {

        public constructor ($code: int)
        public constructor ($a: number, $b?: number, $c?: number, $d?: number)
        public constructor ($str: string)
        public ToString () : string
        public Equals ($other: FourCC) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public static FromInt32 ($i: int) : FourCC
        public static ToInt32 ($fourCC: FourCC) : int
        public static op_Implicit ($fourCC: FourCC) : int
        public static op_Implicit ($i: int) : FourCC
        public static op_Equality ($left: FourCC, $right: FourCC) : boolean
        public static op_Inequality ($left: FourCC, $right: FourCC) : boolean
    }

    class ReadOnlyArray$1<TValue> extends System.ValueType implements System_Collections_Generic.IReadOnlyList$1<TValue> {

        public get Count(): int;

        public constructor ($array: TValue[])
        public constructor ($array: TValue[], $index: int, $length: int)
        public ToArray () : TValue[]
        public IndexOf ($predicate: System.Predicate$1<TValue>) : int
        public GetEnumerator () : UnityEngine_InputSystem_Utilities_ReadOnlyArray$1.Enumerator<TValue>
        public get_Item ($index: int) : TValue
        public [Symbol.iterator]() : IterableIterator<TValue>
    }

    class InternedString extends System.ValueType implements System.IComparable$1<InternedString>, System.IEquatable$1<InternedString> {

        public get length(): int;

        public constructor ($text: string)
        public IsEmpty () : boolean
        public ToLower () : string
        public Equals ($obj: any) : boolean
        public Equals ($other: InternedString) : boolean
        public CompareTo ($other: InternedString) : int
        public GetHashCode () : int
        public ToString () : string
        public static op_Equality ($a: InternedString, $b: InternedString) : boolean
        public static op_Inequality ($a: InternedString, $b: InternedString) : boolean
        public static op_Equality ($a: InternedString, $b: string) : boolean
        public static op_Inequality ($a: InternedString, $b: string) : boolean
        public static op_Equality ($a: string, $b: InternedString) : boolean
        public static op_Inequality ($a: string, $b: InternedString) : boolean
        public static op_LessThan ($left: InternedString, $right: InternedString) : boolean
        public static op_GreaterThan ($left: InternedString, $right: InternedString) : boolean
        public static op_Implicit ($str: InternedString) : string
    }

    class PrimitiveValue extends System.ValueType implements System.IConvertible, System.IEquatable$1<PrimitiveValue> {

        public get type(): System.TypeCode;
        public get isEmpty(): boolean;

        public constructor ($value: boolean)
        public constructor ($value: number)
        public constructor ($value: byte)
        public constructor ($value: sbyte)
        public constructor ($value: short)
        public constructor ($value: ushort)
        public constructor ($value: int)
        public constructor ($value: uint)
        public constructor ($value: bigint)
        public constructor ($value: float)
        public constructor ($value: double)
        public ConvertTo ($type: System.TypeCode) : PrimitiveValue
        public Equals ($other: PrimitiveValue) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
        public static FromString ($value: string) : PrimitiveValue
        public GetTypeCode () : System.TypeCode
        public ToBoolean ($provider?: System.IFormatProvider) : boolean
        public ToByte ($provider?: System.IFormatProvider) : byte
        public ToChar ($provider?: System.IFormatProvider) : number
        public ToDateTime ($provider?: System.IFormatProvider) : System.DateTime
        public ToDecimal ($provider?: System.IFormatProvider) : System.Decimal
        public ToDouble ($provider?: System.IFormatProvider) : double
        public ToInt16 ($provider?: System.IFormatProvider) : short
        public ToInt32 ($provider?: System.IFormatProvider) : int
        public ToInt64 ($provider?: System.IFormatProvider) : bigint
        public ToSByte ($provider?: System.IFormatProvider) : sbyte
        public ToSingle ($provider?: System.IFormatProvider) : float
        public ToString ($provider: System.IFormatProvider) : string
        public ToType ($conversionType: System.Type, $provider: System.IFormatProvider) : any
        public ToUInt16 ($provider?: System.IFormatProvider) : ushort
        public ToUInt32 ($provider?: System.IFormatProvider) : uint
        public ToUInt64 ($provider?: System.IFormatProvider) : bigint
        public ToObject () : any
        public static From<TValue> ($value: TValue) : PrimitiveValue
        public static FromObject ($value: any) : PrimitiveValue
        public static FromBoolean ($value: boolean) : PrimitiveValue
        public static FromChar ($value: number) : PrimitiveValue
        public static FromByte ($value: byte) : PrimitiveValue
        public static FromSByte ($value: sbyte) : PrimitiveValue
        public static FromInt16 ($value: short) : PrimitiveValue
        public static FromUInt16 ($value: ushort) : PrimitiveValue
        public static FromInt32 ($value: int) : PrimitiveValue
        public static FromUInt32 ($value: uint) : PrimitiveValue
        public static FromInt64 ($value: bigint) : PrimitiveValue
        public static FromUInt64 ($value: bigint) : PrimitiveValue
        public static FromSingle ($value: float) : PrimitiveValue
        public static FromDouble ($value: double) : PrimitiveValue
        public static op_Equality ($left: PrimitiveValue, $right: PrimitiveValue) : boolean
        public static op_Inequality ($left: PrimitiveValue, $right: PrimitiveValue) : boolean
        public static op_Implicit ($value: boolean) : PrimitiveValue
        public static op_Implicit ($value: number) : PrimitiveValue
        public static op_Implicit ($value: byte) : PrimitiveValue
        public static op_Implicit ($value: sbyte) : PrimitiveValue
        public static op_Implicit ($value: short) : PrimitiveValue
        public static op_Implicit ($value: ushort) : PrimitiveValue
        public static op_Implicit ($value: int) : PrimitiveValue
        public static op_Implicit ($value: uint) : PrimitiveValue
        public static op_Implicit ($value: bigint) : PrimitiveValue
        public static op_Implicit ($value: float) : PrimitiveValue
        public static op_Implicit ($value: double) : PrimitiveValue
    }

    class NamedValue extends System.ValueType implements System.IEquatable$1<NamedValue> {

        public static Separator : string
        public get name(): string;
        public set name(value: string);
        public get value(): PrimitiveValue;
        public set value(value: PrimitiveValue);
        public get type(): System.TypeCode;

        public ConvertTo ($type: System.TypeCode) : NamedValue
        public static From<TValue> ($name: string, $value: TValue) : NamedValue
        public ToString () : string
        public Equals ($other: NamedValue) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public static ParseMultiple ($parameterString: string) : NamedValue[]
        public static Parse ($str: string) : NamedValue
        public ApplyToObject ($instance: any) : void
        public static ApplyAllToObject<TParameterList extends System_Collections_Generic.IEnumerable$1<NamedValue>> ($instance: any, $parameters: TParameterList) : void
        public static op_Equality ($left: NamedValue, $right: NamedValue) : boolean
        public static op_Inequality ($left: NamedValue, $right: NamedValue) : boolean
    }

    class NameAndParameters extends System.ValueType {

        public get name(): string;
        public set name(value: string);
        public get parameters(): ReadOnlyArray$1<NamedValue>;
        public set parameters(value: ReadOnlyArray$1<NamedValue>);

        public ToString () : string
        public static ParseMultiple ($text: string) : System_Collections_Generic.IEnumerable$1<NameAndParameters>
        public static Parse ($text: string) : NameAndParameters
    }

    class InputActionTrace extends System.Object implements System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem_Utilities_InputActionTrace.ActionEventPtr>, System.IDisposable {

        public get buffer(): UnityEngine_InputSystem_LowLevel.InputEventBuffer;
        public get count(): int;

        public constructor ()
        public constructor ($action: UnityEngine_InputSystem.InputAction)
        public constructor ($actionMap: UnityEngine_InputSystem.InputActionMap)
        public SubscribeToAll () : void
        public UnsubscribeFromAll () : void
        public SubscribeTo ($action: UnityEngine_InputSystem.InputAction) : void
        public SubscribeTo ($actionMap: UnityEngine_InputSystem.InputActionMap) : void
        public UnsubscribeFrom ($action: UnityEngine_InputSystem.InputAction) : void
        public UnsubscribeFrom ($actionMap: UnityEngine_InputSystem.InputActionMap) : void
        public RecordAction ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        public Clear () : void
        public ToString () : string
        public Dispose () : void
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<UnityEngine_InputSystem_Utilities_InputActionTrace.ActionEventPtr>
    }

    class Vector2MagnitudeComparer extends System.ValueType implements System_Collections_Generic.IComparer$1<UnityEngine.Vector2> {

        public Compare ($x: UnityEngine.Vector2, $y: UnityEngine.Vector2) : int
    }

    class Vector3MagnitudeComparer extends System.ValueType implements System_Collections_Generic.IComparer$1<UnityEngine.Vector3> {

        public Compare ($x: UnityEngine.Vector3, $y: UnityEngine.Vector3) : int
    }

    class Observable {

        public static Where<TValue> ($source: System.IObservable$1<TValue>, $predicate: System.Func$2<TValue, boolean>) : System.IObservable$1<TValue>
        public static Select<TSource,TResult> ($source: System.IObservable$1<TSource>, $filter: System.Func$2<TSource, TResult>) : System.IObservable$1<TResult>
        public static SelectMany<TSource,TResult> ($source: System.IObservable$1<TSource>, $filter: System.Func$2<TSource, System_Collections_Generic.IEnumerable$1<TResult>>) : System.IObservable$1<TResult>
        /**
        * @methodSwap Take_EBB7509C_AFFE22A2
        */
        public static Take<TValue> ($source: System.IObservable$1<TValue>, $count: int) : System.IObservable$1<TValue>
        public static ForDevice ($source: System.IObservable$1<UnityEngine_InputSystem_LowLevel.InputEventPtr>, $device: UnityEngine_InputSystem.InputDevice) : System.IObservable$1<UnityEngine_InputSystem_LowLevel.InputEventPtr>
        public static ForDevice<TDevice extends UnityEngine_InputSystem.InputDevice> ($source: System.IObservable$1<UnityEngine_InputSystem_LowLevel.InputEventPtr>) : System.IObservable$1<UnityEngine_InputSystem_LowLevel.InputEventPtr>
        public static CallOnce<TValue> ($source: System.IObservable$1<TValue>, $action: System.Action$1<TValue>) : System.IDisposable
        public static Call<TValue> ($source: System.IObservable$1<TValue>, $action: System.Action$1<TValue>) : System.IDisposable
    }

    class ReadOnlyArrayExtensions {

        public static Contains<TValue extends System.IComparable$1<TValue>> ($array: ReadOnlyArray$1<TValue>, $value: TValue) : boolean
        public static ContainsReference<TValue> ($array: ReadOnlyArray$1<TValue>, $value: TValue) : boolean
        public static IndexOfReference<TValue> ($array: ReadOnlyArray$1<TValue>, $value: TValue) : int
    }

    interface FourCC {

        /**
        * @extension UnityEngine.InputSystem.LowLevel.InputState.IsIntegerFormat
        */
        IsIntegerFormat () : boolean
    }

    interface ReadOnlyArray$1<TValue> {

        /**
        * @extension UnityEngine.InputSystem.Utilities.ReadOnlyArrayExtensions.Contains<TValue extends System.IComparable$1<TValue>>
        */
        Contains ($value: TValue) : boolean
        /**
        * @extension UnityEngine.InputSystem.Utilities.ReadOnlyArrayExtensions.ContainsReference<TValue>
        */
        ContainsReference ($value: TValue) : boolean
        /**
        * @extension UnityEngine.InputSystem.Utilities.ReadOnlyArrayExtensions.IndexOfReference<TValue>
        */
        IndexOfReference ($value: TValue) : int
    }

}

declare module 'UnityEngine.InputSystem.Layouts' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_Layouts_InputControlLayout from 'UnityEngine.InputSystem.Layouts.InputControlLayout'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'

    class InputDeviceDescription extends System.ValueType implements System.IEquatable$1<InputDeviceDescription> {

        public get interfaceName(): string;
        public set interfaceName(value: string);
        public get deviceClass(): string;
        public set deviceClass(value: string);
        public get manufacturer(): string;
        public set manufacturer(value: string);
        public get product(): string;
        public set product(value: string);
        public get serial(): string;
        public set serial(value: string);
        public get version(): string;
        public set version(value: string);
        public get capabilities(): string;
        public set capabilities(value: string);
        public get empty(): boolean;

        public ToString () : string
        public Equals ($other: InputDeviceDescription) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToJson () : string
        public static FromJson ($json: string) : InputDeviceDescription
        public static op_Equality ($left: InputDeviceDescription, $right: InputDeviceDescription) : boolean
        public static op_Inequality ($left: InputDeviceDescription, $right: InputDeviceDescription) : boolean
    }

    class InputDeviceMatcher extends System.ValueType implements System.IEquatable$1<InputDeviceMatcher> {

        public get empty(): boolean;
        public get patterns(): System_Collections_Generic.IEnumerable$1<System_Collections_Generic.KeyValuePair$2<string, any>>;

        public WithInterface ($pattern: string, $supportRegex?: boolean) : InputDeviceMatcher
        public WithDeviceClass ($pattern: string, $supportRegex?: boolean) : InputDeviceMatcher
        public WithManufacturer ($pattern: string, $supportRegex?: boolean) : InputDeviceMatcher
        public WithProduct ($pattern: string, $supportRegex?: boolean) : InputDeviceMatcher
        public WithVersion ($pattern: string, $supportRegex?: boolean) : InputDeviceMatcher
        public WithCapability<TValue> ($path: string, $value: TValue) : InputDeviceMatcher
        public MatchPercentage ($deviceDescription: InputDeviceDescription) : float
        public static FromDeviceDescription ($deviceDescription: InputDeviceDescription) : InputDeviceMatcher
        public ToString () : string
        public Equals ($other: InputDeviceMatcher) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public static op_Equality ($left: InputDeviceMatcher, $right: InputDeviceMatcher) : boolean
        public static op_Inequality ($left: InputDeviceMatcher, $right: InputDeviceMatcher) : boolean
    }

    class InputControlLayout extends System.Object {

        public static VariantSeparator : string
        public static get DefaultVariant(): UnityEngine_InputSystem_Utilities.InternedString;
        public get name(): UnityEngine_InputSystem_Utilities.InternedString;
        public get displayName(): string;
        public get type(): System.Type;
        public get variants(): UnityEngine_InputSystem_Utilities.InternedString;
        public get stateFormat(): UnityEngine_InputSystem_Utilities.FourCC;
        public get stateSizeInBytes(): int;
        public get baseLayouts(): System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get appliedOverrides(): System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get commonUsages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get controls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Layouts_InputControlLayout.ControlItem>;
        public get updateBeforeRender(): boolean;
        public get isDeviceLayout(): boolean;
        public get isControlLayout(): boolean;
        public get isOverride(): boolean;
        public get isGenericTypeOfDevice(): boolean;
        public get hideInUI(): boolean;
        public get isNoisy(): boolean;
        public get canRunInBackground(): System.Nullable$1<boolean>;

        public FindControl ($path: UnityEngine_InputSystem_Utilities.InternedString) : System.Nullable$1<UnityEngine_InputSystem_Layouts_InputControlLayout.ControlItem>
        public FindControlIncludingArrayElements ($path: string, $arrayIndex: $Ref<int>) : System.Nullable$1<UnityEngine_InputSystem_Layouts_InputControlLayout.ControlItem>
        public GetValueType () : System.Type
        public static FromType ($name: string, $type: System.Type) : InputControlLayout
        public ToJson () : string
        public static FromJson ($json: string) : InputControlLayout
        public MergeLayout ($other: InputControlLayout) : void
        public get_Item ($path: string) : UnityEngine_InputSystem_Layouts_InputControlLayout.ControlItem
    }

    interface InputDeviceFindControlLayoutDelegate {
        (description: $Ref<InputDeviceDescription>, matchedLayout: string, executeDeviceCommand: UnityEngine_InputSystem_LowLevel.InputDeviceExecuteCommandDelegate) : string; 
        Invoke?: (description: $Ref<InputDeviceDescription>, matchedLayout: string, executeDeviceCommand: UnityEngine_InputSystem_LowLevel.InputDeviceExecuteCommandDelegate) => string;
    }
    var InputDeviceFindControlLayoutDelegate: { new (func: (description: $Ref<InputDeviceDescription>, matchedLayout: string, executeDeviceCommand: UnityEngine_InputSystem_LowLevel.InputDeviceExecuteCommandDelegate) => string): InputDeviceFindControlLayoutDelegate; }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

    interface IDeserializationCallback {

    }

}

declare module 'UnityEngine.InputSystem.Utilities.ReadOnlyArray$1' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class Enumerator<TValue> extends System.ValueType implements System_Collections_Generic.IEnumerator$1<TValue> {

        public get Current(): TValue;

        public Dispose () : void
        public MoveNext () : boolean
        public Reset () : void
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

    interface _Exception {

    }

}

declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'

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
    * Base class for all objects Unity can reference.
    */
    interface Object {

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
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

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
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * A Camera is a device through which the player views the world.
    */
    interface Camera {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * A 2D Rectangle defined by X and Y position, width and height.
    */
    interface Rect extends System.IFormattable, System.IEquatable$1<Rect> {

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
    * Representation of RGBA colors.
    */
    interface Color extends System.IFormattable, System.IEquatable$1<Color> {

    }

}

declare module 'UnityEngine.InputSystem.InputControlScheme' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_InputControlScheme_MatchResult from 'UnityEngine.InputSystem.InputControlScheme.MatchResult'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'

    class MatchResult extends System.ValueType implements System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem_InputControlScheme_MatchResult.Match>, System.IDisposable {

        public get score(): float;
        public get isSuccessfulMatch(): boolean;
        public get hasMissingRequiredDevices(): boolean;
        public get hasMissingOptionalDevices(): boolean;
        public get devices(): UnityEngine_InputSystem.InputControlList$1<UnityEngine_InputSystem.InputDevice>;

        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<UnityEngine_InputSystem_InputControlScheme_MatchResult.Match>
        public Dispose () : void
        public get_Item ($index: int) : UnityEngine_InputSystem_InputControlScheme_MatchResult.Match
    }

    class DeviceRequirement extends System.ValueType implements System.IEquatable$1<DeviceRequirement> {

        public get controlPath(): string;
        public set controlPath(value: string);
        public get isOptional(): boolean;
        public set isOptional(value: boolean);
        public get isAND(): boolean;
        public set isAND(value: boolean);
        public get isOR(): boolean;
        public set isOR(value: boolean);

        public ToString () : string
        public Equals ($other: DeviceRequirement) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public static op_Equality ($left: DeviceRequirement, $right: DeviceRequirement) : boolean
        public static op_Inequality ($left: DeviceRequirement, $right: DeviceRequirement) : boolean
    }

}

declare module 'UnityEngine.InputSystem.InputControlScheme.MatchResult' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine_InputSystem_InputControlScheme from 'UnityEngine.InputSystem.InputControlScheme'

    class Match extends System.ValueType {

        public get control(): UnityEngine_InputSystem.InputControl;
        public get device(): UnityEngine_InputSystem.InputDevice;
        public get requirementIndex(): int;
        public get requirement(): UnityEngine_InputSystem_InputControlScheme.DeviceRequirement;
        public get isOptional(): boolean;

    }

}

declare module 'Unity.Collections' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    /**
    * Used to specify allocation type for NativeArray.
    */
    enum Allocator {
        Invalid = 0,
        None = 1,
        Temp = 2,
        TempJob = 3,
        Persistent = 4,
        AudioKernel = 5,
        FirstUserIndex = 64 
    }

    /**
    * A NativeArray exposes a buffer of native memory to managed code, making it possible to share data between managed and native without marshalling costs.
    */
    interface NativeArray$1<T> extends System_Collections_Generic.IEnumerable$1<T>, System.IDisposable, System.IEquatable$1<NativeArray$1<T>> {

    }

}

declare module 'UnityEngine.InputSystem.InputAction' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'

    class CallbackContext extends System.ValueType {

        public get phase(): UnityEngine_InputSystem.InputActionPhase;
        public get started(): boolean;
        public get performed(): boolean;
        public get canceled(): boolean;
        public get action(): UnityEngine_InputSystem.InputAction;
        public get control(): UnityEngine_InputSystem.InputControl;
        public get interaction(): UnityEngine_InputSystem.IInputInteraction;
        public get time(): double;
        public get startTime(): double;
        public get duration(): double;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;

        public ReadValue<TValue> () : TValue
        public ReadValueAsButton () : boolean
        public ReadValueAsObject () : any
        public ToString () : string
    }

}

declare module 'System.Linq.Expressions' {
    import * as System from 'System'

    interface Expression$1<TDelegate> {

    }

    interface LambdaExpression extends IParameterProvider {

    }

    interface Expression {

    }

}

declare module 'UnityEngine.InputSystem.InputActionRebindingExtensions' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'

    class RebindingOperation extends System.Object implements System.IDisposable {

        public static kDefaultMagnitudeThreshold : float
        public get action(): UnityEngine_InputSystem.InputAction;
        public get bindingMask(): System.Nullable$1<UnityEngine_InputSystem.InputBinding>;
        public get candidates(): UnityEngine_InputSystem.InputControlList$1<UnityEngine_InputSystem.InputControl>;
        public get scores(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<float>;
        public get magnitudes(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<float>;
        public get selectedControl(): UnityEngine_InputSystem.InputControl;
        public get started(): boolean;
        public get completed(): boolean;
        public get canceled(): boolean;
        public get startTime(): double;
        public get timeout(): float;
        public get expectedControlType(): string;

        public constructor ()
        public WithAction ($action: UnityEngine_InputSystem.InputAction) : RebindingOperation
        public WithMatchingEventsBeingSuppressed ($value?: boolean) : RebindingOperation
        public WithCancelingThrough ($binding: string) : RebindingOperation
        public WithCancelingThrough ($control: UnityEngine_InputSystem.InputControl) : RebindingOperation
        public WithExpectedControlType ($layoutName: string) : RebindingOperation
        public WithExpectedControlType ($type: System.Type) : RebindingOperation
        public WithExpectedControlType<TControl extends UnityEngine_InputSystem.InputControl> () : RebindingOperation
        public WithTargetBinding ($bindingIndex: int) : RebindingOperation
        public WithBindingMask ($bindingMask: System.Nullable$1<UnityEngine_InputSystem.InputBinding>) : RebindingOperation
        public WithBindingGroup ($group: string) : RebindingOperation
        public WithoutGeneralizingPathOfSelectedControl () : RebindingOperation
        public WithRebindAddingNewBinding ($group?: string) : RebindingOperation
        public WithMagnitudeHavingToBeGreaterThan ($magnitude: float) : RebindingOperation
        public WithoutIgnoringNoisyControls () : RebindingOperation
        public WithControlsHavingToMatchPath ($path: string) : RebindingOperation
        public WithControlsExcluding ($path: string) : RebindingOperation
        public WithTimeout ($timeInSeconds: float) : RebindingOperation
        public OnComplete ($callback: System.Action$1<RebindingOperation>) : RebindingOperation
        public OnCancel ($callback: System.Action$1<RebindingOperation>) : RebindingOperation
        public OnPotentialMatch ($callback: System.Action$1<RebindingOperation>) : RebindingOperation
        public OnGeneratePath ($callback: System.Func$2<UnityEngine_InputSystem.InputControl, string>) : RebindingOperation
        public OnComputeScore ($callback: System.Func$3<UnityEngine_InputSystem.InputControl, UnityEngine_InputSystem_LowLevel.InputEventPtr, float>) : RebindingOperation
        public OnApplyBinding ($callback: System.Action$2<RebindingOperation, string>) : RebindingOperation
        public OnMatchWaitForAnother ($seconds: float) : RebindingOperation
        public Start () : RebindingOperation
        public Cancel () : void
        public Complete () : void
        public AddCandidate ($control: UnityEngine_InputSystem.InputControl, $score: float, $magnitude?: float) : void
        public RemoveCandidate ($control: UnityEngine_InputSystem.InputControl) : void
        public Dispose () : void
        public Reset () : RebindingOperation
    }

}

declare module 'UnityEngine.InputSystem.InputActionSetupExtensions' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'

    class BindingSyntax extends System.ValueType {

        public get valid(): boolean;
        public get bindingIndex(): int;
        public get binding(): UnityEngine_InputSystem.InputBinding;

        public WithName ($name: string) : BindingSyntax
        public WithPath ($path: string) : BindingSyntax
        public WithGroup ($group: string) : BindingSyntax
        public WithGroups ($groups: string) : BindingSyntax
        public WithInteraction ($interaction: string) : BindingSyntax
        public WithInteractions ($interactions: string) : BindingSyntax
        public WithInteraction<TInteraction extends UnityEngine_InputSystem.IInputInteraction> () : BindingSyntax
        public WithProcessor ($processor: string) : BindingSyntax
        public WithProcessors ($processors: string) : BindingSyntax
        public WithProcessor<TProcessor> () : BindingSyntax
        public Triggering ($action: UnityEngine_InputSystem.InputAction) : BindingSyntax
        public To ($binding: UnityEngine_InputSystem.InputBinding) : BindingSyntax
        public NextBinding () : BindingSyntax
        public PreviousBinding () : BindingSyntax
        public NextPartBinding ($partName: string) : BindingSyntax
        public PreviousPartBinding ($partName: string) : BindingSyntax
        public NextCompositeBinding ($compositeName?: string) : BindingSyntax
        public PreviousCompositeBinding ($compositeName?: string) : BindingSyntax
        public Erase () : void
        public InsertPartBinding ($partName: string, $path: string) : BindingSyntax
    }

    class CompositeSyntax extends System.ValueType {

        public get bindingIndex(): int;

        public With ($name: string, $binding: string, $groups?: string, $processors?: string) : CompositeSyntax
    }

    class ControlSchemeSyntax extends System.ValueType {

        public WithBindingGroup ($bindingGroup: string) : ControlSchemeSyntax
        public WithRequiredDevice<TDevice extends UnityEngine_InputSystem.InputDevice> () : ControlSchemeSyntax
        public WithOptionalDevice<TDevice extends UnityEngine_InputSystem.InputDevice> () : ControlSchemeSyntax
        public OrWithRequiredDevice<TDevice extends UnityEngine_InputSystem.InputDevice> () : ControlSchemeSyntax
        public OrWithOptionalDevice<TDevice extends UnityEngine_InputSystem.InputDevice> () : ControlSchemeSyntax
        public WithRequiredDevice ($controlPath: string) : ControlSchemeSyntax
        public WithOptionalDevice ($controlPath: string) : ControlSchemeSyntax
        public OrWithRequiredDevice ($controlPath: string) : ControlSchemeSyntax
        public OrWithOptionalDevice ($controlPath: string) : ControlSchemeSyntax
        public Done () : UnityEngine_InputSystem.InputControlScheme
    }

}

declare module 'UnityEngine.InputSystem.InputBindingCompositeContext' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'

    class PartBinding extends System.ValueType {

        public get part(): int;
        public set part(value: int);
        public get control(): UnityEngine_InputSystem.InputControl;
        public set control(value: UnityEngine_InputSystem.InputControl);

    }

}

declare module 'UnityEngine.InputSystem.Layouts.InputControlLayout' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'
    import * as UnityEngine_InputSystem_Layouts_InputControlLayout_Builder from 'UnityEngine.InputSystem.Layouts.InputControlLayout.Builder'
    import * as UnityEngine_InputSystem_Layouts from 'UnityEngine.InputSystem.Layouts'

    class ControlItem extends System.ValueType {

        public get name(): UnityEngine_InputSystem_Utilities.InternedString;
        public get layout(): UnityEngine_InputSystem_Utilities.InternedString;
        public get variants(): UnityEngine_InputSystem_Utilities.InternedString;
        public get useStateFrom(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get parameters(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.NamedValue>;
        public get processors(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.NameAndParameters>;
        public get offset(): uint;
        public get bit(): uint;
        public get sizeInBits(): uint;
        public get format(): UnityEngine_InputSystem_Utilities.FourCC;
        public get arraySize(): int;
        public get defaultState(): UnityEngine_InputSystem_Utilities.PrimitiveValue;
        public get minValue(): UnityEngine_InputSystem_Utilities.PrimitiveValue;
        public get maxValue(): UnityEngine_InputSystem_Utilities.PrimitiveValue;
        public get isModifyingExistingControl(): boolean;
        public get isNoisy(): boolean;
        public get isSynthetic(): boolean;
        public get dontReset(): boolean;
        public get isFirstDefinedInThisLayout(): boolean;
        public get isArray(): boolean;

        public Merge ($other: ControlItem) : ControlItem
    }

    class Builder extends System.Object {

        public get name(): string;
        public set name(value: string);
        public get displayName(): string;
        public set displayName(value: string);
        public get type(): System.Type;
        public set type(value: System.Type);
        public get stateFormat(): UnityEngine_InputSystem_Utilities.FourCC;
        public set stateFormat(value: UnityEngine_InputSystem_Utilities.FourCC);
        public get stateSizeInBytes(): int;
        public set stateSizeInBytes(value: int);
        public get extendsLayout(): string;
        public set extendsLayout(value: string);
        public get updateBeforeRender(): System.Nullable$1<boolean>;
        public set updateBeforeRender(value: System.Nullable$1<boolean>);
        public get controls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<ControlItem>;

        public constructor ()
        public AddControl ($name: string) : UnityEngine_InputSystem_Layouts_InputControlLayout_Builder.ControlBuilder
        public WithName ($name: string) : Builder
        public WithDisplayName ($displayName: string) : Builder
        public WithType<T extends UnityEngine_InputSystem.InputControl> () : Builder
        public WithFormat ($format: UnityEngine_InputSystem_Utilities.FourCC) : Builder
        public WithFormat ($format: string) : Builder
        public WithSizeInBytes ($sizeInBytes: int) : Builder
        public Extend ($baseLayoutName: string) : Builder
        public Build () : UnityEngine_InputSystem_Layouts.InputControlLayout
    }

    class LayoutNotFoundException extends System.Exception {

        public get layout(): string;

        public constructor ()
        public constructor ($name: string, $message: string)
        public constructor ($name: string)
        public constructor ($message: string, $innerException: System.Exception)
    }

}

declare module 'UnityEngine.InputSystem.InputSettings' {

    enum UpdateMode {
        ProcessEventsInDynamicUpdate = 1,
        ProcessEventsInFixedUpdate = 2,
        ProcessEventsManually = 3 
    }

    enum BackgroundBehavior {
        ResetAndDisableNonBackgroundDevices = 0,
        ResetAndDisableAllDevices = 1,
        IgnoreFocus = 2 
    }

    enum EditorInputBehaviorInPlayMode {
        PointersAndKeyboardsRespectGameViewFocus = 0,
        AllDevicesRespectGameViewFocus = 1,
        AllDeviceInputAlwaysGoesToGameView = 2 
    }

}

declare module 'UnityEngine.InputSystem.InputRemoting' {
    import * as System from 'System'

    class Message extends System.ValueType {

        public participantId : int
        public type : MessageType
        public data : byte[]

    }

    enum MessageType {
        Connect = 0,
        Disconnect = 1,
        NewLayout = 2,
        NewDevice = 3,
        NewEvents = 4,
        RemoveDevice = 5,
        RemoveLayout = 6,
        ChangeUsages = 7,
        StartSending = 8,
        StopSending = 9 
    }

}

declare module 'UnityEngine.InputSystem.InputControlExtensions' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'

    class InputEventControlCollection extends System.ValueType implements System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem.InputControl> {

        public get eventPtr(): UnityEngine_InputSystem_LowLevel.InputEventPtr;

        public GetEnumerator () : InputEventControlEnumerator
    }

    class InputEventControlEnumerator extends System.ValueType implements System_Collections_Generic.IEnumerator$1<UnityEngine_InputSystem.InputControl> {

        public get Current(): UnityEngine_InputSystem.InputControl;

        public MoveNext () : boolean
        public Reset () : void
        public Dispose () : void
    }

    enum Enumerate {
        IgnoreControlsInDefaultState = 1,
        IgnoreControlsInCurrentState = 2,
        IncludeSyntheticControls = 4,
        IncludeNoisyControls = 8,
        IncludeNonLeafControls = 16 
    }

    class ControlBuilder extends System.ValueType {

        public get control(): UnityEngine_InputSystem.InputControl;

        public At ($device: UnityEngine_InputSystem.InputDevice, $index: int) : ControlBuilder
        public WithParent ($parent: UnityEngine_InputSystem.InputControl) : ControlBuilder
        public WithName ($name: string) : ControlBuilder
        public WithDisplayName ($displayName: string) : ControlBuilder
        public WithShortDisplayName ($shortDisplayName: string) : ControlBuilder
        public WithLayout ($layout: UnityEngine_InputSystem_Utilities.InternedString) : ControlBuilder
        public WithUsages ($startIndex: int, $count: int) : ControlBuilder
        public WithAliases ($startIndex: int, $count: int) : ControlBuilder
        public WithChildren ($startIndex: int, $count: int) : ControlBuilder
        public WithStateBlock ($stateBlock: UnityEngine_InputSystem_LowLevel.InputStateBlock) : ControlBuilder
        public WithDefaultState ($value: UnityEngine_InputSystem_Utilities.PrimitiveValue) : ControlBuilder
        public WithMinAndMax ($min: UnityEngine_InputSystem_Utilities.PrimitiveValue, $max: UnityEngine_InputSystem_Utilities.PrimitiveValue) : ControlBuilder
        public WithProcessor<TProcessor extends UnityEngine_InputSystem.InputProcessor$1<TValue>,TValue> ($processor: TProcessor) : ControlBuilder
        public IsNoisy ($value: boolean) : ControlBuilder
        public IsSynthetic ($value: boolean) : ControlBuilder
        public DontReset ($value: boolean) : ControlBuilder
        public IsButton ($value: boolean) : ControlBuilder
        public Finish () : void
    }

    class DeviceBuilder extends System.ValueType {

        public get device(): UnityEngine_InputSystem.InputDevice;

        public WithName ($name: string) : DeviceBuilder
        public WithDisplayName ($displayName: string) : DeviceBuilder
        public WithShortDisplayName ($shortDisplayName: string) : DeviceBuilder
        public WithLayout ($layout: UnityEngine_InputSystem_Utilities.InternedString) : DeviceBuilder
        public WithChildren ($startIndex: int, $count: int) : DeviceBuilder
        public WithStateBlock ($stateBlock: UnityEngine_InputSystem_LowLevel.InputStateBlock) : DeviceBuilder
        public IsNoisy ($value: boolean) : DeviceBuilder
        public WithControlUsage ($controlIndex: int, $usage: UnityEngine_InputSystem_Utilities.InternedString, $control: UnityEngine_InputSystem.InputControl) : DeviceBuilder
        public WithControlAlias ($controlIndex: int, $alias: UnityEngine_InputSystem_Utilities.InternedString) : DeviceBuilder
        public WithStateOffsetToControlIndexMap ($map: uint[]) : DeviceBuilder
        public WithControlTree ($controlTreeNodes: byte[], $controlTreeIndicies: ushort[]) : DeviceBuilder
        public Finish () : void
    }

}

declare module 'UnityEngine.InputSystem.InputProcessor' {

    enum CachingPolicy {
        CacheResult = 0,
        EvaluateOnEveryRead = 1 
    }

}

declare module 'UnityEngine.InputSystem.InputControlPath' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    enum HumanReadableStringOptions {
        None = 0,
        OmitDevice = 2,
        UseShortNames = 4 
    }

    class ParsedPathComponent extends System.ValueType {

        public get layout(): string;
        public get usages(): System_Collections_Generic.IEnumerable$1<string>;
        public get name(): string;
        public get displayName(): string;

        public Matches ($control: UnityEngine_InputSystem.InputControl) : boolean
    }

}

declare module 'UnityEngine.InputSystem.Haptics' {
    import * as System from 'System'

    interface IDualMotorRumble extends IHaptics {

        SetMotorSpeeds? ($lowFrequency: float, $highFrequency: float) : void
    }

    interface IHaptics {

        PauseHaptics? () : void
        ResumeHaptics? () : void
        ResetHaptics? () : void
    }

}

declare module 'UnityEngine.InputSystem.Controls' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem_Controls_AxisControl from 'UnityEngine.InputSystem.Controls.AxisControl'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_InputSystem_Controls_DiscreteButtonControl from 'UnityEngine.InputSystem.Controls.DiscreteButtonControl'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_InputControlExtensions from 'UnityEngine.InputSystem.InputControlExtensions'

    class ButtonControl extends AxisControl {

        public clamp : UnityEngine_InputSystem_Controls_AxisControl.Clamp
        public clampMin : float
        public clampMax : float
        public clampConstant : float
        public invert : boolean
        public normalize : boolean
        public normalizeMin : float
        public normalizeMax : float
        public normalizeZero : float
        public scale : boolean
        public scaleFactor : float
        public pressPoint : float
        public get pressPointOrDefault(): float;
        public get isPressed(): boolean;
        public get wasPressedThisFrame(): boolean;
        public get wasReleasedThisFrame(): boolean;

        public constructor ()
        public IsValueConsideredPressed ($value: float) : boolean
    }

    class AxisControl extends UnityEngine_InputSystem.InputControl$1<float> {

        public clamp : UnityEngine_InputSystem_Controls_AxisControl.Clamp
        public clampMin : float
        public clampMax : float
        public clampConstant : float
        public invert : boolean
        public normalize : boolean
        public normalizeMin : float
        public normalizeMax : float
        public normalizeZero : float
        public scale : boolean
        public scaleFactor : float

        public constructor ()
    }

    class DpadControl extends Vector2Control {

        public get x(): AxisControl;
        public set x(value: AxisControl);
        public get y(): AxisControl;
        public set y(value: AxisControl);
        public get up(): ButtonControl;
        public set up(value: ButtonControl);
        public get down(): ButtonControl;
        public set down(value: ButtonControl);
        public get left(): ButtonControl;
        public set left(value: ButtonControl);
        public get right(): ButtonControl;
        public set right(value: ButtonControl);

        public constructor ()
        public static MakeDpadVector ($up: boolean, $down: boolean, $left: boolean, $right: boolean, $normalize?: boolean) : UnityEngine.Vector2
        /**
        * @methodSwap MakeDpadVector_EBB7509C_H3F97763D
        */
        public static MakeDpadVector ($up: float, $down: float, $left: float, $right: float) : UnityEngine.Vector2
    }

    class Vector2Control extends UnityEngine_InputSystem.InputControl$1<UnityEngine.Vector2> {

        public get x(): AxisControl;
        public set x(value: AxisControl);
        public get y(): AxisControl;
        public set y(value: AxisControl);

        public constructor ()
    }

    class StickControl extends Vector2Control {

        public get x(): AxisControl;
        public set x(value: AxisControl);
        public get y(): AxisControl;
        public set y(value: AxisControl);
        public get up(): ButtonControl;
        public set up(value: ButtonControl);
        public get down(): ButtonControl;
        public set down(value: ButtonControl);
        public get left(): ButtonControl;
        public set left(value: ButtonControl);
        public get right(): ButtonControl;
        public set right(value: ButtonControl);

        public constructor ()
    }

    class KeyControl extends ButtonControl {

        public clamp : UnityEngine_InputSystem_Controls_AxisControl.Clamp
        public clampMin : float
        public clampMax : float
        public clampConstant : float
        public invert : boolean
        public normalize : boolean
        public normalizeMin : float
        public normalizeMax : float
        public normalizeZero : float
        public scale : boolean
        public scaleFactor : float
        public pressPoint : float
        public get pressPointOrDefault(): float;
        public get isPressed(): boolean;
        public get wasPressedThisFrame(): boolean;
        public get wasReleasedThisFrame(): boolean;
        public get keyCode(): UnityEngine_InputSystem.Key;
        public set keyCode(value: UnityEngine_InputSystem.Key);
        public get scanCode(): int;

        public constructor ()
    }

    class AnyKeyControl extends ButtonControl {

        public clamp : UnityEngine_InputSystem_Controls_AxisControl.Clamp
        public clampMin : float
        public clampMax : float
        public clampConstant : float
        public invert : boolean
        public normalize : boolean
        public normalizeMin : float
        public normalizeMax : float
        public normalizeZero : float
        public scale : boolean
        public scaleFactor : float
        public pressPoint : float
        public get pressPointOrDefault(): float;
        public get isPressed(): boolean;
        public get wasPressedThisFrame(): boolean;
        public get wasReleasedThisFrame(): boolean;

        public constructor ()
    }

    class DeltaControl extends Vector2Control {

        public get x(): AxisControl;
        public set x(value: AxisControl);
        public get y(): AxisControl;
        public set y(value: AxisControl);
        public get up(): AxisControl;
        public set up(value: AxisControl);
        public get down(): AxisControl;
        public set down(value: AxisControl);
        public get left(): AxisControl;
        public set left(value: AxisControl);
        public get right(): AxisControl;
        public set right(value: AxisControl);

        public constructor ()
    }

    class IntegerControl extends UnityEngine_InputSystem.InputControl$1<int> {

        public constructor ()
    }

    class Vector3Control extends UnityEngine_InputSystem.InputControl$1<UnityEngine.Vector3> {

        public get x(): AxisControl;
        public set x(value: AxisControl);
        public get y(): AxisControl;
        public set y(value: AxisControl);
        public get z(): AxisControl;
        public set z(value: AxisControl);

        public constructor ()
    }

    class QuaternionControl extends UnityEngine_InputSystem.InputControl$1<UnityEngine.Quaternion> {

        public get x(): AxisControl;
        public set x(value: AxisControl);
        public get y(): AxisControl;
        public set y(value: AxisControl);
        public get z(): AxisControl;
        public set z(value: AxisControl);
        public get w(): AxisControl;
        public set w(value: AxisControl);

        public constructor ()
    }

    class TouchControl extends UnityEngine_InputSystem.InputControl$1<UnityEngine_InputSystem_LowLevel.TouchState> {

        public get press(): TouchPressControl;
        public set press(value: TouchPressControl);
        public get displayIndex(): IntegerControl;
        public set displayIndex(value: IntegerControl);
        public get touchId(): IntegerControl;
        public set touchId(value: IntegerControl);
        public get position(): Vector2Control;
        public set position(value: Vector2Control);
        public get delta(): DeltaControl;
        public set delta(value: DeltaControl);
        public get pressure(): AxisControl;
        public set pressure(value: AxisControl);
        public get radius(): Vector2Control;
        public set radius(value: Vector2Control);
        public get phase(): TouchPhaseControl;
        public set phase(value: TouchPhaseControl);
        public get indirectTouch(): ButtonControl;
        public set indirectTouch(value: ButtonControl);
        public get tap(): ButtonControl;
        public set tap(value: ButtonControl);
        public get tapCount(): IntegerControl;
        public set tapCount(value: IntegerControl);
        public get startTime(): DoubleControl;
        public set startTime(value: DoubleControl);
        public get startPosition(): Vector2Control;
        public set startPosition(value: Vector2Control);
        public get isInProgress(): boolean;

        public constructor ()
    }

    class TouchPressControl extends ButtonControl {

        public clamp : UnityEngine_InputSystem_Controls_AxisControl.Clamp
        public clampMin : float
        public clampMax : float
        public clampConstant : float
        public invert : boolean
        public normalize : boolean
        public normalizeMin : float
        public normalizeMax : float
        public normalizeZero : float
        public scale : boolean
        public scaleFactor : float
        public pressPoint : float
        public get pressPointOrDefault(): float;
        public get isPressed(): boolean;
        public get wasPressedThisFrame(): boolean;
        public get wasReleasedThisFrame(): boolean;

        public constructor ()
    }

    class TouchPhaseControl extends UnityEngine_InputSystem.InputControl$1<UnityEngine_InputSystem.TouchPhase> {

        public constructor ()
    }

    class DoubleControl extends UnityEngine_InputSystem.InputControl$1<double> {

        public constructor ()
    }

    class DiscreteButtonControl extends ButtonControl {

        public clamp : UnityEngine_InputSystem_Controls_AxisControl.Clamp
        public clampMin : float
        public clampMax : float
        public clampConstant : float
        public invert : boolean
        public normalize : boolean
        public normalizeMin : float
        public normalizeMax : float
        public normalizeZero : float
        public scale : boolean
        public scaleFactor : float
        public pressPoint : float
        public get pressPointOrDefault(): float;
        public get isPressed(): boolean;
        public get wasPressedThisFrame(): boolean;
        public get wasReleasedThisFrame(): boolean;
        public minValue : int
        public maxValue : int
        public wrapAtValue : int
        public nullValue : int
        public writeMode : UnityEngine_InputSystem_Controls_DiscreteButtonControl.WriteMode

        public constructor ()
    }

    interface ButtonControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface AxisControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface DpadControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface Vector2Control {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface StickControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface KeyControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface AnyKeyControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface DeltaControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface IntegerControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface Vector3Control {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface QuaternionControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface TouchControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface TouchPressControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface TouchPhaseControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface DoubleControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

    interface DiscreteButtonControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

}

declare module 'UnityEngine.InputSystem.Controls.AxisControl' {

    enum Clamp {
        None = 0,
        BeforeNormalize = 1,
        AfterNormalize = 2,
        ToConstantBeforeNormalize = 3 
    }

}

declare module 'UnityEngine.InputSystem.DefaultInputActions' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine_InputSystem_InputAction from 'UnityEngine.InputSystem.InputAction'

    class PlayerActions extends System.ValueType {

        public get Move(): UnityEngine_InputSystem.InputAction;
        public get Look(): UnityEngine_InputSystem.InputAction;
        public get Fire(): UnityEngine_InputSystem.InputAction;
        public get enabled(): boolean;

        public constructor ($wrapper: UnityEngine_InputSystem.DefaultInputActions)
        public Get () : UnityEngine_InputSystem.InputActionMap
        public Enable () : void
        public Disable () : void
        public SetCallbacks ($instance: IPlayerActions) : void
        public static op_Implicit ($set: PlayerActions) : UnityEngine_InputSystem.InputActionMap
    }

    interface IPlayerActions {

        OnMove? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnLook? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnFire? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
    }

    class UIActions extends System.ValueType {

        public get Navigate(): UnityEngine_InputSystem.InputAction;
        public get Submit(): UnityEngine_InputSystem.InputAction;
        public get Cancel(): UnityEngine_InputSystem.InputAction;
        public get Point(): UnityEngine_InputSystem.InputAction;
        public get Click(): UnityEngine_InputSystem.InputAction;
        public get ScrollWheel(): UnityEngine_InputSystem.InputAction;
        public get MiddleClick(): UnityEngine_InputSystem.InputAction;
        public get RightClick(): UnityEngine_InputSystem.InputAction;
        public get TrackedDevicePosition(): UnityEngine_InputSystem.InputAction;
        public get TrackedDeviceOrientation(): UnityEngine_InputSystem.InputAction;
        public get enabled(): boolean;

        public constructor ($wrapper: UnityEngine_InputSystem.DefaultInputActions)
        public Get () : UnityEngine_InputSystem.InputActionMap
        public Enable () : void
        public Disable () : void
        public SetCallbacks ($instance: IUIActions) : void
        public static op_Implicit ($set: UIActions) : UnityEngine_InputSystem.InputActionMap
    }

    interface IUIActions {

        OnNavigate? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnSubmit? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnCancel? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnPoint? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnClick? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnScrollWheel? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnMiddleClick? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnRightClick? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnTrackedDevicePosition? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
        OnTrackedDeviceOrientation? ($context: UnityEngine_InputSystem_InputAction.CallbackContext) : void
    }

}

declare module 'UnityEngine.InputSystem.PlayerInput' {
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as System from 'System'

    class ActionEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_InputSystem_InputAction.CallbackContext> {

        public get actionId(): string;
        public get actionName(): string;

        public constructor ()
        public constructor ($action: UnityEngine_InputSystem.InputAction)
        public constructor ($actionGUID: System.Guid, $name?: string)
    }

    class DeviceLostEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_InputSystem.PlayerInput> {

        public constructor ()
    }

    class DeviceRegainedEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_InputSystem.PlayerInput> {

        public constructor ()
    }

    class ControlsChangedEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_InputSystem.PlayerInput> {

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

}

declare module 'UnityEngine.InputSystem.UI' {
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as System from 'System'
    import * as UnityEngine_InputSystem_UI_InputSystemUIInputModule from 'UnityEngine.InputSystem.UI.InputSystemUIInputModule'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_UI_VirtualMouseInput from 'UnityEngine.InputSystem.UI.VirtualMouseInput'
    import * as UnityEngine_UI from 'UnityEngine.UI'

    class InputSystemUIInputModule extends UnityEngine_EventSystems.BaseInputModule {

        public get deselectOnBackgroundClick(): boolean;
        public set deselectOnBackgroundClick(value: boolean);
        public get pointerBehavior(): UIPointerBehavior;
        public set pointerBehavior(value: UIPointerBehavior);
        public get cursorLockBehavior(): UnityEngine_InputSystem_UI_InputSystemUIInputModule.CursorLockBehavior;
        public set cursorLockBehavior(value: UnityEngine_InputSystem_UI_InputSystemUIInputModule.CursorLockBehavior);
        public get moveRepeatDelay(): float;
        public set moveRepeatDelay(value: float);
        public get moveRepeatRate(): float;
        public set moveRepeatRate(value: float);
        public get xrTrackingOrigin(): UnityEngine.Transform;
        public set xrTrackingOrigin(value: UnityEngine.Transform);
        public get trackedDeviceDragThresholdMultiplier(): float;
        public set trackedDeviceDragThresholdMultiplier(value: float);
        public get point(): UnityEngine_InputSystem.InputActionReference;
        public set point(value: UnityEngine_InputSystem.InputActionReference);
        public get scrollWheel(): UnityEngine_InputSystem.InputActionReference;
        public set scrollWheel(value: UnityEngine_InputSystem.InputActionReference);
        public get leftClick(): UnityEngine_InputSystem.InputActionReference;
        public set leftClick(value: UnityEngine_InputSystem.InputActionReference);
        public get middleClick(): UnityEngine_InputSystem.InputActionReference;
        public set middleClick(value: UnityEngine_InputSystem.InputActionReference);
        public get rightClick(): UnityEngine_InputSystem.InputActionReference;
        public set rightClick(value: UnityEngine_InputSystem.InputActionReference);
        public get move(): UnityEngine_InputSystem.InputActionReference;
        public set move(value: UnityEngine_InputSystem.InputActionReference);
        public get submit(): UnityEngine_InputSystem.InputActionReference;
        public set submit(value: UnityEngine_InputSystem.InputActionReference);
        public get cancel(): UnityEngine_InputSystem.InputActionReference;
        public set cancel(value: UnityEngine_InputSystem.InputActionReference);
        public get trackedDeviceOrientation(): UnityEngine_InputSystem.InputActionReference;
        public set trackedDeviceOrientation(value: UnityEngine_InputSystem.InputActionReference);
        public get trackedDevicePosition(): UnityEngine_InputSystem.InputActionReference;
        public set trackedDevicePosition(value: UnityEngine_InputSystem.InputActionReference);
        public get actionsAsset(): UnityEngine_InputSystem.InputActionAsset;
        public set actionsAsset(value: UnityEngine_InputSystem.InputActionAsset);

        private constructor ()
        public ActivateModule () : void
        public IsPointerOverGameObject ($pointerOrTouchId: int) : boolean
        public GetLastRaycastResult ($pointerOrTouchId: int) : UnityEngine_EventSystems.RaycastResult
        public AssignDefaultActions () : void
        public UnassignActions () : void
        public Process () : void
        public ConvertUIToolkitPointerId ($sourcePointerData: UnityEngine_EventSystems.PointerEventData) : int
    }

    enum UIPointerBehavior {
        SingleMouseOrPenButMultiTouchAndTrack = 0,
        SingleUnifiedPointer = 1,
        AllPointersAsIs = 2 
    }

    class ExtendedPointerEventData extends UnityEngine_EventSystems.PointerEventData {

        public get control(): UnityEngine_InputSystem.InputControl;
        public set control(value: UnityEngine_InputSystem.InputControl);
        public get device(): UnityEngine_InputSystem.InputDevice;
        public set device(value: UnityEngine_InputSystem.InputDevice);
        public get touchId(): int;
        public set touchId(value: int);
        public get pointerType(): UIPointerType;
        public set pointerType(value: UIPointerType);
        public get uiToolkitPointerId(): int;
        public set uiToolkitPointerId(value: int);
        public get trackedDevicePosition(): UnityEngine.Vector3;
        public set trackedDevicePosition(value: UnityEngine.Vector3);
        public get trackedDeviceOrientation(): UnityEngine.Quaternion;
        public set trackedDeviceOrientation(value: UnityEngine.Quaternion);

        public constructor ($eventSystem: UnityEngine_EventSystems.EventSystem)
        public ToString () : string
    }

    enum UIPointerType {
        None = 0,
        MouseOrPen = 1,
        Touch = 2,
        Tracked = 3 
    }

    class MultiplayerEventSystem extends UnityEngine_EventSystems.EventSystem {

        public get playerRoot(): UnityEngine.GameObject;
        public set playerRoot(value: UnityEngine.GameObject);

        private constructor ()
    }

    class TrackedDeviceRaycaster extends UnityEngine_EventSystems.BaseRaycaster {

        public get eventCamera(): UnityEngine.Camera;
        public get blockingMask(): UnityEngine.LayerMask;
        public set blockingMask(value: UnityEngine.LayerMask);
        public get checkFor3DOcclusion(): boolean;
        public set checkFor3DOcclusion(value: boolean);
        public get checkFor2DOcclusion(): boolean;
        public set checkFor2DOcclusion(value: boolean);
        public get ignoreReversedGraphics(): boolean;
        public set ignoreReversedGraphics(value: boolean);
        public get maxDistance(): float;
        public set maxDistance(value: float);

        private constructor ()
        public Raycast ($eventData: UnityEngine_EventSystems.PointerEventData, $resultAppendList: System_Collections_Generic.List$1<UnityEngine_EventSystems.RaycastResult>) : void
    }

    class VirtualMouseInput extends UnityEngine.MonoBehaviour {

        public get cursorTransform(): UnityEngine.RectTransform;
        public set cursorTransform(value: UnityEngine.RectTransform);
        public get cursorSpeed(): float;
        public set cursorSpeed(value: float);
        public get cursorMode(): UnityEngine_InputSystem_UI_VirtualMouseInput.CursorMode;
        public set cursorMode(value: UnityEngine_InputSystem_UI_VirtualMouseInput.CursorMode);
        public get cursorGraphic(): UnityEngine_UI.Graphic;
        public set cursorGraphic(value: UnityEngine_UI.Graphic);
        public get scrollSpeed(): float;
        public set scrollSpeed(value: float);
        public get virtualMouse(): UnityEngine_InputSystem.Mouse;
        public get stickAction(): UnityEngine_InputSystem.InputActionProperty;
        public set stickAction(value: UnityEngine_InputSystem.InputActionProperty);
        public get leftButtonAction(): UnityEngine_InputSystem.InputActionProperty;
        public set leftButtonAction(value: UnityEngine_InputSystem.InputActionProperty);
        public get rightButtonAction(): UnityEngine_InputSystem.InputActionProperty;
        public set rightButtonAction(value: UnityEngine_InputSystem.InputActionProperty);
        public get middleButtonAction(): UnityEngine_InputSystem.InputActionProperty;
        public set middleButtonAction(value: UnityEngine_InputSystem.InputActionProperty);
        public get forwardButtonAction(): UnityEngine_InputSystem.InputActionProperty;
        public set forwardButtonAction(value: UnityEngine_InputSystem.InputActionProperty);
        public get backButtonAction(): UnityEngine_InputSystem.InputActionProperty;
        public set backButtonAction(value: UnityEngine_InputSystem.InputActionProperty);
        public get scrollWheelAction(): UnityEngine_InputSystem.InputActionProperty;
        public set scrollWheelAction(value: UnityEngine_InputSystem.InputActionProperty);

        private constructor ()
    }

}

declare module 'UnityEngine.EventSystems' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'

    interface BaseInputModule {

    }

    interface UIBehaviour {

    }

    interface RaycastResult {

    }

    interface PointerEventData {

    }

    interface BaseEventData {

    }

    interface AbstractEventData {

    }

    interface EventSystem {

    }

    interface BaseRaycaster {

    }

    interface IPointerDownHandler extends IEventSystemHandler {

    }

    interface IEventSystemHandler {

    }

    interface IPointerUpHandler extends IEventSystemHandler {

    }

    interface IDragHandler extends IEventSystemHandler {

    }

}

declare module 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' {

    enum CursorLockBehavior {
        OutsideScreen = 0,
        ScreenCenter = 1 
    }

}

declare module 'UnityEngine.InputSystem.Users' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine_InputSystem_Users_InputUser from 'UnityEngine.InputSystem.Users.InputUser'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'
    import * as UnityEngine_InputSystem_InputControlScheme from 'UnityEngine.InputSystem.InputControlScheme'

    class InputUser extends System.ValueType implements System.IEquatable$1<InputUser> {

        public static InvalidId : uint
        public get valid(): boolean;
        public get index(): int;
        public get id(): uint;
        public get platformUserAccountHandle(): System.Nullable$1<InputUserAccountHandle>;
        public get platformUserAccountName(): string;
        public get platformUserAccountId(): string;
        public get pairedDevices(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem.InputDevice>;
        public get lostDevices(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem.InputDevice>;
        public get actions(): UnityEngine_InputSystem.IInputActionCollection;
        public get controlScheme(): System.Nullable$1<UnityEngine_InputSystem.InputControlScheme>;
        public get controlSchemeMatch(): UnityEngine_InputSystem_InputControlScheme.MatchResult;
        public get hasMissingRequiredDevices(): boolean;
        public static get all(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputUser>;
        public static get listenForUnpairedDeviceActivity(): int;
        public static set listenForUnpairedDeviceActivity(value: int);

        public ToString () : string
        public AssociateActionsWithUser ($actions: UnityEngine_InputSystem.IInputActionCollection) : void
        public ActivateControlScheme ($schemeName: string) : UnityEngine_InputSystem_Users_InputUser.ControlSchemeChangeSyntax
        public ActivateControlScheme ($scheme: UnityEngine_InputSystem.InputControlScheme) : UnityEngine_InputSystem_Users_InputUser.ControlSchemeChangeSyntax
        public UnpairDevice ($device: UnityEngine_InputSystem.InputDevice) : void
        public UnpairDevices () : void
        public UnpairDevicesAndRemoveUser () : void
        public static GetUnpairedInputDevices () : UnityEngine_InputSystem.InputControlList$1<UnityEngine_InputSystem.InputDevice>
        public static GetUnpairedInputDevices ($list: $Ref<UnityEngine_InputSystem.InputControlList$1<UnityEngine_InputSystem.InputDevice>>) : int
        public static FindUserPairedToDevice ($device: UnityEngine_InputSystem.InputDevice) : System.Nullable$1<InputUser>
        public static FindUserByAccount ($platformUserAccountHandle: InputUserAccountHandle) : System.Nullable$1<InputUser>
        public static CreateUserWithoutPairedDevices () : InputUser
        public static PerformPairingWithDevice ($device: UnityEngine_InputSystem.InputDevice, $user?: InputUser, $options?: InputUserPairingOptions) : InputUser
        public Equals ($other: InputUser) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public static add_onChange ($value: System.Action$3<InputUser, InputUserChange, UnityEngine_InputSystem.InputDevice>) : void
        public static add_onUnpairedDeviceUsed ($value: System.Action$2<UnityEngine_InputSystem.InputControl, UnityEngine_InputSystem_LowLevel.InputEventPtr>) : void
        public static add_onPrefilterUnpairedDeviceActivity ($value: System.Func$3<UnityEngine_InputSystem.InputDevice, UnityEngine_InputSystem_LowLevel.InputEventPtr, boolean>) : void
        public static remove_onChange ($value: System.Action$3<InputUser, InputUserChange, UnityEngine_InputSystem.InputDevice>) : void
        public static remove_onUnpairedDeviceUsed ($value: System.Action$2<UnityEngine_InputSystem.InputControl, UnityEngine_InputSystem_LowLevel.InputEventPtr>) : void
        public static remove_onPrefilterUnpairedDeviceActivity ($value: System.Func$3<UnityEngine_InputSystem.InputDevice, UnityEngine_InputSystem_LowLevel.InputEventPtr, boolean>) : void
        public static op_Equality ($left: InputUser, $right: InputUser) : boolean
        public static op_Inequality ($left: InputUser, $right: InputUser) : boolean
    }

    class InputUserAccountHandle extends System.ValueType implements System.IEquatable$1<InputUserAccountHandle> {

        public get apiName(): string;
        public get handle(): bigint;

        public constructor ($apiName: string, $handle: bigint)
        public ToString () : string
        public Equals ($other: InputUserAccountHandle) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public static op_Equality ($left: InputUserAccountHandle, $right: InputUserAccountHandle) : boolean
        public static op_Inequality ($left: InputUserAccountHandle, $right: InputUserAccountHandle) : boolean
    }

    enum InputUserPairingOptions {
        None = 0,
        ForcePlatformUserAccountSelection = 1,
        ForceNoPlatformUserAccountSelection = 2,
        UnpairCurrentDevicesFromUser = 8 
    }

    enum InputUserChange {
        Added = 0,
        Removed = 1,
        DevicePaired = 2,
        DeviceUnpaired = 3,
        DeviceLost = 4,
        DeviceRegained = 5,
        AccountChanged = 6,
        AccountNameChanged = 7,
        AccountSelectionInProgress = 8,
        AccountSelectionCanceled = 9,
        AccountSelectionComplete = 10,
        ControlSchemeChanged = 11,
        ControlsChanged = 12 
    }

}

declare module 'UnityEngine.InputSystem.Users.InputUser' {
    import * as System from 'System'

    class ControlSchemeChangeSyntax extends System.ValueType {

        public AndPairRemainingDevices () : ControlSchemeChangeSyntax
    }

}

declare module 'UnityEngine.InputSystem.PlayerInputManager' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    class PlayerJoinedEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_InputSystem.PlayerInput> {

        public constructor ()
    }

    class PlayerLeftEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_InputSystem.PlayerInput> {

        public constructor ()
    }

}

declare module 'UnityEngine.InputSystem.UI.VirtualMouseInput' {

    enum CursorMode {
        SoftwareCursor = 0,
        HardwareCursorIfAvailable = 1 
    }

}

declare module 'UnityEngine.UI' {
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'

    interface Graphic extends ICanvasElement {

    }

    interface ICanvasElement {

    }

}

declare module 'UnityEngine.InputSystem.OnScreen' {
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_InputSystem_OnScreen_OnScreenStick from 'UnityEngine.InputSystem.OnScreen.OnScreenStick'

    class OnScreenButton extends OnScreenControl implements UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IPointerUpHandler {

        public get controlPath(): string;
        public set controlPath(value: string);
        public get control(): UnityEngine_InputSystem.InputControl;

        private constructor ()
        public OnPointerUp ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
    }

    class OnScreenControl extends UnityEngine.MonoBehaviour {

        public get controlPath(): string;
        public set controlPath(value: string);
        public get control(): UnityEngine_InputSystem.InputControl;

        private constructor ()
    }

    class OnScreenStick extends OnScreenControl implements UnityEngine_EventSystems.IDragHandler, UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IPointerUpHandler {

        public get controlPath(): string;
        public set controlPath(value: string);
        public get control(): UnityEngine_InputSystem.InputControl;
        public get movementRange(): float;
        public set movementRange(value: float);
        public get dynamicOriginRange(): float;
        public set dynamicOriginRange(value: float);
        public get useIsolatedInputActions(): boolean;
        public set useIsolatedInputActions(value: boolean);
        public get behaviour(): UnityEngine_InputSystem_OnScreen_OnScreenStick.Behaviour;
        public set behaviour(value: UnityEngine_InputSystem_OnScreen_OnScreenStick.Behaviour);

        private constructor ()
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerUp ($eventData: UnityEngine_EventSystems.PointerEventData) : void
    }

}

declare module 'UnityEngine.InputSystem.OnScreen.OnScreenStick' {

    enum Behaviour {
        RelativePositionWithStaticOrigin = 0,
        ExactPositionWithStaticOrigin = 1,
        ExactPositionWithDynamicOrigin = 2 
    }

}

declare module 'UnityEngine.InputSystem.HID' {
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as System from 'System'
    import * as UnityEngine_InputSystem_HID_HID from 'UnityEngine.InputSystem.HID.HID'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as UnityEngine_InputSystem_Layouts from 'UnityEngine.InputSystem.Layouts'
    import * as UnityEngine_InputSystem_HID_HIDSupport from 'UnityEngine.InputSystem.HID.HIDSupport'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_InputControlExtensions from 'UnityEngine.InputSystem.InputControlExtensions'

    class HID extends UnityEngine_InputSystem.InputDevice {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public static get QueryHIDReportDescriptorDeviceCommandType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static get QueryHIDReportDescriptorSizeDeviceCommandType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static get QueryHIDParsedReportDescriptorDeviceCommandType(): UnityEngine_InputSystem_Utilities.FourCC;
        public get hidDescriptor(): UnityEngine_InputSystem_HID_HID.HIDDeviceDescriptor;

        public constructor ()
        public static UsagePageToString ($usagePage: UnityEngine_InputSystem_HID_HID.UsagePage) : string
        public static UsageToString ($usagePage: UnityEngine_InputSystem_HID_HID.UsagePage, $usage: int) : string
    }

    class HIDSupport {

        public static get supportedHIDUsages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_HID_HIDSupport.HIDPageUsage>;
        public static set supportedHIDUsages(value: UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_HID_HIDSupport.HIDPageUsage>);

    }

    interface HID {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

}

declare module 'UnityEngine.InputSystem.HID.HID' {
    import * as System from 'System'

    enum UsagePage {
        Undefined = 0,
        GenericDesktop = 1,
        Simulation = 2,
        VRControls = 3,
        SportControls = 4,
        GameControls = 5,
        GenericDeviceControls = 6,
        Keyboard = 7,
        LEDs = 8,
        Button = 9,
        Ordinal = 10,
        Telephony = 11,
        Consumer = 12,
        Digitizer = 13,
        PID = 15,
        Unicode = 16,
        AlphanumericDisplay = 20,
        MedicalInstruments = 64,
        Monitor = 128,
        Power = 132,
        BarCodeScanner = 140,
        MagneticStripeReader = 142,
        Camera = 144,
        Arcade = 145,
        VendorDefined = 65280 
    }

    class HIDDeviceDescriptor extends System.ValueType {

        public vendorId : int
        public productId : int
        public usage : int
        public usagePage : UsagePage
        public inputReportSize : int
        public outputReportSize : int
        public featureReportSize : int
        public elements : HIDElementDescriptor[]
        public collections : HIDCollectionDescriptor[]

        public ToJson () : string
        public static FromJson ($json: string) : HIDDeviceDescriptor
    }

    class HIDElementDescriptor extends System.ValueType {

        public usage : int
        public usagePage : UsagePage
        public unit : int
        public unitExponent : int
        public logicalMin : int
        public logicalMax : int
        public physicalMin : int
        public physicalMax : int
        public reportType : HIDReportType
        public collectionIndex : int
        public reportId : int
        public reportSizeInBits : int
        public reportOffsetInBits : int
        public flags : HIDElementFlags
        public usageMin : System.Nullable$1<int>
        public usageMax : System.Nullable$1<int>
        public get hasNullState(): boolean;
        public get hasPreferredState(): boolean;
        public get isArray(): boolean;
        public get isNonLinear(): boolean;
        public get isRelative(): boolean;
        public get isConstant(): boolean;
        public get isWrapping(): boolean;

        public Is ($usagePage: UsagePage, $usage: int) : boolean
    }

    enum HIDReportType {
        Unknown = 0,
        Input = 1,
        Output = 2,
        Feature = 3 
    }

    enum HIDElementFlags {
        Constant = 1,
        Variable = 2,
        Relative = 4,
        Wrap = 8,
        NonLinear = 16,
        NoPreferred = 32,
        NullState = 64,
        Volatile = 128,
        BufferedBytes = 256 
    }

    class HIDCollectionDescriptor extends System.ValueType {

        public type : HIDCollectionType
        public usage : int
        public usagePage : UsagePage
        public parent : int
        public childCount : int
        public firstChild : int

    }

    enum HIDCollectionType {
        Physical = 0,
        Application = 1,
        Logical = 2,
        Report = 3,
        NamedArray = 4,
        UsageSwitch = 5,
        UsageModifier = 6 
    }

    enum GenericDesktop {
        Undefined = 0,
        Pointer = 1,
        Mouse = 2,
        Joystick = 4,
        Gamepad = 5,
        Keyboard = 6,
        Keypad = 7,
        MultiAxisController = 8,
        TabletPCControls = 9,
        AssistiveControl = 10,
        X = 48,
        Y = 49,
        Z = 50,
        Rx = 51,
        Ry = 52,
        Rz = 53,
        Slider = 54,
        Dial = 55,
        Wheel = 56,
        HatSwitch = 57,
        CountedBuffer = 58,
        ByteCount = 59,
        MotionWakeup = 60,
        Start = 61,
        Select = 62,
        Vx = 64,
        Vy = 65,
        Vz = 66,
        Vbrx = 67,
        Vbry = 68,
        Vbrz = 69,
        Vno = 70,
        FeatureNotification = 71,
        ResolutionMultiplier = 72,
        SystemControl = 128,
        SystemPowerDown = 129,
        SystemSleep = 130,
        SystemWakeUp = 131,
        SystemContextMenu = 132,
        SystemMainMenu = 133,
        SystemAppMenu = 134,
        SystemMenuHelp = 135,
        SystemMenuExit = 136,
        SystemMenuSelect = 137,
        SystemMenuRight = 138,
        SystemMenuLeft = 139,
        SystemMenuUp = 140,
        SystemMenuDown = 141,
        SystemColdRestart = 142,
        SystemWarmRestart = 143,
        DpadUp = 144,
        DpadDown = 145,
        DpadRight = 146,
        DpadLeft = 147,
        SystemDock = 160,
        SystemUndock = 161,
        SystemSetup = 162,
        SystemBreak = 163,
        SystemDebuggerBreak = 164,
        ApplicationBreak = 165,
        ApplicationDebuggerBreak = 166,
        SystemSpeakerMute = 167,
        SystemHibernate = 168,
        SystemDisplayInvert = 176,
        SystemDisplayInternal = 177,
        SystemDisplayExternal = 178,
        SystemDisplayBoth = 179,
        SystemDisplayDual = 180,
        SystemDisplayToggleIntExt = 181,
        SystemDisplaySwapPrimarySecondary = 182,
        SystemDisplayLCDAutoScale = 183 
    }

    class HIDDeviceDescriptorBuilder extends System.ValueType {

        public usagePage : UsagePage
        public usage : int

        public constructor ($usagePage: UsagePage, $usage: int)
        public constructor ($usage: GenericDesktop)
        public StartReport ($reportType: HIDReportType, $reportId?: int) : HIDDeviceDescriptorBuilder
        /**
        * @methodSwap AddElement_EBB7509C_H8A87F20C
        */
        public AddElement ($usagePage: UsagePage, $usage: int, $sizeInBits: int) : HIDDeviceDescriptorBuilder
        /**
        * @methodSwap AddElement_EBB7509C_H795C59A0
        */
        public AddElement ($usage: GenericDesktop, $sizeInBits: int) : HIDDeviceDescriptorBuilder
        public WithPhysicalMinMax ($min: int, $max: int) : HIDDeviceDescriptorBuilder
        public WithLogicalMinMax ($min: int, $max: int) : HIDDeviceDescriptorBuilder
        public Finish () : HIDDeviceDescriptor
    }

    enum Simulation {
        Undefined = 0,
        FlightSimulationDevice = 1,
        AutomobileSimulationDevice = 2,
        TankSimulationDevice = 3,
        SpaceshipSimulationDevice = 4,
        SubmarineSimulationDevice = 5,
        SailingSimulationDevice = 6,
        MotorcycleSimulationDevice = 7,
        SportsSimulationDevice = 8,
        AirplaneSimulationDevice = 9,
        HelicopterSimulationDevice = 10,
        MagicCarpetSimulationDevice = 11,
        BicylcleSimulationDevice = 12,
        FlightControlStick = 32,
        FlightStick = 33,
        CyclicControl = 34,
        CyclicTrim = 35,
        FlightYoke = 36,
        TrackControl = 37,
        Aileron = 176,
        AileronTrim = 177,
        AntiTorqueControl = 178,
        AutopilotEnable = 179,
        ChaffRelease = 180,
        CollectiveControl = 181,
        DiveBreak = 182,
        ElectronicCountermeasures = 183,
        Elevator = 184,
        ElevatorTrim = 185,
        Rudder = 186,
        Throttle = 187,
        FlightCommunications = 188,
        FlareRelease = 189,
        LandingGear = 190,
        ToeBreak = 191,
        Trigger = 192,
        WeaponsArm = 193,
        WeaponsSelect = 194,
        WingFlaps = 195,
        Accelerator = 196,
        Brake = 197,
        Clutch = 198,
        Shifter = 199,
        Steering = 200,
        TurretDirection = 201,
        BarrelElevation = 202,
        DivePlane = 203,
        Ballast = 204,
        BicycleCrank = 205,
        HandleBars = 206,
        FrontBrake = 207,
        RearBrake = 208 
    }

    enum Button {
        Undefined = 0,
        Primary = 1,
        Secondary = 2,
        Tertiary = 3 
    }

}

declare module 'UnityEngine.InputSystem.HID.HIDSupport' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem_HID_HID from 'UnityEngine.InputSystem.HID.HID'

    class HIDPageUsage extends System.ValueType {

        public page : UnityEngine_InputSystem_HID_HID.UsagePage
        public usage : int

        public constructor ($page: UnityEngine_InputSystem_HID_HID.UsagePage, $usage: int)
        public constructor ($usage: UnityEngine_InputSystem_HID_HID.GenericDesktop)
    }

}

declare module 'UnityEngine.InputSystem.EnhancedTouch' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'

    class EnhancedTouchSupport {

        public static get enabled(): boolean;

        public static Enable () : void
        public static Disable () : void
    }

    class Finger extends System.Object {

        public get screen(): UnityEngine_InputSystem.Touchscreen;
        public get index(): int;
        public get isActive(): boolean;
        public get screenPosition(): UnityEngine.Vector2;
        public get lastTouch(): Touch;
        public get currentTouch(): Touch;
        public get touchHistory(): TouchHistory;

    }

    class Touch extends System.ValueType implements System.IEquatable$1<Touch> {

        public get valid(): boolean;
        public get finger(): Finger;
        public get phase(): UnityEngine_InputSystem.TouchPhase;
        public get began(): boolean;
        public get inProgress(): boolean;
        public get ended(): boolean;
        public get touchId(): int;
        public get pressure(): float;
        public get radius(): UnityEngine.Vector2;
        public get startTime(): double;
        public get time(): double;
        public get screen(): UnityEngine_InputSystem.Touchscreen;
        public get screenPosition(): UnityEngine.Vector2;
        public get startScreenPosition(): UnityEngine.Vector2;
        public get delta(): UnityEngine.Vector2;
        public get tapCount(): int;
        public get isTap(): boolean;
        public get displayIndex(): int;
        public get isInProgress(): boolean;
        public get history(): TouchHistory;
        public static get activeTouches(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<Touch>;
        public static get fingers(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<Finger>;
        public static get activeFingers(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<Finger>;
        public static get screens(): System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem.Touchscreen>;
        public static get maxHistoryLengthPerFinger(): int;

        public ToString () : string
        public Equals ($other: Touch) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public static add_onFingerDown ($value: System.Action$1<Finger>) : void
        public static add_onFingerUp ($value: System.Action$1<Finger>) : void
        public static add_onFingerMove ($value: System.Action$1<Finger>) : void
        public static remove_onFingerDown ($value: System.Action$1<Finger>) : void
        public static remove_onFingerUp ($value: System.Action$1<Finger>) : void
        public static remove_onFingerMove ($value: System.Action$1<Finger>) : void
    }

    class TouchHistory extends System.ValueType implements System_Collections_Generic.IReadOnlyList$1<Touch> {

        public get Count(): int;

        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<Touch>
        public get_Item ($index: int) : Touch
    }

    class TouchSimulation extends UnityEngine.MonoBehaviour implements UnityEngine_InputSystem_LowLevel.IInputStateChangeMonitor {

        public get simulatedTouchscreen(): UnityEngine_InputSystem.Touchscreen;
        public static get instance(): TouchSimulation;

        private constructor ()
        public static Enable () : void
        public static Disable () : void
        public static Destroy () : void
    }

}

declare module 'UnityEngine.InputSystem.DualShock' {
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as UnityEngine_InputSystem_Layouts from 'UnityEngine.InputSystem.Layouts'
    import * as UnityEngine_InputSystem_Controls from 'UnityEngine.InputSystem.Controls'
    import * as UnityEngine_InputSystem_Haptics from 'UnityEngine.InputSystem.Haptics'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_InputControlExtensions from 'UnityEngine.InputSystem.InputControlExtensions'

    class DualShockGamepad extends UnityEngine_InputSystem.Gamepad implements IDualShockHaptics {

        public get name(): string;
        public get displayName(): string;
        public get shortDisplayName(): string;
        public get path(): string;
        public get layout(): string;
        public get variants(): string;
        public get device(): InputDevice;
        public get parent(): InputControl;
        public get children(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get usages(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get aliases(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_Utilities.InternedString>;
        public get stateBlock(): UnityEngine_InputSystem_LowLevel.InputStateBlock;
        public get noisy(): boolean;
        public get synthetic(): boolean;
        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public get magnitude(): float;
        public get optimizedControlDataType(): UnityEngine_InputSystem_Utilities.FourCC;
        public static InvalidDeviceId : int
        public get description(): UnityEngine_InputSystem_Layouts.InputDeviceDescription;
        public get enabled(): boolean;
        public get canRunInBackground(): boolean;
        public get added(): boolean;
        public get remote(): boolean;
        public get native(): boolean;
        public get updateBeforeRender(): boolean;
        public get deviceId(): int;
        public get lastUpdateTime(): double;
        public get wasUpdatedThisFrame(): boolean;
        public get allControls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        public get buttonWest(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get buttonNorth(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get buttonSouth(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get buttonEast(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get leftStickButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get rightStickButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get startButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get selectButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get dpad(): UnityEngine_InputSystem_Controls.DpadControl;
        public get leftShoulder(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get rightShoulder(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get leftStick(): UnityEngine_InputSystem_Controls.StickControl;
        public get rightStick(): UnityEngine_InputSystem_Controls.StickControl;
        public get leftTrigger(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get rightTrigger(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get aButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get bButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get xButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get yButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get triangleButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get squareButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get circleButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get crossButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public static get current(): Gamepad;
        public static get all(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<Gamepad>;
        public get touchpadButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get optionsButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get shareButton(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get L1(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get R1(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get L2(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get R2(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get L3(): UnityEngine_InputSystem_Controls.ButtonControl;
        public get R3(): UnityEngine_InputSystem_Controls.ButtonControl;

        public constructor ()
        public MakeCurrent () : void
        public SetLightBarColor ($color: UnityEngine.Color) : void
    }

    interface IDualShockHaptics extends UnityEngine_InputSystem_Haptics.IDualMotorRumble {

        SetLightBarColor? ($color: UnityEngine.Color) : void
    }

    interface DualShockGamepad {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo>
        */
        CopyState<TState extends UnityEngine_InputSystem_LowLevel.IInputStateTypeInfo> ($state: $Ref<TState>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        * @methodSwap Setup_EBB7509C_H79F2835C
        */
        Setup ($controlCount: int, $usageCount: int, $aliasCount: int) : UnityEngine_InputSystem_InputControlExtensions.DeviceBuilder
    }

}

declare module 'System.IO' {
    import * as System from 'System'

    interface Stream extends System.IAsyncDisposable, System.IDisposable {

    }

}

declare module 'UnityEngine.InputSystem.LowLevel.InputEventTrace' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'

    class ReplayController extends System.Object implements System.IDisposable {

        public get trace(): UnityEngine_InputSystem_LowLevel.InputEventTrace;
        public get finished(): boolean;
        public get paused(): boolean;
        public set paused(value: boolean);
        public get position(): int;
        public get createdDevices(): System_Collections_Generic.IEnumerable$1<UnityEngine_InputSystem.InputDevice>;

        public Dispose () : void
        public WithDeviceMappedFromTo ($recordedDevice: UnityEngine_InputSystem.InputDevice, $playbackDevice: UnityEngine_InputSystem.InputDevice) : ReplayController
        /**
        * @methodSwap WithDeviceMappedFromTo_EBB7509C_H2CFB2EE5
        */
        public WithDeviceMappedFromTo ($recordedDeviceId: int, $playbackDeviceId: int) : ReplayController
        public WithAllDevicesMappedToNewInstances () : ReplayController
        public OnFinished ($action: System.Action) : ReplayController
        public OnEvent ($action: System.Action$1<UnityEngine_InputSystem_LowLevel.InputEventPtr>) : ReplayController
        public PlayOneEvent () : ReplayController
        public Rewind () : ReplayController
        public PlayAllFramesOneByOne () : ReplayController
        public PlayAllEvents () : ReplayController
        public PlayAllEventsAccordingToTimestamps () : ReplayController
    }

    class DeviceInfo extends System.ValueType {

        public get deviceId(): int;
        public set deviceId(value: int);
        public get layout(): string;
        public set layout(value: string);
        public get stateFormat(): UnityEngine_InputSystem_Utilities.FourCC;
        public set stateFormat(value: UnityEngine_InputSystem_Utilities.FourCC);
        public get stateSizeInBytes(): int;
        public set stateSizeInBytes(value: int);

    }

}

declare module 'UnityEngine.InputSystem.LowLevel.InputStateHistory' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'

    class Record extends System.ValueType implements System.IEquatable$1<Record> {

        public get valid(): boolean;
        public get owner(): UnityEngine_InputSystem_LowLevel.InputStateHistory;
        public get index(): int;
        public get time(): double;
        public get control(): UnityEngine_InputSystem.InputControl;
        public get next(): Record;
        public get previous(): Record;

        public ReadValue<TValue> () : TValue
        public ReadValueAsObject () : any
        public CopyFrom ($record: Record) : void
        public Equals ($other: Record) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

}

declare module 'UnityEngine.InputSystem.LowLevel.InputStateHistory$1' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'

    class Record<TValue> extends System.ValueType implements System.IEquatable$1<Record<TValue>> {

        public get valid(): boolean;
        public get owner(): UnityEngine_InputSystem_LowLevel.InputStateHistory$1<TValue>;
        public get index(): int;
        public get time(): double;
        public get control(): UnityEngine_InputSystem.InputControl$1<TValue>;
        public get next(): Record<TValue>;
        public get previous(): Record<TValue>;

        public ReadValue () : TValue
        public CopyFrom ($record: Record<TValue>) : void
        public Equals ($other: Record<TValue>) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

}

declare module 'UnityEngine.InputSystem.LowLevel.InitiateUserAccountPairingCommand' {

    enum Result {
        SuccessfullyInitiated = 1,
        ErrorNotSupported = -1,
        ErrorAlreadyInProgress = -2 
    }

}

declare module 'UnityEngine.InputSystem.LowLevel.QueryPairedUserAccountCommand' {

    enum Result {
        DevicePairedToUserAccount = 2,
        UserAccountSelectionInProgress = 4,
        UserAccountSelectionComplete = 8,
        UserAccountSelectionCanceled = 16 
    }

}

declare module 'UnityEngine.InputSystem.Processors' {
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    class AxisDeadzoneProcessor extends UnityEngine_InputSystem.InputProcessor$1<float> {

        public min : float
        public max : float

        public constructor ()
        public Process ($value: float, $control?: UnityEngine_InputSystem.InputControl) : float
        public ToString () : string
    }

    class ClampProcessor extends UnityEngine_InputSystem.InputProcessor$1<float> {

        public min : float
        public max : float

        public constructor ()
        public Process ($value: float, $control: UnityEngine_InputSystem.InputControl) : float
        public ToString () : string
    }

    class InvertProcessor extends UnityEngine_InputSystem.InputProcessor$1<float> {

        public constructor ()
        public Process ($value: float, $control: UnityEngine_InputSystem.InputControl) : float
        public ToString () : string
    }

    class InvertVector2Processor extends UnityEngine_InputSystem.InputProcessor$1<UnityEngine.Vector2> {

        public invertX : boolean
        public invertY : boolean

        public constructor ()
        public Process ($value: UnityEngine.Vector2, $control: UnityEngine_InputSystem.InputControl) : UnityEngine.Vector2
        public ToString () : string
    }

    class InvertVector3Processor extends UnityEngine_InputSystem.InputProcessor$1<UnityEngine.Vector3> {

        public invertX : boolean
        public invertY : boolean
        public invertZ : boolean

        public constructor ()
        public Process ($value: UnityEngine.Vector3, $control: UnityEngine_InputSystem.InputControl) : UnityEngine.Vector3
        public ToString () : string
    }

    class NormalizeProcessor extends UnityEngine_InputSystem.InputProcessor$1<float> {

        public min : float
        public max : float
        public zero : float

        public constructor ()
        public Process ($value: float, $control: UnityEngine_InputSystem.InputControl) : float
        public static Normalize ($value: float, $min: float, $max: float, $zero: float) : float
        public ToString () : string
    }

    class NormalizeVector2Processor extends UnityEngine_InputSystem.InputProcessor$1<UnityEngine.Vector2> {

        public constructor ()
        public Process ($value: UnityEngine.Vector2, $control: UnityEngine_InputSystem.InputControl) : UnityEngine.Vector2
        public ToString () : string
    }

    class NormalizeVector3Processor extends UnityEngine_InputSystem.InputProcessor$1<UnityEngine.Vector3> {

        public constructor ()
        public Process ($value: UnityEngine.Vector3, $control: UnityEngine_InputSystem.InputControl) : UnityEngine.Vector3
        public ToString () : string
    }

    class ScaleProcessor extends UnityEngine_InputSystem.InputProcessor$1<float> {

        public factor : float

        public constructor ()
        public Process ($value: float, $control: UnityEngine_InputSystem.InputControl) : float
        public ToString () : string
    }

    class ScaleVector2Processor extends UnityEngine_InputSystem.InputProcessor$1<UnityEngine.Vector2> {

        public x : float
        public y : float

        public constructor ()
        public Process ($value: UnityEngine.Vector2, $control: UnityEngine_InputSystem.InputControl) : UnityEngine.Vector2
        public ToString () : string
    }

    class ScaleVector3Processor extends UnityEngine_InputSystem.InputProcessor$1<UnityEngine.Vector3> {

        public x : float
        public y : float
        public z : float

        public constructor ()
        public Process ($value: UnityEngine.Vector3, $control: UnityEngine_InputSystem.InputControl) : UnityEngine.Vector3
        public ToString () : string
    }

    class StickDeadzoneProcessor extends UnityEngine_InputSystem.InputProcessor$1<UnityEngine.Vector2> {

        public min : float
        public max : float

        public constructor ()
        public Process ($value: UnityEngine.Vector2, $control?: UnityEngine_InputSystem.InputControl) : UnityEngine.Vector2
        public ToString () : string
    }

}

declare module 'UnityEngine.InputSystem.Layouts.InputControlLayout.Builder' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class ControlBuilder extends System.ValueType {

        public WithDisplayName ($displayName: string) : ControlBuilder
        public WithLayout ($layout: string) : ControlBuilder
        public WithFormat ($format: UnityEngine_InputSystem_Utilities.FourCC) : ControlBuilder
        public WithFormat ($format: string) : ControlBuilder
        public WithByteOffset ($offset: uint) : ControlBuilder
        public WithBitOffset ($bit: uint) : ControlBuilder
        public IsSynthetic ($value: boolean) : ControlBuilder
        public IsNoisy ($value: boolean) : ControlBuilder
        public DontReset ($value: boolean) : ControlBuilder
        public WithSizeInBits ($sizeInBits: uint) : ControlBuilder
        public WithRange ($minValue: float, $maxValue: float) : ControlBuilder
        public WithUsages (...usages: UnityEngine_InputSystem_Utilities.InternedString[]) : ControlBuilder
        public WithUsages ($usages: System_Collections_Generic.IEnumerable$1<string>) : ControlBuilder
        public WithUsages (...usages: string[]) : ControlBuilder
        public WithParameters ($parameters: string) : ControlBuilder
        public WithProcessors ($processors: string) : ControlBuilder
        public WithDefaultState ($value: UnityEngine_InputSystem_Utilities.PrimitiveValue) : ControlBuilder
        public UsingStateFrom ($path: string) : ControlBuilder
        public AsArrayOfControlsWithSize ($arraySize: int) : ControlBuilder
    }

}

declare module 'UnityEngine.InputSystem.Controls.DiscreteButtonControl' {

    enum WriteMode {
        WriteDisabled = 0,
        WriteNullAndMaxValue = 1 
    }

}

declare module 'UnityEngine.InputSystem.Controls.DpadControl' {
    import * as UnityEngine_InputSystem_Controls from 'UnityEngine.InputSystem.Controls'
    import * as UnityEngine_InputSystem_Controls_AxisControl from 'UnityEngine.InputSystem.Controls.AxisControl'
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as UnityEngine_InputSystem_LowLevel from 'UnityEngine.InputSystem.LowLevel'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_InputSystem_InputControlExtensions from 'UnityEngine.InputSystem.InputControlExtensions'

    class DpadAxisControl extends UnityEngine_InputSystem_Controls.AxisControl {

        public clamp : UnityEngine_InputSystem_Controls_AxisControl.Clamp
        public clampMin : float
        public clampMax : float
        public clampConstant : float
        public invert : boolean
        public normalize : boolean
        public normalizeMin : float
        public normalizeMax : float
        public normalizeZero : float
        public scale : boolean
        public scaleFactor : float
        public get component(): int;
        public set component(value: int);

        public constructor ()
    }

    interface DpadAxisControl {

        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindInParentChain<TControl extends UnityEngine_InputSystem.InputControl> () : TControl
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsPressed
        * @methodSwap IsPressed_EBB7509C_E4A51823
        */
        IsPressed ($buttonPressPoint?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.IsActuated
        * @methodSwap IsActuated_EBB7509C_E4A51823
        */
        IsActuated ($threshold?: float) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueAsObject
        */
        ReadValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadDefaultValueAsObject
        */
        ReadDefaultValueAsObject () : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ReadValueFromEventAsObject
        */
        ReadValueFromEventAsObject ($inputEvent: UnityEngine_InputSystem_LowLevel.InputEventPtr) : any
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueFromObjectIntoEvent
        */
        WriteValueFromObjectIntoEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr, $value: any) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.WriteValueIntoEvent<TValue>
        */
        WriteValueIntoEvent<TValue> ($value: TValue, $eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefault
        */
        CheckStateIsAtDefault () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.CheckStateIsAtDefaultIgnoringNoise
        */
        CheckStateIsAtDefaultIgnoringNoise () : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.HasValueChangeInEvent
        */
        HasValueChangeInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.ResetToDefaultStateInEvent
        */
        ResetToDefaultStateInEvent ($eventPtr: UnityEngine_InputSystem_LowLevel.InputEventPtr) : boolean
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl>
        */
        FindControlsRecursive<TControl extends UnityEngine_InputSystem.InputControl> ($controls: System_Collections_Generic.IList$1<TControl>, $predicate: System.Func$2<TControl, boolean>) : void
        /**
        * @extension UnityEngine.InputSystem.InputControlExtensions.Setup
        */
        Setup () : UnityEngine_InputSystem_InputControlExtensions.ControlBuilder
    }

}

declare module 'UnityEngine.InputSystem.Interactions' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'

    class HoldInteraction extends System.Object implements UnityEngine_InputSystem.IInputInteraction {

        public duration : float
        public pressPoint : float

        public constructor ()
        public Process ($context: $Ref<UnityEngine_InputSystem.InputInteractionContext>) : void
        public Reset () : void
    }

    class MultiTapInteraction extends System.Object implements UnityEngine_InputSystem.IInputInteraction$1<float> {

        public tapTime : float
        public tapDelay : float
        public tapCount : int
        public pressPoint : float

        public constructor ()
        public Process ($context: $Ref<UnityEngine_InputSystem.InputInteractionContext>) : void
        public Reset () : void
    }

    class PressInteraction extends System.Object implements UnityEngine_InputSystem.IInputInteraction {

        public pressPoint : float
        public behavior : PressBehavior

        public constructor ()
        public Process ($context: $Ref<UnityEngine_InputSystem.InputInteractionContext>) : void
        public Reset () : void
    }

    enum PressBehavior {
        PressOnly = 0,
        ReleaseOnly = 1,
        PressAndRelease = 2 
    }

    class SlowTapInteraction extends System.Object implements UnityEngine_InputSystem.IInputInteraction {

        public duration : float
        public pressPoint : float

        public constructor ()
        public Process ($context: $Ref<UnityEngine_InputSystem.InputInteractionContext>) : void
        public Reset () : void
    }

    class TapInteraction extends System.Object implements UnityEngine_InputSystem.IInputInteraction {

        public duration : float
        public pressPoint : float

        public constructor ()
        public Process ($context: $Ref<UnityEngine_InputSystem.InputInteractionContext>) : void
        public Reset () : void
    }

}

declare module 'UnityEngine.InputSystem.Utilities.InputActionTrace' {
    import * as System from 'System'
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'

    class ActionEventPtr extends System.ValueType {

        public get action(): UnityEngine_InputSystem.InputAction;
        public get phase(): UnityEngine_InputSystem.InputActionPhase;
        public get control(): UnityEngine_InputSystem.InputControl;
        public get interaction(): UnityEngine_InputSystem.IInputInteraction;
        public get time(): double;
        public get startTime(): double;
        public get duration(): double;
        public get valueSizeInBytes(): int;

        public ReadValueAsObject () : any
        public ReadValue<TValue> () : TValue
        public ToString () : string
    }

}

declare module 'UnityEngine.InputSystem.Composites' {
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem'
    import * as System from 'System'
    import * as UnityEngine_InputSystem_Composites_AxisComposite from 'UnityEngine.InputSystem.Composites.AxisComposite'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_InputSystem_Composites_Vector2Composite from 'UnityEngine.InputSystem.Composites.Vector2Composite'
    import * as UnityEngine_InputSystem_Composites_Vector3Composite from 'UnityEngine.InputSystem.Composites.Vector3Composite'

    class AxisComposite extends UnityEngine_InputSystem.InputBindingComposite$1<float> {

        public negative : int
        public positive : int
        public minValue : float
        public maxValue : float
        public whichSideWins : UnityEngine_InputSystem_Composites_AxisComposite.WhichSideWins
        public get midPoint(): float;

        public constructor ()
        public ReadValue ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : float
        public EvaluateMagnitude ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : float
    }

    class ButtonWithOneModifier extends UnityEngine_InputSystem.InputBindingComposite$1<float> {

        public modifier : int
        public button : int
        public overrideModifiersNeedToBePressedFirst : boolean

        public constructor ()
        public ReadValue ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : float
        public EvaluateMagnitude ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : float
    }

    class ButtonWithTwoModifiers extends UnityEngine_InputSystem.InputBindingComposite$1<float> {

        public modifier1 : int
        public modifier2 : int
        public button : int
        public overrideModifiersNeedToBePressedFirst : boolean

        public constructor ()
        public ReadValue ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : float
        public EvaluateMagnitude ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : float
    }

    class OneModifierComposite extends UnityEngine_InputSystem.InputBindingComposite {

        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public modifier : int
        public binding : int
        public overrideModifiersNeedToBePressedFirst : boolean

        public constructor ()
        public EvaluateMagnitude ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : float
        public ReadValueAsObject ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : any
    }

    class TwoModifiersComposite extends UnityEngine_InputSystem.InputBindingComposite {

        public get valueType(): System.Type;
        public get valueSizeInBytes(): int;
        public modifier1 : int
        public modifier2 : int
        public binding : int
        public overrideModifiersNeedToBePressedFirst : boolean

        public constructor ()
        public EvaluateMagnitude ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : float
        public ReadValueAsObject ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : any
    }

    class Vector2Composite extends UnityEngine_InputSystem.InputBindingComposite$1<UnityEngine.Vector2> {

        public up : int
        public down : int
        public left : int
        public right : int
        public mode : UnityEngine_InputSystem_Composites_Vector2Composite.Mode

        public constructor ()
        public ReadValue ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : UnityEngine.Vector2
        public EvaluateMagnitude ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : float
    }

    class Vector3Composite extends UnityEngine_InputSystem.InputBindingComposite$1<UnityEngine.Vector3> {

        public up : int
        public down : int
        public left : int
        public right : int
        public forward : int
        public backward : int
        public mode : UnityEngine_InputSystem_Composites_Vector3Composite.Mode

        public constructor ()
        public ReadValue ($context: $Ref<UnityEngine_InputSystem.InputBindingCompositeContext>) : UnityEngine.Vector3
    }

}

declare module 'UnityEngine.InputSystem.Composites.AxisComposite' {

    enum WhichSideWins {
        Neither = 0,
        Positive = 1,
        Negative = 2 
    }

}

declare module 'UnityEngine.InputSystem.Composites.Vector2Composite' {

    enum Mode {
        Analog = 2,
        DigitalNormalized = 0,
        Digital = 1 
    }

}

declare module 'UnityEngine.InputSystem.Composites.Vector3Composite' {

    enum Mode {
        Analog = 0,
        DigitalNormalized = 1,
        Digital = 2 
    }

}

