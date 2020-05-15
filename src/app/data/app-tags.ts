function mockService(): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                appTags
            );
        }, Math.random() < 0.3 ? 500 + 2000 * Math.random() : 200 * Math.random());
    });
}

export const appTags = [
    'general arangements',
    'protocol', // file naming , loi, air, define standrds,
    'critical',
    'headquaters',
    'supply chain',
    'rfi',
    'specific',
    'operation',
    'maintenance',
    'fault finding',
]