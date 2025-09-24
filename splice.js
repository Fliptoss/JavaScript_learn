let courses = ["html", "css", "js", "reactjs", "angular", "vuejs", "nextjs"];

courses.splice(4, 2);
console.log(courses);

courses.splice(3, 0, "nestjs");
console.log(courses);
