
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as Unity_Collections from 'Unity.Collections'
    import * as UnityEngine_Physics from 'UnityEngine.Physics'
    import * as UnityEngine_SceneManagement from 'UnityEngine.SceneManagement'
    import * as Unity_Jobs from 'Unity.Jobs'

    /**
    * Use these flags to constrain motion of Rigidbodies.
    */
    enum RigidbodyConstraints {
        None = 0,
        FreezePositionX = 2,
        FreezePositionY = 4,
        FreezePositionZ = 8,
        FreezeRotationX = 16,
        FreezeRotationY = 32,
        FreezeRotationZ = 64,
        FreezePosition = 14,
        FreezeRotation = 112,
        FreezeAll = 126 
    }

    /**
    * Use ForceMode to specify how to apply a force using Rigidbody.AddForce or ArticulationBody.AddForce.
    */
    enum ForceMode {
        Force = 0,
        Acceleration = 5,
        Impulse = 1,
        VelocityChange = 2 
    }

    /**
    * Determines how to snap physics joints back to its constrained position when it drifts off too much.
    */
    enum JointProjectionMode {
        None = 0,
        PositionAndRotation = 1,
        PositionOnly = 2 
    }

    /**
    * Cooking options that are available with MeshCollider.
    */
    enum MeshColliderCookingOptions {
        None = 0,
        InflateConvexMesh = 1,
        CookForFasterSimulation = 2,
        EnableMeshCleaning = 4,
        WeldColocatedVertices = 8,
        UseFastMidphase = 16 
    }

    /**
    * WheelFrictionCurve is used by the WheelCollider to describe friction properties of the wheel tire.
    */
    class WheelFrictionCurve extends System.ValueType {

        /**
        * Extremum point slip (default 1).
        */
        public get extremumSlip(): float;
        public set extremumSlip(value: float);
        /**
        * Force at the extremum slip (default 20000).
        */
        public get extremumValue(): float;
        public set extremumValue(value: float);
        /**
        * Asymptote point slip (default 2).
        */
        public get asymptoteSlip(): float;
        public set asymptoteSlip(value: float);
        /**
        * Force at the asymptote slip (default 10000).
        */
        public get asymptoteValue(): float;
        public set asymptoteValue(value: float);
        /**
        * Multiplier for the extremumValue and asymptoteValue values (default 1).
        */
        public get stiffness(): float;
        public set stiffness(value: float);

    }

    /**
    * The limits defined by the CharacterJoint.
    */
    class SoftJointLimit extends System.ValueType {

        /**
        * The limit position/angle of the joint (in degrees).
        */
        public get limit(): float;
        public set limit(value: float);
        /**
        * When the joint hits the limit, it can be made to bounce off it.
        */
        public get bounciness(): float;
        public set bounciness(value: float);
        /**
        * Determines how far ahead in space the solver can "see" the joint limit.
        */
        public get contactDistance(): float;
        public set contactDistance(value: float);

    }

    /**
    * The configuration of the spring attached to the joint's limits: linear and angular. Used by CharacterJoint and ConfigurableJoint.
    */
    class SoftJointLimitSpring extends System.ValueType {

        /**
        * The stiffness of the spring limit. When stiffness is zero the limit is hard, otherwise soft.
        */
        public get spring(): float;
        public set spring(value: float);
        /**
        * The damping of the spring limit. In effect when the stiffness of the sprint limit is not zero.
        */
        public get damper(): float;
        public set damper(value: float);

    }

    /**
    * How the joint's movement will behave along its local X axis.
    */
    class JointDrive extends System.ValueType {

        /**
        * Strength of a rubber-band pull toward the defined direction. Only used if mode includes Position.
        */
        public get positionSpring(): float;
        public set positionSpring(value: float);
        /**
        * Resistance strength against the Position Spring. Only used if mode includes Position.
        */
        public get positionDamper(): float;
        public set positionDamper(value: float);
        /**
        * Amount of force applied to push the object toward the defined direction.
        */
        public get maximumForce(): float;
        public set maximumForce(value: float);
        /**
        * Defines whether the drive is an acceleration drive or a force drive.
        */
        public get useAcceleration(): boolean;
        public set useAcceleration(value: boolean);

    }

    /**
    * Rigidbody interpolation mode.
    */
    enum RigidbodyInterpolation {
        None = 0,
        Interpolate = 1,
        Extrapolate = 2 
    }

    /**
    * The JointMotor is used to motorize a joint.
    */
    class JointMotor extends System.ValueType {

        /**
        * The motor will apply a force up to force to achieve targetVelocity.
        */
        public get targetVelocity(): float;
        public set targetVelocity(value: float);
        /**
        * The motor will apply a force.
        */
        public get force(): float;
        public set force(value: float);
        /**
        * If freeSpin is enabled the motor will only accelerate but never slow down.
        */
        public get freeSpin(): boolean;
        public set freeSpin(value: boolean);

    }

    /**
    * JointSpring is used add a spring force to HingeJoint and PhysicMaterial.
    */
    class JointSpring extends System.ValueType {

        /**
        * The spring forces used to reach the target position.
        */
        public spring : float
        /**
        * The damper force uses to dampen the spring.
        */
        public damper : float
        /**
        * The target position the joint attempts to reach.
        */
        public targetPosition : float

    }

    /**
    * JointLimits is used by the HingeJoint to limit the joints angle.
    */
    class JointLimits extends System.ValueType {

        /**
        * The lower angular limit (in degrees) of the joint.
        */
        public get min(): float;
        public set min(value: float);
        /**
        * The upper angular limit (in degrees) of the joint.
        */
        public get max(): float;
        public set max(value: float);
        /**
        * Determines the size of the bounce when the joint hits it's limit. Also known as restitution.
        */
        public get bounciness(): float;
        public set bounciness(value: float);
        /**
        * The minimum impact velocity which will cause the joint to bounce.
        */
        public get bounceMinVelocity(): float;
        public set bounceMinVelocity(value: float);
        /**
        * Distance inside the limit value at which the limit will be considered to be active by the solver.
        */
        public get contactDistance(): float;
        public set contactDistance(value: float);

    }

    /**
    * ControllerColliderHit is used by CharacterController.OnControllerColliderHit to give detailed information about the collision and how to deal with it.
    */
    class ControllerColliderHit extends System.Object {

        /**
        * The controller that hit the collider.
        */
        public get controller(): CharacterController;
        /**
        * The collider that was hit by the controller.
        */
        public get collider(): Collider;
        /**
        * The rigidbody that was hit by the controller.
        */
        public get rigidbody(): Rigidbody;
        /**
        * The game object that was hit by the controller.
        */
        public get gameObject(): GameObject;
        /**
        * The transform that was hit by the controller.
        */
        public get transform(): Transform;
        /**
        * The impact point in world space.
        */
        public get point(): Vector3;
        /**
        * The normal of the surface we collided with in world space.
        */
        public get normal(): Vector3;
        /**
        * The direction the CharacterController was moving in when the collision occured.
        */
        public get moveDirection(): Vector3;
        /**
        * How far the character has travelled until it hit the collider.
        */
        public get moveLength(): float;

        public constructor ()
    }

    /**
    * A CharacterController allows you to easily do movement constrained by collisions without having to deal with a rigidbody.
    */
    class CharacterController extends Collider {

        /**
        * Enabled Colliders will collide with other Colliders, disabled Colliders won't.
        */
        public get enabled(): boolean;
        public set enabled(value: boolean);
        /**
        * The rigidbody the collider is attached to.
        */
        public get attachedRigidbody(): Rigidbody;
        /**
        * The articulation body the collider is attached to.
        */
        public get attachedArticulationBody(): ArticulationBody;
        /**
        * Specify if this collider is configured as a trigger.
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Contact offset value of this collider.
        */
        public get contactOffset(): float;
        public set contactOffset(value: float);
        /**
        * The world space bounding volume of the collider (Read Only).
        */
        public get bounds(): Bounds;
        /**
        * Specify whether this Collider's contacts are modifiable or not.
        */
        public get hasModifiableContacts(): boolean;
        public set hasModifiableContacts(value: boolean);
        /**
        * Whether or not this Collider generates contacts for Physics.ContactEvent.
        */
        public get providesContacts(): boolean;
        public set providesContacts(value: boolean);
        /**
        * A decision priority assigned to this Collider used when there is a conflicting decision on whether a Collider can contact another Collider.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional layers that this Collider should exclude when deciding if the Collider can contact another Collider.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional layers that this Collider should include when deciding if the Collider can contact another Collider.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The shared physic material of this collider.
        */
        public get sharedMaterial(): PhysicMaterial;
        public set sharedMaterial(value: PhysicMaterial);
        /**
        * The material used by the collider.
        */
        public get material(): PhysicMaterial;
        public set material(value: PhysicMaterial);
        /**
        * The current relative velocity of the Character (see notes).
        */
        public get velocity(): Vector3;
        /**
        * Was the CharacterController touching the ground during the last move?
        */
        public get isGrounded(): boolean;
        /**
        * What part of the capsule collided with the environment during the last CharacterController.Move call.
        */
        public get collisionFlags(): CollisionFlags;
        /**
        * The radius of the character's capsule.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * The height of the character's capsule.
        */
        public get height(): float;
        public set height(value: float);
        /**
        * The center of the character's capsule relative to the transform's position.
        */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
        * The character controllers slope limit in degrees.
        */
        public get slopeLimit(): float;
        public set slopeLimit(value: float);
        /**
        * The character controllers step offset in meters.
        */
        public get stepOffset(): float;
        public set stepOffset(value: float);
        /**
        * The character's collision skin width.
        */
        public get skinWidth(): float;
        public set skinWidth(value: float);
        /**
        * Gets or sets the minimum move distance of the character controller.
        */
        public get minMoveDistance(): float;
        public set minMoveDistance(value: float);
        /**
        * Determines whether other rigidbodies or character controllers collide with this character controller (by default this is always enabled).
        */
        public get detectCollisions(): boolean;
        public set detectCollisions(value: boolean);
        /**
        * Enables or disables overlap recovery.
        * Enables or disables overlap recovery. Used to depenetrate character controllers from static objects when an overlap is detected.
        */
        public get enableOverlapRecovery(): boolean;
        public set enableOverlapRecovery(value: boolean);

        private constructor ()
        /**
        * Moves the character with speed.
        */
        public SimpleMove ($speed: Vector3) : boolean
        /**
        * Supplies the movement of a GameObject with an attached CharacterController component.
        */
        public Move ($motion: Vector3) : CollisionFlags
    }

    /**
    * A base class of all colliders.
    */
    class Collider extends Component {

        /**
        * Enabled Colliders will collide with other Colliders, disabled Colliders won't.
        */
        public get enabled(): boolean;
        public set enabled(value: boolean);
        /**
        * The rigidbody the collider is attached to.
        */
        public get attachedRigidbody(): Rigidbody;
        /**
        * The articulation body the collider is attached to.
        */
        public get attachedArticulationBody(): ArticulationBody;
        /**
        * Specify if this collider is configured as a trigger.
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Contact offset value of this collider.
        */
        public get contactOffset(): float;
        public set contactOffset(value: float);
        /**
        * The world space bounding volume of the collider (Read Only).
        */
        public get bounds(): Bounds;
        /**
        * Specify whether this Collider's contacts are modifiable or not.
        */
        public get hasModifiableContacts(): boolean;
        public set hasModifiableContacts(value: boolean);
        /**
        * Whether or not this Collider generates contacts for Physics.ContactEvent.
        */
        public get providesContacts(): boolean;
        public set providesContacts(value: boolean);
        /**
        * A decision priority assigned to this Collider used when there is a conflicting decision on whether a Collider can contact another Collider.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional layers that this Collider should exclude when deciding if the Collider can contact another Collider.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional layers that this Collider should include when deciding if the Collider can contact another Collider.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The shared physic material of this collider.
        */
        public get sharedMaterial(): PhysicMaterial;
        public set sharedMaterial(value: PhysicMaterial);
        /**
        * The material used by the collider.
        */
        public get material(): PhysicMaterial;
        public set material(value: PhysicMaterial);

        private constructor ()
        /**
        * Returns a point on the collider that is closest to a given location.
        * @param position Location you want to find the closest point to.
        * @returns The point on the collider that is closest to the specified location.
        */
        public ClosestPoint ($position: Vector3) : Vector3
        /**
        * Casts a Ray that ignores all Colliders except this one.
        * @param ray The starting point and direction of the ray.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit.
        * @param maxDistance The max length of the ray.
        * @returns True when the ray intersects the collider, otherwise false.
        */
        public Raycast ($ray: Ray, $hitInfo: $Ref<RaycastHit>, $maxDistance: float) : boolean
        /**
        * The closest point to the bounding box of the attached collider.
        */
        public ClosestPointOnBounds ($position: Vector3) : Vector3
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
    * Representation of rays.
    */
    interface Ray extends System.IFormattable {

    }

    /**
    * Structure used to get information back from a raycast.
    */
    class RaycastHit extends System.ValueType {

        /**
        * The Collider that was hit.
        */
        public get collider(): Collider;
        /**
        * Instance ID of the Collider that was hit.
        */
        public get colliderInstanceID(): int;
        /**
        * The impact point in world space where the ray hit the collider.
        */
        public get point(): Vector3;
        public set point(value: Vector3);
        /**
        * The normal of the surface the ray hit.
        */
        public get normal(): Vector3;
        public set normal(value: Vector3);
        /**
        * The barycentric coordinate of the triangle we hit.
        */
        public get barycentricCoordinate(): Vector3;
        public set barycentricCoordinate(value: Vector3);
        /**
        * The distance from the ray's origin to the impact point.
        */
        public get distance(): float;
        public set distance(value: float);
        /**
        * The index of the triangle that was hit.
        */
        public get triangleIndex(): int;
        /**
        * The uv texture coordinate at the collision location.
        */
        public get textureCoord(): Vector2;
        /**
        * The secondary uv texture coordinate at the impact point.
        */
        public get textureCoord2(): Vector2;
        /**
        * The Transform of the rigidbody or collider that was hit.
        */
        public get transform(): Transform;
        /**
        * The Rigidbody of the collider that was hit. If the collider is not attached to a rigidbody then it is null.
        */
        public get rigidbody(): Rigidbody;
        /**
        * The ArticulationBody of the collider that was hit. If the collider is not attached to an articulation body then it is null.
        */
        public get articulationBody(): ArticulationBody;
        /**
        * The uv lightmap coordinate at the impact point.
        */
        public get lightmapCoord(): Vector2;

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * Control of an object's position through physics simulation.
    */
    class Rigidbody extends Component {

        /**
        * The velocity vector of the rigidbody. It represents the rate of change of Rigidbody position.
        */
        public get velocity(): Vector3;
        public set velocity(value: Vector3);
        /**
        * The angular velocity vector of the rigidbody measured in radians per second.
        */
        public get angularVelocity(): Vector3;
        public set angularVelocity(value: Vector3);
        /**
        * The drag of the object.
        */
        public get drag(): float;
        public set drag(value: float);
        /**
        * The angular drag of the object.
        */
        public get angularDrag(): float;
        public set angularDrag(value: float);
        /**
        * The mass of the rigidbody.
        */
        public get mass(): float;
        public set mass(value: float);
        /**
        * Controls whether gravity affects this rigidbody.
        */
        public get useGravity(): boolean;
        public set useGravity(value: boolean);
        /**
        * Maximum velocity of a rigidbody when moving out of penetrating state.
        */
        public get maxDepenetrationVelocity(): float;
        public set maxDepenetrationVelocity(value: float);
        /**
        * Controls whether physics affects the rigidbody.
        */
        public get isKinematic(): boolean;
        public set isKinematic(value: boolean);
        /**
        * Controls whether physics will change the rotation of the object.
        */
        public get freezeRotation(): boolean;
        public set freezeRotation(value: boolean);
        /**
        * Controls which degrees of freedom are allowed for the simulation of this Rigidbody.
        */
        public get constraints(): RigidbodyConstraints;
        public set constraints(value: RigidbodyConstraints);
        /**
        * The Rigidbody's collision detection mode.
        */
        public get collisionDetectionMode(): CollisionDetectionMode;
        public set collisionDetectionMode(value: CollisionDetectionMode);
        /**
        * Whether or not to calculate the center of mass automatically.
        */
        public get automaticCenterOfMass(): boolean;
        public set automaticCenterOfMass(value: boolean);
        /**
        * The center of mass relative to the transform's origin.
        */
        public get centerOfMass(): Vector3;
        public set centerOfMass(value: Vector3);
        /**
        * The center of mass of the rigidbody in world space (Read Only).
        */
        public get worldCenterOfMass(): Vector3;
        /**
        * Whether or not to calculate the inertia tensor automatically.
        */
        public get automaticInertiaTensor(): boolean;
        public set automaticInertiaTensor(value: boolean);
        /**
        * The rotation of the inertia tensor.
        */
        public get inertiaTensorRotation(): Quaternion;
        public set inertiaTensorRotation(value: Quaternion);
        /**
        * The inertia tensor of this body, defined as a diagonal matrix in a reference frame positioned at this body's center of mass and rotated by Rigidbody.inertiaTensorRotation.
        */
        public get inertiaTensor(): Vector3;
        public set inertiaTensor(value: Vector3);
        /**
        * Should collision detection be enabled? (By default always enabled).
        */
        public get detectCollisions(): boolean;
        public set detectCollisions(value: boolean);
        /**
        * The position of the rigidbody.
        */
        public get position(): Vector3;
        public set position(value: Vector3);
        /**
        * The rotation of the Rigidbody.
        */
        public get rotation(): Quaternion;
        public set rotation(value: Quaternion);
        /**
        * Interpolation provides a way to manage the appearance of jitter in the movement of your Rigidbody GameObjects at run time.
        */
        public get interpolation(): RigidbodyInterpolation;
        public set interpolation(value: RigidbodyInterpolation);
        /**
        * The solverIterations determines how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverIterations. Must be positive.
        */
        public get solverIterations(): int;
        public set solverIterations(value: int);
        /**
        * The mass-normalized energy threshold, below which objects start going to sleep.
        */
        public get sleepThreshold(): float;
        public set sleepThreshold(value: float);
        /**
        * The maximum angular velocity of the rigidbody measured in radians per second. (Default 7) range { 0, infinity }.
        */
        public get maxAngularVelocity(): float;
        public set maxAngularVelocity(value: float);
        /**
        * The maximum linear velocity of the rigidbody measured in meters per second.
        */
        public get maxLinearVelocity(): float;
        public set maxLinearVelocity(value: float);
        /**
        * The solverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverVelocityIterations. Must be positive.
        */
        public get solverVelocityIterations(): int;
        public set solverVelocityIterations(value: int);
        /**
        * The additional layers that all Colliders attached to this Rigidbody should exclude when deciding if the Collider can come into contact with another Collider.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional layers that all Colliders attached to this Rigidbody should include when deciding if the Collider can come into contact with another Collider.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);

        private constructor ()
        /**
        * Sets the mass based on the attached colliders assuming a constant density.
        */
        public SetDensity ($density: float) : void
        /**
        * Moves the kinematic Rigidbody towards position.
        * @param position Provides the new position for the Rigidbody object.
        */
        public MovePosition ($position: Vector3) : void
        /**
        * Rotates the rigidbody to rotation.
        * @param rot The new rotation for the Rigidbody.
        */
        public MoveRotation ($rot: Quaternion) : void
        /**
        * Moves the Rigidbody to position and rotates the Rigidbody to rotation.
        * @param position The new position for the Rigidbody.
        * @param rotation The new rotation for the Rigidbody.
        */
        public Move ($position: Vector3, $rotation: Quaternion) : void
        /**
        * Forces a rigidbody to sleep at least one frame.
        */
        public Sleep () : void
        /**
        * Is the rigidbody sleeping?
        */
        public IsSleeping () : boolean
        /**
        * Forces a rigidbody to wake up.
        */
        public WakeUp () : void
        /**
        * Reset the center of mass of the rigidbody.
        */
        public ResetCenterOfMass () : void
        /**
        * Reset the inertia tensor value and rotation.
        */
        public ResetInertiaTensor () : void
        /**
        * The velocity relative to the rigidbody at the point relativePoint.
        */
        public GetRelativePointVelocity ($relativePoint: Vector3) : Vector3
        /**
        * The velocity of the rigidbody at the point worldPoint in global space.
        */
        public GetPointVelocity ($worldPoint: Vector3) : Vector3
        /**
        * Returns the force that the Rigidbody has accumulated before the simulation step.
        * @param step The timestep of the next physics simulation.
        * @returns Accumulated force expressed in ForceMode.Force.
        * @methodSwap GetAccumulatedForce_EBB7509C_H82424F3E
        */
        public GetAccumulatedForce ($step: float) : Vector3
        public GetAccumulatedForce () : Vector3
        /**
        * Returns the torque that the Rigidbody has accumulated before the simulation step.
        * @param step The timestep of the next physics simulation.
        * @returns Accumulated torque expressed in ForceMode.Force.
        * @methodSwap GetAccumulatedTorque_EBB7509C_H82424F3E
        */
        public GetAccumulatedTorque ($step: float) : Vector3
        public GetAccumulatedTorque () : Vector3
        /**
        * Adds a force to the Rigidbody.
        * @param force Force vector in world coordinates.
        * @param mode Type of force to apply.
        */
        public AddForce ($force: Vector3, $mode: ForceMode) : void
        /**
        * Adds a force to the Rigidbody.
        * @param force Force vector in world coordinates.
        * @param mode Type of force to apply.
        */
        public AddForce ($force: Vector3) : void
        /**
        * Adds a force to the Rigidbody.
        * @param x Size of force along the world x-axis.
        * @param y Size of force along the world y-axis.
        * @param z Size of force along the world z-axis.
        * @param mode Type of force to apply.
        * @methodSwap AddForce_EBB7509C_H55E5E54D
        */
        public AddForce ($x: float, $y: float, $z: float, $mode: ForceMode) : void
        /**
        * Adds a force to the Rigidbody.
        * @param x Size of force along the world x-axis.
        * @param y Size of force along the world y-axis.
        * @param z Size of force along the world z-axis.
        * @param mode Type of force to apply.
        * @methodSwap AddForce_EBB7509C_E4172388
        */
        public AddForce ($x: float, $y: float, $z: float) : void
        /**
        * Adds a force to the rigidbody relative to its coordinate system.
        * @param force Force vector in local coordinates.
        */
        public AddRelativeForce ($force: Vector3, $mode: ForceMode) : void
        /**
        * Adds a force to the rigidbody relative to its coordinate system.
        * @param force Force vector in local coordinates.
        */
        public AddRelativeForce ($force: Vector3) : void
        /**
        * Adds a force to the rigidbody relative to its coordinate system.
        * @param x Size of force along the local x-axis.
        * @param y Size of force along the local y-axis.
        * @param z Size of force along the local z-axis.
        * @methodSwap AddRelativeForce_EBB7509C_H55E5E54D
        */
        public AddRelativeForce ($x: float, $y: float, $z: float, $mode: ForceMode) : void
        /**
        * Adds a force to the rigidbody relative to its coordinate system.
        * @param x Size of force along the local x-axis.
        * @param y Size of force along the local y-axis.
        * @param z Size of force along the local z-axis.
        * @methodSwap AddRelativeForce_EBB7509C_E4172388
        */
        public AddRelativeForce ($x: float, $y: float, $z: float) : void
        /**
        * Adds a torque to the rigidbody.
        * @param torque Torque vector in world coordinates.
        * @param mode The type of torque to apply.
        */
        public AddTorque ($torque: Vector3, $mode: ForceMode) : void
        /**
        * Adds a torque to the rigidbody.
        * @param torque Torque vector in world coordinates.
        * @param mode The type of torque to apply.
        */
        public AddTorque ($torque: Vector3) : void
        /**
        * Adds a torque to the rigidbody.
        * @param x Size of torque along the world x-axis.
        * @param y Size of torque along the world y-axis.
        * @param z Size of torque along the world z-axis.
        * @param mode The type of torque to apply.
        * @methodSwap AddTorque_EBB7509C_H55E5E54D
        */
        public AddTorque ($x: float, $y: float, $z: float, $mode: ForceMode) : void
        /**
        * Adds a torque to the rigidbody.
        * @param x Size of torque along the world x-axis.
        * @param y Size of torque along the world y-axis.
        * @param z Size of torque along the world z-axis.
        * @param mode The type of torque to apply.
        * @methodSwap AddTorque_EBB7509C_E4172388
        */
        public AddTorque ($x: float, $y: float, $z: float) : void
        /**
        * Adds a torque to the rigidbody relative to its coordinate system.
        * @param torque Torque vector in local coordinates.
        */
        public AddRelativeTorque ($torque: Vector3, $mode: ForceMode) : void
        /**
        * Adds a torque to the rigidbody relative to its coordinate system.
        * @param torque Torque vector in local coordinates.
        */
        public AddRelativeTorque ($torque: Vector3) : void
        /**
        * Adds a torque to the rigidbody relative to its coordinate system.
        * @param x Size of torque along the local x-axis.
        * @param y Size of torque along the local y-axis.
        * @param z Size of torque along the local z-axis.
        * @methodSwap AddRelativeTorque_EBB7509C_H55E5E54D
        */
        public AddRelativeTorque ($x: float, $y: float, $z: float, $mode: ForceMode) : void
        /**
        * Adds a torque to the rigidbody relative to its coordinate system.
        * @param x Size of torque along the local x-axis.
        * @param y Size of torque along the local y-axis.
        * @param z Size of torque along the local z-axis.
        * @methodSwap AddRelativeTorque_EBB7509C_E4172388
        */
        public AddRelativeTorque ($x: float, $y: float, $z: float) : void
        /**
        * Applies force at position. As a result this will apply a torque and force on the object.
        * @param force Force vector in world coordinates.
        * @param position Position in world coordinates.
        */
        public AddForceAtPosition ($force: Vector3, $position: Vector3, $mode: ForceMode) : void
        /**
        * Applies force at position. As a result this will apply a torque and force on the object.
        * @param force Force vector in world coordinates.
        * @param position Position in world coordinates.
        */
        public AddForceAtPosition ($force: Vector3, $position: Vector3) : void
        /**
        * Applies a force to a rigidbody that simulates explosion effects.
        * @param explosionForce The force of the explosion (which may be modified by distance).
        * @param explosionPosition The centre of the sphere within which the explosion has its effect.
        * @param explosionRadius The radius of the sphere within which the explosion has its effect.
        * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
        * @param mode The method used to apply the force to its targets.
        * @methodSwap AddExplosionForce_EBB7509C_CC6B4166
        */
        public AddExplosionForce ($explosionForce: float, $explosionPosition: Vector3, $explosionRadius: float, $upwardsModifier: float, $mode: ForceMode) : void
        /**
        * Applies a force to a rigidbody that simulates explosion effects.
        * @param explosionForce The force of the explosion (which may be modified by distance).
        * @param explosionPosition The centre of the sphere within which the explosion has its effect.
        * @param explosionRadius The radius of the sphere within which the explosion has its effect.
        * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
        * @param mode The method used to apply the force to its targets.
        * @methodSwap AddExplosionForce_EBB7509C_H8CA394A9
        */
        public AddExplosionForce ($explosionForce: float, $explosionPosition: Vector3, $explosionRadius: float, $upwardsModifier: float) : void
        /**
        * Applies a force to a rigidbody that simulates explosion effects.
        * @param explosionForce The force of the explosion (which may be modified by distance).
        * @param explosionPosition The centre of the sphere within which the explosion has its effect.
        * @param explosionRadius The radius of the sphere within which the explosion has its effect.
        * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
        * @param mode The method used to apply the force to its targets.
        * @methodSwap AddExplosionForce_EBB7509C_H567B8C64
        */
        public AddExplosionForce ($explosionForce: float, $explosionPosition: Vector3, $explosionRadius: float) : void
        /**
        * The closest point to the bounding box of the attached colliders.
        */
        public ClosestPointOnBounds ($position: Vector3) : Vector3
        /**
        * Tests if a rigidbody would collide with anything, if it was moved through the Scene.
        * @param direction The direction into which to sweep the rigidbody.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit (Additional resources: RaycastHit).
        * @param maxDistance The length of the sweep.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True when the rigidbody sweep intersects any collider, otherwise false.
        * @methodSwap SweepTest_EBB7509C_H72D9B5A7
        */
        public SweepTest ($direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap SweepTest_EBB7509C_AAA0E9A
        */
        public SweepTest ($direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float) : boolean
        public SweepTest ($direction: Vector3, $hitInfo: $Ref<RaycastHit>) : boolean
        /**
        * Like Rigidbody.SweepTest, but returns all hits.
        * @param direction The direction into which to sweep the rigidbody.
        * @param maxDistance The length of the sweep.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns An array of all colliders hit in the sweep.
        * @methodSwap SweepTestAll_EBB7509C_H4B5B3234
        */
        public SweepTestAll ($direction: Vector3, $maxDistance: float, $queryTriggerInteraction: QueryTriggerInteraction) : RaycastHit[]
        /**
        * @methodSwap SweepTestAll_EBB7509C_H75CC56AF
        */
        public SweepTestAll ($direction: Vector3, $maxDistance: float) : RaycastHit[]
        public SweepTestAll ($direction: Vector3) : RaycastHit[]
    }

    /**
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    /**
    * Overrides the global Physics.queriesHitTriggers.
    */
    enum QueryTriggerInteraction {
        UseGlobal = 0,
        Ignore = 1,
        Collide = 2 
    }

    /**
    * The collision detection mode constants used for Rigidbody.collisionDetectionMode.
    */
    enum CollisionDetectionMode {
        Discrete = 0,
        Continuous = 1,
        ContinuousDynamic = 2,
        ContinuousSpeculative = 3 
    }

    /**
    * Specifies Layers to use in a Physics.Raycast.
    */
    interface LayerMask {

    }

    /**
    * A body that forms part of a Physics articulation.
    */
    class ArticulationBody extends Behaviour {

        /**
        * The type of joint connecting this body to its parent body.
        */
        public get jointType(): ArticulationJointType;
        public set jointType(value: ArticulationJointType);
        /**
        * Position of the anchor relative to this body.
        */
        public get anchorPosition(): Vector3;
        public set anchorPosition(value: Vector3);
        /**
        * Position of the anchor relative to this body's parent.
        */
        public get parentAnchorPosition(): Vector3;
        public set parentAnchorPosition(value: Vector3);
        /**
        * Rotation of the anchor relative to this body.
        */
        public get anchorRotation(): Quaternion;
        public set anchorRotation(value: Quaternion);
        /**
        * Rotation of the anchor relative to this body's parent.
        */
        public get parentAnchorRotation(): Quaternion;
        public set parentAnchorRotation(value: Quaternion);
        /**
        * Indicates whether this body is the root body of the articulation (Read Only).
        */
        public get isRoot(): boolean;
        /**
        * Whether the parent anchor should be computed automatically or not.
        */
        public get matchAnchors(): boolean;
        public set matchAnchors(value: boolean);
        /**
        * The type of lock along X axis of movement.
        */
        public get linearLockX(): ArticulationDofLock;
        public set linearLockX(value: ArticulationDofLock);
        /**
        * The type of lock along Y axis of movement.
        */
        public get linearLockY(): ArticulationDofLock;
        public set linearLockY(value: ArticulationDofLock);
        /**
        * The type of lock along Z axis of movement.
        */
        public get linearLockZ(): ArticulationDofLock;
        public set linearLockZ(value: ArticulationDofLock);
        /**
        * The magnitude of the conical swing angle relative to Y axis.
        */
        public get swingYLock(): ArticulationDofLock;
        public set swingYLock(value: ArticulationDofLock);
        /**
        * The magnitude of the conical swing angle relative to Z axis.
        */
        public get swingZLock(): ArticulationDofLock;
        public set swingZLock(value: ArticulationDofLock);
        /**
        * The type of lock for twist movement.
        */
        public get twistLock(): ArticulationDofLock;
        public set twistLock(value: ArticulationDofLock);
        /**
        * The properties of drive along or around X.
        */
        public get xDrive(): ArticulationDrive;
        public set xDrive(value: ArticulationDrive);
        /**
        * The properties of drive along or around Y.
        */
        public get yDrive(): ArticulationDrive;
        public set yDrive(value: ArticulationDrive);
        /**
        * The properties of drive along or around Z.
        */
        public get zDrive(): ArticulationDrive;
        public set zDrive(value: ArticulationDrive);
        /**
        * Allows you to specify that this body is not movable.
        */
        public get immovable(): boolean;
        public set immovable(value: boolean);
        /**
        * Controls whether gravity affects this articulation body.
        */
        public get useGravity(): boolean;
        public set useGravity(value: boolean);
        /**
        * Damping factor that affects how this body resists linear motion.
        */
        public get linearDamping(): float;
        public set linearDamping(value: float);
        /**
        * Damping factor that affects how this body resists rotations.
        */
        public get angularDamping(): float;
        public set angularDamping(value: float);
        /**
        * Allows you to specify the amount of friction that is applied as a result of the parent body moving relative to this body.
        */
        public get jointFriction(): float;
        public set jointFriction(value: float);
        /**
        * The additional layers that all Colliders attached to this ArticulationBody should exclude when deciding if the Collider can come into contact with another Collider.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional layers that all Colliders attached to this ArticulationBody should include when deciding if a the Collider can come into contact with another Collider.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * Linear velocity of the body defined in world space.
        */
        public get velocity(): Vector3;
        public set velocity(value: Vector3);
        /**
        * The angular velocity of the body defined in world space.
        */
        public get angularVelocity(): Vector3;
        public set angularVelocity(value: Vector3);
        /**
        * The mass of this articulation body.
        */
        public get mass(): float;
        public set mass(value: float);
        /**
        * Whether or not to calculate the center of mass automatically.
        */
        public get automaticCenterOfMass(): boolean;
        public set automaticCenterOfMass(value: boolean);
        /**
        * The center of mass of the body defined in local space.
        */
        public get centerOfMass(): Vector3;
        public set centerOfMass(value: Vector3);
        /**
        * The center of mass of the body defined in world space (Read Only).
        */
        public get worldCenterOfMass(): Vector3;
        /**
        * Whether or not to calculate the inertia tensor automatically.
        */
        public get automaticInertiaTensor(): boolean;
        public set automaticInertiaTensor(value: boolean);
        /**
        * The inertia tensor of this body.
        */
        public get inertiaTensor(): Vector3;
        public set inertiaTensor(value: Vector3);
        /**
        * The rotation of the inertia tensor.
        */
        public get inertiaTensorRotation(): Quaternion;
        public set inertiaTensorRotation(value: Quaternion);
        /**
        * The mass-normalized energy threshold, below which objects start going to sleep.
        */
        public get sleepThreshold(): float;
        public set sleepThreshold(value: float);
        /**
        * The solverIterations determines how accurately articulation body joints and collision contacts are resolved.
        */
        public get solverIterations(): int;
        public set solverIterations(value: int);
        /**
        * The solverVelocityIterations affects how accurately articulation body joints and collision contacts are resolved during bounce.
        */
        public get solverVelocityIterations(): int;
        public set solverVelocityIterations(value: int);
        /**
        * The maximum angular velocity of the articulation body measured in radians per second.
        */
        public get maxAngularVelocity(): float;
        public set maxAngularVelocity(value: float);
        /**
        * The maximum linear velocity of the articulation body measured in meters per second.
        */
        public get maxLinearVelocity(): float;
        public set maxLinearVelocity(value: float);
        /**
        * The maximum joint velocity of the articulation body joint in reduced coordinates.
        */
        public get maxJointVelocity(): float;
        public set maxJointVelocity(value: float);
        /**
        * The maximum velocity of an articulation body when moving out of penetrating state.
        */
        public get maxDepenetrationVelocity(): float;
        public set maxDepenetrationVelocity(value: float);
        /**
        * The joint position in reduced coordinates.
        */
        public get jointPosition(): ArticulationReducedSpace;
        public set jointPosition(value: ArticulationReducedSpace);
        /**
        * The joint velocity in reduced coordinates.
        */
        public get jointVelocity(): ArticulationReducedSpace;
        public set jointVelocity(value: ArticulationReducedSpace);
        /**
        * The joint acceleration in reduced coordinates.
        */
        public get jointAcceleration(): ArticulationReducedSpace;
        /**
        * The joint force in reduced coordinates.
        */
        public get jointForce(): ArticulationReducedSpace;
        public set jointForce(value: ArticulationReducedSpace);
        /**
        * The drive force in reduced coordinates.
        */
        public get driveForce(): ArticulationReducedSpace;
        /**
        * The amount of degrees of freedom of a body.
        */
        public get dofCount(): int;
        /**
        * The index of the body in the hierarchy of articulation bodies.
        */
        public get index(): int;
        /**
        * The ArticulationBody's collision detection mode.
        */
        public get collisionDetectionMode(): CollisionDetectionMode;
        public set collisionDetectionMode(value: CollisionDetectionMode);

        private constructor ()
        /**
        * Returns the force that the ArticulationBody has accumulated before the simulation step.
        * @param step The timestep of the next physics simulation.
        * @returns Accumulated force expressed in ForceMode.Force.
        * @methodSwap GetAccumulatedForce_EBB7509C_H82424F3E
        */
        public GetAccumulatedForce ($step: float) : Vector3
        public GetAccumulatedForce () : Vector3
        /**
        * Returns the torque that the ArticulationBody has accumulated before the simulation step.
        * @param step The timestep of the next physics simulation.
        * @returns Accumulated torque expressed in ForceMode.Force.
        * @methodSwap GetAccumulatedTorque_EBB7509C_H82424F3E
        */
        public GetAccumulatedTorque ($step: float) : Vector3
        public GetAccumulatedTorque () : Vector3
        /**
        * Applies a force to the ArticulationBody.
        * @param force The force vector to apply.
        * @param mode The type of force to apply.
        */
        public AddForce ($force: Vector3, $mode: ForceMode) : void
        /**
        * Applies a force to the ArticulationBody.
        * @param force The force vector to apply.
        * @param mode The type of force to apply.
        */
        public AddForce ($force: Vector3) : void
        /**
        * Applies a force to the Articulation Body, relative to its local coordinate system.
        * @param force The force vector in local coordinates.
        * @param mode The type of force to apply.
        */
        public AddRelativeForce ($force: Vector3, $mode: ForceMode) : void
        /**
        * Applies a force to the Articulation Body, relative to its local coordinate system.
        * @param force The force vector in local coordinates.
        * @param mode The type of force to apply.
        */
        public AddRelativeForce ($force: Vector3) : void
        /**
        * Add torque to the articulation body.
        * @param torque The torque to apply.
        * @param mode The type of torque to apply.
        */
        public AddTorque ($torque: Vector3, $mode: ForceMode) : void
        /**
        * Add torque to the articulation body.
        * @param torque The torque to apply.
        * @param mode The type of torque to apply.
        */
        public AddTorque ($torque: Vector3) : void
        /**
        * Applies a torque to the articulation body, relative to its local coordinate system.
        * @param torque The torque vector in local coordinates.
        * @param mode The type of torque to apply.
        */
        public AddRelativeTorque ($torque: Vector3, $mode: ForceMode) : void
        /**
        * Applies a torque to the articulation body, relative to its local coordinate system.
        * @param torque The torque vector in local coordinates.
        * @param mode The type of torque to apply.
        */
        public AddRelativeTorque ($torque: Vector3) : void
        /**
        * Applies a force at a specific position, resulting in applying a torque and force on the object.
        * @param force The force vector in world coordinates.
        * @param position A position in world coordinates.
        * @param mode The type of force to apply.
        */
        public AddForceAtPosition ($force: Vector3, $position: Vector3, $mode: ForceMode) : void
        /**
        * Applies a force at a specific position, resulting in applying a torque and force on the object.
        * @param force The force vector in world coordinates.
        * @param position A position in world coordinates.
        * @param mode The type of force to apply.
        */
        public AddForceAtPosition ($force: Vector3, $position: Vector3) : void
        /**
        * Resets the center of mass of the articulation body.
        */
        public ResetCenterOfMass () : void
        /**
        * Resets the inertia tensor value and rotation.
        */
        public ResetInertiaTensor () : void
        /**
        * Forces an articulation body to sleep.
        */
        public Sleep () : void
        /**
        * Indicates whether the articulation body is sleeping.
        */
        public IsSleeping () : boolean
        /**
        * Forces an articulation body to wake up.
        */
        public WakeUp () : void
        /**
        * Teleport the root body of the articulation to a new pose.
        * @param position The new position of the root articulation body.
        * @param rotation The new orientation of the root articulation body.
        */
        public TeleportRoot ($position: Vector3, $rotation: Quaternion) : void
        /**
        * Return the point on the articulation body that is closest to a given one.
        * @param point The point of interest.
        * @returns The point on the surfaces of all Colliders attached to this articulation body that is closest to the given one.
        */
        public GetClosestPoint ($point: Vector3) : Vector3
        /**
        * The velocity relative to the articulation body at the point relativePoint.
        */
        public GetRelativePointVelocity ($relativePoint: Vector3) : Vector3
        /**
        * Gets the velocity of the articulation body at the specified worldPoint in global space.
        */
        public GetPointVelocity ($worldPoint: Vector3) : Vector3
        /**
        * Calculates and writes dense Jacobian matrix of the articulation body hierarchy to the supplied struct.
        * @param jacobian Supplied struct to read back and store Jacobian matrix values. 
        * @returns Number of elements in Jacobian matrix.
        */
        public GetDenseJacobian ($jacobian: $Ref<ArticulationJacobian>) : int
        public GetJointPositions ($positions: System_Collections_Generic.List$1<float>) : int
        public SetJointPositions ($positions: System_Collections_Generic.List$1<float>) : void
        public GetJointVelocities ($velocities: System_Collections_Generic.List$1<float>) : int
        public SetJointVelocities ($velocities: System_Collections_Generic.List$1<float>) : void
        public GetJointAccelerations ($accelerations: System_Collections_Generic.List$1<float>) : int
        public GetJointForces ($forces: System_Collections_Generic.List$1<float>) : int
        public SetJointForces ($forces: System_Collections_Generic.List$1<float>) : void
        /**
        * Returns the forces required for the body to reach the provided acceleration in reduced space.
        * @param acceleration The desired acceleration in reduced space.
        * @returns The forces needed for the body to reach the desired acceleration in reduced space.
        */
        public GetJointForcesForAcceleration ($acceleration: ArticulationReducedSpace) : ArticulationReducedSpace
        public GetDriveForces ($forces: System_Collections_Generic.List$1<float>) : int
        public GetJointGravityForces ($forces: System_Collections_Generic.List$1<float>) : int
        public GetJointCoriolisCentrifugalForces ($forces: System_Collections_Generic.List$1<float>) : int
        public GetJointExternalForces ($forces: System_Collections_Generic.List$1<float>, $step: float) : int
        public GetDriveTargets ($targets: System_Collections_Generic.List$1<float>) : int
        public SetDriveTargets ($targets: System_Collections_Generic.List$1<float>) : void
        public GetDriveTargetVelocities ($targetVelocities: System_Collections_Generic.List$1<float>) : int
        public SetDriveTargetVelocities ($targetVelocities: System_Collections_Generic.List$1<float>) : void
        public GetDofStartIndices ($dofStartIndices: System_Collections_Generic.List$1<int>) : int
        /**
        * Sets the target value of the specified drive.
        * @param axis The drive axis.
        * @param value The value to set the target to.
        */
        public SetDriveTarget ($axis: ArticulationDriveAxis, $value: float) : void
        /**
        * Sets the target velocity value of the specified drive.
        * @param axis The drive axis.
        * @param value The value to set the target velocity to.
        */
        public SetDriveTargetVelocity ($axis: ArticulationDriveAxis, $value: float) : void
        /**
        * Sets the lower and upper limits of the drive.
        * @param axis The drive axis.
        * @param lower The lower limit of the drive.
        * @param upper The upper limit of the drive.
        */
        public SetDriveLimits ($axis: ArticulationDriveAxis, $lower: float, $upper: float) : void
        /**
        * Sets the stiffness value of the specified drive.
        * @param axis The drive axis.
        * @param value The value to set the stiffness to.
        */
        public SetDriveStiffness ($axis: ArticulationDriveAxis, $value: float) : void
        /**
        * Sets the damping value of the specified drive.
        * @param axis The drive axis.
        * @param value The value to set the damping to.
        */
        public SetDriveDamping ($axis: ArticulationDriveAxis, $value: float) : void
        /**
        * Sets the force limit of the specified drive.
        * @param axis The drive axis.
        * @param value The value to set the force limit to.
        */
        public SetDriveForceLimit ($axis: ArticulationDriveAxis, $value: float) : void
        /**
        * Snap the anchor to the closest contact between the connected bodies.
        */
        public SnapAnchorToClosestContact () : void
    }

    /**
    * Behaviours are Components that can be enabled or disabled.
    */
    interface Behaviour {

    }

    /**
    * The floating point dense Jacobian matrix of the articulation body hierarchy.
    */
    class ArticulationJacobian extends System.ValueType {

        /**
        * Number of rows of the matrix is equal to the number of articulation bodies in hierarchy times 6: 3 rows of linearpositional DOF and 3 rows of angularrotational DOF for each body.
        */
        public get rows(): int;
        public set rows(value: int);
        /**
        * Number of columns of the matrix is equal to the total number of all joint degrees of freedom(DOF), plus 6 if ArticulationBody.immovable is false.
        */
        public get columns(): int;
        public set columns(value: int);
        /**
        * List of floats representing Jacobian matrix.
        */
        public get elements(): System_Collections_Generic.List$1<float>;
        public set elements(value: System_Collections_Generic.List$1<float>);

        public constructor ($rows: int, $cols: int)
    }

    /**
    * Coordinates in reduced space.
    */
    class ArticulationReducedSpace extends System.ValueType {

        /**
        * The number of degrees of freedom of a body.
        */
        public dofCount : int

        /**
        * Stores coordinates in reduced space.
        * @param a Coordinate of the first degree of freedom.
        * @param b Coordinate of the second degree of freedom.
        * @param c Coordinate of the third degree of freedom.
        */
        public constructor ($a: float)
        /**
        * Stores coordinates in reduced space.
        * @param a Coordinate of the first degree of freedom.
        * @param b Coordinate of the second degree of freedom.
        * @param c Coordinate of the third degree of freedom.
        */
        public constructor ($a: float, $b: float)
        /**
        * Stores coordinates in reduced space.
        * @param a Coordinate of the first degree of freedom.
        * @param b Coordinate of the second degree of freedom.
        * @param c Coordinate of the third degree of freedom.
        */
        public constructor ($a: float, $b: float, $c: float)
        public get_Item ($i: int) : float
        public set_Item ($i: int, $value: float) : void
    }

    /**
    * An axis of a drive of an ArticulationBody.
    */
    enum ArticulationDriveAxis {
        X = 0,
        Y = 1,
        Z = 2 
    }

    /**
    * The type of the joint that restricts movement of the two connected articulation bodies.
    */
    enum ArticulationJointType {
        FixedJoint = 0,
        PrismaticJoint = 1,
        RevoluteJoint = 2,
        SphericalJoint = 3 
    }

    /**
    * The lock type applied to a particular degree of freedom of an articulation body.
    */
    enum ArticulationDofLock {
        LockedMotion = 0,
        LimitedMotion = 1,
        FreeMotion = 2 
    }

    /**
    * Drive applies forces and torques to the connected bodies.
    */
    class ArticulationDrive extends System.ValueType {

        /**
        * The lower limit of motion for a particular degree of freedom.
        */
        public lowerLimit : float
        /**
        * The upper limit of motion for a particular degree of freedom.
        */
        public upperLimit : float
        /**
        * The stiffness of the spring connected to this drive.
        */
        public stiffness : float
        /**
        * The damping of the spring attached to this drive.
        */
        public damping : float
        /**
        * The maximum force this drive can apply to a body.
        */
        public forceLimit : float
        /**
        * The target value the drive will try to reach.
        */
        public target : float
        /**
        * The velocity of the body this drive will try to reach.
        */
        public targetVelocity : float
        /**
        * Specifies which drive type to use for this drive.
        */
        public driveType : ArticulationDriveType

    }

    /**
    * The drive type applied to a particular drive of an ArticulationBody.
    */
    enum ArticulationDriveType {
        Force = 0,
        Acceleration = 1,
        Target = 2,
        Velocity = 3 
    }

    /**
    * Represents an axis aligned bounding box.
    */
    interface Bounds extends System.IFormattable, System.IEquatable$1<Bounds> {

    }

    /**
    * Physics material describes how to handle colliding objects (friction, bounciness).
    */
    class PhysicMaterial extends Object {

        /**
        * How bouncy is the surface? A value of 0 will not bounce. A value of 1 will bounce without any loss of energy.
        */
        public get bounciness(): float;
        public set bounciness(value: float);
        /**
        * The friction used when already moving.  This value is usually between 0 and 1.
        */
        public get dynamicFriction(): float;
        public set dynamicFriction(value: float);
        /**
        * The friction coefficient used when an object is lying on a surface.
        */
        public get staticFriction(): float;
        public set staticFriction(value: float);
        /**
        * Determines how the friction is combined.
        */
        public get frictionCombine(): PhysicMaterialCombine;
        public set frictionCombine(value: PhysicMaterialCombine);
        /**
        * Determines how the bounciness is combined.
        */
        public get bounceCombine(): PhysicMaterialCombine;
        public set bounceCombine(value: PhysicMaterialCombine);

        /**
        * Creates a new material.
        */
        public constructor ()
        /**
        * Creates a new material named name.
        */
        public constructor ($name: string)
    }

    /**
    * Describes how physics materials of the colliding objects are combined.
    * The friction force as well as the residual bounce impulse are applied symmertrically to both of the colliders in contact, so each pair of overlapping colliders must have a single set of friction and bouciness settings. However, one can set arbitrary physics materials to any colliders. For that particular reason, there is a mechanism that allows the combination of two different sets of properties that correspond to each of the colliders in contact into one set to be used in the solver.
    * Specifying Average, Maximum, Minimum or Multiply as the physics material combine mode, you directly set the function that is used to combine the settings corresponding to the two overlapping colliders into one set of settings that can be used to apply the material effect.
    * Note that there is a special case when the two overlapping colliders have physics materials with different combine modes set. In this particular case, the function that has the highest priority is used. The priority order is as follows: Average < Minimum < Multiply < Maximum. For example, if one material has Average set but the other one has Maximum, then the combine function to be used is Maximum, since it has higher priority.
    */
    enum PhysicMaterialCombine {
        Average = 0,
        Minimum = 2,
        Multiply = 1,
        Maximum = 3 
    }

    /**
    * CollisionFlags is a bitmask returned by CharacterController.Move.
    */
    enum CollisionFlags {
        None = 0,
        Sides = 1,
        Above = 2,
        Below = 4,
        CollidedSides = 1,
        CollidedAbove = 2,
        CollidedBelow = 4 
    }

    /**
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * Describes a collision.
    */
    class Collision extends System.Object {

        /**
        * The total impulse applied to this contact pair to resolve the collision.
        */
        public get impulse(): Vector3;
        /**
        * The relative linear velocity of the two colliding objects (Read Only).
        */
        public get relativeVelocity(): Vector3;
        /**
        * The Rigidbody we hit (Read Only). This is null if the object we hit is a collider with no rigidbody attached.
        */
        public get rigidbody(): Rigidbody;
        /**
        * The ArticulationBody of the collider that your GameObject collides with (Read Only).
        */
        public get articulationBody(): ArticulationBody;
        /**
        * The Rigidbody or ArticulationBody of the collider that your Component collides with (Read Only).
        */
        public get body(): Component;
        /**
        * The Collider we hit (Read Only).
        */
        public get collider(): Collider;
        /**
        * The Transform of the object we hit (Read Only).
        */
        public get transform(): Transform;
        /**
        * The GameObject whose collider you are colliding with. (Read Only).
        */
        public get gameObject(): GameObject;
        /**
        * Gets the number of contacts for this collision.
        */
        public get contactCount(): int;
        /**
        * The contact points generated by the physics engine. You should avoid using this as it produces memory garbage. Use GetContact or GetContacts instead.
        */
        public get contacts(): ContactPoint[];

        public constructor ()
        /**
        * Gets the contact point at the specified index.
        * @param index The index of the contact to retrieve.
        * @returns The contact at the specified index.
        */
        public GetContact ($index: int) : ContactPoint
        /**
        * Retrieves all contact points for this collision.
        * @param contacts An array of ContactPoint used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public GetContacts ($contacts: ContactPoint[]) : int
        public GetContacts ($contacts: System_Collections_Generic.List$1<ContactPoint>) : int
    }

    /**
    * Describes a contact point where the collision occurs.
    */
    class ContactPoint extends System.ValueType {

        /**
        * The point of contact.
        */
        public get point(): Vector3;
        /**
        * Normal of the contact point.
        */
        public get normal(): Vector3;
        /**
        * The impulse applied to this contact pair to resolve the collision.
        */
        public get impulse(): Vector3;
        /**
        * The first collider in contact at the point.
        */
        public get thisCollider(): Collider;
        /**
        * The other collider in contact at the point.
        */
        public get otherCollider(): Collider;
        /**
        * The distance between the colliders at the contact point.
        */
        public get separation(): float;

    }

    /**
    * Constrains movement for a ConfigurableJoint along the 6 axes.
    */
    enum ConfigurableJointMotion {
        Locked = 0,
        Limited = 1,
        Free = 2 
    }

    /**
    * Control ConfigurableJoint's rotation with either X & YZ or Slerp Drive.
    */
    enum RotationDriveMode {
        XYAndZ = 0,
        Slerp = 1 
    }

    /**
    * Global physics properties and helper methods.
    */
    class Physics extends System.Object {

        /**
        * Layer mask constant to select ignore raycast layer.
        */
        public static IgnoreRaycastLayer : int
        /**
        * Layer mask constant to select default raycast layers.
        */
        public static DefaultRaycastLayers : int
        /**
        * Layer mask constant to select all layers.
        */
        public static AllLayers : int
        /**
        * The gravity applied to all rigid bodies in the Scene.
        */
        public static get gravity(): Vector3;
        public static set gravity(value: Vector3);
        /**
        * The default contact offset of the newly created colliders.
        */
        public static get defaultContactOffset(): float;
        public static set defaultContactOffset(value: float);
        /**
        * The mass-normalized energy threshold, below which objects start going to sleep.
        */
        public static get sleepThreshold(): float;
        public static set sleepThreshold(value: float);
        /**
        * Specifies whether queries (raycasts, spherecasts, overlap tests, etc.) hit Triggers by default.
        */
        public static get queriesHitTriggers(): boolean;
        public static set queriesHitTriggers(value: boolean);
        /**
        * Whether physics queries should hit back-face triangles.
        */
        public static get queriesHitBackfaces(): boolean;
        public static set queriesHitBackfaces(value: boolean);
        /**
        * Two colliding objects with a relative velocity below this will not bounce (default 2). Must be positive.
        */
        public static get bounceThreshold(): float;
        public static set bounceThreshold(value: float);
        /**
        * The maximum default velocity needed to move a Rigidbody's collider out of another collider's surface penetration. Must be positive.
        */
        public static get defaultMaxDepenetrationVelocity(): float;
        public static set defaultMaxDepenetrationVelocity(value: float);
        /**
        * The defaultSolverIterations determines how accurately Rigidbody joints and collision contacts are resolved. (default 6). Must be positive.
        */
        public static get defaultSolverIterations(): int;
        public static set defaultSolverIterations(value: int);
        /**
        * The defaultSolverVelocityIterations affects how accurately the Rigidbody joints and collision contacts are resolved. (default 1). Must be positive.
        */
        public static get defaultSolverVelocityIterations(): int;
        public static set defaultSolverVelocityIterations(value: int);
        /**
        * Controls when Unity executes the physics simulation.
        */
        public static get simulationMode(): SimulationMode;
        public static set simulationMode(value: SimulationMode);
        /**
        * Default maximum angular speed of the dynamic Rigidbody, in radians (default 50).
        */
        public static get defaultMaxAngularSpeed(): float;
        public static set defaultMaxAngularSpeed(value: float);
        /**
        * Enables an improved patch friction mode that guarantees static and dynamic friction do not exceed analytical results.
        */
        public static get improvedPatchFriction(): boolean;
        public static set improvedPatchFriction(value: boolean);
        /**
        * Whether or not MonoBehaviour collision messages will be sent by the physics system.
        */
        public static get invokeCollisionCallbacks(): boolean;
        public static set invokeCollisionCallbacks(value: boolean);
        /**
        * The PhysicsScene automatically created when Unity starts.
        */
        public static get defaultPhysicsScene(): PhysicsScene;
        /**
        * Whether or not to automatically sync transform changes with the physics system whenever a Transform component changes.
        */
        public static get autoSyncTransforms(): boolean;
        public static set autoSyncTransforms(value: boolean);
        /**
        * Determines whether the garbage collector should reuse only a single instance of a Collision type for all collision callbacks.
        */
        public static get reuseCollisionCallbacks(): boolean;
        public static set reuseCollisionCallbacks(value: boolean);
        /**
        * Sets the minimum separation distance for cloth inter-collision.
        */
        public static get interCollisionDistance(): float;
        public static set interCollisionDistance(value: float);
        /**
        * Sets the cloth inter-collision stiffness.
        */
        public static get interCollisionStiffness(): float;
        public static set interCollisionStiffness(value: float);
        public static get interCollisionSettingsToggle(): boolean;
        public static set interCollisionSettingsToggle(value: boolean);
        /**
        * Cloth Gravity setting.
        * Set gravity for all cloth components.
        */
        public static get clothGravity(): Vector3;
        public static set clothGravity(value: Vector3);

        public constructor ()
        /**
        * Makes the collision detection system ignore all collisions between collider1 and collider2.
        * @param collider1 Any collider.
        * @param collider2 Another collider you want to have collider1 to start or stop ignoring collisions with.
        * @param ignore Whether or not the collisions between the two colliders should be ignored or not.
        */
        public static IgnoreCollision ($collider1: Collider, $collider2: Collider, $ignore: boolean) : void
        public static IgnoreCollision ($collider1: Collider, $collider2: Collider) : void
        /**
        * Makes the collision detection system ignore all collisions between any collider in layer1 and any collider in layer2.
        * Note that IgnoreLayerCollision will reset the trigger state of affected colliders, so you might receive OnTriggerExit and OnTriggerEnter messages in response to calling this.
        * @methodSwap IgnoreLayerCollision_EBB7509C_H9B170F22
        */
        public static IgnoreLayerCollision ($layer1: int, $layer2: int, $ignore: boolean) : void
        /**
        * @methodSwap IgnoreLayerCollision_EBB7509C_H2CFB2EE5
        */
        public static IgnoreLayerCollision ($layer1: int, $layer2: int) : void
        /**
        * Are collisions between layer1 and layer2 being ignored?
        */
        public static GetIgnoreLayerCollision ($layer1: int, $layer2: int) : boolean
        /**
        * Checks whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
        * @param collider1 The first collider to compare to collider2.
        * @param collider2 The second collider to compare to collider1.
        * @returns Whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
        */
        public static GetIgnoreCollision ($collider1: Collider, $collider2: Collider) : boolean
        /**
        * Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
        * @param origin The starting point of the ray in world coordinates.
        * @param direction The direction of the ray.
        * @param maxDistance The max distance the ray should check for collisions.
        * @param layerMask A that is used to selectively ignore Colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns Returns true if the ray intersects with a Collider, otherwise false.
        * @methodSwap Raycast_EBB7509C_H995216DC
        */
        public static Raycast ($origin: Vector3, $direction: Vector3, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap Raycast_EBB7509C_H301080D7
        */
        public static Raycast ($origin: Vector3, $direction: Vector3, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap Raycast_EBB7509C_H36932E5C
        */
        public static Raycast ($origin: Vector3, $direction: Vector3, $maxDistance: float) : boolean
        public static Raycast ($origin: Vector3, $direction: Vector3) : boolean
        /**
        * Casts a ray against all colliders in the Scene and returns detailed information on what was hit.
        * @param origin The starting point of the ray in world coordinates.
        * @param direction The direction of the ray.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the closest collider was hit. (Additional resources: RaycastHit).
        * @param maxDistance The max distance the ray should check for collisions.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns Returns true when the ray intersects any collider, otherwise false.
        * @methodSwap Raycast_EBB7509C_B35087BB
        */
        public static Raycast ($origin: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap Raycast_EBB7509C_H391BDB56
        */
        public static Raycast ($origin: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap Raycast_EBB7509C_C3C732F5
        */
        public static Raycast ($origin: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float) : boolean
        public static Raycast ($origin: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>) : boolean
        /**
        * Same as above using ray.origin and ray.direction instead of origin and direction.
        * @param ray The starting point and direction of the ray.
        * @param maxDistance The max distance the ray should check for collisions.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns Returns true when the ray intersects any collider, otherwise false.
        * @methodSwap Raycast_EBB7509C_F6A8F80D
        */
        public static Raycast ($ray: Ray, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap Raycast_EBB7509C_DD46DFA8
        */
        public static Raycast ($ray: Ray, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap Raycast_EBB7509C_H7248904F
        */
        public static Raycast ($ray: Ray, $maxDistance: float) : boolean
        public static Raycast ($ray: Ray) : boolean
        /**
        * Same as above using ray.origin and ray.direction instead of origin and direction.
        * @param ray The starting point and direction of the ray.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the closest collider was hit. (Additional resources: RaycastHit).
        * @param maxDistance The max distance the ray should check for collisions.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns Returns true when the ray intersects any collider, otherwise false.
        * @methodSwap Raycast_EBB7509C_H47A9F9A2
        */
        public static Raycast ($ray: Ray, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap Raycast_EBB7509C_C446A765
        */
        public static Raycast ($ray: Ray, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap Raycast_EBB7509C_FFE24EBA
        */
        public static Raycast ($ray: Ray, $hitInfo: $Ref<RaycastHit>, $maxDistance: float) : boolean
        public static Raycast ($ray: Ray, $hitInfo: $Ref<RaycastHit>) : boolean
        /**
        * Returns true if there is any collider intersecting the line between start and end.
        * @param start Start point.
        * @param end End point.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @methodSwap Linecast_EBB7509C_EA0AAB79
        */
        public static Linecast ($start: Vector3, $end: Vector3, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap Linecast_EBB7509C_H27A832CC
        */
        public static Linecast ($start: Vector3, $end: Vector3, $layerMask: int) : boolean
        public static Linecast ($start: Vector3, $end: Vector3) : boolean
        /**
        * Returns true if there is any collider intersecting the line between start and end.
        * @param start Start point.
        * @param end End point.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
        * @methodSwap Linecast_EBB7509C_H147DF230
        */
        public static Linecast ($start: Vector3, $end: Vector3, $hitInfo: $Ref<RaycastHit>, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap Linecast_EBB7509C_H6A76AF53
        */
        public static Linecast ($start: Vector3, $end: Vector3, $hitInfo: $Ref<RaycastHit>, $layerMask: int) : boolean
        public static Linecast ($start: Vector3, $end: Vector3, $hitInfo: $Ref<RaycastHit>) : boolean
        /**
        * Casts a capsule against all colliders in the Scene and returns detailed information on what was hit.
        * @param point1 The center of the sphere at the start of the capsule.
        * @param point2 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param direction The direction into which to sweep the capsule.
        * @param maxDistance The max length of the sweep.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True when the capsule sweep intersects any collider, otherwise false.
        * @methodSwap CapsuleCast_EBB7509C_H5FB6CCD2
        */
        public static CapsuleCast ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap CapsuleCast_EBB7509C_H8212595
        */
        public static CapsuleCast ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap CapsuleCast_EBB7509C_H2AA34C4A
        */
        public static CapsuleCast ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $maxDistance: float) : boolean
        /**
        * @methodSwap CapsuleCast_EBB7509C_H9635F60D
        */
        public static CapsuleCast ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3) : boolean
        /**
        * @param point1 The center of the sphere at the start of the capsule.
        * @param point2 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param direction The direction into which to sweep the capsule.
        * @param maxDistance The max length of the sweep.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @methodSwap CapsuleCast_EBB7509C_H5887EFF5
        */
        public static CapsuleCast ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap CapsuleCast_EBB7509C_B3F46AB0
        */
        public static CapsuleCast ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap CapsuleCast_EBB7509C_H6C66E557
        */
        public static CapsuleCast ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float) : boolean
        /**
        * @methodSwap CapsuleCast_EBB7509C_H511432DE
        */
        public static CapsuleCast ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $hitInfo: $Ref<RaycastHit>) : boolean
        /**
        * Casts a sphere along a ray and returns detailed information on what was hit.
        * @param origin The center of the sphere at the start of the sweep.
        * @param radius The radius of the sphere.
        * @param direction The direction into which to sweep the sphere.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
        * @param maxDistance The max length of the cast.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True when the sphere sweep intersects any collider, otherwise false.
        * @methodSwap SphereCast_EBB7509C_H12C1677C
        */
        public static SphereCast ($origin: Vector3, $radius: float, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap SphereCast_EBB7509C_FA6F2337
        */
        public static SphereCast ($origin: Vector3, $radius: float, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap SphereCast_EBB7509C_H4265233C
        */
        public static SphereCast ($origin: Vector3, $radius: float, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: float) : boolean
        /**
        * @methodSwap SphereCast_EBB7509C_DB53822B
        */
        public static SphereCast ($origin: Vector3, $radius: float, $direction: Vector3, $hitInfo: $Ref<RaycastHit>) : boolean
        /**
        * Casts a sphere along a ray and returns detailed information on what was hit.
        * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
        * @param radius The radius of the sphere.
        * @param maxDistance The max length of the cast.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True when the sphere sweep intersects any collider, otherwise false.
        * @methodSwap SphereCast_EBB7509C_H422D6C90
        */
        public static SphereCast ($ray: Ray, $radius: float, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap SphereCast_EBB7509C_H3C15AFF3
        */
        public static SphereCast ($ray: Ray, $radius: float, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap SphereCast_EBB7509C_E13B8B80
        */
        public static SphereCast ($ray: Ray, $radius: float, $maxDistance: float) : boolean
        /**
        * @methodSwap SphereCast_EBB7509C_H7248904F
        */
        public static SphereCast ($ray: Ray, $radius: float) : boolean
        /**
        * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
        * @param radius The radius of the sphere.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
        * @param maxDistance The max length of the cast.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @methodSwap SphereCast_EBB7509C_H9A0C2E97
        */
        public static SphereCast ($ray: Ray, $radius: float, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap SphereCast_EBB7509C_H82241D8A
        */
        public static SphereCast ($ray: Ray, $radius: float, $hitInfo: $Ref<RaycastHit>, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap SphereCast_EBB7509C_H58270D21
        */
        public static SphereCast ($ray: Ray, $radius: float, $hitInfo: $Ref<RaycastHit>, $maxDistance: float) : boolean
        /**
        * @methodSwap SphereCast_EBB7509C_D7045A1C
        */
        public static SphereCast ($ray: Ray, $radius: float, $hitInfo: $Ref<RaycastHit>) : boolean
        /**
        * Casts the box along a ray and returns detailed information on what was hit.
        * @param center Center of the box.
        * @param halfExtents Half the size of the box in each dimension.
        * @param direction The direction in which to cast the box.
        * @param orientation Rotation of the box.
        * @param maxDistance The max length of the cast.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True, if any intersections were found.
        * @methodSwap BoxCast_EBB7509C_H15B94360
        */
        public static BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap BoxCast_EBB7509C_H23A3203
        */
        public static BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap BoxCast_EBB7509C_F79422B0
        */
        public static BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: float) : boolean
        public static BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion) : boolean
        public static BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3) : boolean
        /**
        * Casts the box along a ray and returns detailed information on what was hit.
        * @param center Center of the box.
        * @param halfExtents Half the size of the box in each dimension.
        * @param direction The direction in which to cast the box.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
        * @param orientation Rotation of the box.
        * @param maxDistance The max length of the cast.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True, if any intersections were found.
        * @methodSwap BoxCast_EBB7509C_H7B131AA7
        */
        public static BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $orientation: Quaternion, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap BoxCast_EBB7509C_H78D2459A
        */
        public static BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $orientation: Quaternion, $maxDistance: float, $layerMask: int) : boolean
        /**
        * @methodSwap BoxCast_EBB7509C_H7F42E251
        */
        public static BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $orientation: Quaternion, $maxDistance: float) : boolean
        public static BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $orientation: Quaternion) : boolean
        public static BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>) : boolean
        /**
        * Additional resources: Raycast.
        * @param origin The starting point of the ray in world coordinates.
        * @param direction The direction of the ray.
        * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
        * @param layermask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @methodSwap RaycastAll_EBB7509C_H995216DC
        */
        public static RaycastAll ($origin: Vector3, $direction: Vector3, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : RaycastHit[]
        /**
        * @methodSwap RaycastAll_EBB7509C_H301080D7
        */
        public static RaycastAll ($origin: Vector3, $direction: Vector3, $maxDistance: float, $layerMask: int) : RaycastHit[]
        /**
        * @methodSwap RaycastAll_EBB7509C_H36932E5C
        */
        public static RaycastAll ($origin: Vector3, $direction: Vector3, $maxDistance: float) : RaycastHit[]
        public static RaycastAll ($origin: Vector3, $direction: Vector3) : RaycastHit[]
        /**
        * Casts a ray through the Scene and returns all hits. Note that order of the results is undefined.
        * @param ray The starting point and direction of the ray.
        * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns An array of RaycastHit objects. Note that the order of the results is undefined.
        * @methodSwap RaycastAll_EBB7509C_F6A8F80D
        */
        public static RaycastAll ($ray: Ray, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : RaycastHit[]
        /**
        * @methodSwap RaycastAll_EBB7509C_DD46DFA8
        */
        public static RaycastAll ($ray: Ray, $maxDistance: float, $layerMask: int) : RaycastHit[]
        /**
        * @methodSwap RaycastAll_EBB7509C_H7248904F
        */
        public static RaycastAll ($ray: Ray, $maxDistance: float) : RaycastHit[]
        public static RaycastAll ($ray: Ray) : RaycastHit[]
        /**
        * Cast a ray through the Scene and store the hits into the buffer.
        * @param ray The starting point and direction of the ray.
        * @param results The buffer to store the hits into.
        * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of hits stored into the results buffer.
        * @methodSwap RaycastNonAlloc_EBB7509C_H3ECF5BB2
        */
        public static RaycastNonAlloc ($ray: Ray, $results: RaycastHit[], $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : int
        /**
        * @methodSwap RaycastNonAlloc_EBB7509C_B30F535
        */
        public static RaycastNonAlloc ($ray: Ray, $results: RaycastHit[], $maxDistance: float, $layerMask: int) : int
        /**
        * @methodSwap RaycastNonAlloc_EBB7509C_A9AAB26A
        */
        public static RaycastNonAlloc ($ray: Ray, $results: RaycastHit[], $maxDistance: float) : int
        public static RaycastNonAlloc ($ray: Ray, $results: RaycastHit[]) : int
        /**
        * Cast a ray through the Scene and store the hits into the buffer.
        * @param origin The starting point and direction of the ray.
        * @param results The buffer to store the hits into.
        * @param direction The direction of the ray.
        * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @returns The amount of hits stored into the results buffer.
        * @methodSwap RaycastNonAlloc_EBB7509C_F8A26AEB
        */
        public static RaycastNonAlloc ($origin: Vector3, $direction: Vector3, $results: RaycastHit[], $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : int
        /**
        * @methodSwap RaycastNonAlloc_EBB7509C_H48263186
        */
        public static RaycastNonAlloc ($origin: Vector3, $direction: Vector3, $results: RaycastHit[], $maxDistance: float, $layerMask: int) : int
        /**
        * @methodSwap RaycastNonAlloc_EBB7509C_H41A8BE45
        */
        public static RaycastNonAlloc ($origin: Vector3, $direction: Vector3, $results: RaycastHit[], $maxDistance: float) : int
        public static RaycastNonAlloc ($origin: Vector3, $direction: Vector3, $results: RaycastHit[]) : int
        /**
        * Like Physics.CapsuleCast, but this function will return all hits the capsule sweep intersects.
        * @param point1 The center of the sphere at the start of the capsule.
        * @param point2 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param direction The direction into which to sweep the capsule.
        * @param maxDistance The max length of the sweep.
        * @param layermask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns An array of all colliders hit in the sweep.
        * @methodSwap CapsuleCastAll_EBB7509C_H5FB6CCD2
        */
        public static CapsuleCastAll ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : RaycastHit[]
        /**
        * @methodSwap CapsuleCastAll_EBB7509C_H8212595
        */
        public static CapsuleCastAll ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $maxDistance: float, $layerMask: int) : RaycastHit[]
        /**
        * @methodSwap CapsuleCastAll_EBB7509C_H2AA34C4A
        */
        public static CapsuleCastAll ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $maxDistance: float) : RaycastHit[]
        /**
        * @methodSwap CapsuleCastAll_EBB7509C_H9635F60D
        */
        public static CapsuleCastAll ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3) : RaycastHit[]
        /**
        * Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects.
        * @param origin The center of the sphere at the start of the sweep.
        * @param radius The radius of the sphere.
        * @param direction The direction in which to sweep the sphere.
        * @param maxDistance The max length of the sweep.
        * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns An array of all colliders hit in the sweep.
        * @methodSwap SphereCastAll_EBB7509C_H4BFFBF63
        */
        public static SphereCastAll ($origin: Vector3, $radius: float, $direction: Vector3, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : RaycastHit[]
        /**
        * @methodSwap SphereCastAll_EBB7509C_DED271DE
        */
        public static SphereCastAll ($origin: Vector3, $radius: float, $direction: Vector3, $maxDistance: float, $layerMask: int) : RaycastHit[]
        /**
        * @methodSwap SphereCastAll_EBB7509C_H6F32FB5D
        */
        public static SphereCastAll ($origin: Vector3, $radius: float, $direction: Vector3, $maxDistance: float) : RaycastHit[]
        /**
        * @methodSwap SphereCastAll_EBB7509C_H3597CA28
        */
        public static SphereCastAll ($origin: Vector3, $radius: float, $direction: Vector3) : RaycastHit[]
        /**
        * Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects.
        * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
        * @param radius The radius of the sphere.
        * @param maxDistance The max length of the sweep.
        * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @methodSwap SphereCastAll_EBB7509C_H422D6C90
        */
        public static SphereCastAll ($ray: Ray, $radius: float, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : RaycastHit[]
        /**
        * @methodSwap SphereCastAll_EBB7509C_H3C15AFF3
        */
        public static SphereCastAll ($ray: Ray, $radius: float, $maxDistance: float, $layerMask: int) : RaycastHit[]
        /**
        * @methodSwap SphereCastAll_EBB7509C_E13B8B80
        */
        public static SphereCastAll ($ray: Ray, $radius: float, $maxDistance: float) : RaycastHit[]
        /**
        * @methodSwap SphereCastAll_EBB7509C_H7248904F
        */
        public static SphereCastAll ($ray: Ray, $radius: float) : RaycastHit[]
        /**
        * Check the given capsule against the physics world and return all overlapping colliders.
        * @param point0 The center of the sphere at the start of the capsule.
        * @param point1 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns Colliders touching or inside the capsule.
        * @methodSwap OverlapCapsule_EBB7509C_H995216DC
        */
        public static OverlapCapsule ($point0: Vector3, $point1: Vector3, $radius: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : Collider[]
        /**
        * @methodSwap OverlapCapsule_EBB7509C_H301080D7
        */
        public static OverlapCapsule ($point0: Vector3, $point1: Vector3, $radius: float, $layerMask: int) : Collider[]
        /**
        * @methodSwap OverlapCapsule_EBB7509C_H36932E5C
        */
        public static OverlapCapsule ($point0: Vector3, $point1: Vector3, $radius: float) : Collider[]
        /**
        * Computes and stores colliders touching or inside the sphere.
        * @param position Center of the sphere.
        * @param radius Radius of the sphere.
        * @param layerMask A defines which layers of colliders to include in the query.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns Returns an array with all colliders touching or inside the sphere.
        * @methodSwap OverlapSphere_EBB7509C_H6908D9AD
        */
        public static OverlapSphere ($position: Vector3, $radius: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : Collider[]
        /**
        * @methodSwap OverlapSphere_EBB7509C_FF2D8D88
        */
        public static OverlapSphere ($position: Vector3, $radius: float, $layerMask: int) : Collider[]
        /**
        * @methodSwap OverlapSphere_EBB7509C_H75CC56AF
        */
        public static OverlapSphere ($position: Vector3, $radius: float) : Collider[]
        /**
        * Simulate physics in the Scene.
        * @param step The time to advance physics by.
        */
        public static Simulate ($step: float) : void
        /**
        * Apply Transform changes to the physics engine.
        */
        public static SyncTransforms () : void
        /**
        * Compute the minimal translation required to separate the given colliders apart at specified poses.
        * @param colliderA The first collider.
        * @param positionA Position of the first collider.
        * @param rotationA Rotation of the first collider.
        * @param colliderB The second collider.
        * @param positionB Position of the second collider.
        * @param rotationB Rotation of the second collider.
        * @param direction Direction along which the translation required to separate the colliders apart is minimal.
        * @param distance The distance along direction that is required to separate the colliders apart.
        * @returns True, if the colliders overlap at the given poses.
        */
        public static ComputePenetration ($colliderA: Collider, $positionA: Vector3, $rotationA: Quaternion, $colliderB: Collider, $positionB: Vector3, $rotationB: Quaternion, $direction: $Ref<Vector3>, $distance: $Ref<float>) : boolean
        /**
        * Returns a point on the given collider that is closest to the specified location.
        * @param point Location you want to find the closest point to.
        * @param collider The collider that you find the closest point on.
        * @param position The position of the collider.
        * @param rotation The rotation of the collider.
        * @returns The point on the collider that is closest to the specified location.
        */
        public static ClosestPoint ($point: Vector3, $collider: Collider, $position: Vector3, $rotation: Quaternion) : Vector3
        /**
        * Computes and stores colliders touching or inside the sphere into the provided buffer.
        * @param position Center of the sphere.
        * @param radius Radius of the sphere.
        * @param results The buffer to store the results into.
        * @param layerMask A defines which layers of colliders to include in the query.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns Returns the amount of colliders stored into the results buffer.
        * @methodSwap OverlapSphereNonAlloc_EBB7509C_H23B6B15C
        */
        public static OverlapSphereNonAlloc ($position: Vector3, $radius: float, $results: Collider[], $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : int
        /**
        * @methodSwap OverlapSphereNonAlloc_EBB7509C_F7CA9457
        */
        public static OverlapSphereNonAlloc ($position: Vector3, $radius: float, $results: Collider[], $layerMask: int) : int
        /**
        * @methodSwap OverlapSphereNonAlloc_EBB7509C_A2294DDC
        */
        public static OverlapSphereNonAlloc ($position: Vector3, $radius: float, $results: Collider[]) : int
        /**
        * Returns true if there are any colliders overlapping the sphere defined by position and radius in world coordinates.
        * @param position Center of the sphere.
        * @param radius Radius of the sphere.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @methodSwap CheckSphere_EBB7509C_H6908D9AD
        */
        public static CheckSphere ($position: Vector3, $radius: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap CheckSphere_EBB7509C_FF2D8D88
        */
        public static CheckSphere ($position: Vector3, $radius: float, $layerMask: int) : boolean
        /**
        * @methodSwap CheckSphere_EBB7509C_H75CC56AF
        */
        public static CheckSphere ($position: Vector3, $radius: float) : boolean
        /**
        * Casts a capsule against all colliders in the Scene and returns detailed information on what was hit into the buffer.
        * @param point1 The center of the sphere at the start of the capsule.
        * @param point2 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param direction The direction into which to sweep the capsule.
        * @param results The buffer to store the hits into.
        * @param maxDistance The max length of the sweep.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of hits stored into the buffer.
        * @methodSwap CapsuleCastNonAlloc_EBB7509C_H5007A7ED
        */
        public static CapsuleCastNonAlloc ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $results: RaycastHit[], $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : int
        /**
        * @methodSwap CapsuleCastNonAlloc_EBB7509C_H4CBA7948
        */
        public static CapsuleCastNonAlloc ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $results: RaycastHit[], $maxDistance: float, $layerMask: int) : int
        /**
        * @methodSwap CapsuleCastNonAlloc_EBB7509C_H3CECCDEF
        */
        public static CapsuleCastNonAlloc ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $results: RaycastHit[], $maxDistance: float) : int
        /**
        * @methodSwap CapsuleCastNonAlloc_EBB7509C_H91BB0496
        */
        public static CapsuleCastNonAlloc ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $results: RaycastHit[]) : int
        /**
        * Cast sphere along the direction and store the results into buffer.
        * @param origin The center of the sphere at the start of the sweep.
        * @param radius The radius of the sphere.
        * @param direction The direction in which to sweep the sphere.
        * @param results The buffer to save the hits into.
        * @param maxDistance The max length of the sweep.
        * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of hits stored into the results buffer.
        * @methodSwap SphereCastNonAlloc_EBB7509C_CEEEF3C4
        */
        public static SphereCastNonAlloc ($origin: Vector3, $radius: float, $direction: Vector3, $results: RaycastHit[], $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : int
        /**
        * @methodSwap SphereCastNonAlloc_EBB7509C_H5B35E73F
        */
        public static SphereCastNonAlloc ($origin: Vector3, $radius: float, $direction: Vector3, $results: RaycastHit[], $maxDistance: float, $layerMask: int) : int
        /**
        * @methodSwap SphereCastNonAlloc_EBB7509C_E00128A4
        */
        public static SphereCastNonAlloc ($origin: Vector3, $radius: float, $direction: Vector3, $results: RaycastHit[], $maxDistance: float) : int
        /**
        * @methodSwap SphereCastNonAlloc_EBB7509C_H1BC43813
        */
        public static SphereCastNonAlloc ($origin: Vector3, $radius: float, $direction: Vector3, $results: RaycastHit[]) : int
        /**
        * Cast sphere along the direction and store the results into buffer.
        * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
        * @param radius The radius of the sphere.
        * @param results The buffer to save the results to.
        * @param maxDistance The max length of the sweep.
        * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of hits stored into the results buffer.
        * @methodSwap SphereCastNonAlloc_EBB7509C_H819EDA87
        */
        public static SphereCastNonAlloc ($ray: Ray, $radius: float, $results: RaycastHit[], $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : int
        /**
        * @methodSwap SphereCastNonAlloc_EBB7509C_BBDE23A
        */
        public static SphereCastNonAlloc ($ray: Ray, $radius: float, $results: RaycastHit[], $maxDistance: float, $layerMask: int) : int
        /**
        * @methodSwap SphereCastNonAlloc_EBB7509C_H1FBC7871
        */
        public static SphereCastNonAlloc ($ray: Ray, $radius: float, $results: RaycastHit[], $maxDistance: float) : int
        /**
        * @methodSwap SphereCastNonAlloc_EBB7509C_H49FBB8AC
        */
        public static SphereCastNonAlloc ($ray: Ray, $radius: float, $results: RaycastHit[]) : int
        /**
        * Checks if any colliders overlap a capsule-shaped volume in world space.
        * @param start The center of the sphere at the start of the capsule.
        * @param end The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param layermask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @methodSwap CheckCapsule_EBB7509C_H995216DC
        */
        public static CheckCapsule ($start: Vector3, $end: Vector3, $radius: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap CheckCapsule_EBB7509C_H301080D7
        */
        public static CheckCapsule ($start: Vector3, $end: Vector3, $radius: float, $layerMask: int) : boolean
        /**
        * @methodSwap CheckCapsule_EBB7509C_H36932E5C
        */
        public static CheckCapsule ($start: Vector3, $end: Vector3, $radius: float) : boolean
        /**
        * Check whether the given box overlaps with other colliders or not.
        * @param center Center of the box.
        * @param halfExtents Half the size of the box in each dimension.
        * @param orientation Rotation of the box.
        * @param layermask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True, if the box overlaps with any colliders.
        * @methodSwap CheckBox_EBB7509C_D606E0B0
        */
        public static CheckBox ($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $layermask: int, $queryTriggerInteraction: QueryTriggerInteraction) : boolean
        /**
        * @methodSwap CheckBox_EBB7509C_H944BDED3
        */
        public static CheckBox ($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $layerMask: int) : boolean
        public static CheckBox ($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion) : boolean
        public static CheckBox ($center: Vector3, $halfExtents: Vector3) : boolean
        /**
        * Find all colliders touching or inside of the given box.
        * @param center Center of the box.
        * @param halfExtents Half of the size of the box in each dimension.
        * @param orientation Rotation of the box.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns Colliders that overlap with the given box.
        * @methodSwap OverlapBox_EBB7509C_D606E0B0
        */
        public static OverlapBox ($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : Collider[]
        /**
        * @methodSwap OverlapBox_EBB7509C_H944BDED3
        */
        public static OverlapBox ($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $layerMask: int) : Collider[]
        public static OverlapBox ($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion) : Collider[]
        public static OverlapBox ($center: Vector3, $halfExtents: Vector3) : Collider[]
        /**
        * Find all colliders touching or inside of the given box, and store them into the buffer.
        * @param center Center of the box.
        * @param halfExtents Half of the size of the box in each dimension.
        * @param results The buffer to store the results in.
        * @param orientation Rotation of the box.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of colliders stored in results.
        * @methodSwap OverlapBoxNonAlloc_EBB7509C_BABEBCA9
        */
        public static OverlapBoxNonAlloc ($center: Vector3, $halfExtents: Vector3, $results: Collider[], $orientation: Quaternion, $mask: int, $queryTriggerInteraction: QueryTriggerInteraction) : int
        /**
        * @methodSwap OverlapBoxNonAlloc_EBB7509C_H8E94FFC
        */
        public static OverlapBoxNonAlloc ($center: Vector3, $halfExtents: Vector3, $results: Collider[], $orientation: Quaternion, $mask: int) : int
        public static OverlapBoxNonAlloc ($center: Vector3, $halfExtents: Vector3, $results: Collider[], $orientation: Quaternion) : int
        public static OverlapBoxNonAlloc ($center: Vector3, $halfExtents: Vector3, $results: Collider[]) : int
        /**
        * Cast the box along the direction, and store hits in the provided buffer.
        * @param center Center of the box.
        * @param halfExtents Half the size of the box in each dimension.
        * @param direction The direction in which to cast the box.
        * @param results The buffer to store the results in.
        * @param orientation Rotation of the box.
        * @param maxDistance The max length of the cast.
        * @param layermask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of hits stored to the results buffer.
        * @methodSwap BoxCastNonAlloc_EBB7509C_H6866036F
        */
        public static BoxCastNonAlloc ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[], $orientation: Quaternion, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : int
        public static BoxCastNonAlloc ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[], $orientation: Quaternion) : int
        /**
        * @methodSwap BoxCastNonAlloc_EBB7509C_D9DD5559
        */
        public static BoxCastNonAlloc ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[], $orientation: Quaternion, $maxDistance: float) : int
        /**
        * @methodSwap BoxCastNonAlloc_EBB7509C_DB02B642
        */
        public static BoxCastNonAlloc ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[], $orientation: Quaternion, $maxDistance: float, $layerMask: int) : int
        public static BoxCastNonAlloc ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[]) : int
        /**
        * Like Physics.BoxCast, but returns all hits.
        * @param center Center of the box.
        * @param halfExtents Half the size of the box in each dimension.
        * @param direction The direction in which to cast the box.
        * @param orientation Rotation of the box.
        * @param maxDistance The max length of the cast.
        * @param layermask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns All colliders that were hit.
        * @methodSwap BoxCastAll_EBB7509C_H15B94360
        */
        public static BoxCastAll ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: float, $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : RaycastHit[]
        /**
        * @methodSwap BoxCastAll_EBB7509C_H23A3203
        */
        public static BoxCastAll ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: float, $layerMask: int) : RaycastHit[]
        /**
        * @methodSwap BoxCastAll_EBB7509C_F79422B0
        */
        public static BoxCastAll ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: float) : RaycastHit[]
        public static BoxCastAll ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion) : RaycastHit[]
        public static BoxCastAll ($center: Vector3, $halfExtents: Vector3, $direction: Vector3) : RaycastHit[]
        /**
        * Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer.
        * @param point0 The center of the sphere at the start of the capsule.
        * @param point1 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param results The buffer to store the results into.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of entries written to the buffer.
        * @methodSwap OverlapCapsuleNonAlloc_EBB7509C_D8B60C5D
        */
        public static OverlapCapsuleNonAlloc ($point0: Vector3, $point1: Vector3, $radius: float, $results: Collider[], $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : int
        /**
        * @methodSwap OverlapCapsuleNonAlloc_EBB7509C_E694EA78
        */
        public static OverlapCapsuleNonAlloc ($point0: Vector3, $point1: Vector3, $radius: float, $results: Collider[], $layerMask: int) : int
        /**
        * @methodSwap OverlapCapsuleNonAlloc_EBB7509C_H5BFCE4FF
        */
        public static OverlapCapsuleNonAlloc ($point0: Vector3, $point1: Vector3, $radius: float, $results: Collider[]) : int
        /**
        * Rebuild the broadphase interest regions as well as set the world boundaries.
        * @param worldBounds Boundaries of the physics world.
        * @param subdivisions How many cells to create along x and z axis.
        */
        public static RebuildBroadphaseRegions ($worldBounds: Bounds, $subdivisions: int) : void
        /**
        * Prepares the mesh for use with a MeshCollider.
        * @param meshID The instance ID of the mesh to bake collision data from.
        * @param convex A flag to indicate whether to bake convex geometry or not.
        * @param cookingOptions The cooking options to use when you bake the mesh.
        * @methodSwap BakeMesh_EBB7509C_DF88082D
        */
        public static BakeMesh ($meshID: int, $convex: boolean, $cookingOptions: MeshColliderCookingOptions) : void
        /**
        * Prepares the mesh for use with a MeshCollider and uses default cooking options.
        * @param meshID The instance ID of the mesh to bake collision data from.
        * @param convex A flag to indicate whether to bake convex geometry or not.
        * @methodSwap BakeMesh_EBB7509C_H5B11DF19
        */
        public static BakeMesh ($meshID: int, $convex: boolean) : void
        public static add_ContactModifyEvent ($value: System.Action$2<PhysicsScene, Unity_Collections.NativeArray$1<ModifiableContactPair>>) : void
        public static add_ContactModifyEventCCD ($value: System.Action$2<PhysicsScene, Unity_Collections.NativeArray$1<ModifiableContactPair>>) : void
        public static add_ContactEvent ($value: UnityEngine_Physics.ContactEventDelegate) : void
        public static remove_ContactModifyEvent ($value: System.Action$2<PhysicsScene, Unity_Collections.NativeArray$1<ModifiableContactPair>>) : void
        public static remove_ContactModifyEventCCD ($value: System.Action$2<PhysicsScene, Unity_Collections.NativeArray$1<ModifiableContactPair>>) : void
        public static remove_ContactEvent ($value: UnityEngine_Physics.ContactEventDelegate) : void
    }

    /**
    * A selection of modes that control when Unity executes the physics simulation.
    */
    enum SimulationMode {
        FixedUpdate = 0,
        Update = 1,
        Script = 2 
    }

    /**
    * Represents a single instance of a 3D physics Scene.
    */
    class PhysicsScene extends System.ValueType implements System.IEquatable$1<PhysicsScene> {

        public ToString () : string
        public GetHashCode () : int
        public Equals ($other: any) : boolean
        public Equals ($other: PhysicsScene) : boolean
        /**
        * Gets whether the physics Scene is valid or not.
        * @returns Is the physics scene valid?
        */
        public IsValid () : boolean
        /**
        * Gets whether the physics Scene is empty or not.
        * @returns Is the physics Scene is empty?
        */
        public IsEmpty () : boolean
        /**
        * Simulate physics associated with this PhysicsScene.
        * @param step The time to advance physics by.
        * @returns Whether the simulation was run or not.  Running the simulation during physics callbacks will always fail.
        */
        public Simulate ($step: float) : void
        /**
        * Interpolates Rigidbodies in this PhysicsScene.
        */
        public InterpolateBodies () : void
        /**
        * Resets the Transform positions of interpolated and extrapolated Rigidbodies in this PhysicsScene to Rigidbody.position and Transform rotations to Rigidbody.rotation.
        */
        public ResetInterpolationPoses () : void
        /**
        * Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
        * @param origin The starting point of the ray in world coordinates.
        * @param direction The direction of the ray.
        * @param maxDistance The max distance the ray should check for collisions.
        * @param layerMask A that is used to selectively ignore Colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True if the ray intersects with a Collider, otherwise false.
        * @methodSwap Raycast_EBB7509C_H995216DC
        */
        public Raycast ($origin: Vector3, $direction: Vector3, $maxDistance?: float, $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : boolean
        /**
        * Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
        * @param origin The starting point of the ray in world coordinates.
        * @param direction The direction of the ray.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
        * @param maxDistance The max distance the ray should check for collisions.
        * @param layerMask A that is used to selectively ignore Colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True if the ray intersects with a Collider, otherwise false.
        * @methodSwap Raycast_EBB7509C_B35087BB
        */
        public Raycast ($origin: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance?: float, $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : boolean
        /**
        * Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
        * @param origin The starting point and direction of the ray.
        * @param direction The direction of the ray.
        * @param raycastHits The buffer to store the hits into.
        * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction The amount of hits stored into the results buffer.
        * @returns True if the ray intersects with a Collider, otherwise false.
        * @methodSwap Raycast_EBB7509C_F8A26AEB
        */
        public Raycast ($origin: Vector3, $direction: Vector3, $raycastHits: RaycastHit[], $maxDistance?: float, $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : int
        /**
        * Casts a capsule against all colliders in this physics scene and returns detailed information on what was hit.
        * @param point1 The center of the sphere at the start of the capsule.
        * @param point2 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param direction The direction into which to sweep the capsule.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
        * @param maxDistance The max length of the sweep.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True when the capsule sweep intersects any collider, otherwise false.
        * @methodSwap CapsuleCast_EBB7509C_H5887EFF5
        */
        public CapsuleCast ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance?: float, $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : boolean
        /**
        * Casts a capsule against all colliders in this physics scene and returns detailed information on what was hit.
        * @param point1 The center of the sphere at the start of the capsule.
        * @param point2 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param direction The direction into which to sweep the capsule.
        * @param results The buffer to store the results in.
        * @param maxDistance The max length of the sweep.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of hits stored to the results buffer.
        * @methodSwap CapsuleCast_EBB7509C_H5007A7ED
        */
        public CapsuleCast ($point1: Vector3, $point2: Vector3, $radius: float, $direction: Vector3, $results: RaycastHit[], $maxDistance?: float, $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : int
        /**
        * Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer.
        * @param point0 The center of the sphere at the start of the capsule.
        * @param point1 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param results The buffer to store the results into.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of entries written to the buffer.
        */
        public OverlapCapsule ($point0: Vector3, $point1: Vector3, $radius: float, $results: Collider[], $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : int
        /**
        * Casts a sphere along a ray and returns detailed information on what was hit.
        * @param origin The center of the sphere at the start of the sweep.
        * @param radius The radius of the sphere.
        * @param direction The direction into which to sweep the sphere.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
        * @param maxDistance The max length of the cast.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True when the sphere sweep intersects any collider, otherwise false.
        * @methodSwap SphereCast_EBB7509C_H12C1677C
        */
        public SphereCast ($origin: Vector3, $radius: float, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance?: float, $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : boolean
        /**
        * Cast sphere along the direction and store the results into buffer.
        * @param origin The center of the sphere at the start of the sweep.
        * @param radius The radius of the sphere.
        * @param direction The direction into which to sweep the sphere.
        * @param results The buffer to save the results to.
        * @param maxDistance The max length of the cast.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction A that is used to selectively ignore colliders when casting a capsule.
        * @returns The amount of hits stored into the results buffer.
        * @methodSwap SphereCast_EBB7509C_CEEEF3C4
        */
        public SphereCast ($origin: Vector3, $radius: float, $direction: Vector3, $results: RaycastHit[], $maxDistance?: float, $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : int
        /**
        * Computes and stores colliders touching or inside the sphere into the provided buffer.
        * @param position Center of the sphere.
        * @param radius Radius of the sphere.
        * @param results The buffer to store the results into.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of colliders stored into the results buffer.
        */
        public OverlapSphere ($position: Vector3, $radius: float, $results: Collider[], $layerMask: int, $queryTriggerInteraction: QueryTriggerInteraction) : int
        /**
        * Casts the box along a ray and returns detailed information on what was hit.
        * @param center Center of the box.
        * @param halfExtents Half the size of the box in each dimension.
        * @param direction The direction in which to cast the box.
        * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (Additional resources: RaycastHit).
        * @param orientation Rotation of the box.
        * @param maxDistance The max length of the cast.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns True, if any intersections were found.
        * @methodSwap BoxCast_EBB7509C_H7B131AA7
        */
        public BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $orientation: Quaternion, $maxDistance?: float, $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : boolean
        public BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>) : boolean
        /**
        * Find all colliders touching or inside of the given box, and store them into the buffer.
        * @param center Center of the box.
        * @param halfExtents Half of the size of the box in each dimension.
        * @param results The buffer to store the results in.
        * @param orientation Rotation of the box.
        * @param layerMask A that is used to selectively ignore colliders when casting a ray.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of colliders stored in results.
        * @methodSwap OverlapBox_EBB7509C_BABEBCA9
        */
        public OverlapBox ($center: Vector3, $halfExtents: Vector3, $results: Collider[], $orientation: Quaternion, $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : int
        public OverlapBox ($center: Vector3, $halfExtents: Vector3, $results: Collider[]) : int
        /**
        * Casts the box along a ray and returns detailed information on what was hit.
        * @param center Center of the box.
        * @param halfExtents Half the size of the box in each dimension.
        * @param direction The direction in which to cast the box.
        * @param results The buffer to store the results in.
        * @param orientation Rotation of the box.
        * @param maxDistance The max length of the cast.
        * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
        * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
        * @returns The amount of hits stored to the results buffer.
        * @methodSwap BoxCast_EBB7509C_H6866036F
        */
        public BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[], $orientation: Quaternion, $maxDistance?: float, $layerMask?: int, $queryTriggerInteraction?: QueryTriggerInteraction) : int
        public BoxCast ($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[]) : int
        public static op_Equality ($lhs: PhysicsScene, $rhs: PhysicsScene) : boolean
        public static op_Inequality ($lhs: PhysicsScene, $rhs: PhysicsScene) : boolean
    }

    /**
    * A light-weight proxy that allows to access the contact buffers directly.
    */
    class ModifiableContactPair extends System.ValueType {

        /**
        * World-space rotation of the first collider in this contact pair as seen by the solver.
        */
        public rotation : Quaternion
        /**
        * World-space position of the first collider in this contact pair as seen by the solver.
        */
        public position : Vector3
        /**
        * World-space rotation of the second collider in this contact pair as seen by the solver.
        */
        public otherRotation : Quaternion
        /**
        * World-space position of the second collider in this contact pair as seen by the solver.
        */
        public otherPosition : Vector3
        /**
        * Instance ID of the first Collider in this contact pair.
        */
        public get colliderInstanceID(): int;
        /**
        * Instance ID of the second collider in this contact pair.
        */
        public get otherColliderInstanceID(): int;
        /**
        * Instance ID of the first body in this contact pair.
        */
        public get bodyInstanceID(): int;
        /**
        * Instance ID of the second body in this contact pair.
        */
        public get otherBodyInstanceID(): int;
        /**
        * Linear velocity of the first body in the contact pair.
        */
        public get bodyVelocity(): Vector3;
        /**
        * Angular velocity of the first body in the contact pair.
        */
        public get bodyAngularVelocity(): Vector3;
        /**
        * Linear velocity of the second body in the contact pair.
        */
        public get otherBodyVelocity(): Vector3;
        /**
        * Angular velocity of the second body in the contact pair.
        */
        public get otherBodyAngularVelocity(): Vector3;
        /**
        * The amount of the contact points generated for this contact pair.
        */
        public get contactCount(): int;
        /**
        * Mass-related properties of this contact pair, such as the mass ratio.
        */
        public get massProperties(): ModifiableMassProperties;
        public set massProperties(value: ModifiableMassProperties);

        /**
        * Get the location of a particular contact point in this contact pair.
        * @param i Index of the contact point.
        * @returns The location of a contact point.
        */
        public GetPoint ($i: int) : Vector3
        /**
        * Set the location of a particular contact point in this contact pair.
        * @param i Index of the contact point.
        * @param v The location of a contact point.
        */
        public SetPoint ($i: int, $v: Vector3) : void
        /**
        * Get the normal at a particular contact point in this contact pair.
        * @param i Index of the contact point.
        * @returns Normal at the contact point.
        */
        public GetNormal ($i: int) : Vector3
        /**
        * Set the normal at a particular contact point in this contact pair.
        * @param i Index of the contact point.
        * @param normal Normal at the contact point.
        */
        public SetNormal ($i: int, $normal: Vector3) : void
        /**
        * Get the separation value at a particular contact point in this contact pair.
        * @param i Index of the contact point.
        * @returns The separation at a contact point.
        */
        public GetSeparation ($i: int) : float
        /**
        * Set the separation value at a particular contact point in this contact pair.
        * @param i Index of the contact point.
        * @param separation The separation at a contact point.
        */
        public SetSeparation ($i: int, $separation: float) : void
        /**
        * Get the target velocity the solver should aim reaching at a particular contact point in this contact pair.
        * @param i Index of the contact point.
        * @returns The target velocity at a contact point.
        */
        public GetTargetVelocity ($i: int) : Vector3
        /**
        * Set the target velocity the solver should aim reaching at a particular contact point in this contact pair.
        * @param i Index of the contact point.
        * @param velocity The target velocity at a contact point.
        */
        public SetTargetVelocity ($i: int, $velocity: Vector3) : void
        /**
        * Get the restitution value for the specified contact point in this contact pair.
        * @param i Index of the contact point.
        * @returns Bounciness value for the specified contact point.
        */
        public GetBounciness ($i: int) : float
        /**
        * Set the restitution value for the specified contact point in this contact pair.
        * @param i Index of the contact point.
        * @param bounciness Bounciness value for the specified contact point.
        */
        public SetBounciness ($i: int, $bounciness: float) : void
        /**
        * Get the static friction coefficient at a particular point of the contact pair.
        * @param i Index of the contact point.
        * @returns The static friction coefficient at a contact point.
        */
        public GetStaticFriction ($i: int) : float
        /**
        * Set the static friction coefficient at a particular point of the contact pair.
        * @param i Index of the contact point.
        * @param staticFriction The static friction coefficient at a contact point.
        */
        public SetStaticFriction ($i: int, $staticFriction: float) : void
        /**
        * Get the value of the dynamic friction for a specified contact point in this contact pair.
        * @param i Index of the contact point.
        * @returns Dynamic friction coefficient.
        */
        public GetDynamicFriction ($i: int) : float
        /**
        * Set the value of the dynamic friction for a specified contact point in this contact pair.
        * @param i Index of the contact point.
        * @param dynamicFriction Dynamic friction coefficient.
        */
        public SetDynamicFriction ($i: int, $dynamicFriction: float) : void
        /**
        * Get the maximum impulse that the solver can apply at a particular contact point in this contact pair.
        * @param i Index of the contact point.
        * @returns The maximum impulse that can be applied.
        */
        public GetMaxImpulse ($i: int) : float
        /**
        * Set the maximum impulse that the solver can apply at a particular contact point in this contact pair.
        * @param i Index of the contact point.
        * @param value The maximum impulse that can be applied.
        */
        public SetMaxImpulse ($i: int, $value: float) : void
        /**
        * Ignore the specified contact point in this contact pair.
        * @param i Index of the contact point.
        */
        public IgnoreContact ($i: int) : void
        /**
        * Get the index of a face a particular contact point belongs to in this contact pair. Use this with Mesh.triangles.
        * @param i Index of the contact point.
        * @returns Index of a face this contact point belongs to.
        */
        public GetFaceIndex ($i: int) : uint
    }

    /**
    * Mass-related modifiable properties of a contact pair.
    */
    class ModifiableMassProperties extends System.ValueType {

        /**
        * The inverse mass scaling that the solver should apply to the first body of this contact pair.
        */
        public inverseMassScale : float
        /**
        * The inverse inertia scaling that the solver should apply to the first body of this contact pair.
        */
        public inverseInertiaScale : float
        /**
        * The inverse mass scaling that the solver should apply to the second body of this contact pair.
        */
        public otherInverseMassScale : float
        /**
        * The inverse inertia scaling that the solver should apply to the second body of this contact pair.
        */
        public otherInverseInertiaScale : float

    }

    /**
    * A header struct which contains colliding bodies.
    */
    class ContactPairHeader extends System.ValueType {

        /**
        * Instance ID of the first Rigidbody or the ArticualtionBody in the pair.
        */
        public get BodyInstanceID(): int;
        /**
        * Instance ID of the second Rigidbody or the ArticualtionBody in the pair.
        */
        public get OtherBodyInstanceID(): int;
        /**
        * The first Rigidbody or ArticulationBody in the pair.
        */
        public get Body(): Component;
        /**
        * The second Rigidbody or ArticulationBody in the pair.
        */
        public get OtherBody(): Component;
        /**
        * Number of ContactPairs that this header contains.
        */
        public get PairCount(): int;

        /**
        * Gets the ContactPair at index of this pair header.
        * @param index The ContactPair index.
        * @returns A reference or a copy of the ContactPair struct at index.
        */
        public GetContactPair ($index: int) : $Ref<ContactPair>
    }

    /**
    * A pair of Colliders that belong to the bodies in the parent ContactPairHeader struct.
    */
    class ContactPair extends System.ValueType {

        /**
        * Instance ID of the first Collider in the ContactPair.
        */
        public get ColliderInstanceID(): int;
        /**
        * Instance ID of the second Collider in the ContactPair.
        */
        public get OtherColliderInstanceID(): int;
        /**
        * The first Collider component of the ContactPair.
        */
        public get Collider(): Collider;
        /**
        * The second Collider component of the ContactPair.
        */
        public get OtherCollider(): Collider;
        /**
        * The number of ContactPairPoints that this pair contains.
        */
        public get ContactCount(): int;
        /**
        * Total impulse sum of the pair.
        */
        public get ImpulseSum(): Vector3;
        /**
        * Whether or not this pair is equivalent to a pair reported in MonoBehaviour.OnCollisionEnter events.
        */
        public get IsCollisionEnter(): boolean;
        /**
        * Whether or not this pair is equivalent to a pair reported in MonoBehaviour.OnCollisionExit events.
        */
        public get IsCollisionExit(): boolean;
        /**
        * Whether or not this pair is equivalent to a pair reported in MonoBehaviour.OnCollisionStay events.
        */
        public get IsCollisionStay(): boolean;

        public CopyToNativeArray ($buffer: Unity_Collections.NativeArray$1<ContactPairPoint>) : void
        /**
        * Gets the ContactPairPoint at the provided index of this pair.
        * @param index The ContactPairPoint index.
        * @returns A reference or a copy of the ContactPairPoint struct at index.
        */
        public GetContactPoint ($index: int) : $Ref<ContactPairPoint>
        /**
        * Get the index of a face that a particular contact point belongs to in this ContactPairPoint.
        * @param contactIndex The ContactPairPoint index.
        * @returns Index of a face this contact point belongs to.
        */
        public GetContactPointFaceIndex ($contactIndex: int) : uint
    }

    /**
    * A readonly struct describing a contact point between two Colliders.
    */
    class ContactPairPoint extends System.ValueType {

        /**
        * The position of the contact point between the Colliders, in world space.
        */
        public get Position(): Vector3;
        /**
        * The distance between the edges of Colliders at the contact point.
        */
        public get Separation(): float;
        /**
        * Normal of the contact point.
        */
        public get Normal(): Vector3;
        /**
        * The impulse applied to this contact pair to resolve the collision.
        */
        public get Impulse(): Vector3;

    }

    /**
    * A mesh collider allows you to do between meshes and primitives.
    */
    class MeshCollider extends Collider {

        /**
        * Enabled Colliders will collide with other Colliders, disabled Colliders won't.
        */
        public get enabled(): boolean;
        public set enabled(value: boolean);
        /**
        * The rigidbody the collider is attached to.
        */
        public get attachedRigidbody(): Rigidbody;
        /**
        * The articulation body the collider is attached to.
        */
        public get attachedArticulationBody(): ArticulationBody;
        /**
        * Specify if this collider is configured as a trigger.
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Contact offset value of this collider.
        */
        public get contactOffset(): float;
        public set contactOffset(value: float);
        /**
        * The world space bounding volume of the collider (Read Only).
        */
        public get bounds(): Bounds;
        /**
        * Specify whether this Collider's contacts are modifiable or not.
        */
        public get hasModifiableContacts(): boolean;
        public set hasModifiableContacts(value: boolean);
        /**
        * Whether or not this Collider generates contacts for Physics.ContactEvent.
        */
        public get providesContacts(): boolean;
        public set providesContacts(value: boolean);
        /**
        * A decision priority assigned to this Collider used when there is a conflicting decision on whether a Collider can contact another Collider.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional layers that this Collider should exclude when deciding if the Collider can contact another Collider.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional layers that this Collider should include when deciding if the Collider can contact another Collider.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The shared physic material of this collider.
        */
        public get sharedMaterial(): PhysicMaterial;
        public set sharedMaterial(value: PhysicMaterial);
        /**
        * The material used by the collider.
        */
        public get material(): PhysicMaterial;
        public set material(value: PhysicMaterial);
        /**
        * The mesh object used for collision detection.
        */
        public get sharedMesh(): Mesh;
        public set sharedMesh(value: Mesh);
        /**
        * Use a convex collider from the mesh.
        */
        public get convex(): boolean;
        public set convex(value: boolean);
        /**
        * Options used to enable or disable certain features in mesh cooking.
        */
        public get cookingOptions(): MeshColliderCookingOptions;
        public set cookingOptions(value: MeshColliderCookingOptions);

        private constructor ()
    }

    /**
    * A class that allows you to create or modify meshes.
    */
    interface Mesh {

    }

    /**
    * A capsule-shaped primitive collider.
    */
    class CapsuleCollider extends Collider {

        /**
        * Enabled Colliders will collide with other Colliders, disabled Colliders won't.
        */
        public get enabled(): boolean;
        public set enabled(value: boolean);
        /**
        * The rigidbody the collider is attached to.
        */
        public get attachedRigidbody(): Rigidbody;
        /**
        * The articulation body the collider is attached to.
        */
        public get attachedArticulationBody(): ArticulationBody;
        /**
        * Specify if this collider is configured as a trigger.
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Contact offset value of this collider.
        */
        public get contactOffset(): float;
        public set contactOffset(value: float);
        /**
        * The world space bounding volume of the collider (Read Only).
        */
        public get bounds(): Bounds;
        /**
        * Specify whether this Collider's contacts are modifiable or not.
        */
        public get hasModifiableContacts(): boolean;
        public set hasModifiableContacts(value: boolean);
        /**
        * Whether or not this Collider generates contacts for Physics.ContactEvent.
        */
        public get providesContacts(): boolean;
        public set providesContacts(value: boolean);
        /**
        * A decision priority assigned to this Collider used when there is a conflicting decision on whether a Collider can contact another Collider.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional layers that this Collider should exclude when deciding if the Collider can contact another Collider.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional layers that this Collider should include when deciding if the Collider can contact another Collider.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The shared physic material of this collider.
        */
        public get sharedMaterial(): PhysicMaterial;
        public set sharedMaterial(value: PhysicMaterial);
        /**
        * The material used by the collider.
        */
        public get material(): PhysicMaterial;
        public set material(value: PhysicMaterial);
        /**
        * The center of the capsule, measured in the object's local space.
        */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
        * The radius of the sphere, measured in the object's local space.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * The height of the capsule measured in the object's local space.
        */
        public get height(): float;
        public set height(value: float);
        /**
        * The direction of the capsule.
        */
        public get direction(): int;
        public set direction(value: int);

        private constructor ()
    }

    /**
    * A box-shaped primitive collider.
    */
    class BoxCollider extends Collider {

        /**
        * Enabled Colliders will collide with other Colliders, disabled Colliders won't.
        */
        public get enabled(): boolean;
        public set enabled(value: boolean);
        /**
        * The rigidbody the collider is attached to.
        */
        public get attachedRigidbody(): Rigidbody;
        /**
        * The articulation body the collider is attached to.
        */
        public get attachedArticulationBody(): ArticulationBody;
        /**
        * Specify if this collider is configured as a trigger.
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Contact offset value of this collider.
        */
        public get contactOffset(): float;
        public set contactOffset(value: float);
        /**
        * The world space bounding volume of the collider (Read Only).
        */
        public get bounds(): Bounds;
        /**
        * Specify whether this Collider's contacts are modifiable or not.
        */
        public get hasModifiableContacts(): boolean;
        public set hasModifiableContacts(value: boolean);
        /**
        * Whether or not this Collider generates contacts for Physics.ContactEvent.
        */
        public get providesContacts(): boolean;
        public set providesContacts(value: boolean);
        /**
        * A decision priority assigned to this Collider used when there is a conflicting decision on whether a Collider can contact another Collider.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional layers that this Collider should exclude when deciding if the Collider can contact another Collider.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional layers that this Collider should include when deciding if the Collider can contact another Collider.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The shared physic material of this collider.
        */
        public get sharedMaterial(): PhysicMaterial;
        public set sharedMaterial(value: PhysicMaterial);
        /**
        * The material used by the collider.
        */
        public get material(): PhysicMaterial;
        public set material(value: PhysicMaterial);
        /**
        * The center of the box, measured in the object's local space.
        */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
        * The size of the box, measured in the object's local space.
        */
        public get size(): Vector3;
        public set size(value: Vector3);

        private constructor ()
    }

    /**
    * A sphere-shaped primitive collider.
    */
    class SphereCollider extends Collider {

        /**
        * Enabled Colliders will collide with other Colliders, disabled Colliders won't.
        */
        public get enabled(): boolean;
        public set enabled(value: boolean);
        /**
        * The rigidbody the collider is attached to.
        */
        public get attachedRigidbody(): Rigidbody;
        /**
        * The articulation body the collider is attached to.
        */
        public get attachedArticulationBody(): ArticulationBody;
        /**
        * Specify if this collider is configured as a trigger.
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Contact offset value of this collider.
        */
        public get contactOffset(): float;
        public set contactOffset(value: float);
        /**
        * The world space bounding volume of the collider (Read Only).
        */
        public get bounds(): Bounds;
        /**
        * Specify whether this Collider's contacts are modifiable or not.
        */
        public get hasModifiableContacts(): boolean;
        public set hasModifiableContacts(value: boolean);
        /**
        * Whether or not this Collider generates contacts for Physics.ContactEvent.
        */
        public get providesContacts(): boolean;
        public set providesContacts(value: boolean);
        /**
        * A decision priority assigned to this Collider used when there is a conflicting decision on whether a Collider can contact another Collider.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional layers that this Collider should exclude when deciding if the Collider can contact another Collider.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional layers that this Collider should include when deciding if the Collider can contact another Collider.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The shared physic material of this collider.
        */
        public get sharedMaterial(): PhysicMaterial;
        public set sharedMaterial(value: PhysicMaterial);
        /**
        * The material used by the collider.
        */
        public get material(): PhysicMaterial;
        public set material(value: PhysicMaterial);
        /**
        * The center of the sphere in the object's local space.
        */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
        * The radius of the sphere measured in the object's local space.
        */
        public get radius(): float;
        public set radius(value: float);

        private constructor ()
    }

    /**
    * A force applied constantly.
    */
    class ConstantForce extends Behaviour {

        /**
        * The force applied to the rigidbody every frame.
        */
        public get force(): Vector3;
        public set force(value: Vector3);
        /**
        * The force - relative to the rigid bodies coordinate system - applied every frame.
        */
        public get relativeForce(): Vector3;
        public set relativeForce(value: Vector3);
        /**
        * The torque applied to the rigidbody every frame.
        */
        public get torque(): Vector3;
        public set torque(value: Vector3);
        /**
        * The torque - relative to the rigid bodies coordinate system - applied every frame.
        */
        public get relativeTorque(): Vector3;
        public set relativeTorque(value: Vector3);

        private constructor ()
    }

    /**
    * Joint is the base class for all joints.
    */
    class Joint extends Component {

        /**
        * A reference to another rigidbody this joint connects to.
        */
        public get connectedBody(): Rigidbody;
        public set connectedBody(value: Rigidbody);
        /**
        * A reference to an articulation body this joint connects to.
        */
        public get connectedArticulationBody(): ArticulationBody;
        public set connectedArticulationBody(value: ArticulationBody);
        /**
        * The Direction of the axis around which the body is constrained.
        */
        public get axis(): Vector3;
        public set axis(value: Vector3);
        /**
        * The Position of the anchor around which the joints motion is constrained.
        */
        public get anchor(): Vector3;
        public set anchor(value: Vector3);
        /**
        * Position of the anchor relative to the connected Rigidbody.
        */
        public get connectedAnchor(): Vector3;
        public set connectedAnchor(value: Vector3);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break. To be able to break, a joint must be _Locked_ or _Limited_ on the axis of rotation where the torque is being applied. This means that some joints cannot break, such as an unconstrained Configurable Joint.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * Enable collision between bodies connected with the joint.
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * Toggle preprocessing for this joint.
        */
        public get enablePreprocessing(): boolean;
        public set enablePreprocessing(value: boolean);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the body prior to solving the constraints.
        */
        public get massScale(): float;
        public set massScale(value: float);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the connected body prior to solving the constraints.
        */
        public get connectedMassScale(): float;
        public set connectedMassScale(value: float);
        /**
        * The force applied by the solver to satisfy all constraints.
        */
        public get currentForce(): Vector3;
        /**
        * The torque applied by the solver to satisfy all constraints.
        */
        public get currentTorque(): Vector3;

        private constructor ()
    }

    /**
    * The HingeJoint groups together 2 rigid bodies, constraining them to move like connected by a hinge.
    */
    class HingeJoint extends Joint {

        /**
        * A reference to another rigidbody this joint connects to.
        */
        public get connectedBody(): Rigidbody;
        public set connectedBody(value: Rigidbody);
        /**
        * A reference to an articulation body this joint connects to.
        */
        public get connectedArticulationBody(): ArticulationBody;
        public set connectedArticulationBody(value: ArticulationBody);
        /**
        * The Direction of the axis around which the body is constrained.
        */
        public get axis(): Vector3;
        public set axis(value: Vector3);
        /**
        * The Position of the anchor around which the joints motion is constrained.
        */
        public get anchor(): Vector3;
        public set anchor(value: Vector3);
        /**
        * Position of the anchor relative to the connected Rigidbody.
        */
        public get connectedAnchor(): Vector3;
        public set connectedAnchor(value: Vector3);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break. To be able to break, a joint must be _Locked_ or _Limited_ on the axis of rotation where the torque is being applied. This means that some joints cannot break, such as an unconstrained Configurable Joint.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * Enable collision between bodies connected with the joint.
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * Toggle preprocessing for this joint.
        */
        public get enablePreprocessing(): boolean;
        public set enablePreprocessing(value: boolean);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the body prior to solving the constraints.
        */
        public get massScale(): float;
        public set massScale(value: float);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the connected body prior to solving the constraints.
        */
        public get connectedMassScale(): float;
        public set connectedMassScale(value: float);
        /**
        * The force applied by the solver to satisfy all constraints.
        */
        public get currentForce(): Vector3;
        /**
        * The torque applied by the solver to satisfy all constraints.
        */
        public get currentTorque(): Vector3;
        /**
        * The motor will apply a force up to a maximum force to achieve the target velocity in degrees per second.
        */
        public get motor(): JointMotor;
        public set motor(value: JointMotor);
        /**
        * Limit of angular rotation (in degrees) on the hinge joint.
        */
        public get limits(): JointLimits;
        public set limits(value: JointLimits);
        /**
        * The spring attempts to reach a target angle by adding spring and damping forces.
        */
        public get spring(): JointSpring;
        public set spring(value: JointSpring);
        /**
        * Enables the joint's motor. Disabled by default.
        */
        public get useMotor(): boolean;
        public set useMotor(value: boolean);
        /**
        * Enables the joint's limits. Disabled by default.
        */
        public get useLimits(): boolean;
        public set useLimits(value: boolean);
        /**
        * If enabled, the angle of the hinge is extended to [-360, 360] degrees.
        */
        public get extendedLimits(): boolean;
        public set extendedLimits(value: boolean);
        /**
        * Enables the joint's spring. Disabled by default.
        */
        public get useSpring(): boolean;
        public set useSpring(value: boolean);
        /**
        * The angular velocity of the joint in degrees per second. (Read Only)
        */
        public get velocity(): float;
        /**
        * The current angle in degrees of the joint relative to its rest position. (Read Only)
        */
        public get angle(): float;
        /**
        * Defines whether the HingeJoint.spring outputs accelerations instead of forces.
        */
        public get useAcceleration(): boolean;
        public set useAcceleration(value: boolean);

        private constructor ()
    }

    /**
    * The spring joint ties together 2 rigid bodies, spring forces will be automatically applied to keep the object at the given distance.
    */
    class SpringJoint extends Joint {

        /**
        * A reference to another rigidbody this joint connects to.
        */
        public get connectedBody(): Rigidbody;
        public set connectedBody(value: Rigidbody);
        /**
        * A reference to an articulation body this joint connects to.
        */
        public get connectedArticulationBody(): ArticulationBody;
        public set connectedArticulationBody(value: ArticulationBody);
        /**
        * The Direction of the axis around which the body is constrained.
        */
        public get axis(): Vector3;
        public set axis(value: Vector3);
        /**
        * The Position of the anchor around which the joints motion is constrained.
        */
        public get anchor(): Vector3;
        public set anchor(value: Vector3);
        /**
        * Position of the anchor relative to the connected Rigidbody.
        */
        public get connectedAnchor(): Vector3;
        public set connectedAnchor(value: Vector3);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break. To be able to break, a joint must be _Locked_ or _Limited_ on the axis of rotation where the torque is being applied. This means that some joints cannot break, such as an unconstrained Configurable Joint.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * Enable collision between bodies connected with the joint.
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * Toggle preprocessing for this joint.
        */
        public get enablePreprocessing(): boolean;
        public set enablePreprocessing(value: boolean);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the body prior to solving the constraints.
        */
        public get massScale(): float;
        public set massScale(value: float);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the connected body prior to solving the constraints.
        */
        public get connectedMassScale(): float;
        public set connectedMassScale(value: float);
        /**
        * The force applied by the solver to satisfy all constraints.
        */
        public get currentForce(): Vector3;
        /**
        * The torque applied by the solver to satisfy all constraints.
        */
        public get currentTorque(): Vector3;
        /**
        * The spring force used to keep the two objects together.
        */
        public get spring(): float;
        public set spring(value: float);
        /**
        * The damper force used to dampen the spring force.
        */
        public get damper(): float;
        public set damper(value: float);
        /**
        * The minimum distance between the bodies relative to their initial distance.
        */
        public get minDistance(): float;
        public set minDistance(value: float);
        /**
        * The maximum distance between the bodies relative to their initial distance.
        */
        public get maxDistance(): float;
        public set maxDistance(value: float);
        /**
        * The maximum allowed error between the current spring length and the length defined by minDistance and maxDistance.
        */
        public get tolerance(): float;
        public set tolerance(value: float);

        private constructor ()
    }

    /**
    * The Fixed joint groups together 2 rigidbodies, making them stick together in their bound position.
    */
    class FixedJoint extends Joint {

        /**
        * A reference to another rigidbody this joint connects to.
        */
        public get connectedBody(): Rigidbody;
        public set connectedBody(value: Rigidbody);
        /**
        * A reference to an articulation body this joint connects to.
        */
        public get connectedArticulationBody(): ArticulationBody;
        public set connectedArticulationBody(value: ArticulationBody);
        /**
        * The Direction of the axis around which the body is constrained.
        */
        public get axis(): Vector3;
        public set axis(value: Vector3);
        /**
        * The Position of the anchor around which the joints motion is constrained.
        */
        public get anchor(): Vector3;
        public set anchor(value: Vector3);
        /**
        * Position of the anchor relative to the connected Rigidbody.
        */
        public get connectedAnchor(): Vector3;
        public set connectedAnchor(value: Vector3);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break. To be able to break, a joint must be _Locked_ or _Limited_ on the axis of rotation where the torque is being applied. This means that some joints cannot break, such as an unconstrained Configurable Joint.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * Enable collision between bodies connected with the joint.
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * Toggle preprocessing for this joint.
        */
        public get enablePreprocessing(): boolean;
        public set enablePreprocessing(value: boolean);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the body prior to solving the constraints.
        */
        public get massScale(): float;
        public set massScale(value: float);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the connected body prior to solving the constraints.
        */
        public get connectedMassScale(): float;
        public set connectedMassScale(value: float);
        /**
        * The force applied by the solver to satisfy all constraints.
        */
        public get currentForce(): Vector3;
        /**
        * The torque applied by the solver to satisfy all constraints.
        */
        public get currentTorque(): Vector3;

        private constructor ()
    }

    /**
    * Character Joints are mainly used for Ragdoll effects.
    */
    class CharacterJoint extends Joint {

        /**
        * A reference to another rigidbody this joint connects to.
        */
        public get connectedBody(): Rigidbody;
        public set connectedBody(value: Rigidbody);
        /**
        * A reference to an articulation body this joint connects to.
        */
        public get connectedArticulationBody(): ArticulationBody;
        public set connectedArticulationBody(value: ArticulationBody);
        /**
        * The Direction of the axis around which the body is constrained.
        */
        public get axis(): Vector3;
        public set axis(value: Vector3);
        /**
        * The Position of the anchor around which the joints motion is constrained.
        */
        public get anchor(): Vector3;
        public set anchor(value: Vector3);
        /**
        * Position of the anchor relative to the connected Rigidbody.
        */
        public get connectedAnchor(): Vector3;
        public set connectedAnchor(value: Vector3);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break. To be able to break, a joint must be _Locked_ or _Limited_ on the axis of rotation where the torque is being applied. This means that some joints cannot break, such as an unconstrained Configurable Joint.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * Enable collision between bodies connected with the joint.
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * Toggle preprocessing for this joint.
        */
        public get enablePreprocessing(): boolean;
        public set enablePreprocessing(value: boolean);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the body prior to solving the constraints.
        */
        public get massScale(): float;
        public set massScale(value: float);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the connected body prior to solving the constraints.
        */
        public get connectedMassScale(): float;
        public set connectedMassScale(value: float);
        /**
        * The force applied by the solver to satisfy all constraints.
        */
        public get currentForce(): Vector3;
        /**
        * The torque applied by the solver to satisfy all constraints.
        */
        public get currentTorque(): Vector3;
        /**
        * The secondary axis around which the joint can rotate.
        */
        public get swingAxis(): Vector3;
        public set swingAxis(value: Vector3);
        /**
        * The configuration of the spring attached to the twist limits of the joint.
        */
        public get twistLimitSpring(): SoftJointLimitSpring;
        public set twistLimitSpring(value: SoftJointLimitSpring);
        /**
        * The configuration of the spring attached to the swing limits of the joint.
        */
        public get swingLimitSpring(): SoftJointLimitSpring;
        public set swingLimitSpring(value: SoftJointLimitSpring);
        /**
        * The lower limit around the primary axis of the character joint.
        */
        public get lowTwistLimit(): SoftJointLimit;
        public set lowTwistLimit(value: SoftJointLimit);
        /**
        * The upper limit around the primary axis of the character joint.
        */
        public get highTwistLimit(): SoftJointLimit;
        public set highTwistLimit(value: SoftJointLimit);
        /**
        * The angular limit of rotation (in degrees) around the primary axis of the character joint.
        */
        public get swing1Limit(): SoftJointLimit;
        public set swing1Limit(value: SoftJointLimit);
        /**
        * The angular limit of rotation (in degrees) around the primary axis of the character joint.
        */
        public get swing2Limit(): SoftJointLimit;
        public set swing2Limit(value: SoftJointLimit);
        /**
        * Brings violated constraints back into alignment even when the solver fails.
        */
        public get enableProjection(): boolean;
        public set enableProjection(value: boolean);
        /**
        * Set the linear tolerance threshold for projection.
        */
        public get projectionDistance(): float;
        public set projectionDistance(value: float);
        /**
        * Set the angular tolerance threshold (in degrees) for projection.
        */
        public get projectionAngle(): float;
        public set projectionAngle(value: float);

        private constructor ()
    }

    /**
    * The configurable joint is an extremely flexible joint giving you complete control over rotation and linear motion.
    */
    class ConfigurableJoint extends Joint {

        /**
        * A reference to another rigidbody this joint connects to.
        */
        public get connectedBody(): Rigidbody;
        public set connectedBody(value: Rigidbody);
        /**
        * A reference to an articulation body this joint connects to.
        */
        public get connectedArticulationBody(): ArticulationBody;
        public set connectedArticulationBody(value: ArticulationBody);
        /**
        * The Direction of the axis around which the body is constrained.
        */
        public get axis(): Vector3;
        public set axis(value: Vector3);
        /**
        * The Position of the anchor around which the joints motion is constrained.
        */
        public get anchor(): Vector3;
        public set anchor(value: Vector3);
        /**
        * Position of the anchor relative to the connected Rigidbody.
        */
        public get connectedAnchor(): Vector3;
        public set connectedAnchor(value: Vector3);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break. To be able to break, a joint must be _Locked_ or _Limited_ on the axis of rotation where the torque is being applied. This means that some joints cannot break, such as an unconstrained Configurable Joint.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * Enable collision between bodies connected with the joint.
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * Toggle preprocessing for this joint.
        */
        public get enablePreprocessing(): boolean;
        public set enablePreprocessing(value: boolean);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the body prior to solving the constraints.
        */
        public get massScale(): float;
        public set massScale(value: float);
        /**
        * The scale to apply to the inverse mass and inertia tensor of the connected body prior to solving the constraints.
        */
        public get connectedMassScale(): float;
        public set connectedMassScale(value: float);
        /**
        * The force applied by the solver to satisfy all constraints.
        */
        public get currentForce(): Vector3;
        /**
        * The torque applied by the solver to satisfy all constraints.
        */
        public get currentTorque(): Vector3;
        /**
        * The joint's secondary axis.
        */
        public get secondaryAxis(): Vector3;
        public set secondaryAxis(value: Vector3);
        /**
        * Allow movement along the X axis to be Free, completely Locked, or Limited according to Linear Limit.
        */
        public get xMotion(): ConfigurableJointMotion;
        public set xMotion(value: ConfigurableJointMotion);
        /**
        * Allow movement along the Y axis to be Free, completely Locked, or Limited according to Linear Limit.
        */
        public get yMotion(): ConfigurableJointMotion;
        public set yMotion(value: ConfigurableJointMotion);
        /**
        * Allow movement along the Z axis to be Free, completely Locked, or Limited according to Linear Limit.
        */
        public get zMotion(): ConfigurableJointMotion;
        public set zMotion(value: ConfigurableJointMotion);
        /**
        * Allow rotation around the X axis to be Free, completely Locked, or Limited according to Low and High Angular XLimit.
        */
        public get angularXMotion(): ConfigurableJointMotion;
        public set angularXMotion(value: ConfigurableJointMotion);
        /**
        * Allow rotation around the Y axis to be Free, completely Locked, or Limited according to Angular YLimit.
        */
        public get angularYMotion(): ConfigurableJointMotion;
        public set angularYMotion(value: ConfigurableJointMotion);
        /**
        * Allow rotation around the Z axis to be Free, completely Locked, or Limited according to Angular ZLimit.
        */
        public get angularZMotion(): ConfigurableJointMotion;
        public set angularZMotion(value: ConfigurableJointMotion);
        /**
        * The configuration of the spring attached to the linear limit of the joint.
        */
        public get linearLimitSpring(): SoftJointLimitSpring;
        public set linearLimitSpring(value: SoftJointLimitSpring);
        /**
        * The configuration of the spring attached to the angular X limit of the joint.
        */
        public get angularXLimitSpring(): SoftJointLimitSpring;
        public set angularXLimitSpring(value: SoftJointLimitSpring);
        /**
        * The configuration of the spring attached to the angular Y and angular Z limits of the joint.
        */
        public get angularYZLimitSpring(): SoftJointLimitSpring;
        public set angularYZLimitSpring(value: SoftJointLimitSpring);
        /**
        * Boundary defining movement restriction, based on distance from the joint's origin.
        */
        public get linearLimit(): SoftJointLimit;
        public set linearLimit(value: SoftJointLimit);
        /**
        * Boundary defining lower rotation restriction, based on delta from original rotation.
        */
        public get lowAngularXLimit(): SoftJointLimit;
        public set lowAngularXLimit(value: SoftJointLimit);
        /**
        * Boundary defining upper rotation restriction, based on delta from original rotation.
        */
        public get highAngularXLimit(): SoftJointLimit;
        public set highAngularXLimit(value: SoftJointLimit);
        /**
        * Boundary defining rotation restriction, based on delta from original rotation.
        */
        public get angularYLimit(): SoftJointLimit;
        public set angularYLimit(value: SoftJointLimit);
        /**
        * Boundary defining rotation restriction, based on delta from original rotation.
        */
        public get angularZLimit(): SoftJointLimit;
        public set angularZLimit(value: SoftJointLimit);
        /**
        * The desired position that the joint should move into.
        */
        public get targetPosition(): Vector3;
        public set targetPosition(value: Vector3);
        /**
        * The desired velocity that the joint should move along.
        */
        public get targetVelocity(): Vector3;
        public set targetVelocity(value: Vector3);
        /**
        * Definition of how the joint's movement will behave along its local X axis.
        */
        public get xDrive(): JointDrive;
        public set xDrive(value: JointDrive);
        /**
        * Definition of how the joint's movement will behave along its local Y axis.
        */
        public get yDrive(): JointDrive;
        public set yDrive(value: JointDrive);
        /**
        * Definition of how the joint's movement will behave along its local Z axis.
        */
        public get zDrive(): JointDrive;
        public set zDrive(value: JointDrive);
        /**
        * This is a Quaternion. It defines the desired rotation that the joint should rotate into.
        */
        public get targetRotation(): Quaternion;
        public set targetRotation(value: Quaternion);
        /**
        * This is a Vector3. It defines the desired angular velocity that the joint should rotate into.
        */
        public get targetAngularVelocity(): Vector3;
        public set targetAngularVelocity(value: Vector3);
        /**
        * Control the object's rotation with either X & YZ or Slerp Drive by itself.
        */
        public get rotationDriveMode(): RotationDriveMode;
        public set rotationDriveMode(value: RotationDriveMode);
        /**
        * Definition of how the joint's rotation will behave around its local X axis. Only used if Rotation Drive Mode is Swing & Twist.
        */
        public get angularXDrive(): JointDrive;
        public set angularXDrive(value: JointDrive);
        /**
        * Definition of how the joint's rotation will behave around its local Y and Z axes. Only used if Rotation Drive Mode is Swing & Twist.
        */
        public get angularYZDrive(): JointDrive;
        public set angularYZDrive(value: JointDrive);
        /**
        * Definition of how the joint's rotation will behave around all local axes. Only used if Rotation Drive Mode is Slerp Only.
        */
        public get slerpDrive(): JointDrive;
        public set slerpDrive(value: JointDrive);
        /**
        * Brings violated constraints back into alignment even when the solver fails. Projection is not a physical process and does not preserve momentum or respect collision geometry. It is best avoided if practical, but can be useful in improving simulation quality where joint separation results in unacceptable artifacts.
        */
        public get projectionMode(): JointProjectionMode;
        public set projectionMode(value: JointProjectionMode);
        /**
        * Set the linear tolerance threshold for projection.
        * If the joint separates by more than this distance along its locked degrees of freedom, the solver
        * will move the bodies to close the distance.
        * Setting a very small tolerance may result in simulation jitter or other artifacts.
        * Sometimes it is not possible to project (for example when the joints form a cycle).
        */
        public get projectionDistance(): float;
        public set projectionDistance(value: float);
        /**
        * Set the angular tolerance threshold (in degrees) for projection.
        * If the joint deviates by more than this angle around its locked angular degrees of freedom,
        * the solver will move the bodies to close the angle.
        * Setting a very small tolerance may result in simulation jitter or other artifacts.
        * Sometimes it is not possible to project (for example when the joints form a cycle).
        */
        public get projectionAngle(): float;
        public set projectionAngle(value: float);
        /**
        * If enabled, all Target values will be calculated in world space instead of the object's local space.
        */
        public get configuredInWorldSpace(): boolean;
        public set configuredInWorldSpace(value: boolean);
        /**
        * Enable this property to swap the order in which the physics engine processes the Rigidbodies involved in the joint. This results in different joint motion but has no impact on Rigidbodies and anchors.
        */
        public get swapBodies(): boolean;
        public set swapBodies(value: boolean);

        private constructor ()
    }

    /**
    * Scene extensions to access the underlying physics scene.
    */
    class PhysicsSceneExtensions {

        /**
        * An extension method that returns the 3D physics Scene from the Scene.
        * @param scene The Scene from which to return the 3D physics Scene.
        * @returns The 3D physics Scene used by the Scene.
        */
        public static GetPhysicsScene ($scene: UnityEngine_SceneManagement.Scene) : PhysicsScene
    }

    /**
    * Creates a struct to set up parameters for batch queries: RaycastCommand, BoxcastCommand, CapsulecastCommand, SpherecastCommand.
    */
    class QueryParameters extends System.ValueType {

        /**
        * A LayerMask that is used to selectively ignore Colliders when casting a ray.
        */
        public layerMask : int
        /**
        * Whether raycast batch query should hit multiple faces.
        */
        public hitMultipleFaces : boolean
        /**
        * Whether queries hit Triggers by default.
        */
        public hitTriggers : QueryTriggerInteraction
        /**
        * Whether physics queries should hit back-face triangles.
        */
        public hitBackfaces : boolean
        /**
        * Create a default QueryParameters struct.
        */
        public static get Default(): QueryParameters;

        /**
        * Struct used to set up parameters for queries: RaycastCommand, BoxcastCommand, CapsulecastCommand, SpherecastCommand.
        * @param layerMask A LayerMask that is used to selectively ignore Colliders when casting a ray.
        * @param hitMultipleFaces Whether raycast batch query should hit multiple faces.
        * @param hitTriggers Whether queries hit Triggers by default.
        * @param hitBackfaces Whether physics queries should hit back-face triangles.
        */
        public constructor ($layerMask?: int, $hitMultipleFaces?: boolean, $hitTriggers?: QueryTriggerInteraction, $hitBackfaces?: boolean)
    }

    /**
    * Struct used to retrieve information from an Overlap batch query.
    */
    class ColliderHit extends System.ValueType {

        /**
        * The instance ID of the Collider that was hit.
        */
        public get instanceID(): int;
        /**
        * The Collider that was hit.
        */
        public get collider(): Collider;

    }

    /**
    * Struct used to set up a raycast command to be performed asynchronously during a job.
    */
    class RaycastCommand extends System.ValueType {

        /**
        * Structure for specifying additional parameters for a batch query such as layer mask, hit multiple mesh faces, hit triggers and hit backfaces.
        */
        public queryParameters : QueryParameters
        /**
        * The starting point of the ray in world coordinates.
        */
        public get from(): Vector3;
        public set from(value: Vector3);
        /**
        * The direction of the ray.
        */
        public get direction(): Vector3;
        public set direction(value: Vector3);
        /**
        * The physics scene this command is run in.
        */
        public get physicsScene(): PhysicsScene;
        public set physicsScene(value: PhysicsScene);
        /**
        * The maximum distance the ray should check for collisions.
        */
        public get distance(): float;
        public set distance(value: float);

        /**
        * Create a RaycastCommand.
        * @param from The starting point of the ray in world coordinates.
        * @param direction The direction of the ray.
        * @param distance The maximum distance the ray should check for collisions.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask, hit multiple mesh faces, hit triggers and hit backfaces.
        */
        public constructor ($from: Vector3, $direction: Vector3, $queryParameters: QueryParameters, $distance?: float)
        /**
        * Create a RaycastCommand.
        * @param physicsScene The physics scene to run the raycast query in.
        * @param from The starting point of the ray in world coordinates.
        * @param direction The direction of the ray.
        * @param distance The maximum distance the ray should check for collisions.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask, hit multiple mesh faces, hit triggers and hit backfaces.
        */
        public constructor ($physicsScene: PhysicsScene, $from: Vector3, $direction: Vector3, $queryParameters: QueryParameters, $distance?: float)
        /**
        * @methodSwap ScheduleBatch_EBB7509C_H2E5E1DFB
        */
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<RaycastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: int, $maxHits: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
        /**
        * @methodSwap ScheduleBatch_EBB7509C_BBCC42EC
        */
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<RaycastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
    }

    /**
    * Use this struct to set up a sphere cast command that is performed asynchronously during a job.
    */
    class SpherecastCommand extends System.ValueType {

        /**
        * Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
        */
        public queryParameters : QueryParameters
        /**
        * The starting point of the sphere cast in world coordinates.
        */
        public get origin(): Vector3;
        public set origin(value: Vector3);
        /**
        * The radius of the casting sphere.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * The direction of the sphere cast.
        */
        public get direction(): Vector3;
        public set direction(value: Vector3);
        /**
        * The maximum distance the sphere should check for collisions.
        */
        public get distance(): float;
        public set distance(value: float);
        /**
        * The physics scene this command is run in.
        */
        public get physicsScene(): PhysicsScene;
        public set physicsScene(value: PhysicsScene);

        /**
        * Creates a SpherecastCommand.
        * @param origin The starting point of the sphere cast.
        * @param radius The radius of the casting sphere.
        * @param direction The direction of the sphere cast.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
        * @param distance The maximum distance the cast should check for collisions.
        */
        public constructor ($origin: Vector3, $radius: float, $direction: Vector3, $queryParameters: QueryParameters, $distance?: float)
        /**
        * Creates a SpherecastCommand.
        * @param physicsScene The physics scene to run the command in.
        * @param origin The starting point of the sphere cast.
        * @param radius The radius of the casting sphere.
        * @param direction The direction of the sphere cast.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
        * @param distance The maximum distance the cast should check for collisions.
        */
        public constructor ($physicsScene: PhysicsScene, $origin: Vector3, $radius: float, $direction: Vector3, $queryParameters: QueryParameters, $distance?: float)
        /**
        * @methodSwap ScheduleBatch_EBB7509C_AFF7A0B2
        */
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<SpherecastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: int, $maxHits: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
        /**
        * @methodSwap ScheduleBatch_EBB7509C_H5098FB7D
        */
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<SpherecastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
    }

    /**
    * Use this struct to set up a capsule cast command that is performed asynchronously during a job.
    */
    class CapsulecastCommand extends System.ValueType {

        /**
        * Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
        */
        public queryParameters : QueryParameters
        /**
        * The center of the sphere at the start of the capsule.
        */
        public get point1(): Vector3;
        public set point1(value: Vector3);
        /**
        * The center of the sphere at the end of the capsule.
        */
        public get point2(): Vector3;
        public set point2(value: Vector3);
        /**
        * The radius of the capsule.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * The direction of the capsule cast.
        */
        public get direction(): Vector3;
        public set direction(value: Vector3);
        /**
        * The maximum distance the capsule cast checks for collision.
        */
        public get distance(): float;
        public set distance(value: float);
        /**
        * The physics scene this command is run in.
        */
        public get physicsScene(): PhysicsScene;
        public set physicsScene(value: PhysicsScene);

        /**
        * Creates a CapsulecastCommand.
        * @param p1 The center of the sphere at the start of the capsule.
        * @param p2 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param direction The direction of the capsule cast.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
        * @param distance The maximum length of the sweep.
        */
        public constructor ($p1: Vector3, $p2: Vector3, $radius: float, $direction: Vector3, $queryParameters: QueryParameters, $distance?: float)
        /**
        * Creates a CapsulecastCommand.
        * @param physicsScene The physics scene to run the command in.
        * @param p1 The center of the sphere at the start of the capsule.
        * @param p2 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param direction The direction of the capsule cast.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
        * @param distance The maximum length of the sweep.
        */
        public constructor ($physicsScene: PhysicsScene, $p1: Vector3, $p2: Vector3, $radius: float, $direction: Vector3, $queryParameters: QueryParameters, $distance?: float)
        /**
        * @methodSwap ScheduleBatch_EBB7509C_H3D65A20A
        */
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<CapsulecastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: int, $maxHits: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
        /**
        * @methodSwap ScheduleBatch_EBB7509C_H577A1E15
        */
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<CapsulecastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
    }

    /**
    * Use this struct to set up a box cast command to be performed asynchronously during a job.
    */
    class BoxcastCommand extends System.ValueType {

        /**
        * Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
        */
        public queryParameters : QueryParameters
        /**
        * The center of the box.
        */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
        * The half size of the box in each dimension.
        */
        public get halfExtents(): Vector3;
        public set halfExtents(value: Vector3);
        /**
        * The rotation of the box.
        */
        public get orientation(): Quaternion;
        public set orientation(value: Quaternion);
        /**
        * The direction in which to sweep the box.
        */
        public get direction(): Vector3;
        public set direction(value: Vector3);
        /**
        * The maximum distance of the sweep.
        */
        public get distance(): float;
        public set distance(value: float);
        /**
        * The physics scene this command is run in.
        */
        public get physicsScene(): PhysicsScene;
        public set physicsScene(value: PhysicsScene);

        /**
        * Creates a BoxcastCommand.
        * @param center The center of the box.
        * @param halfExtents The half size of the box in each dimension.
        * @param orientation The rotation of the box.
        * @param direction The direction in which to sweep the box.
        * @param distance The maximum length of the cast.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
        */
        public constructor ($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $direction: Vector3, $queryParameters: QueryParameters, $distance?: float)
        /**
        * Creates a BoxcastCommand.
        * @param physicsScene The physics scene to run the command in.
        * @param center The center of the box.
        * @param halfExtents The half size of the box in each dimension.
        * @param orientation The rotation of the box.
        * @param direction The direction in which to sweep the box.
        * @param distance The maximum length of the cast.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask, hit triggers and hit backfaces.
        */
        public constructor ($physicsScene: PhysicsScene, $center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $direction: Vector3, $queryParameters: QueryParameters, $distance?: float)
        /**
        * @methodSwap ScheduleBatch_EBB7509C_B719E768
        */
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<BoxcastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: int, $maxHits: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
        /**
        * @methodSwap ScheduleBatch_EBB7509C_E6DE34CB
        */
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<BoxcastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
    }

    /**
    * Struct used to set up a closest point command to be performed asynchronously during a job.
    * When you use this struct to schedule a batch of closest commands, they are performed asynchronously and in parallel to each other. The results of the closest points are written to the results buffer. Because the results are written asynchronously, the results buffer cannot be accessed until the job has been completed.
    * The result for a command at index N in the command buffer is stored at index N in the results buffer.
    */
    class ClosestPointCommand extends System.ValueType {

        /**
        * Location you want to find the closest point to.
        */
        public get point(): Vector3;
        public set point(value: Vector3);
        /**
        * The ID of the Collider that you find the closest point on.
        */
        public get colliderInstanceID(): int;
        public set colliderInstanceID(value: int);
        /**
        * The position of the Collider.
        */
        public get position(): Vector3;
        public set position(value: Vector3);
        /**
        * The rotation of the Collider.
        */
        public get rotation(): Quaternion;
        public set rotation(value: Quaternion);
        /**
        * The global scale of the Collider.
        */
        public get scale(): Vector3;
        public set scale(value: Vector3);

        /**
        * Create a ClosestPointCommand using Instance ID of the Collider.
        * @param point Location you want to find the closest point to.
        * @param colliderInstanceID The ID of the Collider that you find the closest point on.
        * @param position The position of the Collider.
        * @param rotation The rotation of the Collider.
        * @param scale The global scale of the Collider.
        */
        public constructor ($point: Vector3, $colliderInstanceID: int, $position: Vector3, $rotation: Quaternion, $scale: Vector3)
        /**
        * Schedule a batch of closest points which are performed in a job.
        * @param point Location you want to find the closest point to.
        * @param collider The Collider that you find the closest point on.
        * @param position The position of the Collider.
        * @param rotation The rotation of the Collider.
        * @param scale The global scale of the Collider.
        */
        public constructor ($point: Vector3, $collider: Collider, $position: Vector3, $rotation: Quaternion, $scale: Vector3)
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<ClosestPointCommand>, $results: Unity_Collections.NativeArray$1<Vector3>, $minCommandsPerJob: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
    }

    /**
    * Struct used to setup an overlap sphere command to be performed asynchronously during a job.
    */
    class OverlapSphereCommand extends System.ValueType {

        /**
        * Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
        */
        public queryParameters : QueryParameters
        /**
        * The center of the sphere.
        */
        public get point(): Vector3;
        public set point(value: Vector3);
        /**
        * The radius of the sphere.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * The physics scene the command is run in.
        */
        public get physicsScene(): PhysicsScene;
        public set physicsScene(value: PhysicsScene);

        /**
        * Create an OverlapSphereCommand.
        * @param point The center of the sphere.
        * @param radius The radius of the sphere.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
        */
        public constructor ($point: Vector3, $radius: float, $queryParameters: QueryParameters)
        /**
        * Create an OverlapSphereCommand.
        * @param physicsScene The physics scene to run the overlap sphere query in.
        * @param point The center of the sphere.
        * @param radius The radius of the sphere.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
        */
        public constructor ($physicsScene: PhysicsScene, $point: Vector3, $radius: float, $queryParameters: QueryParameters)
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<OverlapSphereCommand>, $results: Unity_Collections.NativeArray$1<ColliderHit>, $minCommandsPerJob: int, $maxHits: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
    }

    /**
    * Struct used to set up an overlap box command to be performed asynchronously during a job.
    */
    class OverlapBoxCommand extends System.ValueType {

        /**
        * Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
        */
        public queryParameters : QueryParameters
        /**
        * The center of the box.
        */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
        * Half of the size of the box in each dimension.
        */
        public get halfExtents(): Vector3;
        public set halfExtents(value: Vector3);
        /**
        * The orientation of the box.
        */
        public get orientation(): Quaternion;
        public set orientation(value: Quaternion);
        /**
        * The physics scene this command is run in.
        */
        public get physicsScene(): PhysicsScene;
        public set physicsScene(value: PhysicsScene);

        /**
        * Create an OverlapBoxCommand.
        * @param center The center of the box.
        * @param halfExtents The half of the size of the box in each dimension.
        * @param orientation The orientation of the box.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask, hit triggers.
        */
        public constructor ($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $queryParameters: QueryParameters)
        /**
        * Create a OverlapBoxCommand.
        * @param physicsScene The physics scene to run the overlap box query in.
        * @param center The center of the box.
        * @param halfExtents Half of the size of the box in each dimension.
        * @param orientation The orientation of the box.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
        */
        public constructor ($physicsScene: PhysicsScene, $center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $queryParameters: QueryParameters)
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<OverlapBoxCommand>, $results: Unity_Collections.NativeArray$1<ColliderHit>, $minCommandsPerJob: int, $maxHits: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
    }

    /**
    * Struct used to set up an overlap capsule command to be performed asynchronously during a job.
    */
    class OverlapCapsuleCommand extends System.ValueType {

        /**
        * Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
        */
        public queryParameters : QueryParameters
        /**
        * The center of the sphere at the start of the capsule.
        */
        public get point0(): Vector3;
        public set point0(value: Vector3);
        /**
        * The center of the sphere at the end of the capsule.
        */
        public get point1(): Vector3;
        public set point1(value: Vector3);
        /**
        * The radius of the capsule.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * The physics scene this command is run in.
        */
        public get physicsScene(): PhysicsScene;
        public set physicsScene(value: PhysicsScene);

        /**
        * Create an OverlapCapsuleCommand.
        * @param point0 The center of the sphere at the start of the capsule.
        * @param point1 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
        */
        public constructor ($point0: Vector3, $point1: Vector3, $radius: float, $queryParameters: QueryParameters)
        /**
        * Create an OverlapCapsuleCommand.
        * @param physicsScene The physics scene this command is run in.
        * @param point0 The center of the sphere at the start of the capsule.
        * @param point1 The center of the sphere at the end of the capsule.
        * @param radius The radius of the capsule.
        * @param queryParameters Structure for specifying additional parameters for a batch query such as layer mask or hit triggers.
        */
        public constructor ($physicsScene: PhysicsScene, $point0: Vector3, $point1: Vector3, $radius: float, $queryParameters: QueryParameters)
        public static ScheduleBatch ($commands: Unity_Collections.NativeArray$1<OverlapCapsuleCommand>, $results: Unity_Collections.NativeArray$1<ColliderHit>, $minCommandsPerJob: int, $maxHits: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IFormattable {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

    interface IEquatable$1<T> {

        Equals? ($other: T) : boolean
    }

    interface IDisposable {

    }

    interface Action$2<T1,T2> {
        (arg1: T1, arg2: T2) : void; 
        Invoke?: (arg1: T1, arg2: T2) => void;
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

declare module 'System.Collections' {

    interface IEnumerable {

    }

    interface IEnumerator {

    }

    interface IList extends ICollection {

    }

    interface ICollection extends IEnumerable {

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

        GetEnumerator? () : IEnumerator$1<T>
    }

    interface IEnumerator$1<T> extends System_Collections.IEnumerator, System.IDisposable {

    }

    interface IReadOnlyList$1<T> extends IReadOnlyCollection$1<T> {

    }

    interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {

    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

declare module 'Unity.Collections' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    /**
    * A NativeArray exposes a buffer of native memory to managed code, making it possible to share data between managed and native without marshalling costs.
    */
    interface NativeArray$1<T> extends System_Collections_Generic.IEnumerable$1<T>, System.IDisposable, System.IEquatable$1<NativeArray$1<T>> {

    }

}

declare module 'UnityEngine.Physics' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as Unity_Collections_NativeArray$1 from 'Unity.Collections.NativeArray$1'

    /**
    * @param scene The physics scene that the contacts belong to.
    * @param headerArray A contact buffer where all the contact data of the previous simulation step is stored.
    */
    interface ContactEventDelegate {
        (scene: UnityEngine.PhysicsScene, headerArray: Unity_Collections_NativeArray$1.ReadOnly<UnityEngine.ContactPairHeader>) : void; 
        Invoke?: (scene: UnityEngine.PhysicsScene, headerArray: Unity_Collections_NativeArray$1.ReadOnly<UnityEngine.ContactPairHeader>) => void;
    }
    var ContactEventDelegate: { new (func: (scene: UnityEngine.PhysicsScene, headerArray: Unity_Collections_NativeArray$1.ReadOnly<UnityEngine.ContactPairHeader>) => void): ContactEventDelegate; }

}

declare module 'Unity.Collections.NativeArray$1' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    /**
    * NativeArray interface constrained to read-only operation.
    */
    interface ReadOnly<T> extends System_Collections_Generic.IEnumerable$1<T> {

    }

}

declare module 'UnityEngine.SceneManagement' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    /**
    * Run-time data structure for *.unity file.
    */
    interface Scene {

    }

    interface Scene {

        /**
        * An extension method that returns the 3D physics Scene from the Scene.
        * @param scene The Scene from which to return the 3D physics Scene.
        * @returns The 3D physics Scene used by the Scene.
        * @extension UnityEngine.PhysicsSceneExtensions.GetPhysicsScene
        */
        GetPhysicsScene () : UnityEngine.PhysicsScene
    }

}

declare module 'Unity.Jobs' {
    import * as System from 'System'

    /**
    * A handle to a job, which uniquely identifies a job scheduled in the job system.
    */
    interface JobHandle extends System.IEquatable$1<JobHandle> {

    }

}

