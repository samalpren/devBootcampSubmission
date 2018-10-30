$(function() {
    $("#dialog-confirm").hide();

    var isAccepted = false;
    $('#btnJustForFun').click(function() {
        showConfirmPopup();
        //showConfirmModal();
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
              "Yes!": function() {
                alert("Great answer and thanks so much! I can't wait to begin!!! :)");
                $(this).dialog("close");
              },
              "No": function() {
                alert("Try again :)");
              }
            },
            closeOnEscape: false,
            open: function(event, ui) {
                $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
            }
          });
        $("#dialog-confirm").show();
    }
});
