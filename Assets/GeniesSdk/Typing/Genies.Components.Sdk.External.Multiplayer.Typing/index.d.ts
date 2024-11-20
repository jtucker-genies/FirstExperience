
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Genies.Components.Sdk.External.Multiplayer' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as Sfs2X_Entities_Data from 'Sfs2X.Entities.Data'
    import * as Sfs2X_Entities from 'Sfs2X.Entities'
    import * as Genies_Components_Sdk_External_Multiplayer_GameSchema from 'Genies.Components.Sdk.External.Multiplayer.GameSchema'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as Genies_Components_Sdk_External_Multiplayer_Item from 'Genies.Components.Sdk.External.Multiplayer.Item'
    import * as Sfs2X_Util from 'Sfs2X.Util'
    import * as Genies_Components_Sdk_External_Multiplayer_NetworkLoginManager from 'Genies.Components.Sdk.External.Multiplayer.NetworkLoginManager'
    import * as Genies_Components_Sdk_External_Multiplayer_Player from 'Genies.Components.Sdk.External.Multiplayer.Player'
    import * as Sfs2X from 'Sfs2X'
    import * as Sfs2X_Core from 'Sfs2X.Core'
    import * as Genies_Components_Sdk_External_Multiplayer_Sync from 'Genies.Components.Sdk.External.Multiplayer.Sync'
    import * as Sfs2X_Entities_Variables from 'Sfs2X.Entities.Variables'

    class BaseNetworkManager extends UnityEngine.MonoBehaviour {

        private constructor ()
        public Initialize () : void
        public SendServerRequestAsync ($command: string, $data: Sfs2X_Entities_Data.ISFSObject, $room?: Sfs2X_Entities.Room) : void
    }

    class GameSchema extends UnityEngine.ScriptableObject {

        public gameSchemaJsonAsset : UnityEngine.TextAsset
        public serverConfigJsonAsset : UnityEngine.TextAsset
        public get Version(): int;
        public get ZoneName(): string;
        public get MainRoom(): Genies_Components_Sdk_External_Multiplayer_GameSchema.Room;
        public get ExperienceVersion(): string;
        public get Host(): string;
        public get TcpPort(): int;

        private constructor ()
        public GetServerConfig<T> ($key: string) : T
    }

    class SerializedVector3 extends System.Object {

        public x : float
        public y : float
        public z : float

        public constructor ()
        public static op_Implicit ($value: SerializedVector3) : UnityEngine.Vector3
    }

    class GameSchemaKey extends System.Object {

        public static VERSION : string
        public static HOST : string
        public static EXPERIENCE_VERSION : string
        public static SUPPORT_SERVICE : string
        public static TCP_PORT : string
        public static ZONE_NAME : string
        public static MAIN_ROOM : string
        public static DEFAULT_AOI : string
        public static MAP_LOWER_LIMIT : string
        public static MAP_UPPER_LIMIT : string
        public static MAX_PLAYERS_PER_ROOM : string
        public static MAIN_ROOM_NAME : string

        public constructor ()
    }

    class GatewayAPI extends System.Object {

        public constructor ()
        public static RequestPrivateRoomIdAsync ($url: string, $experienceId: string, $experienceVersion: string, $privateKey?: string) : Cysharp_Threading_Tasks.UniTask$1<string>
        public static RequestRoomIdAsync ($url: string, $experienceId: string, $experienceVersion: string) : Cysharp_Threading_Tasks.UniTask$1<string>
    }

    class GeniesSFSEvent extends System.Object {

        public static GRANT : string
        public static CREATE_ITEM : string
        public static UPDATE_ITEM : string
        public static DELETE_ITEM : string
        public static ON_ITEM_DELETED : string
        public static ADD_SERVER_COMPONENT_TO_ITEM : string
        public static REMOVE_SERVER_COMPONENT_FROM_ITEM : string
        public static CALL_SERVER_COMPONENT_METHOD : string
        public static CALL_SERVER_MODULE_METHOD : string
        public static LOBBY_GET_WAITING_ROOMS : string
        public static LOBBY_CREATE_WAITING_ROOM : string
        public static LOBBY_JOIN_WAITING_ROOM : string
        public static LOBBY_LEAVE_WAITING_ROOM : string
        public static LOBBY_DELETE_WAITING_ROOM : string
        public static LOBBY_UPDATE_WAITING_ROOM : string
        public static LOBBY_START_GAME : string
        public static LOBBY_ON_GET_WAITING_ROOMS : string
        public static LOBBY_ON_WAITING_ROOM_CREATED : string
        public static LOBBY_ON_WAITING_ROOM_UPDATED : string
        public static LOBBY_ON_WAITING_ROOM_DELETED : string
        public static LOBBY_ON_USER_LEFT_WAITING_ROOM : string
        public static LOBBY_ON_USER_JOINED_WAITING_ROOM : string
        public static LOBBY_ON_WAITING_ROOM_JOIN_FAILED : string
        public static LOBBY_ON_WAITING_ROOM_UPDATE_FAILED : string
        public static LOBBY_ON_GAME_STARTED : string
        public static LOBBY_ON_GAME_START_FAILED : string

        public constructor ()
    }

    class GeniesSFSRequest extends System.Object {

        public static BUY : string
        public static SELL : string

        public constructor ()
    }

    interface INetworkEventListener {

        readonly Commands? : System_Collections_Generic.List$1<string>

        Execute? ($command: string, $sfsObject: Sfs2X_Entities_Data.SFSObject) : void
    }

    class NetworkEventManager extends BaseNetworkManager {

        private constructor ()
        public AddListener ($listener: INetworkEventListener) : void
        public AddListener ($command: string, $listener: UnityEngine_Events.UnityAction$2<string, Sfs2X_Entities_Data.SFSObject>) : void
        public RemoveListener ($command: string, $listener: UnityEngine_Events.UnityAction$2<string, Sfs2X_Entities_Data.SFSObject>) : void
        public RemoveListener ($listener: INetworkEventListener) : void
        public CallServerModuleMethod ($type: string, $method: string, $parameters?: Sfs2X_Entities_Data.SFSObject) : void
    }

    class NetworkItemManager extends BaseNetworkManager {

        public OnLocalItemAdded : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Item.NetworkItem>
        public OnRemoteItemAdded : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Item.NetworkItem>
        public OnRemoteItemRemoved : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Item.NetworkItem>
        public OnRemoteItemCreated : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Item.NetworkItem>
        public OnRemoteItemUpdated : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Item.NetworkItem>

        private constructor ()
        public DeleteLocalItem ($item: Genies_Components_Sdk_External_Multiplayer_Item.NetworkItem) : Cysharp_Threading_Tasks.UniTask
        public RegisterLocalItem ($itemGameObject: UnityEngine.GameObject, $itemType: string, $data?: Sfs2X_Entities_Data.ISFSObject) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Multiplayer_Item.NetworkItem>
        public SpawnLocalItem ($factoryKey: string, $itemType: string, $data?: Sfs2X_Entities_Data.ISFSObject, $controlType?: Genies_Components_Sdk_External_Multiplayer_Item.ItemControlType) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Multiplayer_Item.NetworkItem>
        public Initialize () : void
    }

    class NetworkLoginManager extends BaseNetworkManager {

        public OnConnectionStart : UnityEngine_Events.UnityEvent
        public OnConnectionSuccess : UnityEngine_Events.UnityEvent
        public OnConnectionError : UnityEngine_Events.UnityEvent$1<string>
        public OnConnectionLost : UnityEngine_Events.UnityEvent$1<string>
        public OnLoginSuccess : UnityEngine_Events.UnityEvent
        public OnLoginError : UnityEngine_Events.UnityEvent$1<string>
        public get State(): Genies_Components_Sdk_External_Multiplayer_NetworkLoginManager.LoginState;

        private constructor ()
        public Connect ($playerName?: string) : void
        public Connect ($playerName: string, $configData: Sfs2X_Util.ConfigData) : void
        public GetZoneName ($defaultZone?: string) : string
    }

    class NetworkManager extends UnityEngine.MonoBehaviour {

        public static get Instance(): NetworkManager;
        public get Schema(): GameSchema;
        public set Schema(value: GameSchema);

        private constructor ()
        public Add ($manager: BaseNetworkManager) : void
        public Get<T extends BaseNetworkManager> () : T
    }

    class NetworkPlayerManager extends BaseNetworkManager {

        public OnLocalPlayerCreated : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer>
        public OnLocalPlayerUpdated : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer>
        public OnRemotePlayerAdded : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer>
        public OnRemotePlayerRemoved : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer>
        public OnRemotePlayerUpdated : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer>
        public OnRemotePlayerCreated : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer>
        public get LocalPlayer(): Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer;

        private constructor ()
        public Initialize () : void
        public SpawnLocalPlayer () : void
        public AddPlayerUpdatedListener ($id: int, $listener: UnityEngine_Events.UnityAction$1<Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer>) : void
        public RemovePlayerUpdatedListener ($id: int, $listener: UnityEngine_Events.UnityAction$1<Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer>) : void
    }

    class ServerConfigKey extends System.Object {

        public static VERSION : string
        public static SDK_VERSION : string
        public static PLAYER_SYNC_ENABLED : string
        public static ITEMS_ENABLED : string
        public static INVENTORY_ENABLED : string
        public static REWARDS_ENABLED : string
        public static STORE_ENABLED : string

        public constructor ()
    }

    class SmartFoxEventParam extends System.Object {

        public static COMMAND : string
        public static PARAMS : string
        public static USER : string
        public static SUCCESS : string
        public static ERROR_MESSAGE : string
        public static REASON : string
        public static ROOM : string
        public static ITEM : string
        public static ADDED_USERS : string
        public static REMOVED_USERS : string
        public static ADDED_ITEMS : string
        public static REMOVED_ITEMS : string
        public static CHANGED_VARS : string

        public constructor ()
    }

    class SmartFoxManager extends UnityEngine.MonoBehaviour {

        public OnConnectionLost : UnityEngine_Events.UnityEvent$1<string>
        public OnClientCreated : UnityEngine_Events.UnityEvent
        public OnClientDestroyed : UnityEngine_Events.UnityEvent
        public static get Instance(): SmartFoxManager;

        private constructor ()
        public CreateSmartFoxClient () : Sfs2X.SmartFox
        public GetSmartFoxClient () : Sfs2X.SmartFox
    }

    class ServerExtensions {

        public static GetErrorMessage ($baseEvent: Sfs2X_Core.BaseEvent) : string
        public static GetRoom ($baseEvent: Sfs2X_Core.BaseEvent) : Sfs2X_Entities.Room
        public static IsEventForCurrentUser ($baseEvent: Sfs2X_Core.BaseEvent) : boolean
        public static Copy<T extends UnityEngine.Component> ($component: T, $destination: UnityEngine.GameObject) : T
        public static Clone<T> ($list: System_Collections_Generic.List$1<T>) : System_Collections_Generic.List$1<T>
        public static Clone<T> ($source: T) : T
        public static Clone<T> ($source: T, $target: T) : T
        public static ToVector3 ($vector: Sfs2X_Entities_Data.Vec3D) : UnityEngine.Vector3
        public static GetSyncData ($transform: UnityEngine.Transform, $type: Genies_Components_Sdk_External_Multiplayer_Sync.SyncDataType) : float
        public static GetNetworkName ($type: Genies_Components_Sdk_External_Multiplayer_Sync.SyncDataType) : string
        public static GetVariableOrNull ($item: Sfs2X_Entities.MMOItem, $name: string) : Sfs2X_Entities_Variables.IMMOItemVariable
        public static GetVariableOrNull ($item: Sfs2X_Entities.MMOItem, $type: Genies_Components_Sdk_External_Multiplayer_Sync.SyncDataType) : Sfs2X_Entities_Variables.IMMOItemVariable
        /**
        * @methodSwap GetFloatOrDefault_EBB7509C_H5356ABB7
        */
        public static GetFloatOrDefault ($item: Sfs2X_Entities.MMOItem, $type: Genies_Components_Sdk_External_Multiplayer_Sync.SyncDataType, $defaultValue: float) : float
        public static GetPositionOrDefault ($item: Sfs2X_Entities.MMOItem, $defaultValue: UnityEngine.Vector3) : UnityEngine.Vector3
        public static GetRotationOrDefault ($item: Sfs2X_Entities.MMOItem, $defaultValue: UnityEngine.Vector3) : UnityEngine.Quaternion
        public static GetScaleOrDefault ($item: Sfs2X_Entities.MMOItem, $defaultValue: UnityEngine.Vector3) : UnityEngine.Vector3
    }

    interface BaseNetworkManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : BaseNetworkManager
    }

    interface NetworkEventManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkEventManager
    }

    interface NetworkItemManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkItemManager
    }

    interface NetworkLoginManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkLoginManager
    }

    interface NetworkManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkManager
    }

    interface NetworkPlayerManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkPlayerManager
    }

    interface SmartFoxManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : SmartFoxManager
    }

}

declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as Genies_Components_Sdk_External_Multiplayer_Sync from 'Genies.Components.Sdk.External.Multiplayer.Sync'

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
    * A class you can derive from if you want to create objects that live independently of GameObjects.
    */
    interface ScriptableObject {

    }

    /**
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * Represents a raw text or binary file asset.
    */
    interface TextAsset {

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
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    interface MonoBehaviour {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: GameObject) : MonoBehaviour
    }

    interface Behaviour {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: GameObject) : Behaviour
    }

    interface Component {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: GameObject) : Component
    }

    interface Transform {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: GameObject) : Transform
        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.GetSyncData
        */
        GetSyncData ($type: Genies_Components_Sdk_External_Multiplayer_Sync.SyncDataType) : float
    }

}

declare module 'Sfs2X.Entities.Data' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    interface ISFSObject {

    }

    interface SFSObject extends ISFSObject {

    }

    interface Vec3D {

    }

    interface Vec3D {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.ToVector3
        */
        ToVector3 () : UnityEngine.Vector3
    }

}

declare module 'Sfs2X.Entities' {
    import * as System from 'System'
    import * as Sfs2X_Entities_Variables from 'Sfs2X.Entities.Variables'
    import * as Genies_Components_Sdk_External_Multiplayer_Sync from 'Genies.Components.Sdk.External.Multiplayer.Sync'
    import * as UnityEngine from 'UnityEngine'

    interface Room {

    }

    interface MMOItem extends IMMOItem {

    }

    interface IMMOItem {

    }

    interface SFSUser extends User {

    }

    interface User {

    }

    interface MMOItem {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.GetVariableOrNull
        */
        GetVariableOrNull ($name: string) : Sfs2X_Entities_Variables.IMMOItemVariable
        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.GetVariableOrNull
        */
        GetVariableOrNull ($type: Genies_Components_Sdk_External_Multiplayer_Sync.SyncDataType) : Sfs2X_Entities_Variables.IMMOItemVariable
        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.GetFloatOrDefault
        */
        GetFloatOrDefault ($type: Genies_Components_Sdk_External_Multiplayer_Sync.SyncDataType, $defaultValue: float) : float
        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.GetPositionOrDefault
        */
        GetPositionOrDefault ($defaultValue: UnityEngine.Vector3) : UnityEngine.Vector3
        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.GetRotationOrDefault
        */
        GetRotationOrDefault ($defaultValue: UnityEngine.Vector3) : UnityEngine.Quaternion
        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.GetScaleOrDefault
        */
        GetScaleOrDefault ($defaultValue: UnityEngine.Vector3) : UnityEngine.Vector3
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.GameSchema' {
    import * as System from 'System'
    import * as Sfs2X_Requests from 'Sfs2X.Requests'
    import * as Genies_Components_Sdk_External_Multiplayer from 'Genies.Components.Sdk.External.Multiplayer'

    class Room extends System.Object {

        public defaultAoi : Genies_Components_Sdk_External_Multiplayer.SerializedVector3
        public mapLowerLimit : Genies_Components_Sdk_External_Multiplayer.SerializedVector3
        public mapUpperLimit : Genies_Components_Sdk_External_Multiplayer.SerializedVector3
        public maxPlayersPerRoom : short
        public roomName : string

        public constructor ()
        public CreateRoomSettings () : Sfs2X_Requests.RoomSettings
    }

}

declare module 'Sfs2X.Requests' {
    import * as System from 'System'

    interface RoomSettings {

    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface IFormattable {

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

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

    interface Nullable$1<T> {

    }

    interface IAsyncResult {

    }

    interface IDisposable {

    }

}

declare module 'Cysharp.Threading.Tasks' {
    import * as System from 'System'

