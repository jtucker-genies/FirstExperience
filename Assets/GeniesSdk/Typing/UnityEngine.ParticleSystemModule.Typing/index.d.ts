
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine' {
    import * as UnityEngine_ParticleSystem from 'UnityEngine.ParticleSystem'
    import * as System from 'System'
    import * as Unity_Collections from 'Unity.Collections'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Collections from 'System.Collections'

    /**
    * Script interface for the Built-in Particle System. Unity's powerful and versatile particle system implementation.
    */
    class ParticleSystem extends Component {

        /**
        * Determines whether the Particle System is playing.
        */
        public get isPlaying(): boolean;
        /**
        * Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play.
        */
        public get isEmitting(): boolean;
        /**
        * Determines whether the Particle System is in the stopped state.
        */
        public get isStopped(): boolean;
        /**
        * Determines whether the Particle System is paused.
        */
        public get isPaused(): boolean;
        /**
        * The current number of particles (Read Only). The number doesn't include particles of child Particle Systems
        */
        public get particleCount(): int;
        /**
        * Playback position in seconds.
        */
        public get time(): float;
        public set time(value: float);
        /**
        * Total playback time in seconds, including the Start Delay setting.
        */
        public get totalTime(): float;
        /**
        * Override the random seed used for the Particle System emission.
        */
        public get randomSeed(): uint;
        public set randomSeed(value: uint);
        /**
        * Controls whether the Particle System uses an automatically-generated random number to seed the random number generator.
        */
        public get useAutoRandomSeed(): boolean;
        public set useAutoRandomSeed(value: boolean);
        /**
        * Does this system support Procedural Simulation?
        */
        public get proceduralSimulationSupported(): boolean;
        /**
        * Determines whether the Particle System rotates its particles around only the Z axis, or whether the system specifies separate values for the X, Y and Z axes.
        */
        public get has3DParticleRotations(): boolean;
        /**
        * Determines whether the Particle System uses a single value for the width and height (and depth, when using meshes), or if the system specifies different values for each axis.
        */
        public get hasNonUniformParticleSizes(): boolean;
        /**
        * Access the main Particle System settings.
        */
        public get main(): UnityEngine_ParticleSystem.MainModule;
        /**
        * Script interface for the EmissionModule of a Particle System.
        */
        public get emission(): UnityEngine_ParticleSystem.EmissionModule;
        /**
        * Script interface for the ShapeModule of a Particle System.
        */
        public get shape(): UnityEngine_ParticleSystem.ShapeModule;
        /**
        * Script interface for the VelocityOverLifetimeModule of a Particle System.
        */
        public get velocityOverLifetime(): UnityEngine_ParticleSystem.VelocityOverLifetimeModule;
        /**
        * Script interface for the LimitVelocityOverLifetimeModule of a Particle System. .
        */
        public get limitVelocityOverLifetime(): UnityEngine_ParticleSystem.LimitVelocityOverLifetimeModule;
        /**
        * Script interface for the InheritVelocityModule of a Particle System.
        */
        public get inheritVelocity(): UnityEngine_ParticleSystem.InheritVelocityModule;
        /**
        * Script interface for the Particle System Lifetime By Emitter Speed module.
        */
        public get lifetimeByEmitterSpeed(): UnityEngine_ParticleSystem.LifetimeByEmitterSpeedModule;
        /**
        * Script interface for the ForceOverLifetimeModule of a Particle System.
        */
        public get forceOverLifetime(): UnityEngine_ParticleSystem.ForceOverLifetimeModule;
        /**
        * Script interface for the ColorOverLifetimeModule of a Particle System.
        */
        public get colorOverLifetime(): UnityEngine_ParticleSystem.ColorOverLifetimeModule;
        /**
        * Script interface for the ColorByLifetimeModule of a Particle System.
        */
        public get colorBySpeed(): UnityEngine_ParticleSystem.ColorBySpeedModule;
        /**
        * Script interface for the SizeOverLifetimeModule of a Particle System.
        */
        public get sizeOverLifetime(): UnityEngine_ParticleSystem.SizeOverLifetimeModule;
        /**
        * Script interface for the SizeBySpeedModule of a Particle System.
        */
        public get sizeBySpeed(): UnityEngine_ParticleSystem.SizeBySpeedModule;
        /**
        * Script interface for the RotationOverLifetimeModule of a Particle System.
        */
        public get rotationOverLifetime(): UnityEngine_ParticleSystem.RotationOverLifetimeModule;
        /**
        * Script interface for the RotationBySpeedModule of a Particle System.
        */
        public get rotationBySpeed(): UnityEngine_ParticleSystem.RotationBySpeedModule;
        /**
        * Script interface for the ExternalForcesModule of a Particle System.
        */
        public get externalForces(): UnityEngine_ParticleSystem.ExternalForcesModule;
        /**
        * Script interface for the NoiseModule of a Particle System.
        */
        public get noise(): UnityEngine_ParticleSystem.NoiseModule;
        /**
        * Script interface for the CollisionModule of a Particle System.
        */
        public get collision(): UnityEngine_ParticleSystem.CollisionModule;
        /**
        * Script interface for the TriggerModule of a Particle System.
        */
        public get trigger(): UnityEngine_ParticleSystem.TriggerModule;
        /**
        * Script interface for the SubEmittersModule of a Particle System.
        */
        public get subEmitters(): UnityEngine_ParticleSystem.SubEmittersModule;
        /**
        * Script interface for the TextureSheetAnimationModule of a Particle System.
        */
        public get textureSheetAnimation(): UnityEngine_ParticleSystem.TextureSheetAnimationModule;
        /**
        * Script interface for the LightsModule of a Particle System.
        */
        public get lights(): UnityEngine_ParticleSystem.LightsModule;
        /**
        * Script interface for the TrailsModule of a Particle System.
        */
        public get trails(): UnityEngine_ParticleSystem.TrailModule;
        /**
        * Script interface for the CustomDataModule of a Particle System.
        */
        public get customData(): UnityEngine_ParticleSystem.CustomDataModule;

        private constructor ()
        /**
        * Sets the particles of this Particle System.
        * @param particles Input particle buffer, containing the desired particle state.
        * @param size The number of elements in the particles array that is written to the Particle System.
        * @param offset The offset into the destination particle list, to assign these particles.
        * @methodSwap SetParticles_EBB7509C_H159C7DB4
        */
        public SetParticles ($particles: UnityEngine_ParticleSystem.Particle[], $size: int, $offset: int) : void
        /**
        * Sets the particles of this Particle System.
        * @param particles Input particle buffer, containing the desired particle state.
        * @param size The number of elements in the particles array that is written to the Particle System.
        * @param offset The offset into the destination particle list, to assign these particles.
        * @methodSwap SetParticles_EBB7509C_H764C4FF3
        */
        public SetParticles ($particles: UnityEngine_ParticleSystem.Particle[], $size: int) : void
        /**
        * Sets the particles of this Particle System.
        * @param particles Input particle buffer, containing the desired particle state.
        * @param size The number of elements in the particles array that is written to the Particle System.
        * @param offset The offset into the destination particle list, to assign these particles.
        */
        public SetParticles ($particles: UnityEngine_ParticleSystem.Particle[]) : void
        /**
        * @methodSwap SetParticles_EBB7509C_A8DAC807
        */
        public SetParticles ($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>, $size: int, $offset: int) : void
        /**
        * @methodSwap SetParticles_EBB7509C_H3E63862C
        */
        public SetParticles ($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>, $size: int) : void
        public SetParticles ($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>) : void
        /**
        * Gets the particles of this Particle System.
        * @param particles Output particle buffer, containing the current particle state.
        * @param size The number of elements that are read from the Particle System.
        * @param offset The offset into the active particle list, from which to copy the particles.
        * @returns The number of particles written to the input particle array (the number of particles currently alive).
        * @methodSwap GetParticles_EBB7509C_H159C7DB4
        */
        public GetParticles ($particles: UnityEngine_ParticleSystem.Particle[], $size: int, $offset: int) : int
        /**
        * Gets the particles of this Particle System.
        * @param particles Output particle buffer, containing the current particle state.
        * @param size The number of elements that are read from the Particle System.
        * @param offset The offset into the active particle list, from which to copy the particles.
        * @returns The number of particles written to the input particle array (the number of particles currently alive).
        * @methodSwap GetParticles_EBB7509C_H764C4FF3
        */
        public GetParticles ($particles: UnityEngine_ParticleSystem.Particle[], $size: int) : int
        /**
        * Gets the particles of this Particle System.
        * @param particles Output particle buffer, containing the current particle state.
        * @param size The number of elements that are read from the Particle System.
        * @param offset The offset into the active particle list, from which to copy the particles.
        * @returns The number of particles written to the input particle array (the number of particles currently alive).
        */
        public GetParticles ($particles: UnityEngine_ParticleSystem.Particle[]) : int
        /**
        * @methodSwap GetParticles_EBB7509C_A8DAC807
        */
        public GetParticles ($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>, $size: int, $offset: int) : int
        /**
        * @methodSwap GetParticles_EBB7509C_H3E63862C
        */
        public GetParticles ($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>, $size: int) : int
        public GetParticles ($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>) : int
        public SetCustomParticleData ($customData: System_Collections_Generic.List$1<Vector4>, $streamIndex: ParticleSystemCustomData) : void
        public GetCustomParticleData ($customData: System_Collections_Generic.List$1<Vector4>, $streamIndex: ParticleSystemCustomData) : int
        /**
        * Returns all the data that relates to the current internal state of the Particle System.
        * @returns The current internal state of the Particle System.
        */
        public GetPlaybackState () : UnityEngine_ParticleSystem.PlaybackState
        /**
        * Use this method with the results of an earlier call to ParticleSystem.GetPlaybackState, in order to restore the Particle System to the state stored in the playbackState object.
        * @param playbackState The PlaybackState to apply to the Particle System.
        */
        public SetPlaybackState ($playbackState: UnityEngine_ParticleSystem.PlaybackState) : void
        /**
        * Returns all the data relating to the current internal state of the Particle System Trails.
        * @returns The variable to populate with the Trails that currently belong to the Particle System..
        */
        public GetTrails () : UnityEngine_ParticleSystem.Trails
        /**
        * If you want to restore the Particle System to its current state in the future, store the Trails this function returns along with ParticleSystem.GetParticles and ParticleSystem.GetPlaybackState.
        * This method allows you to get the trail data without creating any garbage, if you presize the trail data.
        * Additional resources: Trails, SetTrails, GetPlaybackState.
        * @param trailData The current Trails belonging to the Particle System.
        * @returns The number of trails.
        */
        public GetTrails ($trailData: $Ref<UnityEngine_ParticleSystem.Trails>) : int
        /**
        * Use this method with the results of an earlier call to ParticleSystem.GetTrails, in order to restore the Particle System to the state stored in the Trails object.
        * @param Trails The Trails to apply to the Particle System.
        */
        public SetTrails ($trailData: UnityEngine_ParticleSystem.Trails) : void
        /**
        * Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
        * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
        * @param withChildren Fast-forward all child Particle Systems as well.
        * @param restart Restart and start from the beginning.
        * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
        * @methodSwap Simulate_EBB7509C_BF0126B9
        */
        public Simulate ($t: float, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean) : void
        /**
        * Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
        * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
        * @param withChildren Fast-forward all child Particle Systems as well.
        * @param restart Restart and start from the beginning.
        * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
        * @methodSwap Simulate_EBB7509C_H67427A5A
        */
        public Simulate ($t: float, $withChildren: boolean, $restart: boolean) : void
        /**
        * Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
        * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
        * @param withChildren Fast-forward all child Particle Systems as well.
        * @param restart Restart and start from the beginning.
        * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
        * @methodSwap Simulate_EBB7509C_H6A5C30DD
        */
        public Simulate ($t: float, $withChildren: boolean) : void
        /**
        * Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
        * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
        * @param withChildren Fast-forward all child Particle Systems as well.
        * @param restart Restart and start from the beginning.
        * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
        * @methodSwap Simulate_EBB7509C_H82424F3E
        */
        public Simulate ($t: float) : void
        /**
        * Starts the Particle System.
        * @param withChildren Play all child Particle Systems as well.
        */
        public Play ($withChildren: boolean) : void
        /**
        * Starts the Particle System.
        * @param withChildren Play all child Particle Systems as well.
        */
        public Play () : void
        /**
        * Pauses the system so no new particles are emitted and the existing particles are not updated.
        * @param withChildren Pause all child Particle Systems as well.
        */
        public Pause ($withChildren: boolean) : void
        /**
        * Pauses the system so no new particles are emitted and the existing particles are not updated.
        * @param withChildren Pause all child Particle Systems as well.
        */
        public Pause () : void
        /**
        * Stops playing the Particle System using the supplied stop behaviour.
        * @param withChildren Stop all child Particle Systems as well.
        * @param stopBehavior Stop emitting or stop emitting and clear the system.
        */
        public Stop ($withChildren: boolean, $stopBehavior: ParticleSystemStopBehavior) : void
        /**
        * Stops playing the Particle System using the supplied stop behaviour.
        * @param withChildren Stop all child Particle Systems as well.
        * @param stopBehavior Stop emitting or stop emitting and clear the system.
        */
        public Stop ($withChildren: boolean) : void
        /**
        * Stops playing the Particle System using the supplied stop behaviour.
        * @param withChildren Stop all child Particle Systems as well.
        * @param stopBehavior Stop emitting or stop emitting and clear the system.
        */
        public Stop () : void
        /**
        * Remove all particles in the Particle System.
        * @param withChildren Clear all child Particle Systems as well.
        */
        public Clear ($withChildren: boolean) : void
        /**
        * Remove all particles in the Particle System.
        * @param withChildren Clear all child Particle Systems as well.
        */
        public Clear () : void
        /**
        * Does the Particle System contain any live particles, or will it produce more?
        * @param withChildren Check all child Particle Systems as well.
        * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead.
        */
        public IsAlive ($withChildren: boolean) : boolean
        /**
        * Does the Particle System contain any live particles, or will it produce more?
        * @param withChildren Check all child Particle Systems as well.
        * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead.
        */
        public IsAlive () : boolean
        /**
        * Emit count particles immediately.
        * @param count Number of particles to emit.
        * @methodSwap Emit_EBB7509C_F92D023A
        */
        public Emit ($count: int) : void
        /**
        * Emit a number of particles from script.
        * @param emitParams Overidden particle properties.
        * @param count Number of particles to emit.
        * @methodSwap Emit_EBB7509C_CBFDAAE4
        */
        public Emit ($emitParams: UnityEngine_ParticleSystem.EmitParams, $count: int) : void
        /**
        * Triggers the specified sub emitter on all particles of the Particle System.
        * @param subEmitterIndex Index of the sub emitter to trigger.
        * @methodSwap TriggerSubEmitter_EBB7509C_F92D023A
        */
        public TriggerSubEmitter ($subEmitterIndex: int) : void
        /**
        * Triggers the specified sub emitter on the specified particle(s) of the Particle System.
        * @param subEmitterIndex Index of the sub emitter to trigger.
        * @param particle Triggers the sub emtter on a single particle.
        * @param particles Triggers the sub emtter on a list of particles.
        * @methodSwap TriggerSubEmitter_EBB7509C_H8CFBEEBC
        */
        public TriggerSubEmitter ($subEmitterIndex: int, $particle: $Ref<UnityEngine_ParticleSystem.Particle>) : void
        /**
        * @methodSwap TriggerSubEmitter_EBB7509C_E307878F
        */
        public TriggerSubEmitter ($subEmitterIndex: int, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>) : void
        /**
        * Reset the cache of reserved graphics memory used for efficient rendering of Particle Systems.
        */
        public static ResetPreMappedBufferMemory () : void
        /**
        * Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems.
        * @param vertexBuffersCount The maximum number of cached vertex buffers.
        * @param indexBuffersCount The maximum number of cached index buffers.
        */
        public static SetMaximumPreMappedBufferCounts ($vertexBuffersCount: int, $indexBuffersCount: int) : void
        /**
        * Ensures that the ParticleSystemJobs.ParticleSystemJobData._axisOfRotations|axisOfRotations particle attribute array is allocated.
        */
        public AllocateAxisOfRotationAttribute () : void
        /**
        * Ensures that the ParticleSystemJobs.ParticleSystemJobData._meshIndices|meshIndices particle attribute array is allocated.
        */
        public AllocateMeshIndexAttribute () : void
        /**
        * Ensures that the ParticleSystemJobs.ParticleSystemJobData.customData1|customData1 and ParticleSystemJobs.ParticleSystemJobData.customData1|customData2 particle attribute arrays are allocated.
        * @param stream The custom data stream to allocate.
        */
        public AllocateCustomDataAttribute ($stream: ParticleSystemCustomData) : void
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
    * Representation of RGBA colors in 32 bit format.
    */
    interface Color32 extends System.IFormattable {

    }

    /**
    * Representation of four-dimensional vectors.
    */
    interface Vector4 extends System.IFormattable, System.IEquatable$1<Vector4> {

    }

    /**
    * Which stream of custom particle data to set.
    */
    enum ParticleSystemCustomData {
        Custom1 = 0,
        Custom2 = 1 
    }

    /**
    * The behavior to apply when calling ParticleSystem.Stop|Stop.
    */
    enum ParticleSystemStopBehavior {
        StopEmittingAndClear = 0,
        StopEmitting = 1 
    }

    /**
    * Store a collection of Keyframes that can be evaluated over time.
    */
    interface AnimationCurve extends System.IEquatable$1<AnimationCurve> {

    }

    /**
    * The particle curve mode.
    */
    enum ParticleSystemCurveMode {
        Constant = 0,
        Curve = 1,
        TwoCurves = 2,
        TwoConstants = 3 
    }

    /**
    * Representation of RGBA colors.
    */
    interface Color extends System.IFormattable, System.IEquatable$1<Color> {

    }

    /**
    * Represents a Gradient used for animating colors.
    */
    interface Gradient extends System.IEquatable$1<Gradient> {

    }

    /**
    * The particle gradient mode.
    */
    enum ParticleSystemGradientMode {
        Color = 0,
        Gradient = 1,
        TwoColors = 2,
        TwoGradients = 3,
        RandomColor = 4 
    }

    /**
    * Options for which physics system to use the gravity setting from.
    */
    enum ParticleSystemGravitySource {
        Physics3D = 0,
        Physics2D = 1 
    }

    /**
    * The space to simulate particles in.
    */
    enum ParticleSystemSimulationSpace {
        Local = 0,
        World = 1,
        Custom = 2 
    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * Control how particle systems apply transform scale.
    */
    enum ParticleSystemScalingMode {
        Hierarchy = 0,
        Local = 1,
        Shape = 2 
    }

    /**
    * Control how a Particle System calculates its velocity.
    */
    enum ParticleSystemEmitterVelocityMode {
        Transform = 0,
        Rigidbody = 1,
        Custom = 2 
    }

    /**
    * The action to perform when the Particle System stops.
    */
    enum ParticleSystemStopAction {
        None = 0,
        Disable = 1,
        Destroy = 2,
        Callback = 3 
    }

    /**
    * Control how particles are removed from the Particle System.
    */
    enum ParticleSystemRingBufferMode {
        Disabled = 0,
        PauseUntilReplaced = 1,
        LoopUntilReplaced = 2 
    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * The action to perform when the Particle System is offscreen.
    */
    enum ParticleSystemCullingMode {
        Automatic = 0,
        PauseAndCatchup = 1,
        Pause = 2,
        AlwaysSimulate = 3 
    }

    /**
    * The emission shape.
    */
    enum ParticleSystemShapeType {
        Sphere = 0,
        SphereShell = 1,
        Hemisphere = 2,
        HemisphereShell = 3,
        Cone = 4,
        Box = 5,
        Mesh = 6,
        ConeShell = 7,
        ConeVolume = 8,
        ConeVolumeShell = 9,
        Circle = 10,
        CircleEdge = 11,
        SingleSidedEdge = 12,
        MeshRenderer = 13,
        SkinnedMeshRenderer = 14,
        BoxShell = 15,
        BoxEdge = 16,
        Donut = 17,
        Rectangle = 18,
        Sprite = 19,
        SpriteRenderer = 20 
    }

    /**
    * The mode used to generate new points in a shape.
    */
    enum ParticleSystemShapeMultiModeValue {
        Random = 0,
        Loop = 1,
        PingPong = 2,
        BurstSpread = 3 
    }

    /**
    * The mesh emission type.
    */
    enum ParticleSystemMeshShapeType {
        Vertex = 0,
        Edge = 1,
        Triangle = 2 
    }

    /**
    * A class that allows you to create or modify meshes.
    */
    interface Mesh {

    }

    /**
    * Renders meshes inserted by the MeshFilter or TextMesh.
    */
    interface MeshRenderer {

    }

    /**
    * General functionality for all renderers.
    */
    interface Renderer {

    }

    /**
    * The Skinned Mesh filter.
    */
    interface SkinnedMeshRenderer {

    }

    /**
    * Represents a Sprite object for use in 2D gameplay.
    */
    interface Sprite {

    }

    /**
    * Renders a Sprite for 2D graphics.
    */
    interface SpriteRenderer {

    }

    /**
    * Class that represents textures in C# code.
    */
    interface Texture2D {

    }

    /**
    * Base class for Texture handling.
    */
    interface Texture {

    }

    /**
    * The texture channel.
    */
    enum ParticleSystemShapeTextureChannel {
        Red = 0,
        Green = 1,
        Blue = 2,
        Alpha = 3 
    }

    /**
    * How to apply emitter velocity to particles.
    */
    enum ParticleSystemInheritVelocityMode {
        Initial = 0,
        Current = 1 
    }

    /**
    * Script interface for Particle System Force Fields.
    */
    class ParticleSystemForceField extends Behaviour {

        /**
        * Selects the type of shape used for influencing particles.
        */
        public get shape(): ParticleSystemForceFieldShape;
        public set shape(value: ParticleSystemForceFieldShape);
        /**
        * Setting a value greater than 0 creates a hollow Force Field shape. This will cause particles to not be affected by the Force Field when closer to the center of the volume than the startRange property.
        */
        public get startRange(): float;
        public set startRange(value: float);
        /**
        * Determines the size of the shape used for influencing particles.
        */
        public get endRange(): float;
        public set endRange(value: float);
        /**
        * Describes the length of the Cylinder when using the Cylinder Force Field shape to influence particles.
        */
        public get length(): float;
        public set length(value: float);
        /**
        * When using the gravity force, set this value between 0 and 1 to control the focal point of the gravity effect.
        */
        public get gravityFocus(): float;
        public set gravityFocus(value: float);
        /**
        * Apply randomness to the Force Field axis that particles will travel around.
        */
        public get rotationRandomness(): Vector2;
        public set rotationRandomness(value: Vector2);
        /**
        * When using Drag, the drag strength will be multiplied by the size of the particles if this toggle is enabled.
        */
        public get multiplyDragByParticleSize(): boolean;
        public set multiplyDragByParticleSize(value: boolean);
        /**
        * When using Drag, the drag strength will be multiplied by the speed of the particles if this toggle is enabled.
        */
        public get multiplyDragByParticleVelocity(): boolean;
        public set multiplyDragByParticleVelocity(value: boolean);
        /**
        * Apply forces to particles within the volume of the Force Field, by using a 3D texture containing vector field data.
        */
        public get vectorField(): Texture3D;
        public set vectorField(value: Texture3D);
        /**
        * Apply a linear force along the local X axis to particles within the volume of the Force Field.
        */
        public get directionX(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set directionX(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
        * Apply a linear force along the local Y axis to particles within the volume of the Force Field.
        */
        public get directionY(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set directionY(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
        * Apply a linear force along the local Z axis to particles within the volume of the Force Field.
        */
        public get directionZ(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set directionZ(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
        * Apply gravity to particles within the volume of the Force Field.
        */
        public get gravity(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set gravity(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
        * The speed at which particles are propelled around a vortex.
        */
        public get rotationSpeed(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set rotationSpeed(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
        * Controls how strongly particles are dragged into the vortex motion.
        */
        public get rotationAttraction(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set rotationAttraction(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
        * Apply drag to particles within the volume of the Force Field.
        */
        public get drag(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set drag(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
        * The speed at which particles are propelled through the vector field.
        */
        public get vectorFieldSpeed(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set vectorFieldSpeed(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
        * Controls how strongly particles are dragged into the vector field motion.
        */
        public get vectorFieldAttraction(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set vectorFieldAttraction(value: UnityEngine_ParticleSystem.MinMaxCurve);

        private constructor ()
    }

    /**
    * Behaviours are Components that can be enabled or disabled.
    */
    interface Behaviour {

    }

    /**
    * The type of shape used for influencing particles in the Force Field Component.
    */
    enum ParticleSystemForceFieldShape {
        Sphere = 0,
        Hemisphere = 1,
        Cylinder = 2,
        Box = 3 
    }

    /**
    * Class for handling 3D Textures, Use this to create.
    */
    interface Texture3D {

    }

    /**
    * The particle GameObject filtering mode that specifies which objects are used by specific Particle System modules.
    */
    enum ParticleSystemGameObjectFilter {
        LayerMask = 0,
        List = 1,
        LayerMaskAndList = 2 
    }

    /**
    * Specifies Layers to use in a Physics.Raycast.
    */
    interface LayerMask {

    }

    /**
    * The quality of the generated noise.
    */
    enum ParticleSystemNoiseQuality {
        Low = 0,
        Medium = 1,
        High = 2 
    }

    /**
    * The type of collisions to use for a given Particle System.
    */
    enum ParticleSystemCollisionType {
        Planes = 0,
        World = 1 
    }

    /**
    * Whether to use 2D or 3D colliders for particle collisions.
    */
    enum ParticleSystemCollisionMode {
        Collision3D = 0,
        Collision2D = 1 
    }

    /**
    * Quality of world collisions. Medium and low quality are approximate and may leak particles.
    */
    enum ParticleSystemCollisionQuality {
        High = 0,
        Medium = 1,
        Low = 2 
    }

    /**
    * What action to perform when the particle trigger module passes a test.
    */
    enum ParticleSystemOverlapAction {
        Ignore = 0,
        Kill = 1,
        Callback = 2 
    }

    /**
    * Whether collider information is available when using the ParticleSystem::GetTriggerParticles method.
    */
    enum ParticleSystemColliderQueryMode {
        Disabled = 0,
        One = 1,
        All = 2 
    }

    /**
    * The events that cause new particles to be spawned.
    */
    enum ParticleSystemSubEmitterType {
        Birth = 0,
        Collision = 1,
        Death = 2,
        Trigger = 3,
        Manual = 4 
    }

    /**
    * The properties of sub-emitter particles.
    */
    enum ParticleSystemSubEmitterProperties {
        InheritNothing = 0,
        InheritEverything = 31,
        InheritColor = 1,
        InheritSize = 2,
        InheritRotation = 4,
        InheritLifetime = 8,
        InheritDuration = 16 
    }

    /**
    * The animation mode.
    */
    enum ParticleSystemAnimationMode {
        Grid = 0,
        Sprites = 1 
    }

    /**
    * Control how animation frames are selected.
    */
    enum ParticleSystemAnimationTimeMode {
        Lifetime = 0,
        Speed = 1,
        FPS = 2 
    }

    /**
    * The animation type.
    */
    enum ParticleSystemAnimationType {
        WholeSheet = 0,
        SingleRow = 1 
    }

    /**
    * The mode used for selecting rows of an animation in the Texture Sheet Animation Module.
    */
    enum ParticleSystemAnimationRowMode {
        Custom = 0,
        Random = 1,
        MeshIndex = 2 
    }

    /**
    * Script interface for.
    */
    interface Light {

    }

    /**
    * Choose how Particle Trails are generated.
    */
    enum ParticleSystemTrailMode {
        PerParticle = 0,
        Ribbon = 1 
    }

    /**
    * Choose how textures are applied to Particle Trails.
    */
    enum ParticleSystemTrailTextureMode {
        Stretch = 0,
        Tile = 1,
        DistributePerSegment = 2,
        RepeatPerSegment = 3,
        Static = 4 
    }

    /**
    * Which mode CustomDataModule uses to generate its data.
    */
    enum ParticleSystemCustomDataMode {
        Disabled = 0,
        Vector = 1,
        Color = 2 
    }

    /**
    * Method extension for Physics in Particle System.
    */
    class ParticlePhysicsExtensions {

        /**
        * Safe array size for use with ParticleSystem.GetCollisionEvents.
        */
        public static GetSafeCollisionEventSize ($ps: ParticleSystem) : int
        public static GetCollisionEvents ($ps: ParticleSystem, $go: GameObject, $collisionEvents: System_Collections_Generic.List$1<ParticleCollisionEvent>) : int
        /**
        * Safe array size for use with ParticleSystem.GetTriggerParticles.
        * @param ps Particle system.
        * @param type Type of trigger to return size for.
        * @returns Number of particles with this trigger event type.
        */
        public static GetSafeTriggerParticlesSize ($ps: ParticleSystem, $type: ParticleSystemTriggerEventType) : int
        public static GetTriggerParticles ($ps: ParticleSystem, $type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>) : int
        public static GetTriggerParticles ($ps: ParticleSystem, $type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>, $colliderData: $Ref<UnityEngine_ParticleSystem.ColliderData>) : int
        /**
        * @methodSwap SetTriggerParticles_EBB7509C_BAF8ED80
        */
        public static SetTriggerParticles ($ps: ParticleSystem, $type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>, $offset: int, $count: int) : void
        public static SetTriggerParticles ($ps: ParticleSystem, $type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>) : void
    }

    /**
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * Information about a particle collision.
    */
    class ParticleCollisionEvent extends System.ValueType {

        /**
        * Intersection point of the collision in world coordinates.
        */
        public get intersection(): Vector3;
        /**
        * Geometry normal at the intersection point of the collision.
        */
        public get normal(): Vector3;
        /**
        * Incident velocity at the intersection point of the collision.
        */
        public get velocity(): Vector3;
        /**
        * The Collider or Collider2D for the GameObject struck by the particles.
        */
        public get colliderComponent(): Component;

    }

    /**
    * The different types of particle triggers.
    */
    enum ParticleSystemTriggerEventType {
        Inside = 0,
        Outside = 1,
        Enter = 2,
        Exit = 3 
    }

    /**
    * The rendering mode for particle systems.
    */
    enum ParticleSystemRenderMode {
        Billboard = 0,
        Stretch = 1,
        HorizontalBillboard = 2,
        VerticalBillboard = 3,
        Mesh = 4,
        None = 5 
    }

    /**
    * Sets which method Unity uses to randomly assign Meshes to particles.
    */
    enum ParticleSystemMeshDistribution {
        UniformRandom = 0,
        NonUniformRandom = 1 
    }

    /**
    * The sorting mode for particle systems.
    */
    enum ParticleSystemSortMode {
        None = 0,
        Distance = 1,
        OldestInFront = 2,
        YoungestInFront = 3,
        Depth = 4 
    }

    /**
    * How particles are aligned when rendered.
    */
    enum ParticleSystemRenderSpace {
        View = 0,
        World = 1,
        Local = 2,
        Facing = 3,
        Velocity = 4 
    }

    /**
    * All possible Particle System vertex shader inputs.
    */
    enum ParticleSystemVertexStream {
        Position = 0,
        Normal = 1,
        Tangent = 2,
        Color = 3,
        UV = 4,
        UV2 = 5,
        UV3 = 6,
        UV4 = 7,
        AnimBlend = 8,
        AnimFrame = 9,
        Center = 10,
        VertexID = 11,
        SizeX = 12,
        SizeXY = 13,
        SizeXYZ = 14,
        Rotation = 15,
        Rotation3D = 16,
        RotationSpeed = 17,
        RotationSpeed3D = 18,
        Velocity = 19,
        Speed = 20,
        AgePercent = 21,
        InvStartLifetime = 22,
        StableRandomX = 23,
        StableRandomXY = 24,
        StableRandomXYZ = 25,
        StableRandomXYZW = 26,
        VaryingRandomX = 27,
        VaryingRandomXY = 28,
        VaryingRandomXYZ = 29,
        VaryingRandomXYZW = 30,
        Custom1X = 31,
        Custom1XY = 32,
        Custom1XYZ = 33,
        Custom1XYZW = 34,
        Custom2X = 35,
        Custom2XY = 36,
        Custom2XYZ = 37,
        Custom2XYZW = 38,
        NoiseSumX = 39,
        NoiseSumXY = 40,
        NoiseSumXYZ = 41,
        NoiseImpulseX = 42,
        NoiseImpulseXY = 43,
        NoiseImpulseXYZ = 44,
        MeshIndex = 45,
        ParticleIndex = 46,
        ColorPackedAsTwoFloats = 47,
        MeshAxisOfRotation = 48,
        NextTrailCenter = 49,
        PreviousTrailCenter = 50,
        PercentageAlongTrail = 51,
        TrailWidth = 52 
    }

    /**
    * Configure how a Particle System is baked into a mesh.
    */
    enum ParticleSystemBakeMeshOptions {
        BakeRotationAndScale = 1,
        BakePosition = 2,
        Default = 0 
    }

    /**
    * Configure how a Particle System is baked into a texture.
    */
    enum ParticleSystemBakeTextureOptions {
        BakeRotationAndScale = 1,
        BakePosition = 2,
        PerVertex = 4,
        PerParticle = 8,
        IncludeParticleIndices = 16,
        Default = 4 
    }

    /**
    * Use this class to render particles on to the screen.
    */
    class ParticleSystemRenderer extends Renderer {

        /**
        * Control the direction that particles face.
        */
        public get alignment(): ParticleSystemRenderSpace;
        public set alignment(value: ParticleSystemRenderSpace);
        /**
        * Specifies how the system draws particles.
        */
        public get renderMode(): ParticleSystemRenderMode;
        public set renderMode(value: ParticleSystemRenderMode);
        /**
        * Specifies how the system randomly assigns meshes to particles.
        */
        public get meshDistribution(): ParticleSystemMeshDistribution;
        public set meshDistribution(value: ParticleSystemMeshDistribution);
        /**
        * Specifies how to sort particles within a system.
        */
        public get sortMode(): ParticleSystemSortMode;
        public set sortMode(value: ParticleSystemSortMode);
        /**
        * How much are the particles stretched in their direction of motion, defined as the length of the particle compared to its width.
        */
        public get lengthScale(): float;
        public set lengthScale(value: float);
        /**
        * Specifies how much particles stretch depending on their velocity.
        */
        public get velocityScale(): float;
        public set velocityScale(value: float);
        /**
        * How much do the particles stretch depending on the Camera's speed.
        */
        public get cameraVelocityScale(): float;
        public set cameraVelocityScale(value: float);
        /**
        * Specifies how to calculate lighting for the billboard.
        */
        public get normalDirection(): float;
        public set normalDirection(value: float);
        /**
        * Apply a shadow bias to prevent self-shadowing artifacts. The specified value is the proportion of the particle size.
        */
        public get shadowBias(): float;
        public set shadowBias(value: float);
        /**
        * Biases Particle System sorting amongst other transparencies.
        */
        public get sortingFudge(): float;
        public set sortingFudge(value: float);
        /**
        * Clamp the minimum particle size.
        */
        public get minParticleSize(): float;
        public set minParticleSize(value: float);
        /**
        * Clamp the maximum particle size.
        */
        public get maxParticleSize(): float;
        public set maxParticleSize(value: float);
        /**
        * Modify the pivot point used for rotating particles.
        */
        public get pivot(): Vector3;
        public set pivot(value: Vector3);
        /**
        * Flip a percentage of the particles, along each axis.
        */
        public get flip(): Vector3;
        public set flip(value: Vector3);
        /**
        * Specifies how the Particle System Renderer interacts with SpriteMask.
        */
        public get maskInteraction(): SpriteMaskInteraction;
        public set maskInteraction(value: SpriteMaskInteraction);
        /**
        * Set the Material that the TrailModule uses to attach trails to particles.
        */
        public get trailMaterial(): Material;
        public set trailMaterial(value: Material);
        /**
        * Enables GPU Instancing on platforms that support it.
        */
        public get enableGPUInstancing(): boolean;
        public set enableGPUInstancing(value: boolean);
        /**
        * Allow billboard particles to roll around their z-axis.
        */
        public get allowRoll(): boolean;
        public set allowRoll(value: boolean);
        /**
        * Enables freeform stretching behavior.
        */
        public get freeformStretching(): boolean;
        public set freeformStretching(value: boolean);
        /**
        * Rotate the particles based on the direction they are stretched in. This is added on top of other particle rotation.
        */
        public get rotateWithStretchDirection(): boolean;
        public set rotateWithStretchDirection(value: boolean);
        /**
        * The Mesh that the particle uses instead of a billboarded Texture.
        */
        public get mesh(): Mesh;
        public set mesh(value: Mesh);
        /**
        * The number of Meshes the system uses for particle rendering.
        */
        public get meshCount(): int;
        /**
        * The number of currently active custom vertex streams.
        */
        public get activeVertexStreamsCount(): int;
        /**
        * The number of currently active custom trail vertex streams.
        */
        public get activeTrailVertexStreamsCount(): int;

        private constructor ()
        /**
        * Gets the array of Meshes to use when selecting particle meshes.
        * @param meshes An array this function populates with the list of Meshes the ParticleSystemRenderer uses for particle Mesh selection. If the array is smaller than the number of Meshes, this function cannot populate it with every Mesh. If the array is larger than the number of Meshes, this function ignores indices greater than the number of Meshes. Use ParticleSystemRenderer.meshCount to get the number of Meshes the ParticleSystemRenderer has.
        * @returns The number of Meshes this function wrote to the destination array.
        */
        public GetMeshes ($meshes: Mesh[]) : int
        /**
        * Sets the Meshes that the ParticleSystemRenderer uses to display particles when the ParticleSystemRenderer.renderMode is set to ParticleSystemRenderMode.Mesh.
        * @param meshes The array of Meshes to use.
        * @param size The number of elements from the Mesh array to apply.
        * @methodSwap SetMeshes_EBB7509C_AE590518
        */
        public SetMeshes ($meshes: Mesh[], $size: int) : void
        /**
        * Sets the Meshes that the ParticleSystemRenderer uses to display particles when the ParticleSystemRenderer.renderMode is set to ParticleSystemRenderMode.Mesh.
        * @param meshes The array of Meshes to use.
        * @param size The number of elements from the Mesh array to apply.
        */
        public SetMeshes ($meshes: Mesh[]) : void
        /**
        * Gets the array of Mesh weightings to use when randomly selecting particle meshes.
        * @param weightings An array this function populates with the list of Mesh weightings the ParticleSystemRenderer uses for particle Mesh selection. If the array is smaller than the number of weights, this function cannot populate it with every weight. If the array is larger than the number of weights, this function ignores indices greater than the number of weights. Use ParticleSystemRenderer.meshCount to get the number of Meshes, and thus weights, the ParticleSystemRenderer has.
        * @returns The number of weights this function wrote to the destination array.
        */
        public GetMeshWeightings ($weightings: float[]) : int
        /**
        * Sets the weights that the ParticleSystemRenderer uses to assign Meshes to particles.
        * @param weightings The array of weights to use.
        * @param size The number of elements from the weighting array to apply.
        * @methodSwap SetMeshWeightings_EBB7509C_H349C6D19
        */
        public SetMeshWeightings ($weightings: float[], $size: int) : void
        /**
        * Sets the weights that the ParticleSystemRenderer uses to assign Meshes to particles.
        * @param weightings The array of weights to use.
        * @param size The number of elements from the weighting array to apply.
        */
        public SetMeshWeightings ($weightings: float[]) : void
        /**
        * Creates a snapshot of ParticleSystemRenderer and stores it in a mesh.
        * @param mesh A static Mesh to receive the snapshot of the particles.
        * @param camera The Camera used to determine which way camera-space particles face.
        * @param options Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
        * @param useTransform Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
        */
        public BakeMesh ($mesh: Mesh, $options: ParticleSystemBakeMeshOptions) : void
        /**
        * Creates a snapshot of ParticleSystemRenderer and stores it in a mesh.
        * @param mesh A static Mesh to receive the snapshot of the particles.
        * @param camera The Camera used to determine which way camera-space particles face.
        * @param options Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
        * @param useTransform Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
        */
        public BakeMesh ($mesh: Mesh, $camera: Camera, $options: ParticleSystemBakeMeshOptions) : void
        /**
        * Creates a snapshot of ParticleSystem Trails and stores them in a mesh.
        * @param mesh A static Mesh to receive the snapshot of the particle trails.
        * @param camera The Camera used to determine which way camera-space trails face.
        * @param options Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
        * @param useTransform Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
        */
        public BakeTrailsMesh ($mesh: Mesh, $options: ParticleSystemBakeMeshOptions) : void
        /**
        * Creates a snapshot of ParticleSystem Trails and stores them in a mesh.
        * @param mesh A static Mesh to receive the snapshot of the particle trails.
        * @param camera The Camera used to determine which way camera-space trails face.
        * @param options Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
        * @param useTransform Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
        */
        public BakeTrailsMesh ($mesh: Mesh, $camera: Camera, $options: ParticleSystemBakeMeshOptions) : void
        /**
        * Creates a snapshot of ParticleSystemRenderer and stores it in a Texture2D.
        * @param verticesTexture A Texture2D to receive the snapshot of the particle vertices.
        * @param indicesTexture An optional Texture2D to receive the snapshot of the particle indices.
        * @param camera The Camera used to determine which way camera-space particles face.
        * @param options Specifies whether to include the rotation and scale of the Transform in the baked Texture2D.
        * @returns The number of indices used by the Particle System.
        */
        public BakeTexture ($verticesTexture: $Ref<Texture2D>, $options: ParticleSystemBakeTextureOptions) : int
        /**
        * Creates a snapshot of ParticleSystemRenderer and stores it in a Texture2D.
        * @param verticesTexture A Texture2D to receive the snapshot of the particle vertices.
        * @param indicesTexture An optional Texture2D to receive the snapshot of the particle indices.
        * @param camera The Camera used to determine which way camera-space particles face.
        * @param options Specifies whether to include the rotation and scale of the Transform in the baked Texture2D.
        * @returns The number of indices used by the Particle System.
        */
        public BakeTexture ($verticesTexture: $Ref<Texture2D>, $camera: Camera, $options: ParticleSystemBakeTextureOptions) : int
        /**
        * Creates a snapshot of ParticleSystemRenderer and stores it in a Texture2D.
        * @param verticesTexture A Texture2D to receive the snapshot of the particle vertices.
        * @param indicesTexture An optional Texture2D to receive the snapshot of the particle indices.
        * @param camera The Camera used to determine which way camera-space particles face.
        * @param options Specifies whether to include the rotation and scale of the Transform in the baked Texture2D.
        * @returns The number of indices used by the Particle System.
        */
        public BakeTexture ($verticesTexture: $Ref<Texture2D>, $indicesTexture: $Ref<Texture2D>, $options: ParticleSystemBakeTextureOptions) : int
        /**
        * Creates a snapshot of ParticleSystemRenderer and stores it in a Texture2D.
        * @param verticesTexture A Texture2D to receive the snapshot of the particle vertices.
        * @param indicesTexture An optional Texture2D to receive the snapshot of the particle indices.
        * @param camera The Camera used to determine which way camera-space particles face.
        * @param options Specifies whether to include the rotation and scale of the Transform in the baked Texture2D.
        * @returns The number of indices used by the Particle System.
        */
        public BakeTexture ($verticesTexture: $Ref<Texture2D>, $indicesTexture: $Ref<Texture2D>, $camera: Camera, $options: ParticleSystemBakeTextureOptions) : int
        /**
        * Creates a snapshot of ParticleSystem Trails and stores them in a Texture2D.
        * @param verticesTexture A Texture2D to receive the snapshot of the particle trail vertices.
        * @param indicesTexture A Texture2D to receive the snapshot of the particle trail indices.
        * @param camera The Camera used to determine which way camera-space particles face.
        * @param options Specifies whether to include the rotation and scale of the Transform in the baked Texture2D.
        * @returns The number of indices used by the Particle System trails.
        */
        public BakeTrailsTexture ($verticesTexture: $Ref<Texture2D>, $indicesTexture: $Ref<Texture2D>, $options: ParticleSystemBakeTextureOptions) : int
        /**
        * Creates a snapshot of ParticleSystem Trails and stores them in a Texture2D.
        * @param verticesTexture A Texture2D to receive the snapshot of the particle trail vertices.
        * @param indicesTexture A Texture2D to receive the snapshot of the particle trail indices.
        * @param camera The Camera used to determine which way camera-space particles face.
        * @param options Specifies whether to include the rotation and scale of the Transform in the baked Texture2D.
        * @returns The number of indices used by the Particle System trails.
        */
        public BakeTrailsTexture ($verticesTexture: $Ref<Texture2D>, $indicesTexture: $Ref<Texture2D>, $camera: Camera, $options: ParticleSystemBakeTextureOptions) : int
        public SetActiveVertexStreams ($streams: System_Collections_Generic.List$1<ParticleSystemVertexStream>) : void
        public GetActiveVertexStreams ($streams: System_Collections_Generic.List$1<ParticleSystemVertexStream>) : void
        public SetActiveTrailVertexStreams ($streams: System_Collections_Generic.List$1<ParticleSystemVertexStream>) : void
        public GetActiveTrailVertexStreams ($streams: System_Collections_Generic.List$1<ParticleSystemVertexStream>) : void
    }

    /**
    * A Camera is a device through which the player views the world.
    */
    interface Camera {

    }

    /**
    * This enum controls the mode under which the sprite will interact with the masking system.
    */
    enum SpriteMaskInteraction {
        None = 0,
        VisibleInsideMask = 1,
        VisibleOutsideMask = 2 
    }

    /**
    * The material class.
    */
    interface Material {

    }

    interface ParticleSystem {

        /**
        * Safe array size for use with ParticleSystem.GetCollisionEvents.
        * @extension UnityEngine.ParticlePhysicsExtensions.GetSafeCollisionEventSize
        */
        GetSafeCollisionEventSize () : int
        /**
        * @extension UnityEngine.ParticlePhysicsExtensions.GetCollisionEvents
        */
        GetCollisionEvents ($go: GameObject, $collisionEvents: System_Collections_Generic.List$1<ParticleCollisionEvent>) : int
        /**
        * Safe array size for use with ParticleSystem.GetTriggerParticles.
        * @param ps Particle system.
        * @param type Type of trigger to return size for.
        * @returns Number of particles with this trigger event type.
        * @extension UnityEngine.ParticlePhysicsExtensions.GetSafeTriggerParticlesSize
        */
        GetSafeTriggerParticlesSize ($type: ParticleSystemTriggerEventType) : int
        /**
        * @extension UnityEngine.ParticlePhysicsExtensions.GetTriggerParticles
        */
        GetTriggerParticles ($type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>) : int
        /**
        * @extension UnityEngine.ParticlePhysicsExtensions.GetTriggerParticles
        */
        GetTriggerParticles ($type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>, $colliderData: $Ref<UnityEngine_ParticleSystem.ColliderData>) : int
        /**
        * @extension UnityEngine.ParticlePhysicsExtensions.SetTriggerParticles
        * @methodSwap SetTriggerParticles_EBB7509C_BAF8ED80
        */
        SetTriggerParticles ($type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>, $offset: int, $count: int) : void
        /**
        * @extension UnityEngine.ParticlePhysicsExtensions.SetTriggerParticles
        */
        SetTriggerParticles ($type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>) : void
    }

}

declare module 'UnityEngine.ParticleSystem' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering'

    /**
    * Script interface for a Particle.
    */
    class Particle extends System.ValueType {

        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        public get velocity(): UnityEngine.Vector3;
        public set velocity(value: UnityEngine.Vector3);
        public get animatedVelocity(): UnityEngine.Vector3;
        public get totalVelocity(): UnityEngine.Vector3;
        public get remainingLifetime(): float;
        public set remainingLifetime(value: float);
        public get startLifetime(): float;
        public set startLifetime(value: float);
        public get startColor(): UnityEngine.Color32;
        public set startColor(value: UnityEngine.Color32);
        public get randomSeed(): uint;
        public set randomSeed(value: uint);
        public get axisOfRotation(): UnityEngine.Vector3;
        public set axisOfRotation(value: UnityEngine.Vector3);
        public get startSize(): float;
        public set startSize(value: float);
        public get startSize3D(): UnityEngine.Vector3;
        public set startSize3D(value: UnityEngine.Vector3);
        public get rotation(): float;
        public set rotation(value: float);
        public get rotation3D(): UnityEngine.Vector3;
        public set rotation3D(value: UnityEngine.Vector3);
        public get angularVelocity(): float;
        public set angularVelocity(value: float);
        public get angularVelocity3D(): UnityEngine.Vector3;
        public set angularVelocity3D(value: UnityEngine.Vector3);

        public GetCurrentSize ($system: UnityEngine.ParticleSystem) : float
        public GetCurrentSize3D ($system: UnityEngine.ParticleSystem) : UnityEngine.Vector3
        public GetCurrentColor ($system: UnityEngine.ParticleSystem) : UnityEngine.Color32
        public SetMeshIndex ($index: int) : void
        public GetMeshIndex ($system: UnityEngine.ParticleSystem) : int
    }

    /**
    * Script interface for storing the particle playback state.
    */
    class PlaybackState extends System.ValueType {

    }

    /**
    * Script interface for storing the particle trail data.
    */
    class Trails extends System.ValueType {

        public get capacity(): int;
        public set capacity(value: int);

    }

    /**
    * Script interface for Particle System emission parameters.
    */
    class EmitParams extends System.ValueType {

        public get particle(): Particle;
        public set particle(value: Particle);
        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        public get applyShapeToPosition(): boolean;
        public set applyShapeToPosition(value: boolean);
        public get velocity(): UnityEngine.Vector3;
        public set velocity(value: UnityEngine.Vector3);
        public get startLifetime(): float;
        public set startLifetime(value: float);
        public get startSize(): float;
        public set startSize(value: float);
        public get startSize3D(): UnityEngine.Vector3;
        public set startSize3D(value: UnityEngine.Vector3);
        public get axisOfRotation(): UnityEngine.Vector3;
        public set axisOfRotation(value: UnityEngine.Vector3);
        public get rotation(): float;
        public set rotation(value: float);
        public get rotation3D(): UnityEngine.Vector3;
        public set rotation3D(value: UnityEngine.Vector3);
        public get angularVelocity(): float;
        public set angularVelocity(value: float);
        public get angularVelocity3D(): UnityEngine.Vector3;
        public set angularVelocity3D(value: UnityEngine.Vector3);
        public get startColor(): UnityEngine.Color32;
        public set startColor(value: UnityEngine.Color32);
        public get randomSeed(): uint;
        public set randomSeed(value: uint);
        public set meshIndex(value: int);

        public ResetPosition () : void
        public ResetVelocity () : void
        public ResetAxisOfRotation () : void
        public ResetRotation () : void
        public ResetAngularVelocity () : void
        public ResetStartSize () : void
        public ResetStartColor () : void
        public ResetRandomSeed () : void
        public ResetStartLifetime () : void
        public ResetMeshIndex () : void
    }

    /**
    * Script interface for the MainModule of a Particle System.
    */
    class MainModule extends System.ValueType {

        public get emitterVelocity(): UnityEngine.Vector3;
        public set emitterVelocity(value: UnityEngine.Vector3);
        public get duration(): float;
        public set duration(value: float);
        public get loop(): boolean;
        public set loop(value: boolean);
        public get prewarm(): boolean;
        public set prewarm(value: boolean);
        public get startDelay(): MinMaxCurve;
        public set startDelay(value: MinMaxCurve);
        public get startDelayMultiplier(): float;
        public set startDelayMultiplier(value: float);
        public get startLifetime(): MinMaxCurve;
        public set startLifetime(value: MinMaxCurve);
        public get startLifetimeMultiplier(): float;
        public set startLifetimeMultiplier(value: float);
        public get startSpeed(): MinMaxCurve;
        public set startSpeed(value: MinMaxCurve);
        public get startSpeedMultiplier(): float;
        public set startSpeedMultiplier(value: float);
        public get startSize3D(): boolean;
        public set startSize3D(value: boolean);
        public get startSize(): MinMaxCurve;
        public set startSize(value: MinMaxCurve);
        public get startSizeMultiplier(): float;
        public set startSizeMultiplier(value: float);
        public get startSizeX(): MinMaxCurve;
        public set startSizeX(value: MinMaxCurve);
        public get startSizeXMultiplier(): float;
        public set startSizeXMultiplier(value: float);
        public get startSizeY(): MinMaxCurve;
        public set startSizeY(value: MinMaxCurve);
        public get startSizeYMultiplier(): float;
        public set startSizeYMultiplier(value: float);
        public get startSizeZ(): MinMaxCurve;
        public set startSizeZ(value: MinMaxCurve);
        public get startSizeZMultiplier(): float;
        public set startSizeZMultiplier(value: float);
        public get startRotation3D(): boolean;
        public set startRotation3D(value: boolean);
        public get startRotation(): MinMaxCurve;
        public set startRotation(value: MinMaxCurve);
        public get startRotationMultiplier(): float;
        public set startRotationMultiplier(value: float);
        public get startRotationX(): MinMaxCurve;
        public set startRotationX(value: MinMaxCurve);
        public get startRotationXMultiplier(): float;
        public set startRotationXMultiplier(value: float);
        public get startRotationY(): MinMaxCurve;
        public set startRotationY(value: MinMaxCurve);
        public get startRotationYMultiplier(): float;
        public set startRotationYMultiplier(value: float);
        public get startRotationZ(): MinMaxCurve;
        public set startRotationZ(value: MinMaxCurve);
        public get startRotationZMultiplier(): float;
        public set startRotationZMultiplier(value: float);
        public get flipRotation(): float;
        public set flipRotation(value: float);
        public get startColor(): MinMaxGradient;
        public set startColor(value: MinMaxGradient);
        public get gravitySource(): UnityEngine.ParticleSystemGravitySource;
        public set gravitySource(value: UnityEngine.ParticleSystemGravitySource);
        public get gravityModifier(): MinMaxCurve;
        public set gravityModifier(value: MinMaxCurve);
        public get gravityModifierMultiplier(): float;
        public set gravityModifierMultiplier(value: float);
        public get simulationSpace(): UnityEngine.ParticleSystemSimulationSpace;
        public set simulationSpace(value: UnityEngine.ParticleSystemSimulationSpace);
        public get customSimulationSpace(): UnityEngine.Transform;
        public set customSimulationSpace(value: UnityEngine.Transform);
        public get simulationSpeed(): float;
        public set simulationSpeed(value: float);
        public get useUnscaledTime(): boolean;
        public set useUnscaledTime(value: boolean);
        public get scalingMode(): UnityEngine.ParticleSystemScalingMode;
        public set scalingMode(value: UnityEngine.ParticleSystemScalingMode);
        public get playOnAwake(): boolean;
        public set playOnAwake(value: boolean);
        public get maxParticles(): int;
        public set maxParticles(value: int);
        public get emitterVelocityMode(): UnityEngine.ParticleSystemEmitterVelocityMode;
        public set emitterVelocityMode(value: UnityEngine.ParticleSystemEmitterVelocityMode);
        public get stopAction(): UnityEngine.ParticleSystemStopAction;
        public set stopAction(value: UnityEngine.ParticleSystemStopAction);
        public get ringBufferMode(): UnityEngine.ParticleSystemRingBufferMode;
        public set ringBufferMode(value: UnityEngine.ParticleSystemRingBufferMode);
        public get ringBufferLoopRange(): UnityEngine.Vector2;
        public set ringBufferLoopRange(value: UnityEngine.Vector2);
        public get cullingMode(): UnityEngine.ParticleSystemCullingMode;
        public set cullingMode(value: UnityEngine.ParticleSystemCullingMode);

    }

    /**
    * Script interface for a Min-Max Curve.
    */
    class MinMaxCurve extends System.ValueType {

        public get mode(): UnityEngine.ParticleSystemCurveMode;
        public set mode(value: UnityEngine.ParticleSystemCurveMode);
        public get curveMultiplier(): float;
        public set curveMultiplier(value: float);
        public get curveMax(): UnityEngine.AnimationCurve;
        public set curveMax(value: UnityEngine.AnimationCurve);
        public get curveMin(): UnityEngine.AnimationCurve;
        public set curveMin(value: UnityEngine.AnimationCurve);
        public get constantMax(): float;
        public set constantMax(value: float);
        public get constantMin(): float;
        public set constantMin(value: float);
        public get constant(): float;
        public set constant(value: float);
        public get curve(): UnityEngine.AnimationCurve;
        public set curve(value: UnityEngine.AnimationCurve);

        public constructor ($constant: float)
        public constructor ($multiplier: float, $curve: UnityEngine.AnimationCurve)
        public constructor ($multiplier: float, $min: UnityEngine.AnimationCurve, $max: UnityEngine.AnimationCurve)
        public constructor ($min: float, $max: float)
        /**
        * @methodSwap Evaluate_EBB7509C_H82424F3E
        */
        public Evaluate ($time: float) : float
        /**
        * @methodSwap Evaluate_EBB7509C_H1075CF37
        */
        public Evaluate ($time: float, $lerpFactor: float) : float
        public static op_Implicit ($constant: float) : MinMaxCurve
    }

    /**
    * Script interface for a Min-Max Gradient.
    */
    class MinMaxGradient extends System.ValueType {

        public get mode(): UnityEngine.ParticleSystemGradientMode;
        public set mode(value: UnityEngine.ParticleSystemGradientMode);
        public get gradientMax(): UnityEngine.Gradient;
        public set gradientMax(value: UnityEngine.Gradient);
        public get gradientMin(): UnityEngine.Gradient;
        public set gradientMin(value: UnityEngine.Gradient);
        public get colorMax(): UnityEngine.Color;
        public set colorMax(value: UnityEngine.Color);
        public get colorMin(): UnityEngine.Color;
        public set colorMin(value: UnityEngine.Color);
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        public get gradient(): UnityEngine.Gradient;
        public set gradient(value: UnityEngine.Gradient);

        public constructor ($color: UnityEngine.Color)
        public constructor ($gradient: UnityEngine.Gradient)
        public constructor ($min: UnityEngine.Color, $max: UnityEngine.Color)
        public constructor ($min: UnityEngine.Gradient, $max: UnityEngine.Gradient)
        /**
        * @methodSwap Evaluate_EBB7509C_H82424F3E
        */
        public Evaluate ($time: float) : UnityEngine.Color
        /**
        * @methodSwap Evaluate_EBB7509C_H1075CF37
        */
        public Evaluate ($time: float, $lerpFactor: float) : UnityEngine.Color
        public static op_Implicit ($color: UnityEngine.Color) : MinMaxGradient
        public static op_Implicit ($gradient: UnityEngine.Gradient) : MinMaxGradient
    }

    /**
    * Script interface for the EmissionModule of a Particle System.
    */
    class EmissionModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get rateOverTime(): MinMaxCurve;
        public set rateOverTime(value: MinMaxCurve);
        public get rateOverTimeMultiplier(): float;
        public set rateOverTimeMultiplier(value: float);
        public get rateOverDistance(): MinMaxCurve;
        public set rateOverDistance(value: MinMaxCurve);
        public get rateOverDistanceMultiplier(): float;
        public set rateOverDistanceMultiplier(value: float);
        public get burstCount(): int;
        public set burstCount(value: int);

        public SetBursts ($bursts: Burst[]) : void
        /**
        * @methodSwap SetBursts_EBB7509C_F17B06A7
        */
        public SetBursts ($bursts: Burst[], $size: int) : void
        public GetBursts ($bursts: Burst[]) : int
        public SetBurst ($index: int, $burst: Burst) : void
        public GetBurst ($index: int) : Burst
    }

    /**
    * Script interface for a Burst.
    */
    class Burst extends System.ValueType {

        public get time(): float;
        public set time(value: float);
        public get count(): MinMaxCurve;
        public set count(value: MinMaxCurve);
        public get minCount(): short;
        public set minCount(value: short);
        public get maxCount(): short;
        public set maxCount(value: short);
        public get cycleCount(): int;
        public set cycleCount(value: int);
        public get repeatInterval(): float;
        public set repeatInterval(value: float);
        public get probability(): float;
        public set probability(value: float);

        public constructor ($_time: float, $_count: short)
        public constructor ($_time: float, $_minCount: short, $_maxCount: short)
        public constructor ($_time: float, $_minCount: short, $_maxCount: short, $_cycleCount: int, $_repeatInterval: float)
        public constructor ($_time: float, $_count: MinMaxCurve)
        public constructor ($_time: float, $_count: MinMaxCurve, $_cycleCount: int, $_repeatInterval: float)
    }

    /**
    * Script interface for the ShapeModule.
    */
    class ShapeModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get shapeType(): UnityEngine.ParticleSystemShapeType;
        public set shapeType(value: UnityEngine.ParticleSystemShapeType);
        public get randomDirectionAmount(): float;
        public set randomDirectionAmount(value: float);
        public get sphericalDirectionAmount(): float;
        public set sphericalDirectionAmount(value: float);
        public get randomPositionAmount(): float;
        public set randomPositionAmount(value: float);
        public get alignToDirection(): boolean;
        public set alignToDirection(value: boolean);
        public get radius(): float;
        public set radius(value: float);
        public get radiusMode(): UnityEngine.ParticleSystemShapeMultiModeValue;
        public set radiusMode(value: UnityEngine.ParticleSystemShapeMultiModeValue);
        public get radiusSpread(): float;
        public set radiusSpread(value: float);
        public get radiusSpeed(): MinMaxCurve;
        public set radiusSpeed(value: MinMaxCurve);
        public get radiusSpeedMultiplier(): float;
        public set radiusSpeedMultiplier(value: float);
        public get radiusThickness(): float;
        public set radiusThickness(value: float);
        public get angle(): float;
        public set angle(value: float);
        public get length(): float;
        public set length(value: float);
        public get boxThickness(): UnityEngine.Vector3;
        public set boxThickness(value: UnityEngine.Vector3);
        public get meshShapeType(): UnityEngine.ParticleSystemMeshShapeType;
        public set meshShapeType(value: UnityEngine.ParticleSystemMeshShapeType);
        public get mesh(): UnityEngine.Mesh;
        public set mesh(value: UnityEngine.Mesh);
        public get meshRenderer(): UnityEngine.MeshRenderer;
        public set meshRenderer(value: UnityEngine.MeshRenderer);
        public get skinnedMeshRenderer(): UnityEngine.SkinnedMeshRenderer;
        public set skinnedMeshRenderer(value: UnityEngine.SkinnedMeshRenderer);
        public get sprite(): UnityEngine.Sprite;
        public set sprite(value: UnityEngine.Sprite);
        public get spriteRenderer(): UnityEngine.SpriteRenderer;
        public set spriteRenderer(value: UnityEngine.SpriteRenderer);
        public get useMeshMaterialIndex(): boolean;
        public set useMeshMaterialIndex(value: boolean);
        public get meshMaterialIndex(): int;
        public set meshMaterialIndex(value: int);
        public get useMeshColors(): boolean;
        public set useMeshColors(value: boolean);
        public get normalOffset(): float;
        public set normalOffset(value: float);
        public get meshSpawnMode(): UnityEngine.ParticleSystemShapeMultiModeValue;
        public set meshSpawnMode(value: UnityEngine.ParticleSystemShapeMultiModeValue);
        public get meshSpawnSpread(): float;
        public set meshSpawnSpread(value: float);
        public get meshSpawnSpeed(): MinMaxCurve;
        public set meshSpawnSpeed(value: MinMaxCurve);
        public get meshSpawnSpeedMultiplier(): float;
        public set meshSpawnSpeedMultiplier(value: float);
        public get arc(): float;
        public set arc(value: float);
        public get arcMode(): UnityEngine.ParticleSystemShapeMultiModeValue;
        public set arcMode(value: UnityEngine.ParticleSystemShapeMultiModeValue);
        public get arcSpread(): float;
        public set arcSpread(value: float);
        public get arcSpeed(): MinMaxCurve;
        public set arcSpeed(value: MinMaxCurve);
        public get arcSpeedMultiplier(): float;
        public set arcSpeedMultiplier(value: float);
        public get donutRadius(): float;
        public set donutRadius(value: float);
        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        public get rotation(): UnityEngine.Vector3;
        public set rotation(value: UnityEngine.Vector3);
        public get scale(): UnityEngine.Vector3;
        public set scale(value: UnityEngine.Vector3);
        public get texture(): UnityEngine.Texture2D;
        public set texture(value: UnityEngine.Texture2D);
        public get textureClipChannel(): UnityEngine.ParticleSystemShapeTextureChannel;
        public set textureClipChannel(value: UnityEngine.ParticleSystemShapeTextureChannel);
        public get textureClipThreshold(): float;
        public set textureClipThreshold(value: float);
        public get textureColorAffectsParticles(): boolean;
        public set textureColorAffectsParticles(value: boolean);
        public get textureAlphaAffectsParticles(): boolean;
        public set textureAlphaAffectsParticles(value: boolean);
        public get textureBilinearFiltering(): boolean;
        public set textureBilinearFiltering(value: boolean);
        public get textureUVChannel(): int;
        public set textureUVChannel(value: int);

    }

    /**
    * Script interface for the VelocityOverLifetimeModule.
    */
    class VelocityOverLifetimeModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        public get xMultiplier(): float;
        public set xMultiplier(value: float);
        public get yMultiplier(): float;
        public set yMultiplier(value: float);
        public get zMultiplier(): float;
        public set zMultiplier(value: float);
        public get orbitalX(): MinMaxCurve;
        public set orbitalX(value: MinMaxCurve);
        public get orbitalY(): MinMaxCurve;
        public set orbitalY(value: MinMaxCurve);
        public get orbitalZ(): MinMaxCurve;
        public set orbitalZ(value: MinMaxCurve);
        public get orbitalXMultiplier(): float;
        public set orbitalXMultiplier(value: float);
        public get orbitalYMultiplier(): float;
        public set orbitalYMultiplier(value: float);
        public get orbitalZMultiplier(): float;
        public set orbitalZMultiplier(value: float);
        public get orbitalOffsetX(): MinMaxCurve;
        public set orbitalOffsetX(value: MinMaxCurve);
        public get orbitalOffsetY(): MinMaxCurve;
        public set orbitalOffsetY(value: MinMaxCurve);
        public get orbitalOffsetZ(): MinMaxCurve;
        public set orbitalOffsetZ(value: MinMaxCurve);
        public get orbitalOffsetXMultiplier(): float;
        public set orbitalOffsetXMultiplier(value: float);
        public get orbitalOffsetYMultiplier(): float;
        public set orbitalOffsetYMultiplier(value: float);
        public get orbitalOffsetZMultiplier(): float;
        public set orbitalOffsetZMultiplier(value: float);
        public get radial(): MinMaxCurve;
        public set radial(value: MinMaxCurve);
        public get radialMultiplier(): float;
        public set radialMultiplier(value: float);
        public get speedModifier(): MinMaxCurve;
        public set speedModifier(value: MinMaxCurve);
        public get speedModifierMultiplier(): float;
        public set speedModifierMultiplier(value: float);
        public get space(): UnityEngine.ParticleSystemSimulationSpace;
        public set space(value: UnityEngine.ParticleSystemSimulationSpace);

    }

    /**
    * Script interface for the Limit Velocity Over Lifetime module.
    */
    class LimitVelocityOverLifetimeModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get limitX(): MinMaxCurve;
        public set limitX(value: MinMaxCurve);
        public get limitXMultiplier(): float;
        public set limitXMultiplier(value: float);
        public get limitY(): MinMaxCurve;
        public set limitY(value: MinMaxCurve);
        public get limitYMultiplier(): float;
        public set limitYMultiplier(value: float);
        public get limitZ(): MinMaxCurve;
        public set limitZ(value: MinMaxCurve);
        public get limitZMultiplier(): float;
        public set limitZMultiplier(value: float);
        public get limit(): MinMaxCurve;
        public set limit(value: MinMaxCurve);
        public get limitMultiplier(): float;
        public set limitMultiplier(value: float);
        public get dampen(): float;
        public set dampen(value: float);
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);
        public get space(): UnityEngine.ParticleSystemSimulationSpace;
        public set space(value: UnityEngine.ParticleSystemSimulationSpace);
        public get drag(): MinMaxCurve;
        public set drag(value: MinMaxCurve);
        public get dragMultiplier(): float;
        public set dragMultiplier(value: float);
        public get multiplyDragByParticleSize(): boolean;
        public set multiplyDragByParticleSize(value: boolean);
        public get multiplyDragByParticleVelocity(): boolean;
        public set multiplyDragByParticleVelocity(value: boolean);

    }

    /**
    * The Inherit Velocity Module controls how the velocity of the emitter is transferred to the particles as they are emitted.
    */
    class InheritVelocityModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get mode(): UnityEngine.ParticleSystemInheritVelocityMode;
        public set mode(value: UnityEngine.ParticleSystemInheritVelocityMode);
        public get curve(): MinMaxCurve;
        public set curve(value: MinMaxCurve);
        public get curveMultiplier(): float;
        public set curveMultiplier(value: float);

    }

    /**
    * The Lifetime By Emitter Speed Module controls the initial lifetime of each particle based on the speed of the emitter when the particle was spawned.
    */
    class LifetimeByEmitterSpeedModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get curve(): MinMaxCurve;
        public set curve(value: MinMaxCurve);
        public get curveMultiplier(): float;
        public set curveMultiplier(value: float);
        public get range(): UnityEngine.Vector2;
        public set range(value: UnityEngine.Vector2);

    }

    /**
    * Script interface for the ForceOverLifetimeModule of a Particle System.
    */
    class ForceOverLifetimeModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        public get xMultiplier(): float;
        public set xMultiplier(value: float);
        public get yMultiplier(): float;
        public set yMultiplier(value: float);
        public get zMultiplier(): float;
        public set zMultiplier(value: float);
        public get space(): UnityEngine.ParticleSystemSimulationSpace;
        public set space(value: UnityEngine.ParticleSystemSimulationSpace);
        public get randomized(): boolean;
        public set randomized(value: boolean);

    }

    /**
    * Script interface for the ColorOverLifetimeModule of a Particle System.
    */
    class ColorOverLifetimeModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get color(): MinMaxGradient;
        public set color(value: MinMaxGradient);

    }

    /**
    * Script interface for the ColorBySpeedModule of a Particle System.
    */
    class ColorBySpeedModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get color(): MinMaxGradient;
        public set color(value: MinMaxGradient);
        public get range(): UnityEngine.Vector2;
        public set range(value: UnityEngine.Vector2);

    }

    /**
    * Script interface for the SizeOverLifetimeModule.
    */
    class SizeOverLifetimeModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get size(): MinMaxCurve;
        public set size(value: MinMaxCurve);
        public get sizeMultiplier(): float;
        public set sizeMultiplier(value: float);
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        public get xMultiplier(): float;
        public set xMultiplier(value: float);
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        public get yMultiplier(): float;
        public set yMultiplier(value: float);
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        public get zMultiplier(): float;
        public set zMultiplier(value: float);
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);

    }

    /**
    * Script interface for the SizeBySpeedModule.
    */
    class SizeBySpeedModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get size(): MinMaxCurve;
        public set size(value: MinMaxCurve);
        public get sizeMultiplier(): float;
        public set sizeMultiplier(value: float);
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        public get xMultiplier(): float;
        public set xMultiplier(value: float);
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        public get yMultiplier(): float;
        public set yMultiplier(value: float);
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        public get zMultiplier(): float;
        public set zMultiplier(value: float);
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);
        public get range(): UnityEngine.Vector2;
        public set range(value: UnityEngine.Vector2);

    }

    /**
    * Script interface for the RotationOverLifetimeModule.
    */
    class RotationOverLifetimeModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        public get xMultiplier(): float;
        public set xMultiplier(value: float);
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        public get yMultiplier(): float;
        public set yMultiplier(value: float);
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        public get zMultiplier(): float;
        public set zMultiplier(value: float);
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);

    }

    /**
    * Script interface for the RotationBySpeedModule.
    */
    class RotationBySpeedModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        public get xMultiplier(): float;
        public set xMultiplier(value: float);
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        public get yMultiplier(): float;
        public set yMultiplier(value: float);
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        public get zMultiplier(): float;
        public set zMultiplier(value: float);
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);
        public get range(): UnityEngine.Vector2;
        public set range(value: UnityEngine.Vector2);

    }

    /**
    * Script interface for the ExternalForcesModule of a Particle System.
    */
    class ExternalForcesModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get multiplier(): float;
        public set multiplier(value: float);
        public get multiplierCurve(): MinMaxCurve;
        public set multiplierCurve(value: MinMaxCurve);
        public get influenceFilter(): UnityEngine.ParticleSystemGameObjectFilter;
        public set influenceFilter(value: UnityEngine.ParticleSystemGameObjectFilter);
        public get influenceMask(): UnityEngine.LayerMask;
        public set influenceMask(value: UnityEngine.LayerMask);
        public get influenceCount(): int;

        public IsAffectedBy ($field: UnityEngine.ParticleSystemForceField) : boolean
        public AddInfluence ($field: UnityEngine.ParticleSystemForceField) : void
        /**
        * @methodSwap RemoveInfluence_EBB7509C_F92D023A
        */
        public RemoveInfluence ($index: int) : void
        public RemoveInfluence ($field: UnityEngine.ParticleSystemForceField) : void
        public RemoveAllInfluences () : void
        public SetInfluence ($index: int, $field: UnityEngine.ParticleSystemForceField) : void
        public GetInfluence ($index: int) : UnityEngine.ParticleSystemForceField
    }

    /**
    * Script interface for the NoiseModule.
    */
    class NoiseModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);
        public get strength(): MinMaxCurve;
        public set strength(value: MinMaxCurve);
        public get strengthMultiplier(): float;
        public set strengthMultiplier(value: float);
        public get strengthX(): MinMaxCurve;
        public set strengthX(value: MinMaxCurve);
        public get strengthXMultiplier(): float;
        public set strengthXMultiplier(value: float);
        public get strengthY(): MinMaxCurve;
        public set strengthY(value: MinMaxCurve);
        public get strengthYMultiplier(): float;
        public set strengthYMultiplier(value: float);
        public get strengthZ(): MinMaxCurve;
        public set strengthZ(value: MinMaxCurve);
        public get strengthZMultiplier(): float;
        public set strengthZMultiplier(value: float);
        public get frequency(): float;
        public set frequency(value: float);
        public get damping(): boolean;
        public set damping(value: boolean);
        public get octaveCount(): int;
        public set octaveCount(value: int);
        public get octaveMultiplier(): float;
        public set octaveMultiplier(value: float);
        public get octaveScale(): float;
        public set octaveScale(value: float);
        public get quality(): UnityEngine.ParticleSystemNoiseQuality;
        public set quality(value: UnityEngine.ParticleSystemNoiseQuality);
        public get scrollSpeed(): MinMaxCurve;
        public set scrollSpeed(value: MinMaxCurve);
        public get scrollSpeedMultiplier(): float;
        public set scrollSpeedMultiplier(value: float);
        public get remapEnabled(): boolean;
        public set remapEnabled(value: boolean);
        public get remap(): MinMaxCurve;
        public set remap(value: MinMaxCurve);
        public get remapMultiplier(): float;
        public set remapMultiplier(value: float);
        public get remapX(): MinMaxCurve;
        public set remapX(value: MinMaxCurve);
        public get remapXMultiplier(): float;
        public set remapXMultiplier(value: float);
        public get remapY(): MinMaxCurve;
        public set remapY(value: MinMaxCurve);
        public get remapYMultiplier(): float;
        public set remapYMultiplier(value: float);
        public get remapZ(): MinMaxCurve;
        public set remapZ(value: MinMaxCurve);
        public get remapZMultiplier(): float;
        public set remapZMultiplier(value: float);
        public get positionAmount(): MinMaxCurve;
        public set positionAmount(value: MinMaxCurve);
        public get rotationAmount(): MinMaxCurve;
        public set rotationAmount(value: MinMaxCurve);
        public get sizeAmount(): MinMaxCurve;
        public set sizeAmount(value: MinMaxCurve);

    }

    /**
    * Script interface for the CollisionModule of a Particle System.
    */
    class CollisionModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get type(): UnityEngine.ParticleSystemCollisionType;
        public set type(value: UnityEngine.ParticleSystemCollisionType);
        public get mode(): UnityEngine.ParticleSystemCollisionMode;
        public set mode(value: UnityEngine.ParticleSystemCollisionMode);
        public get dampen(): MinMaxCurve;
        public set dampen(value: MinMaxCurve);
        public get dampenMultiplier(): float;
        public set dampenMultiplier(value: float);
        public get bounce(): MinMaxCurve;
        public set bounce(value: MinMaxCurve);
        public get bounceMultiplier(): float;
        public set bounceMultiplier(value: float);
        public get lifetimeLoss(): MinMaxCurve;
        public set lifetimeLoss(value: MinMaxCurve);
        public get lifetimeLossMultiplier(): float;
        public set lifetimeLossMultiplier(value: float);
        public get minKillSpeed(): float;
        public set minKillSpeed(value: float);
        public get maxKillSpeed(): float;
        public set maxKillSpeed(value: float);
        public get collidesWith(): UnityEngine.LayerMask;
        public set collidesWith(value: UnityEngine.LayerMask);
        public get enableDynamicColliders(): boolean;
        public set enableDynamicColliders(value: boolean);
        public get maxCollisionShapes(): int;
        public set maxCollisionShapes(value: int);
        public get quality(): UnityEngine.ParticleSystemCollisionQuality;
        public set quality(value: UnityEngine.ParticleSystemCollisionQuality);
        public get voxelSize(): float;
        public set voxelSize(value: float);
        public get radiusScale(): float;
        public set radiusScale(value: float);
        public get sendCollisionMessages(): boolean;
        public set sendCollisionMessages(value: boolean);
        public get colliderForce(): float;
        public set colliderForce(value: float);
        public get multiplyColliderForceByCollisionAngle(): boolean;
        public set multiplyColliderForceByCollisionAngle(value: boolean);
        public get multiplyColliderForceByParticleSpeed(): boolean;
        public set multiplyColliderForceByParticleSpeed(value: boolean);
        public get multiplyColliderForceByParticleSize(): boolean;
        public set multiplyColliderForceByParticleSize(value: boolean);
        public get planeCount(): int;

        public AddPlane ($transform: UnityEngine.Transform) : void
        /**
        * @methodSwap RemovePlane_EBB7509C_F92D023A
        */
        public RemovePlane ($index: int) : void
        public RemovePlane ($transform: UnityEngine.Transform) : void
        public SetPlane ($index: int, $transform: UnityEngine.Transform) : void
        public GetPlane ($index: int) : UnityEngine.Transform
    }

    /**
    * Script interface for the TriggerModule.
    */
    class TriggerModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get inside(): UnityEngine.ParticleSystemOverlapAction;
        public set inside(value: UnityEngine.ParticleSystemOverlapAction);
        public get outside(): UnityEngine.ParticleSystemOverlapAction;
        public set outside(value: UnityEngine.ParticleSystemOverlapAction);
        public get enter(): UnityEngine.ParticleSystemOverlapAction;
        public set enter(value: UnityEngine.ParticleSystemOverlapAction);
        public get exit(): UnityEngine.ParticleSystemOverlapAction;
        public set exit(value: UnityEngine.ParticleSystemOverlapAction);
        public get colliderQueryMode(): UnityEngine.ParticleSystemColliderQueryMode;
        public set colliderQueryMode(value: UnityEngine.ParticleSystemColliderQueryMode);
        public get radiusScale(): float;
        public set radiusScale(value: float);
        public get colliderCount(): int;

        public AddCollider ($collider: UnityEngine.Component) : void
        /**
        * @methodSwap RemoveCollider_EBB7509C_F92D023A
        */
        public RemoveCollider ($index: int) : void
        public RemoveCollider ($collider: UnityEngine.Component) : void
        public SetCollider ($index: int, $collider: UnityEngine.Component) : void
        public GetCollider ($index: int) : UnityEngine.Component
    }

    /**
    * Script interface for the SubEmittersModule.
    */
    class SubEmittersModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get subEmittersCount(): int;

        /**
        * @methodSwap AddSubEmitter_EBB7509C_H61467489
        */
        public AddSubEmitter ($subEmitter: UnityEngine.ParticleSystem, $type: UnityEngine.ParticleSystemSubEmitterType, $properties: UnityEngine.ParticleSystemSubEmitterProperties, $emitProbability: float) : void
        public AddSubEmitter ($subEmitter: UnityEngine.ParticleSystem, $type: UnityEngine.ParticleSystemSubEmitterType, $properties: UnityEngine.ParticleSystemSubEmitterProperties) : void
        /**
        * @methodSwap RemoveSubEmitter_EBB7509C_F92D023A
        */
        public RemoveSubEmitter ($index: int) : void
        public RemoveSubEmitter ($subEmitter: UnityEngine.ParticleSystem) : void
        public SetSubEmitterSystem ($index: int, $subEmitter: UnityEngine.ParticleSystem) : void
        public SetSubEmitterType ($index: int, $type: UnityEngine.ParticleSystemSubEmitterType) : void
        public SetSubEmitterProperties ($index: int, $properties: UnityEngine.ParticleSystemSubEmitterProperties) : void
        public SetSubEmitterEmitProbability ($index: int, $emitProbability: float) : void
        public GetSubEmitterSystem ($index: int) : UnityEngine.ParticleSystem
        public GetSubEmitterType ($index: int) : UnityEngine.ParticleSystemSubEmitterType
        public GetSubEmitterProperties ($index: int) : UnityEngine.ParticleSystemSubEmitterProperties
        public GetSubEmitterEmitProbability ($index: int) : float
    }

    /**
    * Script interface for the TextureSheetAnimationModule.
    */
    class TextureSheetAnimationModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get mode(): UnityEngine.ParticleSystemAnimationMode;
        public set mode(value: UnityEngine.ParticleSystemAnimationMode);
        public get timeMode(): UnityEngine.ParticleSystemAnimationTimeMode;
        public set timeMode(value: UnityEngine.ParticleSystemAnimationTimeMode);
        public get fps(): float;
        public set fps(value: float);
        public get numTilesX(): int;
        public set numTilesX(value: int);
        public get numTilesY(): int;
        public set numTilesY(value: int);
        public get animation(): UnityEngine.ParticleSystemAnimationType;
        public set animation(value: UnityEngine.ParticleSystemAnimationType);
        public get rowMode(): UnityEngine.ParticleSystemAnimationRowMode;
        public set rowMode(value: UnityEngine.ParticleSystemAnimationRowMode);
        public get frameOverTime(): MinMaxCurve;
        public set frameOverTime(value: MinMaxCurve);
        public get frameOverTimeMultiplier(): float;
        public set frameOverTimeMultiplier(value: float);
        public get startFrame(): MinMaxCurve;
        public set startFrame(value: MinMaxCurve);
        public get startFrameMultiplier(): float;
        public set startFrameMultiplier(value: float);
        public get cycleCount(): int;
        public set cycleCount(value: int);
        public get rowIndex(): int;
        public set rowIndex(value: int);
        public get uvChannelMask(): UnityEngine_Rendering.UVChannelFlags;
        public set uvChannelMask(value: UnityEngine_Rendering.UVChannelFlags);
        public get spriteCount(): int;
        public get speedRange(): UnityEngine.Vector2;
        public set speedRange(value: UnityEngine.Vector2);

        public AddSprite ($sprite: UnityEngine.Sprite) : void
        public RemoveSprite ($index: int) : void
        public SetSprite ($index: int, $sprite: UnityEngine.Sprite) : void
        public GetSprite ($index: int) : UnityEngine.Sprite
    }

    /**
    * Access the ParticleSystem Lights Module.
    */
    class LightsModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get ratio(): float;
        public set ratio(value: float);
        public get useRandomDistribution(): boolean;
        public set useRandomDistribution(value: boolean);
        public get light(): UnityEngine.Light;
        public set light(value: UnityEngine.Light);
        public get useParticleColor(): boolean;
        public set useParticleColor(value: boolean);
        public get sizeAffectsRange(): boolean;
        public set sizeAffectsRange(value: boolean);
        public get alphaAffectsIntensity(): boolean;
        public set alphaAffectsIntensity(value: boolean);
        public get range(): MinMaxCurve;
        public set range(value: MinMaxCurve);
        public get rangeMultiplier(): float;
        public set rangeMultiplier(value: float);
        public get intensity(): MinMaxCurve;
        public set intensity(value: MinMaxCurve);
        public get intensityMultiplier(): float;
        public set intensityMultiplier(value: float);
        public get maxLights(): int;
        public set maxLights(value: int);

    }

    /**
    * Script interface for the TrailsModule.
    */
    class TrailModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);
        public get mode(): UnityEngine.ParticleSystemTrailMode;
        public set mode(value: UnityEngine.ParticleSystemTrailMode);
        public get ratio(): float;
        public set ratio(value: float);
        public get lifetime(): MinMaxCurve;
        public set lifetime(value: MinMaxCurve);
        public get lifetimeMultiplier(): float;
        public set lifetimeMultiplier(value: float);
        public get minVertexDistance(): float;
        public set minVertexDistance(value: float);
        public get textureMode(): UnityEngine.ParticleSystemTrailTextureMode;
        public set textureMode(value: UnityEngine.ParticleSystemTrailTextureMode);
        public get textureScale(): UnityEngine.Vector2;
        public set textureScale(value: UnityEngine.Vector2);
        public get worldSpace(): boolean;
        public set worldSpace(value: boolean);
        public get dieWithParticles(): boolean;
        public set dieWithParticles(value: boolean);
        public get sizeAffectsWidth(): boolean;
        public set sizeAffectsWidth(value: boolean);
        public get sizeAffectsLifetime(): boolean;
        public set sizeAffectsLifetime(value: boolean);
        public get inheritParticleColor(): boolean;
        public set inheritParticleColor(value: boolean);
        public get colorOverLifetime(): MinMaxGradient;
        public set colorOverLifetime(value: MinMaxGradient);
        public get widthOverTrail(): MinMaxCurve;
        public set widthOverTrail(value: MinMaxCurve);
        public get widthOverTrailMultiplier(): float;
        public set widthOverTrailMultiplier(value: float);
        public get colorOverTrail(): MinMaxGradient;
        public set colorOverTrail(value: MinMaxGradient);
        public get generateLightingData(): boolean;
        public set generateLightingData(value: boolean);
        public get ribbonCount(): int;
        public set ribbonCount(value: int);
        public get shadowBias(): float;
        public set shadowBias(value: float);
        public get splitSubEmitterRibbons(): boolean;
        public set splitSubEmitterRibbons(value: boolean);
        public get attachRibbonsToTransform(): boolean;
        public set attachRibbonsToTransform(value: boolean);

    }

    /**
    * Script interface for the CustomDataModule of a Particle System.
    */
    class CustomDataModule extends System.ValueType {

        public get enabled(): boolean;
        public set enabled(value: boolean);

        public SetMode ($stream: UnityEngine.ParticleSystemCustomData, $mode: UnityEngine.ParticleSystemCustomDataMode) : void
        public GetMode ($stream: UnityEngine.ParticleSystemCustomData) : UnityEngine.ParticleSystemCustomDataMode
        public SetVectorComponentCount ($stream: UnityEngine.ParticleSystemCustomData, $count: int) : void
        public GetVectorComponentCount ($stream: UnityEngine.ParticleSystemCustomData) : int
        public SetVector ($stream: UnityEngine.ParticleSystemCustomData, $component: int, $curve: MinMaxCurve) : void
        public GetVector ($stream: UnityEngine.ParticleSystemCustomData, $component: int) : MinMaxCurve
        public SetColor ($stream: UnityEngine.ParticleSystemCustomData, $gradient: MinMaxGradient) : void
        public GetColor ($stream: UnityEngine.ParticleSystemCustomData) : MinMaxGradient
    }

    /**
    * Script interface for particle Collider data.
    */
    class ColliderData extends System.ValueType {

        public GetColliderCount ($particleIndex: int) : int
        public GetCollider ($particleIndex: int, $colliderIndex: int) : UnityEngine.Component
    }

}

