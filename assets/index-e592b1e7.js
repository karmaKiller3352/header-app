import { importShared } from './__federation_fn_import.js';
import HeaderApp, { j as jsx } from './__federation_expose_HeaderApp-6b6df94c.js';
import { r as reactDomExports } from './index-938c67f9.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(HeaderApp, {}) })
);
