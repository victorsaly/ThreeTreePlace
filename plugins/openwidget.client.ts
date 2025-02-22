interface OpenWidgetWindow extends Window {
  OpenWidget: any;
  __ow?: {
    organizationId?: string;
    integration_name?: string;
    product_name?: string;
    asyncInit?: boolean;
    OpenWidget: {
      _q: any[];
      _h: ((...args: any[]) => any) | null;
      _v: string;
      on: () => void;
      once: () => void;
      off: () => void;
      get: () => void;
      call: () => void;
      init: () => void;
    };
  };
}

declare var window: OpenWidgetWindow;

export default defineNuxtPlugin(() => {
    window.__ow = window.__ow || { OpenWidget: { _q: [], _h: null, _v: "2.0", on: () => {}, once: () => {}, off: () => {}, get: () => {}, call: () => {}, init: () => {} } };
    window.__ow.organizationId = "9585badf-8a1f-455f-827b-28254a8d5297";
    window.__ow.integration_name = "manual_settings";
    window.__ow.product_name = "openwidget";   
    (function(n, t, c) {
      function i(n: (string | never[])[]) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e: { _q: any[], _h: ((...args: any[]) => any) | null, _v: string, on: () => void, once: () => void, off: () => void, get: () => void, call: () => void, init: () => void } = { _q: [], _h: null, _v: "2.0", on: function() { i(["on", c.call(arguments)]) }, once: function() { i(["once", c.call(arguments)]) }, off: function() { i(["off", c.call(arguments)]) }, get: function() { if (!e._h) throw new Error("[OpenWidget] You can't use getters before load."); return i(["get", c.call(arguments)]) }, call: function() { i(["call", c.call(arguments)]) }, init: function() { var n = t.createElement("script"); n.async = !0, n.type = "text/javascript", n.src = "https://cdn.openwidget.com/openwidget.js", t.head.appendChild(n) } };
      n.__ow && !n.__ow.asyncInit && e.init(), n.OpenWidget = n.OpenWidget || e;
    })(window, document, [].slice);
  });