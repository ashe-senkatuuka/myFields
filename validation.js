function greet() {

    var form = document.getElementById('userRegistration');


    //METHOD TRIGGERERD BY THE SUBMIT EVENT
    addEvent(form, 'submit', function (e) {
        
        var valid = {};                          // Object to store validation status of invidual fields
        var isFormValid;                         // Variable to store fvalidation status of entire form

        // PERFORM INVIDUAL FIELDS VALIDATION
        if (!validateName('inputName', 'nameErr')) {
            valid.fname = false;
        } else {
            valid.fname = true;
        }        
        
        if (!validateNationality('inputNIN', 'ninErr')) {
            valid.nationality = false;
        } else {
            valid.nationality = true;
        }        

        if (!validateTel('inputTel', 'telErr')) {
            valid.tel1 = false;
        } else {
            valid.tel1 = true;
        }               

        // CHECK VALID OBJECT FOR ANY INVALID FIELD     
        for (let field in valid) {
            if (!valid[field]) {
                isFormValid = false;
                break;
            }
            isFormValid = true;
        }

        // If the form did not validate, prevent it being submitted
        if (!isFormValid) {
            e.preventDefault();
        }

    });

    // VALIDATION METHODS
    function validateName(name, errID) {
        let fName = document.getElementById(name);
        let valid = true;
        if (fName.value === "") {
            printError(errID, "Please enter customer name");
            fName.classList.add("invalid-outline");
            valid = false;
        } else {
            let regex = /^[a-zA-Z\s]+$/;
            if (regex.test(fName.value) === false) {
                printError(errID, "Please enter a valid name");
                tel.classList.remove("valid-outline");
                tel.classList.add("invalid-outline");
                valid = false
            } else {
                printError(errID, "");
                fName.classList.add("valid-outline");
                valid = true;
            }
        }
        return valid;
    }

    function validateNationality(paramNIN) {
        let NIN = document.getElementById(paramNIN);
        let valid = true;
        if (NIN.value === "") {
            printError("ninErr", "Please enter National ID Number");
            NIN.classList.remove("valid-outline");
            NIN.classList.add("invalid-outline");
            valid = false;
        } else {
            let regex = /^[a-zA-Z\s]{3}[0-9]{10}$/;
            if (regex.test(NIN.value) === false) {
                printError("ninErr", "Please enter a valid NIN");
                valid = false
            } else {
                printError("ninErr", "");
                valid = true;
            }
        }
        return valid;
    }

    function validateTel(paramtel, errID) {
        let tel = document.getElementById(paramtel);
        let valid = true;
        if (tel.value === "") {
            printError(errID, "Please enter telephone number");
            tel.classList.remove("valid-outline");
            tel.classList.add("invalid-outline");
            valid = false;
        } else {
            let regex = /^[0-9]{10,}$/;
            if (regex.test(tel.value) === false) {
                printError(errID, "Please enter a valid telephone number");
                tel.classList.remove("valid-outline");
                tel.classList.add("invalid-outline");
                valid = false
            } else {
                printError(errID, "");
                tel.classList.remove("invalid-outline");
                tel.classList.add("valid-outline");
                valid = true;
            }
        }
        return valid;
    }
    
    // Method to display error message
    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }
}

greet();