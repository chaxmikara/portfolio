// Script to handle GitHub Pages SPA routing
(function () {
    const query = window.location.search;
    const path = query.match(/p=([^&]*)/);
    const repositoryName = 'portfolio';

    if (path && path[1]) {
        // Get the path from the query parameter and navigate to it
        const route = decodeURIComponent(path[1]);
        window.history.replaceState(null, null,
            `/${repositoryName}/${route}${window.location.search.replace(/(\?|&)p=[^&]*(&|$)/, '$1').replace(/\?$/, '')
            }${window.location.hash}`
        );
    }
})();
