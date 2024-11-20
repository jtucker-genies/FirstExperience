
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Cysharp.Threading.Tasks' {
    import * as System from 'System'
    import * as TMPro from 'TMPro'
    import * as System_Threading from 'System.Threading'

    class TextMeshProAsyncExtensions {

        public static GetAsyncValueChangedEventHandler ($inputField: TMPro.TMP_InputField) : IAsyncValueChangedEventHandler$1<string>
        public static GetAsyncValueChangedEventHandler ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IAsyncValueChangedEventHandler$1<string>
        public static OnValueChangedAsync ($inputField: TMPro.TMP_InputField) : UniTask$1<string>
        public static OnValueChangedAsync ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<string>
        public static OnValueChangedAsAsyncEnumerable ($inputField: TMPro.TMP_InputField) : IUniTaskAsyncEnumerable$1<string>
        public static OnValueChangedAsAsyncEnumerable ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<string>
        public static GetAsyncEndEditEventHandler ($inputField: TMPro.TMP_InputField) : IAsyncEndEditEventHandler$1<string>
        public static GetAsyncEndEditEventHandler ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IAsyncEndEditEventHandler$1<string>
        public static OnEndEditAsync ($inputField: TMPro.TMP_InputField) : UniTask$1<string>
        public static OnEndEditAsync ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<string>
        public static OnEndEditAsAsyncEnumerable ($inputField: TMPro.TMP_InputField) : IUniTaskAsyncEnumerable$1<string>
        public static OnEndEditAsAsyncEnumerable ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<string>
        public static GetAsyncEndTextSelectionEventHandler ($inputField: TMPro.TMP_InputField) : IAsyncEndTextSelectionEventHandler$1<System.ValueTuple$3<string, int, int>>
        public static GetAsyncEndTextSelectionEventHandler ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IAsyncEndTextSelectionEventHandler$1<System.ValueTuple$3<string, int, int>>
        public static OnEndTextSelectionAsync ($inputField: TMPro.TMP_InputField) : UniTask$1<System.ValueTuple$3<string, int, int>>
        public static OnEndTextSelectionAsync ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<System.ValueTuple$3<string, int, int>>
        public static OnEndTextSelectionAsAsyncEnumerable ($inputField: TMPro.TMP_InputField) : IUniTaskAsyncEnumerable$1<System.ValueTuple$3<string, int, int>>
        public static OnEndTextSelectionAsAsyncEnumerable ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<System.ValueTuple$3<string, int, int>>
        public static GetAsyncTextSelectionEventHandler ($inputField: TMPro.TMP_InputField) : IAsyncTextSelectionEventHandler$1<System.ValueTuple$3<string, int, int>>
        public static GetAsyncTextSelectionEventHandler ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IAsyncTextSelectionEventHandler$1<System.ValueTuple$3<string, int, int>>
        public static OnTextSelectionAsync ($inputField: TMPro.TMP_InputField) : UniTask$1<System.ValueTuple$3<string, int, int>>
        public static OnTextSelectionAsync ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<System.ValueTuple$3<string, int, int>>
        public static OnTextSelectionAsAsyncEnumerable ($inputField: TMPro.TMP_InputField) : IUniTaskAsyncEnumerable$1<System.ValueTuple$3<string, int, int>>
        public static OnTextSelectionAsAsyncEnumerable ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<System.ValueTuple$3<string, int, int>>
        public static GetAsyncDeselectEventHandler ($inputField: TMPro.TMP_InputField) : IAsyncDeselectEventHandler$1<string>
        public static GetAsyncDeselectEventHandler ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IAsyncDeselectEventHandler$1<string>
        public static OnDeselectAsync ($inputField: TMPro.TMP_InputField) : UniTask$1<string>
        public static OnDeselectAsync ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<string>
        public static OnDeselectAsAsyncEnumerable ($inputField: TMPro.TMP_InputField) : IUniTaskAsyncEnumerable$1<string>
        public static OnDeselectAsAsyncEnumerable ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<string>
        public static GetAsyncSelectEventHandler ($inputField: TMPro.TMP_InputField) : IAsyncSelectEventHandler$1<string>
        public static GetAsyncSelectEventHandler ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IAsyncSelectEventHandler$1<string>
        public static OnSelectAsync ($inputField: TMPro.TMP_InputField) : UniTask$1<string>
        public static OnSelectAsync ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<string>
        public static OnSelectAsAsyncEnumerable ($inputField: TMPro.TMP_InputField) : IUniTaskAsyncEnumerable$1<string>
        public static OnSelectAsAsyncEnumerable ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<string>
        public static GetAsyncSubmitEventHandler ($inputField: TMPro.TMP_InputField) : IAsyncSubmitEventHandler$1<string>
        public static GetAsyncSubmitEventHandler ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IAsyncSubmitEventHandler$1<string>
        public static OnSubmitAsync ($inputField: TMPro.TMP_InputField) : UniTask$1<string>
        public static OnSubmitAsync ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : UniTask$1<string>
        public static OnSubmitAsAsyncEnumerable ($inputField: TMPro.TMP_InputField) : IUniTaskAsyncEnumerable$1<string>
        public static OnSubmitAsAsyncEnumerable ($inputField: TMPro.TMP_InputField, $cancellationToken: System_Threading.CancellationToken) : IUniTaskAsyncEnumerable$1<string>
        public static BindTo ($source: IUniTaskAsyncEnumerable$1<string>, $text: TMPro.TMP_Text, $rebindOnError?: boolean) : void
        public static BindTo ($source: IUniTaskAsyncEnumerable$1<string>, $text: TMPro.TMP_Text, $cancellationToken: System_Threading.CancellationToken, $rebindOnError?: boolean) : void
        public static BindTo<T> ($source: IUniTaskAsyncEnumerable$1<T>, $text: TMPro.TMP_Text, $rebindOnError?: boolean) : void
        public static BindTo<T> ($source: IUniTaskAsyncEnumerable$1<T>, $text: TMPro.TMP_Text, $cancellationToken: System_Threading.CancellationToken, $rebindOnError?: boolean) : void
        public static BindTo<T> ($source: AsyncReactiveProperty$1<T>, $text: TMPro.TMP_Text, $rebindOnError?: boolean) : void
    }

    interface IAsyncValueChangedEventHandler$1<T> extends System.IDisposable {

    }

    interface UniTask$1<T> {

    }

    interface IUniTaskAsyncEnumerable$1<T> {

    }

    interface IAsyncEndEditEventHandler$1<T> extends System.IDisposable {

    }

    interface IAsyncEndTextSelectionEventHandler$1<T> extends System.IDisposable {

    }

    interface IAsyncTextSelectionEventHandler$1<T> extends System.IDisposable {

    }

    interface IAsyncDeselectEventHandler$1<T> extends System.IDisposable {

    }

    interface IAsyncSelectEventHandler$1<T> extends System.IDisposable {

    }

    interface IAsyncSubmitEventHandler$1<T> extends System.IDisposable {

    }

    interface AsyncReactiveProperty$1<T> extends IAsyncReactiveProperty$1<T>, System.IDisposable {

    }

    interface IAsyncReactiveProperty$1<T> extends IReadOnlyAsyncReactiveProperty$1<T> {

    }

    interface IReadOnlyAsyncReactiveProperty$1<T> extends IUniTaskAsyncEnumerable$1<T> {

    }

    interface IUniTaskAsyncEnumerable$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.BindTo<T>
        */
        BindTo? ($text: TMPro.TMP_Text, $rebindOnError?: boolean) : void
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.BindTo<T>
        */
        BindTo? ($text: TMPro.TMP_Text, $cancellationToken: System_Threading.CancellationToken, $rebindOnError?: boolean) : void
    }

    interface AsyncReactiveProperty$1<T> {

        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.BindTo<T>
        */
        BindTo ($text: TMPro.TMP_Text, $rebindOnError?: boolean) : void
    }

}

