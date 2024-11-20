
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Genies.Components.Sdk.External.Avatars' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as Genies_Components_Avatars from 'Genies.Components.Avatars'

    class AvatarOverlay extends UnityEngine.MonoBehaviour {

        private constructor ()
    }

    class UserAvatar extends UnityEngine.MonoBehaviour {

        public get Genie(): Genies_Components_Avatars.IGenie;

        private constructor ()
        public static CreateUserAvatar ($name?: string, $parent?: UnityEngine.Transform) : UserAvatar
        public static CreateAndLoadUserAvatar ($name?: string, $parent?: UnityEngine.Transform) : Cysharp_Threading_Tasks.UniTask$1<UserAvatar>
        public static CreateAndLoadUserAvatar ($definition: string, $name?: string, $parent?: UnityEngine.Transform) : Cysharp_Threading_Tasks.UniTask$1<UserAvatar>
        public SetAnimatorController ($controller: UnityEngine.RuntimeAnimatorController) : void
        public AddOverlay ($overlay: AvatarOverlay) : void
        public RemoveOverlay ($overlay: AvatarOverlay) : void
        public GetAnimator () : UnityEngine.Animator
        public GetRenderers () : System_Collections_Generic.IReadOnlyList$1<UnityEngine.SkinnedMeshRenderer>
        public LoadAvatarAsync ($definition: string) : Cysharp_Threading_Tasks.UniTask
        public LoadAvatarAsync () : Cysharp_Threading_Tasks.UniTask
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
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime.
    */
    interface RuntimeAnimatorController {

    }

    /**
    * Interface to control the Mecanim animation system.
    */
    interface Animator {

    }

    /**
    * The Skinned Mesh filter.
    */
    interface SkinnedMeshRenderer {

    }

    /**
    * General functionality for all renderers.
    */
    interface Renderer {

    }

}

declare module 'System.Collections' {

    interface IEnumerable {

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
    import * as System_Collections from 'System.Collections'

    interface IReadOnlyList$1<T> extends IReadOnlyCollection$1<T> {

    }

    interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {

    }

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

    }

}

declare module 'Genies.Components.Avatars' {
    import * as System from 'System'

    interface IGenie extends System.IDisposable {

    }

}

declare module 'System' {

    interface IDisposable {

    }

}

