import EventEmitter from 'eventemitter3'

export { Platform } from './Platforms/platform'
export { Gawkbox } from './Platforms/gawkbox'

export class PlatformWrapper extends EventEmitter {
    private platform: any = null

    /**
     * Here we set an adprovider, any can be given as long as it implements the IProvider interface
     *
     * @param platform
     */
    public setPlatform(platform: any): void {
        if (platform) {
            this.platform = platform
            this.platform.setWrapper(this)
        }
    }

    public gameLoaded(...args: any[]): void {
        if (null === this.platform) {
            //Silently return for when no platform is set
            return
        }

        this.platform.gameLoaded.apply(this.platform, args)
    }

    public gameStarted(...args: any[]): void {
        if (null === this.platform) {
            //Silently return for when no platform is set
            return
        }

        this.platform.gameStarted.apply(this.platform, args)
    }

    public getGameSettings(...args: any[]): void {
        if (null === this.platform) {
            //Silently return for when no platform is set
            return
        }

        this.platform.getGameSettings.apply(this.platform, args)
    }

    public gameEnded(fail: boolean, score?: number, level?: number | string, ...args: any[]): void {
        if (null === this.platform) {
            throw new Error(
                'Can not request an ad without an provider, please attach an ad provider!'
            )
        }

        this.platform.gameEnded.apply(this.platform, args)

        if (score) {
            this.sendScore(score)
        }
    }

    public gamePaused(...args: any[]): void {
        if (null === this.platform) {
            //Silently return for when no platform is set
            return
        }

        this.platform.gamePaused.apply(this.platform, args)
    }

    public gameResumed(...args: any[]): void {
        if (null === this.platform) {
            //Silently return for when no platform is set
            return
        }

        this.platform.gameResumed.apply(this.platform, args)
    }

    public sendScore(score: number): void {
        if (null === this.platform) {
            //Silently return for when no platform is set
            return
        }

        this.platform.sendScore.apply(this.platform, score)
    }
}

export const platform: PlatformWrapper = new PlatformWrapper()
