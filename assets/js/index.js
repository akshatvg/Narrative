var QS = {};
var counter = 0;
var SpeechRecognition = window.webkitSpeechRecognition || window.speechRecognition;
var recognition = new SpeechRecognition();
var Content = "";
recognition.continuous = true;

function update_scene(context) {
    // Title and author
    if (context.title) {
        $('#title').text(context.title);
    } else {
        $('#title').text('Un-named comic (Click to edit)');
    }
    if (context.author) {
        $('#author').text(context.author);
    } else {
        $('#author').text('Anonymous author (Click to edit)');
    }
    // Set backgrounds depending on option chosen
    if (context.bg1) {
        $('#bg1').show();
        $('#bg1').attr('src', context.bg1);
    } else {
        $('#bg1').hide();
    }
    if (context.bg2) {
        $('#bg2').show();
        $('#bg2').attr('src', context.bg2);
    } else {
        $('#bg2').hide();
    }
    if (context.bg3) {
        $('#bg3').show();
        $('#bg3').attr('src', context.bg3);
    } else {
        $('#bg3').hide();
    }
    // Headers
    if (context.h1) {
        $('#header1').show();
        $('#header1').text(context.h1);
    } else {
        $('#header1').hide();
    }
    if (context.h2) {
        $('#header2').show();
        $('#header2').text(context.h2);
    } else {
        $('#header2').hide();
    }
    if (context.h3) {
        $('#header3').show();
        $('#header3').text(context.h3);
    } else {
        $('#header3').hide();
    }
    // Speech bubbles
    if (context.lt1) {
        $('#pane1 .bubble-top.left').show();
        $('#pane1 .bubble-top.left p').text(context.lt1);
    } else {
        $('#pane1 .bubble-top.left').hide();
    }
    if (context.lb1) {
        $('#pane1 .bubble-bottom.left').show();
        $('#pane1 .bubble-bottom.left p').text(context.lb1);
    } else {
        $('#pane1 .bubble-bottom.left').hide();
    }
    if (context.rt1) {
        $('#pane1 .bubble-top.right').show();
        $('#pane1 .bubble-top.right p').text(context.rt1);
    } else {
        $('#pane1 .bubble-top.right').hide();
    }
    if (context.rb1) {
        $('#pane1 .bubble-bottom.right').show();
        $('#pane1 .bubble-bottom.right p').text(context.rb1);
    } else {
        $('#pane1 .bubble-bottom.right').hide();
    }
    if (context.lt2) {
        $('#pane2 .bubble-top.left').show();
        $('#pane2 .bubble-top.left p').text(context.lt2);
    } else {
        $('#pane2 .bubble-top.left').hide();
    }
    if (context.lb2) {
        $('#pane2 .bubble-bottom.left').show();
        $('#pane2 .bubble-bottom.left p').text(context.lb2);
    } else {
        $('#pane2 .bubble-bottom.left').hide();
    }
    if (context.rt2) {
        $('#pane2 .bubble-top.right').show();
        $('#pane2 .bubble-top.right p').text(context.rt2);
    } else {
        $('#pane2 .bubble-top.right').hide();
    }
    if (context.rb2) {
        $('#pane2 .bubble-bottom.right').show();
        $('#pane2 .bubble-bottom.right p').text(context.rb2);
    } else {
        $('#pane2 .bubble-bottom.right').hide();
    }
    if (context.lt3) {
        $('#pane3 .bubble-top.left').show();
        $('#pane3 .bubble-top.left p').text(context.lt3);
    } else {
        $('#pane3 .bubble-top.left').hide();
    }
    if (context.lb3) {
        $('#pane3 .bubble-bottom.left').show();
        $('#pane3 .bubble-bottom.left p').text(context.lb3);
    } else {
        $('#pane3 .bubble-bottom.left').hide();
    }
    if (context.rt3) {
        $('#pane3 .bubble-top.right').show();
        $('#pane3 .bubble-top.right p').text(context.rt3);
    } else {
        $('#pane3 .bubble-top.right').hide();
    }
    if (context.rb3) {
        $('#pane3 .bubble-bottom.right').show();
        $('#pane3 .bubble-bottom.right p').text(context.rb3);
    } else {
        $('#pane3 .bubble-bottom.right').hide();
    }
}

