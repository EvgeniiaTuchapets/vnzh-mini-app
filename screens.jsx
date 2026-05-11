// === SCREENS: Main, Case Selection, Article, About === v5
// Tokens-only: zero inline HEX. Accents come from CSS var --case-{id}-text / -bg.

const { useState, useMemo, useEffect, useRef } = React;

// --- Helpers ---
function formatDate(s) {
  if (!s) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) {
    const [y, m, d] = s.split('-');
    return `${d}.${m}.${y}`;
  }
  return s;
}
function pluralize(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
}
function getArticleStages(a) { return a.stages || (a.stage ? [a.stage] : []); }
function getPrimaryStage(a) { const arr = getArticleStages(a); return arr[0] || 'other'; }
function caseById(id) { return CASES.find((c) => c.id === id); }
function stageById(id) { return STAGES.find((s) => s.id === id); }

// CSS-var-based icon style for a case (no hex anywhere)
function caseIconVars(caseId) {
  return {
    '--icon-bg':  `var(--case-${caseId}-bg)`,
    '--icon-fg':  `var(--case-${caseId}-text)`,
  };
}
function caseChipVars(caseId) {
  return {
    '--chip-bg':   `var(--case-${caseId}-bg)`,
    '--chip-text': `var(--case-${caseId}-text)`,
  };
}

// --- Tags row that fits a single line, collapsing extras into "+N" ---
function FittingTags({ tags }) {
  const ref = React.useRef(null);
  const [count, setCount] = React.useState(tags.length);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const fit = () => {
      const containerW = el.clientWidth;
      if (!containerW) return;
      const children = Array.from(el.children);
      children.forEach((c) => c.style.display = '');
      if (el.scrollWidth <= containerW + 1) { setCount(tags.length); return; }
      const total = tags.length;
      let n = total - 1;
      while (n >= 0) {
        children.forEach((c, i) => {
          if (i < n) c.style.display = '';
          else if (i < total) c.style.display = 'none';
          else c.style.display = '';
        });
        if (el.scrollWidth <= containerW + 1) break;
        n--;
      }
      setCount(Math.max(0, n));
    };
    raf = requestAnimationFrame(fit);
    const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fit); });
    ro.observe(el);
    return () => { ro.disconnect(); cancelAnimationFrame(raf); };
  }, [tags]);

  const hidden = Math.max(0, tags.length - count);
  return (
    <div className="article-card-tags" ref={ref}>
      {tags.map((t, i) =>
        <Tag key={i} kind={t.k} dataStage={t.s}>{t.icon ? `${t.icon} ` : ''}{t.label}</Tag>
      )}
      <Tag kind="more" style={{ visibility: hidden > 0 ? 'visible' : 'hidden', display: hidden > 0 ? '' : 'none' }}>+{hidden}</Tag>
    </div>
  );
}

function Tag({ kind, dataStage, children, style }) {
  return <span className={`tg-tag tg-tag-${kind}`} data-stage={dataStage} style={style}>{children}</span>;
}

