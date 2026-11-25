/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-csstransforms-shiv-cssclasses-teststyles-testprop-testallprops-domprefixes-load
 */
;





/*!
 * Modernizr-compatible feature detection
 */

(function (window, document) {
    'use strict';

    if (!window || !document || !document.documentElement) {
        return;
    }

    var Modernizr = {};
    var docElement = document.documentElement;
    var styleElement = document.createElement('modernizr');
    var style = styleElement.style;

    var prefixes = ['Webkit', 'Moz', 'O', 'ms'];
    var classes = [];
    var tests = {};

    var version = '2.6.2-compatible';

    function isFunction(value) {
        return typeof value === 'function';
    }

    function testProps(properties) {
        for (var i = 0; i < properties.length; i++) {
            if (style[properties[i]] !== undefined) {
                return properties[i];
            }
        }

        return false;
    }

    function calcTotal() {

    var itemTotal = 0;
    var tax = 0;
    var totalWithTax = 0;

    var items = document.getElementsByTagName("input");
    var cells = document.getElementsByTagName("td");

    // Check all five games
    for (var i = 0; i < 5; i++) {
        if (items[i].checked) {
            itemTotal += Number(items[i].value);
        }
    }

    // Calculate tax
    tax = itemTotal * 0.1;

    // Calculate total with tax
    totalWithTax = itemTotal + tax;

    // Display results
    cells[1].textContent = (itemTotal / 100).toFixed(2);
    cells[3].textContent = (tax / 100).toFixed(2);
    cells[5].textContent = "$" + (totalWithTax / 100).toFixed(2);

    // Create and display date
    var today = new Date();
    var formattedDate = today.toDateString();

    var dateDiv = document.createElement("div");
    dateDiv.textContent = formattedDate;
    document.body.appendChild(dateDiv);

    // Clear checkbox selections
    for (var j = 0; j < 5; j++) {
        items[j].checked = false;
    }
}

// Add event listener to Calculate button
var submitButton = document.getElementById("sButton");
submitButton.addEventListener("click", calcTotal);

    function testAllProps(property) {
        var capitalized =
            property.charAt(0).toUpperCase() + property.slice(1);

        var properties = [property];

        for (var i = 0; i < prefixes.length; i++) {
            properties.push(prefixes[i] + capitalized);
        }

        return testProps(properties);
    }

    function injectElementWithStyles(rule, callback) {
        var container = document.createElement('div');
        var styleTag = document.createElement('style');

        container.id = 'modernizr';
        styleTag.type = 'text/css';
        styleTag.textContent = rule;

        container.appendChild(styleTag);

        var target = document.body || docElement;

        target.appendChild(container);

        var result = false;

        try {
            result = callback(container, rule);
        } finally {
            if (container.parentNode) {
                container.parentNode.removeChild(container);
            }
        }

        return !!result;
    }

    // CSS transforms
    tests.csstransforms = function () {
        return !!testAllProps('transform');
    };

    // Font-face
    tests.fontface = function () {
        return injectElementWithStyles(
            '@font-face { font-family: "modernizr"; src: url("data:font/woff;base64,") format("woff"); }',
            function (node) {
                var sheets = node.getElementsByTagName('style');

                if (!sheets.length || !sheets[0].sheet) {
                    return false;
                }

                try {
                    var rules = sheets[0].sheet.cssRules ||
                                sheets[0].sheet.rules;

                    return !!(
                        rules &&
                        rules.length &&
                        /@font-face/i.test(rules[0].cssText || '')
                    );
                } catch (error) {
                    return false;
                }
            }
        );
    };

    // HTML5 support
    tests.html5 = function () {
        var element = document.createElement('article');

        return element.nodeName.toLowerCase() === 'article';
    };

    // Run feature tests
    for (var feature in tests) {
        if (Object.prototype.hasOwnProperty.call(tests, feature)) {
            var supported = tests[feature]();

            Modernizr[feature] = supported;

            classes.push(
                (supported ? '' : 'no-') + feature
            );
        }
    }

    // Custom feature tests
    Modernizr.addTest = function (feature, test) {
        if (typeof feature === 'object') {
            for (var key in feature) {
                if (Object.prototype.hasOwnProperty.call(feature, key)) {
                    Modernizr.addTest(key, feature[key]);
                }
            }

            return Modernizr;
        }

        feature = String(feature).toLowerCase();

        if (Modernizr[feature] !== undefined) {
            return Modernizr;
        }

        var result = isFunction(test) ? test() : test;

        Modernizr[feature] = !!result;

        docElement.className +=
            ' ' + (result ? '' : 'no-') + feature;

        return Modernizr;
    };

    Modernizr.testProp = function (property) {
        return !!testProps([property]);
    };

    Modernizr.testAllProps = function (property) {
        return !!testAllProps(property);
    };

    Modernizr.testStyles = function (rule, callback) {
        return injectElementWithStyles(rule, callback);
    };

    Modernizr._version = version;
    Modernizr._domPrefixes = ['webkit', 'moz', 'o', 'ms'];
    Modernizr._cssomPrefixes = prefixes;

    // Update document classes
    docElement.className = docElement.className
        .replace(/(^|\s)no-js(\s|$)/, '$1$2')
        .trim();

    docElement.className += ' js ' + classes.join(' ');

    // Resource loader
    Modernizr.load = function (resources) {
        var list = Array.isArray(resources) ? resources : [resources];
        var index = 0;

        function next() {
            if (index >= list.length) {
                return;
            }

            var resource = list[index++];

            if (typeof resource === 'function') {
                resource();
                next();
                return;
            }

            if (typeof resource !== 'string') {
                next();
                return;
            }

            var isCSS = /\.css(?:[?#]|$)/i.test(resource);

            var element = document.createElement(
                isCSS ? 'link' : 'script'
            );

            element.onload = next;
            element.onerror = next;

            if (isCSS) {
                element.rel = 'stylesheet';
                element.href = resource;
            } else {
                element.src = resource;
                element.async = true;
            }

            (document.head || docElement).appendChild(element);
        }

        next();
    };

    window.Modernizr = Modernizr;

})(window, document);


// WAIT UNTIL HTML IS LOADED
document.addEventListener('DOMContentLoaded', function () {

    var calculateButton = document.getElementById('sButton');

    if (!calculateButton) {
        console.error('Calculate button with ID sButton was not found.');
        return;
    }

    calculateButton.addEventListener('click', function () {

        // 2. Create a new Date object
        var today = new Date();

        // Format date: Sun Nov 16 2025
        var formattedDate = today.toDateString();

        // 3. Create a new div element
        var dateDiv = document.createElement('div');

        // Add formatted date using textContent
        dateDiv.textContent = formattedDate;

        // Append new div to body
        document.body.appendChild(dateDiv);

        // 4. Get all input elements
        var items = document.getElementsByTagName('input');

        // Clear all checkbox selections
        for (var i = 0; i < items.length; i++) {

            if (items[i].type === 'checkbox') {
                items[i].checked = false;
            }

        }

    });

});
