import PlatformBridgeBase from './PlatformBridgeBase'
import { addJavaScript, waitFor } from '../common/utils'
import {
    PLATFORM_ID,
    ACTION_NAME,
} from '../constants'

const getSdkUrl = (gameId) => `//vkplay.ru/app/${gameId}/static/mailru.core.js`

class VkPlayPlatformBridge extends PlatformBridgeBase {
    // platform
    get platformId() {
        return PLATFORM_ID.VK_PLAY
    }
    
    // player
    get isPlayerAuthorizationSupported() {
        return true
    }

    get #callbacks() {
        return {
            appid: this.#gameId,
            userProfileCallback: (profile) => this.#setPlayer(profile),
            getLoginStatusCallback: (status) => this.#setLoginStatus(status),
            registerUserCallback: (registerInfo) => this.#setRegistrationInfo(registerInfo),
        }
    }

    #loginStatus = null
    #registrationInfo = null
    #gameId = null;

    
    #setPlayer(profileData) {
        if (profileData.status === 'error') {
            this._rejectPromiseDecorator(ACTION_NAME.GET_PROFILE, player.errmsg)
            return
        }

        this._resolvePromiseDecorator(ACTION_NAME.GET_PROFILE, {
            _playerId: player.uid,
            _playerName: player.nick,
            _playerPhotos: [player.avatar],
        })
    }
    
    #setRegistrationInfo(status) {
        this.#registrationInfo = status
    }
    
    #setLoginStatus(status) {
        this.#loginStatus = status
    }

    // platform

    initialize() {
        if (this._isInitialized) {
            return Promise.resolve()
        }

        let promiseDecorator = this._getPromiseDecorator(ACTION_NAME.INITIALIZE)
        if (!promiseDecorator) {
            promiseDecorator = this._createPromiseDecorator(ACTION_NAME.INITIALIZE)
            
            this.#gameId = this._options.gameId

            addJavaScript(getSdkUrl(this.#gameId)).then(() => {
                waitFor('iframeApi').then(() => {
                    if(!window.iframeApi) {
                        const error = 'Cannot find iframeApi function'
                        this._rejectPromiseDecorator(ACTION_NAME.INITIALIZE, error)
                    }
                    window.iframeApi(this.#callbacks)
                        .then((sdk) => {
                            this._platformSdk = sdk
                            const getPlayerPromise = this.#getPlayer()
                            const getLoginStatusPromise = this.#getLoginStatus()
                            
                            Promise
                            .all([getLoginStatusPromise, getPlayerPromise])
                            .finally(() => {
                               this._isInitialized = true
                               this._resolvePromiseDecorator(ACTION_NAME.INITIALIZE)
                            })
                        })
                })
            })
        }

        return promiseDecorator.promise
    }

    // player
    
    authorizePlayer() {
        if (this._isPlayerAuthorized) {
            return Promise.resolve()
        }
        
        if(!this.#registrationInfo) {
            this._platformSdk.registerUser()
            return this.authorizePlayer()
        }

        let promiseDecorator = this._getPromiseDecorator(ACTION_NAME.AUTHORIZE_PLAYER)
        if (!promiseDecorator) {
            promiseDecorator = this._createPromiseDecorator(ACTION_NAME.AUTHORIZE_PLAYER)

            this.#registrationInfo.then((registartionInfo) => {
                if (registartionInfo.status === 'error') {
                    this._rejectPromiseDecorator(ACTION_NAME.AUTHORIZE_PLAYER, registartionInfo.errmsg)
                } else {
                    this._resolvePromiseDecorator(ACTION_NAME.AUTHORIZE_PLAYER, registartionInfo)
                }
            })
        }

        return promiseDecorator.promise
    }

    #getPlayer() {
        let promiseDecorator = this._getPromiseDecorator(ACTION_NAME.GET_PROFILE)
        if (!promiseDecorator) {
            promiseDecorator = this._createPromiseDecorator(ACTION_NAME.GET_PROFILE)
            this._platformSdk.userProfile()
        }
        return promiseDecorator
    }
    
    #getLoginStatus() {
        if (!this.#loginStatus) {
            this._platformSdk.getLoginStatus­­­()
            return this.#getLoginStatus()
        }

        this.#loginStatus
            .then((loginInfo) => {
                if (loginInfo.status === 'error') {
                    return Promise.reject(loginInfo.errmsg)
                }
                this._isPlayerAuthorized = loginInfo.loginStatus === 2 || loginInfo.loginStatus === 3
            })
    }
}

export default VkPlayPlatformBridge
