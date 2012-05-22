(function(d){

    // Dont open another resizer div when one's already open
    if (d.getElementById('bm_resizer')) {
        return;
    }

    // Load Bookmarklet JS
    var scriptNode = d.createElement('script');
    scriptNode.src = 'http://abogawat.github.com/bookmarklet-resizer.js';
    d.body.appendChild(scriptNode);

}(document));