export interface IClass {
    id?: number;
    name?: string;
    yearLevel?: number;
    schoolId?: number;
    externalId?: string;
}

export interface ISchoolWithClasses {
    id?: number;
    name?: string;
    imageUrl?: string;
    classes?: IClass[] | undefined;
}

export interface INavLink {
    name: string;
    key?: string;
    url: string;
    links?: INavLink[];
}

export interface INavLinkGroup {
    name?: string;
    links: INavLink[];
}
