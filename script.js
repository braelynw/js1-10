//write first method
function sleep_in(weekday, vacation) {
    if (!weekday || vacation){
        return true;
    }else{
        return false;
    }
}


//write second method
function monkey_trouble(a_smile, b_smile) {
    if ((!a_smile && !b_smile) || (a_smile && b_smile)){
        return true;
    }else{
        return false;
    }
}


//write third method
function string_times(str, n) {
    var newWord = "";
    for (var x = 0; x<n; x++){
        newWord = newWord + str;
    }
    return newWord;

}

//write fourth method
function front_times(str, n){
    var word = "";
    for (var x = 0; x<n; x++){
        word = word + str.substring(0,3);
    }
    return word;
}


//write fifth method
function string_bits(str){
    var word = "";
    for(var i = 0; i<str.length; i+=2){
        word = word + str[i];
    }
    return word;
}


//write sixth method
function caughtSpeeding(speed, birthday){
    var noTicket = 60;
    var smallTicket = 80;
    if (birthday == true){
        noTicket = noTicket + 5;
        smallTicket = smallTicket + 5;
    }
    if (speed <= noTicket){
        return 0;
    }
    if (speed <= smallTicket){
        return 1;
    }
    if (speed > smallTicket){
        return 2;
    }
}


//write seventh method
function fizz_buzz(x){
    if (x % 3== 0 && x % 5== 0) {
        return "FizzBuzz";
    }
    if (x % 3== 0){
        return "Fizz";
    }
    if (x % 5== 0){
        return "Buzz";
    }
    if (x % 3!= 0 && x % 5!= 0){
        return x + "!";
    }
}


//write eighth method
function teaParty(tea, candy){
    if (tea < 5 || candy < 5){
        return 0;
    }
    if (tea >= candy * 2 || candy >= tea * 2){
        return 2;
    }
    if (tea >=5 && candy >=5) {
        return 1;
    }
}


//write ninth method
function blackjack(x,y){
    if (x > 21 && y > 21){
        return 0;
    }
    if (x>y && x<=21){
        return x;
    }
    if (y<= 21){
        return y;
    }else{
        return x;
    }

}

//write tenth method
function loneSum(a,b,c){
    var sum = a+b+c;
    if (a==b && a==c){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(b==c){
        return a;
    }
    if (a==c){
        return b;
    }
    return sum;
}


//write eleventh method
function firstLast6(arr){
    if (arr[0] == 6 || arr[(arr.length)-1] == 6){
        return true;
    }
        return false;
}


//write twelfth method
function has23(arr){
    if (arr.includes(2)|| arr.includes(3)){
        return true;
    }
        return false;
}


//write thirteenth method
function fix23(arr){
    for (var i=0; i<arr.length; i++){

        if(arr[i] == 2 && arr[i+1] == 3){
            arr[i+1] = 0;
        }
    }
    return arr;
}


//write fourteenth method
function countYZ(str){
    var str = str.toLowerCase();
    var sum = 0;
    for (i=0; i<str.length; i++){

        if((str[i] == "y" || str[i] == "z") && str[i+1] == " "){
            sum++;
        }
        if ((str[i] == "y" || str[i] == "z") && i == str.length-1){
            sum++;
        }
    }
    return sum;
}

//write fifteenth method
function endOther(str1, str2){
    var str1 = str1.toLowerCase();
    var str2 = str2.toLowerCase();
    if (str1.length >= str2.length) {
        if (str1.indexOf(str2) == str1.length-str2.length) {
            return true;
        }
            return false;
    }
    if (str2.length >= str1.length) {
        if (str2.indexOf(str1) == str2.length-str1.length) {
            return true;
        }
            return false;
    }

}


//write sixteenth method
function starOut(str){
    var newstring = "";
    for (var i=0; i<str.length; i++){
        if (str[i] != "*" && str[i+1] != "*" && str[i-1] != "*"){
            newstring = newstring + str[i];
         }
    }
    return newstring;
}


//write seventeenth method
function getSandwich(str){
    var breadCount = 0;
    for (var i=0; i< str.length; i++){
        if (str.substring(i,i+5) == "bread"){
            breadCount +=1;
        }
    }
    if (breadCount >=2){
        return str.substring((str.indexOf("bread")+5), str.lastIndexOf("bread"))
    }else{
        return "";
    }
}


//write eighteenth method
function canBalance(num) {
    var sum1 = 0;
    var isEqual = false;
    for (var i = 0; i < num.length; i++) {
        var sum2 = 0;
        sum1 += num[i];
        for (var j = i + 1; j < num.length; j++) {
            sum2 += num[j];

        }
        if (sum1 == sum2) {
            isEqual = true;
        }
    }
    return isEqual;
}


//write nineteenth method
function countClumps(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] == arr[i+1]){
            sum++;
            if (arr[i] == arr[i+2]){
                sum--;
            }
            for (var j = i; j<arr.length; j++){
                if (arr[j] != arr[i]){
                    break;
                }
            }
        }

    }
    return sum;

}

//write twentieth method
function evenlySpaced(a,b,c){
    if (a-b == b-c || b-c == c-a || c-a == a-b || c-b == b-a || a-c == c-b || b-a == a-c){
        return true;
    }
        return false;
}







//function runs on click and outputs test cases you create to page
function tester() {
    // document.getElementById("output").innerHTML += sleepIn(false, false);
    // document.getElementById("output").innerHTML += nextOne(true, false);
    // document.getElementById("output").innerHTML += sleepIn(true, true);
    document.getElementById("output").innerHTML += canBalance([2, 1, 1, 2, 1]);

    // document.getElementById("output").innerHTML += sleepIn(true, false);
    // document.getElementById("output").innerHTML += nextOne(true, false);
    // document.getElementById("output").innerHTML += sleepIn(true, false);
    // document.getElementById("output").innerHTML += nextOne(true, false);
    // document.getElementById("output").innerHTML += sleepIn(true, false);
    // document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

