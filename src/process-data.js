
module.exports = data => {
    // DEMOGRAPHICS
    let demographics = {};
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let ageArray = [];
    let satisfactionArray = [];

    for ( let i = 0; i < data.length; i++) {
        let age = data[i].age;
        let satisfaction = data[i].satisfaction;
        ageArray.push(age);
        satisfactionArray.push(satisfaction);       
    }

    let satisfactionAvg = satisfactionArray.reduce(reducer) / satisfactionArray.length;
    let ageAvg = ageArray.reduce(reducer) / ageArray.length;

    demographics.age = Math.round(ageAvg);
    demographics.satisfaction = Math.round(satisfactionAvg);

    // EXPERIENCE
    let experience = {};

    for (i = 0; i < data.length; i++) {
        yearsOfExp = data[i].yearsExperience;
        if (experience[yearsOfExp] === undefined) {
          experience[yearsOfExp] = { satisfaction: data[i].satisfaction };
        } else {
          current = experience[yearsOfExp].satisfaction;
          experience[yearsOfExp] = {
            satisfaction: (current + data[i].satisfaction) / 2
          };
        }
    }

    // PROJECTS
    let projects = {};

    projects.project1 = {
        passed: {},
        failed: {}
    };
    projects.project2 = {
        passed: {},
        failed: {}
    };
    projects.project3 = {
        passed: {},
        failed: {}
    };
    projects.project4 = {
        passed: {},
        failed: {}
    };

    const projectValues = projectInput => {
        let project = projects[projectInput];

        let passedNumber = project.passed.number;
        let passedSatisfaction = project.passed.satisfaction;

        let failedNumber = project.failed.number;
        let failedSatisfactoin = project.failed.satisfaction;

        for (i = 0; i < data.length ; i++) {
            if (data[i][projectInput] === 'pass'){}
        }

    }
    projectValues("project1");

    // console.log(projects)




    // return {demographics , experience, projects}






    



}