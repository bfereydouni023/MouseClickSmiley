class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings
        // Define the locations of the smile and hands relative to the
        // main body location. This way, if we change the main body
        // location, the other values update too.
        this.bodyX = 400;
        this.bodyY = 350;
        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 20;

        this.mKey = null;
        
    }

    preload() {
   
    }

    create() {
        let my = this.my;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "yellowBody");

        // Create the two sprites, one for each type of smile
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "smile");
        my.sprite.dimple = this.add.sprite(this.smileX, this.smileY, "smileDimple");
        
        // Create the sprite for the left and right hands
        //my.sprite.leftOpenHand = this.add.sprite(this.leftHandX, this.lefthandY, "handOpen");
        //my.sprite.leftOpenHand.flipX = true;   // flip sprite to have thumb on correct side
        //my.sprite.rightOpenHand = this.add.sprite(this.rightHandX, this.rightHandY, "handOpen");

        // Since sprites are visible when created and we only want one smile to be shown
        // at a time, make the "dimple" smile not visible to start.
        my.sprite.dimple.visible = false;


        this.mKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

        this.input.on('pointerdown',(pointer) => {
            const x = pointer.x;
            const y = pointer.y;

            this.bodyX = x;
            this.bodyY = y;
            this.smileX = this.bodyX;
            this.smileY = this.bodyY + 20;

            my.sprite.body.setPosition(this.bodyX, this.bodyY);
        my.sprite.smile.setPosition(this.smileX, this.smileY);
        my.sprite.dimple.setPosition(this.smileX, this.smileY);
        });
        
         document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'
    }

    update() {
        let my = this.my;

        if (Phaser.Input.Keyboard.JustDown(this.mKey)) {
            const currentScene = this.scene.key;

            if (currentScene === 'smileyScene') {       
                this.scene.start('mouseSmiley');
            } else if (currentScene === 'mouseSmiley') {
                this.scene.start('smileyScene');
            }
        }        

        
    }
}