
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Cysharp.Threading.Tasks' {
    import * as Cysharp_Threading_Tasks_DOTweenAsyncExtensions from 'Cysharp.Threading.Tasks.DOTweenAsyncExtensions'
    import * as DG_Tweening from 'DG.Tweening'
    import * as System_Threading from 'System.Threading'
    import * as System from 'System'

    enum TweenCancelBehaviour {
        Kill = 0,
        KillWithCompleteCallback = 1,
        Complete = 2,
        CompleteWithSequenceCallback = 3,
        CancelAwait = 4,
        KillAndCancelAwait = 5,
        KillWithCompleteCallbackAndCancelAwait = 6,
        CompleteAndCancelAwait = 7,
        CompleteWithSequenceCallbackAndCancelAwait = 8 
    }

    class DOTweenAsyncExtensions {

        public static GetAwaiter ($tween: DG_Tweening.Tween) : Cysharp_Threading_Tasks_DOTweenAsyncExtensions.TweenAwaiter
        public static WithCancellation ($tween: DG_Tweening.Tween, $cancellationToken: System_Threading.CancellationToken) : UniTask
        public static ToUniTask ($tween: DG_Tweening.Tween, $tweenCancelBehaviour?: TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static AwaitForComplete ($tween: DG_Tweening.Tween, $tweenCancelBehaviour?: TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static AwaitForPause ($tween: DG_Tweening.Tween, $tweenCancelBehaviour?: TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static AwaitForPlay ($tween: DG_Tweening.Tween, $tweenCancelBehaviour?: TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static AwaitForRewind ($tween: DG_Tweening.Tween, $tweenCancelBehaviour?: TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        public static AwaitForStepComplete ($tween: DG_Tweening.Tween, $tweenCancelBehaviour?: TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : UniTask
    }

    interface UniTask {

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

}

declare module 'Cysharp.Threading.Tasks.DOTweenAsyncExtensions' {
    import * as System from 'System'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as DG_Tweening from 'DG.Tweening'

    class TweenAwaiter extends System.ValueType implements System_Runtime_CompilerServices.ICriticalNotifyCompletion {

        public get IsCompleted(): boolean;

        public constructor ($tween: DG_Tweening.Tween)
        public GetAwaiter () : TweenAwaiter
        public GetResult () : void
        public OnCompleted ($continuation: System.Action) : void
        public UnsafeOnCompleted ($continuation: System.Action) : void
    }

}

declare module 'System.Runtime.CompilerServices' {

    interface ICriticalNotifyCompletion extends INotifyCompletion {

    }

    interface INotifyCompletion {

    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

declare module 'DG.Tweening' {
    import * as DG_Tweening_Core from 'DG.Tweening.Core'
    import * as Cysharp_Threading_Tasks_DOTweenAsyncExtensions from 'Cysharp.Threading.Tasks.DOTweenAsyncExtensions'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Threading from 'System.Threading'

    interface Tween {

    }

    interface Tween {

        /**
        * @extension Cysharp.Threading.Tasks.DOTweenAsyncExtensions.GetAwaiter
        */
        GetAwaiter () : Cysharp_Threading_Tasks_DOTweenAsyncExtensions.TweenAwaiter
        /**
        * @extension Cysharp.Threading.Tasks.DOTweenAsyncExtensions.WithCancellation
        */
        WithCancellation ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.DOTweenAsyncExtensions.ToUniTask
        */
        ToUniTask ($tweenCancelBehaviour?: Cysharp_Threading_Tasks.TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.DOTweenAsyncExtensions.AwaitForComplete
        */
        AwaitForComplete ($tweenCancelBehaviour?: Cysharp_Threading_Tasks.TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.DOTweenAsyncExtensions.AwaitForPause
        */
        AwaitForPause ($tweenCancelBehaviour?: Cysharp_Threading_Tasks.TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.DOTweenAsyncExtensions.AwaitForPlay
        */
        AwaitForPlay ($tweenCancelBehaviour?: Cysharp_Threading_Tasks.TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.DOTweenAsyncExtensions.AwaitForRewind
        */
        AwaitForRewind ($tweenCancelBehaviour?: Cysharp_Threading_Tasks.TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        /**
        * @extension Cysharp.Threading.Tasks.DOTweenAsyncExtensions.AwaitForStepComplete
        */
        AwaitForStepComplete ($tweenCancelBehaviour?: Cysharp_Threading_Tasks.TweenCancelBehaviour, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
    }

}

declare module 'DG.Tweening.Core' {
    import * as System from 'System'

    interface ABSSequentiable {

    }

}

declare module 'System.Threading' {
    import * as System from 'System'

    interface CancellationToken {

    }

}

