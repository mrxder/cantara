import { CantaraApplication } from '../util/types';
interface CantaraInitialConfig {
    /** Where the cantara package itself lives */
    packageRootDir: string;
    /** Path of Cantara project */
    projectDir?: string;
    currentCommand: {
        name: string;
        appname: string;
    };
}
declare type Dependencies = {
    [key: string]: string;
};
interface CantaraGlobalConfig {
    allApps: CantaraApplication[];
    allPackages: {
        aliases: {
            [key: string]: string;
        };
        /** Include all those paths into webpack configs */
        include: string[];
    };
    dependencies: {
        /** Current React and React DOM version */
        react: Dependencies;
        /** Dependencies needed for TS */
        typescript: Dependencies;
    };
    /** Paths used internally by Cantara */
    internalPaths: {
        static: string;
        /** Where the cantara package itself lives */
        root: string;
    };
    /** Current runtime configuration (e.g. the command the user executed, the location of it etc.) */
    runtime: {
        /** Working directory where user executed Cantara */
        projectDir: string;
        /** Information about current command */
        currentCommand: {
            name: string;
            app: CantaraApplication;
        };
    };
}
export default function getGlobalConfig(): CantaraGlobalConfig;
/** Config can only be set once */
export declare function configureCantara(config: CantaraInitialConfig): void;
export {};
