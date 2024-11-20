
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'RootNamespace' {
    import * as Genies_Utils from 'Genies.Utils'
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'

    class CreateUserAvatar extends Genies_Utils.Initializer {

        public playerAnimationController : UnityEngine.RuntimeAnimatorController
        public playerAnimationRoot : UnityEngine.Transform
        public IsInitialized : boolean

        private constructor ()
    }

}

declare module 'Genies.Utils' {
    import * as UnityEngine from 'UnityEngine'

    interface Initializer {

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
    * The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime.
    */
    interface RuntimeAnimatorController {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

}

declare module 'Genies.Components.SDK.Core' {
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    class GeniesSdk {

        public static Initialize () : Cysharp_Threading_Tasks.UniTask
        public static GetCurrentUserIdAsync () : Cysharp_Threading_Tasks.UniTask$1<string>
    }

    interface SimplePhoneInputController {

    }

}

declare module 'Cysharp.Threading.Tasks' {
    import * as System from 'System'

    interface UniTask {

    }

    interface UniTask$1<T> {

    }

}

declare module 'Genies.Components.SDK.Core.SimplePhoneInputController' {
    import * as System from 'System'
    import * as Genies_Components_SDK_Core from 'Genies.Components.SDK.Core'

    interface OnLogin {
        (phoneInput: string, controller: Genies_Components_SDK_Core.SimplePhoneInputController) : void; 
        Invoke?: (phoneInput: string, controller: Genies_Components_SDK_Core.SimplePhoneInputController) => void;
    }
    var OnLogin: { new (func: (phoneInput: string, controller: Genies_Components_SDK_Core.SimplePhoneInputController) => void): OnLogin; }

    interface OnSendCode {
        (codeInput: string, controller: Genies_Components_SDK_Core.SimplePhoneInputController) : void; 
        Invoke?: (codeInput: string, controller: Genies_Components_SDK_Core.SimplePhoneInputController) => void;
    }
    var OnSendCode: { new (func: (codeInput: string, controller: Genies_Components_SDK_Core.SimplePhoneInputController) => void): OnSendCode; }

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

    interface IAsyncResult {

    }

    interface AsyncCallback {
        (ar: IAsyncResult) : void; 
        Invoke?: (ar: IAsyncResult) => void;
    }
    var AsyncCallback: { new (func: (ar: IAsyncResult) => void): AsyncCallback; }

    interface IntPtr extends System_Runtime_Serialization.ISerializable, IEquatable$1<IntPtr> {

    }

    interface IEquatable$1<T> {

    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

