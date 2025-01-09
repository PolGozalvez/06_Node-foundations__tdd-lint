import { describe, test, expect } from "vitest";
import { isTypeOf } from "./isTypeOf.js";

describe("Given isTypeOf", () => {
    test("When the type is not valid, Then throws an error.", () => {
        // Arrange
        const value = 1;
        const type = "object";

        // Act & // Assert
        expect(() => isTypeOf(value, type)).toThrowError(TypeError);
    });

    test("When the values matches are not the same, Then shows false.", () => {
        // Arrange
        const value = 1;
        const type = "string";

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(false);
    });
    
    test("When the values matches are the same, Then shows true.", () => {
        // Arrange
        const value = 1;
        const type = "number";

        // Act
        const result = isTypeOf(value, type);

        // Assert
        expect(result).toBe(true);
    });
});
