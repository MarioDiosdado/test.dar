const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const hoursAM = ['12:00am'];
const hoursPM = ['12:00pm'];
for (n=1;n<12;n++){
    hoursAM.push(n + ":00am");
    hoursPM.push(n + ":00pm");   
}

for (i=0;i<days.length;i++) {
    $('.formStyleB').append(`
    <div class="form-row align-items-center">
    <div class="col-4 my-1">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="${days[i]}">
            <label class="form-check-label" for="defaultCheck1">
              ${days[i]}
            </label>
          </div>
    </div>
    <div class="col-auto my-1">
        <select class="custom-select am${i} mr-sm-2" id="inlineFormCustomSelect">
        </select>
    </div>
    <div class="col-1 transition">
        to
    </div>
    <div class="col-auto my-1">
        <select class="custom-select pm${i}  mr-sm-2" id="inlineFormCustomSelect">
        </select>
    </div>
</div>
<br>
    `)
}

time();

function time() {
    for(y=0;y<days.length;y++){
        for(j=0;j<12;j++){
            $('.am' + y).append(`
            <option value="${j}">${hoursAM[j]}</option>
            `)
            $('.pm' + y).append(`
            <option value="${j}">${hoursPM[j]}</option>
            `)
        }
    }
}

