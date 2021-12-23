import { createClassesNavigation } from "./declarative/classes-mapper";
import { ClassesMapper } from "./imperative/ClassesMapper";
import { mockSchoolsWithClasses } from "./mock";

const output = (el: any) => JSON.stringify(el, null, 2);

console.log("Creating classes navigation from Mock", output(mockSchoolsWithClasses));

// Declarative solution

// TODO: implement logic in the classes-mapper module and create classes navigation from the mock
console.log("Declarative > Result", "TODO");

// Imperative solution

// TODO: implement logic in the ClassesMapper class and create classes navigation from the mock
console.log("Imperative > Result", "TODO");