    interface UniTask$1<T> {

    }

    interface UniTask {

    }

}

declare module 'System.Collections.Generic' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

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

    interface Dictionary$2<TKey,TValue> extends IDictionary$2<TKey,TValue>, System_Collections.IDictionary, System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, IReadOnlyDictionary$2<TKey,TValue> {

    }

    interface IDictionary$2<TKey,TValue> extends ICollection$1<KeyValuePair$2<TKey, TValue>> {

    }

    interface KeyValuePair$2<TKey,TValue> {

    }

    interface IReadOnlyDictionary$2<TKey,TValue> extends IReadOnlyCollection$1<KeyValuePair$2<TKey, TValue>> {

    }

    interface HashSet$1<T> extends ISet$1<T>, System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, IReadOnlyCollection$1<T> {

    }

    interface ISet$1<T> extends ICollection$1<T> {

    }

    interface List$1<T> {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Clone<T>
        */
        Clone () : List$1<T>
    }

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

    interface IList extends ICollection {

    }

    interface ICollection extends IEnumerable {

    }

    interface IDictionary extends ICollection {

    }

}

declare module 'UnityEngine.Events' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    interface UnityAction$2<T0,T1> {
        (arg0: T0, arg1: T1) : void; 
        Invoke?: (arg0: T0, arg1: T1) => void;
    }

    /**
    * One argument version of UnityEvent.
    */
    interface UnityEvent$1<T0> {

    }

    /**
    * Abstract base class for UnityEvents.
    */
    interface UnityEventBase extends UnityEngine.ISerializationCallbackReceiver {

    }

    /**
    * A zero argument persistent callback that can be saved with the Scene.
    */
    interface UnityEvent {

    }

    interface UnityAction$1<T0> {
        (arg0: T0) : void; 
        Invoke?: (arg0: T0) => void;
    }

    /**
    * Two argument version of UnityEvent.
    */
    interface UnityEvent$2<T0,T1> {

    }

    /**
    * Three argument version of UnityEvent.
    */
    interface UnityEvent$3<T0,T1,T2> {

    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

    interface IDeserializationCallback {

    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Item' {
    import * as System from 'System'
    import * as Sfs2X_Entities_Data from 'Sfs2X.Entities.Data'
    import * as Sfs2X_Entities from 'Sfs2X.Entities'
    import * as Sfs2X_Core from 'Sfs2X.Core'
    import * as Sfs2X from 'Sfs2X'
    import * as UnityEngine from 'UnityEngine'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    class NetworkItem extends System.Object {

        public LogRemoteUpdates : boolean
        public get Id(): int;
        public get MmoItem(): Sfs2X_Entities.MMOItem;

        public constructor ()
        public SendServerRequest ($command: string, $data: Sfs2X_Entities_Data.ISFSObject) : void
        public AddServerComponent ($type: string, $path: string) : void
        public RemoveServerComponent ($type: string) : void
        public CallServerComponentMethod ($type: string, $method: string, $parameters?: Sfs2X_Entities_Data.SFSObject) : void
        public AddBehaviours ($playerNetworkBehaviours: ItemNetworkBehaviour[]) : void
        public AddBehaviour ($playerNetworkBehaviour: ItemNetworkBehaviour) : void
        public GetBehaviour<T extends ItemNetworkBehaviour> () : T
        public InitRemote ($item: Sfs2X_Entities.MMOItem) : void
        public UpdateRemote ($item: Sfs2X_Entities.MMOItem, $baseEvent: Sfs2X_Core.BaseEvent) : void
        public InitLocal ($server: Sfs2X.SmartFox, $data: Sfs2X_Entities_Data.ISFSObject) : void
        public UpdateLocal ($server: Sfs2X.SmartFox, $data?: Sfs2X_Entities_Data.ISFSObject) : void
        public DestroyLocal ($server: Sfs2X.SmartFox) : void
        public Destroy () : void
    }

    class ItemNetworkBehaviour extends UnityEngine.MonoBehaviour {

        public AddComponentTo ($target: UnityEngine.GameObject, $controlType: ItemControlType) : ItemNetworkBehaviour
        public SetDirty () : void
        public InitLocal ($server: Sfs2X.SmartFox, $data: Sfs2X_Entities_Data.ISFSObject) : void
        public UpdateLocal ($server: Sfs2X.SmartFox, $data: Sfs2X_Entities_Data.ISFSObject) : void
        public InitRemote ($item: Sfs2X_Entities.MMOItem) : void
        public UpdateRemote ($item: Sfs2X_Entities.MMOItem, $baseEvent: Sfs2X_Core.BaseEvent) : void
        private constructor ()
    }

    enum ItemControlType {
        Local = 0,
        Remote = 1,
        Mixed = 2 
    }

    class NetworkItemVariable extends System.Object {

        public static ID : string
        public static UID : string
        public static FACTORY_TYPE : string
        public static ITEM_TYPE : string
        public static OWNER_ID : string

        public constructor ()
    }

    class NetworkWorldItem extends NetworkItem {

        public LogRemoteUpdates : boolean
        public get Id(): int;
        public get MmoItem(): Sfs2X_Entities.MMOItem;
        public get GameObject(): UnityEngine.GameObject;
        public get Transform(): UnityEngine.Transform;
        public get DoNotDestroyGameObjectOnDestroy(): boolean;
        public set DoNotDestroyGameObjectOnDestroy(value: boolean);

        public constructor ()
        public SetGameObject ($gameObject: UnityEngine.GameObject) : void
        public Destroy () : void
    }

    class RegisterLocalNetworkItem extends UnityEngine.MonoBehaviour {

        public get NetworkItem(): NetworkItem;

        private constructor ()
        public Register ($type?: string) : Cysharp_Threading_Tasks.UniTask$1<NetworkItem>
    }

    interface ItemNetworkBehaviour {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : ItemNetworkBehaviour
    }

    interface RegisterLocalNetworkItem {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : RegisterLocalNetworkItem
    }

}

declare module 'Sfs2X' {
    import * as System from 'System'
    import * as Sfs2X_Core from 'Sfs2X.Core'

    interface SmartFox extends Sfs2X_Core.IDispatchable {

    }

}

declare module 'Sfs2X.Core' {
    import * as System from 'System'
    import * as Sfs2X_Entities from 'Sfs2X.Entities'

    interface IDispatchable {

    }

    interface BaseEvent {

    }

    interface BaseEvent {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.GetErrorMessage
        */
        GetErrorMessage () : string
        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.GetRoom
        */
        GetRoom () : Sfs2X_Entities.Room
        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.IsEventForCurrentUser
        */
        IsEventForCurrentUser () : boolean
    }

}

declare module 'Sfs2X.Util' {
    import * as System from 'System'

    interface ConfigData {

    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.NetworkLoginManager' {

    enum LoginState {
        None = 0,
        Connecting = 1,
        ConnectionFailed = 2,
        LoggingIn = 3,
        LoggedIn = 4,
        LoginFailed = 5,
        Disconnected = 6 
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Player' {
    import * as UnityEngine from 'UnityEngine'
    import * as Sfs2X_Entities from 'Sfs2X.Entities'
    import * as Sfs2X_Core from 'Sfs2X.Core'
    import * as Sfs2X from 'Sfs2X'
    import * as Sfs2X_Entities_Variables from 'Sfs2X.Entities.Variables'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System from 'System'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as Genies_Components_Sdk_External_Multiplayer_Inventory from 'Genies.Components.Sdk.External.Multiplayer.Inventory'
    import * as Genies_Components_Sdk_External_Multiplayer_Sync from 'Genies.Components.Sdk.External.Multiplayer.Sync'

    class NetworkPlayer extends UnityEngine.MonoBehaviour {

        public get User(): Sfs2X_Entities.SFSUser;
        public get Profile(): PlayerProfile;

        private constructor ()
        public Init ($user: Sfs2X_Entities.SFSUser) : void
        public SetDirty () : void
        public AddBehaviours ($playerNetworkBehaviours: PlayerNetworkBehaviour[]) : void
        public AddBehaviour ($playerNetworkBehaviour: PlayerNetworkBehaviour) : void
        public GetBehaviour<T extends PlayerNetworkBehaviour> () : T
        public InitRemote ($user: Sfs2X_Entities.SFSUser) : void
        public UpdateRemote ($user: Sfs2X_Entities.SFSUser, $baseEvent: Sfs2X_Core.BaseEvent) : void
        public InitLocal ($server: Sfs2X.SmartFox, $userVariables?: System_Collections_Generic.List$1<Sfs2X_Entities_Variables.UserVariable>) : void
        public UpdateLocal ($server: Sfs2X.SmartFox, $userVariables?: System_Collections_Generic.List$1<Sfs2X_Entities_Variables.UserVariable>) : void
    }

