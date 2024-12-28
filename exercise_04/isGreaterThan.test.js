import { describe, test, expect } from "vitest";
import { isGreaterThan } from "./isGreaterThan.js";

describe("Given isGreaterThan", () => {
    test("When the input value is not a number, Then it should throw a TypeError", () => {
        // Arrange
        const inputValue = "5";
        const threshold = 10;

        // Act & // Assert
        expect(() => isGreaterThan(inputValue, threshold)).toThrow(TypeError);
    });

    test("When the input threshold is not a number, Then it should throw a TypeError", () => {
        // Arrange
        const inputValue = 5;
        const threshold = "10";

        // Act & // Assert
        expect(() => isGreaterThan(inputValue, threshold)).toThrow(TypeError);
    });

    test("When the input value is less than the threshold, Then it should return false", () => {
        // Arrange
        const inputValue = 5;
        const threshold = 10;

        // Act
        const result = isGreaterThan(inputValue, threshold);

        // Assert
        expect(result).toBe(false);
    });

    test("When the input value is greater than the threshold, Then it should return true", () => {
        // Arrange
        const inputValue = 10;
        const threshold = 5;

        // Act
        const result = isGreaterThan(inputValue, threshold);

        // Assert
        expect(result).toBe(true);
    });

    test("When the input value is equal to the threshold, Then it should return false", () => {
        // Arrange
        const inputValue = 5;
        const threshold = 5;

        // Act
        const result = isGreaterThan(inputValue, threshold);

        // Assert
        expect(result).toBe(false);
    });
});
