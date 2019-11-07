import { orderAscen } from "./AppContext";

describe("orderAscen", () => {
  it("ordering provided array of object ascendingly by the provided key", () => {
    expect(orderAscen([{ id: 5 }, { id: 2 }, { id: 4 }], "id")).toEqual([
      { id: 2 },
      { id: 4 },
      { id: 5 }
    ]);
    expect(orderAscen([{ id: 5 }, { id: 2 }, { id: 4 }], "name")).toEqual([
      { id: 5 },
      { id: 2 },
      { id: 4 }
    ]);
    expect(orderAscen([{ id: 5 }, { id: 2 }, { id: 4 }], null)).toEqual([
      { id: 5 },
      { id: 2 },
      { id: 4 }
    ]);
    expect(orderAscen([{ id: 5 }, { id: 2 }, { id: 4 }], false)).toEqual([
      { id: 5 },
      { id: 2 },
      { id: 4 }
    ]);
    expect(orderAscen([{ id: 5 }, { id: 2 }, { id: 4 }], true)).toEqual([
      { id: 5 },
      { id: 2 },
      { id: 4 }
    ]);
    expect(orderAscen(null, "key")).toEqual(null);
  });
});
