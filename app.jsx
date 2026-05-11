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
  const [activeCase, setActiveCase] = useState('all');
  const [activeStage, setActiveStage] = useState(null);
  const [caseOpen, setCaseOpen] = useState(false);
  const [openArticleTitle, setOpenArticleTitle] = useState(null);

  const handleSetCase = (id) => {
    setActiveCase(id);
    setTimeout(() => setCaseOpen(false), 80);
  };
  const handleResetAll = (mode) => {
    if (mode === 'case') setActiveCase('all');
    else { setActiveCase('all'); setActiveStage(null); }
  };

  const headerTitle = tab === 'about' ? 'О проекте' : 'ВНЖ Норвегии';
  const article = openArticleTitle && ARTICLES.find(a => a.title === openArticleTitle);

  return (
    <div className="tg-app" ref={rootRef}>
      <TgHeader
        title={headerTitle}
        showLeadingSpacer
        actions={
          <>
            {showSearch && <button className="tg-icon-btn" aria-label="Поиск"><IconSearch width="22" height="22" /></button>}
            <button className="tg-icon-btn" aria-label="Меню"><IconMore width="22" height="22" /></button>
          </>
        }
      />

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
          actions={<button className="tg-icon-btn" aria-label="Поделиться">
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
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

  // Если приложение открыто внутри Telegram — initData будет непустой строкой
  const isInTelegram = Boolean(window.Telegram?.WebApp?.initData);

  useEffect(() => {
    if (!isInTelegram) return;
    const tg = window.Telegram.WebApp;
    tg.ready();   // говорим Telegram «приложение загружено, убери лоадер»
    tg.expand();  // разворачиваем на весь экран
  }, []);

  // Внутри Telegram — рендерим только само приложение, без рамки и панели
  if (isInTelegram) {
    const isDark = window.Telegram?.WebApp?.colorScheme === 'dark';
    return <MiniApp tweaks={{ ...TWEAK_DEFAULTS, dark: isDark }} />;
  }

  // В браузере — оставляем дизайн-стенд с рамкой и панелью настроек
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
