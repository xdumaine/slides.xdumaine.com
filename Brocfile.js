var pickFiles = require('broccoli-static-compiler');
var babelTranspiler = require('broccoli-babel-transpiler');
var fastBrowserify = require('broccoli-fast-browserify');
var concat = require('broccoli-concat');
var mergeTrees = require('broccoli-merge-trees');
var compileLess = require('broccoli-less-single');
var autoPrefixer = require('broccoli-autoprefixer');
var funnel = require('broccoli-funnel');

var srcTree = pickFiles('app/src', {
    files: ['**/*.js'],
    srcDir: '.',
    destDir: './src'
});

var babelTree = babelTranspiler(srcTree, {
    sourceMap: 'inline'
});

var browserifyTree = fastBrowserify(babelTree, {
    bundles: {
        'app.js': {
            entryPoints: ['./src/app.js']
        }
    },
    browserify: {
        debug: true
    }
});

var vendorTree = pickFiles('bower_components', {
    srcDir: '.',
    destDir: '.',
    files: [
        'lodash/lodash.min.js',
        'jquery/dist/jquery.min.js'
    ]
});

var concatenatedVendor = concat(vendorTree, {
    inputFiles: [
        '**/*.js'
    ],
    outputFile: '/vendor.js',
    separator: '\n;\n',
    wrapInEval: false,
    wrapInFunction: false
});

var html = pickFiles('app', {
    srcDir: '/',
    destDir: '/',
    files: ['index.html', 'favicon.ico']
});

var styles = compileLess(['app/styles'], 'app.less', 'app.css', {});

var prefixedStyles = autoPrefixer(styles);

var staticFiles = funnel('app/styles', {
    include: [
        '*.css',
        '*.svg'
    ]
});

module.exports = mergeTrees([html, prefixedStyles, staticFiles, browserifyTree, concatenatedVendor]);
