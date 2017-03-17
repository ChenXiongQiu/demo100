(function (window) {
    //工厂函数，隐藏new创建对象
    var jqmi = function (selector) {};

    jqmi.fn = jqmi.prototype = {
        // 版本号
        jqmi: '1.0.0',

        // 默认长度为：0
        length: 0,

        constructor: jqmi,

        // 真正的构造函数
        init: function (selector) {
            // 1 处理不合法值：null/undefined/0/false/''
            if (!selector) {
                return this;
            }

            // 2 参数为string 类型
            else if (jqmi.istring(selector)) {
                if (selector.charAt(0) === '<') {
                    // html字符串
                    [].push.apply(this, parseHTML(selector));
                } else {
                    // 选择器的情况
                    [].push.apply(this, document.querySelectorAll(selector));
                    this.selector = selector;
                }
            }

            // 3 參數為函數：入口函數
            else if (jqmi.isFunction(selector)) {
                document.addEventListener('DOMContentLoaded', selector);
            }

            // 4 参数为 DOM对象
            else if (jqmi.isDOM(selector)) {
                this[0] = selector;
                this.length = 1;
                return this;
            }

            // 5 参数为数组 或 伪数组 或 jqmi对象
            else if (jqmi.isArrayLike(selector)) {
                // 将为数组中的每个元素 都放到this
                [].push.apply(this, selector);
                if (selector.selector) {
                    this.selector = selector.selector;
                }
            }
        },

        // 将this伪数组转化为： 正数组
        toArray: function () {
            return [].slice.call(this);
        },

        //将jqmi对象转化为DOM对象
        get: function (index) {
            if (index == null) {
                return this.toArray();
            }
            index = index >= 0 ? index : (this.length + index);
            return this[index];
        },

        eq: function (index) {
            return this.pushStack(this.get(index));
        },

        first: function (index) {
            return this.eq(0);
        },

        last: function (index) {
            return this.eq(-1);
        },

        end: function (index) {
            // this.constructor() 为了避免获取不到proveObject而报错
            return this.prevObject || this.constructor();
        },

        pushStack: function (arr) {
            var newIObj = jqmi(arr);
            newIObj.prevObject = this;

            return newIObj;
        },

        // 原型长得像 数组的原型
        push: [].push,
        sort: [].sort,
        splice: [].splice
    };

    // 因为在沙箱的外部只能够访问到jqmi函数
    jqmi.prototype.init.prototype = jqmi.prototype;

    //扩展方法
    jqmi.fn.extend = jqmi.extend = function (obj) {
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                this.[k] = obj[k];
            }
        }
    }

    // 将html 字符串转化为DOM对象（集合）
    var parseHTML = function (htmlSring) {
        var container = document.createElement('div');
        container.innerHTML = htmlSring;
        return container.children;
    };

    // 静态方法 each/map/trim
    jqmi.extend({
        each: function (obj, callback) {
            var i, length;
            if (jqmi.isArrayLike(obj)) {

                for (i = 0, length = obj.length; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }
            return obj;
        },
        map: function (obj, callback) {
            var i, temp, ret = [];
            if (jqmi.isArrayLike(obj)) {

                for (i = 0; i < obj.length; i++) {
                    temp = callback(obj[i], i);
                    if (temp != null) {
                        ret.push(temp);
                    }
                }
            } else {

                for (i in obj) {
                    temp = callback(obj[i], i);
                    if (temp != null) {
                        ret.push(temp);
                    }
                }
            }
            return ret;
        },

        // 去除字符串两端的空格
        trim: function (str) {
            if (string.prototype.trim) {
                return str.trim();
            }
            return str.replace(/^\s+|\s+$/g, '');
        }
    });

    // 实例方法 each
    jqmi.prototype.extend({
        each: function (callback) {
            return jqmi.each(this, callback);
        },
        map: function (callback) {
            var ret = jqmi.map(this, function (value, index) {
                return callback.call(value, index, value);
            });
            return this.pushStack(ret);
        }
    });

    // 类型判断模块
    jqmi.extend({
        isString: function (obj) {
            return typeof obj === 'string';
        },
        isFunction: function (obj) {
            return typeof obj === 'function';
        },
        isDOM: function (obj) {
            return obj && !!obj.nodeType;
        },
        isWindow: function (obj) {
            return !!obj && obj.window === obj;
        },
        isArrayLike: function (obj) {
            if (jqmi.isFunction(obj) || jqmi.isWindow(obj)) {
                return false;
            }
            if ('length' in obj && obj.length >= 0) {
                return true;
            }
            return false;
        }
    });

    // 获取指定元素的上一个元素节点
    var getPrevElm = function (node) {
        while (node = node.nextSibling) {
            if (node.nodeType === 1) {
                return node;
            }
        }
        return null;
    };

    // 获取指定元素的下一个元素节点
    var getNextElm = function (node) {
        while (node = node.previousSibling) {
            if (node.nodeType === 1) {
                return node;
            }
        }
        return null;
    };

    // 获取指定元素后面所有的元素节点
    var getNextAllElms = function (node) {
        var ret = [];
        while (node = node.nextSibling) {
            if (node.nodeType === 1) {
                ret.push(node);
            }
        }
        return ret;
    };

    var getPrevAllElms = function (node) {
        var ret = [];
        while (node = node.previousSibling) {
            if (node.nodeType === 1) {

                ret.push(node);
            }
        }
        return ret;
    };

    // DOM 操作模块
    jqmi.fn.extend({

        appendTo: function (node) {
            var srcElms = this,
                tarElms = jqmi(node),
                tarLength = tarElms.length,
                tempNode = null,
                ret = [];
            tarElms.each(function (index) {
                var that = this;
                srcElms.each(function () {
                    tempNode = (index === tarLength - 1) ? this : this.cloneNode(true);
                    that.appendChild(tempNode);
                    ret.push(tempNode);
                });
            });
            return this.pushStack(ret);
        },
        // 追加元素
        // jqmi('div').append('p')
        append: function (node) {
            jqmi(node).appendTo(this);

            // 因为这个方法, 没有破坏链, 所以, 只需要将 this 返回即可!
            return this;
        },

        // 插入元素
        prependTo: function (node) {
            var srcElms = this,
                tarElms = jqmi(node),
                tarLength = tarElms.length,
                tempNode = null,
                ret = [];

            tarElms.each(function (index, value) {
                // 目的: 为了处理插入元素的顺序!
                var first = value.firstChild;

                srcElms.each(function () {
                    tempNode = (index === tarLength - 1) ? this : this.cloneNode(true);

                    value.insertBefore(tempNode, first);
                    ret.push(tempNode);
                })
            });

            return this.pushStack(ret);
        },

        // 插入元素
        prepend: function (node) {
            jqmi(node).prependTo(this);

            return this;
        },

        // 获取下一个兄弟元素
        next: function () {
            // this 就是 jqmi对象 
            return this.map(function () {
                return getNextElm(this);
            });
        },

        // 获取上一个兄弟元素
        prev: function () {
            return this.map(function () {

                return getPrevElm(this);
            })
        },

        // 获取后面所有的兄弟元素
        nextAll: function () {
            var ret = [];
            this.each(function () {
                var temp = getNextAllElms(this);

                jqmi.each(temp, function () {
                    (ret.indexOf(this) < 0) && ret.push(this);
                });
            });

            return this.pushStack(ret);
        },

        // 获取前面所有的兄弟元素
        prevAll: function () {
            var ret = [];
            this.each(function () {
                var temp = getPervAllElms(this);
                jqmi.each(temp, function () {
                    (ret.indexOf(this) < 0) && ret.push(this);
                });

            });

            return this.pushStack(ret);
        }

    });

    // 事件操作模块
    jqmi.fn.extend({
        on: function (eventType, callback) {
            return this.each(function () {
                this.addEventListener(eventType, callback, false);
            });
        },
        off: function (eventType, callback) {
            return this.each(function () {
                this.removeEventListener(eventType, callback);
            });
        }
    });

    // 统一实现所有其他绑定事件的方法：
    jqmi.each(('blur focus focusin focusout load resize scroll unload click dblclick ' +
        'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' +
        'change select submit keydown keypress keyup error contextmenu').split(' '), function (i, v) {
        // 注意：此处的 this 是字符串类型的包装对象，
        // 			 所以，需要使用参数 v
        jqmi.fn[v] = function (callback) {
            return this.on(v, callback);
        };
    });


    // 类操作模块
    jqmi.fn.extend({
        css: function (name, value) {
            if (arguments.length === 2) {
                return this.each(function () {
                    this.style[name] = value;
                });
            }
            if (jqmi.isString(name)) {
                if (window.getComputedStyle) {
                    return window.getComputedStyle(this.get(0))[name];
                } else {
                    return this.get(0).currentStyle[name];
                }
            } else {
                return this.each(function () {
                    var that = this;

                    jqmi.each(name, function (key, v) {
                        that.style[key] = v;
                    });
                });
            }
        },

        hasClass: function (clsName) {
            var flag = false;

            this.each(function () {
                if ((' ' + this.className + ' ').indexOf(' ' + clsName + ' ') > -1) {
                    flag = true;
                    return false;
                }
            });

            return flag;
        },

        addClass: function (clsName) {
            return this.each(function () {
                if (!jqmi(this).hasClass(clsName)) {
                    this.className = jqmi.trim(this.className + ' ' + clsName);
                }
            });
        },

        removeClass: function (clsName) {
            return this.each(function () {
                var classStr = ' ' + this.className + ' ';
                while (classStr.indexOf(' ' + clsName + ' ') > -1) {
                    classStr = classStr.replace(' ' + clsName + ' ', ' ');
                }

                this.className = jqmi.trim(classStr);
            });
        },

        toggleClass: function (clsName) {

            return this.each(function () {
                var temp = jqmi(this);

                // 分别判断每一个元素有没有指定的类
                if (temp.hasClass(clsName)) {
                    temp.removeClass(clsName);
                } else {
                    temp.addClass(clsName);
                }
            });
        }
    });

    // 属性操作模块
    jqmi.fn.extend({

    });


    // 暴露 jqmi
    window.J = window.jqmi = jqmi;
})(window);