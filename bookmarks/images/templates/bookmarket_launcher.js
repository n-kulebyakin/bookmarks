(function(){
    if (window.myBookmarklet !== undefined) {
        myBookmarklet();
    }
    else {
        document.body.appendChild(
            document.createElement('script')
        ).src='http://127.0.0.1/static/js/bookmarklet.js?r=' +
          Math.floor(Math.random()*999999999999999);
    }
})();