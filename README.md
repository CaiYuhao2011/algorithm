# 仓库概览

这是一个算法与示例代码存放仓库，包含若干练习、示例和小工具，便于本地运行与学习。

主要目录结构（摘要）：

- `leetcode/`：LeetCode 练习和数据结构实现（如链表、优先队列、哈希表等）。
- `babel/`：Babel 解析相关脚本和输出文件夹。
- `recursion/`：递归相关的示例代码（如数组遍历、阶乘等）。

如何运行常见示例：

- 运行 Babel 解析脚本（需先安装依赖）

```bash
# 安装依赖（若未安装）
npm install

# 运行解析脚本（示例）
node babel/parser.js
```

- 运行数据结构示例：

```bash
# 运行优先队列示例
node leetcode/PriorityQueue.js

# 运行递归示例
node recursion/factorial.js
```

代理说明（摘要）

本仓库已在本地配置 Git HTTP/HTTPS 代理（仅对本仓库生效）：

- HTTP 代理: `http://127.0.0.1:7890`
- HTTPS 代理: `https://127.0.0.1:7890`

仓库级配置命令（仅针对本仓库）：

```bash
git config --local http.proxy http://127.0.0.1:7890
git config --local https.proxy https://127.0.0.1:7890
```

撤销代理：

```bash
git config --local --unset http.proxy
git config --local --unset https.proxy
```

## 开源协议

本项目采用 **ISC License** 开源协议。

ISC 许可证是一个宽松的开源许可证，允许你自由地使用、复制、修改和分发本项目的代码，无论是用于商业还是非商业目的，只需保留版权声明即可。

详细许可内容请查看 [LICENSE](./LICENSE) 文件。

## 贡献

欢迎基于该仓库学习和改进。如有问题或建议，欢迎提出 Issue 或 Pull Request。
