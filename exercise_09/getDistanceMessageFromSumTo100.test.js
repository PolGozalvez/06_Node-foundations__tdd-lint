import { describe, test, expect, vi } from "vitest";
import { getDistanceMessageFromSumTo100 } from "./getDistanceMessageFromSumTo100.js";

describe("Given getDistanceMessageFromSumTo100", () => {
    test("When input is not a number, Then throw an error.", () => {
        // Arrange
        const value = "a";

        // Act & // Assert
        expect(() => getDistanceMessageFromSumTo100(value)).toThrowError(TypeError);
    });

    test("When sum exceeds 100, Then return message 'Sum with value <random> exceeds in <sum> from number 100'", () => {
        // Arrange
        const value = 90;
        const mockedRandomValue = 0.5;

        const spyRandomNumber = vi.spyOn(Math, "random").mockReturnValue(mockedRandomValue);

        // Act
        const result = getDistanceMessageFromSumTo100(value);

        // Assert
        expect(result).toBe(`Sum with value 50 exceeds in 140 from number 100`);

        // Cleanup
        spyRandomNumber.mockRestore();
    });

    test("When sum is less than 100, Then return message 'Sum with value <random> is left in <result> from number 100'", () => {
        // Arrange
        const value = 50;
        const mockedRandomValue = 0.4;

        const spyRandomNumber = vi.spyOn(Math, "random").mockReturnValue(mockedRandomValue);

        // Act
        const result = getDistanceMessageFromSumTo100(value);

        // Assert
        expect(result).toBe(`Sum with value 40 is left in 10 from number 100`);

        // Cleanup
        spyRandomNumber.mockRestore();
    });
});
