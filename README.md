# babel_intro
вводный пример по транспиляции

здесь самый низкоуровневый вариант, вручную забираются парсер, обходчик и генератор.

для забирания используется чистый require, поэтому сценарий запускается прямо в node без всяких дополнительных настроек.

вручную реализованный обходчик меняет меняет все переменные `n` на `x`

В отличие от замены текстовым редактором работа происходит не с вхождениями символа x, а именно валидными идентификаторами, которые разобрал парсер.

```yarn && node .```

см. также ветку modules, где вместо require используется import, но это не работает с нативной модульностью, поэтому добавлены preset-env, core и babel-node для транспиляции кода самого сценария.