declare module 'System' {

    interface IFormattable {

    }

    interface IEquatable$1<T> {

    }

    interface IDisposable {

    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IComparable {

    }

    interface IConvertible {

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

declare module 'UnityEngine.Rendering' {

    /**
    * A flag representing each UV channel.
    */
    enum UVChannelFlags {
        UV0 = 1,
        UV1 = 2,
        UV2 = 4,
        UV3 = 8 
    }

}

declare module 'UnityEngine.ParticleSystemJobs' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as Unity_Collections from 'Unity.Collections'
    import * as Unity_Jobs from 'Unity.Jobs'

    /**
    * Inherit from this interface to implement a Particle System job.
    */
    interface IJobParticleSystem {

        /**
        * Implement this method to access and modify particle properties.
        * @param jobData Contains the particle properties.
        */
        Execute? ($jobData: ParticleSystemJobData) : void
    }

    /**
    * This struct specifies all the per-particle data.
    */
    class ParticleSystemJobData extends System.ValueType {

        /**
        * Specifies the number of particles alive in the Particle System.
        */
        public get count(): int;
        /**
        * The position of each particle.
        */
        public get positions(): ParticleSystemNativeArray3;
        /**
        * The velocity of each particle.
        */
        public get velocities(): ParticleSystemNativeArray3;
        /**
        * Specifies an axis of rotation for each particles, in radians.
        */
        public get axisOfRotations(): ParticleSystemNativeArray3;
        /**
        * The rotation of each particle.
        */
        public get rotations(): ParticleSystemNativeArray3;
        /**
        * The angular velocity of each particle.
        */
        public get rotationalSpeeds(): ParticleSystemNativeArray3;
        /**
        * The size of each particle.
        */
        public get sizes(): ParticleSystemNativeArray3;
        /**
        * The initial color of each particle.
        */
        public get startColors(): Unity_Collections.NativeArray$1<UnityEngine.Color32>;
        /**
        * Specifies how long each particle has been alive.
        */
        public get aliveTimePercent(): Unity_Collections.NativeArray$1<float>;
        /**
        * The lifetime of each particle, stored as 1.0f / lifetime.
        */
        public get inverseStartLifetimes(): Unity_Collections.NativeArray$1<float>;
        /**
        * The random seed assigned to each particle.
        */
        public get randomSeeds(): Unity_Collections.NativeArray$1<uint>;
        /**
        * This array contains the custom data values when you use a CustomDataModule, or when you call SetCustomParticleData.
        */
        public get customData1(): ParticleSystemNativeArray4;
        /**
        * This array contains the custom data values when you use a CustomDataModule, or when you call SetCustomParticleData.
        */
        public get customData2(): ParticleSystemNativeArray4;
        /**
        * Specifies a mesh index for each particle.
        */
        public get meshIndices(): Unity_Collections.NativeArray$1<int>;

    }

