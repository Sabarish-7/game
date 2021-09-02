class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      
      }
      form = new Form()
      form.display();
    

    player1 = createSprite(300,200);
    player1.addImage(player1);
    player2 = createSprite(100,200);
    player2.addImage(player2);
    players = [player1, player2];
  }}

  play(){
    form.hide();
   // image(bg1,0,0,1500,1000);
      

    if(allPlayers !== undefined){

      var index = 0;
      var x = 175 ;
      var y;
      for(var plr in allPlayers){
        index = index + 1 ;
        x = x + 200;
        x= displayHeight - allPlayers[plr].distance;
        players[index-1].x = x;
       

    }}
    drawSprites();

  
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }}}