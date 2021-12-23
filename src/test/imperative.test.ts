import { INavLinkGroup } from "../types";
import { ClassesMapper } from "../imperative/ClassesMapper";
import { generateMock } from "./helpers";

describe("IMPERATIVE > Map school classes to nav group", () => {
    describe("One school classes to nav group", () => {
        test("it should not render 1 school without classes", () => {
            const mockSchoolWithNoClasses = generateMock([1], []);
            const classesMapper = new ClassesMapper(mockSchoolWithNoClasses);
            const result = classesMapper.createClassesNavigation();
            expect(result).toEqual([]);
        });

        test("it should render 1 school with classes", () => {
            const mockSchoolWith2Classes = generateMock([1], [1, 2]);
            const classesMapper = new ClassesMapper(mockSchoolWith2Classes);
            const result: INavLinkGroup[] = classesMapper.createClassesNavigation();

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
            const classesMapper = new ClassesMapper(mockSchoolWith7Classes);
            const result: INavLinkGroup[] = classesMapper.createClassesNavigation();

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
            const classesMapper = new ClassesMapper(mock2SchoolsWithNoClasses);
            const result = classesMapper.createClassesNavigation();
            expect(result).toEqual([]);
        });

        test("it should render 2 schools with classes", () => {
            const mock2SchoolsWith2Classes = generateMock([1, 2], [1, 2]);
            const classesMapper = new ClassesMapper(mock2SchoolsWith2Classes);
            const result: INavLinkGroup[] = classesMapper.createClassesNavigation();

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
            const classesMapper = new ClassesMapper(mock2SchoolsWith7Classes);
            const result: INavLinkGroup[] = classesMapper.createClassesNavigation();

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
            const classesMapper = new ClassesMapper(mock3SchoolsWithOnly1WithClasses);
            const result: INavLinkGroup[] = classesMapper.createClassesNavigation();
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
