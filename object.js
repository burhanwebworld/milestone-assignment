var student = { id:121, phone:1745, name:"Abir"};
var student2 = {id:131, phone:1232, name:"mahi"};

var phonePropName = "Phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];
student2.phone = 547854;
student["phone"] = 666789;
student2[phonePropName] = 999873;

student2.cinema = "ogni22";
student["cinema"] = "Smart girl";

console.log(phoneNo1);
console.log(student2);