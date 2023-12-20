export default function isValidForm(form) {
    if (form.checkValidity() === false) {
        form.reportValidity();
        return false;
    }
    return true;
}