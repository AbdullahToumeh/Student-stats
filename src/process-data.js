
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
        passed: { number: undefined ,satisfaction: undefined },
        failed: { number: undefined ,satisfaction: undefined }
    };
    projects.project2 = {
        passed: { number: undefined ,satisfaction: undefined },
        failed: { number: undefined ,satisfaction: undefined }
    };
    projects.project3 = {
        passed: { number: undefined ,satisfaction: undefined },
        failed: { number: undefined ,satisfaction: undefined }
    };
    projects.project4 = {
        passed: { number: undefined ,satisfaction: undefined },
        failed: { number: undefined ,satisfaction: undefined }
    };

    const projectValues = projectNum => {
        let project = projects[projectNum];

        for (i = 0; i < data.length ; i++) {
            if (data[i][projectNum] === 'pass'){
                if (project.passed.number === undefined) {
                    project.passed.number = 1;
                }
                if(project.passed.satisfaction === undefined) {
                    project.passed.satisfaction = data[i].satisfaction;
                } else {
                    satisfactionPassed = project.passed.satisfaction;
                    project.passed.number += 1;                     
                    project.passed.satisfaction = (satisfactionPassed + data[i].satisfaction) / 2;    
                }
            } else {
            if (data[i][projectNum] === 'fail') {
                if (project.failed.number === undefined) {
                    project.failed.number = 1;
                }
                if (project.failed.satisfaction === undefined) {
                    project.failed.satisfaction = data[i].satisfaction;
                } else {
                    satisfactionFailed = project.failed.satisfaction;
                    project.failed.number += 1;
                    project.failed.satisfaction = (satisfactionFailed + data[i].satisfaction) / 2;

                }
            }
            }
        }
    }
    
    projectValues("project1");
    projectValues("project2");
    projectValues("project3");
    projectValues("project4");

    // console.log(projects)
    return {demographics , experience, projects}

}