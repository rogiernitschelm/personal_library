# Swift Summary

## Variables and constants

    let isConstant = "this cannot change"
    var isVariable = "this can change"


## Types

A short list of types:

    let characterType: Character = "A"
    let stringType: String = "A string"
    let floatType: Float = 2.2  // speed
    let doubleType: Double = 3.3 // precision
    let integerType: Int = 5
    let booleanType: Bool = true

Initializing:

    let stringInitialization = String()

Checking for a type:

    type(of: characterType)

## Strings

String interpolation:

    let age = 100
    let string = "I am \(age) old! Gee!"

Methods:

    .characters
      .reversed()
      .count

    .contains("substring")
    .replacingOccurrences(of: "substring" with: "other substring")

## Dictionaries

Adding item to a dictionary:

    someDict["itemName"] = "value"

Removing an item from a dictionary:

    someDict["itemName"] = nil

Updating a value:

    someDict["itemName"] = "valueTwo"

Updating a value (safe):

    someDict.updateValue("some value", forKey: "some other value ")


Methods:

    .count

## Ranges

Closed range (1 AND 10)

    let myRange: ClosedRange = 1...10
    let myCountableRange: CountableClosedRange = 1...10

Half-open range (1 UP TO BUT NOT INCLUDING 10)

    let myRange: Range = 1..<10
    let myCountableRange: CountableRange = 1..<10

## Comparison

Comparison operators:

    < > == >= <= !=

And / Or-operators:

    && ||

If-else-statements:

    if condition {
      ... code ...
    } else if otherCondition {
      ... code ...
    } else {
      ... code ...
    }

Switch-statements:

    switch variableName {
      case firstValue:
        firstStatement
        break // stop here
      case secondValue:
        secondStatement
        fallthrough // continue to next case
      case thirdValue, fourthValue:
        thirdStatement
      default:
        defaultStatement
    }
## Functions

Declaring a function:

    func functionWithoutArguments() {
      ... some code ...
    }

    func functionWithArguments(argumentOne: String) {
      ... some code ...
    }

    func functionWithReturnValue(argumentOne: Int) -> Int {
      ... some code ...
    }

    func functionWithNoReturnValue(argumentOne: String) -> Void {
      ... some code ...
    }

    func functionWithDefaultArgument(argumentOne: Int = 2) {
      ... some code ...
    }

Invoking a function:

    functionWithoutArguments()
    functionWithArguments(argumentOne: "Some string")

## Enums and sww

Example:

    enum Season {
      case fall
      case winter
      case spring
      case summer
    }

Example single line:

    enum Aunties {
      case aime, billie, diane, gail, janie
    }

Explicitly assigning a value:

    enum Direction: Int {
      case up = 0, right, down, left
    }

Enum and switch combined:

    enum CaliforniaPark {
      case yosemite, deathValley, lasson, sequoia
    }

    var warning = ""
    var destination = CaliforniaPark.Yosemite

    switch destination {
      case .Yosemite:
        warning = "Beware of bears!"
      case .DeathValley:
        warning = "Beweare of dehydration!"
      ... etc
    }

## Structs

Structs are a data type when declared. Like Int and String.

Defining a struct:

    struct Building {
      let name: String
      let location: String
      let age: 0
    }

Initializing a struct:

    let TowerOfEiffel = Building(name: Eiffel, location: Paris, age: 999)

## Optionals

Declaring an optional:

    var optional: Int?
    var optional: Int!

Nil-Coalescing Operator:

    // if newFavoriteRestaurant == nil, then set whereToeat to yummyRestaurant
    let whereToEat = newFavoriteRestaurant ?? yummyRestaurant

## Custom operators

Kinds:

    - prefix;
    - infix;

Prefix:

    prefix operator !  {}

    prefix func ! (word: String) -> {
      return "dis" + word
    }

    ! "appear" // "disappear"

Infix:

    infix operator ⊡: MultiplicationPrecedence

    func ⊡ (base: Int, power: Int) -> Int {
      return Int(pow(Double(base), Double(power)))
    }

## Data storages

Types:

    .plist
    .json

Plist:

    Root container an array? then -> NSArray
    Root container a dictionary? then -> NSDictionary
