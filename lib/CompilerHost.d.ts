import * as ts from 'typescript';
import { ResolveModuleName, ResolveTypeReferenceDirective } from './resolution';
export declare class CompilerHost implements ts.WatchCompilerHostOfConfigFile<ts.EmitAndSemanticDiagnosticsBuilderProgram> {
    private typescript;
    private enableEmitFiles;
    private program?;
    getProgram(): ts.Program;
    getAllKnownFiles(): Set<string>;
    configFileName: string;
    optionsToExtend: ts.CompilerOptions;
    private directoryWatchers;
    private fileWatchers;
    private knownFiles;
    private gatheredDiagnostic;
    private afterCompile;
    private readonly tsHost;
    protected lastProcessing?: Promise<ts.Diagnostic[]>;
    private compilationStarted;
    resolveModuleNames: ((moduleNames: string[], containingFile: string, reusedNames?: string[] | undefined, redirectedReference?: ts.ResolvedProjectReference | undefined) => (ts.ResolvedModule | undefined)[]) | undefined;
    resolveTypeReferenceDirectives: ((typeReferenceDirectiveNames: string[], containingFile: string, redirectedReference?: ts.ResolvedProjectReference | undefined) => (ts.ResolvedTypeReferenceDirective | undefined)[]) | undefined;
    constructor(typescript: typeof ts, programConfigFile: string, compilerOptions: ts.CompilerOptions, checkSyntacticErrors: boolean, enableEmitFiles?: boolean, userResolveModuleName?: ResolveModuleName, userResolveTypeReferenceDirective?: ResolveTypeReferenceDirective);
    processChanges(): Promise<{
        results: ts.Diagnostic[];
        updatedFiles: string[];
        removedFiles: string[];
    }>;
    setTimeout(callback: (...args: any[]) => void, _ms: number, ...args: any[]): any;
    clearTimeout(timeoutId: any): void;
    onWatchStatusChange(_diagnostic: ts.Diagnostic, _newLine: string, _options: ts.CompilerOptions): void;
    watchDirectory(path: string, callback: ts.DirectoryWatcherCallback, recursive?: boolean): ts.FileWatcher;
    watchFile(path: string, callback: ts.FileWatcherCallback, _pollingInterval?: number): ts.FileWatcher;
    fileExists(path: string): boolean;
    readFile(path: string, encoding?: string): string | undefined;
    directoryExists(path: string): boolean;
    getDirectories(path: string): string[];
    readDirectory(path: string, extensions?: ReadonlyArray<string>, exclude?: ReadonlyArray<string>, include?: ReadonlyArray<string>, depth?: number): string[];
    createProgram: typeof ts.createEmitAndSemanticDiagnosticsBuilderProgram;
    getCurrentDirectory(): string;
    getDefaultLibFileName(options: ts.CompilerOptions): string;
    getEnvironmentVariable(name: string): string | undefined;
    getNewLine(): string;
    realpath(path: string): string;
    trace(s: string): void;
    useCaseSensitiveFileNames(): boolean;
    onUnRecoverableConfigFileDiagnostic(_diag: ts.Diagnostic): void;
    afterProgramCreate(program: ts.EmitAndSemanticDiagnosticsBuilderProgram): void;
    createDirectory(_path: string): void;
    writeFile(_path: string, _data: string, _writeByteOrderMark?: boolean): void;
    onCachedDirectoryStructureHostCreate?(_host: any): void;
}