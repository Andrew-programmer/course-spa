const mockedState = {
    user: {
        isAuth: true,
        name: 'Test Name',
        role: 'admin',
    },
    courses: [
        {
            "title": "testTitle",
            "description": "description",
            "duration": 120,
            "authors": [
                "46dc1b1e-4b38-4373-b260-b00a477c5f51"
            ],
            "creationDate": "27/05/2022",
            "id": "adc6952f-e7e0-44a5-8a68-f69a2ec72de4"
        }
    ],
    authors: [
        {
            "name": "test_author",
            "id": "46dc1b1e-4b38-4373-b260-b00a477c5f51"
        }
    ],
};
export const mockedStore = {
    getState: () => mockedState,
    subscribe: jest.fn(),
    dispatch: jest.fn(),
};