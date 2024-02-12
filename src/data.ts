export enum ReportType {
    EXPENSE = "expense",
    INCOME = "income"
}

export interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        createdAt: Date;
        updatedAt: Date;
        typeOfReport: ReportType;
    }[];
}

export const data: Data = {
    report: [
        {
            id: '1',
            source: 'Source1',
            amount: 100,
            createdAt: new Date(),
            updatedAt: new Date(),
            typeOfReport: ReportType.EXPENSE
        },
        {
            id: '2',
            source: 'Source2',
            amount: 200,
            createdAt: new Date(),
            updatedAt: new Date(),
            typeOfReport: ReportType.INCOME
        },
        {
            id: '3',
            source: 'Source3',
            amount: 300,
            createdAt: new Date(),
            updatedAt: new Date(),
            typeOfReport: ReportType.EXPENSE
        },
        {
            id: '4',
            source: 'Source4',
            amount: 400,
            createdAt: new Date(),
            updatedAt: new Date(),
            typeOfReport: ReportType.INCOME
        },
        {
            id: '5',
            source: 'Source5',
            amount: 500,
            createdAt: new Date(),
            updatedAt: new Date(),
            typeOfReport: ReportType.EXPENSE
        }
    ]
};
