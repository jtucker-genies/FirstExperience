
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'UnityEngine.UI' {
    import * as System from 'System'
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as UnityEngine_UI_Selectable from 'UnityEngine.UI.Selectable'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_UI_Button from 'UnityEngine.UI.Button'
    import * as UnityEngine_UI_Navigation from 'UnityEngine.UI.Navigation'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as UnityEngine_UI_MaskableGraphic from 'UnityEngine.UI.MaskableGraphic'
    import * as UnityEngine_UI_Image from 'UnityEngine.UI.Image'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_UI_Dropdown from 'UnityEngine.UI.Dropdown'
    import * as UnityEngine_UI_GraphicRaycaster from 'UnityEngine.UI.GraphicRaycaster'
    import * as UnityEngine_UI_InputField from 'UnityEngine.UI.InputField'
    import * as UnityEngine_UI_AspectRatioFitter from 'UnityEngine.UI.AspectRatioFitter'
    import * as UnityEngine_UI_CanvasScaler from 'UnityEngine.UI.CanvasScaler'
    import * as UnityEngine_UI_ContentSizeFitter from 'UnityEngine.UI.ContentSizeFitter'
    import * as UnityEngine_UI_GridLayoutGroup from 'UnityEngine.UI.GridLayoutGroup'
    import * as UnityEngine_UI_ScrollRect from 'UnityEngine.UI.ScrollRect'
    import * as UnityEngine_UI_Scrollbar from 'UnityEngine.UI.Scrollbar'
    import * as UnityEngine_UI_Slider from 'UnityEngine.UI.Slider'
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering'
    import * as UnityEngine_UI_Toggle from 'UnityEngine.UI.Toggle'

    class AnimationTriggers extends System.Object {

        public get normalTrigger(): string;
        public set normalTrigger(value: string);
        public get highlightedTrigger(): string;
        public set highlightedTrigger(value: string);
        public get pressedTrigger(): string;
        public set pressedTrigger(value: string);
        public get selectedTrigger(): string;
        public set selectedTrigger(value: string);
        public get disabledTrigger(): string;
        public set disabledTrigger(value: string);

        public constructor ()
    }

    class Button extends Selectable implements UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler {

        public static get allSelectablesArray(): Selectable[];
        public static get allSelectableCount(): int;
        public get navigation(): Navigation;
        public set navigation(value: Navigation);
        public get transition(): UnityEngine_UI_Selectable.Transition;
        public set transition(value: UnityEngine_UI_Selectable.Transition);
        public get colors(): ColorBlock;
        public set colors(value: ColorBlock);
        public get spriteState(): SpriteState;
        public set spriteState(value: SpriteState);
        public get animationTriggers(): AnimationTriggers;
        public set animationTriggers(value: AnimationTriggers);
        public get targetGraphic(): Graphic;
        public set targetGraphic(value: Graphic);
        public get interactable(): boolean;
        public set interactable(value: boolean);
        public get image(): Image;
        public set image(value: Image);
        public get animator(): UnityEngine.Animator;
        public get onClick(): UnityEngine_UI_Button.ButtonClickedEvent;
        public set onClick(value: UnityEngine_UI_Button.ButtonClickedEvent);

        public OnPointerClick ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnSubmit ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        private constructor ()
    }

    class Selectable extends UnityEngine_EventSystems.UIBehaviour implements UnityEngine_EventSystems.IPointerEnterHandler, UnityEngine_EventSystems.ISelectHandler, UnityEngine_EventSystems.IPointerExitHandler, UnityEngine_EventSystems.IDeselectHandler, UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IPointerUpHandler, UnityEngine_EventSystems.IMoveHandler {

        public static get allSelectablesArray(): Selectable[];
        public static get allSelectableCount(): int;
        public get navigation(): Navigation;
        public set navigation(value: Navigation);
        public get transition(): UnityEngine_UI_Selectable.Transition;
        public set transition(value: UnityEngine_UI_Selectable.Transition);
        public get colors(): ColorBlock;
        public set colors(value: ColorBlock);
        public get spriteState(): SpriteState;
        public set spriteState(value: SpriteState);
        public get animationTriggers(): AnimationTriggers;
        public set animationTriggers(value: AnimationTriggers);
        public get targetGraphic(): Graphic;
        public set targetGraphic(value: Graphic);
        public get interactable(): boolean;
        public set interactable(value: boolean);
        public get image(): Image;
        public set image(value: Image);
        public get animator(): UnityEngine.Animator;

        public static AllSelectablesNoAlloc ($selectables: Selectable[]) : int
        public IsInteractable () : boolean
        public FindSelectable ($dir: UnityEngine.Vector3) : Selectable
        public FindSelectableOnLeft () : Selectable
        public FindSelectableOnRight () : Selectable
        public FindSelectableOnUp () : Selectable
        public FindSelectableOnDown () : Selectable
        public OnMove ($eventData: UnityEngine_EventSystems.AxisEventData) : void
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerUp ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerEnter ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerExit ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnSelect ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnDeselect ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public Select () : void
        private constructor ()
    }

    class Navigation extends System.ValueType implements System.IEquatable$1<Navigation> {

        public get mode(): UnityEngine_UI_Navigation.Mode;
        public set mode(value: UnityEngine_UI_Navigation.Mode);
        public get wrapAround(): boolean;
        public set wrapAround(value: boolean);
        public get selectOnUp(): Selectable;
        public set selectOnUp(value: Selectable);
        public get selectOnDown(): Selectable;
        public set selectOnDown(value: Selectable);
        public get selectOnLeft(): Selectable;
        public set selectOnLeft(value: Selectable);
        public get selectOnRight(): Selectable;
        public set selectOnRight(value: Selectable);
        public static get defaultNavigation(): Navigation;

        public Equals ($other: Navigation) : boolean
    }

    class ColorBlock extends System.ValueType implements System.IEquatable$1<ColorBlock> {

        public static defaultColorBlock : ColorBlock
        public get normalColor(): UnityEngine.Color;
        public set normalColor(value: UnityEngine.Color);
        public get highlightedColor(): UnityEngine.Color;
        public set highlightedColor(value: UnityEngine.Color);
        public get pressedColor(): UnityEngine.Color;
        public set pressedColor(value: UnityEngine.Color);
        public get selectedColor(): UnityEngine.Color;
        public set selectedColor(value: UnityEngine.Color);
        public get disabledColor(): UnityEngine.Color;
        public set disabledColor(value: UnityEngine.Color);
        public get colorMultiplier(): float;
        public set colorMultiplier(value: float);
        public get fadeDuration(): float;
        public set fadeDuration(value: float);

        public Equals ($obj: any) : boolean
        public Equals ($other: ColorBlock) : boolean
        public GetHashCode () : int
        public static op_Equality ($point1: ColorBlock, $point2: ColorBlock) : boolean
        public static op_Inequality ($point1: ColorBlock, $point2: ColorBlock) : boolean
    }

    class SpriteState extends System.ValueType implements System.IEquatable$1<SpriteState> {

        public get highlightedSprite(): UnityEngine.Sprite;
        public set highlightedSprite(value: UnityEngine.Sprite);
        public get pressedSprite(): UnityEngine.Sprite;
        public set pressedSprite(value: UnityEngine.Sprite);
        public get selectedSprite(): UnityEngine.Sprite;
        public set selectedSprite(value: UnityEngine.Sprite);
        public get disabledSprite(): UnityEngine.Sprite;
        public set disabledSprite(value: UnityEngine.Sprite);

        public Equals ($other: SpriteState) : boolean
    }

    class Graphic extends UnityEngine_EventSystems.UIBehaviour implements ICanvasElement {

        public static get defaultGraphicMaterial(): UnityEngine.Material;
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        public get raycastTarget(): boolean;
        public set raycastTarget(value: boolean);
        public get raycastPadding(): UnityEngine.Vector4;
        public set raycastPadding(value: UnityEngine.Vector4);
        public get depth(): int;
        public get rectTransform(): UnityEngine.RectTransform;
        public get canvas(): UnityEngine.Canvas;
        public get canvasRenderer(): UnityEngine.CanvasRenderer;
        public get defaultMaterial(): UnityEngine.Material;
        public get material(): UnityEngine.Material;
        public set material(value: UnityEngine.Material);
        public get materialForRendering(): UnityEngine.Material;
        public get mainTexture(): UnityEngine.Texture;

        public SetAllDirty () : void
        public SetLayoutDirty () : void
        public SetVerticesDirty () : void
        public SetMaterialDirty () : void
        public SetRaycastDirty () : void
        public OnCullingChanged () : void
        public Rebuild ($update: CanvasUpdate) : void
        public LayoutComplete () : void
        public GraphicUpdateComplete () : void
        public SetNativeSize () : void
        public Raycast ($sp: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
        public PixelAdjustPoint ($point: UnityEngine.Vector2) : UnityEngine.Vector2
        public GetPixelAdjustedRect () : UnityEngine.Rect
        /**
        * @methodSwap CrossFadeColor_EBB7509C_E759706
        */
        public CrossFadeColor ($targetColor: UnityEngine.Color, $duration: float, $ignoreTimeScale: boolean, $useAlpha: boolean) : void
        /**
        * @methodSwap CrossFadeColor_EBB7509C_B5133965
        */
        public CrossFadeColor ($targetColor: UnityEngine.Color, $duration: float, $ignoreTimeScale: boolean, $useAlpha: boolean, $useRGB: boolean) : void
        public CrossFadeAlpha ($alpha: float, $duration: float, $ignoreTimeScale: boolean) : void
        public RegisterDirtyLayoutCallback ($action: UnityEngine_Events.UnityAction) : void
        public UnregisterDirtyLayoutCallback ($action: UnityEngine_Events.UnityAction) : void
        public RegisterDirtyVerticesCallback ($action: UnityEngine_Events.UnityAction) : void
        public UnregisterDirtyVerticesCallback ($action: UnityEngine_Events.UnityAction) : void
        public RegisterDirtyMaterialCallback ($action: UnityEngine_Events.UnityAction) : void
        public UnregisterDirtyMaterialCallback ($action: UnityEngine_Events.UnityAction) : void
        private constructor ()
    }

    interface ICanvasElement {

        readonly transform? : UnityEngine.Transform

        Rebuild? ($executing: CanvasUpdate) : void
        LayoutComplete? () : void
        GraphicUpdateComplete? () : void
        IsDestroyed? () : boolean
    }

    enum CanvasUpdate {
        Prelayout = 0,
        Layout = 1,
        PostLayout = 2,
        PreRender = 3,
        LatePreRender = 4,
        MaxUpdateValue = 5 
    }

    class Image extends MaskableGraphic implements UnityEngine.ICanvasRaycastFilter, UnityEngine.ISerializationCallbackReceiver, ILayoutElement {

        public static get defaultGraphicMaterial(): UnityEngine.Material;
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        public get raycastTarget(): boolean;
        public set raycastTarget(value: boolean);
        public get raycastPadding(): UnityEngine.Vector4;
        public set raycastPadding(value: UnityEngine.Vector4);
        public get depth(): int;
        public get rectTransform(): UnityEngine.RectTransform;
        public get canvas(): UnityEngine.Canvas;
        public get canvasRenderer(): UnityEngine.CanvasRenderer;
        public get defaultMaterial(): UnityEngine.Material;
        public get material(): UnityEngine.Material;
        public set material(value: UnityEngine.Material);
        public get materialForRendering(): UnityEngine.Material;
        public get mainTexture(): UnityEngine.Texture;
        public get onCullStateChanged(): UnityEngine_UI_MaskableGraphic.CullStateChangedEvent;
        public set onCullStateChanged(value: UnityEngine_UI_MaskableGraphic.CullStateChangedEvent);
        public get maskable(): boolean;
        public set maskable(value: boolean);
        public get isMaskingGraphic(): boolean;
        public set isMaskingGraphic(value: boolean);
        public get sprite(): UnityEngine.Sprite;
        public set sprite(value: UnityEngine.Sprite);
        public get overrideSprite(): UnityEngine.Sprite;
        public set overrideSprite(value: UnityEngine.Sprite);
        public get type(): UnityEngine_UI_Image.Type;
        public set type(value: UnityEngine_UI_Image.Type);
        public get preserveAspect(): boolean;
        public set preserveAspect(value: boolean);
        public get fillCenter(): boolean;
        public set fillCenter(value: boolean);
        public get fillMethod(): UnityEngine_UI_Image.FillMethod;
        public set fillMethod(value: UnityEngine_UI_Image.FillMethod);
        public get fillAmount(): float;
        public set fillAmount(value: float);
        public get fillClockwise(): boolean;
        public set fillClockwise(value: boolean);
        public get fillOrigin(): int;
        public set fillOrigin(value: int);
        public get alphaHitTestMinimumThreshold(): float;
        public set alphaHitTestMinimumThreshold(value: float);
        public get useSpriteMesh(): boolean;
        public set useSpriteMesh(value: boolean);
        public static get defaultETC1GraphicMaterial(): UnityEngine.Material;
        public get hasBorder(): boolean;
        public get pixelsPerUnitMultiplier(): float;
        public set pixelsPerUnitMultiplier(value: float);
        public get pixelsPerUnit(): float;
        public get minWidth(): float;
        public get preferredWidth(): float;
        public get flexibleWidth(): float;
        public get minHeight(): float;
        public get preferredHeight(): float;
        public get flexibleHeight(): float;
        public get layoutPriority(): int;

        public DisableSpriteOptimizations () : void
        public OnBeforeSerialize () : void
        public OnAfterDeserialize () : void
        public SetNativeSize () : void
        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        public IsRaycastLocationValid ($screenPoint: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
        private constructor ()
    }

    interface ILayoutElement {

        readonly minWidth? : float
        readonly preferredWidth? : float
        readonly flexibleWidth? : float
        readonly minHeight? : float
        readonly preferredHeight? : float
        readonly flexibleHeight? : float
        readonly layoutPriority? : int

        CalculateLayoutInputHorizontal? () : void
        CalculateLayoutInputVertical? () : void
    }

    class MaskableGraphic extends Graphic implements IClippable, IMaterialModifier, IMaskable {

        public static get defaultGraphicMaterial(): UnityEngine.Material;
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        public get raycastTarget(): boolean;
        public set raycastTarget(value: boolean);
        public get raycastPadding(): UnityEngine.Vector4;
        public set raycastPadding(value: UnityEngine.Vector4);
        public get depth(): int;
        public get rectTransform(): UnityEngine.RectTransform;
        public get canvas(): UnityEngine.Canvas;
        public get canvasRenderer(): UnityEngine.CanvasRenderer;
        public get defaultMaterial(): UnityEngine.Material;
        public get material(): UnityEngine.Material;
        public set material(value: UnityEngine.Material);
        public get materialForRendering(): UnityEngine.Material;
        public get mainTexture(): UnityEngine.Texture;
        public get onCullStateChanged(): UnityEngine_UI_MaskableGraphic.CullStateChangedEvent;
        public set onCullStateChanged(value: UnityEngine_UI_MaskableGraphic.CullStateChangedEvent);
        public get maskable(): boolean;
        public set maskable(value: boolean);
        public get isMaskingGraphic(): boolean;
        public set isMaskingGraphic(value: boolean);

        public GetModifiedMaterial ($baseMaterial: UnityEngine.Material) : UnityEngine.Material
        public Cull ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
        public SetClipRect ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
        public SetClipSoftness ($clipSoftness: UnityEngine.Vector2) : void
        public RecalculateClipping () : void
        public RecalculateMasking () : void
        private constructor ()
    }

    interface IClippable {

        readonly gameObject? : UnityEngine.GameObject
        readonly rectTransform? : UnityEngine.RectTransform

        RecalculateClipping? () : void
        Cull? ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
        SetClipRect? ($value: UnityEngine.Rect, $validRect: boolean) : void
        SetClipSoftness? ($clipSoftness: UnityEngine.Vector2) : void
    }

    interface IMaterialModifier {

        GetModifiedMaterial? ($baseMaterial: UnityEngine.Material) : UnityEngine.Material
    }

    interface IMaskable {

        RecalculateMasking? () : void
    }

    class CanvasUpdateRegistry extends System.Object {

        public static get instance(): CanvasUpdateRegistry;

        public static RegisterCanvasElementForLayoutRebuild ($element: ICanvasElement) : void
        public static TryRegisterCanvasElementForLayoutRebuild ($element: ICanvasElement) : boolean
        public static RegisterCanvasElementForGraphicRebuild ($element: ICanvasElement) : void
        public static TryRegisterCanvasElementForGraphicRebuild ($element: ICanvasElement) : boolean
        public static UnRegisterCanvasElementForRebuild ($element: ICanvasElement) : void
        public static DisableCanvasElementForRebuild ($element: ICanvasElement) : void
        public static IsRebuildingLayout () : boolean
        public static IsRebuildingGraphics () : boolean
    }

    class ClipperRegistry extends System.Object {

        public static get instance(): ClipperRegistry;

        public Cull () : void
        public static Register ($c: IClipper) : void
        public static Unregister ($c: IClipper) : void
        public static Disable ($c: IClipper) : void
    }

    interface IClipper {

        PerformClipping? () : void
    }

    class Clipping {

        public static FindCullAndClipWorldRect ($rectMaskParents: System_Collections_Generic.List$1<RectMask2D>, $validRect: $Ref<boolean>) : UnityEngine.Rect
    }

    class RectMask2D extends UnityEngine_EventSystems.UIBehaviour implements UnityEngine.ICanvasRaycastFilter, IClipper {

        public get padding(): UnityEngine.Vector4;
        public set padding(value: UnityEngine.Vector4);
        public get softness(): UnityEngine.Vector2Int;
        public set softness(value: UnityEngine.Vector2Int);
        public get canvasRect(): UnityEngine.Rect;
        public get rectTransform(): UnityEngine.RectTransform;

        public IsRaycastLocationValid ($sp: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
        public PerformClipping () : void
        public UpdateClipSoftness () : void
        public AddClippable ($clippable: IClippable) : void
        public RemoveClippable ($clippable: IClippable) : void
        private constructor ()
    }

    class Dropdown extends Selectable implements UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.ICancelHandler {

        public static get allSelectablesArray(): Selectable[];
        public static get allSelectableCount(): int;
        public get navigation(): Navigation;
        public set navigation(value: Navigation);
        public get transition(): UnityEngine_UI_Selectable.Transition;
        public set transition(value: UnityEngine_UI_Selectable.Transition);
        public get colors(): ColorBlock;
        public set colors(value: ColorBlock);
        public get spriteState(): SpriteState;
        public set spriteState(value: SpriteState);
        public get animationTriggers(): AnimationTriggers;
        public set animationTriggers(value: AnimationTriggers);
        public get targetGraphic(): Graphic;
        public set targetGraphic(value: Graphic);
        public get interactable(): boolean;
        public set interactable(value: boolean);
        public get image(): Image;
        public set image(value: Image);
        public get animator(): UnityEngine.Animator;
        public get template(): UnityEngine.RectTransform;
        public set template(value: UnityEngine.RectTransform);
        public get captionText(): Text;
        public set captionText(value: Text);
        public get captionImage(): Image;
        public set captionImage(value: Image);
        public get itemText(): Text;
        public set itemText(value: Text);
        public get itemImage(): Image;
        public set itemImage(value: Image);
        public get options(): System_Collections_Generic.List$1<UnityEngine_UI_Dropdown.OptionData>;
        public set options(value: System_Collections_Generic.List$1<UnityEngine_UI_Dropdown.OptionData>);
        public get onValueChanged(): UnityEngine_UI_Dropdown.DropdownEvent;
        public set onValueChanged(value: UnityEngine_UI_Dropdown.DropdownEvent);
        public get alphaFadeSpeed(): float;
        public set alphaFadeSpeed(value: float);
        public get value(): int;
        public set value(value: int);

        public SetValueWithoutNotify ($input: int) : void
        public RefreshShownValue () : void
        public AddOptions ($options: System_Collections_Generic.List$1<UnityEngine_UI_Dropdown.OptionData>) : void
        public AddOptions ($options: System_Collections_Generic.List$1<string>) : void
        public AddOptions ($options: System_Collections_Generic.List$1<UnityEngine.Sprite>) : void
        public ClearOptions () : void
        public OnPointerClick ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnSubmit ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnCancel ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public Show () : void
        public Hide () : void
        private constructor ()
    }

    class Text extends MaskableGraphic implements ILayoutElement {

        public static get defaultGraphicMaterial(): UnityEngine.Material;
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        public get raycastTarget(): boolean;
        public set raycastTarget(value: boolean);
        public get raycastPadding(): UnityEngine.Vector4;
        public set raycastPadding(value: UnityEngine.Vector4);
        public get depth(): int;
        public get rectTransform(): UnityEngine.RectTransform;
        public get canvas(): UnityEngine.Canvas;
        public get canvasRenderer(): UnityEngine.CanvasRenderer;
        public get defaultMaterial(): UnityEngine.Material;
        public get material(): UnityEngine.Material;
        public set material(value: UnityEngine.Material);
        public get materialForRendering(): UnityEngine.Material;
        public get mainTexture(): UnityEngine.Texture;
        public get onCullStateChanged(): UnityEngine_UI_MaskableGraphic.CullStateChangedEvent;
        public set onCullStateChanged(value: UnityEngine_UI_MaskableGraphic.CullStateChangedEvent);
        public get maskable(): boolean;
        public set maskable(value: boolean);
        public get isMaskingGraphic(): boolean;
        public set isMaskingGraphic(value: boolean);
        public get cachedTextGenerator(): UnityEngine.TextGenerator;
        public get cachedTextGeneratorForLayout(): UnityEngine.TextGenerator;
        public get font(): UnityEngine.Font;
        public set font(value: UnityEngine.Font);
        public get text(): string;
        public set text(value: string);
        public get supportRichText(): boolean;
        public set supportRichText(value: boolean);
        public get resizeTextForBestFit(): boolean;
        public set resizeTextForBestFit(value: boolean);
        public get resizeTextMinSize(): int;
        public set resizeTextMinSize(value: int);
        public get resizeTextMaxSize(): int;
        public set resizeTextMaxSize(value: int);
        public get alignment(): UnityEngine.TextAnchor;
        public set alignment(value: UnityEngine.TextAnchor);
        public get alignByGeometry(): boolean;
        public set alignByGeometry(value: boolean);
        public get fontSize(): int;
        public set fontSize(value: int);
        public get horizontalOverflow(): UnityEngine.HorizontalWrapMode;
        public set horizontalOverflow(value: UnityEngine.HorizontalWrapMode);
        public get verticalOverflow(): UnityEngine.VerticalWrapMode;
        public set verticalOverflow(value: UnityEngine.VerticalWrapMode);
        public get lineSpacing(): float;
        public set lineSpacing(value: float);
        public get fontStyle(): UnityEngine.FontStyle;
        public set fontStyle(value: UnityEngine.FontStyle);
        public get pixelsPerUnit(): float;
        public get minWidth(): float;
        public get preferredWidth(): float;
        public get flexibleWidth(): float;
        public get minHeight(): float;
        public get preferredHeight(): float;
        public get flexibleHeight(): float;
        public get layoutPriority(): int;

        public FontTextureChanged () : void
        public GetGenerationSettings ($extents: UnityEngine.Vector2) : UnityEngine.TextGenerationSettings
        public static GetTextAnchorPivot ($anchor: UnityEngine.TextAnchor) : UnityEngine.Vector2
        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        private constructor ()
    }

    class FontData extends System.Object implements UnityEngine.ISerializationCallbackReceiver {

        public static get defaultFontData(): FontData;
        public get font(): UnityEngine.Font;
        public set font(value: UnityEngine.Font);
        public get fontSize(): int;
        public set fontSize(value: int);
        public get fontStyle(): UnityEngine.FontStyle;
        public set fontStyle(value: UnityEngine.FontStyle);
        public get bestFit(): boolean;
        public set bestFit(value: boolean);
        public get minSize(): int;
        public set minSize(value: int);
        public get maxSize(): int;
        public set maxSize(value: int);
        public get alignment(): UnityEngine.TextAnchor;
        public set alignment(value: UnityEngine.TextAnchor);
        public get alignByGeometry(): boolean;
        public set alignByGeometry(value: boolean);
        public get richText(): boolean;
        public set richText(value: boolean);
        public get horizontalOverflow(): UnityEngine.HorizontalWrapMode;
        public set horizontalOverflow(value: UnityEngine.HorizontalWrapMode);
        public get verticalOverflow(): UnityEngine.VerticalWrapMode;
        public set verticalOverflow(value: UnityEngine.VerticalWrapMode);
        public get lineSpacing(): float;
        public set lineSpacing(value: float);

        public constructor ()
    }

    class FontUpdateTracker {

        public static TrackText ($t: Text) : void
        public static UntrackText ($t: Text) : void
    }

    class GraphicRaycaster extends UnityEngine_EventSystems.BaseRaycaster {

        public get eventCamera(): UnityEngine.Camera;
        public get sortOrderPriority(): int;
        public get renderOrderPriority(): int;
        public get rootRaycaster(): BaseRaycaster;
        public get ignoreReversedGraphics(): boolean;
        public set ignoreReversedGraphics(value: boolean);
        public get blockingObjects(): UnityEngine_UI_GraphicRaycaster.BlockingObjects;
        public set blockingObjects(value: UnityEngine_UI_GraphicRaycaster.BlockingObjects);
        public get blockingMask(): UnityEngine.LayerMask;
        public set blockingMask(value: UnityEngine.LayerMask);

        public Raycast ($eventData: UnityEngine_EventSystems.PointerEventData, $resultAppendList: System_Collections_Generic.List$1<UnityEngine_EventSystems.RaycastResult>) : void
        private constructor ()
    }

    class GraphicRegistry extends System.Object {

        public static get instance(): GraphicRegistry;

        public static RegisterGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: Graphic) : void
        public static RegisterRaycastGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: Graphic) : void
        public static UnregisterGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: Graphic) : void
        public static UnregisterRaycastGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: Graphic) : void
        public static DisableGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: Graphic) : void
        public static DisableRaycastGraphicForCanvas ($c: UnityEngine.Canvas, $graphic: Graphic) : void
        public static GetGraphicsForCanvas ($canvas: UnityEngine.Canvas) : System_Collections_Generic.IList$1<Graphic>
        public static GetRaycastableGraphicsForCanvas ($canvas: UnityEngine.Canvas) : System_Collections_Generic.IList$1<Graphic>
    }

    class InputField extends Selectable implements UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.IBeginDragHandler, UnityEngine_EventSystems.IDragHandler, UnityEngine_EventSystems.IEndDragHandler, ICanvasElement, UnityEngine_EventSystems.IUpdateSelectedHandler, ILayoutElement {

        public static get allSelectablesArray(): Selectable[];
        public static get allSelectableCount(): int;
        public get navigation(): Navigation;
        public set navigation(value: Navigation);
        public get transition(): UnityEngine_UI_Selectable.Transition;
        public set transition(value: UnityEngine_UI_Selectable.Transition);
        public get colors(): ColorBlock;
        public set colors(value: ColorBlock);
        public get spriteState(): SpriteState;
        public set spriteState(value: SpriteState);
        public get animationTriggers(): AnimationTriggers;
        public set animationTriggers(value: AnimationTriggers);
        public get targetGraphic(): Graphic;
        public set targetGraphic(value: Graphic);
        public get interactable(): boolean;
        public set interactable(value: boolean);
        public get image(): Image;
        public set image(value: Image);
        public get animator(): UnityEngine.Animator;
        public get shouldHideMobileInput(): boolean;
        public set shouldHideMobileInput(value: boolean);
        public get shouldActivateOnSelect(): boolean;
        public set shouldActivateOnSelect(value: boolean);
        public get text(): string;
        public set text(value: string);
        public get isFocused(): boolean;
        public get caretBlinkRate(): float;
        public set caretBlinkRate(value: float);
        public get caretWidth(): int;
        public set caretWidth(value: int);
        public get textComponent(): Text;
        public set textComponent(value: Text);
        public get placeholder(): Graphic;
        public set placeholder(value: Graphic);
        public get caretColor(): UnityEngine.Color;
        public set caretColor(value: UnityEngine.Color);
        public get customCaretColor(): boolean;
        public set customCaretColor(value: boolean);
        public get selectionColor(): UnityEngine.Color;
        public set selectionColor(value: UnityEngine.Color);
        public get onEndEdit(): UnityEngine_UI_InputField.EndEditEvent;
        public set onEndEdit(value: UnityEngine_UI_InputField.EndEditEvent);
        public get onSubmit(): UnityEngine_UI_InputField.SubmitEvent;
        public set onSubmit(value: UnityEngine_UI_InputField.SubmitEvent);
        public get onValueChanged(): UnityEngine_UI_InputField.OnChangeEvent;
        public set onValueChanged(value: UnityEngine_UI_InputField.OnChangeEvent);
        public get onValidateInput(): UnityEngine_UI_InputField.OnValidateInput;
        public set onValidateInput(value: UnityEngine_UI_InputField.OnValidateInput);
        public get characterLimit(): int;
        public set characterLimit(value: int);
        public get contentType(): UnityEngine_UI_InputField.ContentType;
        public set contentType(value: UnityEngine_UI_InputField.ContentType);
        public get lineType(): UnityEngine_UI_InputField.LineType;
        public set lineType(value: UnityEngine_UI_InputField.LineType);
        public get inputType(): UnityEngine_UI_InputField.InputType;
        public set inputType(value: UnityEngine_UI_InputField.InputType);
        public get touchScreenKeyboard(): UnityEngine.TouchScreenKeyboard;
        public get keyboardType(): UnityEngine.TouchScreenKeyboardType;
        public set keyboardType(value: UnityEngine.TouchScreenKeyboardType);
        public get characterValidation(): UnityEngine_UI_InputField.CharacterValidation;
        public set characterValidation(value: UnityEngine_UI_InputField.CharacterValidation);
        public get readOnly(): boolean;
        public set readOnly(value: boolean);
        public get multiLine(): boolean;
        public get asteriskChar(): number;
        public set asteriskChar(value: number);
        public get wasCanceled(): boolean;
        public get caretPosition(): int;
        public set caretPosition(value: int);
        public get selectionAnchorPosition(): int;
        public set selectionAnchorPosition(value: int);
        public get selectionFocusPosition(): int;
        public set selectionFocusPosition(value: int);
        public get minWidth(): float;
        public get preferredWidth(): float;
        public get flexibleWidth(): float;
        public get minHeight(): float;
        public get preferredHeight(): float;
        public get flexibleHeight(): float;
        public get layoutPriority(): int;

        public SetTextWithoutNotify ($input: string) : void
        public MoveTextEnd ($shift: boolean) : void
        public MoveTextStart ($shift: boolean) : void
        public OnBeginDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnEndDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public ProcessEvent ($e: UnityEngine.Event) : void
        public OnUpdateSelected ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public ForceLabelUpdate () : void
        public Rebuild ($update: CanvasUpdate) : void
        public LayoutComplete () : void
        public GraphicUpdateComplete () : void
        public ActivateInputField () : void
        public OnSelect ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnPointerClick ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public DeactivateInputField () : void
        public OnDeselect ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnSubmit ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        private constructor ()
    }

    class AspectRatioFitter extends UnityEngine_EventSystems.UIBehaviour implements ILayoutSelfController {

        public get aspectMode(): UnityEngine_UI_AspectRatioFitter.AspectMode;
        public set aspectMode(value: UnityEngine_UI_AspectRatioFitter.AspectMode);
        public get aspectRatio(): float;
        public set aspectRatio(value: float);

        public SetLayoutHorizontal () : void
        public SetLayoutVertical () : void
        public IsComponentValidOnObject () : boolean
        public IsAspectModeValid () : boolean
        private constructor ()
    }

    interface ILayoutSelfController extends ILayoutController {

    }

    interface ILayoutController {

        SetLayoutHorizontal? () : void
        SetLayoutVertical? () : void
    }

    class CanvasScaler extends UnityEngine_EventSystems.UIBehaviour {

        public get uiScaleMode(): UnityEngine_UI_CanvasScaler.ScaleMode;
        public set uiScaleMode(value: UnityEngine_UI_CanvasScaler.ScaleMode);
        public get referencePixelsPerUnit(): float;
        public set referencePixelsPerUnit(value: float);
        public get scaleFactor(): float;
        public set scaleFactor(value: float);
        public get referenceResolution(): UnityEngine.Vector2;
        public set referenceResolution(value: UnityEngine.Vector2);
        public get screenMatchMode(): UnityEngine_UI_CanvasScaler.ScreenMatchMode;
        public set screenMatchMode(value: UnityEngine_UI_CanvasScaler.ScreenMatchMode);
        public get matchWidthOrHeight(): float;
        public set matchWidthOrHeight(value: float);
        public get physicalUnit(): UnityEngine_UI_CanvasScaler.Unit;
        public set physicalUnit(value: UnityEngine_UI_CanvasScaler.Unit);
        public get fallbackScreenDPI(): float;
        public set fallbackScreenDPI(value: float);
        public get defaultSpriteDPI(): float;
        public set defaultSpriteDPI(value: float);
        public get dynamicPixelsPerUnit(): float;
        public set dynamicPixelsPerUnit(value: float);

        private constructor ()
    }

    class ContentSizeFitter extends UnityEngine_EventSystems.UIBehaviour implements ILayoutSelfController {

        public get horizontalFit(): UnityEngine_UI_ContentSizeFitter.FitMode;
        public set horizontalFit(value: UnityEngine_UI_ContentSizeFitter.FitMode);
        public get verticalFit(): UnityEngine_UI_ContentSizeFitter.FitMode;
        public set verticalFit(value: UnityEngine_UI_ContentSizeFitter.FitMode);

        public SetLayoutHorizontal () : void
        public SetLayoutVertical () : void
        private constructor ()
    }

    class GridLayoutGroup extends LayoutGroup {

        public get padding(): UnityEngine.RectOffset;
        public set padding(value: UnityEngine.RectOffset);
        public get childAlignment(): UnityEngine.TextAnchor;
        public set childAlignment(value: UnityEngine.TextAnchor);
        public get minWidth(): float;
        public get preferredWidth(): float;
        public get flexibleWidth(): float;
        public get minHeight(): float;
        public get preferredHeight(): float;
        public get flexibleHeight(): float;
        public get layoutPriority(): int;
        public get startCorner(): UnityEngine_UI_GridLayoutGroup.Corner;
        public set startCorner(value: UnityEngine_UI_GridLayoutGroup.Corner);
        public get startAxis(): UnityEngine_UI_GridLayoutGroup.Axis;
        public set startAxis(value: UnityEngine_UI_GridLayoutGroup.Axis);
        public get cellSize(): UnityEngine.Vector2;
        public set cellSize(value: UnityEngine.Vector2);
        public get spacing(): UnityEngine.Vector2;
        public set spacing(value: UnityEngine.Vector2);
        public get constraint(): UnityEngine_UI_GridLayoutGroup.Constraint;
        public set constraint(value: UnityEngine_UI_GridLayoutGroup.Constraint);
        public get constraintCount(): int;
        public set constraintCount(value: int);

        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        public SetLayoutHorizontal () : void
        public SetLayoutVertical () : void
        private constructor ()
    }

    class LayoutGroup extends UnityEngine_EventSystems.UIBehaviour implements ILayoutGroup, ILayoutElement {

        public get padding(): UnityEngine.RectOffset;
        public set padding(value: UnityEngine.RectOffset);
        public get childAlignment(): UnityEngine.TextAnchor;
        public set childAlignment(value: UnityEngine.TextAnchor);
        public get minWidth(): float;
        public get preferredWidth(): float;
        public get flexibleWidth(): float;
        public get minHeight(): float;
        public get preferredHeight(): float;
        public get flexibleHeight(): float;
        public get layoutPriority(): int;

        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        public SetLayoutHorizontal () : void
        public SetLayoutVertical () : void
        private constructor ()
    }

    interface ILayoutGroup extends ILayoutController {

    }

    class HorizontalLayoutGroup extends HorizontalOrVerticalLayoutGroup {

        public get padding(): UnityEngine.RectOffset;
        public set padding(value: UnityEngine.RectOffset);
        public get childAlignment(): UnityEngine.TextAnchor;
        public set childAlignment(value: UnityEngine.TextAnchor);
        public get minWidth(): float;
        public get preferredWidth(): float;
        public get flexibleWidth(): float;
        public get minHeight(): float;
        public get preferredHeight(): float;
        public get flexibleHeight(): float;
        public get layoutPriority(): int;
        public get spacing(): float;
        public set spacing(value: float);
        public get childForceExpandWidth(): boolean;
        public set childForceExpandWidth(value: boolean);
        public get childForceExpandHeight(): boolean;
        public set childForceExpandHeight(value: boolean);
        public get childControlWidth(): boolean;
        public set childControlWidth(value: boolean);
        public get childControlHeight(): boolean;
        public set childControlHeight(value: boolean);
        public get childScaleWidth(): boolean;
        public set childScaleWidth(value: boolean);
        public get childScaleHeight(): boolean;
        public set childScaleHeight(value: boolean);
        public get reverseArrangement(): boolean;
        public set reverseArrangement(value: boolean);

        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        public SetLayoutHorizontal () : void
        public SetLayoutVertical () : void
        private constructor ()
    }

    class HorizontalOrVerticalLayoutGroup extends LayoutGroup {

        public get padding(): UnityEngine.RectOffset;
        public set padding(value: UnityEngine.RectOffset);
        public get childAlignment(): UnityEngine.TextAnchor;
        public set childAlignment(value: UnityEngine.TextAnchor);
        public get minWidth(): float;
        public get preferredWidth(): float;
        public get flexibleWidth(): float;
        public get minHeight(): float;
        public get preferredHeight(): float;
        public get flexibleHeight(): float;
        public get layoutPriority(): int;
        public get spacing(): float;
        public set spacing(value: float);
        public get childForceExpandWidth(): boolean;
        public set childForceExpandWidth(value: boolean);
        public get childForceExpandHeight(): boolean;
        public set childForceExpandHeight(value: boolean);
        public get childControlWidth(): boolean;
        public set childControlWidth(value: boolean);
        public get childControlHeight(): boolean;
        public set childControlHeight(value: boolean);
        public get childScaleWidth(): boolean;
        public set childScaleWidth(value: boolean);
        public get childScaleHeight(): boolean;
        public set childScaleHeight(value: boolean);
        public get reverseArrangement(): boolean;
        public set reverseArrangement(value: boolean);

        private constructor ()
    }

    interface ILayoutIgnorer {

        readonly ignoreLayout? : boolean

    }

    class LayoutElement extends UnityEngine_EventSystems.UIBehaviour implements ILayoutIgnorer, ILayoutElement {

        public get ignoreLayout(): boolean;
        public set ignoreLayout(value: boolean);
        public get minWidth(): float;
        public set minWidth(value: float);
        public get minHeight(): float;
        public set minHeight(value: float);
        public get preferredWidth(): float;
        public set preferredWidth(value: float);
        public get preferredHeight(): float;
        public set preferredHeight(value: float);
        public get flexibleWidth(): float;
        public set flexibleWidth(value: float);
        public get flexibleHeight(): float;
        public set flexibleHeight(value: float);
        public get layoutPriority(): int;
        public set layoutPriority(value: int);

        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        private constructor ()
    }

    class LayoutRebuilder extends System.Object implements ICanvasElement {

        public get transform(): UnityEngine.Transform;

        public constructor ()
        public IsDestroyed () : boolean
        public static ForceRebuildLayoutImmediate ($layoutRoot: UnityEngine.RectTransform) : void
        public Rebuild ($executing: CanvasUpdate) : void
        public static MarkLayoutForRebuild ($rect: UnityEngine.RectTransform) : void
        public LayoutComplete () : void
        public GraphicUpdateComplete () : void
        public GetHashCode () : int
        public Equals ($obj: any) : boolean
        public ToString () : string
    }

    class LayoutUtility {

        public static GetMinSize ($rect: UnityEngine.RectTransform, $axis: int) : float
        public static GetPreferredSize ($rect: UnityEngine.RectTransform, $axis: int) : float
        public static GetFlexibleSize ($rect: UnityEngine.RectTransform, $axis: int) : float
        public static GetMinWidth ($rect: UnityEngine.RectTransform) : float
        public static GetPreferredWidth ($rect: UnityEngine.RectTransform) : float
        public static GetFlexibleWidth ($rect: UnityEngine.RectTransform) : float
        public static GetMinHeight ($rect: UnityEngine.RectTransform) : float
        public static GetPreferredHeight ($rect: UnityEngine.RectTransform) : float
        public static GetFlexibleHeight ($rect: UnityEngine.RectTransform) : float
        /**
        * @methodSwap GetLayoutProperty_EBB7509C_H130A02AF
        */
        public static GetLayoutProperty ($rect: UnityEngine.RectTransform, $property: System.Func$2<ILayoutElement, float>, $defaultValue: float) : float
        /**
        * @methodSwap GetLayoutProperty_EBB7509C_H49C7FDCF
        */
        public static GetLayoutProperty ($rect: UnityEngine.RectTransform, $property: System.Func$2<ILayoutElement, float>, $defaultValue: float, $source: $Ref<ILayoutElement>) : float
    }

    class VerticalLayoutGroup extends HorizontalOrVerticalLayoutGroup {

        public get padding(): UnityEngine.RectOffset;
        public set padding(value: UnityEngine.RectOffset);
        public get childAlignment(): UnityEngine.TextAnchor;
        public set childAlignment(value: UnityEngine.TextAnchor);
        public get minWidth(): float;
        public get preferredWidth(): float;
        public get flexibleWidth(): float;
        public get minHeight(): float;
        public get preferredHeight(): float;
        public get flexibleHeight(): float;
        public get layoutPriority(): int;
        public get spacing(): float;
        public set spacing(value: float);
        public get childForceExpandWidth(): boolean;
        public set childForceExpandWidth(value: boolean);
        public get childForceExpandHeight(): boolean;
        public set childForceExpandHeight(value: boolean);
        public get childControlWidth(): boolean;
        public set childControlWidth(value: boolean);
        public get childControlHeight(): boolean;
        public set childControlHeight(value: boolean);
        public get childScaleWidth(): boolean;
        public set childScaleWidth(value: boolean);
        public get childScaleHeight(): boolean;
        public set childScaleHeight(value: boolean);
        public get reverseArrangement(): boolean;
        public set reverseArrangement(value: boolean);

        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        public SetLayoutHorizontal () : void
        public SetLayoutVertical () : void
        private constructor ()
    }

    class Mask extends UnityEngine_EventSystems.UIBehaviour implements IMaterialModifier, UnityEngine.ICanvasRaycastFilter {

        public get rectTransform(): UnityEngine.RectTransform;
        public get showMaskGraphic(): boolean;
        public set showMaskGraphic(value: boolean);
        public get graphic(): Graphic;

        public MaskEnabled () : boolean
        public IsRaycastLocationValid ($sp: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
        public GetModifiedMaterial ($baseMaterial: UnityEngine.Material) : UnityEngine.Material
        private constructor ()
    }

    class MaskUtilities extends System.Object {

        public constructor ()
        public static Notify2DMaskStateChanged ($mask: UnityEngine.Component) : void
        public static NotifyStencilStateChanged ($mask: UnityEngine.Component) : void
        public static FindRootSortOverrideCanvas ($start: UnityEngine.Transform) : UnityEngine.Transform
        public static GetStencilDepth ($transform: UnityEngine.Transform, $stopAfter: UnityEngine.Transform) : int
        public static IsDescendantOrSelf ($father: UnityEngine.Transform, $child: UnityEngine.Transform) : boolean
        public static GetRectMaskForClippable ($clippable: IClippable) : RectMask2D
        public static GetRectMasksForClip ($clipper: RectMask2D, $masks: System_Collections_Generic.List$1<RectMask2D>) : void
    }

    class RawImage extends MaskableGraphic {

        public static get defaultGraphicMaterial(): UnityEngine.Material;
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        public get raycastTarget(): boolean;
        public set raycastTarget(value: boolean);
        public get raycastPadding(): UnityEngine.Vector4;
        public set raycastPadding(value: UnityEngine.Vector4);
        public get depth(): int;
        public get rectTransform(): UnityEngine.RectTransform;
        public get canvas(): UnityEngine.Canvas;
        public get canvasRenderer(): UnityEngine.CanvasRenderer;
        public get defaultMaterial(): UnityEngine.Material;
        public get material(): UnityEngine.Material;
        public set material(value: UnityEngine.Material);
        public get materialForRendering(): UnityEngine.Material;
        public get mainTexture(): UnityEngine.Texture;
        public get onCullStateChanged(): UnityEngine_UI_MaskableGraphic.CullStateChangedEvent;
        public set onCullStateChanged(value: UnityEngine_UI_MaskableGraphic.CullStateChangedEvent);
        public get maskable(): boolean;
        public set maskable(value: boolean);
        public get isMaskingGraphic(): boolean;
        public set isMaskingGraphic(value: boolean);
        public get texture(): UnityEngine.Texture;
        public set texture(value: UnityEngine.Texture);
        public get uvRect(): UnityEngine.Rect;
        public set uvRect(value: UnityEngine.Rect);

        public SetNativeSize () : void
        private constructor ()
    }

    class ScrollRect extends UnityEngine_EventSystems.UIBehaviour implements ILayoutGroup, UnityEngine_EventSystems.IBeginDragHandler, UnityEngine_EventSystems.IInitializePotentialDragHandler, UnityEngine_EventSystems.IDragHandler, UnityEngine_EventSystems.IEndDragHandler, ICanvasElement, UnityEngine_EventSystems.IScrollHandler, ILayoutElement {

        public get content(): UnityEngine.RectTransform;
        public set content(value: UnityEngine.RectTransform);
        public get horizontal(): boolean;
        public set horizontal(value: boolean);
        public get vertical(): boolean;
        public set vertical(value: boolean);
        public get movementType(): UnityEngine_UI_ScrollRect.MovementType;
        public set movementType(value: UnityEngine_UI_ScrollRect.MovementType);
        public get elasticity(): float;
        public set elasticity(value: float);
        public get inertia(): boolean;
        public set inertia(value: boolean);
        public get decelerationRate(): float;
        public set decelerationRate(value: float);
        public get scrollSensitivity(): float;
        public set scrollSensitivity(value: float);
        public get viewport(): UnityEngine.RectTransform;
        public set viewport(value: UnityEngine.RectTransform);
        public get horizontalScrollbar(): Scrollbar;
        public set horizontalScrollbar(value: Scrollbar);
        public get verticalScrollbar(): Scrollbar;
        public set verticalScrollbar(value: Scrollbar);
        public get horizontalScrollbarVisibility(): UnityEngine_UI_ScrollRect.ScrollbarVisibility;
        public set horizontalScrollbarVisibility(value: UnityEngine_UI_ScrollRect.ScrollbarVisibility);
        public get verticalScrollbarVisibility(): UnityEngine_UI_ScrollRect.ScrollbarVisibility;
        public set verticalScrollbarVisibility(value: UnityEngine_UI_ScrollRect.ScrollbarVisibility);
        public get horizontalScrollbarSpacing(): float;
        public set horizontalScrollbarSpacing(value: float);
        public get verticalScrollbarSpacing(): float;
        public set verticalScrollbarSpacing(value: float);
        public get onValueChanged(): UnityEngine_UI_ScrollRect.ScrollRectEvent;
        public set onValueChanged(value: UnityEngine_UI_ScrollRect.ScrollRectEvent);
        public get velocity(): UnityEngine.Vector2;
        public set velocity(value: UnityEngine.Vector2);
        public get normalizedPosition(): UnityEngine.Vector2;
        public set normalizedPosition(value: UnityEngine.Vector2);
        public get horizontalNormalizedPosition(): float;
        public set horizontalNormalizedPosition(value: float);
        public get verticalNormalizedPosition(): float;
        public set verticalNormalizedPosition(value: float);
        public get minWidth(): float;
        public get preferredWidth(): float;
        public get flexibleWidth(): float;
        public get minHeight(): float;
        public get preferredHeight(): float;
        public get flexibleHeight(): float;
        public get layoutPriority(): int;

        public Rebuild ($executing: CanvasUpdate) : void
        public LayoutComplete () : void
        public GraphicUpdateComplete () : void
        public IsActive () : boolean
        public StopMovement () : void
        public OnScroll ($data: UnityEngine_EventSystems.PointerEventData) : void
        public OnInitializePotentialDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnBeginDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnEndDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        public SetLayoutHorizontal () : void
        public SetLayoutVertical () : void
        private constructor ()
    }

    class Scrollbar extends Selectable implements UnityEngine_EventSystems.IBeginDragHandler, UnityEngine_EventSystems.IInitializePotentialDragHandler, UnityEngine_EventSystems.IDragHandler, ICanvasElement {

        public static get allSelectablesArray(): Selectable[];
        public static get allSelectableCount(): int;
        public get navigation(): Navigation;
        public set navigation(value: Navigation);
        public get transition(): UnityEngine_UI_Selectable.Transition;
        public set transition(value: UnityEngine_UI_Selectable.Transition);
        public get colors(): ColorBlock;
        public set colors(value: ColorBlock);
        public get spriteState(): SpriteState;
        public set spriteState(value: SpriteState);
        public get animationTriggers(): AnimationTriggers;
        public set animationTriggers(value: AnimationTriggers);
        public get targetGraphic(): Graphic;
        public set targetGraphic(value: Graphic);
        public get interactable(): boolean;
        public set interactable(value: boolean);
        public get image(): Image;
        public set image(value: Image);
        public get animator(): UnityEngine.Animator;
        public get handleRect(): UnityEngine.RectTransform;
        public set handleRect(value: UnityEngine.RectTransform);
        public get direction(): UnityEngine_UI_Scrollbar.Direction;
        public set direction(value: UnityEngine_UI_Scrollbar.Direction);
        public get value(): float;
        public set value(value: float);
        public get size(): float;
        public set size(value: float);
        public get numberOfSteps(): int;
        public set numberOfSteps(value: int);
        public get onValueChanged(): UnityEngine_UI_Scrollbar.ScrollEvent;
        public set onValueChanged(value: UnityEngine_UI_Scrollbar.ScrollEvent);

        public SetValueWithoutNotify ($input: float) : void
        public Rebuild ($executing: CanvasUpdate) : void
        public LayoutComplete () : void
        public GraphicUpdateComplete () : void
        public OnBeginDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerUp ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnMove ($eventData: UnityEngine_EventSystems.AxisEventData) : void
        public FindSelectableOnLeft () : Selectable
        public FindSelectableOnRight () : Selectable
        public FindSelectableOnUp () : Selectable
        public FindSelectableOnDown () : Selectable
        public OnInitializePotentialDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public SetDirection ($direction: UnityEngine_UI_Scrollbar.Direction, $includeRectLayouts: boolean) : void
        private constructor ()
    }

    class Slider extends Selectable implements UnityEngine_EventSystems.IInitializePotentialDragHandler, UnityEngine_EventSystems.IDragHandler, ICanvasElement {

        public static get allSelectablesArray(): Selectable[];
        public static get allSelectableCount(): int;
        public get navigation(): Navigation;
        public set navigation(value: Navigation);
        public get transition(): UnityEngine_UI_Selectable.Transition;
        public set transition(value: UnityEngine_UI_Selectable.Transition);
        public get colors(): ColorBlock;
        public set colors(value: ColorBlock);
        public get spriteState(): SpriteState;
        public set spriteState(value: SpriteState);
        public get animationTriggers(): AnimationTriggers;
        public set animationTriggers(value: AnimationTriggers);
        public get targetGraphic(): Graphic;
        public set targetGraphic(value: Graphic);
        public get interactable(): boolean;
        public set interactable(value: boolean);
        public get image(): Image;
        public set image(value: Image);
        public get animator(): UnityEngine.Animator;
        public get fillRect(): UnityEngine.RectTransform;
        public set fillRect(value: UnityEngine.RectTransform);
        public get handleRect(): UnityEngine.RectTransform;
        public set handleRect(value: UnityEngine.RectTransform);
        public get direction(): UnityEngine_UI_Slider.Direction;
        public set direction(value: UnityEngine_UI_Slider.Direction);
        public get minValue(): float;
        public set minValue(value: float);
        public get maxValue(): float;
        public set maxValue(value: float);
        public get wholeNumbers(): boolean;
        public set wholeNumbers(value: boolean);
        public get value(): float;
        public set value(value: float);
        public get normalizedValue(): float;
        public set normalizedValue(value: float);
        public get onValueChanged(): UnityEngine_UI_Slider.SliderEvent;
        public set onValueChanged(value: UnityEngine_UI_Slider.SliderEvent);

        public SetValueWithoutNotify ($input: float) : void
        public Rebuild ($executing: CanvasUpdate) : void
        public LayoutComplete () : void
        public GraphicUpdateComplete () : void
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnMove ($eventData: UnityEngine_EventSystems.AxisEventData) : void
        public FindSelectableOnLeft () : Selectable
        public FindSelectableOnRight () : Selectable
        public FindSelectableOnUp () : Selectable
        public FindSelectableOnDown () : Selectable
        public OnInitializePotentialDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public SetDirection ($direction: UnityEngine_UI_Slider.Direction, $includeRectLayouts: boolean) : void
        private constructor ()
    }

    class StencilMaterial {

        /**
        * @methodSwap Add_EBB7509C_DF537A83
        */
        public static Add ($baseMat: UnityEngine.Material, $stencilID: int, $operation: UnityEngine_Rendering.StencilOp, $compareFunction: UnityEngine_Rendering.CompareFunction, $colorWriteMask: UnityEngine_Rendering.ColorWriteMask) : UnityEngine.Material
        /**
        * @methodSwap Add_EBB7509C_A937867F
        */
        public static Add ($baseMat: UnityEngine.Material, $stencilID: int, $operation: UnityEngine_Rendering.StencilOp, $compareFunction: UnityEngine_Rendering.CompareFunction, $colorWriteMask: UnityEngine_Rendering.ColorWriteMask, $readMask: int, $writeMask: int) : UnityEngine.Material
        public static Remove ($customMat: UnityEngine.Material) : void
        public static ClearAll () : void
    }

    class Toggle extends Selectable implements UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler, ICanvasElement {

        public static get allSelectablesArray(): Selectable[];
        public static get allSelectableCount(): int;
        public get navigation(): Navigation;
        public set navigation(value: Navigation);
        public get transition(): UnityEngine_UI_Selectable.Transition;
        public set transition(value: UnityEngine_UI_Selectable.Transition);
        public get colors(): ColorBlock;
        public set colors(value: ColorBlock);
        public get spriteState(): SpriteState;
        public set spriteState(value: SpriteState);
        public get animationTriggers(): AnimationTriggers;
        public set animationTriggers(value: AnimationTriggers);
        public get targetGraphic(): Graphic;
        public set targetGraphic(value: Graphic);
        public get interactable(): boolean;
        public set interactable(value: boolean);
        public get image(): Image;
        public set image(value: Image);
        public get animator(): UnityEngine.Animator;
        public toggleTransition : UnityEngine_UI_Toggle.ToggleTransition
        public graphic : Graphic
        public onValueChanged : UnityEngine_UI_Toggle.ToggleEvent
        public get group(): ToggleGroup;
        public set group(value: ToggleGroup);
        public get isOn(): boolean;
        public set isOn(value: boolean);

        public Rebuild ($executing: CanvasUpdate) : void
        public LayoutComplete () : void
        public GraphicUpdateComplete () : void
        public SetIsOnWithoutNotify ($value: boolean) : void
        public OnPointerClick ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnSubmit ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        private constructor ()
    }

    class ToggleGroup extends UnityEngine_EventSystems.UIBehaviour {

        public get allowSwitchOff(): boolean;
        public set allowSwitchOff(value: boolean);

        public NotifyToggleOn ($toggle: Toggle, $sendCallback?: boolean) : void
        public UnregisterToggle ($toggle: Toggle) : void
        public RegisterToggle ($toggle: Toggle) : void
        public EnsureValidState () : void
        public AnyTogglesOn () : boolean
        public ActiveToggles () : System_Collections_Generic.IEnumerable$1<Toggle>
        public GetFirstActiveToggle () : Toggle
        public SetAllTogglesOff ($sendCallback?: boolean) : void
        private constructor ()
    }

    class VertexHelper extends System.Object implements System.IDisposable {

        public get currentVertCount(): int;
        public get currentIndexCount(): int;

        public constructor ()
        public constructor ($m: UnityEngine.Mesh)
        public Dispose () : void
        public Clear () : void
        public PopulateUIVertex ($vertex: $Ref<UnityEngine.UIVertex>, $i: int) : void
        public SetUIVertex ($vertex: UnityEngine.UIVertex, $i: int) : void
        public FillMesh ($mesh: UnityEngine.Mesh) : void
        public AddVert ($position: UnityEngine.Vector3, $color: UnityEngine.Color32, $uv0: UnityEngine.Vector4, $uv1: UnityEngine.Vector4, $uv2: UnityEngine.Vector4, $uv3: UnityEngine.Vector4, $normal: UnityEngine.Vector3, $tangent: UnityEngine.Vector4) : void
        public AddVert ($position: UnityEngine.Vector3, $color: UnityEngine.Color32, $uv0: UnityEngine.Vector4, $uv1: UnityEngine.Vector4, $normal: UnityEngine.Vector3, $tangent: UnityEngine.Vector4) : void
        public AddVert ($position: UnityEngine.Vector3, $color: UnityEngine.Color32, $uv0: UnityEngine.Vector4) : void
        public AddVert ($v: UnityEngine.UIVertex) : void
        public AddTriangle ($idx0: int, $idx1: int, $idx2: int) : void
        public AddUIVertexQuad ($verts: UnityEngine.UIVertex[]) : void
        public AddUIVertexStream ($verts: System_Collections_Generic.List$1<UnityEngine.UIVertex>, $indices: System_Collections_Generic.List$1<int>) : void
        public AddUIVertexTriangleStream ($verts: System_Collections_Generic.List$1<UnityEngine.UIVertex>) : void
        public GetUIVertexStream ($stream: System_Collections_Generic.List$1<UnityEngine.UIVertex>) : void
    }

    class BaseMeshEffect extends UnityEngine_EventSystems.UIBehaviour implements IMeshModifier {

        public ModifyMesh ($mesh: UnityEngine.Mesh) : void
        public ModifyMesh ($vh: VertexHelper) : void
        private constructor ()
    }

    interface IMeshModifier {

        ModifyMesh? ($verts: VertexHelper) : void
    }

    class Outline extends Shadow {

        public get effectColor(): UnityEngine.Color;
        public set effectColor(value: UnityEngine.Color);
        public get effectDistance(): UnityEngine.Vector2;
        public set effectDistance(value: UnityEngine.Vector2);
        public get useGraphicAlpha(): boolean;
        public set useGraphicAlpha(value: boolean);

        public ModifyMesh ($vh: VertexHelper) : void
        public ModifyMesh ($mesh: UnityEngine.Mesh) : void
        private constructor ()
    }

    class Shadow extends BaseMeshEffect {

        public get effectColor(): UnityEngine.Color;
        public set effectColor(value: UnityEngine.Color);
        public get effectDistance(): UnityEngine.Vector2;
        public set effectDistance(value: UnityEngine.Vector2);
        public get useGraphicAlpha(): boolean;
        public set useGraphicAlpha(value: boolean);

        public ModifyMesh ($vh: VertexHelper) : void
        public ModifyMesh ($mesh: UnityEngine.Mesh) : void
        private constructor ()
    }

    class PositionAsUV1 extends BaseMeshEffect {

        public ModifyMesh ($vh: VertexHelper) : void
        public ModifyMesh ($mesh: UnityEngine.Mesh) : void
        private constructor ()
    }

}

