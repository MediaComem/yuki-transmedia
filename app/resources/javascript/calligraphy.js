var settings = {
    rows: 3,                    // number of rows [3 ... 9]
    cols: 3,                    // number of columns [3 ... 9]
    hole: 9,                   // initial hole position [1 ... rows*columns]
    shuffle: true,             // initially show shuffled pieces [true|false]
    numbers: false,              // initially show numbers on pieces [true|false]
    language: 'fr',             // language for gui elements [language code]

    // display additional gui controls
    control: {
        shufflePieces: false,    // display 'Shuffle' button [true|false]
        confirmShuffle: false,   // ask before shuffling [true|false]
        toggleOriginal: true,   // display 'Original' button [true|false]
        toggleNumbers: false,    // display 'Numbers' button [true|false]
        counter: true,          // display moves counter [true|false]
        timer: true,            // display timer (seconds) [true|false]
        pauseTimer: true        // pause timer if 'Original' button is activated
                                // [true|false]
    },

    // perform actions when the puzzle is solved sucessfully
    success: {
        //fadeOriginal: false,    // cross-fade original image [true|false]
        callback: function (results) {
            alert('Resolu en ' + results.moves + ' coups et en ' +
                + results.seconds + ' secondes.');
        }//,    // callback a user-defined function [function]
                                // the function is passed an object as its argument
                                // which includes the fields 'moves' and 'seconds'
        //callbackTimeout: 300    // time in ms after which the callback is called
    },

    // animation speeds and settings
    animation: {
        shuffleRounds: 3,       // number of shuffle rounds [1 ... ]
        shuffleSpeed: 800,      // time in ms to perform a shuffle round
        slidingSpeed: 200,      // time in ms for a single move
        fadeOriginalSpeed: 600  // time in ms to cross-fade original image
    },

    // additional style information not specified via css
    style: {
        gridSize: 2,            // space between two pieces in px
        overlap: true,          // if true, adjacent piece borders will overlap
                                // applies only if gridSize is set to 0
        backgroundOpacity: 0.1  // opacity of the original image behind the pieces
                                // [0 ... 1] (0 means no display)
    }
}

var texts = {
    shuffleLabel:           'Mélanger',
    toggleOriginalLabel:    'Original',
    toggleNumbersLabel:     'Numbers',
    confirmShuffleMessage:  'Do you really want to shuffle?',
    movesLabel:             'moves',
    secondsLabel:           'seconds'
}

$(document).ready(function() {
    $('img.jqPuzzle').jqPuzzle(settings, texts); // apply to all images
});