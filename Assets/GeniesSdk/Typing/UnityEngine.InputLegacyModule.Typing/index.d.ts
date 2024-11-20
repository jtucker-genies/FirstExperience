
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine' {
    import * as System from 'System'

    /**
    * Describes phase of a finger touch.
    */
    enum TouchPhase {
        Began = 0,
        Moved = 1,
        Stationary = 2,
        Ended = 3,
        Canceled = 4 
    }

    /**
    * Controls IME input.
    */
    enum IMECompositionMode {
        Auto = 0,
        On = 1,
        Off = 2 
    }

    /**
    * Describes whether a touch is direct, indirect (or remote), or from a stylus.
    */
    enum TouchType {
        Direct = 0,
        Indirect = 1,
        Stylus = 2 
    }

    /**
    * Structure describing the status of a finger touching the screen.
    */
    class Touch extends System.ValueType {

        /**
        * The unique index for the touch.
        */
        public get fingerId(): int;
        public set fingerId(value: int);
        /**
        * The position of the touch in screen space pixel coordinates.
        */
        public get position(): Vector2;
        public set position(value: Vector2);
        /**
        * The first position of the touch contact in screen space pixel coordinates.
        */
        public get rawPosition(): Vector2;
        public set rawPosition(value: Vector2);
        /**
        * The position delta since last change in pixel coordinates.
        */
        public get deltaPosition(): Vector2;
        public set deltaPosition(value: Vector2);
        /**
        * Amount of time that has passed since the last recorded change in Touch values.
        */
        public get deltaTime(): float;
        public set deltaTime(value: float);
        /**
        * Number of taps.
        */
        public get tapCount(): int;
        public set tapCount(value: int);
        /**
        * Describes the phase of the touch.
        */
        public get phase(): TouchPhase;
        public set phase(value: TouchPhase);
        /**
        * The current amount of pressure being applied to a touch.  1.0f is considered to be the pressure of an average touch.  If Input.touchPressureSupported returns false, the value of this property will always be 1.0f.
        */
        public get pressure(): float;
        public set pressure(value: float);
        /**
        * The maximum possible pressure value for a platform.  If Input.touchPressureSupported returns false, the value of this property will always be 1.0f.
        */
        public get maximumPossiblePressure(): float;
        public set maximumPossiblePressure(value: float);
        /**
        * A value that indicates whether a touch was of Direct, Indirect (or remote), or Stylus type.
        */
        public get type(): TouchType;
        public set type(value: TouchType);
        /**
        * Value of 0 radians indicates that the stylus is parallel to the surface, pi/2 indicates that it is perpendicular.
        */
        public get altitudeAngle(): float;
        public set altitudeAngle(value: float);
        /**
        * Value of 0 radians indicates that the stylus is pointed along the x-axis of the device.
        */
        public get azimuthAngle(): float;
        public set azimuthAngle(value: float);
        /**
        * An estimated value of the radius of a touch.  Add radiusVariance to get the maximum touch size, subtract it to get the minimum touch size.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * This value determines the accuracy of the touch radius. Add this value to the radius to get the maximum touch size, subtract it to get the minimum touch size.
        */
        public get radiusVariance(): float;
        public set radiusVariance(value: float);

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * Options for specifying the state of the pen. For example, whether the pen is in contact with the screen or tablet, whether the pen is inverted, and whether buttons are pressed. You can combine states using bitwise OR operators.
    */
    enum PenStatus {
        None = 0,
        Contact = 1,
        Barrel = 2,
        Inverted = 4,
        Eraser = 8 
    }

    /**
    * Indicates the type of action of a pen event.
    */
    enum PenEventType {
        NoContact = 0,
        PenDown = 1,
        PenUp = 2 
    }

    /**
    * Structure describing the status of a pen event.
    */
    class PenData extends System.ValueType {

        /**
        * Specifies the position of the pen.
        */
        public position : Vector2
        /**
        * Specifies the angle of the pen relative to the X and Y axes, expressed in radians.
        */
        public tilt : Vector2
        /**
        * Specifies the state of the pen. For example, whether the pen is in contact with the screen or tablet, whether the pen is inverted, and whether buttons are pressed.
        */
        public penStatus : PenStatus
        /**
        * Specifies the rotation of the pen around its axis, expressed in radians.
        */
        public twist : float
        /**
        * How hard pen pressure is applied, normalized between 0 (no pressure) and 1 (maximum pressure).
        */
        public pressure : float
        /**
        * Contact type of a pen event, can be pen up, pen down, or no contact.
        */
        public contactType : PenEventType
        /**
        * The position delta since last pointer event in pixel coordinates.
        */
        public deltaPos : Vector2

    }

    /**
    * Describes physical orientation of the device as determined by the OS.
    */
    enum DeviceOrientation {
        Unknown = 0,
        Portrait = 1,
        PortraitUpsideDown = 2,
        LandscapeLeft = 3,
        LandscapeRight = 4,
        FaceUp = 5,
        FaceDown = 6 
    }

    /**
    * Structure describing acceleration status of the device.
    */
    class AccelerationEvent extends System.ValueType {

        /**
        * Value of acceleration.
        */
        public get acceleration(): Vector3;
        /**
        * Amount of time passed since last accelerometer measurement.
        */
        public get deltaTime(): float;

    }

    /**
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * Interface into the Gyroscope.
    */
    class Gyroscope extends System.Object {

        /**
        * Returns rotation rate as measured by the device's gyroscope.
        */
        public get rotationRate(): Vector3;
        /**
        * Returns unbiased rotation rate as measured by the device's gyroscope.
        */
        public get rotationRateUnbiased(): Vector3;
        /**
        * Returns the gravity acceleration vector expressed in the device's reference frame.
        */
        public get gravity(): Vector3;
        /**
        * Returns the acceleration that the user is giving to the device.
        */
        public get userAcceleration(): Vector3;
        /**
        * Returns the attitude (ie, orientation in space) of the device.
        */
        public get attitude(): Quaternion;
        /**
        * Sets or retrieves the enabled status of this gyroscope.
        */
        public get enabled(): boolean;
        public set enabled(value: boolean);
        /**
        * Sets or retrieves gyroscope interval in seconds.
        */
        public get updateInterval(): float;
        public set updateInterval(value: float);

    }

    /**
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    /**
    * Structure describing device location.
    */
    class LocationInfo extends System.ValueType {

        /**
        * Geographical device location latitude.
        */
        public get latitude(): float;
        /**
        * Geographical device location longitude.
        */
        public get longitude(): float;
        /**
        * Geographical device location altitude in meters.
        */
        public get altitude(): float;
        /**
        * Horizontal accuracy radius of the location in meters.
        */
        public get horizontalAccuracy(): float;
        /**
        * Vertical accuracy radius of the location in meters.
        */
        public get verticalAccuracy(): float;
        /**
        * Timestamp (in milliseconds from 1970) of when location data was last updated.
        */
        public get timestamp(): double;

    }

    /**
    * Describes the location service status for a device.
    */
    enum LocationServiceStatus {
        Stopped = 0,
        Initializing = 1,
        Running = 2,
        Failed = 3 
    }

    /**
    * Provides methods that allow an application to access the device's location.
    */
    class LocationService extends System.Object {

        /**
        * Indicates whether the device allows the application to access the location service.
        */
        public get isEnabledByUser(): boolean;
        /**
        * Returns the location service status.
        */
        public get status(): LocationServiceStatus;
        /**
        * The last geographical location that the device registered.
        */
        public get lastData(): LocationInfo;

        public constructor ()
        /**
        * Starts location service updates.
        * @param desiredAccuracyInMeters 
        The service accuracy you want to use, in meters. This determines the accuracy of the device's last location coordinates. Higher values like 500 don't require the device to use its GPS chip and
        thus save battery power. Lower values like 5-10 provide the best accuracy but require the GPS chip and thus use more battery power. The default value is 10 meters.
        
        * @param updateDistanceInMeters 
        The minimum distance, in meters, that the device must move laterally before Unity updates Input.location. Higher values like 500 produce fewer updates and are less resource intensive to process. The default is 10 meters.
        
        * @methodSwap Start_EBB7509C_H1075CF37
        */
        public Start ($desiredAccuracyInMeters: float, $updateDistanceInMeters: float) : void
        /**
        * Starts location service updates.
        * @param desiredAccuracyInMeters 
        The service accuracy you want to use, in meters. This determines the accuracy of the device's last location coordinates. Higher values like 500 don't require the device to use its GPS chip and
        thus save battery power. Lower values like 5-10 provide the best accuracy but require the GPS chip and thus use more battery power. The default value is 10 meters.
        
        * @param updateDistanceInMeters 
        The minimum distance, in meters, that the device must move laterally before Unity updates Input.location. Higher values like 500 produce fewer updates and are less resource intensive to process. The default is 10 meters.
        
        * @methodSwap Start_EBB7509C_H82424F3E
        */
        public Start ($desiredAccuracyInMeters: float) : void
        /**
        * Starts location service updates.
        * @param desiredAccuracyInMeters 
        The service accuracy you want to use, in meters. This determines the accuracy of the device's last location coordinates. Higher values like 500 don't require the device to use its GPS chip and
        thus save battery power. Lower values like 5-10 provide the best accuracy but require the GPS chip and thus use more battery power. The default value is 10 meters.
        
        * @param updateDistanceInMeters 
        The minimum distance, in meters, that the device must move laterally before Unity updates Input.location. Higher values like 500 produce fewer updates and are less resource intensive to process. The default is 10 meters.
        
        */
        public Start () : void
        /**
        * Stops location service updates. This is useful to save battery power when the application doesn't require the location service.
        */
        public Stop () : void
    }

    /**
    * Interface into compass functionality.
    */
    class Compass extends System.Object {

        /**
        * The heading in degrees relative to the magnetic North Pole. (Read Only)
        */
        public get magneticHeading(): float;
        /**
        * The heading in degrees relative to the geographic North Pole. (Read Only)
        */
        public get trueHeading(): float;
        /**
        * Accuracy of heading reading in degrees.
        */
        public get headingAccuracy(): float;
        /**
        * The raw geomagnetic data measured in microteslas. (Read Only)
        */
        public get rawVector(): Vector3;
        /**
        * Indicates the time elapsed since the compass heading was last updated. (Read Only)
        */
        public get timestamp(): double;
        /**
        * Used to enable or disable compass. Note, that if you want Input.compass.trueHeading property to contain a valid value, you must also enable location updates by calling Input.location.Start().
        */
        public get enabled(): boolean;
        public set enabled(value: boolean);

        public constructor ()
    }

    /**
    * Interface into the Input system.
    */
    class Input extends System.Object {

        /**
        * Enables/Disables mouse simulation with touches. By default this option is enabled.
        */
        public static get simulateMouseWithTouches(): boolean;
        public static set simulateMouseWithTouches(value: boolean);
        /**
        * Is any key or mouse button currently held down? (Read Only)
        */
        public static get anyKey(): boolean;
        /**
        * Returns true the first frame the user hits any key or mouse button. (Read Only)
        */
        public static get anyKeyDown(): boolean;
        /**
        * Returns the keyboard input entered this frame. (Read Only)
        */
        public static get inputString(): string;
        /**
        * The current mouse position in pixel coordinates. (Read Only).
        */
        public static get mousePosition(): Vector3;
        /**
        * The current mouse scroll delta. (Read Only)
        */
        public static get mouseScrollDelta(): Vector2;
        /**
        * Controls enabling and disabling of IME input composition.
        */
        public static get imeCompositionMode(): IMECompositionMode;
        public static set imeCompositionMode(value: IMECompositionMode);
        /**
        * The current IME composition string being typed by the user.
        */
        public static get compositionString(): string;
        /**
        * Does the user have an IME keyboard input source selected?
        */
        public static get imeIsSelected(): boolean;
        /**
        * The current text input position used by IMEs to open windows.
        */
        public static get compositionCursorPos(): Vector2;
        public static set compositionCursorPos(value: Vector2);
        /**
        * Indicates if a mouse device is detected.
        */
        public static get mousePresent(): boolean;
        /**
        * Returns the number of queued pen events that can be accessed by calling GetPenEvent().
        */
        public static get penEventCount(): int;
        /**
        * Number of touches. Guaranteed not to change throughout the frame. (Read Only)
        */
        public static get touchCount(): int;
        /**
        * Bool value which let's users check if touch pressure is supported.
        */
        public static get touchPressureSupported(): boolean;
        /**
        * Returns true when Stylus Touch is supported by a device or platform.
        */
        public static get stylusTouchSupported(): boolean;
        /**
        * Returns whether the device on which application is currently running supports touch input.
        */
        public static get touchSupported(): boolean;
        /**
        * Property indicating whether the system handles multiple touches.
        */
        public static get multiTouchEnabled(): boolean;
        public static set multiTouchEnabled(value: boolean);
        /**
        * Device physical orientation as reported by OS. (Read Only)
        */
        public static get deviceOrientation(): DeviceOrientation;
        /**
        * Last measured linear acceleration of a device in three-dimensional space. (Read Only)
        */
        public static get acceleration(): Vector3;
        /**
        * This property controls if input sensors should be compensated for screen orientation.
        */
        public static get compensateSensors(): boolean;
        public static set compensateSensors(value: boolean);
        /**
        * Number of acceleration measurements which occurred during last frame.
        */
        public static get accelerationEventCount(): int;
        /**
        * Should  Back button quit the application?
        * Only usable on Android, Windows Phone or Windows Tablets.
        */
        public static get backButtonLeavesApp(): boolean;
        public static set backButtonLeavesApp(value: boolean);
        /**
        * Property for accessing device location (handheld devices only). (Read Only)
        */
        public static get location(): LocationService;
        /**
        * Property for accessing compass (handheld devices only). (Read Only)
        */
        public static get compass(): Compass;
        /**
        * Returns default gyroscope.
        */
        public static get gyro(): Gyroscope;
        /**
        * Returns list of objects representing status of all touches during last frame. (Read Only) (Allocates temporary variables).
        */
        public static get touches(): Touch[];
        /**
        * Returns list of acceleration measurements which occurred during the last frame. (Read Only) (Allocates temporary variables).
        */
        public static get accelerationEvents(): AccelerationEvent[];

        public constructor ()
        /**
        * Returns the value of the virtual axis identified by axisName.
        */
        public static GetAxis ($axisName: string) : float
        /**
        * Returns the value of the virtual axis identified by axisName with no smoothing filtering applied.
        */
        public static GetAxisRaw ($axisName: string) : float
        /**
        * Returns true while the virtual button identified by buttonName is held down.
        * @param buttonName The name of the button such as Jump.
        * @returns True when an axis has been pressed and not released.
        */
        public static GetButton ($buttonName: string) : boolean
        /**
        * Returns true during the frame the user pressed down the virtual button identified by buttonName.
        */
        public static GetButtonDown ($buttonName: string) : boolean
        /**
        * Returns true the first frame the user releases the virtual button identified by buttonName.
        */
        public static GetButtonUp ($buttonName: string) : boolean
        /**
        * Returns whether the given mouse button is held down.
        */
        public static GetMouseButton ($button: int) : boolean
        /**
        * Returns true during the frame the user pressed the given mouse button.
        */
        public static GetMouseButtonDown ($button: int) : boolean
        /**
        * Returns true during the frame the user releases the given mouse button.
        */
        public static GetMouseButtonUp ($button: int) : boolean
        /**
        * Resets all input. After ResetInputAxes all axes return to 0 and all buttons return to 0 for one frame.
        */
        public static ResetInputAxes () : void
        /**
        * Retrieves a list of input device names corresponding to the index of an Axis configured within Input Manager.
        * @returns Returns an array of joystick and gamepad device names.
        */
        public static GetJoystickNames () : string[]
        /**
        * Call Input.GetTouch to obtain a Touch struct.
        * @param index The touch input on the device screen.
        * @returns Touch details in the struct.
        */
        public static GetTouch ($index: int) : Touch
        /**
        * Returns the PenData for the pen event at the given index in the pen event queue.
        * @returns Pen event details in the struct.
        */
        public static GetPenEvent ($index: int) : PenData
        /**
        * Returns the PenData for the last stored pen up or down event.
        * @returns Pen event details in the struct.
        */
        public static GetLastPenContactEvent () : PenData
        /**
        * Clears the pen event queue.
        */
        public static ResetPenEvents () : void
        /**
        * Clears the last stored pen event.
        * Calling this function may impact event handling for UIToolKit elements.
        */
        public static ClearLastPenContactEvent () : void
        /**
        * Returns specific acceleration measurement which occurred during last frame. (Does not allocate temporary variables).
        */
        public static GetAccelerationEvent ($index: int) : AccelerationEvent
        /**
        * Returns true while the user holds down the key identified by the key KeyCode enum parameter.
        */
        public static GetKey ($key: KeyCode) : boolean
        /**
        * Returns true while the user holds down the key identified by name.
        */
        public static GetKey ($name: string) : boolean
        /**
        * Returns true during the frame the user releases the key identified by the key KeyCode enum parameter.
        */
        public static GetKeyUp ($key: KeyCode) : boolean
        /**
        * Returns true during the frame the user releases the key identified by name.
        */
        public static GetKeyUp ($name: string) : boolean
        /**
        * Returns true during the frame the user starts pressing down the key identified by the key KeyCode enum parameter.
        */
        public static GetKeyDown ($key: KeyCode) : boolean
        /**
        * Returns true during the frame the user starts pressing down the key identified by name.
        */
        public static GetKeyDown ($name: string) : boolean
    }

    /**
    * Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard. If "Use Physical Keys" is enabled in, these map directly to a physical key on the keyboard. If "Use Physical Keys" is disabled these map to language dependent mapping, different for every platform and cannot be guaranteed to work. "Use Physical Keys" is enabled by default from 2022.1
    */
    enum KeyCode {
        None = 0,
        Backspace = 8,
        Delete = 127,
        Tab = 9,
        Clear = 12,
        Return = 13,
        Pause = 19,
        Escape = 27,
        Space = 32,
        Keypad0 = 256,
        Keypad1 = 257,
        Keypad2 = 258,
        Keypad3 = 259,
        Keypad4 = 260,
        Keypad5 = 261,
        Keypad6 = 262,
        Keypad7 = 263,
        Keypad8 = 264,
        Keypad9 = 265,
        KeypadPeriod = 266,
        KeypadDivide = 267,
        KeypadMultiply = 268,
        KeypadMinus = 269,
        KeypadPlus = 270,
        KeypadEnter = 271,
        KeypadEquals = 272,
        UpArrow = 273,
        DownArrow = 274,
        RightArrow = 275,
        LeftArrow = 276,
        Insert = 277,
        Home = 278,
        End = 279,
        PageUp = 280,
        PageDown = 281,
        F1 = 282,
        F2 = 283,
        F3 = 284,
        F4 = 285,
        F5 = 286,
        F6 = 287,
        F7 = 288,
        F8 = 289,
        F9 = 290,
        F10 = 291,
        F11 = 292,
        F12 = 293,
        F13 = 294,
        F14 = 295,
        F15 = 296,
        Alpha0 = 48,
        Alpha1 = 49,
        Alpha2 = 50,
        Alpha3 = 51,
        Alpha4 = 52,
        Alpha5 = 53,
        Alpha6 = 54,
        Alpha7 = 55,
        Alpha8 = 56,
        Alpha9 = 57,
        Exclaim = 33,
        DoubleQuote = 34,
        Hash = 35,
        Dollar = 36,
        Percent = 37,
        Ampersand = 38,
        Quote = 39,
        LeftParen = 40,
        RightParen = 41,
        Asterisk = 42,
        Plus = 43,
        Comma = 44,
        Minus = 45,
        Period = 46,
        Slash = 47,
        Colon = 58,
        Semicolon = 59,
        Less = 60,
        Equals = 61,
        Greater = 62,
        Question = 63,
        At = 64,
        LeftBracket = 91,
        Backslash = 92,
        RightBracket = 93,
        Caret = 94,
        Underscore = 95,
        BackQuote = 96,
        A = 97,
        B = 98,
        C = 99,
        D = 100,
        E = 101,
        F = 102,
        G = 103,
        H = 104,
        I = 105,
        J = 106,
        K = 107,
        L = 108,
        M = 109,
        N = 110,
        O = 111,
        P = 112,
        Q = 113,
        R = 114,
        S = 115,
        T = 116,
        U = 117,
        V = 118,
        W = 119,
        X = 120,
        Y = 121,
        Z = 122,
        LeftCurlyBracket = 123,
        Pipe = 124,
        RightCurlyBracket = 125,
        Tilde = 126,
        Numlock = 300,
        CapsLock = 301,
        ScrollLock = 302,
        RightShift = 303,
        LeftShift = 304,
        RightControl = 305,
        LeftControl = 306,
        RightAlt = 307,
        LeftAlt = 308,
        LeftMeta = 310,
        LeftCommand = 310,
        LeftApple = 310,
        LeftWindows = 311,
        RightMeta = 309,
        RightCommand = 309,
        RightApple = 309,
        RightWindows = 312,
        AltGr = 313,
        Help = 315,
        Print = 316,
        SysReq = 317,
        Break = 318,
        Menu = 319,
        Mouse0 = 323,
        Mouse1 = 324,
        Mouse2 = 325,
        Mouse3 = 326,
        Mouse4 = 327,
        Mouse5 = 328,
        Mouse6 = 329,
        JoystickButton0 = 330,
        JoystickButton1 = 331,
        JoystickButton2 = 332,
        JoystickButton3 = 333,
        JoystickButton4 = 334,
        JoystickButton5 = 335,
        JoystickButton6 = 336,
        JoystickButton7 = 337,
        JoystickButton8 = 338,
        JoystickButton9 = 339,
        JoystickButton10 = 340,
        JoystickButton11 = 341,
        JoystickButton12 = 342,
        JoystickButton13 = 343,
        JoystickButton14 = 344,
        JoystickButton15 = 345,
        JoystickButton16 = 346,
        JoystickButton17 = 347,
        JoystickButton18 = 348,
        JoystickButton19 = 349,
        Joystick1Button0 = 350,
        Joystick1Button1 = 351,
        Joystick1Button2 = 352,
        Joystick1Button3 = 353,
        Joystick1Button4 = 354,
        Joystick1Button5 = 355,
        Joystick1Button6 = 356,
        Joystick1Button7 = 357,
        Joystick1Button8 = 358,
        Joystick1Button9 = 359,
        Joystick1Button10 = 360,
        Joystick1Button11 = 361,
        Joystick1Button12 = 362,
        Joystick1Button13 = 363,
        Joystick1Button14 = 364,
        Joystick1Button15 = 365,
        Joystick1Button16 = 366,
        Joystick1Button17 = 367,
        Joystick1Button18 = 368,
        Joystick1Button19 = 369,
        Joystick2Button0 = 370,
        Joystick2Button1 = 371,
        Joystick2Button2 = 372,
        Joystick2Button3 = 373,
        Joystick2Button4 = 374,
        Joystick2Button5 = 375,
        Joystick2Button6 = 376,
        Joystick2Button7 = 377,
        Joystick2Button8 = 378,
        Joystick2Button9 = 379,
        Joystick2Button10 = 380,
        Joystick2Button11 = 381,
        Joystick2Button12 = 382,
        Joystick2Button13 = 383,
        Joystick2Button14 = 384,
        Joystick2Button15 = 385,
        Joystick2Button16 = 386,
        Joystick2Button17 = 387,
        Joystick2Button18 = 388,
        Joystick2Button19 = 389,
        Joystick3Button0 = 390,
        Joystick3Button1 = 391,
        Joystick3Button2 = 392,
        Joystick3Button3 = 393,
        Joystick3Button4 = 394,
        Joystick3Button5 = 395,
        Joystick3Button6 = 396,
        Joystick3Button7 = 397,
        Joystick3Button8 = 398,
        Joystick3Button9 = 399,
        Joystick3Button10 = 400,
        Joystick3Button11 = 401,
        Joystick3Button12 = 402,
        Joystick3Button13 = 403,
        Joystick3Button14 = 404,
        Joystick3Button15 = 405,
        Joystick3Button16 = 406,
        Joystick3Button17 = 407,
        Joystick3Button18 = 408,
        Joystick3Button19 = 409,
        Joystick4Button0 = 410,
        Joystick4Button1 = 411,
        Joystick4Button2 = 412,
        Joystick4Button3 = 413,
        Joystick4Button4 = 414,
        Joystick4Button5 = 415,
        Joystick4Button6 = 416,
        Joystick4Button7 = 417,
        Joystick4Button8 = 418,
        Joystick4Button9 = 419,
        Joystick4Button10 = 420,
        Joystick4Button11 = 421,
        Joystick4Button12 = 422,
        Joystick4Button13 = 423,
        Joystick4Button14 = 424,
        Joystick4Button15 = 425,
        Joystick4Button16 = 426,
        Joystick4Button17 = 427,
        Joystick4Button18 = 428,
        Joystick4Button19 = 429,
        Joystick5Button0 = 430,
        Joystick5Button1 = 431,
        Joystick5Button2 = 432,
        Joystick5Button3 = 433,
        Joystick5Button4 = 434,
        Joystick5Button5 = 435,
        Joystick5Button6 = 436,
        Joystick5Button7 = 437,
        Joystick5Button8 = 438,
        Joystick5Button9 = 439,
        Joystick5Button10 = 440,
        Joystick5Button11 = 441,
        Joystick5Button12 = 442,
        Joystick5Button13 = 443,
        Joystick5Button14 = 444,
        Joystick5Button15 = 445,
        Joystick5Button16 = 446,
        Joystick5Button17 = 447,
        Joystick5Button18 = 448,
        Joystick5Button19 = 449,
        Joystick6Button0 = 450,
        Joystick6Button1 = 451,
        Joystick6Button2 = 452,
        Joystick6Button3 = 453,
        Joystick6Button4 = 454,
        Joystick6Button5 = 455,
        Joystick6Button6 = 456,
        Joystick6Button7 = 457,
        Joystick6Button8 = 458,
        Joystick6Button9 = 459,
        Joystick6Button10 = 460,
        Joystick6Button11 = 461,
        Joystick6Button12 = 462,
        Joystick6Button13 = 463,
        Joystick6Button14 = 464,
        Joystick6Button15 = 465,
        Joystick6Button16 = 466,
        Joystick6Button17 = 467,
        Joystick6Button18 = 468,
        Joystick6Button19 = 469,
        Joystick7Button0 = 470,
        Joystick7Button1 = 471,
        Joystick7Button2 = 472,
        Joystick7Button3 = 473,
        Joystick7Button4 = 474,
        Joystick7Button5 = 475,
        Joystick7Button6 = 476,
        Joystick7Button7 = 477,
        Joystick7Button8 = 478,
        Joystick7Button9 = 479,
        Joystick7Button10 = 480,
        Joystick7Button11 = 481,
        Joystick7Button12 = 482,
        Joystick7Button13 = 483,
        Joystick7Button14 = 484,
        Joystick7Button15 = 485,
        Joystick7Button16 = 486,
        Joystick7Button17 = 487,
        Joystick7Button18 = 488,
        Joystick7Button19 = 489,
        Joystick8Button0 = 490,
        Joystick8Button1 = 491,
        Joystick8Button2 = 492,
        Joystick8Button3 = 493,
        Joystick8Button4 = 494,
        Joystick8Button5 = 495,
        Joystick8Button6 = 496,
        Joystick8Button7 = 497,
        Joystick8Button8 = 498,
        Joystick8Button9 = 499,
        Joystick8Button10 = 500,
        Joystick8Button11 = 501,
        Joystick8Button12 = 502,
        Joystick8Button13 = 503,
        Joystick8Button14 = 504,
        Joystick8Button15 = 505,
        Joystick8Button16 = 506,
        Joystick8Button17 = 507,
        Joystick8Button18 = 508,
        Joystick8Button19 = 509 
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

    interface IEquatable$1<T> {

    }

}

