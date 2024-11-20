import { GeniesSdk } from 'Genies.Components.SDK.Core';
import { UserAvatar } from "Genies.Components.Sdk.External.Avatars";
import { MonoBehaviour, Input, Vector3, Mathf, Time, GameObject, RuntimeAnimatorController, Animator, Collider } from 'UnityEngine';

export default class PlayerController extends MonoBehaviour {
    
    // class taken from tutorial, not used

    @Header("Player Settings")
    @SerializeField private playerSpeed: number;
    @SerializeField private playerAnimator: RuntimeAnimatorController;

    private targetLane = 0;
    private mouseStartPos;

    public static OnAvatarLoaded : GeniesEvent<[]> = new GeniesEvent<[]>();

    async Start() {
        await GeniesSdk.Initialize();
        await this.LoadAvatar();
        PlayerController.OnAvatarLoaded.trigger();
    }
    
    //Load Avatar, attach to Player Root, and trigger the run animation
    private async LoadAvatar() {
        let userAvatar = await UserAvatar.CreateAndLoadUserAvatar();
        userAvatar.transform.parent = this.transform;
        userAvatar.SetAnimatorController(this.playerAnimator);
        //userAvatar.GetComponentInChildren<Animator>(true).SetFloat("idle_run_walk", 1);
    }

    Update() {
        //this.CheckSwipe();
        //this.MovePlayer();
    }
            
    private CheckSwipe(){
        if (Input.GetMouseButtonDown(0))
        {
            this.mouseStartPos = Input.mousePosition;
        }
    
        if (Input.GetMouseButtonUp(0))
        {
            // Calculate the swipe direction vector
            let direction = Vector3.op_Subtraction(Input.mousePosition, this.mouseStartPos);
    
            // Determine if the swipe was more horizontal than vertical
            if (Mathf.Abs(direction.x) > Mathf.Abs(direction.y))
            {
                //Change target lane based on swipe direction
                if (direction.x > 0 && this.targetLane < 1) {
                    this.targetLane = this.targetLane + 1;
                }
                if (direction.x < 0 && this.targetLane > -1) {
                    this.targetLane = this.targetLane - 1;
                }
            }
        }
    }
    
    //Move player towards target lane
    private MovePlayer() {
        let playerPos = this.transform.position;
        let targetPos = new Vector3(this.targetLane, playerPos.y, playerPos.z);
        let newPos = Vector3.MoveTowards(playerPos, targetPos, this.playerSpeed * Time.deltaTime);
        this.transform.position = newPos;
    }
}