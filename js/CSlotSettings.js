function CSlotSettings(){
    
    this._init = function(){
        this._initSymbolSpriteSheets();
        this._initSymbolAnims();
        this._initSymbolsOccurence();
    };
    
    this._initSymbolSpriteSheets = function(){
        s_aSymbolData = new Array();
        for(var i=1;i<NUM_SYMBOLS+1;i++){
            var oData = {   // image to use
                            images: [s_oSpriteLibrary.getSprite('symbol_'+i)], 
                            // width, height & registration point of each sprite
                            frames: {width: SYMBOL_SIZE, height: SYMBOL_SIZE, regX: 0, regY: 0}, 
                            animations: {  static: [0, 1],moving:[1,2] }
            };

            s_aSymbolData[i] = new createjs.SpriteSheet(oData);
        }  
    };
    
    this.initSymbolWin = function(szSymbolWin){
        var aSplit = szSymbolWin.split("#");
        
        s_aSymbolWin = new Array();
        
        for(var i=0;i<aSplit.length;i++){
            var aWins = aSplit[i].split(",");
            s_aSymbolWin[i] = new Array();
            for(var j=0;j<aWins.length;j++){
                s_aSymbolWin[i][j] = parseFloat(aWins[j]);
            }
        }
    };
    
    this._initSymbolAnims = function(){
        s_aSymbolAnims = new Array();
        for(var i=1;i<NUM_SYMBOLS+1;i++){
            var oData = {   
                            framerate: 20,
                            images: [s_oSpriteLibrary.getSprite('symbol_' +i +'_anim')], 
                            // width, height & registration point of each sprite
                            frames: {width: SYMBOL_SIZE, height: SYMBOL_SIZE, regX: 0, regY: 0}, 
                            animations: {  static: [0, 1],anim:[1,14] }
            };

            s_aSymbolAnims[i-1] = new createjs.SpriteSheet(oData);
        }  
    };
    
    this._initSymbolsOccurence = function(){
        s_aRandSymbols = new Array();
        
        var i;
        //OCCURENCE FOR SYMBOL 1
        for(i=0;i<1;i++){
            s_aRandSymbols.push(1);
        }
        
        //OCCURENCE FOR SYMBOL 2
        for(i=0;i<2;i++){
            s_aRandSymbols.push(2);
        }
        
        //OCCURENCE FOR SYMBOL 3
        for(i=0;i<3;i++){
            s_aRandSymbols.push(3);
        }
        
        //OCCURENCE FOR SYMBOL 4
        for(i=0;i<4;i++){
            s_aRandSymbols.push(4);
        }
        
        //OCCURENCE FOR SYMBOL 5
        for(i=0;i<4;i++){
            s_aRandSymbols.push(5);
        }
        
        //OCCURENCE FOR SYMBOL 6
        for(i=0;i<6;i++){
            s_aRandSymbols.push(6);
        }
        
        //OCCURENCE FOR SYMBOL 7
        for(i=0;i<6;i++){
            s_aRandSymbols.push(7);
        }
        
        //OCCURENCE FOR SYMBOL WILD
        for(i=0;i<1;i++){
            s_aRandSymbols.push(8);
        }
        
        //OCCURENCE FOR SYMBOL BONUS
        for(i=0;i<1;i++){
            s_aRandSymbols.push(9);
        }
        
        //OCCURENCE FOR SYMBOL FREESPIN
        for(i=0;i<1;i++){
            s_aRandSymbols.push(10);
        }
    };
    
    this._init();
}

var s_aSymbolData;
var s_aSymbolWin;
var s_aSymbolAnims;
var s_aRandSymbols;