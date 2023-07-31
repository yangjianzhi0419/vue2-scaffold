/**
 *  添加全局功能
 */
import config from '@/config'
import tool from "@/utils/tool";

export default {
    install(Vue) {
        Vue.prototype.$CONFIG = config;
        Vue.prototype.$TOOL = tool;

        // test: 测试用的token
        tool.data.set("TOKEN", "test");
    }
}
