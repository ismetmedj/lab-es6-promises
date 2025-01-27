// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...

getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    // ... Your code here
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;

                    getInstruction(
                      "mashedPotatoes",
                      4,
                      () => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                        const potatoes =
                          document.getElementById("mashedPotatoesImg");
                        potatoes.removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// ... Your code here

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    obtainInstruction("steak", 1)
      .then((step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
        obtainInstruction("steak", 2)
          .then((step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
            obtainInstruction("steak", 3)
              .then((step3) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step3}</li>`;
                obtainInstruction("steak", 4)
                  .then((step4) => {
                    document.querySelector(
                      "#steak"
                    ).innerHTML += `<li>${step4}</li>`;
                    obtainInstruction("steak", 5)
                      .then((step5) => {
                        document.querySelector(
                          "#steak"
                        ).innerHTML += `<li>${step5}</li>`;
                        obtainInstruction("steak", 6)
                          .then((step6) => {
                            document.querySelector(
                              "#steak"
                            ).innerHTML += `<li>${step6}</li>`;
                            obtainInstruction("steak", 6)
                              .then(() => {
                                document.querySelector(
                                  "#steak"
                                ).innerHTML += `<li>Stake is ready!</li>`;
                                const steak =
                                  document.getElementById("steakImg");
                                steak.removeAttribute("hidden");
                              })
                              .catch((error) => console.log(error));
                          })
                          .catch((error) => console.log(error));
                      })
                      .catch((error) => console.log(error));
                  })
                  .catch((error) => console.log(error));
              })
              .catch((error) => console.log(error));
            //  ... Your code here
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
async function makeBroccoli() {
  // ... Your code here

  // const brocoSteps = await fetch('./data.js')
  // const brocoStepsValues = await brocoSteps.json()
  // // const brocoSteps = await obtainInstruction('broccoli',step0);
  // console.log(brocoStepsValues);

  // const brocoSteps = [];
  for (let i = 0; i < 7; i++) {
    let value = await obtainInstruction("broccoli", i);
    document.querySelector("#broccoli").innerHTML += `<li>${value}</li>`;
    // brocoSteps.push(value);
  }
  // console.log(brocoSteps);
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;

  const broccoli = document.getElementById("broccoliImg");
  broccoli.removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
// ...

// Promise.all.forEach(element => {
//   document.querySelector(
//     "#brusselsSprouts"
//   ).innerHTML += `<li>${element}</li>`;

// });

// Promise.all( [promise1, promise2, promise3] )
// .then((values) => { // Resolved value is an array
//  console.log("promise1 value: ", values[0] );
//  console.log("promise2 value: ", values[1] );
//  console.log("promise3 value: ", values[2] );
// })
// .catch((error) => {})

// let brussels1 = await obtainInstruction("broccoli", i);

// for ( let i =0; i < brusselsSprouts.length ; i++){

Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
])
  .then((values) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${values[0]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${values[1]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${values[2]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${values[3]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${values[4]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${values[5]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${values[6]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${values[7]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;

    const brussels = document.getElementById("brusselsSproutsImg");
    brussels.removeAttribute("hidden");
  })
  .catch((error) => {});

// }
