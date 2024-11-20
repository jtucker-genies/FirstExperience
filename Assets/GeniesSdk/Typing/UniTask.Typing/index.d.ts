
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Cysharp.Threading.Tasks' {
    import * as System from 'System'
    import * as Cysharp_Threading_Tasks_UniTask from 'Cysharp.Threading.Tasks.UniTask'
    import * as System_Collections from 'System.Collections'
    import * as System_Threading from 'System.Threading'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'
    import * as Cysharp_Threading_Tasks_YieldAwaitable from 'Cysharp.Threading.Tasks.YieldAwaitable'
    import * as Cysharp_Threading_Tasks_UniTask$1 from 'Cysharp.Threading.Tasks.UniTask$1'
    import * as System_Threading_Tasks_Sources from 'System.Threading.Tasks.Sources'
    import * as Cysharp_Threading_Tasks_SwitchToMainThreadAwaitable from 'Cysharp.Threading.Tasks.SwitchToMainThreadAwaitable'
    import * as Cysharp_Threading_Tasks_ReturnToMainThread from 'Cysharp.Threading.Tasks.ReturnToMainThread'
    import * as Cysharp_Threading_Tasks_SwitchToThreadPoolAwaitable from 'Cysharp.Threading.Tasks.SwitchToThreadPoolAwaitable'
    import * as Cysharp_Threading_Tasks_SwitchToTaskPoolAwaitable from 'Cysharp.Threading.Tasks.SwitchToTaskPoolAwaitable'
    import * as Cysharp_Threading_Tasks_SwitchToSynchronizationContextAwaitable from 'Cysharp.Threading.Tasks.SwitchToSynchronizationContextAwaitable'
    import * as Cysharp_Threading_Tasks_ReturnToSynchronizationContext from 'Cysharp.Threading.Tasks.ReturnToSynchronizationContext'
    import * as Cysharp_Threading_Tasks_CancellationTokenAwaitable from 'Cysharp.Threading.Tasks.CancellationTokenAwaitable'
    import * as Cysharp_Threading_Tasks_UniTaskCancelableAsyncEnumerable$1 from 'Cysharp.Threading.Tasks.UniTaskCancelableAsyncEnumerable$1'
    import * as UnityEngine_LowLevel from 'UnityEngine.LowLevel'
    import * as Cysharp_Threading_Tasks_UnityAsyncExtensions from 'Cysharp.Threading.Tasks.UnityAsyncExtensions'
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering'
    import * as Unity_Jobs from 'Unity.Jobs'
    import * as UnityEngine_Networking from 'UnityEngine.Networking'
    import * as UnityEngine_UI from 'UnityEngine.UI'
    import * as UnityEngine_Networking_UnityWebRequest from 'UnityEngine.Networking.UnityWebRequest'

    class AsyncLazy extends System.Object {

        public get Task(): UniTask;

        public constructor ($taskFactory: System.Func$1<UniTask>)
        public GetAwaiter () : Cysharp_Threading_Tasks_UniTask.Awaiter
    }

    class UniTask extends System.ValueType {

        public static CompletedTask : UniTask
        public get Status(): UniTaskStatus;

        public constructor ($source: IUniTaskSource, $token: short)
        public static ToCoroutine ($taskFactory: System.Func$1<UniTask>) : System_Collections.IEnumerator
        public static Yield () : YieldAwaitable
        public static Yield ($timing: PlayerLoopTiming) : YieldAwaitable
        public static Yield ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static Yield ($timing: PlayerLoopTiming, $cancellationToken: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static NextFrame () : UniTask
        public static NextFrame ($timing: PlayerLoopTiming) : UniTask
        public static NextFrame ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static NextFrame ($timing: PlayerLoopTiming, $cancellationToken: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static WaitForEndOfFrame ($coroutineRunner: UnityEngine.MonoBehaviour) : UniTask
        public static WaitForEndOfFrame ($coroutineRunner: UnityEngine.MonoBehaviour, $cancellationToken: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static WaitForFixedUpdate () : YieldAwaitable
        public static WaitForFixedUpdate ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        /**
        * @methodSwap WaitForSeconds_EBB7509C_C2A2395E
        */
        public static WaitForSeconds ($duration: float, $ignoreTimeScale?: boolean, $delayTiming?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        /**
        * @methodSwap WaitForSeconds_EBB7509C_H34A902B2
        */
        public static WaitForSeconds ($duration: int, $ignoreTimeScale?: boolean, $delayTiming?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static DelayFrame ($delayFrameCount: int, $delayTiming?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        /**
        * @methodSwap Delay_EBB7509C_H34A902B2
        */
        public static Delay ($millisecondsDelay: int, $ignoreTimeScale?: boolean, $delayTiming?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static Delay ($delayTimeSpan: System.TimeSpan, $ignoreTimeScale?: boolean, $delayTiming?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        /**
        * @methodSwap Delay_EBB7509C_H101AC5BE
        */
        public static Delay ($millisecondsDelay: int, $delayType: DelayType, $delayTiming?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static Delay ($delayTimeSpan: System.TimeSpan, $delayType: DelayType, $delayTiming?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static FromException ($ex: System.Exception) : UniTask
        public static FromException<T> ($ex: System.Exception) : UniTask$1<T>
        public static FromResult<T> ($value: T) : UniTask$1<T>
        public static FromCanceled ($cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static FromCanceled<T> ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<T>
        public static Create ($factory: System.Func$1<UniTask>) : UniTask
        public static Create<T> ($factory: System.Func$1<UniTask$1<T>>) : UniTask$1<T>
        public static Lazy ($factory: System.Func$1<UniTask>) : AsyncLazy
        public static Lazy<T> ($factory: System.Func$1<UniTask$1<T>>) : AsyncLazy$1<T>
        public static Void ($asyncAction: System.Func$1<UniTaskVoid>) : void
        public static Void ($asyncAction: System.Func$2<System_Threading.CancellationToken, UniTaskVoid>, $cancellationToken: System_Threading.CancellationToken) : void
        public static Void<T> ($asyncAction: System.Func$2<T, UniTaskVoid>, $state: T) : void
        public static Action ($asyncAction: System.Func$1<UniTaskVoid>) : System.Action
        public static Action ($asyncAction: System.Func$2<System_Threading.CancellationToken, UniTaskVoid>, $cancellationToken: System_Threading.CancellationToken) : System.Action
        public static UnityAction ($asyncAction: System.Func$1<UniTaskVoid>) : UnityEngine_Events.UnityAction
        public static UnityAction ($asyncAction: System.Func$2<System_Threading.CancellationToken, UniTaskVoid>, $cancellationToken: System_Threading.CancellationToken) : UnityEngine_Events.UnityAction
        public static Defer ($factory: System.Func$1<UniTask>) : UniTask
        public static Defer<T> ($factory: System.Func$1<UniTask$1<T>>) : UniTask$1<T>
        public static Never ($cancellationToken: System_Threading.CancellationToken) : UniTask
        public static Never<T> ($cancellationToken: System_Threading.CancellationToken) : UniTask$1<T>
        public static RunOnThreadPool ($action: System.Action, $configureAwait?: boolean, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static RunOnThreadPool ($action: System.Action$1<any>, $state: any, $configureAwait?: boolean, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static RunOnThreadPool ($action: System.Func$1<UniTask>, $configureAwait?: boolean, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static RunOnThreadPool ($action: System.Func$2<any, UniTask>, $state: any, $configureAwait?: boolean, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static RunOnThreadPool<T> ($func: System.Func$1<T>, $configureAwait?: boolean, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<T>
        public static RunOnThreadPool<T> ($func: System.Func$2<any, T>, $state: any, $configureAwait?: boolean, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<T>
        public static SwitchToMainThread ($cancellationToken?: System_Threading.CancellationToken) : SwitchToMainThreadAwaitable
        public static SwitchToMainThread ($timing: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken) : SwitchToMainThreadAwaitable
        public static ReturnToMainThread ($cancellationToken?: System_Threading.CancellationToken) : ReturnToMainThread
        public static ReturnToMainThread ($timing: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken) : ReturnToMainThread
        public static Post ($action: System.Action, $timing?: PlayerLoopTiming) : void
        public static SwitchToThreadPool () : SwitchToThreadPoolAwaitable
        public static SwitchToTaskPool () : SwitchToTaskPoolAwaitable
        public static SwitchToSynchronizationContext ($synchronizationContext: System_Threading.SynchronizationContext, $cancellationToken?: System_Threading.CancellationToken) : SwitchToSynchronizationContextAwaitable
        public static ReturnToSynchronizationContext ($synchronizationContext: System_Threading.SynchronizationContext, $cancellationToken?: System_Threading.CancellationToken) : ReturnToSynchronizationContext
        public static ReturnToCurrentSynchronizationContext ($dontPostWhenSameContext?: boolean, $cancellationToken?: System_Threading.CancellationToken) : ReturnToSynchronizationContext
        public static WaitUntil ($predicate: System.Func$1<boolean>, $timing?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static WaitWhile ($predicate: System.Func$1<boolean>, $timing?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static WaitUntilCanceled ($cancellationToken: System_Threading.CancellationToken, $timing?: PlayerLoopTiming, $completeImmediately?: boolean) : UniTask
        public static WaitUntilValueChanged<T,U> ($target: T, $monitorFunction: System.Func$2<T, U>, $monitorTiming?: PlayerLoopTiming, $equalityComparer?: System_Collections_Generic.IEqualityComparer$1<U>, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask$1<U>
        public static WhenAll<T1,T2> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>) : UniTask$1<System.ValueTuple$2<T1, T2>>
        public static WhenAll<T1,T2,T3> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>) : UniTask$1<System.ValueTuple$3<T1, T2, T3>>
        public static WhenAll<T1,T2,T3,T4> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>) : UniTask$1<System.ValueTuple$4<T1, T2, T3, T4>>
        public static WhenAll<T1,T2,T3,T4,T5> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>) : UniTask$1<System.ValueTuple$5<T1, T2, T3, T4, T5>>
        public static WhenAll<T1,T2,T3,T4,T5,T6> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>) : UniTask$1<System.ValueTuple$6<T1, T2, T3, T4, T5, T6>>
        public static WhenAll<T1,T2,T3,T4,T5,T6,T7> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>) : UniTask$1<System.ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>>
        public static WhenAll<T1,T2,T3,T4,T5,T6,T7,T8> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>) : UniTask$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, System.ValueTuple$1<T8>>>
        public static WhenAll<T1,T2,T3,T4,T5,T6,T7,T8,T9> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>) : UniTask$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, System.ValueTuple$2<T8, T9>>>
        public static WhenAll<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>) : UniTask$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, System.ValueTuple$3<T8, T9, T10>>>
        public static WhenAll<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>, $task11: UniTask$1<T11>) : UniTask$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, System.ValueTuple$4<T8, T9, T10, T11>>>
        public static WhenAll<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>, $task11: UniTask$1<T11>, $task12: UniTask$1<T12>) : UniTask$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, System.ValueTuple$5<T8, T9, T10, T11, T12>>>
        public static WhenAll<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>, $task11: UniTask$1<T11>, $task12: UniTask$1<T12>, $task13: UniTask$1<T13>) : UniTask$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, System.ValueTuple$6<T8, T9, T10, T11, T12, T13>>>
        public static WhenAll<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>, $task11: UniTask$1<T11>, $task12: UniTask$1<T12>, $task13: UniTask$1<T13>, $task14: UniTask$1<T14>) : UniTask$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, System.ValueTuple$7<T8, T9, T10, T11, T12, T13, T14>>>
        public static WhenAll<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>, $task11: UniTask$1<T11>, $task12: UniTask$1<T12>, $task13: UniTask$1<T13>, $task14: UniTask$1<T14>, $task15: UniTask$1<T15>) : UniTask$1<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, System.ValueTuple$8<T8, T9, T10, T11, T12, T13, T14, System.ValueTuple$1<T15>>>>
        public static WhenAll<T> (...tasks: UniTask$1<T>[]) : UniTask$1<T[]>
        public static WhenAll<T> ($tasks: System_Collections_Generic.IEnumerable$1<UniTask$1<T>>) : UniTask$1<T[]>
        public static WhenAll (...tasks: UniTask[]) : UniTask
        public static WhenAll ($tasks: System_Collections_Generic.IEnumerable$1<UniTask>) : UniTask
        public static WhenAny<T1,T2> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>) : UniTask$1<System.ValueTuple$3<int, T1, T2>>
        public static WhenAny<T1,T2,T3> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>) : UniTask$1<System.ValueTuple$4<int, T1, T2, T3>>
        public static WhenAny<T1,T2,T3,T4> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>) : UniTask$1<System.ValueTuple$5<int, T1, T2, T3, T4>>
        public static WhenAny<T1,T2,T3,T4,T5> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>) : UniTask$1<System.ValueTuple$6<int, T1, T2, T3, T4, T5>>
        public static WhenAny<T1,T2,T3,T4,T5,T6> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>) : UniTask$1<System.ValueTuple$7<int, T1, T2, T3, T4, T5, T6>>
        public static WhenAny<T1,T2,T3,T4,T5,T6,T7> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>) : UniTask$1<System.ValueTuple$8<int, T1, T2, T3, T4, T5, T6, System.ValueTuple$1<T7>>>
        public static WhenAny<T1,T2,T3,T4,T5,T6,T7,T8> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>) : UniTask$1<System.ValueTuple$8<int, T1, T2, T3, T4, T5, T6, System.ValueTuple$2<T7, T8>>>
        public static WhenAny<T1,T2,T3,T4,T5,T6,T7,T8,T9> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>) : UniTask$1<System.ValueTuple$8<int, T1, T2, T3, T4, T5, T6, System.ValueTuple$3<T7, T8, T9>>>
        public static WhenAny<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>) : UniTask$1<System.ValueTuple$8<int, T1, T2, T3, T4, T5, T6, System.ValueTuple$4<T7, T8, T9, T10>>>
        public static WhenAny<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>, $task11: UniTask$1<T11>) : UniTask$1<System.ValueTuple$8<int, T1, T2, T3, T4, T5, T6, System.ValueTuple$5<T7, T8, T9, T10, T11>>>
        public static WhenAny<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>, $task11: UniTask$1<T11>, $task12: UniTask$1<T12>) : UniTask$1<System.ValueTuple$8<int, T1, T2, T3, T4, T5, T6, System.ValueTuple$6<T7, T8, T9, T10, T11, T12>>>
        public static WhenAny<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>, $task11: UniTask$1<T11>, $task12: UniTask$1<T12>, $task13: UniTask$1<T13>) : UniTask$1<System.ValueTuple$8<int, T1, T2, T3, T4, T5, T6, System.ValueTuple$7<T7, T8, T9, T10, T11, T12, T13>>>
        public static WhenAny<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>, $task11: UniTask$1<T11>, $task12: UniTask$1<T12>, $task13: UniTask$1<T13>, $task14: UniTask$1<T14>) : UniTask$1<System.ValueTuple$8<int, T1, T2, T3, T4, T5, T6, System.ValueTuple$8<T7, T8, T9, T10, T11, T12, T13, System.ValueTuple$1<T14>>>>
        public static WhenAny<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15> ($task1: UniTask$1<T1>, $task2: UniTask$1<T2>, $task3: UniTask$1<T3>, $task4: UniTask$1<T4>, $task5: UniTask$1<T5>, $task6: UniTask$1<T6>, $task7: UniTask$1<T7>, $task8: UniTask$1<T8>, $task9: UniTask$1<T9>, $task10: UniTask$1<T10>, $task11: UniTask$1<T11>, $task12: UniTask$1<T12>, $task13: UniTask$1<T13>, $task14: UniTask$1<T14>, $task15: UniTask$1<T15>) : UniTask$1<System.ValueTuple$8<int, T1, T2, T3, T4, T5, T6, System.ValueTuple$8<T7, T8, T9, T10, T11, T12, T13, System.ValueTuple$2<T14, T15>>>>
        public static WhenAny<T> ($leftTask: UniTask$1<T>, $rightTask: UniTask) : UniTask$1<System.ValueTuple$2<boolean, T>>
        public static WhenAny<T> (...tasks: UniTask$1<T>[]) : UniTask$1<System.ValueTuple$2<int, T>>
        public static WhenAny<T> ($tasks: System_Collections_Generic.IEnumerable$1<UniTask$1<T>>) : UniTask$1<System.ValueTuple$2<int, T>>
        public static WhenAny (...tasks: UniTask[]) : UniTask$1<int>
        public static WhenAny ($tasks: System_Collections_Generic.IEnumerable$1<UniTask>) : UniTask$1<int>
        public GetAwaiter () : Cysharp_Threading_Tasks_UniTask.Awaiter
        public SuppressCancellationThrow () : UniTask$1<boolean>
        public ToString () : string
        public Preserve () : UniTask
        public AsAsyncUnitUniTask () : UniTask$1<AsyncUnit>
        public static op_Implicit ($self: $Ref<UniTask>) : System_Threading_Tasks.ValueTask
    }

    class YieldAwaitable extends System.ValueType {

        public constructor ($timing: PlayerLoopTiming)
        public GetAwaiter () : Cysharp_Threading_Tasks_YieldAwaitable.Awaiter
        public ToUniTask () : UniTask
    }

    enum PlayerLoopTiming {
        Initialization = 0,
        LastInitialization = 1,
        EarlyUpdate = 2,
        LastEarlyUpdate = 3,
        FixedUpdate = 4,
        LastFixedUpdate = 5,
        PreUpdate = 6,
        LastPreUpdate = 7,
        Update = 8,
        LastUpdate = 9,
        PreLateUpdate = 10,
        LastPreLateUpdate = 11,
        PostLateUpdate = 12,
        LastPostLateUpdate = 13,
        TimeUpdate = 14,
        LastTimeUpdate = 15 
    }

    enum DelayType {
        DeltaTime = 0,
        UnscaledDeltaTime = 1,
        Realtime = 2 
    }

    class UniTask$1<T> extends System.ValueType {

        public get Status(): UniTaskStatus;

        public constructor ($result: T)
        public constructor ($source: IUniTaskSource$1<T>, $token: short)
        public GetAwaiter () : Cysharp_Threading_Tasks_UniTask$1.Awaiter<T>
        public Preserve () : UniTask$1<T>
        public AsUniTask () : UniTask
        public SuppressCancellationThrow () : UniTask$1<System.ValueTuple$2<boolean, T>>
        public ToString () : string
    }

    interface IUniTaskSource$1<T> extends IUniTaskSource, System_Threading_Tasks_Sources.IValueTaskSource$1<T> {

        GetResult? ($token: short) : T
        GetStatus? ($token: short) : UniTaskStatus
        OnCompleted? ($continuation: System.Action$1<any>, $state: any, $token: short) : void
    }

    interface IUniTaskSource extends System_Threading_Tasks_Sources.IValueTaskSource {

        GetStatus? ($token: short) : UniTaskStatus
        OnCompleted? ($continuation: System.Action$1<any>, $state: any, $token: short) : void
        GetResult? ($token: short) : void
        UnsafeGetStatus? () : UniTaskStatus
    }

    enum UniTaskStatus {
        Pending = 0,
        Succeeded = 1,
        Faulted = 2,
        Canceled = 3 
    }

    class AsyncLazy$1<T> extends System.Object {

        public get Task(): UniTask$1<T>;

        public constructor ($taskFactory: System.Func$1<UniTask$1<T>>)
        public GetAwaiter () : Cysharp_Threading_Tasks_UniTask$1.Awaiter<T>
    }

    class UniTaskVoid extends System.ValueType {

        public Forget () : void
    }

    class SwitchToMainThreadAwaitable extends System.ValueType {

        public constructor ($playerLoopTiming: PlayerLoopTiming, $cancellationToken: System_Threading.CancellationToken)
        public GetAwaiter () : Cysharp_Threading_Tasks_SwitchToMainThreadAwaitable.Awaiter
    }

    class ReturnToMainThread extends System.ValueType {

        public constructor ($playerLoopTiming: PlayerLoopTiming, $cancellationToken: System_Threading.CancellationToken)
        public DisposeAsync () : Cysharp_Threading_Tasks_ReturnToMainThread.Awaiter
    }

    class SwitchToThreadPoolAwaitable extends System.ValueType {

        public GetAwaiter () : Cysharp_Threading_Tasks_SwitchToThreadPoolAwaitable.Awaiter
    }

    class SwitchToTaskPoolAwaitable extends System.ValueType {

        public GetAwaiter () : Cysharp_Threading_Tasks_SwitchToTaskPoolAwaitable.Awaiter
    }

    class SwitchToSynchronizationContextAwaitable extends System.ValueType {

        public constructor ($synchronizationContext: System_Threading.SynchronizationContext, $cancellationToken: System_Threading.CancellationToken)
        public GetAwaiter () : Cysharp_Threading_Tasks_SwitchToSynchronizationContextAwaitable.Awaiter
    }

    class ReturnToSynchronizationContext extends System.ValueType {

        public constructor ($syncContext: System_Threading.SynchronizationContext, $dontPostWhenSameContext: boolean, $cancellationToken: System_Threading.CancellationToken)
        public DisposeAsync () : Cysharp_Threading_Tasks_ReturnToSynchronizationContext.Awaiter
    }

    class AsyncUnit extends System.ValueType implements System.IEquatable$1<AsyncUnit> {

        public static Default : AsyncUnit

        public GetHashCode () : int
        public Equals ($other: AsyncUnit) : boolean
        public ToString () : string
    }

    interface IReadOnlyAsyncReactiveProperty$1<T> extends IUniTaskAsyncEnumerable$1<T> {

        readonly Value? : T

        WithoutCurrent? () : IUniTaskAsyncEnumerable$1<T>
        WaitAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<T>
    }

    interface IUniTaskAsyncEnumerable$1<T> {

        GetAsyncEnumerator? ($cancellationToken?: System_Threading.CancellationToken) : IUniTaskAsyncEnumerator$1<T>
    }

    interface IUniTaskAsyncEnumerator$1<T> extends IUniTaskAsyncDisposable {

        readonly Current? : T

        MoveNextAsync? () : UniTask$1<boolean>
    }

    interface IUniTaskAsyncDisposable {

        DisposeAsync? () : UniTask
    }

    interface IAsyncReactiveProperty$1<T> extends IReadOnlyAsyncReactiveProperty$1<T> {

        Value? : T

    }

    class AsyncReactiveProperty$1<T> extends System.Object implements IAsyncReactiveProperty$1<T>, System.IDisposable {

        public get Value(): T;
        public set Value(value: T);

        public constructor ($value: T)
        public WithoutCurrent () : IUniTaskAsyncEnumerable$1<T>
        public GetAsyncEnumerator ($cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerator$1<T>
        public Dispose () : void
        public ToString () : string
        public WaitAsync ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<T>
    }

    class ReadOnlyAsyncReactiveProperty$1<T> extends System.Object implements IReadOnlyAsyncReactiveProperty$1<T>, System.IDisposable {

        public get Value(): T;

        public constructor ($initialValue: T, $source: IUniTaskAsyncEnumerable$1<T>, $cancellationToken: System_Threading.CancellationToken)
        public constructor ($source: IUniTaskAsyncEnumerable$1<T>, $cancellationToken: System_Threading.CancellationToken)
        public WithoutCurrent () : IUniTaskAsyncEnumerable$1<T>
        public GetAsyncEnumerator ($cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerator$1<T>
        public Dispose () : void
        public ToString () : string
        public WaitAsync ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<T>
    }

    class StateExtensions {

        public static ToReadOnlyAsyncReactiveProperty<T> ($source: IUniTaskAsyncEnumerable$1<T>, $cancellationToken: System_Threading.CancellationToken) : ReadOnlyAsyncReactiveProperty$1<T>
        public static ToReadOnlyAsyncReactiveProperty<T> ($source: IUniTaskAsyncEnumerable$1<T>, $initialValue: T, $cancellationToken: System_Threading.CancellationToken) : ReadOnlyAsyncReactiveProperty$1<T>
    }

    class CancellationTokenEqualityComparer extends System.Object implements System_Collections_Generic.IEqualityComparer$1<System_Threading.CancellationToken> {

        public static Default : System_Collections_Generic.IEqualityComparer$1<System_Threading.CancellationToken>

        public constructor ()
        public Equals ($x: System_Threading.CancellationToken, $y: System_Threading.CancellationToken) : boolean
        public GetHashCode ($obj: System_Threading.CancellationToken) : int
    }

    class CancellationTokenExtensions {

        public static ToCancellationToken ($task: UniTask) : System_Threading.CancellationToken
        public static ToCancellationToken ($task: UniTask, $linkToken: System_Threading.CancellationToken) : System_Threading.CancellationToken
        public static ToCancellationToken<T> ($task: UniTask$1<T>) : System_Threading.CancellationToken
        public static ToCancellationToken<T> ($task: UniTask$1<T>, $linkToken: System_Threading.CancellationToken) : System_Threading.CancellationToken
        public static ToUniTask ($cancellationToken: System_Threading.CancellationToken) : System.ValueTuple$2<UniTask, System_Threading.CancellationTokenRegistration>
        public static WaitUntilCanceled ($cancellationToken: System_Threading.CancellationToken) : CancellationTokenAwaitable
        public static RegisterWithoutCaptureExecutionContext ($cancellationToken: System_Threading.CancellationToken, $callback: System.Action) : System_Threading.CancellationTokenRegistration
        public static RegisterWithoutCaptureExecutionContext ($cancellationToken: System_Threading.CancellationToken, $callback: System.Action$1<any>, $state: any) : System_Threading.CancellationTokenRegistration
        public static AddTo ($disposable: System.IDisposable, $cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    class CancellationTokenAwaitable extends System.ValueType {

        public constructor ($cancellationToken: System_Threading.CancellationToken)
        public GetAwaiter () : Cysharp_Threading_Tasks_CancellationTokenAwaitable.Awaiter
    }

    class CancellationTokenSourceExtensions {

        /**
        * @methodSwap CancelAfterSlim_EBB7509C_H2E5EE344
        */
        public static CancelAfterSlim ($cts: System_Threading.CancellationTokenSource, $millisecondsDelay: int, $delayType?: DelayType, $delayTiming?: PlayerLoopTiming) : System.IDisposable
        public static CancelAfterSlim ($cts: System_Threading.CancellationTokenSource, $delayTimeSpan: System.TimeSpan, $delayType?: DelayType, $delayTiming?: PlayerLoopTiming) : System.IDisposable
        public static RegisterRaiseCancelOnDestroy ($cts: System_Threading.CancellationTokenSource, $component: UnityEngine.Component) : void
        public static RegisterRaiseCancelOnDestroy ($cts: System_Threading.CancellationTokenSource, $gameObject: UnityEngine.GameObject) : void
    }

    class Channel {

        public static CreateSingleConsumerUnbounded<T> () : Channel$1<T>
    }

    class Channel$1<T> extends Channel$2<T,T> {

    }

    class Channel$2<TWrite,TRead> extends System.Object {

        public get Reader(): ChannelReader$1<TRead>;
        public get Writer(): ChannelWriter$1<TWrite>;

    }

    class ChannelReader$1<T> extends System.Object {

        public get Completion(): UniTask;

        public TryRead ($item: $Ref<T>) : boolean
        public WaitToReadAsync ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        public ReadAsync ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<T>
        public ReadAllAsync ($cancellationToken?: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<T>
    }

    class ChannelWriter$1<T> extends System.Object {

        public TryWrite ($item: T) : boolean
        public TryComplete ($error?: System.Exception) : boolean
        public Complete ($error?: System.Exception) : void
    }

    class ChannelClosedException extends System.InvalidOperationException {

        public constructor ()
        public constructor ($message: string)
        public constructor ($innerException: System.Exception)
        public constructor ($message: string, $innerException: System.Exception)
    }

    class EnumerableAsyncExtensions {

        public static Select<T> ($source: System_Collections_Generic.IEnumerable$1<T>, $selector: System.Func$2<T, UniTask>) : System_Collections_Generic.IEnumerable$1<UniTask>
        public static Select<T,TR> ($source: System_Collections_Generic.IEnumerable$1<T>, $selector: System.Func$2<T, UniTask$1<TR>>) : System_Collections_Generic.IEnumerable$1<UniTask$1<TR>>
        public static Select<T> ($source: System_Collections_Generic.IEnumerable$1<T>, $selector: System.Func$3<T, int, UniTask>) : System_Collections_Generic.IEnumerable$1<UniTask>
        public static Select<T,TR> ($source: System_Collections_Generic.IEnumerable$1<T>, $selector: System.Func$3<T, int, UniTask$1<TR>>) : System_Collections_Generic.IEnumerable$1<UniTask$1<TR>>
    }

    class EnumeratorAsyncExtensions {

        public static GetAwaiter<T extends System_Collections.IEnumerator> ($enumerator: T) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static WithCancellation ($enumerator: System_Collections.IEnumerator, $cancellationToken: System_Threading.CancellationToken) : UniTask
        public static ToUniTask ($enumerator: System_Collections.IEnumerator, $timing?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static ToUniTask ($enumerator: System_Collections.IEnumerator, $coroutineRunner: UnityEngine.MonoBehaviour) : UniTask
    }

    class ExceptionExtensions {

        public static IsOperationCanceledException ($exception: System.Exception) : boolean
    }

    interface IUniTaskOrderedAsyncEnumerable$1<TElement> extends IUniTaskAsyncEnumerable$1<TElement> {

        CreateOrderedEnumerable?<TKey> ($keySelector: System.Func$2<TElement, TKey>, $comparer: System_Collections_Generic.IComparer$1<TKey>, $descending: boolean) : IUniTaskOrderedAsyncEnumerable$1<TElement>
        CreateOrderedEnumerable?<TKey> ($keySelector: System.Func$3<TElement, System_Threading.CancellationToken, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>, $descending: boolean) : IUniTaskOrderedAsyncEnumerable$1<TElement>
    }

    interface IConnectableUniTaskAsyncEnumerable$1<T> extends IUniTaskAsyncEnumerable$1<T> {

        Connect? () : System.IDisposable
    }

    class UniTaskAsyncEnumerableExtensions {

        public static WithCancellation<T> ($source: IUniTaskAsyncEnumerable$1<T>, $cancellationToken: System_Threading.CancellationToken) : UniTaskCancelableAsyncEnumerable$1<T>
    }

    class UniTaskCancelableAsyncEnumerable$1<T> extends System.ValueType {

        public GetAsyncEnumerator () : Cysharp_Threading_Tasks_UniTaskCancelableAsyncEnumerable$1.Enumerator<T>
    }

    class UniTaskStatusExtensions {

        public static IsCompleted ($status: UniTaskStatus) : boolean
        public static IsCompletedSuccessfully ($status: UniTaskStatus) : boolean
        public static IsCanceled ($status: UniTaskStatus) : boolean
        public static IsFaulted ($status: UniTaskStatus) : boolean
    }

    class MoveNextSource extends System.Object implements IUniTaskSource$1<boolean> {

        public GetResult ($token: short) : boolean
        public GetStatus ($token: short) : UniTaskStatus
        public OnCompleted ($continuation: System.Action$1<any>, $state: any, $token: short) : void
        public UnsafeGetStatus () : UniTaskStatus
    }

    class UniTaskLoopRunners {

    }

    enum InjectPlayerLoopTimings {
        All = 65535,
        Standard = 30037,
        Minimum = 8464,
        Initialization = 1,
        LastInitialization = 2,
        EarlyUpdate = 4,
        LastEarlyUpdate = 8,
        FixedUpdate = 16,
        LastFixedUpdate = 32,
        PreUpdate = 64,
        LastPreUpdate = 128,
        Update = 256,
        LastUpdate = 512,
        PreLateUpdate = 1024,
        LastPreLateUpdate = 2048,
        PostLateUpdate = 4096,
        LastPostLateUpdate = 8192,
        TimeUpdate = 16384,
        LastTimeUpdate = 32768 
    }

    interface IPlayerLoopItem {

        MoveNext? () : boolean
    }

    class PlayerLoopHelper {

        public static get UnitySynchronizationContext(): System_Threading.SynchronizationContext;
        public static get MainThreadId(): int;
        public static get IsMainThread(): boolean;

        public static Initialize ($playerLoop: $Ref<UnityEngine_LowLevel.PlayerLoopSystem>, $injectTimings?: InjectPlayerLoopTimings) : void
        public static AddAction ($timing: PlayerLoopTiming, $action: IPlayerLoopItem) : void
        public static AddContinuation ($timing: PlayerLoopTiming, $continuation: System.Action) : void
        public static DumpCurrentPlayerLoop () : void
        public static IsInjectedUniTaskPlayerLoop () : boolean
    }

    class PlayerLoopTimer extends System.Object implements IPlayerLoopItem, System.IDisposable {

        public static Create ($interval: System.TimeSpan, $periodic: boolean, $delayType: DelayType, $playerLoopTiming: PlayerLoopTiming, $cancellationToken: System_Threading.CancellationToken, $timerCallback: System.Action$1<any>, $state: any) : PlayerLoopTimer
        public static StartNew ($interval: System.TimeSpan, $periodic: boolean, $delayType: DelayType, $playerLoopTiming: PlayerLoopTiming, $cancellationToken: System_Threading.CancellationToken, $timerCallback: System.Action$1<any>, $state: any) : PlayerLoopTimer
        public Restart () : void
        public Restart ($interval: System.TimeSpan) : void
        public Stop () : void
        public Dispose () : void
    }

    class Progress {

        public static Create<T> ($handler: System.Action$1<T>) : System.IProgress$1<T>
        public static CreateOnlyValueChanged<T> ($handler: System.Action$1<T>, $comparer?: System_Collections_Generic.IEqualityComparer$1<T>) : System.IProgress$1<T>
    }

    class TaskPool {

        public static SetMaxPoolSize ($maxPoolSize: int) : void
        public static GetCacheSizeInfo () : System_Collections_Generic.IEnumerable$1<System.ValueTuple$2<System.Type, int>>
        public static RegisterSizeGetter ($type: System.Type, $getSize: System.Func$1<int>) : void
    }

    interface ITaskPoolNode$1<T> {

        readonly NextNode? : $Ref<T>

    }

    class TaskPool$1<T> extends System.ValueType {

        public get Size(): int;

        public TryPop ($result: $Ref<T>) : boolean
        public TryPush ($item: T) : boolean
    }

    class TimeoutController extends System.Object implements System.IDisposable {

        public constructor ($delayType?: DelayType, $delayTiming?: PlayerLoopTiming)
        public constructor ($linkCancellationTokenSource: System_Threading.CancellationTokenSource, $delayType?: DelayType, $delayTiming?: PlayerLoopTiming)
        /**
        * @methodSwap Timeout_EBB7509C_F92D023A
        */
        public Timeout ($millisecondsTimeout: int) : System_Threading.CancellationToken
        public Timeout ($timeout: System.TimeSpan) : System_Threading.CancellationToken
        public IsTimeout () : boolean
        public Reset () : void
        public Dispose () : void
    }

    interface ITriggerHandler$1<T> {

        Prev? : ITriggerHandler$1<T>
        Next? : ITriggerHandler$1<T>

        OnNext? ($value: T) : void
        OnError? ($ex: System.Exception) : void
        OnCompleted? () : void
        OnCanceled? ($cancellationToken: System_Threading.CancellationToken) : void
    }

    class TriggerEvent$1<T> extends System.ValueType {

        public SetResult ($value: T) : void
        public SetCanceled ($cancellationToken: System_Threading.CancellationToken) : void
        public SetCompleted () : void
        public SetError ($exception: System.Exception) : void
        public Add ($handler: ITriggerHandler$1<T>) : void
        public Remove ($handler: ITriggerHandler$1<T>) : void
    }

    class UniTaskCancellationExtensions {

        public static GetCancellationTokenOnDestroy ($monoBehaviour: UnityEngine.MonoBehaviour) : System_Threading.CancellationToken
        public static GetCancellationTokenOnDestroy ($gameObject: UnityEngine.GameObject) : System_Threading.CancellationToken
        public static GetCancellationTokenOnDestroy ($component: UnityEngine.Component) : System_Threading.CancellationToken
    }

    class UniTaskValueTaskExtensions {

        public static AsValueTask ($task: $Ref<UniTask>) : System_Threading_Tasks.ValueTask
        public static AsValueTask<T> ($task: $Ref<UniTask$1<T>>) : System_Threading_Tasks.ValueTask$1<T>
        public static AsUniTask<T> ($task: System_Threading_Tasks.ValueTask$1<T>) : UniTask$1<T>
        public static AsUniTask ($task: System_Threading_Tasks.ValueTask) : UniTask
    }

    interface IResolvePromise {

        TrySetResult? () : boolean
    }

    interface IResolvePromise$1<T> {

        TrySetResult? ($value: T) : boolean
    }

    interface IRejectPromise {

        TrySetException? ($exception: System.Exception) : boolean
    }

    interface ICancelPromise {

        TrySetCanceled? ($cancellationToken?: System_Threading.CancellationToken) : boolean
    }

    interface IPromise$1<T> extends IResolvePromise$1<T>, IRejectPromise, ICancelPromise {

    }

    interface IPromise extends IResolvePromise, IRejectPromise, ICancelPromise {

    }

    class UniTaskCompletionSourceCore$1<TResult> extends System.ValueType {

        public get Version(): short;

        public Reset () : void
        public TrySetResult ($result: TResult) : boolean
        public TrySetException ($error: System.Exception) : boolean
        public TrySetCanceled ($cancellationToken?: System_Threading.CancellationToken) : boolean
        public GetStatus ($token: short) : UniTaskStatus
        public UnsafeGetStatus () : UniTaskStatus
        public GetResult ($token: short) : TResult
        public OnCompleted ($continuation: System.Action$1<any>, $state: any, $token: short) : void
    }

    class AutoResetUniTaskCompletionSource extends System.Object implements IUniTaskSource, ITaskPoolNode$1<AutoResetUniTaskCompletionSource>, IPromise {

        public get NextNode(): $Ref<AutoResetUniTaskCompletionSource>;
        public get Task(): UniTask;

        public static Create () : AutoResetUniTaskCompletionSource
        public static CreateFromCanceled ($cancellationToken: System_Threading.CancellationToken, $token: $Ref<short>) : AutoResetUniTaskCompletionSource
        public static CreateFromException ($exception: System.Exception, $token: $Ref<short>) : AutoResetUniTaskCompletionSource
        public static CreateCompleted ($token: $Ref<short>) : AutoResetUniTaskCompletionSource
        public TrySetResult () : boolean
        public TrySetCanceled ($cancellationToken?: System_Threading.CancellationToken) : boolean
        public TrySetException ($exception: System.Exception) : boolean
        public GetResult ($token: short) : void
        public GetStatus ($token: short) : UniTaskStatus
        public UnsafeGetStatus () : UniTaskStatus
        public OnCompleted ($continuation: System.Action$1<any>, $state: any, $token: short) : void
    }

    class AutoResetUniTaskCompletionSource$1<T> extends System.Object implements IUniTaskSource$1<T>, ITaskPoolNode$1<AutoResetUniTaskCompletionSource$1<T>>, IPromise$1<T> {

        public get NextNode(): $Ref<AutoResetUniTaskCompletionSource$1<T>>;
        public get Task(): UniTask$1<T>;

        public static Create () : AutoResetUniTaskCompletionSource$1<T>
        public static CreateFromCanceled ($cancellationToken: System_Threading.CancellationToken, $token: $Ref<short>) : AutoResetUniTaskCompletionSource$1<T>
        public static CreateFromException ($exception: System.Exception, $token: $Ref<short>) : AutoResetUniTaskCompletionSource$1<T>
        public static CreateFromResult ($result: any, $token: $Ref<short>) : AutoResetUniTaskCompletionSource$1<T>
        public TrySetResult ($result: T) : boolean
        public TrySetCanceled ($cancellationToken?: System_Threading.CancellationToken) : boolean
        public TrySetException ($exception: System.Exception) : boolean
        public GetResult ($token: short) : T
        public GetStatus ($token: short) : UniTaskStatus
        public UnsafeGetStatus () : UniTaskStatus
        public OnCompleted ($continuation: System.Action$1<any>, $state: any, $token: short) : void
    }

    class UniTaskCompletionSource extends System.Object implements IUniTaskSource, IPromise {

        public get Task(): UniTask;

        public constructor ()
        public TrySetResult () : boolean
        public TrySetCanceled ($cancellationToken?: System_Threading.CancellationToken) : boolean
        public TrySetException ($exception: System.Exception) : boolean
        public GetResult ($token: short) : void
        public GetStatus ($token: short) : UniTaskStatus
        public UnsafeGetStatus () : UniTaskStatus
        public OnCompleted ($continuation: System.Action$1<any>, $state: any, $token: short) : void
    }

    class UniTaskCompletionSource$1<T> extends System.Object implements IUniTaskSource$1<T>, IPromise$1<T> {

        public get Task(): UniTask$1<T>;

        public constructor ()
        public TrySetResult ($result: T) : boolean
        public TrySetCanceled ($cancellationToken?: System_Threading.CancellationToken) : boolean
        public TrySetException ($exception: System.Exception) : boolean
        public GetResult ($token: short) : T
        public GetStatus ($token: short) : UniTaskStatus
        public UnsafeGetStatus () : UniTaskStatus
        public OnCompleted ($continuation: System.Action$1<any>, $state: any, $token: short) : void
    }

    class UniTaskExtensions {

        public static GetAwaiter ($tasks: UniTask[]) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System_Collections_Generic.IEnumerable$1<UniTask>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter<T> ($tasks: UniTask$1<T>[]) : Cysharp_Threading_Tasks_UniTask$1.Awaiter<T[]>
        public static GetAwaiter<T> ($tasks: System_Collections_Generic.IEnumerable$1<UniTask$1<T>>) : Cysharp_Threading_Tasks_UniTask$1.Awaiter<T[]>
        public static GetAwaiter<T1,T2> ($tasks: System.ValueTuple$2<UniTask$1<T1>, UniTask$1<T2>>) : Cysharp_Threading_Tasks_UniTask$1.Awaiter<System.ValueTuple$2<T1, T2>>
        public static GetAwaiter<T1,T2,T3> ($tasks: System.ValueTuple$3<UniTask$1<T1>, UniTask$1<T2>, UniTask$1<T3>>) : Cysharp_Threading_Tasks_UniTask$1.Awaiter<System.ValueTuple$3<T1, T2, T3>>
        public static GetAwaiter<T1,T2,T3,T4> ($tasks: System.ValueTuple$4<UniTask$1<T1>, UniTask$1<T2>, UniTask$1<T3>, UniTask$1<T4>>) : Cysharp_Threading_Tasks_UniTask$1.Awaiter<System.ValueTuple$4<T1, T2, T3, T4>>
        public static GetAwaiter<T1,T2,T3,T4,T5> ($tasks: System.ValueTuple$5<UniTask$1<T1>, UniTask$1<T2>, UniTask$1<T3>, UniTask$1<T4>, UniTask$1<T5>>) : Cysharp_Threading_Tasks_UniTask$1.Awaiter<System.ValueTuple$5<T1, T2, T3, T4, T5>>
        public static GetAwaiter<T1,T2,T3,T4,T5,T6> ($tasks: System.ValueTuple$6<UniTask$1<T1>, UniTask$1<T2>, UniTask$1<T3>, UniTask$1<T4>, UniTask$1<T5>, UniTask$1<T6>>) : Cysharp_Threading_Tasks_UniTask$1.Awaiter<System.ValueTuple$6<T1, T2, T3, T4, T5, T6>>
        public static GetAwaiter<T1,T2,T3,T4,T5,T6,T7> ($tasks: System.ValueTuple$7<UniTask$1<T1>, UniTask$1<T2>, UniTask$1<T3>, UniTask$1<T4>, UniTask$1<T5>, UniTask$1<T6>, UniTask$1<T7>>) : Cysharp_Threading_Tasks_UniTask$1.Awaiter<System.ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>>
        public static GetAwaiter<T1,T2,T3,T4,T5,T6,T7,T8> ($tasks: System.ValueTuple$8<UniTask$1<T1>, UniTask$1<T2>, UniTask$1<T3>, UniTask$1<T4>, UniTask$1<T5>, UniTask$1<T6>, UniTask$1<T7>, System.ValueTuple$1<UniTask$1<T8>>>) : Cysharp_Threading_Tasks_UniTask$1.Awaiter<System.ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, System.ValueTuple$1<T8>>>
        public static GetAwaiter ($tasks: System.ValueTuple$2<UniTask, UniTask>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$3<UniTask, UniTask, UniTask>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$4<UniTask, UniTask, UniTask, UniTask>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$5<UniTask, UniTask, UniTask, UniTask, UniTask>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$6<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$7<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$8<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, System.ValueTuple$1<UniTask>>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$8<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, System.ValueTuple$2<UniTask, UniTask>>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$8<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, System.ValueTuple$3<UniTask, UniTask, UniTask>>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$8<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, System.ValueTuple$4<UniTask, UniTask, UniTask, UniTask>>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$8<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, System.ValueTuple$5<UniTask, UniTask, UniTask, UniTask, UniTask>>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$8<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, System.ValueTuple$6<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask>>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$8<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, System.ValueTuple$7<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask>>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static GetAwaiter ($tasks: System.ValueTuple$8<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, System.ValueTuple$8<UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, UniTask, System.ValueTuple$1<UniTask>>>) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static AsUniTask<T> ($task: System_Threading_Tasks.Task$1<T>, $useCurrentSynchronizationContext?: boolean) : UniTask$1<T>
        public static AsUniTask ($task: System_Threading_Tasks.Task, $useCurrentSynchronizationContext?: boolean) : UniTask
        public static AsTask<T> ($task: UniTask$1<T>) : System_Threading_Tasks.Task$1<T>
        public static AsTask ($task: UniTask) : System_Threading_Tasks.Task
        public static ToAsyncLazy ($task: UniTask) : AsyncLazy
        public static ToAsyncLazy<T> ($task: UniTask$1<T>) : AsyncLazy$1<T>
        public static AttachExternalCancellation ($task: UniTask, $cancellationToken: System_Threading.CancellationToken) : UniTask
        public static AttachExternalCancellation<T> ($task: UniTask$1<T>, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<T>
        public static ToCoroutine<T> ($task: UniTask$1<T>, $resultHandler?: System.Action$1<T>, $exceptionHandler?: System.Action$1<System.Exception>) : System_Collections.IEnumerator
        public static ToCoroutine ($task: UniTask, $exceptionHandler?: System.Action$1<System.Exception>) : System_Collections.IEnumerator
        public static Timeout ($task: UniTask, $timeout: System.TimeSpan, $delayType?: DelayType, $timeoutCheckTiming?: PlayerLoopTiming, $taskCancellationTokenSource?: System_Threading.CancellationTokenSource) : UniTask
        public static Timeout<T> ($task: UniTask$1<T>, $timeout: System.TimeSpan, $delayType?: DelayType, $timeoutCheckTiming?: PlayerLoopTiming, $taskCancellationTokenSource?: System_Threading.CancellationTokenSource) : UniTask$1<T>
        public static TimeoutWithoutException ($task: UniTask, $timeout: System.TimeSpan, $delayType?: DelayType, $timeoutCheckTiming?: PlayerLoopTiming, $taskCancellationTokenSource?: System_Threading.CancellationTokenSource) : UniTask$1<boolean>
        public static TimeoutWithoutException<T> ($task: UniTask$1<T>, $timeout: System.TimeSpan, $delayType?: DelayType, $timeoutCheckTiming?: PlayerLoopTiming, $taskCancellationTokenSource?: System_Threading.CancellationTokenSource) : UniTask$1<System.ValueTuple$2<boolean, T>>
        public static Forget ($task: UniTask) : void
        public static Forget ($task: UniTask, $exceptionHandler: System.Action$1<System.Exception>, $handleExceptionOnMainThread?: boolean) : void
        public static Forget<T> ($task: UniTask$1<T>) : void
        public static Forget<T> ($task: UniTask$1<T>, $exceptionHandler: System.Action$1<System.Exception>, $handleExceptionOnMainThread?: boolean) : void
        public static ContinueWith<T> ($task: UniTask$1<T>, $continuationFunction: System.Action$1<T>) : UniTask
        public static ContinueWith<T> ($task: UniTask$1<T>, $continuationFunction: System.Func$2<T, UniTask>) : UniTask
        public static ContinueWith<T,TR> ($task: UniTask$1<T>, $continuationFunction: System.Func$2<T, TR>) : UniTask$1<TR>
        public static ContinueWith ($task: UniTask, $continuationFunction: System.Action) : UniTask
        public static ContinueWith ($task: UniTask, $continuationFunction: System.Func$1<UniTask>) : UniTask
        public static ContinueWith<T> ($task: UniTask, $continuationFunction: System.Func$1<T>) : UniTask$1<T>
        public static Unwrap<T> ($task: UniTask$1<UniTask$1<T>>) : UniTask$1<T>
        public static Unwrap ($task: UniTask$1<UniTask>) : UniTask
        public static Unwrap<T> ($task: System_Threading_Tasks.Task$1<UniTask$1<T>>) : UniTask$1<T>
        public static Unwrap<T> ($task: System_Threading_Tasks.Task$1<UniTask$1<T>>, $continueOnCapturedContext: boolean) : UniTask$1<T>
        public static Unwrap ($task: System_Threading_Tasks.Task$1<UniTask>) : UniTask
        public static Unwrap ($task: System_Threading_Tasks.Task$1<UniTask>, $continueOnCapturedContext: boolean) : UniTask
        public static Unwrap<T> ($task: UniTask$1<System_Threading_Tasks.Task$1<T>>, $continueOnCapturedContext: boolean) : UniTask$1<T>
        public static Unwrap ($task: UniTask$1<System_Threading_Tasks.Task>) : UniTask
        public static Unwrap ($task: UniTask$1<System_Threading_Tasks.Task>, $continueOnCapturedContext: boolean) : UniTask
    }

    class UniTaskObservableExtensions {

        public static ToUniTask<T> ($source: System.IObservable$1<T>, $useFirstValue?: boolean, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<T>
        public static ToObservable<T> ($task: UniTask$1<T>) : System.IObservable$1<T>
        public static ToObservable ($task: UniTask) : System.IObservable$1<AsyncUnit>
    }

    class UniTaskScheduler {

        public static PropagateOperationCanceledException : boolean
        public static UnobservedExceptionWriteLogType : UnityEngine.LogType
        public static DispatchUnityMainThread : boolean

        public static add_UnobservedTaskException ($value: System.Action$1<System.Exception>) : void
        public static remove_UnobservedTaskException ($value: System.Action$1<System.Exception>) : void
    }

    class UniTaskSynchronizationContext extends System_Threading.SynchronizationContext {

        public constructor ()
        public Send ($d: System_Threading.SendOrPostCallback, $state: any) : void
        public Post ($d: System_Threading.SendOrPostCallback, $state: any) : void
        public OperationStarted () : void
        public OperationCompleted () : void
        public CreateCopy () : System_Threading.SynchronizationContext
    }

    class UnityAsyncExtensions {

        public static AwaitForAllAssets ($asyncOperation: UnityEngine.AssetBundleRequest) : Cysharp_Threading_Tasks_UnityAsyncExtensions.AssetBundleRequestAllAssetsAwaiter
        public static AwaitForAllAssets ($asyncOperation: UnityEngine.AssetBundleRequest, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<UnityEngine.Object[]>
        public static AwaitForAllAssets ($asyncOperation: UnityEngine.AssetBundleRequest, $cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : UniTask$1<UnityEngine.Object[]>
        public static AwaitForAllAssets ($asyncOperation: UnityEngine.AssetBundleRequest, $progress?: System.IProgress$1<float>, $timing?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask$1<UnityEngine.Object[]>
        public static GetAwaiter ($asyncOperation: UnityEngine_Rendering.AsyncGPUReadbackRequest) : Cysharp_Threading_Tasks_UniTask$1.Awaiter<UnityEngine_Rendering.AsyncGPUReadbackRequest>
        public static WithCancellation ($asyncOperation: UnityEngine_Rendering.AsyncGPUReadbackRequest, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<UnityEngine_Rendering.AsyncGPUReadbackRequest>
        public static WithCancellation ($asyncOperation: UnityEngine_Rendering.AsyncGPUReadbackRequest, $cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : UniTask$1<UnityEngine_Rendering.AsyncGPUReadbackRequest>
        public static ToUniTask ($asyncOperation: UnityEngine_Rendering.AsyncGPUReadbackRequest, $timing?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask$1<UnityEngine_Rendering.AsyncGPUReadbackRequest>
        public static WaitAsync ($jobHandle: Unity_Jobs.JobHandle, $waitTiming: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static GetAwaiter ($jobHandle: Unity_Jobs.JobHandle) : Cysharp_Threading_Tasks_UniTask.Awaiter
        public static ToUniTask ($jobHandle: Unity_Jobs.JobHandle, $waitTiming: PlayerLoopTiming) : UniTask
        public static StartAsyncCoroutine ($monoBehaviour: UnityEngine.MonoBehaviour, $asyncCoroutine: System.Func$2<System_Threading.CancellationToken, UniTask>) : UniTask
        public static GetAwaiter ($asyncOperation: UnityEngine.AsyncOperation) : Cysharp_Threading_Tasks_UnityAsyncExtensions.AsyncOperationAwaiter
        public static WithCancellation ($asyncOperation: UnityEngine.AsyncOperation, $cancellationToken: System_Threading.CancellationToken) : UniTask
        public static WithCancellation ($asyncOperation: UnityEngine.AsyncOperation, $cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : UniTask
        public static ToUniTask ($asyncOperation: UnityEngine.AsyncOperation, $progress?: System.IProgress$1<float>, $timing?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask
        public static GetAwaiter ($asyncOperation: UnityEngine.ResourceRequest) : Cysharp_Threading_Tasks_UnityAsyncExtensions.ResourceRequestAwaiter
        public static WithCancellation ($asyncOperation: UnityEngine.ResourceRequest, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<UnityEngine.Object>
        public static WithCancellation ($asyncOperation: UnityEngine.ResourceRequest, $cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : UniTask$1<UnityEngine.Object>
        public static ToUniTask ($asyncOperation: UnityEngine.ResourceRequest, $progress?: System.IProgress$1<float>, $timing?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask$1<UnityEngine.Object>
        public static GetAwaiter ($asyncOperation: UnityEngine.AssetBundleRequest) : Cysharp_Threading_Tasks_UnityAsyncExtensions.AssetBundleRequestAwaiter
        public static WithCancellation ($asyncOperation: UnityEngine.AssetBundleRequest, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<UnityEngine.Object>
        public static WithCancellation ($asyncOperation: UnityEngine.AssetBundleRequest, $cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : UniTask$1<UnityEngine.Object>
        public static ToUniTask ($asyncOperation: UnityEngine.AssetBundleRequest, $progress?: System.IProgress$1<float>, $timing?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask$1<UnityEngine.Object>
        public static GetAwaiter ($asyncOperation: UnityEngine.AssetBundleCreateRequest) : Cysharp_Threading_Tasks_UnityAsyncExtensions.AssetBundleCreateRequestAwaiter
        public static WithCancellation ($asyncOperation: UnityEngine.AssetBundleCreateRequest, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<UnityEngine.AssetBundle>
        public static WithCancellation ($asyncOperation: UnityEngine.AssetBundleCreateRequest, $cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : UniTask$1<UnityEngine.AssetBundle>
        public static ToUniTask ($asyncOperation: UnityEngine.AssetBundleCreateRequest, $progress?: System.IProgress$1<float>, $timing?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask$1<UnityEngine.AssetBundle>
        public static GetAwaiter ($asyncOperation: UnityEngine_Networking.UnityWebRequestAsyncOperation) : Cysharp_Threading_Tasks_UnityAsyncExtensions.UnityWebRequestAsyncOperationAwaiter
        public static WithCancellation ($asyncOperation: UnityEngine_Networking.UnityWebRequestAsyncOperation, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<UnityEngine_Networking.UnityWebRequest>
        public static WithCancellation ($asyncOperation: UnityEngine_Networking.UnityWebRequestAsyncOperation, $cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : UniTask$1<UnityEngine_Networking.UnityWebRequest>
        public static ToUniTask ($asyncOperation: UnityEngine_Networking.UnityWebRequestAsyncOperation, $progress?: System.IProgress$1<float>, $timing?: PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : UniTask$1<UnityEngine_Networking.UnityWebRequest>
        public static GetAsyncEventHandler ($unityEvent: UnityEngine_Events.UnityEvent, $cancellationToken: System_Threading.CancellationToken) : AsyncUnityEventHandler
        public static OnInvokeAsync ($unityEvent: UnityEngine_Events.UnityEvent, $cancellationToken: System_Threading.CancellationToken) : UniTask
        public static OnInvokeAsAsyncEnumerable ($unityEvent: UnityEngine_Events.UnityEvent, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<AsyncUnit>
        public static GetAsyncEventHandler<T> ($unityEvent: UnityEngine_Events.UnityEvent$1<T>, $cancellationToken: System_Threading.CancellationToken) : AsyncUnityEventHandler$1<T>
        public static OnInvokeAsync<T> ($unityEvent: UnityEngine_Events.UnityEvent$1<T>, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<T>
        public static OnInvokeAsAsyncEnumerable<T> ($unityEvent: UnityEngine_Events.UnityEvent$1<T>, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<T>
        public static GetAsyncClickEventHandler ($button: UnityEngine_UI.Button) : IAsyncClickEventHandler
        public static GetAsyncClickEventHandler ($button: UnityEngine_UI.Button, $cancellationToken: System_Threading.CancellationToken) : IAsyncClickEventHandler
        public static OnClickAsync ($button: UnityEngine_UI.Button) : UniTask
        public static OnClickAsync ($button: UnityEngine_UI.Button, $cancellationToken: System_Threading.CancellationToken) : UniTask
        public static OnClickAsAsyncEnumerable ($button: UnityEngine_UI.Button) : IUniTaskAsyncEnumerable$1<AsyncUnit>
        public static OnClickAsAsyncEnumerable ($button: UnityEngine_UI.Button, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<AsyncUnit>
        public static GetAsyncValueChangedEventHandler ($toggle: UnityEngine_UI.Toggle) : IAsyncValueChangedEventHandler$1<boolean>
        public static GetAsyncValueChangedEventHandler ($toggle: UnityEngine_UI.Toggle, $cancellationToken: System_Threading.CancellationToken) : IAsyncValueChangedEventHandler$1<boolean>
        public static OnValueChangedAsync ($toggle: UnityEngine_UI.Toggle) : UniTask$1<boolean>
        public static OnValueChangedAsync ($toggle: UnityEngine_UI.Toggle, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<boolean>
        public static OnValueChangedAsAsyncEnumerable ($toggle: UnityEngine_UI.Toggle) : IUniTaskAsyncEnumerable$1<boolean>
        public static OnValueChangedAsAsyncEnumerable ($toggle: UnityEngine_UI.Toggle, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<boolean>
        public static GetAsyncValueChangedEventHandler ($scrollbar: UnityEngine_UI.Scrollbar) : IAsyncValueChangedEventHandler$1<float>
        public static GetAsyncValueChangedEventHandler ($scrollbar: UnityEngine_UI.Scrollbar, $cancellationToken: System_Threading.CancellationToken) : IAsyncValueChangedEventHandler$1<float>
        public static OnValueChangedAsync ($scrollbar: UnityEngine_UI.Scrollbar) : UniTask$1<float>
        public static OnValueChangedAsync ($scrollbar: UnityEngine_UI.Scrollbar, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<float>
        public static OnValueChangedAsAsyncEnumerable ($scrollbar: UnityEngine_UI.Scrollbar) : IUniTaskAsyncEnumerable$1<float>
        public static OnValueChangedAsAsyncEnumerable ($scrollbar: UnityEngine_UI.Scrollbar, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<float>
        public static GetAsyncValueChangedEventHandler ($scrollRect: UnityEngine_UI.ScrollRect) : IAsyncValueChangedEventHandler$1<UnityEngine.Vector2>
        public static GetAsyncValueChangedEventHandler ($scrollRect: UnityEngine_UI.ScrollRect, $cancellationToken: System_Threading.CancellationToken) : IAsyncValueChangedEventHandler$1<UnityEngine.Vector2>
        public static OnValueChangedAsync ($scrollRect: UnityEngine_UI.ScrollRect) : UniTask$1<UnityEngine.Vector2>
        public static OnValueChangedAsync ($scrollRect: UnityEngine_UI.ScrollRect, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<UnityEngine.Vector2>
        public static OnValueChangedAsAsyncEnumerable ($scrollRect: UnityEngine_UI.ScrollRect) : IUniTaskAsyncEnumerable$1<UnityEngine.Vector2>
        public static OnValueChangedAsAsyncEnumerable ($scrollRect: UnityEngine_UI.ScrollRect, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<UnityEngine.Vector2>
        public static GetAsyncValueChangedEventHandler ($slider: UnityEngine_UI.Slider) : IAsyncValueChangedEventHandler$1<float>
        public static GetAsyncValueChangedEventHandler ($slider: UnityEngine_UI.Slider, $cancellationToken: System_Threading.CancellationToken) : IAsyncValueChangedEventHandler$1<float>
        public static OnValueChangedAsync ($slider: UnityEngine_UI.Slider) : UniTask$1<float>
        public static OnValueChangedAsync ($slider: UnityEngine_UI.Slider, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<float>
        public static OnValueChangedAsAsyncEnumerable ($slider: UnityEngine_UI.Slider) : IUniTaskAsyncEnumerable$1<float>
        public static OnValueChangedAsAsyncEnumerable ($slider: UnityEngine_UI.Slider, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<float>
        public static GetAsyncEndEditEventHandler ($inputField: UnityEngine_UI.InputField) : IAsyncEndEditEventHandler$1<string>
        public static GetAsyncEndEditEventHandler ($inputField: UnityEngine_UI.InputField, $cancellationToken: System_Threading.CancellationToken) : IAsyncEndEditEventHandler$1<string>
        public static OnEndEditAsync ($inputField: UnityEngine_UI.InputField) : UniTask$1<string>
        public static OnEndEditAsync ($inputField: UnityEngine_UI.InputField, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<string>
        public static OnEndEditAsAsyncEnumerable ($inputField: UnityEngine_UI.InputField) : IUniTaskAsyncEnumerable$1<string>
        public static OnEndEditAsAsyncEnumerable ($inputField: UnityEngine_UI.InputField, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<string>
        public static GetAsyncValueChangedEventHandler ($inputField: UnityEngine_UI.InputField) : IAsyncValueChangedEventHandler$1<string>
        public static GetAsyncValueChangedEventHandler ($inputField: UnityEngine_UI.InputField, $cancellationToken: System_Threading.CancellationToken) : IAsyncValueChangedEventHandler$1<string>
        public static OnValueChangedAsync ($inputField: UnityEngine_UI.InputField) : UniTask$1<string>
        public static OnValueChangedAsync ($inputField: UnityEngine_UI.InputField, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<string>
        public static OnValueChangedAsAsyncEnumerable ($inputField: UnityEngine_UI.InputField) : IUniTaskAsyncEnumerable$1<string>
        public static OnValueChangedAsAsyncEnumerable ($inputField: UnityEngine_UI.InputField, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<string>
        public static GetAsyncValueChangedEventHandler ($dropdown: UnityEngine_UI.Dropdown) : IAsyncValueChangedEventHandler$1<int>
        public static GetAsyncValueChangedEventHandler ($dropdown: UnityEngine_UI.Dropdown, $cancellationToken: System_Threading.CancellationToken) : IAsyncValueChangedEventHandler$1<int>
        public static OnValueChangedAsync ($dropdown: UnityEngine_UI.Dropdown) : UniTask$1<int>
        public static OnValueChangedAsync ($dropdown: UnityEngine_UI.Dropdown, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<int>
        public static OnValueChangedAsAsyncEnumerable ($dropdown: UnityEngine_UI.Dropdown) : IUniTaskAsyncEnumerable$1<int>
        public static OnValueChangedAsAsyncEnumerable ($dropdown: UnityEngine_UI.Dropdown, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<int>
    }

    class AsyncUnityEventHandler extends System.Object implements IUniTaskSource, IAsyncClickEventHandler {

        public constructor ($unityEvent: UnityEngine_Events.UnityEvent, $cancellationToken: System_Threading.CancellationToken, $callOnce: boolean)
        public OnInvokeAsync () : UniTask
        public Dispose () : void
    }

    interface IAsyncClickEventHandler extends System.IDisposable {

        OnClickAsync? () : UniTask
    }

    class AsyncUnityEventHandler$1<T> extends System.Object implements IAsyncValueChangedEventHandler$1<T>, IAsyncEndEditEventHandler$1<T>, IUniTaskSource$1<T>, IAsyncEndTextSelectionEventHandler$1<T>, IAsyncTextSelectionEventHandler$1<T>, IAsyncDeselectEventHandler$1<T>, IAsyncSelectEventHandler$1<T>, IAsyncSubmitEventHandler$1<T> {

        public constructor ($unityEvent: UnityEngine_Events.UnityEvent$1<T>, $cancellationToken: System_Threading.CancellationToken, $callOnce: boolean)
        public OnInvokeAsync () : UniTask$1<T>
        public Dispose () : void
    }

    interface IAsyncValueChangedEventHandler$1<T> extends System.IDisposable {

        OnValueChangedAsync? () : UniTask$1<T>
    }

    interface IAsyncEndEditEventHandler$1<T> extends System.IDisposable {

        OnEndEditAsync? () : UniTask$1<T>
    }

    interface IAsyncEndTextSelectionEventHandler$1<T> extends System.IDisposable {

        OnEndTextSelectionAsync? () : UniTask$1<T>
    }

    interface IAsyncTextSelectionEventHandler$1<T> extends System.IDisposable {

        OnTextSelectionAsync? () : UniTask$1<T>
    }

    interface IAsyncDeselectEventHandler$1<T> extends System.IDisposable {

        OnDeselectAsync? () : UniTask$1<T>
    }

    interface IAsyncSelectEventHandler$1<T> extends System.IDisposable {

        OnSelectAsync? () : UniTask$1<T>
    }

    interface IAsyncSubmitEventHandler$1<T> extends System.IDisposable {

        OnSubmitAsync? () : UniTask$1<T>
    }

    class UnityEventHandlerAsyncEnumerable extends System.Object implements IUniTaskAsyncEnumerable$1<AsyncUnit> {

        public constructor ($unityEvent: UnityEngine_Events.UnityEvent, $cancellationToken: System_Threading.CancellationToken)
        public GetAsyncEnumerator ($cancellationToken?: System_Threading.CancellationToken) : IUniTaskAsyncEnumerator$1<AsyncUnit>
    }

    class UnityEventHandlerAsyncEnumerable$1<T> extends System.Object implements IUniTaskAsyncEnumerable$1<T> {

        public constructor ($unityEvent: UnityEngine_Events.UnityEvent$1<T>, $cancellationToken: System_Threading.CancellationToken)
        public GetAsyncEnumerator ($cancellationToken?: System_Threading.CancellationToken) : IUniTaskAsyncEnumerator$1<T>
    }

    class UnityBindingExtensions {

        public static BindTo ($source: IUniTaskAsyncEnumerable$1<string>, $text: UnityEngine_UI.Text, $rebindOnError?: boolean) : void
        public static BindTo ($source: IUniTaskAsyncEnumerable$1<string>, $text: UnityEngine_UI.Text, $cancellationToken: System_Threading.CancellationToken, $rebindOnError?: boolean) : void
        public static BindTo<T> ($source: IUniTaskAsyncEnumerable$1<T>, $text: UnityEngine_UI.Text, $rebindOnError?: boolean) : void
        public static BindTo<T> ($source: IUniTaskAsyncEnumerable$1<T>, $text: UnityEngine_UI.Text, $cancellationToken: System_Threading.CancellationToken, $rebindOnError?: boolean) : void
        public static BindTo<T> ($source: AsyncReactiveProperty$1<T>, $text: UnityEngine_UI.Text, $rebindOnError?: boolean) : void
        public static BindTo ($source: IUniTaskAsyncEnumerable$1<boolean>, $selectable: UnityEngine_UI.Selectable, $rebindOnError?: boolean) : void
        public static BindTo ($source: IUniTaskAsyncEnumerable$1<boolean>, $selectable: UnityEngine_UI.Selectable, $cancellationToken: System_Threading.CancellationToken, $rebindOnError?: boolean) : void
        public static BindTo<TSource,TObject extends UnityEngine.MonoBehaviour> ($source: IUniTaskAsyncEnumerable$1<TSource>, $monoBehaviour: TObject, $bindAction: System.Action$2<TObject, TSource>, $rebindOnError?: boolean) : void
        public static BindTo<TSource,TObject> ($source: IUniTaskAsyncEnumerable$1<TSource>, $bindTarget: TObject, $bindAction: System.Action$2<TObject, TSource>, $cancellationToken: System_Threading.CancellationToken, $rebindOnError?: boolean) : void
    }

    class UnityWebRequestException extends System.Exception {

        public get UnityWebRequest(): UnityEngine_Networking.UnityWebRequest;
        public get Result(): UnityEngine_Networking_UnityWebRequest.Result;
        public get Error(): string;
        public get Text(): string;
        public get ResponseCode(): bigint;
        public get ResponseHeaders(): System_Collections_Generic.Dictionary$2<string, string>;
        public get Message(): string;

        public constructor ($unityWebRequest: UnityEngine_Networking.UnityWebRequest)
    }

    interface IUniTaskAsyncEnumerable$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.StateExtensions.ToReadOnlyAsyncReactiveProperty<T>
        */
        ToReadOnlyAsyncReactiveProperty? ($cancellationToken: System_Threading.CancellationToken) : ReadOnlyAsyncReactiveProperty$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.StateExtensions.ToReadOnlyAsyncReactiveProperty<T>
        */
        ToReadOnlyAsyncReactiveProperty? ($initialValue: T, $cancellationToken: System_Threading.CancellationToken) : ReadOnlyAsyncReactiveProperty$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskAsyncEnumerableExtensions.WithCancellation<T>
        */
        WithCancellation? ($cancellationToken: System_Threading.CancellationToken) : UniTaskCancelableAsyncEnumerable$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.UnityBindingExtensions.BindTo<T>
        */
        BindTo? ($text: UnityEngine_UI.Text, $rebindOnError?: boolean) : void
        /**
        * @extension Cysharp.Threading.Tasks.UnityBindingExtensions.BindTo<T>
        */
        BindTo? ($text: UnityEngine_UI.Text, $cancellationToken: System_Threading.CancellationToken, $rebindOnError?: boolean) : void
        /**
        * @extension Cysharp.Threading.Tasks.UnityBindingExtensions.BindTo<T, TObject extends UnityEngine.MonoBehaviour>
        */
        BindTo?<TObject extends UnityEngine.MonoBehaviour> ($monoBehaviour: TObject, $bindAction: System.Action$2<TObject, T>, $rebindOnError?: boolean) : void
        /**
        * @extension Cysharp.Threading.Tasks.UnityBindingExtensions.BindTo<T, TObject>
        */
        BindTo?<TObject> ($bindTarget: TObject, $bindAction: System.Action$2<TObject, T>, $cancellationToken: System_Threading.CancellationToken, $rebindOnError?: boolean) : void
    }

    interface UniTask {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.ToCancellationToken
        */
        ToCancellationToken () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.ToCancellationToken
        */
        ToCancellationToken ($linkToken: System_Threading.CancellationToken) : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.AsTask
        */
        AsTask () : System_Threading_Tasks.Task
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.ToAsyncLazy
        */
        ToAsyncLazy () : AsyncLazy
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.AttachExternalCancellation
        */
        AttachExternalCancellation ($cancellationToken: System_Threading.CancellationToken) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.ToCoroutine
        */
        ToCoroutine ($exceptionHandler?: System.Action$1<System.Exception>) : System_Collections.IEnumerator
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.Timeout
        */
        Timeout ($timeout: System.TimeSpan, $delayType?: DelayType, $timeoutCheckTiming?: PlayerLoopTiming, $taskCancellationTokenSource?: System_Threading.CancellationTokenSource) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.TimeoutWithoutException
        */
        TimeoutWithoutException ($timeout: System.TimeSpan, $delayType?: DelayType, $timeoutCheckTiming?: PlayerLoopTiming, $taskCancellationTokenSource?: System_Threading.CancellationTokenSource) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.Forget
        */
        Forget () : void
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.Forget
        */
        Forget ($exceptionHandler: System.Action$1<System.Exception>, $handleExceptionOnMainThread?: boolean) : void
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.ContinueWith
        */
        ContinueWith ($continuationFunction: System.Action) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.ContinueWith
        */
        ContinueWith ($continuationFunction: System.Func$1<UniTask>) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.ContinueWith<T>
        */
        ContinueWith<T> ($continuationFunction: System.Func$1<T>) : UniTask$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskObservableExtensions.ToObservable
        */
        ToObservable () : System.IObservable$1<AsyncUnit>
    }

    interface UniTask$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.ToCancellationToken<T>
        */
        ToCancellationToken () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.ToCancellationToken<T>
        */
        ToCancellationToken ($linkToken: System_Threading.CancellationToken) : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.AsTask<T>
        */
        AsTask () : System_Threading_Tasks.Task$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.ToAsyncLazy<T>
        */
        ToAsyncLazy () : AsyncLazy$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.AttachExternalCancellation<T>
        */
        AttachExternalCancellation ($cancellationToken: System_Threading.CancellationToken) : UniTask$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.ToCoroutine<T>
        */
        ToCoroutine ($resultHandler?: System.Action$1<T>, $exceptionHandler?: System.Action$1<System.Exception>) : System_Collections.IEnumerator
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.Timeout<T>
        */
        Timeout ($timeout: System.TimeSpan, $delayType?: DelayType, $timeoutCheckTiming?: PlayerLoopTiming, $taskCancellationTokenSource?: System_Threading.CancellationTokenSource) : UniTask$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.TimeoutWithoutException<T>
        */
        TimeoutWithoutException ($timeout: System.TimeSpan, $delayType?: DelayType, $timeoutCheckTiming?: PlayerLoopTiming, $taskCancellationTokenSource?: System_Threading.CancellationTokenSource) : UniTask$1<System.ValueTuple$2<boolean, T>>
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.Forget<T>
        */
        Forget () : void
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.Forget<T>
        */
        Forget ($exceptionHandler: System.Action$1<System.Exception>, $handleExceptionOnMainThread?: boolean) : void
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.ContinueWith<T>
        */
        ContinueWith ($continuationFunction: System.Action$1<T>) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.ContinueWith<T>
        */
        ContinueWith ($continuationFunction: System.Func$2<T, UniTask>) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.ContinueWith<T, TR>
        */
        ContinueWith<TR> ($continuationFunction: System.Func$2<T, TR>) : UniTask$1<TR>
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskObservableExtensions.ToObservable<T>
        */
        ToObservable () : System.IObservable$1<T>
    }

    interface AsyncReactiveProperty$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
        /**
        * @extension Cysharp.Threading.Tasks.UnityBindingExtensions.BindTo<T>
        */
        BindTo ($text: UnityEngine_UI.Text, $rebindOnError?: boolean) : void
    }

    interface ReadOnlyAsyncReactiveProperty$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface PlayerLoopTimer {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface TimeoutController {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface AsyncUnityEventHandler {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface IAsyncClickEventHandler {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo? ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface AsyncUnityEventHandler$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface IAsyncValueChangedEventHandler$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo? ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface IAsyncEndEditEventHandler$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo? ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface IAsyncEndTextSelectionEventHandler$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo? ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface IAsyncTextSelectionEventHandler$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo? ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface IAsyncDeselectEventHandler$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo? ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface IAsyncSelectEventHandler$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo? ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface IAsyncSubmitEventHandler$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo? ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface ChannelClosedException {

        /**
        * @extension Cysharp.Threading.Tasks.ExceptionExtensions.IsOperationCanceledException
        */
        IsOperationCanceledException () : boolean
    }

    interface UnityWebRequestException {

        /**
        * @extension Cysharp.Threading.Tasks.ExceptionExtensions.IsOperationCanceledException
        */
        IsOperationCanceledException () : boolean
    }

    interface UniTaskStatus {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskStatusExtensions.IsCompleted
        */
        IsCompleted () : boolean
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskStatusExtensions.IsCompletedSuccessfully
        */
        IsCompletedSuccessfully () : boolean
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskStatusExtensions.IsCanceled
        */
        IsCanceled () : boolean
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskStatusExtensions.IsFaulted
        */
        IsFaulted () : boolean
    }

    interface UniTask& {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskValueTaskExtensions.AsValueTask
        */
        AsValueTask () : System_Threading_Tasks.ValueTask
    }

    interface UniTask$1& {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskValueTaskExtensions.AsValueTask<T>
        */
        AsValueTask<T> () : System_Threading_Tasks.ValueTask$1<T>
    }

}

declare module 'Cysharp.Threading.Tasks.UniTask' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    class Awaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($task: $Ref<Cysharp_Threading_Tasks.UniTask>)
        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
        public SourceOnCompleted ($continuation: System.Action$1<any>, $state: any) : void
    }

}

declare module 'System.Runtime.CompilerServices' {

    interface ICriticalNotifyCompletion extends INotifyCompletion {

    }

    interface INotifyCompletion {

    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'
    import * as System_Runtime_InteropServices from 'System.Runtime.InteropServices'
    import * as System_Collections from 'System.Collections'
    import * as System_Reflection from 'System.Reflection'
    import * as System_Threading from 'System.Threading'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    interface Action {
        () : void; 
        Invoke?: () => void;
    }
    var Action: { new (func: () => void): Action; }

    interface MulticastDelegate {
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
    }
    var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }

    interface Delegate extends ICloneable, System_Runtime_Serialization.ISerializable {

    }

    interface ICloneable {

    }

    interface Action$1<T> {
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
    }

    interface Func$1<TResult> {
        () : TResult; 
        Invoke?: () => TResult;
    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IFormattable {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

    interface TimeSpan extends IFormattable, ISpanFormattable, IComparable, IComparable$1<TimeSpan>, IEquatable$1<TimeSpan> {

    }

    interface IComparable$1<T> {

        CompareTo? ($other: T) : int
    }

    interface IEquatable$1<T> {

        Equals? ($other: T) : boolean
    }

    interface Exception extends System_Runtime_InteropServices._Exception, System_Runtime_Serialization.ISerializable {

    }

    class ValueTuple$2<T1,T2> extends ValueType implements IComparable, IComparable$1<ValueTuple$2<T1, T2>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$2<T1, T2>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

        public Item1 : T1
        public Item2 : T2

        public constructor ($item1: T1, $item2: T2)
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTuple$2<T1, T2>) : boolean
        public CompareTo ($other: ValueTuple$2<T1, T2>) : int
        public GetHashCode () : int
        public ToString () : string
    }

    interface Func$2<T,TResult> {
        (arg: T) : TResult; 
        Invoke?: (arg: T) => TResult;
    }

    interface ValueTuple$3<T1,T2,T3> extends IComparable, IComparable$1<ValueTuple$3<T1, T2, T3>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$3<T1, T2, T3>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

    }

    interface ValueTuple$4<T1,T2,T3,T4> extends IComparable, IComparable$1<ValueTuple$4<T1, T2, T3, T4>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$4<T1, T2, T3, T4>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

    }

    interface ValueTuple$5<T1,T2,T3,T4,T5> extends IComparable, IComparable$1<ValueTuple$5<T1, T2, T3, T4, T5>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$5<T1, T2, T3, T4, T5>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

    }

    interface ValueTuple$6<T1,T2,T3,T4,T5,T6> extends IComparable, IComparable$1<ValueTuple$6<T1, T2, T3, T4, T5, T6>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$6<T1, T2, T3, T4, T5, T6>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

    }

    interface ValueTuple$7<T1,T2,T3,T4,T5,T6,T7> extends IComparable, IComparable$1<ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

    }

    interface ValueTuple$8<T1,T2,T3,T4,T5,T6,T7,TRest> extends IComparable, IComparable$1<ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

    }

    interface ValueTuple$1<T1> extends IComparable, IComparable$1<ValueTuple$1<T1>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$1<T1>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

    }

    interface IDisposable {

    }

    interface IAsyncDisposable {

    }

    interface InvalidOperationException {

    }

    interface SystemException {

    }

    interface Func$3<T1,T2,TResult> {
        (arg1: T1, arg2: T2) : TResult; 
        Invoke?: (arg1: T1, arg2: T2) => TResult;
    }

    interface IProgress$1<T> {

    }

    interface Type extends System_Reflection.IReflect, System_Runtime_InteropServices._Type {

    }

    interface IAsyncResult {

    }

    interface IObservable$1<T> {

    }

    interface Action$2<T1,T2> {
        (arg1: T1, arg2: T2) : void; 
        Invoke?: (arg1: T1, arg2: T2) => void;
    }

    interface IDisposable {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo? ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface IObservable$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskObservableExtensions.ToUniTask<T>
        */
        ToUniTask? ($useFirstValue?: boolean, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<T>
    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

    interface IDeserializationCallback {

    }

}

declare module 'System.Collections' {
    import * as Cysharp_Threading_Tasks_UniTask from 'Cysharp.Threading.Tasks.UniTask'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Threading from 'System.Threading'
    import * as UnityEngine from 'UnityEngine'

    interface IEnumerator {

    }

    interface IStructuralComparable {

    }

    interface IStructuralEquatable {

    }

    interface IEnumerable {

    }

    interface IDictionary extends ICollection {

    }

    interface ICollection extends IEnumerable {

    }

    interface IEnumerator {

        /**
        * @extension Cysharp.Threading.Tasks.EnumeratorAsyncExtensions.GetAwaiter
        */
        GetAwaiter? () : Cysharp_Threading_Tasks_UniTask.Awaiter
        /**
        * @extension Cysharp.Threading.Tasks.EnumeratorAsyncExtensions.WithCancellation
        */
        WithCancellation? ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.EnumeratorAsyncExtensions.ToUniTask
        */
        ToUniTask? ($timing?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.EnumeratorAsyncExtensions.ToUniTask
        */
        ToUniTask? ($coroutineRunner: UnityEngine.MonoBehaviour) : Cysharp_Threading_Tasks.UniTask
    }

}

declare module 'Cysharp.Threading.Tasks.YieldAwaitable' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    class Awaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($timing: Cysharp_Threading_Tasks.PlayerLoopTiming)
        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

}

declare module 'System.Threading' {
    import * as System from 'System'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as UnityEngine from 'UnityEngine'

    interface CancellationToken {

    }

    interface SynchronizationContext {

    }

    interface CancellationTokenRegistration extends System.IAsyncDisposable, System.IDisposable, System.IEquatable$1<CancellationTokenRegistration> {

    }

    interface CancellationTokenSource extends System.IDisposable {

    }

    interface SendOrPostCallback {
        (state: any) : void; 
        Invoke?: (state: any) => void;
    }
    var SendOrPostCallback: { new (func: (state: any) => void): SendOrPostCallback; }

    interface CancellationToken {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.ToUniTask
        */
        ToUniTask () : System.ValueTuple$2<Cysharp_Threading_Tasks.UniTask, CancellationTokenRegistration>
        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.WaitUntilCanceled
        */
        WaitUntilCanceled () : Cysharp_Threading_Tasks.CancellationTokenAwaitable
        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.RegisterWithoutCaptureExecutionContext
        */
        RegisterWithoutCaptureExecutionContext ($callback: System.Action) : CancellationTokenRegistration
        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.RegisterWithoutCaptureExecutionContext
        */
        RegisterWithoutCaptureExecutionContext ($callback: System.Action$1<any>, $state: any) : CancellationTokenRegistration
    }

    interface CancellationTokenSource {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenSourceExtensions.CancelAfterSlim
        * @methodSwap CancelAfterSlim_EBB7509C_H2E5EE344
        */
        CancelAfterSlim ($millisecondsDelay: int, $delayType?: Cysharp_Threading_Tasks.DelayType, $delayTiming?: Cysharp_Threading_Tasks.PlayerLoopTiming) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenSourceExtensions.CancelAfterSlim
        */
        CancelAfterSlim ($delayTimeSpan: System.TimeSpan, $delayType?: Cysharp_Threading_Tasks.DelayType, $delayTiming?: Cysharp_Threading_Tasks.PlayerLoopTiming) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenSourceExtensions.RegisterRaiseCancelOnDestroy
        */
        RegisterRaiseCancelOnDestroy ($component: UnityEngine.Component) : void
        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenSourceExtensions.RegisterRaiseCancelOnDestroy
        */
        RegisterRaiseCancelOnDestroy ($gameObject: UnityEngine.GameObject) : void
    }

}

declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Threading from 'System.Threading'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as Cysharp_Threading_Tasks_UnityAsyncExtensions from 'Cysharp.Threading.Tasks.UnityAsyncExtensions'

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
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

    /**
    * The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback.
    */
    enum LogType {
        Error = 0,
        Assert = 1,
        Warning = 2,
        Log = 3,
        Exception = 4 
    }

    /**
    * Asynchronous load request from an AssetBundle.
    */
    interface AssetBundleRequest {

    }

    /**
    * Asynchronous load request from the Resources bundle.
    */
    interface ResourceRequest {

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
    * AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime.
    */
    interface AssetBundle {

    }

    /**
    * Asynchronous create request for an AssetBundle.
    */
    interface AssetBundleCreateRequest {

    }

    /**
    * Interface to receive callbacks upon serialization and deserialization.
    */
    interface ISerializationCallbackReceiver {

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    interface MonoBehaviour {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
    }

    interface GameObject {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
    }

    interface Behaviour {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
    }

    interface Component {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
    }

    interface AssetBundleRequest {

        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.AwaitForAllAssets
        */
        AwaitForAllAssets () : Cysharp_Threading_Tasks_UnityAsyncExtensions.AssetBundleRequestAllAssetsAwaiter
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.AwaitForAllAssets
        */
        AwaitForAllAssets ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<Object[]>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.AwaitForAllAssets
        */
        AwaitForAllAssets ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : Cysharp_Threading_Tasks.UniTask$1<Object[]>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.AwaitForAllAssets
        */
        AwaitForAllAssets ($progress?: System.IProgress$1<float>, $timing?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.UniTask$1<Object[]>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_UnityAsyncExtensions.AsyncOperationAwaiter
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.ToUniTask
        */
        ToUniTask ($progress?: System.IProgress$1<float>, $timing?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_UnityAsyncExtensions.ResourceRequestAwaiter
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<Object>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : Cysharp_Threading_Tasks.UniTask$1<Object>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.ToUniTask
        */
        ToUniTask ($progress?: System.IProgress$1<float>, $timing?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.UniTask$1<Object>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_UnityAsyncExtensions.AssetBundleRequestAwaiter
    }

    interface AsyncOperation {

        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_UnityAsyncExtensions.AsyncOperationAwaiter
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.ToUniTask
        */
        ToUniTask ($progress?: System.IProgress$1<float>, $timing?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.UniTask
    }

    interface AssetBundleCreateRequest {

        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_UnityAsyncExtensions.AsyncOperationAwaiter
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.ToUniTask
        */
        ToUniTask ($progress?: System.IProgress$1<float>, $timing?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_UnityAsyncExtensions.AssetBundleCreateRequestAwaiter
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<AssetBundle>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : Cysharp_Threading_Tasks.UniTask$1<AssetBundle>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.ToUniTask
        */
        ToUniTask ($progress?: System.IProgress$1<float>, $timing?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.UniTask$1<AssetBundle>
    }

}

declare module 'System.Runtime.InteropServices' {

    interface _Exception {

    }

    interface _Type {

    }

    interface _MemberInfo {

    }

}

declare module 'Cysharp.Threading.Tasks.UniTask$1' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    class Awaiter<T> extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($task: $Ref<Cysharp_Threading_Tasks.UniTask$1<T>>)
        public GetResult () : T
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
        public SourceOnCompleted ($continuation: System.Action$1<any>, $state: any) : void
    }

}

declare module 'System.Threading.Tasks' {
    import * as System from 'System'
    import * as System_Threading from 'System.Threading'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    interface ValueTask$1<TResult> extends System.IEquatable$1<ValueTask$1<TResult>> {

    }

    interface ValueTask extends System.IEquatable$1<ValueTask> {

    }

    interface Task$1<TResult> {

    }

    interface Task extends System.IAsyncResult, System_Threading.IThreadPoolWorkItem, System.IDisposable {

    }

    interface Task$1<TResult> {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.AsUniTask<TResult>
        */
        AsUniTask ($useCurrentSynchronizationContext?: boolean) : Cysharp_Threading_Tasks.UniTask$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.AsUniTask
        */
        AsUniTask ($useCurrentSynchronizationContext?: boolean) : Cysharp_Threading_Tasks.UniTask
    }

    interface Task {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
        /**
        * @extension Cysharp.Threading.Tasks.UniTaskExtensions.AsUniTask
        */
        AsUniTask ($useCurrentSynchronizationContext?: boolean) : Cysharp_Threading_Tasks.UniTask
    }

    interface ValueTask$1<TResult> {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskValueTaskExtensions.AsUniTask<TResult>
        */
        AsUniTask () : Cysharp_Threading_Tasks.UniTask$1<T>
    }

    interface ValueTask {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskValueTaskExtensions.AsUniTask
        */
        AsUniTask () : Cysharp_Threading_Tasks.UniTask
    }

}

declare module 'System.Threading.Tasks.Sources' {

    interface IValueTaskSource {

    }

    interface IValueTaskSource$1<TResult> {

    }

}

declare module 'UnityEngine.Events' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Threading from 'System.Threading'

    /**
    * Zero argument delegate used by UnityEvents.
    */
    interface UnityAction {
        () : void; 
        Invoke?: () => void;
    }
    var UnityAction: { new (func: () => void): UnityAction; }

    /**
    * A zero argument persistent callback that can be saved with the Scene.
    */
    interface UnityEvent {

    }

    /**
    * Abstract base class for UnityEvents.
    */
    interface UnityEventBase extends UnityEngine.ISerializationCallbackReceiver {

    }

    /**
    * One argument version of UnityEvent.
    */
    interface UnityEvent$1<T0> {

    }

    interface UnityEvent {

        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncEventHandler
        */
        GetAsyncEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.AsyncUnityEventHandler
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnInvokeAsync
        */
        OnInvokeAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnInvokeAsAsyncEnumerable
        */
        OnInvokeAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<Cysharp_Threading_Tasks.AsyncUnit>
    }

    interface UnityEvent$1<T0> {

        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncEventHandler<T0>
        */
        GetAsyncEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.AsyncUnityEventHandler$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnInvokeAsync<T0>
        */
        OnInvokeAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnInvokeAsAsyncEnumerable<T0>
        */
        OnInvokeAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>
    }

}

declare module 'Cysharp.Threading.Tasks.SwitchToMainThreadAwaitable' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Threading from 'System.Threading'

    class Awaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($playerLoopTiming: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken: System_Threading.CancellationToken)
        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

}

declare module 'Cysharp.Threading.Tasks.ReturnToMainThread' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Threading from 'System.Threading'

    class Awaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($timing: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken: System_Threading.CancellationToken)
        public GetAwaiter () : Awaiter
        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

}

declare module 'Cysharp.Threading.Tasks.SwitchToThreadPoolAwaitable' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'

    class Awaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

}

declare module 'Cysharp.Threading.Tasks.SwitchToTaskPoolAwaitable' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'

    class Awaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

}

declare module 'Cysharp.Threading.Tasks.SwitchToSynchronizationContextAwaitable' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as System_Threading from 'System.Threading'

    class Awaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($synchronizationContext: System_Threading.SynchronizationContext, $cancellationToken: System_Threading.CancellationToken)
        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

}

declare module 'Cysharp.Threading.Tasks.ReturnToSynchronizationContext' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as System_Threading from 'System.Threading'

    class Awaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($synchronizationContext: System_Threading.SynchronizationContext, $dontPostWhenSameContext: boolean, $cancellationToken: System_Threading.CancellationToken)
        public GetAwaiter () : Awaiter
        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

}

declare module 'System.Collections.Generic' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    interface IEqualityComparer$1<T> {

        Equals? ($x: T, $y: T) : boolean
        GetHashCode? ($obj: T) : int
    }

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

    }

    interface IComparer$1<T> {

    }

    interface Dictionary$2<TKey,TValue> extends IDictionary$2<TKey,TValue>, System_Collections.IDictionary, System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, IReadOnlyDictionary$2<TKey,TValue> {

    }

    interface IDictionary$2<TKey,TValue> extends ICollection$1<KeyValuePair$2<TKey, TValue>> {

    }

    interface ICollection$1<T> extends IEnumerable$1<T> {

    }

    interface KeyValuePair$2<TKey,TValue> {

    }

    interface IReadOnlyDictionary$2<TKey,TValue> extends IReadOnlyCollection$1<KeyValuePair$2<TKey, TValue>> {

    }

    interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {

    }

    interface IEnumerable$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.EnumerableAsyncExtensions.Select<T>
        */
        Select? ($selector: System.Func$2<T, Cysharp_Threading_Tasks.UniTask>) : IEnumerable$1<Cysharp_Threading_Tasks.UniTask>
        /**
        * @extension Cysharp.Threading.Tasks.EnumerableAsyncExtensions.Select<T, TR>
        */
        Select?<TR> ($selector: System.Func$2<T, Cysharp_Threading_Tasks.UniTask$1<TR>>) : IEnumerable$1<Cysharp_Threading_Tasks.UniTask$1<TR>>
        /**
        * @extension Cysharp.Threading.Tasks.EnumerableAsyncExtensions.Select<T>
        */
        Select? ($selector: System.Func$3<T, int, Cysharp_Threading_Tasks.UniTask>) : IEnumerable$1<Cysharp_Threading_Tasks.UniTask>
        /**
        * @extension Cysharp.Threading.Tasks.EnumerableAsyncExtensions.Select<T, TR>
        */
        Select?<TR> ($selector: System.Func$3<T, int, Cysharp_Threading_Tasks.UniTask$1<TR>>) : IEnumerable$1<Cysharp_Threading_Tasks.UniTask$1<TR>>
    }

}

declare module 'Cysharp.Threading.Tasks.CancellationTokenAwaitable' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as System_Threading from 'System.Threading'

    class Awaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($cancellationToken: System_Threading.CancellationToken)
        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

}

declare module 'Cysharp.Threading.Tasks.UniTaskCancelableAsyncEnumerable$1' {
    import * as System from 'System'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    class Enumerator<T> extends System.ValueType {

        public get Current(): T;

        public MoveNextAsync () : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public DisposeAsync () : Cysharp_Threading_Tasks.UniTask
    }

}

declare module 'UnityEngine.LowLevel' {
    import * as System from 'System'

    /**
    * The representation of a single system being updated by the player loop in Unity.
    */
    interface PlayerLoopSystem {

    }

}

declare module 'System.Reflection' {
    import * as System from 'System'
    import * as System_Runtime_InteropServices from 'System.Runtime.InteropServices'

    interface IReflect {

    }

    interface MemberInfo extends ICustomAttributeProvider, System_Runtime_InteropServices._MemberInfo {

    }

    interface ICustomAttributeProvider {

    }

}

declare module 'Cysharp.Threading.Tasks.UnityAsyncExtensions' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_Networking from 'UnityEngine.Networking'

    class AssetBundleRequestAllAssetsAwaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($asyncOperation: UnityEngine.AssetBundleRequest)
        public GetAwaiter () : AssetBundleRequestAllAssetsAwaiter
        public GetResult () : UnityEngine.Object[]
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

    class AsyncOperationAwaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($asyncOperation: UnityEngine.AsyncOperation)
        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

    class ResourceRequestAwaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($asyncOperation: UnityEngine.ResourceRequest)
        public GetResult () : UnityEngine.Object
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

    class AssetBundleRequestAwaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($asyncOperation: UnityEngine.AssetBundleRequest)
        public GetResult () : UnityEngine.Object
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

    class AssetBundleCreateRequestAwaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($asyncOperation: UnityEngine.AssetBundleCreateRequest)
        public GetResult () : UnityEngine.AssetBundle
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

    class UnityWebRequestAsyncOperationAwaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($asyncOperation: UnityEngine_Networking.UnityWebRequestAsyncOperation)
        public GetResult () : UnityEngine_Networking.UnityWebRequest
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

}

declare module 'UnityEngine.Rendering' {
    import * as System from 'System'
    import * as Cysharp_Threading_Tasks_UniTask$1 from 'Cysharp.Threading.Tasks.UniTask$1'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Threading from 'System.Threading'

    /**
    * Represents an asynchronous request for a GPU resource.
    */
    interface AsyncGPUReadbackRequest {

    }

    interface AsyncGPUReadbackRequest {

        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_UniTask$1.Awaiter<AsyncGPUReadbackRequest>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<AsyncGPUReadbackRequest>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : Cysharp_Threading_Tasks.UniTask$1<AsyncGPUReadbackRequest>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.ToUniTask
        */
        ToUniTask ($timing?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.UniTask$1<AsyncGPUReadbackRequest>
    }

}

declare module 'Unity.Jobs' {
    import * as System from 'System'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Threading from 'System.Threading'
    import * as Cysharp_Threading_Tasks_UniTask from 'Cysharp.Threading.Tasks.UniTask'

    /**
    * A handle to a job, which uniquely identifies a job scheduled in the job system.
    */
    interface JobHandle extends System.IEquatable$1<JobHandle> {

    }

    interface JobHandle {

        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WaitAsync
        */
        WaitAsync ($waitTiming: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_UniTask.Awaiter
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.ToUniTask
        */
        ToUniTask ($waitTiming: Cysharp_Threading_Tasks.PlayerLoopTiming) : Cysharp_Threading_Tasks.UniTask
    }

}

declare module 'UnityEngine.Networking' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as System_Threading from 'System.Threading'
    import * as Cysharp_Threading_Tasks_UnityAsyncExtensions from 'Cysharp.Threading.Tasks.UnityAsyncExtensions'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    /**
    * Provides methods to communicate with web servers.
    */
    interface UnityWebRequest extends System.IDisposable {

    }

    /**
    * Asynchronous operation object returned from UnityWebRequest.SendWebRequest().
    * You can yield until it continues, register an event handler with AsyncOperation.completed, or manually check whether it's done (AsyncOperation.isDone) or progress (AsyncOperation.progress).
    */
    interface UnityWebRequestAsyncOperation {

    }

    interface UnityWebRequest {

        /**
        * @extension Cysharp.Threading.Tasks.CancellationTokenExtensions.AddTo
        */
        AddTo ($cancellationToken: System_Threading.CancellationToken) : System_Threading.CancellationTokenRegistration
    }

    interface UnityWebRequestAsyncOperation {

        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_UnityAsyncExtensions.AsyncOperationAwaiter
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.ToUniTask
        */
        ToUniTask ($progress?: System.IProgress$1<float>, $timing?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_UnityAsyncExtensions.UnityWebRequestAsyncOperationAwaiter
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<UnityWebRequest>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken, $cancelImmediately: boolean) : Cysharp_Threading_Tasks.UniTask$1<UnityWebRequest>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.ToUniTask
        */
        ToUniTask ($progress?: System.IProgress$1<float>, $timing?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancellationToken?: System_Threading.CancellationToken, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.UniTask$1<UnityWebRequest>
    }

}

declare module 'UnityEngine.UI' {
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as System_Threading from 'System.Threading'
    import * as UnityEngine from 'UnityEngine'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System from 'System'

    interface Button extends UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler {

    }

    interface Selectable extends UnityEngine_EventSystems.IPointerEnterHandler, UnityEngine_EventSystems.ISelectHandler, UnityEngine_EventSystems.IPointerExitHandler, UnityEngine_EventSystems.IDeselectHandler, UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IPointerUpHandler, UnityEngine_EventSystems.IMoveHandler {

    }

    interface Toggle extends UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler, ICanvasElement {

    }

    interface ICanvasElement {

    }

    interface Scrollbar extends UnityEngine_EventSystems.IBeginDragHandler, UnityEngine_EventSystems.IInitializePotentialDragHandler, UnityEngine_EventSystems.IDragHandler, ICanvasElement {

    }

    interface ScrollRect extends ILayoutGroup, UnityEngine_EventSystems.IBeginDragHandler, UnityEngine_EventSystems.IInitializePotentialDragHandler, UnityEngine_EventSystems.IDragHandler, UnityEngine_EventSystems.IEndDragHandler, ICanvasElement, UnityEngine_EventSystems.IScrollHandler, ILayoutElement {

    }

    interface ILayoutGroup extends ILayoutController {

    }

    interface ILayoutController {

    }

    interface ILayoutElement {

    }

    interface Slider extends UnityEngine_EventSystems.IInitializePotentialDragHandler, UnityEngine_EventSystems.IDragHandler, ICanvasElement {

    }

    interface InputField extends UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.IBeginDragHandler, UnityEngine_EventSystems.IDragHandler, UnityEngine_EventSystems.IEndDragHandler, ICanvasElement, UnityEngine_EventSystems.IUpdateSelectedHandler, ILayoutElement {

    }

    interface Dropdown extends UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.ICancelHandler {

    }

    interface Text extends ILayoutElement {

    }

    interface MaskableGraphic extends IClippable, IMaterialModifier, IMaskable {

    }

    interface IClippable {

    }

    interface IMaterialModifier {

    }

    interface IMaskable {

    }

    interface Graphic extends ICanvasElement {

    }

    interface Button {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncClickEventHandler
        */
        GetAsyncClickEventHandler () : Cysharp_Threading_Tasks.IAsyncClickEventHandler
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncClickEventHandler
        */
        GetAsyncClickEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncClickEventHandler
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnClickAsync
        */
        OnClickAsync () : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnClickAsync
        */
        OnClickAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnClickAsAsyncEnumerable
        */
        OnClickAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<Cysharp_Threading_Tasks.AsyncUnit>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnClickAsAsyncEnumerable
        */
        OnClickAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<Cysharp_Threading_Tasks.AsyncUnit>
    }

    interface Selectable {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
    }

    interface Toggle {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler () : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync () : Cysharp_Threading_Tasks.UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<boolean>
    }

    interface Scrollbar {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler () : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync () : Cysharp_Threading_Tasks.UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<float>
    }

    interface ScrollRect {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler () : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<UnityEngine.Vector2>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<UnityEngine.Vector2>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync () : Cysharp_Threading_Tasks.UniTask$1<UnityEngine.Vector2>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<UnityEngine.Vector2>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<UnityEngine.Vector2>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<UnityEngine.Vector2>
    }

    interface Slider {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler () : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync () : Cysharp_Threading_Tasks.UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<float>
    }

    interface InputField {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncEndEditEventHandler
        */
        GetAsyncEndEditEventHandler () : Cysharp_Threading_Tasks.IAsyncEndEditEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncEndEditEventHandler
        */
        GetAsyncEndEditEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncEndEditEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnEndEditAsync
        */
        OnEndEditAsync () : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnEndEditAsync
        */
        OnEndEditAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnEndEditAsAsyncEnumerable
        */
        OnEndEditAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnEndEditAsAsyncEnumerable
        */
        OnEndEditAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler () : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync () : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
    }

    interface Dropdown {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler () : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync () : Cysharp_Threading_Tasks.UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<int>
    }

    interface Text {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
    }

    interface MaskableGraphic {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
    }

    interface Graphic {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
    }

}

declare module 'UnityEngine.EventSystems' {
    import * as UnityEngine from 'UnityEngine'
    import * as System_Threading from 'System.Threading'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System from 'System'

    interface ISubmitHandler extends IEventSystemHandler {

    }

    interface IEventSystemHandler {

    }

    interface IPointerClickHandler extends IEventSystemHandler {

    }

    interface IPointerEnterHandler extends IEventSystemHandler {

    }

    interface ISelectHandler extends IEventSystemHandler {

    }

    interface IPointerExitHandler extends IEventSystemHandler {

    }

    interface IDeselectHandler extends IEventSystemHandler {

    }

    interface IPointerDownHandler extends IEventSystemHandler {

    }

    interface IPointerUpHandler extends IEventSystemHandler {

    }

    interface IMoveHandler extends IEventSystemHandler {

    }

    interface UIBehaviour {

    }

    interface IBeginDragHandler extends IEventSystemHandler {

    }

    interface IInitializePotentialDragHandler extends IEventSystemHandler {

    }

    interface IDragHandler extends IEventSystemHandler {

    }

    interface IEndDragHandler extends IEventSystemHandler {

    }

    interface IScrollHandler extends IEventSystemHandler {

    }

    interface IUpdateSelectedHandler extends IEventSystemHandler {

    }

    interface ICancelHandler extends IEventSystemHandler {

    }

    interface UIBehaviour {

        /**
        * @extension Cysharp.Threading.Tasks.UniTaskCancellationExtensions.GetCancellationTokenOnDestroy
        */
        GetCancellationTokenOnDestroy () : System_Threading.CancellationToken
        /**
        * @extension Cysharp.Threading.Tasks.UnityAsyncExtensions.StartAsyncCoroutine
        */
        StartAsyncCoroutine ($asyncCoroutine: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.UniTask
    }

}

declare module 'UnityEngine.Networking.UnityWebRequest' {

    /**
    * Defines codes describing the possible outcomes of a UnityWebRequest.
    */
    enum Result {
        InProgress = 0,
        Success = 1,
        ConnectionError = 2,
        ProtocolError = 3,
        DataProcessingError = 4 
    }

}

declare module 'Cysharp.Threading.Tasks.UniTaskLoopRunners' {
    import * as System from 'System'

    class UniTaskLoopRunnerInitialization extends System.ValueType {

    }

    class UniTaskLoopRunnerEarlyUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerFixedUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerPreUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerPreLateUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerPostLateUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastInitialization extends System.ValueType {

    }

    class UniTaskLoopRunnerLastEarlyUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastFixedUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastPreUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastPreLateUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastPostLateUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerYieldInitialization extends System.ValueType {

    }

    class UniTaskLoopRunnerYieldEarlyUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerYieldFixedUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerYieldPreUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerYieldUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerYieldPreLateUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerYieldPostLateUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastYieldInitialization extends System.ValueType {

    }

    class UniTaskLoopRunnerLastYieldEarlyUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastYieldFixedUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastYieldPreUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastYieldUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastYieldPreLateUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastYieldPostLateUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerTimeUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastTimeUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerYieldTimeUpdate extends System.ValueType {

    }

    class UniTaskLoopRunnerLastYieldTimeUpdate extends System.ValueType {

    }

}

