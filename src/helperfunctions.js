const sum = (arr) => arr.reduce((a, b) => a + b);

const sumTimer = (arr) => {
  // console.log(arr);
  let durationArr = arr.map(a => a.duration.split(':').map(b => parseInt(b, 10)));

  let hourSum = sum(durationArr.map(el => el[0]));
  let minuteSum = sum(durationArr.map(el => el[1]));
  let secondSum = sum(durationArr.map(el => el[2]));

  let seconds = (secondSum % 60).toString();
  if (seconds.length === 1) seconds = 0 + seconds;
  let minutes = (minuteSum % 60 + Math.floor(secondSum / 60)).toString();
  if (minutes.length === 1) minutes = 0 + minutes;
  let hours = (hourSum % 60 + Math.floor(secondSum / 60)).toString();
  if (hours.length === 1) hours = 0 + hours;

  return `${hours}:${minutes}:${seconds}`;
}
