define([
    'jquery',
    './models/model2.js'
],
function ($, model) {
    // jQuery DOM Ready Handler
    $(function() {
        // Set the title for our module with the data
        // from our model
        $('.page-header h1').html(model.getTitle());

        // Set the width of our progress bar with
        // data from our model.
        $('.bar').css({ 'width': model.getPercentComplete() });

        // Activate the bootstrap popover plugin
        $('[rel=popover]').popover();

        // Tooltip our 'loud' elements
        $('.loud').tooltip({ title: 'Hello friend!'});
    });
});
