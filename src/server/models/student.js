class Student {
  constructor(idStudent, displayName, email) {
    this.idStudent = idStudent;
    this.displayName = displayName;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }
}

export default Student;
