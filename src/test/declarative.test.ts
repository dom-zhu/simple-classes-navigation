import { INavLinkGroup } from "../types";
import { createClassesNavigation } from "../declarative/classes-mapper";
import { generateMock } from "./helpers";

describe("DECLARATIVE > Map school classes to nav group", () => {
    describe("One school classes to nav group", () => {
        test("it should not render 1 school without classes", () => {
            const mockSchoolWithNoClasses = generateMock([1], []);
            const result = createClassesNavigation(mockSchoolWithNoClasses);
            expect(result).toEqual([]);
        });

        test("it should render 1 school with classes", () => {
            const mockSchoolWith2Classes = generateMock([1], [1, 2]);
            const result: INavLinkGroup[] = createClassesNavigation(mockSchoolWith2Classes);

            expect(result).toHaveLength(1);
            const school = result[0];

            // the school name should not appear when there is only 1 school
            expect(school.name).toBeUndefined();
            expect(school.links).toBeDefined();
            expect(school.links).toHaveLength(2);

            [0, 1].forEach((e) => {
                const classLink = school.links[e];
                expect(classLink.name).toEqual(`Class ${e + 1}`);
                expect(classLink.key).toEqual(`Class ${e + 1}`);
            });
        });

        test("it should render 1 school and group by year level for more than 6 classes", () => {
            const mockSchoolWith7Classes = generateMock([1], [1, 2, 3, 4, 5, 6, 7]);
            const result: INavLinkGroup[] = createClassesNavigation(mockSchoolWith7Classes);

            expect(result).toHaveLength(1);
            const school = result[0];

            // the school name should not appear when there is only 1 school
            expect(school.name).toBeUndefined();
            expect(school.links).toBeDefined();
            expect(school.links).toHaveLength(1);

            const yearLevel = school.links[0];
            expect(yearLevel.name).toEqual("Year 1");
            expect(yearLevel.url).toEqual("");
            expect(yearLevel.key).toBeUndefined();
            expect(yearLevel.links).toBeDefined();
            expect(yearLevel.links).toHaveLength(7);

            [0, 1, 2, 3, 4, 5, 6].forEach((e) => {
                const classLink = yearLevel.links?.[e];
                expect(classLink).toBeDefined();
                if (classLink) {
                    expect(classLink.name).toEqual(`Class ${e + 1}`);
                    expect(classLink.key).toEqual(`Class ${e + 1}`);
                }
            });
        });
    });

    describe("Two schools classes to nav group", () => {
        test("it should not render 2 schools with no classes", () => {
            const mock2SchoolsWithNoClasses = generateMock([1, 2], []);
            const result = createClassesNavigation(mock2SchoolsWithNoClasses);
            expect(result).toEqual([]);
        });

        test("it should render 2 schools with classes", () => {
            const mock2SchoolsWith2Classes = generateMock([1, 2], [1, 2]);
            const result: INavLinkGroup[] = createClassesNavigation(mock2SchoolsWith2Classes);

            expect(result).toHaveLength(2);

            [0, 1].forEach((schoolId) => {
                const school = result[schoolId];

                expect(school.name).toBeDefined();
                expect(school.name).toEqual(`School ${schoolId + 1}`);
                expect(school.links).toBeDefined();
                expect(school.links).toHaveLength(2);

                [0, 1].forEach((e) => {
                    const classLink = school.links[e];
                    expect(classLink.name).toEqual(`Class ${e + 1}`);
                    expect(classLink.key).toEqual(`Class ${e + 1}`);
                });
            });
        });

        test("it should render 2 schools and group by year level for more than 6 classes", () => {
            const mock2SchoolsWith7Classes = generateMock([1, 2], [1, 2, 3, 4, 5, 6, 7]);
            const result: INavLinkGroup[] = createClassesNavigation(mock2SchoolsWith7Classes);

            expect(result).toHaveLength(2);

            [0, 1].forEach((schoolId) => {
                const school = result[schoolId];

                expect(school.name).toBeDefined();
                expect(school.links).toBeDefined();
                expect(school.links).toHaveLength(1);

                const yearLevel = school.links[0];
                expect(yearLevel.name).toEqual("Year 1");
                expect(yearLevel.url).toEqual("");
                expect(yearLevel.key).toBeUndefined();
                expect(yearLevel.links).toBeDefined();
                expect(yearLevel.links).toHaveLength(7);

                [0, 1, 2, 3, 4, 5, 6].forEach((e) => {
                    const classLink = yearLevel.links?.[e];
                    expect(classLink).toBeDefined();
                    if (classLink) {
                        expect(classLink.name).toEqual(`Class ${e + 1}`);
                        expect(classLink.key).toEqual(`Class ${e + 1}`);
                    }
                });
            });
        });

        test("it should render classes without school name for 1 school with non empty classes", () => {
            let mock3SchoolsWithOnly1WithClasses = generateMock([1], [1, 2]);
            mock3SchoolsWithOnly1WithClasses = mock3SchoolsWithOnly1WithClasses.concat([
                { id: 2, name: "School 2", classes: [] },
                { id: 3, name: "School 3" },
            ]);
            const result: INavLinkGroup[] = createClassesNavigation(mock3SchoolsWithOnly1WithClasses);
            expect(result).toHaveLength(1);

            const school = result[0];
            expect(school.name).toBeUndefined();
            expect(school.links).toBeDefined();
            expect(school.links).toHaveLength(2);

            [0, 1].forEach((e) => {
                const classLink = school.links?.[e];
                expect(classLink).toBeDefined();
                if (classLink) {
                    expect(classLink.name).toEqual(`Class ${e + 1}`);
                    expect(classLink.key).toEqual(`Class ${e + 1}`);
                }
            });
        });
    });
});
