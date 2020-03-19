const UNIX_START = 1970;

function calculateAge(day) {
  const birthday = new Date(day);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - UNIX_START);
}

export default calculateAge;
