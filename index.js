// Dependencies
var Request = require("request");

// Constants
const PROVIDER = 'http://bible-api.com/',
    TRANSLATION = '?translation=almeida';

// Constructor
var BiblePortuguese = module.exports = {};

/**
 * getVerse
 * Gets the reference using labs.bible.org provider.
 *
 * @name getVerse
 * @function
 * @param {String} reference Bible verse reference
 * @param {Function} callback The callback function
 * @return
 */
BiblePortuguese.getVerse = function (reference, callback) {

    if (typeof reference === "object") {
        reference = this.reference;
    }

    Request.get({
        json: true
      , url: PROVIDER + reference + TRANSLATION
    }, function (err, response, body) {

        if (err || response.statusCode !== 200) {
            return callback (err || response.message);
        }

        // TODO check response
        callback (null, body);
    });
};