declare module 'UnityEngine.EventSystems' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_EventSystems_PointerEventData from 'UnityEngine.EventSystems.PointerEventData'
    import * as UnityEngine_EventSystems_EventTrigger from 'UnityEngine.EventSystems.EventTrigger'
    import * as UnityEngine_EventSystems_ExecuteEvents from 'UnityEngine.EventSystems.ExecuteEvents'

    interface ISubmitHandler extends IEventSystemHandler {

        OnSubmit? ($eventData: BaseEventData) : void
    }

    interface IEventSystemHandler {

    }

    class BaseEventData extends AbstractEventData {

        public get used(): boolean;
        public get currentInputModule(): BaseInputModule;
        public get selectedObject(): UnityEngine.GameObject;
        public set selectedObject(value: UnityEngine.GameObject);

        public constructor ($eventSystem: EventSystem)
    }

    class AbstractEventData extends System.Object {

        public get used(): boolean;

        public Reset () : void
        public Use () : void
    }

    class EventSystem extends UIBehaviour {

        public static get current(): EventSystem;
        public static set current(value: EventSystem);
        public get sendNavigationEvents(): boolean;
        public set sendNavigationEvents(value: boolean);
        public get pixelDragThreshold(): int;
        public set pixelDragThreshold(value: int);
        public get currentInputModule(): BaseInputModule;
        public get firstSelectedGameObject(): UnityEngine.GameObject;
        public set firstSelectedGameObject(value: UnityEngine.GameObject);
        public get currentSelectedGameObject(): UnityEngine.GameObject;
        public get isFocused(): boolean;
        public get alreadySelecting(): boolean;

        public UpdateModules () : void
        public SetSelectedGameObject ($selected: UnityEngine.GameObject, $pointer: BaseEventData) : void
        public SetSelectedGameObject ($selected: UnityEngine.GameObject) : void
        public RaycastAll ($eventData: PointerEventData, $raycastResults: System_Collections_Generic.List$1<RaycastResult>) : void
        public IsPointerOverGameObject () : boolean
        /**
        * @methodSwap IsPointerOverGameObject_EBB7509C_F92D023A
        */
        public IsPointerOverGameObject ($pointerId: int) : boolean
        public static SetUITookitEventSystemOverride ($activeEventSystem: EventSystem, $sendEvents?: boolean, $createPanelGameObjectsOnStart?: boolean) : void
        public ToString () : string
        private constructor ()
    }

    class UIBehaviour extends UnityEngine.MonoBehaviour {

        public IsActive () : boolean
        public IsDestroyed () : boolean
        private constructor ()
    }

    class PointerEventData extends BaseEventData {

        public get used(): boolean;
        public get currentInputModule(): BaseInputModule;
        public get selectedObject(): UnityEngine.GameObject;
        public set selectedObject(value: UnityEngine.GameObject);
        public hovered : System_Collections_Generic.List$1<UnityEngine.GameObject>
        public get pointerEnter(): UnityEngine.GameObject;
        public set pointerEnter(value: UnityEngine.GameObject);
        public get lastPress(): UnityEngine.GameObject;
        public get rawPointerPress(): UnityEngine.GameObject;
        public set rawPointerPress(value: UnityEngine.GameObject);
        public get pointerDrag(): UnityEngine.GameObject;
        public set pointerDrag(value: UnityEngine.GameObject);
        public get pointerClick(): UnityEngine.GameObject;
        public set pointerClick(value: UnityEngine.GameObject);
        public get pointerCurrentRaycast(): RaycastResult;
        public set pointerCurrentRaycast(value: RaycastResult);
        public get pointerPressRaycast(): RaycastResult;
        public set pointerPressRaycast(value: RaycastResult);
        public get eligibleForClick(): boolean;
        public set eligibleForClick(value: boolean);
        public get displayIndex(): int;
        public set displayIndex(value: int);
        public get pointerId(): int;
        public set pointerId(value: int);
        public get position(): UnityEngine.Vector2;
        public set position(value: UnityEngine.Vector2);
        public get delta(): UnityEngine.Vector2;
        public set delta(value: UnityEngine.Vector2);
        public get pressPosition(): UnityEngine.Vector2;
        public set pressPosition(value: UnityEngine.Vector2);
        public get clickTime(): float;
        public set clickTime(value: float);
        public get clickCount(): int;
        public set clickCount(value: int);
        public get scrollDelta(): UnityEngine.Vector2;
        public set scrollDelta(value: UnityEngine.Vector2);
        public get useDragThreshold(): boolean;
        public set useDragThreshold(value: boolean);
        public get dragging(): boolean;
        public set dragging(value: boolean);
        public get button(): UnityEngine_EventSystems_PointerEventData.InputButton;
        public set button(value: UnityEngine_EventSystems_PointerEventData.InputButton);
        public get pressure(): float;
        public set pressure(value: float);
        public get tangentialPressure(): float;
        public set tangentialPressure(value: float);
        public get altitudeAngle(): float;
        public set altitudeAngle(value: float);
        public get azimuthAngle(): float;
        public set azimuthAngle(value: float);
        public get twist(): float;
        public set twist(value: float);
        public get tilt(): UnityEngine.Vector2;
        public set tilt(value: UnityEngine.Vector2);
        public get penStatus(): UnityEngine.PenStatus;
        public set penStatus(value: UnityEngine.PenStatus);
        public get radius(): UnityEngine.Vector2;
        public set radius(value: UnityEngine.Vector2);
        public get radiusVariance(): UnityEngine.Vector2;
        public set radiusVariance(value: UnityEngine.Vector2);
        public get fullyExited(): boolean;
        public set fullyExited(value: boolean);
        public get reentered(): boolean;
        public set reentered(value: boolean);
        public get enterEventCamera(): UnityEngine.Camera;
        public get pressEventCamera(): UnityEngine.Camera;
        public get pointerPress(): UnityEngine.GameObject;
        public set pointerPress(value: UnityEngine.GameObject);

        public constructor ($eventSystem: EventSystem)
        public IsPointerMoving () : boolean
        public IsScrolling () : boolean
        public ToString () : string
    }

    class RaycastResult extends System.ValueType {

        public module : BaseRaycaster
        public distance : float
        public index : float
        public depth : int
        public sortingGroupID : int
        public sortingGroupOrder : int
        public sortingLayer : int
        public sortingOrder : int
        public worldPosition : UnityEngine.Vector3
        public worldNormal : UnityEngine.Vector3
        public screenPosition : UnityEngine.Vector2
        public displayIndex : int
        public get gameObject(): UnityEngine.GameObject;
        public set gameObject(value: UnityEngine.GameObject);
        public get isValid(): boolean;

        public Clear () : void
        public ToString () : string
    }

    class BaseRaycaster extends UIBehaviour {

        public get eventCamera(): UnityEngine.Camera;
        public get sortOrderPriority(): int;
        public get renderOrderPriority(): int;
        public get rootRaycaster(): BaseRaycaster;

        public Raycast ($eventData: PointerEventData, $resultAppendList: System_Collections_Generic.List$1<RaycastResult>) : void
        public ToString () : string
        private constructor ()
    }

    class BaseInputModule extends UIBehaviour {

        public get input(): BaseInput;
        public get inputOverride(): BaseInput;
        public set inputOverride(value: BaseInput);

        public Process () : void
        public IsPointerOverGameObject ($pointerId: int) : boolean
        public ShouldActivateModule () : boolean
        public DeactivateModule () : void
        public ActivateModule () : void
        public UpdateModule () : void
        public IsModuleSupported () : boolean
        public ConvertUIToolkitPointerId ($sourcePointerData: PointerEventData) : int
        private constructor ()
    }

    class BaseInput extends UIBehaviour {

        public get compositionString(): string;
        public get imeCompositionMode(): UnityEngine.IMECompositionMode;
        public set imeCompositionMode(value: UnityEngine.IMECompositionMode);
        public get compositionCursorPos(): UnityEngine.Vector2;
        public set compositionCursorPos(value: UnityEngine.Vector2);
        public get mousePresent(): boolean;
        public get mousePosition(): UnityEngine.Vector2;
        public get mouseScrollDelta(): UnityEngine.Vector2;
        public get touchSupported(): boolean;
        public get touchCount(): int;

        private constructor ()
        public GetMouseButtonDown ($button: int) : boolean
        public GetMouseButtonUp ($button: int) : boolean
        public GetMouseButton ($button: int) : boolean
        public GetTouch ($index: int) : UnityEngine.Touch
        public GetAxisRaw ($axisName: string) : float
        public GetButtonDown ($buttonName: string) : boolean
    }

    interface IPointerClickHandler extends IEventSystemHandler {

        OnPointerClick? ($eventData: PointerEventData) : void
    }

    interface IPointerEnterHandler extends IEventSystemHandler {

        OnPointerEnter? ($eventData: PointerEventData) : void
    }

    interface ISelectHandler extends IEventSystemHandler {

        OnSelect? ($eventData: BaseEventData) : void
    }

    interface IPointerExitHandler extends IEventSystemHandler {

        OnPointerExit? ($eventData: PointerEventData) : void
    }

    interface IDeselectHandler extends IEventSystemHandler {

        OnDeselect? ($eventData: BaseEventData) : void
    }

    interface IPointerDownHandler extends IEventSystemHandler {

        OnPointerDown? ($eventData: PointerEventData) : void
    }

    interface IPointerUpHandler extends IEventSystemHandler {

        OnPointerUp? ($eventData: PointerEventData) : void
    }

    interface IMoveHandler extends IEventSystemHandler {

        OnMove? ($eventData: AxisEventData) : void
    }

    class AxisEventData extends BaseEventData {

        public get used(): boolean;
        public get currentInputModule(): BaseInputModule;
        public get selectedObject(): UnityEngine.GameObject;
        public set selectedObject(value: UnityEngine.GameObject);
        public get moveVector(): UnityEngine.Vector2;
        public set moveVector(value: UnityEngine.Vector2);
        public get moveDir(): MoveDirection;
        public set moveDir(value: MoveDirection);

        public constructor ($eventSystem: EventSystem)
    }

    enum MoveDirection {
        Left = 0,
        Up = 1,
        Right = 2,
        Down = 3,
        None = 4 
    }

    interface ICancelHandler extends IEventSystemHandler {

        OnCancel? ($eventData: BaseEventData) : void
    }

    interface IBeginDragHandler extends IEventSystemHandler {

        OnBeginDrag? ($eventData: PointerEventData) : void
    }

    interface IDragHandler extends IEventSystemHandler {

        OnDrag? ($eventData: PointerEventData) : void
    }

    interface IEndDragHandler extends IEventSystemHandler {

        OnEndDrag? ($eventData: PointerEventData) : void
    }

    interface IUpdateSelectedHandler extends IEventSystemHandler {

        OnUpdateSelected? ($eventData: BaseEventData) : void
    }

    interface IInitializePotentialDragHandler extends IEventSystemHandler {

        OnInitializePotentialDrag? ($eventData: PointerEventData) : void
    }

    interface IScrollHandler extends IEventSystemHandler {

        OnScroll? ($eventData: PointerEventData) : void
    }

    interface IPointerMoveHandler extends IEventSystemHandler {

        OnPointerMove? ($eventData: PointerEventData) : void
    }

    enum EventHandle {
        Unused = 0,
        Used = 1 
    }

    interface IDropHandler extends IEventSystemHandler {

        OnDrop? ($eventData: PointerEventData) : void
    }

    class EventTrigger extends UnityEngine.MonoBehaviour implements ISubmitHandler, IPointerClickHandler, ICancelHandler, IBeginDragHandler, IInitializePotentialDragHandler, IDragHandler, IEndDragHandler, IDropHandler, IScrollHandler, IUpdateSelectedHandler, IPointerEnterHandler, ISelectHandler, IPointerExitHandler, IDeselectHandler, IPointerDownHandler, IMoveHandler, IPointerUpHandler {

        public get triggers(): System_Collections_Generic.List$1<UnityEngine_EventSystems_EventTrigger.Entry>;
        public set triggers(value: System_Collections_Generic.List$1<UnityEngine_EventSystems_EventTrigger.Entry>);

        public OnPointerEnter ($eventData: PointerEventData) : void
        public OnPointerExit ($eventData: PointerEventData) : void
        public OnDrag ($eventData: PointerEventData) : void
        public OnDrop ($eventData: PointerEventData) : void
        public OnPointerDown ($eventData: PointerEventData) : void
        public OnPointerUp ($eventData: PointerEventData) : void
        public OnPointerClick ($eventData: PointerEventData) : void
        public OnSelect ($eventData: BaseEventData) : void
        public OnDeselect ($eventData: BaseEventData) : void
        public OnScroll ($eventData: PointerEventData) : void
        public OnMove ($eventData: AxisEventData) : void
        public OnUpdateSelected ($eventData: BaseEventData) : void
        public OnInitializePotentialDrag ($eventData: PointerEventData) : void
        public OnBeginDrag ($eventData: PointerEventData) : void
        public OnEndDrag ($eventData: PointerEventData) : void
        public OnSubmit ($eventData: BaseEventData) : void
        public OnCancel ($eventData: BaseEventData) : void
        private constructor ()
    }

    enum EventTriggerType {
        PointerEnter = 0,
        PointerExit = 1,
        PointerDown = 2,
        PointerUp = 3,
        PointerClick = 4,
        Drag = 5,
        Drop = 6,
        Scroll = 7,
        UpdateSelected = 8,
        Select = 9,
        Deselect = 10,
        Move = 11,
        InitializePotentialDrag = 12,
        BeginDrag = 13,
        EndDrag = 14,
        Submit = 15,
        Cancel = 16 
    }

    class ExecuteEvents {

        public static get pointerMoveHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IPointerMoveHandler>;
        public static get pointerEnterHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IPointerEnterHandler>;
        public static get pointerExitHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IPointerExitHandler>;
        public static get pointerDownHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IPointerDownHandler>;
        public static get pointerUpHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IPointerUpHandler>;
        public static get pointerClickHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IPointerClickHandler>;
        public static get initializePotentialDrag(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IInitializePotentialDragHandler>;
        public static get beginDragHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IBeginDragHandler>;
        public static get dragHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IDragHandler>;
        public static get endDragHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IEndDragHandler>;
        public static get dropHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IDropHandler>;
        public static get scrollHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IScrollHandler>;
        public static get updateSelectedHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IUpdateSelectedHandler>;
        public static get selectHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<ISelectHandler>;
        public static get deselectHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IDeselectHandler>;
        public static get moveHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<IMoveHandler>;
        public static get submitHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<ISubmitHandler>;
        public static get cancelHandler(): UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<ICancelHandler>;

        public static ValidateEventData<T> ($data: BaseEventData) : T
        public static Execute<T extends IEventSystemHandler> ($target: UnityEngine.GameObject, $eventData: BaseEventData, $functor: UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<T>) : boolean
        public static ExecuteHierarchy<T extends IEventSystemHandler> ($root: UnityEngine.GameObject, $eventData: BaseEventData, $callbackFunction: UnityEngine_EventSystems_ExecuteEvents.EventFunction$1<T>) : UnityEngine.GameObject
        public static CanHandleEvent<T extends IEventSystemHandler> ($go: UnityEngine.GameObject) : boolean
        public static GetEventHandler<T extends IEventSystemHandler> ($root: UnityEngine.GameObject) : UnityEngine.GameObject
    }

    class PointerInputModule extends BaseInputModule {

        public get input(): BaseInput;
        public get inputOverride(): BaseInput;
        public set inputOverride(value: BaseInput);
        public static kMouseLeftId : int
        public static kMouseRightId : int
        public static kMouseMiddleId : int
        public static kFakeTouchesId : int

        public IsPointerOverGameObject ($pointerId: int) : boolean
        public ToString () : string
        private constructor ()
    }

    class StandaloneInputModule extends PointerInputModule {

        public get input(): BaseInput;
        public get inputOverride(): BaseInput;
        public set inputOverride(value: BaseInput);
        public static kMouseLeftId : int
        public static kMouseRightId : int
        public static kMouseMiddleId : int
        public static kFakeTouchesId : int
        public get inputActionsPerSecond(): float;
        public set inputActionsPerSecond(value: float);
        public get repeatDelay(): float;
        public set repeatDelay(value: float);
        public get horizontalAxis(): string;
        public set horizontalAxis(value: string);
        public get verticalAxis(): string;
        public set verticalAxis(value: string);
        public get submitButton(): string;
        public set submitButton(value: string);
        public get cancelButton(): string;
        public set cancelButton(value: string);

        public UpdateModule () : void
        public ShouldActivateModule () : boolean
        public ActivateModule () : void
        public DeactivateModule () : void
        public Process () : void
        private constructor ()
    }

    class RaycasterManager {

        public static GetRaycasters () : System_Collections_Generic.List$1<BaseRaycaster>
    }

    class Physics2DRaycaster extends PhysicsRaycaster {

        public get eventCamera(): UnityEngine.Camera;
        public get sortOrderPriority(): int;
        public get renderOrderPriority(): int;
        public get rootRaycaster(): BaseRaycaster;
        public get depth(): int;
        public get finalEventMask(): int;
        public get eventMask(): UnityEngine.LayerMask;
        public set eventMask(value: UnityEngine.LayerMask);
        public get maxRayIntersections(): int;
        public set maxRayIntersections(value: int);

        public Raycast ($eventData: PointerEventData, $resultAppendList: System_Collections_Generic.List$1<RaycastResult>) : void
        private constructor ()
    }

    class PhysicsRaycaster extends BaseRaycaster {

        public get eventCamera(): UnityEngine.Camera;
        public get sortOrderPriority(): int;
        public get renderOrderPriority(): int;
        public get rootRaycaster(): BaseRaycaster;
        public get depth(): int;
        public get finalEventMask(): int;
        public get eventMask(): UnityEngine.LayerMask;
        public set eventMask(value: UnityEngine.LayerMask);
        public get maxRayIntersections(): int;
        public set maxRayIntersections(value: int);

        public Raycast ($eventData: PointerEventData, $resultAppendList: System_Collections_Generic.List$1<RaycastResult>) : void
        private constructor ()
    }

}

declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'

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
    * A Camera is a device through which the player views the world.
    */
    interface Camera {

    }

    /**
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * Options for specifying the state of the pen. For example, whether the pen is in contact with the screen or tablet, whether the pen is inverted, and whether buttons are pressed. You can combine states using bitwise OR operators.
    */
    enum PenStatus {
        None = 0,
        Contact = 1,
        Barrel = 2,
        Inverted = 4,
        Eraser = 8 
    }

    /**
    * Structure describing the status of a finger touching the screen.
    */
    interface Touch {

    }

    /**
    * Controls IME input.
    */
    enum IMECompositionMode {
        Auto = 0,
        On = 1,
        Off = 2 
    }

    /**
    * Representation of RGBA colors.
    */
    interface Color extends System.IFormattable, System.IEquatable$1<Color> {

    }

    /**
    * Represents a Sprite object for use in 2D gameplay.
    */
    interface Sprite {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * A 2D Rectangle defined by X and Y position, width and height.
    */
    interface Rect extends System.IFormattable, System.IEquatable$1<Rect> {

    }

    /**
    * The material class.
    */
    interface Material {

    }

    /**
    * Representation of four-dimensional vectors.
    */
    interface Vector4 extends System.IFormattable, System.IEquatable$1<Vector4> {

    }

    /**
    * Position, size, anchor and pivot information for a rectangle.
    */
    interface RectTransform {

    }

    /**
    * Element that can be used for screen rendering.
    */
    interface Canvas {

    }

    /**
    * A component that will render to the screen after all normal rendering has completed when attached to a Canvas. Designed for GUI application.
    */
    interface CanvasRenderer {

    }

    /**
    * Base class for Texture handling.
    */
    interface Texture {

    }

    /**
    * This element can filter raycasts. If the top level element is hit it can further 'check' if the location is valid.
    */
    interface ICanvasRaycastFilter {

    }

    /**
    * Interface to receive callbacks upon serialization and deserialization.
    */
    interface ISerializationCallbackReceiver {

    }

    /**
    * Interface to control the Mecanim animation system.
    */
    interface Animator {

    }

    /**
    * Representation of 2D vectors and points using integers.
    */
    interface Vector2Int extends System.IFormattable, System.IEquatable$1<Vector2Int> {

    }

    /**
    * A struct that stores the settings for TextGeneration.
    */
    interface TextGenerationSettings {

    }

    /**
    * Where the anchor of the text is placed.
    */
    enum TextAnchor {
        UpperLeft = 0,
        UpperCenter = 1,
        UpperRight = 2,
        MiddleLeft = 3,
        MiddleCenter = 4,
        MiddleRight = 5,
        LowerLeft = 6,
        LowerCenter = 7,
        LowerRight = 8 
    }

    /**
    * Class that can be used to generate text for rendering.
    */
    interface TextGenerator extends System.IDisposable {

    }

    /**
    * Script interface for.
    */
    interface Font {

    }

    /**
    * Wrapping modes for text that reaches the horizontal boundary.
    */
    enum HorizontalWrapMode {
        Wrap = 0,
        Overflow = 1 
    }

    /**
    * Wrapping modes for text that reaches the vertical boundary.
    */
    enum VerticalWrapMode {
        Truncate = 0,
        Overflow = 1 
    }

    /**
    * Font Style applied to GUI Texts, Text Meshes or GUIStyles.
    */
    enum FontStyle {
        Normal = 0,
        Bold = 1,
        Italic = 2,
        BoldAndItalic = 3 
    }

    /**
    * Specifies Layers to use in a Physics.Raycast.
    */
    interface LayerMask {

    }

    /**
    * A UnityGUI event.
    */
    interface Event {

    }

    /**
    * Interface for on-screen keyboards. Only native iPhone, Android, and Windows Store Apps are supported.
    */
    interface TouchScreenKeyboard {

    }

    /**
    * Enumeration of the different types of supported touchscreen keyboards.
    */
    enum TouchScreenKeyboardType {
        Default = 0,
        ASCIICapable = 1,
        NumbersAndPunctuation = 2,
        URL = 3,
        NumberPad = 4,
        PhonePad = 5,
        NamePhonePad = 6,
        EmailAddress = 7,
        NintendoNetworkAccount = 8,
        Social = 9,
        Search = 10,
        DecimalPad = 11,
        OneTimeCode = 12 
    }

    /**
    * Offsets for rectangles, borders, etc.
    */
    interface RectOffset extends System.IFormattable {

    }

    /**
    * Vertex class used by a Canvas for managing vertices.
    */
    interface UIVertex {

    }

    /**
    * A class that allows you to create or modify meshes.
    */
    interface Mesh {

    }

    /**
    * Representation of RGBA colors in 32 bit format.
    */
    interface Color32 extends System.IFormattable {

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

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface IFormattable {

    }

    interface IEquatable$1<T> {

        Equals? ($other: T) : boolean
    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IComparable {

    }

    interface IConvertible {

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

    interface IDisposable {

    }

    interface Char extends IComparable, IComparable$1<number>, IConvertible, IEquatable$1<number> {

    }

    interface IComparable$1<T> {

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

    interface Func$2<T,TResult> {
        (arg: T) : TResult; 
        Invoke?: (arg: T) => TResult;
    }

}

declare module 'UnityEngine.EventSystems.PointerEventData' {

    enum InputButton {
        Left = 0,
        Right = 1,
        Middle = 2 
    }

    enum FramePressState {
        Pressed = 0,
        Released = 1,
        PressedAndReleased = 2,
        NotChanged = 3 
    }

}

declare module 'UnityEngine.UI.Navigation' {

    enum Mode {
        None = 0,
        Horizontal = 1,
        Vertical = 2,
        Automatic = 3,
        Explicit = 4 
    }

}

declare module 'UnityEngine.UI.Selectable' {

    enum Transition {
        None = 0,
        ColorTint = 1,
        SpriteSwap = 2,
        Animation = 3 
    }

}

declare module 'UnityEngine.Events' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    /**
    * Zero argument delegate used by UnityEvents.
    */
    interface UnityAction {
        () : void; 
        Invoke?: () => void;
    }
    var UnityAction: { new (func: () => void): UnityAction; }

    /**
    * One argument version of UnityEvent.
    */
    class UnityEvent$1<T0> extends UnityEventBase {

        public constructor ()
        public AddListener ($call: UnityAction$1<T0>) : void
        public RemoveListener ($call: UnityAction$1<T0>) : void
        public Invoke ($arg0: T0) : void
    }

    /**
    * Abstract base class for UnityEvents.
    */
    interface UnityEventBase extends UnityEngine.ISerializationCallbackReceiver {

    }

    interface UnityAction$1<T0> {
        (arg0: T0) : void; 
        Invoke?: (arg0: T0) => void;
    }

    /**
    * A zero argument persistent callback that can be saved with the Scene.
    */
    interface UnityEvent {

    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

}

declare module 'UnityEngine.UI.MaskableGraphic' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    class CullStateChangedEvent extends UnityEngine_Events.UnityEvent$1<boolean> {

        public constructor ()
    }

}

declare module 'UnityEngine.UI.Image' {

    enum Type {
        Simple = 0,
        Sliced = 1,
        Tiled = 2,
        Filled = 3 
    }

    enum FillMethod {
        Horizontal = 0,
        Vertical = 1,
        Radial90 = 2,
        Radial180 = 3,
        Radial360 = 4 
    }

    enum OriginHorizontal {
        Left = 0,
        Right = 1 
    }

    enum OriginVertical {
        Bottom = 0,
        Top = 1 
    }

    enum Origin90 {
        BottomLeft = 0,
        TopLeft = 1,
        TopRight = 2,
        BottomRight = 3 
    }

    enum Origin180 {
        Bottom = 0,
        Left = 1,
        Top = 2,
        Right = 3 
    }

    enum Origin360 {
        Bottom = 0,
        Right = 1,
        Top = 2,
        Left = 3 
    }

}

declare module 'UnityEngine.UI.Button' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    class ButtonClickedEvent extends UnityEngine_Events.UnityEvent {

        public constructor ()
    }

}

declare module 'UnityEngine.UI.Dropdown' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class OptionData extends System.Object {

        public get text(): string;
        public set text(value: string);
        public get image(): UnityEngine.Sprite;
        public set image(value: UnityEngine.Sprite);

        public constructor ()
        public constructor ($text: string)
        public constructor ($image: UnityEngine.Sprite)
        public constructor ($text: string, $image: UnityEngine.Sprite)
    }

    class DropdownEvent extends UnityEngine_Events.UnityEvent$1<int> {

        public constructor ()
    }

    class OptionDataList extends System.Object {

        public get options(): System_Collections_Generic.List$1<OptionData>;
        public set options(value: System_Collections_Generic.List$1<OptionData>);

        public constructor ()
    }

}

declare module 'UnityEngine.UI.GraphicRaycaster' {

    enum BlockingObjects {
        None = 0,
        TwoD = 1,
        ThreeD = 2,
        All = 3 
    }

}

declare module 'UnityEngine.UI.InputField' {
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as System from 'System'

    class EndEditEvent extends UnityEngine_Events.UnityEvent$1<string> {

        public constructor ()
    }

    class SubmitEvent extends UnityEngine_Events.UnityEvent$1<string> {

        public constructor ()
    }

    class OnChangeEvent extends UnityEngine_Events.UnityEvent$1<string> {

        public constructor ()
    }

    interface OnValidateInput {
        (text: string, charIndex: int, addedChar: number) : number; 
        Invoke?: (text: string, charIndex: int, addedChar: number) => number;
    }
    var OnValidateInput: { new (func: (text: string, charIndex: int, addedChar: number) => number): OnValidateInput; }

    enum ContentType {
        Standard = 0,
        Autocorrected = 1,
        IntegerNumber = 2,
        DecimalNumber = 3,
        Alphanumeric = 4,
        Name = 5,
        EmailAddress = 6,
        Password = 7,
        Pin = 8,
        Custom = 9 
    }

    enum LineType {
        SingleLine = 0,
        MultiLineSubmit = 1,
        MultiLineNewline = 2 
    }

    enum InputType {
        Standard = 0,
        AutoCorrect = 1,
        Password = 2 
    }

    enum CharacterValidation {
        None = 0,
        Integer = 1,
        Decimal = 2,
        Alphanumeric = 3,
        Name = 4,
        EmailAddress = 5 
    }

}

declare module 'UnityEngine.UI.AspectRatioFitter' {

    enum AspectMode {
        None = 0,
        WidthControlsHeight = 1,
        HeightControlsWidth = 2,
        FitInParent = 3,
        EnvelopeParent = 4 
    }

}

declare module 'UnityEngine.UI.CanvasScaler' {

    enum ScaleMode {
        ConstantPixelSize = 0,
        ScaleWithScreenSize = 1,
        ConstantPhysicalSize = 2 
    }

    enum ScreenMatchMode {
        MatchWidthOrHeight = 0,
        Expand = 1,
        Shrink = 2 
    }

    enum Unit {
        Centimeters = 0,
        Millimeters = 1,
        Inches = 2,
        Points = 3,
        Picas = 4 
    }

}

declare module 'UnityEngine.UI.ContentSizeFitter' {

    enum FitMode {
        Unconstrained = 0,
        MinSize = 1,
        PreferredSize = 2 
    }

}

declare module 'UnityEngine.UI.GridLayoutGroup' {

    enum Corner {
        UpperLeft = 0,
        UpperRight = 1,
        LowerLeft = 2,
        LowerRight = 3 
    }

    enum Axis {
        Horizontal = 0,
        Vertical = 1 
    }

    enum Constraint {
        Flexible = 0,
        FixedColumnCount = 1,
        FixedRowCount = 2 
    }

}

declare module 'UnityEngine.UI.ScrollRect' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    enum MovementType {
        Unrestricted = 0,
        Elastic = 1,
        Clamped = 2 
    }

    enum ScrollbarVisibility {
        Permanent = 0,
        AutoHide = 1,
        AutoHideAndExpandViewport = 2 
    }

    class ScrollRectEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine.Vector2> {

        public constructor ()
    }

}