declare module 'System' {
    import * as System_Collections from 'System.Collections'

    interface IDisposable {

    }

    interface ValueTuple$3<T1,T2,T3> extends IComparable, IComparable$1<ValueTuple$3<T1, T2, T3>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$3<T1, T2, T3>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

    }

    interface IComparable {

    }

    interface IComparable$1<T> {

    }

    interface IEquatable$1<T> {

    }

}

declare module 'TMPro' {
    import * as UnityEngine_UI from 'UnityEngine.UI'
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as System from 'System'
    import * as Cysharp_Threading_Tasks from 'Cysharp.Threading.Tasks'
    import * as System_Threading from 'System.Threading'

    interface TMP_InputField extends UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.IBeginDragHandler, UnityEngine_EventSystems.IDragHandler, UnityEngine_EventSystems.IEndDragHandler, UnityEngine_UI.ICanvasElement, UnityEngine_EventSystems.IScrollHandler, UnityEngine_EventSystems.IUpdateSelectedHandler, UnityEngine_UI.ILayoutElement {

    }

    interface TMP_Text {

    }

    interface TMP_InputField {

        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler () : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncValueChangedEventHandler
        */
        GetAsyncValueChangedEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncValueChangedEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync () : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnValueChangedAsync
        */
        OnValueChangedAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnValueChangedAsAsyncEnumerable
        */
        OnValueChangedAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncEndEditEventHandler
        */
        GetAsyncEndEditEventHandler () : Cysharp_Threading_Tasks.IAsyncEndEditEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncEndEditEventHandler
        */
        GetAsyncEndEditEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncEndEditEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnEndEditAsync
        */
        OnEndEditAsync () : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnEndEditAsync
        */
        OnEndEditAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnEndEditAsAsyncEnumerable
        */
        OnEndEditAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnEndEditAsAsyncEnumerable
        */
        OnEndEditAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncEndTextSelectionEventHandler
        */
        GetAsyncEndTextSelectionEventHandler () : Cysharp_Threading_Tasks.IAsyncEndTextSelectionEventHandler$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncEndTextSelectionEventHandler
        */
        GetAsyncEndTextSelectionEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncEndTextSelectionEventHandler$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnEndTextSelectionAsync
        */
        OnEndTextSelectionAsync () : Cysharp_Threading_Tasks.UniTask$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnEndTextSelectionAsync
        */
        OnEndTextSelectionAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnEndTextSelectionAsAsyncEnumerable
        */
        OnEndTextSelectionAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnEndTextSelectionAsAsyncEnumerable
        */
        OnEndTextSelectionAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncTextSelectionEventHandler
        */
        GetAsyncTextSelectionEventHandler () : Cysharp_Threading_Tasks.IAsyncTextSelectionEventHandler$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncTextSelectionEventHandler
        */
        GetAsyncTextSelectionEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncTextSelectionEventHandler$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnTextSelectionAsync
        */
        OnTextSelectionAsync () : Cysharp_Threading_Tasks.UniTask$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnTextSelectionAsync
        */
        OnTextSelectionAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnTextSelectionAsAsyncEnumerable
        */
        OnTextSelectionAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnTextSelectionAsAsyncEnumerable
        */
        OnTextSelectionAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<System.ValueTuple$3<string, int, int>>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncDeselectEventHandler
        */
        GetAsyncDeselectEventHandler () : Cysharp_Threading_Tasks.IAsyncDeselectEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncDeselectEventHandler
        */
        GetAsyncDeselectEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncDeselectEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnDeselectAsync
        */
        OnDeselectAsync () : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnDeselectAsync
        */
        OnDeselectAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnDeselectAsAsyncEnumerable
        */
        OnDeselectAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnDeselectAsAsyncEnumerable
        */
        OnDeselectAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncSelectEventHandler
        */
        GetAsyncSelectEventHandler () : Cysharp_Threading_Tasks.IAsyncSelectEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncSelectEventHandler
        */
        GetAsyncSelectEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncSelectEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnSelectAsync
        */
        OnSelectAsync () : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnSelectAsync
        */
        OnSelectAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnSelectAsAsyncEnumerable
        */
        OnSelectAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnSelectAsAsyncEnumerable
        */
        OnSelectAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncSubmitEventHandler
        */
        GetAsyncSubmitEventHandler () : Cysharp_Threading_Tasks.IAsyncSubmitEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.GetAsyncSubmitEventHandler
        */
        GetAsyncSubmitEventHandler ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IAsyncSubmitEventHandler$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnSubmitAsync
        */
        OnSubmitAsync () : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnSubmitAsync
        */
        OnSubmitAsync ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.UniTask$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnSubmitAsAsyncEnumerable
        */
        OnSubmitAsAsyncEnumerable () : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
        /**
        * @extension Cysharp.Threading.Tasks.TextMeshProAsyncExtensions.OnSubmitAsAsyncEnumerable
        */
        OnSubmitAsAsyncEnumerable ($cancellationToken: System_Threading.CancellationToken) : Cysharp_Threading_Tasks.IUniTaskAsyncEnumerable$1<string>
    }

}

