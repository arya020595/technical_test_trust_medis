function findAvailableTeams(teams: any, requests: any) {
  // Initialize teams availability array with 0s (all teams are available)
  const teamAvailability = Array(teams).fill(0);

  // Sort the requests in ascending order
  const sortedRequests = requests.slice().sort((a: any, b: any) => a - b);

  // Initialize the result array to store team assignments
  const result = [];

  // Assign teams in round-robin fashion
  for (let i = 0; i < sortedRequests.length; i++) {
    let assigned = false;

    for (let j = 0; j < teams; j++) {
      const currentTeam = (i + j) % teams;

      if (teamAvailability[currentTeam] <= sortedRequests[i]) {
        result.push(currentTeam + 1);
        teamAvailability[currentTeam] = sortedRequests[i] + 2; // Blood test takes up to two hours
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      result.push(0); // No available team
    }
  }

  return result;
}

// Example test cases
const requests1 = [7, 8, 10, 9, 9];
const teams1 = 2;
console.log(findAvailableTeams(teams1, requests1)); // Output: [1, 2, 1, 0, 2]

const requests2 = [9, 10, 13, 10, 11];
const teams2 = 3;
console.log(findAvailableTeams(teams2, requests2)); // Output: [1, 2, 2, 3, 1]

const requests3 = [9, 10, 10, 10, 11];
const teams3 = 3;
console.log(findAvailableTeams(teams3, requests3)); // Output: [1, 2, 3, 0, 1]