declare module 'UnityEngine.UI.Scrollbar' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    enum Direction {
        LeftToRight = 0,
        RightToLeft = 1,
        BottomToTop = 2,
        TopToBottom = 3 
    }

    class ScrollEvent extends UnityEngine_Events.UnityEvent$1<float> {

        public constructor ()
    }

}

declare module 'UnityEngine.UI.Slider' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    enum Direction {
        LeftToRight = 0,
        RightToLeft = 1,
        BottomToTop = 2,
        TopToBottom = 3 
    }

    class SliderEvent extends UnityEngine_Events.UnityEvent$1<float> {

        public constructor ()
    }

}

declare module 'UnityEngine.Rendering' {

    /**
    * Specifies the operation that's performed on the stencil buffer when rendering.
    */
    enum StencilOp {
        Keep = 0,
        Zero = 1,
        Replace = 2,
        IncrementSaturate = 3,
        DecrementSaturate = 4,
        Invert = 5,
        IncrementWrap = 6,
        DecrementWrap = 7 
    }

    /**
    * Depth or stencil comparison function.
    */
    enum CompareFunction {
        Disabled = 0,
        Never = 1,
        Less = 2,
        Equal = 3,
        LessEqual = 4,
        Greater = 5,
        NotEqual = 6,
        GreaterEqual = 7,
        Always = 8 
    }

