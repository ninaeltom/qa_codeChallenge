import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand Poobah",
    });
  });
  it("can add another employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test 2 person",
      phone: "1334567890",
      title: "test result 2",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test 2 person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test 2 person");
    expect(employee.phone).toEqual("1334567890");
    expect(employee.title).toEqual("test result 2");
  });
  it("can cancel an edit of an employee", async () => {
    await em.selectEmployeeByName("Eve Sparks");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.cancelChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("Eve Sparks");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("Eve Sparks");
    expect(employee.phone).toEqual("8734567810");
    expect(employee.title).toEqual("Product Manager");
  });
  it("can edit and not save change after navigating", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("New Employee");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("New Employee");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("New Employee");
  });
});