    /**
    * A container to hold x, y, and z-axis data for particles.
    */
    class ParticleSystemNativeArray3 extends System.ValueType {

        /**
        * The x-axis value for each particle.
        */
        public x : Unity_Collections.NativeArray$1<float>
        /**
        * The y-axis value for each particle.
        */
        public y : Unity_Collections.NativeArray$1<float>
        /**
        * The z-axis value for each particle.
        */
        public z : Unity_Collections.NativeArray$1<float>

        public get_Item ($index: int) : UnityEngine.Vector3
        public set_Item ($index: int, $value: UnityEngine.Vector3) : void
    }

    /**
    * A container to hold 4 arrays of data for particles.
    */
    class ParticleSystemNativeArray4 extends System.ValueType {

        /**
        * The x-axis value for each particle.
        */
        public x : Unity_Collections.NativeArray$1<float>
        /**
        * The y-axis value for each particle.
        */
        public y : Unity_Collections.NativeArray$1<float>
        /**
        * The z-axis value for each particle.
        */
        public z : Unity_Collections.NativeArray$1<float>
        /**
        * The w-axis value for each particle.
        */
        public w : Unity_Collections.NativeArray$1<float>

        public get_Item ($index: int) : UnityEngine.Vector4
        public set_Item ($index: int, $value: UnityEngine.Vector4) : void
    }

