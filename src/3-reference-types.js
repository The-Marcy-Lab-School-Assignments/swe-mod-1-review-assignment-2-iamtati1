const team1 = {
  name: "Warriors",
  wins: 45,
  losses: 20
};

const team2 = { ...team1 }; // think of the spread operator as copy and paste in a way so that you don't have to write code over and over again.
team2.wins = 50;
team2.losses = 15;

console.log(team1.wins, team1.losses);
console.log(team2.wins, team2.losses);

/*
Part A: What will team1.wins and team1.losses be after this code runs? Write your prediction as a comment below:

- Prediction: 
I predict that team1.wins will be 50
I predict that team1.losses will be 15
This is because Team 1 and Team 2 are referencing the same object in memeory. We update team2 when we update team 1.

Part B: Fix the code so that team2 is a TRUE COPY of team1. After making your fix, changing team2 should NOT affect team1.
Part C: Verify your fix by logging both team1.wins (should still be 45) and team2.wins (should be 50)
*/

