import Character from "../character";

test("should throw an error for invalid name length", () => {
  expect(() => new Character("R", "Bowman")).toThrow(
    "Имя должно быть строкой длиной от 2 до 10 символов"
  );
  expect(() => new Character("Rnsdkcndnvknkd", "Bowman")).toThrow(
    "Имя должно быть строкой длиной от 2 до 10 символов"
  );
});

test("should throw an error for invalid character type", () => {
  expect(() => new Character("Robin", "type")).toThrow(
    "Тип должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie"
  );
});