// --- Main Screen ---
function MainScreen({ activeCase, activeStage, onOpenCase, onSetStage, onOpenArticle, onResetAll, articleVariant }) {
  const filtered = useMemo(() => ARTICLES.filter((a) => {
    const cm = activeCase === 'all' || a.cases.includes(activeCase);
    const sm = !activeStage || getArticleStages(a).includes(activeStage);
    return cm && sm;
  }), [activeCase, activeStage]);

  const countForStage = (sid) => ARTICLES.filter((a) => {
    const cm = activeCase === 'all' || a.cases.includes(activeCase);
    return cm && getArticleStages(a).includes(sid);
  }).length;

  const c = caseById(activeCase);
  const s = activeStage ? stageById(activeStage) : null;
  const hasFilter = activeCase !== 'all' || !!activeStage;

  return (
    <div className="screen">
      {/* Filter chips */}
      <div className={`filters-bar ${hasFilter ? 'has-chips' : ''}`}>
        {!hasFilter && <span className="filters-empty">Все статьи</span>}
        {activeCase !== 'all' && (
          <button className="active-chip" style={caseChipVars(activeCase)} onClick={() => onResetAll('case')}>
            <span>{c.icon}</span><span>{c.short}</span>
            <span className="active-chip-x">×</span>
          </button>
        )}
        {activeStage && (
          <button className="active-chip" onClick={() => onSetStage(null)}>
            <span>{s.icon}</span><span>{s.short}</span>
            <span className="active-chip-x">×</span>
          </button>
        )}
        {hasFilter && <button className="reset-all" onClick={() => onResetAll('all')}>Сброс</button>}
      </div>

      <div className="scroll-area">
        <SectionHeader>Ваш кейс</SectionHeader>
        <button className="tg-cell case-cell" onClick={onOpenCase}>
          <div className="case-cell-icon" style={caseIconVars(activeCase)}>{c.icon}</div>
          <div className="tg-cell-body">
            <div className="tg-cell-title">{c.name}</div>
            <div className="tg-cell-subtitle">
              {activeCase === 'all' ? 'Нажмите, чтобы выбрать' : 'Изменить кейс'}
            </div>
          </div>
          <div className="tg-cell-action">›</div>
        </button>

        <SectionHeader>Этапы</SectionHeader>
        <div className="stages-grid">
          {STAGES.slice(0, 4).map((st) => {
            const n = countForStage(st.id);
            return (
              <button key={st.id}
                className={`stage-card ${activeStage === st.id ? 'is-active' : ''}`}
                data-stage={st.id}
                style={{
                  '--stage-tint':    `var(--stage-${st.id}-text)`,
                  '--stage-tint-bg': `var(--stage-${st.id}-bg)`,
                }}
                onClick={() => onSetStage(activeStage === st.id ? null : st.id)}>
                <span className="stage-card-icon">{st.icon}</span>
                <span className="stage-card-name">{st.name}</span>
                <span className="stage-card-count">{n} {pluralize(n, 'статья', 'статьи', 'статей')}</span>
              </button>
            );
          })}
        </div>
        <button
          className={`stage-card stage-card--wide ${activeStage === 'other' ? 'is-active' : ''}`}
          data-stage="other"
          style={{
            '--stage-tint':    'var(--stage-other-text)',
            '--stage-tint-bg': 'var(--stage-other-bg)',
          }}
          onClick={() => onSetStage(activeStage === 'other' ? null : 'other')}>
          <span className="stage-card-icon">💭</span>
          <span className="stage-card-name">Другое</span>
          <span className="stage-card-count">
            {countForStage('other')} {pluralize(countForStage('other'), 'статья', 'статьи', 'статей')}
          </span>
        </button>

        <div className="articles-header">
          <SectionHeader inline>Статьи</SectionHeader>
          <span className="articles-count">
            {filtered.length} {pluralize(filtered.length, 'статья', 'статьи', 'статей')}
          </span>
        </div>

        {filtered.length === 0
          ? <EmptyState onReset={() => onResetAll('all')} />
          : (
            <div className="articles-list">
              {filtered.map((a) =>
                <ArticleCard key={a.title} a={a} activeStage={activeStage}
                  variant={articleVariant} onClick={() => onOpenArticle(a.title)} />
              )}
            </div>
          )}

        <div style={{ height: 24 }} />
      </div>
    </div>
  );
}

function SectionHeader({ children, inline }) {
  return <div className={`section-header ${inline ? 'section-header--inline' : ''}`}>{children}</div>;
}

