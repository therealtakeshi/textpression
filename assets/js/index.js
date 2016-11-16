'use strict';

var $ = $ || $$;
var console = window.console;
var _ = _;

var TX = {
	holder: {},
	constants: {
		schemas: {}
	},
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
                        console.log('escaped');
                        break;
                    default:
                        break;
                }
            };

            var role = getRole(event.target);

            roleRouter(role);
		},
		onLoad: function () {
			setTimeout(function() {
				$("#loader-page-container").slideUp("slow");
			}, 250);
		}
	},
	settings: {
		self: {
			isCool: true
		}
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


$(document).ready(function(e, f) {
	TX.handlers.onLoad();
});

$(window).click(function(event) {
	TX.handlers.click(event);
});

function dramaticText(textArray, options) {
    var steps = textArray.length;
    var i = 0;
    var $textNode;
    var padding;

    var start = function(index) {
        if (index < steps) {
            $textNode = $('<p class="text-dramatic">' + textArray[i] + '</p>');
            padding = ($('body').height() / steps) * index;
            if (options.padding) {
                padding += options.padding;
            }
            $textNode.css('padding-top', padding + 'px');

            if (options.fade) {
                $('#text').fadeOut({
                    complete: function() {
                        $(this)
                            .html($textNode)
                            .fadeIn(300);
                        i++;
                        setTimeout(function() {
                            start(i);
                        }, options.wait);
                    }
                });
            } else {
                $('#text').html($textNode);
                i++;
                setTimeout(function() {
                    start(i);
                }, options.wait);
            }
        } else {
            console.log('done');
            setTimeout(function() {
                $('#text').fadeOut();
            }, options.wait * 2);
        }
    }

	var master = function () {

	};

    start(i);
}

var text = [
	[
    "I was",
    "There",
    "Then",
    "I was",
    "Not"
	],
	[
    "I saw",
    "Them",
    "Then",
    "I was",
    "Not"
	],
	[
    "You tried",
    "To say",
    "I was",
    "Not",
	"Alone"
	],
	[
    "We are",
    "In two",
    "We will",
    "Hold",
	  "Hands"
	],
];

var opts = {
    fade: true,
    //  padding: 20,
    wait: 900
};

dramaticText(text, opts);

