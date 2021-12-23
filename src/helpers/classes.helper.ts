/**
Groups a list of any object by the specified object attribute defined by the 'getKey' function

Example:

List of classes:
[
    {id: 1, name: 'class 1', schoolId: 1},
    {id: 2, name: 'class 2', schoolId: 1},
    {id: 3, name: 'class 3', schoolId: 2},
    {id: 4, name: 'class 4', schoolId: 2}
]

Group By:
groupBy(classes, (el) => el.schoolId)

Result:
{
  '1': [
    { id: 1, name: 'class 1', schoolId: 1 },
    { id: 2, name: 'class 2', schoolId: 1 }
  ],
  '2': [
    { id: 3, name: 'class 3', schoolId: 2 },
    { id: 4, name: 'class 4', schoolId: 2 }
  ]
} 
*/
export const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
    list.reduce((previous, currentItem) => {
        const group = getKey(currentItem);
        if (!previous[group]) previous[group] = [];
        previous[group].push(currentItem);
        return previous;
    }, {} as Record<K, T[]>);
