
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as Unity_Collections from 'Unity.Collections'
    import * as UnityEngine_CompositeCollider2D from 'UnityEngine.CompositeCollider2D'
    import * as System_Collections from 'System.Collections'
    import * as UnityEngine_SceneManagement from 'UnityEngine.SceneManagement'

    /**
    * Represents a single instance of a 2D physics Scene.
    */
    class PhysicsScene2D extends System.ValueType implements System.IEquatable$1<PhysicsScene2D> {

        public ToString () : string
        public GetHashCode () : int
        public Equals ($other: any) : boolean
        public Equals ($other: PhysicsScene2D) : boolean
        /**
        * Determines whether the physics Scene is valid or not.
        * @returns True when the physics Scene valid.
        */
        public IsValid () : boolean
        /**
        * Determines whether the physics Scene is empty or not.
        * @returns True when the physics Scene is empty.
        */
        public IsEmpty () : boolean
        /**
        * Simulate physics associated with this PhysicsScene.
        * @param step The time to advance physics by.
        * @returns Whether the simulation was run or not.  Running the simulation during physics callbacks will always fail.
        */
        public Simulate ($step: float) : boolean
        /**
        * Casts a line segment against colliders in the PhysicsScene2D, returning the first intersection only.
        * @param start The start point of the line in world space.
        * @param end The end point of the line in world space.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns The cast results returned.
        * @methodSwap Linecast_EBB7509C_H8A060F0A
        */
        public Linecast ($start: Vector2, $end: Vector2, $layerMask?: int) : RaycastHit2D
        /**
        * Casts a line segment against colliders in the PhysicsScene2D, returning the first intersection only.
        * @param start The start point of the line in world space.
        * @param end The end point of the line in world space.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns The cast results returned.
        */
        public Linecast ($start: Vector2, $end: Vector2, $contactFilter: ContactFilter2D) : RaycastHit2D
        /**
        * Casts a line segment against colliders in the PhysicsScene2D.
        * @param start The start point of the line in world space.
        * @param end The end point of the line in world space.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap Linecast_EBB7509C_F8EF931B
        */
        public Linecast ($start: Vector2, $end: Vector2, $results: RaycastHit2D[], $layerMask?: int) : int
        /**
        * Casts a line segment against colliders in the PhysicsScene2D.
        * @param start The start point of the line in world space.
        * @param end The end point of the line in world space.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Returns the number of results placed in the results array.
        */
        public Linecast ($start: Vector2, $end: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        public Linecast ($start: Vector2, $end: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>) : int
        /**
        * Casts a ray against colliders in the PhysicsScene2D, returning the first intersection only.
        * @param origin The point in 2D space where the ray originates.
        * @param direction The vector representing the direction of the ray.
        * @param distance Maximum distance over which to cast the ray.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth, or normal angle.
        * @returns The cast results returned.
        * @methodSwap Raycast_EBB7509C_H63D96841
        */
        public Raycast ($origin: Vector2, $direction: Vector2, $distance: float, $layerMask?: int) : RaycastHit2D
        /**
        * Casts a ray against colliders in the PhysicsScene2D, returning the first intersection only.
        * @param origin The point in 2D space where the ray originates.
        * @param direction The vector representing the direction of the ray.
        * @param distance Maximum distance over which to cast the ray.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth, or normal angle.
        * @returns The cast results returned.
        * @methodSwap Raycast_EBB7509C_BB4F77EB
        */
        public Raycast ($origin: Vector2, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D) : RaycastHit2D
        /**
        * Casts a ray against colliders the PhysicsScene2D, returning all intersections.
        * @param origin The point in 2D space where the ray originates.
        * @param direction The vector representing the direction of the ray.
        * @param distance Maximum distance over which to cast the ray.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth, or normal angle.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap Raycast_EBB7509C_D22A498
        */
        public Raycast ($origin: Vector2, $direction: Vector2, $distance: float, $results: RaycastHit2D[], $layerMask?: int) : int
        /**
        * Casts a ray against colliders the PhysicsScene2D, returning all intersections.
        * @param origin The point in 2D space where the ray originates.
        * @param direction The vector representing the direction of the ray.
        * @param distance Maximum distance over which to cast the ray.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth, or normal angle.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap Raycast_EBB7509C_AD84ABC2
        */
        public Raycast ($origin: Vector2, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap Raycast_EBB7509C_A490FA7E
        */
        public Raycast ($origin: Vector2, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>) : int
        /**
        * Casts a circle against colliders in the PhysicsScene2D, returning the first intersection only.
        * @param origin The point in 2D space where the circle originates.
        * @param radius The radius of the circle.
        * @param direction Vector representing the direction to cast the circle.
        * @param distance Maximum distance over which to cast the circle.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns The cast results returned.
        * @methodSwap CircleCast_EBB7509C_B9B125CE
        */
        public CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $layerMask?: int) : RaycastHit2D
        /**
        * Casts a circle against colliders in the PhysicsScene2D, returning the first intersection only.
        * @param origin The point in 2D space where the circle originates.
        * @param radius The radius of the circle.
        * @param direction Vector representing the direction to cast the circle.
        * @param distance Maximum distance over which to cast the circle.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns The cast results returned.
        * @methodSwap CircleCast_EBB7509C_F0D847D6
        */
        public CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D) : RaycastHit2D
        /**
        * Casts a circle against the colliders in the PhysicsScene2D, returning all intersections.
        * @param origin The point in 2D space where the circle originates.
        * @param radius The radius of the circle.
        * @param direction Vector representing the direction to cast the circle.
        * @param distance Maximum distance over which to cast the circle.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap CircleCast_EBB7509C_H7D2DBF1F
        */
        public CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $results: RaycastHit2D[], $layerMask?: int) : int
        /**
        * Casts a circle against the colliders in the PhysicsScene2D, returning all intersections.
        * @param origin The point in 2D space where the circle originates.
        * @param radius The radius of the circle.
        * @param direction Vector representing the direction to cast the circle.
        * @param distance Maximum distance over which to cast the circle.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap CircleCast_EBB7509C_H30639CB7
        */
        public CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap CircleCast_EBB7509C_H9BDE3A7D
        */
        public CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>) : int
        /**
        * Casts a box against colliders in the PhysicsScene2D, returning the first intersection only.
        * @param origin The point in 2D space where the box originates.
        * @param size The size of the box.
        * @param angle The angle of the box (in degrees).
        * @param direction Vector representing the direction to cast the box.
        * @param distance Maximum distance over which to cast the box.
        * @param layerMask Filter to detect colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns The cast results returned.
        * @methodSwap BoxCast_EBB7509C_H19869D46
        */
        public BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $layerMask?: int) : RaycastHit2D
        /**
        * Casts a box against colliders in the PhysicsScene2D, returning the first intersection only.
        * @param origin The point in 2D space where the box originates.
        * @param size The size of the box.
        * @param angle The angle of the box (in degrees).
        * @param direction Vector representing the direction to cast the box.
        * @param distance Maximum distance over which to cast the box.
        * @param layerMask Filter to detect colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns The cast results returned.
        * @methodSwap BoxCast_EBB7509C_H6CB12A3E
        */
        public BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D) : RaycastHit2D
        /**
        * Casts a box against the colliders in the PhysicsScene2D, returning all intersections.
        * @param origin The point in 2D space where the box originates.
        * @param size The size of the box.
        * @param angle The angle of the box (in degrees).
        * @param direction Vector representing the direction to cast the box.
        * @param distance Maximum distance over which to cast the box.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to detect colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap BoxCast_EBB7509C_A86F20C7
        */
        public BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $results: RaycastHit2D[], $layerMask?: int) : int
        /**
        * Casts a box against the colliders in the PhysicsScene2D, returning all intersections.
        * @param origin The point in 2D space where the box originates.
        * @param size The size of the box.
        * @param angle The angle of the box (in degrees).
        * @param direction Vector representing the direction to cast the box.
        * @param distance Maximum distance over which to cast the box.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to detect colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap BoxCast_EBB7509C_H9A5384CF
        */
        public BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap BoxCast_EBB7509C_H9D779B5
        */
        public BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>) : int
        /**
        * Casts a capsule against colliders in the PhysicsScene2D, returning the first intersection only.
        * @param origin The point in 2D space where the capsule originates.
        * @param size The size of the capsule.
        * @param capsuleDirection The direction of the capsule.
        * @param angle The angle of the capsule (in degrees).
        * @param direction Vector representing the direction to cast the capsule.
        * @param distance Maximum distance over which to cast the capsule.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns The cast results returned.
        * @methodSwap CapsuleCast_EBB7509C_H3FBA55C1
        */
        public CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $layerMask?: int) : RaycastHit2D
        /**
        * Casts a capsule against colliders in the PhysicsScene2D, returning the first intersection only.
        * @param origin The point in 2D space where the capsule originates.
        * @param size The size of the capsule.
        * @param capsuleDirection The direction of the capsule.
        * @param angle The angle of the capsule (in degrees).
        * @param direction Vector representing the direction to cast the capsule.
        * @param distance Maximum distance over which to cast the capsule.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns The cast results returned.
        * @methodSwap CapsuleCast_EBB7509C_H8A61646B
        */
        public CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D) : RaycastHit2D
        /**
        * Casts a capsule against the Colliders in the PhysicsScene2D, returning all intersections.
        * @param origin The point in 2D space where the capsule originates.
        * @param size The size of the capsule.
        * @param capsuleDirection The direction of the capsule.
        * @param angle The angle of the capsule (in degrees).
        * @param direction Vector representing the direction to cast the capsule.
        * @param distance Maximum distance over which to cast the capsule.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap CapsuleCast_EBB7509C_H54A07A18
        */
        public CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $results: RaycastHit2D[], $layerMask?: int) : int
        /**
        * Casts a capsule against the Colliders in the PhysicsScene2D, returning all intersections.
        * @param origin The point in 2D space where the capsule originates.
        * @param size The size of the capsule.
        * @param capsuleDirection The direction of the capsule.
        * @param angle The angle of the capsule (in degrees).
        * @param direction Vector representing the direction to cast the capsule.
        * @param distance Maximum distance over which to cast the capsule.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask The filter used to detect Colliders only on certain layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap CapsuleCast_EBB7509C_H3F451042
        */
        public CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap CapsuleCast_EBB7509C_CBB7EFFE
        */
        public CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>) : int
        /**
        * Cast a 3D ray against the colliders in the PhysicsScene2D, returning the first intersection only.
        * @param ray The 3D ray defining origin and direction to test.
        * @param distance Maximum distance over which to cast the ray.
        * @param layerMask Filter to detect colliders only on certain layers.
        * @returns The cast results returned.
        * @methodSwap GetRayIntersection_EBB7509C_DD46DFA8
        */
        public GetRayIntersection ($ray: Ray, $distance: float, $layerMask?: int) : RaycastHit2D
        /**
        * Cast a 3D ray against the colliders in the PhysicsScene2D, returning all intersections.
        * @param ray The 3D ray defining origin and direction to test.
        * @param distance Maximum distance over which to cast the ray.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to detect colliders only on certain layers.
        * @returns The number of results returned.
        * @methodSwap GetRayIntersection_EBB7509C_B4CE0EA9
        */
        public GetRayIntersection ($ray: Ray, $distance: float, $results: RaycastHit2D[], $layerMask?: int) : int
        /**
        * Checks a point against Colliders in the PhysicsScene2D, returning the first intersection only.
        * @param point A point in world space.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns The collider overlapping the point.
        * @methodSwap OverlapPoint_EBB7509C_AA3D0932
        */
        public OverlapPoint ($point: Vector2, $layerMask?: int) : Collider2D
        /**
        * Checks a point against Colliders in the PhysicsScene2D, returning the first intersection only.
        * @param point A point in world space.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns The collider overlapping the point.
        */
        public OverlapPoint ($point: Vector2, $contactFilter: ContactFilter2D) : Collider2D
        /**
        * Checks a point against Colliders in the PhysicsScene2D, returning all intersections.
        * @param point A point in world space.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapPoint_EBB7509C_H3D239CF3
        */
        public OverlapPoint ($point: Vector2, $results: Collider2D[], $layerMask?: int) : int
        /**
        * Checks a point against Colliders in the PhysicsScene2D, returning all intersections.
        * @param point A point in world space.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        */
        public OverlapPoint ($point: Vector2, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        public OverlapPoint ($point: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Checks a circle against Colliders in the PhysicsScene2D, returning the first intersection only.
        * @param point The centre of the circle.
        * @param radius The radius of the circle.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns The collider overlapping the circle.
        * @methodSwap OverlapCircle_EBB7509C_H19779B09
        */
        public OverlapCircle ($point: Vector2, $radius: float, $layerMask?: int) : Collider2D
        /**
        * Checks a circle against Colliders in the PhysicsScene2D, returning the first intersection only.
        * @param point The centre of the circle.
        * @param radius The radius of the circle.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns The collider overlapping the circle.
        * @methodSwap OverlapCircle_EBB7509C_H1887DAC3
        */
        public OverlapCircle ($point: Vector2, $radius: float, $contactFilter: ContactFilter2D) : Collider2D
        /**
        * Checks a circle against Colliders in the PhysicsScene2D, returning all intersections.
        * @param point The centre of the circle.
        * @param radius The radius of the circle.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapCircle_EBB7509C_H4DF5A8E8
        */
        public OverlapCircle ($point: Vector2, $radius: float, $results: Collider2D[], $layerMask?: int) : int
        /**
        * Checks a circle against Colliders in the PhysicsScene2D, returning all intersections.
        * @param point The centre of the circle.
        * @param radius The radius of the circle.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapCircle_EBB7509C_H18E0FCA2
        */
        public OverlapCircle ($point: Vector2, $radius: float, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapCircle_EBB7509C_H25A56476
        */
        public OverlapCircle ($point: Vector2, $radius: float, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Checks a box against Colliders in the PhysicsScene2D, returning the first intersection only.
        * @param point The center of the box.
        * @param size The size of the box.
        * @param angle The angle of the box.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns The collider overlapping the box.
        * @methodSwap OverlapBox_EBB7509C_H63D96841
        */
        public OverlapBox ($point: Vector2, $size: Vector2, $angle: float, $layerMask?: int) : Collider2D
        /**
        * Checks a box against Colliders in the PhysicsScene2D, returning the first intersection only.
        * @param point The center of the box.
        * @param size The size of the box.
        * @param angle The angle of the box.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns The collider overlapping the box.
        * @methodSwap OverlapBox_EBB7509C_BB4F77EB
        */
        public OverlapBox ($point: Vector2, $size: Vector2, $angle: float, $contactFilter: ContactFilter2D) : Collider2D
        /**
        * Checks a box against Colliders in the PhysicsScene2D, returning all intersections.
        * @param point The center of the box.
        * @param size The size of the box.
        * @param angle The angle of the box.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapBox_EBB7509C_C4886080
        */
        public OverlapBox ($point: Vector2, $size: Vector2, $angle: float, $results: Collider2D[], $layerMask?: int) : int
        /**
        * Checks a box against Colliders in the PhysicsScene2D, returning all intersections.
        * @param point The center of the box.
        * @param size The size of the box.
        * @param angle The angle of the box.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapBox_EBB7509C_H2DFAB68A
        */
        public OverlapBox ($point: Vector2, $size: Vector2, $angle: float, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapBox_EBB7509C_H9202BC9E
        */
        public OverlapBox ($point: Vector2, $size: Vector2, $angle: float, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Checks an area (non-rotated box) against Colliders in the PhysicsScene2D, returning the first intersection only.
        * @param pointA One corner of the rectangle.
        * @param pointB The corner of the rectangle diagonally opposite the pointA corner.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns The collider overlapping the area.
        * @methodSwap OverlapArea_EBB7509C_H8A060F0A
        */
        public OverlapArea ($pointA: Vector2, $pointB: Vector2, $layerMask?: int) : Collider2D
        /**
        * Checks an area (non-rotated box) against Colliders in the PhysicsScene2D, returning the first intersection only.
        * @param pointA One corner of the rectangle.
        * @param pointB The corner of the rectangle diagonally opposite the pointA corner.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns The collider overlapping the area.
        */
        public OverlapArea ($pointA: Vector2, $pointB: Vector2, $contactFilter: ContactFilter2D) : Collider2D
        /**
        * Checks an area (non-rotated box) against Colliders in the PhysicsScene2D, returning all intersections.
        * @param pointA One corner of the rectangle.
        * @param pointB The corner of the rectangle diagonally opposite the pointA corner.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapArea_EBB7509C_H774FA50B
        */
        public OverlapArea ($pointA: Vector2, $pointB: Vector2, $results: Collider2D[], $layerMask?: int) : int
        /**
        * Checks an area (non-rotated box) against Colliders in the PhysicsScene2D, returning all intersections.
        * @param pointA One corner of the rectangle.
        * @param pointB The corner of the rectangle diagonally opposite the pointA corner.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        */
        public OverlapArea ($pointA: Vector2, $pointB: Vector2, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        public OverlapArea ($pointA: Vector2, $pointB: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Checks a capsule against Colliders in the PhysicsScene2D, returning the first intersection only.
        * @param point The center of the capsule.
        * @param size The size of the capsule.
        * @param direction The direction of the capsule.
        * @param angle The angle of the capsule.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns The collider overlapping the capsule.
        * @methodSwap OverlapCapsule_EBB7509C_H68A95EB2
        */
        public OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $layerMask?: int) : Collider2D
        /**
        * Checks a capsule against Colliders in the PhysicsScene2D, returning the first intersection only.
        * @param point The center of the capsule.
        * @param size The size of the capsule.
        * @param direction The direction of the capsule.
        * @param angle The angle of the capsule.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns The collider overlapping the capsule.
        * @methodSwap OverlapCapsule_EBB7509C_H8772A112
        */
        public OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $contactFilter: ContactFilter2D) : Collider2D
        /**
        * Checks a capsule against Colliders in the PhysicsScene2D, returning all intersections.
        * @param point The center of the capsule.
        * @param size The size of the capsule.
        * @param direction The direction of the capsule.
        * @param angle The angle of the capsule.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapCapsule_EBB7509C_H2585BE73
        */
        public OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $results: Collider2D[], $layerMask?: int) : int
        /**
        * Checks a capsule against Colliders in the PhysicsScene2D, returning all intersections.
        * @param point The center of the capsule.
        * @param size The size of the capsule.
        * @param direction The direction of the capsule.
        * @param angle The angle of the capsule.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapCapsule_EBB7509C_H1CC7CA3
        */
        public OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapCapsule_EBB7509C_EEE23F61
        */
        public OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Checks a Collider against Colliders in the PhysicsScene2D, returning all intersections.
        * @param collider The Collider that defines the area used to query for other Collider overlaps.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapCollider_EBB7509C_B0E7B4F6
        */
        public static OverlapCollider ($collider: Collider2D, $results: Collider2D[], $layerMask?: int) : int
        /**
        * Checks a Collider against Colliders in the PhysicsScene2D, returning all intersections.
        * @param collider The Collider that defines the area used to query for other Collider overlaps.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param layerMask Filter to check objects only on specific layers.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
        * @returns Returns the number of results placed in the results array.
        */
        public static OverlapCollider ($collider: Collider2D, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        public static OverlapCollider ($collider: Collider2D, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        public static op_Equality ($lhs: PhysicsScene2D, $rhs: PhysicsScene2D) : boolean
        public static op_Inequality ($lhs: PhysicsScene2D, $rhs: PhysicsScene2D) : boolean
    }

    /**
    * Returns information about an object detected by a raycast in 2D physics.
    */
    class RaycastHit2D extends System.ValueType {

        /**
        * The centroid of the primitive used to perform the cast.
        */
        public get centroid(): Vector2;
        public set centroid(value: Vector2);
        /**
        * The point in world space where the ray hit the collider's surface.
        */
        public get point(): Vector2;
        public set point(value: Vector2);
        /**
        * The normal vector of the surface hit by the ray.
        */
        public get normal(): Vector2;
        public set normal(value: Vector2);
        /**
        * The distance from the ray origin to the impact point.
        */
        public get distance(): float;
        public set distance(value: float);
        /**
        * Fraction of the distance along the ray that the hit occurred.
        */
        public get fraction(): float;
        public set fraction(value: float);
        /**
        * The collider hit by the ray.
        */
        public get collider(): Collider2D;
        /**
        * The Rigidbody2D attached to the object that was hit.
        */
        public get rigidbody(): Rigidbody2D;
        /**
        * The Transform of the object that was hit.
        */
        public get transform(): Transform;

        public CompareTo ($other: RaycastHit2D) : int
        public static op_Implicit ($hit: RaycastHit2D) : boolean
    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * Parent class for collider types used with 2D gameplay.
    */
    class Collider2D extends Behaviour {

        /**
        * The density of the collider used to calculate its mass (when auto mass is enabled).
        */
        public get density(): float;
        public set density(value: float);
        /**
        * Is this collider configured as a trigger?
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Whether the collider is used by an attached effector or not.
        */
        public get usedByEffector(): boolean;
        public set usedByEffector(value: boolean);
        /**
        * Sets whether the Collider will be used or not used by a CompositeCollider2D.
        */
        public get usedByComposite(): boolean;
        public set usedByComposite(value: boolean);
        /**
        * Get the CompositeCollider2D that is available to be attached to the collider.
        */
        public get composite(): CompositeCollider2D;
        /**
        * The local offset of the collider geometry.
        */
        public get offset(): Vector2;
        public set offset(value: Vector2);
        /**
        * The Rigidbody2D attached to the Collider2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The number of active PhysicsShape2D the Collider2D is currently using.
        */
        public get shapeCount(): int;
        /**
        * The world space bounding area of the collider.
        */
        public get bounds(): Bounds;
        /**
        * The error state that indicates the state of the physics shapes the 2D Collider tried to create. (Read Only)
        */
        public get errorState(): ColliderErrorState2D;
        /**
        * The PhysicsMaterial2D that is applied to this collider.
        */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
        * A decision priority assigned to this Collider2D used when there is a conflicting decision on whether a contact between itself and another Collision2D should happen or not.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional Layers that this Collider2D should exclude when deciding if a contact with another Collider2D should happen or not.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional Layers that this Collider2D should include when deciding if a contact with another Collider2D should happen or not.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D is allowed to send forces to during a Collision contact with another Collider2D.
        */
        public get forceSendLayers(): LayerMask;
        public set forceSendLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D can receive forces from during a Collision contact with another Collider2D.
        */
        public get forceReceiveLayers(): LayerMask;
        public set forceReceiveLayers(value: LayerMask);
        /**
        * The layers of other Collider2D involved in contacts with this Collider2D that will be captured.
        */
        public get contactCaptureLayers(): LayerMask;
        public set contactCaptureLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D will report collision or trigger callbacks for during a contact with another Collider2D.
        */
        public get callbackLayers(): LayerMask;
        public set callbackLayers(value: LayerMask);
        /**
        * Get the friction used by the collider.
        */
        public get friction(): float;
        /**
        * Get the bounciness used by the collider.
        */
        public get bounciness(): float;

        private constructor ()
        /**
        * Creates a planar Mesh that is identical to the area defined by the Collider2D geometry.
        * @param useBodyPosition Should the mesh be transformed by the position of the attached Rigidbody2D?
        * @param useBodyRotation Should the mesh be transformed by the rotation of the attached Rigidbody2D?
        * @returns The planar Mesh created that matches the collider geometry or NULL if no Mesh could be created.
        */
        public CreateMesh ($useBodyPosition: boolean, $useBodyRotation: boolean) : Mesh
        /**
        * Generates a simple hash value based upon the geometry of the Collider2D.
        * @returns A hash value that uniquely identifies the configured geometry of the Collider2D.
        */
        public GetShapeHash () : uint
        /**
        * Gets all the PhysicsShape2D used by the Collider2D.
        * @param physicsShapeGroup The PhysicsShapeGroup2D to store the retrieved PhysicsShape2D in.
        * @returns Returns the number of PhysicsShape2D retrieved from the Collider2D.
        */
        public GetShapes ($physicsShapeGroup: PhysicsShapeGroup2D) : int
        /**
        * Gets the specified range of the PhysicsShape2D used by the Collider2D.
        * @param physicsShapeGroup The PhysicsShapeGroup2D to store the retrieved PhysicsShape2D in.
        * @param shapeIndex The index of the first shape to retrieve. This should be in the range of 0 to Collider2D.shapeCount-1.
        * @param shapeCount The number of shapes to retrieve. The shapeIndex + shapeCount must be less than or equal to Collider2D.shapeCount.
        * @returns Returns the number of PhysicsShape2D retrieved from the Collider2D. In all cases this should be the same number as shapeCount .
        * @methodSwap GetShapes_EBB7509C_F3523325
        */
        public GetShapes ($physicsShapeGroup: PhysicsShapeGroup2D, $shapeIndex: int, $shapeCount?: int) : int
        /**
        * Check whether this collider is touching the collider or not.
        * @param collider The collider to check if it is touching this collider.
        * @returns Whether this collider is touching the collider or not.
        */
        public IsTouching ($collider: Collider2D) : boolean
        /**
        * Check whether this collider is touching the collider or not with the results filtered by the contactFilter.
        * @param collider The collider to check if it is touching this collider.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Whether this collider is touching the collider or not.
        */
        public IsTouching ($collider: Collider2D, $contactFilter: ContactFilter2D) : boolean
        /**
        * Check whether this collider is touching other colliders or not with the results filtered by the contactFilter.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Whether this collider is touching the collider or not.
        */
        public IsTouching ($contactFilter: ContactFilter2D) : boolean
        public IsTouchingLayers () : boolean
        /**
        * Checks whether this collider is touching any colliders on the specified layerMask or not.
        * @param layerMask Any colliders on any of these layers count as touching.
        * @returns Whether this collider is touching any collider on the specified layerMask or not.
        * @methodSwap IsTouchingLayers_EBB7509C_F92D023A
        */
        public IsTouchingLayers ($layerMask: int) : boolean
        /**
        * Check if a collider overlaps a point in space.
        * @param point A point in world space.
        * @returns Does point overlap the collider?
        */
        public OverlapPoint ($point: Vector2) : boolean
        /**
        * Calculates the minimum separation of this collider against another collider.
        * @param collider A collider used to calculate the minimum separation against this collider.
        * @returns The minimum separation of collider and this collider.
        */
        public Distance ($collider: Collider2D) : ColliderDistance2D
        /**
        * Get a list of all colliders that overlap this collider.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        */
        public OverlapCollider ($contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        public OverlapCollider ($contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Retrieves all contact points for this Collider.
        * @param contacts An array of ContactPoint2D used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public GetContacts ($contacts: ContactPoint2D[]) : int
        public GetContacts ($contacts: System_Collections_Generic.List$1<ContactPoint2D>) : int
        /**
        * Retrieves all contact points for this Collider, with the results filtered by the contactFilter.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param contacts An array of ContactPoint2D used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public GetContacts ($contactFilter: ContactFilter2D, $contacts: ContactPoint2D[]) : int
        public GetContacts ($contactFilter: ContactFilter2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>) : int
        /**
        * Retrieves all colliders in contact with this Collider.
        * @param colliders An array of Collider2D used to receive the results.
        * @returns Returns the number of contacts placed in the colliders array.
        */
        public GetContacts ($colliders: Collider2D[]) : int
        public GetContacts ($colliders: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Retrieves all colliders in contact with this Collider, with the results filtered by the contactFilter.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param colliders An array of Collider2D used to receive the results.
        * @returns Returns the number of colliders placed in the colliders array.
        */
        public GetContacts ($contactFilter: ContactFilter2D, $colliders: Collider2D[]) : int
        public GetContacts ($contactFilter: ContactFilter2D, $colliders: System_Collections_Generic.List$1<Collider2D>) : int
        public Cast ($direction: Vector2, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap Cast_EBB7509C_BF1FAEF5
        */
        public Cast ($direction: Vector2, $results: RaycastHit2D[], $distance: float) : int
        /**
        * Casts the Collider shape into the Scene starting at the Collider position ignoring the Collider itself.
        * @param direction Vector representing the direction to cast the shape.
        * @param results Array to receive results.
        * @param distance Maximum distance over which to cast the shape.
        * @param ignoreSiblingColliders Determines whether the cast should ignore Colliders attached to the same Rigidbody2D (known as sibling Colliders).
        * @returns The number of results returned.
        * @methodSwap Cast_EBB7509C_H75F9C372
        */
        public Cast ($direction: Vector2, $results: RaycastHit2D[], $distance: float, $ignoreSiblingColliders: boolean) : int
        public Cast ($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap Cast_EBB7509C_H56566684
        */
        public Cast ($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: float) : int
        /**
        * Casts the Collider shape into the Scene starting at the Collider position ignoring the Collider itself.
        * @param direction Vector representing the direction to cast the shape.
        * @param contactFilter Filter results defined by the contact filter.
        * @param results Array to receive results.
        * @param distance Maximum distance over which to cast the shape.
        * @param ignoreSiblingColliders Determines whether the cast should ignore Colliders attached to the same Rigidbody2D (known as sibling Colliders).
        * @returns The number of results returned.
        * @methodSwap Cast_EBB7509C_H64BC181F
        */
        public Cast ($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: float, $ignoreSiblingColliders: boolean) : int
        /**
        * @methodSwap Cast_EBB7509C_H9BE033DD
        */
        public Cast ($direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: float, $ignoreSiblingColliders?: boolean) : int
        public Raycast ($direction: Vector2, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap Raycast_EBB7509C_BF1FAEF5
        */
        public Raycast ($direction: Vector2, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap Raycast_EBB7509C_F647F756
        */
        public Raycast ($direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int) : int
        /**
        * @methodSwap Raycast_EBB7509C_A29B2E2F
        */
        public Raycast ($direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int, $minDepth: float) : int
        /**
        * Casts a ray into the Scene that starts at the Collider position and ignores the Collider itself.
        * @param direction Vector representing the direction of the ray.
        * @param results Array to receive results.
        * @param distance Maximum distance over which to cast the ray.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @param contactFilter Filter results defined by the contact filter.
        * @returns The number of results returned.
        * @methodSwap Raycast_EBB7509C_H3AB7ABE0
        */
        public Raycast ($direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : int
        public Raycast ($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * Casts a ray into the Scene that starts at the Collider position and ignores the Collider itself.
        * @param direction Vector representing the direction of the ray.
        * @param results Array to receive results.
        * @param distance Maximum distance over which to cast the ray.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @param contactFilter Filter results defined by the contact filter.
        * @returns The number of results returned.
        * @methodSwap Raycast_EBB7509C_H56566684
        */
        public Raycast ($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap Raycast_EBB7509C_H9B6F923E
        */
        public Raycast ($direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: float) : int
        /**
        * Returns a point on the perimeter of this Collider that is closest to the specified position.
        * @param position The position from which to find the closest point on this Collider.
        * @returns A point on the perimeter of this Collider that is closest to the specified position.
        */
        public ClosestPoint ($position: Vector2) : Vector2
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
    * A class that allows you to create or modify meshes.
    */
    interface Mesh {

    }

    /**
    * Represents a group of PhysicsShape2D and their geometry.
    */
    class PhysicsShapeGroup2D extends System.Object {

        /**
        * The total number of  PhysicsShape2D in the shape group. (Read Only)
        */
        public get shapeCount(): int;
        /**
        * The total number of vertices in the shape group used to represent all PhysicsShape2D within it. (Read Only)
        */
        public get vertexCount(): int;
        /**
        * Gets or sets a matrix that transforms the PhysicsShapeGroup2D vertices from local space into world space.
        */
        public get localToWorldMatrix(): Matrix4x4;
        public set localToWorldMatrix(value: Matrix4x4);

        /**
        * Initializes and returns an instance of PhysicsShapeGroup2D. The shape group will be empty and ready for use by Collider2D.GetShapes, Rigidbody2D.GetShapes or manually adding shapes.
        * @param shapeCapacity The initial capacity of the PhysicsShape2D list used to contain the shapes.
        * @param vertexCapacity The initial capacity of the Vector2|vertices list used to contain the shape geometry.
        */
        public constructor ($shapeCapacity?: int, $vertexCapacity?: int)
        /**
        * Clears all the vertices and shapes from the PhysicsShapeGroup.
        */
        public Clear () : void
        /**
        * Adds a copy of all the PhysicsShape2D and their geometry from the specified physicsShapeGroup into this shape group. The specified physicsShapeGroup is not modified.
        * @param physicsShapeGroup The PhysicsShapeGroup2D to add to this shape group. (Read Only)
        */
        public Add ($physicsShapeGroup: PhysicsShapeGroup2D) : void
        public GetShapeData ($shapes: System_Collections_Generic.List$1<PhysicsShape2D>, $vertices: System_Collections_Generic.List$1<Vector2>) : void
        public GetShapeData ($shapes: Unity_Collections.NativeArray$1<PhysicsShape2D>, $vertices: Unity_Collections.NativeArray$1<Vector2>) : void
        public GetShapeVertices ($shapeIndex: int, $vertices: System_Collections_Generic.List$1<Vector2>) : void
        /**
        * Gets a single vertex of a shape. The vertex index is zero-based with the shape having a quantity of vertex specified by PhysicsShape2D.vertexCount.
        * @param shapeIndex The index of the shape stored in the PhysicsShapeGroup2D. The shape index is zero-based with the shape group having a quantity of shapes specified by PhysicsShapeGroup2D.shapeCount|shapeCount.
        * @param vertexIndex The index of the shape vertex stored in the PhysicsShapeGroup2D. The vertex index is zero-based with the shape having a quantity of vertex specified by PhysicsShape2D.vertexCount.
        * @returns Returns the specified shape vertex.
        */
        public GetShapeVertex ($shapeIndex: int, $vertexIndex: int) : Vector2
        /**
        * Sets a single vertex of a shape.
        * @param shapeIndex The index of the shape stored in the PhysicsShapeGroup2D. The shape index is zero-based with the shape group having a quantity of shapes specified by PhysicsShapeGroup2D.shapeCount|shapeCount.
        * @param vertexIndex The index of the shape vertex stored in the PhysicsShapeGroup2D. The vertex index is zero-based with the shape having a quantity of vertex specified by PhysicsShape2D.vertexCount.
        * @param vertex The value to set the shape vertex to.
        */
        public SetShapeVertex ($shapeIndex: int, $vertexIndex: int, $vertex: Vector2) : void
        /**
        * Sets the radius of a shape.
        * @param shapeIndex The index of the shape stored in the PhysicsShapeGroup2D. The shape index is zero-based with the shape group having a quantity of shapes specified by PhysicsShapeGroup2D.shapeCount|shapeCount.
        * @param radius The value to set the shape radius to.
        */
        public SetShapeRadius ($shapeIndex: int, $radius: float) : void
        /**
        * Sets the adjacent vertices of a shape.
        * @param shapeIndex The index of the shape to be modified that is stored the PhysicsShapeGroup2D.
        * @param useAdjacentStart Sets the PhysicsShape2D.useAdjacentStart property of the selected shape.
        * @param useAdjacentEnd Sets the PhysicsShape2D.useAdjacentEnd property of the selected shape.
        * @param adjacentStart Sets the PhysicsShape2D.adjacentStart property of the selected shape.
        * @param adjacentEnd Sets the PhysicsShape2D.adjacentEnd property of the selected shape.
        */
        public SetShapeAdjacentVertices ($shapeIndex: int, $useAdjacentStart: boolean, $useAdjacentEnd: boolean, $adjacentStart: Vector2, $adjacentEnd: Vector2) : void
        /**
        * When destroying a shape at the specified shapeIndex, all other shapes that exist above the specified shapeIndex will have their shape indices updated appropriately.
        * @param shapeIndex The index of the shape stored the PhysicsShapeGroup2D.
        */
        public DeleteShape ($shapeIndex: int) : void
        /**
        * Gets the PhysicsShape2D stored at the specified shapeIndex.
        * @param shapeIndex The index of the shape stored the PhysicsShapeGroup2D. The shape index is zero-based with the shape group having a quantity of shapes specified by PhysicsShapeGroup2D.shapeCount|shapeCount.
        * @returns Returns the shape stored at the specified shapeIndex.
        */
        public GetShape ($shapeIndex: int) : PhysicsShape2D
        /**
        * Adds a circle shape (PhysicsShapeType2D.Circle) to the shape group.
        * @param center The center point of the circle shape. This is analogous to Collider2D.offset.
        * @param radius The radius of the circle defining a radius around the center. This is identical to CircleCollider2D.radius.
        * @returns Returns the shape index the shape was added to in the PhysicsShapeGroup2D. This index is used as the main reference when retrieving a shape.
        */
        public AddCircle ($center: Vector2, $radius: float) : int
        /**
        * Adds a capsule shape (PhysicsShapeType2D.Capsule) to the shape group.
        * @param vertex0 The position of one end of a capsule shape. This point represents the center point of a logical circle at the end of a capsule.
        * @param vertex1 The position of the opposite end of a capsule shape. This point represents the  center point of a logical circle at the opposite end of a capsule.
        * @param radius The radius of the capsule defining a radius around the vertex0 and vertex1 and the area between them.
        * @returns Returns the shape index the shape was added to in the PhysicsShapeGroup2D. This index is used as the main reference when retrieving a shape.
        */
        public AddCapsule ($vertex0: Vector2, $vertex1: Vector2, $radius: float) : int
        /**
        * Adds a box shape (PhysicsShapeType2D.Polygon) to the shape group.
        * @param center The center point of the box shape. This is analogous to Collider2D.offset.
        * @param size The size of the box. This is identical to BoxCollider2D.size.
        * @param angle The angle in degrees the box should be rotated around the center.
        * @param edgeRadius The radius extending around the edges of the box. This is identical to BoxCollider2D.edgeRadius.
        * @returns Returns the shape index the shape was added to in the PhysicsShapeGroup2D. This index is used as the main reference when retrieving a shape.
        */
        public AddBox ($center: Vector2, $size: Vector2, $angle?: float, $edgeRadius?: float) : int
        public AddPolygon ($vertices: System_Collections_Generic.List$1<Vector2>) : int
        /**
        * @methodSwap AddEdges_EBB7509C_H69C894B8
        */
        public AddEdges ($vertices: System_Collections_Generic.List$1<Vector2>, $edgeRadius?: float) : int
        /**
        * @methodSwap AddEdges_EBB7509C_B1D6B34
        */
        public AddEdges ($vertices: System_Collections_Generic.List$1<Vector2>, $useAdjacentStart: boolean, $useAdjacentEnd: boolean, $adjacentStart: Vector2, $adjacentEnd: Vector2, $edgeRadius?: float) : int
    }

    /**
    * Represents an efficient low-level physics shape used by the physics engine.
    */
    class PhysicsShape2D extends System.ValueType {

        /**
        * The shape type determines how the vertices and radius are used by this PhysicsShape2D.
        */
        public get shapeType(): PhysicsShapeType2D;
        public set shapeType(value: PhysicsShapeType2D);
        /**
        * The radius of the shape.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * The start index for the geometry of this shape within the PhysicsShapeGroup2D.
        */
        public get vertexStartIndex(): int;
        public set vertexStartIndex(value: int);
        /**
        * The total number of vertices used to represent the PhysicsShape2D.shapeType|shape type.
        */
        public get vertexCount(): int;
        public set vertexCount(value: int);
        /**
        * When the value is true, then the shape will use the PhysicsShape2D.adjacentStart|adjacentStart feature. When the value is false, then the shape will not use the PhysicsShape2D.adjacentEnd|adjacentStart feature.
        */
        public get useAdjacentStart(): boolean;
        public set useAdjacentStart(value: boolean);
        /**
        * When the value is true, then the shape will use the PhysicsShape2D.adjacentEnd|adjacentEnd feature. When the value is false, then the shape will not use the PhysicsShape2D.adjacentEnd|adjacentEnd feature.
        */
        public get useAdjacentEnd(): boolean;
        public set useAdjacentEnd(value: boolean);
        /**
        * Defines the position of a virtual point adjacent to the start vertex of an edge shape.
        */
        public get adjacentStart(): Vector2;
        public set adjacentStart(value: Vector2);
        /**
        * Defines the position of a virtual point adjacent to the end vertex of an edge shape.
        */
        public get adjacentEnd(): Vector2;
        public set adjacentEnd(value: Vector2);

    }

    /**
    * Options for indicate which primitive shape type is used to interpret geometry contained within a PhysicsShape2D object.
    */
    enum PhysicsShapeType2D {
        Circle = 0,
        Capsule = 1,
        Polygon = 2,
        Edges = 3 
    }

    /**
    * A standard 4x4 transformation matrix.
    */
    interface Matrix4x4 extends System.IFormattable, System.IEquatable$1<Matrix4x4> {

    }

    /**
    * A set of parameters for filtering contact results. Define the angle by referring to their position in world space, where 0 degrees is parallel to the positive x-axis, 90 degrees is parallel to the positive y-axis, 180 degrees is parallel to the negative x-axis, and 270 degrees is parallel to the negative y-axis.
    */
    class ContactFilter2D extends System.ValueType {

        /**
        * Sets to filter contact results based on trigger collider involvement.
        */
        public useTriggers : boolean
        /**
        * Sets the contact filter to filter results by layer mask.
        */
        public useLayerMask : boolean
        /**
        * Sets the contact filter to filter the results by depth using minDepth and maxDepth.
        */
        public useDepth : boolean
        /**
        * Sets the contact filter to filter within the minDepth and maxDepth range, or outside that range.
        */
        public useOutsideDepth : boolean
        /**
        * Sets the contact filter to filter the results by the collision's normal angle using minNormalAngle and maxNormalAngle.
        */
        public useNormalAngle : boolean
        /**
        * Sets the contact filter to filter within the minNormalAngle and maxNormalAngle range, or outside that range.
        */
        public useOutsideNormalAngle : boolean
        /**
        * Sets the contact filter to filter the results that only include Collider2D on the layers defined by the layer mask.
        */
        public layerMask : LayerMask
        /**
        * Sets the contact filter to filter the results to only include Collider2D with a Z coordinate (depth) greater than this value.
        */
        public minDepth : float
        /**
        * Sets the contact filter to filter the results to only include Collider2D with a Z coordinate (depth) less than this value.
        */
        public maxDepth : float
        /**
        * Sets the contact filter to filter the results to only include contacts with collision normal angles that are greater than this angle.
        */
        public minNormalAngle : float
        /**
        * Sets the contact filter to filter the results to only include contacts with collision normal angles that are less than this angle.
        */
        public maxNormalAngle : float
        public static NormalAngleUpperLimit : float
        /**
        * Given the current state of the contact filter, determine whether it would filter anything.
        */
        public get isFiltering(): boolean;

        /**
        * Sets the contact filter to not filter any ContactPoint2D.
        * @returns A copy of the contact filter set to not filter any ContactPoint2D.
        */
        public NoFilter () : ContactFilter2D
        /**
        * Turns off layer mask filtering by setting useLayerMask to false.  The associated value of layerMask is not changed.
        */
        public ClearLayerMask () : void
        /**
        * Sets the layerMask filter property using the layerMask parameter provided and also enables layer mask filtering by setting useLayerMask to true.
        * @param layerMask The value used to set the layerMask.
        */
        public SetLayerMask ($layerMask: LayerMask) : void
        /**
        * Turns off depth filtering by setting useDepth to false.  The associated values of minDepth and maxDepth are not changed.
        */
        public ClearDepth () : void
        /**
        * Sets the minDepth and maxDepth filter properties and turns on depth filtering by setting useDepth to true.
        * @param minDepth The value used to set minDepth.
        * @param maxDepth The value used to set maxDepth.
        */
        public SetDepth ($minDepth: float, $maxDepth: float) : void
        /**
        * Turns off normal angle filtering by setting useNormalAngle to false. The associated values of minNormalAngle and maxNormalAngle are not changed.
        */
        public ClearNormalAngle () : void
        /**
        * Sets the minNormalAngle and maxNormalAngle filter properties and turns on normal angle filtering by setting useNormalAngle to true.
        * @param minNormalAngle The value used to set the minNormalAngle.
        * @param maxNormalAngle The value used to set the maxNormalAngle.
        */
        public SetNormalAngle ($minNormalAngle: float, $maxNormalAngle: float) : void
        /**
        * Checks if the collider is a trigger and should be filtered by the useTriggers to be filtered.
        * @param collider The Collider2D used to check for a trigger.
        * @returns Returns true when collider is excluded by the filter and false if otherwise.
        */
        public IsFilteringTrigger ($collider: Collider2D) : boolean
        /**
        * Checks if the GameObject.layer for obj is included in the layerMask to be filtered.
        * @param obj The GameObject used to check the GameObject.layer.
        * @returns Returns true when obj is excluded by the filter and false if otherwise.
        */
        public IsFilteringLayerMask ($obj: GameObject) : boolean
        /**
        * Checks if the Transform for obj is within the depth range to be filtered.
        * @param obj The GameObject used to check the z-position (depth) of Transform.position.
        * @returns Returns true when obj is excluded by the filter and false if otherwise.
        */
        public IsFilteringDepth ($obj: GameObject) : boolean
        /**
        * Checks if the angle of normal is within the normal angle range to be filtered.
        * @param normal The normal used to calculate an angle.
        * @returns Returns true when normal is excluded by the filter and false if otherwise.
        */
        public IsFilteringNormalAngle ($normal: Vector2) : boolean
        /**
        * Checks if the angle is within the normal angle range to be filtered.
        * @param angle The angle used for comparison in the filter.
        * @returns Returns true when angle is excluded by the filter and false if otherwise.
        * @methodSwap IsFilteringNormalAngle_EBB7509C_H82424F3E
        */
        public IsFilteringNormalAngle ($angle: float) : boolean
    }

    /**
    * Specifies Layers to use in a Physics.Raycast.
    */
    interface LayerMask {

    }

    /**
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * Represents the separation or overlap of two Collider2D.
    */
    class ColliderDistance2D extends System.ValueType {

        /**
        * A point on a Collider2D that is a specific distance away from pointB.
        */
        public get pointA(): Vector2;
        public set pointA(value: Vector2);
        /**
        * A point on a Collider2D that is a specific distance away from pointA.
        */
        public get pointB(): Vector2;
        public set pointB(value: Vector2);
        /**
        * A normalized vector that points from pointB to pointA.
        */
        public get normal(): Vector2;
        /**
        * Gets the distance between two colliders.
        */
        public get distance(): float;
        public set distance(value: float);
        /**
        * Gets whether the distance represents an overlap or not.
        */
        public get isOverlapped(): boolean;
        /**
        * Gets whether the distance is valid or not.
        */
        public get isValid(): boolean;
        public set isValid(value: boolean);

    }

    /**
    * Details about a specific point of contact involved in a 2D physics collision.
    */
    class ContactPoint2D extends System.ValueType {

        /**
        * The point of contact between the two colliders in world space.
        */
        public get point(): Vector2;
        /**
        * Surface normal at the contact point.
        */
        public get normal(): Vector2;
        /**
        * Gets the distance between the colliders at the contact point.
        */
        public get separation(): float;
        /**
        * Gets the impulse applied at the contact point along the ContactPoint2D.normal.
        */
        public get normalImpulse(): float;
        /**
        * Gets the impulse applied at the contact point which is perpendicular to the ContactPoint2D.normal.
        */
        public get tangentImpulse(): float;
        /**
        * Gets the relative velocity of the two colliders at the contact point (Read Only).
        */
        public get relativeVelocity(): Vector2;
        /**
        * The incoming Collider2D involved in the collision with the otherCollider.
        */
        public get collider(): Collider2D;
        /**
        * The other Collider2D involved in the collision with the collider.
        */
        public get otherCollider(): Collider2D;
        /**
        * The incoming Rigidbody2D involved in the collision with the otherRigidbody.
        */
        public get rigidbody(): Rigidbody2D;
        /**
        * The other Rigidbody2D involved in the collision with the rigidbody.
        */
        public get otherRigidbody(): Rigidbody2D;
        /**
        * Indicates whether the collision response or reaction is enabled or disabled.
        */
        public get enabled(): boolean;

    }

    /**
    * Rigidbody physics component for 2D sprites.
    */
    class Rigidbody2D extends Component {

        /**
        * The position of the rigidbody.
        */
        public get position(): Vector2;
        public set position(value: Vector2);
        /**
        * The rotation of the rigidbody.
        */
        public get rotation(): float;
        public set rotation(value: float);
        /**
        * Linear velocity of the Rigidbody in units per second.
        */
        public get velocity(): Vector2;
        public set velocity(value: Vector2);
        /**
        * Angular velocity in degrees per second.
        */
        public get angularVelocity(): float;
        public set angularVelocity(value: float);
        /**
        * Should the total rigid-body mass be automatically calculated from the Collider2D.density of attached colliders?
        */
        public get useAutoMass(): boolean;
        public set useAutoMass(value: boolean);
        /**
        * Mass of the Rigidbody.
        */
        public get mass(): float;
        public set mass(value: float);
        /**
        * The PhysicsMaterial2D that is applied to all Collider2D attached to this Rigidbody2D.
        */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
        * The center of mass of the rigidBody in local space.
        */
        public get centerOfMass(): Vector2;
        public set centerOfMass(value: Vector2);
        /**
        * Gets the center of mass of the rigidBody in global space.
        */
        public get worldCenterOfMass(): Vector2;
        /**
        * The Rigidbody's resistance to changes in angular velocity (rotation).
        */
        public get inertia(): float;
        public set inertia(value: float);
        /**
        * Coefficient of drag.
        */
        public get drag(): float;
        public set drag(value: float);
        /**
        * Coefficient of angular drag.
        */
        public get angularDrag(): float;
        public set angularDrag(value: float);
        /**
        * The degree to which this object is affected by gravity.
        */
        public get gravityScale(): float;
        public set gravityScale(value: float);
        /**
        * The physical behaviour type of the Rigidbody2D.
        */
        public get bodyType(): RigidbodyType2D;
        public set bodyType(value: RigidbodyType2D);
        /**
        * Should kinematickinematic and kinematicstatic collisions be allowed?
        */
        public get useFullKinematicContacts(): boolean;
        public set useFullKinematicContacts(value: boolean);
        /**
        * Should this rigidbody be taken out of physics control?
        */
        public get isKinematic(): boolean;
        public set isKinematic(value: boolean);
        /**
        * Controls whether physics will change the rotation of the object.
        */
        public get freezeRotation(): boolean;
        public set freezeRotation(value: boolean);
        /**
        * Controls which degrees of freedom are allowed for the simulation of this Rigidbody2D.
        */
        public get constraints(): RigidbodyConstraints2D;
        public set constraints(value: RigidbodyConstraints2D);
        /**
        * Indicates whether the rigid body should be simulated or not by the physics system.
        */
        public get simulated(): boolean;
        public set simulated(value: boolean);
        /**
        * Physics interpolation used between updates.
        */
        public get interpolation(): RigidbodyInterpolation2D;
        public set interpolation(value: RigidbodyInterpolation2D);
        /**
        * The sleep state that the rigidbody will initially be in.
        */
        public get sleepMode(): RigidbodySleepMode2D;
        public set sleepMode(value: RigidbodySleepMode2D);
        /**
        * The method used by the physics engine to check if two objects have collided.
        */
        public get collisionDetectionMode(): CollisionDetectionMode2D;
        public set collisionDetectionMode(value: CollisionDetectionMode2D);
        /**
        * Returns the number of Collider2D attached to this Rigidbody2D.
        */
        public get attachedColliderCount(): int;
        /**
        * The total amount of force that has been explicitly applied to this Rigidbody2D since the last physics simulation step.
        */
        public get totalForce(): Vector2;
        public set totalForce(value: Vector2);
        /**
        * The total amount of torque that has been explicitly applied to this Rigidbody2D since the last physics simulation step.
        */
        public get totalTorque(): float;
        public set totalTorque(value: float);
        /**
        * The additional Layers that all Collider2D attached to this Rigidbody2D should exclude when deciding if a contact with another Collider2D should happen or not.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional Layers that all Collider2D attached to this Rigidbody2D should include when deciding if a contact with another Collider2D should happen or not.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);

        private constructor ()
        /**
        * Sets the rotation of the Rigidbody2D to angle (given in degrees).
        * @param angle The rotation of the Rigidbody (in degrees).
        * @methodSwap SetRotation_EBB7509C_H82424F3E
        */
        public SetRotation ($angle: float) : void
        /**
        * Sets the rotation of the Rigidbody2D to the z-axis rotation extracted from the full 3D rotation.
        * @param rotation Full 3D rotation used to extract only the z-axis rotation.
        */
        public SetRotation ($rotation: Quaternion) : void
        /**
        * Moves the rigidbody to position.
        * @param position The new position for the Rigidbody object.
        */
        public MovePosition ($position: Vector2) : void
        /**
        * Rotates the Rigidbody to angle (given in degrees).
        * @param angle The new rotation angle for the Rigidbody object.
        * @methodSwap MoveRotation_EBB7509C_H82424F3E
        */
        public MoveRotation ($angle: float) : void
        /**
        * An overload of MoveRotation that allows a full 3D rotation as an argument.
        * @param rotation Full 3D rotation used to extract only the z-axis rotation.
        */
        public MoveRotation ($rotation: Quaternion) : void
        /**
        * Is the rigidbody "sleeping"?
        */
        public IsSleeping () : boolean
        /**
        * Is the rigidbody "awake"?
        */
        public IsAwake () : boolean
        /**
        * Make the rigidbody "sleep".
        */
        public Sleep () : void
        /**
        * Disables the "sleeping" state of a rigidbody.
        */
        public WakeUp () : void
        /**
        * Checks whether the collider  is touching any of the collider(s) attached to this rigidbody or not.
        * @param collider The collider to check if it is touching any of the collider(s) attached to this rigidbody.
        * @returns Whether the collider is touching any of the collider(s) attached to this rigidbody or not.
        */
        public IsTouching ($collider: Collider2D) : boolean
        /**
        * Checks whether the collider  is touching any of the collider(s) attached to this rigidbody or not with the results filtered by the ContactFilter2D.
        * @param collider The collider to check if it is touching any of the collider(s) attached to this rigidbody.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Whether the collider is touching any of the collider(s) attached to this rigidbody or not.
        */
        public IsTouching ($collider: Collider2D, $contactFilter: ContactFilter2D) : boolean
        /**
        * Checks whether any collider is touching any of the collider(s) attached to this rigidbody or not with the results filtered by the ContactFilter2D.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Whether any collider is touching any of the collider(s) attached to this rigidbody or not.
        */
        public IsTouching ($contactFilter: ContactFilter2D) : boolean
        public IsTouchingLayers () : boolean
        /**
        * Checks whether any of the collider(s) attached to this rigidbody are touching any colliders on the specified layerMask or not.
        * @param layerMask Any colliders on any of these layers count as touching.
        * @returns Whether any of the collider(s) attached to this rigidbody are touching any colliders on the specified layerMask or not.
        * @methodSwap IsTouchingLayers_EBB7509C_F92D023A
        */
        public IsTouchingLayers ($layerMask: int) : boolean
        /**
        * Check if any of the Rigidbody2D colliders overlap a point in space.
        * @param point A point in world space.
        * @returns Whether the point overlapped any of the Rigidbody2D colliders.
        */
        public OverlapPoint ($point: Vector2) : boolean
        /**
        * Calculates the minimum distance of this collider against all Collider2D attached to this Rigidbody2D.
        * @param collider A collider used to calculate the minimum distance against all colliders attached to this Rigidbody2D.
        * @returns The minimum distance of collider against all colliders attached to this Rigidbody2D.
        */
        public Distance ($collider: Collider2D) : ColliderDistance2D
        /**
        * Returns a point on the perimeter of all enabled Colliders attached to this Rigidbody that is closest to the specified position.
        * @param position The position from which to find the closest point on this Rigidbody.
        * @returns A point on the perimeter of a Collider attached to this rigidbody that is closest to the specified position.
        */
        public ClosestPoint ($position: Vector2) : Vector2
        public AddForce ($force: Vector2) : void
        /**
        * Apply a force to the rigidbody.
        * @param force Components of the force in the X and Y axes.
        * @param mode The method used to apply the specified force.
        */
        public AddForce ($force: Vector2, $mode: ForceMode2D) : void
        public AddRelativeForce ($relativeForce: Vector2) : void
        /**
        * Adds a force to the rigidbody2D relative to its coordinate system.
        * @param relativeForce Components of the force in the X and Y axes.
        * @param mode The method used to apply the specified force.
        */
        public AddRelativeForce ($relativeForce: Vector2, $mode: ForceMode2D) : void
        public AddForceAtPosition ($force: Vector2, $position: Vector2) : void
        /**
        * Apply a force at a given position in space.
        * @param force Components of the force in the X and Y axes.
        * @param position Position in world space to apply the force.
        * @param mode The method used to apply the specified force.
        */
        public AddForceAtPosition ($force: Vector2, $position: Vector2, $mode: ForceMode2D) : void
        /**
        * @methodSwap AddTorque_EBB7509C_H82424F3E
        */
        public AddTorque ($torque: float) : void
        /**
        * Apply a torque at the rigidbody's centre of mass.
        * @param torque Torque to apply.
        * @param mode The force mode to use.
        * @methodSwap AddTorque_EBB7509C_H48ABCC1
        */
        public AddTorque ($torque: float, $mode: ForceMode2D) : void
        /**
        * Get a local space point given the point point in rigidBody global space.
        * @param point The global space point to transform into local space.
        */
        public GetPoint ($point: Vector2) : Vector2
        /**
        * Get a global space point given the point relativePoint in rigidBody local space.
        * @param relativePoint The local space point to transform into global space.
        */
        public GetRelativePoint ($relativePoint: Vector2) : Vector2
        /**
        * Get a local space vector given the vector vector in rigidBody global space.
        * @param vector The global space vector to transform into a local space vector.
        */
        public GetVector ($vector: Vector2) : Vector2
        /**
        * Get a global space vector given the vector relativeVector in rigidBody local space.
        * @param relativeVector The local space vector to transform into a global space vector.
        */
        public GetRelativeVector ($relativeVector: Vector2) : Vector2
        /**
        * The velocity of the rigidbody at the point Point in global space.
        * @param point The global space point to calculate velocity for.
        */
        public GetPointVelocity ($point: Vector2) : Vector2
        /**
        * The velocity of the rigidbody at the point Point in local space.
        * @param relativePoint The local space point to calculate velocity for.
        */
        public GetRelativePointVelocity ($relativePoint: Vector2) : Vector2
        /**
        * Get a list of all Colliders that overlap all Colliders attached to this Rigidbody2D.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        */
        public OverlapCollider ($contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        public OverlapCollider ($contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Retrieves all contact points for all of the Collider(s) attached to this Rigidbody.
        * @param contacts An array of ContactPoint2D used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public GetContacts ($contacts: ContactPoint2D[]) : int
        public GetContacts ($contacts: System_Collections_Generic.List$1<ContactPoint2D>) : int
        /**
        * Retrieves all contact points for all of the Collider(s) attached to this Rigidbody, with the results filtered by the ContactFilter2D.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param contacts An array of ContactPoint2D used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public GetContacts ($contactFilter: ContactFilter2D, $contacts: ContactPoint2D[]) : int
        public GetContacts ($contactFilter: ContactFilter2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>) : int
        /**
        * Retrieves all Colliders in contact with any of the Collider(s) attached to this Rigidbody.
        * @param colliders An array of Collider2D used to receive the results.
        * @returns Returns the number of colliders placed in the colliders array.
        */
        public GetContacts ($colliders: Collider2D[]) : int
        public GetContacts ($colliders: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Retrieves all Colliders in contact with any of the Collider(s) attached to this rigidbody, with the results filtered by the ContactFilter2D.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param colliders An array of Collider2D used to receive the results.
        * @returns Returns the number of colliders placed in the colliders array.
        */
        public GetContacts ($contactFilter: ContactFilter2D, $colliders: Collider2D[]) : int
        public GetContacts ($contactFilter: ContactFilter2D, $colliders: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Returns all Collider2D that are attached to this Rigidbody2D.
        * @param results An array of Collider2D used to receive the results.
        * @returns Returns the number of Collider2D placed in the results array.
        */
        public GetAttachedColliders ($results: Collider2D[]) : int
        public GetAttachedColliders ($results: System_Collections_Generic.List$1<Collider2D>) : int
        public Cast ($direction: Vector2, $results: RaycastHit2D[]) : int
        /**
        * All the Collider2D shapes attached to the Rigidbody2D are cast into the Scene starting at each Collider position ignoring the Colliders attached to the same Rigidbody2D.
        * @param direction Vector representing the direction to cast each Collider2D shape.
        * @param results Array to receive results.
        * @param distance Maximum distance over which to cast the Collider(s).
        * @returns Returns the number of results placed in the results array.
        * @methodSwap Cast_EBB7509C_BF1FAEF5
        */
        public Cast ($direction: Vector2, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap Cast_EBB7509C_H67F259C5
        */
        public Cast ($direction: Vector2, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: float) : int
        public Cast ($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * All the Collider2D shapes attached to the Rigidbody2D are cast into the Scene starting at each Collider position ignoring the Colliders attached to the same Rigidbody2D.
        * @param direction Vector representing the direction to cast each Collider2D shape.
        * @param contactFilter Filter results defined by the contact filter.
        * @param results Array to receive results.
        * @param distance Maximum distance over which to cast the Collider(s).
        * @returns Returns the number of results placed in the results array.
        * @methodSwap Cast_EBB7509C_H56566684
        */
        public Cast ($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap Cast_EBB7509C_H9B6F923E
        */
        public Cast ($direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance: float) : int
        /**
        * Gets all the PhysicsShape2D used by all Collider2D attached to the Rigidbody2D.
        * @param physicsShapeGroup The PhysicsShapeGroup2D to store the retrieved PhysicsShape2D in.
        * @returns Returns the number of PhysicsShape2D retrieved from the Rigidbody2D.
        */
        public GetShapes ($physicsShapeGroup: PhysicsShapeGroup2D) : int
    }

    /**
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    /**
    * Option for how to apply a force using Rigidbody2D.AddForce.
    */
    enum ForceMode2D {
        Force = 0,
        Impulse = 1 
    }

    /**
    * Asset type that defines the surface properties of a Collider2D.
    */
    class PhysicsMaterial2D extends Object {

        /**
        * The degree of elasticity during collisions.
        */
        public get bounciness(): float;
        public set bounciness(value: float);
        /**
        * Coefficient of friction.
        */
        public get friction(): float;
        public set friction(value: float);

        public constructor ()
        public constructor ($name: string)
    }

    /**
    * The physical behaviour type of the Rigidbody2D.
    */
    enum RigidbodyType2D {
        Dynamic = 0,
        Kinematic = 1,
        Static = 2 
    }

    /**
    * Use these flags to constrain motion of the Rigidbody2D.
    */
    enum RigidbodyConstraints2D {
        None = 0,
        FreezePositionX = 1,
        FreezePositionY = 2,
        FreezeRotation = 4,
        FreezePosition = 3,
        FreezeAll = 7 
    }

    /**
    * Interpolation mode for Rigidbody2D objects.
    */
    enum RigidbodyInterpolation2D {
        None = 0,
        Interpolate = 1,
        Extrapolate = 2 
    }

    /**
    * Settings for a Rigidbody2D's initial sleep state.
    */
    enum RigidbodySleepMode2D {
        NeverSleep = 0,
        StartAwake = 1,
        StartAsleep = 2 
    }

    /**
    * Controls how collisions are detected when a Rigidbody2D moves.
    */
    enum CollisionDetectionMode2D {
        None = 0,
        Discrete = 0,
        Continuous = 1 
    }

    /**
    * A Collider that can merge other Colliders together.
    */
    class CompositeCollider2D extends Collider2D {

        /**
        * The density of the collider used to calculate its mass (when auto mass is enabled).
        */
        public get density(): float;
        public set density(value: float);
        /**
        * Is this collider configured as a trigger?
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Whether the collider is used by an attached effector or not.
        */
        public get usedByEffector(): boolean;
        public set usedByEffector(value: boolean);
        /**
        * Sets whether the Collider will be used or not used by a CompositeCollider2D.
        */
        public get usedByComposite(): boolean;
        public set usedByComposite(value: boolean);
        /**
        * Get the CompositeCollider2D that is available to be attached to the collider.
        */
        public get composite(): CompositeCollider2D;
        /**
        * The local offset of the collider geometry.
        */
        public get offset(): Vector2;
        public set offset(value: Vector2);
        /**
        * The Rigidbody2D attached to the Collider2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The number of active PhysicsShape2D the Collider2D is currently using.
        */
        public get shapeCount(): int;
        /**
        * The world space bounding area of the collider.
        */
        public get bounds(): Bounds;
        /**
        * The error state that indicates the state of the physics shapes the 2D Collider tried to create. (Read Only)
        */
        public get errorState(): ColliderErrorState2D;
        /**
        * The PhysicsMaterial2D that is applied to this collider.
        */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
        * A decision priority assigned to this Collider2D used when there is a conflicting decision on whether a contact between itself and another Collision2D should happen or not.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional Layers that this Collider2D should exclude when deciding if a contact with another Collider2D should happen or not.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional Layers that this Collider2D should include when deciding if a contact with another Collider2D should happen or not.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D is allowed to send forces to during a Collision contact with another Collider2D.
        */
        public get forceSendLayers(): LayerMask;
        public set forceSendLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D can receive forces from during a Collision contact with another Collider2D.
        */
        public get forceReceiveLayers(): LayerMask;
        public set forceReceiveLayers(value: LayerMask);
        /**
        * The layers of other Collider2D involved in contacts with this Collider2D that will be captured.
        */
        public get contactCaptureLayers(): LayerMask;
        public set contactCaptureLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D will report collision or trigger callbacks for during a contact with another Collider2D.
        */
        public get callbackLayers(): LayerMask;
        public set callbackLayers(value: LayerMask);
        /**
        * Get the friction used by the collider.
        */
        public get friction(): float;
        /**
        * Get the bounciness used by the collider.
        */
        public get bounciness(): float;
        /**
        * Specifies the type of geometry the Composite Collider should generate.
        */
        public get geometryType(): UnityEngine_CompositeCollider2D.GeometryType;
        public set geometryType(value: UnityEngine_CompositeCollider2D.GeometryType);
        /**
        * Specifies when to generate the Composite Collider geometry.
        */
        public get generationType(): UnityEngine_CompositeCollider2D.GenerationType;
        public set generationType(value: UnityEngine_CompositeCollider2D.GenerationType);
        /**
        * When the value is true, the Collider uses an additional Delaunay triangulation step to produce the Collider mesh. When the value is false, this additional step does not occur.
        */
        public get useDelaunayMesh(): boolean;
        public set useDelaunayMesh(value: boolean);
        /**
        * Controls the minimum distance allowed between generated vertices.
        */
        public get vertexDistance(): float;
        public set vertexDistance(value: float);
        /**
        * Controls the radius of all edges created by the Collider.
        */
        public get edgeRadius(): float;
        public set edgeRadius(value: float);
        /**
        * Vertices are offset by this distance when compositing multiple physic shapes. Any vertices between shapes within this distance are combined.
        */
        public get offsetDistance(): float;
        public set offsetDistance(value: float);
        /**
        * The number of paths in the Collider.
        */
        public get pathCount(): int;
        /**
        * Gets the total number of points in all the paths within the Collider.
        */
        public get pointCount(): int;

        private constructor ()
        /**
        * Regenerates the Composite Collider geometry.
        */
        public GenerateGeometry () : void
        /**
        * Gets the number of points in the specified path from the Collider by its index.
        * @param index The index of the path from 0 to pathCount minus 1.
        * @returns Returns the number of points in the path specified by index.
        */
        public GetPathPointCount ($index: int) : int
        /**
        * Gets a path from the Collider by its index.
        * @param index The index of the path from 0 to pathCount minus 1.
        * @param points An ordered array of the vertices (points) in the selected path.
        * @returns Returns the number of points placed in the points array.
        * @methodSwap GetPath_EBB7509C_H278E5410
        */
        public GetPath ($index: int, $points: Vector2[]) : int
        /**
        * @methodSwap GetPath_EBB7509C_H5C7403C4
        */
        public GetPath ($index: int, $points: System_Collections_Generic.List$1<Vector2>) : int
    }

    /**
    * Represents an axis aligned bounding box.
    */
    interface Bounds extends System.IFormattable, System.IEquatable$1<Bounds> {

    }

    /**
    * Indicates what (if any) error was encountered when creating a 2D Collider.
    */
    enum ColliderErrorState2D {
        None = 0,
        NoShapes = 1,
        RemovedShapes = 2 
    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * The direction that the capsule sides can extend.
    */
    enum CapsuleDirection2D {
        Vertical = 0,
        Horizontal = 1 
    }

    /**
    * Representation of rays.
    */
    interface Ray extends System.IFormattable {

    }

    /**
    * Scene extensions to access the underlying physics scene.
    */
    class PhysicsSceneExtensions2D {

        /**
        * An extension method that returns the 2D physics Scene from the Scene.
        * @param scene The Scene from which to return the 2D physics Scene.
        * @returns The 2D physics Scene used by the Scene.
        */
        public static GetPhysicsScene2D ($scene: UnityEngine_SceneManagement.Scene) : PhysicsScene2D
    }

    /**
    * Global settings and helpers for 2D physics.
    */
    class Physics2D extends System.Object {

        /**
        * Layer mask constant for the default layer that ignores raycasts.
        */
        public static IgnoreRaycastLayer : int
        /**
        * Layer mask constant that includes all layers participating in raycasts by default.
        */
        public static DefaultRaycastLayers : int
        /**
        * Layer mask constant that includes all layers.
        */
        public static AllLayers : int
        /**
        * The maximum number of vertices allowed per primitive polygon shape type (PhysicsShapeType2D.Polygon). (Read Only)
        */
        public static MaxPolygonShapeVertices : int
        /**
        * The PhysicsScene2D automatically created when Unity starts.
        */
        public static get defaultPhysicsScene(): PhysicsScene2D;
        /**
        * The number of iterations of the physics solver when considering objects' velocities.
        */
        public static get velocityIterations(): int;
        public static set velocityIterations(value: int);
        /**
        * The number of iterations of the physics solver when considering objects' positions.
        */
        public static get positionIterations(): int;
        public static set positionIterations(value: int);
        /**
        * Acceleration due to gravity.
        */
        public static get gravity(): Vector2;
        public static set gravity(value: Vector2);
        /**
        * Do raycasts detect Colliders configured as triggers?
        */
        public static get queriesHitTriggers(): boolean;
        public static set queriesHitTriggers(value: boolean);
        /**
        * Set the raycasts or linecasts that start inside Colliders to detect or not detect those Colliders.
        */
        public static get queriesStartInColliders(): boolean;
        public static set queriesStartInColliders(value: boolean);
        /**
        * Use this to control whether or not the appropriate OnCollisionExit2D or OnTriggerExit2D callbacks should be called when a Collider2D is disabled.
        */
        public static get callbacksOnDisable(): boolean;
        public static set callbacksOnDisable(value: boolean);
        /**
        * Determines whether the garbage collector should reuse only a single instance of a Collision2D type for all collision callbacks.
        */
        public static get reuseCollisionCallbacks(): boolean;
        public static set reuseCollisionCallbacks(value: boolean);
        /**
        * Set whether to automatically sync changes to the Transform component with the physics engine.
        */
        public static get autoSyncTransforms(): boolean;
        public static set autoSyncTransforms(value: boolean);
        /**
        * Controls when Unity executes the 2D physics simulation.
        */
        public static get simulationMode(): SimulationMode2D;
        public static set simulationMode(value: SimulationMode2D);
        /**
        * A set of options that control how physics operates when using the job system to multithread the physics simulation.
        */
        public static get jobOptions(): PhysicsJobOptions2D;
        public static set jobOptions(value: PhysicsJobOptions2D);
        /**
        * Any collisions with a relative linear velocity below this threshold will be treated as inelastic.
        */
        public static get velocityThreshold(): float;
        public static set velocityThreshold(value: float);
        /**
        * The maximum linear position correction used when solving constraints.  This helps to prevent overshoot.
        */
        public static get maxLinearCorrection(): float;
        public static set maxLinearCorrection(value: float);
        /**
        * The maximum angular position correction used when solving constraints.  This helps to prevent overshoot.
        */
        public static get maxAngularCorrection(): float;
        public static set maxAngularCorrection(value: float);
        /**
        * The maximum linear speed of a rigid-body per physics update.  Increasing this can cause numerical problems.
        */
        public static get maxTranslationSpeed(): float;
        public static set maxTranslationSpeed(value: float);
        /**
        * The maximum angular speed of a rigid-body per physics update.  Increasing this can cause numerical problems.
        */
        public static get maxRotationSpeed(): float;
        public static set maxRotationSpeed(value: float);
        /**
        * The default contact offset of the newly created Colliders.
        */
        public static get defaultContactOffset(): float;
        public static set defaultContactOffset(value: float);
        /**
        * The scale factor that controls how fast overlaps are resolved.
        */
        public static get baumgarteScale(): float;
        public static set baumgarteScale(value: float);
        /**
        * The scale factor that controls how fast TOI overlaps are resolved.
        */
        public static get baumgarteTOIScale(): float;
        public static set baumgarteTOIScale(value: float);
        /**
        * The time in seconds that a rigid-body must be still before it will go to sleep.
        */
        public static get timeToSleep(): float;
        public static set timeToSleep(value: float);
        /**
        * A rigid-body cannot sleep if its linear velocity is above this tolerance.
        */
        public static get linearSleepTolerance(): float;
        public static set linearSleepTolerance(value: float);
        /**
        * A Rigidbody cannot sleep if its angular velocity is above this tolerance threshold.
        */
        public static get angularSleepTolerance(): float;
        public static set angularSleepTolerance(value: float);

        public constructor ()
        /**
        * Simulate physics in the Scene.
        * @param step The time to advance physics by.
        * @returns Whether the simulation was run or not.  Running the simulation during physics callbacks will always fail.
        */
        public static Simulate ($step: float) : boolean
        /**
        * Synchronizes.
        */
        public static SyncTransforms () : void
        public static IgnoreCollision ($collider1: Collider2D, $collider2: Collider2D) : void
        /**
        * Makes the collision detection system ignore all collisionstriggers between collider1 and collider2/.
        * @param collider1 The first Collider to compare to collider2.
        * @param collider2 The second Collider to compare to collider1.
        * @param ignore Whether collisionstriggers between collider1 and collider2/ should be ignored or not.
        */
        public static IgnoreCollision ($collider1: Collider2D, $collider2: Collider2D, $ignore: boolean) : void
        /**
        * Checks whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
        * @param collider1 The first Collider to compare to collider2.
        * @param collider2 The second Collider to compare to collider1.
        * @returns Whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
        */
        public static GetIgnoreCollision ($collider1: Collider2D, $collider2: Collider2D) : boolean
        /**
        * @methodSwap IgnoreLayerCollision_EBB7509C_H2CFB2EE5
        */
        public static IgnoreLayerCollision ($layer1: int, $layer2: int) : void
        /**
        * Choose whether to detect or ignore collisions between a specified pair of layers.
        * @param layer1 ID of the first layer.
        * @param layer2 ID of the second layer.
        * @param ignore Should collisions between these layers be ignored?
        * @methodSwap IgnoreLayerCollision_EBB7509C_H9B170F22
        */
        public static IgnoreLayerCollision ($layer1: int, $layer2: int, $ignore: boolean) : void
        /**
        * Checks whether collisions between the specified layers be ignored or not.
        * @param layer1 ID of first layer.
        * @param layer2 ID of second layer.
        * @returns Whether collisions between the specified layers be ignored or not.
        */
        public static GetIgnoreLayerCollision ($layer1: int, $layer2: int) : boolean
        /**
        * Set the collision layer mask that indicates which layer(s) the specified layer can collide with.
        * @param layer The layer to set the collision layer mask for.
        * @param layerMask A mask where each bit indicates a layer and whether it can collide with layer or not.
        */
        public static SetLayerCollisionMask ($layer: int, $layerMask: int) : void
        /**
        * Get the collision layer mask that indicates which layer(s) the specified layer can collide with.
        * @param layer The layer to retrieve the collision layer mask for.
        * @returns A mask where each bit indicates a layer and whether it can collide with layer or not.
        */
        public static GetLayerCollisionMask ($layer: int) : int
        /**
        * Checks whether the passed Colliders are in contact or not.
        * @param collider1 The Collider to check if it is touching collider2.
        * @param collider2 The Collider to check if it is touching collider1.
        * @returns Whether collider1 is touching collider2 or not.
        */
        public static IsTouching ($collider1: Collider2D, $collider2: Collider2D) : boolean
        /**
        * Checks whether the passed Colliders are in contact or not.
        * @param collider1 The Collider to check if it is touching collider2.
        * @param collider2 The Collider to check if it is touching collider1.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Whether collider1 is touching collider2 or not.
        */
        public static IsTouching ($collider1: Collider2D, $collider2: Collider2D, $contactFilter: ContactFilter2D) : boolean
        /**
        * Checks whether the passed Colliders are in contact or not.
        * @param Collider The Collider to check if it is touching any other Collider filtered by the contactFilter.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Whether the Collider is touching any other Collider filtered by the contactFilter or not.
        */
        public static IsTouching ($collider: Collider2D, $contactFilter: ContactFilter2D) : boolean
        public static IsTouchingLayers ($collider: Collider2D) : boolean
        /**
        * Checks whether the Collider is touching any Colliders on the specified layerMask or not.
        * @param Collider The Collider to check if it is touching Colliders on the layerMask.
        * @param layerMask Any Colliders on any of these layers count as touching.
        * @returns Whether the Collider is touching any Colliders on the specified layerMask or not.
        * @methodSwap IsTouchingLayers_EBB7509C_H95A64657
        */
        public static IsTouchingLayers ($collider: Collider2D, $layerMask: int) : boolean
        /**
        * Calculates the minimum distance between two Colliders.
        * @param colliderA A Collider used to calculate the minimum distance against colliderB.
        * @param colliderB A Collider used to calculate the minimum distance against colliderA.
        * @returns The minimum distance between colliderA and colliderB.
        */
        public static Distance ($colliderA: Collider2D, $colliderB: Collider2D) : ColliderDistance2D
        /**
        * Returns a point on the perimeter of the Collider that is closest to the specified position.
        * @param position The position from which to find the closest point on the specified Collider.
        * @param Collider The Collider on which to find the closest specified position.
        * @returns A point on the perimeter of the Collider that is closest to the specified position.
        */
        public static ClosestPoint ($position: Vector2, $collider: Collider2D) : Vector2
        /**
        * Returns a point on the perimeter of all enabled Colliders attached to the rigidbody that is closest to the specified position.
        * @param position The position from which to find the closest point on the specified rigidbody.
        * @param rigidbody The Rigidbody on which to find the closest specified position.
        * @returns A point on the perimeter of a Collider attached to the rigidbody that is closest to the specified position.
        */
        public static ClosestPoint ($position: Vector2, $rigidbody: Rigidbody2D) : Vector2
        public static Linecast ($start: Vector2, $end: Vector2) : RaycastHit2D
        /**
        * @methodSwap Linecast_EBB7509C_H8A060F0A
        */
        public static Linecast ($start: Vector2, $end: Vector2, $layerMask: int) : RaycastHit2D
        /**
        * @methodSwap Linecast_EBB7509C_H280E67C3
        */
        public static Linecast ($start: Vector2, $end: Vector2, $layerMask: int, $minDepth: float) : RaycastHit2D
        /**
        * Casts a line segment against Colliders in the Scene.
        * @param start The start point of the line in world space.
        * @param end The end point of the line in world space.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The cast results returned.
        * @methodSwap Linecast_EBB7509C_H5CE88314
        */
        public static Linecast ($start: Vector2, $end: Vector2, $layerMask: int, $minDepth: float, $maxDepth: float) : RaycastHit2D
        /**
        * Casts a line segment against Colliders in the Scene with results filtered by ContactFilter2D.
        * @param start The start point of the line in world space.
        * @param end The end point of the line in world space.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        */
        public static Linecast ($start: Vector2, $end: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        public static Linecast ($start: Vector2, $end: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>) : int
        public static LinecastAll ($start: Vector2, $end: Vector2) : RaycastHit2D[]
        /**
        * @methodSwap LinecastAll_EBB7509C_H8A060F0A
        */
        public static LinecastAll ($start: Vector2, $end: Vector2, $layerMask: int) : RaycastHit2D[]
        /**
        * @methodSwap LinecastAll_EBB7509C_H280E67C3
        */
        public static LinecastAll ($start: Vector2, $end: Vector2, $layerMask: int, $minDepth: float) : RaycastHit2D[]
        /**
        * Casts a line against Colliders in the Scene.
        * @param start The start point of the line in world space.
        * @param end The end point of the line in world space.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The cast results returned.
        * @methodSwap LinecastAll_EBB7509C_H5CE88314
        */
        public static LinecastAll ($start: Vector2, $end: Vector2, $layerMask: int, $minDepth: float, $maxDepth: float) : RaycastHit2D[]
        public static LinecastNonAlloc ($start: Vector2, $end: Vector2, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap LinecastNonAlloc_EBB7509C_F8EF931B
        */
        public static LinecastNonAlloc ($start: Vector2, $end: Vector2, $results: RaycastHit2D[], $layerMask: int) : int
        /**
        * @methodSwap LinecastNonAlloc_EBB7509C_A02B5EEC
        */
        public static LinecastNonAlloc ($start: Vector2, $end: Vector2, $results: RaycastHit2D[], $layerMask: int, $minDepth: float) : int
        /**
        * Casts a line against Colliders in the Scene. Note: This method will be deprecated in a future build and it is recommended to use Linecast instead.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @param start The start point of the line in world space.
        * @param end The end point of the line in world space.
        * @param results Returned array of objects that intersect the line.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap LinecastNonAlloc_EBB7509C_H2EE0DA31
        */
        public static LinecastNonAlloc ($start: Vector2, $end: Vector2, $results: RaycastHit2D[], $layerMask: int, $minDepth: float, $maxDepth: float) : int
        public static Raycast ($origin: Vector2, $direction: Vector2) : RaycastHit2D
        /**
        * @methodSwap Raycast_EBB7509C_H86F5722E
        */
        public static Raycast ($origin: Vector2, $direction: Vector2, $distance: float) : RaycastHit2D
        /**
        * @methodSwap Raycast_EBB7509C_H63D96841
        */
        public static Raycast ($origin: Vector2, $direction: Vector2, $distance: float, $layerMask: int) : RaycastHit2D
        /**
        * @methodSwap Raycast_EBB7509C_F7740ECE
        */
        public static Raycast ($origin: Vector2, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float) : RaycastHit2D
        /**
        * Casts a ray against Colliders in the Scene.
        * @param origin The point in 2D space where the ray originates.
        * @param direction A vector representing the direction of the ray.
        * @param distance The maximum distance over which to cast the ray.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The cast results returned.
        * @methodSwap Raycast_EBB7509C_H34B20F87
        */
        public static Raycast ($origin: Vector2, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : RaycastHit2D
        public static Raycast ($origin: Vector2, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * Casts a ray against Colliders in the Scene.
        * @param origin The point in 2D space where the ray originates.
        * @param direction A vector representing the direction of the ray.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param distance The maximum distance over which to cast the ray.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap Raycast_EBB7509C_D06E661C
        */
        public static Raycast ($origin: Vector2, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap Raycast_EBB7509C_H69295A36
        */
        public static Raycast ($origin: Vector2, $direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: float) : int
        public static RaycastNonAlloc ($origin: Vector2, $direction: Vector2, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap RaycastNonAlloc_EBB7509C_H44156F7D
        */
        public static RaycastNonAlloc ($origin: Vector2, $direction: Vector2, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap RaycastNonAlloc_EBB7509C_D6F4A67E
        */
        public static RaycastNonAlloc ($origin: Vector2, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int) : int
        /**
        * @methodSwap RaycastNonAlloc_EBB7509C_DE0C6FF7
        */
        public static RaycastNonAlloc ($origin: Vector2, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int, $minDepth: float) : int
        /**
        * Casts a ray into the Scene. Note: This method will be deprecated in a future build and it is recommended to use Raycast instead.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @param origin The point in 2D space where the ray originates.
        * @param direction A vector representing the direction of the ray.
        * @param results Array to receive results.
        * @param distance The maximum distance over which to cast the ray.
        * @param layerMask Filter to check objects only on specific layers.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap RaycastNonAlloc_EBB7509C_A3DA7EC8
        */
        public static RaycastNonAlloc ($origin: Vector2, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : int
        public static RaycastAll ($origin: Vector2, $direction: Vector2) : RaycastHit2D[]
        /**
        * @methodSwap RaycastAll_EBB7509C_H86F5722E
        */
        public static RaycastAll ($origin: Vector2, $direction: Vector2, $distance: float) : RaycastHit2D[]
        /**
        * @methodSwap RaycastAll_EBB7509C_H63D96841
        */
        public static RaycastAll ($origin: Vector2, $direction: Vector2, $distance: float, $layerMask: int) : RaycastHit2D[]
        /**
        * @methodSwap RaycastAll_EBB7509C_F7740ECE
        */
        public static RaycastAll ($origin: Vector2, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float) : RaycastHit2D[]
        /**
        * Casts a ray against Colliders in the Scene, returning all Colliders that contact with it.
        * @param origin The point in 2D space where the ray originates.
        * @param direction A vector representing the direction of the ray.
        * @param distance The maximum distance over which to cast the ray.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The cast results returned.
        * @methodSwap RaycastAll_EBB7509C_H34B20F87
        */
        public static RaycastAll ($origin: Vector2, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : RaycastHit2D[]
        /**
        * @methodSwap CircleCast_EBB7509C_A6062DB8
        */
        public static CircleCast ($origin: Vector2, $radius: float, $direction: Vector2) : RaycastHit2D
        /**
        * @methodSwap CircleCast_EBB7509C_H6D9EA5ED
        */
        public static CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float) : RaycastHit2D
        /**
        * @methodSwap CircleCast_EBB7509C_B9B125CE
        */
        public static CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $layerMask: int) : RaycastHit2D
        /**
        * @methodSwap CircleCast_EBB7509C_H3B603C87
        */
        public static CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float) : RaycastHit2D
        /**
        * Casts a circle against Colliders in the Scene, returning the first Collider to contact with it.
        * @param origin The point in 2D space where the circle originates.
        * @param radius The radius of the circle.
        * @param direction A vector representing the direction of the circle.
        * @param distance The maximum distance over which to cast the circle.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The cast results returned.
        * @methodSwap CircleCast_EBB7509C_H721A2CD8
        */
        public static CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : RaycastHit2D
        /**
        * @methodSwap CircleCast_EBB7509C_H96F7CBA0
        */
        public static CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * Casts a circle against Colliders in the Scene, returning all Colliders that contact with it.
        * @param origin The point in 2D space where the circle originates.
        * @param radius The radius of the circle.
        * @param direction A vector representing the direction of the circle.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param distance The maximum distance over which to cast the circle.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap CircleCast_EBB7509C_H4DA75E35
        */
        public static CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap CircleCast_EBB7509C_H9A8C4F05
        */
        public static CircleCast ($origin: Vector2, $radius: float, $direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: float) : int
        /**
        * @methodSwap CircleCastAll_EBB7509C_A6062DB8
        */
        public static CircleCastAll ($origin: Vector2, $radius: float, $direction: Vector2) : RaycastHit2D[]
        /**
        * @methodSwap CircleCastAll_EBB7509C_H6D9EA5ED
        */
        public static CircleCastAll ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float) : RaycastHit2D[]
        /**
        * @methodSwap CircleCastAll_EBB7509C_B9B125CE
        */
        public static CircleCastAll ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $layerMask: int) : RaycastHit2D[]
        /**
        * @methodSwap CircleCastAll_EBB7509C_H3B603C87
        */
        public static CircleCastAll ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float) : RaycastHit2D[]
        /**
        * Casts a circle against Colliders in the Scene, returning all Colliders that contact with it.
        * @param origin The point in 2D space where the circle originates.
        * @param radius The radius of the circle.
        * @param direction A vector representing the direction of the circle.
        * @param distance The maximum distance over which to cast the circle.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The cast results returned.
        * @methodSwap CircleCastAll_EBB7509C_H721A2CD8
        */
        public static CircleCastAll ($origin: Vector2, $radius: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : RaycastHit2D[]
        /**
        * @methodSwap CircleCastNonAlloc_EBB7509C_A7BFD0D1
        */
        public static CircleCastNonAlloc ($origin: Vector2, $radius: float, $direction: Vector2, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap CircleCastNonAlloc_EBB7509C_H63B9661E
        */
        public static CircleCastNonAlloc ($origin: Vector2, $radius: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap CircleCastNonAlloc_EBB7509C_DAC784D1
        */
        public static CircleCastNonAlloc ($origin: Vector2, $radius: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int) : int
        /**
        * @methodSwap CircleCastNonAlloc_EBB7509C_E9AA621E
        */
        public static CircleCastNonAlloc ($origin: Vector2, $radius: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int, $minDepth: float) : int
        /**
        * Casts a circle into the Scene, returning Colliders that contact with it into the provided results array. Note: This method will be deprecated in a future build and it is recommended to use CircleCast instead.
        * @param origin The point in 2D space where the circle originates.
        * @param radius The radius of the circle.
        * @param direction A vector representing the direction of the circle.
        * @param results Array to receive results.
        * @param distance The maximum distance over which to cast the circle.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap CircleCastNonAlloc_EBB7509C_E04ED17
        */
        public static CircleCastNonAlloc ($origin: Vector2, $radius: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : int
        /**
        * @methodSwap BoxCast_EBB7509C_C6D3BA70
        */
        public static BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2) : RaycastHit2D
        /**
        * @methodSwap BoxCast_EBB7509C_H3AAA7F85
        */
        public static BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float) : RaycastHit2D
        /**
        * @methodSwap BoxCast_EBB7509C_H19869D46
        */
        public static BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $layerMask: int) : RaycastHit2D
        /**
        * @methodSwap BoxCast_EBB7509C_H1733D8DF
        */
        public static BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float) : RaycastHit2D
        /**
        * Casts a box against Colliders in the Scene, returning the first Collider to contact with it.
        * @param origin The point in 2D space where the box originates.
        * @param size The size of the box.
        * @param angle The angle of the box (in degrees).
        * @param direction A vector representing the direction of the box.
        * @param distance The maximum distance over which to cast the box.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The cast results returned.
        * @methodSwap BoxCast_EBB7509C_F00EEBD0
        */
        public static BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : RaycastHit2D
        /**
        * @methodSwap BoxCast_EBB7509C_H887E6278
        */
        public static BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * Casts a box against the Colliders in the Scene and returns all Colliders that are in contact with it.
        * @param origin The point in 2D space where the box originates.
        * @param size The size of the box.
        * @param angle The angle of the box (in degrees).
        * @param direction A vector representing the direction of the box.
        * @param distance The maximum distance over which to cast the box.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap BoxCast_EBB7509C_A871712D
        */
        public static BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap BoxCast_EBB7509C_CA7ED2DD
        */
        public static BoxCast ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: float) : int
        /**
        * @methodSwap BoxCastAll_EBB7509C_C6D3BA70
        */
        public static BoxCastAll ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2) : RaycastHit2D[]
        /**
        * @methodSwap BoxCastAll_EBB7509C_H3AAA7F85
        */
        public static BoxCastAll ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float) : RaycastHit2D[]
        /**
        * @methodSwap BoxCastAll_EBB7509C_H19869D46
        */
        public static BoxCastAll ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $layerMask: int) : RaycastHit2D[]
        /**
        * @methodSwap BoxCastAll_EBB7509C_H1733D8DF
        */
        public static BoxCastAll ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float) : RaycastHit2D[]
        /**
        * Casts a box against Colliders in the Scene, returning all Colliders that contact with it.
        * @param origin The point in 2D space where the box originates.
        * @param size The size of the box.
        * @param angle The angle of the box (in degrees).
        * @param direction A vector representing the direction of the box.
        * @param distance The maximum distance over which to cast the box.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The cast results returned.
        * @methodSwap BoxCastAll_EBB7509C_F00EEBD0
        */
        public static BoxCastAll ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : RaycastHit2D[]
        /**
        * @methodSwap BoxCastNonAlloc_EBB7509C_D6088C39
        */
        public static BoxCastNonAlloc ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap BoxCastNonAlloc_EBB7509C_C89E60A6
        */
        public static BoxCastNonAlloc ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap BoxCastNonAlloc_EBB7509C_H6FD97F39
        */
        public static BoxCastNonAlloc ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int) : int
        /**
        * @methodSwap BoxCastNonAlloc_EBB7509C_H6C37C1A6
        */
        public static BoxCastNonAlloc ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int, $minDepth: float) : int
        /**
        * Casts a box into the Scene, returning Colliders that contact with it into the provided results array. Note: This method will be deprecated in a future build and it is recommended to use BoxCast instead.
        * @param origin The point in 2D space where the box originates.
        * @param size The size of the box.
        * @param angle The angle of the box (in degrees).
        * @param direction A vector representing the direction of the box.
        * @param results Array to receive results.
        * @param distance The maximum distance over which to cast the box.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap BoxCastNonAlloc_EBB7509C_H161AF73F
        */
        public static BoxCastNonAlloc ($origin: Vector2, $size: Vector2, $angle: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : int
        /**
        * @methodSwap CapsuleCast_EBB7509C_H2E958F21
        */
        public static CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2) : RaycastHit2D
        /**
        * @methodSwap CapsuleCast_EBB7509C_D0507BAE
        */
        public static CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float) : RaycastHit2D
        /**
        * @methodSwap CapsuleCast_EBB7509C_H3FBA55C1
        */
        public static CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $layerMask: int) : RaycastHit2D
        /**
        * @methodSwap CapsuleCast_EBB7509C_C685FB4E
        */
        public static CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float) : RaycastHit2D
        /**
        * Casts a capsule against Colliders in the Scene, returning the first Collider to contact with it.
        * @param origin The point in 2D space where the capsule originates.
        * @param size The size of the capsule.
        * @param capsuleDirection The direction of the capsule.
        * @param angle The angle of the capsule (in degrees).
        * @param direction Vector representing the direction to cast the capsule.
        * @param distance The maximum distance over which to cast the capsule.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @returns The cast results returned.
        * @methodSwap CapsuleCast_EBB7509C_H2A0DA107
        */
        public static CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : RaycastHit2D
        /**
        * @methodSwap CapsuleCast_EBB7509C_H5B32A68B
        */
        public static CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]) : int
        /**
        * Casts a capsule against the Colliders in the Scene and returns all Colliders that are in contact with it.
        * @param origin The point in 2D space where the capsule originates.
        * @param size The size of the capsule.
        * @param capsuleDirection The direction of the capsule.
        * @param angle The angle of the capsule (in degrees).
        * @param direction Vector representing the direction to cast the capsule.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @param distance The maximum distance over which to cast the capsule.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap CapsuleCast_EBB7509C_H622ECA9C
        */
        public static CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap CapsuleCast_EBB7509C_H90504FB6
        */
        public static CapsuleCast ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: float) : int
        /**
        * @methodSwap CapsuleCastAll_EBB7509C_H2E958F21
        */
        public static CapsuleCastAll ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2) : RaycastHit2D[]
        /**
        * @methodSwap CapsuleCastAll_EBB7509C_D0507BAE
        */
        public static CapsuleCastAll ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float) : RaycastHit2D[]
        /**
        * @methodSwap CapsuleCastAll_EBB7509C_H3FBA55C1
        */
        public static CapsuleCastAll ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $layerMask: int) : RaycastHit2D[]
        /**
        * @methodSwap CapsuleCastAll_EBB7509C_C685FB4E
        */
        public static CapsuleCastAll ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float) : RaycastHit2D[]
        /**
        * Casts a capsule against Colliders in the Scene, returning all Colliders that contact with it.
        * @param origin The point in 2D space where the capsule originates.
        * @param size The size of the capsule.
        * @param capsuleDirection The direction of the capsule.
        * @param angle The angle of the capsule (in degrees).
        * @param direction Vector representing the direction to cast the capsule.
        * @param distance The maximum distance over which to cast the capsule.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @returns The cast results returned.
        * @methodSwap CapsuleCastAll_EBB7509C_H2A0DA107
        */
        public static CapsuleCastAll ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : RaycastHit2D[]
        /**
        * @methodSwap CapsuleCastNonAlloc_EBB7509C_EC254CC8
        */
        public static CapsuleCastNonAlloc ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap CapsuleCastNonAlloc_EBB7509C_H4C1A0FD
        */
        public static CapsuleCastNonAlloc ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float) : int
        /**
        * @methodSwap CapsuleCastNonAlloc_EBB7509C_H1E727BFE
        */
        public static CapsuleCastNonAlloc ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int) : int
        /**
        * @methodSwap CapsuleCastNonAlloc_EBB7509C_H6FCCD477
        */
        public static CapsuleCastNonAlloc ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int, $minDepth: float) : int
        /**
        * Casts a capsule into the Scene, returning Colliders that contact with it into the provided results array. Note: This method will be deprecated in a future build and it is recommended to use CapsuleCast instead.
        * @param origin The point in 2D space where the capsule originates.
        * @param size The size of the capsule.
        * @param capsuleDirection The direction of the capsule.
        * @param angle The angle of the capsule (in degrees).
        * @param direction Vector representing the direction to cast the capsule.
        * @param results Array to receive results.
        * @param distance The maximum distance over which to cast the capsule.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap CapsuleCastNonAlloc_EBB7509C_E2B2B848
        */
        public static CapsuleCastNonAlloc ($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: float, $direction: Vector2, $results: RaycastHit2D[], $distance: float, $layerMask: int, $minDepth: float, $maxDepth: float) : int
        public static GetRayIntersection ($ray: Ray) : RaycastHit2D
        /**
        * @methodSwap GetRayIntersection_EBB7509C_H7248904F
        */
        public static GetRayIntersection ($ray: Ray, $distance: float) : RaycastHit2D
        /**
        * Cast a 3D ray against the Colliders in the Scene returning the first Collider along the ray.
        * @param ray The 3D ray defining origin and direction to test.
        * @param distance The maximum distance over which to cast the ray.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @returns The cast results returned.
        * @methodSwap GetRayIntersection_EBB7509C_DD46DFA8
        */
        public static GetRayIntersection ($ray: Ray, $distance: float, $layerMask: int) : RaycastHit2D
        public static GetRayIntersectionAll ($ray: Ray) : RaycastHit2D[]
        /**
        * @methodSwap GetRayIntersectionAll_EBB7509C_H7248904F
        */
        public static GetRayIntersectionAll ($ray: Ray, $distance: float) : RaycastHit2D[]
        /**
        * Cast a 3D ray against the Colliders in the Scene returning all the Colliders along the ray.
        * @param ray The 3D ray defining origin and direction to test.
        * @param distance The maximum distance over which to cast the ray.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @returns The cast results returned.
        * @methodSwap GetRayIntersectionAll_EBB7509C_DD46DFA8
        */
        public static GetRayIntersectionAll ($ray: Ray, $distance: float, $layerMask: int) : RaycastHit2D[]
        public static GetRayIntersectionNonAlloc ($ray: Ray, $results: RaycastHit2D[]) : int
        /**
        * @methodSwap GetRayIntersectionNonAlloc_EBB7509C_DD54D068
        */
        public static GetRayIntersectionNonAlloc ($ray: Ray, $results: RaycastHit2D[], $distance: float) : int
        /**
        * Cast a 3D ray against the Colliders in the Scene returning the Colliders along the ray. Note: This method will be deprecated in a future build and it is recommended to use GetRayIntersection instead.
        * @param ray The 3D ray defining origin and direction to test.
        * @param distance The maximum distance over which to cast the ray.
        * @param layerMask Filter to detect Colliders only on certain layers.
        * @param results Array to receive results.
        * @returns The number of results returned.
        * @methodSwap GetRayIntersectionNonAlloc_EBB7509C_H8A9A793B
        */
        public static GetRayIntersectionNonAlloc ($ray: Ray, $results: RaycastHit2D[], $distance: float, $layerMask: int) : int
        public static OverlapPoint ($point: Vector2) : Collider2D
        /**
        * @methodSwap OverlapPoint_EBB7509C_AA3D0932
        */
        public static OverlapPoint ($point: Vector2, $layerMask: int) : Collider2D
        /**
        * @methodSwap OverlapPoint_EBB7509C_CAA05DEB
        */
        public static OverlapPoint ($point: Vector2, $layerMask: int, $minDepth: float) : Collider2D
        /**
        * Checks if a Collider overlaps a point in space.
        * @param point A point in world space.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The Collider overlapping the point.
        * @methodSwap OverlapPoint_EBB7509C_BAA7C27C
        */
        public static OverlapPoint ($point: Vector2, $layerMask: int, $minDepth: float, $maxDepth: float) : Collider2D
        /**
        * Checks if a Collider overlaps a point in world space.
        * @param point A point in world space.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        */
        public static OverlapPoint ($point: Vector2, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        public static OverlapPoint ($point: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        public static OverlapPointAll ($point: Vector2) : Collider2D[]
        /**
        * @methodSwap OverlapPointAll_EBB7509C_AA3D0932
        */
        public static OverlapPointAll ($point: Vector2, $layerMask: int) : Collider2D[]
        /**
        * @methodSwap OverlapPointAll_EBB7509C_CAA05DEB
        */
        public static OverlapPointAll ($point: Vector2, $layerMask: int, $minDepth: float) : Collider2D[]
        /**
        * Get a list of all Colliders that overlap a point in space.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @param point A point in space.
        * @param layerMask Filter to check objects only on specific layers.
        * @returns The cast results returned.
        * @methodSwap OverlapPointAll_EBB7509C_BAA7C27C
        */
        public static OverlapPointAll ($point: Vector2, $layerMask: int, $minDepth: float, $maxDepth: float) : Collider2D[]
        public static OverlapPointNonAlloc ($point: Vector2, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapPointNonAlloc_EBB7509C_H3D239CF3
        */
        public static OverlapPointNonAlloc ($point: Vector2, $results: Collider2D[], $layerMask: int) : int
        /**
        * @methodSwap OverlapPointNonAlloc_EBB7509C_H41BAD304
        */
        public static OverlapPointNonAlloc ($point: Vector2, $results: Collider2D[], $layerMask: int, $minDepth: float) : int
        /**
        * Get a list of all Colliders that overlap a point in space. Note: This method will be deprecated in a future build and it is recommended to use OverlapPoint instead.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @param point A point in space.
        * @param results Array to receive results.
        * @param layerMask Filter to check objects only on specific layers.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapPointNonAlloc_EBB7509C_H47A61749
        */
        public static OverlapPointNonAlloc ($point: Vector2, $results: Collider2D[], $layerMask: int, $minDepth: float, $maxDepth: float) : int
        /**
        * @methodSwap OverlapCircle_EBB7509C_A1ECE456
        */
        public static OverlapCircle ($point: Vector2, $radius: float) : Collider2D
        /**
        * @methodSwap OverlapCircle_EBB7509C_H19779B09
        */
        public static OverlapCircle ($point: Vector2, $radius: float, $layerMask: int) : Collider2D
        /**
        * @methodSwap OverlapCircle_EBB7509C_H9215F076
        */
        public static OverlapCircle ($point: Vector2, $radius: float, $layerMask: int, $minDepth: float) : Collider2D
        /**
        * Checks if a Collider falls within a circular area.
        * @param point Centre of the circle.
        * @param radius The radius of the circle.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The Collider overlapping the circle.
        * @methodSwap OverlapCircle_EBB7509C_H399ABD4F
        */
        public static OverlapCircle ($point: Vector2, $radius: float, $layerMask: int, $minDepth: float, $maxDepth: float) : Collider2D
        /**
        * Checks if a Collider is within a circular area.
        * @param point Centre of the circle.
        * @param radius The radius of the circle.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapCircle_EBB7509C_H18E0FCA2
        */
        public static OverlapCircle ($point: Vector2, $radius: float, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapCircle_EBB7509C_H25A56476
        */
        public static OverlapCircle ($point: Vector2, $radius: float, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * @methodSwap OverlapCircleAll_EBB7509C_A1ECE456
        */
        public static OverlapCircleAll ($point: Vector2, $radius: float) : Collider2D[]
        /**
        * @methodSwap OverlapCircleAll_EBB7509C_H19779B09
        */
        public static OverlapCircleAll ($point: Vector2, $radius: float, $layerMask: int) : Collider2D[]
        /**
        * @methodSwap OverlapCircleAll_EBB7509C_H9215F076
        */
        public static OverlapCircleAll ($point: Vector2, $radius: float, $layerMask: int, $minDepth: float) : Collider2D[]
        /**
        * Get a list of all Colliders that fall within a circular area.
        * @param point The center of the circle.
        * @param radius The radius of the circle.
        * @param layerMask Filter to check objects only on specified layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The cast results.
        * @methodSwap OverlapCircleAll_EBB7509C_H399ABD4F
        */
        public static OverlapCircleAll ($point: Vector2, $radius: float, $layerMask: int, $minDepth: float, $maxDepth: float) : Collider2D[]
        /**
        * @methodSwap OverlapCircleNonAlloc_EBB7509C_H9288550F
        */
        public static OverlapCircleNonAlloc ($point: Vector2, $radius: float, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapCircleNonAlloc_EBB7509C_H4DF5A8E8
        */
        public static OverlapCircleNonAlloc ($point: Vector2, $radius: float, $results: Collider2D[], $layerMask: int) : int
        /**
        * @methodSwap OverlapCircleNonAlloc_EBB7509C_H1916F89D
        */
        public static OverlapCircleNonAlloc ($point: Vector2, $radius: float, $results: Collider2D[], $layerMask: int, $minDepth: float) : int
        /**
        * Get a list of all Colliders that fall within a circular area. Note: This method will be deprecated in a future build and it is recommended to use OverlapCircle instead.
        * @param point The center of the circle.
        * @param radius The radius of the circle.
        * @param results Array to receive results.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapCircleNonAlloc_EBB7509C_H532EE7DA
        */
        public static OverlapCircleNonAlloc ($point: Vector2, $radius: float, $results: Collider2D[], $layerMask: int, $minDepth: float, $maxDepth: float) : int
        /**
        * @methodSwap OverlapBox_EBB7509C_H86F5722E
        */
        public static OverlapBox ($point: Vector2, $size: Vector2, $angle: float) : Collider2D
        /**
        * @methodSwap OverlapBox_EBB7509C_H63D96841
        */
        public static OverlapBox ($point: Vector2, $size: Vector2, $angle: float, $layerMask: int) : Collider2D
        /**
        * @methodSwap OverlapBox_EBB7509C_F7740ECE
        */
        public static OverlapBox ($point: Vector2, $size: Vector2, $angle: float, $layerMask: int, $minDepth: float) : Collider2D
        /**
        * Checks if a Collider falls within a box area.
        * @param point The center of the box.
        * @param size The size of the box.
        * @param angle The angle of the box.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @returns The Collider overlapping the box.
        * @methodSwap OverlapBox_EBB7509C_H34B20F87
        */
        public static OverlapBox ($point: Vector2, $size: Vector2, $angle: float, $layerMask: int, $minDepth: float, $maxDepth: float) : Collider2D
        /**
        * Checks if a Collider falls within a box area.
        * @param point The center of the box.
        * @param size The size of the box.
        * @param angle The angle of the box.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapBox_EBB7509C_H2DFAB68A
        */
        public static OverlapBox ($point: Vector2, $size: Vector2, $angle: float, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapBox_EBB7509C_H9202BC9E
        */
        public static OverlapBox ($point: Vector2, $size: Vector2, $angle: float, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * @methodSwap OverlapBoxAll_EBB7509C_H86F5722E
        */
        public static OverlapBoxAll ($point: Vector2, $size: Vector2, $angle: float) : Collider2D[]
        /**
        * @methodSwap OverlapBoxAll_EBB7509C_H63D96841
        */
        public static OverlapBoxAll ($point: Vector2, $size: Vector2, $angle: float, $layerMask: int) : Collider2D[]
        /**
        * @methodSwap OverlapBoxAll_EBB7509C_F7740ECE
        */
        public static OverlapBoxAll ($point: Vector2, $size: Vector2, $angle: float, $layerMask: int, $minDepth: float) : Collider2D[]
        /**
        * Get a list of all Colliders that fall within a box area.
        * @param point The center of the box.
        * @param size The size of the box.
        * @param angle The angle of the box.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @returns The cast results returned.
        * @methodSwap OverlapBoxAll_EBB7509C_H34B20F87
        */
        public static OverlapBoxAll ($point: Vector2, $size: Vector2, $angle: float, $layerMask: int, $minDepth: float, $maxDepth: float) : Collider2D[]
        /**
        * @methodSwap OverlapBoxNonAlloc_EBB7509C_H464EE1C7
        */
        public static OverlapBoxNonAlloc ($point: Vector2, $size: Vector2, $angle: float, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapBoxNonAlloc_EBB7509C_C4886080
        */
        public static OverlapBoxNonAlloc ($point: Vector2, $size: Vector2, $angle: float, $results: Collider2D[], $layerMask: int) : int
        /**
        * @methodSwap OverlapBoxNonAlloc_EBB7509C_H1BE40F95
        */
        public static OverlapBoxNonAlloc ($point: Vector2, $size: Vector2, $angle: float, $results: Collider2D[], $layerMask: int, $minDepth: float) : int
        /**
        * Get a list of all Colliders that fall within a box area. Note: This method will be deprecated in a future build and it is recommended to use OverlapBox instead.
        * @param point The center of the box.
        * @param size The size of the box.
        * @param angle The angle of the box.
        * @param results Array to receive results.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapBoxNonAlloc_EBB7509C_H72913AF2
        */
        public static OverlapBoxNonAlloc ($point: Vector2, $size: Vector2, $angle: float, $results: Collider2D[], $layerMask: int, $minDepth: float, $maxDepth: float) : int
        public static OverlapArea ($pointA: Vector2, $pointB: Vector2) : Collider2D
        /**
        * @methodSwap OverlapArea_EBB7509C_H8A060F0A
        */
        public static OverlapArea ($pointA: Vector2, $pointB: Vector2, $layerMask: int) : Collider2D
        /**
        * @methodSwap OverlapArea_EBB7509C_H280E67C3
        */
        public static OverlapArea ($pointA: Vector2, $pointB: Vector2, $layerMask: int, $minDepth: float) : Collider2D
        /**
        * Checks if a Collider falls within a rectangular area.
        * @param pointA One corner of the rectangle.
        * @param pointB Diagonally opposite the point A corner of the rectangle.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The Collider overlapping the area.
        * @methodSwap OverlapArea_EBB7509C_H5CE88314
        */
        public static OverlapArea ($pointA: Vector2, $pointB: Vector2, $layerMask: int, $minDepth: float, $maxDepth: float) : Collider2D
        /**
        * Checks if a Collider falls within a rectangular area.
        * @param pointA One corner of the rectangle.
        * @param pointB Diagonally opposite the point A corner of the rectangle.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        */
        public static OverlapArea ($pointA: Vector2, $pointB: Vector2, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        public static OverlapArea ($pointA: Vector2, $pointB: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        public static OverlapAreaAll ($pointA: Vector2, $pointB: Vector2) : Collider2D[]
        /**
        * @methodSwap OverlapAreaAll_EBB7509C_H8A060F0A
        */
        public static OverlapAreaAll ($pointA: Vector2, $pointB: Vector2, $layerMask: int) : Collider2D[]
        /**
        * @methodSwap OverlapAreaAll_EBB7509C_H280E67C3
        */
        public static OverlapAreaAll ($pointA: Vector2, $pointB: Vector2, $layerMask: int, $minDepth: float) : Collider2D[]
        /**
        * Get a list of all Colliders that fall within a rectangular area.
        * @param pointA One corner of the rectangle.
        * @param pointB Diagonally opposite the point A corner of the rectangle.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns The cast results returned.
        * @methodSwap OverlapAreaAll_EBB7509C_H5CE88314
        */
        public static OverlapAreaAll ($pointA: Vector2, $pointB: Vector2, $layerMask: int, $minDepth: float, $maxDepth: float) : Collider2D[]
        public static OverlapAreaNonAlloc ($pointA: Vector2, $pointB: Vector2, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapAreaNonAlloc_EBB7509C_H774FA50B
        */
        public static OverlapAreaNonAlloc ($pointA: Vector2, $pointB: Vector2, $results: Collider2D[], $layerMask: int) : int
        /**
        * @methodSwap OverlapAreaNonAlloc_EBB7509C_H31CBC21C
        */
        public static OverlapAreaNonAlloc ($pointA: Vector2, $pointB: Vector2, $results: Collider2D[], $layerMask: int, $minDepth: float) : int
        /**
        * Get a list of all Colliders that fall within a specified area. Note: This method will be deprecated in a future build and it is recommended to use OverlapArea instead.
        * @param pointA One corner of the rectangle.
        * @param pointB Diagonally opposite the point A corner of the rectangle.
        * @param results Array to receive results.
        * @param layerMask Filter to check objects only on specified layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapAreaNonAlloc_EBB7509C_H19710521
        */
        public static OverlapAreaNonAlloc ($pointA: Vector2, $pointB: Vector2, $results: Collider2D[], $layerMask: int, $minDepth: float, $maxDepth: float) : int
        /**
        * @methodSwap OverlapCapsule_EBB7509C_A3AE0BE9
        */
        public static OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float) : Collider2D
        /**
        * @methodSwap OverlapCapsule_EBB7509C_H68A95EB2
        */
        public static OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $layerMask: int) : Collider2D
        /**
        * @methodSwap OverlapCapsule_EBB7509C_E1A8426B
        */
        public static OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $layerMask: int, $minDepth: float) : Collider2D
        /**
        * Checks if a Collider falls within a capsule area.
        * @param point The center of the capsule.
        * @param size The size of the capsule.
        * @param direction The direction of the capsule.
        * @param angle The angle of the capsule.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @returns The Collider overlapping the capsule.
        * @methodSwap OverlapCapsule_EBB7509C_H116A7BFC
        */
        public static OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $layerMask: int, $minDepth: float, $maxDepth: float) : Collider2D
        /**
        * Checks if a Collider falls within a capsule area.
        * @param point The center of the capsule.
        * @param size The size of the capsule.
        * @param direction The direction of the capsule.
        * @param angle The angle of the capsule.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapCapsule_EBB7509C_H1CC7CA3
        */
        public static OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapCapsule_EBB7509C_EEE23F61
        */
        public static OverlapCapsule ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * @methodSwap OverlapCapsuleAll_EBB7509C_A3AE0BE9
        */
        public static OverlapCapsuleAll ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float) : Collider2D[]
        /**
        * @methodSwap OverlapCapsuleAll_EBB7509C_H68A95EB2
        */
        public static OverlapCapsuleAll ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $layerMask: int) : Collider2D[]
        /**
        * @methodSwap OverlapCapsuleAll_EBB7509C_E1A8426B
        */
        public static OverlapCapsuleAll ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $layerMask: int, $minDepth: float) : Collider2D[]
        /**
        * Get a list of all Colliders that fall within a capsule area.
        * @param point The center of the capsule.
        * @param size The size of the capsule.
        * @param direction The direction of the capsule.
        * @param angle The angle of the capsule.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @returns The cast results returned.
        * @methodSwap OverlapCapsuleAll_EBB7509C_H116A7BFC
        */
        public static OverlapCapsuleAll ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $layerMask: int, $minDepth: float, $maxDepth: float) : Collider2D[]
        /**
        * @methodSwap OverlapCapsuleNonAlloc_EBB7509C_H5360DE00
        */
        public static OverlapCapsuleNonAlloc ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $results: Collider2D[]) : int
        /**
        * @methodSwap OverlapCapsuleNonAlloc_EBB7509C_H2585BE73
        */
        public static OverlapCapsuleNonAlloc ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $results: Collider2D[], $layerMask: int) : int
        /**
        * @methodSwap OverlapCapsuleNonAlloc_EBB7509C_E6E3B84
        */
        public static OverlapCapsuleNonAlloc ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $results: Collider2D[], $layerMask: int, $minDepth: float) : int
        /**
        * Get a list of all Colliders that fall within a capsule area. Note: This method will be deprecated in a future build and it is recommended to use OverlapCapsule instead.
        * @param point The center of the capsule.
        * @param size The size of the capsule.
        * @param direction The direction of the capsule.
        * @param angle The angle of the capsule.
        * @param results Array to receive results.
        * @param layerMask Filter to check objects only on specific layers.
        * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
        * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
        * @returns Returns the number of results placed in the results array.
        * @methodSwap OverlapCapsuleNonAlloc_EBB7509C_H4264BCC9
        */
        public static OverlapCapsuleNonAlloc ($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: float, $results: Collider2D[], $layerMask: int, $minDepth: float, $maxDepth: float) : int
        /**
        * Gets a list of all Colliders that overlap the given Collider.
        * @param Collider The Collider that defines the area used to query for other Collider overlaps.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
        * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
        * @returns Returns the number of results placed in the results array.
        */
        public static OverlapCollider ($collider: Collider2D, $contactFilter: ContactFilter2D, $results: Collider2D[]) : int
        public static OverlapCollider ($collider: Collider2D, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>) : int
        /**
        * Retrieves all contact points in for contacts between with the collider1 and collider2, with the results filtered by the ContactFilter2D.
        * @param collider1 The Collider to check if it has contacts against collider2.
        * @param collider2 The Collider to check if it has contacts against collider1.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param contacts An array of ContactPoint2D used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public static GetContacts ($collider1: Collider2D, $collider2: Collider2D, $contactFilter: ContactFilter2D, $contacts: ContactPoint2D[]) : int
        /**
        * Retrieves all contact points in contact with the Collider.
        * @param Collider The Collider to retrieve contacts for.
        * @param contacts An array of ContactPoint2D used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public static GetContacts ($collider: Collider2D, $contacts: ContactPoint2D[]) : int
        /**
        * Retrieves all contact points in contact with the Collider, with the results filtered by the ContactFilter2D.
        * @param Collider The Collider to retrieve contacts for.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param contacts An array of ContactPoint2D used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public static GetContacts ($collider: Collider2D, $contactFilter: ContactFilter2D, $contacts: ContactPoint2D[]) : int
        /**
        * Retrieves all Colliders in contact with the Collider.
        * @param Collider The Collider to retrieve contacts for.
        * @param Colliders An array of Collider2D used to receive the results.
        * @returns Returns the number of Colliders placed in the Colliders array.
        */
        public static GetContacts ($collider: Collider2D, $colliders: Collider2D[]) : int
        /**
        * Retrieves all Colliders in contact with the Collider, with the results filtered by the ContactFilter2D.
        * @param Collider The Collider to retrieve contacts for.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param Colliders An array of Collider2D used to receive the results.
        * @returns Returns the number of Colliders placed in the Colliders array.
        */
        public static GetContacts ($collider: Collider2D, $contactFilter: ContactFilter2D, $colliders: Collider2D[]) : int
        /**
        * Retrieves all contact points in contact with any of the Collider(s) attached to this rigidbody.
        * @param rigidbody The rigidbody to retrieve contacts for.  All Colliders attached to this rigidbody will be checked.
        * @param contacts An array of ContactPoint2D used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public static GetContacts ($rigidbody: Rigidbody2D, $contacts: ContactPoint2D[]) : int
        /**
        * Retrieves all contact points in contact with any of the Collider(s) attached to this rigidbody, with the results filtered by the ContactFilter2D.
        * @param rigidbody The rigidbody to retrieve contacts for.  All Colliders attached to this rigidbody will be checked.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param contacts An array of ContactPoint2D used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public static GetContacts ($rigidbody: Rigidbody2D, $contactFilter: ContactFilter2D, $contacts: ContactPoint2D[]) : int
        /**
        * Retrieves all Colliders in contact with any of the Collider(s) attached to this rigidbody.
        * @param rigidbody The rigidbody to retrieve contacts for.  All Colliders attached to this rigidbody will be checked.
        * @param Colliders An array of Collider2D used to receive the results.
        * @returns Returns the number of Colliders placed in the Colliders array.
        */
        public static GetContacts ($rigidbody: Rigidbody2D, $colliders: Collider2D[]) : int
        /**
        * Retrieves all Colliders in contact with any of the Collider(s) attached to this rigidbody, with the results filtered by the ContactFilter2D.
        * @param rigidbody The rigidbody to retrieve contacts for.  All Colliders attached to this rigidbody will be checked.
        * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
        * @param Colliders An array of Collider2D used to receive the results.
        * @returns Returns the number of Colliders placed in the Colliders array.
        */
        public static GetContacts ($rigidbody: Rigidbody2D, $contactFilter: ContactFilter2D, $colliders: Collider2D[]) : int
        public static GetContacts ($collider1: Collider2D, $collider2: Collider2D, $contactFilter: ContactFilter2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>) : int
        public static GetContacts ($collider: Collider2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>) : int
        public static GetContacts ($collider: Collider2D, $contactFilter: ContactFilter2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>) : int
        public static GetContacts ($collider: Collider2D, $colliders: System_Collections_Generic.List$1<Collider2D>) : int
        public static GetContacts ($collider: Collider2D, $contactFilter: ContactFilter2D, $colliders: System_Collections_Generic.List$1<Collider2D>) : int
        public static GetContacts ($rigidbody: Rigidbody2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>) : int
        public static GetContacts ($rigidbody: Rigidbody2D, $contactFilter: ContactFilter2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>) : int
        public static GetContacts ($rigidbody: Rigidbody2D, $colliders: System_Collections_Generic.List$1<Collider2D>) : int
        public static GetContacts ($rigidbody: Rigidbody2D, $contactFilter: ContactFilter2D, $colliders: System_Collections_Generic.List$1<Collider2D>) : int
    }

    /**
    * A selection of modes that control when Unity executes the 2D physics simulation.
    */
    enum SimulationMode2D {
        FixedUpdate = 0,
        Update = 1,
        Script = 2 
    }

    /**
    * A set of options that control how physics operates when using the job system to multithread the physics simulation.
    */
    class PhysicsJobOptions2D extends System.ValueType {

        /**
        * Should physics simulation use multithreading?
        */
        public get useMultithreading(): boolean;
        public set useMultithreading(value: boolean);
        /**
        * Should physics simulation sort multi-threaded results to maintain processing order consistency?
        */
        public get useConsistencySorting(): boolean;
        public set useConsistencySorting(value: boolean);
        /**
        * Controls the minimum number of Rigidbody2D being interpolated in each simulation job.
        */
        public get interpolationPosesPerJob(): int;
        public set interpolationPosesPerJob(value: int);
        /**
        * Controls the minimum number of new contacts to find in each simulation job.
        */
        public get newContactsPerJob(): int;
        public set newContactsPerJob(value: int);
        /**
        * Controls the minimum number of contacts to collide in each simulation job.
        */
        public get collideContactsPerJob(): int;
        public set collideContactsPerJob(value: int);
        /**
        * Controls the minimum number of flags to be cleared in each simulation job.
        */
        public get clearFlagsPerJob(): int;
        public set clearFlagsPerJob(value: int);
        /**
        * Controls the minimum number of bodies to be cleared in each simulation job.
        */
        public get clearBodyForcesPerJob(): int;
        public set clearBodyForcesPerJob(value: int);
        /**
        * Controls the minimum number of fixtures to synchronize in the broadphase during discrete island solving in each simulation job.
        */
        public get syncDiscreteFixturesPerJob(): int;
        public set syncDiscreteFixturesPerJob(value: int);
        /**
        * Controls the minimum number of fixtures to synchronize in the broadphase during continuous island solving in each simulation job.
        */
        public get syncContinuousFixturesPerJob(): int;
        public set syncContinuousFixturesPerJob(value: int);
        /**
        * Controls the minimum number of nearest contacts to find in each simulation job.
        */
        public get findNearestContactsPerJob(): int;
        public set findNearestContactsPerJob(value: int);
        /**
        * Controls the minimum number of trigger contacts to update in each simulation job.
        */
        public get updateTriggerContactsPerJob(): int;
        public set updateTriggerContactsPerJob(value: int);
        /**
        * The minimum threshold cost of all bodies, contacts and joints in an island during discrete island solving.
        */
        public get islandSolverCostThreshold(): int;
        public set islandSolverCostThreshold(value: int);
        /**
        * Scales the cost of each body during discrete island solving.
        */
        public get islandSolverBodyCostScale(): int;
        public set islandSolverBodyCostScale(value: int);
        /**
        * Scales the cost of each contact during discrete island solving.
        */
        public get islandSolverContactCostScale(): int;
        public set islandSolverContactCostScale(value: int);
        /**
        * Scales the cost of each joint during discrete island solving.
        */
        public get islandSolverJointCostScale(): int;
        public set islandSolverJointCostScale(value: int);
        /**
        * Controls the minimum number of bodies to solve in each simulation job when performing island solving.
        */
        public get islandSolverBodiesPerJob(): int;
        public set islandSolverBodiesPerJob(value: int);
        /**
        * Controls the minimum number of contacts to solve in each simulation job when performing island solving.
        */
        public get islandSolverContactsPerJob(): int;
        public set islandSolverContactsPerJob(value: int);

    }

    /**
    * Represents the state of a joint limit.
    */
    enum JointLimitState2D {
        Inactive = 0,
        LowerLimit = 1,
        UpperLimit = 2,
        EqualLimits = 3 
    }

    /**
    * Options for selecting which action to take when a Joint2D breaks.
    */
    enum JointBreakAction2D {
        Ignore = 0,
        CallbackOnly = 1,
        Disable = 2,
        Destroy = 3 
    }

    /**
    * Selects the source and/or target to be used by an Effector2D.
    */
    enum EffectorSelection2D {
        Rigidbody = 0,
        Collider = 1 
    }

    /**
    * The mode used to apply Effector2D forces.
    */
    enum EffectorForceMode2D {
        Constant = 0,
        InverseLinear = 1,
        InverseSquared = 2 
    }

    /**
    * Collision details returned by 2D physics callback functions.
    */
    class Collision2D extends System.Object {

        /**
        * The incoming Collider2D involved in the collision with the otherCollider.
        */
        public get collider(): Collider2D;
        /**
        * The other Collider2D involved in the collision with the collider.
        */
        public get otherCollider(): Collider2D;
        /**
        * The incoming Rigidbody2D involved in the collision with the otherRigidbody.
        */
        public get rigidbody(): Rigidbody2D;
        /**
        * The other Rigidbody2D involved in the collision with the rigidbody.
        */
        public get otherRigidbody(): Rigidbody2D;
        /**
        * The Transform of the incoming object involved in the collision.
        */
        public get transform(): Transform;
        /**
        * The incoming GameObject involved in the collision.
        */
        public get gameObject(): GameObject;
        /**
        * The relative linear velocity of the two colliding objects (Read Only).
        */
        public get relativeVelocity(): Vector2;
        /**
        * Indicates whether the collision response or reaction is enabled or disabled.
        */
        public get enabled(): boolean;
        /**
        * The specific points of contact with the incoming Collider2D. You should avoid using this as it produces memory garbage. Use GetContact or GetContacts instead.
        */
        public get contacts(): ContactPoint2D[];
        /**
        * Gets the number of contacts for this collision.
        */
        public get contactCount(): int;

        public constructor ()
        /**
        * Gets the contact point at the specified index.
        * @param index The index of the contact to retrieve.
        * @returns The contact at the specified index.
        */
        public GetContact ($index: int) : ContactPoint2D
        /**
        * Retrieves all contact points for contacts between collider and otherCollider.
        * @param contacts An array of ContactPoint2D used to receive the results.
        * @returns Returns the number of contacts placed in the contacts array.
        */
        public GetContacts ($contacts: ContactPoint2D[]) : int
        public GetContacts ($contacts: System_Collections_Generic.List$1<ContactPoint2D>) : int
    }

    /**
    * Angular limits on the rotation of a Rigidbody2D object around a HingeJoint2D.
    */
    class JointAngleLimits2D extends System.ValueType {

        /**
        * Lower angular limit of rotation.
        */
        public get min(): float;
        public set min(value: float);
        /**
        * Upper angular limit of rotation.
        */
        public get max(): float;
        public set max(value: float);

    }

    /**
    * Motion limits of a Rigidbody2D object along a SliderJoint2D.
    */
    class JointTranslationLimits2D extends System.ValueType {

        /**
        * Minimum distance the Rigidbody2D object can move from the Slider Joint's anchor.
        */
        public get min(): float;
        public set min(value: float);
        /**
        * Maximum distance the Rigidbody2D object can move from the Slider Joint's anchor.
        */
        public get max(): float;
        public set max(value: float);

    }

    /**
    * Parameters for the optional motor force applied to a Joint2D.
    */
    class JointMotor2D extends System.ValueType {

        /**
        * The desired speed for the Rigidbody2D to reach as it moves with the joint.
        */
        public get motorSpeed(): float;
        public set motorSpeed(value: float);
        /**
        * The maximum force that can be applied to the Rigidbody2D at the joint to attain the target speed.
        */
        public get maxMotorTorque(): float;
        public set maxMotorTorque(value: float);

    }

    /**
    * Joint suspension is used to define how suspension works on a WheelJoint2D.
    */
    class JointSuspension2D extends System.ValueType {

        /**
        * The amount by which the suspension spring force is reduced in proportion to the movement speed.
        */
        public get dampingRatio(): float;
        public set dampingRatio(value: float);
        /**
        * The frequency at which the suspension spring oscillates.
        */
        public get frequency(): float;
        public set frequency(value: float);
        /**
        * The world angle (in degrees) along which the suspension will move.
        */
        public get angle(): float;
        public set angle(value: float);

    }

    /**
    * Represents a Collider2D that is configured by assigning PhysicsShape2D geometry to it via a PhysicsShapeGroup2D.
    */
    class CustomCollider2D extends Collider2D {

        /**
        * The density of the collider used to calculate its mass (when auto mass is enabled).
        */
        public get density(): float;
        public set density(value: float);
        /**
        * Is this collider configured as a trigger?
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Whether the collider is used by an attached effector or not.
        */
        public get usedByEffector(): boolean;
        public set usedByEffector(value: boolean);
        /**
        * Sets whether the Collider will be used or not used by a CompositeCollider2D.
        */
        public get usedByComposite(): boolean;
        public set usedByComposite(value: boolean);
        /**
        * Get the CompositeCollider2D that is available to be attached to the collider.
        */
        public get composite(): CompositeCollider2D;
        /**
        * The local offset of the collider geometry.
        */
        public get offset(): Vector2;
        public set offset(value: Vector2);
        /**
        * The Rigidbody2D attached to the Collider2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The number of active PhysicsShape2D the Collider2D is currently using.
        */
        public get shapeCount(): int;
        /**
        * The world space bounding area of the collider.
        */
        public get bounds(): Bounds;
        /**
        * The error state that indicates the state of the physics shapes the 2D Collider tried to create. (Read Only)
        */
        public get errorState(): ColliderErrorState2D;
        /**
        * The PhysicsMaterial2D that is applied to this collider.
        */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
        * A decision priority assigned to this Collider2D used when there is a conflicting decision on whether a contact between itself and another Collision2D should happen or not.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional Layers that this Collider2D should exclude when deciding if a contact with another Collider2D should happen or not.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional Layers that this Collider2D should include when deciding if a contact with another Collider2D should happen or not.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D is allowed to send forces to during a Collision contact with another Collider2D.
        */
        public get forceSendLayers(): LayerMask;
        public set forceSendLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D can receive forces from during a Collision contact with another Collider2D.
        */
        public get forceReceiveLayers(): LayerMask;
        public set forceReceiveLayers(value: LayerMask);
        /**
        * The layers of other Collider2D involved in contacts with this Collider2D that will be captured.
        */
        public get contactCaptureLayers(): LayerMask;
        public set contactCaptureLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D will report collision or trigger callbacks for during a contact with another Collider2D.
        */
        public get callbackLayers(): LayerMask;
        public set callbackLayers(value: LayerMask);
        /**
        * Get the friction used by the collider.
        */
        public get friction(): float;
        /**
        * Get the bounciness used by the collider.
        */
        public get bounciness(): float;
        /**
        * The total number of custom PhysicsShape2D assigned to the Collider. (Read Only)
        */
        public get customShapeCount(): int;
        /**
        * The total number of Vector2|vertices used by the Collider. (Read Only)
        */
        public get customVertexCount(): int;

        private constructor ()
        /**
        * Gets all the physics shapes and vertices in the Collider and places them in the specified PhysicsShapeGroup2D.
        * @param physicsShapeGroup The physics shape group that will receive all the PhysicsShape2D|physics shapes and Vector2|vertices from the Collider.
        * @returns Returns the total number of PhysicsShape2D|physics shapes placed in the specified physicsShapeGroup.
        */
        public GetCustomShapes ($physicsShapeGroup: PhysicsShapeGroup2D) : int
        /**
        * Gets a specified number of physics shapes defined byshapeCount starting at shapeIndex along with all associated vertices those shapes use and places them in the specified PhysicsShapeGroup2D.
        * @param physicsShapeGroup The physics shape group that will receive the PhysicsShape2D|physics shapes and Vector2|vertices from the Collider.
        * @param shapeIndex The shape index within the Collider to start retrieving shapes from.
        * @param shapeCount The total number of shapes starting at the shapeIndex to retrieve.
        * @returns The total number of PhysicsShape2D|physics shapes placed in the specified physicsShapeGroup.
        * @methodSwap GetCustomShapes_EBB7509C_F3523325
        */
        public GetCustomShapes ($physicsShapeGroup: PhysicsShapeGroup2D, $shapeIndex: int, $shapeCount?: int) : int
        public GetCustomShapes ($shapes: Unity_Collections.NativeArray$1<PhysicsShape2D>, $vertices: Unity_Collections.NativeArray$1<Vector2>) : int
        /**
        * Sets all the shapes and vertices in the Collider to those represented by the specified PhysicsShapeGroup2D.
        * @param physicsShapeGroup The PhysicsShapeGroup2D to use as the source of shapes and vertices.
        */
        public SetCustomShapes ($physicsShapeGroup: PhysicsShapeGroup2D) : void
        public SetCustomShapes ($shapes: Unity_Collections.NativeArray$1<PhysicsShape2D>, $vertices: Unity_Collections.NativeArray$1<Vector2>) : void
        /**
        * Sets a single shape and all associated shape vertices from the specified physicsShapeGroup into the Collider.
        * @param physicsShapeGroup The PhysicsShapeGroup2D to use as the source of shapes and vertices.
        * @param srcShapeIndex The source shape index within the physicsShapeGroup used to assign to the Collider.
        * @param dstShapeIndex The destination shape index within the Collider to copy the source shape to.
        * @methodSwap SetCustomShape_EBB7509C_F3523325
        */
        public SetCustomShape ($physicsShapeGroup: PhysicsShapeGroup2D, $srcShapeIndex: int, $dstShapeIndex: int) : void
        /**
        * @methodSwap SetCustomShape_EBB7509C_H3158D972
        */
        public SetCustomShape ($shapes: Unity_Collections.NativeArray$1<PhysicsShape2D>, $vertices: Unity_Collections.NativeArray$1<Vector2>, $srcShapeIndex: int, $dstShapeIndex: int) : void
        /**
        * Deletes a specific number of shapes defined by shapeCount starting at shapeIndex along with all associated vertices those shapes use.
        * @param shapeIndex The index of the shape stored in the Collider.
        * @param shapeCount The number of shapes to delete starting at the specified index.
        * @methodSwap ClearCustomShapes_EBB7509C_H2CFB2EE5
        */
        public ClearCustomShapes ($shapeIndex: int, $shapeCount: int) : void
        /**
        * Deletes all the shapes and associated vertices for those shapes from the Collider.
        */
        public ClearCustomShapes () : void
    }

    /**
    * Collider for 2D physics representing an circle.
    */
    class CircleCollider2D extends Collider2D {

        /**
        * The density of the collider used to calculate its mass (when auto mass is enabled).
        */
        public get density(): float;
        public set density(value: float);
        /**
        * Is this collider configured as a trigger?
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Whether the collider is used by an attached effector or not.
        */
        public get usedByEffector(): boolean;
        public set usedByEffector(value: boolean);
        /**
        * Sets whether the Collider will be used or not used by a CompositeCollider2D.
        */
        public get usedByComposite(): boolean;
        public set usedByComposite(value: boolean);
        /**
        * Get the CompositeCollider2D that is available to be attached to the collider.
        */
        public get composite(): CompositeCollider2D;
        /**
        * The local offset of the collider geometry.
        */
        public get offset(): Vector2;
        public set offset(value: Vector2);
        /**
        * The Rigidbody2D attached to the Collider2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The number of active PhysicsShape2D the Collider2D is currently using.
        */
        public get shapeCount(): int;
        /**
        * The world space bounding area of the collider.
        */
        public get bounds(): Bounds;
        /**
        * The error state that indicates the state of the physics shapes the 2D Collider tried to create. (Read Only)
        */
        public get errorState(): ColliderErrorState2D;
        /**
        * The PhysicsMaterial2D that is applied to this collider.
        */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
        * A decision priority assigned to this Collider2D used when there is a conflicting decision on whether a contact between itself and another Collision2D should happen or not.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional Layers that this Collider2D should exclude when deciding if a contact with another Collider2D should happen or not.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional Layers that this Collider2D should include when deciding if a contact with another Collider2D should happen or not.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D is allowed to send forces to during a Collision contact with another Collider2D.
        */
        public get forceSendLayers(): LayerMask;
        public set forceSendLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D can receive forces from during a Collision contact with another Collider2D.
        */
        public get forceReceiveLayers(): LayerMask;
        public set forceReceiveLayers(value: LayerMask);
        /**
        * The layers of other Collider2D involved in contacts with this Collider2D that will be captured.
        */
        public get contactCaptureLayers(): LayerMask;
        public set contactCaptureLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D will report collision or trigger callbacks for during a contact with another Collider2D.
        */
        public get callbackLayers(): LayerMask;
        public set callbackLayers(value: LayerMask);
        /**
        * Get the friction used by the collider.
        */
        public get friction(): float;
        /**
        * Get the bounciness used by the collider.
        */
        public get bounciness(): float;
        /**
        * Radius of the circle.
        */
        public get radius(): float;
        public set radius(value: float);

        private constructor ()
    }

    /**
    * A capsule-shaped primitive collider.
    */
    class CapsuleCollider2D extends Collider2D {

        /**
        * The density of the collider used to calculate its mass (when auto mass is enabled).
        */
        public get density(): float;
        public set density(value: float);
        /**
        * Is this collider configured as a trigger?
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Whether the collider is used by an attached effector or not.
        */
        public get usedByEffector(): boolean;
        public set usedByEffector(value: boolean);
        /**
        * Sets whether the Collider will be used or not used by a CompositeCollider2D.
        */
        public get usedByComposite(): boolean;
        public set usedByComposite(value: boolean);
        /**
        * Get the CompositeCollider2D that is available to be attached to the collider.
        */
        public get composite(): CompositeCollider2D;
        /**
        * The local offset of the collider geometry.
        */
        public get offset(): Vector2;
        public set offset(value: Vector2);
        /**
        * The Rigidbody2D attached to the Collider2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The number of active PhysicsShape2D the Collider2D is currently using.
        */
        public get shapeCount(): int;
        /**
        * The world space bounding area of the collider.
        */
        public get bounds(): Bounds;
        /**
        * The error state that indicates the state of the physics shapes the 2D Collider tried to create. (Read Only)
        */
        public get errorState(): ColliderErrorState2D;
        /**
        * The PhysicsMaterial2D that is applied to this collider.
        */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
        * A decision priority assigned to this Collider2D used when there is a conflicting decision on whether a contact between itself and another Collision2D should happen or not.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional Layers that this Collider2D should exclude when deciding if a contact with another Collider2D should happen or not.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional Layers that this Collider2D should include when deciding if a contact with another Collider2D should happen or not.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D is allowed to send forces to during a Collision contact with another Collider2D.
        */
        public get forceSendLayers(): LayerMask;
        public set forceSendLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D can receive forces from during a Collision contact with another Collider2D.
        */
        public get forceReceiveLayers(): LayerMask;
        public set forceReceiveLayers(value: LayerMask);
        /**
        * The layers of other Collider2D involved in contacts with this Collider2D that will be captured.
        */
        public get contactCaptureLayers(): LayerMask;
        public set contactCaptureLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D will report collision or trigger callbacks for during a contact with another Collider2D.
        */
        public get callbackLayers(): LayerMask;
        public set callbackLayers(value: LayerMask);
        /**
        * Get the friction used by the collider.
        */
        public get friction(): float;
        /**
        * Get the bounciness used by the collider.
        */
        public get bounciness(): float;
        /**
        * The width and height of the capsule area.
        */
        public get size(): Vector2;
        public set size(value: Vector2);
        /**
        * The direction that the capsule sides can extend.
        */
        public get direction(): CapsuleDirection2D;
        public set direction(value: CapsuleDirection2D);

        private constructor ()
    }

    /**
    * Collider for 2D physics representing an arbitrary set of connected edges (lines) defined by its vertices.
    */
    class EdgeCollider2D extends Collider2D {

        /**
        * The density of the collider used to calculate its mass (when auto mass is enabled).
        */
        public get density(): float;
        public set density(value: float);
        /**
        * Is this collider configured as a trigger?
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Whether the collider is used by an attached effector or not.
        */
        public get usedByEffector(): boolean;
        public set usedByEffector(value: boolean);
        /**
        * Sets whether the Collider will be used or not used by a CompositeCollider2D.
        */
        public get usedByComposite(): boolean;
        public set usedByComposite(value: boolean);
        /**
        * Get the CompositeCollider2D that is available to be attached to the collider.
        */
        public get composite(): CompositeCollider2D;
        /**
        * The local offset of the collider geometry.
        */
        public get offset(): Vector2;
        public set offset(value: Vector2);
        /**
        * The Rigidbody2D attached to the Collider2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The number of active PhysicsShape2D the Collider2D is currently using.
        */
        public get shapeCount(): int;
        /**
        * The world space bounding area of the collider.
        */
        public get bounds(): Bounds;
        /**
        * The error state that indicates the state of the physics shapes the 2D Collider tried to create. (Read Only)
        */
        public get errorState(): ColliderErrorState2D;
        /**
        * The PhysicsMaterial2D that is applied to this collider.
        */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
        * A decision priority assigned to this Collider2D used when there is a conflicting decision on whether a contact between itself and another Collision2D should happen or not.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional Layers that this Collider2D should exclude when deciding if a contact with another Collider2D should happen or not.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional Layers that this Collider2D should include when deciding if a contact with another Collider2D should happen or not.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D is allowed to send forces to during a Collision contact with another Collider2D.
        */
        public get forceSendLayers(): LayerMask;
        public set forceSendLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D can receive forces from during a Collision contact with another Collider2D.
        */
        public get forceReceiveLayers(): LayerMask;
        public set forceReceiveLayers(value: LayerMask);
        /**
        * The layers of other Collider2D involved in contacts with this Collider2D that will be captured.
        */
        public get contactCaptureLayers(): LayerMask;
        public set contactCaptureLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D will report collision or trigger callbacks for during a contact with another Collider2D.
        */
        public get callbackLayers(): LayerMask;
        public set callbackLayers(value: LayerMask);
        /**
        * Get the friction used by the collider.
        */
        public get friction(): float;
        /**
        * Get the bounciness used by the collider.
        */
        public get bounciness(): float;
        /**
        * Controls the radius of all edges created by the collider.
        */
        public get edgeRadius(): float;
        public set edgeRadius(value: float);
        /**
        * Gets the number of edges.
        */
        public get edgeCount(): int;
        /**
        * Gets the number of points.
        */
        public get pointCount(): int;
        /**
        * Get or set the points defining multiple continuous edges.
        */
        public get points(): Vector2[];
        public set points(value: Vector2[]);
        /**
        * Set this to true to use the adjacentStartPoint to form the collision normal that is used to calculate the collision response when a collision occurs at the Edge Collider's start point. Set this to false to not use the adjacentStartPoint, and the collision normal becomes the direction of motion of the collision.
        */
        public get useAdjacentStartPoint(): boolean;
        public set useAdjacentStartPoint(value: boolean);
        /**
        * Set this to true to use the adjacentEndPoint to form the collision normal that is used to calculate the collision response when a collision occurs at the Edge Collider's end point. Set this to false to not use the adjacentEndPoint, and the collision normal becomes the direction of motion of the collision.
        */
        public get useAdjacentEndPoint(): boolean;
        public set useAdjacentEndPoint(value: boolean);
        /**
        * Defines the position of a virtual point adjacent to the start point of the EdgeCollider2D.
        */
        public get adjacentStartPoint(): Vector2;
        public set adjacentStartPoint(value: Vector2);
        /**
        * Defines the position of a virtual point adjacent to the end point of the EdgeCollider2D.
        */
        public get adjacentEndPoint(): Vector2;
        public set adjacentEndPoint(value: Vector2);

        private constructor ()
        /**
        * Reset to a single edge consisting of two points.
        */
        public Reset () : void
        public GetPoints ($points: System_Collections_Generic.List$1<Vector2>) : int
        public SetPoints ($points: System_Collections_Generic.List$1<Vector2>) : boolean
    }

    /**
    * Collider for 2D physics representing an axis-aligned rectangle.
    */
    class BoxCollider2D extends Collider2D {

        /**
        * The density of the collider used to calculate its mass (when auto mass is enabled).
        */
        public get density(): float;
        public set density(value: float);
        /**
        * Is this collider configured as a trigger?
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Whether the collider is used by an attached effector or not.
        */
        public get usedByEffector(): boolean;
        public set usedByEffector(value: boolean);
        /**
        * Sets whether the Collider will be used or not used by a CompositeCollider2D.
        */
        public get usedByComposite(): boolean;
        public set usedByComposite(value: boolean);
        /**
        * Get the CompositeCollider2D that is available to be attached to the collider.
        */
        public get composite(): CompositeCollider2D;
        /**
        * The local offset of the collider geometry.
        */
        public get offset(): Vector2;
        public set offset(value: Vector2);
        /**
        * The Rigidbody2D attached to the Collider2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The number of active PhysicsShape2D the Collider2D is currently using.
        */
        public get shapeCount(): int;
        /**
        * The world space bounding area of the collider.
        */
        public get bounds(): Bounds;
        /**
        * The error state that indicates the state of the physics shapes the 2D Collider tried to create. (Read Only)
        */
        public get errorState(): ColliderErrorState2D;
        /**
        * The PhysicsMaterial2D that is applied to this collider.
        */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
        * A decision priority assigned to this Collider2D used when there is a conflicting decision on whether a contact between itself and another Collision2D should happen or not.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional Layers that this Collider2D should exclude when deciding if a contact with another Collider2D should happen or not.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional Layers that this Collider2D should include when deciding if a contact with another Collider2D should happen or not.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D is allowed to send forces to during a Collision contact with another Collider2D.
        */
        public get forceSendLayers(): LayerMask;
        public set forceSendLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D can receive forces from during a Collision contact with another Collider2D.
        */
        public get forceReceiveLayers(): LayerMask;
        public set forceReceiveLayers(value: LayerMask);
        /**
        * The layers of other Collider2D involved in contacts with this Collider2D that will be captured.
        */
        public get contactCaptureLayers(): LayerMask;
        public set contactCaptureLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D will report collision or trigger callbacks for during a contact with another Collider2D.
        */
        public get callbackLayers(): LayerMask;
        public set callbackLayers(value: LayerMask);
        /**
        * Get the friction used by the collider.
        */
        public get friction(): float;
        /**
        * Get the bounciness used by the collider.
        */
        public get bounciness(): float;
        /**
        * The width and height of the rectangle.
        */
        public get size(): Vector2;
        public set size(value: Vector2);
        /**
        * Controls the radius of all edges created by the collider.
        */
        public get edgeRadius(): float;
        public set edgeRadius(value: float);
        /**
        * Determines whether the BoxCollider2D's shape is automatically updated based on a SpriteRenderer's tiling properties.
        */
        public get autoTiling(): boolean;
        public set autoTiling(value: boolean);

        private constructor ()
    }

    /**
    * Collider for 2D physics representing an arbitrary polygon defined by its vertices.
    */
    class PolygonCollider2D extends Collider2D {

        /**
        * The density of the collider used to calculate its mass (when auto mass is enabled).
        */
        public get density(): float;
        public set density(value: float);
        /**
        * Is this collider configured as a trigger?
        */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
        * Whether the collider is used by an attached effector or not.
        */
        public get usedByEffector(): boolean;
        public set usedByEffector(value: boolean);
        /**
        * Sets whether the Collider will be used or not used by a CompositeCollider2D.
        */
        public get usedByComposite(): boolean;
        public set usedByComposite(value: boolean);
        /**
        * Get the CompositeCollider2D that is available to be attached to the collider.
        */
        public get composite(): CompositeCollider2D;
        /**
        * The local offset of the collider geometry.
        */
        public get offset(): Vector2;
        public set offset(value: Vector2);
        /**
        * The Rigidbody2D attached to the Collider2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The number of active PhysicsShape2D the Collider2D is currently using.
        */
        public get shapeCount(): int;
        /**
        * The world space bounding area of the collider.
        */
        public get bounds(): Bounds;
        /**
        * The error state that indicates the state of the physics shapes the 2D Collider tried to create. (Read Only)
        */
        public get errorState(): ColliderErrorState2D;
        /**
        * The PhysicsMaterial2D that is applied to this collider.
        */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
        * A decision priority assigned to this Collider2D used when there is a conflicting decision on whether a contact between itself and another Collision2D should happen or not.
        */
        public get layerOverridePriority(): int;
        public set layerOverridePriority(value: int);
        /**
        * The additional Layers that this Collider2D should exclude when deciding if a contact with another Collider2D should happen or not.
        */
        public get excludeLayers(): LayerMask;
        public set excludeLayers(value: LayerMask);
        /**
        * The additional Layers that this Collider2D should include when deciding if a contact with another Collider2D should happen or not.
        */
        public get includeLayers(): LayerMask;
        public set includeLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D is allowed to send forces to during a Collision contact with another Collider2D.
        */
        public get forceSendLayers(): LayerMask;
        public set forceSendLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D can receive forces from during a Collision contact with another Collider2D.
        */
        public get forceReceiveLayers(): LayerMask;
        public set forceReceiveLayers(value: LayerMask);
        /**
        * The layers of other Collider2D involved in contacts with this Collider2D that will be captured.
        */
        public get contactCaptureLayers(): LayerMask;
        public set contactCaptureLayers(value: LayerMask);
        /**
        * The Layers that this Collider2D will report collision or trigger callbacks for during a contact with another Collider2D.
        */
        public get callbackLayers(): LayerMask;
        public set callbackLayers(value: LayerMask);
        /**
        * Get the friction used by the collider.
        */
        public get friction(): float;
        /**
        * Get the bounciness used by the collider.
        */
        public get bounciness(): float;
        /**
        * When the value is true, the Collider uses an additional Delaunay triangulation step to produce the Collider mesh. When the value is false, this additional step does not occur.
        */
        public get useDelaunayMesh(): boolean;
        public set useDelaunayMesh(value: boolean);
        /**
        * Determines whether the PolygonCollider2D's shape is automatically updated based on a SpriteRenderer's tiling properties.
        */
        public get autoTiling(): boolean;
        public set autoTiling(value: boolean);
        /**
        * Corner points that define the collider's shape in local space.
        */
        public get points(): Vector2[];
        public set points(value: Vector2[]);
        /**
        * The number of paths in the polygon.
        */
        public get pathCount(): int;
        public set pathCount(value: int);

        private constructor ()
        /**
        * Return the total number of points in the polygon in all paths.
        */
        public GetTotalPointCount () : int
        /**
        * Gets a path from the Collider by its index.
        * @param index The index of the path to retrieve.
        * @returns An ordered array of the vertices (points) in the selected path.
        * @methodSwap GetPath_EBB7509C_F92D023A
        */
        public GetPath ($index: int) : Vector2[]
        /**
        * Define a path by its constituent points.
        * @param index Index of the path to set.
        * @param points An ordered array of the vertices (points) that define the path.
        * @methodSwap SetPath_EBB7509C_H278E5410
        */
        public SetPath ($index: int, $points: Vector2[]) : void
        /**
        * @methodSwap GetPath_EBB7509C_H5C7403C4
        */
        public GetPath ($index: int, $points: System_Collections_Generic.List$1<Vector2>) : int
        /**
        * @methodSwap SetPath_EBB7509C_H5C7403C4
        */
        public SetPath ($index: int, $points: System_Collections_Generic.List$1<Vector2>) : void
        /**
        * @methodSwap CreatePrimitive_EBB7509C_F92D023A
        */
        public CreatePrimitive ($sides: int) : void
        /**
        * @methodSwap CreatePrimitive_EBB7509C_BF0EA24
        */
        public CreatePrimitive ($sides: int, $scale: Vector2) : void
        /**
        * Creates as regular primitive polygon with the specified number of sides.
        * @param sides The number of sides in the polygon.  This must be greater than two.
        * @param scale The X/Y scale of the polygon.  These must be greater than zero.
        * @param offset The X/Y offset of the polygon.
        * @methodSwap CreatePrimitive_EBB7509C_H6D6B3C62
        */
        public CreatePrimitive ($sides: int, $scale: Vector2, $offset: Vector2) : void
    }

    /**
    * Parent class for joints to connect Rigidbody2D objects.
    */
    class Joint2D extends Behaviour {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;

        private constructor ()
        /**
        * Gets the reaction force of the joint given the specified timeStep.
        * @param timeStep The time to calculate the reaction force for.
        * @returns The reaction force of the joint in the specified timeStep.
        */
        public GetReactionForce ($timeStep: float) : Vector2
        /**
        * Gets the reaction torque of the joint given the specified timeStep.
        * @param timeStep The time to calculate the reaction torque for.
        * @returns The reaction torque of the joint in the specified timeStep.
        */
        public GetReactionTorque ($timeStep: float) : float
    }

    /**
    * Parent class for all joints that have anchor points.
    */
    class AnchoredJoint2D extends Joint2D {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;
        /**
        * The joint's anchor point on the object that has the joint component.
        */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
        * The joint's anchor point on the second object (ie, the one which doesn't have the joint component).
        */
        public get connectedAnchor(): Vector2;
        public set connectedAnchor(value: Vector2);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);

        private constructor ()
    }

    /**
    * Joint that attempts to keep two Rigidbody2D objects a set distance apart by applying a force between them.
    */
    class SpringJoint2D extends AnchoredJoint2D {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;
        /**
        * The joint's anchor point on the object that has the joint component.
        */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
        * The joint's anchor point on the second object (ie, the one which doesn't have the joint component).
        */
        public get connectedAnchor(): Vector2;
        public set connectedAnchor(value: Vector2);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * Should the distance be calculated automatically?
        */
        public get autoConfigureDistance(): boolean;
        public set autoConfigureDistance(value: boolean);
        /**
        * The distance the spring will try to keep between the two objects.
        */
        public get distance(): float;
        public set distance(value: float);
        /**
        * The amount by which the spring force is reduced in proportion to the movement speed.
        */
        public get dampingRatio(): float;
        public set dampingRatio(value: float);
        /**
        * The frequency at which the spring oscillates around the distance distance between the objects.
        */
        public get frequency(): float;
        public set frequency(value: float);

        private constructor ()
    }

    /**
    * Joint that keeps two Rigidbody2D objects a fixed distance apart.
    */
    class DistanceJoint2D extends AnchoredJoint2D {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;
        /**
        * The joint's anchor point on the object that has the joint component.
        */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
        * The joint's anchor point on the second object (ie, the one which doesn't have the joint component).
        */
        public get connectedAnchor(): Vector2;
        public set connectedAnchor(value: Vector2);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * Should the distance be calculated automatically?
        */
        public get autoConfigureDistance(): boolean;
        public set autoConfigureDistance(value: boolean);
        /**
        * The distance separating the two ends of the joint.
        */
        public get distance(): float;
        public set distance(value: float);
        /**
        * Whether to maintain a maximum distance only or not.  If not then the absolute distance will be maintained instead.
        */
        public get maxDistanceOnly(): boolean;
        public set maxDistanceOnly(value: boolean);

        private constructor ()
    }

    /**
    * Applies both force and torque to reduce both the linear and angular velocities to zero.
    */
    class FrictionJoint2D extends AnchoredJoint2D {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;
        /**
        * The joint's anchor point on the object that has the joint component.
        */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
        * The joint's anchor point on the second object (ie, the one which doesn't have the joint component).
        */
        public get connectedAnchor(): Vector2;
        public set connectedAnchor(value: Vector2);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * The maximum force that can be generated when trying to maintain the friction joint constraint.
        */
        public get maxForce(): float;
        public set maxForce(value: float);
        /**
        * The maximum torque that can be generated when trying to maintain the friction joint constraint.
        */
        public get maxTorque(): float;
        public set maxTorque(value: float);

        private constructor ()
    }

    /**
    * Joint that allows a Rigidbody2D object to rotate around a point in space or a point on another object.
    */
    class HingeJoint2D extends AnchoredJoint2D {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;
        /**
        * The joint's anchor point on the object that has the joint component.
        */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
        * The joint's anchor point on the second object (ie, the one which doesn't have the joint component).
        */
        public get connectedAnchor(): Vector2;
        public set connectedAnchor(value: Vector2);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * Should the joint be rotated automatically by a motor torque?
        */
        public get useMotor(): boolean;
        public set useMotor(value: boolean);
        /**
        * Should limits be placed on the range of rotation?
        */
        public get useLimits(): boolean;
        public set useLimits(value: boolean);
        /**
        * Parameters for the motor force applied to the joint.
        */
        public get motor(): JointMotor2D;
        public set motor(value: JointMotor2D);
        /**
        * Limit of angular rotation (in degrees) on the joint.
        */
        public get limits(): JointAngleLimits2D;
        public set limits(value: JointAngleLimits2D);
        /**
        * Gets the state of the joint limit.
        */
        public get limitState(): JointLimitState2D;
        /**
        * The angle (in degrees) referenced between the two bodies used as the constraint for the joint.
        */
        public get referenceAngle(): float;
        /**
        * The current joint angle (in degrees) with respect to the reference angle.
        */
        public get jointAngle(): float;
        /**
        * The current joint speed.
        */
        public get jointSpeed(): float;

        private constructor ()
        /**
        * Gets the motor torque of the joint given the specified timestep.
        * @param timeStep The time to calculate the motor torque for.
        */
        public GetMotorTorque ($timeStep: float) : float
    }

    /**
    * Keeps two Rigidbody2D at their relative orientations.
    */
    class RelativeJoint2D extends Joint2D {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;
        /**
        * The maximum force that can be generated when trying to maintain the relative joint constraint.
        */
        public get maxForce(): float;
        public set maxForce(value: float);
        /**
        * The maximum torque that can be generated when trying to maintain the relative joint constraint.
        */
        public get maxTorque(): float;
        public set maxTorque(value: float);
        /**
        * Scales both the linear and angular forces used to correct the required relative orientation.
        */
        public get correctionScale(): float;
        public set correctionScale(value: float);
        /**
        * Should both the linearOffset and angularOffset be calculated automatically?
        */
        public get autoConfigureOffset(): boolean;
        public set autoConfigureOffset(value: boolean);
        /**
        * The current linear offset between the Rigidbody2D that the joint connects.
        */
        public get linearOffset(): Vector2;
        public set linearOffset(value: Vector2);
        /**
        * The current angular offset between the Rigidbody2D that the joint connects.
        */
        public get angularOffset(): float;
        public set angularOffset(value: float);
        /**
        * The world-space position that is currently trying to be maintained.
        */
        public get target(): Vector2;

        private constructor ()
    }

    /**
    * Joint that restricts the motion of a Rigidbody2D object to a single line.
    */
    class SliderJoint2D extends AnchoredJoint2D {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;
        /**
        * The joint's anchor point on the object that has the joint component.
        */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
        * The joint's anchor point on the second object (ie, the one which doesn't have the joint component).
        */
        public get connectedAnchor(): Vector2;
        public set connectedAnchor(value: Vector2);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * Should the angle be calculated automatically?
        */
        public get autoConfigureAngle(): boolean;
        public set autoConfigureAngle(value: boolean);
        /**
        * The angle of the line in space (in degrees).
        */
        public get angle(): float;
        public set angle(value: float);
        /**
        * Should a motor force be applied automatically to the Rigidbody2D?
        */
        public get useMotor(): boolean;
        public set useMotor(value: boolean);
        /**
        * Should motion limits be used?
        */
        public get useLimits(): boolean;
        public set useLimits(value: boolean);
        /**
        * Parameters for a motor force that is applied automatically to the Rigibody2D along the line.
        */
        public get motor(): JointMotor2D;
        public set motor(value: JointMotor2D);
        /**
        * Restrictions on how far the joint can slide in each direction along the line.
        */
        public get limits(): JointTranslationLimits2D;
        public set limits(value: JointTranslationLimits2D);
        /**
        * Gets the state of the joint limit.
        */
        public get limitState(): JointLimitState2D;
        /**
        * The angle (in degrees) referenced between the two bodies used as the constraint for the joint.
        */
        public get referenceAngle(): float;
        /**
        * The current joint translation.
        */
        public get jointTranslation(): float;
        /**
        * The current joint speed.
        */
        public get jointSpeed(): float;

        private constructor ()
        /**
        * Gets the motor force of the joint given the specified timestep.
        * @param timeStep The time to calculate the motor force for.
        */
        public GetMotorForce ($timeStep: float) : float
    }

    /**
    * The joint attempts to move a Rigidbody2D to a specific target position.
    */
    class TargetJoint2D extends Joint2D {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;
        /**
        * The local-space anchor on the rigid-body the joint is attached to.
        */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
        * The world-space position that the joint will attempt to move the body to.
        */
        public get target(): Vector2;
        public set target(value: Vector2);
        /**
        * Should the target be calculated automatically?
        */
        public get autoConfigureTarget(): boolean;
        public set autoConfigureTarget(value: boolean);
        /**
        * The maximum force that can be generated when trying to maintain the target joint constraint.
        */
        public get maxForce(): float;
        public set maxForce(value: float);
        /**
        * The amount by which the target spring force is reduced in proportion to the movement speed.
        */
        public get dampingRatio(): float;
        public set dampingRatio(value: float);
        /**
        * The frequency at which the target spring oscillates around the target position.
        */
        public get frequency(): float;
        public set frequency(value: float);

        private constructor ()
    }

    /**
    * Connects two Rigidbody2D together at their anchor points using a configurable spring.
    */
    class FixedJoint2D extends AnchoredJoint2D {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;
        /**
        * The joint's anchor point on the object that has the joint component.
        */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
        * The joint's anchor point on the second object (ie, the one which doesn't have the joint component).
        */
        public get connectedAnchor(): Vector2;
        public set connectedAnchor(value: Vector2);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * The amount by which the spring force is reduced in proportion to the movement speed.
        */
        public get dampingRatio(): float;
        public set dampingRatio(value: float);
        /**
        * The frequency at which the spring oscillates around the distance between the objects.
        */
        public get frequency(): float;
        public set frequency(value: float);
        /**
        * The angle referenced between the two bodies used as the constraint for the joint.
        */
        public get referenceAngle(): float;

        private constructor ()
    }

    /**
    * The wheel joint allows the simulation of wheels by providing a constraining suspension motion with an optional motor.
    */
    class WheelJoint2D extends AnchoredJoint2D {

        /**
        * The Rigidbody2D attached to the Joint2D.
        */
        public get attachedRigidbody(): Rigidbody2D;
        /**
        * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
        */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
        * Should the two rigid bodies connected with this joint collide with each other?
        */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
        * The force that needs to be applied for this joint to break.
        */
        public get breakForce(): float;
        public set breakForce(value: float);
        /**
        * The torque that needs to be applied for this joint to break.
        */
        public get breakTorque(): float;
        public set breakTorque(value: float);
        /**
        * The action to take when the joint breaks the Joint2D.breakForce|breakForce or Joint2D.breakTorque|breakTorque.
        */
        public get breakAction(): JointBreakAction2D;
        public set breakAction(value: JointBreakAction2D);
        /**
        * Gets the reaction force of the joint.
        */
        public get reactionForce(): Vector2;
        /**
        * Gets the reaction torque of the joint.
        */
        public get reactionTorque(): float;
        /**
        * The joint's anchor point on the object that has the joint component.
        */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
        * The joint's anchor point on the second object (ie, the one which doesn't have the joint component).
        */
        public get connectedAnchor(): Vector2;
        public set connectedAnchor(value: Vector2);
        /**
        * Should the connectedAnchor be calculated automatically?
        */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
        * Set the joint suspension configuration.
        */
        public get suspension(): JointSuspension2D;
        public set suspension(value: JointSuspension2D);
        /**
        * Should a motor force be applied automatically to the Rigidbody2D?
        */
        public get useMotor(): boolean;
        public set useMotor(value: boolean);
        /**
        * Parameters for a motor force that is applied automatically to the Rigidbody2D along the line.
        */
        public get motor(): JointMotor2D;
        public set motor(value: JointMotor2D);
        /**
        * The current joint translation.
        */
        public get jointTranslation(): float;
        /**
        * The current joint linear speed in meters/sec.
        */
        public get jointLinearSpeed(): float;
        /**
        * The current joint rotational speed in degrees/sec.
        */
        public get jointSpeed(): float;
        /**
        * The current joint angle (in degrees) defined as the relative angle between the two Rigidbody2D that the joint connects to.
        */
        public get jointAngle(): float;

        private constructor ()
        /**
        * Gets the motor torque of the joint given the specified timestep.
        * @param timeStep The time to calculate the motor torque for.
        */
        public GetMotorTorque ($timeStep: float) : float
    }

    /**
    * A base class for all 2D effectors.
    */
    class Effector2D extends Behaviour {

        /**
        * Should the collider-mask be used or the global collision matrix?
        */
        public get useColliderMask(): boolean;
        public set useColliderMask(value: boolean);
        /**
        * The mask used to select specific layers allowed to interact with the effector.
        */
        public get colliderMask(): int;
        public set colliderMask(value: int);

        private constructor ()
    }

    /**
    * Applies forces within an area.
    */
    class AreaEffector2D extends Effector2D {

        /**
        * Should the collider-mask be used or the global collision matrix?
        */
        public get useColliderMask(): boolean;
        public set useColliderMask(value: boolean);
        /**
        * The mask used to select specific layers allowed to interact with the effector.
        */
        public get colliderMask(): int;
        public set colliderMask(value: int);
        /**
        * The angle of the force to be applied.
        */
        public get forceAngle(): float;
        public set forceAngle(value: float);
        /**
        * Should the forceAngle use global space?
        */
        public get useGlobalAngle(): boolean;
        public set useGlobalAngle(value: boolean);
        /**
        * The magnitude of the force to be applied.
        */
        public get forceMagnitude(): float;
        public set forceMagnitude(value: float);
        /**
        * The variation of the magnitude of the force to be applied.
        */
        public get forceVariation(): float;
        public set forceVariation(value: float);
        /**
        * The linear drag to apply to rigid-bodies.
        */
        public get drag(): float;
        public set drag(value: float);
        /**
        * The angular drag to apply to rigid-bodies.
        */
        public get angularDrag(): float;
        public set angularDrag(value: float);
        /**
        * The target for where the effector applies any force.
        */
        public get forceTarget(): EffectorSelection2D;
        public set forceTarget(value: EffectorSelection2D);

        private constructor ()
    }

    /**
    * Applies forces to simulate buoyancy, fluid-flow and fluid drag.
    */
    class BuoyancyEffector2D extends Effector2D {

        /**
        * Should the collider-mask be used or the global collision matrix?
        */
        public get useColliderMask(): boolean;
        public set useColliderMask(value: boolean);
        /**
        * The mask used to select specific layers allowed to interact with the effector.
        */
        public get colliderMask(): int;
        public set colliderMask(value: int);
        /**
        * Defines an arbitrary horizontal line that represents the fluid surface level.
        */
        public get surfaceLevel(): float;
        public set surfaceLevel(value: float);
        /**
        * The density of the fluid used to calculate the buoyancy forces.
        */
        public get density(): float;
        public set density(value: float);
        /**
        * A force applied to slow linear movement of any Collider2D in contact with the effector.
        */
        public get linearDrag(): float;
        public set linearDrag(value: float);
        /**
        * A force applied to slow angular movement of any Collider2D in contact with the effector.
        */
        public get angularDrag(): float;
        public set angularDrag(value: float);
        /**
        * The angle of the force used to similate fluid flow.
        */
        public get flowAngle(): float;
        public set flowAngle(value: float);
        /**
        * The magnitude of the force used to similate fluid flow.
        */
        public get flowMagnitude(): float;
        public set flowMagnitude(value: float);
        /**
        * The random variation of the force used to similate fluid flow.
        */
        public get flowVariation(): float;
        public set flowVariation(value: float);

        private constructor ()
    }

    /**
    * Applies forces to attract/repulse against a point.
    */
    class PointEffector2D extends Effector2D {

        /**
        * Should the collider-mask be used or the global collision matrix?
        */
        public get useColliderMask(): boolean;
        public set useColliderMask(value: boolean);
        /**
        * The mask used to select specific layers allowed to interact with the effector.
        */
        public get colliderMask(): int;
        public set colliderMask(value: int);
        /**
        * The magnitude of the force to be applied.
        */
        public get forceMagnitude(): float;
        public set forceMagnitude(value: float);
        /**
        * The variation of the magnitude of the force to be applied.
        */
        public get forceVariation(): float;
        public set forceVariation(value: float);
        /**
        * The scale applied to the calculated distance between source and target.
        */
        public get distanceScale(): float;
        public set distanceScale(value: float);
        /**
        * The linear drag to apply to rigid-bodies.
        */
        public get drag(): float;
        public set drag(value: float);
        /**
        * The angular drag to apply to rigid-bodies.
        */
        public get angularDrag(): float;
        public set angularDrag(value: float);
        /**
        * The source which is used to calculate the centroid point of the effector.  The distance from the target is defined from this point.
        */
        public get forceSource(): EffectorSelection2D;
        public set forceSource(value: EffectorSelection2D);
        /**
        * The target for where the effector applies any force.
        */
        public get forceTarget(): EffectorSelection2D;
        public set forceTarget(value: EffectorSelection2D);
        /**
        * The mode used to apply the effector force.
        */
        public get forceMode(): EffectorForceMode2D;
        public set forceMode(value: EffectorForceMode2D);

        private constructor ()
    }

    /**
    * Applies "platform" behaviour such as one-way collisions etc.
    */
    class PlatformEffector2D extends Effector2D {

        /**
        * Should the collider-mask be used or the global collision matrix?
        */
        public get useColliderMask(): boolean;
        public set useColliderMask(value: boolean);
        /**
        * The mask used to select specific layers allowed to interact with the effector.
        */
        public get colliderMask(): int;
        public set colliderMask(value: int);
        /**
        * Should the one-way collision behaviour be used?
        */
        public get useOneWay(): boolean;
        public set useOneWay(value: boolean);
        /**
        * Ensures that all contacts controlled by the one-way behaviour act the same.
        */
        public get useOneWayGrouping(): boolean;
        public set useOneWayGrouping(value: boolean);
        /**
        * Should friction be used on the platform sides?
        */
        public get useSideFriction(): boolean;
        public set useSideFriction(value: boolean);
        /**
        * Should bounce be used on the platform sides?
        */
        public get useSideBounce(): boolean;
        public set useSideBounce(value: boolean);
        /**
        * The angle of an arc that defines the surface of the platform centered of the local 'up' of the effector.
        */
        public get surfaceArc(): float;
        public set surfaceArc(value: float);
        /**
        * The angle of an arc that defines the sides of the platform centered on the local 'left' and 'right' of the effector. Any collision normals within this arc are considered for the 'side' behaviours.
        */
        public get sideArc(): float;
        public set sideArc(value: float);
        /**
        * The rotational offset angle from the local 'up'.
        */
        public get rotationalOffset(): float;
        public set rotationalOffset(value: float);

        private constructor ()
    }

    /**
    * Applies tangent forces along the surfaces of colliders.
    */
    class SurfaceEffector2D extends Effector2D {

        /**
        * Should the collider-mask be used or the global collision matrix?
        */
        public get useColliderMask(): boolean;
        public set useColliderMask(value: boolean);
        /**
        * The mask used to select specific layers allowed to interact with the effector.
        */
        public get colliderMask(): int;
        public set colliderMask(value: int);
        /**
        * The speed to be maintained along the surface.
        */
        public get speed(): float;
        public set speed(value: float);
        /**
        * The speed variation (from zero to the variation) added to base speed to be applied.
        */
        public get speedVariation(): float;
        public set speedVariation(value: float);
        /**
        * The scale of the impulse force applied while attempting to reach the surface speed.
        */
        public get forceScale(): float;
        public set forceScale(value: float);
        /**
        * Should the impulse force but applied to the contact point?
        */
        public get useContactForce(): boolean;
        public set useContactForce(value: boolean);
        /**
        * Should friction be used for any contact with the surface?
        */
        public get useFriction(): boolean;
        public set useFriction(value: boolean);
        /**
        * Should bounce be used for any contact with the surface?
        */
        public get useBounce(): boolean;
        public set useBounce(value: boolean);

        private constructor ()
    }

    /**
    * A base type for 2D physics components that required a callback during FixedUpdate.
    */
    class PhysicsUpdateBehaviour2D extends Behaviour {

        private constructor ()
    }

    /**
    * Applies both linear and angular (torque) forces continuously to the rigidbody each physics update.
    */
    class ConstantForce2D extends PhysicsUpdateBehaviour2D {

        /**
        * The linear force applied to the rigidbody each physics update.
        */
        public get force(): Vector2;
        public set force(value: Vector2);
        /**
        * The linear force, relative to the rigid-body coordinate system, applied each physics update.
        */
        public get relativeForce(): Vector2;
        public set relativeForce(value: Vector2);
        /**
        * The torque applied to the rigidbody each physics update.
        */
        public get torque(): float;
        public set torque(value: float);

        private constructor ()
    }

}

declare module 'System' {

    interface IEquatable$1<T> {

        Equals? ($other: T) : boolean
    }

    interface IFormattable {

    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

    interface IDisposable {

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

declare module 'Unity.Collections' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    /**
    * A NativeArray exposes a buffer of native memory to managed code, making it possible to share data between managed and native without marshalling costs.
    */
    interface NativeArray$1<T> extends System_Collections_Generic.IEnumerable$1<T>, System.IDisposable, System.IEquatable$1<NativeArray$1<T>> {

    }

}

declare module 'UnityEngine.CompositeCollider2D' {

    /**
    * Specifies the type of geometry the Composite Collider generates.
    */
    enum GeometryType {
        Outlines = 0,
        Polygons = 1 
    }

    /**
    * Specifies when to generate the Composite Collider geometry.
    */
    enum GenerationType {
        Synchronous = 0,
        Manual = 1 
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
        * An extension method that returns the 2D physics Scene from the Scene.
        * @param scene The Scene from which to return the 2D physics Scene.
        * @returns The 2D physics Scene used by the Scene.
        * @extension UnityEngine.PhysicsSceneExtensions2D.GetPhysicsScene2D
        */
        GetPhysicsScene2D () : UnityEngine.PhysicsScene2D
    }

}

