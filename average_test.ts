import { expect } from "@std/expect";
import { Average } from "./average.ts";
import { NumberSource } from "./Iaverage.ts";

//stub
class StubNumberSource implements NumberSource {
  public async readNumbers(): Promise<Array<number>> {
    return [1, 2, 3, 4];
  }
}

Deno.test("computeMeanOfFile mit StubNumberSource", async () => {
  const stub = new StubNumberSource();
  const average = new Average(stub);

  const result = await average.computeMeanOfFile();

  expect(result).toBe(2.5);
});

//mock
class CountingNumberSource implements NumberSource {
  public callCount = 0;

  public async readNumbers(): Promise<Array<number>> {
    this.callCount += 1;
    return [1, 2, 3, 4];
  }
}

Deno.test("computeMeanOfFile ruft NumberSource genau einmal auf", async () => {
  const mock = new CountingNumberSource();
  const average = new Average(mock);

  const result = await average.computeMeanOfFile();

  expect(result).toBe(2.5);
  expect(mock.callCount).toBe(1);
});