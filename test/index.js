// Dependencies
var test = require("prova"),
    EnBible = require("../index");

var validVerse = {
    reference: "Matthew 1:1",
    verses: [{
        book_id: "MAT",
        book_name: "Matthew",
        chapter: 1,
        verse: 1,
        text: "Livro da genealogia de Jesus Cristo, filho de Davi, filho de Abraão.   "
    }],
    text: "Livro da genealogia de Jesus Cristo, filho de Davi, filho de Abraão.   ",
    translation_id: "almeida",
    translation_name: "João Ferreira de Almeida",
    translation_note: "Public Domain"
}

test("Return proper verse", function(t) {
    t.plan(2);

    // Get verse
    EnBible.getVerse("Mateus 1:1", function(err, data) {
        t.error(err);
        t.same(data, validVerse);
    });
});