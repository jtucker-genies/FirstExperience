
import { GameObject, MonoBehaviour, WaitForSecondsRealtime, Object, Transform, Random, Mathf, Debug, Rigidbody } from "UnityEngine";
import { Button } from "UnityEngine.UI";
import { TMP_Text } from "TMPro";
import { GeniesSdk } from "Genies.Components.SDK.Core";
import { TraitsSdk } from "Genies.Traits.Api";
import { Trait } from "Genies.SDKServices.Model";
import { List$1 } from "System.Collections.Generic";
import { Tuple } from "System";
import NoteBlock from "./NoteBlock";

export default class GameManager extends MonoBehaviour {

    @SerializeField private noteBlock: GameObject;
    @SerializeField private blockStartPositions: Transform[];
    @SerializeField private startButton: Button;
    @SerializeField private scoreText: TMP_Text;

    @HideInInspector public static Instance: GameManager;

    private traitToNoteInfo: Map<string, [int, int, int]>; // trait -> mode, bpm, speed
    private mode: int; // 0 = M, 1 = m
    private speed: int; // range 0 - 3
    private bpm: int;

    private points: int = 0;
    
    private Awake() {
        if (GameManager.Instance == null) 
            GameManager.Instance = this;
        else
            Object.Destroy(this.gameObject);
    }

    private async Start() {
        await GeniesSdk.Initialize();
        this.CreateTraitMap();
        TraitsSdk.GetStrongestXTraits(1, this.OnSuccess, this.OnFailure);

        this.startButton.onClick.AddListener(this.BeginGame);
    }

    private OnDestroy() {
        this.startButton.onClick.RemoveListener(this.BeginGame);
    }


    private CreateTraitMap() {
        this.traitToNoteInfo = new Map<string, [int, int, int]>();
        // trait, mode, bpm, speed
        this.traitToNoteInfo.set("Cautious", [0, 100, 1]);
        this.traitToNoteInfo.set("Impulsive", [1, 150, 3]);
        this.traitToNoteInfo.set("Rigid", [1, 100, 2]);
        this.traitToNoteInfo.set("Relaxed", [0, 80, 0]);
        this.traitToNoteInfo.set("Energetic", [1, 140, 2]);
        // ...
    }

    OnSuccess(response: List$1<Trait>) {
        console.log("Top Trait:");
        response.ForEach((trait: Trait) => {
            console.log(trait.Name);
            if (this.traitToNoteInfo.has(trait.Name)) {
                this.mode = this.traitToNoteInfo.get(trait.Name)[0];
                this.bpm = this.traitToNoteInfo.get(trait.Name)[1];
                this.speed = this.traitToNoteInfo.get(trait.Name)[2];
            } else {
                // assign default values if didn't assign trait values yet
                this.mode = 0;
                this.bpm = 120;
                this.speed = 1;
            }
        });
    }

    OnFailure() {
        console.log("ERROR: Could not read the user's top Trait")
    }

    private BeginGame() {
        this.StartCoroutine(this.SpawnBlocksOverTime());
        this.startButton.gameObject.SetActive(false);
    }

    // auto generate a set of pitches and speeds to instantiate blocks at (depending on traits)
    // pitch will correspond to how far left/right block is, and audioclip will be asigned to block
    // speed will correspond to bpm (chosen at start, slight changes over time) and selected pre-set rhythms

    *SpawnBlocksOverTime() {
        while (true) {
            this.SpawnBlock();
            yield new WaitForSecondsRealtime(60.0 / this.bpm);
        }
    }

    private SpawnBlock() {
        let index: int = Random.Range(0, 5);
        GameObject.Instantiate(this.noteBlock, this.blockStartPositions[index]) as GameObject;
    }

    public AddPoints(changeAmount: int) {
        this.points += changeAmount;
        this.points = Mathf.Clamp(this.points, 0.0, 9999999.0);
        this.scoreText.text = this.points.toString();
    }
}
