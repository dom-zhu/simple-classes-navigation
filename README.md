# Simple Classes Navigation

The purpose of this project is to practice programming using 2 different paradigms: **imperative** and **declarative** programming.

**Declarative programming** is a programming paradigm that expresses the logic of a computation without describing its control flow.

**Imperative programming** is a programming paradigm that uses statements that change a program’s state.

## Context

The problem you're going to solve is coming from a real use case a PZ team had to solve for one of his client.

A web application receives data from an API; a list of schools with their associated classes.\
You can check out the file **mock.ts** as an example.

The data needs to be sanitized and formatted properly to display the list of schools and classes in the left side panel of a web application.\
You can check out the screenshots of the side panel in the images folder as an example.

There are some business rules to apply when displaying the side panel.\
You can check out the acceptance criteria in the **ACCEPTANCE_CRITERIA** markup file.

## Objective of the exercise

Your goal is to implement a solution that transforms the list of schools coming from the API to a list of navigation groups ready to be passed as a parameter of a React component (which isn't part of this repository).

You must implement 2 solutions of this problem, one using declarative programming paradigm, one using imperative programming paradigm.

In order to verify your implementations, you can run the program from app.ts that uses the mock data and output the result (see instructions below).

You also need to have all the unit tests passing to verify both of your implementations are compliant with the acceptance criteria.

Make sure you check out the **types.ts** definition and the **helpers** to help you implement the logic.

## Run and test

Run the program and check the result of the mock transformation:

```
npm start
```

Run the tests and verify both implementations are correct

```
npm test
```
