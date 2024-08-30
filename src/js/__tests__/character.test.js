import Character from "../character";

test("should throw an error for invalid character type", () => {
  expect(() => new Character("Robin", "type")).toThrow(
    "Тип должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie"
  );
});
