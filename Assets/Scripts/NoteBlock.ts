
import { MonoBehaviour, Time, Vector3, Collider, Object, Debug } from "UnityEngine";
import { Button } from "UnityEngine.UI";
import { preProcessFile } from "typescript";
import GameManager from "./GameManager";

export default class NoteBlock extends MonoBehaviour {

private speed: float = 3;
private movementAmount: float = 0.75;
private button: Button;

private valid: bool;
private clicked: bool;

    private Start() {
        this.button = this.GetComponentInChildren<Button>();
        if (this.button != null)
            this.button.onClick.AddListener(this.ClickBlock);
    }

    private Update() : void {
       this.MoveBlock();
    }

    private MoveBlock() {
        let prevPos = this.transform.position;
        let targetPos = new Vector3(prevPos.x, prevPos.y, prevPos.z - this.movementAmount);
        let newPos = Vector3.MoveTowards(this.transform.position, targetPos, this.speed * Time.deltaTime);
        this.transform.position = newPos;
    }

    // allow to click block
    OnTriggerEnter(coll: Collider) {
        if (coll.gameObject.CompareTag("End Zone")) {
            this.valid = true;
            Debug.Log("valid");
        }
    }

    // disable ability to click block, destroy, and subtract points
    OnTriggerExit(coll: Collider) {
        if (coll.gameObject.CompareTag("End Zone")) {
            this.valid = false;
            Debug.Log("not valid");
            if (!this.clicked) GameManager.Instance.AddPoints(-1);
            this.button.onClick.RemoveListener(this.ClickBlock);
            Object.Destroy(this.gameObject);
            // could add object pooling later
        }
    }

    private ClickBlock() {
        this.clicked = true;

        if (this.valid)
            GameManager.Instance.AddPoints(1);
        else
            GameManager.Instance.AddPoints(-1);

        this.button.onClick.RemoveListener(this.ClickBlock);
        Object.Destroy(this.gameObject);
    }
}
