//배열
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysofWeek = [mon + tue + wed + thu + fri + sat + sun];
console.log(daysofWeek);

const ohmy = [1, 2, "hello", false, null, true, undefined, "user"];
console.log(ohmy);
console.log(daysofWeek[3]);

const DaysofWeek = [mon, tue, wed, thu, fri, sat, sun];
console.log(DaysofWeek[3]);

console.log(DaysofWeek);

DaysofWeek.push("wow");
console.log(DaysofWeek);
