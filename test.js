//오브젝트
const player = {
  name: "user",
  point: 10,
  fat: true,
};
console.log(player);
console.log(player.name);

player.lastName = "monster";
console.log(player);

player.point = 15;
console.log(player);
player.point = player.point + 15;
console.log(player);
