class Medical{
    constructor(){
        this.x= 100;
        this.y= 300;
        this.money= score;
        this.medicine =[];
    
        this.creamButton= createButton('150 INR Food-20 units');
        this.bandageButton= createButton('2 INR Food-5 units');
        this.crepeButton= createButton('200 INR Food-25 units');
        this.syringeButton= createButton('100 INR Food-30 units');
        this.syrupButton= createButton('100 INR Food-40 units');

        this.cancelButton= createButton('Go Back');
    }

    hideAll(){
        for(var i=0; i<6; i++){
            this.medicine[i].destroy();
            this.creamButton.hide();
            this.bandageButton.hide();
            this.crepeButton.hide();
            this.syringeButton.hide();
            this.syrupButton.hide();
        }
        gameState = "start";
    }

    display(){

        this.cancelButton.position(1270,30); 
        this.cancelButton.style('width', '50px');
        this.cancelButton.style('height', '40px');
        this.cancelButton.style('background', 'red');
        this.cancelButton.show();
        this.cancelButton.mousePressed(()=>{
            this.hideAll();
        })

        this.creamButton.position(50,370); 
        this.creamButton.style('width', '100px');
        this.creamButton.style('height', '40px');
        this.creamButton.style('background', 'cyan');
        this.creamButton.show();

        this.bandageButton.position(320,370); 
        this.bandageButton.style('width', '100px');
        this.bandageButton.style('height', '40px');
        this.bandageButton.style('background', 'cyan');
        this.bandageButton.show();

        this.crepeButton.position(620,370); 
        this.crepeButton.style('width', '100px');
        this.crepeButton.style('height', '40px');
        this.crepeButton.style('background', 'cyan');
        this.crepeButton.show();

        this.syringeButton.position(880,370); 
        this.syringeButton.style('width', '100px');
        this.syringeButton.style('height', '40px');
        this.syringeButton.style('background', 'cyan');
        this.syringeButton.show();

        this.syrupButton.position(1180,370); 
        this.syrupButton.style('width', '100px');
        this.syrupButton.style('height', '40px');
        this.syrupButton.style('background', 'cyan');
        this.syrupButton.show();
        
        for(var i=0; i<6; i++){
            
            this.medicine[i]= createSprite(this.x,this.y,20,20);
            this.x+= 280;
            
            if(i===6){
                this.y= 250;
                this.x= 100;
            }

            switch(i){
                case 0: this.medicine[i].addImage(cream);
                this.medicine[i].scale= 0.5;
                break;
                case 1: this.medicine[i].addImage(bandage);
                this.medicine[i].scale= 0.3;
                break;
                case 2: this.medicine[i].addImage(crepeBandage);
                this.medicine[i].scale= 0.2;
                break;
                case 3: this.medicine[i].addImage(syringe);
                this.medicine[i].scale= 0.2;
                break;
                case 4: this.medicine[i].addImage(syrupMed);
                this.medicine[i].scale= 0.1;
                break;
                default: break;

            }
        }
        
    }
}    