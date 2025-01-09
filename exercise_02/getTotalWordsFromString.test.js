import { describe, test, expect } from "vitest";
import { getTotalWordsFromString } from "./getTotalWordsFromString.js";

describe("Given getTotalWordsFromString", () => {
    test("When the input is not a string, Then throw an error", () => {
        //Arrange
        const sentence = 1;

        //Act & //Assert
        expect(() => getTotalWordsFromString(sentence)).toThrowError(TypeError);
    });

    test("When the input is a string, Then get the total number of words contained in one string", () => {
        //Arrange
        const sentence = "This is a sentence";

        //Act
        const result = getTotalWordsFromString(sentence);

        //Assert
        expect(result).toBe(4);
    });

    test("When the input is a string, Then get the total number of words contained in one string", () => {
        //Arrange
        const sentence = "This is a sentence with more words";

        //Act
        const result = getTotalWordsFromString(sentence);

        //Assert
        expect(result).toBe(7);
    });
});