// --- Article Card ---
function ArticleCard({ a, activeStage, variant = 'badge', onClick }) {
  const stagesArr = getArticleStages(a);
  const primaryStage = getPrimaryStage(a);
  const displayStage = activeStage && stagesArr.includes(activeStage) ? activeStage : primaryStage;
  const stageS = stageById(displayStage) || STAGES[0];
  const isStart = a.articleType === 'start';
  const isMultiStage = stagesArr.length > 1;

  const allTags = [];
  if (isMultiStage && !activeStage) {
    const labels = stagesArr.map(sid => stageById(sid)?.short).filter(Boolean).join(' / ');
    allTags.push({ k: 'stage-multi', label: labels, icon: '⏳' });
  } else {
    allTags.push({ k: 'stage', s: displayStage, label: stageS.name, icon: stageS.icon });
  }
  (a.extraTags || []).forEach((t) => {
    if (t === 'student') allTags.push({ k: 'student', label: 'студент', icon: '🎓' });
    else allTags.push({ k: 'extra', label: t });
  });
  a.cases.forEach((cid) => {
    const cc = caseById(cid);
    if (cc) allTags.push({ k: `case-${cid}`, label: cc.short, icon: cc.icon });
  });
  (a.relations || []).forEach((r) => allTags.push({ k: 'rel', label: r }));
  if (a.place && a.place.length === 1) {
    allTags.push({ k: 'place', label: a.place[0] === 'в Норвегии' ? '🇳🇴 в Норвегии' : '✈️ из-за границы' });
  }
  if (a.topic) allTags.push({ k: 'topic', label: '📚 ' + a.topic });

  if (variant === 'minimal') {
    const firstCase = a.cases[0] || 'all';
    return (
      <button className={`tg-cell article-cell-min ${isStart ? 'is-start' : ''}`} onClick={onClick}>
        <div className="case-cell-icon" style={caseIconVars(firstCase)}>
          {isStart ? '🧭' : stageS.icon}
        </div>
        <div className="tg-cell-body">
          <div className="tg-cell-title">{a.title}</div>
          <div className="tg-cell-subtitle">
            {isStart ? 'С чего начать' : stageS.name} · {formatDate(a.updated)}
          </div>
        </div>
        <div className="tg-cell-action">›</div>
      </button>
    );
  }

  if (variant === 'badge') {
    // Accent bar uses the stage CSS var — no JS color lookup.
    const accentVar = `var(--stage-${displayStage}-text)`;
    return (
      <button className={`article-card article-card--badge ${isStart ? 'is-start' : ''}`} onClick={onClick}
        style={{ '--accent-bar': accentVar }}>
        {isStart && <div className="article-kicker">🧭 С чего начать</div>}
        <div className="article-card-title">{a.title}</div>
        <FittingTags tags={allTags} />
        <div className="article-card-meta">
          <span>Обновлено · {formatDate(a.updated)}</span>
        </div>
      </button>
    );
  }

  return (
    <button className={`article-card ${isStart ? 'is-start' : ''}`} onClick={onClick}>
      {isStart && <div className="article-kicker">🧭 С чего начать</div>}
      <FittingTags tags={allTags} />
      <div className="article-card-title">
        {a.title}
        {a.articleType === 'опорная' && !isStart && <span className="base-mark"> · опорная</span>}
      </div>
      <div className="article-card-meta">
        <span>{formatDate(a.updated)}</span>
      </div>
    </button>
  );
}

function EmptyState({ onReset }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">🔍</div>
      <div className="empty-state-title">Ничего не найдено</div>
      <div className="empty-state-text">По выбранным фильтрам статей нет. Попробуйте другой кейс или этап.</div>
      <button className="tg-button tg-button--filled" onClick={onReset}>Сбросить фильтры</button>
    </div>
  );
}

// --- Case Selection ---
function CaseScreen({ activeCase, onSelect }) {
  return (
    <div className="screen">
      <div className="scroll-area">
        <div className="section-header">Выберите кейс</div>
        <div className="case-list">
          {CASES.map((c) => (
            <button key={c.id}
              className={`case-option ${activeCase === c.id ? 'is-selected' : ''}`}
              onClick={() => onSelect(c.id)}>
              <div className="case-option-icon" style={caseIconVars(c.id)}>{c.icon}</div>
              <div className="case-option-body">
                <div className="case-option-name">{c.name}</div>
                <div className="case-option-desc">{c.desc}</div>
              </div>
              <div className={`radio ${activeCase === c.id ? 'is-checked' : ''}`}>
                {activeCase === c.id && <div className="radio-dot" />}
              </div>
            </button>
          ))}
        </div>
        <div className="hint-block">
          Можно изменить в любой момент. Выбор кейса показывает только подходящие статьи.
        </div>
      </div>
    </div>
  );
}

