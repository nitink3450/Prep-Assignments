//Q.1.Find the Smaller Angle
// PrepBuddy has an analog clock which consists of two hands one for hour and another 
// for minute. She wants to calculate the shorter angle formed between hour and minute hand at any
//  given time.

var Minimal_Angle = (h, m) => {
    if (h == 12) {  h = 0 }
    if (m == 60) {
      m = 0;
      h += 1;
      if (h > 12) {h = h - 12}
    }
  
    let hour_angle = 0.5 * (h * 60 + m);
    let minute_angle = 6 * m;
  
    let angle = Math.abs(hour_angle - minute_angle);
  
    angle = Math.min(360 - angle, angle);
  
    console.log(angle);
  };

  Minimal_Angle(6,0);

//Q.2.Check whether the year is Leap year or not.
    // Write a program which takes an year N as input from the user and find out whether the
    //  given year is a Leap Year or not.

    var Check_Leap = (year) => {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
          console.log("Leap Year");
        } else {
          console.log("Non Leap Year");
        }
      };
      Check_Leap(1999);

//Q.3.Perfect Number Check.
// Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are
//  integers that are equal to the sum of all its divisors except that number itself.
// Now, You are given an integer N, write a program to check whether the given number is
//  a Perfect Number or not.

var Perfect_Check = (N) => 
{
  if(N===1){
    console.log("YES");
  }else{
    let sum = 0;
    for(let i = 1;i<N;i++){
      if(N%i===0){
        sum += i
      }
    }
    if (sum === N){
        console.log("YES");
    }else{
        console.log('NO')
    }
  }
};
Perfect_Check(1);

//Q.4 Reverse a Number.
// Write a program which takes a numebr N as input from the user and You need to
//  reverse the number.

var Reverse_Number = (N) => 
    {
      N = N.toString()
    let newNum = 0;
    let rem = 0;
    for (let i of N) {
      rem = N % 10;
      N = Math.floor(N / 10);
      newNum = newNum * 10 + rem;
    }
      console.log(newNum) ;
    };
Reverse_Number(1900);

//Q.5. Substring Check.
// You are given two strings S1 and S2, you need to check whether the string
//  S1 is a substring of string S2 or not.

var Substring_Check = (S1, S2) => 
{
     (S1.includes(S2))? console.log('YES') : console.log('NO');
};
Substring_Check('nitin kanhurkar','nitin');
