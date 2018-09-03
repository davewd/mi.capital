function load(modules) {
  modules.keys().forEach(function(path){
    modules(path);
  });
}

load(require.context('./src', true, /\.spec\.js$/));