    class PlayerNetworkBehaviour extends UnityEngine.MonoBehaviour {

        public AddComponentTo ($target: UnityEngine.GameObject, $isLocalInstance: boolean) : PlayerNetworkBehaviour
        public SetDirty () : void
        public InitLocal ($server: Sfs2X.SmartFox, $userVariables: System_Collections_Generic.List$1<Sfs2X_Entities_Variables.UserVariable>) : void
        public UpdateLocal ($server: Sfs2X.SmartFox, $userVariables: System_Collections_Generic.List$1<Sfs2X_Entities_Variables.UserVariable>) : void
        public InitRemote ($user: Sfs2X_Entities.SFSUser) : void
        public UpdateRemote ($user: Sfs2X_Entities.SFSUser, $baseEvent: Sfs2X_Core.BaseEvent) : void
        private constructor ()
    }

    class PlayerProfile extends System.Object {

        public OnUpdated : UnityEngine_Events.UnityEvent
        public get Wallet(): PlayerWallet;
        public get Inventory(): PlayerInventory;
        public get User(): Sfs2X_Entities.SFSUser;

        public constructor ($sfsUser: Sfs2X_Entities.SFSUser)
    }

    class PlayerWallet extends System.Object {

        public constructor ($userVariable: Sfs2X_Entities_Variables.UserVariable)
        public Update ($userVariable: Sfs2X_Entities_Variables.UserVariable) : void
        public Has ($key: string) : boolean
        public GetAvailableCurrencies () : string[]
        public GetInt ($key: string) : int
        public ToString () : string
    }

    class PlayerInventory extends System.Object {

        public constructor ($userVariable: Sfs2X_Entities_Variables.UserVariable)
        public Update ($userVariable: Sfs2X_Entities_Variables.UserVariable) : void
        public GetAll () : System_Collections_Generic.ICollection$1<PlayerInventoryItem>
        public Get ($id: int) : PlayerInventoryItem
        public ToString () : string
    }

    class PlayerInventoryItem extends System.Object {

        public get Count(): int;

        public constructor ($item: Genies_Components_Sdk_External_Multiplayer_Inventory.InventoryItem, $count: int)
        public SetCount ($count: int) : void
    }

    class PlayerNetworkName extends PlayerNetworkBehaviour {

        private constructor ()
        public AddComponentTo ($target: UnityEngine.GameObject, $isLocalInstance: boolean) : PlayerNetworkBehaviour
        public InitLocal ($server: Sfs2X.SmartFox, $userVariables: System_Collections_Generic.List$1<Sfs2X_Entities_Variables.UserVariable>) : void
        public InitRemote ($user: Sfs2X_Entities.SFSUser) : void
    }

    class NetworkPlayerVariable extends System.Object {

        public static TYPE : string
        public static WALLET : string
        public static INVENTORY : string

        public constructor ()
    }

    class LocalPlayerTransformController extends Genies_Components_Sdk_External_Multiplayer_Sync.SyncLocalTransformController {

        public OnUpdated : UnityEngine_Events.UnityEvent
        public get LowerLimit(): UnityEngine.Vector3;
        public get HigherLimit(): UnityEngine.Vector3;

        private constructor ()
    }

    class PlayerNetworkTransform extends PlayerNetworkBehaviour {

        public get RemoteController(): Genies_Components_Sdk_External_Multiplayer_Sync.RemoteTransformController;

        private constructor ()
        public AddComponentTo ($target: UnityEngine.GameObject, $isLocalInstance: boolean) : PlayerNetworkBehaviour
        public Start () : void
        public InitLocal ($server: Sfs2X.SmartFox, $userVariables: System_Collections_Generic.List$1<Sfs2X_Entities_Variables.UserVariable>) : void
        public UpdateLocal ($server: Sfs2X.SmartFox, $userVariables: System_Collections_Generic.List$1<Sfs2X_Entities_Variables.UserVariable>) : void
        public InitRemote ($user: Sfs2X_Entities.SFSUser) : void
        public UpdateRemote ($user: Sfs2X_Entities.SFSUser, $baseEvent: Sfs2X_Core.BaseEvent) : void
    }

    interface NetworkPlayer {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkPlayer
    }

    interface PlayerNetworkBehaviour {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : PlayerNetworkBehaviour
    }

    interface PlayerNetworkName {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : PlayerNetworkName
    }

    interface LocalPlayerTransformController {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : LocalPlayerTransformController
    }

    interface PlayerNetworkTransform {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : PlayerNetworkTransform
    }

}

declare module 'Sfs2X.Entities.Variables' {

    interface UserVariable extends Variable {

    }

    interface Variable {

    }

    interface IMMOItemVariable extends Variable {

    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Inventory' {
    import * as System from 'System'
    import * as Genies_Components_Sdk_External_Multiplayer_Factories from 'Genies.Components.Sdk.External.Multiplayer.Factories'
    import * as Genies_Components_Sdk_External_Multiplayer_Object from 'Genies.Components.Sdk.External.Multiplayer.Object'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'
    import * as Sfs2X_Entities_Data from 'Sfs2X.Entities.Data'
    import * as Genies_Components_Sdk_External_Multiplayer from 'Genies.Components.Sdk.External.Multiplayer'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine from 'UnityEngine'

    class InventoryItem extends System.Object {

        public get Id(): int;
        public get Name(): string;
        public get Price(): int;
        public get Currency(): string;

        public constructor ()
    }

    class NetworkInventoryItemFactory extends Genies_Components_Sdk_External_Multiplayer_Factories.BaseNetworkObjectFactory {

        private constructor ()
        public Create ($sfsObject: Sfs2X_Entities_Data.SFSObject) : System_Threading_Tasks.Task$1<Genies_Components_Sdk_External_Multiplayer_Object.NetworkObject>
    }

    class NetworkInventoryManager extends Genies_Components_Sdk_External_Multiplayer.BaseNetworkManager {

        private constructor ()
        public GetItems () : System_Collections_Generic.ICollection$1<InventoryItem>
        public GetItem ($id: int) : InventoryItem
    }

    class NetworkInventoryObject extends Genies_Components_Sdk_External_Multiplayer_Object.NetworkObject {

        public get Id(): int;
        public get SfsObject(): Sfs2X_Entities_Data.SFSObject;
        public get Amount(): int;

        public constructor ()
        public Init ($sfsObject: Sfs2X_Entities_Data.SFSObject) : void
    }

    interface NetworkInventoryItemFactory {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkInventoryItemFactory
    }

    interface NetworkInventoryManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkInventoryManager
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Sync' {
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as System from 'System'
    import * as Genies_Components_Sdk_External_Multiplayer_Sync_Predictors from 'Genies.Components.Sdk.External.Multiplayer.Sync.Predictors'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    enum SyncDataType {
        x = 10,
        y = 11,
        z = 12,
        rotationX = 20,
        rotationY = 21,
        rotationZ = 22,
        scaleX = 30,
        scaleY = 31,
        scaleZ = 32 
    }

    class LocalTransformController extends UnityEngine.MonoBehaviour {

        public OnUpdated : UnityEngine_Events.UnityEvent

        private constructor ()
    }

    class RemoteTransformController extends UnityEngine.MonoBehaviour {

        public get TargetPosition(): UnityEngine.Vector3;
        public get TargetRotation(): UnityEngine.Quaternion;
        public get TargetScale(): UnityEngine.Vector3;

        private constructor ()
        public SetPosition ($position: UnityEngine.Vector3) : void
        public SetTransform ($x?: System.Nullable$1<float>, $y?: System.Nullable$1<float>, $z?: System.Nullable$1<float>, $rotationX?: System.Nullable$1<float>, $rotationY?: System.Nullable$1<float>, $rotationZ?: System.Nullable$1<float>, $scaleX?: System.Nullable$1<float>, $scaleY?: System.Nullable$1<float>, $scaleZ?: System.Nullable$1<float>, $interpolate?: boolean) : void
        public SetTransform ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $scale: UnityEngine.Vector3, $interpolate: boolean) : void
        public SetPositionPredictor ($positionPredictor: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.ValuePredictorVector3) : void
        public SetRotationPredictor ($rotationPredictor: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.ValuePredictorQuaternion) : void
        public SetScalePredictor ($scalePredictor: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.ValuePredictorVector3) : void
    }

