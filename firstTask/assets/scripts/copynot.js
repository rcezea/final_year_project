function _0x861b() {
  const _0x571f39 = [
    "Correct\x20this\x20to\x20excel\x20formulas:\x0a\x0a.",
    "POST",
    "https://api.openai.com/v1/completions",
    "Loading\x20text...",
    "424594InhAyG",
    "onstart",
    "1050PbcoCJ",
    "innerHTML",
    "application/json",
    "#result",
    "110gJUWxm",
    "189rXrWtY",
    "onresult",
    "transcript",
    "choices",
    "entry",
    "34794qDfCQz",
    "14496OzQkYl",
    "text",
    "start",
    "stringify",
    "#entry",
    "Listening...",
    "val",
    "text-davinci-003",
    "results",
    "click",
    "585018AwTHBu",
    "#convert-button",
    "195018tlRQYy",
    "getElementById",
    "Bearer\x20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",
    "5190000AuWjuh",
    "1130095btVxYa",
  ];
  _0x861b = function () {
    return _0x571f39;
  };
  return _0x861b();
}
const _0x3b6355 = _0x2fff;
function _0x2fff(_0x5e4df8, _0x35d11a) {
  const _0x861bd8 = _0x861b();
  return (
    (_0x2fff = function (_0x2fff90, _0x120891) {
      _0x2fff90 = _0x2fff90 - 0x180;
      let _0x56d613 = _0x861bd8[_0x2fff90];
      return _0x56d613;
    }),
    _0x2fff(_0x5e4df8, _0x35d11a)
  );
}
(function (_0x19c0a3, _0x5ea545) {
  const _0x4725e3 = _0x2fff,
    _0x32296e = _0x19c0a3();
  while (!![]) {
    try {
      const _0x169332 =
        -parseInt(_0x4725e3(0x182)) / 0x1 +
        -parseInt(_0x4725e3(0x199)) / 0x2 +
        (-parseInt(_0x4725e3(0x184)) / 0x3) *
          (-parseInt(_0x4725e3(0x18f)) / 0x4) +
        parseInt(_0x4725e3(0x19f)) / 0x5 +
        (parseInt(_0x4725e3(0x19b)) / 0x6) *
          (parseInt(_0x4725e3(0x189)) / 0x7) +
        -parseInt(_0x4725e3(0x19e)) / 0x8 +
        (parseInt(_0x4725e3(0x18e)) / 0x9) *
          (-parseInt(_0x4725e3(0x188)) / 0xa);
      if (_0x169332 === _0x5ea545) break;
      else _0x32296e["push"](_0x32296e["shift"]());
    } catch (_0x569eac) {
      _0x32296e["push"](_0x32296e["shift"]());
    }
  }
})(_0x861b, 0xeb425),
  $("#microphone-button")["on"](_0x3b6355(0x198), function () {
    runSpeechRecog = () => {
      const _0x421aab = _0x2fff;
      $(_0x421aab(0x18d))[_0x421aab(0x195)](_0x421aab(0x181));
      var _0x2074f7 = document[_0x421aab(0x19c)]("entry");
      let _0x4db1da = new webkitSpeechRecognition();
      (_0x4db1da[_0x421aab(0x183)] = () => {
        const _0xd6be0 = _0x421aab;
        _0x2074f7[_0xd6be0(0x185)] = _0xd6be0(0x194);
      }),
        (_0x4db1da[_0x421aab(0x18a)] = (_0x35bee8) => {
          const _0x8dd23e = _0x421aab;
          _0x2074f7[_0x8dd23e(0x185)] =
            _0x35bee8[_0x8dd23e(0x197)][0x0][0x0][_0x8dd23e(0x18b)];
        }),
        _0x4db1da[_0x421aab(0x191)]();
    };
  }),
  $(_0x3b6355(0x19a))["on"](_0x3b6355(0x198), function () {
    const _0x371b84 = _0x3b6355;
    let _0x3ebd59 = $(_0x371b84(0x193))[_0x371b84(0x195)]();
    conversion(_0x3ebd59);
  });
function conversion(_0x48f866) {
  const _0x49af96 = _0x3b6355,
    _0x43af83 = {
      async: !![],
      crossDomain: !![],
      url: _0x49af96(0x180),
      method: _0x49af96(0x1a1),
      headers: {
        "Content-Type": _0x49af96(0x186),
        Authorization: _0x49af96(0x19d),
      },
      processData: ![],
      data: JSON[_0x49af96(0x192)]({
        model: _0x49af96(0x196),
        prompt: _0x49af96(0x1a0) + _0x48f866,
        temperature: 0x0,
        max_tokens: 0x3c,
        top_p: 0x1,
        frequency_penalty: 0x0,
        presence_penalty: 0x0,
      }),
    };
  $["ajax"](_0x43af83)["done"](function (_0x22c89d) {
    const _0x467fa7 = _0x49af96;
    console["log"](_0x22c89d),
      $(_0x467fa7(0x187))["val"](
        _0x22c89d[_0x467fa7(0x18c)][0x0][_0x467fa7(0x190)]
      );
  });
}
