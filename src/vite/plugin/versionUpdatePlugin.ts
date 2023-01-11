import type { Plugin, ResolvedConfig } from 'vite'
import path from 'path'
import fs from 'node:fs'

const writeVersion = (versionFile: string, content: string) => {
  fs.writeFile(versionFile, content, (err) => {
    if (err) throw err
  })
}

function createVersionPlugin(options: { version: string | number }): Plugin {
  let config: ResolvedConfig

  return {
    name: 'version-update',

    configResolved(resolvedConfig) {
      // 储存最终解析的配置
      config = resolvedConfig
    },

    buildStart() {
      // 生成版本信息文件路径
      const file = config.publicDir + path.sep + 'version.json'
      // 这里使用编译时间作为版本号
      const content = JSON.stringify({ version: options.version })

      if (fs.existsSync(config.publicDir)) {
        writeVersion(file, content)
      } else {
        fs.mkdir(config.publicDir, (err) => {
          if (err) throw err
          writeVersion(file, content)
        })
      }
    }
  }
}

export { createVersionPlugin }

export default createVersionPlugin
