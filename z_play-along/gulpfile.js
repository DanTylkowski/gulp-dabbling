var requireDir = require( 'require-dir' );

requireDir( 'gulp/tasks', { recursive: true } );
requireDir( 'gulp/tasks/development', { recursive: true } );
requireDir( 'gulp/tasks/production', { recursive: true } );
