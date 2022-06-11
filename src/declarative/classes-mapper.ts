import { groupBy } from "../helpers/classes.helper";
import { ISchoolWithClasses, INavLinkGroup, IClass, INavLink } from "../types";

const yearLevelGroupingThreshold = 6;

export const createClassesNavigation = (schools: ISchoolWithClasses[]): INavLinkGroup[] => {
    if (schools.length === 1) return onlySchool(schools[0]);

    return multipleSchools(schools);
};

const onlySchool = (school: ISchoolWithClasses): INavLinkGroup[] => {
    if (school.classes.length === 0) return [];

    return [
        {
            links: generateLinks(school.classes),
        },
    ];
};

const multipleSchools = (schools: ISchoolWithClasses[]): INavLinkGroup[] => {
    const transformedSchools: INavLinkGroup[] = schools
        .map(({ classes }, index) => {
            // don't display school which has no classes
            if (!classes || classes.length === 0) return;

            return {
                name: `School ${index + 1}`,
                links: generateLinks(classes),
            };
        })
        .filter(Boolean);

    // don't show school name for only one school with classes
    if (transformedSchools.length === 1) return singleSchoolWithClasses(transformedSchools);

    return transformedSchools;
};

const singleSchoolWithClasses = (schools: INavLinkGroup[]) => {
    const [school] = schools;
    const { links } = school;
    return [{ links }];
};

const generateLinks = (classes: IClass[]): INavLink[] => {
    return classes.length > yearLevelGroupingThreshold ? yearLevelLinks(classes) : classLinks(classes);
};

const yearLevelLinks = (schoolClasses: IClass[]): INavLink[] => {
    const classesGroupedByYearLevel = groupBy(schoolClasses, (c) => c.yearLevel);

    return Object.entries(classesGroupedByYearLevel).map(([yearLevel, classes]) => ({
        name: `Year ${yearLevel}`,
        url: "",
        links: classLinks(classes),
    }));
};

const classLinks = (classes: IClass[]): INavLink[] => {
    return classes.map((c, index) => ({
        name: `Class ${index + 1}`,
        url: "",
        key: `Class ${index + 1}`,
    }));
};
