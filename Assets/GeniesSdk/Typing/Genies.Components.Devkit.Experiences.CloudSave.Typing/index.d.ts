
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Genies.Components.Devkit.Experiences.CloudSave' {
    import * as Genies_Utils from 'Genies.Utils'
    import * as System from 'System'
    import * as Genies_Services_Configs from 'Genies.Services.Configs'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as Genies_SDKServices_Model from 'Genies.SDKServices.Model'
    import * as Genies_Components_Devkit_Experiences_CloudSave_CloudSaveServiceProvider from 'Genies.Components.Devkit.Experiences.CloudSave.CloudSaveServiceProvider'
    import * as System_Collections from 'System.Collections'

    class CloudSaveInitializer extends Genies_Utils.Initializer {

        private constructor ()
    }

    class CloudSavePathResolver extends System.Object implements Genies_Services_Configs.IApiClientPathResolver {

        public constructor ()
        public GetApiBaseUrl ($environment: Genies_Services_Configs.BackendEnvironment) : string
    }

    class CloudSaveService extends System.Object implements ICloudSaveService {

        public constructor ()
        public WaitUntilInitializedAsync () : Cysharp_Threading_Tasks.UniTask
        public GetCloudSaveAsync ($instanceId: string, $shared?: boolean) : Cysharp_Threading_Tasks.UniTask$1<Genies_SDKServices_Model.CloudSaveGetResponse>
        public GetCloudSaveAsync ($experienceId: System.Guid, $instanceId: string, $shared?: boolean) : Cysharp_Threading_Tasks.UniTask$1<Genies_SDKServices_Model.CloudSaveGetResponse>
        public SetCloudSaveAsync ($instanceId: string, $data: string, $shared?: boolean) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public SetCloudSaveAsync ($experienceId: System.Guid, $instanceId: string, $data: string, $shared?: boolean) : Cysharp_Threading_Tasks.UniTask$1<boolean>
    }

    interface ICloudSaveService {

        WaitUntilInitializedAsync? () : Cysharp_Threading_Tasks.UniTask
        GetCloudSaveAsync? ($instanceId: string, $shared?: boolean) : Cysharp_Threading_Tasks.UniTask$1<Genies_SDKServices_Model.CloudSaveGetResponse>
        GetCloudSaveAsync? ($experienceId: System.Guid, $instanceId: string, $shared?: boolean) : Cysharp_Threading_Tasks.UniTask$1<Genies_SDKServices_Model.CloudSaveGetResponse>
        SetCloudSaveAsync? ($instanceId: string, $data: string, $shared?: boolean) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        SetCloudSaveAsync? ($experienceId: System.Guid, $instanceId: string, $data: string, $shared?: boolean) : Cysharp_Threading_Tasks.UniTask$1<boolean>
    }

    class CloudSaveServiceProvider extends System.Object {

        public static get Instance(): ICloudSaveService;

        public constructor ()
        public static InitAsync ($serviceCreationCallback: Genies_Components_Devkit_Experiences_CloudSave_CloudSaveServiceProvider.TraitsServiceCreationCallback) : Cysharp_Threading_Tasks.UniTask$1<ICloudSaveService>
    }

    class CloudSaveStorage extends System.Object {

        public get ExperienceId(): System.Guid;
        public get Key(): string;
        public get IsShared(): boolean;
        public get IsLoaded(): boolean;
        public get Count(): int;

        public constructor ($key?: string, $experienceId?: System.Nullable$1<System.Guid>, $shared?: boolean)
        public Load () : Cysharp_Threading_Tasks.UniTask
        public Save () : Cysharp_Threading_Tasks.UniTask
        public Has ($key: string) : boolean
        public GetString ($key: string) : string
        public GetInt ($key: string) : int
        public GetFloat ($key: string) : float
        public GetBool ($key: string) : boolean
        public SetString ($key: string, $value: string) : boolean
        public SetInt ($key: string, $value: int) : boolean
        public SetFloat ($key: string, $value: float) : boolean
        public SetBool ($key: string, $value: boolean) : boolean
        public Remove ($key: string) : boolean
        public RemoveAll () : void
        public GetKeys () : System_Collections.IEnumerable
    }

    class CloudSaveUtility {

        public static SerializeToJson<T> ($obj: T) : string
        public static DeserializeFromJson<T> ($jsonString: string) : T
        public static EncodeToBase64 ($toEncode: string) : string
        public static DecodeFromBase64 ($encodedData: string) : string
        public static GetCurrentExperienceIdGuid () : System.Guid
    }

}

declare module 'Genies.Utils' {
    import * as UnityEngine from 'UnityEngine'

