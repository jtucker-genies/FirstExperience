
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine.Experimental.AI' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as Unity_Jobs from 'Unity.Jobs'
    import * as Unity_Collections from 'Unity.Collections'
    import * as UnityEngine_AI from 'UnityEngine.AI'

    /**
    * Represents a compact identifier for the data of a NavMesh node.
    */
    class PolygonId extends System.ValueType implements System.IEquatable$1<PolygonId> {

        /**
        * Returns true if the PolygonId has been created empty and has never pointed to any node in the NavMesh.
        */
        public IsNull () : boolean
        /**
        * Returns the hash code for use in collections.
        */
        public GetHashCode () : int
        /**
        * Returns true if two PolygonId objects refer to the same NavMesh node.
        */
        public Equals ($rhs: PolygonId) : boolean
        /**
        * Returns true if two PolygonId objects refer to the same NavMesh node.
        */
        public Equals ($obj: any) : boolean
        public static op_Equality ($x: PolygonId, $y: PolygonId) : boolean
        public static op_Inequality ($x: PolygonId, $y: PolygonId) : boolean
    }

    /**
    * A world position that is guaranteed to be on the surface of the NavMesh.
    */
    class NavMeshLocation extends System.ValueType {

        /**
        * Unique identifier for the node in the NavMesh to which the world position has been mapped.
        */
        public get polygon(): PolygonId;
        /**
        * A world position that sits precisely on the surface of the NavMesh or along its links.
        */
        public get position(): UnityEngine.Vector3;

    }

    /**
    * Bit flags representing the resulting state of NavMeshQuery operations.
    */
    enum PathQueryStatus {
        Failure = -2147483648,
        Success = 1073741824,
        InProgress = 536870912,
        StatusDetailMask = 16777215,
        WrongMagic = 1,
        WrongVersion = 2,
        OutOfMemory = 4,
        InvalidParam = 8,
        BufferTooSmall = 16,
        OutOfNodes = 32,
        PartialResult = 64 
    }

    /**
    * The types of nodes in the navigation data.
    */
    enum NavMeshPolyTypes {
        Ground = 0,
        OffMeshConnection = 1 
    }

    /**
    * Assembles together a collection of NavMesh surfaces and links that are used as a whole for performing navigation operations.
    */
    class NavMeshWorld extends System.ValueType {

        /**
        * Returns true if the NavMeshWorld has been properly initialized.
        */
        public IsValid () : boolean
        /**
        * Returns a reference to the single NavMeshWorld that can currently exist and be used in Unity.
        */
        public static GetDefaultWorld () : NavMeshWorld
        /**
        * Tells the NavMesh world to halt any changes until the specified job is completed.
        * @param job The job that needs to be completed before the NavMesh world can be modified in any way.
        */
        public AddDependency ($job: Unity_Jobs.JobHandle) : void
    }

    /**
    * Object used for doing navigation operations in a NavMeshWorld.
    */
    class NavMeshQuery extends System.ValueType implements System.IDisposable {

        /**
        * Creates the NavMeshQuery object and allocates memory to store NavMesh node information, if required.
        * @param world NavMeshWorld object used as an entry point to the collection of NavMesh objects. This object that can be used by query operations.
        * @param allocator Label indicating the desired life time of the object. (Known issue: Currently allocator has no effect).
        * @param pathNodePoolSize The number of nodes temporarily stored in the query during search operations. The maximum number of nodes is 65,535. By default, if unspecified, the number of nodes is set to 0.
        */
        public constructor ($world: NavMeshWorld, $allocator: Unity_Collections.Allocator, $pathNodePoolSize?: int)
        /**
        * Destroys the NavMeshQuery and deallocates all memory used by it.
        */
        public Dispose () : void
        public BeginFindPath ($start: NavMeshLocation, $end: NavMeshLocation, $areaMask?: int, $costs?: Unity_Collections.NativeArray$1<float>) : PathQueryStatus
        /**
        * Continues a path search that is in progress.
        * @param iterations Maximum number of nodes to be traversed by the search algorithm during this call.
        * @param iterationsPerformed Outputs the actual number of nodes that have been traversed during this call.
        * @returns InProgress if the search needs to continue further by calling UpdateFindPath again.

        Success if the search is completed and a path has been found or not.

        Failure if the search for the desired position could not be completed because the NavMesh has changed significantly since the search was initiated.

        Additionally the returned value can contain the OutOfNodes flag when the pathNodePoolSize parameter for the NavMeshQuery initialization was not large enough to accommodate the search space.
        */
        public UpdateFindPath ($iterations: int, $iterationsPerformed: $Ref<int>) : PathQueryStatus
        /**
        * Obtains the number of nodes in the path that has been computed during a successful NavMeshQuery.UpdateFindPath operation.
        * @param pathSize A reference to an int which will be set to the number of NavMesh nodes in the found path.
        * @returns Success when the number of nodes in the path was retrieved correctly.

        PartialPath when a path was found but it falls short of the desired end location.

        Failure when the path size can not be evaluated because the preceding call to UpdateFindPath was not successful.
        */
        public EndFindPath ($pathSize: $Ref<int>) : PathQueryStatus
        public GetPathResult ($path: Unity_Collections.NativeSlice$1<PolygonId>) : int
        /**
        * Returns true if the node referenced by the specified PolygonId is active in the NavMesh.
        * @param polygon Identifier of the NavMesh node to be checked.
        */
        public IsValid ($polygon: PolygonId) : boolean
        /**
        * Returns true if the node referenced by the PolygonId contained in the NavMeshLocation is active in the NavMesh.
        * @param location Location on the NavMesh to be checked. Same as checking location.polygon directly.
        */
        public IsValid ($location: NavMeshLocation) : boolean
        /**
        * Returns the identifier of the agent type the NavMesh was baked for or for which the link has been configured.
        * @param polygon Identifier of a node from a NavMesh surface or link.
        * @returns Agent type identifier.
        */
        public GetAgentTypeIdForPolygon ($polygon: PolygonId) : int
        /**
        * Returns a valid NavMeshLocation for a position and a polygon provided by the user.
        * @param position World position of the NavMeshLocation to be created.
        * @param polygon Valid identifier for the NavMesh node.
        * @returns Object containing the desired position and NavMesh node.
        */
        public CreateLocation ($position: UnityEngine.Vector3, $polygon: PolygonId) : NavMeshLocation
        /**
        * Finds the closest point and PolygonId on the NavMesh for a given world position.
        * @param position World position for which the closest point on the NavMesh needs to be found.
        * @param extents Maximum distance, from the specified position, expanding along all three axes, within which NavMesh surfaces are searched.
        * @param agentTypeID Identifier for the agent type whose NavMesh surfaces should be selected for this operation. The Humanoid agent type exists for all NavMeshes and has an ID of 0. Other agent types can be defined manually through the Editor. A separate NavMesh surface needs to be baked for each agent type.
        * @param areaMask Bitmask used to represent areas of the NavMesh that should (value of 1) or shouldn't (values of 0) be sampled. This parameter is optional and defaults to NavMesh.AllAreas if unspecified. Additional resources:.
        * @returns An object with position and valid PolygonId  - when a point on the NavMesh has been found.

        An invalid object - when no NavMesh surface with the desired features has been found within the search area. Additional resources: NavMeshQuery.IsValid.
        */
        public MapLocation ($position: UnityEngine.Vector3, $extents: UnityEngine.Vector3, $agentTypeID: int, $areaMask?: int) : NavMeshLocation
        public MoveLocations ($locations: Unity_Collections.NativeSlice$1<NavMeshLocation>, $targets: Unity_Collections.NativeSlice$1<UnityEngine.Vector3>, $areaMasks: Unity_Collections.NativeSlice$1<int>) : void
        public MoveLocationsInSameAreas ($locations: Unity_Collections.NativeSlice$1<NavMeshLocation>, $targets: Unity_Collections.NativeSlice$1<UnityEngine.Vector3>, $areaMask?: int) : void
        /**
        * Translates a NavMesh location to another position without losing contact with the surface.
        * @param location Position to be moved across the NavMesh surface.
        * @param target World position you require the agent to move to.
        * @param areaMask Bitmask with values of 1 set at the indices corresponding to areas that can be traversed, and with values of 0 for areas that should not be traversed. This parameter can be omitted, in which case it defaults to NavMesh.AllAreas. Additional resources:.
        * @returns A new location on the NavMesh placed as closely as possible to the specified target position.

        The start location is returned when that start is inside an area which is not allowed by the areaMask.
        */
        public MoveLocation ($location: NavMeshLocation, $target: UnityEngine.Vector3, $areaMask?: int) : NavMeshLocation
        /**
        * Obtains the end points of the line segment common to two adjacent NavMesh nodes.
        * @param polygon First NavMesh node.
        * @param neighbourPolygon Second NavMesh node.
        * @param left One of the world points for the resulting separation edge which must be passed through when traversing between the two specified nodes. This point is the left side of the edge when traversing from the first node to the second.
        * @param right One of the world points for the resulting separation edge which must be passed through when traversing between the two specified nodes. This point is the right side of the edge when traversing from the first node to the second.
        * @returns True if a connection exists between the two NavMesh nodes.
        False if no connection exists between the two NavMesh nodes.
        */
        public GetPortalPoints ($polygon: PolygonId, $neighbourPolygon: PolygonId, $left: $Ref<UnityEngine.Vector3>, $right: $Ref<UnityEngine.Vector3>) : boolean
        /**
        * Returns the transformation matrix of the NavMesh surface that contains the specified NavMesh node (Read Only).
        * @param polygon NavMesh node for which its owner's transform must be determined.
        * @returns Transformation matrix for the surface owning the specified polygon.

        Matrix4x4.identity when the NavMesh node is a.
        */
        public PolygonLocalToWorldMatrix ($polygon: PolygonId) : UnityEngine.Matrix4x4
        /**
        * Returns the inverse transformation matrix of the NavMesh surface that contains the specified NavMesh node (Read Only).
        * @param polygon NavMesh node for which its owner's inverse transform must be determined.
        * @returns Inverse transformation matrix of the surface owning the specified polygon.

        Matrix4x4.identity when the NavMesh node is a.
        */
        public PolygonWorldToLocalMatrix ($polygon: PolygonId) : UnityEngine.Matrix4x4
        /**
        * Returns whether the NavMesh node is a polygon or a link.
        * @param polygon Identifier of a node from a NavMesh surface or link.
        * @returns Ground when the node is a polygon on a NavMesh surface.

        OffMeshConnection when the node is a.
        */
        public GetPolygonType ($polygon: PolygonId) : NavMeshPolyTypes
        /**
        * @methodSwap Raycast_EBB7509C_A6B17B8B
        */
        public Raycast ($hit: $Ref<UnityEngine_AI.NavMeshHit>, $start: NavMeshLocation, $targetPosition: UnityEngine.Vector3, $areaMask?: int, $costs?: Unity_Collections.NativeArray$1<float>) : PathQueryStatus
        /**
        * @methodSwap Raycast_EBB7509C_H24466898
        */
        public Raycast ($hit: $Ref<UnityEngine_AI.NavMeshHit>, $path: Unity_Collections.NativeSlice$1<PolygonId>, $pathCount: $Ref<int>, $start: NavMeshLocation, $targetPosition: UnityEngine.Vector3, $areaMask?: int, $costs?: Unity_Collections.NativeArray$1<float>) : PathQueryStatus
        public GetEdgesAndNeighbors ($node: PolygonId, $edgeVertices: Unity_Collections.NativeSlice$1<UnityEngine.Vector3>, $neighbors: Unity_Collections.NativeSlice$1<PolygonId>, $edgeIndices: Unity_Collections.NativeSlice$1<byte>, $verticesCount: $Ref<int>, $neighborsCount: $Ref<int>) : PathQueryStatus
    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

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

declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'

    /**
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * A standard 4x4 transformation matrix.
    */
    interface Matrix4x4 extends System.IFormattable, System.IEquatable$1<Matrix4x4> {

    }

    /**
    * Represents an axis aligned bounding box.
    */
    interface Bounds extends System.IFormattable, System.IEquatable$1<Bounds> {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

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
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    /**
    * Asynchronous operation coroutine.
    */
    interface AsyncOperation {

    }

    /**
    * Base class for all yield instructions.
    */
    interface YieldInstruction {

    }

    /**
    * Behaviours are Components that can be enabled or disabled.
    */
    interface Behaviour {

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

declare module 'Unity.Collections' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    /**
    * A NativeArray exposes a buffer of native memory to managed code, making it possible to share data between managed and native without marshalling costs.
    */
    interface NativeArray$1<T> extends System_Collections_Generic.IEnumerable$1<T>, System.IDisposable, System.IEquatable$1<NativeArray$1<T>> {

    }

    /**
    * Native Slice.
    */
    interface NativeSlice$1<T> extends System_Collections_Generic.IEnumerable$1<T>, System.IEquatable$1<NativeSlice$1<T>> {

    }

    /**
    * Used to specify allocation type for NativeArray.
    */
    enum Allocator {
        Invalid = 0,
        None = 1,
        Temp = 2,
        TempJob = 3,
        Persistent = 4,
        AudioKernel = 5,
        FirstUserIndex = 64 
    }

}

declare module 'System.Collections.Generic' {
    import * as System_Collections from 'System.Collections'
    import * as System from 'System'

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

    }

    interface List$1<T> extends IList$1<T>, System_Collections.IList, IReadOnlyList$1<T> {

    }

    interface IList$1<T> extends ICollection$1<T> {

    }

    interface ICollection$1<T> extends IEnumerable$1<T> {

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

declare module 'UnityEngine.AI' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_AI_NavMesh from 'UnityEngine.AI.NavMesh'

    /**
    * Result information for NavMesh queries.
    */
    class NavMeshHit extends System.ValueType {

        /**
        * Position of hit.
        */
        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        /**
        * Normal at the point of hit.
        */
        public get normal(): UnityEngine.Vector3;
        public set normal(value: UnityEngine.Vector3);
        /**
        * Distance to the point of hit.
        */
        public get distance(): float;
        public set distance(value: float);
        /**
        * Mask specifying NavMesh area at point of hit.
        */
        public get mask(): int;
        public set mask(value: int);
        /**
        * Flag set when hit.
        */
        public get hit(): boolean;
        public set hit(value: boolean);

    }

    class NavMeshBuilder {

        /**
        * @methodSwap CollectSources_EBB7509C_H353B8EDB
        */
        public static CollectSources ($includedWorldBounds: UnityEngine.Bounds, $includedLayerMask: int, $geometry: NavMeshCollectGeometry, $defaultArea: int, $generateLinksByDefault: boolean, $markups: System_Collections_Generic.List$1<NavMeshBuildMarkup>, $includeOnlyMarkedObjects: boolean, $results: System_Collections_Generic.List$1<NavMeshBuildSource>) : void
        /**
        * @methodSwap CollectSources_EBB7509C_H4704A5BB
        */
        public static CollectSources ($includedWorldBounds: UnityEngine.Bounds, $includedLayerMask: int, $geometry: NavMeshCollectGeometry, $defaultArea: int, $markups: System_Collections_Generic.List$1<NavMeshBuildMarkup>, $results: System_Collections_Generic.List$1<NavMeshBuildSource>) : void
        /**
        * @methodSwap CollectSources_EBB7509C_F6AF5488
        */
        public static CollectSources ($root: UnityEngine.Transform, $includedLayerMask: int, $geometry: NavMeshCollectGeometry, $defaultArea: int, $generateLinksByDefault: boolean, $markups: System_Collections_Generic.List$1<NavMeshBuildMarkup>, $includeOnlyMarkedObjects: boolean, $results: System_Collections_Generic.List$1<NavMeshBuildSource>) : void
        /**
        * @methodSwap CollectSources_EBB7509C_H6C219B98
        */
        public static CollectSources ($root: UnityEngine.Transform, $includedLayerMask: int, $geometry: NavMeshCollectGeometry, $defaultArea: int, $markups: System_Collections_Generic.List$1<NavMeshBuildMarkup>, $results: System_Collections_Generic.List$1<NavMeshBuildSource>) : void
        public static BuildNavMeshData ($buildSettings: NavMeshBuildSettings, $sources: System_Collections_Generic.List$1<NavMeshBuildSource>, $localBounds: UnityEngine.Bounds, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : NavMeshData
        public static UpdateNavMeshData ($data: NavMeshData, $buildSettings: NavMeshBuildSettings, $sources: System_Collections_Generic.List$1<NavMeshBuildSource>, $localBounds: UnityEngine.Bounds) : boolean
        public static UpdateNavMeshDataAsync ($data: NavMeshData, $buildSettings: NavMeshBuildSettings, $sources: System_Collections_Generic.List$1<NavMeshBuildSource>, $localBounds: UnityEngine.Bounds) : UnityEngine.AsyncOperation
        public static Cancel ($data: NavMeshData) : void
    }

    /**
    * Used for specifying the type of geometry to collect. Used with NavMeshBuilder.CollectSources.
    */
    enum NavMeshCollectGeometry {
        RenderMeshes = 0,
        PhysicsColliders = 1 
    }

    /**
    * The NavMesh build markup allows you to control how certain objects are treated during the NavMesh build process, specifically when collecting sources for building.
    */
    class NavMeshBuildMarkup extends System.ValueType {

        /**
        * Use this to specify whether the area type of the GameObject and its children should be overridden by the area type specified in this struct.
        */
        public get overrideArea(): boolean;
        public set overrideArea(value: boolean);
        /**
        * The area type to use when override area is enabled.
        */
        public get area(): int;
        public set area(value: int);
        /**
        * Set this to true in order to enable the ignoreFromBuild property.
        */
        public get overrideIgnore(): boolean;
        public set overrideIgnore(value: boolean);
        /**
        * Use this to specify whether the GameObject and its children should be ignored.
        */
        public get ignoreFromBuild(): boolean;
        public set ignoreFromBuild(value: boolean);
        /**
        * Use this to specify whether the default links generation condition for the GameObject and its children should be overridden by the generateLinks option specified in this struct.
        */
        public get overrideGenerateLinks(): boolean;
        public set overrideGenerateLinks(value: boolean);
        /**
        * Use this to specify whether the GameObject and its children should be included in the link generation process.
        */
        public get generateLinks(): boolean;
        public set generateLinks(value: boolean);
        /**
        * Use this to specify if the GameObject's children also use these markup settings.
        */
        public get applyToChildren(): boolean;
        public set applyToChildren(value: boolean);
        /**
        * Use this to specify which GameObject (including the GameObject’s children) the markup should be applied to.
        */
        public get root(): UnityEngine.Transform;
        public set root(value: UnityEngine.Transform);

    }

    /**
    * The input to the NavMesh builder is a list of NavMesh build sources.
    */
    class NavMeshBuildSource extends System.ValueType {

        /**
        * Describes the local to world transformation matrix of the build source. That is, position and orientation and scale of the shape.
        */
        public get transform(): UnityEngine.Matrix4x4;
        public set transform(value: UnityEngine.Matrix4x4);
        /**
        * Describes the dimensions of the shape.
        */
        public get size(): UnityEngine.Vector3;
        public set size(value: UnityEngine.Vector3);
        /**
        * The type of the shape this source describes. Additional resources: NavMeshBuildSourceShape.
        */
        public get shape(): NavMeshBuildSourceShape;
        public set shape(value: NavMeshBuildSourceShape);
        /**
        * Describes the area type of the NavMesh surface for this object.
        */
        public get area(): int;
        public set area(value: int);
        /**
        * Enables the links generation for this object.
        */
        public get generateLinks(): boolean;
        public set generateLinks(value: boolean);
        /**
        * Describes the object referenced for Mesh and Terrain types of input sources.
        */
        public get sourceObject(): UnityEngine.Object;
        public set sourceObject(value: UnityEngine.Object);
        /**
        * Points to the owning component - if available, otherwise null.
        */
        public get component(): UnityEngine.Component;
        public set component(value: UnityEngine.Component);

    }

    /**
    * Used with NavMeshBuildSource to define the shape for building NavMesh.
    */
    enum NavMeshBuildSourceShape {
        Mesh = 0,
        Terrain = 1,
        Box = 2,
        Sphere = 3,
        Capsule = 4,
        ModifierBox = 5 
    }

    /**
    * Contains and represents NavMesh data.
    */
    class NavMeshData extends UnityEngine.Object {

        /**
        * Returns the bounding volume of the input geometry used to build this NavMesh (Read Only).
        */
        public get sourceBounds(): UnityEngine.Bounds;
        /**
        * Gets or sets the world space position of the NavMesh data.
        */
        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        /**
        * Gets or sets the orientation of the NavMesh data.
        */
        public get rotation(): UnityEngine.Quaternion;
        public set rotation(value: UnityEngine.Quaternion);

        /**
        * Constructs a new object for representing a NavMesh for the default agent type.
        */
        public constructor ()
        /**
        * Constructs a new object representing a NavMesh for the specified agent type.
        * @param agentTypeID The agent type ID to create a NavMesh for.
        */
        public constructor ($agentTypeID: int)
    }

    /**
    * The NavMeshBuildSettings struct allows you to specify a collection of settings which describe the dimensions and limitations of a particular agent type.
    */
    class NavMeshBuildSettings extends System.ValueType {

        /**
        * The agent type ID the NavMesh will be baked for.
        */
        public get agentTypeID(): int;
        public set agentTypeID(value: int);
        /**
        * The radius of the agent for baking in world units.
        */
        public get agentRadius(): float;
        public set agentRadius(value: float);
        /**
        * The height of the agent for baking in world units.
        */
        public get agentHeight(): float;
        public set agentHeight(value: float);
        /**
        * The maximum slope angle which is walkable (angle in degrees).
        */
        public get agentSlope(): float;
        public set agentSlope(value: float);
        /**
        * The maximum vertical step size an agent can take.
        */
        public get agentClimb(): float;
        public set agentClimb(value: float);
        /**
        * Maximum agent drop height.
        */
        public get ledgeDropHeight(): float;
        public set ledgeDropHeight(value: float);
        /**
        * Maximum agent jump distance.
        */
        public get maxJumpAcrossDistance(): float;
        public set maxJumpAcrossDistance(value: float);
        /**
        * The approximate minimum area of individual NavMesh regions.
        */
        public get minRegionArea(): float;
        public set minRegionArea(value: float);
        /**
        * Enables overriding the default voxel size. Additional resources: voxelSize.
        */
        public get overrideVoxelSize(): boolean;
        public set overrideVoxelSize(value: boolean);
        /**
        * Sets the voxel size in world length units.
        */
        public get voxelSize(): float;
        public set voxelSize(value: float);
        /**
        * Enables overriding the default tile size. Additional resources: tileSize.
        */
        public get overrideTileSize(): boolean;
        public set overrideTileSize(value: boolean);
        /**
        * Sets the tile size in voxel units.
        */
        public get tileSize(): int;
        public set tileSize(value: int);
        /**
        * The maximum number of worker threads that the build process can utilize when building a NavMesh with these settings.
        */
        public get maxJobWorkers(): uint;
        public set maxJobWorkers(value: uint);
        public get preserveTilesOutsideBounds(): boolean;
        public set preserveTilesOutsideBounds(value: boolean);
        /**
        * Enables the creation of additional data needed to determine the height at any position on the NavMesh more accurately.
        */
        public get buildHeightMesh(): boolean;
        public set buildHeightMesh(value: boolean);
        /**
        * Options for collecting debug data during the build process.
        */
        public get debug(): NavMeshBuildDebugSettings;
        public set debug(value: NavMeshBuildDebugSettings);

        /**
        * Validates the properties of NavMeshBuildSettings.
        * @param buildBounds Describes the volume to build NavMesh for.
        * @returns The list of violated constraints.
        */
        public ValidationReport ($buildBounds: UnityEngine.Bounds) : string[]
    }

    /**
    * Specify which of the temporary data generated while building the NavMesh should be retained in memory after the process has completed.
    */
    class NavMeshBuildDebugSettings extends System.ValueType {

        /**
        * Specify which types of debug data to collect when building the NavMesh.
        */
        public get flags(): NavMeshBuildDebugFlags;
        public set flags(value: NavMeshBuildDebugFlags);

    }

    /**
    * Bitmask used for operating with debug data from the NavMesh build process.
    */
    enum NavMeshBuildDebugFlags {
        None = 0,
        InputGeometry = 1,
        Voxels = 2,
        Regions = 4,
        RawContours = 8,
        SimplifiedContours = 16,
        PolygonMeshes = 32,
        PolygonMeshesDetail = 64,
        All = 127 
    }

    /**
    * Level of obstacle avoidance.
    */
    enum ObstacleAvoidanceType {
        NoObstacleAvoidance = 0,
        LowQualityObstacleAvoidance = 1,
        MedQualityObstacleAvoidance = 2,
        GoodQualityObstacleAvoidance = 3,
        HighQualityObstacleAvoidance = 4 
    }

    /**
    * Navigation mesh agent.
    */
    class NavMeshAgent extends UnityEngine.Behaviour {

        /**
        * Gets or attempts to set the destination of the agent in world-space units.
        */
        public get destination(): UnityEngine.Vector3;
        public set destination(value: UnityEngine.Vector3);
        /**
        * Stop within this distance from the target position.
        */
        public get stoppingDistance(): float;
        public set stoppingDistance(value: float);
        /**
        * Access the current velocity of the NavMeshAgent component, or set a velocity to control the agent manually.
        */
        public get velocity(): UnityEngine.Vector3;
        public set velocity(value: UnityEngine.Vector3);
        /**
        * Gets or sets the simulation position of the navmesh agent.
        */
        public get nextPosition(): UnityEngine.Vector3;
        public set nextPosition(value: UnityEngine.Vector3);
        /**
        * Get the current steering target along the path. (Read Only)
        */
        public get steeringTarget(): UnityEngine.Vector3;
        /**
        * The desired velocity of the agent including any potential contribution from avoidance. (Read Only)
        */
        public get desiredVelocity(): UnityEngine.Vector3;
        /**
        * The distance between the agent's position and the destination on the current path. (Read Only)
        */
        public get remainingDistance(): float;
        /**
        * The relative vertical displacement of the owning GameObject.
        */
        public get baseOffset(): float;
        public set baseOffset(value: float);
        /**
        * Is the agent currently positioned on an OffMeshLink? (Read Only)
        */
        public get isOnOffMeshLink(): boolean;
        /**
        * The current OffMeshLinkData.
        */
        public get currentOffMeshLinkData(): OffMeshLinkData;
        /**
        * The next OffMeshLinkData on the current path.
        */
        public get nextOffMeshLinkData(): OffMeshLinkData;
        /**
        * Should the agent move across OffMeshLinks automatically?
        */
        public get autoTraverseOffMeshLink(): boolean;
        public set autoTraverseOffMeshLink(value: boolean);
        /**
        * Should the agent brake automatically to avoid overshooting the destination point?
        */
        public get autoBraking(): boolean;
        public set autoBraking(value: boolean);
        /**
        * Should the agent attempt to acquire a new path if the existing path becomes invalid?
        */
        public get autoRepath(): boolean;
        public set autoRepath(value: boolean);
        /**
        * Does the agent currently have a path? (Read Only)
        */
        public get hasPath(): boolean;
        /**
        * Is a path in the process of being computed but not yet ready? (Read Only)
        */
        public get pathPending(): boolean;
        /**
        * Is the current path stale. (Read Only)
        */
        public get isPathStale(): boolean;
        /**
        * The status of the current path (complete, partial or invalid).
        */
        public get pathStatus(): NavMeshPathStatus;
        public get pathEndPosition(): UnityEngine.Vector3;
        /**
        * Use this property to set, or get, whether the NavMesh agent stops or continues its movement along the current path.
        */
        public get isStopped(): boolean;
        public set isStopped(value: boolean);
        /**
        * Property to get and set the current path.
        */
        public get path(): NavMeshPath;
        public set path(value: NavMeshPath);
        /**
        * Returns the owning object of the NavMesh the agent is currently placed on (Read Only).
        */
        public get navMeshOwner(): UnityEngine.Object;
        /**
        * The type ID for the agent.
        */
        public get agentTypeID(): int;
        public set agentTypeID(value: int);
        /**
        * Specifies which NavMesh areas are passable. Changing areaMask will make the path stale (see isPathStale).
        */
        public get areaMask(): int;
        public set areaMask(value: int);
        /**
        * Maximum movement speed when following a path.
        */
        public get speed(): float;
        public set speed(value: float);
        /**
        * Maximum turning speed in (deg/s) while following a path.
        */
        public get angularSpeed(): float;
        public set angularSpeed(value: float);
        /**
        * The maximum acceleration of an agent as it follows a path, given in units / sec^2.
        */
        public get acceleration(): float;
        public set acceleration(value: float);
        /**
        * Gets or sets whether the transform position is synchronized with the simulated agent position. The default value is true.
        */
        public get updatePosition(): boolean;
        public set updatePosition(value: boolean);
        /**
        * Should the agent update the transform orientation?
        */
        public get updateRotation(): boolean;
        public set updateRotation(value: boolean);
        /**
        * Allows you to specify whether the agent should be aligned to the up-axis of the NavMesh or link that it is placed on.
        */
        public get updateUpAxis(): boolean;
        public set updateUpAxis(value: boolean);
        /**
        * The avoidance radius for the agent.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * The height of the agent for purposes of passing under obstacles, etc.
        */
        public get height(): float;
        public set height(value: float);
        /**
        * The level of quality of avoidance.
        */
        public get obstacleAvoidanceType(): ObstacleAvoidanceType;
        public set obstacleAvoidanceType(value: ObstacleAvoidanceType);
        /**
        * The avoidance priority level.
        */
        public get avoidancePriority(): int;
        public set avoidancePriority(value: int);
        /**
        * Is the agent currently bound to the navmesh? (Read Only)
        */
        public get isOnNavMesh(): boolean;

        private constructor ()
        /**
        * Sets or updates the destination thus triggering the calculation for a new path.
        * @param target The target point to navigate to.
        * @returns True if the destination was requested successfully, otherwise false.
        */
        public SetDestination ($target: UnityEngine.Vector3) : boolean
        /**
        * Enables or disables the current off-mesh link.
        * @param activated Is the link activated?
        */
        public ActivateCurrentOffMeshLink ($activated: boolean) : void
        /**
        * Completes the movement on the current OffMeshLink.
        */
        public CompleteOffMeshLink () : void
        /**
        * Warps agent to the provided position.
        * @param newPosition New position to warp the agent to.
        * @returns True if agent is successfully warped, otherwise false.
        */
        public Warp ($newPosition: UnityEngine.Vector3) : boolean
        /**
        * Apply relative movement to current position.
        * @param offset The relative movement vector.
        */
        public Move ($offset: UnityEngine.Vector3) : void
        /**
        * Clears the current path.
        */
        public ResetPath () : void
        /**
        * Assign a new path to this agent.
        * @param path New path to follow.
        * @returns True if the path is succesfully assigned.
        */
        public SetPath ($path: NavMeshPath) : boolean
        /**
        * Locate the closest NavMesh edge.
        * @param hit Holds the properties of the resulting location.
        * @returns True if a nearest edge is found.
        */
        public FindClosestEdge ($hit: $Ref<NavMeshHit>) : boolean
        /**
        * Trace a straight path towards a target postion in the NavMesh without moving the agent.
        * @param targetPosition The desired end position of movement.
        * @param hit Properties of the obstacle detected by the ray (if any).
        * @returns True if there is an obstacle between the agent and the target position, otherwise false.
        */
        public Raycast ($targetPosition: UnityEngine.Vector3, $hit: $Ref<NavMeshHit>) : boolean
        /**
        * Calculate a path to a specified point and store the resulting path.
        * @param targetPosition The final position of the path requested.
        * @param path The resulting path.
        * @returns True if either a complete or partial path is found. False otherwise.
        */
        public CalculatePath ($targetPosition: UnityEngine.Vector3, $path: NavMeshPath) : boolean
        /**
        * Sample a position along the current path.
        * @param areaMask A bitfield mask specifying which NavMesh areas can be passed when tracing the path.
        * @param maxDistance Terminate scanning the path at this distance.
        * @param hit Holds the properties of the resulting location.
        * @returns True if terminated before reaching the position at maxDistance, false otherwise.
        */
        public SamplePathPosition ($areaMask: int, $maxDistance: float, $hit: $Ref<NavMeshHit>) : boolean
        /**
        * Sets the cost for traversing over areas of the area type.
        * @param areaIndex Area cost.
        * @param areaCost New cost for the specified area index.
        */
        public SetAreaCost ($areaIndex: int, $areaCost: float) : void
        /**
        * Gets the cost for path calculation when crossing area of a particular type.
        * @param areaIndex Area Index.
        * @returns Current cost for specified area index.
        */
        public GetAreaCost ($areaIndex: int) : float
    }

    /**
    * A path as calculated by the navigation system.
    */
    class NavMeshPath extends System.Object {

        /**
        * Corner points of the path. (Read Only)
        */
        public get corners(): UnityEngine.Vector3[];
        /**
        * Status of the path. (Read Only)
        */
        public get status(): NavMeshPathStatus;

        /**
        * NavMeshPath constructor.
        */
        public constructor ()
        /**
        * Calculate the corners for the path.
        * @param results Array to store path corners.
        * @returns The number of corners along the path - including start and end points.
        */
        public GetCornersNonAlloc ($results: UnityEngine.Vector3[]) : int
        /**
        * Erase all corner points from path.
        */
        public ClearCorners () : void
    }

    /**
    * Status of path.
    */
    enum NavMeshPathStatus {
        PathComplete = 0,
        PathPartial = 1,
        PathInvalid = 2 
    }

    /**
    * State of OffMeshLink.
    */
    class OffMeshLinkData extends System.ValueType {

        /**
        * Is link valid (Read Only).
        */
        public get valid(): boolean;
        /**
        * Is link active (Read Only).
        */
        public get activated(): boolean;
        /**
        * Link type specifier (Read Only).
        */
        public get linkType(): OffMeshLinkType;
        /**
        * Link start world position (Read Only).
        */
        public get startPos(): UnityEngine.Vector3;
        /**
        * Link end world position (Read Only).
        */
        public get endPos(): UnityEngine.Vector3;
        /**
        * The OffMeshLink if the link type is a manually placed Offmeshlink (Read Only).
        */
        public get offMeshLink(): OffMeshLink;

    }

    /**
    * Link type specifier.
    */
    enum OffMeshLinkType {
        LinkTypeManual = 0,
        LinkTypeDropDown = 1,
        LinkTypeJumpAcross = 2 
    }

    /**
    * Link allowing movement outside the planar navigation mesh.
    */
    class OffMeshLink extends UnityEngine.Behaviour {

        /**
        * Is link active.
        */
        public get activated(): boolean;
        public set activated(value: boolean);
        /**
        * Is link occupied. (Read Only)
        */
        public get occupied(): boolean;
        /**
        * Modify pathfinding cost for the link.
        */
        public get costOverride(): float;
        public set costOverride(value: float);
        /**
        * Can link be traversed in both directions.
        */
        public get biDirectional(): boolean;
        public set biDirectional(value: boolean);
        /**
        * NavMesh area index for this OffMeshLink component.
        */
        public get area(): int;
        public set area(value: int);
        /**
        * Automatically update endpoints.
        */
        public get autoUpdatePositions(): boolean;
        public set autoUpdatePositions(value: boolean);
        /**
        * The transform representing link start position.
        */
        public get startTransform(): UnityEngine.Transform;
        public set startTransform(value: UnityEngine.Transform);
        /**
        * The transform representing link end position.
        */
        public get endTransform(): UnityEngine.Transform;
        public set endTransform(value: UnityEngine.Transform);

        private constructor ()
        /**
        * Explicitly update the link endpoints.
        */
        public UpdatePositions () : void
    }

    /**
    * Shape of the obstacle.
    */
    enum NavMeshObstacleShape {
        Capsule = 0,
        Box = 1 
    }

    /**
    * An obstacle for NavMeshAgents to avoid.
    */
    class NavMeshObstacle extends UnityEngine.Behaviour {

        /**
        * Height of the obstacle's cylinder shape.
        */
        public get height(): float;
        public set height(value: float);
        /**
        * Radius of the obstacle's capsule shape.
        */
        public get radius(): float;
        public set radius(value: float);
        /**
        * Velocity at which the obstacle moves around the NavMesh.
        */
        public get velocity(): UnityEngine.Vector3;
        public set velocity(value: UnityEngine.Vector3);
        /**
        * Should this obstacle make a cut-out in the navmesh.
        */
        public get carving(): boolean;
        public set carving(value: boolean);
        /**
        * Should this obstacle be carved when it is constantly moving?
        */
        public get carveOnlyStationary(): boolean;
        public set carveOnlyStationary(value: boolean);
        /**
        * Threshold distance for updating a moving carved hole (when carving is enabled).
        */
        public get carvingMoveThreshold(): float;
        public set carvingMoveThreshold(value: float);
        /**
        * Time to wait until obstacle is treated as stationary (when carving and carveOnlyStationary are enabled).
        */
        public get carvingTimeToStationary(): float;
        public set carvingTimeToStationary(value: float);
        /**
        * The shape of the obstacle.
        */
        public get shape(): NavMeshObstacleShape;
        public set shape(value: NavMeshObstacleShape);
        /**
        * The center of the obstacle, measured in the object's local space.
        */
        public get center(): UnityEngine.Vector3;
        public set center(value: UnityEngine.Vector3);
        /**
        * The size of the obstacle, measured in the object's local space.
        */
        public get size(): UnityEngine.Vector3;
        public set size(value: UnityEngine.Vector3);

        private constructor ()
    }

    /**
    * Contains data describing a triangulation of a navmesh.
    */
    class NavMeshTriangulation extends System.ValueType {

        /**
        * Vertices for the navmesh triangulation.
        */
        public vertices : UnityEngine.Vector3[]
        /**
        * Triangle indices for the navmesh triangulation.
        */
        public indices : int[]
        /**
        * NavMesh area indices for the navmesh triangulation.
        */
        public areas : int[]

    }

    /**
    * The instance is returned when adding NavMesh data.
    */
    class NavMeshDataInstance extends System.ValueType {

        /**
        * True if the NavMesh data is added to the navigation system - otherwise false (Read Only).
        */
        public get valid(): boolean;
        /**
        * Get or set the owning Object.
        */
        public get owner(): UnityEngine.Object;
        public set owner(value: UnityEngine.Object);

        /**
        * Removes this instance from the NavMesh system.
        */
        public Remove () : void
    }

    /**
    * Used for runtime manipulation of links connecting polygons of the NavMesh.
    */
    class NavMeshLinkData extends System.ValueType {

        /**
        * Start position of the link.
        */
        public get startPosition(): UnityEngine.Vector3;
        public set startPosition(value: UnityEngine.Vector3);
        /**
        * End position of the link.
        */
        public get endPosition(): UnityEngine.Vector3;
        public set endPosition(value: UnityEngine.Vector3);
        /**
        * If positive, overrides the pathfinder cost to traverse the link.
        */
        public get costModifier(): float;
        public set costModifier(value: float);
        /**
        * If true, the link can be traversed in both directions, otherwise only from start to end position.
        */
        public get bidirectional(): boolean;
        public set bidirectional(value: boolean);
        /**
        * If positive, the link will be rectangle aligned along the line from start to end.
        */
        public get width(): float;
        public set width(value: float);
        /**
        * Area type of the link.
        */
        public get area(): int;
        public set area(value: int);
        /**
        * Specifies which agent type this link is available for.
        */
        public get agentTypeID(): int;
        public set agentTypeID(value: int);

    }

    /**
    * An instance representing a link available for pathfinding.
    */
    class NavMeshLinkInstance extends System.ValueType {

        /**
        * True if the NavMesh link is added to the navigation system - otherwise false (Read Only).
        */
        public get valid(): boolean;
        /**
        * Get or set the owning Object.
        */
        public get owner(): UnityEngine.Object;
        public set owner(value: UnityEngine.Object);

        /**
        * Removes this instance from the game.
        */
        public Remove () : void
    }

    /**
    * Specifies which agent type and areas to consider when searching the NavMesh.
    */
    class NavMeshQueryFilter extends System.ValueType {

        /**
        * A bitmask representing the traversable area types.
        */
        public get areaMask(): int;
        public set areaMask(value: int);
        /**
        * The agent type ID, specifying which navigation meshes to consider for the query functions.
        */
        public get agentTypeID(): int;
        public set agentTypeID(value: int);

        /**
        * Returns the area cost multiplier for the given area type for this filter.
        * @param areaIndex Index to retreive the cost for.
        * @returns The cost multiplier for the supplied area index.
        */
        public GetAreaCost ($areaIndex: int) : float
        /**
        * Sets the pathfinding cost multiplier for this filter for a given area type.
        * @param areaIndex The area index to set the cost for.
        * @param cost The cost for the supplied area index.
        */
        public SetAreaCost ($areaIndex: int, $cost: float) : void
    }

    /**
    * Singleton class to access the baked NavMesh.
    */
    class NavMesh {

        /**
        * Area mask constant that includes all NavMesh areas.
        */
        public static AllAreas : int
        /**
        * Set a function to be called before the NavMesh is updated during the frame update execution.
        */
        public static onPreUpdate : UnityEngine_AI_NavMesh.OnNavMeshPreUpdate
        /**
        * Describes how far in the future the agents predict collisions for avoidance.
        */
        public static get avoidancePredictionTime(): float;
        public static set avoidancePredictionTime(value: float);
        /**
        * The maximum number of nodes processed for each frame during the asynchronous pathfinding process.
        */
        public static get pathfindingIterationsPerFrame(): int;
        public static set pathfindingIterationsPerFrame(value: int);

        /**
        * Trace a line between two points on the NavMesh.
        * @param sourcePosition The origin of the ray.
        * @param targetPosition The end of the ray.
        * @param hit Holds the properties of the ray cast resulting location.
        * @param areaMask A bitfield mask specifying which NavMesh areas can be passed when tracing the ray.
        * @returns True if the ray is terminated before reaching target position. Otherwise returns false.
        * @methodSwap Raycast_EBB7509C_H3B9FE36E
        */
        public static Raycast ($sourcePosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $hit: $Ref<NavMeshHit>, $areaMask: int) : boolean
        /**
        * Calculate a path between two points and store the resulting path.
        * @param sourcePosition The initial position of the path requested.
        * @param targetPosition The final position of the path requested.
        * @param areaMask A bitfield mask specifying which NavMesh areas can be passed when calculating a path.
        * @param path The resulting path.
        * @returns True if either a complete or partial path is found. False otherwise.
        * @methodSwap CalculatePath_EBB7509C_H3D7A04AC
        */
        public static CalculatePath ($sourcePosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $areaMask: int, $path: NavMeshPath) : boolean
        /**
        * Locate the closest NavMesh edge from a point on the NavMesh.
        * @param sourcePosition The origin of the distance query.
        * @param hit Holds the properties of the resulting location.
        * @param areaMask A bitfield mask specifying which NavMesh areas can be passed when finding the nearest edge.
        * @returns True if the nearest edge is found.
        * @methodSwap FindClosestEdge_EBB7509C_FB2ED101
        */
        public static FindClosestEdge ($sourcePosition: UnityEngine.Vector3, $hit: $Ref<NavMeshHit>, $areaMask: int) : boolean
        /**
        * Finds the nearest point based on the NavMesh within a specified range.
        * @param sourcePosition The origin of the sample query.
        * @param hit Holds the properties of the resulting location. The value of hit.normal is never computed. It is always (0,0,0).
        * @param maxDistance Sample within this distance from sourcePosition.
        * @param areaMask A mask that specifies the NavMesh areas allowed when finding the nearest point.
        * @returns True if the nearest point is found.
        * @methodSwap SamplePosition_EBB7509C_H3A302B60
        */
        public static SamplePosition ($sourcePosition: UnityEngine.Vector3, $hit: $Ref<NavMeshHit>, $maxDistance: float, $areaMask: int) : boolean
        /**
        * Sets the cost for finding path over geometry of the area type on all agents.
        * @param areaIndex Index of the area to set.
        * @param cost New cost.
        */
        public static SetAreaCost ($areaIndex: int, $cost: float) : void
        /**
        * Gets the cost for path finding over geometry of the area type.
        * @param areaIndex Index of the area to get.
        */
        public static GetAreaCost ($areaIndex: int) : float
        /**
        * Returns the area index for a named NavMesh area type.
        * @param areaName Name of the area to look up.
        * @returns Index if the specified are, or -1 if no area found.
        */
        public static GetAreaFromName ($areaName: string) : int
        /**
        * Calculates triangulation of the current navmesh.
        */
        public static CalculateTriangulation () : NavMeshTriangulation
        /**
        * Adds the specified NavMeshData to the game.
        * @param navMeshData Contains the data for the navmesh.
        * @returns Representing the added navmesh.
        */
        public static AddNavMeshData ($navMeshData: NavMeshData) : NavMeshDataInstance
        /**
        * Adds the specified NavMeshData to the game.
        * @param navMeshData Contains the data for the navmesh.
        * @param position Translate the navmesh to this position.
        * @param rotation Rotate the navmesh to this orientation.
        * @returns Representing the added navmesh.
        */
        public static AddNavMeshData ($navMeshData: NavMeshData, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : NavMeshDataInstance
        /**
        * Removes the specified NavMeshDataInstance from the game, making it unavailable for agents and queries.
        * @param handle The instance of a NavMesh to remove.
        */
        public static RemoveNavMeshData ($handle: NavMeshDataInstance) : void
        /**
        * Adds a link to the NavMesh. The link is described by the NavMeshLinkData struct.
        * @param link Describing the properties of the link.
        * @returns Representing the added link.
        */
        public static AddLink ($link: NavMeshLinkData) : NavMeshLinkInstance
        /**
        * Adds a link to the NavMesh. The link is described by the NavMeshLinkData struct.
        * @param link Describing the properties of the link.
        * @param position Translate the link to this position.
        * @param rotation Rotate the link to this orientation.
        * @returns Representing the added link.
        */
        public static AddLink ($link: NavMeshLinkData, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : NavMeshLinkInstance
        /**
        * Removes a link from the NavMesh.
        * @param handle The instance of a link to remove.
        */
        public static RemoveLink ($handle: NavMeshLinkInstance) : void
        /**
        * Samples the position nearest the sourcePosition on any NavMesh built for the agent type specified by the filter.
        * @param sourcePosition The origin of the sample query.
        * @param hit Holds the properties of the resulting location. The value of hit.normal is never computed. It is always (0,0,0).
        * @param maxDistance Sample within this distance from sourcePosition.
        * @param filter A filter specifying which NavMesh areas are allowed when finding the nearest point.
        * @returns True if the nearest point is found.
        * @methodSwap SamplePosition_EBB7509C_H4144E82E
        */
        public static SamplePosition ($sourcePosition: UnityEngine.Vector3, $hit: $Ref<NavMeshHit>, $maxDistance: float, $filter: NavMeshQueryFilter) : boolean
        /**
        * Locate the closest NavMesh edge from a point on the NavMesh, subject to the constraints of the filter argument.
        * @param sourcePosition The origin of the distance query.
        * @param hit Holds the properties of the resulting location.
        * @param filter A filter specifying which NavMesh areas can be passed when finding the nearest edge.
        * @returns True if the nearest edge is found.
        */
        public static FindClosestEdge ($sourcePosition: UnityEngine.Vector3, $hit: $Ref<NavMeshHit>, $filter: NavMeshQueryFilter) : boolean
        /**
        * Traces a line between two positions on the NavMesh, subject to the constraints defined by the filter argument.
        * @param sourcePosition The origin of the ray.
        * @param targetPosition The end of the ray.
        * @param hit Holds the properties of the ray cast resulting location.
        * @param filter A filter specifying which NavMesh areas can be passed when tracing the ray.
        * @returns True if the ray is terminated before reaching target position. Otherwise returns false.
        */
        public static Raycast ($sourcePosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $hit: $Ref<NavMeshHit>, $filter: NavMeshQueryFilter) : boolean
        /**
        * Calculates a path between two positions mapped to the NavMesh, subject to the constraints and costs defined by the filter argument.
        * @param sourcePosition The initial position of the path requested.
        * @param targetPosition The final position of the path requested.
        * @param filter A filter specifying the cost of NavMesh areas that can be passed when calculating a path.
        * @param path The resulting path.
        * @returns True if a either a complete or partial path is found and false otherwise.
        */
        public static CalculatePath ($sourcePosition: UnityEngine.Vector3, $targetPosition: UnityEngine.Vector3, $filter: NavMeshQueryFilter, $path: NavMeshPath) : boolean
        /**
        * Creates and returns a new entry of NavMesh build settings available for runtime NavMesh building.
        * @returns The created settings.
        */
        public static CreateSettings () : NavMeshBuildSettings
        /**
        * Removes the build settings matching the agent type ID.
        * @param agentTypeID The ID of the entry to remove.
        */
        public static RemoveSettings ($agentTypeID: int) : void
        /**
        * Returns an existing entry of NavMesh build settings.
        * @param agentTypeID The ID to look for.
        * @returns The settings found.
        */
        public static GetSettingsByID ($agentTypeID: int) : NavMeshBuildSettings
        /**
        * Returns the number of registered NavMesh build settings.
        * @returns The number of registered entries.
        */
        public static GetSettingsCount () : int
        /**
        * Returns an existing entry of NavMesh build settings by its ordered index.
        * @param index The index to retrieve from.
        * @returns The found settings.
        */
        public static GetSettingsByIndex ($index: int) : NavMeshBuildSettings
        /**
        * Returns the name associated with the NavMesh build settings matching the provided agent type ID.
        * @param agentTypeID The ID to look for.
        * @returns The name associated with the ID found.
        */
        public static GetSettingsNameFromID ($agentTypeID: int) : string
        /**
        * Removes all NavMesh surfaces and links from the game.
        */
        public static RemoveAllNavMeshData () : void
    }

}

declare module 'UnityEngine.AI.NavMesh' {
    import * as System from 'System'

    /**
    * A delegate which can be used to register callback methods to be invoked before the NavMesh system updates.
    */
    interface OnNavMeshPreUpdate {
        () : void; 
        Invoke?: () => void;
    }
    var OnNavMeshPreUpdate: { new (func: () => void): OnNavMeshPreUpdate; }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

