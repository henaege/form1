// set up a doc ready so nothing happens too early
$(document).ready(function() {
    $('#signup-form').submit(function(event) {
        event.preventDefault();
        console.log("User submitted the form");
        $('input').each(function() {
            var currentInputTagClass = $(this).attr('class');
            console.log(currentInputTagClass);
            var errorDivClassName = '.' + currentInputTagClass + '-error';
            console.log(errorDivClassName);
            // input tags have .val(), all other tags have .html()
            if ($(this).val() == '') {
                // console.log("User did not enter enough info");
                $(errorDivClassName).html('Field cannot be empty.');
            }
        })
    });
});