function handleEdit() {
    document.getElementById('name').disabled = false;
    document.getElementById('phoneno').disabled = false;
    document.getElementById('male').disabled = false;
    document.getElementById('female').disabled = false;
    document.getElementById('rollno').disabled = false;
    document.getElementById('cource').disabled = false;
    document.getElementById('registrationno').disabled = false;
    document.getElementById('edit').hidden = true;
    document.getElementById('save').hidden = false;
    return false;
  }

  function cancel(){
    location.reload(); 
}