
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine' {
    import * as System from 'System'

    /**
    * Contact information for the wheel, reported by WheelCollider.
    */
    class WheelHit extends System.ValueType {

        /**
        * The other Collider the wheel is hitting.
        */
        public get collider(): Collider;
        public set collider(value: Collider);
        /**
        * The point of contact between the wheel and the ground.
        */
        public get point(): Vector3;
        public set point(value: Vector3);
        /**
        * The normal at the point of contact.
        */
        public get normal(): Vector3;
        public set normal(value: Vector3);
        /**
        * The direction the wheel is pointing in.
        */
        public get forwardDir(): Vector3;
        public set forwardDir(value: Vector3);
        /**
        * The sideways direction of the wheel.
        */
        public get sidewaysDir(): Vector3;
        public set sidewaysDir(value: Vector3);
        /**
        * The magnitude of the force being applied for the contact.
        */
        public get force(): float;
        public set force(value: float);
        /**
        * Tire slip in the rolling direction. Acceleration slip is negative, braking slip is positive.
        */
        public get forwardSlip(): float;
        public set forwardSlip(value: float);
        /**
        * Tire slip in the sideways direction.
        */
        public get sidewaysSlip(): float;
        public set sidewaysSlip(value: float);

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
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * A special collider for vehicle wheels.
    */
    class WheelCollider extends Collider {

        /**
        * The center of the wheel, measured in the object's local space.
        */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
        * The radius of the wheel, measured in local space.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * Maximum extension distance of wheel suspension, measured in local space.
        */
        public get suspensionDistance(): float;
        public set suspensionDistance(value: float);
        /**
        * The parameters of wheel's suspension. The suspension attempts to reach a target position by applying a linear force and a damping force.
        */
        public get suspensionSpring(): JointSpring;
        public set suspensionSpring(value: JointSpring);
        /**
        * Limits the expansion velocity of the Wheel Collider's suspension. If you set this property on a Rigidbody that has several Wheel Colliders, such as a vehicle, then it affects all other Wheel Colliders on the Rigidbody.
        * @param active Turns on/off the property
        */
        public get suspensionExpansionLimited(): boolean;
        public set suspensionExpansionLimited(value: boolean);
        /**
        * Application point of the suspension and tire forces measured from the base of the resting wheel.
        */
        public get forceAppPointDistance(): float;
        public set forceAppPointDistance(value: float);
        /**
        * The mass of the wheel, expressed in kilograms. Must be larger than zero. Typical values would be in range (20,80).
        */
        public get mass(): float;
        public set mass(value: float);
        /**
        * The damping rate of the wheel. Must be larger than zero.
        */
        public get wheelDampingRate(): float;
        public set wheelDampingRate(value: float);
        /**
        * Properties of tire friction in the direction the wheel is pointing in.
        */
        public get forwardFriction(): WheelFrictionCurve;
        public set forwardFriction(value: WheelFrictionCurve);
        /**
        * Properties of tire friction in the sideways direction.
        */
        public get sidewaysFriction(): WheelFrictionCurve;
        public set sidewaysFriction(value: WheelFrictionCurve);
        /**
        * Motor torque on the wheel axle expressed in Newton metres. Positive or negative depending on direction.
        */
        public get motorTorque(): float;
        public set motorTorque(value: float);
        /**
        * Brake torque expressed in Newton metres.
        */
        public get brakeTorque(): float;
        public set brakeTorque(value: float);
        /**
        * Steering angle in degrees, always around the local y-axis.
        */
        public get steerAngle(): float;
        public set steerAngle(value: float);
        /**
        * Indicates whether the wheel currently collides with something (Read Only).
        */
        public get isGrounded(): boolean;
        /**
        * Current wheel axle rotation speed, in rotations per minute (Read Only).
        */
        public get rpm(): float;
        /**
        * The mass supported by this WheelCollider.
        */
        public get sprungMass(): float;
        public set sprungMass(value: float);
        /**
        * Rotation speed of the wheel, measured in degrees per second.
        */
        public get rotationSpeed(): float;
        public set rotationSpeed(value: float);

        private constructor ()
        /**
        * Reset the sprung masses of the vehicle.
        */
        public ResetSprungMasses () : void
        /**
        * Configure vehicle sub-stepping parameters.
        * @param speedThreshold The speed threshold of the sub-stepping algorithm.
        * @param stepsBelowThreshold Amount of simulation sub-steps when vehicle's speed is below speedThreshold.
        * @param stepsAboveThreshold Amount of simulation sub-steps when vehicle's speed is above speedThreshold.
        */
        public ConfigureVehicleSubsteps ($speedThreshold: float, $stepsBelowThreshold: int, $stepsAboveThreshold: int) : void
        /**
        * Gets the world space pose of the wheel accounting for ground contact, suspension limits, steer angle, and rotation angle (angles in degrees).
        * @param pos Position of the wheel in world space.
        * @param quat Rotation of the wheel in world space.
        */
        public GetWorldPose ($pos: $Ref<Vector3>, $quat: $Ref<Quaternion>) : void
        /**
        * Gets ground collision data for the wheel.
        */
        public GetGroundHit ($hit: $Ref<WheelHit>) : boolean
    }

    /**
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    /**
    * JointSpring is used add a spring force to HingeJoint and PhysicMaterial.
    */
    interface JointSpring {

    }

    /**
    * WheelFrictionCurve is used by the WheelCollider to describe friction properties of the wheel tire.
    */
    interface WheelFrictionCurve {

    }

}

declare module 'System' {

    interface IFormattable {

    }

    interface IEquatable$1<T> {

    }

}

