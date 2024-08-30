import Bowerman from "../bowerman";

test("should throw an error for invalid name length", () => {
  expect(() => new Bowerman("R")).toThrow(
    "Имя должно быть строкой длиной от 2 до 10 символов"
  );
  expect(() => new Bowerman("Rnsdkcndnvknkd")).toThrow(
    "Имя должно быть строкой длиной от 2 до 10 символов"
  );
});

test("should create a valid Bowerman", () => {
  const bowman = new Bowerman("Robin");
  const correct = {
    name: "Robin",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(correct);
});
