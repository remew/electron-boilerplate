
const mkdirp = require('mkdirp').sync;
const cp = require('cp').sync;

mkdirp('./build');
cp('./package.json', './build/package.json');
cp('./app/main.js', './build/main.js');

const packager = require('electron-packager');
const package = require('./package.json');

packager({
    name: package.name,
    dir: './build',
    out: './release',
    //icon: './source/icon.ico',
    platform: 'win32',
    arch: 'x64',
    overwrite: true,
    asar: false,
    appVersion: package.version,
    appCopyright: `Copyright (C) ${(new Date).getFullYear()} ${package.author}.`,

    'version-string': {
        CompanyName: '',
        FileDescription: package.name,
        OriginalFilename: `${package.name}.exe`,
        ProductName: package.name,
        InternalName: package.name,
    },

}, (err, appPaths) => {
    if (err) console.error(err);
    console.log('Done: ' + appPaths);
});


