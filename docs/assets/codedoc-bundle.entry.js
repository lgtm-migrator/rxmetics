import { getRenderer } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/runner/work/rxmetics/rxmetics/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { zoomOnFormula } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/formula/zoom-on-formula.js';zoomOnFormula();
import { TabSelector } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { ToCPrevNext } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/runner/work/rxmetics/rxmetics/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  '1jRPqh+WQG0iu/YC0zINNA==': TabSelector,
  'MwQEFXoMv2UDPaEP+3md/g==': ToCPrevNext,
  'SF47b37tslC9vrhoKixP3Q==': GithubSearch,
  'LRK/aXdaU3eXWAfzZPcvUA==': ToCToggle,
  'iD0soMlKsE0h7ecpRlDDzA==': DarkModeSwitch,
  'dpOkBfEPS+sy8+CLeNK1Nw==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
