// exercise 2

for (i = 1; i <= 10; i++) {
    const multiplication = i * 9;
    console.log(`${i} x 9 = ${multiplication}`);
};

// bonus with nested loop

// // attempt 1
// for (i = 1; i <= 10; i++) {
//     for (x = 1; x <= 10; x++) {
//         multiplication = i * x;
//     };
//     console.log(`${i} x ${x} = ${multiplication}`);
// };

// /* this is not working, because the nested loop will loop first. 
// The loops have to run together. */

// // attempt 2
// for (i = 1; i <= 10; i++) {
//     let x = 1;
//     multiplication = i * x;
//     console.log(`${i} x ${x} = ${multiplication}`);
//     x++;
// };

// /* this is not working, because i only runs for 10 times. 
// So it only does the table of 1. */

// // attempt 3
// for (i = 1, x = 1; i <= 10, x <= 10; i++, x++) {           
//     multiplication = i * x;
//     console.log(`${i} x ${x} = ${multiplication}`);
// };

// /* // this is not working, because the loops run simultaniously. 
// The loop for i has to run 10 times from 1 to 10 while the loop for x has to run 10 times. */

// attempt 4
for (i = 1; i <= 10; i++) {
    for (x = 1; x <= 10; x++) {
        multiplication = x * i;
        console.log(`${x} x ${i} = ${multiplication}`);
    };
};

/* It's working!!
The output needed to be in the nested loop. It will run 10 times and give output 10 times.
After that the nested loop is finished and the first loop will run again, so the nested loop will run 10 times again and so on */