import { ISchoolWithClasses } from "../types";

export const generateMock = (schools: number[], classes: number[]): ISchoolWithClasses[] =>
    schools.map((s) => ({
        id: s,
        name: `School ${s}`,
        classes: classes.map((c) => ({
            id: c,
            name: `Class ${c}`,
            yearLevel: 1,
            init: () => undefined,
            toJSON: () => undefined,
        })),
    }));
