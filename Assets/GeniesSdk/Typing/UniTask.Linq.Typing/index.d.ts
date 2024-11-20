
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Cysharp.Threading.Tasks.Linq' {
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System from 'System'
    import * as System_Threading from 'System.Threading'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Linq from 'System.Linq'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'

    class UniTaskAsyncEnumerable {

        public static AggregateAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $accumulator: System.Func$3<TSource, TSource, TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static AggregateAsync<TSource,TAccumulate> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $seed: TAccumulate, $accumulator: System.Func$3<TAccumulate, TSource, TAccumulate>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TAccumulate>
        public static AggregateAsync<TSource,TAccumulate,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $seed: TAccumulate, $accumulator: System.Func$3<TAccumulate, TSource, TAccumulate>, $resultSelector: System.Func$2<TAccumulate, TResult>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TResult>
        public static AggregateAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $accumulator: System.Func$3<TSource, TSource, Cysharp_Threading_Tasks.UniTask$1<TSource>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static AggregateAwaitAsync<TSource,TAccumulate> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $seed: TAccumulate, $accumulator: System.Func$3<TAccumulate, TSource, Cysharp_Threading_Tasks.UniTask$1<TAccumulate>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TAccumulate>
        public static AggregateAwaitAsync<TSource,TAccumulate,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $seed: TAccumulate, $accumulator: System.Func$3<TAccumulate, TSource, Cysharp_Threading_Tasks.UniTask$1<TAccumulate>>, $resultSelector: System.Func$2<TAccumulate, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TResult>
        public static AggregateAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $accumulator: System.Func$4<TSource, TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TSource>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static AggregateAwaitWithCancellationAsync<TSource,TAccumulate> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $seed: TAccumulate, $accumulator: System.Func$4<TAccumulate, TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TAccumulate>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TAccumulate>
        public static AggregateAwaitWithCancellationAsync<TSource,TAccumulate,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $seed: TAccumulate, $accumulator: System.Func$4<TAccumulate, TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TAccumulate>>, $resultSelector: System.Func$3<TAccumulate, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TResult>
        public static AllAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static AllAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static AllAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static AnyAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static AnyAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static AnyAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static AnyAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static Append<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $element: TSource) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Prepend<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $element: TSource) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static AsUniTaskAsyncEnumerable<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static AverageAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<int>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static AverageAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, int>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static AverageAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static AverageAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static AverageAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<bigint>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static AverageAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<float>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static AverageAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, float>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static AverageAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static AverageAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static AverageAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<double>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static AverageAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static AverageAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static AverageAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static AverageAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static AverageAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static AverageAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static AverageAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static AverageAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static AverageAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static AverageAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static AverageAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static AverageAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static AverageAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static AverageAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static AverageAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static AverageAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static AverageAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static AverageAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @methodSwap Buffer_EBB7509C_H8F8B41F9
        */
        public static Buffer<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $count: int) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Collections_Generic.IList$1<TSource>>
        /**
        * @methodSwap Buffer_EBB7509C_H99F2F62
        */
        public static Buffer<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $count: int, $skip: int) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Collections_Generic.IList$1<TSource>>
        public static Cast<TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<any>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $resultSelector: System.Func$3<T1, T2, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $resultSelector: System.Func$4<T1, T2, T3, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $resultSelector: System.Func$5<T1, T2, T3, T4, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $resultSelector: System.Func$6<T1, T2, T3, T4, T5, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,T6,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $source6: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T6>, $resultSelector: System.Func$7<T1, T2, T3, T4, T5, T6, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,T6,T7,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $source6: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T6>, $source7: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T7>, $resultSelector: System.Func$8<T1, T2, T3, T4, T5, T6, T7, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,T6,T7,T8,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $source6: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T6>, $source7: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T7>, $source8: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T8>, $resultSelector: System.Func$9<T1, T2, T3, T4, T5, T6, T7, T8, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,T6,T7,T8,T9,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $source6: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T6>, $source7: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T7>, $source8: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T8>, $source9: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T9>, $resultSelector: System.Func$10<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $source6: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T6>, $source7: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T7>, $source8: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T8>, $source9: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T9>, $source10: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T10>, $resultSelector: System.Func$11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $source6: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T6>, $source7: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T7>, $source8: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T8>, $source9: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T9>, $source10: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T10>, $source11: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T11>, $resultSelector: System.Func$12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $source6: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T6>, $source7: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T7>, $source8: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T8>, $source9: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T9>, $source10: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T10>, $source11: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T11>, $source12: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T12>, $resultSelector: System.Func$13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $source6: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T6>, $source7: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T7>, $source8: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T8>, $source9: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T9>, $source10: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T10>, $source11: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T11>, $source12: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T12>, $source13: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T13>, $resultSelector: System.Func$14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $source6: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T6>, $source7: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T7>, $source8: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T8>, $source9: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T9>, $source10: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T10>, $source11: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T11>, $source12: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T12>, $source13: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T13>, $source14: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T14>, $resultSelector: System.Func$15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static CombineLatest<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,TResult> ($source1: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T1>, $source2: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T2>, $source3: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T3>, $source4: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T4>, $source5: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T5>, $source6: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T6>, $source7: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T7>, $source8: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T8>, $source9: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T9>, $source10: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T10>, $source11: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T11>, $source12: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T12>, $source13: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T13>, $source14: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T14>, $source15: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T15>, $resultSelector: System.Func$16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static Concat<TSource> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static ContainsAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $value: TSource, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static ContainsAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $value: TSource, $comparer: System_Collections_Generic.IEqualityComparer$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static CountAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static CountAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static CountAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static CountAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static Create<T> ($create: System.Func$3<IAsyncWriter$1<T>, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>
        public static DefaultIfEmpty<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DefaultIfEmpty<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $defaultValue: TSource) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Distinct<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Distinct<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $comparer: System_Collections_Generic.IEqualityComparer$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Distinct<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Distinct<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctUntilChanged<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctUntilChanged<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $comparer: System_Collections_Generic.IEqualityComparer$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctUntilChanged<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctUntilChanged<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctUntilChangedAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctUntilChangedAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctUntilChangedAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static DistinctUntilChangedAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Do<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Action$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Do<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Action$1<TSource>, $onError: System.Action$1<System.Exception>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Do<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Action$1<TSource>, $onCompleted: System.Action) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Do<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Action$1<TSource>, $onError: System.Action$1<System.Exception>, $onCompleted: System.Action) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Do<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $observer: System.IObserver$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @methodSwap ElementAtAsync_EBB7509C_H748F9928
        */
        public static ElementAtAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $index: int, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        /**
        * @methodSwap ElementAtOrDefaultAsync_EBB7509C_H748F9928
        */
        public static ElementAtOrDefaultAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $index: int, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static Empty<T> () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>
        public static Except<TSource> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Except<TSource> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $comparer: System_Collections_Generic.IEqualityComparer$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static FirstAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static FirstAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static FirstAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static FirstAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static FirstOrDefaultAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static FirstOrDefaultAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static FirstOrDefaultAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static FirstOrDefaultAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static ForEachAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Action$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        public static ForEachAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Action$2<TSource, int>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        public static ForEachAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        public static ForEachAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Func$3<TSource, int, Cysharp_Threading_Tasks.UniTask>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        public static ForEachAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        public static ForEachAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Func$4<TSource, int, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask
        public static GroupBy<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        public static GroupBy<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        public static GroupBy<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $elementSelector: System.Func$2<TSource, TElement>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        public static GroupBy<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $elementSelector: System.Func$2<TSource, TElement>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        public static GroupBy<TSource,TKey,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TSource>, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupBy<TSource,TKey,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TSource>, TResult>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupBy<TSource,TKey,TElement,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $elementSelector: System.Func$2<TSource, TElement>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TElement>, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupBy<TSource,TKey,TElement,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $elementSelector: System.Func$2<TSource, TElement>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TElement>, TResult>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupByAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        public static GroupByAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        public static GroupByAwait<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TElement>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        public static GroupByAwait<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        public static GroupByAwait<TSource,TKey,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TSource>, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupByAwait<TSource,TKey,TElement,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TElement>, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupByAwait<TSource,TKey,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TSource>, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupByAwait<TSource,TKey,TElement,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TElement>, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupByAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        public static GroupByAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        public static GroupByAwaitWithCancellation<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TElement>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        public static GroupByAwaitWithCancellation<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        public static GroupByAwaitWithCancellation<TSource,TKey,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$4<TKey, System_Collections_Generic.IEnumerable$1<TSource>, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupByAwaitWithCancellation<TSource,TKey,TElement,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $resultSelector: System.Func$4<TKey, System_Collections_Generic.IEnumerable$1<TElement>, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupByAwaitWithCancellation<TSource,TKey,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$4<TKey, System_Collections_Generic.IEnumerable$1<TSource>, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupByAwaitWithCancellation<TSource,TKey,TElement,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $resultSelector: System.Func$4<TKey, System_Collections_Generic.IEnumerable$1<TElement>, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupJoin<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<TOuter, TKey>, $innerKeySelector: System.Func$2<TInner, TKey>, $resultSelector: System.Func$3<TOuter, System_Collections_Generic.IEnumerable$1<TInner>, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupJoin<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<TOuter, TKey>, $innerKeySelector: System.Func$2<TInner, TKey>, $resultSelector: System.Func$3<TOuter, System_Collections_Generic.IEnumerable$1<TInner>, TResult>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupJoinAwait<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<TOuter, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $innerKeySelector: System.Func$2<TInner, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$3<TOuter, System_Collections_Generic.IEnumerable$1<TInner>, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupJoinAwait<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<TOuter, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $innerKeySelector: System.Func$2<TInner, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$3<TOuter, System_Collections_Generic.IEnumerable$1<TInner>, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupJoinAwaitWithCancellation<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$3<TOuter, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $innerKeySelector: System.Func$3<TInner, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$4<TOuter, System_Collections_Generic.IEnumerable$1<TInner>, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static GroupJoinAwaitWithCancellation<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$3<TOuter, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $innerKeySelector: System.Func$3<TInner, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$4<TOuter, System_Collections_Generic.IEnumerable$1<TInner>, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static Intersect<TSource> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Intersect<TSource> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $comparer: System_Collections_Generic.IEqualityComparer$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Join<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<TOuter, TKey>, $innerKeySelector: System.Func$2<TInner, TKey>, $resultSelector: System.Func$3<TOuter, TInner, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static Join<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<TOuter, TKey>, $innerKeySelector: System.Func$2<TInner, TKey>, $resultSelector: System.Func$3<TOuter, TInner, TResult>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static JoinAwait<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<TOuter, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $innerKeySelector: System.Func$2<TInner, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$3<TOuter, TInner, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static JoinAwait<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<TOuter, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $innerKeySelector: System.Func$2<TInner, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$3<TOuter, TInner, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static JoinAwaitWithCancellation<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$3<TOuter, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $innerKeySelector: System.Func$3<TInner, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$4<TOuter, TInner, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static JoinAwaitWithCancellation<TOuter,TInner,TKey,TResult> ($outer: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TOuter>, $inner: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$3<TOuter, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $innerKeySelector: System.Func$3<TInner, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $resultSelector: System.Func$4<TOuter, TInner, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static LastAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static LastAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static LastAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static LastAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static LastOrDefaultAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static LastOrDefaultAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static LastOrDefaultAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static LastOrDefaultAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static LongCountAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static LongCountAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static LongCountAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static LongCountAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static MaxAsync<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, TResult>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TResult>
        public static MaxAwaitAsync<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TResult>
        public static MaxAwaitWithCancellationAsync<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TResult>
        public static Merge<T> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>
        public static Merge<T> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>, $third: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>
        public static Merge<T> ($sources: System_Collections_Generic.IEnumerable$1<Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>
        public static Merge<T> (...sources: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>[]) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static MinAsync<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, TResult>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TResult>
        public static MinAwaitAsync<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TResult>
        public static MinAwaitWithCancellationAsync<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TResult>
        public static MinAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<int>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, int>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static MinAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static MinAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static MinAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<bigint>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, bigint>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static MinAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static MinAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static MinAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<float>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, float>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static MinAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static MinAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static MinAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<double>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, double>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static MinAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static MinAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static MinAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static MinAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static MinAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static MinAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static MinAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static MinAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static MinAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static MinAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static MinAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static MinAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static MinAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static MinAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static MinAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static MinAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static MinAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static MinAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static MinAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static MinAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static MinAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static MaxAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<int>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, int>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static MaxAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static MaxAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static MaxAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<bigint>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, bigint>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static MaxAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static MaxAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static MaxAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<float>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, float>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static MaxAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static MaxAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static MaxAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<double>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, double>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static MaxAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static MaxAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static MaxAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static MaxAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static MaxAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static MaxAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static MaxAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static MaxAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static MaxAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static MaxAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static MaxAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static MaxAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static MaxAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static MaxAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static MaxAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static MaxAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static MaxAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static MaxAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static MaxAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static MaxAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static MaxAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static Never<T> () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<T>
        public static OfType<TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<any>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static OrderBy<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderBy<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderByAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderByAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderByAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderByAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderByDescending<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderByDescending<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderByDescendingAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderByDescendingAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderByDescendingAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static OrderByDescendingAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenBy<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenBy<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenByAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenByAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenByAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenByAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenByDescending<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenByDescending<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenByDescendingAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenByDescendingAwait<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenByDescendingAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static ThenByDescendingAwaitWithCancellation<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : Cysharp_Threading_Tasks.IUniTaskOrderedAsyncEnumerable$1<TSource>
        public static Pairwise<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.ValueTuple$2<TSource, TSource>>
        public static Publish<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IConnectableUniTaskAsyncEnumerable$1<TSource>
        public static Queue<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Range ($start: int, $count: int) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<int>
        public static Repeat<TElement> ($element: TElement, $count: int) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TElement>
        public static Return<TValue> ($value: TValue) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TValue>
        public static Reverse<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Select<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static Select<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, int, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectAwait<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectAwait<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, int, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectAwaitWithCancellation<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectAwaitWithCancellation<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$4<TSource, int, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectMany<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectMany<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, int, Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectMany<TSource,TCollection,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $collectionSelector: System.Func$2<TSource, Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TCollection>>, $resultSelector: System.Func$3<TSource, TCollection, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectMany<TSource,TCollection,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $collectionSelector: System.Func$3<TSource, int, Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TCollection>>, $resultSelector: System.Func$3<TSource, TCollection, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectManyAwait<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectManyAwait<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, int, Cysharp_Threading_Tasks.UniTask$1<Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectManyAwait<TSource,TCollection,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $collectionSelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TCollection>>>, $resultSelector: System.Func$3<TSource, TCollection, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectManyAwait<TSource,TCollection,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $collectionSelector: System.Func$3<TSource, int, Cysharp_Threading_Tasks.UniTask$1<Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TCollection>>>, $resultSelector: System.Func$3<TSource, TCollection, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectManyAwaitWithCancellation<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectManyAwaitWithCancellation<TSource,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$4<TSource, int, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectManyAwaitWithCancellation<TSource,TCollection,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $collectionSelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TCollection>>>, $resultSelector: System.Func$4<TSource, TCollection, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SelectManyAwaitWithCancellation<TSource,TCollection,TResult> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $collectionSelector: System.Func$4<TSource, int, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TCollection>>>, $resultSelector: System.Func$4<TSource, TCollection, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static SequenceEqualAsync<TSource> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static SequenceEqualAsync<TSource> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $comparer: System_Collections_Generic.IEqualityComparer$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<boolean>
        public static SingleAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static SingleAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static SingleAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static SingleAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static SingleOrDefaultAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static SingleOrDefaultAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static SingleOrDefaultAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        public static SingleOrDefaultAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource>
        /**
        * @methodSwap Skip_EBB7509C_H8F8B41F9
        */
        public static Skip<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $count: int) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @methodSwap SkipLast_EBB7509C_H8F8B41F9
        */
        public static SkipLast<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $count: int) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static SkipUntil<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $other: Cysharp_Threading_Tasks.UniTask) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static SkipUntil<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $other: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static SkipUntilCanceled<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static SkipWhile<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static SkipWhile<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, int, boolean>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static SkipWhileAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static SkipWhileAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, int, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static SkipWhileAwaitWithCancellation<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static SkipWhileAwaitWithCancellation<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$4<TSource, int, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Action$1<TSource>) : System.IDisposable
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTaskVoid>) : System.IDisposable
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTaskVoid>) : System.IDisposable
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Action$1<TSource>, $cancellationToken: System_Threading.CancellationToken) : void
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTaskVoid>, $cancellationToken: System_Threading.CancellationToken) : void
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $action: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTaskVoid>, $cancellationToken: System_Threading.CancellationToken) : void
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask>) : System.IDisposable
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask>, $cancellationToken: System_Threading.CancellationToken) : void
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : System.IDisposable
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>, $cancellationToken: System_Threading.CancellationToken) : void
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Action$1<TSource>, $onError: System.Action$1<System.Exception>) : System.IDisposable
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTaskVoid>, $onError: System.Action$1<System.Exception>) : System.IDisposable
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Action$1<TSource>, $onError: System.Action$1<System.Exception>, $cancellationToken: System_Threading.CancellationToken) : void
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTaskVoid>, $onError: System.Action$1<System.Exception>, $cancellationToken: System_Threading.CancellationToken) : void
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask>, $onError: System.Action$1<System.Exception>) : System.IDisposable
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask>, $onError: System.Action$1<System.Exception>, $cancellationToken: System_Threading.CancellationToken) : void
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>, $onError: System.Action$1<System.Exception>) : System.IDisposable
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>, $onError: System.Action$1<System.Exception>, $cancellationToken: System_Threading.CancellationToken) : void
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Action$1<TSource>, $onCompleted: System.Action) : System.IDisposable
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTaskVoid>, $onCompleted: System.Action) : System.IDisposable
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Action$1<TSource>, $onCompleted: System.Action, $cancellationToken: System_Threading.CancellationToken) : void
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTaskVoid>, $onCompleted: System.Action, $cancellationToken: System_Threading.CancellationToken) : void
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask>, $onCompleted: System.Action) : System.IDisposable
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask>, $onCompleted: System.Action, $cancellationToken: System_Threading.CancellationToken) : void
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>, $onCompleted: System.Action) : System.IDisposable
        public static SubscribeAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $onNext: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>, $onCompleted: System.Action, $cancellationToken: System_Threading.CancellationToken) : void
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $observer: System.IObserver$1<TSource>) : System.IDisposable
        public static Subscribe<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $observer: System.IObserver$1<TSource>, $cancellationToken: System_Threading.CancellationToken) : void
        public static SumAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<int>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static SumAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, int>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static SumAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static SumAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<int>
        public static SumAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<bigint>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static SumAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, bigint>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static SumAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static SumAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<bigint>
        public static SumAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<float>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static SumAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, float>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static SumAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static SumAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<float>
        public static SumAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<double>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static SumAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, double>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static SumAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static SumAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<double>
        public static SumAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static SumAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static SumAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static SumAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Decimal>
        public static SumAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static SumAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static SumAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static SumAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<int>>
        public static SumAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static SumAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static SumAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static SumAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<bigint>>
        public static SumAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static SumAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static SumAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static SumAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<float>>
        public static SumAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static SumAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static SumAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static SumAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<double>>
        public static SumAsync ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static SumAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static SumAwaitAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        public static SumAwaitWithCancellationAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $selector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @methodSwap Take_EBB7509C_H8F8B41F9
        */
        public static Take<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $count: int) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @methodSwap TakeLast_EBB7509C_H8F8B41F9
        */
        public static TakeLast<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $count: int) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static TakeUntil<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $other: Cysharp_Threading_Tasks.UniTask) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static TakeUntil<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $other: System.Func$2<System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static TakeUntilCanceled<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static TakeWhile<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static TakeWhile<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, int, boolean>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static TakeWhileAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static TakeWhileAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, int, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static TakeWhileAwaitWithCancellation<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static TakeWhileAwaitWithCancellation<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$4<TSource, int, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Throw<TValue> ($exception: System.Exception) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TValue>
        public static ToArrayAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<TSource[]>
        public static ToDictionaryAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        public static ToDictionaryAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        public static ToDictionaryAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $elementSelector: System.Func$2<TSource, TElement>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        public static ToDictionaryAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $elementSelector: System.Func$2<TSource, TElement>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        public static ToDictionaryAwaitAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        public static ToDictionaryAwaitAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        public static ToDictionaryAwaitAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        public static ToDictionaryAwaitAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        public static ToDictionaryAwaitWithCancellationAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        public static ToDictionaryAwaitWithCancellationAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        public static ToDictionaryAwaitWithCancellationAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        public static ToDictionaryAwaitWithCancellationAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        public static ToHashSetAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.HashSet$1<TSource>>
        public static ToHashSetAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $comparer: System_Collections_Generic.IEqualityComparer$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.HashSet$1<TSource>>
        public static ToListAsync<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Collections_Generic.List$1<TSource>>
        public static ToLookupAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        public static ToLookupAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        public static ToLookupAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $elementSelector: System.Func$2<TSource, TElement>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        public static ToLookupAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, TKey>, $elementSelector: System.Func$2<TSource, TElement>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        public static ToLookupAwaitAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        public static ToLookupAwaitAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        public static ToLookupAwaitAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        public static ToLookupAwaitAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        public static ToLookupAwaitWithCancellationAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        public static ToLookupAwaitWithCancellationAsync<TSource,TKey> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        public static ToLookupAwaitWithCancellationAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        public static ToLookupAwaitWithCancellationAsync<TSource,TKey,TElement> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $keySelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TKey>>, $elementSelector: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        public static ToObservable<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : System.IObservable$1<TSource>
        public static ToUniTaskAsyncEnumerable<TSource> ($source: System_Collections_Generic.IEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static ToUniTaskAsyncEnumerable<TSource> ($source: System_Threading_Tasks.Task$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static ToUniTaskAsyncEnumerable<TSource> ($source: Cysharp_Threading_Tasks.UniTask$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static ToUniTaskAsyncEnumerable<TSource> ($source: System.IObservable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Union<TSource> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Union<TSource> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $comparer: System_Collections_Generic.IEqualityComparer$1<TSource>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static EveryUpdate ($updateTiming?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<Cysharp_Threading_Tasks.AsyncUnit>
        public static EveryValueChanged<TTarget,TProperty> ($target: TTarget, $propertySelector: System.Func$2<TTarget, TProperty>, $monitorTiming?: Cysharp_Threading_Tasks.PlayerLoopTiming, $equalityComparer?: System_Collections_Generic.IEqualityComparer$1<TProperty>, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TProperty>
        public static Timer ($dueTime: System.TimeSpan, $updateTiming?: Cysharp_Threading_Tasks.PlayerLoopTiming, $ignoreTimeScale?: boolean, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<Cysharp_Threading_Tasks.AsyncUnit>
        public static Timer ($dueTime: System.TimeSpan, $period: System.TimeSpan, $updateTiming?: Cysharp_Threading_Tasks.PlayerLoopTiming, $ignoreTimeScale?: boolean, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<Cysharp_Threading_Tasks.AsyncUnit>
        public static Interval ($period: System.TimeSpan, $updateTiming?: Cysharp_Threading_Tasks.PlayerLoopTiming, $ignoreTimeScale?: boolean, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<Cysharp_Threading_Tasks.AsyncUnit>
        /**
        * @methodSwap TimerFrame_EBB7509C_H4F72064C
        */
        public static TimerFrame ($dueTimeFrameCount: int, $updateTiming?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<Cysharp_Threading_Tasks.AsyncUnit>
        /**
        * @methodSwap TimerFrame_EBB7509C_H2AB390C3
        */
        public static TimerFrame ($dueTimeFrameCount: int, $periodFrameCount: int, $updateTiming?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<Cysharp_Threading_Tasks.AsyncUnit>
        public static IntervalFrame ($intervalFrameCount: int, $updateTiming?: Cysharp_Threading_Tasks.PlayerLoopTiming, $cancelImmediately?: boolean) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<Cysharp_Threading_Tasks.AsyncUnit>
        public static Where<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, boolean>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Where<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, int, boolean>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static WhereAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$2<TSource, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static WhereAwait<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, int, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static WhereAwaitWithCancellation<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$3<TSource, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static WhereAwaitWithCancellation<TSource> ($source: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>, $predicate: System.Func$4<TSource, int, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<boolean>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
        public static Zip<TFirst,TSecond> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TFirst>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSecond>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.ValueTuple$2<TFirst, TSecond>>
        public static Zip<TFirst,TSecond,TResult> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TFirst>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSecond>, $resultSelector: System.Func$3<TFirst, TSecond, TResult>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static ZipAwait<TFirst,TSecond,TResult> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TFirst>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSecond>, $selector: System.Func$3<TFirst, TSecond, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
        public static ZipAwaitWithCancellation<TFirst,TSecond,TResult> ($first: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TFirst>, $second: Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSecond>, $selector: System.Func$4<TFirst, TSecond, System_Threading.CancellationToken, Cysharp_Threading_Tasks.UniTask$1<TResult>>) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TResult>
    }

    interface IAsyncWriter$1<T> {

        YieldAsync? ($value: T) : Cysharp_Threading_Tasks.UniTask
    }

}

declare module 'Cysharp.Threading.Tasks' {
    import * as System from 'System'
    import * as System_Threading from 'System.Threading'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Linq from 'System.Linq'

    interface UniTask$1<T> {

    }

    interface IUniTaskAsyncEnumerable$1<T> {

    }

    interface UniTask {

    }

    interface IUniTaskOrderedAsyncEnumerable$1<TElement> extends IUniTaskAsyncEnumerable$1<TElement> {

    }

    interface IConnectableUniTaskAsyncEnumerable$1<T> extends IUniTaskAsyncEnumerable$1<T> {

    }

    interface UniTaskVoid {

    }

    interface AsyncUnit extends System.IEquatable$1<AsyncUnit> {

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

    interface IUniTaskAsyncEnumerable$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AggregateAsync<T>
        */
        AggregateAsync? ($accumulator: System.Func$3<T, T, T>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AggregateAsync<T, TAccumulate>
        */
        AggregateAsync?<TAccumulate> ($seed: TAccumulate, $accumulator: System.Func$3<TAccumulate, T, TAccumulate>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TAccumulate>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AggregateAsync<T, TAccumulate, TResult>
        */
        AggregateAsync?<TAccumulate,TResult> ($seed: TAccumulate, $accumulator: System.Func$3<TAccumulate, T, TAccumulate>, $resultSelector: System.Func$2<TAccumulate, TResult>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AggregateAwaitAsync<T>
        */
        AggregateAwaitAsync? ($accumulator: System.Func$3<T, T, UniTask$1<TSource>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AggregateAwaitAsync<T, TAccumulate>
        */
        AggregateAwaitAsync?<TAccumulate> ($seed: TAccumulate, $accumulator: System.Func$3<TAccumulate, T, UniTask$1<TAccumulate>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TAccumulate>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AggregateAwaitAsync<T, TAccumulate, TResult>
        */
        AggregateAwaitAsync?<TAccumulate,TResult> ($seed: TAccumulate, $accumulator: System.Func$3<TAccumulate, T, UniTask$1<TAccumulate>>, $resultSelector: System.Func$2<TAccumulate, UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AggregateAwaitWithCancellationAsync<T>
        */
        AggregateAwaitWithCancellationAsync? ($accumulator: System.Func$4<T, T, System_Threading.CancellationToken, UniTask$1<TSource>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AggregateAwaitWithCancellationAsync<T, TAccumulate>
        */
        AggregateAwaitWithCancellationAsync?<TAccumulate> ($seed: TAccumulate, $accumulator: System.Func$4<TAccumulate, T, System_Threading.CancellationToken, UniTask$1<TAccumulate>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TAccumulate>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AggregateAwaitWithCancellationAsync<T, TAccumulate, TResult>
        */
        AggregateAwaitWithCancellationAsync?<TAccumulate,TResult> ($seed: TAccumulate, $accumulator: System.Func$4<TAccumulate, T, System_Threading.CancellationToken, UniTask$1<TAccumulate>>, $resultSelector: System.Func$3<TAccumulate, System_Threading.CancellationToken, UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AllAsync<T>
        */
        AllAsync? ($predicate: System.Func$2<T, boolean>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AllAwaitAsync<T>
        */
        AllAwaitAsync? ($predicate: System.Func$2<T, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AllAwaitWithCancellationAsync<T>
        */
        AllAwaitWithCancellationAsync? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AnyAsync<T>
        */
        AnyAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AnyAsync<T>
        */
        AnyAsync? ($predicate: System.Func$2<T, boolean>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AnyAwaitAsync<T>
        */
        AnyAwaitAsync? ($predicate: System.Func$2<T, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AnyAwaitWithCancellationAsync<T>
        */
        AnyAwaitWithCancellationAsync? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Append<T>
        */
        Append? ($element: TSource) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Prepend<T>
        */
        Prepend? ($element: TSource) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AsUniTaskAsyncEnumerable<T>
        */
        AsUniTaskAsyncEnumerable? () : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAsync<T>
        */
        AverageAsync? ($selector: System.Func$2<T, int>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitAsync<T>
        */
        AverageAwaitAsync? ($selector: System.Func$2<T, UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitWithCancellationAsync<T>
        */
        AverageAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAsync<T>
        */
        AverageAsync? ($selector: System.Func$2<T, float>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitAsync<T>
        */
        AverageAwaitAsync? ($selector: System.Func$2<T, UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitWithCancellationAsync<T>
        */
        AverageAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAsync<T>
        */
        AverageAsync? ($selector: System.Func$2<T, System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitAsync<T>
        */
        AverageAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitWithCancellationAsync<T>
        */
        AverageAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAsync<T>
        */
        AverageAsync? ($selector: System.Func$2<T, System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitAsync<T>
        */
        AverageAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitWithCancellationAsync<T>
        */
        AverageAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAsync<T>
        */
        AverageAsync? ($selector: System.Func$2<T, System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitAsync<T>
        */
        AverageAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitWithCancellationAsync<T>
        */
        AverageAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAsync<T>
        */
        AverageAsync? ($selector: System.Func$2<T, System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitAsync<T>
        */
        AverageAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.AverageAwaitWithCancellationAsync<T>
        */
        AverageAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Buffer<T>
        * @methodSwap Buffer_EBB7509C_H8F8B41F9
        */
        Buffer? ($count: int) : IUniTaskAsyncEnumerable$1<System_Collections_Generic.IList$1<TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Buffer<T>
        * @methodSwap Buffer_EBB7509C_H99F2F62
        */
        Buffer? ($count: int, $skip: int) : IUniTaskAsyncEnumerable$1<System_Collections_Generic.IList$1<TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Cast<TResult>
        */
        Cast?<TResult> () : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, TResult>
        */
        CombineLatest?<T2,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $resultSelector: System.Func$3<T, T2, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, TResult>
        */
        CombineLatest?<T2,T3,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $resultSelector: System.Func$4<T, T2, T3, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, TResult>
        */
        CombineLatest?<T2,T3,T4,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $resultSelector: System.Func$5<T, T2, T3, T4, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $resultSelector: System.Func$6<T, T2, T3, T4, T5, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, T6, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,T6,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $source6: IUniTaskAsyncEnumerable$1<T6>, $resultSelector: System.Func$7<T, T2, T3, T4, T5, T6, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, T6, T7, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,T6,T7,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $source6: IUniTaskAsyncEnumerable$1<T6>, $source7: IUniTaskAsyncEnumerable$1<T7>, $resultSelector: System.Func$8<T, T2, T3, T4, T5, T6, T7, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, T6, T7, T8, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,T6,T7,T8,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $source6: IUniTaskAsyncEnumerable$1<T6>, $source7: IUniTaskAsyncEnumerable$1<T7>, $source8: IUniTaskAsyncEnumerable$1<T8>, $resultSelector: System.Func$9<T, T2, T3, T4, T5, T6, T7, T8, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, T6, T7, T8, T9, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,T6,T7,T8,T9,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $source6: IUniTaskAsyncEnumerable$1<T6>, $source7: IUniTaskAsyncEnumerable$1<T7>, $source8: IUniTaskAsyncEnumerable$1<T8>, $source9: IUniTaskAsyncEnumerable$1<T9>, $resultSelector: System.Func$10<T, T2, T3, T4, T5, T6, T7, T8, T9, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,T6,T7,T8,T9,T10,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $source6: IUniTaskAsyncEnumerable$1<T6>, $source7: IUniTaskAsyncEnumerable$1<T7>, $source8: IUniTaskAsyncEnumerable$1<T8>, $source9: IUniTaskAsyncEnumerable$1<T9>, $source10: IUniTaskAsyncEnumerable$1<T10>, $resultSelector: System.Func$11<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $source6: IUniTaskAsyncEnumerable$1<T6>, $source7: IUniTaskAsyncEnumerable$1<T7>, $source8: IUniTaskAsyncEnumerable$1<T8>, $source9: IUniTaskAsyncEnumerable$1<T9>, $source10: IUniTaskAsyncEnumerable$1<T10>, $source11: IUniTaskAsyncEnumerable$1<T11>, $resultSelector: System.Func$12<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $source6: IUniTaskAsyncEnumerable$1<T6>, $source7: IUniTaskAsyncEnumerable$1<T7>, $source8: IUniTaskAsyncEnumerable$1<T8>, $source9: IUniTaskAsyncEnumerable$1<T9>, $source10: IUniTaskAsyncEnumerable$1<T10>, $source11: IUniTaskAsyncEnumerable$1<T11>, $source12: IUniTaskAsyncEnumerable$1<T12>, $resultSelector: System.Func$13<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $source6: IUniTaskAsyncEnumerable$1<T6>, $source7: IUniTaskAsyncEnumerable$1<T7>, $source8: IUniTaskAsyncEnumerable$1<T8>, $source9: IUniTaskAsyncEnumerable$1<T9>, $source10: IUniTaskAsyncEnumerable$1<T10>, $source11: IUniTaskAsyncEnumerable$1<T11>, $source12: IUniTaskAsyncEnumerable$1<T12>, $source13: IUniTaskAsyncEnumerable$1<T13>, $resultSelector: System.Func$14<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $source6: IUniTaskAsyncEnumerable$1<T6>, $source7: IUniTaskAsyncEnumerable$1<T7>, $source8: IUniTaskAsyncEnumerable$1<T8>, $source9: IUniTaskAsyncEnumerable$1<T9>, $source10: IUniTaskAsyncEnumerable$1<T10>, $source11: IUniTaskAsyncEnumerable$1<T11>, $source12: IUniTaskAsyncEnumerable$1<T12>, $source13: IUniTaskAsyncEnumerable$1<T13>, $source14: IUniTaskAsyncEnumerable$1<T14>, $resultSelector: System.Func$15<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CombineLatest<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult>
        */
        CombineLatest?<T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,TResult> ($source2: IUniTaskAsyncEnumerable$1<T2>, $source3: IUniTaskAsyncEnumerable$1<T3>, $source4: IUniTaskAsyncEnumerable$1<T4>, $source5: IUniTaskAsyncEnumerable$1<T5>, $source6: IUniTaskAsyncEnumerable$1<T6>, $source7: IUniTaskAsyncEnumerable$1<T7>, $source8: IUniTaskAsyncEnumerable$1<T8>, $source9: IUniTaskAsyncEnumerable$1<T9>, $source10: IUniTaskAsyncEnumerable$1<T10>, $source11: IUniTaskAsyncEnumerable$1<T11>, $source12: IUniTaskAsyncEnumerable$1<T12>, $source13: IUniTaskAsyncEnumerable$1<T13>, $source14: IUniTaskAsyncEnumerable$1<T14>, $source15: IUniTaskAsyncEnumerable$1<T15>, $resultSelector: System.Func$16<T, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Concat<T>
        */
        Concat? ($second: IUniTaskAsyncEnumerable$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ContainsAsync<T>
        */
        ContainsAsync? ($value: TSource, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ContainsAsync<T>
        */
        ContainsAsync? ($value: TSource, $comparer: System_Collections_Generic.IEqualityComparer$1<T>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CountAsync<T>
        */
        CountAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CountAsync<T>
        */
        CountAsync? ($predicate: System.Func$2<T, boolean>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CountAwaitAsync<T>
        */
        CountAwaitAsync? ($predicate: System.Func$2<T, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.CountAwaitWithCancellationAsync<T>
        */
        CountAwaitWithCancellationAsync? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DefaultIfEmpty<T>
        */
        DefaultIfEmpty? () : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DefaultIfEmpty<T>
        */
        DefaultIfEmpty? ($defaultValue: TSource) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Distinct<T>
        */
        Distinct? () : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Distinct<T>
        */
        Distinct? ($comparer: System_Collections_Generic.IEqualityComparer$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Distinct<T, TKey>
        */
        Distinct?<TKey> ($keySelector: System.Func$2<T, TKey>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Distinct<T, TKey>
        */
        Distinct?<TKey> ($keySelector: System.Func$2<T, TKey>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctAwait<T, TKey>
        */
        DistinctAwait?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctAwait<T, TKey>
        */
        DistinctAwait?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctAwaitWithCancellation<T, TKey>
        */
        DistinctAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctAwaitWithCancellation<T, TKey>
        */
        DistinctAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctUntilChanged<T>
        */
        DistinctUntilChanged? () : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctUntilChanged<T>
        */
        DistinctUntilChanged? ($comparer: System_Collections_Generic.IEqualityComparer$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctUntilChanged<T, TKey>
        */
        DistinctUntilChanged?<TKey> ($keySelector: System.Func$2<T, TKey>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctUntilChanged<T, TKey>
        */
        DistinctUntilChanged?<TKey> ($keySelector: System.Func$2<T, TKey>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctUntilChangedAwait<T, TKey>
        */
        DistinctUntilChangedAwait?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctUntilChangedAwait<T, TKey>
        */
        DistinctUntilChangedAwait?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctUntilChangedAwaitWithCancellation<T, TKey>
        */
        DistinctUntilChangedAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.DistinctUntilChangedAwaitWithCancellation<T, TKey>
        */
        DistinctUntilChangedAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Do<T>
        */
        Do? ($onNext: System.Action$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Do<T>
        */
        Do? ($onNext: System.Action$1<T>, $onError: System.Action$1<System.Exception>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Do<T>
        */
        Do? ($onNext: System.Action$1<T>, $onCompleted: System.Action) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Do<T>
        */
        Do? ($onNext: System.Action$1<T>, $onError: System.Action$1<System.Exception>, $onCompleted: System.Action) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Do<T>
        */
        Do? ($observer: System.IObserver$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ElementAtAsync<T>
        */
        ElementAtAsync? ($index: int, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ElementAtOrDefaultAsync<T>
        */
        ElementAtOrDefaultAsync? ($index: int, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Except<T>
        */
        Except? ($second: IUniTaskAsyncEnumerable$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Except<T>
        */
        Except? ($second: IUniTaskAsyncEnumerable$1<T>, $comparer: System_Collections_Generic.IEqualityComparer$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.FirstAsync<T>
        */
        FirstAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.FirstAsync<T>
        */
        FirstAsync? ($predicate: System.Func$2<T, boolean>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.FirstAwaitAsync<T>
        */
        FirstAwaitAsync? ($predicate: System.Func$2<T, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.FirstAwaitWithCancellationAsync<T>
        */
        FirstAwaitWithCancellationAsync? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.FirstOrDefaultAsync<T>
        */
        FirstOrDefaultAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.FirstOrDefaultAsync<T>
        */
        FirstOrDefaultAsync? ($predicate: System.Func$2<T, boolean>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.FirstOrDefaultAwaitAsync<T>
        */
        FirstOrDefaultAwaitAsync? ($predicate: System.Func$2<T, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.FirstOrDefaultAwaitWithCancellationAsync<T>
        */
        FirstOrDefaultAwaitWithCancellationAsync? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ForEachAsync<T>
        */
        ForEachAsync? ($action: System.Action$1<T>, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ForEachAsync<T>
        */
        ForEachAsync? ($action: System.Action$2<T, int>, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ForEachAwaitAsync<T>
        */
        ForEachAwaitAsync? ($action: System.Func$2<T, UniTask>, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ForEachAwaitAsync<T>
        */
        ForEachAwaitAsync? ($action: System.Func$3<T, int, UniTask>, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ForEachAwaitWithCancellationAsync<T>
        */
        ForEachAwaitWithCancellationAsync? ($action: System.Func$3<T, System_Threading.CancellationToken, UniTask>, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ForEachAwaitWithCancellationAsync<T>
        */
        ForEachAwaitWithCancellationAsync? ($action: System.Func$4<T, int, System_Threading.CancellationToken, UniTask>, $cancellationToken?: System_Threading.CancellationToken) : UniTask
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupBy<T, TKey>
        */
        GroupBy?<TKey> ($keySelector: System.Func$2<T, TKey>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupBy<T, TKey>
        */
        GroupBy?<TKey> ($keySelector: System.Func$2<T, TKey>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupBy<T, TKey, TElement>
        */
        GroupBy?<TKey,TElement> ($keySelector: System.Func$2<T, TKey>, $elementSelector: System.Func$2<T, TElement>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupBy<T, TKey, TElement>
        */
        GroupBy?<TKey,TElement> ($keySelector: System.Func$2<T, TKey>, $elementSelector: System.Func$2<T, TElement>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupBy<T, TKey, TResult>
        */
        GroupBy?<TKey,TResult> ($keySelector: System.Func$2<T, TKey>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TSource>, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupBy<T, TKey, TResult>
        */
        GroupBy?<TKey,TResult> ($keySelector: System.Func$2<T, TKey>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TSource>, TResult>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupBy<T, TKey, TElement, TResult>
        */
        GroupBy?<TKey,TElement,TResult> ($keySelector: System.Func$2<T, TKey>, $elementSelector: System.Func$2<T, TElement>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TElement>, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupBy<T, TKey, TElement, TResult>
        */
        GroupBy?<TKey,TElement,TResult> ($keySelector: System.Func$2<T, TKey>, $elementSelector: System.Func$2<T, TElement>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TElement>, TResult>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwait<T, TKey>
        */
        GroupByAwait?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwait<T, TKey>
        */
        GroupByAwait?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwait<T, TKey, TElement>
        */
        GroupByAwait?<TKey,TElement> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $elementSelector: System.Func$2<T, UniTask$1<TElement>>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwait<T, TKey, TElement>
        */
        GroupByAwait?<TKey,TElement> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $elementSelector: System.Func$2<T, UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwait<T, TKey, TResult>
        */
        GroupByAwait?<TKey,TResult> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TSource>, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwait<T, TKey, TElement, TResult>
        */
        GroupByAwait?<TKey,TElement,TResult> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $elementSelector: System.Func$2<T, UniTask$1<TElement>>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TElement>, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwait<T, TKey, TResult>
        */
        GroupByAwait?<TKey,TResult> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TSource>, UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwait<T, TKey, TElement, TResult>
        */
        GroupByAwait?<TKey,TElement,TResult> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $elementSelector: System.Func$2<T, UniTask$1<TElement>>, $resultSelector: System.Func$3<TKey, System_Collections_Generic.IEnumerable$1<TElement>, UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwaitWithCancellation<T, TKey>
        */
        GroupByAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwaitWithCancellation<T, TKey>
        */
        GroupByAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwaitWithCancellation<T, TKey, TElement>
        */
        GroupByAwaitWithCancellation?<TKey,TElement> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $elementSelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TElement>>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwaitWithCancellation<T, TKey, TElement>
        */
        GroupByAwaitWithCancellation?<TKey,TElement> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $elementSelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<System_Linq.IGrouping$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwaitWithCancellation<T, TKey, TResult>
        */
        GroupByAwaitWithCancellation?<TKey,TResult> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $resultSelector: System.Func$4<TKey, System_Collections_Generic.IEnumerable$1<TSource>, System_Threading.CancellationToken, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwaitWithCancellation<T, TKey, TElement, TResult>
        */
        GroupByAwaitWithCancellation?<TKey,TElement,TResult> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $elementSelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TElement>>, $resultSelector: System.Func$4<TKey, System_Collections_Generic.IEnumerable$1<TElement>, System_Threading.CancellationToken, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwaitWithCancellation<T, TKey, TResult>
        */
        GroupByAwaitWithCancellation?<TKey,TResult> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $resultSelector: System.Func$4<TKey, System_Collections_Generic.IEnumerable$1<TSource>, System_Threading.CancellationToken, UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupByAwaitWithCancellation<T, TKey, TElement, TResult>
        */
        GroupByAwaitWithCancellation?<TKey,TElement,TResult> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $elementSelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TElement>>, $resultSelector: System.Func$4<TKey, System_Collections_Generic.IEnumerable$1<TElement>, System_Threading.CancellationToken, UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupJoin<T, TInner, TKey, TResult>
        */
        GroupJoin?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<T, TKey>, $innerKeySelector: System.Func$2<TInner, TKey>, $resultSelector: System.Func$3<T, System_Collections_Generic.IEnumerable$1<TInner>, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupJoin<T, TInner, TKey, TResult>
        */
        GroupJoin?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<T, TKey>, $innerKeySelector: System.Func$2<TInner, TKey>, $resultSelector: System.Func$3<T, System_Collections_Generic.IEnumerable$1<TInner>, TResult>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupJoinAwait<T, TInner, TKey, TResult>
        */
        GroupJoinAwait?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<T, UniTask$1<TKey>>, $innerKeySelector: System.Func$2<TInner, UniTask$1<TKey>>, $resultSelector: System.Func$3<T, System_Collections_Generic.IEnumerable$1<TInner>, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupJoinAwait<T, TInner, TKey, TResult>
        */
        GroupJoinAwait?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<T, UniTask$1<TKey>>, $innerKeySelector: System.Func$2<TInner, UniTask$1<TKey>>, $resultSelector: System.Func$3<T, System_Collections_Generic.IEnumerable$1<TInner>, UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupJoinAwaitWithCancellation<T, TInner, TKey, TResult>
        */
        GroupJoinAwaitWithCancellation?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $innerKeySelector: System.Func$3<TInner, System_Threading.CancellationToken, UniTask$1<TKey>>, $resultSelector: System.Func$4<T, System_Collections_Generic.IEnumerable$1<TInner>, System_Threading.CancellationToken, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.GroupJoinAwaitWithCancellation<T, TInner, TKey, TResult>
        */
        GroupJoinAwaitWithCancellation?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $innerKeySelector: System.Func$3<TInner, System_Threading.CancellationToken, UniTask$1<TKey>>, $resultSelector: System.Func$4<T, System_Collections_Generic.IEnumerable$1<TInner>, System_Threading.CancellationToken, UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Intersect<T>
        */
        Intersect? ($second: IUniTaskAsyncEnumerable$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Intersect<T>
        */
        Intersect? ($second: IUniTaskAsyncEnumerable$1<T>, $comparer: System_Collections_Generic.IEqualityComparer$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Join<T, TInner, TKey, TResult>
        */
        Join?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<T, TKey>, $innerKeySelector: System.Func$2<TInner, TKey>, $resultSelector: System.Func$3<T, TInner, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Join<T, TInner, TKey, TResult>
        */
        Join?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<T, TKey>, $innerKeySelector: System.Func$2<TInner, TKey>, $resultSelector: System.Func$3<T, TInner, TResult>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.JoinAwait<T, TInner, TKey, TResult>
        */
        JoinAwait?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<T, UniTask$1<TKey>>, $innerKeySelector: System.Func$2<TInner, UniTask$1<TKey>>, $resultSelector: System.Func$3<T, TInner, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.JoinAwait<T, TInner, TKey, TResult>
        */
        JoinAwait?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$2<T, UniTask$1<TKey>>, $innerKeySelector: System.Func$2<TInner, UniTask$1<TKey>>, $resultSelector: System.Func$3<T, TInner, UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.JoinAwaitWithCancellation<T, TInner, TKey, TResult>
        */
        JoinAwaitWithCancellation?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $innerKeySelector: System.Func$3<TInner, System_Threading.CancellationToken, UniTask$1<TKey>>, $resultSelector: System.Func$4<T, TInner, System_Threading.CancellationToken, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.JoinAwaitWithCancellation<T, TInner, TKey, TResult>
        */
        JoinAwaitWithCancellation?<TInner,TKey,TResult> ($inner: IUniTaskAsyncEnumerable$1<TInner>, $outerKeySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $innerKeySelector: System.Func$3<TInner, System_Threading.CancellationToken, UniTask$1<TKey>>, $resultSelector: System.Func$4<T, TInner, System_Threading.CancellationToken, UniTask$1<TResult>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LastAsync<T>
        */
        LastAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LastAsync<T>
        */
        LastAsync? ($predicate: System.Func$2<T, boolean>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LastAwaitAsync<T>
        */
        LastAwaitAsync? ($predicate: System.Func$2<T, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LastAwaitWithCancellationAsync<T>
        */
        LastAwaitWithCancellationAsync? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LastOrDefaultAsync<T>
        */
        LastOrDefaultAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LastOrDefaultAsync<T>
        */
        LastOrDefaultAsync? ($predicate: System.Func$2<T, boolean>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LastOrDefaultAwaitAsync<T>
        */
        LastOrDefaultAwaitAsync? ($predicate: System.Func$2<T, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LastOrDefaultAwaitWithCancellationAsync<T>
        */
        LastOrDefaultAwaitWithCancellationAsync? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LongCountAsync<T>
        */
        LongCountAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LongCountAsync<T>
        */
        LongCountAsync? ($predicate: System.Func$2<T, boolean>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LongCountAwaitAsync<T>
        */
        LongCountAwaitAsync? ($predicate: System.Func$2<T, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.LongCountAwaitWithCancellationAsync<T>
        */
        LongCountAwaitWithCancellationAsync? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T, TResult>
        */
        MaxAsync?<TResult> ($selector: System.Func$2<T, TResult>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T, TResult>
        */
        MaxAwaitAsync?<TResult> ($selector: System.Func$2<T, UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T, TResult>
        */
        MaxAwaitWithCancellationAsync?<TResult> ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Merge<T>
        */
        Merge? ($second: IUniTaskAsyncEnumerable$1<T>) : IUniTaskAsyncEnumerable$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Merge<T>
        */
        Merge? ($second: IUniTaskAsyncEnumerable$1<T>, $third: IUniTaskAsyncEnumerable$1<T>) : IUniTaskAsyncEnumerable$1<T>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T, TResult>
        */
        MinAsync?<TResult> ($selector: System.Func$2<T, TResult>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T, TResult>
        */
        MinAwaitAsync?<TResult> ($selector: System.Func$2<T, UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T, TResult>
        */
        MinAwaitWithCancellationAsync?<TResult> ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TResult>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($selector: System.Func$2<T, int>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T>
        */
        MinAwaitAsync? ($selector: System.Func$2<T, UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T>
        */
        MinAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($selector: System.Func$2<T, bigint>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T>
        */
        MinAwaitAsync? ($selector: System.Func$2<T, UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T>
        */
        MinAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($selector: System.Func$2<T, float>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T>
        */
        MinAwaitAsync? ($selector: System.Func$2<T, UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T>
        */
        MinAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($selector: System.Func$2<T, double>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T>
        */
        MinAwaitAsync? ($selector: System.Func$2<T, UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T>
        */
        MinAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($selector: System.Func$2<T, System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T>
        */
        MinAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T>
        */
        MinAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($selector: System.Func$2<T, System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<int>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T>
        */
        MinAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<int>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T>
        */
        MinAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<int>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($selector: System.Func$2<T, System.Nullable$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<bigint>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T>
        */
        MinAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<bigint>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T>
        */
        MinAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<bigint>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($selector: System.Func$2<T, System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T>
        */
        MinAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T>
        */
        MinAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($selector: System.Func$2<T, System.Nullable$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T>
        */
        MinAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T>
        */
        MinAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAsync<T>
        */
        MinAsync? ($selector: System.Func$2<T, System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitAsync<T>
        */
        MinAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MinAwaitWithCancellationAsync<T>
        */
        MinAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($selector: System.Func$2<T, int>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T>
        */
        MaxAwaitAsync? ($selector: System.Func$2<T, UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T>
        */
        MaxAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($selector: System.Func$2<T, bigint>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T>
        */
        MaxAwaitAsync? ($selector: System.Func$2<T, UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T>
        */
        MaxAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($selector: System.Func$2<T, float>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T>
        */
        MaxAwaitAsync? ($selector: System.Func$2<T, UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T>
        */
        MaxAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($selector: System.Func$2<T, double>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T>
        */
        MaxAwaitAsync? ($selector: System.Func$2<T, UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T>
        */
        MaxAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($selector: System.Func$2<T, System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T>
        */
        MaxAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T>
        */
        MaxAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($selector: System.Func$2<T, System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<int>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T>
        */
        MaxAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<int>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T>
        */
        MaxAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<int>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($selector: System.Func$2<T, System.Nullable$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<bigint>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T>
        */
        MaxAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<bigint>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T>
        */
        MaxAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<bigint>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($selector: System.Func$2<T, System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T>
        */
        MaxAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T>
        */
        MaxAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($selector: System.Func$2<T, System.Nullable$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T>
        */
        MaxAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T>
        */
        MaxAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAsync<T>
        */
        MaxAsync? ($selector: System.Func$2<T, System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitAsync<T>
        */
        MaxAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.MaxAwaitWithCancellationAsync<T>
        */
        MaxAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OfType<TResult>
        */
        OfType?<TResult> () : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderBy<T, TKey>
        */
        OrderBy?<TKey> ($keySelector: System.Func$2<T, TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderBy<T, TKey>
        */
        OrderBy?<TKey> ($keySelector: System.Func$2<T, TKey>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderByAwait<T, TKey>
        */
        OrderByAwait?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderByAwait<T, TKey>
        */
        OrderByAwait?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderByAwaitWithCancellation<T, TKey>
        */
        OrderByAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderByAwaitWithCancellation<T, TKey>
        */
        OrderByAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderByDescending<T, TKey>
        */
        OrderByDescending?<TKey> ($keySelector: System.Func$2<T, TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderByDescending<T, TKey>
        */
        OrderByDescending?<TKey> ($keySelector: System.Func$2<T, TKey>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderByDescendingAwait<T, TKey>
        */
        OrderByDescendingAwait?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderByDescendingAwait<T, TKey>
        */
        OrderByDescendingAwait?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderByDescendingAwaitWithCancellation<T, TKey>
        */
        OrderByDescendingAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OrderByDescendingAwaitWithCancellation<T, TKey>
        */
        OrderByDescendingAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Pairwise<T>
        */
        Pairwise? () : IUniTaskAsyncEnumerable$1<System.ValueTuple$2<TSource, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Publish<T>
        */
        Publish? () : IConnectableUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Queue<T>
        */
        Queue? () : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Reverse<T>
        */
        Reverse? () : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Select<T, TResult>
        */
        Select?<TResult> ($selector: System.Func$2<T, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Select<T, TResult>
        */
        Select?<TResult> ($selector: System.Func$3<T, int, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectAwait<T, TResult>
        */
        SelectAwait?<TResult> ($selector: System.Func$2<T, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectAwait<T, TResult>
        */
        SelectAwait?<TResult> ($selector: System.Func$3<T, int, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectAwaitWithCancellation<T, TResult>
        */
        SelectAwaitWithCancellation?<TResult> ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectAwaitWithCancellation<T, TResult>
        */
        SelectAwaitWithCancellation?<TResult> ($selector: System.Func$4<T, int, System_Threading.CancellationToken, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectMany<T, TResult>
        */
        SelectMany?<TResult> ($selector: System.Func$2<T, IUniTaskAsyncEnumerable$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectMany<T, TResult>
        */
        SelectMany?<TResult> ($selector: System.Func$3<T, int, IUniTaskAsyncEnumerable$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectMany<T, TCollection, TResult>
        */
        SelectMany?<TCollection,TResult> ($collectionSelector: System.Func$2<T, IUniTaskAsyncEnumerable$1<TCollection>>, $resultSelector: System.Func$3<T, TCollection, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectMany<T, TCollection, TResult>
        */
        SelectMany?<TCollection,TResult> ($collectionSelector: System.Func$3<T, int, IUniTaskAsyncEnumerable$1<TCollection>>, $resultSelector: System.Func$3<T, TCollection, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectManyAwait<T, TResult>
        */
        SelectManyAwait?<TResult> ($selector: System.Func$2<T, UniTask$1<IUniTaskAsyncEnumerable$1<TResult>>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectManyAwait<T, TResult>
        */
        SelectManyAwait?<TResult> ($selector: System.Func$3<T, int, UniTask$1<IUniTaskAsyncEnumerable$1<TResult>>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectManyAwait<T, TCollection, TResult>
        */
        SelectManyAwait?<TCollection,TResult> ($collectionSelector: System.Func$2<T, UniTask$1<IUniTaskAsyncEnumerable$1<TCollection>>>, $resultSelector: System.Func$3<T, TCollection, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectManyAwait<T, TCollection, TResult>
        */
        SelectManyAwait?<TCollection,TResult> ($collectionSelector: System.Func$3<T, int, UniTask$1<IUniTaskAsyncEnumerable$1<TCollection>>>, $resultSelector: System.Func$3<T, TCollection, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectManyAwaitWithCancellation<T, TResult>
        */
        SelectManyAwaitWithCancellation?<TResult> ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<IUniTaskAsyncEnumerable$1<TResult>>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectManyAwaitWithCancellation<T, TResult>
        */
        SelectManyAwaitWithCancellation?<TResult> ($selector: System.Func$4<T, int, System_Threading.CancellationToken, UniTask$1<IUniTaskAsyncEnumerable$1<TResult>>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectManyAwaitWithCancellation<T, TCollection, TResult>
        */
        SelectManyAwaitWithCancellation?<TCollection,TResult> ($collectionSelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<IUniTaskAsyncEnumerable$1<TCollection>>>, $resultSelector: System.Func$4<T, TCollection, System_Threading.CancellationToken, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SelectManyAwaitWithCancellation<T, TCollection, TResult>
        */
        SelectManyAwaitWithCancellation?<TCollection,TResult> ($collectionSelector: System.Func$4<T, int, System_Threading.CancellationToken, UniTask$1<IUniTaskAsyncEnumerable$1<TCollection>>>, $resultSelector: System.Func$4<T, TCollection, System_Threading.CancellationToken, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SequenceEqualAsync<T>
        */
        SequenceEqualAsync? ($second: IUniTaskAsyncEnumerable$1<T>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SequenceEqualAsync<T>
        */
        SequenceEqualAsync? ($second: IUniTaskAsyncEnumerable$1<T>, $comparer: System_Collections_Generic.IEqualityComparer$1<T>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<boolean>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SingleAsync<T>
        */
        SingleAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SingleAsync<T>
        */
        SingleAsync? ($predicate: System.Func$2<T, boolean>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SingleAwaitAsync<T>
        */
        SingleAwaitAsync? ($predicate: System.Func$2<T, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SingleAwaitWithCancellationAsync<T>
        */
        SingleAwaitWithCancellationAsync? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SingleOrDefaultAsync<T>
        */
        SingleOrDefaultAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SingleOrDefaultAsync<T>
        */
        SingleOrDefaultAsync? ($predicate: System.Func$2<T, boolean>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SingleOrDefaultAwaitAsync<T>
        */
        SingleOrDefaultAwaitAsync? ($predicate: System.Func$2<T, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SingleOrDefaultAwaitWithCancellationAsync<T>
        */
        SingleOrDefaultAwaitWithCancellationAsync? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Skip<T>
        */
        Skip? ($count: int) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SkipLast<T>
        */
        SkipLast? ($count: int) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SkipUntil<T>
        */
        SkipUntil? ($other: UniTask) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SkipUntil<T>
        */
        SkipUntil? ($other: System.Func$2<System_Threading.CancellationToken, UniTask>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SkipUntilCanceled<T>
        */
        SkipUntilCanceled? ($cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SkipWhile<T>
        */
        SkipWhile? ($predicate: System.Func$2<T, boolean>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SkipWhile<T>
        */
        SkipWhile? ($predicate: System.Func$3<T, int, boolean>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SkipWhileAwait<T>
        */
        SkipWhileAwait? ($predicate: System.Func$2<T, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SkipWhileAwait<T>
        */
        SkipWhileAwait? ($predicate: System.Func$3<T, int, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SkipWhileAwaitWithCancellation<T>
        */
        SkipWhileAwaitWithCancellation? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SkipWhileAwaitWithCancellation<T>
        */
        SkipWhileAwaitWithCancellation? ($predicate: System.Func$4<T, int, System_Threading.CancellationToken, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($action: System.Action$1<T>) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($action: System.Func$2<T, UniTaskVoid>) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($action: System.Func$3<T, System_Threading.CancellationToken, UniTaskVoid>) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($action: System.Action$1<T>, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($action: System.Func$2<T, UniTaskVoid>, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($action: System.Func$3<T, System_Threading.CancellationToken, UniTaskVoid>, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$2<T, UniTask>) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$2<T, UniTask>, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$3<T, System_Threading.CancellationToken, UniTask>) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$3<T, System_Threading.CancellationToken, UniTask>, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($onNext: System.Action$1<T>, $onError: System.Action$1<System.Exception>) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($onNext: System.Func$2<T, UniTaskVoid>, $onError: System.Action$1<System.Exception>) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($onNext: System.Action$1<T>, $onError: System.Action$1<System.Exception>, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($onNext: System.Func$2<T, UniTaskVoid>, $onError: System.Action$1<System.Exception>, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$2<T, UniTask>, $onError: System.Action$1<System.Exception>) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$2<T, UniTask>, $onError: System.Action$1<System.Exception>, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$3<T, System_Threading.CancellationToken, UniTask>, $onError: System.Action$1<System.Exception>) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$3<T, System_Threading.CancellationToken, UniTask>, $onError: System.Action$1<System.Exception>, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($onNext: System.Action$1<T>, $onCompleted: System.Action) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($onNext: System.Func$2<T, UniTaskVoid>, $onCompleted: System.Action) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($onNext: System.Action$1<T>, $onCompleted: System.Action, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($onNext: System.Func$2<T, UniTaskVoid>, $onCompleted: System.Action, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$2<T, UniTask>, $onCompleted: System.Action) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$2<T, UniTask>, $onCompleted: System.Action, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$3<T, System_Threading.CancellationToken, UniTask>, $onCompleted: System.Action) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SubscribeAwait<T>
        */
        SubscribeAwait? ($onNext: System.Func$3<T, System_Threading.CancellationToken, UniTask>, $onCompleted: System.Action, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($observer: System.IObserver$1<T>) : System.IDisposable
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Subscribe<T>
        */
        Subscribe? ($observer: System.IObserver$1<T>, $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAsync<T>
        */
        SumAsync? ($selector: System.Func$2<T, int>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitAsync<T>
        */
        SumAwaitAsync? ($selector: System.Func$2<T, UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitWithCancellationAsync<T>
        */
        SumAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<int>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAsync<T>
        */
        SumAsync? ($selector: System.Func$2<T, bigint>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitAsync<T>
        */
        SumAwaitAsync? ($selector: System.Func$2<T, UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitWithCancellationAsync<T>
        */
        SumAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<bigint>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAsync<T>
        */
        SumAsync? ($selector: System.Func$2<T, float>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitAsync<T>
        */
        SumAwaitAsync? ($selector: System.Func$2<T, UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitWithCancellationAsync<T>
        */
        SumAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<float>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAsync<T>
        */
        SumAsync? ($selector: System.Func$2<T, double>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitAsync<T>
        */
        SumAwaitAsync? ($selector: System.Func$2<T, UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitWithCancellationAsync<T>
        */
        SumAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<double>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAsync<T>
        */
        SumAsync? ($selector: System.Func$2<T, System.Decimal>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitAsync<T>
        */
        SumAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitWithCancellationAsync<T>
        */
        SumAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Decimal>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAsync<T>
        */
        SumAsync? ($selector: System.Func$2<T, System.Nullable$1<int>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<int>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitAsync<T>
        */
        SumAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<int>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitWithCancellationAsync<T>
        */
        SumAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<int>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<int>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAsync<T>
        */
        SumAsync? ($selector: System.Func$2<T, System.Nullable$1<bigint>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<bigint>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitAsync<T>
        */
        SumAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<bigint>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitWithCancellationAsync<T>
        */
        SumAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<bigint>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<bigint>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAsync<T>
        */
        SumAsync? ($selector: System.Func$2<T, System.Nullable$1<float>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitAsync<T>
        */
        SumAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitWithCancellationAsync<T>
        */
        SumAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<float>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<float>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAsync<T>
        */
        SumAsync? ($selector: System.Func$2<T, System.Nullable$1<double>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitAsync<T>
        */
        SumAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitWithCancellationAsync<T>
        */
        SumAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<double>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<double>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAsync<T>
        */
        SumAsync? ($selector: System.Func$2<T, System.Nullable$1<System.Decimal>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitAsync<T>
        */
        SumAwaitAsync? ($selector: System.Func$2<T, UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.SumAwaitWithCancellationAsync<T>
        */
        SumAwaitWithCancellationAsync? ($selector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<System.Nullable$1<System.Decimal>>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System.Nullable$1<System.Decimal>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Take<T>
        */
        Take? ($count: int) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.TakeLast<T>
        */
        TakeLast? ($count: int) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.TakeUntil<T>
        */
        TakeUntil? ($other: UniTask) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.TakeUntil<T>
        */
        TakeUntil? ($other: System.Func$2<System_Threading.CancellationToken, UniTask>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.TakeUntilCanceled<T>
        */
        TakeUntilCanceled? ($cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.TakeWhile<T>
        */
        TakeWhile? ($predicate: System.Func$2<T, boolean>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.TakeWhile<T>
        */
        TakeWhile? ($predicate: System.Func$3<T, int, boolean>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.TakeWhileAwait<T>
        */
        TakeWhileAwait? ($predicate: System.Func$2<T, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.TakeWhileAwait<T>
        */
        TakeWhileAwait? ($predicate: System.Func$3<T, int, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.TakeWhileAwaitWithCancellation<T>
        */
        TakeWhileAwaitWithCancellation? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.TakeWhileAwaitWithCancellation<T>
        */
        TakeWhileAwaitWithCancellation? ($predicate: System.Func$4<T, int, System_Threading.CancellationToken, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToArrayAsync<T>
        */
        ToArrayAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<TSource[]>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAsync<T, TKey>
        */
        ToDictionaryAsync?<TKey> ($keySelector: System.Func$2<T, TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAsync<T, TKey>
        */
        ToDictionaryAsync?<TKey> ($keySelector: System.Func$2<T, TKey>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAsync<T, TKey, TElement>
        */
        ToDictionaryAsync?<TKey,TElement> ($keySelector: System.Func$2<T, TKey>, $elementSelector: System.Func$2<T, TElement>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAsync<T, TKey, TElement>
        */
        ToDictionaryAsync?<TKey,TElement> ($keySelector: System.Func$2<T, TKey>, $elementSelector: System.Func$2<T, TElement>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAwaitAsync<T, TKey>
        */
        ToDictionaryAwaitAsync?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAwaitAsync<T, TKey>
        */
        ToDictionaryAwaitAsync?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAwaitAsync<T, TKey, TElement>
        */
        ToDictionaryAwaitAsync?<TKey,TElement> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $elementSelector: System.Func$2<T, UniTask$1<TElement>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAwaitAsync<T, TKey, TElement>
        */
        ToDictionaryAwaitAsync?<TKey,TElement> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $elementSelector: System.Func$2<T, UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAwaitWithCancellationAsync<T, TKey>
        */
        ToDictionaryAwaitWithCancellationAsync?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAwaitWithCancellationAsync<T, TKey>
        */
        ToDictionaryAwaitWithCancellationAsync?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAwaitWithCancellationAsync<T, TKey, TElement>
        */
        ToDictionaryAwaitWithCancellationAsync?<TKey,TElement> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $elementSelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TElement>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToDictionaryAwaitWithCancellationAsync<T, TKey, TElement>
        */
        ToDictionaryAwaitWithCancellationAsync?<TKey,TElement> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $elementSelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.Dictionary$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToHashSetAsync<T>
        */
        ToHashSetAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.HashSet$1<TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToHashSetAsync<T>
        */
        ToHashSetAsync? ($comparer: System_Collections_Generic.IEqualityComparer$1<T>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.HashSet$1<TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToListAsync<T>
        */
        ToListAsync? ($cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Collections_Generic.List$1<TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAsync<T, TKey>
        */
        ToLookupAsync?<TKey> ($keySelector: System.Func$2<T, TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAsync<T, TKey>
        */
        ToLookupAsync?<TKey> ($keySelector: System.Func$2<T, TKey>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAsync<T, TKey, TElement>
        */
        ToLookupAsync?<TKey,TElement> ($keySelector: System.Func$2<T, TKey>, $elementSelector: System.Func$2<T, TElement>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAsync<T, TKey, TElement>
        */
        ToLookupAsync?<TKey,TElement> ($keySelector: System.Func$2<T, TKey>, $elementSelector: System.Func$2<T, TElement>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAwaitAsync<T, TKey>
        */
        ToLookupAwaitAsync?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAwaitAsync<T, TKey>
        */
        ToLookupAwaitAsync?<TKey> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAwaitAsync<T, TKey, TElement>
        */
        ToLookupAwaitAsync?<TKey,TElement> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $elementSelector: System.Func$2<T, UniTask$1<TElement>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAwaitAsync<T, TKey, TElement>
        */
        ToLookupAwaitAsync?<TKey,TElement> ($keySelector: System.Func$2<T, UniTask$1<TKey>>, $elementSelector: System.Func$2<T, UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAwaitWithCancellationAsync<T, TKey>
        */
        ToLookupAwaitWithCancellationAsync?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAwaitWithCancellationAsync<T, TKey>
        */
        ToLookupAwaitWithCancellationAsync?<TKey> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TSource>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAwaitWithCancellationAsync<T, TKey, TElement>
        */
        ToLookupAwaitWithCancellationAsync?<TKey,TElement> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $elementSelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TElement>>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToLookupAwaitWithCancellationAsync<T, TKey, TElement>
        */
        ToLookupAwaitWithCancellationAsync?<TKey,TElement> ($keySelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TKey>>, $elementSelector: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<TElement>>, $comparer: System_Collections_Generic.IEqualityComparer$1<TKey>, $cancellationToken?: System_Threading.CancellationToken) : UniTask$1<System_Linq.ILookup$2<TKey, TElement>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToObservable<T>
        */
        ToObservable? () : System.IObservable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Union<T>
        */
        Union? ($second: IUniTaskAsyncEnumerable$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Union<T>
        */
        Union? ($second: IUniTaskAsyncEnumerable$1<T>, $comparer: System_Collections_Generic.IEqualityComparer$1<T>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Where<T>
        */
        Where? ($predicate: System.Func$2<T, boolean>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Where<T>
        */
        Where? ($predicate: System.Func$3<T, int, boolean>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.WhereAwait<T>
        */
        WhereAwait? ($predicate: System.Func$2<T, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.WhereAwait<T>
        */
        WhereAwait? ($predicate: System.Func$3<T, int, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.WhereAwaitWithCancellation<T>
        */
        WhereAwaitWithCancellation? ($predicate: System.Func$3<T, System_Threading.CancellationToken, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.WhereAwaitWithCancellation<T>
        */
        WhereAwaitWithCancellation? ($predicate: System.Func$4<T, int, System_Threading.CancellationToken, UniTask$1<boolean>>) : IUniTaskAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Zip<T, TSecond>
        */
        Zip?<TSecond> ($second: IUniTaskAsyncEnumerable$1<TSecond>) : IUniTaskAsyncEnumerable$1<System.ValueTuple$2<TFirst, TSecond>>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Zip<T, TSecond, TResult>
        */
        Zip?<TSecond,TResult> ($second: IUniTaskAsyncEnumerable$1<TSecond>, $resultSelector: System.Func$3<T, TSecond, TResult>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ZipAwait<T, TSecond, TResult>
        */
        ZipAwait?<TSecond,TResult> ($second: IUniTaskAsyncEnumerable$1<TSecond>, $selector: System.Func$3<T, TSecond, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ZipAwaitWithCancellation<T, TSecond, TResult>
        */
        ZipAwaitWithCancellation?<TSecond,TResult> ($second: IUniTaskAsyncEnumerable$1<TSecond>, $selector: System.Func$4<T, TSecond, System_Threading.CancellationToken, UniTask$1<TResult>>) : IUniTaskAsyncEnumerable$1<TResult>
    }

    interface IUniTaskOrderedAsyncEnumerable$1<TElement> {

        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Cast<TResult>
        */
        Cast?<TResult> () : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OfType<TResult>
        */
        OfType?<TResult> () : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenBy<TElement, TKey>
        */
        ThenBy?<TKey> ($keySelector: System.Func$2<TElement, TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenBy<TElement, TKey>
        */
        ThenBy?<TKey> ($keySelector: System.Func$2<TElement, TKey>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenByAwait<TElement, TKey>
        */
        ThenByAwait?<TKey> ($keySelector: System.Func$2<TElement, UniTask$1<TKey>>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenByAwait<TElement, TKey>
        */
        ThenByAwait?<TKey> ($keySelector: System.Func$2<TElement, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenByAwaitWithCancellation<TElement, TKey>
        */
        ThenByAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<TElement, System_Threading.CancellationToken, UniTask$1<TKey>>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenByAwaitWithCancellation<TElement, TKey>
        */
        ThenByAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<TElement, System_Threading.CancellationToken, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenByDescending<TElement, TKey>
        */
        ThenByDescending?<TKey> ($keySelector: System.Func$2<TElement, TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenByDescending<TElement, TKey>
        */
        ThenByDescending?<TKey> ($keySelector: System.Func$2<TElement, TKey>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenByDescendingAwait<TElement, TKey>
        */
        ThenByDescendingAwait?<TKey> ($keySelector: System.Func$2<TElement, UniTask$1<TKey>>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenByDescendingAwait<TElement, TKey>
        */
        ThenByDescendingAwait?<TKey> ($keySelector: System.Func$2<TElement, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenByDescendingAwaitWithCancellation<TElement, TKey>
        */
        ThenByDescendingAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<TElement, System_Threading.CancellationToken, UniTask$1<TKey>>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ThenByDescendingAwaitWithCancellation<TElement, TKey>
        */
        ThenByDescendingAwaitWithCancellation?<TKey> ($keySelector: System.Func$3<TElement, System_Threading.CancellationToken, UniTask$1<TKey>>, $comparer: System_Collections_Generic.IComparer$1<TKey>) : IUniTaskOrderedAsyncEnumerable$1<TSource>
    }

    interface IConnectableUniTaskAsyncEnumerable$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.Cast<TResult>
        */
        Cast?<TResult> () : IUniTaskAsyncEnumerable$1<TResult>
        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.OfType<TResult>
        */
        OfType?<TResult> () : IUniTaskAsyncEnumerable$1<TResult>
    }

    interface UniTask$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToUniTaskAsyncEnumerable<T>
        */
        ToUniTaskAsyncEnumerable () : IUniTaskAsyncEnumerable$1<TSource>
    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'
    import * as System_Runtime_InteropServices from 'System.Runtime.InteropServices'
    import * as System_Collections from 'System.Collections'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    interface Func$3<T1,T2,TResult> {
        (arg1: T1, arg2: T2) : TResult; 
        Invoke?: (arg1: T1, arg2: T2) => TResult;
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

    interface Func$2<T,TResult> {
        (arg: T) : TResult; 
        Invoke?: (arg: T) => TResult;
    }

    interface Func$4<T1,T2,T3,TResult> {
        (arg1: T1, arg2: T2, arg3: T3) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => TResult;
    }

    interface Decimal extends IFormattable, ISpanFormattable, IComparable, System_Runtime_Serialization.IDeserializationCallback, IComparable$1<Decimal>, IConvertible, IEquatable$1<Decimal> {

    }

    interface IFormattable {

    }

    interface IComparable {

    }

    interface IComparable$1<T> {

    }

    interface IConvertible {

    }

    interface IEquatable$1<T> {

    }

    interface Nullable$1<T> {

    }

    interface Func$5<T1,T2,T3,T4,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult;
    }

    interface Func$6<T1,T2,T3,T4,T5,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult;
    }

    interface Func$7<T1,T2,T3,T4,T5,T6,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => TResult;
    }

    interface Func$8<T1,T2,T3,T4,T5,T6,T7,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => TResult;
    }

    interface Func$9<T1,T2,T3,T4,T5,T6,T7,T8,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => TResult;
    }

    interface Func$10<T1,T2,T3,T4,T5,T6,T7,T8,T9,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => TResult;
    }

    interface Func$11<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => TResult;
    }

    interface Func$12<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11) => TResult;
    }

    interface Func$13<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12) => TResult;
    }

    interface Func$14<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13) => TResult;
    }

    interface Func$15<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14) => TResult;
    }

    interface Func$16<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14, arg15: T15) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12, arg13: T13, arg14: T14, arg15: T15) => TResult;
    }

    interface Action$1<T> {
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
    }

    interface Exception extends System_Runtime_InteropServices._Exception, System_Runtime_Serialization.ISerializable {

    }

    interface Action {
        () : void; 
        Invoke?: () => void;
    }
    var Action: { new (func: () => void): Action; }

    interface IObserver$1<T> {

    }

    interface Action$2<T1,T2> {
        (arg1: T1, arg2: T2) : void; 
        Invoke?: (arg1: T1, arg2: T2) => void;
    }

    interface ValueTuple$2<T1,T2> extends IComparable, IComparable$1<ValueTuple$2<T1, T2>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$2<T1, T2>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

    }

    interface IDisposable {

    }

    interface IObservable$1<T> {

    }

    interface IAsyncResult {

    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface TimeSpan extends IFormattable, ISpanFormattable, IComparable, IComparable$1<TimeSpan>, IEquatable$1<TimeSpan> {

    }

    interface IObservable$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToUniTaskAsyncEnumerable<T>
        */
        ToUniTaskAsyncEnumerable? () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

    interface IDeserializationCallback {

    }

}

declare module 'System.Threading' {
    import * as System from 'System'

    interface CancellationToken {

    }

}

declare module 'System.Collections.Generic' {
    import * as System_Collections from 'System.Collections'
    import * as System from 'System'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    interface IList$1<T> extends ICollection$1<T> {

    }

    interface ICollection$1<T> extends IEnumerable$1<T> {

    }

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

    }

    interface IEqualityComparer$1<T> {

    }

    interface IComparer$1<T> {

    }

    interface Dictionary$2<TKey,TValue> extends IDictionary$2<TKey,TValue>, System_Collections.IDictionary, System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, IReadOnlyDictionary$2<TKey,TValue> {

    }

    interface IDictionary$2<TKey,TValue> extends ICollection$1<KeyValuePair$2<TKey, TValue>> {

    }

    interface KeyValuePair$2<TKey,TValue> {

    }

    interface IReadOnlyDictionary$2<TKey,TValue> extends IReadOnlyCollection$1<KeyValuePair$2<TKey, TValue>> {

    }

    interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {

    }

    interface HashSet$1<T> extends ISet$1<T>, System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, IReadOnlyCollection$1<T> {

    }

    interface ISet$1<T> extends ICollection$1<T> {

    }

    interface List$1<T> extends IList$1<T>, System_Collections.IList, IReadOnlyList$1<T> {

    }

    interface IReadOnlyList$1<T> extends IReadOnlyCollection$1<T> {

    }

    interface IEnumerable$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToUniTaskAsyncEnumerable<T>
        */
        ToUniTaskAsyncEnumerable? () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
    }

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

    interface IStructuralComparable {

    }

    interface IStructuralEquatable {

    }

    interface IDictionary extends ICollection {

    }

    interface ICollection extends IEnumerable {

    }

    interface IList extends ICollection {

    }

}

declare module 'System.Runtime.InteropServices' {

    interface _Exception {

    }

}

declare module 'System.Linq' {
    import * as System_Collections_Generic from 'System.Collections.Generic'

    interface IGrouping$2<TKey,TElement> extends System_Collections_Generic.IEnumerable$1<TElement> {

    }

    interface ILookup$2<TKey,TElement> extends System_Collections_Generic.IEnumerable$1<IGrouping$2<TKey, TElement>> {

    }

}

declare module 'System.Threading.Tasks' {
    import * as System from 'System'
    import * as System_Threading from 'System.Threading'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'

    interface Task$1<TResult> {

    }

    interface Task extends System.IAsyncResult, System_Threading.IThreadPoolWorkItem, System.IDisposable {

    }

    interface Task$1<TResult> {

        /**
        * @extension Cysharp.Threading.Tasks.Linq.UniTaskAsyncEnumerable.ToUniTaskAsyncEnumerable<TResult>
        */
        ToUniTaskAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<TSource>
    }

}

