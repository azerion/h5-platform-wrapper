import { Platform } from './platform'
import { PlatformWrapper } from '../platform-wrapper'

export class Gawkbox implements Platform {
    public platformWrapper!: PlatformWrapper

    public setWrapper(wrapper: PlatformWrapper): void {
        this.platformWrapper = wrapper
    }

    public gameLoaded(): void {
        return
    }

    public gameStarted(): void {
        return
    }

    public gameEnded(fail: boolean, score: number, level?: number | string): void {
        window.postMessage(
            JSON.stringify({
                event: 'stop',
                score: score
            }),
            '*'
        )
    }

    public gamePaused(): void {
        return
    }

    public gameResumed(): void {
        return
    }
}
