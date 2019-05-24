import { PlatformWrapper } from '../platform-wrapper'

export interface Platform {
    setWrapper(wrapper: PlatformWrapper): void
    gameLoaded(): void
    gameStarted(): void
    gameEnded(fail: boolean, score?: number, level?: number | string): void
    gamePaused(): void
    gameResumed(): void
    scoreUpdate(): void
}
