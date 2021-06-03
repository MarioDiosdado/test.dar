$(document).ready(function () {
    let yearDropdown = document.getElementById('yearOption');
    let dayDropdown = document.getElementById('dayOption');
    let monthDropdown = document.getElementById('monthOption');
    let currentYear = new Date().getFullYear();
    let earliestYear = 1930;
    let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    let days2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    let days3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    for (let i = 0; i < months.length; i++) {
        let monthOption = document.createElement('option');
        monthOption.text = months[i];
        monthOption.value = i;
        monthDropdown.add(monthOption);
    }

    $("#monthOption").change(function () {
        $("#dayOption").find('option').not(':first').remove();
    })

    $("#dayOption").click(function () {
        let monthValue = document.getElementById("monthOption");
        let monthSelected = monthValue.value;
        if (monthSelected == 0 || monthSelected == 2 || monthSelected == 4 || monthSelected == 6 || monthSelected == 8 || monthSelected == 9 || monthSelected == 11) {
            for (let i = 0; i < days.length; i++) {
                let dayOption = document.createElement('option');
                dayOption.text = days[i];
                dayOption.value = days[i]
                dayDropdown.add(dayOption);
            }
        } else if (monthSelected == 1) {
            for (let i = 0; i < days3.length; i++) {
                let dayOption = document.createElement('option');
                dayOption.text = days3[i];
                dayOption.value = days3[i]
                dayDropdown.add(dayOption);
            }
        } else {
            for (let i = 0; i < days2.length; i++) {
                let dayOption = document.createElement('option');
                dayOption.text = days2[i];
                dayOption.value = days2[i]
                dayDropdown.add(dayOption);
            }
        }
    })


    function removeOptions(selectElement) {
        var i, L = selectElement.options.length - 1;
        for (i = L; i >= 0; i--) {
            selectElement.remove(i);
        }
    }

    while (currentYear >= earliestYear) {
        let dateOption = document.createElement('option');
        dateOption.text = currentYear;
        dateOption.value = currentYear;
        yearDropdown.add(dateOption);
        currentYear -= 1;
    }
})