    /**
    * Specifies which color components will get written into the target framebuffer.
    */
    enum ColorWriteMask {
        Alpha = 1,
        Blue = 2,
        Green = 4,
        Red = 8,
        All = 15 
    }

}

declare module 'UnityEngine.UI.Toggle' {
    import * as UnityEngine_Events from 'UnityEngine.Events'

    enum ToggleTransition {
        None = 0,
        Fade = 1 
    }

    class ToggleEvent extends UnityEngine_Events.UnityEvent$1<boolean> {

        public constructor ()
    }

}

declare module 'UnityEngine.UIElements' {
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine from 'UnityEngine'

    class PanelEventHandler extends UnityEngine_EventSystems.UIBehaviour implements UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.ICancelHandler, IRuntimePanelComponent, UnityEngine_EventSystems.IScrollHandler, UnityEngine_EventSystems.IPointerMoveHandler, UnityEngine_EventSystems.IPointerEnterHandler, UnityEngine_EventSystems.IPointerExitHandler, UnityEngine_EventSystems.ISelectHandler, UnityEngine_EventSystems.IDeselectHandler, UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IMoveHandler, UnityEngine_EventSystems.IPointerUpHandler {

        public get panel(): IPanel;
        public set panel(value: IPanel);

        private constructor ()
        public OnSelect ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnDeselect ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnPointerMove ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerUp ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerExit ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerEnter ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerClick ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnSubmit ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnCancel ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnMove ($eventData: UnityEngine_EventSystems.AxisEventData) : void
        public OnScroll ($eventData: UnityEngine_EventSystems.PointerEventData) : void
    }

