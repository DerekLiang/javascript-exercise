require('./index');

var pass = 0, totalTest=3;

if (family.dad && family.dad.age===45 && family.dad.name==='derek') {
    pass++;
}
else {
    console.log('dad test failed!');
}

if (family.mom && family.mom.age===32 && family.mom.name==='helen' && family.mom.hasSon===true) {
    pass++;
}
else {
    console.log('mom test failed!');
}

if (family.kid && family.kid.age===12.5 && family.kid.name==='albert' && family.kid.school && family.kid.school.name==='vc' && family.kid.school.address==='123 main st.' && family.kid.school.isPrivateSchool===true) {
    pass++;
}
else {
    console.log('kid test failed!');
}

console.log(`\nThere are ${totalTest} tests in total. ${pass} tests pass. ${totalTest-pass} tests failed`);
if (totalTest === pass) {
    console.log('Congratulations! You passed the exerise!');
}