import { describe, test, expect } from "vitest";
import { transformCollectionToString } from "./transformCollectionToString.js";

describe("Given transformCollectionToString", () => {
    test("When input is not an array, then throw a TypeError", () => {
        // Arrange
        const collection = 123;

        // Act & // Assert
        expect(() => transformCollectionToString(collection)).toThrowError(TypeError);
    });

    test("When input is an empty array, then return an empty string", () => {
        // Arrange
        const collection = [];

        // Act
        const actual = transformCollectionToString(collection);

        // Assert
        expect(actual).toBe("");
    });

    test("When input is an array with elements, then return array as string", () => {
        // Arrange
        const collection = ["a", "b", "c"];

        // Act
        const actual = transformCollectionToString(collection);

        // Assert
        expect(actual).toBe("a|b|c");
    });

    test("When input is an array with elements, then return array as string", () => {
        // Arrange
        const collection = ["1", "2", "3", "4"];

        // Act
        const actual = transformCollectionToString(collection);

        // Assert
        expect(actual).toBe("1|2|3|4");
    });
});
