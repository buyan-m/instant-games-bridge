(() => {
    var t = {
            522: (t, e, r) => {
                'use strict'
                r.d(e, { Z: () => Tn })
                var n = {
                        VK: 'vk',
                        YANDEX: 'yandex',
                        CRAZY_GAMES: 'crazy_games',
                        ABSOLUTE_GAMES: 'absolute_games',
                        GAME_DISTRIBUTION: 'game_distribution',
                        MOCK: 'mock'
                    },
                    o = {
                        PLATFORM: 'platform',
                        PLAYER: 'player',
                        GAME: 'game',
                        STORAGE: 'storage',
                        ADVERTISEMENT: 'advertisement',
                        SOCIAL: 'social',
                        DEVICE: 'device',
                        LEADERBOARD: 'leaderboard',
                        PAYMENTS: 'payments'
                    },
                    i = {
                        INTERSTITIAL_STATE_CHANGED: 'interstitial_state_changed',
                        REWARDED_STATE_CHANGED: 'rewarded_state_changed',
                        BANNER_STATE_CHANGED: 'banner_state_changed',
                        VISIBILITY_STATE_CHANGED: 'visibility_state_changed'
                    },
                    a = {
                        VISIBLE: 'visible',
                        HIDDEN: 'hidden'
                    },
                    u = {
                        LOADING: 'loading',
                        OPENED: 'opened',
                        CLOSED: 'closed',
                        FAILED: 'failed'
                    },
                    s = {
                        LOADING: 'loading',
                        OPENED: 'opened',
                        CLOSED: 'closed',
                        FAILED: 'failed',
                        REWARDED: 'rewarded'
                    },
                    c = {
                        LOADING: 'loading',
                        SHOWN: 'shown',
                        HIDDEN: 'hidden',
                        FAILED: 'failed'
                    },
                    l = {
                        LOCAL_STORAGE: 'local_storage',
                        PLATFORM_INTERNAL: 'platform_internal'
                    },
                    f = {
                        DESKTOP: 'desktop',
                        MOBILE: 'mobile',
                        TABLET: 'tablet',
                        TV: 'tv'
                    },
                    p = {
                        GAME_READY: 'game_ready',
                        IN_GAME_LOADING_STARTED: 'in_game_loading_started',
                        IN_GAME_LOADING_STOPPED: 'in_game_loading_stopped',
                        GAMEPLAY_STARTED: 'gameplay_started',
                        GAMEPLAY_STOPPED: 'gameplay_stopped',
                        PLAYER_GOT_ACHIEVEMENT: 'player_got_achievement'
                    },
                    y = 'initialize',
                    d = 'authorize_player',
                    h = 'add_to_home_screen',
                    m = 'rate',
                    v = 'set_leaderboard_score',
                    b = 'get_leaderboard_score',
                    g = 'get_leaderboard_entries',
                    _ = 'get_purchases',
                    S = 'get_catalog',
                    w = 'purchase',
                    P = 'consume_purchase',
                    E = { message: 'Before using the SDK you must initialize it' },
                    O = { message: 'Storage not supported' },
                    k = { message: 'GameDistribution Game ID is undefined' }

                function A(t) {
                    return A = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, A(t)
                }

                function D(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, T(n.key), n)
                    }
                }

                function T(t) {
                    var e = function (t, e) {
                        if ('object' != A(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != A(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == A(e) ? e : String(e)
                }

                function j(t, e, r) {
                    !function (t, e) {
                        if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                    }(t, e), e.set(t, r)
                }

                function I(t, e, r) {
                    return function (t, e, r) {
                        if (e.set) {
                            e.set.call(t, r)
                        } else {
                            if (!e.writable) throw new TypeError('attempted to set read only private field')
                            e.value = r
                        }
                    }(t, L(t, e, 'set'), r), r
                }

                function R(t, e) {
                    return function (t, e) {
                        return e.get ? e.get.call(t) : e.value
                    }(t, L(t, e, 'get'))
                }

                function L(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to ' + r + ' private field on non-instance')
                    return e.get(t)
                }

                var B = new WeakMap,
                    N = new WeakMap,
                    C = new WeakMap
                const M = function () {
                    function t() {
                        var e = this
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, t), j(this, B, {
                            writable: !0,
                            value: void 0
                        }), j(this, N, {
                            writable: !0,
                            value: void 0
                        }), j(this, C, {
                            writable: !0,
                            value: void 0
                        }), I(this, B, new Promise((function (t, r) {
                            I(e, N, t), I(e, C, r)
                        })))
                    }

                    var e,
                        r
                    return e = t, (r = [{
                        key: 'promise',
                        get: function () {
                            return R(this, B)
                        }
                    }, {
                        key: 'resolve',
                        value: function (t) {
                            R(this, N)
                                .call(this, t)
                        }
                    }, {
                        key: 'reject',
                        value: function (t) {
                            R(this, C)
                                .call(this, t)
                        }
                    }]) && D(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), t
                }()

                function G(t) {
                    return G = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, G(t)
                }

                function F(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, z(n.key), n)
                    }
                }

                function z(t) {
                    var e = function (t, e) {
                        if ('object' != G(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != G(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == G(e) ? e : String(e)
                }

                const W = function () {
                    function t(e) {
                        var r,
                            n,
                            o
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, t), r = this, o = void 0, (n = z(n = '_platformBridge')) in r ? Object.defineProperty(r, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[n] = o, this._platformBridge = e
                    }

                    var e,
                        r
                    return e = t, (r = [{
                        key: 'initialize',
                        value: function () {
                            return Promise.resolve()
                        }
                    }]) && F(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), t
                }()

                function x(t) {
                    return x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, x(t)
                }

                function H(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, V(n.key), n)
                    }
                }

                function V(t) {
                    var e = function (t, e) {
                        if ('object' != x(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != x(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == x(e) ? e : String(e)
                }

                function K(t, e) {
                    return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, K(t, e)
                }

                function Y(t) {
                    return Y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, Y(t)
                }

                const U = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && K(t, e)
                    }(a, t)
                    var e,
                        r,
                        n,
                        o,
                        i = (n = a, o = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = Y(n)
                            if (o) {
                                var r = Y(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === x(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return function (t) {
                                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                                    return t
                                }(t)
                            }(this, t)
                        })

                    function a() {
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, a), i.apply(this, arguments)
                    }

                    return e = a, (r = [{
                        key: 'id',
                        get: function () {
                            return this._platformBridge.platformId
                        }
                    }, {
                        key: 'sdk',
                        get: function () {
                            return this._platformBridge.platformSdk
                        }
                    }, {
                        key: 'language',
                        get: function () {
                            return this._platformBridge.platformLanguage
                        }
                    }, {
                        key: 'payload',
                        get: function () {
                            return this._platformBridge.platformPayload
                        }
                    }, {
                        key: 'tld',
                        get: function () {
                            return this._platformBridge.platformTld
                        }
                    }, {
                        key: 'sendMessage',
                        value: function (t) {
                            return this._platformBridge.sendMessage(t)
                        }
                    }]) && H(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), a
                }(W)

                function q(t) {
                    return q = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, q(t)
                }

                function J(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, Z(n.key), n)
                    }
                }

                function Z(t) {
                    var e = function (t, e) {
                        if ('object' != q(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != q(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == q(e) ? e : String(e)
                }

                function X(t, e) {
                    return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, X(t, e)
                }

                function Q(t) {
                    return Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, Q(t)
                }

                const $ = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && X(t, e)
                    }(a, t)
                    var e,
                        r,
                        n,
                        o,
                        i = (n = a, o = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = Q(n)
                            if (o) {
                                var r = Q(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === q(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return function (t) {
                                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                                    return t
                                }(t)
                            }(this, t)
                        })

                    function a() {
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, a), i.apply(this, arguments)
                    }

                    return e = a, (r = [{
                        key: 'isAuthorizationSupported',
                        get: function () {
                            return this._platformBridge.isPlayerAuthorizationSupported
                        }
                    }, {
                        key: 'isAuthorized',
                        get: function () {
                            return this._platformBridge.isPlayerAuthorized
                        }
                    }, {
                        key: 'id',
                        get: function () {
                            return this._platformBridge.playerId
                        }
                    }, {
                        key: 'name',
                        get: function () {
                            return this._platformBridge.playerName
                        }
                    }, {
                        key: 'photos',
                        get: function () {
                            return this._platformBridge.playerPhotos
                        }
                    }, {
                        key: 'authorize',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.authorize(e)
                            }
                            return this._platformBridge.authorizePlayer(t)
                        }
                    }]) && J(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), a
                }(W)
                var tt = r(258),
                    et = r.n(tt)

                function rt(t) {
                    return rt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, rt(t)
                }

                function nt(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, ot(n.key), n)
                    }
                }

                function ot(t) {
                    var e = function (t, e) {
                        if ('object' != rt(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != rt(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == rt(e) ? e : String(e)
                }

                function it(t, e) {
                    return it = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, it(t, e)
                }

                function at(t) {
                    return at = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, at(t)
                }

                var ut = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && it(t, e)
                    }(u, t)
                    var e,
                        r,
                        n,
                        o,
                        a = (n = u, o = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = at(n)
                            if (o) {
                                var r = at(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === rt(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return function (t) {
                                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                                    return t
                                }(t)
                            }(this, t)
                        })

                    function u(t) {
                        var e
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, u), (e = a.call(this, t))._platformBridge.on(i.VISIBILITY_STATE_CHANGED, (function (t) {
                            return e.emit(i.VISIBILITY_STATE_CHANGED, t)
                        })), e
                    }

                    return e = u, (r = [{
                        key: 'visibilityState',
                        get: function () {
                            return this._platformBridge.visibilityState
                        }
                    }]) && nt(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), u
                }(W)
                et()
                    .mixin(ut.prototype)
                const st = ut

                function ct(t) {
                    return ct = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, ct(t)
                }

                function lt(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, ft(n.key), n)
                    }
                }

                function ft(t) {
                    var e = function (t, e) {
                        if ('object' != ct(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != ct(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == ct(e) ? e : String(e)
                }

                function pt(t, e) {
                    return pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, pt(t, e)
                }

                function yt(t) {
                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                    return t
                }

                function dt(t) {
                    return dt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, dt(t)
                }

                function ht(t, e) {
                    var r = function (t, e, r) {
                        if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                        return e.get(t)
                    }(t, e)
                    return function (t, e) {
                        return e.get ? e.get.call(t) : e.value
                    }(t, r)
                }

                var mt = new WeakMap
                const vt = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && pt(t, e)
                    }(a, t)
                    var e,
                        r,
                        n,
                        o,
                        i = (n = a, o = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = dt(n)
                            if (o) {
                                var r = dt(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === ct(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return yt(t)
                            }(this, t)
                        })

                    function a() {
                        var t,
                            e,
                            r,
                            n
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, a)
                        for (var o = arguments.length, u = new Array(o), s = 0; s < o; s++) u[s] = arguments[s]
                        return e = yt(t = i.call.apply(i, [this].concat(u))), n = {
                            writable: !0,
                            value: []
                        }, function (t, e) {
                            if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                        }(e, r = mt), r.set(e, n), t
                    }

                    return e = a, (r = [{
                        key: 'defaultType',
                        get: function () {
                            return this._platformBridge.defaultStorageType
                        }
                    }, {
                        key: 'isSupported',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.isSupported(e)
                            }
                            return this._platformBridge.isStorageSupported(t)
                        }
                    }, {
                        key: 'isAvailable',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.isSupported(e)
                            }
                            return this._platformBridge.isStorageAvailable(t)
                        }
                    }, {
                        key: 'get',
                        value: function (t, e) {
                            var r = this
                            if (e) {
                                var n = e[this._platformBridge.platformId]
                                if (n) return this.get(t, n)
                            }
                            var o = e
                            o || (o = this.defaultType)
                            var i = ht(this, mt)[o]
                            return i && void 0 !== i[t] ? Promise.resolve(i[t]) : this._platformBridge.getDataFromStorage(t, o)
                                .then((function (e) {
                                    return r._addToCache(o, t, e), e
                                }))
                        }
                    }, {
                        key: 'set',
                        value: function (t, e, r) {
                            var n = this
                            if (r) {
                                var o = r[this._platformBridge.platformId]
                                if (o) return this.set(t, e, o)
                            }
                            var i = r
                            return i || (i = this.defaultType), this._platformBridge.setDataToStorage(t, e, i)
                                .then((function () {
                                    return n._addToCache(i, t, e)
                                }))
                        }
                    }, {
                        key: 'delete',
                        value: function (t, e) {
                            var r = this
                            if (e) {
                                var n = e[this._platformBridge.platformId]
                                if (n) return this.delete(t, n)
                            }
                            var o = e
                            return o || (o = this.defaultType), this._platformBridge.deleteDataFromStorage(t, o)
                                .then((function () {
                                    return r._deleteFromCache(o, t)
                                }))
                        }
                    }, {
                        key: '_addToCache',
                        value: function (t, e, r) {
                            if (ht(this, mt)[t] || (ht(this, mt)[t] = []), Array.isArray(e)) for (var n = 0; n < e.length; n++) ht(this, mt)[t][e[n]] = r[e[n]] else ht(this, mt)[t][e] = r
                        }
                    }, {
                        key: '_deleteFromCache',
                        value: function (t, e) {
                            if (ht(this, mt)[t]) if (Array.isArray(e)) for (var r = 0; r < e.length; r++) delete ht(this, mt)[t][e[r]] else delete ht(this, mt)[t][e]
                        }
                    }]) && lt(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), a
                }(W)

                function bt(t) {
                    return bt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, bt(t)
                }

                function gt(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, _t(n.key), n)
                    }
                }

                function _t(t) {
                    var e = function (t, e) {
                        if ('object' != bt(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != bt(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == bt(e) ? e : String(e)
                }

                function St(t, e) {
                    Pt(t, e), e.add(t)
                }

                function wt(t, e, r) {
                    Pt(t, e), e.set(t, r)
                }

                function Pt(t, e) {
                    if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                }

                function Et(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                    return r
                }

                function Ot(t, e, r) {
                    return function (t, e, r) {
                        if (e.set) {
                            e.set.call(t, r)
                        } else {
                            if (!e.writable) throw new TypeError('attempted to set read only private field')
                            e.value = r
                        }
                    }(t, At(t, e, 'set'), r), r
                }

                function kt(t, e) {
                    return function (t, e) {
                        return e.get ? e.get.call(t) : e.value
                    }(t, At(t, e, 'get'))
                }

                function At(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to ' + r + ' private field on non-instance')
                    return e.get(t)
                }

                var Dt = 'created',
                    Tt = 'completed',
                    jt = new WeakMap,
                    It = new WeakMap,
                    Rt = new WeakMap,
                    Lt = new WeakMap,
                    Bt = new WeakSet,
                    Nt = new WeakSet,
                    Ct = function () {
                        function t(e) {
                            !function (t, e) {
                                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                            }(this, t), St(this, Nt), St(this, Bt), wt(this, jt, {
                                writable: !0,
                                value: 0
                            }), wt(this, It, {
                                writable: !0,
                                value: 0
                            }), wt(this, Rt, {
                                writable: !0,
                                value: Dt
                            }), wt(this, Lt, {
                                writable: !0,
                                value: 0
                            }), Ot(this, jt, e)
                        }

                        var e,
                            r
                        return e = t, (r = [{
                            key: 'state',
                            get: function () {
                                return kt(this, Rt)
                            }
                        }, {
                            key: 'start',
                            value: function () {
                                var t = this
                                kt(this, Rt) !== Dt && kt(this, Rt) !== Tt || (Ot(this, It, kt(this, jt)), Et(this, Bt, Mt)
                                    .call(this, 'started'), Ot(this, Lt, setInterval((function () {
                                    Ot(t, It, kt(t, It) - 1), t.emit('time_left_changed', kt(t, It)), kt(t, It) <= 0 && (Et(t, Nt, Gt)
                                        .call(t), Et(t, Bt, Mt)
                                        .call(t, Tt))
                                }), 1e3)))
                            }
                        }, {
                            key: 'stop',
                            value: function () {
                                Et(this, Nt, Gt)
                                    .call(this), Et(this, Bt, Mt)
                                    .call(this, 'stopped')
                            }
                        }]) && gt(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), t
                    }()

                function Mt(t) {
                    Ot(this, Rt, t), this.emit('state_changed', kt(this, Rt))
                }

                function Gt() {
                    Ot(this, It, 0), clearInterval(kt(this, Lt))
                }

                et()
                    .mixin(Ct.prototype)
                const Ft = Ct

                function zt(t) {
                    return zt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, zt(t)
                }

                function Wt(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, xt(n.key), n)
                    }
                }

                function xt(t) {
                    var e = function (t, e) {
                        if ('object' != zt(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != zt(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == zt(e) ? e : String(e)
                }

                function Ht(t, e) {
                    return Ht = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, Ht(t, e)
                }

                function Vt(t) {
                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                    return t
                }

                function Kt(t) {
                    return Kt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, Kt(t)
                }

                function Yt(t, e) {
                    qt(t, e), e.add(t)
                }

                function Ut(t, e, r) {
                    qt(t, e), e.set(t, r)
                }

                function qt(t, e) {
                    if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                }

                function Jt(t, e, r) {
                    return function (t, e, r) {
                        if (e.set) {
                            e.set.call(t, r)
                        } else {
                            if (!e.writable) throw new TypeError('attempted to set read only private field')
                            e.value = r
                        }
                    }(t, Qt(t, e, 'set'), r), r
                }

                function Zt(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                    return r
                }

                function Xt(t, e) {
                    return function (t, e) {
                        return e.get ? e.get.call(t) : e.value
                    }(t, Qt(t, e, 'get'))
                }

                function Qt(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to ' + r + ' private field on non-instance')
                    return e.get(t)
                }

                var $t = new WeakMap,
                    te = new WeakMap,
                    ee = new WeakSet,
                    re = new WeakSet,
                    ne = function (t) {
                        !function (t, e) {
                            if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && Ht(t, e)
                        }(l, t)
                        var e,
                            r,
                            n,
                            o,
                            a = (n = l, o = function () {
                                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                                if (Reflect.construct.sham) return !1
                                if ('function' == typeof Proxy) return !0
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                    }))), !0
                                } catch (t) {
                                    return !1
                                }
                            }(), function () {
                                var t,
                                    e = Kt(n)
                                if (o) {
                                    var r = Kt(this).constructor
                                    t = Reflect.construct(e, arguments, r)
                                } else {
                                    t = e.apply(this, arguments)
                                }
                                return function (t, e) {
                                    if (e && ('object' === zt(e) || 'function' == typeof e)) return e
                                    if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                    return Vt(t)
                                }(this, t)
                            })

                        function l(t) {
                            var e
                            return function (t, e) {
                                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                            }(this, l), Yt(Vt(e = a.call(this, t)), re), Yt(Vt(e), ee), Ut(Vt(e), $t, {
                                writable: !0,
                                value: void 0
                            }), Ut(Vt(e), te, {
                                writable: !0,
                                value: 60
                            }), e._platformBridge.on(i.INTERSTITIAL_STATE_CHANGED, (function (t) {
                                t === u.CLOSED && Xt(Vt(e), te) > 0 && Zt(Vt(e), ee, oe)
                                    .call(Vt(e)), e.emit(i.INTERSTITIAL_STATE_CHANGED, t)
                            })), e._platformBridge.on(i.REWARDED_STATE_CHANGED, (function (t) {
                                return e.emit(i.REWARDED_STATE_CHANGED, t)
                            })), e._platformBridge.on(i.BANNER_STATE_CHANGED, (function (t) {
                                return e.emit(i.BANNER_STATE_CHANGED, t)
                            })), e
                        }

                        return e = l, (r = [{
                            key: 'isBannerSupported',
                            get: function () {
                                return this._platformBridge.isBannerSupported
                            }
                        }, {
                            key: 'bannerState',
                            get: function () {
                                return this._platformBridge.bannerState
                            }
                        }, {
                            key: 'interstitialState',
                            get: function () {
                                return this._platformBridge.interstitialState
                            }
                        }, {
                            key: 'rewardedState',
                            get: function () {
                                return this._platformBridge.rewardedState
                            }
                        }, {
                            key: 'minimumDelayBetweenInterstitial',
                            get: function () {
                                return Xt(this, te)
                            }
                        }, {
                            key: 'setMinimumDelayBetweenInterstitial',
                            value: function (t) {
                                if (t) {
                                    var e = t[this._platformBridge.platformId]
                                    if (void 0 !== e) return void this.setMinimumDelayBetweenInterstitial(e)
                                }
                                var r = zt(t),
                                    n = Xt(this, te)
                                switch (r) {
                                    case'number':
                                        n = t
                                        break
                                    case'string':
                                        if (n = parseInt(t, 10), Number.isNaN(n)) return
                                        break
                                    default:
                                        return
                                }
                                Jt(this, te, n), Xt(this, $t) && (Xt(this, $t)
                                    .stop(), Zt(this, ee, oe)
                                    .call(this))
                            }
                        }, {
                            key: 'showBanner',
                            value: function (t) {
                                if (t) {
                                    var e = t[this._platformBridge.platformId]
                                    if (e) return void this.showBanner(e)
                                }
                                this.bannerState !== c.LOADING && this.bannerState !== c.SHOWN && (this._platformBridge._setBannerState(c.LOADING), this.isBannerSupported ? this._platformBridge.showBanner(t) : this._platformBridge._setBannerState(c.FAILED))
                            }
                        }, {
                            key: 'hideBanner',
                            value: function () {
                                this.bannerState !== c.LOADING && this.bannerState !== c.HIDDEN && this.isBannerSupported && this._platformBridge.hideBanner()
                            }
                        }, {
                            key: 'showInterstitial',
                            value: function (t) {
                                if (!Zt(this, re, ie)
                                    .call(this)) {
                                    if (t) {
                                        var e = t[this._platformBridge.platformId]
                                        if (e) return void this.showInterstitial(e)
                                    }
                                    var r = !1
                                    t && 'boolean' == typeof t.ignoreDelay && (r = t.ignoreDelay), this._platformBridge._setInterstitialState(u.LOADING), !Xt(this, $t) || Xt(this, $t).state === Tt || r ? this._platformBridge.showInterstitial() : this._platformBridge._setInterstitialState(u.FAILED)
                                }
                            }
                        }, {
                            key: 'showRewarded',
                            value: function () {
                                Zt(this, re, ie)
                                    .call(this) || (this._platformBridge._setRewardedState(s.LOADING), this._platformBridge.showRewarded())
                            }
                        }]) && Wt(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), l
                    }(W)

                function oe() {
                    Jt(this, $t, new Ft(Xt(this, te))), Xt(this, $t)
                        .start()
                }

                function ie() {
                    return this.interstitialState === u.LOADING || this.interstitialState === u.OPENED || !![s.LOADING, s.OPENED, s.REWARDED].includes(this.rewardedState)
                }

                et()
                    .mixin(ne.prototype)
                const ae = ne

                function ue(t) {
                    return ue = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, ue(t)
                }

                function se(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, ce(n.key), n)
                    }
                }

                function ce(t) {
                    var e = function (t, e) {
                        if ('object' != ue(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != ue(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == ue(e) ? e : String(e)
                }

                function le(t, e) {
                    return le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, le(t, e)
                }

                function fe(t) {
                    return fe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, fe(t)
                }

                const pe = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && le(t, e)
                    }(a, t)
                    var e,
                        r,
                        n,
                        o,
                        i = (n = a, o = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = fe(n)
                            if (o) {
                                var r = fe(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === ue(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return function (t) {
                                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                                    return t
                                }(t)
                            }(this, t)
                        })

                    function a() {
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, a), i.apply(this, arguments)
                    }

                    return e = a, (r = [{
                        key: 'isInviteFriendsSupported',
                        get: function () {
                            return this._platformBridge.isInviteFriendsSupported
                        }
                    }, {
                        key: 'isJoinCommunitySupported',
                        get: function () {
                            return this._platformBridge.isJoinCommunitySupported
                        }
                    }, {
                        key: 'isShareSupported',
                        get: function () {
                            return this._platformBridge.isShareSupported
                        }
                    }, {
                        key: 'isCreatePostSupported',
                        get: function () {
                            return this._platformBridge.isCreatePostSupported
                        }
                    }, {
                        key: 'isAddToHomeScreenSupported',
                        get: function () {
                            return this._platformBridge.isAddToHomeScreenSupported
                        }
                    }, {
                        key: 'isAddToFavoritesSupported',
                        get: function () {
                            return this._platformBridge.isAddToFavoritesSupported
                        }
                    }, {
                        key: 'isRateSupported',
                        get: function () {
                            return this._platformBridge.isRateSupported
                        }
                    }, {
                        key: 'isExternalLinksAllowed',
                        get: function () {
                            return this._platformBridge.isExternalLinksAllowed
                        }
                    }, {
                        key: 'inviteFriends',
                        value: function () {
                            return this._platformBridge.inviteFriends()
                        }
                    }, {
                        key: 'joinCommunity',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.joinCommunity(e)
                            }
                            return this._platformBridge.joinCommunity(t)
                        }
                    }, {
                        key: 'share',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.share(e)
                            }
                            return this._platformBridge.share(t)
                        }
                    }, {
                        key: 'createPost',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.createPost(e)
                            }
                            return this._platformBridge.createPost(t)
                        }
                    }, {
                        key: 'addToHomeScreen',
                        value: function () {
                            return this._platformBridge.addToHomeScreen()
                        }
                    }, {
                        key: 'addToFavorites',
                        value: function () {
                            return this._platformBridge.addToFavorites()
                        }
                    }, {
                        key: 'rate',
                        value: function () {
                            return this._platformBridge.rate()
                        }
                    }]) && se(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), a
                }(W)

                function ye(t) {
                    return ye = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, ye(t)
                }

                function de(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, he(n.key), n)
                    }
                }

                function he(t) {
                    var e = function (t, e) {
                        if ('object' != ye(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != ye(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == ye(e) ? e : String(e)
                }

                function me(t, e) {
                    return me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, me(t, e)
                }

                function ve(t) {
                    return ve = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, ve(t)
                }

                const be = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && me(t, e)
                    }(a, t)
                    var e,
                        r,
                        n,
                        o,
                        i = (n = a, o = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = ve(n)
                            if (o) {
                                var r = ve(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === ye(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return function (t) {
                                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                                    return t
                                }(t)
                            }(this, t)
                        })

                    function a() {
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, a), i.apply(this, arguments)
                    }

                    return e = a, (r = [{
                        key: 'type',
                        get: function () {
                            return this._platformBridge.deviceType
                        }
                    }]) && de(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), a
                }(W)

                function ge(t) {
                    return ge = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, ge(t)
                }

                function _e(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, Se(n.key), n)
                    }
                }

                function Se(t) {
                    var e = function (t, e) {
                        if ('object' != ge(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != ge(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == ge(e) ? e : String(e)
                }

                function we(t, e) {
                    return we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, we(t, e)
                }

                function Pe(t) {
                    return Pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, Pe(t)
                }

                const Ee = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && we(t, e)
                    }(a, t)
                    var e,
                        r,
                        n,
                        o,
                        i = (n = a, o = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = Pe(n)
                            if (o) {
                                var r = Pe(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === ge(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return function (t) {
                                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                                    return t
                                }(t)
                            }(this, t)
                        })

                    function a() {
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, a), i.apply(this, arguments)
                    }

                    return e = a, (r = [{
                        key: 'isSupported',
                        get: function () {
                            return this._platformBridge.isLeaderboardSupported
                        }
                    }, {
                        key: 'isNativePopupSupported',
                        get: function () {
                            return this._platformBridge.isLeaderboardNativePopupSupported
                        }
                    }, {
                        key: 'isMultipleBoardsSupported',
                        get: function () {
                            return this._platformBridge.isLeaderboardMultipleBoardsSupported
                        }
                    }, {
                        key: 'isSetScoreSupported',
                        get: function () {
                            return this._platformBridge.isLeaderboardSetScoreSupported
                        }
                    }, {
                        key: 'isGetScoreSupported',
                        get: function () {
                            return this._platformBridge.isLeaderboardGetScoreSupported
                        }
                    }, {
                        key: 'isGetEntriesSupported',
                        get: function () {
                            return this._platformBridge.isLeaderboardGetEntriesSupported
                        }
                    }, {
                        key: 'setScore',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.setScore(e)
                            }
                            return this._platformBridge.setLeaderboardScore(t)
                        }
                    }, {
                        key: 'getScore',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.getScore(e)
                            }
                            return this._platformBridge.getLeaderboardScore(t)
                        }
                    }, {
                        key: 'getEntries',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.getEntries(e)
                            }
                            return this._platformBridge.getLeaderboardEntries(t)
                        }
                    }, {
                        key: 'showNativePopup',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.showNativePopup(e)
                            }
                            return this._platformBridge.showLeaderboardNativePopup(t)
                        }
                    }]) && _e(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), a
                }(W)

                function Oe(t) {
                    return Oe = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, Oe(t)
                }

                function ke(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, Ae(n.key), n)
                    }
                }

                function Ae(t) {
                    var e = function (t, e) {
                        if ('object' != Oe(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != Oe(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == Oe(e) ? e : String(e)
                }

                function De(t, e) {
                    return De = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, De(t, e)
                }

                function Te(t) {
                    return Te = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, Te(t)
                }

                const je = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && De(t, e)
                    }(a, t)
                    var e,
                        r,
                        n,
                        o,
                        i = (n = a, o = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = Te(n)
                            if (o) {
                                var r = Te(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === Oe(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return function (t) {
                                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                                    return t
                                }(t)
                            }(this, t)
                        })

                    function a() {
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, a), i.apply(this, arguments)
                    }

                    return e = a, (r = [{
                        key: 'isSupported',
                        get: function () {
                            return this._platformBridge.isPaymentsSupported
                        }
                    }, {
                        key: 'purchase',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.purchase(e)
                            }
                            return this._platformBridge.purchase(t)
                        }
                    }, {
                        key: 'getPurchases',
                        value: function () {
                            return this._platformBridge.getPaymentsPurchases()
                        }
                    }, {
                        key: 'getCatalog',
                        value: function () {
                            return this._platformBridge.getPaymentsCatalog()
                        }
                    }, {
                        key: 'consumePurchase',
                        value: function (t) {
                            if (t) {
                                var e = t[this._platformBridge.platformId]
                                if (e) return this.consumePurchase(e)
                            }
                            return this._platformBridge.consumePurchase(t)
                        }
                    }]) && ke(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), a
                }(W)

                function Ie(t) {
                    return Ie = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, Ie(t)
                }

                function Re(t, e) {
                    var r = Object.keys(t)
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t)
                        e && (n = n.filter((function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function Le(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, Ne(n.key), n)
                    }
                }

                function Be(t, e, r) {
                    return (e = Ne(e)) in t ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = r, t
                }

                function Ne(t) {
                    var e = function (t, e) {
                        if ('object' != Ie(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != Ie(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == Ie(e) ? e : String(e)
                }

                function Ce(t, e) {
                    var r = function (t, e, r) {
                        if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                        return e.get(t)
                    }(t, e)
                    return function (t, e) {
                        return e.get ? e.get.call(t) : e.value
                    }(t, r)
                }

                var Me = new WeakMap,
                    Ge = function () {
                        function t(e) {
                            var r,
                                n,
                                o,
                                u = this
                            !function (t, e) {
                                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                            }(this, t), Be(this, '_isInitialized', !1), Be(this, '_platformSdk', null), Be(this, '_isPlayerAuthorized', !1), Be(this, '_playerId', null), Be(this, '_playerName', null), Be(this, '_playerPhotos', []), Be(this, '_visibilityState', null), Be(this, '_localStorage', null), Be(this, '_defaultStorageType', l.LOCAL_STORAGE), Be(this, '_platformStorageCachedData', null), Be(this, '_isBannerSupported', !1), Be(this, '_interstitialState', null), Be(this, '_rewardedState', null), Be(this, '_bannerState', null), o = {
                                writable: !0,
                                value: {}
                            }, function (t, e) {
                                if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                            }(r = this, n = Me), n.set(r, o)
                            try {
                                this._localStorage = window.localStorage
                            } catch (t) {
                            }
                            this._visibilityState = 'visible' === document.visibilityState ? a.VISIBLE : a.HIDDEN, document.addEventListener('visibilitychange', (function () {
                                u._visibilityState = 'visible' === document.visibilityState ? a.VISIBLE : a.HIDDEN, u.emit(i.VISIBILITY_STATE_CHANGED, u._visibilityState)
                            })), e && (this._options = function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {}
                                    e % 2 ? Re(Object(r), !0)
                                        .forEach((function (e) {
                                            Be(t, e, r[e])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Re(Object(r))
                                        .forEach((function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                        }))
                                }
                                return t
                            }({}, e))
                        }

                        var e,
                            r
                        return e = t, (r = [{
                            key: 'platformId',
                            get: function () {
                                return n.MOCK
                            }
                        }, {
                            key: 'platformSdk',
                            get: function () {
                                return this._platformSdk
                            }
                        }, {
                            key: 'platformLanguage',
                            get: function () {
                                var t = navigator.language
                                return 'string' == typeof t ? t.substring(0, 2)
                                    .toLowerCase() : 'en'
                            }
                        }, {
                            key: 'platformPayload',
                            get: function () {
                                return new URL(window.location.href).searchParams.get('payload')
                            }
                        }, {
                            key: 'platformTld',
                            get: function () {
                                return null
                            }
                        }, {
                            key: 'visibilityState',
                            get: function () {
                                return this._visibilityState
                            }
                        }, {
                            key: 'isPlayerAuthorizationSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isPlayerAuthorized',
                            get: function () {
                                return this._isPlayerAuthorized
                            }
                        }, {
                            key: 'playerId',
                            get: function () {
                                return this._playerId
                            }
                        }, {
                            key: 'playerName',
                            get: function () {
                                return this._playerName
                            }
                        }, {
                            key: 'playerPhotos',
                            get: function () {
                                return this._playerPhotos
                            }
                        }, {
                            key: 'defaultStorageType',
                            get: function () {
                                return this._defaultStorageType
                            }
                        }, {
                            key: 'isBannerSupported',
                            get: function () {
                                return this._isBannerSupported
                            }
                        }, {
                            key: 'bannerState',
                            get: function () {
                                return this._bannerState
                            }
                        }, {
                            key: 'interstitialState',
                            get: function () {
                                return this._interstitialState
                            }
                        }, {
                            key: 'rewardedState',
                            get: function () {
                                return this._rewardedState
                            }
                        }, {
                            key: 'isInviteFriendsSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isJoinCommunitySupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isShareSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isCreatePostSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isAddToHomeScreenSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isAddToFavoritesSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isRateSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isExternalLinksAllowed',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'deviceType',
                            get: function () {
                                if (navigator && navigator.userAgent) {
                                    var t = navigator.userAgent.toLowerCase()
                                    if (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(t)) return f.MOBILE
                                    if (/ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP)))/.test(t)) return f.TABLET
                                }
                                return f.DESKTOP
                            }
                        }, {
                            key: 'isLeaderboardSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isLeaderboardNativePopupSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isLeaderboardMultipleBoardsSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isLeaderboardSetScoreSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isLeaderboardGetScoreSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isLeaderboardGetEntriesSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'isPaymentsSupported',
                            get: function () {
                                return !1
                            }
                        }, {
                            key: 'initialize',
                            value: function () {
                                return Promise.resolve()
                            }
                        }, {
                            key: 'sendMessage',
                            value: function () {
                                return Promise.resolve()
                            }
                        }, {
                            key: 'authorizePlayer',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'isStorageSupported',
                            value: function (t) {
                                return t === l.LOCAL_STORAGE && null !== this._localStorage
                            }
                        }, {
                            key: 'isStorageAvailable',
                            value: function (t) {
                                return t === l.LOCAL_STORAGE && null !== this._localStorage
                            }
                        }, {
                            key: 'getDataFromStorage',
                            value: function (t, e) {
                                if (e === l.LOCAL_STORAGE) {
                                    if (this._localStorage) {
                                        if (Array.isArray(t)) {
                                            for (var r = [], n = 0; n < t.length; n++) r.push(this._getDataFromLocalStorage(t[n]))
                                            return Promise.resolve(r)
                                        }
                                        var o = this._getDataFromLocalStorage(t)
                                        return Promise.resolve(o)
                                    }
                                    return Promise.reject(O)
                                }
                                return Promise.reject(O)
                            }
                        }, {
                            key: 'setDataToStorage',
                            value: function (t, e, r) {
                                if (r === l.LOCAL_STORAGE) {
                                    if (this._localStorage) {
                                        if (Array.isArray(t)) {
                                            for (var n = 0; n < t.length; n++) this._setDataToLocalStorage(t[n], e[n])
                                            return Promise.resolve()
                                        }
                                        return this._setDataToLocalStorage(t, e), Promise.resolve()
                                    }
                                    return Promise.reject(O)
                                }
                                return Promise.reject(O)
                            }
                        }, {
                            key: 'deleteDataFromStorage',
                            value: function (t, e) {
                                if (e === l.LOCAL_STORAGE) {
                                    if (this._localStorage) {
                                        if (Array.isArray(t)) {
                                            for (var r = 0; r < t.length; r++) this._deleteDataFromLocalStorage(t[r])
                                            return Promise.resolve()
                                        }
                                        return this._deleteDataFromLocalStorage(t), Promise.resolve()
                                    }
                                    return Promise.reject(O)
                                }
                                return Promise.reject(O)
                            }
                        }, {
                            key: 'showBanner',
                            value: function () {
                                this._setBannerState(c.FAILED)
                            }
                        }, {
                            key: 'hideBanner',
                            value: function () {
                                this._setBannerState(c.HIDDEN)
                            }
                        }, {
                            key: 'showInterstitial',
                            value: function () {
                                this._setInterstitialState(u.FAILED)
                            }
                        }, {
                            key: 'showRewarded',
                            value: function () {
                                this._setRewardedState(s.FAILED)
                            }
                        }, {
                            key: 'inviteFriends',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'joinCommunity',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'share',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'createPost',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'addToHomeScreen',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'addToFavorites',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'rate',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'setLeaderboardScore',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'getLeaderboardScore',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'getLeaderboardEntries',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'showLeaderboardNativePopup',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'purchase',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'getPaymentsPurchases',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'getPaymentsCatalog',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: 'consumePurchase',
                            value: function () {
                                return Promise.reject()
                            }
                        }, {
                            key: '_getDataFromLocalStorage',
                            value: function (t) {
                                var e = this._localStorage.getItem(t)
                                if ('string' == typeof e) {
                                    try {
                                        e = JSON.parse(e)
                                    } catch (t) {
                                    }
                                }
                                return e
                            }
                        }, {
                            key: '_setDataToLocalStorage',
                            value: function (t, e) {
                                this._localStorage.setItem(t, 'object' === Ie(e) ? JSON.stringify(e) : e)
                            }
                        }, {
                            key: '_deleteDataFromLocalStorage',
                            value: function (t) {
                                this._localStorage.removeItem(t)
                            }
                        }, {
                            key: '_setInterstitialState',
                            value: function (t) {
                                this._interstitialState === t && t !== u.FAILED || (this._interstitialState = t, this.emit(i.INTERSTITIAL_STATE_CHANGED, this._interstitialState))
                            }
                        }, {
                            key: '_setRewardedState',
                            value: function (t) {
                                this._rewardedState === t && t !== s.FAILED || (this._rewardedState = t, this.emit(i.REWARDED_STATE_CHANGED, this._rewardedState))
                            }
                        }, {
                            key: '_setBannerState',
                            value: function (t) {
                                this._bannerState === t && t !== c.FAILED || (this._bannerState = t, this.emit(i.BANNER_STATE_CHANGED, this._bannerState))
                            }
                        }, {
                            key: '_createPromiseDecorator',
                            value: function (t) {
                                var e = new M
                                return Ce(this, Me)[t] = e, e
                            }
                        }, {
                            key: '_getPromiseDecorator',
                            value: function (t) {
                                return Ce(this, Me)[t]
                            }
                        }, {
                            key: '_resolvePromiseDecorator',
                            value: function (t, e) {
                                Ce(this, Me)[t] && (Ce(this, Me)[t].resolve(e), delete Ce(this, Me)[t])
                            }
                        }, {
                            key: '_rejectPromiseDecorator',
                            value: function (t, e) {
                                Ce(this, Me)[t] && (Ce(this, Me)[t].reject(e), delete Ce(this, Me)[t])
                            }
                        }]) && Le(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), t
                    }()
                et()
                    .mixin(Ge.prototype)
                const Fe = Ge
                var ze = function (t) {
                        return new Promise((function (e) {
                            var r = document.createElement('script')
                            r.src = t, r.addEventListener('load', e), document.head.appendChild(r)
                        }))
                    },
                    We = function () {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
                        return e.length <= 0 ? Promise.resolve() : new Promise((function (t) {
                            var r = setInterval((function () {
                                for (var n = window, o = 0; o < e.length; o++) {
                                    var i = n[e[o]]
                                    if (!i) return
                                    n = i
                                }
                                t(), clearInterval(r)
                            }), 100)
                        }))
                    }

                function xe(t) {
                    return xe = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, xe(t)
                }

                function He(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, Ve(n.key), n)
                    }
                }

                function Ve(t) {
                    var e = function (t, e) {
                        if ('object' != xe(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != xe(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == xe(e) ? e : String(e)
                }

                function Ke() {
                    return Ke = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, r) {
                        var n = function (t, e) {
                            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = qe(t));) 
                            return t
                        }(t, e)
                        if (n) {
                            var o = Object.getOwnPropertyDescriptor(n, e)
                            return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                        }
                    }, Ke.apply(this, arguments)
                }

                function Ye(t, e) {
                    return Ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, Ye(t, e)
                }

                function Ue(t) {
                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                    return t
                }

                function qe(t) {
                    return qe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, qe(t)
                }

                function Je(t, e) {
                    if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                }

                function Ze(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                    return r
                }

                function Xe(t, e) {
                    return function (t, e) {
                        return e.get ? e.get.call(t) : e.value
                    }(t, Qe(t, e, 'get'))
                }

                function Qe(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to ' + r + ' private field on non-instance')
                    return e.get(t)
                }

                var $e = new WeakMap,
                    tr = new WeakSet

                function er(t, e) {
                    var r = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'result',
                        i = this._getPromiseDecorator(t)
                    return i || (i = this._createPromiseDecorator(t), this._platformSdk.send(e, n)
                        .then((function (e) {
                            e[o] ? r._resolvePromiseDecorator(t) : r._rejectPromiseDecorator(t)
                        }))
                        .catch((function (e) {
                            r._rejectPromiseDecorator(t, e)
                        }))), i.promise
                }

                const rr = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && Ye(t, e)
                    }(p, t)
                    var e,
                        r,
                        o,
                        i,
                        a = (o = p, i = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = qe(o)
                            if (i) {
                                var r = qe(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === xe(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return Ue(t)
                            }(this, t)
                        })

                    function p() {
                        var t,
                            e,
                            r
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, p)
                        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
                        return Je(e = Ue(t = a.call.apply(a, [this].concat(o))), r = tr), r.add(e), function (t, e, r) {
                            Je(t, e), e.set(t, {
                                writable: !0,
                                value: void 0
                            })
                        }(Ue(t), $e), t
                    }

                    return e = p, (r = [{
                        key: 'platformId',
                        get: function () {
                            return n.VK
                        }
                    }, {
                        key: 'platformLanguage',
                        get: function () {
                            var t = new URL(window.location.href)
                            if (t.searchParams.has('language')) {
                                var e = t.searchParams.get('language'),
                                    r = 0
                                try {
                                    r = parseInt(e, 10)
                                } catch (t) {
                                    r = 0
                                }
                                switch (r) {
                                    case 0:
                                    default:
                                        return 'ru'
                                    case 1:
                                        return 'uk'
                                    case 2:
                                        return 'be'
                                    case 3:
                                        return 'en'
                                }
                            }
                            return Ke(qe(p.prototype), 'platformLanguage', this)
                        }
                    }, {
                        key: 'platformPayload',
                        get: function () {
                            var t = new URL(window.location.href)
                            return t.searchParams.has('hash') ? t.searchParams.get('hash') : Ke(qe(p.prototype), 'platformPayload', this)
                        }
                    }, {
                        key: 'deviceType',
                        get: function () {
                            switch (Xe(this, $e)) {
                                case'html5_ios':
                                case'html5_android':
                                case'html5_mobile':
                                    return f.MOBILE
                                case'web':
                                    return f.DESKTOP
                                default:
                                    return Ke(qe(p.prototype), 'deviceType', this)
                            }
                        }
                    }, {
                        key: 'isPlayerAuthorizationSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isPlayerAuthorized',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isInviteFriendsSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isJoinCommunitySupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isShareSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isCreatePostSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isAddToHomeScreenSupported',
                        get: function () {
                            return 'html5_android' === Xe(this, $e)
                        }
                    }, {
                        key: 'isAddToFavoritesSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isExternalLinksAllowed',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isLeaderboardSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isLeaderboardNativePopupSupported',
                        get: function () {
                            return this.deviceType === f.MOBILE
                        }
                    }, {
                        key: 'initialize',
                        value: function () {
                            var t = this
                            if (this._isInitialized) return Promise.resolve()
                            var e,
                                r,
                                n,
                                o = this._getPromiseDecorator(y)
                            if (!o) {
                                o = this._createPromiseDecorator(y)
                                var i = new URL(window.location.href)
                                i.searchParams.has('platform') && (e = this, r = $e, n = i.searchParams.get('platform'), function (t, e, r) {
                                    if (e.set) {
                                        e.set.call(t, r)
                                    } else {
                                        if (!e.writable) throw new TypeError('attempted to set read only private field')
                                        e.value = r
                                    }
                                }(e, Qe(e, r, 'set'), n)), ze('https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js')
                                    .then((function () {
                                        We('vkBridge')
                                            .then((function () {
                                                t._platformSdk = window.vkBridge, t._platformSdk.send('VKWebAppInit')
                                                    .then((function () {
                                                        t._isBannerSupported = !0, t._platformSdk.send('VKWebAppGetUserInfo')
                                                            .then((function (e) {
                                                                e && (t._playerId = e.id, t._playerName = ''.concat(e.first_name, ' ')
                                                                    .concat(e.last_name), e.photo_100 && t._playerPhotos.push(e.photo_100), e.photo_200 && t._playerPhotos.push(e.photo_200), e.photo_max_orig && t._playerPhotos.push(e.photo_max_orig))
                                                            }))
                                                            .finally((function () {
                                                                t._isInitialized = !0, t._defaultStorageType = l.PLATFORM_INTERNAL, t._resolvePromiseDecorator(y)
                                                            }))
                                                    }))
                                            }))
                                    }))
                            }
                            return o.promise
                        }
                    }, {
                        key: 'authorizePlayer',
                        value: function () {
                            return Promise.resolve()
                        }
                    }, {
                        key: 'isStorageSupported',
                        value: function (t) {
                            return t === l.PLATFORM_INTERNAL || Ke(qe(p.prototype), 'isStorageSupported', this)
                                .call(this, t)
                        }
                    }, {
                        key: 'isStorageAvailable',
                        value: function (t) {
                            return t === l.PLATFORM_INTERNAL || Ke(qe(p.prototype), 'isStorageAvailable', this)
                                .call(this, t)
                        }
                    }, {
                        key: 'getDataFromStorage',
                        value: function (t, e) {
                            var r = this
                            return e === l.PLATFORM_INTERNAL ? new Promise((function (e, n) {
                                var o = Array.isArray(t) ? t : [t]
                                r._platformSdk.send('VKWebAppStorageGet', { keys: o })
                                    .then((function (r) {
                                        if (Array.isArray(t)) {
                                            var n = []
                                            return o.forEach((function (t) {
                                                var e = r.keys.findIndex((function (e) {
                                                    return e.key === t
                                                }))
                                                if (e < 0) {
                                                    n.push(null)
                                                } else if ('' !== r.keys[e].value) {
                                                    var o
                                                    try {
                                                        o = JSON.parse(r.keys[e].value)
                                                    } catch (t) {
                                                        o = r.keys[e].value
                                                    }
                                                    n.push(o)
                                                } else {
                                                    n.push(null)
                                                }
                                            })), void e(n)
                                        }
                                        if ('' !== r.keys[0].value) {
                                            var i
                                            try {
                                                i = JSON.parse(r.keys[0].value)
                                            } catch (t) {
                                                i = r.keys[0].value
                                            }
                                            e(i)
                                        } else {
                                            e(null)
                                        }
                                    }))
                                    .catch((function (t) {
                                        t && t.error_data && t.error_data.error_reason ? n(t.error_data.error_reason) : n()
                                    }))
                            })) : Ke(qe(p.prototype), 'getDataFromStorage', this)
                                .call(this, t, e)
                        }
                    }, {
                        key: 'setDataToStorage',
                        value: function (t, e, r) {
                            var n = this
                            if (r === l.PLATFORM_INTERNAL) {
                                if (Array.isArray(t)) {
                                    for (var o = [], i = 0; i < t.length; i++) {
                                        var a = {
                                            key: t[i],
                                            value: e[i]
                                        }
                                        'string' != typeof e[i] && (a.value = JSON.stringify(e[i])), o.push(this._platformSdk.send('VKWebAppStorageSet', a))
                                    }
                                    return Promise.all(o)
                                }
                                var u = {
                                    key: t,
                                    value: e
                                }
                                return 'string' != typeof e && (u.value = JSON.stringify(e)), new Promise((function (t, e) {
                                    n._platformSdk.send('VKWebAppStorageSet', u)
                                        .then((function () {
                                            t()
                                        }))
                                        .catch((function (t) {
                                            t && t.error_data && t.error_data.error_reason ? e(t.error_data.error_reason) : e()
                                        }))
                                }))
                            }
                            return Ke(qe(p.prototype), 'setDataToStorage', this)
                                .call(this, t, e, r)
                        }
                    }, {
                        key: 'deleteDataFromStorage',
                        value: function (t, e) {
                            if (e === l.PLATFORM_INTERNAL) {
                                if (Array.isArray(t)) {
                                    for (var r = [], n = 0; n < t.length; n++) r.push(this.setDataToStorage(t[n], '', e))
                                    return Promise.all(r)
                                }
                                return this.setDataToStorage(t, '', e)
                            }
                            return Ke(qe(p.prototype), 'deleteDataFromStorage', this)
                                .call(this, t, e)
                        }
                    }, {
                        key: 'showBanner',
                        value: function (t) {
                            var e = this,
                                r = 'bottom',
                                n = 'resize',
                                o = !1
                            t && ('string' == typeof t.position && (r = t.position), 'string' == typeof t.layoutType && (n = t.layoutType), 'boolean' == typeof t.canClose && (o = t.canClose)), this._platformSdk.send('VKWebAppShowBannerAd', {
                                banner_location: r,
                                layout_type: n,
                                can_close: o
                            })
                                .then((function (t) {
                                    t.result ? e._setBannerState(c.SHOWN) : e._setBannerState(c.FAILED)
                                }))
                                .catch((function () {
                                    e._setBannerState(c.FAILED)
                                }))
                        }
                    }, {
                        key: 'hideBanner',
                        value: function () {
                            var t = this
                            this._platformSdk.send('VKWebAppHideBannerAd')
                                .then((function (e) {
                                    e.result && t._setBannerState(c.HIDDEN)
                                }))
                        }
                    }, {
                        key: 'showInterstitial',
                        value: function () {
                            var t = this
                            this._platformSdk.send('VKWebAppCheckNativeAds', { ad_format: 'interstitial' })
                                .then((function (e) {
                                    e.result && t._setInterstitialState(u.OPENED)
                                }))
                                .finally((function () {
                                    t._platformSdk.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
                                        .then((function (e) {
                                            t._setInterstitialState(e.result ? u.CLOSED : u.FAILED)
                                        }))
                                        .catch((function () {
                                            t._setInterstitialState(u.FAILED)
                                        }))
                                }))
                        }
                    }, {
                        key: 'showRewarded',
                        value: function () {
                            var t = this
                            this._platformSdk.send('VKWebAppCheckNativeAds', {
                                ad_format: 'reward',
                                use_waterfall: !0
                            })
                                .then((function (e) {
                                    e.result && t._setRewardedState(s.OPENED)
                                }))
                                .finally((function () {
                                    t._platformSdk.send('VKWebAppShowNativeAds', {
                                        ad_format: 'reward',
                                        use_waterfall: !0
                                    })
                                        .then((function (e) {
                                            e.result ? (t._setRewardedState(s.REWARDED), t._setRewardedState(s.CLOSED)) : t._setRewardedState(s.FAILED)
                                        }))
                                        .catch((function () {
                                            t._setRewardedState(s.FAILED)
                                        }))
                                }))
                        }
                    }, {
                        key: 'inviteFriends',
                        value: function () {
                            return Ze(this, tr, er)
                                .call(this, 'invite_friends', 'VKWebAppShowInviteBox', {}, 'success')
                        }
                    }, {
                        key: 'joinCommunity',
                        value: function (t) {
                            if (!t || !t.groupId) return Promise.reject()
                            var e = t.groupId
                            return 'string' == typeof e && (e = parseInt(e, 10), Number.isNaN(e)) ? Promise.reject() : Ze(this, tr, er)
                                .call(this, 'join_community', 'VKWebAppJoinGroup', { group_id: e })
                                .then((function () {
                                    window.open('https://vk.com/public'.concat(e))
                                }))
                        }
                    }, {
                        key: 'share',
                        value: function (t) {
                            var e = {}
                            return t && t.link && (e.link = t.link), Ze(this, tr, er)
                                .call(this, 'share', 'VKWebAppShare', e, 'type')
                        }
                    }, {
                        key: 'createPost',
                        value: function (t) {
                            var e = {}
                            return t && t.message && (e.message = t.message), t && t.attachments && (e.attachments = t.attachments), Ze(this, tr, er)
                                .call(this, 'create_post', 'VKWebAppShowWallPostBox', e, 'post_id')
                        }
                    }, {
                        key: 'addToHomeScreen',
                        value: function () {
                            return this.isAddToHomeScreenSupported ? Ze(this, tr, er)
                                .call(this, h, 'VKWebAppAddToHomeScreen') : Promise.reject()
                        }
                    }, {
                        key: 'addToFavorites',
                        value: function () {
                            return Ze(this, tr, er)
                                .call(this, 'add_to_favorites', 'VKWebAppAddToFavorites')
                        }
                    }, {
                        key: 'showLeaderboardNativePopup',
                        value: function (t) {
                            if (!this.isLeaderboardNativePopupSupported) return Promise.reject()
                            if (!t || !t.userResult) return Promise.reject()
                            var e = { user_result: t.userResult }
                            return 'boolean' == typeof t.global && (e.global = t.global ? 1 : 0), Ze(this, tr, er)
                                .call(this, 'show_leaderboard_native_popup', 'VKWebAppShowLeaderBoardBox', e)
                        }
                    }]) && He(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), p
                }(Fe)

                function nr(t) {
                    return nr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, nr(t)
                }

                function or(t, e) {
                    var r = Object.keys(t)
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t)
                        e && (n = n.filter((function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function ir(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {}
                        e % 2 ? or(Object(r), !0)
                            .forEach((function (e) {
                                var n,
                                    o,
                                    i
                                n = t, o = e, i = r[e], (o = ur(o)) in n ? Object.defineProperty(n, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : n[o] = i
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : or(Object(r))
                            .forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }))
                    }
                    return t
                }

                function ar(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, ur(n.key), n)
                    }
                }

                function ur(t) {
                    var e = function (t, e) {
                        if ('object' != nr(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != nr(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == nr(e) ? e : String(e)
                }

                function sr() {
                    return sr = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, r) {
                        var n = function (t, e) {
                            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = fr(t));) 
                            return t
                        }(t, e)
                        if (n) {
                            var o = Object.getOwnPropertyDescriptor(n, e)
                            return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                        }
                    }, sr.apply(this, arguments)
                }

                function cr(t, e) {
                    return cr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, cr(t, e)
                }

                function lr(t) {
                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                    return t
                }

                function fr(t) {
                    return fr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, fr(t)
                }

                function pr(t, e, r) {
                    yr(t, e), e.set(t, r)
                }

                function yr(t, e) {
                    if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                }

                function dr(t, e, r) {
                    return function (t, e, r) {
                        if (e.set) {
                            e.set.call(t, r)
                        } else {
                            if (!e.writable) throw new TypeError('attempted to set read only private field')
                            e.value = r
                        }
                    }(t, vr(t, e, 'set'), r), r
                }

                function hr(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                    return r
                }

                function mr(t, e) {
                    return function (t, e) {
                        return e.get ? e.get.call(t) : e.value
                    }(t, vr(t, e, 'get'))
                }

                function vr(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to ' + r + ' private field on non-instance')
                    return e.get(t)
                }

                var br = new WeakMap,
                    gr = new WeakMap,
                    _r = new WeakMap,
                    Sr = new WeakMap,
                    wr = new WeakSet

                function Pr(t) {
                    var e = this
                    return new Promise((function (r) {
                        var n = { scopes: !1 }
                        t && 'boolean' == typeof t.scopes && (n.scopes = t.scopes), e._platformSdk.getPlayer(n)
                            .then((function (t) {
                                e._playerId = t.getUniqueID(), e._isPlayerAuthorized = 'lite' !== t.getMode(), e._defaultStorageType = e._isPlayerAuthorized ? l.PLATFORM_INTERNAL : l.LOCAL_STORAGE
                                var r = t.getName()
                                '' !== r && (e._playerName = r), e._playerPhotos = []
                                var n = t.getPhoto('small'),
                                    o = t.getPhoto('medium'),
                                    i = t.getPhoto('large')
                                n && e._playerPhotos.push(n), o && e._playerPhotos.push(o), i && e._playerPhotos.push(i), dr(e, gr, t)
                            }))
                            .finally((function () {
                                r()
                            }))
                    }))
                }

                const Er = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && cr(t, e)
                    }(E, t)
                    var e,
                        r,
                        o,
                        i,
                        a = (o = E, i = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = fr(o)
                            if (i) {
                                var r = fr(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === nr(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return lr(t)
                            }(this, t)
                        })

                    function E() {
                        var t,
                            e,
                            r
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, E)
                        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
                        return yr(e = lr(t = a.call.apply(a, [this].concat(o))), r = wr), r.add(e), pr(lr(t), br, {
                            writable: !0,
                            value: !1
                        }), pr(lr(t), gr, {
                            writable: !0,
                            value: null
                        }), pr(lr(t), _r, {
                            writable: !0,
                            value: null
                        }), pr(lr(t), Sr, {
                            writable: !0,
                            value: null
                        }), t
                    }

                    return e = E, (r = [{
                        key: 'platformId',
                        get: function () {
                            return n.YANDEX
                        }
                    }, {
                        key: 'platformLanguage',
                        get: function () {
                            return this._platformSdk ? this._platformSdk.environment.i18n.lang.toLowerCase() : sr(fr(E.prototype), 'platformLanguage', this)
                        }
                    }, {
                        key: 'platformTld',
                        get: function () {
                            return this._platformSdk ? this._platformSdk.environment.i18n.tld.toLowerCase() : sr(fr(E.prototype), 'platformTld', this)
                        }
                    }, {
                        key: 'deviceType',
                        get: function () {
                            switch (this._platformSdk && this._platformSdk.deviceInfo.type) {
                                case f.DESKTOP:
                                    return f.DESKTOP
                                case f.MOBILE:
                                    return f.MOBILE
                                case f.TABLET:
                                    return f.TABLET
                                case f.TV:
                                    return f.TV
                                default:
                                    return sr(fr(E.prototype), 'deviceType', this)
                            }
                        }
                    }, {
                        key: 'isPlayerAuthorizationSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isAddToHomeScreenSupported',
                        get: function () {
                            return mr(this, br)
                        }
                    }, {
                        key: 'isRateSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isLeaderboardSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isLeaderboardMultipleBoardsSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isLeaderboardSetScoreSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isLeaderboardGetScoreSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isLeaderboardGetEntriesSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'isPaymentsSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'initialize',
                        value: function () {
                            var t = this
                            if (this._isInitialized) return Promise.resolve()
                            var e = this._getPromiseDecorator(y)
                            return e || (e = this._createPromiseDecorator(y), ze('https://yandex.ru/games/sdk/v2')
                                .then((function () {
                                    We('YaGames', 'init')
                                        .then((function () {
                                            window.YaGames.init()
                                                .then((function (e) {
                                                    var r
                                                    t._platformSdk = e
                                                    var n = hr(t, wr, Pr)
                                                            .call(t),
                                                        o = null === (r = t._platformSdk.features.PluginEngineDataReporterAPI) || void 0 === r ? void 0 : r.report({
                                                            engineName: '',
                                                            engineVersion: '',
                                                            pluginName: 'instant-games-bridge',
                                                            pluginVersion: '1.10.1'
                                                        }),
                                                        i = t._platformSdk.getStorage()
                                                            .then((function (e) {
                                                                t._localStorage = e
                                                            })),
                                                        a = t._platformSdk.shortcut.canShowPrompt()
                                                            .then((function (e) {
                                                                dr(t, br, e.canShow)
                                                            })),
                                                        u = new Promise((function (t) {
                                                            setTimeout(t, 1e3)
                                                        })),
                                                        s = Promise.race([a, u]),
                                                        l = t._platformSdk.getLeaderboards()
                                                            .then((function (e) {
                                                                dr(t, _r, e)
                                                            })),
                                                        f = t._platformSdk.getPayments()
                                                            .then((function (e) {
                                                                dr(t, Sr, e)
                                                            }))
                                                    t._isBannerSupported = !0
                                                    var p = t._platformSdk.adv.getBannerAdvStatus()
                                                        .then((function (e) {
                                                            e.stickyAdvIsShowing && t._setBannerState(c.SHOWN)
                                                        }))
                                                    Promise.all([n, i, s, l, p, f, o])
                                                        .finally((function () {
                                                            t._isInitialized = !0, t._resolvePromiseDecorator(y)
                                                        }))
                                                }))
                                        }))
                                }))), e.promise
                        }
                    }, {
                        key: 'sendMessage',
                        value: function (t) {
                            var e
                            return t === p.GAME_READY ? (null === (e = this._platformSdk.features.LoadingAPI) || void 0 === e || e.ready(), Promise.resolve()) : sr(fr(E.prototype), 'sendMessage', this)
                                .call(this, t)
                        }
                    }, {
                        key: 'authorizePlayer',
                        value: function (t) {
                            var e = this,
                                r = this._getPromiseDecorator(d)
                            return r || (r = this._createPromiseDecorator(d), this._isPlayerAuthorized ? hr(this, wr, Pr)
                                .call(this, t)
                                .then((function () {
                                    e._resolvePromiseDecorator(d)
                                })) : this._platformSdk.auth.openAuthDialog()
                                .then((function () {
                                    hr(e, wr, Pr)
                                        .call(e, t)
                                        .then((function () {
                                            e._resolvePromiseDecorator(d)
                                        }))
                                }))
                                .catch((function (t) {
                                    e._rejectPromiseDecorator(d, t)
                                }))), r.promise
                        }
                    }, {
                        key: 'isStorageSupported',
                        value: function (t) {
                            return t === l.PLATFORM_INTERNAL || sr(fr(E.prototype), 'isStorageSupported', this)
                                .call(this, t)
                        }
                    }, {
                        key: 'isStorageAvailable',
                        value: function (t) {
                            return t === l.PLATFORM_INTERNAL ? this._isPlayerAuthorized : sr(fr(E.prototype), 'isStorageAvailable', this)
                                .call(this, t)
                        }
                    }, {
                        key: 'getDataFromStorage',
                        value: function (t, e) {
                            var r = this
                            return e === l.PLATFORM_INTERNAL ? new Promise((function (e, n) {
                                if (r._platformStorageCachedData) {
                                    if (Array.isArray(t)) {
                                        for (var o = [], i = 0; i < t.length; i++) {
                                            var a = void 0 === r._platformStorageCachedData[t[i]] ? null : r._platformStorageCachedData[t[i]]
                                            o.push(a)
                                        }
                                        return void e(o)
                                    }
                                    e(void 0 === r._platformStorageCachedData[t] ? null : r._platformStorageCachedData[t])
                                } else {
                                    mr(r, gr) ? mr(r, gr)
                                        .getData()
                                        .then((function (n) {
                                            if (r._platformStorageCachedData = n, Array.isArray(t)) {
                                                for (var o = [], i = 0; i < t.length; i++) {
                                                    var a = void 0 === r._platformStorageCachedData[t[i]] ? null : r._platformStorageCachedData[t[i]]
                                                    o.push(a)
                                                }
                                                e(o)
                                            } else {
                                                e(void 0 === r._platformStorageCachedData[t] ? null : r._platformStorageCachedData[t])
                                            }
                                        }))
                                        .catch((function (t) {
                                            n(t)
                                        })) : n()
                                }
                            })) : sr(fr(E.prototype), 'getDataFromStorage', this)
                                .call(this, t, e)
                        }
                    }, {
                        key: 'setDataToStorage',
                        value: function (t, e, r) {
                            var n = this
                            return r === l.PLATFORM_INTERNAL ? new Promise((function (r, o) {
                                if (mr(n, gr)) {
                                    var i = null !== n._platformStorageCachedData ? ir({}, n._platformStorageCachedData) : {}
                                    if (Array.isArray(t)) for (var a = 0; a < t.length; a++) i[t[a]] = e[a] else i[t] = e
                                    mr(n, gr)
                                        .setData(i)
                                        .then((function () {
                                            n._platformStorageCachedData = i, r()
                                        }))
                                        .catch((function (t) {
                                            o(t)
                                        }))
                                } else {
                                    o()
                                }
                            })) : sr(fr(E.prototype), 'setDataToStorage', this)
                                .call(this, t, e, r)
                        }
                    }, {
                        key: 'deleteDataFromStorage',
                        value: function (t, e) {
                            var r = this
                            return e === l.PLATFORM_INTERNAL ? new Promise((function (e, n) {
                                if (mr(r, gr)) {
                                    var o = null !== r._platformStorageCachedData ? ir({}, r._platformStorageCachedData) : {}
                                    if (Array.isArray(t)) for (var i = 0; i < t.length; i++) delete o[t[i]] else delete o[t]
                                    mr(r, gr)
                                        .setData(o)
                                        .then((function () {
                                            r._platformStorageCachedData = o, e()
                                        }))
                                        .catch((function (t) {
                                            n(t)
                                        }))
                                } else {
                                    n()
                                }
                            })) : sr(fr(E.prototype), 'deleteDataFromStorage', this)
                                .call(this, t, e)
                        }
                    }, {
                        key: 'showBanner',
                        value: function () {
                            var t = this
                            this._platformSdk.adv.showBannerAdv()
                                .then((function (e) {
                                    e.stickyAdvIsShowing ? t._setBannerState(c.SHOWN) : t._setBannerState(c.FAILED)
                                }))
                                .catch((function () {
                                    t._setBannerState(c.FAILED)
                                }))
                        }
                    }, {
                        key: 'hideBanner',
                        value: function () {
                            var t = this
                            this._platformSdk.adv.hideBannerAdv()
                                .then((function (e) {
                                    e.stickyAdvIsShowing || t._setBannerState(c.HIDDEN)
                                }))
                        }
                    }, {
                        key: 'showInterstitial',
                        value: function () {
                            var t = this
                            this._platformSdk.adv.showFullscreenAdv({
                                callbacks: {
                                    onOpen: function () {
                                        t._setInterstitialState(u.OPENED)
                                    },
                                    onClose: function (e) {
                                        e ? t._setInterstitialState(u.CLOSED) : t._setInterstitialState(u.FAILED)
                                    }
                                }
                            })
                        }
                    }, {
                        key: 'showRewarded',
                        value: function () {
                            var t = this
                            this._platformSdk.adv.showRewardedVideo({
                                callbacks: {
                                    onOpen: function () {
                                        t._setRewardedState(s.OPENED)
                                    },
                                    onRewarded: function () {
                                        t._setRewardedState(s.REWARDED)
                                    },
                                    onClose: function () {
                                        t._setRewardedState(s.CLOSED)
                                    },
                                    onError: function () {
                                        t._setRewardedState(s.FAILED)
                                    }
                                }
                            })
                        }
                    }, {
                        key: 'addToHomeScreen',
                        value: function () {
                            var t = this
                            if (!this.isAddToHomeScreenSupported) return Promise.reject()
                            var e = this._getPromiseDecorator(h)
                            return e || (e = this._createPromiseDecorator(h), this._platformSdk.shortcut.showPrompt()
                                .then((function (e) {
                                    'accepted' !== e.outcome ? t._rejectPromiseDecorator(h) : t._resolvePromiseDecorator(h)
                                }))
                                .catch((function (e) {
                                    t._rejectPromiseDecorator(h, e)
                                }))), e.promise
                        }
                    }, {
                        key: 'rate',
                        value: function () {
                            var t = this,
                                e = this._getPromiseDecorator(m)
                            return e || (e = this._createPromiseDecorator(m), this._platformSdk.feedback.canReview()
                                .then((function (e) {
                                    e.value ? t._platformSdk.feedback.requestReview()
                                        .then((function (e) {
                                            e.feedbackSent ? t._resolvePromiseDecorator(m) : t._rejectPromiseDecorator(m)
                                        }))
                                        .catch((function (e) {
                                            t._rejectPromiseDecorator(m, e)
                                        })) : t._rejectPromiseDecorator(m, e.reason)
                                }))
                                .catch((function (e) {
                                    t._rejectPromiseDecorator(m, e)
                                }))), e.promise
                        }
                    }, {
                        key: 'setLeaderboardScore',
                        value: function (t) {
                            var e = this
                            if (!this._isPlayerAuthorized) return Promise.reject()
                            if (!(mr(this, _r) && t && t.score && t.leaderboardName)) return Promise.reject()
                            var r = this._getPromiseDecorator(v)
                            return r || (r = this._createPromiseDecorator(v), 'string' == typeof t.score && (t.score = parseInt(t.score, 10)), mr(this, _r)
                                .setLeaderboardScore(t.leaderboardName, t.score)
                                .then((function () {
                                    e._resolvePromiseDecorator(v)
                                }))
                                .catch((function (t) {
                                    e._rejectPromiseDecorator(v, t)
                                }))), r.promise
                        }
                    }, {
                        key: 'getLeaderboardScore',
                        value: function (t) {
                            var e = this
                            if (!this._isPlayerAuthorized) return Promise.reject()
                            if (!mr(this, _r) || !t || !t.leaderboardName) return Promise.reject()
                            var r = this._getPromiseDecorator(b)
                            return r || (r = this._createPromiseDecorator(b), mr(this, _r)
                                .getLeaderboardPlayerEntry(t.leaderboardName)
                                .then((function (t) {
                                    e._resolvePromiseDecorator(b, t.score)
                                }))
                                .catch((function (t) {
                                    e._rejectPromiseDecorator(b, t)
                                }))), r.promise
                        }
                    }, {
                        key: 'getLeaderboardEntries',
                        value: function (t) {
                            var e = this
                            if (!mr(this, _r) || !t || !t.leaderboardName) return Promise.reject()
                            var r = this._getPromiseDecorator(g)
                            if (!r) {
                                r = this._createPromiseDecorator(g)
                                var n = {
                                    includeUser: !1,
                                    quantityAround: 5,
                                    quantityTop: 5
                                }
                                'boolean' == typeof t.includeUser && (n.includeUser = t.includeUser), 'string' == typeof t.quantityAround && (t.quantityAround = parseInt(t.quantityAround, 10)), 'number' == typeof t.quantityAround && (n.quantityAround = t.quantityAround), 'string' == typeof t.quantityTop && (t.quantityTop = parseInt(t.quantityTop, 10)), 'number' == typeof t.quantityTop && (n.quantityTop = t.quantityTop), mr(this, _r)
                                    .getLeaderboardEntries(t.leaderboardName, n)
                                    .then((function (t) {
                                        var r = null
                                        t && t.entries.length > 0 && (r = t.entries.map((function (t) {
                                            var e = [],
                                                r = t.player.getAvatarSrc('small'),
                                                n = t.player.getAvatarSrc('medium'),
                                                o = t.player.getAvatarSrc('large')
                                            return r && e.push(r), n && e.push(n), o && e.push(o), {
                                                id: t.player.uniqueID,
                                                score: t.score,
                                                rank: t.rank,
                                                name: t.player.publicName,
                                                photos: e
                                            }
                                        }))), e._resolvePromiseDecorator(g, r)
                                    }))
                                    .catch((function (t) {
                                        e._rejectPromiseDecorator(g, t)
                                    }))
                            }
                            return r.promise
                        }
                    }, {
                        key: 'purchase',
                        value: function (t) {
                            var e = this
                            if (!mr(this, Sr) || !t) return Promise.reject()
                            var r = this._getPromiseDecorator(w)
                            return r || (r = this._createPromiseDecorator(w), mr(this, Sr)
                                .purchase({ id: t })
                                .then((function (t) {
                                    e._resolvePromiseDecorator(w, t)
                                }))
                                .catch((function (t) {
                                    e._rejectPromiseDecorator(w, t)
                                }))), r.promise
                        }
                    }, {
                        key: 'getPaymentsPurchases',
                        value: function () {
                            var t = this
                            if (!mr(this, Sr)) return Promise.reject()
                            var e = this._getPromiseDecorator(_)
                            return e || (e = this._createPromiseDecorator(_), mr(this, Sr)
                                .getPurchases()
                                .then((function (e) {
                                    t._resolvePromiseDecorator(_, e)
                                }))
                                .catch((function (e) {
                                    t._rejectPromiseDecorator(_, e)
                                }))), e.promise
                        }
                    }, {
                        key: 'getPaymentsCatalog',
                        value: function () {
                            var t = this
                            if (!mr(this, Sr)) return Promise.reject()
                            var e = this._getPromiseDecorator(S)
                            return e || (e = this._createPromiseDecorator(S), mr(this, Sr)
                                .getCatalog()
                                .then((function (e) {
                                    t._resolvePromiseDecorator(S, e)
                                }))
                                .catch((function (e) {
                                    t._rejectPromiseDecorator(S, e)
                                }))), e.promise
                        }
                    }, {
                        key: 'consumePurchase',
                        value: function (t) {
                            var e = this
                            if (!mr(this, Sr) || !t) return Promise.reject()
                            var r = this._getPromiseDecorator(P)
                            return r || (r = this._createPromiseDecorator(P), mr(this, Sr)
                                .consumePurchase(t)
                                .then((function (t) {
                                    e._resolvePromiseDecorator(P, t)
                                }))
                                .catch((function (t) {
                                    e._rejectPromiseDecorator(P, t)
                                }))), r.promise
                        }
                    }]) && ar(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), E
                }(Fe)

                function Or(t) {
                    return Or = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, Or(t)
                }

                function kr(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, Ar(n.key), n)
                    }
                }

                function Ar(t) {
                    var e = function (t, e) {
                        if ('object' != Or(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != Or(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == Or(e) ? e : String(e)
                }

                function Dr() {
                    return Dr = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, r) {
                        var n = function (t, e) {
                            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ir(t));) 
                            return t
                        }(t, e)
                        if (n) {
                            var o = Object.getOwnPropertyDescriptor(n, e)
                            return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                        }
                    }, Dr.apply(this, arguments)
                }

                function Tr(t, e) {
                    return Tr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, Tr(t, e)
                }

                function jr(t) {
                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                    return t
                }

                function Ir(t) {
                    return Ir = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, Ir(t)
                }

                function Rr(t, e, r) {
                    !function (t, e) {
                        if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                    }(t, e), e.set(t, r)
                }

                function Lr(t, e, r) {
                    return function (t, e, r) {
                        if (e.set) {
                            e.set.call(t, r)
                        } else {
                            if (!e.writable) throw new TypeError('attempted to set read only private field')
                            e.value = r
                        }
                    }(t, Nr(t, e, 'set'), r), r
                }

                function Br(t, e) {
                    return function (t, e) {
                        return e.get ? e.get.call(t) : e.value
                    }(t, Nr(t, e, 'get'))
                }

                function Nr(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to ' + r + ' private field on non-instance')
                    return e.get(t)
                }

                var Cr = new WeakMap,
                    Mr = new WeakMap
                const Gr = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && Tr(t, e)
                    }(d, t)
                    var e,
                        r,
                        o,
                        i,
                        a = (o = d, i = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = Ir(o)
                            if (i) {
                                var r = Ir(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === Or(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return jr(t)
                            }(this, t)
                        })

                    function d() {
                        var t
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, d)
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n]
                        return Rr(jr(t = a.call.apply(a, [this].concat(r))), Cr, {
                            writable: !0,
                            value: null
                        }), Rr(jr(t), Mr, {
                            writable: !0,
                            value: !1
                        }), t
                    }

                    return e = d, (r = [{
                        key: 'platformId',
                        get: function () {
                            return n.CRAZY_GAMES
                        }
                    }, {
                        key: 'platformLanguage',
                        get: function () {
                            return Br(this, Cr) ? Br(this, Cr)
                                .countryCode
                                .toLowerCase() : Dr(Ir(d.prototype), 'platformLanguage', this)
                        }
                    }, {
                        key: 'deviceType',
                        get: function () {
                            if (Br(this, Cr)) {
                                var t = Br(this, Cr)
                                    .device
                                    .type
                                    .toLowerCase()
                                if ([f.DESKTOP, f.MOBILE, f.TABLET].includes(t)) return t
                            }
                            return Dr(Ir(d.prototype), 'deviceType', this)
                        }
                    }, {
                        key: 'isExternalLinksAllowed',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'initialize',
                        value: function () {
                            var t = this
                            if (this._isInitialized) return Promise.resolve()
                            var e = this._getPromiseDecorator(y)
                            return e || (e = this._createPromiseDecorator(y), ze('https://sdk.crazygames.com/crazygames-sdk-v1.js')
                                .then((function () {
                                    We('CrazyGames', 'CrazySDK', 'getInstance')
                                        .then((function () {
                                            t._platformSdk = window.CrazyGames.CrazySDK.getInstance(), t._platformSdk.addEventListener('initialized', (function (e) {
                                                Lr(t, Cr, e.userInfo), t._isInitialized = !0, t._resolvePromiseDecorator(y)
                                            })), t._platformSdk.addEventListener('adStarted', (function () {
                                                Br(t, Mr) ? t._setRewardedState(s.OPENED) : t._setInterstitialState(u.OPENED)
                                            })), t._platformSdk.addEventListener('adFinished', (function () {
                                                Br(t, Mr) ? (t._setRewardedState(s.REWARDED), t._setRewardedState(s.CLOSED)) : t._setInterstitialState(u.CLOSED)
                                            })), t._platformSdk.addEventListener('adError', (function () {
                                                Br(t, Mr) ? t._setRewardedState(s.FAILED) : t._setInterstitialState(u.FAILED)
                                            })), t._platformSdk.addEventListener('bannerRendered', (function () {
                                                t._setBannerState(c.SHOWN)
                                            })), t._platformSdk.addEventListener('bannerError', (function () {
                                                t._setBannerState(c.FAILED)
                                            })), t._defaultStorageType = l.LOCAL_STORAGE, t._isBannerSupported = !0, t._platformSdk.init()
                                        }))
                                }))), e.promise
                        }
                    }, {
                        key: 'sendMessage',
                        value: function (t) {
                            switch (t) {
                                case p.IN_GAME_LOADING_STARTED:
                                    return this._platformSdk.sdkGameLoadingStart(), Promise.resolve()
                                case p.IN_GAME_LOADING_STOPPED:
                                    return this._platformSdk.sdkGameLoadingStop(), Promise.resolve()
                                case p.GAMEPLAY_STARTED:
                                    return this._platformSdk.gameplayStart(), Promise.resolve()
                                case p.GAMEPLAY_STOPPED:
                                    return this._platformSdk.gameplayStop(), Promise.resolve()
                                case p.PLAYER_GOT_ACHIEVEMENT:
                                    return this._platformSdk.happytime(), Promise.resolve()
                                default:
                                    return Dr(Ir(d.prototype), 'sendMessage', this)
                                        .call(this, t)
                            }
                        }
                    }, {
                        key: 'showBanner',
                        value: function (t) {
                            t && t.containerId && 'string' == typeof t.containerId ? this._platformSdk.requestResponsiveBanner([t.containerId]) : this._setBannerState(c.FAILED)
                        }
                    }, {
                        key: 'hideBanner',
                        value: function () {
                            this._platformSdk.clearAllBanners(), this._setBannerState(c.HIDDEN)
                        }
                    }, {
                        key: 'showInterstitial',
                        value: function () {
                            Lr(this, Mr, !1), this._platformSdk.requestAd('midgame')
                        }
                    }, {
                        key: 'showRewarded',
                        value: function () {
                            Lr(this, Mr, !0), this._platformSdk.requestAd('rewarded')
                        }
                    }]) && kr(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), d
                }(Fe)

                function Fr(t) {
                    return Fr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, Fr(t)
                }

                function zr(t, e) {
                    var r = Object.keys(t)
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t)
                        e && (n = n.filter((function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function Wr(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {}
                        e % 2 ? zr(Object(r), !0)
                            .forEach((function (e) {
                                var n,
                                    o,
                                    i
                                n = t, o = e, i = r[e], (o = Hr(o)) in n ? Object.defineProperty(n, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : n[o] = i
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : zr(Object(r))
                            .forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }))
                    }
                    return t
                }

                function xr(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, Hr(n.key), n)
                    }
                }

                function Hr(t) {
                    var e = function (t, e) {
                        if ('object' != Fr(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != Fr(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == Fr(e) ? e : String(e)
                }

                function Vr() {
                    return Vr = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, r) {
                        var n = function (t, e) {
                            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ur(t));) 
                            return t
                        }(t, e)
                        if (n) {
                            var o = Object.getOwnPropertyDescriptor(n, e)
                            return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                        }
                    }, Vr.apply(this, arguments)
                }

                function Kr(t, e) {
                    return Kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, Kr(t, e)
                }

                function Yr(t) {
                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                    return t
                }

                function Ur(t) {
                    return Ur = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, Ur(t)
                }

                var qr = new WeakSet

                function Jr() {
                    var t = this
                    return this._playerId = this._platformSdk.options.player_id, this._isPlayerAuthorized = 'false' === this._platformSdk.options.guest, new Promise((function (e) {
                        t._platformSdk.getUsers([t._playerId], (function (r) {
                            if (r && 1 === r.length) {
                                var n = r[0]
                                t._playerName = n.full_name, '' !== n.avatar && (t._playerPhotos = [n.avatar])
                            }
                            e()
                        }))
                    }))
                }

                const Zr = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && Kr(t, e)
                    }(c, t)
                    var e,
                        r,
                        o,
                        i,
                        a = (o = c, i = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = Ur(o)
                            if (i) {
                                var r = Ur(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === Fr(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return Yr(t)
                            }(this, t)
                        })

                    function c() {
                        var t,
                            e,
                            r
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, c)
                        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
                        return function (t, e) {
                            if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                        }(e = Yr(t = a.call.apply(a, [this].concat(o))), r = qr), r.add(e), t
                    }

                    return e = c, (r = [{
                        key: 'platformId',
                        get: function () {
                            return n.ABSOLUTE_GAMES
                        }
                    }, {
                        key: 'isPlayerAuthorizationSupported',
                        get: function () {
                            return !0
                        }
                    }, {
                        key: 'initialize',
                        value: function () {
                            var t = this
                            if (this._isInitialized) return Promise.resolve()
                            var e = this._getPromiseDecorator(y)
                            return e || (e = this._createPromiseDecorator(y), ze('https://unpkg.com/@agru/sdk/dist/umd/index.min.js')
                                .then((function () {
                                    t._platformSdk = new window.AgRuSdk, t._platformSdk.on(window.AgRuSdkMethods.ShowCampaign, (function (e, r) {
                                        'rewarded' === e.type ? null === r ? e.status ? t._setRewardedState(s.OPENED) : (e.reward && t._setRewardedState(s.REWARDED), t._setRewardedState(s.CLOSED)) : t._setRewardedState(s.FAILED) : null === r ? e.status ? t._setInterstitialState(u.OPENED) : t._setInterstitialState(u.CLOSED) : t._setInterstitialState(u.FAILED)
                                    }))
                                    var e = function (t, e, r) {
                                        if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                                        return r
                                    }(t, qr, Jr)
                                        .call(t)
                                    Promise.all([e])
                                        .finally((function () {
                                            t._isInitialized = !0, t._defaultStorageType = t._isPlayerAuthorized ? l.PLATFORM_INTERNAL : l.LOCAL_STORAGE, t._resolvePromiseDecorator(y)
                                        }))
                                }))), e.promise
                        }
                    }, {
                        key: 'authorizePlayer',
                        value: function () {
                            var t = this
                            if (this._isPlayerAuthorized) return Promise.resolve()
                            var e = this._getPromiseDecorator(d)
                            return e || (e = this._createPromiseDecorator(d), this._platformSdk.authorize((function (e, r) {
                                null === r ? t._resolvePromiseDecorator(d) : t._rejectPromiseDecorator(d, r)
                            }))), e.promise
                        }
                    }, {
                        key: 'isStorageSupported',
                        value: function (t) {
                            return t === l.PLATFORM_INTERNAL || Vr(Ur(c.prototype), 'isStorageSupported', this)
                                .call(this, t)
                        }
                    }, {
                        key: 'isStorageAvailable',
                        value: function (t) {
                            return t === l.PLATFORM_INTERNAL ? this._isPlayerAuthorized : Vr(Ur(c.prototype), 'isStorageAvailable', this)
                                .call(this, t)
                        }
                    }, {
                        key: 'getDataFromStorage',
                        value: function (t, e) {
                            var r = this
                            return e === l.PLATFORM_INTERNAL ? new Promise((function (e, n) {
                                if (r._platformStorageCachedData) {
                                    if (Array.isArray(t)) {
                                        for (var o = [], i = 0; i < t.length; i++) {
                                            var a = void 0 === r._platformStorageCachedData[t[i]] ? null : r._platformStorageCachedData[t[i]]
                                            o.push(a)
                                        }
                                        return void e(o)
                                    }
                                    e(void 0 === r._platformStorageCachedData[t] ? null : r._platformStorageCachedData[t])
                                } else {
                                    r._isPlayerAuthorized ? r._platformSdk.getSaveData((function (o, i) {
                                        if (null === i) {
                                            if (r._platformStorageCachedData = o || {}, Array.isArray(t)) {
                                                for (var a = [], u = 0; u < t.length; u++) {
                                                    var s = void 0 === r._platformStorageCachedData[t[u]] ? null : r._platformStorageCachedData[t[u]]
                                                    a.push(s)
                                                }
                                                return void e(a)
                                            }
                                            e(void 0 === r._platformStorageCachedData[t] ? null : r._platformStorageCachedData[t])
                                        } else {
                                            n(i)
                                        }
                                    })) : n()
                                }
                            })) : Vr(Ur(c.prototype), 'getDataFromStorage', this)
                                .call(this, t, e)
                        }
                    }, {
                        key: 'setDataToStorage',
                        value: function (t, e, r) {
                            var n = this
                            return r === l.PLATFORM_INTERNAL ? new Promise((function (r, o) {
                                if (n._isPlayerAuthorized) {
                                    var i = null !== n._platformStorageCachedData ? Wr({}, n._platformStorageCachedData) : {}
                                    if (Array.isArray(t)) for (var a = 0; a < t.length; a++) i[t[a]] = e[a] else i[t] = e
                                    n._platformSdk.setSaveData(i, (function (t, e) {
                                        null === e && (n._platformStorageCachedData = i, r()), o(e)
                                    }))
                                } else {
                                    o()
                                }
                            })) : Vr(Ur(c.prototype), 'setDataToStorage', this)
                                .call(this, t, e, r)
                        }
                    }, {
                        key: 'deleteDataFromStorage',
                        value: function (t, e) {
                            var r = this
                            return e === l.PLATFORM_INTERNAL ? new Promise((function (e, n) {
                                if (r._isPlayerAuthorized) {
                                    var o = null !== r._platformStorageCachedData ? Wr({}, r._platformStorageCachedData) : {}
                                    if (Array.isArray(t)) for (var i = 0; i < t.length; i++) delete o[t[i]] else delete o[t]
                                    r._platformSdk.setSaveData(o, (function (t, i) {
                                        null === i && (r._platformStorageCachedData = o, e()), n(i)
                                    }))
                                } else {
                                    n()
                                }
                            })) : Vr(Ur(c.prototype), 'deleteDataFromStorage', this)
                                .call(this, t, e)
                        }
                    }, {
                        key: 'showInterstitial',
                        value: function () {
                            this._platformSdk.showCampaign('default')
                        }
                    }, {
                        key: 'showRewarded',
                        value: function () {
                            this._platformSdk.showCampaign('rewarded')
                        }
                    }]) && xr(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), c
                }(Fe)

                function Xr(t) {
                    return Xr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, Xr(t)
                }

                function Qr(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, $r(n.key), n)
                    }
                }

                function $r(t) {
                    var e = function (t, e) {
                        if ('object' != Xr(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != Xr(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == Xr(e) ? e : String(e)
                }

                function tn(t, e) {
                    return tn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t
                    }, tn(t, e)
                }

                function en(t) {
                    if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
                    return t
                }

                function rn(t) {
                    return rn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, rn(t)
                }

                function nn(t, e, r) {
                    return function (t, e, r) {
                        if (e.set) {
                            e.set.call(t, r)
                        } else {
                            if (!e.writable) throw new TypeError('attempted to set read only private field')
                            e.value = r
                        }
                    }(t, an(t, e, 'set'), r), r
                }

                function on(t, e) {
                    return function (t, e) {
                        return e.get ? e.get.call(t) : e.value
                    }(t, an(t, e, 'get'))
                }

                function an(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to ' + r + ' private field on non-instance')
                    return e.get(t)
                }

                var un = new WeakMap
                const sn = function (t) {
                    !function (t, e) {
                        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function')
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, 'prototype', { writable: !1 }), e && tn(t, e)
                    }(f, t)
                    var e,
                        r,
                        o,
                        i,
                        a = (o = f, i = function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                            if (Reflect.construct.sham) return !1
                            if ('function' == typeof Proxy) return !0
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                }))), !0
                            } catch (t) {
                                return !1
                            }
                        }(), function () {
                            var t,
                                e = rn(o)
                            if (i) {
                                var r = rn(this).constructor
                                t = Reflect.construct(e, arguments, r)
                            } else {
                                t = e.apply(this, arguments)
                            }
                            return function (t, e) {
                                if (e && ('object' === Xr(e) || 'function' == typeof e)) return e
                                if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
                                return en(t)
                            }(this, t)
                        })

                    function f() {
                        var t,
                            e,
                            r,
                            n
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, f)
                        for (var o = arguments.length, i = new Array(o), u = 0; u < o; u++) i[u] = arguments[u]
                        return e = en(t = a.call.apply(a, [this].concat(i))), n = {
                            writable: !0,
                            value: !1
                        }, function (t, e) {
                            if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                        }(e, r = un), r.set(e, n), t
                    }

                    return e = f, (r = [{
                        key: 'platformId',
                        get: function () {
                            return n.GAME_DISTRIBUTION
                        }
                    }, {
                        key: 'initialize',
                        value: function () {
                            if (this._isInitialized) return Promise.resolve()
                            var t = this._getPromiseDecorator(y)
                            if (!t) {
                                if (t = this._createPromiseDecorator(y), this._options && 'string' == typeof this._options.gameId) {
                                    var e = this
                                    window.GD_OPTIONS = {
                                        gameId: this._options.gameId,
                                        onEvent: function (t) {
                                            switch (t.name) {
                                                case'SDK_READY':
                                                    e._platformSdk = window.gdsdk, e._platformSdk.preloadAd('rewarded'), e._isInitialized = !0, e._resolvePromiseDecorator(y)
                                                    break
                                                case'SDK_GAME_START':
                                                    on(e, un) ? e._setRewardedState(s.CLOSED) : e._setInterstitialState(u.CLOSED)
                                                    break
                                                case'SDK_GAME_PAUSE':
                                                    on(e, un) ? e._setRewardedState(s.OPENED) : e._setInterstitialState(u.OPENED)
                                                    break
                                                case'SDK_REWARDED_WATCH_COMPLETE':
                                                    e._setRewardedState(s.REWARDED)
                                            }
                                        }
                                    }, this._defaultStorageType = l.LOCAL_STORAGE, this._isBannerSupported = !0, ze('https://html5.api.gamedistribution.com/main.min.js')
                                } else {
                                    this._rejectPromiseDecorator(y, k)
                                }
                            }
                            return t.promise
                        }
                    }, {
                        key: 'showBanner',
                        value: function (t) {
                            var e = this
                            t && t.containerId && 'string' == typeof t.containerId ? this._platformSdk.showAd('display', { containerId: t.containerId })
                                .then((function () {
                                    e._setBannerState(c.SHOWN)
                                }))
                                .catch((function () {
                                    e._setBannerState(c.FAILED)
                                })) : this._setBannerState(c.FAILED)
                        }
                    }, {
                        key: 'hideBanner',
                        value: function () {
                            this._setBannerState(c.HIDDEN)
                        }
                    }, {
                        key: 'showInterstitial',
                        value: function () {
                            var t = this
                            nn(this, un, !1), this._platformSdk ? this._platformSdk.showAd()
                                .catch((function () {
                                    t._setInterstitialState(u.FAILED)
                                })) : this._setInterstitialState(u.FAILED)
                        }
                    }, {
                        key: 'showRewarded',
                        value: function () {
                            var t = this
                            nn(this, un, !0), this._platformSdk ? this._platformSdk.showAd('rewarded')
                                .catch((function () {
                                    t._setRewardedState(s.FAILED)
                                })) : this._setRewardedState(s.FAILED)
                        }
                    }]) && Qr(e.prototype, r), Object.defineProperty(e, 'prototype', { writable: !1 }), f
                }(Fe)

                function cn(t) {
                    return cn = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                    }, cn(t)
                }

                function ln(t, e) {
                    var r = Object.keys(t)
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t)
                        e && (n = n.filter((function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function fn(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r]
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, pn(n.key), n)
                    }
                }

                function pn(t) {
                    var e = function (t, e) {
                        if ('object' != cn(t) || !t) return t
                        var r = t[Symbol.toPrimitive]
                        if (void 0 !== r) {
                            var n = r.call(t, 'string')
                            if ('object' != cn(n)) return n
                            throw new TypeError('@@toPrimitive must return a primitive value.')
                        }
                        return String(t)
                    }(t)
                    return 'symbol' == cn(e) ? e : String(e)
                }

                function yn(t, e) {
                    hn(t, e), e.add(t)
                }

                function dn(t, e, r) {
                    hn(t, e), e.set(t, r)
                }

                function hn(t, e) {
                    if (e.has(t)) throw new TypeError('Cannot initialize the same private elements twice on an object')
                }

                function mn(t, e, r) {
                    return function (t, e, r) {
                        if (e.set) {
                            e.set.call(t, r)
                        } else {
                            if (!e.writable) throw new TypeError('attempted to set read only private field')
                            e.value = r
                        }
                    }(t, gn(t, e, 'set'), r), r
                }

                function vn(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance')
                    return r
                }

                function bn(t, e) {
                    return function (t, e) {
                        return e.get ? e.get.call(t) : e.value
                    }(t, gn(t, e, 'get'))
                }

                function gn(t, e, r) {
                    if (!e.has(t)) throw new TypeError('attempted to ' + r + ' private field on non-instance')
                    return e.get(t)
                }

                t = r.hmd(t)
                var _n = new WeakMap,
                    Sn = new WeakMap,
                    wn = new WeakMap,
                    Pn = new WeakMap,
                    En = new WeakMap,
                    On = new WeakSet,
                    kn = new WeakSet

                function An() {
                    var t = n.MOCK
                    if (this._options && this._options.forciblySetPlatformId) {
                        switch (this._options.forciblySetPlatformId) {
                            case n.VK:
                                t = n.VK
                                break
                            case n.YANDEX:
                                t = n.YANDEX
                                break
                            case n.CRAZY_GAMES:
                                t = n.CRAZY_GAMES
                                break
                            case n.ABSOLUTE_GAMES:
                                t = n.ABSOLUTE_GAMES
                                break
                            case n.GAME_DISTRIBUTION:
                                t = n.GAME_DISTRIBUTION
                                break
                            default:
                                t = n.MOCK
                        }
                    } else {
                        var e = new URL(window.location.href),
                            r = ['y', 'a', 'n', 'd', 'e', 'x', '.', 'n', 'e', 't'].join('')
                        e.hostname.includes(r) || e.hash.includes('yandex') ? t = n.YANDEX : e.hostname.includes('crazygames.') || e.hostname.includes('1001juegos.com') ? t = n.CRAZY_GAMES : e.hostname.includes('gamedistribution.com') ? t = n.GAME_DISTRIBUTION : e.searchParams.has('api_id') && e.searchParams.has('viewer_id') && e.searchParams.has('auth_key') ? t = n.VK : e.searchParams.has('app_id') && e.searchParams.has('player_id') && e.searchParams.has('game_sid') && e.searchParams.has('auth_key') && (t = n.ABSOLUTE_GAMES)
                    }
                    switch (t) {
                        case n.VK:
                            mn(this, wn, new rr(this._options && this._options.platforms && this._options.platforms[n.VK]))
                            break
                        case n.YANDEX:
                            mn(this, wn, new Er(this._options && this._options.platforms && this._options.platforms[n.YANDEX]))
                            break
                        case n.CRAZY_GAMES:
                            mn(this, wn, new Gr(this._options && this._options.platforms && this._options.platforms[n.CRAZY_GAMES]))
                            break
                        case n.ABSOLUTE_GAMES:
                            mn(this, wn, new Zr(this._options && this._options.platforms && this._options.platforms[n.ABSOLUTE_GAMES]))
                            break
                        case n.GAME_DISTRIBUTION:
                            mn(this, wn, new sn(this._options && this._options.platforms && this._options.platforms[n.GAME_DISTRIBUTION]))
                            break
                        default:
                            mn(this, wn, new Fe)
                    }
                }

                function Dn(t) {
                    return bn(this, _n) || console.error(E), bn(this, En)[t] ? bn(this, En)[t] : bn(this, Pn)[t]
                }

                const Tn = function () {
                    function e() {
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
                        }(this, e), yn(this, kn), yn(this, On), dn(this, _n, {
                            writable: !0,
                            value: !1
                        }), dn(this, Sn, {
                            writable: !0,
                            value: null
                        }), dn(this, wn, {
                            writable: !0,
                            value: null
                        }), dn(this, Pn, {
                            writable: !0,
                            value: {}
                        }), dn(this, En, {
                            writable: !0,
                            value: {}
                        })
                    }

                    var r,
                        y
                    return r = e, y = [{
                        key: 'version',
                        get: function () {
                            return '1.10.1'
                        }
                    }, {
                        key: 'isInitialized',
                        get: function () {
                            return bn(this, _n)
                        }
                    }, {
                        key: 'platform',
                        get: function () {
                            return vn(this, kn, Dn)
                                .call(this, o.PLATFORM)
                        }
                    }, {
                        key: 'player',
                        get: function () {
                            return vn(this, kn, Dn)
                                .call(this, o.PLAYER)
                        }
                    }, {
                        key: 'game',
                        get: function () {
                            return vn(this, kn, Dn)
                                .call(this, o.GAME)
                        }
                    }, {
                        key: 'storage',
                        get: function () {
                            return vn(this, kn, Dn)
                                .call(this, o.STORAGE)
                        }
                    }, {
                        key: 'advertisement',
                        get: function () {
                            return vn(this, kn, Dn)
                                .call(this, o.ADVERTISEMENT)
                        }
                    }, {
                        key: 'social',
                        get: function () {
                            return vn(this, kn, Dn)
                                .call(this, o.SOCIAL)
                        }
                    }, {
                        key: 'device',
                        get: function () {
                            return vn(this, kn, Dn)
                                .call(this, o.DEVICE)
                        }
                    }, {
                        key: 'leaderboard',
                        get: function () {
                            return vn(this, kn, Dn)
                                .call(this, o.LEADERBOARD)
                        }
                    }, {
                        key: 'payments',
                        get: function () {
                            return vn(this, kn, Dn)
                                .call(this, o.PAYMENTS)
                        }
                    }, {
                        key: 'PLATFORM_ID',
                        get: function () {
                            return n
                        }
                    }, {
                        key: 'PLATFORM_MESSAGE',
                        get: function () {
                            return p
                        }
                    }, {
                        key: 'MODULE_NAME',
                        get: function () {
                            return o
                        }
                    }, {
                        key: 'EVENT_NAME',
                        get: function () {
                            return i
                        }
                    }, {
                        key: 'INTERSTITIAL_STATE',
                        get: function () {
                            return u
                        }
                    }, {
                        key: 'REWARDED_STATE',
                        get: function () {
                            return s
                        }
                    }, {
                        key: 'BANNER_STATE',
                        get: function () {
                            return c
                        }
                    }, {
                        key: 'STORAGE_TYPE',
                        get: function () {
                            return l
                        }
                    }, {
                        key: 'VISIBILITY_STATE',
                        get: function () {
                            return a
                        }
                    }, {
                        key: 'DEVICE_TYPE',
                        get: function () {
                            return f
                        }
                    }, {
                        key: 'initialize',
                        value: function (t) {
                            var e = this
                            return bn(this, _n) ? Promise.resolve() : (bn(this, Sn) || (mn(this, Sn, new M), this._options = function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {}
                                    e % 2 ? ln(Object(r), !0)
                                        .forEach((function (e) {
                                            var n,
                                                o,
                                                i
                                            n = t, o = e, i = r[e], (o = pn(o)) in n ? Object.defineProperty(n, o, {
                                                value: i,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : n[o] = i
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ln(Object(r))
                                        .forEach((function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                        }))
                                }
                                return t
                            }({}, t), vn(this, On, An)
                                .call(this), bn(this, wn)
                                .initialize()
                                .then((function () {
                                    bn(e, Pn)[o.PLATFORM] = new U(bn(e, wn)), bn(e, Pn)[o.PLAYER] = new $(bn(e, wn)), bn(e, Pn)[o.GAME] = new st(bn(e, wn)), bn(e, Pn)[o.STORAGE] = new vt(bn(e, wn)), bn(e, Pn)[o.ADVERTISEMENT] = new ae(bn(e, wn)), bn(e, Pn)[o.SOCIAL] = new pe(bn(e, wn)), bn(e, Pn)[o.DEVICE] = new be(bn(e, wn)), bn(e, Pn)[o.LEADERBOARD] = new Ee(bn(e, wn)), bn(e, Pn)[o.PAYMENTS] = new je(bn(e, wn)), mn(e, _n, !0), console.info('%c InstantGamesBridge v.'.concat(e.version, ' initialized. '), 'background: #01A5DA; color: white'), bn(e, Sn) && (bn(e, Sn)
                                        .resolve(), mn(e, Sn, null))
                                }))), bn(this, Sn).promise)
                        }
                    }, {
                        key: 'overrideModule',
                        value: function (e, r) {
                            'object' === cn(r) && (bn(this, En)[e] = r, 'function' == typeof r.initialize && r.initialize(t))
                        }
                    }], y && fn(r.prototype, y), Object.defineProperty(r, 'prototype', { writable: !1 }), e
                }()
            },
            258: t => {
                !function (e) {
                    t.exports = e
                    var r = 'listeners',
                        n = {
                            on: function (t, e) {
                                return a(this, t)
                                    .push(e), this
                            },
                            once: function (t, e) {
                                var r = this
                                return n.originalListener = e, a(r, t)
                                    .push(n), r

                                function n() {
                                    i.call(r, t, n), e.apply(this, arguments)
                                }
                            },
                            off: i,
                            emit: function (t, e) {
                                var r = this,
                                    n = a(r, t, !0)
                                if (!n) return !1
                                var o = arguments.length
                                if (1 === o) {
                                    n.forEach((function (t) {
                                        t.call(r)
                                    }))
                                } else if (2 === o) {
                                    n.forEach((function (t) {
                                        t.call(r, e)
                                    }));
                                } else {
                                    var i = Array.prototype.slice.call(arguments, 1);
                                    n.forEach((function (t) {
                                        t.apply(r, i)
                                    }))
                                }
                                return !!n.length
                            }
                        };

                    function o(t) {
                        for (var e in n) t[e] = n[e];
                        return t
                    }

                    function i(t, e) {
                        var n,
                            o = this;
                        if (arguments.length) {
                            if (e) {
                                if (n = a(o, t, !0)) {
                                    if (!(n = n.filter((function (t) {
                                        return t !== e && t.originalListener !== e
                                    }))).length) {
                                        return i.call(o, t);
                                    }
                                    o[r][t] = n
                                }
                            } else if ((n = o[r]) && (delete n[t], !Object.keys(n).length)) return i.call(o)
                        } else {
                            delete o[r];
                        }
                        return o
                    }

                    function a(t, e, n) {
                        if (!n || t[r]) {
                            var o = t[r] || (t[r] = {});
                            return o[e] || (o[e] = [])
                        }
                    }

                    o(e.prototype), e.mixin = o
                }((function t() {
                    if (!(this instanceof t)) return new t
                }))
            }
        },
        e = {};

    function r(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var i = e[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return t[n](i, i.exports, r), i.loaded = !0, i.exports
    }

    r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, { a: e }), e
    }, r.d = (t, e) => {
        for (var n in e) {
            r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
        }
    }, r.hmd = t => ((t = Object.create(t)).children || (t.children = []), Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
        }
    }), t), r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";
        var t = r(522);
        window.bridge = new t.Z, window.instantGamesBridge = window.bridge
    })()
})();
