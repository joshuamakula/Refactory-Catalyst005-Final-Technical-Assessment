function validateForm() {
    surName = document.covidReg.surName
    givenName = document.covidReg.givenName
    dob = document.covidReg.dob
    residence = document.covidReg.residence
    occupation = document.covidReg.occupation
    nationality = document.covidReg.nationality
    gender = document.covidReg.gender
    category = document.covidReg.category

    var alpha = /^[a-zA-Z]+$/;
    if (!surName.value.match(alpha) || (surName.value.length < 1) || (surName.value.length > 16)) {
        surName.style.border = '1px solid red';
        document.getElementById("surNameerr").innerHTML = "This field is reqiured";

        return false;
    }
    if (!givenName.value.match(alpha) || (givenName.value.length < 1) || (givenName.value.length > 16)) {
        givenName.style.border = '1px solid red';
        document.getElementById("givenNameerr").innerHTML = "This field is reqiured";

        return false;
    }

    if (!dob.value.length == "") {
        dob.style.border = '1px solid red';
        document.getElementById("doberr").innerHTML = "This field is reqiured";

        return false;
    }
    if (!residence.value.match(alpha)) {
        residence.style.border = '1px solid red';
        document.getElementById("residenceerr").innerHTML = "This field is reqiured";

        return false;
    }
    if (!occupation.value.match(alpha)) {
        occupation.style.border = '1px solid red';
        document.getElementById("occupationerr").innerHTML = "This field is reqiured";

        return false;
    }

    if (!category.value.match(alpha)) {
        category.style.border = '1px solid red';
        document.getElementById("categoryerr").innerHTML = "This field is reqiured";

        return false;
    }
}