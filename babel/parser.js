import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import babelParser from '@babel/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let code = fs.readFileSync(path.resolve(__dirname, './vallina.js'), {
    encoding: 'utf-8',
});

// ====> start
fs.writeFileSync(
    path.resolve(__dirname, './output/output.json'),
    JSON.stringify(babelParser.parse(code), null, 4),
    {
        encoding: 'utf-8',
    }
);
console.log('====> 生成原生 JS 虚拟语法树成功');
// ====> end

// ====> start
code = fs.readFileSync(path.resolve(__dirname, './react.jsx'), {
    encoding: 'utf-8',
});

fs.writeFileSync(
    path.resolve(__dirname, './output/react-jsx.json'),
    JSON.stringify(babelParser.parse(code, {
        sourceType: 'module',
        plugins: [
            'jsx',
        ],
    }), null, 4),
    {
        encoding: 'utf-8',
    }
);
console.log('====> 生成 React JSX 虚拟语法树成功');
// ====> end