    /**
    * Inherit from this interface to implement a Particle System job.
    */
    interface IJobParticleSystemParallelFor {

        /**
        * Implement this method to access and modify particle properties.
        * @param jobData Contains the particle properties.
        * @param index The index of the current particle.
        */
        Execute? ($jobData: ParticleSystemJobData, $index: int) : void
    }

    /**
    * Inherit from this interface to implement a Particle System job.
    */
    interface IJobParticleSystemParallelForBatch {

        /**
        * Implement this method to access and modify particle properties.
        * @param jobData Contains the particle properties.
        * @param startIndex The first particle index that this job should process.
        * @param count The number of particles that this job should process.
        */
        Execute? ($jobData: ParticleSystemJobData, $startIndex: int, $count: int) : void
    }

    /**
    * Extension methods for Jobs using the IJobParticleSystem interface.
    */
    class IJobParticleSystemExtensions {

        /**
        * Gathers and caches reflection data for the internal job system's managed bindings. Unity is responsible for calling this method - don't call it yourself.
        */
        public static EarlyJobInit<T extends IJobParticleSystem> () : void
    }

    /**
    * Extension methods for Jobs using the IJobParticleSystemParallelFor interface.
    */
    class IJobParticleSystemParallelForExtensions {

        /**
        * Gathers and caches reflection data for the internal job system's managed bindings. Unity is responsible for calling this method - don't call it yourself.
        */
        public static EarlyJobInit<T extends IJobParticleSystemParallelFor> () : void
    }

    /**
    * Extension methods for Jobs using the IJobParticleSystemParallelForBatch interface.
    */
    class IJobParticleSystemParallelForBatchExtensions {

        /**
        * Gathers and caches reflection data for the internal job system's managed bindings. Unity is responsible for calling this method - don't call it yourself.
        */
        public static EarlyJobInit<T extends IJobParticleSystemParallelForBatch> () : void
    }

    class IParticleSystemJobExtensions {

        public static Schedule<T extends IJobParticleSystem> ($jobData: T, $ps: UnityEngine.ParticleSystem, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
        /**
        * @methodSwap Schedule_EBB7509C_F1320A64
        */
        public static Schedule<T extends IJobParticleSystemParallelFor> ($jobData: T, $ps: UnityEngine.ParticleSystem, $minIndicesPerJobCount: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
        /**
        * @methodSwap ScheduleBatch_EBB7509C_F1320A64
        */
        public static ScheduleBatch<T extends IJobParticleSystemParallelForBatch> ($jobData: T, $ps: UnityEngine.ParticleSystem, $innerLoopBatchCount: int, $dependsOn?: Unity_Jobs.JobHandle) : Unity_Jobs.JobHandle
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

