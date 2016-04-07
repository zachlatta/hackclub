var cat = $("#cat");
var frog = $("#frog");
var cow = $("#cow");

var catSound = new Audio("sounds/cat.mp3");
var frogSound = new Audio("sounds/frog.mp3");
var cowSound = new Audio("sounds/cow.mp3");

cat.click(function () {
  catSound.play();
});

frog.click(function () {
  frogSound.play();
});

cow.click(function () {
  cowSound.play();
});
