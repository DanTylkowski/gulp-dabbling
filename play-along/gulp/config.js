var src = 'src';
var srcAssets = src + '/assets';

var build = 'build';
var development = build + '/development';
var production = build + '/production';
var developmentAssets = development + '/assets';
var productionAssets = production + '/assets';

module.exports = {
	browsersync: {
		server: {
			baseDir: [ development, build, src ]
		},
		files: [
			developmentAssets + '/css/*.css',
			developmentAssets + '/js/*.js',
			developmentAssets + '/iamges/*',
			developmentAssets + '/fonts/*'
		],
		production: {
			server: {
				baseDir: [ production ]
			},
			port: 9998
		}
  	},
	delete: {
		src: [ developmentAssets ]
	},
	sass: {
		src: srcAssets + '/sass/**/*.{sass,scss}',
		dest: developmentAssets + '/css',
		options: {
			noCache: true,
			compass: false,
			bundleExec: true,
			sourcemap: true,
			sourcemapPath: '../../assets/sass' //not sure
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
		bundleConfigs: {
			entries: './' + srcAssets + '/js/main.js',
			dest: developmentAssets + '/js',
			outputName: 'main.js'
		}
	},
	images: {
		src: srcAssets + '/images/**/*',
		dest: developmentAssets + '/images'
	},
	copyfonts: { // probably not
		development: {
			src: srcAssets + '/fonts/*',
			dest: developmentAssets + '/fonts'
		}
	},
	base64: {
		src: developmentAssets + '/css/*.css',
		dest: developmentAssets + '/css',
		options: {
			baseDir: build,
			extensions: [ 'png' ],
			maxImageSize: 20 * 1024, // bytes
			debug: false
		}
	},
	watch: {
		sass: srcAssets + '/scss/**/*.{sass,scss}',
		scripts: srcAssets + '/js/**/*.js',
		images: srcAssets + '/images/**/*',
		//svg: 'vectors/*.svg',
		sprites: srcAssets + '/images/**/*.png'
	},
	sprites: { //Too much for now
		src: srcAssets + '/images/sprites/icon/*.png',
		dest: {
			css: srcAssets + '/scss/base/',
			image: srcAssets + '/images/sprites/'
		},
		options: {
			cssName: '_sprites.scss',
			cssFormat: 'css',
			cssOpts: {
				cssClass: function( item ) {
					// If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
					if( item.name.indexOf( '-hover' ) !== -1 ) {
						return '.icon-' + item.name.replace( '-hover', ':hover' );
					// Otherwise, use the name as the selector (e.g. 'home' -> 'home')
					} else {
						return '.icon-' + item.name;
					}
				}
			},
			imgName: 'icon-sprite.png',
			imgPath: '/assets/images/sprites/icon-sprite.png'
		}
	},

	optimize: {
		css: {
			src:  developmentAssets + '/css/*.css',
			dest: productionAssets + '/css/',
			options: {
				keepSpecialComments: 0
			}
		},
		js: {
			src: developmentAssets + '/js/*.js',
			dest: productionAssets + '/js/',
			options: {}
		},
		images: {
			src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
			dest: productionAssets + '/images/',
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
				productionAssets + '/css/*.css',
				productionAssets + '/js/*.js',
				productionAssets + '/images/**/*'
			],
			base: production
		},
		dest: {
			assets: production,
			manifest: {
				name: 'manifest.json',
				path: productionAssets
			}
		}
	},
	collect: {
		src: [
			productionAssets + '/manifest.json',
			production + '/**/*.{html,xml,txt,json,css,js}',
			'!' + production + '/feed.xml'
		],
		dest: production
	},
	rsync: { // Dummy data, will configure later
		src: production + '/**',
		options: {
			destination: '~/path/to/my/website/root/',
			root: production,
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
	},
	webp: {
		src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
		dest: productionAssets + '/images/',
		options: {}
	}
};
