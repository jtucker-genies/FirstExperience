
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Genies.Components.Sdk.External.Stores.Service' {
    import * as Genies_Components_DataRepositoryFramework from 'Genies.Components.DataRepositoryFramework'
    import * as Genies_Components_Sdk_External_Stores_Model from 'Genies.Components.Sdk.External.Stores.Model'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System from 'System'
    import * as Genies_Services_Model from 'Genies.Services.Model'
    import * as Genies_Services_Configs from 'Genies.Services.Configs'
    import * as Genies_Components_Accounts from 'Genies.Components.Accounts'
    import * as Genies_Services_SDK_Manifest_Service from 'Genies.Services.SDK.Manifest.Service'
    import * as Genies_Components_Sdk_External_Stores_Service_StoresApiDataRepositoryProvider from 'Genies.Components.Sdk.External.Stores.Service.StoresApiDataRepositoryProvider'

    interface IStoresApiDataRepository extends Genies_Components_DataRepositoryFramework.IDataRepository$1<Genies_Components_Sdk_External_Stores_Model.StoreModel> {

        CreateAsync? () : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Stores_Model.StoreModel>
        FetchStoreItemsAsync? ($store: Genies_Components_Sdk_External_Stores_Model.StoreModel) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Stores_Model.StoreModel>
        FetchStoreItemsAsync? ($storeId: string) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreItemModel>>
        AddWearablesToStoreAsync? ($store: Genies_Components_Sdk_External_Stores_Model.StoreModel, $wearables: System_Collections_Generic.List$1<Genies_Services_Model.Wearable>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        AddWearablesToStoreAsync? ($storeId: string, $wearables: System_Collections_Generic.List$1<Genies_Services_Model.Wearable>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        AddItemsToStoreAsync? ($store: Genies_Components_Sdk_External_Stores_Model.StoreModel, $items: System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreItemModel>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        AddItemsToStoreAsync? ($storeId: string, $items: System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreItemModel>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        GiftItemsToUserAsync? ($userid: string, $items: System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreItemModel>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
    }

    class StoreAPIPathResolver extends System.Object implements Genies_Services_Configs.IApiClientPathResolver {

        public constructor ()
        public GetApiBaseUrl ($environment: Genies_Services_Configs.BackendEnvironment) : string
    }

    class StoresApiDataRepository extends System.Object implements IStoresApiDataRepository {

        public constructor ($accountService: Genies_Components_Accounts.IAccountService, $manifestManager: Genies_Services_SDK_Manifest_Service.IManifestManager)
        public GetCountAsync () : Cysharp_Threading_Tasks.UniTask$1<int>
        public GetIdsAsync () : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<string>>
        public GetAllAsync () : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreModel>>
        public GetByIdAsync ($id: string) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Stores_Model.StoreModel>
        public CreateAsync () : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Stores_Model.StoreModel>
        public CreateAsync ($unused: Genies_Components_Sdk_External_Stores_Model.StoreModel) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Stores_Model.StoreModel>
        /**
        * @methodSwap BatchCreateAsync_EBB7509C_F92D023A
        */
        public BatchCreateAsync ($count: int) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreModel>>
        public BatchCreateAsync ($onlyUsedForCount: System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreModel>) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreModel>>
        public DeleteAsync ($id: string) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public BatchDeleteAsync ($ids: System_Collections_Generic.List$1<string>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public DeleteAllAsync () : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public FetchStoreItemsAsync ($store: Genies_Components_Sdk_External_Stores_Model.StoreModel) : Cysharp_Threading_Tasks.UniTask$1<Genies_Components_Sdk_External_Stores_Model.StoreModel>
        public FetchStoreItemsAsync ($storeId: string) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreItemModel>>
        public AddWearablesToStoreAsync ($store: Genies_Components_Sdk_External_Stores_Model.StoreModel, $wearables: System_Collections_Generic.List$1<Genies_Services_Model.Wearable>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public AddWearablesToStoreAsync ($storeId: string, $wearables: System_Collections_Generic.List$1<Genies_Services_Model.Wearable>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public AddItemsToStoreAsync ($store: Genies_Components_Sdk_External_Stores_Model.StoreModel, $items: System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreItemModel>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public AddItemsToStoreAsync ($storeId: string, $items: System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreItemModel>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public GiftItemsToUserAsync ($userid: string, $items: System_Collections_Generic.List$1<Genies_Components_Sdk_External_Stores_Model.StoreItemModel>) : Cysharp_Threading_Tasks.UniTask$1<boolean>
    }

    class StoresApiDataRepositoryProvider extends System.Object {

        public static get Instance(): IStoresApiDataRepository;

        public static Init ($serviceCreationCallback: Genies_Components_Sdk_External_Stores_Service_StoresApiDataRepositoryProvider.DataRepositoryCreationCallback, $forceUpdateInstance?: boolean) : IStoresApiDataRepository
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

declare module 'Cysharp.Threading.Tasks' {
    import * as System from 'System'

    interface UniTask$1<T> {

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

declare module 'Genies.Components.Sdk.External.Stores.Model' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as Genies_SDKServices_Model from 'Genies.SDKServices.Model'
    import * as Genies_Services_Model from 'Genies.Services.Model'
    import * as Genies_Components_Sdk_External_Stores_Model_StoreItemModel from 'Genies.Components.Sdk.External.Stores.Model.StoreItemModel'

    class StoreModel extends System.ValueType {

        public static DEFAULT : StoreModel
        public get Id(): string;
        public get Items(): System_Collections_Generic.List$1<StoreItemModel>;

        public constructor ($id: string, $items?: System_Collections_Generic.List$1<StoreItemModel>)
        public ToString () : string
    }

    class StoreItemModel extends System.Object implements System.IEquatable$1<StoreItemModel> {

        public get ItemId(): string;
        public set ItemId(value: string);
        public get ItemType(): Genies_Components_Sdk_External_Stores_Model_StoreItemModel.StoreItemModelType;
        public set ItemType(value: Genies_Components_Sdk_External_Stores_Model_StoreItemModel.StoreItemModelType);
        public get Definition(): string;
        public set Definition(value: string);

        public constructor ()
        public ToString () : string
        public static GetDefinitionJsonStringFromObject<T> ($o: T) : string
        public TryGetDefinitionAsObject<T> ($def: $Ref<T>) : boolean
        public static FromStoreItem ($s: Genies_SDKServices_Model.StoreItem) : StoreItemModel
        public static FromWearable ($w: Genies_Services_Model.Wearable) : StoreItemModel
        public static ToStoreItem ($m: StoreItemModel) : Genies_SDKServices_Model.StoreItem
        public ToWearable () : Genies_Services_Model.Wearable
        public Equals ($other: StoreItemModel) : boolean
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
    }

    class StoreItemModelTypeExtensions {

        public static ToEnumString ($o: Genies_Components_Sdk_External_Stores_Model_StoreItemModel.StoreItemModelType) : string
        public static FromString ($s: string) : Genies_Components_Sdk_External_Stores_Model_StoreItemModel.StoreItemModelType
    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface IEquatable$1<T> {

        Equals? ($other: T) : boolean
    }

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

}

declare module 'Genies.SDKServices.Model' {
    import * as System from 'System'
    import * as System_ComponentModel_DataAnnotations from 'System.ComponentModel.DataAnnotations'

    interface StoreItem extends System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<StoreItem> {

    }

}

declare module 'System.ComponentModel.DataAnnotations' {

    interface IValidatableObject {

    }

}

declare module 'Genies.Services.Model' {
    import * as System from 'System'
    import * as System_ComponentModel_DataAnnotations from 'System.ComponentModel.DataAnnotations'

    interface Wearable extends System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<Wearable> {

    }

}

declare module 'Genies.Components.Sdk.External.Stores.Model.StoreItemModel' {
    import * as System from 'System'

    enum StoreItemModelType {
        Invalid = 0,
        Wearable = 1 
    }

    interface StoreItemModelType {

        /**
        * @extension Genies.Components.Sdk.External.Stores.Model.StoreItemModelTypeExtensions.ToEnumString
        */
        ToEnumString () : string
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

declare module 'Genies.Components.Accounts' {

    interface IAccountService {

    }

}

declare module 'Genies.Services.SDK.Manifest.Service' {

    interface IManifestManager {

    }

}

declare module 'Genies.Components.Sdk.External.Stores.Service.StoresApiDataRepositoryProvider' {
    import * as System from 'System'
    import * as Genies_Components_Sdk_External_Stores_Service from 'Genies.Components.Sdk.External.Stores.Service'

    interface DataRepositoryCreationCallback {
        () : Genies_Components_Sdk_External_Stores_Service.IStoresApiDataRepository; 
        Invoke?: () => Genies_Components_Sdk_External_Stores_Service.IStoresApiDataRepository;
    }
    var DataRepositoryCreationCallback: { new (func: () => Genies_Components_Sdk_External_Stores_Service.IStoresApiDataRepository): DataRepositoryCreationCallback; }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