    /**
    * Interface for classes implementing UI panels.
    */
    interface IPanel extends System.IDisposable {

    }

    class PanelRaycaster extends UnityEngine_EventSystems.BaseRaycaster implements IRuntimePanelComponent {

        public get eventCamera(): UnityEngine.Camera;
        public get sortOrderPriority(): int;
        public get renderOrderPriority(): int;
        public get rootRaycaster(): BaseRaycaster;
        public get panel(): IPanel;
        public set panel(value: IPanel);

        private constructor ()
        public Raycast ($eventData: UnityEngine_EventSystems.PointerEventData, $resultAppendList: System_Collections_Generic.List$1<UnityEngine_EventSystems.RaycastResult>) : void
    }

}

declare module 'UnityEngine.EventSystems.EventTrigger' {
    import * as System from 'System'
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as UnityEngine_Events from 'UnityEngine.Events'

    class Entry extends System.Object {

        public eventID : UnityEngine_EventSystems.EventTriggerType
        public callback : TriggerEvent

        public constructor ()
    }

    class TriggerEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_EventSystems.BaseEventData> {

        public constructor ()
    }

}

declare module 'UnityEngine.EventSystems.ExecuteEvents' {
    import * as System from 'System'
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'

    interface EventFunction$1<T1> {
        (handler: T1, eventData: UnityEngine_EventSystems.BaseEventData) : void; 
        Invoke?: (handler: T1, eventData: UnityEngine_EventSystems.BaseEventData) => void;
    }

}

declare module 'UnityEngine.EventSystems.PointerInputModule' {
    import * as System from 'System'
    import * as UnityEngine_EventSystems_PointerEventData from 'UnityEngine.EventSystems.PointerEventData'
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'

    class MouseButtonEventData extends System.Object {

        public buttonState : UnityEngine_EventSystems_PointerEventData.FramePressState
        public buttonData : UnityEngine_EventSystems.PointerEventData

        public constructor ()
        public PressedThisFrame () : boolean
        public ReleasedThisFrame () : boolean
    }

}

