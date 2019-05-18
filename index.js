// 为防止变量污染，将 NiceError 放在 global.$JBDAP 命名空间下
global.$JBDAP.NiceError = require('./lib/NiceError')
// 在 global 下标记模块加载情况，方便判断
global.JBDAP_NICE_ERROR_OK = true
// 也允许导出模块供调用者自行决定如何使用
module.exports = require('./lib/NiceError')