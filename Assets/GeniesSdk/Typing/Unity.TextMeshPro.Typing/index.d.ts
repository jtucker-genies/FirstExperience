
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'TMPro' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_TextCore_LowLevel from 'UnityEngine.TextCore.LowLevel'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as UnityEngine_TextCore from 'UnityEngine.TextCore'
    import * as TMPro_TMP_DefaultControls from 'TMPro.TMP_DefaultControls'
    import * as UnityEngine_UI from 'UnityEngine.UI'
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as TMPro_TMP_Dropdown from 'TMPro.TMP_Dropdown'
    import * as System_Text from 'System.Text'
    import * as TMPro_TMP_InputField from 'TMPro.TMP_InputField'
    import * as TMPro_TMP_Settings from 'TMPro.TMP_Settings'

    class FastAction extends System.Object {

        public constructor ()
        public Add ($rhs: System.Action) : void
        public Remove ($rhs: System.Action) : void
        public Call () : void
    }

    class FastAction$1<A> extends System.Object {

        public constructor ()
        public Add ($rhs: System.Action$1<A>) : void
        public Remove ($rhs: System.Action$1<A>) : void
        public Call ($a: A) : void
    }

    class FastAction$2<A,B> extends System.Object {

        public constructor ()
        public Add ($rhs: System.Action$2<A, B>) : void
        public Remove ($rhs: System.Action$2<A, B>) : void
        public Call ($a: A, $b: B) : void
    }

    class FastAction$3<A,B,C> extends System.Object {

        public constructor ()
        public Add ($rhs: System.Action$3<A, B, C>) : void
        public Remove ($rhs: System.Action$3<A, B, C>) : void
        public Call ($a: A, $b: B, $c: C) : void
    }

    interface ITextPreprocessor {

        PreprocessText? ($text: string) : string
    }

    class MaterialReferenceManager extends System.Object {

        public static get instance(): MaterialReferenceManager;

        public constructor ()
        public static AddFontAsset ($fontAsset: TMP_FontAsset) : void
        public static AddSpriteAsset ($spriteAsset: TMP_SpriteAsset) : void
        /**
        * @methodSwap AddSpriteAsset_EBB7509C_F29E0EEB
        */
        public static AddSpriteAsset ($hashCode: int, $spriteAsset: TMP_SpriteAsset) : void
        public static AddFontMaterial ($hashCode: int, $material: UnityEngine.Material) : void
        public static AddColorGradientPreset ($hashCode: int, $spriteAsset: TMP_ColorGradient) : void
        public Contains ($font: TMP_FontAsset) : boolean
        public Contains ($sprite: TMP_SpriteAsset) : boolean
        public static TryGetFontAsset ($hashCode: int, $fontAsset: $Ref<TMP_FontAsset>) : boolean
        public static TryGetSpriteAsset ($hashCode: int, $spriteAsset: $Ref<TMP_SpriteAsset>) : boolean
        public static TryGetColorGradientPreset ($hashCode: int, $gradientPreset: $Ref<TMP_ColorGradient>) : boolean
        public static TryGetMaterial ($hashCode: int, $material: $Ref<UnityEngine.Material>) : boolean
    }

    class TMP_FontAsset extends TMP_Asset {

        public hashCode : int
        public material : UnityEngine.Material
        public materialHashCode : int
        public get instanceID(): int;
        public atlas : UnityEngine.Texture2D
        public normalStyle : float
        public normalSpacingOffset : float
        public boldStyle : float
        public boldSpacing : float
        public italicStyle : byte
        public tabSize : byte
        public get version(): string;
        public get sourceFontFile(): UnityEngine.Font;
        public get atlasPopulationMode(): AtlasPopulationMode;
        public set atlasPopulationMode(value: AtlasPopulationMode);
        public get faceInfo(): UnityEngine_TextCore.FaceInfo;
        public set faceInfo(value: UnityEngine_TextCore.FaceInfo);
        public get glyphTable(): System_Collections_Generic.List$1<UnityEngine_TextCore.Glyph>;
        public get glyphLookupTable(): System_Collections_Generic.Dictionary$2<uint, UnityEngine_TextCore.Glyph>;
        public get characterTable(): System_Collections_Generic.List$1<TMP_Character>;
        public get characterLookupTable(): System_Collections_Generic.Dictionary$2<uint, TMP_Character>;
        public get atlasTexture(): UnityEngine.Texture2D;
        public get atlasTextures(): UnityEngine.Texture2D[];
        public set atlasTextures(value: UnityEngine.Texture2D[]);
        public get atlasTextureCount(): int;
        public get isMultiAtlasTexturesEnabled(): boolean;
        public set isMultiAtlasTexturesEnabled(value: boolean);
        public get atlasWidth(): int;
        public get atlasHeight(): int;
        public get atlasPadding(): int;
        public get atlasRenderMode(): UnityEngine_TextCore_LowLevel.GlyphRenderMode;
        public get fontFeatureTable(): TMP_FontFeatureTable;
        public get fallbackFontAssetTable(): System_Collections_Generic.List$1<TMP_FontAsset>;
        public set fallbackFontAssetTable(value: System_Collections_Generic.List$1<TMP_FontAsset>);
        public get creationSettings(): FontAssetCreationSettings;
        public set creationSettings(value: FontAssetCreationSettings);
        public get fontWeightTable(): TMP_FontWeightPair[];

        private constructor ()
        public static CreateFontAsset ($font: UnityEngine.Font) : TMP_FontAsset
        /**
        * @methodSwap CreateFontAsset_EBB7509C_H1A72B413
        */
        public static CreateFontAsset ($font: UnityEngine.Font, $samplingPointSize: int, $atlasPadding: int, $renderMode: UnityEngine_TextCore_LowLevel.GlyphRenderMode, $atlasWidth: int, $atlasHeight: int, $atlasPopulationMode?: AtlasPopulationMode, $enableMultiAtlasSupport?: boolean) : TMP_FontAsset
        public ReadFontAssetDefinition () : void
        /**
        * @methodSwap HasCharacter_EBB7509C_F92D023A
        */
        public HasCharacter ($character: int) : boolean
        public HasCharacter ($character: number, $searchFallbacks?: boolean, $tryAddCharacter?: boolean) : boolean
        public HasCharacters ($text: string, $missingCharacters: $Ref<System_Collections_Generic.List$1<number>>) : boolean
        public HasCharacters ($text: string, $missingCharacters: $Ref<uint[]>, $searchFallbacks?: boolean, $tryAddCharacter?: boolean) : boolean
        public HasCharacters ($text: string) : boolean
        public static GetCharacters ($fontAsset: TMP_FontAsset) : string
        public static GetCharactersArray ($fontAsset: TMP_FontAsset) : int[]
        public TryAddCharacters ($unicodes: uint[], $includeFontFeatures?: boolean) : boolean
        public TryAddCharacters ($unicodes: uint[], $missingUnicodes: $Ref<uint[]>, $includeFontFeatures?: boolean) : boolean
        public TryAddCharacters ($characters: string, $includeFontFeatures?: boolean) : boolean
        public TryAddCharacters ($characters: string, $missingCharacters: $Ref<string>, $includeFontFeatures?: boolean) : boolean
        public ClearFontAssetData ($setAtlasSizeToZero?: boolean) : void
    }

    class TMP_Asset extends UnityEngine.ScriptableObject {

        public hashCode : int
        public material : UnityEngine.Material
        public materialHashCode : int
        public get instanceID(): int;

        private constructor ()
    }

    enum AtlasPopulationMode {
        Static = 0,
        Dynamic = 1 
    }

    class TMP_Character extends TMP_TextElement {

        public get elementType(): TextElementType;
        public get unicode(): uint;
        public set unicode(value: uint);
        public get textAsset(): TMP_Asset;
        public set textAsset(value: TMP_Asset);
        public get glyph(): UnityEngine_TextCore.Glyph;
        public set glyph(value: UnityEngine_TextCore.Glyph);
        public get glyphIndex(): uint;
        public set glyphIndex(value: uint);
        public get scale(): float;
        public set scale(value: float);

        public constructor ()
        public constructor ($unicode: uint, $glyph: UnityEngine_TextCore.Glyph)
        public constructor ($unicode: uint, $fontAsset: TMP_FontAsset, $glyph: UnityEngine_TextCore.Glyph)
    }

    class TMP_TextElement extends System.Object {

        public get elementType(): TextElementType;
        public get unicode(): uint;
        public set unicode(value: uint);
        public get textAsset(): TMP_Asset;
        public set textAsset(value: TMP_Asset);
        public get glyph(): UnityEngine_TextCore.Glyph;
        public set glyph(value: UnityEngine_TextCore.Glyph);
        public get glyphIndex(): uint;
        public set glyphIndex(value: uint);
        public get scale(): float;
        public set scale(value: float);

        public constructor ()
    }

    enum TextElementType {
        Character = 1,
        Sprite = 2 
    }

    class TMP_FontFeatureTable extends System.Object {

        public get glyphPairAdjustmentRecords(): System_Collections_Generic.List$1<TMP_GlyphPairAdjustmentRecord>;
        public set glyphPairAdjustmentRecords(value: System_Collections_Generic.List$1<TMP_GlyphPairAdjustmentRecord>);

        public constructor ()
        public SortGlyphPairAdjustmentRecords () : void
    }

    class TMP_GlyphPairAdjustmentRecord extends System.Object {

        public get firstAdjustmentRecord(): TMP_GlyphAdjustmentRecord;
        public set firstAdjustmentRecord(value: TMP_GlyphAdjustmentRecord);
        public get secondAdjustmentRecord(): TMP_GlyphAdjustmentRecord;
        public set secondAdjustmentRecord(value: TMP_GlyphAdjustmentRecord);
        public get featureLookupFlags(): FontFeatureLookupFlags;
        public set featureLookupFlags(value: FontFeatureLookupFlags);

        public constructor ($firstAdjustmentRecord: TMP_GlyphAdjustmentRecord, $secondAdjustmentRecord: TMP_GlyphAdjustmentRecord)
    }

    class TMP_GlyphAdjustmentRecord extends System.ValueType {

        public get glyphIndex(): uint;
        public set glyphIndex(value: uint);
        public get glyphValueRecord(): TMP_GlyphValueRecord;
        public set glyphValueRecord(value: TMP_GlyphValueRecord);

        public constructor ($glyphIndex: uint, $glyphValueRecord: TMP_GlyphValueRecord)
    }

    class TMP_GlyphValueRecord extends System.ValueType {

        public get xPlacement(): float;
        public set xPlacement(value: float);
        public get yPlacement(): float;
        public set yPlacement(value: float);
        public get xAdvance(): float;
        public set xAdvance(value: float);
        public get yAdvance(): float;
        public set yAdvance(value: float);

        public constructor ($xPlacement: float, $yPlacement: float, $xAdvance: float, $yAdvance: float)
        public static op_Addition ($a: TMP_GlyphValueRecord, $b: TMP_GlyphValueRecord) : TMP_GlyphValueRecord
    }

    enum FontFeatureLookupFlags {
        None = 0,
        IgnoreLigatures = 4,
        IgnoreSpacingAdjustments = 256 
    }

    class FontAssetCreationSettings extends System.ValueType {

        public sourceFontFileName : string
        public sourceFontFileGUID : string
        public pointSizeSamplingMode : int
        public pointSize : int
        public padding : int
        public packingMode : int
        public atlasWidth : int
        public atlasHeight : int
        public characterSetSelectionMode : int
        public characterSequence : string
        public referencedFontAssetGUID : string
        public referencedTextAssetGUID : string
        public fontStyle : int
        public fontStyleModifier : float
        public renderMode : int
        public includeFontFeatures : boolean

    }

    class TMP_FontWeightPair extends System.ValueType {

        public regularTypeface : TMP_FontAsset
        public italicTypeface : TMP_FontAsset

    }

    class TMP_SpriteAsset extends TMP_Asset {

        public hashCode : int
        public material : UnityEngine.Material
        public materialHashCode : int
        public get instanceID(): int;
        public spriteSheet : UnityEngine.Texture
        public spriteInfoList : System_Collections_Generic.List$1<TMP_Sprite>
        public fallbackSpriteAssets : System_Collections_Generic.List$1<TMP_SpriteAsset>
        public get version(): string;
        public get faceInfo(): UnityEngine_TextCore.FaceInfo;
        public get spriteCharacterTable(): System_Collections_Generic.List$1<TMP_SpriteCharacter>;
        public get spriteCharacterLookupTable(): System_Collections_Generic.Dictionary$2<uint, TMP_SpriteCharacter>;
        public get spriteGlyphTable(): System_Collections_Generic.List$1<TMP_SpriteGlyph>;

        private constructor ()
        public UpdateLookupTables () : void
        public GetSpriteIndexFromHashcode ($hashCode: int) : int
        public GetSpriteIndexFromUnicode ($unicode: uint) : int
        public GetSpriteIndexFromName ($name: string) : int
        public static SearchForSpriteByUnicode ($spriteAsset: TMP_SpriteAsset, $unicode: uint, $includeFallbacks: boolean, $spriteIndex: $Ref<int>) : TMP_SpriteAsset
        public static SearchForSpriteByHashCode ($spriteAsset: TMP_SpriteAsset, $hashCode: int, $includeFallbacks: boolean, $spriteIndex: $Ref<int>) : TMP_SpriteAsset
        public SortGlyphTable () : void
    }

    class TMP_SpriteCharacter extends TMP_TextElement {

        public get elementType(): TextElementType;
        public get unicode(): uint;
        public set unicode(value: uint);
        public get textAsset(): TMP_Asset;
        public set textAsset(value: TMP_Asset);
        public get glyph(): UnityEngine_TextCore.Glyph;
        public set glyph(value: UnityEngine_TextCore.Glyph);
        public get glyphIndex(): uint;
        public set glyphIndex(value: uint);
        public get scale(): float;
        public set scale(value: float);
        public get name(): string;
        public set name(value: string);
        public get hashCode(): int;

        public constructor ()
        public constructor ($unicode: uint, $glyph: TMP_SpriteGlyph)
        public constructor ($unicode: uint, $spriteAsset: TMP_SpriteAsset, $glyph: TMP_SpriteGlyph)
    }

    class TMP_SpriteGlyph extends UnityEngine_TextCore.Glyph {

        public sprite : UnityEngine.Sprite

        public constructor ()
        public constructor ($index: uint, $metrics: UnityEngine_TextCore.GlyphMetrics, $glyphRect: UnityEngine_TextCore.GlyphRect, $scale: float, $atlasIndex: int)
        public constructor ($index: uint, $metrics: UnityEngine_TextCore.GlyphMetrics, $glyphRect: UnityEngine_TextCore.GlyphRect, $scale: float, $atlasIndex: int, $sprite: UnityEngine.Sprite)
    }

    class TMP_Sprite extends TMP_TextElement_Legacy {

        public id : int
        public x : float
        public y : float
        public width : float
        public height : float
        public xOffset : float
        public yOffset : float
        public xAdvance : float
        public scale : float
        public name : string
        public hashCode : int
        public unicode : int
        public pivot : UnityEngine.Vector2
        public sprite : UnityEngine.Sprite

        public constructor ()
    }

    class TMP_TextElement_Legacy extends System.Object {

        public id : int
        public x : float
        public y : float
        public width : float
        public height : float
        public xOffset : float
        public yOffset : float
        public xAdvance : float
        public scale : float

        public constructor ()
    }

    class TMP_ColorGradient extends UnityEngine.ScriptableObject {

        public colorMode : ColorMode
        public topLeft : UnityEngine.Color
        public topRight : UnityEngine.Color
        public bottomLeft : UnityEngine.Color
        public bottomRight : UnityEngine.Color

        private constructor ()
        private constructor ($color: UnityEngine.Color)
        private constructor ($color0: UnityEngine.Color, $color1: UnityEngine.Color, $color2: UnityEngine.Color, $color3: UnityEngine.Color)
    }

    enum ColorMode {
        Single = 0,
        HorizontalGradient = 1,
        VerticalGradient = 2,
        FourCornersGradient = 3 
    }

    class TMP_MaterialReference extends System.ValueType {

        public material : UnityEngine.Material
        public referenceCount : int

    }

    class MaterialReference extends System.ValueType {

        public index : int
        public fontAsset : TMP_FontAsset
        public spriteAsset : TMP_SpriteAsset
        public material : UnityEngine.Material
        public isDefaultMaterial : boolean
        public isFallbackMaterial : boolean
        public fallbackMaterial : UnityEngine.Material
        public padding : float
        public referenceCount : int

        public constructor ($index: int, $fontAsset: TMP_FontAsset, $spriteAsset: TMP_SpriteAsset, $material: UnityEngine.Material, $padding: float)
        public static Contains ($materialReferences: MaterialReference[], $fontAsset: TMP_FontAsset) : boolean
        public static AddMaterialReference ($material: UnityEngine.Material, $fontAsset: TMP_FontAsset, $materialReferences: $Ref<MaterialReference[]>, $materialReferenceIndexLookup: System_Collections_Generic.Dictionary$2<int, int>) : int
        public static AddMaterialReference ($material: UnityEngine.Material, $spriteAsset: TMP_SpriteAsset, $materialReferences: $Ref<MaterialReference[]>, $materialReferenceIndexLookup: System_Collections_Generic.Dictionary$2<int, int>) : int
    }

    class TMP_Vertex extends System.ValueType {

        public position : UnityEngine.Vector3
        public uv : UnityEngine.Vector2
        public uv2 : UnityEngine.Vector2
        public uv4 : UnityEngine.Vector2
        public color : UnityEngine.Color32
        public static get zero(): TMP_Vertex;

    }

    class TMP_Offset extends System.ValueType {

        public get left(): float;
        public set left(value: float);
        public get right(): float;
        public set right(value: float);
        public get top(): float;
        public set top(value: float);
        public get bottom(): float;
        public set bottom(value: float);
        public get horizontal(): float;
        public set horizontal(value: float);
        public get vertical(): float;
        public set vertical(value: float);
        public static get zero(): TMP_Offset;

        public constructor ($left: float, $right: float, $top: float, $bottom: float)
        public constructor ($horizontal: float, $vertical: float)
        public GetHashCode () : int
        public Equals ($obj: any) : boolean
        public Equals ($other: TMP_Offset) : boolean
        public static op_Equality ($lhs: TMP_Offset, $rhs: TMP_Offset) : boolean
        public static op_Inequality ($lhs: TMP_Offset, $rhs: TMP_Offset) : boolean
        public static op_Multiply ($a: TMP_Offset, $b: float) : TMP_Offset
    }

    class HighlightState extends System.ValueType {

        public color : UnityEngine.Color32
        public padding : TMP_Offset

        public constructor ($color: UnityEngine.Color32, $padding: TMP_Offset)
        public GetHashCode () : int
        public Equals ($obj: any) : boolean
        public Equals ($other: HighlightState) : boolean
        public static op_Equality ($lhs: HighlightState, $rhs: HighlightState) : boolean
        public static op_Inequality ($lhs: HighlightState, $rhs: HighlightState) : boolean
    }

    class TMP_CharacterInfo extends System.ValueType {

        public character : number
        public index : int
        public stringLength : int
        public elementType : TMP_TextElementType
        public textElement : TMP_TextElement
        public fontAsset : TMP_FontAsset
        public spriteAsset : TMP_SpriteAsset
        public spriteIndex : int
        public material : UnityEngine.Material
        public materialReferenceIndex : int
        public isUsingAlternateTypeface : boolean
        public pointSize : float
        public lineNumber : int
        public pageNumber : int
        public vertexIndex : int
        public vertex_BL : TMP_Vertex
        public vertex_TL : TMP_Vertex
        public vertex_TR : TMP_Vertex
        public vertex_BR : TMP_Vertex
        public topLeft : UnityEngine.Vector3
        public bottomLeft : UnityEngine.Vector3
        public topRight : UnityEngine.Vector3
        public bottomRight : UnityEngine.Vector3
        public origin : float
        public xAdvance : float
        public ascender : float
        public baseLine : float
        public descender : float
        public aspectRatio : float
        public scale : float
        public color : UnityEngine.Color32
        public underlineColor : UnityEngine.Color32
        public underlineVertexIndex : int
        public strikethroughColor : UnityEngine.Color32
        public strikethroughVertexIndex : int
        public highlightColor : UnityEngine.Color32
        public highlightState : HighlightState
        public style : FontStyles
        public isVisible : boolean

    }

    enum TMP_TextElementType {
        Character = 0,
        Sprite = 1 
    }

    enum FontStyles {
        Normal = 0,
        Bold = 1,
        Italic = 2,
        Underline = 4,
        LowerCase = 8,
        UpperCase = 16,
        SmallCaps = 32,
        Strikethrough = 64,
        Superscript = 128,
        Subscript = 256,
        Highlight = 512 
    }

    class TMP_Compatibility {

        public static ConvertTextAlignmentEnumValues ($oldValue: TextAlignmentOptions) : TextAlignmentOptions
    }

    enum TextAlignmentOptions {
        TopLeft = 257,
        Top = 258,
        TopRight = 260,
        TopJustified = 264,
        TopFlush = 272,
        TopGeoAligned = 288,
        Left = 513,
        Center = 514,
        Right = 516,
        Justified = 520,
        Flush = 528,
        CenterGeoAligned = 544,
        BottomLeft = 1025,
        Bottom = 1026,
        BottomRight = 1028,
        BottomJustified = 1032,
        BottomFlush = 1040,
        BottomGeoAligned = 1056,
        BaselineLeft = 2049,
        Baseline = 2050,
        BaselineRight = 2052,
        BaselineJustified = 2056,
        BaselineFlush = 2064,
        BaselineGeoAligned = 2080,
        MidlineLeft = 4097,
        Midline = 4098,
        MidlineRight = 4100,
        MidlineJustified = 4104,
        MidlineFlush = 4112,
        MidlineGeoAligned = 4128,
        CaplineLeft = 8193,
        Capline = 8194,
        CaplineRight = 8196,
        CaplineJustified = 8200,
        CaplineFlush = 8208,
        CaplineGeoAligned = 8224,
        Converted = 65535 
    }

    class TMP_DefaultControls {

        public static CreateScrollbar ($resources: TMPro_TMP_DefaultControls.Resources) : UnityEngine.GameObject
        public static CreateButton ($resources: TMPro_TMP_DefaultControls.Resources) : UnityEngine.GameObject
        public static CreateText ($resources: TMPro_TMP_DefaultControls.Resources) : UnityEngine.GameObject
        public static CreateInputField ($resources: TMPro_TMP_DefaultControls.Resources) : UnityEngine.GameObject
        public static CreateDropdown ($resources: TMPro_TMP_DefaultControls.Resources) : UnityEngine.GameObject
    }

    class TMP_Dropdown extends UnityEngine_UI.Selectable implements UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.ICancelHandler {

        public get template(): UnityEngine.RectTransform;
        public set template(value: UnityEngine.RectTransform);
        public get captionText(): TMP_Text;
        public set captionText(value: TMP_Text);
        public get captionImage(): UnityEngine_UI.Image;
        public set captionImage(value: UnityEngine_UI.Image);
        public get placeholder(): UnityEngine_UI.Graphic;
        public set placeholder(value: UnityEngine_UI.Graphic);
        public get itemText(): TMP_Text;
        public set itemText(value: TMP_Text);
        public get itemImage(): UnityEngine_UI.Image;
        public set itemImage(value: UnityEngine_UI.Image);
        public get options(): System_Collections_Generic.List$1<TMPro_TMP_Dropdown.OptionData>;
        public set options(value: System_Collections_Generic.List$1<TMPro_TMP_Dropdown.OptionData>);
        public get onValueChanged(): TMPro_TMP_Dropdown.DropdownEvent;
        public set onValueChanged(value: TMPro_TMP_Dropdown.DropdownEvent);
        public get alphaFadeSpeed(): float;
        public set alphaFadeSpeed(value: float);
        public get value(): int;
        public set value(value: int);
        public get IsExpanded(): boolean;

        public SetValueWithoutNotify ($input: int) : void
        public RefreshShownValue () : void
        public AddOptions ($options: System_Collections_Generic.List$1<TMPro_TMP_Dropdown.OptionData>) : void
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

    class TMP_Text extends UnityEngine_UI.MaskableGraphic {

        public get text(): string;
        public set text(value: string);
        public get textPreprocessor(): ITextPreprocessor;
        public set textPreprocessor(value: ITextPreprocessor);
        public get isRightToLeftText(): boolean;
        public set isRightToLeftText(value: boolean);
        public get font(): TMP_FontAsset;
        public set font(value: TMP_FontAsset);
        public get fontSharedMaterial(): UnityEngine.Material;
        public set fontSharedMaterial(value: UnityEngine.Material);
        public get fontSharedMaterials(): UnityEngine.Material[];
        public set fontSharedMaterials(value: UnityEngine.Material[]);
        public get fontMaterial(): UnityEngine.Material;
        public set fontMaterial(value: UnityEngine.Material);
        public get fontMaterials(): UnityEngine.Material[];
        public set fontMaterials(value: UnityEngine.Material[]);
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        public get alpha(): float;
        public set alpha(value: float);
        public get enableVertexGradient(): boolean;
        public set enableVertexGradient(value: boolean);
        public get colorGradient(): VertexGradient;
        public set colorGradient(value: VertexGradient);
        public get colorGradientPreset(): TMP_ColorGradient;
        public set colorGradientPreset(value: TMP_ColorGradient);
        public get spriteAsset(): TMP_SpriteAsset;
        public set spriteAsset(value: TMP_SpriteAsset);
        public get tintAllSprites(): boolean;
        public set tintAllSprites(value: boolean);
        public get styleSheet(): TMP_StyleSheet;
        public set styleSheet(value: TMP_StyleSheet);
        public get textStyle(): TMP_Style;
        public set textStyle(value: TMP_Style);
        public get overrideColorTags(): boolean;
        public set overrideColorTags(value: boolean);
        public get faceColor(): UnityEngine.Color32;
        public set faceColor(value: UnityEngine.Color32);
        public get outlineColor(): UnityEngine.Color32;
        public set outlineColor(value: UnityEngine.Color32);
        public get outlineWidth(): float;
        public set outlineWidth(value: float);
        public get fontSize(): float;
        public set fontSize(value: float);
        public get fontWeight(): FontWeight;
        public set fontWeight(value: FontWeight);
        public get pixelsPerUnit(): float;
        public get enableAutoSizing(): boolean;
        public set enableAutoSizing(value: boolean);
        public get fontSizeMin(): float;
        public set fontSizeMin(value: float);
        public get fontSizeMax(): float;
        public set fontSizeMax(value: float);
        public get fontStyle(): FontStyles;
        public set fontStyle(value: FontStyles);
        public get isUsingBold(): boolean;
        public get horizontalAlignment(): HorizontalAlignmentOptions;
        public set horizontalAlignment(value: HorizontalAlignmentOptions);
        public get verticalAlignment(): VerticalAlignmentOptions;
        public set verticalAlignment(value: VerticalAlignmentOptions);
        public get alignment(): TextAlignmentOptions;
        public set alignment(value: TextAlignmentOptions);
        public get characterSpacing(): float;
        public set characterSpacing(value: float);
        public get wordSpacing(): float;
        public set wordSpacing(value: float);
        public get lineSpacing(): float;
        public set lineSpacing(value: float);
        public get lineSpacingAdjustment(): float;
        public set lineSpacingAdjustment(value: float);
        public get paragraphSpacing(): float;
        public set paragraphSpacing(value: float);
        public get characterWidthAdjustment(): float;
        public set characterWidthAdjustment(value: float);
        public get enableWordWrapping(): boolean;
        public set enableWordWrapping(value: boolean);
        public get wordWrappingRatios(): float;
        public set wordWrappingRatios(value: float);
        public get overflowMode(): TextOverflowModes;
        public set overflowMode(value: TextOverflowModes);
        public get isTextOverflowing(): boolean;
        public get firstOverflowCharacterIndex(): int;
        public get linkedTextComponent(): TMP_Text;
        public set linkedTextComponent(value: TMP_Text);
        public get isTextTruncated(): boolean;
        public get enableKerning(): boolean;
        public set enableKerning(value: boolean);
        public get extraPadding(): boolean;
        public set extraPadding(value: boolean);
        public get richText(): boolean;
        public set richText(value: boolean);
        public get parseCtrlCharacters(): boolean;
        public set parseCtrlCharacters(value: boolean);
        public get isOverlay(): boolean;
        public set isOverlay(value: boolean);
        public get isOrthographic(): boolean;
        public set isOrthographic(value: boolean);
        public get enableCulling(): boolean;
        public set enableCulling(value: boolean);
        public get ignoreVisibility(): boolean;
        public set ignoreVisibility(value: boolean);
        public get horizontalMapping(): TextureMappingOptions;
        public set horizontalMapping(value: TextureMappingOptions);
        public get verticalMapping(): TextureMappingOptions;
        public set verticalMapping(value: TextureMappingOptions);
        public get mappingUvLineOffset(): float;
        public set mappingUvLineOffset(value: float);
        public get renderMode(): TextRenderFlags;
        public set renderMode(value: TextRenderFlags);
        public get geometrySortingOrder(): VertexSortingOrder;
        public set geometrySortingOrder(value: VertexSortingOrder);
        public get isTextObjectScaleStatic(): boolean;
        public set isTextObjectScaleStatic(value: boolean);
        public get vertexBufferAutoSizeReduction(): boolean;
        public set vertexBufferAutoSizeReduction(value: boolean);
        public get firstVisibleCharacter(): int;
        public set firstVisibleCharacter(value: int);
        public get maxVisibleCharacters(): int;
        public set maxVisibleCharacters(value: int);
        public get maxVisibleWords(): int;
        public set maxVisibleWords(value: int);
        public get maxVisibleLines(): int;
        public set maxVisibleLines(value: int);
        public get useMaxVisibleDescender(): boolean;
        public set useMaxVisibleDescender(value: boolean);
        public get pageToDisplay(): int;
        public set pageToDisplay(value: int);
        public get margin(): UnityEngine.Vector4;
        public set margin(value: UnityEngine.Vector4);
        public get textInfo(): TMP_TextInfo;
        public get havePropertiesChanged(): boolean;
        public set havePropertiesChanged(value: boolean);
        public get isUsingLegacyAnimationComponent(): boolean;
        public set isUsingLegacyAnimationComponent(value: boolean);
        public get transform(): UnityEngine.Transform;
        public get rectTransform(): UnityEngine.RectTransform;
        public get autoSizeTextContainer(): boolean;
        public set autoSizeTextContainer(value: boolean);
        public get mesh(): UnityEngine.Mesh;
        public get isVolumetricText(): boolean;
        public set isVolumetricText(value: boolean);
        public get bounds(): UnityEngine.Bounds;
        public get textBounds(): UnityEngine.Bounds;
        public get flexibleHeight(): float;
        public get flexibleWidth(): float;
        public get minWidth(): float;
        public get minHeight(): float;
        public get maxWidth(): float;
        public get maxHeight(): float;
        public get preferredWidth(): float;
        public get preferredHeight(): float;
        public get renderedWidth(): float;
        public get renderedHeight(): float;
        public get layoutPriority(): int;

        public ForceMeshUpdate ($ignoreActiveState?: boolean, $forceTextReparsing?: boolean) : void
        public UpdateGeometry ($mesh: UnityEngine.Mesh, $index: int) : void
        public UpdateVertexData ($flags: TMP_VertexDataUpdateFlags) : void
        public UpdateVertexData () : void
        public SetVertices ($vertices: UnityEngine.Vector3[]) : void
        public UpdateMeshPadding () : void
        public CrossFadeColor ($targetColor: UnityEngine.Color, $duration: float, $ignoreTimeScale: boolean, $useAlpha: boolean) : void
        public CrossFadeAlpha ($alpha: float, $duration: float, $ignoreTimeScale: boolean) : void
        public SetText ($sourceText: string, $syncTextInputBox?: boolean) : void
        /**
        * @methodSwap SetText_EBB7509C_H45FF9778
        */
        public SetText ($sourceText: string, $arg0: float) : void
        /**
        * @methodSwap SetText_EBB7509C_H2E34482D
        */
        public SetText ($sourceText: string, $arg0: float, $arg1: float) : void
        /**
        * @methodSwap SetText_EBB7509C_H5A2628EA
        */
        public SetText ($sourceText: string, $arg0: float, $arg1: float, $arg2: float) : void
        /**
        * @methodSwap SetText_EBB7509C_H69E661A3
        */
        public SetText ($sourceText: string, $arg0: float, $arg1: float, $arg2: float, $arg3: float) : void
        /**
        * @methodSwap SetText_EBB7509C_H9E936374
        */
        public SetText ($sourceText: string, $arg0: float, $arg1: float, $arg2: float, $arg3: float, $arg4: float) : void
        /**
        * @methodSwap SetText_EBB7509C_F6A929B9
        */
        public SetText ($sourceText: string, $arg0: float, $arg1: float, $arg2: float, $arg3: float, $arg4: float, $arg5: float) : void
        /**
        * @methodSwap SetText_EBB7509C_AD83DD26
        */
        public SetText ($sourceText: string, $arg0: float, $arg1: float, $arg2: float, $arg3: float, $arg4: float, $arg5: float, $arg6: float) : void
        /**
        * @methodSwap SetText_EBB7509C_F9343DBF
        */
        public SetText ($sourceText: string, $arg0: float, $arg1: float, $arg2: float, $arg3: float, $arg4: float, $arg5: float, $arg6: float, $arg7: float) : void
        public SetText ($sourceText: System_Text.StringBuilder) : void
        public SetText ($sourceText: number[]) : void
        /**
        * @methodSwap SetText_EBB7509C_H3D977676
        */
        public SetText ($sourceText: number[], $start: int, $length: int) : void
        public SetCharArray ($sourceText: number[]) : void
        /**
        * @methodSwap SetCharArray_EBB7509C_H3D977676
        */
        public SetCharArray ($sourceText: number[], $start: int, $length: int) : void
        public GetPreferredValues () : UnityEngine.Vector2
        /**
        * @methodSwap GetPreferredValues_EBB7509C_H1075CF37
        */
        public GetPreferredValues ($width: float, $height: float) : UnityEngine.Vector2
        public GetPreferredValues ($text: string) : UnityEngine.Vector2
        /**
        * @methodSwap GetPreferredValues_EBB7509C_H2E34482D
        */
        public GetPreferredValues ($text: string, $width: float, $height: float) : UnityEngine.Vector2
        public GetRenderedValues () : UnityEngine.Vector2
        public GetRenderedValues ($onlyVisibleCharacters: boolean) : UnityEngine.Vector2
        public GetTextInfo ($text: string) : TMP_TextInfo
        public ComputeMarginSize () : void
        public ClearMesh () : void
        public ClearMesh ($uploadGeometry: boolean) : void
        public GetParsedText () : string
        public static add_OnFontAssetRequest ($value: System.Func$3<int, string, TMP_FontAsset>) : void
        public static add_OnSpriteAssetRequest ($value: System.Func$3<int, string, TMP_SpriteAsset>) : void
        public add_OnPreRenderText ($value: System.Action$1<TMP_TextInfo>) : void
        public static remove_OnFontAssetRequest ($value: System.Func$3<int, string, TMP_FontAsset>) : void
        public static remove_OnSpriteAssetRequest ($value: System.Func$3<int, string, TMP_SpriteAsset>) : void
        public remove_OnPreRenderText ($value: System.Action$1<TMP_TextInfo>) : void
        private constructor ()
    }

    enum TMP_VertexDataUpdateFlags {
        None = 0,
        Vertices = 1,
        Uv0 = 2,
        Uv2 = 4,
        Uv4 = 8,
        Colors32 = 16,
        All = 255 
    }

    class TMP_TextInfo extends System.Object {

        public textComponent : TMP_Text
        public characterCount : int
        public spriteCount : int
        public spaceCount : int
        public wordCount : int
        public linkCount : int
        public lineCount : int
        public pageCount : int
        public materialCount : int
        public characterInfo : TMP_CharacterInfo[]
        public wordInfo : TMP_WordInfo[]
        public linkInfo : TMP_LinkInfo[]
        public lineInfo : TMP_LineInfo[]
        public pageInfo : TMP_PageInfo[]
        public meshInfo : TMP_MeshInfo[]

        public constructor ()
        public constructor ($textComponent: TMP_Text)
        public Clear () : void
        public ClearMeshInfo ($updateMesh: boolean) : void
        public ClearAllMeshInfo () : void
        public ResetVertexLayout ($isVolumetric: boolean) : void
        public ClearUnusedVertices ($materials: MaterialReference[]) : void
        public ClearLineInfo () : void
        public CopyMeshInfoVertexData () : TMP_MeshInfo[]
        /**
        * @methodSwap Resize_EBB7509C_DE41C9E1
        */
        public static Resize<T> ($array: $Ref<T[]>, $size: int) : void
        /**
        * @methodSwap Resize_EBB7509C_H8FBDA18E
        */
        public static Resize<T> ($array: $Ref<T[]>, $size: int, $isBlockAllocated: boolean) : void
    }

    class TMP_MeshInfo extends System.ValueType {

        public mesh : UnityEngine.Mesh
        public vertexCount : int
        public vertices : UnityEngine.Vector3[]
        public normals : UnityEngine.Vector3[]
        public tangents : UnityEngine.Vector4[]
        public uvs0 : UnityEngine.Vector2[]
        public uvs2 : UnityEngine.Vector2[]
        public colors32 : UnityEngine.Color32[]
        public triangles : int[]
        public material : UnityEngine.Material

        public constructor ($mesh: UnityEngine.Mesh, $size: int)
        public constructor ($mesh: UnityEngine.Mesh, $size: int, $isVolumetric: boolean)
        /**
        * @methodSwap ResizeMeshInfo_EBB7509C_F92D023A
        */
        public ResizeMeshInfo ($size: int) : void
        /**
        * @methodSwap ResizeMeshInfo_EBB7509C_H5B11DF19
        */
        public ResizeMeshInfo ($size: int, $isVolumetric: boolean) : void
        public Clear () : void
        public Clear ($uploadChanges: boolean) : void
        public ClearUnusedVertices () : void
        /**
        * @methodSwap ClearUnusedVertices_EBB7509C_F92D023A
        */
        public ClearUnusedVertices ($startIndex: int) : void
        /**
        * @methodSwap ClearUnusedVertices_EBB7509C_H5B11DF19
        */
        public ClearUnusedVertices ($startIndex: int, $updateMesh: boolean) : void
        public SortGeometry ($order: VertexSortingOrder) : void
        public SortGeometry ($sortingOrder: System_Collections_Generic.IList$1<int>) : void
        public SwapVertexData ($src: int, $dst: int) : void
    }

    enum VertexSortingOrder {
        Normal = 0,
        Reverse = 1 
    }

    class TMP_WordInfo extends System.ValueType {

        public textComponent : TMP_Text
        public firstCharacterIndex : int
        public lastCharacterIndex : int
        public characterCount : int

        public GetWord () : string
    }

    class TMP_LinkInfo extends System.ValueType {

        public textComponent : TMP_Text
        public hashCode : int
        public linkIdFirstCharacterIndex : int
        public linkIdLength : int
        public linkTextfirstCharacterIndex : int
        public linkTextLength : int

        public GetLinkText () : string
        public GetLinkID () : string
    }

    class TMP_LineInfo extends System.ValueType {

        public characterCount : int
        public visibleCharacterCount : int
        public spaceCount : int
        public wordCount : int
        public firstCharacterIndex : int
        public firstVisibleCharacterIndex : int
        public lastCharacterIndex : int
        public lastVisibleCharacterIndex : int
        public length : float
        public lineHeight : float
        public ascender : float
        public baseline : float
        public descender : float
        public maxAdvance : float
        public width : float
        public marginLeft : float
        public marginRight : float
        public alignment : HorizontalAlignmentOptions
        public lineExtents : Extents

    }

    enum HorizontalAlignmentOptions {
        Left = 1,
        Center = 2,
        Right = 4,
        Justified = 8,
        Flush = 16,
        Geometry = 32 
    }

    class Extents extends System.ValueType {

        public min : UnityEngine.Vector2
        public max : UnityEngine.Vector2

        public constructor ($min: UnityEngine.Vector2, $max: UnityEngine.Vector2)
        public ToString () : string
    }

    class TMP_PageInfo extends System.ValueType {

        public firstCharacterIndex : int
        public lastCharacterIndex : int
        public ascender : float
        public baseLine : float
        public descender : float

    }

    class VertexGradient extends System.ValueType {

        public topLeft : UnityEngine.Color
        public topRight : UnityEngine.Color
        public bottomLeft : UnityEngine.Color
        public bottomRight : UnityEngine.Color

        public constructor ($color: UnityEngine.Color)
        public constructor ($color0: UnityEngine.Color, $color1: UnityEngine.Color, $color2: UnityEngine.Color, $color3: UnityEngine.Color)
    }

    class TMP_StyleSheet extends UnityEngine.ScriptableObject {

        private constructor ()
        /**
        * @methodSwap GetStyle_EBB7509C_F92D023A
        */
        public GetStyle ($hashCode: int) : TMP_Style
        public GetStyle ($name: string) : TMP_Style
        public RefreshStyles () : void
    }

    class TMP_Style extends System.Object {

        public static get NormalStyle(): TMP_Style;
        public get name(): string;
        public set name(value: string);
        public get hashCode(): int;
        public set hashCode(value: int);
        public get styleOpeningDefinition(): string;
        public get styleClosingDefinition(): string;
        public get styleOpeningTagArray(): int[];
        public get styleClosingTagArray(): int[];

        public RefreshStyle () : void
    }

    enum FontWeight {
        Thin = 100,
        ExtraLight = 200,
        Light = 300,
        Regular = 400,
        Medium = 500,
        SemiBold = 600,
        Bold = 700,
        Heavy = 800,
        Black = 900 
    }

    enum VerticalAlignmentOptions {
        Top = 256,
        Middle = 512,
        Bottom = 1024,
        Baseline = 2048,
        Geometry = 4096,
        Capline = 8192 
    }

    enum TextOverflowModes {
        Overflow = 0,
        Ellipsis = 1,
        Masking = 2,
        Truncate = 3,
        ScrollRect = 4,
        Page = 5,
        Linked = 6 
    }

    enum TextureMappingOptions {
        Character = 0,
        Line = 1,
        Paragraph = 2,
        MatchAspect = 3 
    }

    enum TextRenderFlags {
        DontRender = 0,
        Render = 255 
    }

    class FaceInfo_Legacy extends System.Object {

        public Name : string
        public PointSize : float
        public Scale : float
        public CharacterCount : int
        public LineHeight : float
        public Baseline : float
        public Ascender : float
        public CapHeight : float
        public Descender : float
        public CenterLine : float
        public SuperscriptOffset : float
        public SubscriptOffset : float
        public SubSize : float
        public Underline : float
        public UnderlineThickness : float
        public strikethrough : float
        public strikethroughThickness : float
        public TabWidth : float
        public Padding : float
        public AtlasWidth : float
        public AtlasHeight : float

        public constructor ()
    }

    class TMP_Glyph extends TMP_TextElement_Legacy {

        public id : int
        public x : float
        public y : float
        public width : float
        public height : float
        public xOffset : float
        public yOffset : float
        public xAdvance : float
        public scale : float

        public constructor ()
        public static Clone ($source: TMP_Glyph) : TMP_Glyph
    }

    class KerningPairKey extends System.ValueType {

        public ascii_Left : uint
        public ascii_Right : uint
        public key : uint

        public constructor ($ascii_left: uint, $ascii_right: uint)
    }

    class GlyphValueRecord_Legacy extends System.ValueType {

        public xPlacement : float
        public yPlacement : float
        public xAdvance : float
        public yAdvance : float

        public static op_Addition ($a: GlyphValueRecord_Legacy, $b: GlyphValueRecord_Legacy) : GlyphValueRecord_Legacy
    }

    class KerningPair extends System.Object {

        public xOffset : float
        public get firstGlyph(): uint;
        public set firstGlyph(value: uint);
        public get firstGlyphAdjustments(): GlyphValueRecord_Legacy;
        public get secondGlyph(): uint;
        public set secondGlyph(value: uint);
        public get secondGlyphAdjustments(): GlyphValueRecord_Legacy;
        public get ignoreSpacingAdjustments(): boolean;

        public constructor ()
        public constructor ($left: uint, $right: uint, $offset: float)
        public constructor ($firstGlyph: uint, $firstGlyphAdjustments: GlyphValueRecord_Legacy, $secondGlyph: uint, $secondGlyphAdjustments: GlyphValueRecord_Legacy)
    }

    class KerningTable extends System.Object {

        public kerningPairs : System_Collections_Generic.List$1<KerningPair>

        public constructor ()
        public AddKerningPair () : void
        /**
        * @methodSwap AddKerningPair_EBB7509C_H27DC8A5E
        */
        public AddKerningPair ($first: uint, $second: uint, $offset: float) : int
        public AddGlyphPairAdjustmentRecord ($first: uint, $firstAdjustments: GlyphValueRecord_Legacy, $second: uint, $secondAdjustments: GlyphValueRecord_Legacy) : int
        /**
        * @methodSwap RemoveKerningPair_EBB7509C_H2CFB2EE5
        */
        public RemoveKerningPair ($left: int, $right: int) : void
        /**
        * @methodSwap RemoveKerningPair_EBB7509C_F92D023A
        */
        public RemoveKerningPair ($index: int) : void
        public SortKerningPairs () : void
    }

    class TMP_FontUtilities {

        /**
        * @methodSwap SearchForCharacter_EBB7509C_FF0F7AAB
        */
        public static SearchForCharacter ($font: TMP_FontAsset, $unicode: uint, $character: $Ref<TMP_Character>) : TMP_FontAsset
        /**
        * @methodSwap SearchForCharacter_EBB7509C_H34041FF3
        */
        public static SearchForCharacter ($fonts: System_Collections_Generic.List$1<TMP_FontAsset>, $unicode: uint, $character: $Ref<TMP_Character>) : TMP_FontAsset
    }

    class TMP_FontAssetUtilities extends System.Object {

        public static get instance(): TMP_FontAssetUtilities;

        public constructor ()
        public static GetCharacterFromFontAsset ($unicode: uint, $sourceFontAsset: TMP_FontAsset, $includeFallbacks: boolean, $fontStyle: FontStyles, $fontWeight: FontWeight, $isAlternativeTypeface: $Ref<boolean>) : TMP_Character
        public static GetCharacterFromFontAssets ($unicode: uint, $sourceFontAsset: TMP_FontAsset, $fontAssets: System_Collections_Generic.List$1<TMP_FontAsset>, $includeFallbacks: boolean, $fontStyle: FontStyles, $fontWeight: FontWeight, $isAlternativeTypeface: $Ref<boolean>) : TMP_Character
        public static GetSpriteCharacterFromSpriteAsset ($unicode: uint, $spriteAsset: TMP_SpriteAsset, $includeFallbacks: boolean) : TMP_SpriteCharacter
    }

    class GlyphPairKey extends System.ValueType {

        public firstGlyphIndex : uint
        public secondGlyphIndex : uint
        public key : uint

        public constructor ($firstGlyphIndex: uint, $secondGlyphIndex: uint)
    }

    class TMP_InputField extends UnityEngine_UI.Selectable implements UnityEngine_EventSystems.ISubmitHandler, UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.IBeginDragHandler, UnityEngine_EventSystems.IDragHandler, UnityEngine_EventSystems.IEndDragHandler, UnityEngine_UI.ICanvasElement, UnityEngine_EventSystems.IScrollHandler, UnityEngine_EventSystems.IUpdateSelectedHandler, UnityEngine_UI.ILayoutElement {

        public get shouldHideMobileInput(): boolean;
        public set shouldHideMobileInput(value: boolean);
        public get shouldHideSoftKeyboard(): boolean;
        public set shouldHideSoftKeyboard(value: boolean);
        public get text(): string;
        public set text(value: string);
        public get isFocused(): boolean;
        public get caretBlinkRate(): float;
        public set caretBlinkRate(value: float);
        public get caretWidth(): int;
        public set caretWidth(value: int);
        public get textViewport(): UnityEngine.RectTransform;
        public set textViewport(value: UnityEngine.RectTransform);
        public get textComponent(): TMP_Text;
        public set textComponent(value: TMP_Text);
        public get placeholder(): UnityEngine_UI.Graphic;
        public set placeholder(value: UnityEngine_UI.Graphic);
        public get verticalScrollbar(): UnityEngine_UI.Scrollbar;
        public set verticalScrollbar(value: UnityEngine_UI.Scrollbar);
        public get scrollSensitivity(): float;
        public set scrollSensitivity(value: float);
        public get caretColor(): UnityEngine.Color;
        public set caretColor(value: UnityEngine.Color);
        public get customCaretColor(): boolean;
        public set customCaretColor(value: boolean);
        public get selectionColor(): UnityEngine.Color;
        public set selectionColor(value: UnityEngine.Color);
        public get onEndEdit(): TMPro_TMP_InputField.SubmitEvent;
        public set onEndEdit(value: TMPro_TMP_InputField.SubmitEvent);
        public get onSubmit(): TMPro_TMP_InputField.SubmitEvent;
        public set onSubmit(value: TMPro_TMP_InputField.SubmitEvent);
        public get onSelect(): TMPro_TMP_InputField.SelectionEvent;
        public set onSelect(value: TMPro_TMP_InputField.SelectionEvent);
        public get onDeselect(): TMPro_TMP_InputField.SelectionEvent;
        public set onDeselect(value: TMPro_TMP_InputField.SelectionEvent);
        public get onTextSelection(): TMPro_TMP_InputField.TextSelectionEvent;
        public set onTextSelection(value: TMPro_TMP_InputField.TextSelectionEvent);
        public get onEndTextSelection(): TMPro_TMP_InputField.TextSelectionEvent;
        public set onEndTextSelection(value: TMPro_TMP_InputField.TextSelectionEvent);
        public get onValueChanged(): TMPro_TMP_InputField.OnChangeEvent;
        public set onValueChanged(value: TMPro_TMP_InputField.OnChangeEvent);
        public get onTouchScreenKeyboardStatusChanged(): TMPro_TMP_InputField.TouchScreenKeyboardEvent;
        public set onTouchScreenKeyboardStatusChanged(value: TMPro_TMP_InputField.TouchScreenKeyboardEvent);
        public get onValidateInput(): TMPro_TMP_InputField.OnValidateInput;
        public set onValidateInput(value: TMPro_TMP_InputField.OnValidateInput);
        public get characterLimit(): int;
        public set characterLimit(value: int);
        public get pointSize(): float;
        public set pointSize(value: float);
        public get fontAsset(): TMP_FontAsset;
        public set fontAsset(value: TMP_FontAsset);
        public get onFocusSelectAll(): boolean;
        public set onFocusSelectAll(value: boolean);
        public get resetOnDeActivation(): boolean;
        public set resetOnDeActivation(value: boolean);
        public get restoreOriginalTextOnEscape(): boolean;
        public set restoreOriginalTextOnEscape(value: boolean);
        public get isRichTextEditingAllowed(): boolean;
        public set isRichTextEditingAllowed(value: boolean);
        public get contentType(): TMPro_TMP_InputField.ContentType;
        public set contentType(value: TMPro_TMP_InputField.ContentType);
        public get lineType(): TMPro_TMP_InputField.LineType;
        public set lineType(value: TMPro_TMP_InputField.LineType);
        public get lineLimit(): int;
        public set lineLimit(value: int);
        public get inputType(): TMPro_TMP_InputField.InputType;
        public set inputType(value: TMPro_TMP_InputField.InputType);
        public get keyboardType(): UnityEngine.TouchScreenKeyboardType;
        public set keyboardType(value: UnityEngine.TouchScreenKeyboardType);
        public get characterValidation(): TMPro_TMP_InputField.CharacterValidation;
        public set characterValidation(value: TMPro_TMP_InputField.CharacterValidation);
        public get inputValidator(): TMP_InputValidator;
        public set inputValidator(value: TMP_InputValidator);
        public get readOnly(): boolean;
        public set readOnly(value: boolean);
        public get richText(): boolean;
        public set richText(value: boolean);
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
        public get stringPosition(): int;
        public set stringPosition(value: int);
        public get selectionStringAnchorPosition(): int;
        public set selectionStringAnchorPosition(value: int);
        public get selectionStringFocusPosition(): int;
        public set selectionStringFocusPosition(value: int);
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
        public MoveToEndOfLine ($shift: boolean, $ctrl: boolean) : void
        public MoveToStartOfLine ($shift: boolean, $ctrl: boolean) : void
        public OnBeginDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnEndDrag ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnPointerDown ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public ProcessEvent ($e: UnityEngine.Event) : void
        public OnUpdateSelected ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnScroll ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public ForceLabelUpdate () : void
        public Rebuild ($update: UnityEngine_UI.CanvasUpdate) : void
        public LayoutComplete () : void
        public GraphicUpdateComplete () : void
        public ActivateInputField () : void
        public OnSelect ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnPointerClick ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnControlClick () : void
        public ReleaseSelection () : void
        public DeactivateInputField ($clearSelection?: boolean) : void
        public OnDeselect ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnSubmit ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        public SetGlobalPointSize ($pointSize: float) : void
        public SetGlobalFontAsset ($fontAsset: TMP_FontAsset) : void
        private constructor ()
    }

    class TMP_InputValidator extends UnityEngine.ScriptableObject {

        public Validate ($text: $Ref<string>, $pos: $Ref<int>, $ch: number) : number
        private constructor ()
    }

    class TMP_MaterialManager {

        public static GetStencilMaterial ($baseMaterial: UnityEngine.Material, $stencilID: int) : UnityEngine.Material
        public static ReleaseStencilMaterial ($stencilMaterial: UnityEngine.Material) : void
        public static GetBaseMaterial ($stencilMaterial: UnityEngine.Material) : UnityEngine.Material
        public static SetStencil ($material: UnityEngine.Material, $stencilID: int) : UnityEngine.Material
        public static AddMaskingMaterial ($baseMaterial: UnityEngine.Material, $stencilMaterial: UnityEngine.Material, $stencilID: int) : void
        public static RemoveStencilMaterial ($stencilMaterial: UnityEngine.Material) : void
        public static ReleaseBaseMaterial ($baseMaterial: UnityEngine.Material) : void
        public static ClearMaterials () : void
        public static GetStencilID ($obj: UnityEngine.GameObject) : int
        public static GetMaterialForRendering ($graphic: UnityEngine_UI.MaskableGraphic, $baseMaterial: UnityEngine.Material) : UnityEngine.Material
        public static GetFallbackMaterial ($sourceMaterial: UnityEngine.Material, $targetMaterial: UnityEngine.Material) : UnityEngine.Material
        public static AddFallbackMaterialReference ($targetMaterial: UnityEngine.Material) : void
        public static RemoveFallbackMaterialReference ($targetMaterial: UnityEngine.Material) : void
        public static CleanupFallbackMaterials () : void
        public static ReleaseFallbackMaterial ($fallbackMaterial: UnityEngine.Material) : void
        public static CopyMaterialPresetProperties ($source: UnityEngine.Material, $destination: UnityEngine.Material) : void
    }

    class TMP_ResourceManager extends System.Object {

        public constructor ()
        public static AddFontAsset ($fontAsset: TMP_FontAsset) : void
        public static TryGetFontAsset ($hashcode: int, $fontAsset: $Ref<TMP_FontAsset>) : boolean
    }

    enum TagValueType {
        None = 0,
        NumericalValue = 1,
        StringValue = 2,
        ColorValue = 4 
    }

    enum TagUnitType {
        Pixels = 0,
        FontUnits = 1,
        Percentage = 2 
    }

    class TMP_ScrollbarEventHandler extends UnityEngine.MonoBehaviour implements UnityEngine_EventSystems.IPointerClickHandler, UnityEngine_EventSystems.ISelectHandler, UnityEngine_EventSystems.IDeselectHandler {

        public isSelected : boolean

        private constructor ()
        public OnPointerClick ($eventData: UnityEngine_EventSystems.PointerEventData) : void
        public OnSelect ($eventData: UnityEngine_EventSystems.BaseEventData) : void
        public OnDeselect ($eventData: UnityEngine_EventSystems.BaseEventData) : void
    }

    class TMP_SelectionCaret extends UnityEngine_UI.MaskableGraphic {

        private constructor ()
        public Cull ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
    }

    class TMP_Settings extends UnityEngine.ScriptableObject {

        public static get version(): string;
        public static get enableWordWrapping(): boolean;
        public static get enableKerning(): boolean;
        public static get enableExtraPadding(): boolean;
        public static get enableTintAllSprites(): boolean;
        public static get enableParseEscapeCharacters(): boolean;
        public static get enableRaycastTarget(): boolean;
        public static get getFontFeaturesAtRuntime(): boolean;
        public static get missingGlyphCharacter(): int;
        public static set missingGlyphCharacter(value: int);
        public static get warningsDisabled(): boolean;
        public static get defaultFontAsset(): TMP_FontAsset;
        public static get defaultFontAssetPath(): string;
        public static get defaultFontSize(): float;
        public static get defaultTextAutoSizingMinRatio(): float;
        public static get defaultTextAutoSizingMaxRatio(): float;
        public static get defaultTextMeshProTextContainerSize(): UnityEngine.Vector2;
        public static get defaultTextMeshProUITextContainerSize(): UnityEngine.Vector2;
        public static get autoSizeTextContainer(): boolean;
        public static get isTextObjectScaleStatic(): boolean;
        public static set isTextObjectScaleStatic(value: boolean);
        public static get fallbackFontAssets(): System_Collections_Generic.List$1<TMP_FontAsset>;
        public static get matchMaterialPreset(): boolean;
        public static get defaultSpriteAsset(): TMP_SpriteAsset;
        public static get defaultSpriteAssetPath(): string;
        public static get enableEmojiSupport(): boolean;
        public static set enableEmojiSupport(value: boolean);
        public static get missingCharacterSpriteUnicode(): uint;
        public static set missingCharacterSpriteUnicode(value: uint);
        public static get defaultColorGradientPresetsPath(): string;
        public static get defaultStyleSheet(): TMP_StyleSheet;
        public static get styleSheetsResourcePath(): string;
        public static get leadingCharacters(): UnityEngine.TextAsset;
        public static get followingCharacters(): UnityEngine.TextAsset;
        public static get linebreakingRules(): TMPro_TMP_Settings.LineBreakingTable;
        public static get useModernHangulLineBreakingRules(): boolean;
        public static set useModernHangulLineBreakingRules(value: boolean);
        public static get instance(): TMP_Settings;

        private constructor ()
        public static LoadDefaultSettings () : TMP_Settings
        public static GetSettings () : TMP_Settings
        public static GetFontAsset () : TMP_FontAsset
        public static GetSpriteAsset () : TMP_SpriteAsset
        public static GetStyleSheet () : TMP_StyleSheet
        public static LoadLinebreakingRules () : void
    }

    class ShaderUtilities {

        public static ID_MainTex : int
        public static ID_FaceTex : int
        public static ID_FaceColor : int
        public static ID_FaceDilate : int
        public static ID_Shininess : int
        public static ID_UnderlayColor : int
        public static ID_UnderlayOffsetX : int
        public static ID_UnderlayOffsetY : int
        public static ID_UnderlayDilate : int
        public static ID_UnderlaySoftness : int
        public static ID_UnderlayOffset : int
        public static ID_UnderlayIsoPerimeter : int
        public static ID_WeightNormal : int
        public static ID_WeightBold : int
        public static ID_OutlineTex : int
        public static ID_OutlineWidth : int
        public static ID_OutlineSoftness : int
        public static ID_OutlineColor : int
        public static ID_Outline2Color : int
        public static ID_Outline2Width : int
        public static ID_Padding : int
        public static ID_GradientScale : int
        public static ID_ScaleX : int
        public static ID_ScaleY : int
        public static ID_PerspectiveFilter : int
        public static ID_Sharpness : int
        public static ID_TextureWidth : int
        public static ID_TextureHeight : int
        public static ID_BevelAmount : int
        public static ID_GlowColor : int
        public static ID_GlowOffset : int
        public static ID_GlowPower : int
        public static ID_GlowOuter : int
        public static ID_GlowInner : int
        public static ID_LightAngle : int
        public static ID_EnvMap : int
        public static ID_EnvMatrix : int
        public static ID_EnvMatrixRotation : int
        public static ID_MaskCoord : int
        public static ID_ClipRect : int
        public static ID_MaskSoftnessX : int
        public static ID_MaskSoftnessY : int
        public static ID_VertexOffsetX : int
        public static ID_VertexOffsetY : int
        public static ID_UseClipRect : int
        public static ID_StencilID : int
        public static ID_StencilOp : int
        public static ID_StencilComp : int
        public static ID_StencilReadMask : int
        public static ID_StencilWriteMask : int
        public static ID_ShaderFlags : int
        public static ID_ScaleRatio_A : int
        public static ID_ScaleRatio_B : int
        public static ID_ScaleRatio_C : int
        public static Keyword_Bevel : string
        public static Keyword_Glow : string
        public static Keyword_Underlay : string
        public static Keyword_Ratios : string
        public static Keyword_MASK_SOFT : string
        public static Keyword_MASK_HARD : string
        public static Keyword_MASK_TEX : string
        public static Keyword_Outline : string
        public static ShaderTag_ZTestMode : string
        public static ShaderTag_CullMode : string
        public static isInitialized : boolean

        public static GetShaderPropertyIDs () : void
        public static UpdateShaderRatios ($mat: UnityEngine.Material) : void
        public static GetFontExtent ($material: UnityEngine.Material) : UnityEngine.Vector4
        public static IsMaskingEnabled ($material: UnityEngine.Material) : boolean
        public static GetPadding ($material: UnityEngine.Material, $enableExtraPadding: boolean, $isBold: boolean) : float
        public static GetPadding ($materials: UnityEngine.Material[], $enableExtraPadding: boolean, $isBold: boolean) : float
    }

    class TMP_SpriteAnimator extends UnityEngine.MonoBehaviour {

        private constructor ()
        public StopAllAnimations () : void
        public DoSpriteAnimation ($currentCharacter: int, $spriteAsset: TMP_SpriteAsset, $start: int, $end: int, $framerate: int) : void
    }

    class TMP_SubMesh extends UnityEngine.MonoBehaviour {

        public get fontAsset(): TMP_FontAsset;
        public set fontAsset(value: TMP_FontAsset);
        public get spriteAsset(): TMP_SpriteAsset;
        public set spriteAsset(value: TMP_SpriteAsset);
        public get material(): UnityEngine.Material;
        public set material(value: UnityEngine.Material);
        public get sharedMaterial(): UnityEngine.Material;
        public set sharedMaterial(value: UnityEngine.Material);
        public get fallbackMaterial(): UnityEngine.Material;
        public set fallbackMaterial(value: UnityEngine.Material);
        public get fallbackSourceMaterial(): UnityEngine.Material;
        public set fallbackSourceMaterial(value: UnityEngine.Material);
        public get isDefaultMaterial(): boolean;
        public set isDefaultMaterial(value: boolean);
        public get padding(): float;
        public set padding(value: float);
        public get renderer(): UnityEngine.Renderer;
        public get meshFilter(): UnityEngine.MeshFilter;
        public get mesh(): UnityEngine.Mesh;
        public set mesh(value: UnityEngine.Mesh);
        public get textComponent(): TMP_Text;

        private constructor ()
        public static AddSubTextObject ($textComponent: TextMeshPro, $materialReference: MaterialReference) : TMP_SubMesh
        public DestroySelf () : void
        public GetPaddingForMaterial () : float
        public UpdateMeshPadding ($isExtraPadding: boolean, $isUsingBold: boolean) : void
        public SetVerticesDirty () : void
        public SetMaterialDirty () : void
    }

    class TextMeshPro extends TMP_Text implements UnityEngine_UI.ILayoutElement {

        public get text(): string;
        public set text(value: string);
        public get textPreprocessor(): ITextPreprocessor;
        public set textPreprocessor(value: ITextPreprocessor);
        public get isRightToLeftText(): boolean;
        public set isRightToLeftText(value: boolean);
        public get font(): TMP_FontAsset;
        public set font(value: TMP_FontAsset);
        public get fontSharedMaterial(): UnityEngine.Material;
        public set fontSharedMaterial(value: UnityEngine.Material);
        public get fontSharedMaterials(): UnityEngine.Material[];
        public set fontSharedMaterials(value: UnityEngine.Material[]);
        public get fontMaterial(): UnityEngine.Material;
        public set fontMaterial(value: UnityEngine.Material);
        public get fontMaterials(): UnityEngine.Material[];
        public set fontMaterials(value: UnityEngine.Material[]);
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        public get alpha(): float;
        public set alpha(value: float);
        public get enableVertexGradient(): boolean;
        public set enableVertexGradient(value: boolean);
        public get colorGradient(): VertexGradient;
        public set colorGradient(value: VertexGradient);
        public get colorGradientPreset(): TMP_ColorGradient;
        public set colorGradientPreset(value: TMP_ColorGradient);
        public get spriteAsset(): TMP_SpriteAsset;
        public set spriteAsset(value: TMP_SpriteAsset);
        public get tintAllSprites(): boolean;
        public set tintAllSprites(value: boolean);
        public get styleSheet(): TMP_StyleSheet;
        public set styleSheet(value: TMP_StyleSheet);
        public get textStyle(): TMP_Style;
        public set textStyle(value: TMP_Style);
        public get overrideColorTags(): boolean;
        public set overrideColorTags(value: boolean);
        public get faceColor(): UnityEngine.Color32;
        public set faceColor(value: UnityEngine.Color32);
        public get outlineColor(): UnityEngine.Color32;
        public set outlineColor(value: UnityEngine.Color32);
        public get outlineWidth(): float;
        public set outlineWidth(value: float);
        public get fontSize(): float;
        public set fontSize(value: float);
        public get fontWeight(): FontWeight;
        public set fontWeight(value: FontWeight);
        public get pixelsPerUnit(): float;
        public get enableAutoSizing(): boolean;
        public set enableAutoSizing(value: boolean);
        public get fontSizeMin(): float;
        public set fontSizeMin(value: float);
        public get fontSizeMax(): float;
        public set fontSizeMax(value: float);
        public get fontStyle(): FontStyles;
        public set fontStyle(value: FontStyles);
        public get isUsingBold(): boolean;
        public get horizontalAlignment(): HorizontalAlignmentOptions;
        public set horizontalAlignment(value: HorizontalAlignmentOptions);
        public get verticalAlignment(): VerticalAlignmentOptions;
        public set verticalAlignment(value: VerticalAlignmentOptions);
        public get alignment(): TextAlignmentOptions;
        public set alignment(value: TextAlignmentOptions);
        public get characterSpacing(): float;
        public set characterSpacing(value: float);
        public get wordSpacing(): float;
        public set wordSpacing(value: float);
        public get lineSpacing(): float;
        public set lineSpacing(value: float);
        public get lineSpacingAdjustment(): float;
        public set lineSpacingAdjustment(value: float);
        public get paragraphSpacing(): float;
        public set paragraphSpacing(value: float);
        public get characterWidthAdjustment(): float;
        public set characterWidthAdjustment(value: float);
        public get enableWordWrapping(): boolean;
        public set enableWordWrapping(value: boolean);
        public get wordWrappingRatios(): float;
        public set wordWrappingRatios(value: float);
        public get overflowMode(): TextOverflowModes;
        public set overflowMode(value: TextOverflowModes);
        public get isTextOverflowing(): boolean;
        public get firstOverflowCharacterIndex(): int;
        public get linkedTextComponent(): TMP_Text;
        public set linkedTextComponent(value: TMP_Text);
        public get isTextTruncated(): boolean;
        public get enableKerning(): boolean;
        public set enableKerning(value: boolean);
        public get extraPadding(): boolean;
        public set extraPadding(value: boolean);
        public get richText(): boolean;
        public set richText(value: boolean);
        public get parseCtrlCharacters(): boolean;
        public set parseCtrlCharacters(value: boolean);
        public get isOverlay(): boolean;
        public set isOverlay(value: boolean);
        public get isOrthographic(): boolean;
        public set isOrthographic(value: boolean);
        public get enableCulling(): boolean;
        public set enableCulling(value: boolean);
        public get ignoreVisibility(): boolean;
        public set ignoreVisibility(value: boolean);
        public get horizontalMapping(): TextureMappingOptions;
        public set horizontalMapping(value: TextureMappingOptions);
        public get verticalMapping(): TextureMappingOptions;
        public set verticalMapping(value: TextureMappingOptions);
        public get mappingUvLineOffset(): float;
        public set mappingUvLineOffset(value: float);
        public get renderMode(): TextRenderFlags;
        public set renderMode(value: TextRenderFlags);
        public get geometrySortingOrder(): VertexSortingOrder;
        public set geometrySortingOrder(value: VertexSortingOrder);
        public get isTextObjectScaleStatic(): boolean;
        public set isTextObjectScaleStatic(value: boolean);
        public get vertexBufferAutoSizeReduction(): boolean;
        public set vertexBufferAutoSizeReduction(value: boolean);
        public get firstVisibleCharacter(): int;
        public set firstVisibleCharacter(value: int);
        public get maxVisibleCharacters(): int;
        public set maxVisibleCharacters(value: int);
        public get maxVisibleWords(): int;
        public set maxVisibleWords(value: int);
        public get maxVisibleLines(): int;
        public set maxVisibleLines(value: int);
        public get useMaxVisibleDescender(): boolean;
        public set useMaxVisibleDescender(value: boolean);
        public get pageToDisplay(): int;
        public set pageToDisplay(value: int);
        public get margin(): UnityEngine.Vector4;
        public set margin(value: UnityEngine.Vector4);
        public get textInfo(): TMP_TextInfo;
        public get havePropertiesChanged(): boolean;
        public set havePropertiesChanged(value: boolean);
        public get isUsingLegacyAnimationComponent(): boolean;
        public set isUsingLegacyAnimationComponent(value: boolean);
        public get transform(): UnityEngine.Transform;
        public get rectTransform(): UnityEngine.RectTransform;
        public get autoSizeTextContainer(): boolean;
        public set autoSizeTextContainer(value: boolean);
        public get mesh(): UnityEngine.Mesh;
        public get isVolumetricText(): boolean;
        public set isVolumetricText(value: boolean);
        public get bounds(): UnityEngine.Bounds;
        public get textBounds(): UnityEngine.Bounds;
        public get flexibleHeight(): float;
        public get flexibleWidth(): float;
        public get minWidth(): float;
        public get minHeight(): float;
        public get maxWidth(): float;
        public get maxHeight(): float;
        public get preferredWidth(): float;
        public get preferredHeight(): float;
        public get renderedWidth(): float;
        public get renderedHeight(): float;
        public get layoutPriority(): int;
        public get sortingLayerID(): int;
        public set sortingLayerID(value: int);
        public get sortingOrder(): int;
        public set sortingOrder(value: int);
        public get renderer(): UnityEngine.Renderer;
        public get meshFilter(): UnityEngine.MeshFilter;
        public get maskType(): MaskingTypes;
        public set maskType(value: MaskingTypes);

        private constructor ()
        public ComputeMarginSize () : void
        public SetMask ($type: MaskingTypes, $maskCoords: UnityEngine.Vector4) : void
        /**
        * @methodSwap SetMask_EBB7509C_DD4A6DA
        */
        public SetMask ($type: MaskingTypes, $maskCoords: UnityEngine.Vector4, $softnessX: float, $softnessY: float) : void
        public SetVerticesDirty () : void
        public SetLayoutDirty () : void
        public SetMaterialDirty () : void
        public SetAllDirty () : void
        public Rebuild ($update: UnityEngine_UI.CanvasUpdate) : void
        public UpdateMeshPadding () : void
        public ForceMeshUpdate ($ignoreActiveState?: boolean, $forceTextReparsing?: boolean) : void
        public GetTextInfo ($text: string) : TMP_TextInfo
        public ClearMesh ($updateMesh: boolean) : void
        public UpdateGeometry ($mesh: UnityEngine.Mesh, $index: int) : void
        public UpdateVertexData ($flags: TMP_VertexDataUpdateFlags) : void
        public UpdateVertexData () : void
        public UpdateFontAsset () : void
        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        public add_OnPreRenderText ($value: System.Action$1<TMP_TextInfo>) : void
        public remove_OnPreRenderText ($value: System.Action$1<TMP_TextInfo>) : void
        public ClearMesh () : void
    }

    enum MaskingTypes {
        MaskOff = 0,
        MaskHard = 1,
        MaskSoft = 2 
    }

    class TMP_SubMeshUI extends UnityEngine_UI.MaskableGraphic {

        public get fontAsset(): TMP_FontAsset;
        public set fontAsset(value: TMP_FontAsset);
        public get spriteAsset(): TMP_SpriteAsset;
        public set spriteAsset(value: TMP_SpriteAsset);
        public get mainTexture(): UnityEngine.Texture;
        public get material(): UnityEngine.Material;
        public set material(value: UnityEngine.Material);
        public get sharedMaterial(): UnityEngine.Material;
        public set sharedMaterial(value: UnityEngine.Material);
        public get fallbackMaterial(): UnityEngine.Material;
        public set fallbackMaterial(value: UnityEngine.Material);
        public get fallbackSourceMaterial(): UnityEngine.Material;
        public set fallbackSourceMaterial(value: UnityEngine.Material);
        public get materialForRendering(): UnityEngine.Material;
        public get isDefaultMaterial(): boolean;
        public set isDefaultMaterial(value: boolean);
        public get padding(): float;
        public set padding(value: float);
        public get mesh(): UnityEngine.Mesh;
        public set mesh(value: UnityEngine.Mesh);
        public get textComponent(): TMP_Text;

        private constructor ()
        public static AddSubTextObject ($textComponent: TextMeshProUGUI, $materialReference: MaterialReference) : TMP_SubMeshUI
        public GetModifiedMaterial ($baseMaterial: UnityEngine.Material) : UnityEngine.Material
        public GetPaddingForMaterial () : float
        public GetPaddingForMaterial ($mat: UnityEngine.Material) : float
        public UpdateMeshPadding ($isExtraPadding: boolean, $isUsingBold: boolean) : void
        public SetAllDirty () : void
        public SetVerticesDirty () : void
        public SetLayoutDirty () : void
        public SetMaterialDirty () : void
        public SetPivotDirty () : void
        public Cull ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
        public Rebuild ($update: UnityEngine_UI.CanvasUpdate) : void
        public RefreshMaterial () : void
        public RecalculateClipping () : void
    }

    class TextMeshProUGUI extends TMP_Text implements UnityEngine_UI.ILayoutElement {

        public get text(): string;
        public set text(value: string);
        public get textPreprocessor(): ITextPreprocessor;
        public set textPreprocessor(value: ITextPreprocessor);
        public get isRightToLeftText(): boolean;
        public set isRightToLeftText(value: boolean);
        public get font(): TMP_FontAsset;
        public set font(value: TMP_FontAsset);
        public get fontSharedMaterial(): UnityEngine.Material;
        public set fontSharedMaterial(value: UnityEngine.Material);
        public get fontSharedMaterials(): UnityEngine.Material[];
        public set fontSharedMaterials(value: UnityEngine.Material[]);
        public get fontMaterial(): UnityEngine.Material;
        public set fontMaterial(value: UnityEngine.Material);
        public get fontMaterials(): UnityEngine.Material[];
        public set fontMaterials(value: UnityEngine.Material[]);
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        public get alpha(): float;
        public set alpha(value: float);
        public get enableVertexGradient(): boolean;
        public set enableVertexGradient(value: boolean);
        public get colorGradient(): VertexGradient;
        public set colorGradient(value: VertexGradient);
        public get colorGradientPreset(): TMP_ColorGradient;
        public set colorGradientPreset(value: TMP_ColorGradient);
        public get spriteAsset(): TMP_SpriteAsset;
        public set spriteAsset(value: TMP_SpriteAsset);
        public get tintAllSprites(): boolean;
        public set tintAllSprites(value: boolean);
        public get styleSheet(): TMP_StyleSheet;
        public set styleSheet(value: TMP_StyleSheet);
        public get textStyle(): TMP_Style;
        public set textStyle(value: TMP_Style);
        public get overrideColorTags(): boolean;
        public set overrideColorTags(value: boolean);
        public get faceColor(): UnityEngine.Color32;
        public set faceColor(value: UnityEngine.Color32);
        public get outlineColor(): UnityEngine.Color32;
        public set outlineColor(value: UnityEngine.Color32);
        public get outlineWidth(): float;
        public set outlineWidth(value: float);
        public get fontSize(): float;
        public set fontSize(value: float);
        public get fontWeight(): FontWeight;
        public set fontWeight(value: FontWeight);
        public get pixelsPerUnit(): float;
        public get enableAutoSizing(): boolean;
        public set enableAutoSizing(value: boolean);
        public get fontSizeMin(): float;
        public set fontSizeMin(value: float);
        public get fontSizeMax(): float;
        public set fontSizeMax(value: float);
        public get fontStyle(): FontStyles;
        public set fontStyle(value: FontStyles);
        public get isUsingBold(): boolean;
        public get horizontalAlignment(): HorizontalAlignmentOptions;
        public set horizontalAlignment(value: HorizontalAlignmentOptions);
        public get verticalAlignment(): VerticalAlignmentOptions;
        public set verticalAlignment(value: VerticalAlignmentOptions);
        public get alignment(): TextAlignmentOptions;
        public set alignment(value: TextAlignmentOptions);
        public get characterSpacing(): float;
        public set characterSpacing(value: float);
        public get wordSpacing(): float;
        public set wordSpacing(value: float);
        public get lineSpacing(): float;
        public set lineSpacing(value: float);
        public get lineSpacingAdjustment(): float;
        public set lineSpacingAdjustment(value: float);
        public get paragraphSpacing(): float;
        public set paragraphSpacing(value: float);
        public get characterWidthAdjustment(): float;
        public set characterWidthAdjustment(value: float);
        public get enableWordWrapping(): boolean;
        public set enableWordWrapping(value: boolean);
        public get wordWrappingRatios(): float;
        public set wordWrappingRatios(value: float);
        public get overflowMode(): TextOverflowModes;
        public set overflowMode(value: TextOverflowModes);
        public get isTextOverflowing(): boolean;
        public get firstOverflowCharacterIndex(): int;
        public get linkedTextComponent(): TMP_Text;
        public set linkedTextComponent(value: TMP_Text);
        public get isTextTruncated(): boolean;
        public get enableKerning(): boolean;
        public set enableKerning(value: boolean);
        public get extraPadding(): boolean;
        public set extraPadding(value: boolean);
        public get richText(): boolean;
        public set richText(value: boolean);
        public get parseCtrlCharacters(): boolean;
        public set parseCtrlCharacters(value: boolean);
        public get isOverlay(): boolean;
        public set isOverlay(value: boolean);
        public get isOrthographic(): boolean;
        public set isOrthographic(value: boolean);
        public get enableCulling(): boolean;
        public set enableCulling(value: boolean);
        public get ignoreVisibility(): boolean;
        public set ignoreVisibility(value: boolean);
        public get horizontalMapping(): TextureMappingOptions;
        public set horizontalMapping(value: TextureMappingOptions);
        public get verticalMapping(): TextureMappingOptions;
        public set verticalMapping(value: TextureMappingOptions);
        public get mappingUvLineOffset(): float;
        public set mappingUvLineOffset(value: float);
        public get renderMode(): TextRenderFlags;
        public set renderMode(value: TextRenderFlags);
        public get geometrySortingOrder(): VertexSortingOrder;
        public set geometrySortingOrder(value: VertexSortingOrder);
        public get isTextObjectScaleStatic(): boolean;
        public set isTextObjectScaleStatic(value: boolean);
        public get vertexBufferAutoSizeReduction(): boolean;
        public set vertexBufferAutoSizeReduction(value: boolean);
        public get firstVisibleCharacter(): int;
        public set firstVisibleCharacter(value: int);
        public get maxVisibleCharacters(): int;
        public set maxVisibleCharacters(value: int);
        public get maxVisibleWords(): int;
        public set maxVisibleWords(value: int);
        public get maxVisibleLines(): int;
        public set maxVisibleLines(value: int);
        public get useMaxVisibleDescender(): boolean;
        public set useMaxVisibleDescender(value: boolean);
        public get pageToDisplay(): int;
        public set pageToDisplay(value: int);
        public get margin(): UnityEngine.Vector4;
        public set margin(value: UnityEngine.Vector4);
        public get textInfo(): TMP_TextInfo;
        public get havePropertiesChanged(): boolean;
        public set havePropertiesChanged(value: boolean);
        public get isUsingLegacyAnimationComponent(): boolean;
        public set isUsingLegacyAnimationComponent(value: boolean);
        public get transform(): UnityEngine.Transform;
        public get rectTransform(): UnityEngine.RectTransform;
        public get autoSizeTextContainer(): boolean;
        public set autoSizeTextContainer(value: boolean);
        public get mesh(): UnityEngine.Mesh;
        public get isVolumetricText(): boolean;
        public set isVolumetricText(value: boolean);
        public get bounds(): UnityEngine.Bounds;
        public get textBounds(): UnityEngine.Bounds;
        public get flexibleHeight(): float;
        public get flexibleWidth(): float;
        public get minWidth(): float;
        public get minHeight(): float;
        public get maxWidth(): float;
        public get maxHeight(): float;
        public get preferredWidth(): float;
        public get preferredHeight(): float;
        public get renderedWidth(): float;
        public get renderedHeight(): float;
        public get layoutPriority(): int;
        public get materialForRendering(): UnityEngine.Material;
        public get canvasRenderer(): UnityEngine.CanvasRenderer;
        public get maskOffset(): UnityEngine.Vector4;
        public set maskOffset(value: UnityEngine.Vector4);

        private constructor ()
        public ComputeMarginSize () : void
        public CalculateLayoutInputHorizontal () : void
        public CalculateLayoutInputVertical () : void
        public SetVerticesDirty () : void
        public SetLayoutDirty () : void
        public SetMaterialDirty () : void
        public SetAllDirty () : void
        public Rebuild ($update: UnityEngine_UI.CanvasUpdate) : void
        public GetModifiedMaterial ($baseMaterial: UnityEngine.Material) : UnityEngine.Material
        public RecalculateClipping () : void
        public Cull ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
        public UpdateMeshPadding () : void
        public ForceMeshUpdate ($ignoreActiveState?: boolean, $forceTextReparsing?: boolean) : void
        public GetTextInfo ($text: string) : TMP_TextInfo
        public ClearMesh () : void
        public UpdateGeometry ($mesh: UnityEngine.Mesh, $index: int) : void
        public UpdateVertexData ($flags: TMP_VertexDataUpdateFlags) : void
        public UpdateVertexData () : void
        public UpdateFontAsset () : void
        public add_OnPreRenderText ($value: System.Action$1<TMP_TextInfo>) : void
        public remove_OnPreRenderText ($value: System.Action$1<TMP_TextInfo>) : void
        public ClearMesh ($uploadGeometry: boolean) : void
    }

    interface ITextElement {

        readonly sharedMaterial? : UnityEngine.Material

        Rebuild? ($update: UnityEngine_UI.CanvasUpdate) : void
        GetInstanceID? () : int
    }

    enum MaskingOffsetMode {
        Percentage = 0,
        Pixel = 1 
    }

    class TMP_TextParsingUtilities extends System.Object {

        public static get instance(): TMP_TextParsingUtilities;

        public constructor ()
        public static GetHashCode ($s: string) : int
        public static GetHashCodeCaseSensitive ($s: string) : int
        public static ToLowerASCIIFast ($c: number) : number
        public static ToUpperASCIIFast ($c: number) : number
        /**
        * @methodSwap ToUpperASCIIFast_EBB7509C_C428D2CB
        */
        public static ToUpperASCIIFast ($c: uint) : uint
        /**
        * @methodSwap ToLowerASCIIFast_EBB7509C_C428D2CB
        */
        public static ToLowerASCIIFast ($c: uint) : uint
        public static IsHighSurrogate ($c: uint) : boolean
        public static IsLowSurrogate ($c: uint) : boolean
    }

    class TMP_FontStyleStack extends System.ValueType {

        public bold : byte
        public italic : byte
        public underline : byte
        public strikethrough : byte
        public highlight : byte
        public superscript : byte
        public subscript : byte
        public uppercase : byte
        public lowercase : byte
        public smallcaps : byte

        public Clear () : void
        public Add ($style: FontStyles) : byte
        public Remove ($style: FontStyles) : byte
    }

    class TMP_TextProcessingStack$1<T> extends System.ValueType {

        public itemStack : T[]
        public index : int
        public get Count(): int;
        public get current(): T;
        public get rolloverSize(): int;
        public set rolloverSize(value: int);

        public constructor ($stack: T[])
        public constructor ($capacity: int)
        public constructor ($capacity: int, $rolloverSize: int)
        public Clear () : void
        public SetDefault ($item: T) : void
        public Add ($item: T) : void
        public Remove () : T
        public Push ($item: T) : void
        public Pop () : T
        public Peek () : T
        public CurrentItem () : T
        public PreviousItem () : T
    }

    enum CaretPosition {
        None = 0,
        Left = 1,
        Right = 2 
    }

    class CaretInfo extends System.ValueType {

        public index : int
        public position : CaretPosition

        public constructor ($index: int, $position: CaretPosition)
    }

    class TMP_TextUtilities {

        public static GetCursorIndexFromPosition ($textComponent: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera) : int
        public static GetCursorIndexFromPosition ($textComponent: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera, $cursor: $Ref<CaretPosition>) : int
        public static FindNearestLine ($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera) : int
        public static FindNearestCharacterOnLine ($text: TMP_Text, $position: UnityEngine.Vector3, $line: int, $camera: UnityEngine.Camera, $visibleOnly: boolean) : int
        public static IsIntersectingRectTransform ($rectTransform: UnityEngine.RectTransform, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera) : boolean
        public static FindIntersectingCharacter ($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera, $visibleOnly: boolean) : int
        public static FindNearestCharacter ($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera, $visibleOnly: boolean) : int
        public static FindIntersectingWord ($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera) : int
        public static FindNearestWord ($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera) : int
        public static FindIntersectingLine ($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera) : int
        public static FindIntersectingLink ($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera) : int
        public static FindNearestLink ($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera) : int
        public static ScreenPointToWorldPointInRectangle ($transform: UnityEngine.Transform, $screenPoint: UnityEngine.Vector2, $cam: UnityEngine.Camera, $worldPoint: $Ref<UnityEngine.Vector3>) : boolean
        public static DistanceToLine ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $point: UnityEngine.Vector3) : float
        public static ToLowerFast ($c: number) : number
        public static ToUpperFast ($c: number) : number
        public static GetHashCode ($s: string) : int
        public static GetSimpleHashCode ($s: string) : int
        public static GetSimpleHashCodeLowercase ($s: string) : uint
        public static HexToInt ($hex: number) : int
        public static StringHexToInt ($s: string) : int
    }

    class TMP_UpdateManager extends System.Object {

        public static RegisterTextElementForLayoutRebuild ($element: TMP_Text) : void
        public static RegisterTextElementForGraphicRebuild ($element: TMP_Text) : void
        public static RegisterTextElementForCullingUpdate ($element: TMP_Text) : void
        public static UnRegisterTextElementForRebuild ($element: TMP_Text) : void
    }

    class TMP_UpdateRegistry extends System.Object {

        public static get instance(): TMP_UpdateRegistry;

        public static RegisterCanvasElementForLayoutRebuild ($element: UnityEngine_UI.ICanvasElement) : void
        public static RegisterCanvasElementForGraphicRebuild ($element: UnityEngine_UI.ICanvasElement) : void
        public static UnRegisterCanvasElementForRebuild ($element: UnityEngine_UI.ICanvasElement) : void
    }

    enum Compute_DistanceTransform_EventTypes {
        Processing = 0,
        Completed = 1 
    }

    class TMPro_EventManager {

        public static COMPUTE_DT_EVENT : FastAction$2<any, Compute_DT_EventArgs>
        public static MATERIAL_PROPERTY_EVENT : FastAction$2<boolean, UnityEngine.Material>
        public static FONT_PROPERTY_EVENT : FastAction$2<boolean, UnityEngine.Object>
        public static SPRITE_ASSET_PROPERTY_EVENT : FastAction$2<boolean, UnityEngine.Object>
        public static TEXTMESHPRO_PROPERTY_EVENT : FastAction$2<boolean, UnityEngine.Object>
        public static DRAG_AND_DROP_MATERIAL_EVENT : FastAction$3<UnityEngine.GameObject, UnityEngine.Material, UnityEngine.Material>
        public static TEXT_STYLE_PROPERTY_EVENT : FastAction$1<boolean>
        public static COLOR_GRADIENT_PROPERTY_EVENT : FastAction$1<UnityEngine.Object>
        public static TMP_SETTINGS_PROPERTY_EVENT : FastAction
        public static RESOURCE_LOAD_EVENT : FastAction
        public static TEXTMESHPRO_UGUI_PROPERTY_EVENT : FastAction$2<boolean, UnityEngine.Object>
        public static TEXT_CHANGED_EVENT : FastAction$1<UnityEngine.Object>

        public static ON_MATERIAL_PROPERTY_CHANGED ($isChanged: boolean, $mat: UnityEngine.Material) : void
        public static ON_FONT_PROPERTY_CHANGED ($isChanged: boolean, $obj: UnityEngine.Object) : void
        public static ON_SPRITE_ASSET_PROPERTY_CHANGED ($isChanged: boolean, $obj: UnityEngine.Object) : void
        public static ON_TEXTMESHPRO_PROPERTY_CHANGED ($isChanged: boolean, $obj: UnityEngine.Object) : void
        public static ON_DRAG_AND_DROP_MATERIAL_CHANGED ($sender: UnityEngine.GameObject, $currentMaterial: UnityEngine.Material, $newMaterial: UnityEngine.Material) : void
        public static ON_TEXT_STYLE_PROPERTY_CHANGED ($isChanged: boolean) : void
        public static ON_COLOR_GRADIENT_PROPERTY_CHANGED ($obj: UnityEngine.Object) : void
        public static ON_TEXT_CHANGED ($obj: UnityEngine.Object) : void
        public static ON_TMP_SETTINGS_CHANGED () : void
        public static ON_RESOURCES_LOADED () : void
        public static ON_TEXTMESHPRO_UGUI_PROPERTY_CHANGED ($isChanged: boolean, $obj: UnityEngine.Object) : void
        public static ON_COMPUTE_DT_EVENT ($Sender: any, $e: Compute_DT_EventArgs) : void
    }

    class Compute_DT_EventArgs extends System.Object {

        public EventType : Compute_DistanceTransform_EventTypes
        public ProgressPercentage : float
        public Colors : UnityEngine.Color[]

        public constructor ($type: Compute_DistanceTransform_EventTypes, $progress: float)
        public constructor ($type: Compute_DistanceTransform_EventTypes, $colors: UnityEngine.Color[])
    }

    class TMPro_ExtensionMethods {

        public static ToIntArray ($text: string) : int[]
        public static ArrayToString ($chars: number[]) : string
        public static IntToString ($unicodes: int[]) : string
        /**
        * @methodSwap IntToString_EBB7509C_H96108C56
        */
        public static IntToString ($unicodes: int[], $start: int, $length: int) : string
        public static FindInstanceID<T extends UnityEngine.Object> ($list: System_Collections_Generic.List$1<T>, $target: T) : int
        public static Compare ($a: UnityEngine.Color32, $b: UnityEngine.Color32) : boolean
        public static CompareRGB ($a: UnityEngine.Color32, $b: UnityEngine.Color32) : boolean
        public static Compare ($a: UnityEngine.Color, $b: UnityEngine.Color) : boolean
        public static CompareRGB ($a: UnityEngine.Color, $b: UnityEngine.Color) : boolean
        public static Multiply ($c1: UnityEngine.Color32, $c2: UnityEngine.Color32) : UnityEngine.Color32
        public static Tint ($c1: UnityEngine.Color32, $c2: UnityEngine.Color32) : UnityEngine.Color32
        /**
        * @methodSwap Tint_EBB7509C_H8CFFEA9D
        */
        public static Tint ($c1: UnityEngine.Color32, $tint: float) : UnityEngine.Color32
        public static MinAlpha ($c1: UnityEngine.Color, $c2: UnityEngine.Color) : UnityEngine.Color
        /**
        * @methodSwap Compare_EBB7509C_H27A832CC
        */
        public static Compare ($v1: UnityEngine.Vector3, $v2: UnityEngine.Vector3, $accuracy: int) : boolean
        /**
        * @methodSwap Compare_EBB7509C_H36EA642A
        */
        public static Compare ($q1: UnityEngine.Quaternion, $q2: UnityEngine.Quaternion, $accuracy: int) : boolean
    }

    class TMP_Math {

        public static FLOAT_MAX : float
        public static FLOAT_MIN : float
        public static INT_MAX : int
        public static INT_MIN : int
        public static FLOAT_UNSET : float
        public static INT_UNSET : int
        public static MAX_16BIT : UnityEngine.Vector2
        public static MIN_16BIT : UnityEngine.Vector2

        public static Approximately ($a: float, $b: float) : boolean
        public static Mod ($a: int, $b: int) : int
    }

    class TMP_SpriteInfo extends System.ValueType {

        public spriteIndex : int
        public characterIndex : int
        public vertexIndex : int

    }

    class Mesh_Extents extends System.ValueType {

        public min : UnityEngine.Vector2
        public max : UnityEngine.Vector2

        public constructor ($min: UnityEngine.Vector2, $max: UnityEngine.Vector2)
        public ToString () : string
    }

    class WordWrapState extends System.ValueType {

        public previous_WordBreak : int
        public total_CharacterCount : int
        public visible_CharacterCount : int
        public visible_SpriteCount : int
        public visible_LinkCount : int
        public firstCharacterIndex : int
        public firstVisibleCharacterIndex : int
        public lastCharacterIndex : int
        public lastVisibleCharIndex : int
        public lineNumber : int
        public maxCapHeight : float
        public maxAscender : float
        public maxDescender : float
        public startOfLineAscender : float
        public maxLineAscender : float
        public maxLineDescender : float
        public pageAscender : float
        public horizontalAlignment : HorizontalAlignmentOptions
        public marginLeft : float
        public marginRight : float
        public xAdvance : float
        public preferredWidth : float
        public preferredHeight : float
        public previousLineScale : float
        public wordCount : int
        public fontStyle : FontStyles
        public italicAngle : int
        public fontScaleMultiplier : float
        public currentFontSize : float
        public baselineOffset : float
        public lineOffset : float
        public isDrivenLineSpacing : boolean
        public glyphHorizontalAdvanceAdjustment : float
        public cSpace : float
        public mSpace : float
        public textInfo : TMP_TextInfo
        public lineInfo : TMP_LineInfo
        public vertexColor : UnityEngine.Color32
        public underlineColor : UnityEngine.Color32
        public strikethroughColor : UnityEngine.Color32
        public highlightColor : UnityEngine.Color32
        public basicStyleStack : TMP_FontStyleStack
        public italicAngleStack : TMP_TextProcessingStack$1<int>
        public colorStack : TMP_TextProcessingStack$1<UnityEngine.Color32>
        public underlineColorStack : TMP_TextProcessingStack$1<UnityEngine.Color32>
        public strikethroughColorStack : TMP_TextProcessingStack$1<UnityEngine.Color32>
        public highlightColorStack : TMP_TextProcessingStack$1<UnityEngine.Color32>
        public highlightStateStack : TMP_TextProcessingStack$1<HighlightState>
        public colorGradientStack : TMP_TextProcessingStack$1<TMP_ColorGradient>
        public sizeStack : TMP_TextProcessingStack$1<float>
        public indentStack : TMP_TextProcessingStack$1<float>
        public fontWeightStack : TMP_TextProcessingStack$1<FontWeight>
        public styleStack : TMP_TextProcessingStack$1<int>
        public baselineStack : TMP_TextProcessingStack$1<float>
        public actionStack : TMP_TextProcessingStack$1<int>
        public materialReferenceStack : TMP_TextProcessingStack$1<MaterialReference>
        public lineJustificationStack : TMP_TextProcessingStack$1<HorizontalAlignmentOptions>
        public spriteAnimationID : int
        public currentFontAsset : TMP_FontAsset
        public currentSpriteAsset : TMP_SpriteAsset
        public currentMaterial : UnityEngine.Material
        public currentMaterialIndex : int
        public meshExtents : Extents
        public tagNoParsing : boolean
        public isNonBreakingSpace : boolean

    }

    class TagAttribute extends System.ValueType {

        public startIndex : int
        public length : int
        public hashCode : int

    }

    class RichTextTagAttribute extends System.ValueType {

        public nameHashCode : int
        public valueHashCode : int
        public valueType : TagValueType
        public valueStartIndex : int
        public valueLength : int
        public unitType : TagUnitType

    }

    enum TextContainerAnchors {
        TopLeft = 0,
        Top = 1,
        TopRight = 2,
        Left = 3,
        Middle = 4,
        Right = 5,
        BottomLeft = 6,
        Bottom = 7,
        BottomRight = 8,
        Custom = 9 
    }

    class TextContainer extends UnityEngine_EventSystems.UIBehaviour {

        public get hasChanged(): boolean;
        public set hasChanged(value: boolean);
        public get pivot(): UnityEngine.Vector2;
        public set pivot(value: UnityEngine.Vector2);
        public get anchorPosition(): TextContainerAnchors;
        public set anchorPosition(value: TextContainerAnchors);
        public get rect(): UnityEngine.Rect;
        public set rect(value: UnityEngine.Rect);
        public get size(): UnityEngine.Vector2;
        public set size(value: UnityEngine.Vector2);
        public get width(): float;
        public set width(value: float);
        public get height(): float;
        public set height(value: float);
        public get isDefaultWidth(): boolean;
        public get isDefaultHeight(): boolean;
        public get isAutoFitting(): boolean;
        public set isAutoFitting(value: boolean);
        public get corners(): UnityEngine.Vector3[];
        public get worldCorners(): UnityEngine.Vector3[];
        public get margins(): UnityEngine.Vector4;
        public set margins(value: UnityEngine.Vector4);
        public get rectTransform(): UnityEngine.RectTransform;
        public get textMeshPro(): TextMeshPro;

        private constructor ()
    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

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

    interface Action$2<T1,T2> {
        (arg1: T1, arg2: T2) : void; 
        Invoke?: (arg1: T1, arg2: T2) => void;
    }

    interface Action$3<T1,T2,T3> {
        (arg1: T1, arg2: T2, arg3: T3) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => void;
    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IFormattable {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

    interface Char extends IComparable, IComparable$1<number>, IConvertible, IEquatable$1<number> {

    }

    interface IComparable$1<T> {

    }

    interface IEquatable$1<T> {

    }

    interface Func$3<T1,T2,TResult> {
        (arg1: T1, arg2: T2) : TResult; 
        Invoke?: (arg1: T1, arg2: T2) => TResult;
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

    interface String {

        /**
        * @extension TMPro.TMPro_ExtensionMethods.ToIntArray
        */
        ToIntArray () : int[]
    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

    interface IDeserializationCallback {

    }

}

declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'

    /**
    * A class you can derive from if you want to create objects that live independently of GameObjects.
    */
    interface ScriptableObject {

    }

    /**
    * Base class for all objects Unity can reference.
    */
    interface Object {

    }

    /**
    * The material class.
    */
    interface Material {

    }

    /**
    * Script interface for.
    */
    interface Font {

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
    * Represents a Sprite object for use in 2D gameplay.
    */
    interface Sprite {

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * Representation of RGBA colors.
    */
    interface Color extends System.IFormattable, System.IEquatable$1<Color> {

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
    * Base class for all entities in Unity Scenes.
    */
    interface GameObject {

    }

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
    * Position, size, anchor and pivot information for a rectangle.
    */
    interface RectTransform {

    }

    /**
    * Position, rotation and scale of an object.
    */
    interface Transform extends System_Collections.IEnumerable {

    }

    /**
    * A class that allows you to create or modify meshes.
    */
    interface Mesh {

    }

    /**
    * Representation of four-dimensional vectors.
    */
    interface Vector4 extends System.IFormattable, System.IEquatable$1<Vector4> {

    }

    /**
    * Represents an axis aligned bounding box.
    */
    interface Bounds extends System.IFormattable, System.IEquatable$1<Bounds> {

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
    * A UnityGUI event.
    */
    interface Event {

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
    * A 2D Rectangle defined by X and Y position, width and height.
    */
    interface Rect extends System.IFormattable, System.IEquatable$1<Rect> {

    }

    /**
    * Represents a raw text or binary file asset.
    */
    interface TextAsset {

    }

    /**
    * General functionality for all renderers.
    */
    interface Renderer {

    }

    /**
    * A class to access the Mesh of the.
    */
    interface MeshFilter {

    }

    /**
    * A component that will render to the screen after all normal rendering has completed when attached to a Canvas. Designed for GUI application.
    */
    interface CanvasRenderer {

    }

    /**
    * A Camera is a device through which the player views the world.
    */
    interface Camera {

    }

    /**
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    interface Color32 {

        /**
        * @extension TMPro.TMPro_ExtensionMethods.Compare
        */
        Compare ($b: Color32) : boolean
        /**
        * @extension TMPro.TMPro_ExtensionMethods.CompareRGB
        */
        CompareRGB ($b: Color32) : boolean
        /**
        * @extension TMPro.TMPro_ExtensionMethods.Multiply
        */
        Multiply ($c2: Color32) : Color32
        /**
        * @extension TMPro.TMPro_ExtensionMethods.Tint
        */
        Tint ($c2: Color32) : Color32
        /**
        * @extension TMPro.TMPro_ExtensionMethods.Tint
        * @methodSwap Tint_EBB7509C_H8CFFEA9D
        */
        Tint ($tint: float) : Color32
    }

    interface Color {

        /**
        * @extension TMPro.TMPro_ExtensionMethods.Compare
        */
        Compare ($b: Color) : boolean
        /**
        * @extension TMPro.TMPro_ExtensionMethods.CompareRGB
        */
        CompareRGB ($b: Color) : boolean
        /**
        * @extension TMPro.TMPro_ExtensionMethods.MinAlpha
        */
        MinAlpha ($c2: Color) : Color
    }

    interface Vector3 {

        /**
        * @extension TMPro.TMPro_ExtensionMethods.Compare
        * @methodSwap Compare_EBB7509C_H27A832CC
        */
        Compare ($v2: Vector3, $accuracy: int) : boolean
    }

    interface Quaternion {

        /**
        * @extension TMPro.TMPro_ExtensionMethods.Compare
        * @methodSwap Compare_EBB7509C_H36EA642A
        */
        Compare ($q2: Quaternion, $accuracy: int) : boolean
    }

}

declare module 'UnityEngine.TextCore.LowLevel' {

    /**
    * The rendering modes used by the Font Engine to render glyphs.
    */
    enum GlyphRenderMode {
        SMOOTH_HINTED = 4121,
        SMOOTH = 4117,
        COLOR_HINTED = 69656,
        COLOR = 69652,
        RASTER_HINTED = 4122,
        RASTER = 4118,
        SDF = 4134,
        SDF8 = 8230,
        SDF16 = 16422,
        SDF32 = 32806,
        SDFAA_HINTED = 4169,
        SDFAA = 4165 
    }

}

declare module 'System.Collections.Generic' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

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

    interface Dictionary$2<TKey,TValue> extends IDictionary$2<TKey,TValue>, System_Collections.IDictionary, System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, IReadOnlyDictionary$2<TKey,TValue> {

    }

    interface IDictionary$2<TKey,TValue> extends ICollection$1<KeyValuePair$2<TKey, TValue>> {

    }

    interface KeyValuePair$2<TKey,TValue> {

    }

    interface IReadOnlyDictionary$2<TKey,TValue> extends IReadOnlyCollection$1<KeyValuePair$2<TKey, TValue>> {

    }

    interface List$1<T> {

        /**
        * @extension TMPro.TMPro_ExtensionMethods.FindInstanceID<T extends UnityEngine.Object>
        */
        FindInstanceID ($target: T) : int
    }

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

    interface IList extends ICollection {

    }

    interface ICollection extends IEnumerable {

    }

    interface IDictionary extends ICollection {

    }

}

declare module 'UnityEngine.TextCore' {
    import * as System from 'System'

    /**
    * A structure that contains information about a given typeface and for a specific point size.
    */
    interface FaceInfo {

    }

    /**
    * A Glyph is the visual representation of a text element or character.
    */
    interface Glyph {

    }

    /**
    * A set of values that define the size, position and spacing of a glyph when performing text layout.
    */
    interface GlyphMetrics extends System.IEquatable$1<GlyphMetrics> {

    }

    /**
    * A rectangle that defines the position of a glyph within an atlas texture.
    */
    interface GlyphRect extends System.IEquatable$1<GlyphRect> {

    }

}

declare module 'TMPro.TMP_DefaultControls' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

    class Resources extends System.ValueType {

        public standard : UnityEngine.Sprite
        public background : UnityEngine.Sprite
        public inputField : UnityEngine.Sprite
        public knob : UnityEngine.Sprite
        public checkmark : UnityEngine.Sprite
        public dropdown : UnityEngine.Sprite
        public mask : UnityEngine.Sprite

    }

}

declare module 'UnityEngine.EventSystems' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'

    interface ISubmitHandler extends IEventSystemHandler {

    }

    interface IEventSystemHandler {

    }

    interface IPointerClickHandler extends IEventSystemHandler {

    }

    interface ICancelHandler extends IEventSystemHandler {

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

    interface PointerEventData {

    }

    interface BaseEventData {

    }

    interface AbstractEventData {

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

    interface IInitializePotentialDragHandler extends IEventSystemHandler {

    }

}

declare module 'UnityEngine.UI' {
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as UnityEngine from 'UnityEngine'

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

    interface ICanvasElement {

    }

    interface Image extends UnityEngine.ICanvasRaycastFilter, UnityEngine.ISerializationCallbackReceiver, ILayoutElement {

    }

    interface ILayoutElement {

    }

    enum CanvasUpdate {
        Prelayout = 0,
        Layout = 1,
        PostLayout = 2,
        PreRender = 3,
        LatePreRender = 4,
        MaxUpdateValue = 5 
    }

    interface Scrollbar extends UnityEngine_EventSystems.IBeginDragHandler, UnityEngine_EventSystems.IInitializePotentialDragHandler, UnityEngine_EventSystems.IDragHandler, ICanvasElement {

    }

}

declare module 'TMPro.TMP_Dropdown' {
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

declare module 'System.Text' {
    import * as System from 'System'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface StringBuilder extends System_Runtime_Serialization.ISerializable {

    }

}

declare module 'UnityEngine.Events' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'

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
    * Three argument version of UnityEvent.
    */
    class UnityEvent$3<T0,T1,T2> extends UnityEventBase {

        public constructor ()
        public AddListener ($call: UnityAction$3<T0, T1, T2>) : void
        public RemoveListener ($call: UnityAction$3<T0, T1, T2>) : void
        public Invoke ($arg0: T0, $arg1: T1, $arg2: T2) : void
    }

    interface UnityAction$3<T0,T1,T2> {
        (arg0: T0, arg1: T1, arg2: T2) : void; 
        Invoke?: (arg0: T0, arg1: T1, arg2: T2) => void;
    }

}

declare module 'TMPro.TMP_InputField' {
    import * as UnityEngine_Events from 'UnityEngine.Events'
    import * as System from 'System'

    class SubmitEvent extends UnityEngine_Events.UnityEvent$1<string> {

        public constructor ()
    }

    class SelectionEvent extends UnityEngine_Events.UnityEvent$1<string> {

        public constructor ()
    }

    class TextSelectionEvent extends UnityEngine_Events.UnityEvent$3<string,int,int> {

        public constructor ()
    }

    class OnChangeEvent extends UnityEngine_Events.UnityEvent$1<string> {

        public constructor ()
    }

    class TouchScreenKeyboardEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_TouchScreenKeyboard.Status> {

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
        Digit = 1,
        Integer = 2,
        Decimal = 3,
        Alphanumeric = 4,
        Name = 5,
        Regex = 6,
        EmailAddress = 7,
        CustomValidator = 8 
    }

}

declare module 'UnityEngine.TouchScreenKeyboard' {

    /**
    * The status of the on-screen keyboard.
    */
    enum Status {
        Visible = 0,
        Done = 1,
        Canceled = 2,
        LostFocus = 3 
    }

}

declare module 'TMPro.TMP_Settings' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class LineBreakingTable extends System.Object {

        public leadingCharacters : System_Collections_Generic.Dictionary$2<int, number>
        public followingCharacters : System_Collections_Generic.Dictionary$2<int, number>

        public constructor ()
    }

}

declare module 'TMPro.TMP_Compatibility' {

    enum AnchorPositions {
        TopLeft = 0,
        Top = 1,
        TopRight = 2,
        Left = 3,
        Center = 4,
        Right = 5,
        BottomLeft = 6,
        Bottom = 7,
        BottomRight = 8,
        BaseLine = 9,
        None = 10 
    }

}

declare module 'TMPro.SpriteAssetUtilities' {
    import * as System from 'System'

    enum SpriteAssetImportFormats {
        None = 0,
        TexturePackerJsonArray = 1 
    }

    class TexturePacker_JsonArray extends System.Object {

        public constructor ()
    }

}

declare module 'TMPro.SpriteAssetUtilities.TexturePacker_JsonArray' {
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class SpriteFrame extends System.ValueType {

        public x : float
        public y : float
        public w : float
        public h : float

        public ToString () : string
    }

    class SpriteSize extends System.ValueType {

        public w : float
        public h : float

        public ToString () : string
    }

    class Frame extends System.ValueType {

        public filename : string
        public frame : SpriteFrame
        public rotated : boolean
        public trimmed : boolean
        public spriteSourceSize : SpriteFrame
        public sourceSize : SpriteSize
        public pivot : UnityEngine.Vector2

    }

    class Meta extends System.ValueType {

        public app : string
        public version : string
        public image : string
        public format : string
        public size : SpriteSize
        public scale : float
        public smartupdate : string

    }

    class SpriteDataObject extends System.Object {

        public frames : System_Collections_Generic.List$1<Frame>
        public meta : Meta

        public constructor ()
    }

}

