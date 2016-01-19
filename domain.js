var Domain = function () {
    var base = this;

    this.Title = 'Parent Entity';

    this.Entity = function () {
        this.Base = base;       

        this.Key = 'entity';
        this.Name = 'Entity';        
        this.PluralName = 'Entities';        
        
        this.PrimaryButton = 'Save';
        this.SecondaryButton = 'Save and New';

        // only 1 or 2 supported
        this.FormColumnCount = 2;
        this.Inputs = [];
        this.NotDisplayedInputs = []; 

        var displayNone = { Label: 'Not Displayed Text', Name: 'TextHidden', Type: 'text', Disabled: true, Display: true };
        this.NotDisplayedInputs.push(displayNone);
        for (var i = 0; i < 100; i++) {
            var text = { Label: 'Text', Name: 'Text'+i+'', Type: 'text' };
            var textDisabled = { Label: 'Text Disabled', Name: 'TextDisabled' + i + '', Type: 'text', Disabled: true };
            var date = { Label: 'Date', Name: 'Date' + i + '', Type: 'date' };
            var checkbox = { Label: 'Checkbox', Name: 'Checkbox' + i + '', Type: 'checkbox' };
            var file = { Label: 'File', Name: 'File' + i + '', Type: 'file' };
            var fileMultiple = { Label: 'File Multiple', Name: 'FileMultiple' + i + '', Type: 'file', Multiple: true };
            var select = { Label: 'Select', Name: 'Select' + i + '', Type: 'select', Items: ['A', 'B', 'C'] };
            var selectDisabled = { Label: 'Select', Name: 'Select' + i + '', Type: 'select', Items: ['A', 'B', 'C'], Disabled: true };
            var selectMultiple = { Label: 'Select', Name: 'Select' + i + '', Type: 'select', Items: ['A', 'B', 'C'], Multiple: true };

            this.Inputs.push(displayNone);
            this.Inputs.push(text);
            this.Inputs.push(textDisabled);
            this.Inputs.push(date);
            this.Inputs.push(checkbox);
            this.Inputs.push(file);
            this.Inputs.push(fileMultiple);
            this.Inputs.push(select);
            this.Inputs.push(selectDisabled);
            this.Inputs.push(selectMultiple);
        }
       

      
    };
}

var proje = new Domain();