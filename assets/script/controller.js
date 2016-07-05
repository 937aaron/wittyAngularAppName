wittyApp.controller('gameController', function($scope, $http){
forward = 0;
side = 0
var board = [
 ['a sign reading "Make your move"',' some green grass','an ogre camp','a temple of angles','a sad coding student','igloo','a gnome tinkerer','a coupoun for 1 free potion'],
 ['a mysterious bottle','day old soup','a nice, but probs evil, looking witch','a gingerbread house','a magical sword','some large rocks','a river','The Shire'],
 ['Westeros','A DRAGON!','a dire wolf','Jon Snow','a vampire','a wildling','Merlin','dirty boots and the ashes of their owner'],
 ['a sign saying "LEAVE"','the ghost of a former lover','a bow and a single arrow','a small keg of ale','axes','lumber','2 gold teeth','30 non-gold teeth'],
 ['a shadowy figure','a deck of cards','an empty bottle of wine','a large field','a rusted bucket','a wild horse','a small Kitty',' a small puppy'],
 ['an apple tree','20 feet of rope','a small pouch of coins','a fire','a freshly killed Cornish Game hen','a unreadable tome','a slightly more readable tome','a picture book'],
 ['a tattered wall of glyphs','a glowing orb','a shield','a drawing of a future you','a bag of "Lord Sanders spices"','14 pebbles in a cirle','a map of an island with a rather large X','Nun-Chucks'],
 ['a box of gloves','a false sense of hope','stone tablet with 10...rules?','a lute','a sundial','large eggs in a nest','Nessie','a pond'] ];
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
      $scope.cantMove = "";
  }
  else if (forward + $scope.diceMoveForward > 7 || side + $scope.diceMoveSide > 7){
    forward = forward -  $scope.diceMoveForward;
    side = side - $scope.diceMoveSide;
    console.log("back");
    $scope.cantMove = "";
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
