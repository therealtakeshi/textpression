'use strict';

var $ = $ || $$;
var console = window.console;
var _ = _;

var tx = {
    /**
     * @namespace   tx.constants
     * @memberOf    tx
     * @type {Object}
     */
    constants: {
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
                        effect: obj.effectIn || tx.settings.self.effectIn,

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
                        effect: obj.effectOut || tx.settings.self.effectOut,
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
	 * @memberOf tx
	 * @namespace
	 * @type {Object}
	 */
	display: {
	},
	handlers: {
		click: function (event) {
            var getRole = function (element) {
                var targetRole = $(element).attr('tx-role') || false;

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
            //     var text = tx.parseText($('#rawText').val());
            //     console.log(text);
            // });
		}
	},
	settings: {
		self: {
            get effectIn () {
                return tx.constants.animateStyleOptions[tx.create.random({
                    type: 'int',
                    min: 0,
                    max: 75
                })];
            },
            get effectOut () {
                return tx.constants.animateStyleOptions[tx.create.random({
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
        //             $(tx.settings.self.textElementSelector).fadeOut({
        //                 complete: callback
        //             });
        //         } else {
        //             $(tx.settings.self.textElementSelector).hide({
        //                 complete: callback
        //             });
        //         }
        //     }, phrase.display.readingTime);
        // };

        $('.background')
            .fadeOut(500, function () {
                var self = this;

                var imgPath = tx.settings.self.imgPathPrefix + tx.constants.imgPaths[Math.floor(Math.random() * tx.constants.imgPaths.length)];

                $('<img/>').attr('src', imgPath).load(function() {
                    $(this).remove(); // prevent memory leaks as @benweet suggested

                    $(self).css({
                        'background': 'no-repeat center url(' + imgPath + ')',
                        'filter': 'blur(6px) saturate(0.8) brightness(0.5)',
                        '-moz-filter': 'blur(6px) saturate(0.8) brightness(0.5)',
                    })
                    .fadeIn(500, function () {
                        $(tx.settings.self.textElementSelector)
                            .html('')
                            .append($textNode)
                            .children().eq(0)
                            .textillate(phrase.textillate);
                    });
                });
            });


        // if (phrase.display.fadeIn) {
        //     $(tx.settings.self.textElementSelector).fadeIn({
        //         complete: showCallback
        //     });
        // } else {
        //     $(tx.settings.self.textElementSelector).show({
        //         complete: showCallback
        //     });
        // }
    },
    next: function () {
        var phrase = tx.queue.shift();
        tx.animate(phrase, function () {
            if (tx.queue.length > 0) {
                tx.next();
            } else {
                console.log('done');
            }
        });
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
                    tx.next();
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

        tx.queue = text;
        tx.next();
    },
	/**
	 * @namespace   tx.utils
	 * @memberOf    tx
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

tx.gui = new dat.GUI({
    autoPlace: false
});

$('#debug-menu')
    .append(tx.gui.domElement);

tx.gui.add(opts, 'fade');
tx.gui.add(opts, 'padding', 0, 200);
tx.gui.add(opts, 'wait');
tx.gui.add(tx, 'start');



$(document).ready(function(e, f) {
    tx.handlers.onLoad();
});

$(window).click(function(event) {
    tx.handlers.click(event);
});