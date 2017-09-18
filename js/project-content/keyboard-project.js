var keyboardObject = {
  numberOfKeys: 29,
  scaleLength: 15,
  color: {
    highlightColor: '6af',
    selectColor: 'b22',
    black: ''
  },
  majorScale: [
    0,  // root
    2,  // whole
    4,  // whole
    5,  // half
    7,  // whole
    9,  // whole
    11, // whole
    12  // half
  ],
  minorScale: [
    0,  // root
    2,  // whole
    3,  // half
    5,  // whole
    7,  // whole
    8,  // half
    10, // whole
    12  // whole
  ],
  scaleProgression: [0,1,2,3,4,5,6,7,6,5,4,3,2,1,0], // index of each note to play in scale array
  majorTriChord: [
    0, // +0 semitones
    4, // +4 semitones
    7  // +7 semitones
  ],
  minorTriChord: [
    0, // +0 semitones
    3, // +3 semitones
    7  // +7 semitones
  ]
}

function createMusicTheoryKeyboard(header) {
  if(header === 'label') return 'Music Theory Keyboard';
  var $keyboardContainer = $('<div class="col-12 col-m-12 container">');
  var $keyboard = $('<div id="keyboard">').appendTo($keyboardContainer);


  return null;
}
