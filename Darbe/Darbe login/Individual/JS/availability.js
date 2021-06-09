const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

for (i=0;i<days.length;i++) {
    $('.formStyleB').append(`
    <div class="form-row align-items-center">
    <div class="col-4 my-1">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="monday">
            <label class="form-check-label" for="defaultCheck1">
              ${days[i]}
            </label>
          </div>
    </div>
    <div class="col-auto my-1">
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
    <div class="col-1 transition">
        to
    </div>
    <div class="col-auto my-1">
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
</div>
<br>
    `)
}