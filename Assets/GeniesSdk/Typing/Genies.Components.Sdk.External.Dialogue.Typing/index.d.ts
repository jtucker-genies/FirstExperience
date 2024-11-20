
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'RootNamespace' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class DialogueButton extends UnityEngine.MonoBehaviour {

        private constructor ()
        public SetButton ($text: string, $func: System.Action) : void
    }

    class DialoguePopup extends UnityEngine.MonoBehaviour {

        private constructor ()
        public SetDialogue ($task: System_Threading_Tasks.TaskCompletionSource$1<int>, $promptText: string, $options: System_Collections_Generic.List$1<string>, $typingSpeed: float) : void
        public ClearDialogue () : void
    }

    class DialoguePopupManager extends UnityEngine.MonoBehaviour {

        public static singleton : DialoguePopupManager
        public static dialoguePopup : DialoguePopup

        private constructor ()
        public SetDialogueBox ($dialoguePopupPrefab: DialoguePopup) : void
        public static ShowDialogueBox ($visible: boolean) : void
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

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

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

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

declare module 'System.Threading.Tasks' {
    import * as System from 'System'

    interface TaskCompletionSource$1<TResult> {

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

