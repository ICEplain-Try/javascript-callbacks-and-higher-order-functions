//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }
  }
  return count >= 5;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
const checkScore = score => score > 70;

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScore);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScore);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScore);

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌'}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌'}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌'}`);