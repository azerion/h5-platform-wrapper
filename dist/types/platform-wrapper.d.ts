import EventEmitter from 'eventemitter3';
export { Platform } from './Platforms/platform';
export { Gawkbox } from './Platforms/gawkbox';
export declare class PlatformWrapper extends EventEmitter {
    private platform;
    /**
     * Here we set an adprovider, any can be given as long as it implements the IProvider interface
     *
     * @param platform
     */
    setPlatform(platform: any): void;
    gameLoaded(...args: any[]): void;
    gameStarted(...args: any[]): void;
    getGameSettings(...args: any[]): void;
    gameEnded(fail: boolean, score?: number, level?: number | string, ...args: any[]): void;
    gamePaused(...args: any[]): void;
    gameResumed(...args: any[]): void;
    sendScore(score: number): void;
}
export declare const platform: PlatformWrapper;
