const employeeProfile = {
  name: "Ravi Kumar",
  employeeId: 102,
  contact: {
    email: "ravi.kumar@example.com",
    phone: {
      personal: "9988776655",
      emergency: "9112233445"
    }
  },
  work: {
    department: "Engineering",
    skills: ["JavaScript", "HTML", "CSS"],
    performance: {
      Q1: 85,
      Q2: 90,
      Q3: 78
    }
  },
  isWorking: true
};

console.log(employeeProfile.contact.email)
console.log(employeeProfile.contact.phone.emergency);
employeeProfile.officeAddress = {
  city:"Hyderabad",
  pincode:"500081"
}
console.log(employeeProfile)


/*
✏️ Tasks (use dot notation)

Print the employee’s email.
Print the emergency contact number.

Print the Q2 performance score.

Print the third skill from the skills array.

Update the employee’s working status to false.

Add a new nested property officeAddress inside employeeProfile:
officeAddress: {
  city: "Hyderabad",
  pincode: 500081
}
*/
