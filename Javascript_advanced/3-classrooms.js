function createClassRoom(numbersOfStudents) {
    function studentSeat(seat){
        return function(){
            return seat+1;
        };
    }
        let students = [];
        for(let i=0; i<numbersOfStudents; i++){
            students.push(studentSeat(i));
        }
        return students;
}

let classRoom = createClassRoom(10);

console.log(classRoom[0]()); //should print 1
console.log(classRoom[3]()); //should print 4
console.log(classRoom[9]()); //should print 10