// --- About Screen ---
function AboutScreen() {
  return (
    <div className="screen">
      <div className="scroll-area">
        <div className="about-hero">
          <div className="about-hero-emoji">🇳🇴</div>
          <div className="about-hero-title">База знаний по ВНЖ Норвегии</div>
          <div className="about-hero-sub">Семейная иммиграция · для русскоязычных</div>
        </div>

        <div className="section-header">О приложении</div>
        <div className="tg-section">
          <div className="tg-section-row">
            Бесплатная база знаний для тех, кто оформляет ВНЖ в Норвегии по линии семейной иммиграции.
            Внутри собраны короткие статьи с TL;DR, ответами на частые вопросы и ссылками на источники UDI.
          </div>
        </div>

        <div className="section-header">Для кого</div>
        <div className="tg-section">
          <div className="tg-section-row tg-section-row--icon"><span>👩</span> Для русскоязычных, кто переезжает к мужу или партнёру в Норвегию</div>
          <div className="tg-section-row tg-section-row--icon"><span>📋</span> На разных этапах: от подготовки документов до продления ВНЖ</div>
          <div className="tg-section-row tg-section-row--icon"><span>🤝</span> Подходит для всех кейсов: норвежец, ЕС/ЕЭЗ, скилд-воркер, беженец</div>
        </div>

        <div className="section-header">Источники</div>
        <div className="tg-section">
          <div className="tg-section-row">
            Информация основана на официальных страницах <strong>UDI</strong> (Norwegian Directorate of Immigration)
            и опыте русскоязычного сообщества. Опыт сообщества всегда отмечен и не заменяет закон.
          </div>
        </div>

        <div className="section-header">Сообщество</div>
        <a className="tg-cell" href="#" onClick={(e) => e.preventDefault()}>
          <div className="case-cell-icon" style={caseIconVars('eu')}>💬</div>
          <div className="tg-cell-body">
            <div className="tg-cell-title">Чат сообщества в Telegram</div>
            <div className="tg-cell-subtitle">[ссылка появится позже]</div>
          </div>
          <div className="tg-cell-action">›</div>
        </a>

        <div className="section-header">Обратная связь</div>
        <a className="tg-cell" href="https://t.me/fan4itta" target="_blank" rel="noopener noreferrer">
          <div className="case-cell-icon" style={caseIconVars('skilled')}>✉️</div>
          <div className="tg-cell-body">
            <div className="tg-cell-title">Сообщить об ошибке или дополнить</div>
          </div>
          <div className="tg-cell-action">›</div>
        </a>

        <div className="about-footer">
          <div>v0.9 · beta</div>
          <div className="about-footer-disclaimer">
            Приложение носит информационный характер и не заменяет официальные источники UDI и юридическую консультацию.
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Article View ---
function ArticleView({ title }) {
  const a = ARTICLES.find((a) => a.title === title);
  if (!a) return null;
  const c = ARTICLE_CONTENT[a.id] || ARTICLE_CONTENT[title];
  if (!c) return <div className="screen"><div className="scroll-area"><p style={{padding: 24}}>Содержимое статьи не найдено.</p></div></div>;

  const stagesArr = getArticleStages(a);
  const primaryStage = getPrimaryStage(a);
  const stageS = stageById(primaryStage) || STAGES[0];
  const isMultiStage = stagesArr.length > 1;

  const allTags = [];
  if (isMultiStage) {
    const labels = stagesArr.map(sid => stageById(sid)?.short).filter(Boolean).join(' / ');
    allTags.push({ k: 'stage-multi', label: labels, icon: '⏳' });
  } else {
    allTags.push({ k: 'stage', s: primaryStage, label: stageS.name, icon: stageS.icon });
  }
  (a.extraTags || []).forEach((t) => {
    if (t === 'student') allTags.push({ k: 'student', label: 'студент', icon: '🎓' });
    else allTags.push({ k: 'extra', label: t });
  });
  a.cases.forEach((cid) => {
    const cc = caseById(cid);
    if (cc) allTags.push({ k: `case-${cid}`, label: cc.short, icon: cc.icon });
  });
  (a.relations || []).forEach((r) => allTags.push({ k: 'rel', label: r }));
  if (a.place && a.place.length === 1) {
    allTags.push({ k: 'place', label: a.place[0] === 'в Норвегии' ? '🇳🇴 в Норвегии' : '✈️ из-за границы' });
  }
  if (a.topic) allTags.push({ k: 'topic', label: '📚 ' + a.topic });

  return (
    <div className="screen">
      <div className="scroll-area scroll-area--article">
        <div className="article-tags">
          {allTags.map((t, i) =>
            <Tag key={i} kind={t.k} dataStage={t.s}>{t.icon ? `${t.icon} ` : ''}{t.label}</Tag>
          )}
        </div>
        <h1 className="article-title">{a.title}</h1>
        <div className="article-meta-line">Обновлено · {formatDate(a.updated)}</div>

        {a.sourceType === 'community' && (
          <div className="art-block art-community-badge">
            <div className="art-community-text">
              💬 <strong>Эта статья основана на опыте сообщества.</strong> Официальных правил по этой теме нет — относитесь к ней как к рекомендации, а не как к закону.
            </div>
          </div>
        )}

        {c?.tldr && (
          Array.isArray(c.tldr) ?
          <div className="art-block art-tldr">
            <div className="art-block-title">📌 Коротко</div>
            <ul>{c.tldr.map((t, i) => <li key={i} dangerouslySetInnerHTML={{ __html: t }} />)}</ul>
          </div> :
          <div className="art-block art-tldr">
            <div className="art-block-title">📌 Коротко</div>
            <p dangerouslySetInnerHTML={{ __html: c.tldr }} />
          </div>
        )}

        {c?.actionNow && (
          <div className="art-block art-action">
            <div className="art-block-title">{c.actionTitle || '✅ Что сделать сейчас'}</div>
            <ol>{c.actionNow.map((t, i) => <li key={i} dangerouslySetInnerHTML={{ __html: t }} />)}</ol>
          </div>
        )}

        {c?.sections?.map((s, i) =>
          <section key={i} className="article-section">
            <h2 className="article-h2">{s.title}</h2>
            <div className="article-body" dangerouslySetInnerHTML={{ __html: s.body }} />
          </section>
        )}

        {c?.paths && c.paths.length > 0 && (
          <div className="art-paths">
            {c.paths.map((p, i) => (
              <div key={i} className={`path-card path-card--v${p.variant || (i + 1)}`}>
                {p.eyebrow && <div className="path-eyebrow">{p.eyebrow}</div>}
                <div className="path-title">
                  {p.title}
                  {p.badge && <span className={`path-badge path-badge--${p.badgeKind || 'neutral'}`}>{p.badge}</span>}
                </div>
                <div className="path-body" dangerouslySetInnerHTML={{ __html: p.body }} />
              </div>
            ))}
          </div>
        )}

        {c?.faq && c.faq.length > 0 && <FaqAccordion items={c.faq} />}

        {c?.sectionsAfterFaq?.map((s, i) =>
          <section key={i} className="article-section">
            <h2 className="article-h2">{s.title}</h2>
            <div className="article-body" dangerouslySetInnerHTML={{ __html: s.body }} />
          </section>
        )}

        {c?.warn && (
          <div className="art-block art-warn">
            <div className="art-block-title">⚠️ Важно</div>
            <div dangerouslySetInnerHTML={{ __html: c.warn }} />
          </div>
        )}

        {c?.tip && (
          <div className="art-block art-tip">
            <div className="art-block-title">💡 Совет</div>
            <div dangerouslySetInnerHTML={{ __html: c.tip }} />
          </div>
        )}

        {c?.compare && (
          <div className="art-compare">
            <div className="compare-col compare-col--udi">
              <div className="compare-title">📋 По UDI</div>
              <p>{c.compare.udi}</p>
            </div>
            <div className="compare-col compare-col--practice">
              <div className="compare-title">💬 На практике</div>
              <p>{c.compare.practice}</p>
            </div>
          </div>
        )}

        {c?.quotes && c.quotes.length > 0 && (
          <div className="art-block art-quotes">
            <div className="art-block-title">💬 Из переписки сообщества</div>
            {c.quotes.map((q, i) => (
              <div key={i} className="quote-item">
                <div className="quote-text">{q.text}</div>
                <div className="quote-author">— {q.author}</div>
              </div>
            ))}
          </div>
        )}

        {c?.sources && c.sources.length > 0 && (
          <>
            <div className="section-header">Источники</div>
            <div className="tg-section">
              {c.sources.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener" className="tg-section-row tg-section-row--link">
                  <span>🔗</span>
                  <span>{s.label}</span>
                  <span className="external-arrow">↗</span>
                </a>
              ))}
            </div>
          </>
        )}

        <div className="art-block art-feedback">
          <div className="art-block-title">Нашли ошибку?</div>
          <p>Если в статье что-то устарело или неточно — напишите нам. Мы поправим.</p>
          <div className="art-feedback-ref">
            <span className="art-feedback-ref-label">Название статьи</span>
            <div className="art-feedback-ref-row">
              <span className="art-feedback-ref-title">{title}</span>
              <button
                className="art-feedback-copy"
                aria-label="Скопировать название"
                onClick={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget;
                  navigator.clipboard?.writeText(title);
                  btn.classList.add('is-copied');
                  setTimeout(() => btn.classList.remove('is-copied'), 1200);
                }}>
                <svg className="copy-default" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M3 11V4.5C3 3.67 3.67 3 4.5 3H11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <svg className="copy-done" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <a className="tg-button tg-button--filled" href="https://t.me/fan4itta" target="_blank" rel="noopener noreferrer">Написать в @vnzh_norway_bot</a>
        </div>

        <div style={{ height: 24 }} />
      </div>
    </div>
  );
}

function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="art-block art-faq">
      <div className="art-block-title">❓ Частые вопросы</div>
      {items.map((it, i) => (
        <div key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{it.q}</span>
            <span className="faq-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 5L7 8.5L10.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          <div className="faq-a-wrap">
            <div className="faq-a" dangerouslySetInnerHTML={{ __html: it.a }} />
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  MainScreen, CaseScreen, AboutScreen, ArticleView,
  formatDate, pluralize, caseById, stageById, getArticleStages
});
