import { describe, test, expect } from "vitest";
import { checkCollectionHasElements } from "./checkCollectionHasElements.js";

describe("Given checkCollectionHasElements", () => {
    test("When the collection in not an array, Then throw an error", () => {
        // Arrange 
        const collection = "not an array";

        // Act & // Assert
        expect(() => checkCollectionHasElements(collection)).toThrowError(TypeError);
    });

    test("When the collection is an empty array, Then return false", () => {
        // Arrange 
        const collection = [];

        // Act
        const result = checkCollectionHasElements(collection);

        // Assert
        expect(result).toBe(false);
    });

    test("When the collection is an array with numbers, Then return true", () => {
        // Arrange 
        const collection = [1, 2, 3];

        // Act
        const result = checkCollectionHasElements(collection);

        // Assert
        expect(result).toBe(true);
    });

    test("When the collection is an array with strings, Then return true", () => {
        // Arrange 
        const collection = ["3", "2", "1"];

        // Act
        const result = checkCollectionHasElements(collection);

        // Assert
        expect(result).toBe(true);
    });
});
