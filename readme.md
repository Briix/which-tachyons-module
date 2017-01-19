# which-tachyons-module [![Build Status](https://secure.travis-ci.org/Briix/which-tachyons-module.png?branch=master)](https://travis-ci.org/Briix/which-tachyons-module) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Small module for finding the specific Tachyon modules you've used.
When I build new things with Tachyons, I usually just use the CDN or include
the base package. This works, but when I later want to cut down the CSS bundle
size because I don't realistically use all of Tachyons it's tough figuring out
exactly which modules I have used. This little command line tool helps with
that.

## Installation

```bash
npm install -g which-tachyons-module
```

## Usage
which-tachyons-module takes a .html file as input and outputs the various
Tachyons modules used in that .html file based on its classes.

```bash
$ wtm index.html

# Outputs e.g.
# tachyons-borders tachyons-border-widths tachyons-heights tachyons-spacing
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by which-tachyons-module ([@br11x](https://twitter.com/br11x)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