    interface Initializer {

    }

}

declare module 'UnityEngine' {
    import * as System from 'System'

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

    interface Guid extends IFormattable, ISpanFormattable, IComparable, IComparable$1<Guid>, IEquatable$1<Guid> {

    }

    interface IComparable$1<T> {

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

    interface DateTime extends IFormattable, ISpanFormattable, IComparable, IComparable$1<DateTime>, IConvertible, System_Runtime_Serialization.ISerializable, IEquatable$1<DateTime> {

    }

}

declare module 'Cysharp.Threading.Tasks' {
    import * as System from 'System'

    interface UniTask {

    }

    interface UniTask$1<T> {

    }

}

declare module 'Genies.SDKServices.Model' {
    import * as System from 'System'
    import * as System_ComponentModel_DataAnnotations from 'System.ComponentModel.DataAnnotations'

    interface CloudSaveGetResponse extends System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<CloudSaveGetResponse> {

    }

}

declare module 'System.ComponentModel.DataAnnotations' {

    interface IValidatableObject {

    }

}

declare module 'Genies.Components.Devkit.Experiences.CloudSave.CloudSaveServiceProvider' {
    import * as System from 'System'
    import * as Genies_Components_Devkit_Experiences_CloudSave from 'Genies.Components.Devkit.Experiences.CloudSave'

    interface TraitsServiceCreationCallback {
        () : Genies_Components_Devkit_Experiences_CloudSave.ICloudSaveService; 
        Invoke?: () => Genies_Components_Devkit_Experiences_CloudSave.ICloudSaveService;
    }
    var TraitsServiceCreationCallback: { new (func: () => Genies_Components_Devkit_Experiences_CloudSave.ICloudSaveService): TraitsServiceCreationCallback; }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

    interface IDeserializationCallback {

    }

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

    interface IDictionary extends ICollection {

    }

    interface ICollection extends IEnumerable {

    }

    interface IList extends ICollection {

    }

}

declare module 'Genies.Components.Devkit.Experiences.CloudSave.AsyncGame' {
    import * as System from 'System'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as Genies_Components_Devkit_Experiences_CloudSave from 'Genies.Components.Devkit.Experiences.CloudSave'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class AsyncGameSession extends System.Object {

        public get Storage(): Genies_Components_Devkit_Experiences_CloudSave.CloudSaveStorage;
        public get Id(): string;
        public get ExperienceId(): System.Guid;
        public get Name(): string;
        public get IsLoaded(): boolean;
        public get IsPublic(): boolean;
        public get PlayerState(): PlayerState;
        public get GameState(): GameState;
        public get SessionMetadata(): SessionMetadata;

        public constructor ($id: string, $experienceId: System.Guid, $name: string, $isPublic?: boolean)
        public static Create ($name: string) : AsyncGameSession
        public static Find ($sessionId: string, $experienceId?: System.Nullable$1<System.Guid>) : Cysharp_Threading_Tasks.UniTask$1<AsyncGameSession>
        public Load () : Cysharp_Threading_Tasks.UniTask
        public Save () : Cysharp_Threading_Tasks.UniTask
        public CreateReference () : AsyncGameSessionReference
        public SetSessionName ($name: string) : void
        public SetSessionPublic ($isPublic: boolean) : void
        public HasPlayerState () : boolean
        public HasGameState () : boolean
        public HasSessionMetadata () : boolean
    }

    class AsyncGameSessionReference extends System.Object {

        public get Name(): string;
        public get SessionId(): string;
        public set SessionId(value: string);
        public get StartedAt(): System.DateTime;
        public set StartedAt(value: System.DateTime);
        public get LastAccessed(): System.DateTime;
        public set LastAccessed(value: System.DateTime);

        public constructor ($sessionId: string, $session?: AsyncGameSession)
        public GetSession () : AsyncGameSession
    }

    class PlayerState extends System.Object {

        public static HAS_TAKEN_TURN_KEY : string
        public get MaxPlayers(): System.Nullable$1<int>;

        public constructor ()
        public AddPlayer ($playerId: string, $initialAttributes?: System_Collections_Generic.Dictionary$2<string, any>, $includeTurnAttribute?: boolean) : boolean
        public RemovePlayer ($playerId: string) : boolean
        public HasPlayer ($playerId: string) : boolean
        public GetAllPlayerIds () : System_Collections_Generic.IReadOnlyList$1<string>
        public GetPlayerAttributes ($playerId: string) : System_Collections_Generic.Dictionary$2<string, any>
        public UpdatePlayerAttribute ($playerId: string, $attributeKey: string, $value: any) : void
        public GetPlayerAttribute ($playerId: string, $attributeKey: string) : any
        public SetMaxPlayers ($maxPlayers: int) : void
        public IsSessionFull () : boolean
        public ResetAllPlayersTurns () : void
        public CompletePlayerTurn ($playerId: string) : void
        public HaveAllPlayersCompletedTurns () : boolean
    }

