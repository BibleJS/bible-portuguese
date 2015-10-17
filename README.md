# Bible Portuguese
Portuguese Bible module

## Installation
Run the following commands to download and install the application:

```sh
$ git clone git@github.com:BibleJS/bible-portuguese.git bible-portuguese
$ cd bible-portuguese
$ npm install
```

## Example

```js
// Dependencies
var PtBible = require("bible-portuguese");

// Get verse
PtBible.getVerse("John 3:16", function (err, data) {
    console.log(err || data);
});

```

## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Write code and tests, and run `npm test` to confirm everything works.
3. Commit your changes to that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message (if solving an issue).

## License
See the [LICENSE](./LICENSE) file.
