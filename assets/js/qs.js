// Extracts the query string and turns it into an object of key/value pairs.
function get_qs_context() {
    var query_string = window.location.search.substring(1);
    var kv_pairs = query_string.split('&');
    var result = {};
    for (var i = 0; i < kv_pairs.length; i++) {
        var kv_pair = kv_pairs[i].split('=');
        result[kv_pair[0]] = decodeURIComponent(kv_pair[1]);
    }
    return result;
}

// Get a value from the querystring for the given key.
function get_qs_value(key) {
    var context = get_qs_context();
    var keys = Object.keys(context);
    for (var i = 0; i < keys.length; i++) {
        if (key == keys[i]) {
            return context[key];
        }
    }
}

// Given a settings object of key/value pairs, will update the query string
// element of the URL accordingly.
function set_qs(settings) {
    var qs_array = [];
    var keys = Object.keys(settings);
    for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = settings[key];
        qs_array.push(key + '=' + encodeURIComponent(value));
    }
    var old_url = window.location.href.split('?');
    var new_url = old_url[0] + '?' + qs_array.join('&');
    $.ajax({
        url: "https://tinyurl.com/api-create.php?url=" + new_url,
        type: "get",
    }).done(function (data) {
        $('#direct-link').attr('href', data);
        $('#direct-link').text(data);
        $('#whatsapp-button').html('<a href="https://wa.me/?text=Check out this comic by Narrative at ' + data + ' !" data-action="share/whatsapp/share" target="_blank"><i class="fab fa-2x fa-whatsapp" id="whatsapp-share-btn"></i></a>');
        $('#twitter-button').html('<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button mx-3" data-text="Check out this comic by Narrative!" data-via="akshatvg" data-hashtags="narrative" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
        twttr.widgets.load();
    });
}
