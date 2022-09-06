# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jevaughn_w/lotide`

**Require it:**

`const _ = require('@jevaughn_w/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEquals(firstArray, secondArray)` : prints if two arrays are strictly equal.
* `assertEqual(firstArray, secondArray)` : prints if two values are the strictly equal.
* `assertObjectsEquals(firstObject, secondObject)` : checks if the values of two objects are strictly equal.
* `countLetters(string)` : counts the number of distinct letters in a string.
* `countOnly(arrayOfStrings, objectIndicatingStringsToCount )` : count the frequency an element in an array based on whether the corresponding key in the object argument has a value of true.
* `eqArrays(firstArray, secondArray)` : checks if two arrays are strictly equal.
* `eqObjects(firstObject, secondObject)` : checks if the values of two objects are strictly equal.
* `findkeys(object, callbackFunction)` : finds an object's keys based on a callback function.
* `findkeyByValue(object, keyValue)` : find an object's keys based on a value inputed.
* `flatten(nestedArray)` : converts a nested array into a flat array.
* `head(array)` : returns the first element of an array.
* `letterPositions(string)` : returns an object containing the index of a specified letter in a string.
* `map(array, callbackfunction)` : returns an array based on the callback passed as an argument.
* `middle(array)` : returns the middle of an array
* `tail(array)` : returns the elements of an array excluding the head.
* `takeUntil(array, callbackFunction)` : returns an array until a specified element is found.
* `without(array, elementToRemove)` :  returns an array without a specified element.