    class SyncConstants extends System.Object {

        public static SyncDataTypeToNetworkTypeMap : System_Collections_Generic.Dictionary$2<SyncDataType, string>

        public constructor ()
    }

    class SyncLocalTransformController extends LocalTransformController {

        public OnUpdated : UnityEngine_Events.UnityEvent
        public get LowerLimit(): UnityEngine.Vector3;
        public get HigherLimit(): UnityEngine.Vector3;

        private constructor ()
        public SetLimits ($lowerLimit: UnityEngine.Vector3, $higherLimit: UnityEngine.Vector3) : void
    }

    interface LocalTransformController {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : LocalTransformController
    }

    interface RemoteTransformController {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : RemoteTransformController
    }

    interface SyncLocalTransformController {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : SyncLocalTransformController
    }

    interface SyncDataType {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.GetNetworkName
        */
        GetNetworkName () : string
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.GatewayAPI' {
    import * as System from 'System'

    class RequestRoomResponse extends System.Object {

        public id : string
        public error : string

        public constructor ()
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.NetworkItemManager' {
    import * as System from 'System'
    import * as Genies_Components_Sdk_External_Multiplayer_Factories from 'Genies.Components.Sdk.External.Multiplayer.Factories'

    class NetworkFactory extends System.Object {

        public factory : Genies_Components_Sdk_External_Multiplayer_Factories.BaseNetworkItemFactory
        public key : string
        public isDefault : boolean

        public constructor ()
        public Initialize () : void
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Factories' {
    import * as UnityEngine from 'UnityEngine'
    import * as Genies_Components_Sdk_External_Multiplayer_Item from 'Genies.Components.Sdk.External.Multiplayer.Item'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System from 'System'
    import * as Genies_Components_Sdk_External_Multiplayer_Player from 'Genies.Components.Sdk.External.Multiplayer.Player'
    import * as Sfs2X_Entities from 'Sfs2X.Entities'
    import * as Genies_Components_Sdk_External_Multiplayer_Object from 'Genies.Components.Sdk.External.Multiplayer.Object'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'
    import * as Sfs2X_Entities_Data from 'Sfs2X.Entities.Data'

    class BaseNetworkItemFactory extends UnityEngine.MonoBehaviour {

        public Initialize () : void
        public Create ($type: string, $controlType: Genies_Components_Sdk_External_Multiplayer_Item.ItemControlType, $position?: System.Nullable$1<UnityEngine.Vector3>, $rotation?: System.Nullable$1<UnityEngine.Quaternion>) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Multiplayer_Item.NetworkItem>
        private constructor ()
    }

    class BaseNetworkPlayerFactory extends UnityEngine.MonoBehaviour {

        public Initialize () : void
        public Create ($user: Sfs2X_Entities.SFSUser, $isLocalInstance?: boolean) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer>
        private constructor ()
    }

    class BaseNetworkObjectFactory extends UnityEngine.MonoBehaviour {

        public Create ($sfsObject: Sfs2X_Entities_Data.SFSObject) : System_Threading_Tasks.Task$1<Genies_Components_Sdk_External_Multiplayer_Object.NetworkObject>
        private constructor ()
    }

    class NetworkCustomItemFactory extends NetworkWorldItemFactory {

        private constructor ()
    }

    class NetworkWorldItemFactory extends BaseNetworkItemFactory {

        private constructor ()
        public Create ($type: string, $controlType: Genies_Components_Sdk_External_Multiplayer_Item.ItemControlType, $initialPosition?: System.Nullable$1<UnityEngine.Vector3>, $initialRotation?: System.Nullable$1<UnityEngine.Quaternion>) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Multiplayer_Item.NetworkItem>
        public Initialize () : void
    }

    class NetworkAvatarFactory extends NetworkPlayerFactory {

        private constructor ()
    }

    class NetworkPlayerFactory extends BaseNetworkPlayerFactory {

        private constructor ()
        public Create ($user: Sfs2X_Entities.SFSUser, $isLocalInstance?: boolean) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Multiplayer_Player.NetworkPlayer>
        public Initialize () : void
    }

    class NetworkNpcFactory extends NetworkPlayerFactory {

        private constructor ()
    }

    interface BaseNetworkItemFactory {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : BaseNetworkItemFactory
    }

    interface BaseNetworkPlayerFactory {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : BaseNetworkPlayerFactory
    }

    interface BaseNetworkObjectFactory {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : BaseNetworkObjectFactory
    }

    interface NetworkCustomItemFactory {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkCustomItemFactory
    }

    interface NetworkWorldItemFactory {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkWorldItemFactory
    }

    interface NetworkAvatarFactory {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkAvatarFactory
    }

    interface NetworkPlayerFactory {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkPlayerFactory
    }

    interface NetworkNpcFactory {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkNpcFactory
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.NetworkPlayerManager' {
    import * as System from 'System'
    import * as Genies_Components_Sdk_External_Multiplayer_Factories from 'Genies.Components.Sdk.External.Multiplayer.Factories'

    class NetworkFactory extends System.Object {

        public factory : Genies_Components_Sdk_External_Multiplayer_Factories.BaseNetworkPlayerFactory
        public key : string
        public isDefault : boolean

        public constructor ()
        public Initialize () : void
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Sync.Predictors' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'

    class ValuePredictorVector3 extends ValuePredictor {

        public interpolationType : InterpolationType
        public extrapolationType : ExtrapolationType
        public speed : float
        public teleportDistance : float
        public newTargetEpsilon : float
        public get Target(): UnityEngine.Vector3;

        public constructor ()
        public Initialize ($initialTarget: UnityEngine.Vector3) : void
        public SetTarget ($currentValue: UnityEngine.Vector3, $newTarget: UnityEngine.Vector3) : UnityEngine.Vector3
        public Update ($currentValue: UnityEngine.Vector3) : UnityEngine.Vector3
    }

    class ValuePredictor extends System.Object {

        public interpolationType : InterpolationType
        public extrapolationType : ExtrapolationType
        public speed : float
        public teleportDistance : float
        public newTargetEpsilon : float

        public constructor ()
    }

    enum InterpolationType {
        None = 0,
        Linear = 1,
        CatmullRomSpline = 2,
        HermiteSpline = 3,
        CubicBezier = 4,
        Exponential = 5,
        EaseInOut = 6 
    }

    enum ExtrapolationType {
        None = 0,
        Linear = 1 
    }

    class ValuePredictorQuaternion extends ValuePredictor {

        public interpolationType : InterpolationType
        public extrapolationType : ExtrapolationType
        public speed : float
        public teleportDistance : float
        public newTargetEpsilon : float
        public get Target(): UnityEngine.Quaternion;

        public constructor ()
        public Initialize ($initialTarget: UnityEngine.Quaternion) : void
        public SetTarget ($currentValue: UnityEngine.Quaternion, $newTarget: UnityEngine.Quaternion) : UnityEngine.Quaternion
        public Update ($currentValue: UnityEngine.Quaternion) : UnityEngine.Quaternion
    }

    class ValuePredictorFloat extends ValuePredictor {

        public interpolationType : InterpolationType
        public extrapolationType : ExtrapolationType
        public speed : float
        public teleportDistance : float
        public newTargetEpsilon : float
        public get Target(): float;

        public constructor ()
        public Initialize ($initialTarget: float) : void
        public SetTarget ($currentValue: float, $newTarget: float) : float
        public Update ($currentValue: float) : float
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Sync.Predictors.Interpolators' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as Genies_Components_Sdk_External_Multiplayer_Sync_Predictors from 'Genies.Components.Sdk.External.Multiplayer.Sync.Predictors'

    class BaseInterpolator extends System.Object {

        public get InterpolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType;
        public set InterpolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType);

