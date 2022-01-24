
  function validateForm() {
alert("kgkzjdknkn");
var firstName = document.getElementById("firstName").value;
alert(firstName);
var eduQualIndex = document.AdmissionForm.eduQual.selectedIndex;
alert(eduQualIndex);
var jseduQual = document.AdmissionForm.eduQual[eduQualIndex].value;
alert(jseduQual);
var jseduQualTxt = document.AdmissionForm.eduQual[eduQualIndex].text;
alert(jseduQualTxt);
var jsSex = document.AdmissionForm.gender.length;
alert(jsSex);
var isChecked = document.AdmissionForm.gender[0].checked;
alert(isChecked);
var checkedValue = document.AdmissionForm.gender[0].value;
alert(checkedValue);
var jssubject1 = document.AdmissionForm.subject1.checked;
alert(jssubject1);
var jsCityPrefLen = document.AdmissionForm.cityPref.length;
alert(jsCityPrefLen);
for ( var x = 0; x < jsCityPrefLen; x++) {
var isCitySel = document.AdmissionForm.cityPref[x].selected;
alert(isCitySel);
if (isCitySel) {
var cityVal = document.AdmissionForm.cityPref[x].value;
alert(cityVal);
var cityText = document.AdmissionForm.cityPref[x].text;
alert(cityText);
}
}
}