'use strict';

var $ = $ || $$;
var console = window.console;
var _ = _;

var TX = {
    /**
     * @namespace   TX.constants
     * @memberOf    TX
     * @type {Object}
     */
    constants: {
        backgroundSelector: '.background',
        fadeInDuration: 500,
        fadeOutDuration: 500,
        wordList: wordList,
        SYMBOL_EOL: '\n',
        DELIMITER_SPACE: this.wordList.RESERVED[0],
        DELIMITER_EOL: this.wordList.RESERVED[1],
        DELIMITER_LOWERCASE: this.wordList.RESERVED[2],
        DELIMITER_UPPERCASE: this.wordList.RESERVED[3],
        DELIMITER_PROPERCASE: this.wordList.RESERVED[4],
        DELIMITER_VOCAB: this.wordList.RESERVED[5],
        background: {
            svg: {
                neonDemon: {
                    type: 'svg',
                    selector: '#svg-neon-demon',
                    class: 'neon-blue',
                    animate: function (element) {
                        var children = $(element).children();

                        $(children[0]).velocity({
                            stroke: '#FE1968'
                        }, {
                            duration: 1000,
                            loop: true
                        });
                        $(children[1]).velocity({
                            stroke: '#FE1968'
                        }, {
                            delay: 20,
                            duration: 1000,
                            loop: true
                        });
                        $(children[2]).velocity({
                            stroke: '#FE1968'
                        }, {
                            delay: 40,
                            duration: 1000,
                            loop: true
                        });
                        $(children[3]).velocity({
                            stroke: '#FE1968'
                        }, {
                            delay: 40,
                            duration: 1000,
                            loop: true
                        });
                    }
                },
                simplePath: {
                    type: 'svg',
                    selector: '#svg-simple-path',
                    class: 'neon-blue',
                    animate: function (element) {
                        return;
                    }
                },
                symbol: {
                    type: 'svg',
                    selector: '#svg-symbol',
                    class: 'neon-blue',
                    animate: function (element) {
                        return;
                    }
                }
            },
            image: {}
        },
        animateStyleOptions: [
            'bounce',
            'flash',
            'pulse',
            'rubberBand',
            'shake',
            'headShake',
            'swing',
            'tada',
            'wobble',
            'jello',
            'bounceIn',
            'bounceInDown',
            'bounceInLeft',
            'bounceInRight',
            'bounceInUp',
            'bounceOut',
            'bounceOutDown',
            'bounceOutLeft',
            'bounceOutRight',
            'bounceOutUp',
            'fadeIn',
            'fadeInDown',
            'fadeInDownBig',
            'fadeInLeft',
            'fadeInLeftBig',
            'fadeInRight',
            'fadeInRightBig',
            'fadeInUp',
            'fadeInUpBig',
            'fadeOut',
            'fadeOutDown',
            'fadeOutDownBig',
            'fadeOutLeft',
            'fadeOutLeftBig',
            'fadeOutRight',
            'fadeOutRightBig',
            'fadeOutUp',
            'fadeOutUpBig',
            'flipInX',
            'flipInY',
            'flipOutX',
            'flipOutY',
            'lightSpeedIn',
            'lightSpeedOut',
            'rotateIn',
            'rotateInDownLeft',
            'rotateInDownRight',
            'rotateInUpLeft',
            'rotateInUpRight',
            'rotateOut',
            'rotateOutDownLeft',
            'rotateOutDownRight',
            'rotateOutUpLeft',
            'rotateOutUpRight',
            'hinge',
            'rollIn',
            'rollOut',
            'zoomIn',
            'zoomInDown',
            'zoomInLeft',
            'zoomInRight',
            'zoomInUp',
            'zoomOut',
            'zoomOutDown',
            'zoomOutLeft',
            'zoomOutRight',
            'zoomOutUp',
            'slideInDown',
            'slideInLeft',
            'slideInRight',
            'slideInUp',
            'slideOutDown',
            'slideOutLeft',
            'slideOutRight',
            'slideOutUp'
        ],
        tones: {
            afflicted: {},
            aspirational: {},
            awestruck: {},
            childish: {},
            conspiratorial: {},
            constricted: {},
            contemplative: {},
            defensive: {},
            desperate: {},
            enigmatic: {},
            fiery: {},
            focused: {},
            frightened: {},
            funny: {},
            grateful: {},
            greedy: {},
            griefstruck: {},
            homesick: {},
            lonely: {},
            loyal: {},
            murderous: {},
            musical: {},
            passionate: {},
            resigned: {},
            rosy: {},
            satisfied: {},
            serene: {},
            soaring: {},
            stony: {},
            tender: {},
            timid: {},
            torn: {},
            victorious: {},
            vindicated: {},
            whimsical: {},
            wistful: {},
            zen: {},
        },
        imgPaths: [
            'q1p7bh3shj8-nasa.jpg',
            'ugs_r4r46cw-greg-rakozy.jpg',
            '8pd8ycjjkiq-maxime-le-conte-des-floris.jpg',
            'r3ge7vemka-ishan-seefromthesky.jpg',
            'paykyb-8er8-ian-schneider.jpg',
            '2-aurelien-bellanger.jpg',
            '4-sudiono-muji.jpg',
            '8-dirk-sebregts.jpg',
            '9-jens-mayer.jpg',
            '10-marco-bonomo.jpg',
            '4-ruben-dos-santos.jpg',
            '5-calvin-chin.jpg',
            '6-matthew-wiebe.jpg',
            '7-davey-heuser.jpg',
            '8-mika-ruusunen.jpg',
            '10-sylwia-bartyzel.jpg',
            'ehqi7rrwhre-cole-patrick.jpg',
            'eyjdbbik7la-joseph-barrientos.jpg',
            'rlyscmbf6ei-grzegorz-mleczek.jpg',
            '4-hugo-kerr.jpg',
            '10-hartmut-tobies.JPG',
            '1-alberto-restifo.jpg',
            '4-ales-krivec.jpg',
            '3-liane-metzler.jpg',
            '5-lance-anderson.jpg',
            '7-israel-sundseth.jpg',
            '8-jacki-potorke.jpg',
            '10-steven-lewis.jpg',
            'yzbrsfzxnow-jan-erik-waider.jpg',
            'cphxm61ob_0-paul-itkin.jpg',
            'ndqa4d5nl0k-stephy-pariande.jpg'
        ]
    },
    debug: true,
    create: {
        background: function (obj = false) {
            if (!obj) console.error('No options obj given.');

            return new Promise(function (resolve, reject) {
                if (obj.type === 'image') {
                    var imageCss = {
                        background: 'no-repeat center url(' + obj.path + ')'
                    };

                    if (obj.imageFilter) {
                        imageCss['filter'] = obj.imageFilter;
                        imageCss['-moz-filter'] = obj.imageFilter;
                        imageCss['-webkit-filter'] = obj.imageFilter;
                    }

                    $('<img/>').attr('src', obj.path).load(function() {
                        $(this).remove(); // prevent memory leaks as @benweet suggested

                        $(TX.constants.backgroundSelector)
                            .css(imageCss)
                            .fadeIn(TX.constants.fadeInDuration, function () {
                                resolve();
                            });
                    });
                } else if (obj.type === 'svg') {
                    var svg = $($(obj.selector).html());

                    if (obj.class) {
                        svg.addClass(obj.class);
                    }

                    $(TX.constants.backgroundSelector)
                        .append(svg)
                        .fadeIn(TX.constants.fadeInDuration, function () {
                            if (obj.animate) {
                                obj.animate($(this).children(svg).eq(0));
                            }
                            resolve();
                        });
                }
            });

        },
        event: function (obj, autoAdd) {
            var event = {
                id: TX.eventQueue.newEventId(),
                dateCreated: new Date(),
                type: obj.type || 'generic-event',
                _context: obj.context || false,
                _pre: (typeof obj.pre === 'function') ? obj.pre : function (resolve) {
                    resolve(true);
                },
                _main: obj.main || function (resolve) {
                    resolve(true);
                },
                _post: (typeof obj.post === 'function') ? obj.post : function (resolve) {
                    resolve(true);
                },
                pre: function () {
                    var self = this;
                    return new Promise(function (resolve, reject) {
                        self._pre(resolve, reject, self._context);
                    });
                },
                main: function () {
                    var self = this;
                    return new Promise(function (resolve, reject) {
                        self._main(resolve, reject, self._context);
                    });
                },
                post: function () {
                    var self = this;
                    return new Promise(function (resolve, reject) {
                        self._post(resolve, reject, self._context);
                    });
                },
                addFirst: function () {
                    TX.eventQueue.addFirst(this);
                },
                addLast: function () {
                    TX.eventQueue.addLast(this);
                },
                run: function (previousEvent = false) {
                    var self = this;
                    TX.eventQueue.isRunningEvent = true;
                    console.log(this);
                    self.pre().then(function() {
                        self.main().then(function () {
                            self.post().then(function () {
                                TX.eventQueue.isRunningEvent = false;
                                TX.eventQueue.previousEvent = self;
                                TX.eventQueue.go();
                            }).catch(function () {
                                console.error('Error on post.');
                            });
                        }).catch(function () {
                            console.error('Error on main.');
                        });
                    }).catch(function () {
                        console.error('Error on pre.');
                    });
                }
            };

            if (autoAdd) {
                event.addLast();
                return event.id;
            } else {
                return event;
            }
        },
        eventQueue: function () {
            var arr = new Array();

            arr.eventId = 0;
            arr.isRunningEvent = false;
            arr.previousEvent = false;
            arr.newEventId = function () {
                return arr.eventId++;
            };
            arr.addFirst = function (item) {
                this.unshift(item);
                if (!this.isRunningEvent) {
                    this.go();
                }
            };
            arr.addLast = function (item) {
                this.push(item);
                if (!this.isRunningEvent) {
                    this.go();
                }
            };
            arr.go = function () {
                var event = this.shift();
                if (!event) return;

                if (this.previousEvent) {
                    console.log('previousEvent', this.previousEvent);
                    event._context._previousEvent = this.previousEvent;
                }
                event.run();
            };

            return arr;
        },
        testEvent: function () {
            var event = TX.create.event({
                type: 'test-event',
                context: {
                    payload: 'This is a test event.'
                },
                pre: function (resolve, reject, context) {
                    var self = this;
                    setTimeout(function () {
                        console.log(self.id, 'pre');
                        resolve(true);
                    }, 1000);
                },
                main: function (resolve, reject, context) {
                    var self = this;
                    setTimeout(function () {
                        console.log(self.id, 'main');
                        console.log(self.id, context);
                        resolve(true);
                    }, 500);
                },
                post: function (resolve, reject, context) {
                    console.log(this.id, 'post');
                    resolve(true);
                }
            });

            event.addLast();
        },
        phrase: function (obj) {
            if (obj.text === false) {
                return false;
            }

            var phrase = {
                display: {
                    class: obj.class || 'text-default',
                    direction: obj.direction || 'rtl',
                    duration: obj.duration || 500,
                    elementSelector: obj.elementSelector || 'body',
                    fadeIn: obj.fadeIn || true,
                    fadeOut: obj.fadeOut || true,
                    isPhraseStart: obj.isPhraseStart || false,
                    isPhraseEnd: obj.isPhraseEnd || false,
                    isSentenceStart: obj.isSentenceStart || false,
                    isSentenceEnd: obj.isSentenceEnd || false,
                    isParagraphStart: obj.isParagraphStart || false,
                    isParagraphEnd: obj.isParagraphEnd || false,
                    isDocEnd: obj.isDocEnd || false,
                    isDocStart: obj.isDocStart || false,
                    readingTime: obj.readingTime || (obj.text.length * 80)
                },
                text: obj.text,
                textillate: {
                    // the default selector to use when detecting multiple texts to animate
                    // selector: '.texts',

                    // enable looping
                    loop: false,

                    // sets the minimum display time for each text before it is replaced
                    minDisplayTime: obj.duration || 2000,

                    // sets the initial delay before starting the animation
                    // (note that depending on the in effect you may need to manually apply
                    // visibility: hidden to the element before running this plugin)
                    initialDelay: 0,

                    // set whether or not to automatically start animating
                    autoStart: true,

                    // custom set of 'in' effects. This effects whether or not the
                    // character is shown/hidden before or after an animation
                    inEffects: [],

                    // custom set of 'out' effects
                    outEffects: [ 'hinge' ],

                    // in animation settings
                    in: {
                        // set the effect name
                        effect: obj.effectIn || TX.settings.effectIn,

                        // set the delay factor applied to each consecutive character
                        delayScale: 1.5,

                        // set the delay between each character
                        delay: 50,

                        // set to true to animate all the characters at the same time
                        sync: false,

                        // randomize the character sequence
                        // (note that shuffle doesn't make sense with sync = true)
                        shuffle: false,

                        // reverse the character sequence
                        // (note that reverse doesn't make sense with sync = true)
                        reverse: false,

                        // callback that executes once the animation has finished
                        callback: obj.callbackIn || function () {}
                    },

                    // out animation settings.
                    out: {
                        effect: obj.effectOut || TX.settings.effectOut,
                        delayScale: 1.5,
                        delay: 50,
                        sync: false,
                        shuffle: false,
                        reverse: false,
                        callback: obj.callbackOut || function () {}
                    },

                    // callback that executes once textillate has finished
                    callback: obj.callbackFinal || function () {},

                    // set the type of token to animate (available types: 'char' and 'word')
                    type: 'char'
                },
                tone: obj.tone || 'focused'
            };

            return phrase;
        },
        random: function (obj) {
            var min;
            var max;
            var retVal;
            switch (obj.type) {
                case 'integer':
                case 'int':
                    min = Math.ceil(obj.min || 0);
                    max = Math.floor(obj.max || 10);
                    retVal = Math.floor(Math.random() * (max - min)) + min;
                    break;
                case 'float':
                    min = Math.ceil(obj.min || 0);
                    max = Math.floor(obj.max || 10);
                    retVal = (Math.random() * (max - min)) + min;
                    break;
                case 'boolean':
                    retVal = (Math.random() >= 0.5);
                    break;
                default:
                    retVal = (Math.random() >= 0.5);
                    break;
            }
            return retVal;
        }
    },
	/**
	 * @memberOf TX
	 * @namespace
	 * @type {Object}
	 */
	display: {
        background: {
            hide: function (obj = false) {
                if (!obj) {
                    console.error('No options object given.');
                }

                if (obj.type === 'fadeOut') {
                    $(TX.constants.backgroundSelector).fadeOut(obj.duration || TX.constants.fadeOutDuration, function () {
                        if (obj.clear) {
                            $(this)
                                .removeAttr('style')
                                .children().remove();
                        }
                        if (obj.callback) {
                            obj.callback();
                        }
                    });
                } else {
                    $(TX.constants.backgroundSelector).hide(0, function () {
                        if (obj.clear) {
                            $(this)
                                .removeAttr('style')
                                .children().remove();
                        }
                        if (obj.callback) {
                            obj.callback();
                        }
                    });
                }
            }
        }
	},
	handlers: {
		click: function (event) {
            event.preventDefault(); // Keeps hash

            var getRole = function (element) {
                var targetRole = $(element).attr('TX-role') || false;

                if (targetRole === false) {
                    return getRole($(element).parent());
                } else {
                    return targetRole;
                }
            };

            var roleRouter = function (role) {
                switch (role) {
                    case 'menu-toggle':
                        $('#wrapper').toggleClass('toggled');
                        break;
                    case 'escape':
                        break;
                    default:
                        break;
                }
            };

            var role = getRole(event.target);

            roleRouter(role);
		},
		onLoad: function () {
            TX.eventQueue = TX.create.eventQueue();

            TX.create.background(TX.constants.background.svg.symbol);
			// setTimeout(function() {
			// 	$("#loader-page-container").slideUp("fast");
			// }, 250);

            // $('#rawText').change(function () {
            //     var text = TX.parseText($('#rawText').val());
            //     console.log(text);
            // });
		}
	},
	settings: {
        get effectIn () {
            return TX.constants.animateStyleOptions[TX.create.random({
                type: 'int',
                min: 0,
                max: 75
            })];
        },
        get effectOut () {
            return TX.constants.animateStyleOptions[TX.create.random({
                type: 'int',
                min: 0,
                max: 75
            })];
        },
        imgPathPrefix: 'assets/img/unsplash/',
        rawTextElementSelector: '#rawText',
        textElementSelector: '#text',
        preferredPhraseLength: 4,
        phraseTerminator: '\n',
        isCool: true
	},
    start: function () {
        var text = TX.convertArrayToText(TX.decodeTextToArray(location.hash.substring(1, location.hash.length)));

        TX.display.background.hide({
            type: 'fadeOut',
            clear: true,
            duration: 200,
            callback: function () {
                TX.print(text, TX.settings);
            }
        });
    },
    stop: function () {
        $(TX.settings.textElementSelector)
            .children().eq(0)
            .children().eq(0)
            .textillate('stop');
    },
    animate: function (phrase = false, callback = function (){}) {
        if (!phrase) return;

        var $textNode = $('<p class="text-dramatic" data-text="' + phrase.text.toUpperCase() + '">' + phrase.text + '</p>');
        var backgroundPromise;

        if (Math.random() >= 0.5) {
            backgroundPromise = TX.create.background({
                type: 'image',
                imageFilter: 'blur(6px) saturate(0.8) brightness(0.5)',
                path: TX.settings.imgPathPrefix + TX.constants.imgPaths[Math.floor(Math.random() * TX.constants.imgPaths.length)]
            });
        } else {
            backgroundPromise = TX.create.background(TX.constants.background.svg.neonDemon);
        }

        backgroundPromise
            .then(function () {
                var prom = new Promise(function (resolve, reject) {
                    phrase.textillate.callback = resolve;
                    $(TX.settings.textElementSelector)
                        .html('')
                        .append($textNode)
                        .children().eq(0)
                        .textillate(phrase.textillate);
                })
            .then(function () {
                TX.display.background.hide({
                    type: 'fadeOut',
                    clear: true,
                    // duration: 200,
                    callback: callback
                });
            });
        });
    },
    next: function () {
        console.log('tx.next');
        return;
        var phrase = TX.queue.shift();
        TX.animate(phrase, function () {
            if (TX.queue.length > 0) {
                TX.next();
            } else {
                console.log('done');
            }
        });
    },
    makeHash: function (string) {
        if (history.pushState) {
            history.pushState(null, null, '#' + string);
        }
        else {
            location.hash = '#' + string;
        }
    },
    cleanWord: function (word) {
        return word
                .replace(/[\u2018\u2019]/g, "'") // Replace smart single quotes
                .replace(/[\u201C\u201D]/g, '"') // Replace smart double quotes
                .trim();
    },
    changeCaseOfText: function (text, requestedCase) {
        if (requestedCase === 'UPPERCASE' || requestedCase === TX.constants.DELIMITER_UPPERCASE) {
            return String(text).toUpperCase();
        } else if (requestedCase === 'LOWERCASE' || requestedCase === TX.constants.DELIMITER_LOWERCASE) {
            return String(text).toLowerCase();
        } else if (requestedCase === 'PROPERCASE' || requestedCase === TX.constants.DELIMITER_PROPERCASE) {
            return String(text).replace(/\w\S*/g, function(TXt){return TXt.charAt(0).toUpperCase() + TXt.substr(1).toLowerCase();});
        } else {
            return String(text);
        }
    },
    decodeTextToArray: function (text) {
        var returnArray = text.split(TX.constants.DELIMITER_EOL);
        return returnArray;
    },
    convertArrayToText: function (array) {
        var returnString = '';
        var word;
        var wordCase;
        var wordInt;
        var tempPhrase;
        var splitRegex = new RegExp(/(?=[⌉⌈⌊⌋])/, 'g');

        for (var i = 0; i < array.length; i++) {
            tempPhrase = array[i].split(splitRegex);

            for (var j = 0; j < tempPhrase.length; j++) {
                if (j !== 0) returnString += ' '; // Adds spaces between words
                word = tempPhrase[j];
                wordCase = word.substr(0, 1);
                word = word.substr(1);
                wordInt = parseInt(word, 36);
                if (wordCase === TX.constants.DELIMITER_VOCAB) {
                    returnString += word;
                } else if (wordInt < TX.constants.wordList.WORD.length + TX.constants.wordList.PHRASES.length + TX.constants.wordList.PUNCTUATION.length) {
                    if (wordInt < TX.constants.wordList.WORD.length) {
                        returnString += TX.changeCaseOfText(TX.constants.wordList.WORD[wordInt], wordCase);
                    } else if (wordInt < TX.constants.wordList.WORD.length + TX.constants.wordList.PHRASES.length) {
                        returnString += TX.changeCaseOfText(TX.constants.wordList.PHRASES[wordInt - TX.constants.wordList.WORD.length], wordCase);
                    } else if (wordInt < TX.constants.wordList.WORD.length + TX.constants.wordList.PHRASES.length + TX.constants.wordList.PUNCTUATION.length) {
                        returnString += TX.constants.wordList.PUNCTUATION[wordInt++ - TX.constants.wordList.WORD.length - TX.constants.wordList.PHRASES.length];
                    } else {
                        returnString += word;
                    }
                } else {
                    returnString += word;
                }
            }

            returnString += TX.constants.SYMBOL_EOL;
        }

        return returnString;
    },
    encodeArrayToText: function (array) {
        var returnString = '';

        for (var i = 0; i < array.length; i++) {
            returnString += array[i].join('');
            returnString += TX.constants.DELIMITER_EOL;
        }

        TX.makeHash(returnString);

        return returnString;
    },
    convertTextToArray: function (text) {
        var phrases = text.split(this.settings.phraseTerminator);
        var tempPhrase;
        var tempArray;
        var word;
        var wordCase;
        var wordInd;
        var wordIndPhrase;
        var wordNotFound;
        var returnArray = [];

        for (var i = 0; i < phrases.length; i++) {
            tempPhrase = phrases[i].split(' ');
            tempArray = [];
            for (var j = 0; j < tempPhrase.length; j++) {
                word = TX.cleanWord(tempPhrase[j]);
                wordCase = TX.findCase(word);
                wordInd = TX.constants.wordList.WORD.indexOf(word.toUpperCase());
                wordIndPhrase = TX.constants.wordList.PHRASES.indexOf(word.toUpperCase());
                wordNotFound = false;

                if (wordInd !== -1) {
                    wordInd = wordInd.toString(36);
                    word = wordInd;
                } else if (wordIndPhrase !== -1) {
                    wordIndPhrase = Number(wordIndPhrase + TX.constants.wordList.WORD.length).toString(36);
                    word = wordIndPhrase;
                } else {
                    wordNotFound = true;
                }

                if (wordNotFound) {
                    word = TX.constants.DELIMITER_VOCAB + word;
                } else if (wordCase === 'UPPERCASE') {
                    word = TX.constants.DELIMITER_UPPERCASE + word;
                } else if (wordCase === 'LOWERCASE') {
                    word = TX.constants.DELIMITER_LOWERCASE + word;
                } else if (wordCase === 'PROPERCASE') {
                    word = TX.constants.DELIMITER_PROPERCASE + word;
                }

                tempArray.push(word);
            }
            returnArray.push(tempArray);
        }

        return returnArray;
    },
    convert: function () {
        TX.encodeArrayToText(TX.convertTextToArray($('#rawText').val()));
    },
    findCase: function (word) {
        var letters = word.split('');
        var isProperCase = false;
        var uppercaseChars = 0;
        var punctuationChars = 0;

        for (var i = 0; i < letters.length; i++) {
            if (letters[i] !== letters[i].toUpperCase() && letters[i] === letters[i].toLowerCase()) {
                if (i === 0) {
                    return 'LOWERCASE';
                }
            } else if (letters[i] === letters[i].toUpperCase() && letters[i] !== letters[i].toLowerCase()) {
                if (i === 0) {
                    isProperCase = true;
                } else {
                    isProperCase = false;
                }
                uppercaseChars++;
            } else {
                punctuationChars++;
            }
        }

        if (uppercaseChars === letters.length) {
            return 'UPPERCASE';
        } else if (isProperCase) {
            return 'PROPERCASE';
        } else {
            return 'UNKNOWNCASE';
        }
    },
    parseText: function (text = false) {
        if (!text) return false;
        var returnVal = [];
        var i = 0;
        var j = 0;
        var tempPhrase;
        var tempArr;
        var tempString;

        var phrases = text.split(this.settings.phraseTerminator);
        var numPhrases = phrases.length;

        while (i < numPhrases) {
            if (phrases[i] === '') {
                i++;
                continue;
            }
            tempPhrase = this.create.phrase({
                text: phrases[i],
                callbackFinal: function () {
                    this.resolve();
                }
            });

            returnVal.push(tempPhrase);
            i++;
        }

        return returnVal;
    },
    print: function (text = false, options = false) {
        var text = this.parseText(text);
        var steps = text.length;
        var i = 0;

        console.log(JSON.parse(JSON.stringify(text)));

        text.map(function (val, ind) {
            TX.create.event({
                context: {
                    phrase: val
                },
                main: function (resolve, reject, context) {
                    TX.animate(context.phrase, function () {
                        resolve();
                    });
                }
            }).addLast();
        });
        return;

        TX.queue = text;
        TX.next();
    },
	/**
	 * @namespace   TX.utils
	 * @memberOf    TX
	 * @type {Object}
	 */
	utils: {
		/**
		 * @param  {string}
		 * @param  {string}
		 * @return {void}
		 */
		loader: function (action = false, location = false) {
			if (!action || !location) return;

			action = action.toUpperCase();
			location = location.toUpperCase();

			if (action === "HIDE") {
				if (location === "PAGE") {
					$("#loader-page-container").fadeOut();
				} else if (location === "CORNER") {
					$("#loader-corner-container").fadeOut();
				}
			} else if (action === "SHOW") {
				if (location === "PAGE") {
					$("#loader-page-container").fadeIn();
				} else if (location === "CORNER") {
					$("#loader-corner-container").fadeIn();
				}
			} else {
				return null;
			}
		}
	}
};


TX.gui = new dat.GUI();

TX.gui.add(TX, 'debug');
TX.gui.add(TX.settings, 'preferredPhraseLength', 1, 12).step(1);
TX.gui.add(TX, 'convert');
TX.gui.add(TX, 'start');
TX.gui.add(TX, 'stop');



$(document).ready(function(e, f) {
    TX.handlers.onLoad();
});

$(window).click(function(event) {
    TX.handlers.click(event);
});