function Student(name, gender, age) {

	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
let student1 = new Student("Алексей", "мужской", 20);
let student2 = new Student("Марьяна", "женский", 18);
let student3 = new Student("Наиля", "женский", 19);


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;

}

Student.prototype.addMarks = function(...marks) {

	if (this.excluded) {
		delete this.marks;
	} else {
		this.marks.push(...marks);
	}

}

Student.prototype.getAverage = function() {

	if (!this.marks || this.marks.length === 0) {
		return 0;
	}
	return this.marks.reduce((acc, mark) => acc + mark / this.marks.length, 0);

}

Student.prototype.exclude = function(reason) {

	delete this.subject;
	delete this.marks;
	this.excluded = reason;

}