        /**
        * @methodSwap Interpolate_EBB7509C_H36932E5C
        */
        public Interpolate ($currentPosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $t: float) : UnityEngine.Vector3
        /**
        * @methodSwap Interpolate_EBB7509C_H1DD034CE
        */
        public Interpolate ($currentRotation: UnityEngine.Quaternion, $targetRotation: UnityEngine.Quaternion, $t: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Interpolate_EBB7509C_E4172388
        */
        public Interpolate ($currentValue: float, $targetValue: float, $t: float) : float
    }

    class NoneInterpolator extends BaseInterpolator {

        public get InterpolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType;
        public set InterpolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType);

        public constructor ()
        /**
        * @methodSwap Interpolate_EBB7509C_H36932E5C
        */
        public Interpolate ($currentPosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $t: float) : UnityEngine.Vector3
        /**
        * @methodSwap Interpolate_EBB7509C_H1DD034CE
        */
        public Interpolate ($currentRotation: UnityEngine.Quaternion, $targetRotation: UnityEngine.Quaternion, $t: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Interpolate_EBB7509C_E4172388
        */
        public Interpolate ($currentValue: float, $targetValue: float, $t: float) : float
    }

    class LinearInterpolator extends BaseInterpolator {

        public get InterpolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType;
        public set InterpolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType);

        public constructor ()
        /**
        * @methodSwap Interpolate_EBB7509C_H36932E5C
        */
        public Interpolate ($currentPosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $t: float) : UnityEngine.Vector3
        /**
        * @methodSwap Interpolate_EBB7509C_H1DD034CE
        */
        public Interpolate ($currentRotation: UnityEngine.Quaternion, $targetRotation: UnityEngine.Quaternion, $t: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Interpolate_EBB7509C_E4172388
        */
        public Interpolate ($currentValue: float, $targetValue: float, $t: float) : float
    }

    class CatmullRomSplineInterpolator extends LinearInterpolator {

        public get InterpolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType;
        public set InterpolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType);

        public constructor ()
        public Interpolate ($currentPosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $t: float) : UnityEngine.Vector3
        /**
        * @methodSwap Interpolate_EBB7509C_H1DD034CE
        */
        public Interpolate ($currentRotation: UnityEngine.Quaternion, $targetRotation: UnityEngine.Quaternion, $t: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Interpolate_EBB7509C_E4172388
        */
        public Interpolate ($currentValue: float, $targetValue: float, $t: float) : float
    }

    class HermiteSplineInterpolator extends LinearInterpolator {

        public get InterpolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType;
        public set InterpolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType);

        public constructor ()
        public Interpolate ($currentPosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $t: float) : UnityEngine.Vector3
        /**
        * @methodSwap Interpolate_EBB7509C_H1DD034CE
        */
        public Interpolate ($currentRotation: UnityEngine.Quaternion, $targetRotation: UnityEngine.Quaternion, $t: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Interpolate_EBB7509C_E4172388
        */
        public Interpolate ($currentValue: float, $targetValue: float, $t: float) : float
    }

    class CubicBezierInterpolator extends LinearInterpolator {

        public get InterpolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType;
        public set InterpolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType);

        public constructor ()
        public Interpolate ($currentPosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $t: float) : UnityEngine.Vector3
        /**
        * @methodSwap Interpolate_EBB7509C_H1DD034CE
        */
        public Interpolate ($currentRotation: UnityEngine.Quaternion, $targetRotation: UnityEngine.Quaternion, $t: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Interpolate_EBB7509C_E4172388
        */
        public Interpolate ($currentValue: float, $targetValue: float, $t: float) : float
    }

    class ExponentialInterpolator extends BaseInterpolator {

        public get InterpolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType;
        public set InterpolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType);
        public get ExponentialFactor(): float;
        public set ExponentialFactor(value: float);

        public constructor ()
        /**
        * @methodSwap Interpolate_EBB7509C_H36932E5C
        */
        public Interpolate ($currentPosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $t: float) : UnityEngine.Vector3
        /**
        * @methodSwap Interpolate_EBB7509C_H1DD034CE
        */
        public Interpolate ($currentRotation: UnityEngine.Quaternion, $targetRotation: UnityEngine.Quaternion, $t: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Interpolate_EBB7509C_E4172388
        */
        public Interpolate ($currentValue: float, $targetValue: float, $t: float) : float
    }

    class EaseInOutInterpolator extends BaseInterpolator {

        public get InterpolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType;
        public set InterpolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.InterpolationType);