// Given a text, check and set it in the context for the named field, or else remove it from the context
function check_item(item, context, field_name) {
    if (item.trim()) {
        context[field_name] = item.trim();
    } else {
        delete context[field_name];
    }
}

// If the state changes then call this function to remove the tweet button and direct link (needs re-building)
function clear_on_change() {
    $('#direct-link').attr('href', '#');
    $('#direct-link').text('');
    $('#twitter-button').html('');
}

// UI controls
function setup_editor() {
    $('#editor-help').show();
    $('#home-link').hide();
    $('.frame form').show();
    // Text fields contenteditable
    $('#title').attr('contenteditable', 'true');
    $('#author').attr('contenteditable', 'true');
    $('#title').focus(function () {
        clear_on_change();
    });
    $('#author').focus(function () {
        clear_on_change()
    });
    $('.textual').attr('contenteditable', 'true');
    // Store as variables and check for focus
    var form1 = $('#form1');
    var form2 = $('#form2');
    var form3 = $('#form3');
    var pane1 = $('#pane1');
    var pane2 = $('#pane2');
    var pane3 = $('#pane3');
    form1.change(function () {
        clear_on_change();
    });
    form2.change(function () {
        clear_on_change();
    });
    form3.change(function () {
        clear_on_change();
    });
    // Connect a form to a panel
    function connect(form, pane) {
        var form_header = form.find('#form-heading');
        var pane_header = pane.find('.header');
        var form_background = form.find('#form-background');
        var pane_background = pane.find('.bg_image');
        var form_image_url = form.find('#form-image-url');
        pane_background.hide();
        // Header track
        form_header.change(function (e) {
            if (form_header[0].checked) {
                pane_header.show();
                if (!pane_header.text()) {
                    pane_header.text('Catchy Header !');
                }
            } else {
                pane_header.hide();
            }
        });
        // Form background change from black depending on choice
        form.find('#form-background').change(function (e) {
            var bg = $(this).find("option:selected").attr('value');
            form.find('#form-image-url').prop('disabled', true);
            if (bg === 'custom') {
                pane_background.show();
                var custom_url = form.find('#form-image-url');
                custom_url.prop('disabled', false);
                if (custom_url.val()) {
                    var url = custom_url.val();
                    pane_background.attr('src', url);
                }
                custom_url.focus();
            } else if (bg === 'none') {
                pane_background.hide();
            } else {
                pane_background.show();
                pane_background.attr('src', 'assets/bg/' + bg);
            }
        });
        // URL image
        form.find('.custom-image').on('input', function (e) {
            var url = $(this).val();
            var bg = form.find('#form-background').find("option:selected").attr('value');
            if (bg === 'custom') {
                pane_background.attr('src', url);
            } else {
                pane_background.attr('src', '');
            }
        });
        // Add the bubbles
        form.find('#form-lt').change(function (e) {
            var holder = pane.find('.bubble-top.left');
            var text_p = pane.find('.bubble-top.left p');
            if (this.checked) {
                holder.show();
                if (!text_p.text()) {
                    text_p.text('Add text here');
                }
            } else {
                holder.hide();
            }
        });
        form.find('#form-lb').change(function (e) {
            var holder = pane.find('.bubble-bottom.left');
            var text_p = pane.find('.bubble-bottom.left p');
            if (this.checked) {
                holder.show();
                if (!text_p.text()) {
                    text_p.text('Add text here');
                }
            } else {
                holder.hide();
            }
        });
        form.find('#form-rt').change(function (e) {
            var holder = pane.find('.bubble-top.right');
            var text_p = pane.find('.bubble-top.right p');
            if (this.checked) {
                holder.show();
                if (!text_p.text()) {
                    text_p.text('Add text here');
                }
            } else {
                holder.hide();
            }
        });
        form.find('#form-rb').change(function (e) {
            var holder = pane.find('.bubble-bottom.right');
            var text_p = pane.find('.bubble-bottom.right p');
            if (this.checked) {
                holder.show();
                if (!text_p.text()) {
                    text_p.text('Add text here');
                }
            } else {
                holder.hide();
            }
        });
        // Reset everything in that pane
        form.find('#reset-button').click(function (e) {
            pane_header.hide();
            pane_background.hide();
            pane.removeClass();
            pane.find('.bubble-top.left').hide();
            pane.find('.bubble-bottom.left').hide();
            pane.find('.bubble-top.right').hide();
            pane.find('.bubble-bottom.right').hide();
            pane.find('.textual').text('');
        });
    }
    connect(form1, pane1);
    connect(form2, pane2);
    connect(form3, pane3);
    // Create direct link to view with existing content
    $('#direct-button').click(function (e) {
        var state = get_state_from_dom();
        set_qs(state);
    });
}

