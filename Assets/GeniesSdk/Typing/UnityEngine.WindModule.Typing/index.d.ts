
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine' {
    import * as System from 'System'

    /**
    * Modes a Wind Zone can have, either Spherical or Directional.
    */
    enum WindZoneMode {
        Directional = 0,
        Spherical = 1 
    }

    /**
    * Wind Zones add realism to the trees you create by making them wave their branches and leaves as if blown by the wind.
    */
    class WindZone extends Component {

        /**
        * Defines the type of wind zone to be used (Spherical or Directional).
        */
        public get mode(): WindZoneMode;
        public set mode(value: WindZoneMode);
        /**
        * Radius of the Spherical Wind Zone (only active if the WindZoneMode is set to Spherical).
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * The primary wind force.
        */
        public get windMain(): float;
        public set windMain(value: float);
        /**
        * The turbulence wind force.
        */
        public get windTurbulence(): float;
        public set windTurbulence(value: float);
        /**
        * Defines how much the wind changes over time.
        */
        public get windPulseMagnitude(): float;
        public set windPulseMagnitude(value: float);
        /**
        * Defines the frequency of the wind changes.
        */
        public get windPulseFrequency(): float;
        public set windPulseFrequency(value: float);

        /**
        * The constructor.
        */
        private constructor ()
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

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IFormattable {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

}

