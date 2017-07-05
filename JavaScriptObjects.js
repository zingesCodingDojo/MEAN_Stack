// Assignment: JavaScript Objects
// Assignment: JavaScript Objects
// Assignment: JavaScript Objects
// Assignment: JavaScript Objects

// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for(let i = 0; i < students.length; i++){
  console.log("Name:" + students[i]["name"] +", Cohort:" + students[i]["cohort"]);
  
}

// Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
function orgArrayObject(arr){
    for(var items in arr){
        console.log(items.toUpperCase());
        var counter = 1;
        var tempItem = arr[items];
        //console.log(tempItem.length);
        for(var key in tempItem){
            var tempKey = tempItem[key];
            var namesLength = (tempItem[key].first_name).length + (tempItem[key].last_name).length;
            console.log(counter + " - " + tempItem[key].first_name.toUpperCase() + " " + tempItem[key].last_name.toUpperCase() + " - " + namesLength);
            for(var value in tempKey){
                //console.log(counter + " - " + tempKey[value].first_name)
                counter++;
            }
        }
    }
}
orgArrayObject(users);