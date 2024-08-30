import Magician from "../magician";

test("should create a valid Magician", () => {
  const magician = new Magician("Lucifer");
  const correct = {
    name: "Lucifer",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(correct);
});
