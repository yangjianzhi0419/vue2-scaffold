/**
 * 工具集
 *
 */
const tool = {}

// localStorage
tool.data = {
    set(key, settings) {
        const _set = JSON.stringify(settings)
        return localStorage.setItem(key, _set)
    },
    get(key) {
        let data = localStorage.getItem(key)
        try {
            data = JSON.parse(data)
        } catch (err) {
            return null
        }
        return data
    },
    remove(key) {
        return localStorage.removeItem(key)
    },
    clear() {
        return localStorage.clear()
    }
}

export default tool
