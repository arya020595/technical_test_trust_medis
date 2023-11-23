function findAvailableTeams(teams, requests) {
  // example: teams = 2
  // teamAvailability init value => [11, 12]
  const teamAvailability = Array(teams).fill(0);
  // example: requests = [7, 8, 10, 9, 9]
  // => [7, 8, 9, 9, 10] (sort Array from smallest to largest value)
  const sortedRequests = [...requests].sort((a, b) => a - b);

  const result = [];

  for (const request of sortedRequests) {
    let assigned = false;

    for (let j = 0; j < teams; j++) {
      const currentTeam = (result.length + j) % teams;

      if (teamAvailability[currentTeam] <= request) {
        result.push(currentTeam + 1);
        teamAvailability[currentTeam] = request + 2;
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      result.push(0);
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
console.log(findAvailableTeams(teams2, requests2)); // Output: [1, 2, 3, 1, 2]

const requests3 = [9, 10, 10, 10, 11];
const teams3 = 3;
console.log(findAvailableTeams(teams3, requests3)); // Output: [1, 2, 3, 0, 1]
