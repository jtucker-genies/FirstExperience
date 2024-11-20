
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine' {
    import * as System from 'System'

    /**
    * A heightmap based collider.
    */
    class TerrainCollider extends Collider {

        /**
        * The terrain that stores the heightmap.
        */
        public get terrainData(): TerrainData;
        public set terrainData(value: TerrainData);

        private constructor ()
    }

    /**
    * A base class of all colliders.
    */
    interface Collider {

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
    * The TerrainData class stores heightmaps, detail mesh positions, tree instances, and terrain texture alpha maps.
    */
    interface TerrainData {

    }

}