    class GameState extends System.Object {

        public get GameAttributes(): System_Collections_Generic.Dictionary$2<string, any>;
        public get LastUpdate(): System.DateTime;
        public get ActionHistory(): System_Collections_Generic.List$1<PlayerAction>;

        public constructor ($playerState: PlayerState)
        public SetGameAttribute ($key: string, $value: any) : void
        public GetGameAttribute ($key: string) : any
        public RemoveGameAttribute ($key: string) : void
        public AddPlayerToGame ($playerId: string, $initialAttributes?: System_Collections_Generic.Dictionary$2<string, any>) : void
        public RemovePlayerFromGame ($playerId: string) : void
        public GetNextPlayerTurn () : string
        public RecordAction ($action: PlayerAction) : void
    }

    class PlayerAction extends System.Object {

        public get PlayerId(): string;
        public set PlayerId(value: string);
        public get ActionType(): string;
        public set ActionType(value: string);
        public get ActionDetails(): System_Collections_Generic.Dictionary$2<string, any>;
        public set ActionDetails(value: System_Collections_Generic.Dictionary$2<string, any>);
        public get ActionTime(): System.DateTime;

        public constructor ($playerId: string, $actionType: string)
        public AddDetail ($key: string, $value: any) : void
    }

    class SessionMetadata extends System.Object {

        public get Settings(): System_Collections_Generic.Dictionary$2<string, string>;
        public get CreationTime(): System.DateTime;

        public constructor ()
        public UpdateSetting ($key: string, $value: string) : void
        public GetSetting ($key: string) : string
        public RemoveSetting ($key: string) : void
    }

    class PlayerSessionManager extends System.Object {

        public get Storage(): Genies_Components_Devkit_Experiences_CloudSave.CloudSaveStorage;

        public constructor ($experienceId: System.Guid)
        public static GetExperienceBasedInstance () : Cysharp_Threading_Tasks.UniTask$1<PlayerSessionManager>
        public Load ($loadSessions?: boolean) : Cysharp_Threading_Tasks.UniTask
        public Save () : Cysharp_Threading_Tasks.UniTask
        public LoadSessionReferences () : Cysharp_Threading_Tasks.UniTask
        public AddGameSession ($sessionReference: AsyncGameSessionReference, $save?: boolean) : void
        public RemoveGameSession ($sessionId: string, $save?: boolean) : void
        public GetGameSession ($sessionId: string) : AsyncGameSessionReference
        public UpdateLastAccessed ($sessionId: string, $save?: boolean) : void
        public GetAllGameSessions () : System_Collections_Generic.IReadOnlyList$1<AsyncGameSessionReference>
    }

    class PublicSessionManager extends System.Object {

        public constructor ($experienceId: System.Guid)
        public static GetExperienceBasedInstance () : Cysharp_Threading_Tasks.UniTask$1<PublicSessionManager>
        public AddSession ($session: AsyncGameSession) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public RemoveSession ($sessionId: string) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public GetSession ($sessionId: string) : AsyncGameSessionReference
        public GetSessions () : System_Collections_Generic.IReadOnlyList$1<AsyncGameSessionReference>
        public Load ($loadSessions?: boolean) : Cysharp_Threading_Tasks.UniTask
        public Save () : Cysharp_Threading_Tasks.UniTask
        public LoadSessionReferences () : Cysharp_Threading_Tasks.UniTask
    }

}

declare module 'System.Collections.Generic' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface Dictionary$2<TKey,TValue> extends IDictionary$2<TKey,TValue>, System_Collections.IDictionary, System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, IReadOnlyDictionary$2<TKey,TValue> {

    }

    interface IDictionary$2<TKey,TValue> extends ICollection$1<KeyValuePair$2<TKey, TValue>> {

    }

    interface ICollection$1<T> extends IEnumerable$1<T> {

    }

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

    }

    interface KeyValuePair$2<TKey,TValue> {

    }

    interface IReadOnlyDictionary$2<TKey,TValue> extends IReadOnlyCollection$1<KeyValuePair$2<TKey, TValue>> {

    }

    interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {

    }

    interface IReadOnlyList$1<T> extends IReadOnlyCollection$1<T> {

    }

    interface List$1<T> extends IList$1<T>, System_Collections.IList, IReadOnlyList$1<T> {

    }

    interface IList$1<T> extends ICollection$1<T> {

    }

}