// Use URL content to display to end user
function setup_from_url() {
    QS = get_qs_context();
    update_scene(QS);
    $('.frame form').hide();
    $('#editor-help').hide();
    $('#home-link').show();
    $('.edit-me').hide();
}

// Get current content to send as URL parameters
function get_state_from_dom() {
    var result = {};
    var form1 = $('#form1');
    var form2 = $('#form2');
    var form3 = $('#form3');
    var pane1 = $('#pane1');
    var pane2 = $('#pane2');
    var pane3 = $('#pane3');
    result.title = $('#title').text();
    result.author = $('#author').text();
    if (pane1.find('.header').is(':visible')) {
        result.h1 = pane1.find('.header').text();
    }
    if (pane2.find('.header').is(':visible')) {
        result.h2 = pane2.find('.header').text();
    }
    if (pane3.find('.header').is(':visible')) {
        result.h3 = pane3.find('.header').text();
    }
    if ($('#bg1').is(":visible")) {
        result.bg1 = $('#bg1').attr('src');
    }
    if ($('#bg2').is(":visible")) {
        result.bg2 = $('#bg2').attr('src');
    }
    if ($('#bg3').is(":visible")) {
        result.bg3 = $('#bg3').attr('src');
    }
    if (pane1.find('.bubble-top.left').is(':visible')) {
        result.lt1 = pane1.find('.bubble-top.left p').text();
    }
    if (pane1.find('.bubble-top.right').is(':visible')) {
        result.rt1 = pane1.find('.bubble-top.right p').text();
    }
    if (pane1.find('.bubble-bottom.left').is(':visible')) {
        result.lb1 = pane1.find('.bubble-bottom.left p').text();
    }
    if (pane1.find('.bubble-bottom.right').is(':visible')) {
        result.rb1 = pane1.find('.bubble-bottom.right p').text();
    }
    if (pane2.find('.bubble-top.left').is(':visible')) {
        result.lt2 = pane2.find('.bubble-top.left p').text();
    }
    if (pane2.find('.bubble-top.right').is(':visible')) {
        result.rt2 = pane2.find('.bubble-top.right p').text();
    }
    if (pane2.find('.bubble-bottom.left').is(':visible')) {
        result.lb2 = pane2.find('.bubble-bottom.left p').text();
    }
    if (pane2.find('.bubble-bottom.right').is(':visible')) {
        result.rb2 = pane2.find('.bubble-bottom.right p').text();
    }
    if (pane3.find('.bubble-top.left').is(':visible')) {
        result.lt3 = pane3.find('.bubble-top.left p').text();
    }
    if (pane3.find('.bubble-top.right').is(':visible')) {
        result.rt3 = pane3.find('.bubble-top.right p').text();
    }
    if (pane3.find('.bubble-bottom.left').is(':visible')) {
        result.lb3 = pane3.find('.bubble-bottom.left p').text();
    }
    if (pane3.find('.bubble-bottom.right').is(':visible')) {
        result.rb3 = pane3.find('.bubble-bottom.right p').text();
    }
    return result;
}

// Display content if URL has values else show editable page
$(document).ready(function () {
    var querystring = window.location.search.substring(1);
    if (querystring) {
        setup_from_url();
        set_qs(QS);
    } else {
        setup_editor();
    };
});

recognition.onerror = function (event) {
    if (event.error == 'no-speech') {
        console.log('Could you please repeat? I didn\'t get what you\'re saying.');
        recognition.stop();
    }
}

function recordAudio() {
    if (Content.length) {
        Content += ' ';
    }
    recognition.start();
}

function stopRecordAudio() {
    recognition.onresult = function (event) {

        var current = event.resultIndex;

        var transcript = event.results[current][0].transcript;

        Content = Content + transcript;
        Content = Content;

        console.log(Content);

        Content = "";

    };
    recognition.stop();
}

console.clear();