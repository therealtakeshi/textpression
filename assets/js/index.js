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
        wordList: wordList,
        SYMBOL_EOL: '\n',
        DELIMITER_SPACE: this.wordList.RESERVED[0],
        DELIMITER_EOL: this.wordList.RESERVED[1],
        DELIMITER_LOWERCASE: this.wordList.RESERVED[2],
        DELIMITER_UPPERCASE: this.wordList.RESERVED[3],
        DELIMITER_PROPERCASE: this.wordList.RESERVED[4],
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
            '10-steven-lewis.jpg'
        ]
    },
    start: function () {
        this.print('#rawText', opts);
    },
    create: {
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
                textillate:{
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
                        effect: obj.effectIn || TX.settings.self.effectIn,

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
                        effect: obj.effectOut || TX.settings.self.effectOut,
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
	queue: [],
	/**
	 * @memberOf TX
	 * @namespace
	 * @type {Object}
	 */
	display: {
	},
	handlers: {
		click: function (event) {
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
		self: {
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
		}
	},
    animate: function (phrase = false, callback = function (){}) {
        if (!phrase) return;

        var $textNode = $('<h1 class="text-dramatic">' + phrase.text + '</h1>');
        // padding = ($('body').height() / steps) * index;
        // if (options.padding) {
        //     padding += options.padding;
        // }
        // $textNode.css('padding-top', padding + 'px');

        // var showCallback = function () {
        //     setTimeout( function () {
        //         if (phrase.display.fadeOut) {
        //             $(TX.settings.self.textElementSelector).fadeOut({
        //                 complete: callback
        //             });
        //         } else {
        //             $(TX.settings.self.textElementSelector).hide({
        //                 complete: callback
        //             });
        //         }
        //     }, phrase.display.readingTime);
        // };

        $('.background')
            .fadeOut(500, function () {
                var self = this;

                var imgPath = TX.settings.self.imgPathPrefix + TX.constants.imgPaths[Math.floor(Math.random() * TX.constants.imgPaths.length)];

                $('<img/>').attr('src', imgPath).load(function() {
                    $(this).remove(); // prevent memory leaks as @benweet suggested

                    $(self).css({
                        'background': 'no-repeat center url(' + imgPath + ')',
                        'filter': 'blur(6px) saturate(0.8) brightness(0.5)',
                        '-moz-filter': 'blur(6px) saturate(0.8) brightness(0.5)',
                    })
                    .fadeIn(500, function () {
                        $(TX.settings.self.textElementSelector)
                            .html('')
                            .append($textNode)
                            .children().eq(0)
                            .textillate(phrase.textillate);
                    });
                });
            });


        // if (phrase.display.fadeIn) {
        //     $(TX.settings.self.textElementSelector).fadeIn({
        //         complete: showCallback
        //     });
        // } else {
        //     $(TX.settings.self.textElementSelector).show({
        //         complete: showCallback
        //     });
        // }
    },
    next: function () {
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
                .trim()
                .toUpperCase();
    },
    changeCaseOfText: function (text, requestedCase) {
        if (requestedCase === 'UPPERCASE') {
            return String(text).toUpperCase();
        } else if (requestedCase === 'LOWERCASE') {
            return String(text).toLowerCase();
        } else if (requestedCase === 'PROPERCASE') {
            return String(text).replace(/\w\S*/g, function(TXt){return TXt.charAt(0).toUpperCase() + TXt.substr(1).toLowerCase();});
        } else {
            return String(text);
        }
    },
    decodeTextToArray: function (text) {
        var returnArray = text.split(TX.constants.DELIMITER_EOL);

        for (var i = 0; i < returnArray.length; i++) {
            returnArray[i] = returnArray[i].split(TX.constants.DELIMITER_SPACE);
        }

        return returnArray;
    },
    convertArrayToText: function (array) {
        var returnString = '';
        var wordInt;

        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].length; j++) {
                if (j !== 0) returnString += ' ';

                wordInt = parseInt(array[i][j], 36);
                if (wordInt < TX.constants.wordList.WORD.length + TX.constants.wordList.PHRASES.length + TX.constants.wordList.PUNCTUATION.length) {
                    if (wordInt < TX.constants.wordList.WORD.length) {
                        returnString += TX.changeCaseOfText(TX.constants.wordList.WORD[wordInt], 'LOWERCASE');
                    } else if (wordInt < TX.constants.wordList.WORD.length + TX.constants.wordList.PHRASES.length) {
                        returnString += TX.changeCaseOfText(TX.constants.wordList.PHRASES[wordInt - TX.constants.wordList.WORD.length], 'LOWERCASE');
                    } else if (wordInt < TX.constants.wordList.WORD.length + TX.constants.wordList.PHRASES.length + TX.constants.wordList.PUNCTUATION.length) {
                        returnString += TX.constants.wordList.PUNCTUATION[wordInt++ - TX.constants.wordList.WORD.length - TX.constants.wordList.PHRASES.length];
                    } else {
                        returnString += array[i][j];
                    }
                } else {
                    returnString += array[i][j];
                }
            }
            returnString += TX.constants.SYMBOL_EOL;
        }

        return returnString;
    },
    encodeArrayToText: function (array) {
        var returnString = '';

        for (var i = 0; i < array.length; i++) {
            returnString += array[i].join(TX.constants.DELIMITER_SPACE);
            returnString += TX.constants.DELIMITER_EOL;
        }

        TX.makeHash(returnString);

        return returnString;
    },
    convertTextToArray: function (text) {
        var phrases = text.split(this.settings.self.phraseTerminator);
        var tempPhrase;
        var tempArray;
        var word;
        var wordInd;
        var wordIndPhrase;
        var returnArray = [];

        for (var i = 0; i < phrases.length; i++) {
            tempPhrase = phrases[i].split(' ');
            tempArray = [];
            for (var j = 0; j < tempPhrase.length; j++) {
                word = TX.cleanWord(tempPhrase[j]);
                wordInd = TX.constants.wordList.WORD.indexOf(word);
                wordIndPhrase = TX.constants.wordList.PHRASES.indexOf(word);
                if (wordInd !== -1) {
                    wordInd = wordInd.toString(36);
                    tempArray.push(wordInd);
                } else if (wordIndPhrase !== -1) {
                    wordIndPhrase = Number(wordIndPhrase + TX.constants.wordList.WORD.length).toString(36);
                    tempArray.push(wordIndPhrase);
                } else {
                    tempArray.push(word);
                }
            }
            returnArray.push(tempArray);
        }

        return returnArray;
    },
    parseText: function (elementSelector = false) {
        if (!elementSelector) return false;
        var text = $(elementSelector).val();
        var returnVal = [];
        var i = 0;
        var j = 0;
        var tempPhrase;
        var tempArr;
        var tempString;

        var phrases = text.split(this.settings.self.phraseTerminator);
        var numPhrases = phrases.length;

        while (i < numPhrases) {
            // tempPhrase = phrases[i].split(' ');
            // tempArr = [];

            // j = 0;
            // while (j < tempPhrase.length) {
            //     if (text[i].indexOf(this.settings.self.phraseTerminator) > -1) {
            //         tempArr.push(text[i]); i++;
            //         j++;
            //     }
            //     tempArr.push(text[i]); i++;
            //     j++;
            // }

            // tempString = tempArr.join(' ');
            // returnVal.push(tempString);
            tempPhrase = this.create.phrase({
                elementSelector: elementSelector,
                text: phrases[i],
                callbackFinal: function () {
                    TX.next();
                }
            });

            returnVal.push(tempPhrase);
            i++;
        }

        return returnVal;
    },
    print: function (elementSelector = false, options = false) {
        var text = this.parseText(elementSelector);
        var steps = text.length;
        var i = 0;

        console.log(text);

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

var text =  [
"I was",
"There",
"Then",
"I was",
"Not"
];

var opts = {
    fade: true,
    padding: 50,
    wait: 900
};

TX.gui = new dat.GUI({
    autoPlace: false
});

$('#debug-menu')
    .append(TX.gui.domElement);

TX.gui.add(opts, 'fade');
TX.gui.add(opts, 'padding', 0, 200);
TX.gui.add(opts, 'wait');
TX.gui.add(TX, 'start');



$(document).ready(function(e, f) {
    TX.handlers.onLoad();
});

$(window).click(function(event) {
    TX.handlers.click(event);
});