import test, { describe } from "node:test";
import assert from "node:assert";
import { itemReducer } from "./itemReducer.js";

describe("test item reducer", () => {
  test("'add' - append item baru", () => {
    const nasi = {
      nama: "nasi goreng",
      harga: 15000,
    };

    const items = itemReducer([], { type: "add", item: nasi });

    assert.notEqual(items, undefined);
    assert.notEqual(items, []);
    assert.strictEqual(items[0].nama, "nasi goreng");
    assert.strictEqual(items[0].harga, 15000);
    assert.strictEqual(items[0].quantity, 1);

    const air = {
      nama: "air putih",
      harga: 2000,
    };

    const itemsNew = itemReducer(items, { type: "add", item: air });

    assert.notStrictEqual(items, itemsNew);
    assert.strictEqual(itemsNew[1].nama, "air putih");
    assert.strictEqual(itemsNew[1].harga, 2000);
    assert.strictEqual(itemsNew[1].quantity, 1);
  });

  test("'add' - nambah quantity", () => {
    const nasi = {
      nama: "nasi goreng",
      harga: 15000,
    };

    const items = itemReducer([], { type: "add", item: nasi });
    const itemsNew = itemReducer(items, { type: "add", item: nasi });

    assert.equal(itemsNew.length, 1);
    assert.equal(itemsNew[0].quantity, 2);
  });
});
