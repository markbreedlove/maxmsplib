this.autowatch = 1;
this.inlets = 3;
this.outlets = 2;

var locale = 'US';

var map = {
    'US': {
        '113': 60, '119': 61, '101': 62, '114': 63, '116': 64, '121': 65,
        '117': 66, '105': 67, '111': 68, '112': 69, '97': 70, '115': 71,
        '100': 72, '102': 73, '103': 74, '104': 75, '106': 76, '107': 77,
        '108': 78, '122': 79, '120': 80, '99': 81, '118': 82, '98': 83,
        '110': 84, '109': 85
    },
    'FR': {
        '97': 60, '122': 61, '101': 62, '114': 63, '116': 64, '121': 65,
        '117': 66, '105': 67, '111': 68, '112': 69, '113': 70, '115': 71,
        '100': 72, '102': 73, '103': 74, '104': 75, '106': 76, '107': 77,
        '108': 78, '109': 79, '119': 80, '120': 81, '99': 82, '118': 83,
        '98': 84, '110': 85
    },
    'DE': {
        '113': 60, '119': 61, '101': 62, '114': 63, '116': 64, '122': 65,
        '117': 66, '105': 67, '111': 68, '112': 69, '97': 70, '115': 71,
        '100': 72, '102': 73, '103': 74, '104': 75, '106': 76, '107': 77,
        '108': 78, '121': 79, '120': 80, '99': 81, '118': 82, '98': 83,
        '110': 84, '109': 85
    }
};


function loadbang() {
    setinletassist(0, function() { assist('Character code, key down'); });
    setinletassist(1, function() { assist('Character code, key up'); });
    setinletassist(3, function() { assist('Locality'); });
    setoutletassist(0, function() { assist('MIDI note, key down'); });
    setoutletassist(1, function() { assist('MIDI note, key up'); });
}


function msg_int(n) {
    switch(this.inlet) {
    case 0:
    case 1:
        var note = this.map[this.locale][n];
        if (note) {
            this.outlet(this.inlet, note);
        }
        break;
    }
}


function setlocale(s) {
    switch (this.inlet) {
    case 2:
        this.locale = s;
        break;
    }
}

