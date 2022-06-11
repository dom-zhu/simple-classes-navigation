import { groupBy } from "../helpers/classes.helper";
import { ISchoolWithClasses, INavLinkGroup, IClass, INavLink } from "../types";

export class ClassesMapper {
    private schoolsWithClasses: ISchoolWithClasses[];

    private readonly yearLevelGroupingThreshold = 6;

    constructor(schoolsWithClasses: ISchoolWithClasses[]) {
        this.schoolsWithClasses = schoolsWithClasses;
    }

    public createClassesNavigation(): INavLinkGroup[] {
        if (this.schoolsWithClasses.length === 1) return this.onlySchool();

        return this.multipleSchools();
    }

    private onlySchool = (): INavLinkGroup[] => {
        const [school] = this.schoolsWithClasses;
        if (school.classes.length === 0) return [];

        return [
            {
                links: this.generateLinks(school.classes),
            },
        ];
    };

    private multipleSchools = () => {
        let schools: INavLinkGroup[] = [];

        for (const [index, { classes }] of this.schoolsWithClasses.entries()) {
            // don't display school which has no classes
            if (!classes || classes.length === 0) continue;

            schools = schools.concat({
                name: `School ${index + 1}`,
                links: this.generateLinks(classes),
            });
        }

        // don't show school name for only one school with classes
        if (schools.length === 1) return this.singleSchoolWithClasses(schools);

        return schools;
    };

    private singleSchoolWithClasses = (schools: INavLinkGroup[]) => {
        const [school] = schools;
        const { links } = school;
        return [{ links }];
    };

    private generateLinks = (classes: IClass[]): INavLink[] => {
        return classes.length > this.yearLevelGroupingThreshold
            ? this.yearLevelLinks(classes)
            : this.classLinks(classes);
    };

    private yearLevelLinks = (schoolClasses: IClass[]): INavLink[] => {
        const classesGroupedByYearLevel = groupBy(schoolClasses, (c) => c.yearLevel);

        let yearLevelLinks: INavLink[] = [];

        for (const [yearLevel, classes] of Object.entries(classesGroupedByYearLevel)) {
            yearLevelLinks = yearLevelLinks.concat({
                name: `Year ${yearLevel}`,
                url: "",
                links: this.classLinks(classes),
            });
        }

        return yearLevelLinks;
    };

    private classLinks = (classes: IClass[]): INavLink[] => {
        let classLinks: INavLink[] = [];

        for (const [index] of classes.entries()) {
            classLinks = classLinks.concat({
                name: `Class ${index + 1}`,
                url: "",
                key: `Class ${index + 1}`,
            });
        }

        return classLinks;
    };
}
