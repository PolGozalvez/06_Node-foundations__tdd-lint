import { describe, test, expect } from "vitest";
import { isAdditionGreaterThanFifty } from "./isAdditionGreaterThanFifty.js";

describe("Given isAdditionGreaterThanFifty", () => {
    test("When the inputs are not numbers, Then throw an error", () => {
        // Arrange
        const summand1 = "10";
        const summand2 = 20;

        // Act & // Assert
        expect(() => isAdditionGreaterThanFifty(summand1, summand2)).toThrowError(TypeError);
    });

    test("When the inputs are not numbers, Then throw an error", () => {
        // Arrange
        const summand1 = 10;
        const summand2 = "20";

        // Act & // Assert
        expect(() => isAdditionGreaterThanFifty(summand1, summand2)).toThrowError(TypeError);
    });

    test("When the sum of the numbers is greater than or equal to 50, Then show the result", () => {
        // Arrange
        const summand1 = 30;
        const summand2 = 30;

        // Act
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert
        expect(result).toBe(true);
    });

    test("When the sum of the numbers is less than 50, Then show the result", () => {
        // Arrange
        const summand1 = 10;
        const summand2 = 20;

        // Act
        const result = isAdditionGreaterThanFifty(summand1, summand2);

        // Assert
        expect(result).toBe(false);
    });
});
