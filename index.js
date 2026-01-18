const fs=require('fs');
const reporter = require('cucumber-html-reporter');
const path = require('path');
//Ensure reports directory exists
const reportsDir=path.join(__dirname,'test-reports');
if(!fs.existsSync(reportsDir)){
    fs.mkdirSync(reportsDir,{recursive:true});
}

const options = {
    theme: 'bootstrap',
    jsonFile: path.join(reportsDir,'cucumber-report.json'),
    output: path.join(reportsDir,'cucumber-report.html'),
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    failedsummaryreport: true,
    
};

reporter.generate(options);