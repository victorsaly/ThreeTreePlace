import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { getQuery, createError, appendResponseHeader, getResponseStatusText, getResponseStatus } from 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/h3/dist/index.mjs';
import { stringify, uneval } from 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/devalue/index.js';
import { joinURL, withoutTrailingSlash } from 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/ufo/dist/index.mjs';
import { propsToString, renderSSRHead } from 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/@unhead/ssr/dist/index.mjs';
import { d as defineRenderHandler, b as buildAssetsURL, p as publicAssetsURL, u as useStorage, g as getRouteRules, a as useRuntimeConfig, c as useNitroApp } from '../nitro/nitro.mjs';
import { createServerHead as createServerHead$1, CapoPlugin } from 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/unhead/dist/index.mjs';
import { unref, version } from 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/vue/index.mjs';
import { defineHeadPlugin } from 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/destr/dist/index.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/hookable/dist/index.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/klona/dist/index.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/defu/dist/defu.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/scule/dist/index.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/radix3/dist/index.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/pathe/dist/index.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/GitHub/ThreeTreePlace/threetreeplace/node_modules/ohash/dist/index.mjs';

const Vue3 = version[0] === "3";

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref) {
  if (ref instanceof Promise || ref instanceof Date || ref instanceof RegExp)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = true ? [CapoPlugin({ track: true })] : [];

const renderSSRHeadOptions = {"omitLineBreaks":false};

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Discover Three Tree Place, Hertfordshire’s premier serviced accommodation for businesses, contractors, and landlords."},{"hid":"keywords","name":"keywords","content":"serviced accommodation, Hertfordshire, business rentals, contractor housing, UK rentals"},{"property":"og:title","content":"Three Tree Place - Serviced Accommodation in Hertfordshire"},{"property":"og:description","content":"Discover Three Tree Place, Hertfordshire’s premier serviced accommodation for businesses, contractors, and landlords."},{"property":"og:image","content":"https://threetreeplace.victorsaly.com/images/logo.png"},{"property":"og:url","content":"https://threetreeplace.victorsaly.com"},{"property":"og:type","content":"website"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:title","content":"Three Tree Place - Serviced Accommodation in Hertfordshire"},{"name":"twitter:description","content":"Discover Three Tree Place, Hertfordshire’s premier serviced accommodation for businesses, contractors, and landlords."},{"name":"twitter:image","content":"https://threetreeplace.victorsaly.com/images/logo.png"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/images/favicon.ico"},{"rel":"canonical","href":"https://threetreeplace.victorsaly.com"}],"style":[],"script":[{"type":"application/ld+json","innerHTML":"{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Three Tree Place\",\"url\":\"https://threetreeplace.victorsaly.com\",\"logo\":\"https://threetreeplace.victorsaly.com/images/logo.png\",\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"info@threetreeplace.com\",\"contactType\":\"Customer Service\"}}"}],"noscript":[],"title":"Three Tree Place - Serviced Accommodation in Hertfordshire"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const componentIslands = false;

const appId = "nuxt-app";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('../build/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await import('../virtual/_virtual_spa-template.mjs').then((r) => r.template).catch(() => "").then((r) => {
    {
      return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const payloadCache = useStorage("internal:nuxt:prerender:payload") ;
useStorage("internal:nuxt:prerender:island") ;
useStorage("internal:nuxt:prerender:island-props") ;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const PAYLOAD_URL_RE = /\/_payload.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = Number.parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = componentIslands;
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && true;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
    if (await payloadCache.hasItem(url)) {
      return payloadCache.getItem(url);
    }
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: true,
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set(),
    islandContext
  };
  const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && true;
  const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, url, "_payload.json" ) + "?" + ssrContext.runtimeConfig.app.buildId : void 0;
  {
    ssrContext.payload.prerenderedAt = Date.now();
  }
  const renderer = await getSPARenderer() ;
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    {
      await payloadCache.setItem(url, response2);
    }
    return response2;
  }
  if (_PAYLOAD_EXTRACTION) {
    appendResponseHeader(event, "x-nitro-prerender", joinURL(url, "_payload.json" ));
    await payloadCache.setItem(withoutTrailingSlash(url), renderPayloadResponse(ssrContext));
  }
  const inlinedStyles = [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (_PAYLOAD_EXTRACTION && !NO_SCRIPTS && true) {
    head.push({
      link: [
        { rel: "preload", as: "fetch", crossorigin: "anonymous", href: payloadURL } 
      ]
    }, headEntryOptions);
  }
  if (ssrContext._preloadManifest) {
    head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    head.push({ style: inlinedStyles });
  }
  {
    const link = [];
    for (const resource of Object.values(styles)) {
      {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      head.push({ link }, headEntryOptions);
    }
  }
  if (!NO_SCRIPTS && true) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: _PAYLOAD_EXTRACTION ? renderPayloadJsonScript({ ssrContext, data: splitPayload(ssrContext).initial, src: payloadURL })  : renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && true) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head, renderSSRHeadOptions);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      _rendered.html,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": false
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

export { renderer as default };
//# sourceMappingURL=renderer.mjs.map
