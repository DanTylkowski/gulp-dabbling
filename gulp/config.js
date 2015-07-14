var src = 'src';
var srcAssets = src + '/assets';

var build = 'build';
var prod = build + '/prod';
var devAssets = build + '/assets';
var prodAssets = prod + '/assets';

var cdnBase = '//i.annihil.us/u/prod/marvel/html_blocks_assets';
var projectFolder = cdnBase + '/new-project';

module.exports = {
	delete: {
		src: [ devAssets ]
	},
	deleteProd: {
		src: [ prod ]
	},
	sass: {
		src: srcAssets + '/sass/',
		dest: devAssets + '/css',
		options: {
			noCache: true,
			compass: false,
			bundleExec: true,
			sourcemap: true
		}
	},
	autoprefixer: {
		browsers: [
			'last 2 versions',
			'safari 5',
			'ie 8',
			'ie 9',
			'opera 12.1',
			'ios 6',
			'android 4'
		],
		cascade: true
	},
	browserify: {
		debug: true,
		extensions: ['.coffee', '.hbs'],
		bundleConfigs: [
			{
				entries: './' + srcAssets + '/js/application.js',
				dest: devAssets + '/js',
				outputName: 'application.js'
			},
			{
				entries: './' + srcAssets + '/js/main.js',
				dest: devAssets + '/js',
				outputName: 'main.js'
			}
		]
	},
	images: {
		src: srcAssets + '/images/**/*',
		dest: devAssets + '/images'
	},
	base64: {
		src: devAssets + '/css/*.css',
		dest: devAssets + '/css',
		options: {
			baseDir: build,
			extensions: [ 'png' ],
			maxImageSize: 30 * 1024,
			debug: false
		}
	},
	watch: {
		sass: srcAssets + '/sass/**/*.{sass,scss}',
		scripts: srcAssets + '/js/**/*.js',
		images: srcAssets + '/images/**/*',
		sprites: srcAssets + '/images/**/*.png'
	},
	optimize: {
		css: {
			src:  devAssets + '/css/*.css',
			dest: prodAssets + '/css/',
			options: {
				keepSpecialComments: 0
			}
		},
		js: {
			src: devAssets + '/js/*.js',
			dest: prodAssets + '/js/',
			options: {}
		},
		images: {
			src:  devAssets + '/images/**/*.{jpg,jpeg,png,gif}',
			dest: prodAssets + '/images/',
			options: {
				optimizationLevel: 3,
				progessive: true,
				interlaced: true
			}
		}
	},
	revision: {
		src: {
			assets: [
				prodAssets + '/css/*.css',
				prodAssets + '/js/*.js',
				prodAssets + '/images/**/*'
			],
			base: prod
		},
		dest: {
			assets: prod,
			manifest: {
				name: 'manifest.json',
				path: prodAssets
			}
		}
	},
	collect: {
		src: [
			prod + '/**/*.{html,xml,txt,json,css,js}',
			'html/**/*.html'
		],
		dest: prod,
		options: {
			dirReplacements: {
				'/src': projectFolder
			}
		}
	},
	rsync: { // Dummy data, will configure later
		src: prod + '/**',
		options: {
			destination: '~/path/to/my/website/root/',
			root: prod,
			hostname: 'mydomain.com',
			username: 'user',
			incremental: true,
			progress: true,
			relative: true,
			emptyDirectories: true,
			recursive: true,
			clean: true,
			exclude: [ '.DS_Store' ],
			include: []
		}
	}
};
