
$('body').on('keydown', (event) => {
  console.log('I did something');
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

console.log('Client is running in the browser!');

