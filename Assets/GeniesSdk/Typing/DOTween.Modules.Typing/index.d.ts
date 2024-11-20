
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'DG.Tweening' {
    import * as System from 'System'
    import * as DG_Tweening_Plugins_Options from 'DG.Tweening.Plugins.Options'
    import * as DG_Tweening_Core from 'DG.Tweening.Core'
    import * as UnityEngine from 'UnityEngine'
    import * as UnityEngine_Audio from 'UnityEngine.Audio'
    import * as DG_Tweening_Plugins_Core_PathCore from 'DG.Tweening.Plugins.Core.PathCore'
    import * as UnityEngine_UI from 'UnityEngine.UI'
    import * as System_Globalization from 'System.Globalization'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'

    class DOTweenModuleAudio {

        /**
        * @methodSwap DOFade_EBB7509C_B0F81107
        */
        public static DOFade ($target: UnityEngine.AudioSource, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOPitch_EBB7509C_B0F81107
        */
        public static DOPitch ($target: UnityEngine.AudioSource, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOSetFloat_EBB7509C_A7C4C165
        */
        public static DOSetFloat ($target: UnityEngine_Audio.AudioMixer, $floatName: string, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        public static DOComplete ($target: UnityEngine_Audio.AudioMixer, $withCallbacks?: boolean) : int
        public static DOKill ($target: UnityEngine_Audio.AudioMixer, $complete?: boolean) : int
        public static DOFlip ($target: UnityEngine_Audio.AudioMixer) : int
        /**
        * @methodSwap DOGoto_EBB7509C_H6488B325
        */
        public static DOGoto ($target: UnityEngine_Audio.AudioMixer, $to: float, $andPlay?: boolean) : int
        public static DOPause ($target: UnityEngine_Audio.AudioMixer) : int
        public static DOPlay ($target: UnityEngine_Audio.AudioMixer) : int
        public static DOPlayBackwards ($target: UnityEngine_Audio.AudioMixer) : int
        public static DOPlayForward ($target: UnityEngine_Audio.AudioMixer) : int
        public static DORestart ($target: UnityEngine_Audio.AudioMixer) : int
        public static DORewind ($target: UnityEngine_Audio.AudioMixer) : int
        public static DOSmoothRewind ($target: UnityEngine_Audio.AudioMixer) : int
        public static DOTogglePause ($target: UnityEngine_Audio.AudioMixer) : int
    }

    interface Tweener {

    }

    interface Tween {

    }

    class DOTweenModulePhysics {

        /**
        * @methodSwap DOMove_EBB7509C_B55D2530
        */
        public static DOMove ($target: UnityEngine.Rigidbody, $endValue: UnityEngine.Vector3, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOMoveX_EBB7509C_H7A8C7FD8
        */
        public static DOMoveX ($target: UnityEngine.Rigidbody, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOMoveY_EBB7509C_H7A8C7FD8
        */
        public static DOMoveY ($target: UnityEngine.Rigidbody, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOMoveZ_EBB7509C_H7A8C7FD8
        */
        public static DOMoveZ ($target: UnityEngine.Rigidbody, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DORotate_EBB7509C_H222D2E71
        */
        public static DORotate ($target: UnityEngine.Rigidbody, $endValue: UnityEngine.Vector3, $duration: float, $mode?: RotateMode) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>
        /**
        * @methodSwap DOLookAt_EBB7509C_H7CACC47
        */
        public static DOLookAt ($target: UnityEngine.Rigidbody, $towards: UnityEngine.Vector3, $duration: float, $axisConstraint?: AxisConstraint, $up?: System.Nullable$1<UnityEngine.Vector3>) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Quaternion, UnityEngine.Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>
        /**
        * @methodSwap DOJump_EBB7509C_H7E73CCEA
        */
        public static DOJump ($target: UnityEngine.Rigidbody, $endValue: UnityEngine.Vector3, $jumpPower: float, $numJumps: int, $duration: float, $snapping?: boolean) : Sequence
        /**
        * @methodSwap DOPath_EBB7509C_H51CC3EFE
        */
        public static DOPath ($target: UnityEngine.Rigidbody, $path: UnityEngine.Vector3[], $duration: float, $pathType?: PathType, $pathMode?: PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<UnityEngine.Color>) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @methodSwap DOLocalPath_EBB7509C_H51CC3EFE
        */
        public static DOLocalPath ($target: UnityEngine.Rigidbody, $path: UnityEngine.Vector3[], $duration: float, $pathType?: PathType, $pathMode?: PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<UnityEngine.Color>) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
    }

    enum RotateMode {
        Fast = 0,
        FastBeyond360 = 1,
        WorldAxisAdd = 2,
        LocalAxisAdd = 3 
    }

    enum AxisConstraint {
        None = 0,
        X = 2,
        Y = 4,
        Z = 8,
        W = 16 
    }

    interface Sequence {

    }

    enum PathType {
        Linear = 0,
        CatmullRom = 1,
        CubicBezier = 2 
    }

    enum PathMode {
        Ignore = 0,
        Full3D = 1,
        TopDown2D = 2,
        Sidescroller2D = 3 
    }

    class DOTweenModulePhysics2D {

        /**
        * @methodSwap DOMove_EBB7509C_DDCD444F
        */
        public static DOMove ($target: UnityEngine.Rigidbody2D, $endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOMoveX_EBB7509C_BD42AD3A
        */
        public static DOMoveX ($target: UnityEngine.Rigidbody2D, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOMoveY_EBB7509C_BD42AD3A
        */
        public static DOMoveY ($target: UnityEngine.Rigidbody2D, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DORotate_EBB7509C_H812E843D
        */
        public static DORotate ($target: UnityEngine.Rigidbody2D, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOJump_EBB7509C_F14DE0B
        */
        public static DOJump ($target: UnityEngine.Rigidbody2D, $endValue: UnityEngine.Vector2, $jumpPower: float, $numJumps: int, $duration: float, $snapping?: boolean) : Sequence
        /**
        * @methodSwap DOPath_EBB7509C_H7D3B1601
        */
        public static DOPath ($target: UnityEngine.Rigidbody2D, $path: UnityEngine.Vector2[], $duration: float, $pathType?: PathType, $pathMode?: PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<UnityEngine.Color>) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @methodSwap DOLocalPath_EBB7509C_H7D3B1601
        */
        public static DOLocalPath ($target: UnityEngine.Rigidbody2D, $path: UnityEngine.Vector2[], $duration: float, $pathType?: PathType, $pathMode?: PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<UnityEngine.Color>) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
    }

    class DOTweenModuleSprite {

        /**
        * @methodSwap DOColor_EBB7509C_F4B294AF
        */
        public static DOColor ($target: UnityEngine.SpriteRenderer, $endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOFade_EBB7509C_H80666AA6
        */
        public static DOFade ($target: UnityEngine.SpriteRenderer, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOGradientColor_EBB7509C_H848CF3FC
        */
        public static DOGradientColor ($target: UnityEngine.SpriteRenderer, $gradient: UnityEngine.Gradient, $duration: float) : Sequence
        /**
        * @methodSwap DOBlendableColor_EBB7509C_F4B294AF
        */
        public static DOBlendableColor ($target: UnityEngine.SpriteRenderer, $endValue: UnityEngine.Color, $duration: float) : Tweener
    }

    class DOTweenModuleUI {

        /**
        * @methodSwap DOFade_EBB7509C_H59823CC7
        */
        public static DOFade ($target: UnityEngine.CanvasGroup, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOColor_EBB7509C_H5FEA5FC1
        */
        public static DOColor ($target: UnityEngine_UI.Graphic, $endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOFade_EBB7509C_FE02B17C
        */
        public static DOFade ($target: UnityEngine_UI.Graphic, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOColor_EBB7509C_F57EA720
        */
        public static DOColor ($target: UnityEngine_UI.Image, $endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOFade_EBB7509C_H22FF9561
        */
        public static DOFade ($target: UnityEngine_UI.Image, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOFillAmount_EBB7509C_H22FF9561
        */
        public static DOFillAmount ($target: UnityEngine_UI.Image, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOGradientColor_EBB7509C_H592768FD
        */
        public static DOGradientColor ($target: UnityEngine_UI.Image, $gradient: UnityEngine.Gradient, $duration: float) : Sequence
        /**
        * @methodSwap DOFlexibleSize_EBB7509C_E1B97D18
        */
        public static DOFlexibleSize ($target: UnityEngine_UI.LayoutElement, $endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOMinSize_EBB7509C_E1B97D18
        */
        public static DOMinSize ($target: UnityEngine_UI.LayoutElement, $endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOPreferredSize_EBB7509C_E1B97D18
        */
        public static DOPreferredSize ($target: UnityEngine_UI.LayoutElement, $endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOColor_EBB7509C_C9EA62D3
        */
        public static DOColor ($target: UnityEngine_UI.Outline, $endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOFade_EBB7509C_H9C22D11A
        */
        public static DOFade ($target: UnityEngine_UI.Outline, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOScale_EBB7509C_H58CCA587
        */
        public static DOScale ($target: UnityEngine_UI.Outline, $endValue: UnityEngine.Vector2, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOAnchorPos_EBB7509C_C4BDDBDC
        */
        public static DOAnchorPos ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOAnchorPosX_EBB7509C_H5CE6E6F5
        */
        public static DOAnchorPosX ($target: UnityEngine.RectTransform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOAnchorPosY_EBB7509C_H5CE6E6F5
        */
        public static DOAnchorPosY ($target: UnityEngine.RectTransform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOAnchorPos3D_EBB7509C_H15BB3B91
        */
        public static DOAnchorPos3D ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector3, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOAnchorPos3DX_EBB7509C_H5CE6E6F5
        */
        public static DOAnchorPos3DX ($target: UnityEngine.RectTransform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOAnchorPos3DY_EBB7509C_H5CE6E6F5
        */
        public static DOAnchorPos3DY ($target: UnityEngine.RectTransform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOAnchorPos3DZ_EBB7509C_H5CE6E6F5
        */
        public static DOAnchorPos3DZ ($target: UnityEngine.RectTransform, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, UnityEngine.Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOAnchorMax_EBB7509C_C4BDDBDC
        */
        public static DOAnchorMax ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOAnchorMin_EBB7509C_C4BDDBDC
        */
        public static DOAnchorMin ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOPivot_EBB7509C_H6CA0AF1B
        */
        public static DOPivot ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOPivotX_EBB7509C_E0E136D6
        */
        public static DOPivotX ($target: UnityEngine.RectTransform, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOPivotY_EBB7509C_E0E136D6
        */
        public static DOPivotY ($target: UnityEngine.RectTransform, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOSizeDelta_EBB7509C_C4BDDBDC
        */
        public static DOSizeDelta ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOPunchAnchorPos_EBB7509C_H50326DAE
        */
        public static DOPunchAnchorPos ($target: UnityEngine.RectTransform, $punch: UnityEngine.Vector2, $duration: float, $vibrato?: int, $elasticity?: float, $snapping?: boolean) : Tweener
        /**
        * @methodSwap DOShakeAnchorPos_EBB7509C_H79BC6292
        */
        public static DOShakeAnchorPos ($target: UnityEngine.RectTransform, $duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $snapping?: boolean, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOShakeAnchorPos_EBB7509C_H892754BF
        */
        public static DOShakeAnchorPos ($target: UnityEngine.RectTransform, $duration: float, $strength: UnityEngine.Vector2, $vibrato?: int, $randomness?: float, $snapping?: boolean, $fadeOut?: boolean) : Tweener
        /**
        * @methodSwap DOJumpAnchorPos_EBB7509C_H50326DAE
        */
        public static DOJumpAnchorPos ($target: UnityEngine.RectTransform, $endValue: UnityEngine.Vector2, $jumpPower: float, $numJumps: int, $duration: float, $snapping?: boolean) : Sequence
        /**
        * @methodSwap DONormalizedPos_EBB7509C_H6364B55D
        */
        public static DONormalizedPos ($target: UnityEngine_UI.ScrollRect, $endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : Tweener
        /**
        * @methodSwap DOHorizontalNormalizedPos_EBB7509C_H81056670
        */
        public static DOHorizontalNormalizedPos ($target: UnityEngine_UI.ScrollRect, $endValue: float, $duration: float, $snapping?: boolean) : Tweener
        /**
        * @methodSwap DOVerticalNormalizedPos_EBB7509C_H81056670
        */
        public static DOVerticalNormalizedPos ($target: UnityEngine_UI.ScrollRect, $endValue: float, $duration: float, $snapping?: boolean) : Tweener
        /**
        * @methodSwap DOValue_EBB7509C_H357FA4EE
        */
        public static DOValue ($target: UnityEngine_UI.Slider, $endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @methodSwap DOColor_EBB7509C_H493419FE
        */
        public static DOColor ($target: UnityEngine_UI.Text, $endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOCounter_EBB7509C_H4DDB0883
        */
        public static DOCounter ($target: UnityEngine_UI.Text, $fromValue: int, $endValue: int, $duration: float, $addThousandsSeparator?: boolean, $culture?: System_Globalization.CultureInfo) : DG_Tweening_Core.TweenerCore$3<int, int, DG_Tweening_Plugins_Options.NoOptions>
        /**
        * @methodSwap DOFade_EBB7509C_H33A5720B
        */
        public static DOFade ($target: UnityEngine_UI.Text, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @methodSwap DOText_EBB7509C_F54DBA23
        */
        public static DOText ($target: UnityEngine_UI.Text, $endValue: string, $duration: float, $richTextEnabled?: boolean, $scrambleMode?: ScrambleMode, $scrambleChars?: string) : DG_Tweening_Core.TweenerCore$3<string, string, DG_Tweening_Plugins_Options.StringOptions>
        /**
        * @methodSwap DOBlendableColor_EBB7509C_H5FEA5FC1
        */
        public static DOBlendableColor ($target: UnityEngine_UI.Graphic, $endValue: UnityEngine.Color, $duration: float) : Tweener
        /**
        * @methodSwap DOBlendableColor_EBB7509C_F57EA720
        */
        public static DOBlendableColor ($target: UnityEngine_UI.Image, $endValue: UnityEngine.Color, $duration: float) : Tweener
        /**
        * @methodSwap DOBlendableColor_EBB7509C_H493419FE
        */
        public static DOBlendableColor ($target: UnityEngine_UI.Text, $endValue: UnityEngine.Color, $duration: float) : Tweener
    }

    enum ScrambleMode {
        None = 0,
        All = 1,
        Uppercase = 2,
        Lowercase = 3,
        Numerals = 4,
        Custom = 5 
    }

    class DOTweenModuleUnityVersion {

        /**
        * @methodSwap DOGradientColor_EBB7509C_H513A9209
        */
        public static DOGradientColor ($target: UnityEngine.Material, $gradient: UnityEngine.Gradient, $duration: float) : Sequence
        /**
        * @methodSwap DOGradientColor_EBB7509C_BD9E870D
        */
        public static DOGradientColor ($target: UnityEngine.Material, $gradient: UnityEngine.Gradient, $property: string, $duration: float) : Sequence
        public static WaitForCompletion ($t: Tween, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        public static WaitForRewind ($t: Tween, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        public static WaitForKill ($t: Tween, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @methodSwap WaitForElapsedLoops_EBB7509C_H40296D8E
        */
        public static WaitForElapsedLoops ($t: Tween, $elapsedLoops: int, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @methodSwap WaitForPosition_EBB7509C_E1C176D8
        */
        public static WaitForPosition ($t: Tween, $position: float, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        public static WaitForStart ($t: Tween, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @methodSwap DOOffset_EBB7509C_AA46DC01
        */
        public static DOOffset ($target: UnityEngine.Material, $endValue: UnityEngine.Vector2, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @methodSwap DOTiling_EBB7509C_AA46DC01
        */
        public static DOTiling ($target: UnityEngine.Material, $endValue: UnityEngine.Vector2, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        public static AsyncWaitForCompletion ($t: Tween) : System_Threading_Tasks.Task
        public static AsyncWaitForRewind ($t: Tween) : System_Threading_Tasks.Task
        public static AsyncWaitForKill ($t: Tween) : System_Threading_Tasks.Task
        /**
        * @methodSwap AsyncWaitForElapsedLoops_EBB7509C_H3AE295E1
        */
        public static AsyncWaitForElapsedLoops ($t: Tween, $elapsedLoops: int) : System_Threading_Tasks.Task
        /**
        * @methodSwap AsyncWaitForPosition_EBB7509C_H84EE7387
        */
        public static AsyncWaitForPosition ($t: Tween, $position: float) : System_Threading_Tasks.Task
        public static AsyncWaitForStart ($t: Tween) : System_Threading_Tasks.Task
    }

    class DOTweenCYInstruction {

    }

    class DOTweenModuleUtils {

        public static Init () : void
    }

    interface Tweener {

        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion
        */
        WaitForCompletion ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind
        */
        WaitForRewind ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForKill
        */
        WaitForKill ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops
        * @methodSwap WaitForElapsedLoops_EBB7509C_H40296D8E
        */
        WaitForElapsedLoops ($elapsedLoops: int, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition
        * @methodSwap WaitForPosition_EBB7509C_E1C176D8
        */
        WaitForPosition ($position: float, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForStart
        */
        WaitForStart ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForCompletion
        */
        AsyncWaitForCompletion () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForRewind
        */
        AsyncWaitForRewind () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForKill
        */
        AsyncWaitForKill () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForElapsedLoops
        * @methodSwap AsyncWaitForElapsedLoops_EBB7509C_H3AE295E1
        */
        AsyncWaitForElapsedLoops ($elapsedLoops: int) : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForPosition
        * @methodSwap AsyncWaitForPosition_EBB7509C_H84EE7387
        */
        AsyncWaitForPosition ($position: float) : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForStart
        */
        AsyncWaitForStart () : System_Threading_Tasks.Task
    }

    interface Tween {

        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion
        */
        WaitForCompletion ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind
        */
        WaitForRewind ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForKill
        */
        WaitForKill ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops
        * @methodSwap WaitForElapsedLoops_EBB7509C_H40296D8E
        */
        WaitForElapsedLoops ($elapsedLoops: int, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition
        * @methodSwap WaitForPosition_EBB7509C_E1C176D8
        */
        WaitForPosition ($position: float, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForStart
        */
        WaitForStart ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForCompletion
        */
        AsyncWaitForCompletion () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForRewind
        */
        AsyncWaitForRewind () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForKill
        */
        AsyncWaitForKill () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForElapsedLoops
        * @methodSwap AsyncWaitForElapsedLoops_EBB7509C_H3AE295E1
        */
        AsyncWaitForElapsedLoops ($elapsedLoops: int) : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForPosition
        * @methodSwap AsyncWaitForPosition_EBB7509C_H84EE7387
        */
        AsyncWaitForPosition ($position: float) : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForStart
        */
        AsyncWaitForStart () : System_Threading_Tasks.Task
    }

    interface Sequence {

        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion
        */
        WaitForCompletion ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind
        */
        WaitForRewind ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForKill
        */
        WaitForKill ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops
        * @methodSwap WaitForElapsedLoops_EBB7509C_H40296D8E
        */
        WaitForElapsedLoops ($elapsedLoops: int, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition
        * @methodSwap WaitForPosition_EBB7509C_E1C176D8
        */
        WaitForPosition ($position: float, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForStart
        */
        WaitForStart ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForCompletion
        */
        AsyncWaitForCompletion () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForRewind
        */
        AsyncWaitForRewind () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForKill
        */
        AsyncWaitForKill () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForElapsedLoops
        * @methodSwap AsyncWaitForElapsedLoops_EBB7509C_H3AE295E1
        */
        AsyncWaitForElapsedLoops ($elapsedLoops: int) : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForPosition
        * @methodSwap AsyncWaitForPosition_EBB7509C_H84EE7387
        */
        AsyncWaitForPosition ($position: float) : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForStart
        */
        AsyncWaitForStart () : System_Threading_Tasks.Task
    }

}

declare module 'DG.Tweening.Core' {
    import * as DG_Tweening from 'DG.Tweening'
    import * as System from 'System'
    import * as UnityEngine from 'UnityEngine'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'

    interface TweenerCore$3<T1,T2,TPlugOptions> {

    }

    interface ABSSequentiable {

    }

    interface TweenerCore$3<T1,T2,TPlugOptions> {

        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion
        */
        WaitForCompletion ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind
        */
        WaitForRewind ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForKill
        */
        WaitForKill ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops
        * @methodSwap WaitForElapsedLoops_EBB7509C_H40296D8E
        */
        WaitForElapsedLoops ($elapsedLoops: int, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition
        * @methodSwap WaitForPosition_EBB7509C_E1C176D8
        */
        WaitForPosition ($position: float, $returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.WaitForStart
        */
        WaitForStart ($returnCustomYieldInstruction: boolean) : UnityEngine.CustomYieldInstruction
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForCompletion
        */
        AsyncWaitForCompletion () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForRewind
        */
        AsyncWaitForRewind () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForKill
        */
        AsyncWaitForKill () : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForElapsedLoops
        * @methodSwap AsyncWaitForElapsedLoops_EBB7509C_H3AE295E1
        */
        AsyncWaitForElapsedLoops ($elapsedLoops: int) : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForPosition
        * @methodSwap AsyncWaitForPosition_EBB7509C_H84EE7387
        */
        AsyncWaitForPosition ($position: float) : System_Threading_Tasks.Task
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.AsyncWaitForStart
        */
        AsyncWaitForStart () : System_Threading_Tasks.Task
    }

}

declare module 'DG.Tweening.Plugins.Options' {
    import * as System from 'System'

    interface IPlugOptions {

    }

    interface FloatOptions extends IPlugOptions {

    }

    interface VectorOptions extends IPlugOptions {

    }

    interface QuaternionOptions extends IPlugOptions {

    }

    interface PathOptions extends IPlugOptions {

    }

    interface ColorOptions extends IPlugOptions {

    }

    interface NoOptions extends IPlugOptions {

    }

    interface StringOptions extends IPlugOptions {

    }

}

declare module 'UnityEngine' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as DG_Tweening_Plugins_Options from 'DG.Tweening.Plugins.Options'
    import * as DG_Tweening_Core from 'DG.Tweening.Core'
    import * as DG_Tweening from 'DG.Tweening'
    import * as DG_Tweening_Plugins_Core_PathCore from 'DG.Tweening.Plugins.Core.PathCore'

    /**
    * A representation of audio sources in 3D.
    */
    interface AudioSource {

    }

    interface AudioBehaviour {

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
    * Representation of 3D vectors and points.
    */
    interface Vector3 extends System.IFormattable, System.IEquatable$1<Vector3> {

    }

    /**
    * Control of an object's position through physics simulation.
    */
    interface Rigidbody {

    }

    /**
    * Quaternions are used to represent rotations.
    */
    interface Quaternion extends System.IFormattable, System.IEquatable$1<Quaternion> {

    }

    /**
    * Representation of RGBA colors.
    */
    interface Color extends System.IFormattable, System.IEquatable$1<Color> {

    }

    /**
    * Representation of 2D vectors and points.
    */
    interface Vector2 extends System.IFormattable, System.IEquatable$1<Vector2> {

    }

    /**
    * Rigidbody physics component for 2D sprites.
    */
    interface Rigidbody2D {

    }

    /**
    * Renders a Sprite for 2D graphics.
    */
    interface SpriteRenderer {

    }

    /**
    * General functionality for all renderers.
    */
    interface Renderer {

    }

    /**
    * Represents a Gradient used for animating colors.
    */
    interface Gradient extends System.IEquatable$1<Gradient> {

    }

    /**
    * A Canvas placable element that can be used to modify children Alpha, Raycasting, Enabled state.
    */
    interface CanvasGroup extends ICanvasRaycastFilter {

    }

    /**
    * This element can filter raycasts. If the top level element is hit it can further 'check' if the location is valid.
    */
    interface ICanvasRaycastFilter {

    }

    /**
    * MonoBehaviour is a base class that many Unity scripts derive from.
    */
    interface MonoBehaviour {

    }

    /**
    * Interface to receive callbacks upon serialization and deserialization.
    */
    interface ISerializationCallbackReceiver {

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
    * The material class.
    */
    interface Material {

    }

    /**
    * Base class for custom yield instructions to suspend coroutines.
    */
    interface CustomYieldInstruction extends System_Collections.IEnumerator {

    }

    interface AudioSource {

        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOFade
        */
        DOFade ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOPitch
        */
        DOPitch ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
    }

    interface Rigidbody {

        /**
        * @extension DG.Tweening.DOTweenModulePhysics.DOMove
        */
        DOMove ($endValue: Vector3, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics.DOMoveX
        */
        DOMoveX ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics.DOMoveY
        */
        DOMoveY ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics.DOMoveZ
        */
        DOMoveZ ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics.DORotate
        */
        DORotate ($endValue: Vector3, $duration: float, $mode?: DG_Tweening.RotateMode) : DG_Tweening_Core.TweenerCore$3<Quaternion, Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics.DOLookAt
        */
        DOLookAt ($towards: Vector3, $duration: float, $axisConstraint?: DG_Tweening.AxisConstraint, $up?: System.Nullable$1<Vector3>) : DG_Tweening_Core.TweenerCore$3<Quaternion, Vector3, DG_Tweening_Plugins_Options.QuaternionOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics.DOJump
        */
        DOJump ($endValue: Vector3, $jumpPower: float, $numJumps: int, $duration: float, $snapping?: boolean) : DG_Tweening.Sequence
        /**
        * @extension DG.Tweening.DOTweenModulePhysics.DOPath
        */
        DOPath ($path: Vector3[], $duration: float, $pathType?: DG_Tweening.PathType, $pathMode?: DG_Tweening.PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<Color>) : DG_Tweening_Core.TweenerCore$3<Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics.DOLocalPath
        */
        DOLocalPath ($path: Vector3[], $duration: float, $pathType?: DG_Tweening.PathType, $pathMode?: DG_Tweening.PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<Color>) : DG_Tweening_Core.TweenerCore$3<Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
    }

    interface Rigidbody2D {

        /**
        * @extension DG.Tweening.DOTweenModulePhysics2D.DOMove
        */
        DOMove ($endValue: Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics2D.DOMoveX
        */
        DOMoveX ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics2D.DOMoveY
        */
        DOMoveY ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics2D.DORotate
        */
        DORotate ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics2D.DOJump
        */
        DOJump ($endValue: Vector2, $jumpPower: float, $numJumps: int, $duration: float, $snapping?: boolean) : DG_Tweening.Sequence
        /**
        * @extension DG.Tweening.DOTweenModulePhysics2D.DOPath
        */
        DOPath ($path: Vector2[], $duration: float, $pathType?: DG_Tweening.PathType, $pathMode?: DG_Tweening.PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<Color>) : DG_Tweening_Core.TweenerCore$3<Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
        /**
        * @extension DG.Tweening.DOTweenModulePhysics2D.DOLocalPath
        */
        DOLocalPath ($path: Vector2[], $duration: float, $pathType?: DG_Tweening.PathType, $pathMode?: DG_Tweening.PathMode, $resolution?: int, $gizmoColor?: System.Nullable$1<Color>) : DG_Tweening_Core.TweenerCore$3<Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
    }

    interface SpriteRenderer {

        /**
        * @extension DG.Tweening.DOTweenModuleSprite.DOColor
        */
        DOColor ($endValue: Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<Color, Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleSprite.DOFade
        */
        DOFade ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<Color, Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleSprite.DOGradientColor
        */
        DOGradientColor ($gradient: Gradient, $duration: float) : DG_Tweening.Sequence
        /**
        * @extension DG.Tweening.DOTweenModuleSprite.DOBlendableColor
        */
        DOBlendableColor ($endValue: Color, $duration: float) : DG_Tweening.Tweener
    }

    interface CanvasGroup {

        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOFade
        * @methodSwap DOFade_EBB7509C_H59823CC7
        */
        DOFade ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
    }

    interface RectTransform {

        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOAnchorPos
        */
        DOAnchorPos ($endValue: Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOAnchorPosX
        */
        DOAnchorPosX ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOAnchorPosY
        */
        DOAnchorPosY ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOAnchorPos3D
        */
        DOAnchorPos3D ($endValue: Vector3, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX
        */
        DOAnchorPos3DX ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY
        */
        DOAnchorPos3DY ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ
        */
        DOAnchorPos3DZ ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector3, Vector3, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOAnchorMax
        */
        DOAnchorMax ($endValue: Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOAnchorMin
        */
        DOAnchorMin ($endValue: Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOPivot
        */
        DOPivot ($endValue: Vector2, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOPivotX
        */
        DOPivotX ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOPivotY
        */
        DOPivotY ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOSizeDelta
        */
        DOSizeDelta ($endValue: Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos
        */
        DOPunchAnchorPos ($punch: Vector2, $duration: float, $vibrato?: int, $elasticity?: float, $snapping?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos
        * @methodSwap DOShakeAnchorPos_EBB7509C_H79BC6292
        */
        DOShakeAnchorPos ($duration: float, $strength?: float, $vibrato?: int, $randomness?: float, $snapping?: boolean, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos
        * @methodSwap DOShakeAnchorPos_EBB7509C_H892754BF
        */
        DOShakeAnchorPos ($duration: float, $strength: Vector2, $vibrato?: int, $randomness?: float, $snapping?: boolean, $fadeOut?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos
        */
        DOJumpAnchorPos ($endValue: Vector2, $jumpPower: float, $numJumps: int, $duration: float, $snapping?: boolean) : DG_Tweening.Sequence
    }

    interface Material {

        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor
        * @methodSwap DOGradientColor_EBB7509C_H513A9209
        */
        DOGradientColor ($gradient: Gradient, $duration: float) : DG_Tweening.Sequence
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor
        * @methodSwap DOGradientColor_EBB7509C_BD9E870D
        */
        DOGradientColor ($gradient: Gradient, $property: string, $duration: float) : DG_Tweening.Sequence
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.DOOffset
        */
        DOOffset ($endValue: Vector2, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUnityVersion.DOTiling
        */
        DOTiling ($endValue: Vector2, $propertyID: int, $duration: float) : DG_Tweening_Core.TweenerCore$3<Vector2, Vector2, DG_Tweening_Plugins_Options.VectorOptions>
    }

}

declare module 'UnityEngine.Audio' {
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as DG_Tweening_Plugins_Options from 'DG.Tweening.Plugins.Options'
    import * as DG_Tweening_Core from 'DG.Tweening.Core'

    /**
    * AudioMixer asset.
    */
    interface AudioMixer {

    }

    interface AudioMixer {

        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOSetFloat
        */
        DOSetFloat ($floatName: string, $endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOComplete
        */
        DOComplete ($withCallbacks?: boolean) : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOKill
        */
        DOKill ($complete?: boolean) : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOFlip
        */
        DOFlip () : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOGoto
        */
        DOGoto ($to: float, $andPlay?: boolean) : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOPause
        */
        DOPause () : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOPlay
        */
        DOPlay () : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOPlayBackwards
        */
        DOPlayBackwards () : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOPlayForward
        */
        DOPlayForward () : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DORestart
        */
        DORestart () : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DORewind
        */
        DORewind () : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOSmoothRewind
        */
        DOSmoothRewind () : int
        /**
        * @extension DG.Tweening.DOTweenModuleAudio.DOTogglePause
        */
        DOTogglePause () : int
    }

}

declare module 'System' {

    interface IFormattable {

    }

    interface IEquatable$1<T> {

    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface IComparable {

    }

    interface IConvertible {

    }

    interface Nullable$1<T> {

    }

    interface ICloneable {

    }

    interface IFormatProvider {

    }

    interface IAsyncResult {

    }

    interface IDisposable {

    }

}

declare module 'DG.Tweening.Plugins.Core.PathCore' {
    import * as System from 'System'

    interface Path {

    }

}

declare module 'UnityEngine.UI' {
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems'
    import * as UnityEngine from 'UnityEngine'
    import * as DG_Tweening_Plugins_Options from 'DG.Tweening.Plugins.Options'
    import * as DG_Tweening_Core from 'DG.Tweening.Core'
    import * as System from 'System'
    import * as DG_Tweening from 'DG.Tweening'
    import * as System_Globalization from 'System.Globalization'

    interface Graphic extends ICanvasElement {

    }

    interface ICanvasElement {

    }

    interface Image extends UnityEngine.ICanvasRaycastFilter, UnityEngine.ISerializationCallbackReceiver, ILayoutElement {

    }

    interface ILayoutElement {

    }

    interface MaskableGraphic extends IClippable, IMaterialModifier, IMaskable {

    }

    interface IClippable {

    }

    interface IMaterialModifier {

    }

    interface IMaskable {

    }

    interface LayoutElement extends ILayoutIgnorer, ILayoutElement {

    }

    interface ILayoutIgnorer {

    }

    interface Outline {

    }

    interface Shadow {

    }

    interface BaseMeshEffect extends IMeshModifier {

    }

    interface IMeshModifier {

    }

    interface ScrollRect extends ILayoutGroup, UnityEngine_EventSystems.IBeginDragHandler, UnityEngine_EventSystems.IInitializePotentialDragHandler, UnityEngine_EventSystems.IDragHandler, UnityEngine_EventSystems.IEndDragHandler, ICanvasElement, UnityEngine_EventSystems.IScrollHandler, ILayoutElement {

    }

    interface ILayoutGroup extends ILayoutController {

    }

    interface ILayoutController {

    }

    interface Slider extends UnityEngine_EventSystems.IInitializePotentialDragHandler, UnityEngine_EventSystems.IDragHandler, ICanvasElement {

    }

    interface Selectable extends UnityEngine_EventSystems.IPointerEnterHandler, UnityEngine_EventSystems.ISelectHandler, UnityEngine_EventSystems.IPointerExitHandler, UnityEngine_EventSystems.IDeselectHandler, UnityEngine_EventSystems.IPointerDownHandler, UnityEngine_EventSystems.IPointerUpHandler, UnityEngine_EventSystems.IMoveHandler {

    }

    interface Text extends ILayoutElement {

    }

    interface Graphic {

        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOColor
        * @methodSwap DOColor_EBB7509C_H5FEA5FC1
        */
        DOColor ($endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOFade
        * @methodSwap DOFade_EBB7509C_FE02B17C
        */
        DOFade ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOBlendableColor
        * @methodSwap DOBlendableColor_EBB7509C_H5FEA5FC1
        */
        DOBlendableColor ($endValue: UnityEngine.Color, $duration: float) : DG_Tweening.Tweener
    }

    interface Image {

        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOColor
        * @methodSwap DOColor_EBB7509C_H5FEA5FC1
        */
        DOColor ($endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOFade
        * @methodSwap DOFade_EBB7509C_FE02B17C
        */
        DOFade ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOFillAmount
        */
        DOFillAmount ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOGradientColor
        */
        DOGradientColor ($gradient: UnityEngine.Gradient, $duration: float) : DG_Tweening.Sequence
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOBlendableColor
        * @methodSwap DOBlendableColor_EBB7509C_H5FEA5FC1
        */
        DOBlendableColor ($endValue: UnityEngine.Color, $duration: float) : DG_Tweening.Tweener
    }

    interface MaskableGraphic {

        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOColor
        * @methodSwap DOColor_EBB7509C_H5FEA5FC1
        */
        DOColor ($endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOFade
        * @methodSwap DOFade_EBB7509C_FE02B17C
        */
        DOFade ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOBlendableColor
        * @methodSwap DOBlendableColor_EBB7509C_H5FEA5FC1
        */
        DOBlendableColor ($endValue: UnityEngine.Color, $duration: float) : DG_Tweening.Tweener
    }

    interface Text {

        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOColor
        * @methodSwap DOColor_EBB7509C_H5FEA5FC1
        */
        DOColor ($endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOFade
        * @methodSwap DOFade_EBB7509C_FE02B17C
        */
        DOFade ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOCounter
        */
        DOCounter ($fromValue: int, $endValue: int, $duration: float, $addThousandsSeparator?: boolean, $culture?: System_Globalization.CultureInfo) : DG_Tweening_Core.TweenerCore$3<int, int, DG_Tweening_Plugins_Options.NoOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOText
        */
        DOText ($endValue: string, $duration: float, $richTextEnabled?: boolean, $scrambleMode?: DG_Tweening.ScrambleMode, $scrambleChars?: string) : DG_Tweening_Core.TweenerCore$3<string, string, DG_Tweening_Plugins_Options.StringOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOBlendableColor
        * @methodSwap DOBlendableColor_EBB7509C_H5FEA5FC1
        */
        DOBlendableColor ($endValue: UnityEngine.Color, $duration: float) : DG_Tweening.Tweener
    }

    interface LayoutElement {

        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOFlexibleSize
        */
        DOFlexibleSize ($endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOMinSize
        */
        DOMinSize ($endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOPreferredSize
        */
        DOPreferredSize ($endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
    }

    interface Outline {

        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOColor
        * @methodSwap DOColor_EBB7509C_C9EA62D3
        */
        DOColor ($endValue: UnityEngine.Color, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOFade
        * @methodSwap DOFade_EBB7509C_H9C22D11A
        */
        DOFade ($endValue: float, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Color, UnityEngine.Color, DG_Tweening_Plugins_Options.ColorOptions>
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOScale
        */
        DOScale ($endValue: UnityEngine.Vector2, $duration: float) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector2, UnityEngine.Vector2, DG_Tweening_Plugins_Options.VectorOptions>
    }

    interface ScrollRect {

        /**
        * @extension DG.Tweening.DOTweenModuleUI.DONormalizedPos
        */
        DONormalizedPos ($endValue: UnityEngine.Vector2, $duration: float, $snapping?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos
        */
        DOHorizontalNormalizedPos ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening.Tweener
        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos
        */
        DOVerticalNormalizedPos ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening.Tweener
    }

    interface Slider {

        /**
        * @extension DG.Tweening.DOTweenModuleUI.DOValue
        */
        DOValue ($endValue: float, $duration: float, $snapping?: boolean) : DG_Tweening_Core.TweenerCore$3<float, float, DG_Tweening_Plugins_Options.FloatOptions>
    }

}

declare module 'UnityEngine.EventSystems' {
    import * as UnityEngine from 'UnityEngine'

    interface UIBehaviour {

    }

    interface IBeginDragHandler extends IEventSystemHandler {

    }

    interface IEventSystemHandler {

    }

    interface IInitializePotentialDragHandler extends IEventSystemHandler {

    }

    interface IDragHandler extends IEventSystemHandler {

    }

    interface IEndDragHandler extends IEventSystemHandler {

    }

    interface IScrollHandler extends IEventSystemHandler {

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

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

    interface IEnumerator {

    }

}

declare module 'System.Globalization' {
    import * as System from 'System'

    interface CultureInfo extends System.ICloneable, System.IFormatProvider {

    }

}

declare module 'System.Threading.Tasks' {
    import * as System from 'System'
    import * as System_Threading from 'System.Threading'

    interface Task extends System.IAsyncResult, System_Threading.IThreadPoolWorkItem, System.IDisposable {

    }

}

declare module 'DG.Tweening.DOTweenModuleUI' {
    import * as UnityEngine from 'UnityEngine'

    class Utils {

        public static SwitchToRectTransform ($from: UnityEngine.RectTransform, $to: UnityEngine.RectTransform) : UnityEngine.Vector2
    }

}

declare module 'DG.Tweening.DOTweenCYInstruction' {
    import * as UnityEngine from 'UnityEngine'
    import * as DG_Tweening from 'DG.Tweening'
    import * as System from 'System'

    class WaitForCompletion extends UnityEngine.CustomYieldInstruction {

        public get keepWaiting(): boolean;

        public constructor ($tween: DG_Tweening.Tween)
    }

    class WaitForRewind extends UnityEngine.CustomYieldInstruction {

        public get keepWaiting(): boolean;

        public constructor ($tween: DG_Tweening.Tween)
    }

    class WaitForKill extends UnityEngine.CustomYieldInstruction {

        public get keepWaiting(): boolean;

        public constructor ($tween: DG_Tweening.Tween)
    }

    class WaitForElapsedLoops extends UnityEngine.CustomYieldInstruction {

        public get keepWaiting(): boolean;

        public constructor ($tween: DG_Tweening.Tween, $elapsedLoops: int)
    }

    class WaitForPosition extends UnityEngine.CustomYieldInstruction {

        public get keepWaiting(): boolean;

        public constructor ($tween: DG_Tweening.Tween, $position: float)
    }

    class WaitForStart extends UnityEngine.CustomYieldInstruction {

        public get keepWaiting(): boolean;

        public constructor ($tween: DG_Tweening.Tween)
    }

}

declare module 'DG.Tweening.DOTweenModuleUtils' {
    import * as DG_Tweening_Plugins_Options from 'DG.Tweening.Plugins.Options'
    import * as DG_Tweening from 'DG.Tweening'
    import * as UnityEngine from 'UnityEngine'
    import * as System from 'System'
    import * as DG_Tweening_Plugins_Core_PathCore from 'DG.Tweening.Plugins.Core.PathCore'
    import * as DG_Tweening_Core from 'DG.Tweening.Core'

    class Physics {

        public static SetOrientationOnPath ($options: DG_Tweening_Plugins_Options.PathOptions, $t: DG_Tweening.Tween, $newRot: UnityEngine.Quaternion, $trans: UnityEngine.Transform) : void
        public static HasRigidbody2D ($target: UnityEngine.Component) : boolean
        public static HasRigidbody ($target: UnityEngine.Component) : boolean
        public static CreateDOTweenPathTween ($target: UnityEngine.MonoBehaviour, $tweenRigidbody: boolean, $isLocal: boolean, $path: DG_Tweening_Plugins_Core_PathCore.Path, $duration: float, $pathMode: DG_Tweening.PathMode) : DG_Tweening_Core.TweenerCore$3<UnityEngine.Vector3, DG_Tweening_Plugins_Core_PathCore.Path, DG_Tweening_Plugins_Options.PathOptions>
    }

}

