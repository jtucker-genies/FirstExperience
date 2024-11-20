
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Genies.Traits.Widgets' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as Genies_SDKServices_Model from 'Genies.SDKServices.Model'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class ArchetypeIcon extends UnityEngine.MonoBehaviour {

        private constructor ()
        public SetArchetype ($archetypeName: string) : void
    }

    class TraitCard extends UnityEngine.MonoBehaviour {

        private constructor ()
        public SetTrait ($trait: Genies_SDKServices_Model.Trait) : void
    }

    class TraitCardsWidget extends UnityEngine.MonoBehaviour {

        private constructor ()
        public SetCards ($traits: System_Collections_Generic.List$1<Genies_SDKServices_Model.Trait>) : void
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

declare module 'Genies.SDKServices.Model' {
    import * as System from 'System'
    import * as System_ComponentModel_DataAnnotations from 'System.ComponentModel.DataAnnotations'

    interface Trait extends System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<Trait> {

    }

    interface TraitsGetResponse extends System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<TraitsGetResponse> {

    }

}

declare module 'System.ComponentModel.DataAnnotations' {

    interface IValidatableObject {

    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface IEquatable$1<T> {

    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IFormattable {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

    interface Action$1<T> {
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
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

    interface Action {
        () : void; 
        Invoke?: () => void;
    }
    var Action: { new (func: () => void): Action; }

    interface Nullable$1<T> {

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

declare module 'Genies.Traits.Api' {
    import * as Genies_SDKServices_Model from 'Genies.SDKServices.Model'
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as Genies_SDKServices_Model_Trait from 'Genies.SDKServices.Model.Trait'

    enum TraitExperienceStrength {
        SMALL = 0,
        MEDIUM = 1,
        LARGE = 2 
    }

    class TraitsSdk {

        public static GetActiveTraits ($onSuccess?: System.Action$1<Genies_SDKServices_Model.TraitsGetResponse>, $onFailure?: System.Action) : void
        public static GetStrongestXTraits ($x: int, $onSuccess?: System.Action$1<System_Collections_Generic.List$1<Genies_SDKServices_Model.Trait>>, $onFailure?: System.Action) : void
        public static GetWeakestXTraits ($x: int, $onSuccess?: System.Action$1<System_Collections_Generic.List$1<Genies_SDKServices_Model.Trait>>, $onFailure?: System.Action) : void
        public static GetSortedListOfGivenTraitIds ($limitedListOfTraitIds: System_Collections_Generic.List$1<string>, $onSuccess?: System.Action$1<System_Collections_Generic.List$1<Genies_SDKServices_Model.Trait>>, $onFailure?: System.Action) : void
        public static GetActiveTraitsByArchetype ($onSuccess?: System.Action$1<System_Collections_Generic.List$1<System_Collections_Generic.List$1<Genies_SDKServices_Model.Trait>>>, $onFailure?: System.Action) : void
        public static GetStrongestXArchetypeIds ($x: int, $onSuccess?: System.Action$1<System_Collections_Generic.List$1<string>>, $onFailure?: System.Action) : void
        public static GetWeakestXArchetypeIds ($x: int, $onSuccess?: System.Action$1<System_Collections_Generic.List$1<string>>, $onFailure?: System.Action) : void
        public static GetSortedListOfGivenArchetypeIds ($limitedListOfArchetypeIds: System_Collections_Generic.List$1<string>, $onSuccess?: System.Action$1<System_Collections_Generic.List$1<string>>, $onFailure?: System.Action) : void
        public static GetArchetypeNameFromArchetypeId ($archetypeId: string, $onSuccess?: System.Action$1<string>, $onFailure?: System.Action) : void
        public static GetListOfTraitsFromArchetypeId ($archetypeId: string, $onSuccess?: System.Action$1<System_Collections_Generic.List$1<Genies_SDKServices_Model.Trait>>, $onFailure?: System.Action) : void
        public static GetTraitCategoryFromTraitId ($traitId: string, $onSuccess?: System.Action$1<System.Nullable$1<Genies_SDKServices_Model_Trait.TypeEnum>>, $onFailure?: System.Action) : void
        public static GetTraitListFromTraitCategory ($traitCategory: Genies_SDKServices_Model_Trait.TypeEnum, $onSuccess?: System.Action$1<System_Collections_Generic.List$1<Genies_SDKServices_Model.Trait>>, $onFailure?: System.Action) : void
        public static GetArchetypeIdFromTraitId ($traitId: string, $onSuccess?: System.Action$1<string>, $onFailure?: System.Action) : void
        public static GetTraitNameFromTraitId ($traitId: string, $onSuccess?: System.Action$1<string>, $onFailure?: System.Action) : void
        public static UpdateTraitsFromExperience ($signalStrength: TraitExperienceStrength, $traitIds: System_Collections_Generic.List$1<string>, $onSuccess?: System.Action, $onFailure?: System.Action) : void
    }

    interface ITraitsService {

    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

declare module 'Genies.SDKServices.Model.Trait' {

    enum TypeEnum {
        EMOTIONAL = 1,
        MENTAL = 2,
        EXPRESSIVE = 3,
        SOCIAL = 4 
    }

}

declare module 'Genies.Traits.Api.TraitsServiceProvider' {
    import * as System from 'System'
    import * as Genies_Traits_Api from 'Genies.Traits.Api'

    interface TraitsServiceCreationCallback {
        () : Genies_Traits_Api.ITraitsService; 
        Invoke?: () => Genies_Traits_Api.ITraitsService;
    }
    var TraitsServiceCreationCallback: { new (func: () => Genies_Traits_Api.ITraitsService): TraitsServiceCreationCallback; }

}

