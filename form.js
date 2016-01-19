function setTodayForDateFields() {
    var now = new Date();
    var month = (now.getMonth() + 1);
    var day = now.getDate();
    if (month < 10)
        month = "0" + month;
    if (day < 10)
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    $('input[type=date]').val(today);
}

Array.prototype.any = function (property, value) {
    if (property == undefined) {
        console.log('please define property to use any with an array (array.any("prop","value"))');
        return false;
    }

    if (this.length < 1) { return false; }

    for (var i = 0; i < this.length; i++) {
        if (this[i][property] == value) { return true; }
    }

    return false;
}

var load_view = {
    New: function (entity) {
        var form = $('<form id='+ entity.Name +' />');
       
        for (var i = 0; i < entity.Inputs.length; i++) {
            var item = entity.Inputs[i];
            
            if (entity.NotDisplayedInputs.any('Name', item.Name)) { continue; };

            var input = $('<input type="' + item.Type + '" id="' + item.Name + '" name="' + item.Name + '"  />');     
            var div = $('<div />');

            if (item.Type == 'select') {
                input = $('<select id="' + item.Name + '" name="' + item.Name + '"/>');

                for (var j = 0; j < item.Items.length; j++) {
                    var opt = item.Items[j];
                    if (opt.value) {
                        input.append('<option value="' + opt.value + '">' + opt.name + '</option>');
                    }
                    else {
                        input.append('<option>' + opt + '</option>');
                    }
                }
            }    

            input.attr('disabled', item.Disabled === true);
            input.attr('multiple', item.Multiple === true);
            input.val(item.Value ? item.Value : '');
            
            div.append('<label>' + item.Label + '</label>');
            div.append(input);
            form.append(div);            
        }

        var formFooter = $('<div class="formFooter">');

        //form buttons
        if (entity.PrimaryButton) { formFooter.append('<button id="btnPrimary" type="button" class="colorPrimary">' + entity.PrimaryButton + '</button>'); };
        if (entity.SecondaryButton) { formFooter.append('<button id="btnSecondary" type="button" class="colorSecondary">' + entity.SecondaryButton + '</button>'); };
        if (entity.ImportantButton) { formFooter.append('<button id="btnImportant" type="button" class="colorImportant">' + entity.ImportantButton + '</button>'); };
        
        form.append(formFooter);        
        $('#main').append(form);

        if (entity.FormColumnCount == 2) { $('form > div').addClass('formColumn'); };

        //default values
        setTodayForDateFields(); 
    }
};