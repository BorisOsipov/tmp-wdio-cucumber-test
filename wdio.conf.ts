import type { Options } from '@wdio/types'
import AllureReporter from '@wdio/allure-reporter';
export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        './features/**/*.feature'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec',['allure', {outputDir: 'allure-results', useCucumberStepReporter: true}]],
    cucumberOpts: {
        require: ['./features/step-definitions/steps.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    afterScenario: function (world, result, context) {
        AllureReporter.addEpic("foobar")
        AllureReporter.addFeature("foobar")
    }
}
