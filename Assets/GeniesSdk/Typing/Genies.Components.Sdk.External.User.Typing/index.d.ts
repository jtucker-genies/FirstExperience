
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Genies.Components.SDK.User' {
    import * as System from 'System'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'

    class CurrentUser extends SilverUser {

        public get UserID(): string;

        public constructor ()
        public IsLoggedIn () : boolean
        public IsLoggedInAsync () : System_Threading_Tasks.Task$1<boolean>
    }

    class SilverUser extends UserBase {

        public get UserID(): string;

        public constructor ()
    }

    class UserBase extends System.Object implements IUser {

        public get UserID(): string;

    }

    interface IUser {

        readonly UserID? : string

    }

}

declare module 'System.Threading.Tasks' {
    import * as System from 'System'
    import * as System_Threading from 'System.Threading'

    interface Task$1<TResult> {

    }

    interface Task extends System.IAsyncResult, System_Threading.IThreadPoolWorkItem, System.IDisposable {

    }

}

declare module 'System' {

    interface IAsyncResult {

    }

    interface IDisposable {

    }

}

