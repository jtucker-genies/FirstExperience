
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'RootNamespace' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as UnityEngine_UI from 'UnityEngine.UI'
    import * as Genies_Refs from 'Genies.Refs'
    import * as Genies_Components_SDK_External_Things from 'Genies.Components.SDK.External.Things'
    import * as Genies_Customization_Framework_ItemPicker from 'Genies.Customization.Framework.ItemPicker'
    import * as Genies_UI_Widgets from 'Genies.UI.Widgets'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Threading from 'System.Threading'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class IncompatibleAlertPopup extends UnityEngine.MonoBehaviour {

        public okayButton : UnityEngine_UI.Button

        private constructor ()
        public SetDisplay ($data: ThingSelectionData) : void
        public SetText ($description: string) : void
    }

    class ThingSelectionData extends System.Object implements System.IDisposable {

        public displayName : string
        public thingId : string
        public available : boolean
        public description : string
        public cmsId : string
        public localThingPrefab : Genies_Components_SDK_External_Things.Thing
        public get Thumbnail(): UnityEngine.Sprite;

        public constructor ($thumbnailRef: Genies_Refs.Ref$1<UnityEngine.Sprite>)
        public static Default () : ThingSelectionData
        public Dispose () : void
    }

    class IncompatibleAlertPopupController extends UnityEngine.MonoBehaviour {

        public incompatibleAlertPopup : IncompatibleAlertPopup

        private constructor ()
        public Show ($isVisible: boolean) : void
    }

    class ThingSelectionCell extends Genies_Customization_Framework_ItemPicker.ItemPickerCellView {

        public button : Genies_UI_Widgets.GeniesButton
        public get ThingData(): ThingSelectionData;
        public set ThingData(value: ThingSelectionData);

        private constructor ()
        public SetThingData ($thingData: ThingSelectionData) : void
    }

    class ThingSelectionDrawerPopupData extends UnityEngine.MonoBehaviour {

        private constructor ()
        public SetThingData ($thingSelectionData: ThingSelectionData) : void
    }

    class ThingSelectionItemPickerDataSource extends UnityEngine.MonoBehaviour implements Genies_Customization_Framework_ItemPicker.IItemPickerDataSource {

        public cellPrefab : ThingSelectionCell

        private constructor ()
        public SetDataSource ($thingSelectionData: ThingSelectionData[]) : void
        public GetCtaConfig () : Genies_Customization_Framework_ItemPicker.ItemPickerCtaConfig
        public GetLayoutConfig () : Genies_Customization_Framework_ItemPicker.ItemPickerLayoutConfig
        public GetCurrentSelectedIndex () : int
        public ItemSelectedIsValidForProcessCTA () : boolean
        public InitializeAndGetCountAsync () : Cysharp_Threading_Tasks.UniTask$1<int>
        public GetCellPrefab ($index: int) : Genies_Customization_Framework_ItemPicker.ItemPickerCellView
        public GetCellSize ($index: int) : UnityEngine.Vector2
        public OnItemClickedAsync ($index: int, $clickedCell: Genies_Customization_Framework_ItemPicker.ItemPickerCellView, $wasSelected: boolean, $cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public InitializeCellViewAsync ($view: Genies_Customization_Framework_ItemPicker.ItemPickerCellView, $index: int, $isSelected: boolean, $cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public DisposeCellViewAsync ($view: Genies_Customization_Framework_ItemPicker.ItemPickerCellView, $index: int) : void
    }

    class ThingSelectionPopup extends UnityEngine.MonoBehaviour {

        public doneButton : UnityEngine_UI.Button
        public popupRectTransform : UnityEngine.RectTransform
        public incompatibleAlertPopupController : IncompatibleAlertPopupController
        public drawerPopupController : DrawerPopupController
        public thingSelectionDrawerPopupData : ThingSelectionDrawerPopupData
        public set TitleText(value: string);
        public get SelectedThing(): ThingSelectionData;
        public set SelectedThing(value: ThingSelectionData);

        private constructor ()
        public SetData () : void
        public InitDataSourceAsync ($protocolIds: System_Collections_Generic.List$1<string>, $minSdk: int, $showUnavailableThings: boolean) : Cysharp_Threading_Tasks.UniTask
        public ShowPopupAndLoadThingAsync ($requiredProtocols: System_Collections_Generic.List$1<string>, $minSdk: int, $localThings: System_Collections_Generic.IReadOnlyList$1<Genies_Components_SDK_External_Things.Thing>, $showUnavailableThings: boolean) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_SDK_External_Things.IThing>
        public add_DoneClicked ($value: System.Action$1<ThingSelectionData>) : void
        public remove_DoneClicked ($value: System.Action$1<ThingSelectionData>) : void
    }

    interface DrawerPopupController {

    }

    class ThingSelectionPopupController extends UnityEngine.MonoBehaviour {

        public static get Instance(): ThingSelectionPopupController;
        public get Popup(): ThingSelectionPopup;
        public get ThemeManager(): ThingSelectionThemeManager;

        private constructor ()
        public ShowPopup ($show: boolean) : void
    }

    interface ThingSelectionThemeManager {

    }

    interface IncompatibleAlertPopup {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface IncompatibleAlertPopupController {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface ThingSelectionCell {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface ThingSelectionDrawerPopupData {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface ThingSelectionItemPickerDataSource {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface ThingSelectionPopup {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface DrawerPopupController {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface ThingSelectionPopupController {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface ThingSelectionThemeManager {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
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
    * Represents a Sprite object for use in 2D gameplay.
    */
    interface Sprite {

    }

    /**
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * Represents an axis aligned bounding box.
    */
    interface Bounds extends System.IFormattable, System.IEquatable$1<Bounds> {

    }

    /**
    * Interface to receive callbacks upon serialization and deserialization.
    */
    interface ISerializationCallbackReceiver {

    }

    /**
    * A base class of all colliders.
    */
    interface Collider {

    }

    /**
    * General functionality for all renderers.
    */
    interface Renderer {

    }

    /**
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * The Skinned Mesh filter.
    */
    interface SkinnedMeshRenderer {

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * Position, size, anchor and pivot information for a rectangle.
    */
    interface RectTransform {

    }

    /**
    * A class you can derive from if you want to create objects that live independently of GameObjects.
    */
    interface ScriptableObject {

    }

    /**
    * A box-shaped primitive collider.
    */
    interface BoxCollider {

    }

    /**
    * Interface to control the Mecanim animation system.
    */
    interface Animator {

    }

    /**
    * Used to communicate between scripting and the controller. Some parameters can be set in scripting and used by the controller, while other parameters are based on Custom Curves in Animation Clips and can be sampled using the scripting API.
    */
    interface AnimatorControllerParameter {

    }

    interface GameObject {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
    }

    interface MonoBehaviour {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface Behaviour {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
    }

    interface Component {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
    }

    interface Transform {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
    }

    interface Collider {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
    }

    interface Renderer {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
    }

    interface SkinnedMeshRenderer {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
    }

    interface RectTransform {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
    }

    interface BoxCollider {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
    }

    interface Animator {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
    }

}

declare module 'System' {
    import * as System_Reflection from 'System.Reflection'
    import * as System_Runtime_InteropServices from 'System.Runtime.InteropServices'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'
    import * as Genies_Components_SDK_External_Things from 'Genies.Components.SDK.External.Things'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    interface IDisposable {

    }

    interface IEquatable$1<T> {

        Equals? ($other: T) : boolean
    }

    interface IFormattable {

    }

    interface Type extends System_Reflection.IReflect, System_Runtime_InteropServices._Type {

    }

    interface Action {
        () : void; 
        Invoke?: () => void;
    }
    var Action: { new (func: () => void): Action; }

    interface MulticastDelegate {
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
    }
    var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }

    interface Delegate extends ICloneable, System_Runtime_Serialization.ISerializable {

    }

    interface ICloneable {

    }

    interface Action$1<T> {
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
    }

    interface Nullable$1<T> {

    }

    interface Decimal extends IFormattable, ISpanFormattable, IComparable, System_Runtime_Serialization.IDeserializationCallback, IComparable$1<Decimal>, IConvertible, IEquatable$1<Decimal> {

    }

    interface IComparable {

    }

    interface IComparable$1<T> {

    }

    interface IConvertible {

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

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface Func$3<T1,T2,TResult> {
        (arg1: T1, arg2: T2) : TResult; 
        Invoke?: (arg1: T1, arg2: T2) => TResult;
    }

    interface Exception extends System_Runtime_InteropServices._Exception, System_Runtime_Serialization.ISerializable {

    }

    interface Type {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<Genies_Components_SDK_External_Things.ProtocolDefinition>) : void
    }

}

declare module 'Genies.Refs' {
    import * as System from 'System'

    interface Ref$1<T> extends System.IDisposable, System.IEquatable$1<Ref$1<T>> {

    }

}

declare module 'Genies.Components.SDK.External.Things' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Collections_ObjectModel from 'System.Collections.ObjectModel'
    import * as Genies_Components_SDK_External_Things_IPropertyProvider from 'Genies.Components.SDK.External.Things.IPropertyProvider'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as Genies_Utils from 'Genies.Utils'
    import * as Genies_Refs from 'Genies.Refs'
    import * as Genies_AssetsService from 'Genies.AssetsService'
    import * as Genies_Components_ShaderlessTools from 'Genies.Components.ShaderlessTools'
    import * as Genies_Models from 'Genies.Models'
    import * as Genies_Components_Avatars from 'Genies.Components.Avatars'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as Newtonsoft_Json_Linq from 'Newtonsoft.Json.Linq'
    import * as Genies_Components_SDK_External_Things_AnimationsProvider from 'Genies.Components.SDK.External.Things.AnimationsProvider'
    import * as Genies_Components_SDK_External_Things_BoundingBoxProvider from 'Genies.Components.SDK.External.Things.BoundingBoxProvider'
    import * as Genies_Components_SDK_External_Things_TransformsProvider from 'Genies.Components.SDK.External.Things.TransformsProvider'
    import * as Genies_Components_SDK_External_Things_FloatingIdleProtocol from 'Genies.Components.SDK.External.Things.FloatingIdleProtocol'

    class Thing extends UnityEngine.MonoBehaviour implements IThing {

        public static RequiredProtocols : System_Collections_Generic.IReadOnlyList$1<ProtocolDefinition>
        public static DefaultProtocolInitializers : System_Collections_Generic.IReadOnlyList$1<IProtocolInitializer>
        public assetRoot : UnityEngine.Transform
        public assets : System_Collections_Generic.List$1<ThingAsset>
        public protocolComponents : System_Collections_Generic.List$1<ProtocolComponent>
        public get Id(): string;
        public get Root(): UnityEngine.GameObject;
        public get AssetRoot(): UnityEngine.Transform;
        public get Bounds(): IBoundingBox;
        public get Protocols(): IProtocolContainer;
        public get IsDisposed(): boolean;

        private constructor ()
        public Validate ($errors: $Ref<string>) : boolean
        public Initialize ($id: string, ...extraProtocols: IProtocol[]) : void
        public Initialize ($id: string, $extraProtocols?: System_Collections_Generic.IEnumerable$1<IProtocol>) : void
        public TryGetMergedMainBounds ($bounds: $Ref<IBoundingBox>) : boolean
        public Dispose () : void
        public GetProtocolIds () : string[]
        public GetProtocolDefinitions () : ProtocolDefinitionSet
        public GetProtocolDefinitions ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        public add_Disposed ($value: System.Action) : void
        public remove_Disposed ($value: System.Action) : void
    }

    interface IThing extends System.IDisposable {

        readonly Id? : string
        readonly Root? : UnityEngine.GameObject
        readonly AssetRoot? : UnityEngine.Transform
        readonly Bounds? : IBoundingBox
        readonly Protocols? : IProtocolContainer
        readonly IsDisposed? : boolean

        add_Disposed? ($value: System.Action) : void
        remove_Disposed? ($value: System.Action) : void
    }

    interface IBoundingBox {

        CalculateBounds? ($origin?: UnityEngine.Transform) : UnityEngine.Bounds
    }

    interface IProtocolContainer {

        readonly Count? : int
        readonly InstanceCount? : int

        TryGetProtocol? ($definition: ProtocolDefinition, $protocol: $Ref<IProtocol>) : boolean
        TryGetProtocol? ($protocolId: string, $protocol: $Ref<IProtocol>) : boolean
        TryGetProtocol?<T extends IProtocol> ($protocol: $Ref<T>) : boolean
        TryGetProtocol? ($type: System.Type, $protocol: $Ref<IProtocol>) : boolean
        GetProtocols? () : System_Collections_Generic.List$1<IProtocol>
        GetProtocols? ($results: System_Collections_Generic.ICollection$1<IProtocol>) : void
        GetDefinitions? () : System_Collections_Generic.List$1<ProtocolDefinition>
        GetDefinitions? ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        HasProtocol? ($definition: ProtocolDefinition) : boolean
        HasProtocol? ($protocolId: string) : boolean
        HasProtocol?<T extends IProtocol> () : boolean
        HasProtocol? ($type: System.Type) : boolean
    }

    class ProtocolDefinition extends System.ValueType implements System.IEquatable$1<ProtocolDefinition> {

        public static All : System_Collections_ObjectModel.ReadOnlyCollection$1<ProtocolDefinition>
        public Id : string
        public Type : System.Type
        public DisplayName : string
        public DisplayOrder : int

        public static TryGet ($protocolId: string, $definition: $Ref<ProtocolDefinition>) : boolean
        public static TryGet<T extends IProtocol> ($definition: $Ref<ProtocolDefinition>) : boolean
        public static TryGet ($type: System.Type, $definition: $Ref<ProtocolDefinition>) : boolean
        public static Get<T extends IProtocol> () : ProtocolDefinition
        public static TryGetProtocolType ($protocolId: string, $type: $Ref<System.Type>) : boolean
        public static TryGetProtocolDisplayName ($protocolId: string, $displayName: $Ref<string>) : boolean
        public static TryGetProtocolId<T extends IProtocol> ($protocolId: $Ref<string>) : boolean
        public static TryGetProtocolDisplayName<T extends IProtocol> ($displayName: $Ref<string>) : boolean
        public static IsDefined ($protocolId: string) : boolean
        public static IsDefined<T extends IProtocol> () : boolean
        public static IsDefined ($type: System.Type) : boolean
        public Equals ($other: ProtocolDefinition) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
        public static op_Equality ($left: ProtocolDefinition, $right: ProtocolDefinition) : boolean
        public static op_Inequality ($left: ProtocolDefinition, $right: ProtocolDefinition) : boolean
    }

    interface IProtocol {

        Initialize? ($thing: IThing) : void
    }

    class ProtocolDefinitionSet extends System.Object implements System_Collections_Generic.ISet$1<ProtocolDefinition>, UnityEngine.ISerializationCallbackReceiver {

        public get Count(): int;
        public get IsReadOnly(): boolean;

        public constructor ()
        public Add ($definition: ProtocolDefinition) : boolean
        public Remove ($definition: ProtocolDefinition) : boolean
        public Add<T extends IProtocol> () : boolean
        public Remove<T extends IProtocol> () : boolean
        public Clear () : void
        public ExceptWith ($other: System_Collections_Generic.IEnumerable$1<ProtocolDefinition>) : void
        public IntersectWith ($other: System_Collections_Generic.IEnumerable$1<ProtocolDefinition>) : void
        public SymmetricExceptWith ($other: System_Collections_Generic.IEnumerable$1<ProtocolDefinition>) : void
        public UnionWith ($other: System_Collections_Generic.IEnumerable$1<ProtocolDefinition>) : void
        public CopyTo ($array: ProtocolDefinition[], $arrayIndex: int) : void
        public Contains ($definition: ProtocolDefinition) : boolean
        public Contains<T extends IProtocol> () : boolean
        public IsProperSubsetOf ($other: System_Collections_Generic.IEnumerable$1<ProtocolDefinition>) : boolean
        public IsProperSupersetOf ($other: System_Collections_Generic.IEnumerable$1<ProtocolDefinition>) : boolean
        public IsSubsetOf ($other: System_Collections_Generic.IEnumerable$1<ProtocolDefinition>) : boolean
        public IsSupersetOf ($other: System_Collections_Generic.IEnumerable$1<ProtocolDefinition>) : boolean
        public Overlaps ($other: System_Collections_Generic.IEnumerable$1<ProtocolDefinition>) : boolean
        public SetEquals ($other: System_Collections_Generic.IEnumerable$1<ProtocolDefinition>) : boolean
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<ProtocolDefinition>
    }

    interface IProtocolInitializer {

        readonly ProtocolDefinition? : ProtocolDefinition

        TryInitializeFor? ($thing: Thing, $protocol: $Ref<IProtocol>, $error: $Ref<string>) : boolean
        CanInitializeFor? ($thing: Thing, $error: $Ref<string>) : boolean
    }

    class ThingAsset extends GroupedPropertyProvider {

        public get Container(): IPropertyContainer;
        public get Providers(): System_Collections_Generic.IReadOnlyCollection$1<IPropertyProvider>;
        public static MainBoundsKey : string
        public static PokeInClipKey : string
        public static PokeOutClipKey : string
        public static BonesRootKey : string
        public static BonesCogKey : string
        public static BonesBindKey : string
        public mainBoundingBox : BoundingBox
        public pokeInAnimation : ThingAnimationClip
        public pokeOutAnimation : ThingAnimationClip
        public root : UnityEngine.Transform
        public cog : UnityEngine.Transform
        public bind : UnityEngine.Transform

        private constructor ()
        public ProvidePropertiesTo ($target: Genies_Components_SDK_External_Things_IPropertyProvider.ITarget) : void
        public Validate ($errors: $Ref<string>) : boolean
    }

    class GroupedPropertyProvider extends PropertyProvider {

        public get Container(): IPropertyContainer;
        public get Providers(): System_Collections_Generic.IReadOnlyCollection$1<IPropertyProvider>;

        private constructor ()
        public ProvidePropertiesTo ($target: Genies_Components_SDK_External_Things_IPropertyProvider.ITarget) : void
        public AddProvider ($provider: IPropertyProvider) : boolean
        public RemoveProvider ($provider: IPropertyProvider) : boolean
        public AddProviders ($providers: System_Collections_Generic.IEnumerable$1<IPropertyProvider>) : void
        public RemoveProviders ($providers: System_Collections_Generic.IEnumerable$1<IPropertyProvider>, $notifyUpdate?: boolean) : void
        public ContainsProvider ($provider: IPropertyProvider) : boolean
        public ClearProviders () : void
    }

    class PropertyProvider extends UnityEngine.MonoBehaviour implements IPropertyProvider {

        public get Container(): IPropertyContainer;

        public ProvidePropertiesTo ($target: Genies_Components_SDK_External_Things_IPropertyProvider.ITarget) : void
        public NotifyPropertyUpdate () : void
        public add_Updated ($value: System.Action) : void
        public remove_Updated ($value: System.Action) : void
        private constructor ()
    }

    interface IPropertyProvider {

        readonly Container? : IPropertyContainer

        ProvidePropertiesTo? ($target: Genies_Components_SDK_External_Things_IPropertyProvider.ITarget) : void
        add_Updated? ($value: System.Action) : void
        remove_Updated? ($value: System.Action) : void
    }

    interface IPropertyContainer {

        readonly PropertyTypes? : System_Collections_Generic.IReadOnlyCollection$1<System.Type>

        TryGetProperty?<T> ($key: string, $value: $Ref<T>) : boolean
        ContainsProperty?<T> ($key: string) : boolean
        ContainsPropertiesOfType?<T> () : boolean
        GetPropertyCount?<T> () : int
        GetPropertyKeys?<T> ($results: System_Collections_Generic.ICollection$1<string>) : void
        GetPropertyKeys?<T> () : System_Collections_Generic.List$1<string>
        TryGetProperty? ($propertyType: System.Type, $key: string, $value: $Ref<any>) : boolean
        ContainsProperty? ($propertyType: System.Type, $key: string) : boolean
        ContainsPropertiesOfType? ($propertyType: System.Type) : boolean
        GetPropertyCount? ($propertyType: System.Type) : int
        GetPropertyKeys? ($propertyType: System.Type, $results: System_Collections_Generic.ICollection$1<string>) : void
        GetPropertyKeys? ($propertyType: System.Type) : System_Collections_Generic.List$1<string>
    }

    class BoundingBox extends System.Object implements IBoundingBox {

        public colliders : System_Collections_Generic.List$1<UnityEngine.Collider>
        public renderers : System_Collections_Generic.List$1<UnityEngine.Renderer>

        public constructor ()
        public CalculateBounds ($origin?: UnityEngine.Transform) : UnityEngine.Bounds
        public IsValid () : boolean
    }

    class ThingAnimationClip extends GroupedAnimationClip {

        public get ClipCount(): int;
        public get Time(): float;
        public set Time(value: float);
        public get Duration(): float;
        public get IsPlaying(): boolean;
        public transformAnimations : System_Collections_Generic.List$1<TransformAnimationClip>
        public blendShapeAnimations : System_Collections_Generic.List$1<BlendShapeAnimationClip>

        public constructor ()
        public SaveInitialState () : void
        public Refresh () : void
        public IsValid () : boolean
        public constructor ($clips?: System_Collections_Generic.IEnumerable$1<IAnimationClip>)
    }

    class GroupedAnimationClip extends System.Object implements IAnimationClip, System_Collections_Generic.IEnumerable$1<IAnimationClip> {

        public get ClipCount(): int;
        public get Time(): float;
        public set Time(value: float);
        public get Duration(): float;
        public get IsPlaying(): boolean;

        public constructor ($clips?: System_Collections_Generic.IEnumerable$1<IAnimationClip>)
        public PlayFromStart () : void
        public Play () : void
        public Pause () : void
        public Stop () : void
        public RestoreInitialState () : void
        public WaitUntilStoppedAsync () : Cysharp_Threading_Tasks.UniTask
        public AddClip ($clip: IAnimationClip) : void
        public RemoveClip ($clip: IAnimationClip) : boolean
        public AddClips ($clips: System_Collections_Generic.IEnumerable$1<IAnimationClip>) : void
        public RemoveClips ($clips: System_Collections_Generic.IEnumerable$1<IAnimationClip>) : void
        public ContainsClip ($clip: IAnimationClip) : boolean
        public ClearClips () : void
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<IAnimationClip>
        public add_PlayingStarted ($value: System.Action) : void
        public add_PlayingResumed ($value: System.Action) : void
        public add_PlayingPaused ($value: System.Action) : void
        public add_PlayingStopped ($value: System.Action) : void
        public remove_PlayingStarted ($value: System.Action) : void
        public remove_PlayingResumed ($value: System.Action) : void
        public remove_PlayingPaused ($value: System.Action) : void
        public remove_PlayingStopped ($value: System.Action) : void
    }

    interface IAnimationClip {

        Time? : float
        readonly Duration? : float
        readonly IsPlaying? : boolean

        PlayFromStart? () : void
        Play? () : void
        Pause? () : void
        Stop? () : void
        RestoreInitialState? () : void
        WaitUntilStoppedAsync? () : Cysharp_Threading_Tasks.UniTask
        add_PlayingStarted? ($value: System.Action) : void
        add_PlayingResumed? ($value: System.Action) : void
        add_PlayingPaused? ($value: System.Action) : void
        add_PlayingStopped? ($value: System.Action) : void
        remove_PlayingStarted? ($value: System.Action) : void
        remove_PlayingResumed? ($value: System.Action) : void
        remove_PlayingPaused? ($value: System.Action) : void
        remove_PlayingStopped? ($value: System.Action) : void
    }

    class TransformAnimationClip extends CssAnimationClip {

        public resetValueOnStopped : boolean
        public setStartValueOnPlayed : boolean
        public updateDuringDelay : boolean
        public animation : Genies_Utils.CssAnimation
        public get Time(): float;
        public set Time(value: float);
        public get Duration(): float;
        public get IsPlaying(): boolean;
        public target : UnityEngine.Transform
        public animatePosition : boolean
        public localPosition : boolean
        public startPosition : UnityEngine.Vector3
        public endPosition : UnityEngine.Vector3
        public animateRotation : boolean
        public localRotation : boolean
        public startRotation : UnityEngine.Vector3
        public endRotation : UnityEngine.Vector3
        public animateScale : boolean
        public startScale : UnityEngine.Vector3
        public endScale : UnityEngine.Vector3

        public constructor ()
        public SaveInitialState () : void
    }

    class CssAnimationClip extends System.Object implements IAnimationClip {

        public resetValueOnStopped : boolean
        public setStartValueOnPlayed : boolean
        public updateDuringDelay : boolean
        public animation : Genies_Utils.CssAnimation
        public get Time(): float;
        public set Time(value: float);
        public get Duration(): float;
        public get IsPlaying(): boolean;

        public PlayFromStart () : void
        public Play () : void
        public Pause () : void
        public Stop () : void
        public RestoreInitialState () : void
        public WaitUntilStoppedAsync () : Cysharp_Threading_Tasks.UniTask
        public add_PlayingStarted ($value: System.Action) : void
        public add_PlayingResumed ($value: System.Action) : void
        public add_PlayingPaused ($value: System.Action) : void
        public add_PlayingStopped ($value: System.Action) : void
        public remove_PlayingStarted ($value: System.Action) : void
        public remove_PlayingResumed ($value: System.Action) : void
        public remove_PlayingPaused ($value: System.Action) : void
        public remove_PlayingStopped ($value: System.Action) : void
    }

    class BlendShapeAnimationClip extends CssAnimationClip {

        public resetValueOnStopped : boolean
        public setStartValueOnPlayed : boolean
        public updateDuringDelay : boolean
        public animation : Genies_Utils.CssAnimation
        public get Time(): float;
        public set Time(value: float);
        public get Duration(): float;
        public get IsPlaying(): boolean;
        public renderer : UnityEngine.SkinnedMeshRenderer
        public blendShape : string
        public startValue : float
        public endValue : float

        public constructor ()
        public SaveInitialState () : void
    }

    class ProtocolComponent extends UnityEngine.MonoBehaviour implements IProtocol {

        public get ControlledThing(): IThing;

        public Initialize ($thing: IThing) : void
        private constructor ()
    }

    interface IThingsLoader$1<TAsset> {

        LoadAsync? ($assetId: string) : Cysharp_Threading_Tasks.UniTask$1<Genies_Refs.Ref$1<TAsset>>
        LoadAsync? ($assetIds: System_Collections_Generic.List$1<string>) : Cysharp_Threading_Tasks.UniTask$1<Genies_Refs.Ref$1<System_Collections_Generic.List$1<TAsset>>>
    }

    class ThingsSkinContainerLoader extends System.Object implements IThingsLoader$1<Genies_Models.ThingsSkinContainer> {

        public constructor ($service: Genies_AssetsService.IAssetsService, $shaderlessService: Genies_Components_ShaderlessTools.IShaderlessAssetService)
        public LoadAsync ($assetId: string) : Cysharp_Threading_Tasks.UniTask$1<Genies_Refs.Ref$1<Genies_Models.ThingsSkinContainer>>
        public LoadAsync ($assetIds: System_Collections_Generic.List$1<string>) : Cysharp_Threading_Tasks.UniTask$1<Genies_Refs.Ref$1<System_Collections_Generic.List$1<Genies_Models.ThingsSkinContainer>>>
    }

    class ThingsSkinIconLoader extends System.Object implements IThingsLoader$1<UnityEngine.Sprite> {

        public constructor ($service: Genies_AssetsService.IAssetsService)
        public LoadAsync ($assetId: string) : Cysharp_Threading_Tasks.UniTask$1<Genies_Refs.Ref$1<UnityEngine.Sprite>>
        public LoadAsync ($assetIds: System_Collections_Generic.List$1<string>) : Cysharp_Threading_Tasks.UniTask$1<Genies_Refs.Ref$1<System_Collections_Generic.List$1<UnityEngine.Sprite>>>
    }

    class ThingsTemplateLoader extends System.Object implements IThingsLoader$1<Genies_Models.ThingsTemplate> {

        public constructor ($service: Genies_AssetsService.IAssetsService)
        public LoadAsync ($assetId: string) : Cysharp_Threading_Tasks.UniTask$1<Genies_Refs.Ref$1<Genies_Models.ThingsTemplate>>
        public LoadAsync ($assetIds: System_Collections_Generic.List$1<string>) : Cysharp_Threading_Tasks.UniTask$1<Genies_Refs.Ref$1<System_Collections_Generic.List$1<Genies_Models.ThingsTemplate>>>
    }

    class MoveAndFitBoxesScene extends UnityEngine.MonoBehaviour {

        private constructor ()
        public Initialize ($thing: IThing, $protocol: IMoveAndFitProtocol) : void
    }

    interface IMoveAndFitProtocol extends IProtocol, IBoundingBox {

        MoveTo? ($position: UnityEngine.Vector3) : void
        MoveTo? ($bounds: UnityEngine.Bounds) : void
        MoveTo? ($transform: UnityEngine.Transform, $setOrientation?: boolean, $setParent?: boolean) : void
        FitTo? ($bounds: UnityEngine.Bounds) : void
        FitTo? ($collider: UnityEngine.BoxCollider, $setOrientation?: boolean) : void
        MoveAndFitTo? ($bounds: UnityEngine.Bounds) : void
        MoveAndFitTo? ($collider: UnityEngine.BoxCollider, $setOrientation?: boolean, $setParent?: boolean) : void
        ResetOrientation? () : void
        ResetSize? () : void
    }

    class MoveAndFitCheckerBox extends UnityEngine.MonoBehaviour {

        public get Thing(): IThing;
        public set Thing(value: IThing);
        public get Protocol(): IMoveAndFitProtocol;
        public set Protocol(value: IMoveAndFitProtocol);
        public get MainBounds(): UnityEngine.Transform;
        public set MainBounds(value: UnityEngine.Transform);

        private constructor ()
        public Select () : void
    }

    class NotImplementedProtocolChecker extends UnityEngine.MonoBehaviour implements IProtocolChecker {

        public get Widget(): UnityEngine.GameObject;

        private constructor ()
        public Initialize ($thing: IThing) : void
        public Dispose () : void
    }

    class ThingAssetChecker extends UnityEngine.MonoBehaviour {

        private constructor ()
        public RefreshAssets () : void
    }

    class ThingMaxChecker extends UnityEngine.MonoBehaviour {

        private constructor ()
        public RefreshThings () : void
    }

    class GenieComponentsManager extends System.Object implements System.IDisposable {

        public constructor ()
        public Dispose () : void
        public SetPlaceableAndGrabbableThings ($childAssets: Genies_Models.ChildAsset[], $animator: UnityEngine.Animator, $iGenie: Genies_Components_Avatars.IGenie, $loadThingsByGuids?: System.Func$3<Genies_Components_Avatars.IGenie, System_Collections_Generic.List$1<string>, Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<Genies_Models.ThingsSkinContainer>>>, $thingAdjustment?: UnityEngine_Events.UnityAction$1<Thing>) : Cysharp_Threading_Tasks.UniTask
        public ClearPlaceableAndGrabbableThings ($iGenie: Genies_Components_Avatars.IGenie) : void
        public RefreshGrabbableThingsAnimation ($iGenie: Genies_Components_Avatars.IGenie) : void
    }

    class HandGrabbingBehaviour extends UnityEngine.MonoBehaviour {

        private constructor ()
        public TryInitialize ($genie: Genies_Components_Avatars.IGenie, $config: HandConfig, $id: string, $prefab: UnityEngine.GameObject, $doResize?: boolean) : boolean
        public GetThing () : Thing
        public ResetExistingHandAnimatorParamaters () : void
    }

    class HandConfig extends System.ValueType {

        public boneName : string
        public animationLayerName : string
        public tightnessParameterName : string
        public maxBounds : UnityEngine.Vector3

    }

    class HandGrabbingComponent extends Genies_Components_Avatars.GenieComponent {

        public get Name(): string;

        public constructor ($config: GrabConfig)
        public Copy () : Genies_Components_Avatars.GenieComponent
        public GrabThings ($grabbedThings: System_Collections_Generic.List$1<UnityEngine.GameObject>, $refreshParams?: boolean, $rebuildAction?: UnityEngine_Events.UnityAction$1<Thing>) : void
        public UngrabAll () : void
        public RefreshBehavioursAnimation () : void
    }

    class GrabConfig extends System.ValueType {

        public DoResize : boolean
        public Verbose : boolean
        public leftHandToggleSuffix : string
        public rightHandToggleSuffix : string
        public leftHand : HandConfig
        public rightHand : HandConfig

    }

    enum Hand {
        None = 0,
        Left = 1,
        Right = 2 
    }

    class HandGrabbingManagerAsset extends Genies_Components_Avatars.AnimationFeatureAsset {

        public config : GrabConfig

        private constructor ()
        public CreateFeatureComponent ($parameters: Genies_Utils.AnimatorParameters) : Genies_Components_Avatars.GenieComponent
        public SupportsParameters ($parameters: Genies_Utils.AnimatorParameters) : boolean
        public Serialize () : Newtonsoft_Json_Linq.JToken
        public static Deserialize ($token: Newtonsoft_Json_Linq.JToken) : Genies_Components_Avatars.IAnimationFeature
    }

    class PlacedObjectsBehaviour extends UnityEngine.MonoBehaviour {

        public config : PlacedObjectsConfig

        private constructor ()
        public SetDrivenThings ($things: System_Collections_Generic.ICollection$1<Thing>) : void
        public ClearDrivenThings () : void
        public UpdateAllThingPlacements () : void
        public UpdateThingPlacement ($thingId: string) : void
        public RemoveThing ($thingId: string) : void
    }

    class PlacedObjectsConfig extends System.Object {

        public IsMayaSpace : boolean
        public PosXSuffix : string
        public PosYSuffix : string
        public PosZSuffix : string
        public RotXSuffix : string
        public RotYSuffix : string
        public RotZSuffix : string
        public get AllSuffixes(): System_Collections_Generic.List$1<string>;

        public constructor ()
    }

    class PlacedObjectsComponent extends Genies_Components_Avatars.GenieComponent {

        public get Name(): string;
        public get Behavior(): PlacedObjectsBehaviour;

        public constructor ($name: string, $config: PlacedObjectsConfig)
        public Copy () : Genies_Components_Avatars.GenieComponent
        public Reset () : void
    }

    class PlacedObjectsFeatureAsset extends Genies_Components_Avatars.RepeatableParamBaseFeatureAsset {

        public Config : PlacedObjectsConfig
        public get SupportSuffixes(): System_Collections_Generic.List$1<string>;

        private constructor ()
        public CreateFeatureComponent ($parameters: Genies_Utils.AnimatorParameters) : Genies_Components_Avatars.GenieComponent
        public Serialize () : Newtonsoft_Json_Linq.JToken
        public static Deserialize ($token: Newtonsoft_Json_Linq.JToken) : Genies_Components_Avatars.IAnimationFeature
    }

    class GroupedBoundingBox extends System.Object implements IBoundingBox {

        public get Children(): System_Collections_Generic.IReadOnlyCollection$1<IBoundingBox>;

        public constructor ($boundingBoxes?: System_Collections_Generic.IEnumerable$1<IBoundingBox>)
        public CalculateBounds ($origin?: UnityEngine.Transform) : UnityEngine.Bounds
        public Add ($boundingBox: IBoundingBox) : boolean
        public Remove ($boundingBox: IBoundingBox) : boolean
        public AddRange ($boundingBoxes: System_Collections_Generic.IEnumerable$1<IBoundingBox>) : void
        public Contains ($boundingBox: IBoundingBox) : boolean
    }

    class AnimationsProvider extends PropertyProvider {

        public get Container(): IPropertyContainer;
        public get Animations(): System_Collections_Generic.List$1<Genies_Components_SDK_External_Things_AnimationsProvider.MappedProperty>;

        private constructor ()
        public ProvidePropertiesTo ($target: Genies_Components_SDK_External_Things_IPropertyProvider.ITarget) : void
    }

    class BoundingBoxProvider extends PropertyProvider {

        public get Container(): IPropertyContainer;
        public get BoundingBoxes(): System_Collections_Generic.List$1<Genies_Components_SDK_External_Things_BoundingBoxProvider.MappedProperty>;

        private constructor ()
        public ProvidePropertiesTo ($target: Genies_Components_SDK_External_Things_IPropertyProvider.ITarget) : void
    }

    class TransformsProvider extends PropertyProvider {

        public get Container(): IPropertyContainer;
        public get Transforms(): System_Collections_Generic.List$1<Genies_Components_SDK_External_Things_TransformsProvider.MappedProperty>;

        private constructor ()
        public ProvidePropertiesTo ($target: Genies_Components_SDK_External_Things_IPropertyProvider.ITarget) : void
    }

    class AnimatedIdleProtocolComponent extends ProtocolComponent implements IIdleProtocol {

        public get ControlledThing(): IThing;
        public idleAnimationProperties : System_Collections_Generic.List$1<PropertyReference>
        public loop : boolean
        public get IsIdle(): boolean;

        private constructor ()
        public StartIdle () : void
        public StopIdle () : void
    }

    interface IIdleProtocol extends IProtocol {

        readonly IsIdle? : boolean

        StartIdle? () : void
        StopIdle? () : void
    }

    class PropertyReference extends System.ValueType {

        public provider : PropertyProvider
        public key : string

        public TryGetValue<T> ($value: $Ref<T>) : boolean
    }

    class FloatingIdleProtocolComponent extends ProtocolComponent implements IIdleProtocol {

        public get ControlledThing(): IThing;
        public targetProperty : PropertyReference
        public floatingAxis : Genies_Components_SDK_External_Things_FloatingIdleProtocol.Axis
        public cyclesPerSecond : float
        public amplitude : float
        public idlingOffset : float
        public get IsIdle(): boolean;

        private constructor ()
        public StartIdle () : void
        public StopIdle () : void
    }

    enum GrabBone {
        None = 0,
        RightHand = 1,
        LeftHand = 2,
        Mouth = 3 
    }

    class GrabPoint extends UnityEngine.MonoBehaviour {

        public grabBone : GrabBone
        public overrideHandAnimation : boolean
        public handTightness : float

        private constructor ($grabBone: GrabBone)
        public Inititialize ($grabBone: GrabBone, $overrideHandAnimation: boolean, $handTightness: float) : void
    }

    class GrabProtocolComponent extends ProtocolComponent implements IGrabProtocol {

        public get ControlledThing(): IThing;
        public grabPoints : GrabPoint[]

        private constructor ()
        public GetGrabPoints () : GrabPoint[]
        public GetHandGrabPoint ($bone: GrabBone) : GrabPoint
        public GetOverrideHandAnimation ($bone: GrabBone) : boolean
        public GetHandTightness ($bone: GrabBone) : float
        public Fit ($maxBounds: UnityEngine.Vector3, $bone: GrabBone) : void
    }

    interface IGrabProtocol extends IProtocol {

        GetGrabPoints? () : GrabPoint[]
        GetHandGrabPoint? ($bone: GrabBone) : GrabPoint
        GetOverrideHandAnimation? ($bone: GrabBone) : boolean
        GetHandTightness? ($bone: GrabBone) : float
        Fit? ($maxBounds: UnityEngine.Vector3, $bone: GrabBone) : void
    }

    class MoveAndFitProtocolComponent extends ProtocolComponent implements IMoveAndFitProtocol {

        public get ControlledThing(): IThing;
        public boundingBoxProperties : System_Collections_Generic.List$1<PropertyReference>
        public defaultOrientation : UnityEngine.Vector3
        public defaultScale : UnityEngine.Vector3

        private constructor ()
        public CalculateBounds ($origin?: UnityEngine.Transform) : UnityEngine.Bounds
        public MoveTo ($position: UnityEngine.Vector3) : void
        public MoveTo ($bounds: UnityEngine.Bounds) : void
        public MoveTo ($transform: UnityEngine.Transform, $setOrientation?: boolean, $setParent?: boolean) : void
        public FitTo ($bounds: UnityEngine.Bounds) : void
        public FitTo ($collider: UnityEngine.BoxCollider, $setOrientation?: boolean) : void
        public MoveAndFitTo ($bounds: UnityEngine.Bounds) : void
        public MoveAndFitTo ($collider: UnityEngine.BoxCollider, $setOrientation?: boolean, $setParent?: boolean) : void
        public ResetOrientation () : void
        public ResetSize () : void
    }

    class PokeProtocolComponent extends ProtocolComponent implements IPokeProtocol {

        public get ControlledThing(): IThing;
        public pokeInAnimationProperties : System_Collections_Generic.List$1<PropertyReference>
        public pokeOutAnimationProperties : System_Collections_Generic.List$1<PropertyReference>

        private constructor ()
        public PokeInAsync () : Cysharp_Threading_Tasks.UniTask
        public PokeOutAsync () : Cysharp_Threading_Tasks.UniTask
        public PokeInOutAsync () : Cysharp_Threading_Tasks.UniTask
    }

    interface IPokeProtocol extends IProtocol {

        PokeInAsync? () : Cysharp_Threading_Tasks.UniTask
        PokeOutAsync? () : Cysharp_Threading_Tasks.UniTask
        PokeInOutAsync? () : Cysharp_Threading_Tasks.UniTask
    }

    class AnimatedIdleProtocol extends System.Object implements IIdleProtocol {

        public Loop : boolean
        public get IsIdle(): boolean;

        public constructor ($clip: IAnimationClip)
        public Initialize ($thing: IThing) : void
        public StartIdle () : void
        public StopIdle () : void
    }

    class FloatingIdleProtocol extends System.Object implements IIdleProtocol, System.IDisposable {

        public FloatingAxis : Genies_Components_SDK_External_Things_FloatingIdleProtocol.Axis
        public CyclesPerSecond : float
        public Amplitude : float
        public IdlingOffset : float
        public get IsIdle(): boolean;
        public get IsDisposed(): boolean;

        public constructor ($target: UnityEngine.Transform)
        public Initialize ($thing: IThing) : void
        public StartIdle () : void
        public StopIdle () : void
        public Dispose () : void
    }

    class GrabProtocol extends System.Object implements IGrabProtocol {

        public _grabPoints : GrabPoint[]

        public constructor ($grabPoints: GrabPoint[])
        public Initialize ($thing: IThing) : void
        public GetGrabPoints () : GrabPoint[]
        public GetHandGrabPoint ($bone: GrabBone) : GrabPoint
        public GetOverrideHandAnimation ($bone: GrabBone) : boolean
        public GetHandTightness ($bone: GrabBone) : float
        public Fit ($maxBounds: UnityEngine.Vector3, $bone: GrabBone) : void
    }

    class MoveAndFitProtocol extends System.Object implements IMoveAndFitProtocol {

        public constructor ($boundingBox: IBoundingBox, $defaultOrientation: UnityEngine.Vector3, $defaultScale: UnityEngine.Vector3)
        public Initialize ($thing: IThing) : void
        public CalculateBounds ($origin?: UnityEngine.Transform) : UnityEngine.Bounds
        public MoveTo ($position: UnityEngine.Vector3) : void
        public MoveTo ($bounds: UnityEngine.Bounds) : void
        public MoveTo ($transform: UnityEngine.Transform, $setOrientation?: boolean, $setParent?: boolean) : void
        public FitTo ($bounds: UnityEngine.Bounds) : void
        public FitTo ($collider: UnityEngine.BoxCollider, $setOrientation?: boolean) : void
        public MoveAndFitTo ($bounds: UnityEngine.Bounds) : void
        public MoveAndFitTo ($collider: UnityEngine.BoxCollider, $setOrientation?: boolean, $setParent?: boolean) : void
        public ResetOrientation () : void
        public ResetSize () : void
    }

    class PokeProtocol extends System.Object implements IPokeProtocol {

        public constructor ($pokeIn: IAnimationClip, $pokeOut: IAnimationClip)
        public Initialize ($thing: IThing) : void
        public PokeInAsync () : Cysharp_Threading_Tasks.UniTask
        public PokeOutAsync () : Cysharp_Threading_Tasks.UniTask
        public PokeInOutAsync () : Cysharp_Threading_Tasks.UniTask
    }

    class IdleProtocolInitializer extends System.Object implements IProtocolInitializer$1<IIdleProtocol> {

        public constructor ()
        public TryInitializeFor ($thing: Thing, $protocol: $Ref<IIdleProtocol>, $error: $Ref<string>) : boolean
        public CanInitializeFor ($thing: Thing, $error: $Ref<string>) : boolean
    }

    interface IProtocolInitializer$1<T> extends IProtocolInitializer {

        TryInitializeFor? ($thing: Thing, $protocol: $Ref<T>, $error: $Ref<string>) : boolean
    }

    class MoveAndFitProtocolInitializer extends System.Object implements IProtocolInitializer$1<IMoveAndFitProtocol> {

        public constructor ()
        public TryInitializeFor ($thing: Thing, $protocol: $Ref<IMoveAndFitProtocol>, $error: $Ref<string>) : boolean
        public CanInitializeFor ($thing: Thing, $error: $Ref<string>) : boolean
    }

    class PokeProtocolInitializer extends System.Object implements IProtocolInitializer$1<IPokeProtocol> {

        public constructor ()
        public TryInitializeFor ($thing: Thing, $protocol: $Ref<IPokeProtocol>, $error: $Ref<string>) : boolean
        public CanInitializeFor ($thing: Thing, $error: $Ref<string>) : boolean
    }

    class PropertyContainer extends System.Object implements Genies_Components_SDK_External_Things_IPropertyProvider.ITarget, IPropertyContainer {

        public get PropertyTypes(): System_Collections_Generic.IReadOnlyCollection$1<System.Type>;

        public constructor ()
        public TryGetProperty<T> ($key: string, $value: $Ref<T>) : boolean
        public ContainsProperty<T> ($key: string) : boolean
        public ContainsPropertiesOfType<T> () : boolean
        public GetPropertyCount<T> () : int
        public GetPropertyKeys<T> ($results: System_Collections_Generic.ICollection$1<string>) : void
        public GetPropertyKeys<T> () : System_Collections_Generic.List$1<string>
        public TryGetProperty ($propertyType: System.Type, $key: string, $value: $Ref<any>) : boolean
        public ContainsProperty ($propertyType: System.Type, $key: string) : boolean
        public ContainsPropertiesOfType ($propertyType: System.Type) : boolean
        public GetPropertyCount ($propertyType: System.Type) : int
        public GetPropertyKeys ($propertyType: System.Type, $results: System_Collections_Generic.ICollection$1<string>) : void
        public GetPropertyKeys ($propertyType: System.Type) : System_Collections_Generic.List$1<string>
        public SetProperty<T> ($key: string, $value: T) : void
        public SetProperty ($propertyType: System.Type, $key: string, $value: any) : void
        public ClearProperties () : void
    }

    class ProtocolExtensions {

        public static GetImplementedProtocols ($protocol: IProtocol) : System_Collections_Generic.List$1<ProtocolDefinition>
        public static GetImplementedProtocols ($protocol: IProtocol, $results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        public static ImplementsProtocol ($protocol: IProtocol, $definition: ProtocolDefinition) : boolean
        public static ImplementsProtocol ($protocol: IProtocol, $protocolId: string) : boolean
        public static GetImplementedProtocols ($protocolType: System.Type, $results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
    }

    class ProtocolContainer extends System.Object implements System_Collections_Generic.IEnumerable$1<IProtocol>, IProtocolContainer {

        public get Count(): int;
        public get InstanceCount(): int;

        public constructor ($protocols?: System_Collections_Generic.IEnumerable$1<IProtocol>)
        public TryGetProtocol ($definition: ProtocolDefinition, $protocol: $Ref<IProtocol>) : boolean
        public TryGetProtocol ($protocolId: string, $protocol: $Ref<IProtocol>) : boolean
        public TryGetProtocol<T extends IProtocol> ($protocol: $Ref<T>) : boolean
        public TryGetProtocol ($type: System.Type, $protocol: $Ref<IProtocol>) : boolean
        public GetProtocols () : System_Collections_Generic.List$1<IProtocol>
        public GetProtocols ($results: System_Collections_Generic.ICollection$1<IProtocol>) : void
        public GetDefinitions () : System_Collections_Generic.List$1<ProtocolDefinition>
        public GetDefinitions ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        public HasProtocol ($definition: ProtocolDefinition) : boolean
        public HasProtocol ($protocolId: string) : boolean
        public HasProtocol<T extends IProtocol> () : boolean
        public HasProtocol ($type: System.Type) : boolean
        public Add ($protocol: IProtocol) : void
        public AddRange ($protocols: System_Collections_Generic.IEnumerable$1<IProtocol>) : void
        public AddAs ($protocol: IProtocol, $definition: ProtocolDefinition) : void
        public AddAs ($protocol: IProtocol, $protocolId: string) : void
        public AddAs<T extends IProtocol> ($protocol: IProtocol) : void
        public AddAs ($protocol: IProtocol, $protocolType: System.Type) : void
        public Remove ($protocol: IProtocol) : boolean
        public Remove ($definition: ProtocolDefinition) : boolean
        public Remove ($protocolId: string) : void
        public Remove<T extends IProtocol> () : void
        public Remove ($protocolType: System.Type) : void
        public Contains ($protocol: IProtocol) : boolean
        public Clear () : void
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<IProtocol>
    }

    class UserThing extends UnityEngine.MonoBehaviour {

        public get LocalThingPrefabs(): System_Collections_Generic.IReadOnlyList$1<Thing>;

        private constructor ()
        public static CreateUserThing ($requiredProtocols: ProtocolDefinitionSet, $localThingPrefabs: System_Collections_Generic.IEnumerable$1<Thing>, $name?: string, $parent?: UnityEngine.Transform) : UserThing
        public TryGetProtocol ($reference: ProtocolDefinitionReference, $protocol: $Ref<IProtocol>) : boolean
        public UnloadThing () : void
        public DestroyThing () : void
    }

    class ProtocolDefinitionReference extends System.ValueType {

        public protocolId : string

        public TryGetDefinition ($definition: $Ref<ProtocolDefinition>) : boolean
        public static op_Implicit ($reference: ProtocolDefinitionReference) : ProtocolDefinition
    }

    class ObjectPathExtensions {

        public static GetPath ($go: UnityEngine.GameObject) : string
        public static GetPath ($c: UnityEngine.Component) : string
        public static GetPath ($m: UnityEngine.MonoBehaviour) : string
        public static GetPath ($t: UnityEngine.Transform) : string
        public static GetErrorWithPath ($m: UnityEngine.MonoBehaviour, $error: string) : string
    }

    class PropertyReferenceExtensions {

        public static TryGetGroupedAnimationClip ($properties: System_Collections_Generic.IEnumerable$1<PropertyReference>, $result: $Ref<IAnimationClip>) : boolean
        public static TryGetGroupedBoundingBox ($properties: System_Collections_Generic.IEnumerable$1<PropertyReference>, $result: $Ref<IBoundingBox>) : boolean
        public static TryGetNextPropertyValue<T> ($enumerator: System_Collections_Generic.IEnumerator$1<PropertyReference>, $value: $Ref<T>) : boolean
    }

    class ProtocolInitializerUtils {

        public static Exists ($thing: Thing, $error: $Ref<string>) : boolean
        public static HasAssets ($thing: Thing, $error: $Ref<string>) : boolean
    }

    class ThingsValidationException extends System.Exception {

        public constructor ($m: UnityEngine.MonoBehaviour, $error: string)
    }

    interface IProtocol {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols? () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols? ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol? ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol? ($protocolId: string) : boolean
    }

    interface ProtocolComponent {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface IMoveAndFitProtocol {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols? () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols? ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol? ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol? ($protocolId: string) : boolean
    }

    interface AnimatedIdleProtocolComponent {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface IIdleProtocol {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols? () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols? ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol? ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol? ($protocolId: string) : boolean
    }

    interface FloatingIdleProtocolComponent {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface GrabProtocolComponent {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface IGrabProtocol {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols? () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols? ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol? ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol? ($protocolId: string) : boolean
    }

    interface MoveAndFitProtocolComponent {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface PokeProtocolComponent {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface IPokeProtocol {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols? () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols? ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol? ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol? ($protocolId: string) : boolean
    }

    interface AnimatedIdleProtocol {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
    }

    interface FloatingIdleProtocol {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
    }

    interface GrabProtocol {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
    }

    interface MoveAndFitProtocol {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
    }

    interface PokeProtocol {

        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols () : System_Collections_Generic.List$1<ProtocolDefinition>
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.GetImplementedProtocols
        */
        GetImplementedProtocols ($results: System_Collections_Generic.ICollection$1<ProtocolDefinition>) : void
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($definition: ProtocolDefinition) : boolean
        /**
        * @extension Genies.Components.SDK.External.Things.ProtocolExtensions.ImplementsProtocol
        */
        ImplementsProtocol ($protocolId: string) : boolean
    }

    interface Thing {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface ThingAsset {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface GroupedPropertyProvider {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface PropertyProvider {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface MoveAndFitBoxesScene {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface MoveAndFitCheckerBox {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface NotImplementedProtocolChecker {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface ThingAssetChecker {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface ThingMaxChecker {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface HandGrabbingBehaviour {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface PlacedObjectsBehaviour {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface AnimationsProvider {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface BoundingBoxProvider {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface TransformsProvider {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface GrabPoint {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface UserThing {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
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

declare module 'System.Collections.ObjectModel' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Collections from 'System.Collections'

    interface ReadOnlyCollection$1<T> extends System_Collections_Generic.IList$1<T>, System_Collections.IList, System_Collections_Generic.IReadOnlyList$1<T> {

    }

}

declare module 'System.Collections.Generic' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'

    interface IList$1<T> extends ICollection$1<T> {

    }

    interface ICollection$1<T> extends IEnumerable$1<T> {

        readonly Count? : int
        readonly IsReadOnly? : boolean

        Add? ($item: T) : void
        Clear? () : void
        Contains? ($item: T) : boolean
        CopyTo? ($array: T[], $arrayIndex: int) : void
        Remove? ($item: T) : boolean
    }

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

        GetEnumerator? () : IEnumerator$1<T>
    }

    interface IEnumerator$1<T> extends System_Collections.IEnumerator, System.IDisposable {

    }

    interface IReadOnlyList$1<T> extends IReadOnlyCollection$1<T> {

    }

    interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {

    }

    interface List$1<T> extends IList$1<T>, System_Collections.IList, IReadOnlyList$1<T> {

    }

    interface ISet$1<T> extends ICollection$1<T> {

        Add? ($item: T) : boolean
        UnionWith? ($other: IEnumerable$1<T>) : void
        IntersectWith? ($other: IEnumerable$1<T>) : void
        ExceptWith? ($other: IEnumerable$1<T>) : void
        SymmetricExceptWith? ($other: IEnumerable$1<T>) : void
        IsSubsetOf? ($other: IEnumerable$1<T>) : boolean
        IsSupersetOf? ($other: IEnumerable$1<T>) : boolean
        IsProperSupersetOf? ($other: IEnumerable$1<T>) : boolean
        IsProperSubsetOf? ($other: IEnumerable$1<T>) : boolean
        Overlaps? ($other: IEnumerable$1<T>) : boolean
        SetEquals? ($other: IEnumerable$1<T>) : boolean
    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

    interface IDeserializationCallback {

    }

}

declare module 'Genies.Components.SDK.External.Things.IPropertyProvider' {
    import * as System from 'System'

    interface ITarget {

        SetProperty?<T> ($key: string, $value: T) : void
        SetProperty? ($propertyType: System.Type, $key: string, $value: any) : void
    }

}

declare module 'Cysharp.Threading.Tasks' {
    import * as System from 'System'

    interface UniTask {

    }

    interface UniTask$1<T> {

    }

}

declare module 'Genies.Utils' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    interface CssAnimation {

    }

    interface AnimatorParameters extends System_Collections_Generic.IReadOnlyList$1<UnityEngine.AnimatorControllerParameter> {

    }

}

declare module 'UnityEngine.UI' {
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    interface Button extends UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler {

    }

    interface Selectable extends UnityEngine_EventSystems.IPointerEnterHandler, UnityEngine_EventSystems.ISelectHandler, UnityEngine_EventSystems.IPointerExitHandler, UnityEngine_EventSystems.IDeselectHandler, UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IPointerUpHandler, UnityEngine_EventSystems.IMoveHandler {

    }

    interface Button {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface Selectable {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

}

declare module 'UnityEngine.EventSystems' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'

    interface ISubmitHandler extends IEventSystemHandler {

    }

    interface IEventSystemHandler {

    }

    interface IPointerClickHandler extends IEventSystemHandler {

    }

    interface IPointerEnterHandler extends IEventSystemHandler {

    }

    interface ISelectHandler extends IEventSystemHandler {

    }

    interface IPointerExitHandler extends IEventSystemHandler {

    }

    interface IDeselectHandler extends IEventSystemHandler {

    }

    interface IPointerDownHandler extends IEventSystemHandler {

    }

    interface IPointerUpHandler extends IEventSystemHandler {

    }

    interface IMoveHandler extends IEventSystemHandler {

    }

    interface UIBehaviour {

    }

    interface UIBehaviour {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

}

declare module 'Genies.Customization.Framework.ItemPicker' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'

    interface ItemPickerCellView {

    }

    interface IItemPickerDataSource {

    }

    interface ItemPickerCtaConfig {

    }

    interface ItemPickerLayoutConfig {

    }

    interface ItemPickerCellView {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

}

declare module 'Genies.UI.Widgets' {
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as System from 'System'

    interface GeniesButton extends UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.IPointerEnterHandler, UnityEngine_EventSystems.IPointerExitHandler, UnityEngine_EventSystems.IPointerDownHandler {

    }

    interface GeniesButton {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

}

declare module 'System.Threading' {
    import * as System from 'System'

    interface CancellationToken {

    }

}

declare module 'Implementation.Things' {
    import * as System from 'System'
    import * as Genies_Components_DI from 'Genies.Components.DI'
    import * as VContainer from 'VContainer'

    class SdkExternalThingsInstaller extends System.Object implements Genies_Components_DI.IGeniesInstaller {

        public get OperationOrder(): int;

        public constructor ()
        public Install ($builder: VContainer.IContainerBuilder) : void
    }

}

declare module 'Genies.Components.DI' {
    import * as VContainer_Unity from 'VContainer.Unity'

    interface IGeniesInstaller extends IGroupedOperation, VContainer_Unity.IInstaller {

    }

    interface IGroupedOperation {

    }

}

declare module 'VContainer.Unity' {

    interface IInstaller {

    }

}

declare module 'VContainer' {

    interface IContainerBuilder {

    }

}

declare module 'Genies.Components.Sdk.External.Things.Service' {
    import * as Genies_Components_Things_Service from 'Genies.Components.Things.Service'
    import * as Genies_Components_Sdk_External_Things_Service_ThingApiDataRepositoryProvider from 'Genies.Components.Sdk.External.Things.Service.ThingApiDataRepositoryProvider'
    import * as System from 'System'

    class ThingApiDataRepositoryProvider {

        public static get Instance(): Genies_Components_Things_Service.IThingDataRepository;

        public static Init ($serviceCreationCallback: Genies_Components_Sdk_External_Things_Service_ThingApiDataRepositoryProvider.DataRepositoryCreationCallback, $forceUpdateInstance?: boolean) : Genies_Components_Things_Service.IThingDataRepository
    }

}

declare module 'Genies.Components.Things.Service' {
    import * as Genies_Components_DataRepositoryFramework from 'Genies.Components.DataRepositoryFramework'
    import * as System from 'System'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as Genies_Services_Configs from 'Genies.Services.Configs'
    import * as Genies_Services_Model from 'Genies.Services.Model'
    import * as Genies_Components_Accounts from 'Genies.Components.Accounts'

    interface IThingDataRepository extends Genies_Components_DataRepositoryFramework.IDataRepository$1<ThingData> {

        CreateThingAsync? () : Cysharp_Threading_Tasks.UniTask$1<string>
        GetThingsAsync? () : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<ThingData>>
        CreateThingVersionAsync? ($thingId: string, $name: string, $description: string, $isNewAsset: boolean) : Cysharp_Threading_Tasks.UniTask$1<string>
        GetThingVersionAsync? ($thingId: string, $type?: string, $status?: string) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<ThingVersionData>>
    }

    class ThingData extends System.ValueType {

        public static DEFAULT : ThingData
        public get ThingId(): string;
        public get CreatorId(): string;

        public constructor ($thingId: string, $creatorId: string)
        public ToString () : string
    }

    class ThingVersionData extends System.Object {

        public static DEFAULT : ThingVersionData
        public get ThingId(): string;
        public get Id(): string;
        public set Id(value: string);
        public get Status(): string;
        public set Status(value: string);
        public get SdkVersion(): System.Nullable$1<bigint>;
        public set SdkVersion(value: System.Nullable$1<bigint>);
        public get ProtocolIds(): System_Collections_Generic.List$1<string>;
        public set ProtocolIds(value: System_Collections_Generic.List$1<string>);
        public get IconUrl(): System_Collections_Generic.List$1<string>;
        public set IconUrl(value: System_Collections_Generic.List$1<string>);
        public get CmsId(): string;
        public set CmsId(value: string);
        public get ReviewerId(): string;
        public set ReviewerId(value: string);
        public get ReviewerComment(): string;
        public set ReviewerComment(value: string);
        public get S3Key(): string;
        public set S3Key(value: string);
        public get Name(): string;
        public set Name(value: string);
        public get Description(): string;
        public set Description(value: string);
        public get FullSdkVersion(): string;
        public set FullSdkVersion(value: string);
        public get CreatedAt(): System.Nullable$1<System.Decimal>;
        public set CreatedAt(value: System.Nullable$1<System.Decimal>);
        public get LastModifiedAt(): System.Nullable$1<System.Decimal>;
        public set LastModifiedAt(value: System.Nullable$1<System.Decimal>);
        public get Version(): string;
        public set Version(value: string);

        public constructor ($thingId: string, $id?: string, $status?: string, $sdkVersion?: System.Nullable$1<int>, $protocolIds?: System_Collections_Generic.List$1<string>, $name?: string, $description?: string, $iconUrl?: System_Collections_Generic.List$1<string>, $cmsId?: string, $reviewerId?: string, $reviewerComment?: string, $s3Key?: string, $fullSdkVersion?: string, $createdAt?: System.Nullable$1<System.Decimal>, $lastModifiedAt?: System.Nullable$1<System.Decimal>, $version?: string)
        public ToString () : string
    }

    class ThingVersionUpdateData extends System.Object {

        public get ThingId(): string;
        public get Id(): string;
        public set Id(value: string);
        public get Status(): string;
        public set Status(value: string);
        public get SdkVersion(): int;
        public set SdkVersion(value: int);
        public get ProtocolIds(): System_Collections_Generic.List$1<string>;
        public set ProtocolIds(value: System_Collections_Generic.List$1<string>);
        public get IconUrl(): System_Collections_Generic.List$1<string>;
        public set IconUrl(value: System_Collections_Generic.List$1<string>);
        public get CmsId(): string;
        public set CmsId(value: string);
        public get ReviewerId(): string;
        public set ReviewerId(value: string);
        public get ReviewerComment(): string;
        public set ReviewerComment(value: string);
        public get S3Url(): string;
        public set S3Url(value: string);

        public constructor ($thingId: string, $id?: string, $status?: string, $sdkVersion?: int, $protocolIds?: System_Collections_Generic.List$1<string>, $iconUrl?: System_Collections_Generic.List$1<string>, $cmsId?: string, $reviewerId?: string, $reviewerComment?: string, $s3Url?: string)
        public ToString () : string
    }

    class ThingApiPathResolver extends System.Object implements Genies_Services_Configs.IApiClientPathResolver {

        public constructor ()
        public GetApiBaseUrl ($environment: Genies_Services_Configs.BackendEnvironment) : string
    }

    class ThingDataHelpers {

        public static ConvertToThingData ($thing: Genies_Services_Model.Thing) : ThingData
        public static ConvertToThing ($thingData: ThingData) : Genies_Services_Model.Thing
        public static ConvertToThingVersionData ($thingVersion: Genies_Services_Model.ThingVersion) : ThingVersionData
        public static ConvertToThingVersionUpdate ($thingVersionUpdateData: ThingVersionUpdateData) : Genies_Services_Model.ThingVersionUpdate
    }

    class ThingDataRepository extends System.Object implements IThingDataRepository {

        public constructor ($accountService: Genies_Components_Accounts.IAccountService, $apiPathResolver: Genies_Services_Configs.IApiClientPathResolver)
        public CreateThingAsync () : Cysharp_Threading_Tasks.UniTask$1<string>
        public GetThingsAsync () : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<ThingData>>
        public CreateThingVersionAsync ($thingId: string, $name: string, $description: string, $isNewAsset: boolean) : Cysharp_Threading_Tasks.UniTask$1<string>
        public GetThingVersionAsync ($thingId: string, $type?: string, $status?: string) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<ThingVersionData>>
        public GetCountAsync () : Cysharp_Threading_Tasks.UniTask$1<int>
        public GetIdsAsync () : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<string>>
        public GetAllAsync () : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<ThingData>>
        public GetByIdAsync ($id: string) : Cysharp_Threading_Tasks.UniTask$1<ThingData>
        public CreateAsync ($data: ThingData) : Cysharp_Threading_Tasks.UniTask$1<ThingData>
        public BatchCreateAsync ($data: System_Collections_Generic.List$1<ThingData>) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<ThingData>>
        public UpdateAsync ($data: ThingData) : Cysharp_Threading_Tasks.UniTask$1<ThingData>
        public BatchUpdateAsync ($data: System_Collections_Generic.List$1<ThingData>) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<ThingData>>
        public DeleteAsync ($id: string) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public BatchDeleteAsync ($ids: System_Collections_Generic.List$1<string>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public DeleteAllAsync () : Cysharp_Threading_Tasks.UniTask$1<boolean>
    }

}

declare module 'Genies.Components.DataRepositoryFramework' {
    import * as System from 'System'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    interface IDataRepository$1<T> {

        GetCountAsync? () : Cysharp_Threading_Tasks.UniTask$1<int>
        GetIdsAsync? () : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<string>>
        GetAllAsync? () : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<T>>
        GetByIdAsync? ($id: string) : Cysharp_Threading_Tasks.UniTask$1<T>
        CreateAsync? ($data: T) : Cysharp_Threading_Tasks.UniTask$1<T>
        BatchCreateAsync? ($data: System_Collections_Generic.List$1<T>) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<T>>
        UpdateAsync? ($data: T) : Cysharp_Threading_Tasks.UniTask$1<T>
        BatchUpdateAsync? ($data: System_Collections_Generic.List$1<T>) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<T>>
        DeleteAsync? ($id: string) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        BatchDeleteAsync? ($ids: System_Collections_Generic.List$1<string>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        DeleteAllAsync? () : Cysharp_Threading_Tasks.UniTask$1<boolean>
    }

}

declare module 'Genies.Components.Sdk.External.Things.Service.ThingApiDataRepositoryProvider' {
    import * as System from 'System'
    import * as Genies_Components_Things_Service from 'Genies.Components.Things.Service'

    interface DataRepositoryCreationCallback {
        () : Genies_Components_Things_Service.IThingDataRepository; 
        Invoke?: () => Genies_Components_Things_Service.IThingDataRepository;
    }
    var DataRepositoryCreationCallback: { new (func: () => Genies_Components_Things_Service.IThingDataRepository): DataRepositoryCreationCallback; }

}

declare module 'Genies.Services.Configs' {

    interface IApiClientPathResolver {

    }

    enum BackendEnvironment {
        QA = 0,
        Prod = 1,
        Dev = 2 
    }

}

declare module 'Genies.Services.Model' {
    import * as System from 'System'
    import * as System_ComponentModel_DataAnnotations from 'System.ComponentModel.DataAnnotations'

    interface Thing extends System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<Thing> {

    }

    interface ThingVersion extends System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<ThingVersion> {

    }

    interface ThingVersionUpdate extends System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<ThingVersionUpdate> {

    }

}

declare module 'System.ComponentModel.DataAnnotations' {

    interface IValidatableObject {

    }

}

declare module 'Genies.Components.Accounts' {

    interface IAccountService {

    }

}

declare module 'Genies.Components.SDK.Core' {
    import * as System from 'System'

    class ThingApiDataRepositoryProviderHelpers extends System.Object {

        public constructor ()
    }

}

declare module 'Genies.Components.SDK.Core.ThingApiDataRepositoryProviderHelpers' {
    import * as Genies_Components_Things_Service from 'Genies.Components.Things.Service'

    class ThingApiDataRepositoryHelpers {

        public static DefaultInit () : Genies_Components_Things_Service.IThingDataRepository
    }

}

declare module 'Genies.Models' {
    import * as Genies_Components_ShaderlessTools from 'Genies.Components.ShaderlessTools'
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'

    interface ThingsSkinContainer {

    }

    interface ASkinContainer extends Genies_Components_ShaderlessTools.IShaderlessAsset {

    }

    interface OrderedScriptableObject {

    }

    interface ThingsTemplate {

    }

    interface ChildAsset {

    }

}

declare module 'Genies.Components.ShaderlessTools' {

    interface IShaderlessAsset {

    }

    interface IShaderlessAssetService {

    }

}

declare module 'Genies.AssetsService' {

    interface IAssetsService {

    }

}

declare module 'Genies.Components.Avatars' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    interface IGenie extends System.IDisposable {

    }

    interface GenieComponent {

    }

    interface AnimationFeatureAsset extends IAnimationFeature {

    }

    interface IAnimationFeature {

    }

    interface RepeatableParamBaseFeatureAsset {

    }

}

declare module 'UnityEngine.Events' {

    interface UnityAction$1<T0> {
        (arg0: T0) : void; 
        Invoke?: (arg0: T0) => void;
    }

}

declare module 'Newtonsoft.Json.Linq' {
    import * as System from 'System'
    import * as System_Dynamic from 'System.Dynamic'
    import * as Newtonsoft_Json from 'Newtonsoft.Json'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    /**
    * Represents an abstract JSON token.
    */
    interface JToken extends System.ICloneable, System_Dynamic.IDynamicMetaObjectProvider, IJEnumerable$1<JToken>, Newtonsoft_Json.IJsonLineInfo {

    }

    /**
    * Represents a collection of  objects.
    */
    interface IJEnumerable$1<T> extends System_Collections_Generic.IEnumerable$1<T> {

    }

}

declare module 'System.Dynamic' {

    interface IDynamicMetaObjectProvider {

    }

}

declare module 'Newtonsoft.Json' {

    /**
    * Provides an interface to enable a class to return line and position information.
    */
    interface IJsonLineInfo {

    }

}

declare module 'Genies.Components.SDK.External.Things.AnimationsProvider' {
    import * as System from 'System'
    import * as Genies_Components_SDK_External_Things from 'Genies.Components.SDK.External.Things'

    class MappedProperty extends System.ValueType {

        public key : string
        public animation : Genies_Components_SDK_External_Things.ThingAnimationClip

    }

}

declare module 'Genies.Components.SDK.External.Things.BoundingBoxProvider' {
    import * as System from 'System'
    import * as Genies_Components_SDK_External_Things from 'Genies.Components.SDK.External.Things'

    class MappedProperty extends System.ValueType {

        public key : string
        public boundingBox : Genies_Components_SDK_External_Things.BoundingBox

    }

}

declare module 'Genies.Components.SDK.External.Things.TransformsProvider' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    class MappedProperty extends System.ValueType {

        public key : string
        public transform : UnityEngine.Transform

    }

}

declare module 'Genies.Components.SDK.External.Things.FloatingIdleProtocol' {

    enum Axis {
        None = 0,
        PositiveX = 1,
        PositiveY = 2,
        PositiveZ = 3,
        NegativeX = 4,
        NegativeY = 5,
        NegativeZ = 6 
    }

}

declare module 'Genies.Components.SDK.External.Things.ProtocolCheckers.Poke' {
    import * as UnityEngine from 'UnityEngine'
    import * as Genies_Components_SDK_External_Things from 'Genies.Components.SDK.External.Things'
    import * as System from 'System'

    class GrabProtocolChecker extends UnityEngine.MonoBehaviour implements Genies_Components_SDK_External_Things.IProtocolChecker {

        public get Widget(): UnityEngine.GameObject;

        private constructor ()
        public Create ($protocol: Genies_Components_SDK_External_Things.IGrabProtocol) : GrabProtocolChecker
        public Initialize ($thing: Genies_Components_SDK_External_Things.IThing) : void
        public OnDestroy () : void
        public Dispose () : void
    }

    class IdleProtocolChecker extends UnityEngine.MonoBehaviour implements Genies_Components_SDK_External_Things.IProtocolChecker {

        public get Widget(): UnityEngine.GameObject;

        private constructor ()
        public Create ($protocol: Genies_Components_SDK_External_Things.IIdleProtocol) : IdleProtocolChecker
        public Initialize ($thing: Genies_Components_SDK_External_Things.IThing) : void
        public Dispose () : void
    }

    class MoveAndFitProtocolChecker extends UnityEngine.MonoBehaviour implements Genies_Components_SDK_External_Things.IProtocolChecker {

        public get Widget(): UnityEngine.GameObject;

        private constructor ()
        public Create ($protocol: Genies_Components_SDK_External_Things.IMoveAndFitProtocol) : MoveAndFitProtocolChecker
        public Initialize ($thing: Genies_Components_SDK_External_Things.IThing) : void
        public Dispose () : void
    }

    class PokeProtocolChecker extends UnityEngine.MonoBehaviour implements Genies_Components_SDK_External_Things.IProtocolChecker {

        public get Widget(): UnityEngine.GameObject;

        private constructor ()
        public Create ($protocol: Genies_Components_SDK_External_Things.IPokeProtocol) : PokeProtocolChecker
        public Initialize ($thing: Genies_Components_SDK_External_Things.IThing) : void
        public Dispose () : void
    }

    interface GrabProtocolChecker {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface IdleProtocolChecker {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface MoveAndFitProtocolChecker {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

    interface PokeProtocolChecker {

        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetPath
        */
        GetPath () : string
        /**
        * @extension Genies.Components.SDK.External.Things.ObjectPathExtensions.GetErrorWithPath
        */
        GetErrorWithPath ($error: string) : string
    }

}

