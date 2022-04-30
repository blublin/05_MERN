// 1
console.log(hello);                                   
var hello = 'world';       
// var hello
// console.log(hello) -> undefined
// hello = 'world';
// Expactations: Correct


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle
// function test() {}
//      var needle
//      needle = 'magnet'
//      console.log(needle)
// needle = 'haystack';
// test() -> 'magnet'
// Expactations: Correct


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan
// function print() {}
//      brendan  = 'only okay'
//      console.log(brendan)
// brendan = 'super cool'
// console.log(brendan) -> 'super cool'
// Expactations: Correct


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food
// function eat() {}
//      var food
//      food  = 'half-chicken'
//      console.log(food)
//      food = 'gone'
// food = 'chicken'
// console.log(food) -> 'chicken'
// eat -> 'half-chicken'
// Expactations: Correct


// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean
// mean() -> runtime error, mean is not a function
// Expactations: Correct


// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//  var genre
// function rewind() {}
//      var genre
//      genre = 'rock
//      console.log(genre)
//      genre = 'r&b'
//      console.log(genre)
// console.log(genre) -> undefined
// genre = disco
// rewind() -> 'rock' -> 'r&b'
// console.log(genre) -> disco
// Expactations: Correct


// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// function learn() {}
//      var dojo
//      dojo = 'seattle'
//      console.log(dojo)
//      dojo = 'burbank'
//      console.log(dojo)
// dojo = 'san jose'
// console.log(dojo) -> 'san jose'
// learn() -> 'seattle' -> 'burbank'
// console.log(dojo) -> 'san jose'
// Expactations: Correct


// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}
// function makeDojo(name, students){}
//      const dojo
//      dojo = {}
//      dojo.name = name
//      dojo.students = students
//      dojo.hiring = true // dojo.hiring = 'closed for now'
// console.log(makeDojo("Chicago", 65)) -> {'name' : 'Chicago', 'students' : 65, 'hiring' : 'closed for now'}
// console.log(makeDojo("Berkeley", 0)) -> {'name' : 'Berkeley', 'students' : 0, 'hiring' : true}
// dojo.students <= 0, should this be dojo or dojo.hiring?
// Failure for students = 0, can't re-assign dojo with const.
// Expactations: Correct