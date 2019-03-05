import { Platform } from './platform';
import { PlatformWrapper } from '../platform-wrapper';
export declare class Gawkbox implements Platform {
    platformWrapper: PlatformWrapper;
    setWrapper(wrapper: PlatformWrapper): void;
    gameLoaded(): void;
    gameStarted(): void;
    gameEnded(fail: boolean, score: number, level?: number | string): void;
    gamePaused(): void;
    gameResumed(): void;
}
