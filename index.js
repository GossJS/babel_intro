const { parse } = require('@babel/parser');
const { default: generate } = require('@babel/generator');
const { default: traverse } = require('@babel/traverse');

const code = 'const n = 1';

// парсим код в ast
const ast = parse(code);

// изменяем ast
traverse(ast, {
  enter(path) {
    // в этом примере мы меняем все переменные `n` на `x`
    if (path.isIdentifier({ name: 'n' })) {
      path.node.name = 'x';
    }
  },
});

// генерируем код обратно из ast
const output = generate(ast, code);
console.log(output.code); // 'const x = 1;'
