import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

describe("Calculator", () => {

  it("calcs", async() => {
    for (var i in dataset) {
      let data = dataset[i]
    
      let x = data.x
      let y = data.y 
      let method = data.method
      let answer
      let calculated_answer
      switch (method) {
        case "add":
          answer = x+y
          calculated_answer = calculator.add(x,y)
          break;
        case "subtract":
          answer = x-y
          calculated_answer = calculator.subtract(x,y)
          break;
        case "multiply":
          answer = x*y
          calculated_answer = calculator.multiply(x,y)
          break;
        case "divide":
          answer = x/y
          calculated_answer = calculator.divide(x,y)
          break;
      }
      expect(calculated_answer).toEqual(answer)
    }
  })
    
  for (var i in dataset) {
    let data = dataset[i]
    it(`Calculating ${data.x} ${data.method} ${data.y}`, async() => {
      let x = data.x
      let y = data.y 
      let method = data.method
      let answer
      let calculated_answer
      switch (method) {
        case "add":
          answer = x+y
          calculated_answer = calculator.add(x,y)
          break;
        case "subtract":
          answer = x-y
          calculated_answer = calculator.subtract(x,y)
          break;
        case "multiply":
          answer = x*y
          calculated_answer = calculator.multiply(x,y)
          break;
        case "divide":
          answer = x/y
          calculated_answer = calculator.divide(x,y)
          break;
      }
      expect(calculated_answer).toEqual(answer)
    })
  }

});
