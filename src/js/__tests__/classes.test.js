import Character from "../character";
import Bowerman from "../bowerman";
import Daemon from "../daemon";
import Magician from "../magician";
import Swordsman from "../swordsman";
import Undead from "../undead";
import Zombie from "../zombie";

test("should throw an error for invalid name length", () => {
  expect(() => new Bowerman("R")).toThrow(
    "Имя должно быть строкой длиной от 2 до 10 символов"
  );
  expect(() => new Bowerman("Rnsdkcndnvknkd")).toThrow(
    "Имя должно быть строкой длиной от 2 до 10 символов"
  );
});

test("should throw an error for invalid character type", () => {
  expect(() => new Character("Robin", "type")).toThrow(
    "Тип должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie"
  );
});

test("should create a valid Bowerman", () => {
  const bowman = new Bowerman("Robin");
  expect(bowman.name).toBe("Robin");
  expect(bowman.type).toBe("Bowman");
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test("should create a valid Daemon", () => {
  const daemon = new Daemon("Merlin");
  expect(daemon.name).toBe("Merlin");
  expect(daemon.type).toBe("Daemon");
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});

test("should create a valid Magician", () => {
  const magician = new Magician("Lucifer");
  expect(magician.name).toBe("Lucifer");
  expect(magician.type).toBe("Magician");
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test("should create a valid Swordsman", () => {
  const swordsman = new Swordsman("Arthur");
  expect(swordsman.name).toBe("Arthur");
  expect(swordsman.type).toBe("Swordsman");
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test("should create a valid Undead", () => {
  const undead = new Undead("Diablo");
  expect(undead.name).toBe("Diablo");
  expect(undead.type).toBe("Undead");
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test("should create a valid Zombie", () => {
  const zombie = new Zombie("Zombie");
  expect(zombie.name).toBe("Zombie");
  expect(zombie.type).toBe("Zombie");
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});
