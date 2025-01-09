import { describe, test ,expect } from "vitest";
import { formatStringByWordsLength } from "./formatStringByWordsLength.js";

describe("Given formatStringByWordsLength", () => {
    test("When the input is not a string, Then throw an error.", () => {
        // Arrange
        const input = 123;
        
        // Act & // Assert
        expect(() => formatStringByWordsLength(input)).toThrow(TypeError);
    });

    test("When the input is a string with 5 words, Then return the string in lowercase.", () => {
        // Arrange
        const input = "This is a test sentence";
        
        // Act
        const result = formatStringByWordsLength(input);
        
        // Assert
        expect(result).toBe("this is a test sentence");
    });

    test("When the input is a string with 6 words, Then return the string in uppercase.", () => {
        // Arrange
        const input = "Is a string with 6 words";
        
        // Act
        const result = formatStringByWordsLength(input);
        
        // Assert
        expect(result).toBe("IS A STRING WITH 6 WORDS");
    });
});
