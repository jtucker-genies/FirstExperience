
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Genies.Components.Devkit.Experiences.Scripting' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    class ExperienceGameObjectExtensions {

        public static CompareLayerByName ($gameObject: UnityEngine.GameObject, $layerName: string) : boolean
        public static GetLayerName ($gameObject: UnityEngine.GameObject) : string
        public static SetLayerName ($gameObject: UnityEngine.GameObject, $layerName: string) : void
    }

}

declare module 'UnityEngine' {
    import * as System from 'System'

    /**
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * Base class for all objects Unity can reference.
    */
    interface Object {

    }

    interface GameObject {

        /**
        * @extension Genies.Components.Devkit.Experiences.Scripting.ExperienceGameObjectExtensions.CompareLayerByName
        */
        CompareLayerByName ($layerName: string) : boolean
        /**
        * @extension Genies.Components.Devkit.Experiences.Scripting.ExperienceGameObjectExtensions.GetLayerName
        */
        GetLayerName () : string
        /**
        * @extension Genies.Components.Devkit.Experiences.Scripting.ExperienceGameObjectExtensions.SetLayerName
        */
        SetLayerName ($layerName: string) : void
    }

}

