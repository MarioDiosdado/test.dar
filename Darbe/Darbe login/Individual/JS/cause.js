let toggled = "inactive";
$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();
    });
});

$('.btn-light').on('click', function () {
    if (toggled == "inactive") {
        toggled = "active";
        $(this).toggleClass('btnSelected');
    } else {
        toggled = "inactive";
        $(this).toggleClass('btnSelected');
    }
 
});

$("#gridCheck").change(function () {
    if (this.checked) {
        $(".btnC").addClass('btnSelected');
    } else {
        $(".btnC").removeClass('btnSelected');
    }
});

function goBack() {
    window.history.back();
  }