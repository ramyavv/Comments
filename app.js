var main = function() {
    "use strict"

    var addComment = function() {
        if ($(".comment-input input").val() !== "") {
            var new_comment = $("<div>");
            new_comment.append($("<span>").text($(".comment-input input").val()));

            $(".comments").append(new_comment);

            var deleteButton = $("<button>");
            new_comment.append(deleteButton);

            deleteButton.click(function() {
            	$(this).parent().hide();
            });

            new_comment.hide();
            new_comment.fadeIn();

            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").click(function() {
        addComment();
    });

    $(".comment-input input").keypress(function() {
        if (event.keyCode == 13) {
            addComment();
        }
    });
};

$(document).ready(main);
