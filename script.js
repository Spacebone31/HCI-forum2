$(document).ready(function () {
    $("#contactForm").submit(function (event) {
        event.preventDefault();

        $(".error-message").text("");

        var valid = true;

        var name = $("#name").val();
        if (name === "") {
            $("#nameError").text("Name is required");
            valid = false;
        }

        var email = $("#email").val();
        if (email === "") {
            $("#emailError").text("Email is required");
            valid = false;
        }
        else if (!isValidEmail(email)) {
            $("#emailError").text("Invalid email address");
            valid = false;
        }

        var subject = $("#subject").val();
        if (subject === "") {
            $("#subjectError").text("Subject is required");
            valid = false;
        }

        var message = $("#message").val();
        if (message === "") {
            $("#messageError").text("Message is required");
            valid = false;
        }

        if (valid) {
            alert("Form submitted successfully!");
            $("#name").val("");
            $("#email").val("");
            $("#subject").val("");
            $("#message").val("");
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});


$(document).ready(function () {
    $(".color-dropdown-btn").click(function () {
        $(".color-dropdown-content").toggle();
    });

    $(".color-option").click(function () {
        var selectedColor = $(this).text().toLowerCase();
        $("body").css("background-color", selectedColor);
        $(".color-dropdown-content").hide();
    });

    // Close the dropdown if the user clicks outside of it
    $(document).click(function (event) {
        if (!$(event.target).closest('.color-dropdown').length) {
            $(".color-dropdown-content").hide();
        }
    });
});