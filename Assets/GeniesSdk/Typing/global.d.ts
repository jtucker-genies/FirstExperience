//@ts-nocheck

import { Task, Task$1 } from "System.Threading.Tasks";
import { UniTask, UniTask$1, YieldAwaitable } from "Cysharp.Threading.Tasks";
import { Type, Object } from "System";

declare global {

    declare var $ref: <T>(x?: T) => $Ref<T>;
    declare var $unref: <T>(x: $Ref<T>) => T;
    declare var $set: <T>(x: $Ref<T>, val: T) => void;
    declare var $promise: <T>(x: Task | UniTask | UniTask$1<T> | Task$1<T> | YieldAwaitable) => Promise<T>;
    declare var $generic: <T extends new (...args: any[]) => any>(genericType: T, ...genericArguments:any[]) => T;
    declare var $genericMethod: (genericType: any, methodName: string, ...genericArguments: any[]) => any;
    declare var $typeof: (x: Object) => Type;

    declare var HideInInspector: PropertyDecorator;
    declare var NonSerialized: PropertyDecorator;
    declare var SerializeField: PropertyDecorator;
    declare var Header: (header: string) => PropertyDecorator;
    declare var Space: (height?: number) => PropertyDecorator;
    declare var Tooltip: (tooltip: string) => PropertyDecorator;
    
    // primitive types
    declare type float = number & { __floatBrand?: undefined };
    declare type int = number & { __intBrand?: undefined };
    declare type double = number & { __doubleBrand?: undefined };
    declare type short = number & { __shortBrand?: undefined };
    declare type ushort = number & { __ushortBrand?: undefined };
    declare type byte = number & { __byteBrand?: undefined };
    declare type sbyte = number & { __sbyteBrand?: undefined };
    declare type uint = number & { __uintBrand?: undefined };
    declare type bool = boolean & { __boolBrand?: undefined };
    declare type char = string & { __charBrand?: undefined };

    declare enum __Puerts_CSharpEnum {}

    declare interface $Ref<T> {
        value: T;
    }
    declare namespace SignalBus {
        function subscribe(type: string | number, listener: Function): void;
        function unsubscribe(type: string | number, listener: Function): void;
        function trigger(type: string | number, ...args: any[]): void;
    }

    type Listener<T extends any[]> = (...args: T) => void;

    declare class GeniesEvent<T extends any[] = []> {
        constructor();

        addListener(listener: Listener<T>): void;

        removeListener(listener: Listener<T>): void;

        trigger(...args: T): void;
    }
}