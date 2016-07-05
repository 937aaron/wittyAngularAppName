wittyApp.controller('gameController', function($scope, $http){
forward = 0;
side = 0
var board = [
 ['a sign reading "Make your move"','green grass','ogre camp','temple of angles','sad code student','igloo','Gnome tinkerer','a coupoun for 1 free potion'],
 ['a mysterious bottle','day old soup','a nice but probably evil looking witch','gingerbread house','a magical sword','large rocks','river','The Shire'],
 ['Westeros','DRAGON!','A Dire Wolf','Jon Snow','Vampire','Wildling','Merlin','dirty boots and the ashes of their owner'],
 ['A sign saying LEAVE','The Ghost of a former lover','A bow and Single Arrow','a small keg of ale','Axes','Lumber','2 gold teeth','30 non-gold teeth'],
 ['A shadowy figure','a deck of cards','An empty bottle of wine','a large field','A rusted bucket','A wild horse','a small Kitty',' a small puppy'],
 ['An apple tree','20 feet of rope','small pouch of coins','a fire','a freshly killed Cornish Game hen','a unreadable tome','a slightly more readable tome','a picture book'],
 ['a tattered wall of glyphs','a glowing orb','a shield','a drawing of a future you','a bag of "Lord Sanders spices"','14 pebbles in a cirle','a map of an island with a rather large X','Nun-Chucks'],
 ['a box of gloves','a flase sense of hope','stone tablet with 10...rules?','a lute','a sundial','large eggs in a nest','Nessie','a pond'] ];
$scope.board = board[forward][side];
$scope.rollFunc= function(){
  $scope.diceMoveForward= Math.floor((Math.random() * 3));
  $scope.diceMoveSide= Math.floor((Math.random() * 3));
  $scope.moveHide = true;
  console.log($scope.diceMoveForward);
  console.log($scope.diceMoveSide);
  if (forward + $scope.diceMoveForward <= 7 &&  side + $scope.diceMoveSide <= 7){
      forward += $scope.diceMoveForward;
      side += $scope.diceMoveSide;
  }
  else if (forward + $scope.diceMoveForward > 7 || side + $scope.diceMoveSide > 7){
    forward = forward -  $scope.diceMoveForward;
    side = side - $scope.diceMoveSide;
    console.log("back")
  }

};

$scope.moveFunc = function(){
  console.log(forward);
  console.log(side)
  $scope.board = board[forward][side];

}
$scope.forwardFunc = function(){
  $scope.moveHide = false;

  if (forward + 1 > 7){
      $scope.cantMove = "You can no longer move forward";

    console.log("You cant do that");

  } else {
    $scope.cantMove = ""
    forward++;
    }
}
$scope.backFunc = function(){
  $scope.moveHide = false;

  if(forward - 1 < 0){
    $scope.cantMove = "You can no longer move back";
  } else {
  $scope.cantMove = ""
  forward = forward -1;
}
}
$scope.leftFunc = function(){
  $scope.moveHide = false;

  if(side - 1 < 0){
    $scope.cantMove = "You can no longer move left";
  } else {
  $scope.cantMove = ""
  side = side - 1;
  }
}
$scope.rightFunc = function(){
  $scope.moveHide = false;

  if (side + 1 > 7){
    $scope.cantMove = "You can no longer move Right";
    console.log("You cant do that");
    } else {
      $scope.cantMove = ""
      side++;
  }


}





});

// var board = [
//   ['','','','','','','',''],
//   ['','','','','','','',''],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   ['','','','','','','',''],
//   ['','','','','','','',''] ];
