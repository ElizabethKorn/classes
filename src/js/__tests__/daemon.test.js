import Daemon from "../daemon";

test("should create a valid Daemon", () => {
  const daemon = new Daemon("Merlin");
  const correct = {
    name: "Merlin",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(correct);
});
