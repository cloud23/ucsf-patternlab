module.exports = function(grunt) {
  grunt.registerTask('update', [
    'shell:update_bundler',
    'notify:gems_update',
    'shell:update_node',
    'notify:node_modules_update',
    'shell:update_bower',
    'notify:bower_components_updates'
   ]);
};