        public constructor ()
        /**
        * @methodSwap Interpolate_EBB7509C_H36932E5C
        */
        public Interpolate ($currentPosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $t: float) : UnityEngine.Vector3
        /**
        * @methodSwap Interpolate_EBB7509C_H1DD034CE
        */
        public Interpolate ($currentRotation: UnityEngine.Quaternion, $targetRotation: UnityEngine.Quaternion, $t: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Interpolate_EBB7509C_E4172388
        */
        public Interpolate ($currentValue: float, $targetValue: float, $t: float) : float
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Sync.Predictors.Extrapolators' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as Genies_Components_Sdk_External_Multiplayer_Sync_Predictors from 'Genies.Components.Sdk.External.Multiplayer.Sync.Predictors'

    class BaseExtrapolator extends System.Object {

        public get ExtrapolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.ExtrapolationType;
        public set ExtrapolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.ExtrapolationType);

        /**
        * @methodSwap Extrapolate_EBB7509C_H36932E5C
        */
        public Extrapolate ($currentPosition: UnityEngine.Vector3, $velocity: UnityEngine.Vector3, $deltaTime: float) : UnityEngine.Vector3
        /**
        * @methodSwap Extrapolate_EBB7509C_AEBC6980
        */
        public Extrapolate ($currentRotation: UnityEngine.Quaternion, $angularVelocity: UnityEngine.Vector3, $deltaTime: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Extrapolate_EBB7509C_E4172388
        */
        public Extrapolate ($currentValue: float, $velocity: float, $deltaTime: float) : float
    }

    class NoneExtrapolator extends BaseExtrapolator {

        public get ExtrapolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.ExtrapolationType;
        public set ExtrapolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.ExtrapolationType);

        public constructor ()
        /**
        * @methodSwap Extrapolate_EBB7509C_H36932E5C
        */
        public Extrapolate ($currentPosition: UnityEngine.Vector3, $velocity: UnityEngine.Vector3, $deltaTime: float) : UnityEngine.Vector3
        /**
        * @methodSwap Extrapolate_EBB7509C_AEBC6980
        */
        public Extrapolate ($currentRotation: UnityEngine.Quaternion, $angularVelocity: UnityEngine.Vector3, $deltaTime: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Extrapolate_EBB7509C_E4172388
        */
        public Extrapolate ($currentValue: float, $velocity: float, $deltaTime: float) : float
    }

    class LinearExtrapolator extends BaseExtrapolator {

        public get ExtrapolationType(): Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.ExtrapolationType;
        public set ExtrapolationType(value: Genies_Components_Sdk_External_Multiplayer_Sync_Predictors.ExtrapolationType);

        public constructor ()
        /**
        * @methodSwap Extrapolate_EBB7509C_H36932E5C
        */
        public Extrapolate ($currentPosition: UnityEngine.Vector3, $velocity: UnityEngine.Vector3, $deltaTime: float) : UnityEngine.Vector3
        /**
        * @methodSwap Extrapolate_EBB7509C_AEBC6980
        */
        public Extrapolate ($currentRotation: UnityEngine.Quaternion, $angularVelocity: UnityEngine.Vector3, $deltaTime: float) : UnityEngine.Quaternion
        /**
        * @methodSwap Extrapolate_EBB7509C_E4172388
        */
        public Extrapolate ($currentValue: float, $velocity: float, $deltaTime: float) : float
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Store' {
    import * as Genies_Components_Sdk_External_Multiplayer from 'Genies.Components.Sdk.External.Multiplayer'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System from 'System'
    import * as Sfs2X_Entities_Data from 'Sfs2X.Entities.Data'
    import * as UnityEngine from 'UnityEngine'

    class NetworkStoreManager extends Genies_Components_Sdk_External_Multiplayer.BaseNetworkManager {

        private constructor ()
        public GetOffers () : System_Collections_Generic.ICollection$1<StoreOffer>
        public BuyCurrency ($currency: string, $amount: int) : void
        public BuyOffer ($offerId: int, $amount: int) : void
        public Buy ($parameters: Sfs2X_Entities_Data.SFSObject) : void
        public SellInventoryItem ($id: int, $amount: int) : void
        public Sell ($parameters: Sfs2X_Entities_Data.SFSObject) : void
        public ToString () : string
    }

    class StoreOffer extends System.Object {

        public get Id(): int;
        public get Price(): int;
        public get Currency(): string;
        public get Name(): string;
        public get Rewards(): System_Collections_Generic.List$1<System_Collections_Generic.Dictionary$2<string, any>>;

        public constructor ()
    }

    interface NetworkStoreManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkStoreManager
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Rooms' {
    import * as Genies_Components_Sdk_External_Multiplayer from 'Genies.Components.Sdk.External.Multiplayer'
    import * as System from 'System'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as Sfs2X_Core from 'Sfs2X.Core'
    import * as Sfs2X_Entities from 'Sfs2X.Entities'
    import * as Genies_Components_Sdk_External_Multiplayer_Rooms_UserRoom from 'Genies.Components.Sdk.External.Multiplayer.Rooms.UserRoom'
    import * as UnityEngine from 'UnityEngine'

    class NetworkRoomManager extends Genies_Components_Sdk_External_Multiplayer.BaseNetworkManager {

        public OnRoomJoinStarted : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomJoinSuccess : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomLeft : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomJoinError : UnityEngine_Events.UnityEvent$2<UserRoom, string>
        public OnRoomCreationError : UnityEngine_Events.UnityEvent$2<UserRoom, string>

        private constructor ()
        public JoinMainRoom ($privateKey?: string) : void
        public LeaveRoom ($userRoom: UserRoom) : boolean
        public GetUserRoom ($roomId: string) : UserRoom
    }

    class UserRoom extends System.Object {

        public OnRoomJoinStarted : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomCreateStarted : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomLeaveStarted : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomJoinSuccess : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomLeft : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomJoinError : UnityEngine_Events.UnityEvent$2<UserRoom, string>
        public OnRoomCreationError : UnityEngine_Events.UnityEvent$2<UserRoom, string>
        public get Room(): Sfs2X_Entities.Room;
        public get RoomId(): string;
        public get State(): Genies_Components_Sdk_External_Multiplayer_Rooms_UserRoom.RoomState;
        public get CanLeaveRoom(): boolean;

        public constructor ($roomId: string)
        public StartJoiningRoom () : void
        public StartCreatingRoom () : void
        public StartLeavingRoom () : void
        public OnRoomJoin ($baseEvent: Sfs2X_Core.BaseEvent) : void
        public OnRoomLeave ($baseEvent: Sfs2X_Core.BaseEvent) : void
        public OnJoinRoomError ($baseEvent: Sfs2X_Core.BaseEvent) : void
        public OnCreateRoomError ($baseEvent: Sfs2X_Core.BaseEvent) : void
    }

    interface NetworkRoomManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkRoomManager
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Rooms.UserRoom' {

    enum RoomState {
        None = 0,
        JoiningRoom = 1,
        JoinedRoom = 2,
        JoiningRoomFailed = 3,
        RoomUnavailable = 4,
        LeavingRoom = 5,
        LeftRoom = 6,
        CreatingRoomFailed = 7 
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Rewards' {
    import * as Genies_Components_Sdk_External_Multiplayer_Factories from 'Genies.Components.Sdk.External.Multiplayer.Factories'
    import * as Genies_Components_Sdk_External_Multiplayer_Object from 'Genies.Components.Sdk.External.Multiplayer.Object'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'
    import * as Sfs2X_Entities_Data from 'Sfs2X.Entities.Data'
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as Genies_Components_Sdk_External_Multiplayer from 'Genies.Components.Sdk.External.Multiplayer'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as UnityEngine from 'UnityEngine'

    class NetworkObjectObjectFactory extends Genies_Components_Sdk_External_Multiplayer_Factories.BaseNetworkObjectFactory {

        private constructor ()
        public Create ($sfsObject: Sfs2X_Entities_Data.SFSObject) : System_Threading_Tasks.Task$1<Genies_Components_Sdk_External_Multiplayer_Object.NetworkObject>
    }

    class NetworkRewardObject extends Genies_Components_Sdk_External_Multiplayer_Object.NetworkObject {

        public get Id(): int;
        public get SfsObject(): Sfs2X_Entities_Data.SFSObject;
        public get Items(): System_Collections_Generic.List$1<int>;

        public constructor ()
        public Init ($sfsObject: Sfs2X_Entities_Data.SFSObject) : void
    }

    class NetworkRewardsManager extends Genies_Components_Sdk_External_Multiplayer.BaseNetworkManager {

        public OnRewardGranted : UnityEngine_Events.UnityEvent$1<Genies_Components_Sdk_External_Multiplayer_Object.NetworkObject>

        private constructor ()
    }

    interface NetworkObjectObjectFactory {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkObjectObjectFactory
    }

    interface NetworkRewardsManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkRewardsManager
    }

}

declare module 'System.Threading.Tasks' {
    import * as System from 'System'
    import * as System_Threading from 'System.Threading'

    interface Task$1<TResult> {

    }

    interface Task extends System.IAsyncResult, System_Threading.IThreadPoolWorkItem, System.IDisposable {

    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Object' {
    import * as System from 'System'
    import * as Sfs2X_Entities_Data from 'Sfs2X.Entities.Data'

    class NetworkObject extends System.Object {

        public get Id(): int;
        public get SfsObject(): Sfs2X_Entities_Data.SFSObject;

        public constructor ()
        public Init ($sfsObject: Sfs2X_Entities_Data.SFSObject) : void
        public Destroy () : void
    }

    class NetworkObjectVariable extends System.Object {

        public static TYPE : string
        public static OWNER_ID : string
        public static ID : string
        public static AMOUNT : string
        public static CURRENCY : string

        public constructor ()
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Rewards.NetworkRewardsManager' {
    import * as System from 'System'
    import * as Genies_Components_Sdk_External_Multiplayer_Factories from 'Genies.Components.Sdk.External.Multiplayer.Factories'

    class NetworkFactory extends System.Object {

        public factory : Genies_Components_Sdk_External_Multiplayer_Factories.BaseNetworkObjectFactory
        public key : string
        public isDefault : boolean

        public constructor ()
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Lobby' {
    import * as System from 'System'
    import * as Genies_Components_Sdk_External_Multiplayer_Lobby_LobbyGateway from 'Genies.Components.Sdk.External.Multiplayer.Lobby.LobbyGateway'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as Genies_Components_Sdk_External_Multiplayer_Rooms from 'Genies.Components.Sdk.External.Multiplayer.Rooms'
    import * as Genies_Components_Sdk_External_Multiplayer from 'Genies.Components.Sdk.External.Multiplayer'
    import * as Sfs2X_Core from 'Sfs2X.Core'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as Sfs2X_Entities from 'Sfs2X.Entities'
    import * as Genies_Components_Sdk_External_Multiplayer_Rooms_UserRoom from 'Genies.Components.Sdk.External.Multiplayer.Rooms.UserRoom'
    import * as Sfs2X_Entities_Data from 'Sfs2X.Entities.Data'
    import * as UnityEngine from 'UnityEngine'

    class LobbyGateway extends System.Object {

        public constructor ()
        public static DownloadLobbyServersAsync () : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Multiplayer_Lobby_LobbyGateway.ServerRemoteSetupData>
    }

    class LobbyRoom extends Genies_Components_Sdk_External_Multiplayer_Rooms.UserRoom {

        public OnRoomJoinStarted : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomCreateStarted : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomLeaveStarted : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomJoinSuccess : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomLeft : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomJoinError : UnityEngine_Events.UnityEvent$2<UserRoom, string>
        public OnRoomCreationError : UnityEngine_Events.UnityEvent$2<UserRoom, string>
        public get Room(): Sfs2X_Entities.Room;
        public get RoomId(): string;
        public get State(): Genies_Components_Sdk_External_Multiplayer_Rooms_UserRoom.RoomState;
        public get CanLeaveRoom(): boolean;
        public OnUserCountUpdated : UnityEngine_Events.UnityEvent$1<LobbyRoom>
        public OnWaitingRoomsUpdated : UnityEngine_Events.UnityEvent$1<LobbyRoom>
        public OnWaitingRoomUpdated : UnityEngine_Events.UnityEvent$1<LobbyRoom>
        public OnWaitingRoomCreated : UnityEngine_Events.UnityEvent$2<LobbyRoom, boolean>
        public OnWaitingRoomDeleted : UnityEngine_Events.UnityEvent$2<LobbyRoom, boolean>
        public OnUserJoinedWaitingRoom : UnityEngine_Events.UnityEvent$2<LobbyRoom, boolean>
        public OnUserFailedToJoinWaitingRoom : UnityEngine_Events.UnityEvent$2<LobbyRoom, string>
        public OnUserFailedToUpdateWaitingRoom : UnityEngine_Events.UnityEvent$2<LobbyRoom, string>
        public OnUserLeftWaitingRoom : UnityEngine_Events.UnityEvent$2<LobbyRoom, boolean>
        public OnGameStarted : UnityEngine_Events.UnityEvent$1<LobbyRoom>
        public OnGameStartFailed : UnityEngine_Events.UnityEvent$2<LobbyRoom, string>
        public OnSendServerRequestAsync : UnityEngine_Events.UnityEvent$3<string, Sfs2X_Entities_Data.ISFSObject, Sfs2X_Entities.Room>
        public get ExperienceId(): string;
        public get LobbyId(): string;
        public get CurrentWaitingRoom(): WaitingRoom;
        public get UsersCount(): int;
        public get MaxUsersCount(): int;
        public get SpectatorsCount(): int;
        public get MaxSpectatorsCount(): int;
        public get IsWaitingRoomUserOwned(): boolean;
        public get IsInWaitingRoom(): boolean;
        public get WaitingRoomUsersCount(): int;
        public get MaxWaitingRoomUsersCount(): int;
        public get WaitingRooms(): System_Collections_Generic.List$1<WaitingRoom>;

        public constructor ($experienceId: string, $myUserId: int, $requestWaitingRoomsWhenLeavingOne: boolean)
        public SetupEventListeners ($networkEventManager: Genies_Components_Sdk_External_Multiplayer.NetworkEventManager) : void
        public UpdateUserCount ($baseEvent: Sfs2X_Core.BaseEvent) : void
        public OnRoomJoin ($baseEvent: Sfs2X_Core.BaseEvent) : void
        public ResetCurrentWaitingRoom () : void
        public SaveWaitingRoom () : boolean
        public ResetWaitingRoom () : boolean
        public JoinWaitingRoom ($roomId: int) : void
        public CreateWaitingRoom ($roomName: string, $maxUsers: int, $minUsersToStart?: int, $isPrivate?: boolean, $ownerId?: System.Nullable$1<int>, $usersAllowedToStart?: System_Collections_Generic.List$1<int>) : void
        public UpdateWaitingRoom ($roomId: int, $roomName?: string, $maxUsers?: System.Nullable$1<int>, $ownerId?: System.Nullable$1<int>, $minUsersToStart?: System.Nullable$1<int>, $isPrivate?: System.Nullable$1<boolean>, $usersAllowedToStart?: System_Collections_Generic.List$1<int>) : boolean
        public LeaveWaitingRoom ($roomId: int) : void
        public DeleteWaitingRoom ($roomId: int) : void
        public RequestWaitingRooms () : void
        public StartExperience () : boolean
        public GetWaitingRoom ($id: int) : WaitingRoom
        public constructor ($roomId: string)
    }

    class WaitingRoom extends System.Object {

        public get Id(): int;
        public get Name(): string;
        public get OwnerId(): int;
        public get MaxUsers(): int;
        public get MinUsersToStart(): int;
        public get IsPrivate(): boolean;
        public get PlayerIds(): System_Collections_Generic.HashSet$1<int>;
        public get PlayerIdsAllowedStart(): System_Collections_Generic.HashSet$1<int>;

        public constructor ($sfsObject: Sfs2X_Entities_Data.ISFSObject)
        public Update ($sfsObject: Sfs2X_Entities_Data.ISFSObject) : void
    }

    class NetworkLobbyManager extends Genies_Components_Sdk_External_Multiplayer_Rooms.NetworkRoomManager {

        public OnRoomJoinStarted : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomJoinSuccess : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomLeft : UnityEngine_Events.UnityEvent$1<UserRoom>
        public OnRoomJoinError : UnityEngine_Events.UnityEvent$2<UserRoom, string>
        public OnRoomCreationError : UnityEngine_Events.UnityEvent$2<UserRoom, string>
        public get RequestWaitingRoomsWhenLeavingOne(): boolean;
        public set RequestWaitingRoomsWhenLeavingOne(value: boolean);

        private constructor ()
        public JoinLobby ($experienceId: string) : boolean
        public LeaveLobby ($experienceId: string) : boolean
        public GetLobbyRoom ($experienceId: string) : LobbyRoom
    }

    interface NetworkLobbyManager {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : NetworkLobbyManager
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Lobby.LobbyGateway' {
    import * as System from 'System'
    import * as Genies_Components_Sdk_External_Multiplayer_Lobby_LobbyGateway_ServerRemoteSetupData from 'Genies.Components.Sdk.External.Multiplayer.Lobby.LobbyGateway.ServerRemoteSetupData'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class ServerRemoteSetupData extends System.Object {

        public servers : System_Collections_Generic.List$1<Genies_Components_Sdk_External_Multiplayer_Lobby_LobbyGateway_ServerRemoteSetupData.ServerTarget>

        public constructor ()
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Lobby.LobbyGateway.ServerRemoteSetupData' {
    import * as System from 'System'

    class ServerTarget extends System.Object {

        public name : string
        public location : string
        public path : string
        public port : bigint

        public constructor ()
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Item.Transform' {
    import * as Genies_Components_Sdk_External_Multiplayer_Sync from 'Genies.Components.Sdk.External.Multiplayer.Sync'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as UnityEngine from 'UnityEngine'
    import * as Genies_Components_Sdk_External_Multiplayer_Item from 'Genies.Components.Sdk.External.Multiplayer.Item'
    import * as Sfs2X from 'Sfs2X'
    import * as Sfs2X_Entities_Data from 'Sfs2X.Entities.Data'
    import * as Sfs2X_Entities from 'Sfs2X.Entities'
    import * as Sfs2X_Core from 'Sfs2X.Core'
    import * as System from 'System'

    class LocalWorldItemTransformController extends Genies_Components_Sdk_External_Multiplayer_Sync.SyncLocalTransformController {

        public OnUpdated : UnityEngine_Events.UnityEvent
        public get LowerLimit(): UnityEngine.Vector3;
        public get HigherLimit(): UnityEngine.Vector3;

        private constructor ()
    }

    class WorldItemNetworkTransform extends Genies_Components_Sdk_External_Multiplayer_Item.ItemNetworkBehaviour {

        public LogRemoteUpdates : boolean
        public get LocalController(): LocalWorldItemTransformController;
        public get RemoteController(): Genies_Components_Sdk_External_Multiplayer_Sync.RemoteTransformController;

        private constructor ()
        public AddComponentTo ($target: UnityEngine.GameObject, $controlType: Genies_Components_Sdk_External_Multiplayer_Item.ItemControlType) : Genies_Components_Sdk_External_Multiplayer_Item.ItemNetworkBehaviour
        public Start () : void
        public InitLocal ($server: Sfs2X.SmartFox, $data: Sfs2X_Entities_Data.ISFSObject) : void
        public UpdateLocal ($server: Sfs2X.SmartFox, $data: Sfs2X_Entities_Data.ISFSObject) : void
        public InitRemote ($item: Sfs2X_Entities.MMOItem) : void
        public UpdateRemote ($item: Sfs2X_Entities.MMOItem, $baseEvent: Sfs2X_Core.BaseEvent) : void
    }

    interface LocalWorldItemTransformController {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : LocalWorldItemTransformController
    }

    interface WorldItemNetworkTransform {

        /**
        * @extension Genies.Components.Sdk.External.Multiplayer.ServerExtensions.Copy
        */
        Copy ($destination: UnityEngine.GameObject) : WorldItemNetworkTransform
    }

}

declare module 'Genies.Components.Sdk.External.Multiplayer.Factories.NetworkCustomItemFactory' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    class ItemModel extends System.Object {

        public get Name(): string;

        public constructor ()
        public Instantiate ($position?: System.Nullable$1<UnityEngine.Vector3>, $rotation?: System.Nullable$1<UnityEngine.Quaternion>, $scale?: System.Nullable$1<UnityEngine.Vector3>) : UnityEngine.GameObject
    }

}

