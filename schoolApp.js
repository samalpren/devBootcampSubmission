$(function() { // when the page is done loading all controls, do the stuff below...
    $("#dialog-confirm").hide(); // display:none;

    var isAccepted; // boolean
    $('#btnJustForFun').click(function() {
        //showConfirmPopup();
        showConfirmModal();
    });
});

function showConfirmPopup() {
    isAccepted = confirm('So I hope you enjoyed my submission, am I accepted into the NSS bootcamp?');
    if (isAccepted) {
        alert("Great answer and thanks so much! I can't wait to begin!!! :)");
    } else {
        showConfirmPopup();
    }
}

function showConfirmModal() {
    $("#dialog-confirm").dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "Yes!": function() { // when the Yes button is clicked, do this stuff below...
            alert("Great answer and thanks so much! I can't wait to begin!!! :)"); // display an alert with this text
            $(this).dialog("close"); // close the modal
          },
          "No": function() { // when the no button is clicked, do this stuff below...
            alert("Try again :)"); // display an alert with this text
            // notice I did not have it close the mocal here! THEY CANNOT ESCAPE :)
          }
        },
        // all the stuff below is to hide the little [x] close button that is in most modals by default
        closeOnEscape: false,
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        }
      });

    //$("#dialog-confirm").show(); // removes the display:none css setting on the element - not needed after all
}