declare module 'UnityEngine.EventSystems' {
    import * as UnityEngine from 'UnityEngine'

    interface ISubmitHandler extends IEventSystemHandler {

    }

    interface IEventSystemHandler {

    }

    interface IPointerClickHandler extends IEventSystemHandler {

    }

    interface IBeginDragHandler extends IEventSystemHandler {

    }

    interface IDragHandler extends IEventSystemHandler {

    }

    interface IEndDragHandler extends IEventSystemHandler {

    }

    interface IScrollHandler extends IEventSystemHandler {

    }

    interface IUpdateSelectedHandler extends IEventSystemHandler {

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

}

declare module 'UnityEngine.UI' {
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'

    interface ICanvasElement {

    }

    interface ILayoutElement {

    }

    interface Selectable extends UnityEngine_EventSystems.IPointerEnterHandler, UnityEngine_EventSystems.ISelectHandler, UnityEngine_EventSystems.IPointerExitHandler, UnityEngine_EventSystems.IDeselectHandler, UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IPointerUpHandler, UnityEngine_EventSystems.IMoveHandler {

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

}

declare module 'UnityEngine' {
    import * as System from 'System'

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

}

declare module 'System.Threading' {
    import * as System from 'System'

    interface CancellationToken {

    }

}

declare module 'System.Collections' {

    interface IStructuralComparable {

    }

    interface IStructuralEquatable {

    }

}

