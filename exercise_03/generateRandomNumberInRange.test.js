import { describe, test, expect, vi } from "vitest";
import { generateRandomNumberInRange } from "./generateRandomNumberInRange.js";

describe("Given generateRandomNumberInRange", () => {
    test("When input is not a number, Then it should throw a TypeError", () => {
        // Arrange
        const limit = "10";

        // Act & // Assert
        expect(() => generateRandomNumberInRange(limit)).toThrowError(TypeError);
    });

    test("When input is a number, Then it should return a rounded random number", () => {
        // Arrange
        const limit = 50;
        const mockedRandomValue = 0.5;
        
        const spyRandomNumber = vi.spyOn(Math, "random").mockReturnValue(mockedRandomValue);

        // Act
        const result = generateRandomNumberInRange(limit);

        // Assert
        expect(result).toBe(25);

        // Cleanup
        spyRandomNumber.mockRestore();
    });

    test("When input is a negative number, Then it should return a rounded random number", () => {
        // Arrange
        const limit = -10;
        const mockedRandomValue = 0.2;
        
        const spyRandomNumber = vi.spyOn(Math, "random").mockReturnValue(mockedRandomValue);

        // Act
        const result = generateRandomNumberInRange(limit);

        // Assert
        expect(result).toBe(-2);

        // Cleanup
        spyRandomNumber.mockRestore();
    });
});
