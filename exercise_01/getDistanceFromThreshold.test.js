import { describe, test, expect } from "vitest";
import { getDistanceFromThreshold } from "./getDistanceFromThreshold.js";

describe("Given getDistanceFromThreshold", () => {
    test("When the input value is not a number, Then throw an error", () => {
        //Arrange
        const value = "string";
        const threshold = 1;

        //Act & //Assert
        expect(() => getDistanceFromThreshold(value, threshold)).toThrowError(
            TypeError
        );
    });

    test("When the input threshold is not a number, Then throw an error", () => {
        //Arrange
        const value = 1;
        const threshold = "string";

        //Act & //Assert
        expect(() => getDistanceFromThreshold(value, threshold)).toThrowError(
            TypeError
        );
    });

    test("When the inputs are numbers, Then find how much a number exceeds or is left to reach one value", () => {
        //Arrange
        const value = 1;
        const threshold = 1;

        //Act
        const result = getDistanceFromThreshold(value, threshold);

        //Assert
        expect(result).toBe(0);
    });

    test("When the inputs are numbers, Then find how much a number exceeds or is left to reach one value", () => {
        //Arrange
        const value = -1;
        const threshold = 1;

        //Act
        const result = getDistanceFromThreshold(value, threshold);

        //Assert
        expect(result).toBe(2);
    })
});
