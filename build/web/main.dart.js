// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const theme = flutter_sdk.src__material__theme;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const text_button = flutter_sdk.src__material__text_button;
  const text_style = flutter_sdk.src__painting__text_style;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    }
  }, false);
  var C = [void 0];
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Инкремент", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.purple}), home: new main.IncrementPage.new()});
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.IncrementPage = class IncrementPage extends framework.StatefulWidget {
    createState() {
      return new main._IncrementPageState.new();
    }
    static ['_#new#tearOff']() {
      return new main.IncrementPage.new();
    }
  };
  (main.IncrementPage.new = function() {
    main.IncrementPage.__proto__.new.call(this);
    ;
  }).prototype = main.IncrementPage.prototype;
  dart.addTypeTests(main.IncrementPage);
  dart.addTypeCaches(main.IncrementPage);
  dart.setMethodSignature(main.IncrementPage, () => ({
    __proto__: dart.getMethods(main.IncrementPage.__proto__),
    createState: dart.fnType(main._IncrementPageState, [])
  }));
  dart.setLibraryUri(main.IncrementPage, I[0]);
  var _counter = dart.privateName(main, "_counter");
  var _incrementCounter = dart.privateName(main, "_incrementCounter");
  var _decrementCounter = dart.privateName(main, "_decrementCounter");
  var _resetCounter = dart.privateName(main, "_resetCounter");
  main._IncrementPageState = class _IncrementPageState extends framework.State$(main.IncrementPage) {
    [_incrementCounter]() {
      this.setState(dart.fn(() => {
        this[_counter] = this[_counter] + 1;
      }, T.VoidTovoid()));
    }
    [_decrementCounter]() {
      this.setState(dart.fn(() => {
        this[_counter] = this[_counter] - 1;
      }, T.VoidTovoid()));
    }
    [_resetCounter]() {
      this.setState(dart.fn(() => {
        this[_counter] = 0;
      }, T.VoidTovoid()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Инкремент")}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new text.Text.new("Значение инкремента:", {style: theme.Theme.of(context).textTheme.headline4}), new text.Text.new(dart.str(this[_counter]), {style: theme.Theme.of(context).textTheme.headline4}), new basic.SizedBox.new({height: 20}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new elevated_button.ElevatedButton.new({onPressed: dart.bind(this, _decrementCounter), child: new icon.Icon.new(icons.Icons.remove), style: elevated_button.ElevatedButton.styleFrom({primary: colors.Colors.red})}), new basic.SizedBox.new({width: 10}), new elevated_button.ElevatedButton.new({onPressed: dart.bind(this, _incrementCounter), child: new icon.Icon.new(icons.Icons.add), style: elevated_button.ElevatedButton.styleFrom({primary: colors.Colors.green})})])}), new basic.SizedBox.new({height: 20}), new text_button.TextButton.new({onPressed: dart.bind(this, _resetCounter), child: new text.Text.new("Сбросить", {style: new text_style.TextStyle.new({color: colors.Colors.grey})}), style: text_button.TextButton.styleFrom({backgroundColor: colors.Colors.transparent})})])})})});
    }
    static ['_#new#tearOff']() {
      return new main._IncrementPageState.new();
    }
  };
  (main._IncrementPageState.new = function() {
    this[_counter] = 0;
    main._IncrementPageState.__proto__.new.call(this);
    ;
  }).prototype = main._IncrementPageState.prototype;
  dart.addTypeTests(main._IncrementPageState);
  dart.addTypeCaches(main._IncrementPageState);
  dart.setMethodSignature(main._IncrementPageState, () => ({
    __proto__: dart.getMethods(main._IncrementPageState.__proto__),
    [_incrementCounter]: dart.fnType(dart.void, []),
    [_decrementCounter]: dart.fnType(dart.void, []),
    [_resetCounter]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._IncrementPageState, I[0]);
  dart.setFieldSignature(main._IncrementPageState, () => ({
    __proto__: dart.getFields(main._IncrementPageState.__proto__),
    [_counter]: dart.fieldType(core.int)
  }));
  main.main = function main$0() {
    binding.runApp(new main.MyApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;UC/C4B;AACxB,YAAO,iCACE,oBACA,yCACiB,8BAElB;IAEV;;;;;;;;EACF;;;;;;;;;;AAIuC;IAAqB;;;;;;;;EAC5D;;;;;;;;;;;;;;AAQM,MAFF,cAAS;AACG,QAAV,iBAAA,AAAQ,iBAAA;;IAEZ;;AAKI,MAFF,cAAS;AACG,QAAV,iBAAA,AAAQ,iBAAA;;IAEZ;;AAKI,MAFF,cAAS;AACK,QAAZ,iBAAW;;IAEf;UAG0B;AACxB,YAAO,oCACG,+BACC,kBAAK,sBAER,6BACG,yCACgC,yCACnB,wBAChB,kBACE,gCACa,AAAY,AAAU,eAAnB,OAAO,yBAEzB,kBACa,SAAT,yBACW,AAAY,AAAU,eAAnB,OAAO,yBAEzB,gCAAiB,MACjB,sCACuC,yCAC3B,wBACR,6DACa,iCACJ,kBAAW,4BACI,mDAA0B,uBAElD,+BAAgB,MAChB,6DACa,iCACJ,kBAAW,yBACI,mDAA0B,6BAItD,gCAAiB,MACjB,qDACa,6BACJ,kBACL,oBACO,qCAAwB,+BAEf,mDACQ;IAOtC;;;;;;IAtEI,iBAAW;;;EAuEjB;;;;;;;;;;;;;;;;AA7FiB,IAAf,eAAO;EACT;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
