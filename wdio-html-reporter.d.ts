import WDIOReporter from "@wdio/reporter" ;

// Merge namespace with global NodeJS

declare global {
    export namespace NodeJS {
        interface Global {
            reportAggregator: ReportAggregator;
        }
    }
}
export interface ReportOptions {
    stdout?: boolean;
    debug?: boolean;
    outputDir: string ;
    filename: string ;
    reportTitle: string ;
    browserName?: string | undefined;
    showInBrowser?: boolean;
    collapseTests: boolean;
    useOnAfterCommandForScreenshot?: boolean;
    templateFilename?: string ;
    templateFuncs?: any ;
    LOG?: any;
}

export interface ReportData {
    info: any,
    specs:any,
    metrics: any,
    suites: any,
    title: string,
    browserName: string
}
export declare class HtmlReporter extends WDIOReporter {
    constructor(opts:ReportOptions);
}

export declare class ReportAggregator {
    constructor(opts:ReportOptions) ;
    clean() : void;
    createReport(): any;
}

