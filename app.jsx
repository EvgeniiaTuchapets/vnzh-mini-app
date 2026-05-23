// === MAIN APP v5 ===
// Telegram Android Mini App — refactored to use the v5 token system + M3 header.
// Tweaks: accent, density, dark mode, article variant.

const { useState, useEffect, useMemo, useRef, useCallback } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "blue",
  "density": "regular",
  "dark": false,
  "variant": "badge",
  "showSearch": false,
  "stageStyle": "tinted"
}/*EDITMODE-END*/;

// ──────────────────────────────────────────────────────────
// Material 3 header — back button + title + trailing actions
// ──────────────────────────────────────────────────────────
function TgHeader({ title, onBack, actions, showLeadingSpacer }) {
  return (
    <header className="tg-header" role="banner">
      {onBack ? (
        <button className="tg-header-back" onClick={onBack} aria-label="Назад">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : showLeadingSpacer ? <div className="tg-header-leading-spacer" /> : null}
      <h1 className="tg-header-title">{title}</h1>
      {actions && <div className="tg-header-actions">{actions}</div>}
    </header>
  );
}

const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
    <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconMore = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);

// ──────────────────────────────────────────────────────────
// Mini App body
// ──────────────────────────────────────────────────────────
function MiniApp({ tweaks }) {
  const { accent, density, dark, variant, showSearch } = tweaks;
  const rootRef = useRef(null);

  // Apply tweaks at the .tg-app scope (CSS vars only — no JS color math)
  useEffect(() => {
    const el = rootRef.current; if (!el) return;
    el.dataset.theme = dark ? 'dark' : 'light';
    el.dataset.accent = accent;
    el.dataset.density = density;
    el.dataset.stageStyle = tweaks.stageStyle || 'solid';
  }, [accent, density, dark, tweaks.stageStyle]);

  const [tab, setTab] = useState('home');
  const [activeCase, setActiveCase] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('case');
    if (fromUrl && CASES.find(c => c.id === fromUrl)) return fromUrl;
    const saved = localStorage.getItem('vnzh_active_case');
    if (saved && CASES.find(c => c.id === saved)) return saved;
    return 'all';
  });
  const [activeStage, setActiveStage] = useState(null);
  const [caseOpen, setCaseOpen] = useState(false);
  const [openArticleTitle, setOpenArticleTitle] = useState(null);
  const [shareCopied, setShareCopied] = useState(false);

  // Deep link: ?article=<id> при открытии
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('article');
    if (articleId) {
      const a = ARTICLES.find(a => a.id === articleId);
      if (a) setOpenArticleTitle(a.title);
    }
  }, []);

  // Обновляет URL при открытии/закрытии статьи
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (openArticleTitle) {
      const a = ARTICLES.find(a => a.title === openArticleTitle);
      if (a) params.set('article', a.id); else params.delete('article');
    } else {
      params.delete('article');
    }
    const q = params.toString();
    history.replaceState(null, '', q ? '?' + q : window.location.pathname);
  }, [openArticleTitle]);

  // Применяет смену кейса: обновляет state, localStorage и URL
  const applyCaseChange = (id) => {
    setActiveCase(id);
    if (id === 'all') localStorage.removeItem('vnzh_active_case');
    else localStorage.setItem('vnzh_active_case', id);
    const params = new URLSearchParams(window.location.search);
    if (id === 'all') params.delete('case'); else params.set('case', id);
    const q = params.toString();
    history.replaceState(null, '', q ? '?' + q : window.location.pathname);
  };

  const handleSetCase = (id) => {
    applyCaseChange(id);
    setTimeout(() => setCaseOpen(false), 80);
  };
  const handleResetAll = (mode) => {
    if (mode === 'case') applyCaseChange('all');
    else { applyCaseChange('all'); setActiveStage(null); }
  };

  const article = openArticleTitle && ARTICLES.find(a => a.title === openArticleTitle);

  return (
    <div className="tg-app" ref={rootRef}>

      {tab === 'home' && (
        <MainScreen
          activeCase={activeCase}
          activeStage={activeStage}
          onOpenCase={() => setCaseOpen(true)}
          onSetStage={setActiveStage}
          onOpenArticle={(title) => setOpenArticleTitle(title)}
          onResetAll={handleResetAll}
          articleVariant={variant}
        />
      )}
      {tab === 'about' && <AboutScreen />}

      {/* Case selection overlay */}
      <div className={`overlay ${caseOpen ? 'is-open' : ''}`}>
        <TgHeader title="Выбор кейса" onBack={() => setCaseOpen(false)} />
        <CaseScreen activeCase={activeCase} onSelect={handleSetCase} />
      </div>

      {/* Article overlay */}
      <div className={`overlay ${openArticleTitle ? 'is-open' : ''}`}>
        <TgHeader
          title={article ? article.title : ''}
          onBack={() => setOpenArticleTitle(null)}
          actions={<button className="tg-icon-btn" aria-label="Поделиться" onClick={() => {
            if (!article) return;
            const base = window.location.origin + window.location.pathname;
            const url = `${base}?article=${article.id}`;
            if (navigator.share) {
              navigator.share({ title: article.title, url }).catch(() => { });
            } else {
              navigator.clipboard?.writeText(url);
              setShareCopied(true);
              setTimeout(() => setShareCopied(false), 1500);
            }
          }}>
            {shareCopied
              ? <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M5 12l5 5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              : <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
            }
          </button>}
        />
        {openArticleTitle && <ArticleView title={openArticleTitle} />}
      </div>

      <nav className="tg-tabbar" role="navigation">
        <button className={`tg-tab ${tab === 'home' ? 'is-active' : ''}`} onClick={() => setTab('home')}>
          <span className="tg-tab-icon">📚</span>
          <span className="tg-tab-label">Главная</span>
        </button>
        <button className={`tg-tab ${tab === 'about' ? 'is-active' : ''}`} onClick={() => setTab('about')}>
          <span className="tg-tab-icon">ℹ️</span>
          <span className="tg-tab-label">О проекте</span>
        </button>
      </nav>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// App shell (with Tweaks panel)
// ──────────────────────────────────────────────────────────
const ACCENT_SWATCHES = ['blue', 'norwegian', 'crimson', 'royal'];
const ACCENT_LABELS = { blue: 'Синий (TG)', norwegian: 'Норвежский', crimson: 'Малиновый', royal: 'Сиреневый' };

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Telegram заполняет initData только когда приложение открыто прямо в нём
  const isInTelegram = Boolean(window.Telegram?.WebApp?.initData);
  // На localhost — режим дизайн-стенда (рамка, панель настроек)
  const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;
    tg.ready();   // говорим Telegram «приложение загружено, убери лоадер»
    tg.expand();  // разворачиваем на весь экран
  }, []);

  // На GitHub Pages или в Telegram — рендерим только само приложение, без рамки
  if (!isLocalDev) {
    const isDark = window.Telegram?.WebApp?.colorScheme === 'dark';
    return <MiniApp tweaks={{ ...TWEAK_DEFAULTS, dark: isDark }} />;
  }

  // На localhost — оставляем дизайн-стенд с рамкой и панелью настроек
  return (
    <>
      <div className="stage-title">
        <strong>База знаний</strong> · ВНЖ Норвегии — Android hi-fi · v5
      </div>

      <div className="stage" data-theme={t.dark ? 'dark' : 'light'}>
        <div>
          <div className="frame-label">Android · {t.dark ? 'dark' : 'light'} · {t.density}</div>
          <AndroidDevice width={390} height={780} dark={t.dark}>
            <MiniAppMemo tweaks={t} />
          </AndroidDevice>
        </div>
      </div>

      <TweaksPanel>
        <TweakSection label="Тема" />
        <TweakToggle label="Тёмная" value={t.dark} onChange={(v) => setTweak('dark', v)} />
      </TweaksPanel>
    </>
  );
}

const MiniAppMemo = React.memo(MiniApp);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
