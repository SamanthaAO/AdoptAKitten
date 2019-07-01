$(function () {
    imageCounter = 0;


    $(".create-kitten").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newKitten = {
            name: $("#stray-name").val().trim(),
            description: $("#stray-description").val().trim(),
            image: $("#kittenImage").data("id"),
            adopted: false,
            likes: 0
        };

        // Send the POST request.
        $.ajax("/api/kittens", {
            type: "POST",
            data: newKitten
        }).then(
            function () {
                console.log("created new kitten");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



    $("#left-button").on("click", function () {

        if (imageCounter == 0) {
            imageCounter = 10;
        }
        else {
            imageCounter--;
        }
        $("#imageChoice").empty();
        $("#imageChoice").append(`<img src="/assets/img/kitten${imageCounter}.jpg" id="kittenImage" data-id="kitten${imageCounter}.jpg" alt="kitten ${imageCounter} image"></img>`);
    })

    $("#right-button").on("click", function () {

        if (imageCounter == 10) {
            imageCounter = 0;
        }
        else {
            imageCounter++;
        }
        $("#imageChoice").empty();
        $("#imageChoice").append(`<img src="/assets/img/kitten${imageCounter}.jpg" id="kittenImage" data-id="kitten${imageCounter}.jpg" alt="kitten ${imageCounter} image"></img>`);
    })

    // $(".like-kitten").on("click", function(){
    //     var id = $(this).data("id");


    //     $.ajax("/api/kittens/:id", {
    //         type: "PUT",
    //         data: newKitten
    //       }).then(
    //         function() {
    //           console.log("created new kitten");
    //           // Reload the page to get the updated list
    //           location.reload();
    //         }
    //       );

    // })

    $(".change-adopted").on("click", function () {
        var id = $(this).data("id");

        var foundHome ={
            adopted: true
        }

        $.ajax("/api/kittens/adopted/" + id, {
            type: "PUT",
            data: foundHome
        }).then(
            function () {
                console.log("Kitten Found Home");
                // Reload the page to get the updated list
                location.reload();
            }
        );


    })




});