import { ISchoolWithClasses } from "./types";

export const mockSchoolsWithClasses: ISchoolWithClasses[] = [
    {
        id: 1,
        name: "PR Test - Primary",
        imageUrl: "",
        classes: [
            {
                id: 1,
                name: "PRT_3B Home Group",
                yearLevel: 3,
                schoolId: 1,
                externalId: "21_900001",
            },
            {
                id: 2,
                name: "PRT_3BHPEM Health and Physical Education",
                yearLevel: 3,
                schoolId: 1,
                externalId: "21_900002",
            },
            {
                id: 3,
                name: "PRT_3BJPN Japanese",
                yearLevel: 3,
                schoolId: 1,
                externalId: "21_900003",
            },
            {
                id: 4,
                name: "PRT_3BMUS Music",
                yearLevel: 3,
                schoolId: 1,
                externalId: "21_900004",
            },
            {
                id: 5,
                name: "PRT_10ADMAT1 Advanced Mathematics",
                yearLevel: 10,
                schoolId: 2,
                externalId: "21_901001",
            },
            {
                id: 6,
                name: "PRT_10CHI Chinese",
                yearLevel: 10,
                schoolId: 2,
                externalId: "21_901002",
            },
            {
                id: 7,
                name: "PRT_10ENG5 English",
                yearLevel: 10,
                schoolId: 2,
                externalId: "21_901003",
            },
        ],
    },
    {
        id: 2,
        name: "PR Test - Secondary",
        imageUrl: "",
        classes: [
            {
                id: 8,
                name: "PRT_10ADMAT1 Advanced Mathematics",
                yearLevel: 10,
                schoolId: 2,
                externalId: "21_901001",
            },
            {
                id: 9,
                name: "PRT_10CHI Chinese",
                yearLevel: 10,
                schoolId: 2,
                externalId: "21_901002",
            },
            {
                id: 10,
                name: "PRT_10ENG5 English",
                yearLevel: 10,
                schoolId: 2,
                externalId: "21_901003",
            },
        ],
    },
    {
        id: 3,
        name: "PR Test - Prep to 12",
        imageUrl: "",
        classes: [],
    },
];
