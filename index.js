const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { default: generate } = require('@babel/generator');

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
const { code } = generate(ast);
console.log(code); // 'const x = 1;'
