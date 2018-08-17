// const data = require("../src/data.json")
const processData = require("../src/process-data")
describe("Process Data", () => {
    let processedData;
    let mockData = [
        {
        "name": "Miss Jermain Waters",
        "age": 31,
        "yearsExperience": 3,
        "satisfaction": 2,
        "project1": "pass",
        "project2": "fail",
        "project3": "fail",
        "project4": "pass"
        },
        {
        "name": "Juliana Runte",
        "age": 42,
        "yearsExperience": 3,
        "satisfaction": 2,
        "project1": "fail",
        "project2": "fail",
        "project3": "fail",
        "project4": "pass"
        },
        {
        "name": "Emmalee Daugherty",
        "age": 25,
        "yearsExperience": 2,
        "satisfaction": 4,
        "project1": "fail",
        "project2": "pass",
        "project3": "pass",
        "project4": "fail"
        },
    ]

    beforeEach(() => {
        processedData = processData(mockData)
    })


    describe('Shape of processed data', () => {
        it('Should generate an object with 3 keys', () => {
            expect(Object.keys(processedData)).toEqual([
                'demographics',
                'experience',
                'projects'
            ])
        })

        describe("Projects", () => {
            it('should create an object for each project', () => {
                expect(Object.keys(processedData.projects)).toEqual([
                    'project1',
                    'project2',
                    'project3',
                    'project4'
                ])
            })
            it("should calculate the average satisfaction for passing students in project 1", () => {
                expect(processedData.projects.project1.passed.satisfaction).toEqual(2)
            })
            it("should calculate the average satisfaction for failed students in project 1", () => {
                expect(processedData.projects.project1.failed.satisfaction).toEqual(3)
            })
            it("should calculate the average satisfaction for failed students in project 2", () => {
                expect(processedData.projects.project2.failed.satisfaction).toEqual(2)
            })
        })
        describe("Experience", () => {
            it('should return avarage satisfaction for all years of experience present in the data', () => {
                expect(processedData.experience[2].satisfaction).toEqual(4)
            })
        })
        describe("Demographics", () => {
            it('should return avarage satisfaction for the cohort', () => {
                expect(processedData.demographics.satisfaction).toEqual(3)
            })
            it('should return avarage age  for the cohort', () => {
                expect(processedData.demographics.age).toEqual(33)
            })
        })
    })
})