//@ts-nocheck
declare module 'UnityEngine' {
    interface MonoBehaviour
    {
        /*
         * Start Generator Coroutine
         */
        StartCoroutine(generator:Generator) : Coroutine;
    }
}

declare module 'System' {
    interface Type {}

    class Array$1<T> extends Array {
        get_Item(index: number):T;
        set_Item(index: number, value: T):void;
    }

    class Array extends Object {}

    class Object {}

    class ValueType extends Object {}

    class Int32 extends ValueType {}

    class Single extends ValueType {}

    class UInt32 extends ValueType {}
    
    class Int64 extends ValueType {}
    class Double extends ValueType {}
    class Single extends ValueType {}
    class Boolean extends ValueType {}
    class String extends ValueType {}
}


declare module 'System.Threading.Tasks' {
    const __Task_Brand: unique symbol;
    interface Task extends Promise<void> {
        [__Task_Brand]: never;
    }

    const __Task$1_Brand: unique symbol;
    interface Task$1<T> extends Promise<T> {
        [__Task$1_Brand]: never;
    }
}

declare module 'Cysharp.Threading.Tasks' {
    const __UniTask_Brand: unique symbol;

    interface UniTask extends Promise<void> {
        [__UniTask_Brand]: never;
    }

    const __UniTask$1_Brand: unique symbol;

    interface UniTask$1<T> extends Promise<T> {
        [__UniTask$1_Brand]: never;
    }

    const __YieldAwaitable_Brand: unique symbol;

    interface YieldAwaitable extends Promise<void> {
        [__YieldAwaitable_Brand]: never;
    }
}