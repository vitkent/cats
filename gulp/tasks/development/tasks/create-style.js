/**
 * Created by biyk on 18.01.18.
 */

var rename          = require("gulp-rename");
const config        = require('../../../config');
const gulp   = require('gulp');
var fs = require('fs');

function str_replace(search, replace, subject) {
    return subject.split(search).join(replace);
}

module.exports = function(options) {
    return config.wrapPipe(function(success, error) {
        var name, i = process.argv.indexOf("--name");


        if(i>-1) {
            name = process.argv[i+1];
        }
        if (name) {

            extraFile = config.less.bemblocks+name;

            if (fs.existsSync(extraFile)) {
                console.log('ERROR! Папка ' + extraFile + ' уже существует!');
            } else {
                return gulp.src([config.less.bemblocks+'/b-default/b-default.*'])
                    .pipe(rename(function (path) {
                        path.basename = str_replace('b-default',name,path.basename);
                    }))
                    .pipe(gulp.dest(config.less.bemblocks+'/'+name));
            }
            
        } else {
            return console.log(process.argv);
        }

        
    });
};


