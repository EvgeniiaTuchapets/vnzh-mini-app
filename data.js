// === DATA: cases, stages, articles, content ===
// v2 — обновлено под методичку v1: новые блоки, sourceType, paths, quotes как массив

// CASE accents are now token references — components read CSS vars
// `--case-{id}-text` and `--case-{id}-bg` from tokens.css.
window.CASES = [
  { id: 'all', icon: '🌐', name: 'Все кейсы', short: 'Все', desc: 'Показать общие статьи и материалы для всех типов' },
  { id: 'norwegian', icon: '🇳🇴', name: 'Гражданин Норвегии', short: 'Норвежец', desc: 'Принимающая сторона — гражданин Норвегии' },
  { id: 'eu', icon: '🇪🇺', name: 'Гражданин ЕС/ЕЭЗ', short: 'ЕС/ЕЭЗ', desc: 'Принимающая сторона — гражданин страны ЕС/ЕЭЗ (не Норвегии)' },
  { id: 'skilled', icon: '💼', name: 'Skilled worker', short: 'Skilled', desc: 'Принимающая сторона — обладатель ВНЖ через высшее образование и оффер от норвежского работодателя' },
  { id: 'refugee', icon: '🛡️', name: 'Беженец / защита', short: 'Беженец', desc: 'Принимающая сторона получила в Норвегии защиту или статус беженца' },
];

window.STAGES = [
  { id: 'prepare', icon: '📋', name: 'Готовлюсь подавать', short: 'Готовлюсь' },
  { id: 'wait', icon: '⏳', name: 'Жду решения', short: 'Жду решения' },
  { id: 'got', icon: '✅', name: 'Получил(а) ВНЖ', short: 'Получил(а)' },
  { id: 'renew', icon: '🔄', name: 'Продление / ПМЖ', short: 'Продление' },
  { id: 'other', icon: '💭', name: 'Другое', short: 'Другое' },
];

// =====================================================
// ARTICLES — метаданные (атрибуты)
// =====================================================
// Полная схема статьи (v2):
//   id          — стабильный slug на латинице (не меняется)
//   title       — отображаемое название
//   articleType — 'start' | 'опорная' | 'compact' | 'procedure'
//   sourceType  — 'official-udi' | 'official-other' | 'community'
//   stages      — массив этапов: ['prepare', 'wait', 'got', 'other']
//   cases       — массив кейсов: ['norwegian', 'eu', 'skilled', 'refugee']
//   relations   — массив отношений: ['супруг', 'сожитель', 'жених-невеста']
//   place       — массив мест: ['из-за границы', 'в Норвегии'] (опц.)
//   extraTags   — массив доп. тегов: ['student', 'с детьми', ...] (опц.)
//   topic       — тематическая категория для не-процессных статей (опц.)
//   updated     — дата последнего обновления

window.ARTICLES = [
  {
    id: 'start-norwegian',
    title: 'Воссоединение с супругом-норвежцем: что вас ждёт',
    articleType: 'start',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-23'
  },
  {
    id: 'start-eu',
    title: 'Воссоединение с супругом — гражданином ЕС/ЕЭЗ: что вас ждёт',
    articleType: 'start',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['eu'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-09'
  },
  {
    id: 'start-skilled',
    title: 'Воссоединение с супругом — Skilled worker: что вас ждёт',
    articleType: 'start',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['skilled'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-23'
  },
  {
    id: 'start-refugee',
    title: 'Воссоединение с супругом-беженцем: что вас ждёт',
    articleType: 'start',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['refugee'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы'],
    updated: '2026-05-09'
  },
  {
    id: 'income-req',
    title: 'Требование по доходу принимающей стороны',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'skilled', 'refugee', 'eu'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: [],
    extraTags: ['student'],
    updated: '2026-05-23'
  },
  {
    id: 'visa-d',
    title: 'Виза D — что это и когда она нужна',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['wait', 'got'],
    cases: ['norwegian', 'skilled'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы'],
    updated: '2026-05-26'
  },
  {
    id: 'visa-c-guest',
    title: 'Гостевая виза C: как приехать к супругу в Норвегию',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['prepare', 'wait'],
    cases: ['norwegian', 'eu', 'skilled'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы'],
    updated: '2026-05-23'
  },
  {
    id: 'edu-recognition',
    title: 'Признание образования в Норвегии: HK-dir / NOKUT',
    articleType: 'опорная',
    sourceType: 'official-other',
    stages: ['prepare', 'wait'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: [],
    topic: 'после ВНЖ — работа',
    updated: '2026-05-09'
  },
  {
    id: 'where-to-apply',
    title: 'Где подавать заявление: из России или из Норвегии',
    articleType: 'start',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-23'
  },
  {
    id: 'where-to-apply-norwegian',
    title: 'Где подавать заявление: кейс «Гражданин Норвегии»',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-23'
  },
  {
    id: 'where-to-apply-eu',
    title: 'Где подавать заявление: кейс «ЕС/ЕЭЗ»',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['eu'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-23'
  },
  {
    id: 'where-to-apply-refugee',
    title: 'Где подавать заявление: кейс «Беженец»',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['refugee'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы'],
    updated: '2026-05-23'
  },
  {
    id: 'where-to-apply-skilled',
    title: 'Где подавать заявление: кейс «Skilled worker»',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['skilled'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-23'
  },
  {
    id: 'student-spouse',
    title: 'Если супруг — студент: какая учёба даёт право на воссоединение',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'eu', 'skilled'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    extraTags: ['student'],
    updated: '2026-05-09'
  },
  {
    id: 'refugee-6-month-window',
    title: 'Окно 6 месяцев: главный срок для беженцев',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['refugee'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы'],
    updated: '2026-05-09'
  },
  {
    id: 'after-refusal',
    title: 'Получили отказ — что делать',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['other'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-09'
  },
  {
    id: 'relationship-evidence',
    title: 'Что считается доказательством отношений',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-09'
  },
  {
    id: 'housing-requirement',
    title: 'Требования к жилью',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    extraTags: ['student'],
    updated: '2026-05-09'
  },
  {
    id: 'age-24-rule',
    title: 'Требование возраста: правило 24 лет',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-09'
  },
  {
    id: 'application-documents',
    title: 'Какие документы нужны для подачи',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-09'
  },
  {
    id: 'police-appointment-prepare',
    title: 'Запись в полицию для подачи в Норвегии',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['в Норвегии'],
    updated: '2026-05-09'
  },
  {
    id: 'apostille-legalization',
    title: 'Апостиль и легализация документов',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-09'
  },
  {
    id: 'processing-times',
    title: 'Сроки рассмотрения заявления',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['wait'],
    cases: ['norwegian', 'eu', 'skilled'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-09'
  },
  {
    id: 'situation-changed',
    title: 'Что делать, если изменилась ситуация (адрес, доход, семья)',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['wait'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-09'
  },
  {
    id: 'police-registration-card',
    title: 'Регистрация в полиции и получение ВНЖ-карты',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['got'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['в Норвегии'],
    updated: '2026-05-09'
  },
  {
    id: 'd-number-fodselsnummer',
    title: 'Получение D-номера и личного номера (fødselsnummer)',
    articleType: 'compact',
    sourceType: 'official-other',
    stages: ['got'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['в Норвегии'],
    topic: 'после ВНЖ — жизнь',
    updated: '2026-05-09'
  },
  {
    id: 'vfs-appointment',
    title: 'Запись в визовый центр VFS / посольство',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы'],
    updated: '2026-05-12'
  },
  {
    id: 'eu-eea-process',
    title: 'Если принимающая сторона — гражданин ЕС/ЕЭЗ: чем отличается процесс',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['eu'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    extraTags: ['student'],
    updated: '2026-05-12'
  },
  {
    id: 'certified-translation',
    title: 'Сертифицированный перевод документов',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'track-application-status',
    title: 'Как отслеживать статус заявки',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['wait'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'interview-requested',
    title: 'Что делать, если запросили интервью',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['wait'],
    cases: ['norwegian', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'priority-request',
    title: 'Можно ли запросить приоритет рассмотрения',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['wait'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'additional-documents-requested',
    title: 'Что делать, если UDI запросил доп. документы',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['wait'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'first-steps-after-approval',
    title: 'Первые шаги после одобрения: что делать в первые 7 дней',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['got'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'folkeregisteret-registration',
    title: 'Регистрация по адресу в Folkeregisteret',
    articleType: 'compact',
    sourceType: 'official-other',
    stages: ['got'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['в Норвегии'],
    topic: 'после ВНЖ — жизнь',
    updated: '2026-05-12'
  },
  {
    id: 'norwegian-language-courses',
    title: 'Бесплатные курсы норвежского языка: как записаться',
    articleType: 'compact',
    sourceType: 'official-other',
    stages: ['got'],
    cases: ['norwegian', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель'],
    place: ['в Норвегии'],
    topic: 'после ВНЖ — язык',
    updated: '2026-05-12'
  },
  {
    id: 'bank-account-bankid',
    title: 'Открытие банковского счёта и BankID',
    articleType: 'compact',
    sourceType: 'official-other',
    stages: ['got'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['в Норвегии'],
    topic: 'после ВНЖ — жизнь',
    updated: '2026-05-12'
  },
  {
    id: 'healthcare-fastlege',
    title: 'Доступ к медицине: fastlege и helsekort',
    articleType: 'compact',
    sourceType: 'official-other',
    stages: ['got'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['в Норвегии'],
    topic: 'здоровье',
    updated: '2026-05-12'
  },
  {
    id: 'work-after-permit',
    title: 'Можно ли работать сразу после получения ВНЖ',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['got'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['в Норвегии'],
    topic: 'после ВНЖ — работа',
    updated: '2026-05-12'
  },
  {
    id: 'renewal-application',
    title: 'Когда и как подавать на продление ВНЖ',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['renew'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'renewal-documents',
    title: 'Документы для продления: чем отличается от первой подачи',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['renew'],
    cases: ['norwegian', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'permanent-residence-conditions',
    title: 'Условия для постоянного ВНЖ (ПМЖ) после 3 лет',
    articleType: 'опорная',
    sourceType: 'official-udi',
    stages: ['renew'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель'],
    place: ['в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'pr-language-tests',
    title: 'Языковой и обществоведческий тесты для ПМЖ',
    articleType: 'compact',
    sourceType: 'official-other',
    stages: ['renew'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель'],
    place: ['в Норвегии'],
    topic: 'после ВНЖ — язык',
    updated: '2026-05-12'
  },
  {
    id: 'pr-income-requirement',
    title: 'Требование к доходу для ПМЖ',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['renew'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель'],
    place: ['в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'citizenship-path',
    title: 'Путь к гражданству Норвегии после ПМЖ',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['renew'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель'],
    place: ['в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'pregnancy-while-waiting',
    title: 'Беременность во время ожидания: что меняется',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['other'],
    cases: ['norwegian', 'skilled'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    extraTags: ['беременность'],
    updated: '2026-05-12'
  },
  {
    id: 'children-born-during-process',
    title: 'Дети, рождённые во время ожидания: автоматическое ли гражданство',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['other'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['+ребёнок'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'samboer-cohabitation',
    title: 'Сожительство (samboer): как подтвердить 2 года совместной жизни',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'skilled', 'refugee'],
    relations: ['сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'eu-eea-residence-right',
    title: 'Что значит «реализовывать право на проживание» (ЕС/ЕЭЗ)',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['eu'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    extraTags: ['student'],
    updated: '2026-05-12'
  },
  {
    id: 'apply-with-skilled-worker',
    title: 'Когда можно подавать вместе с заявлением скилд-воркера',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['skilled'],
    relations: ['супруг', 'сожитель'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'fees',
    title: 'Пошлины: сколько платить и кто освобождён',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['prepare'],
    cases: ['norwegian', 'eu', 'skilled', 'refugee'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  },
  {
    id: 'introduction-program',
    title: 'Программа интеграции (introduksjonsprogrammet) для членов семьи беженца',
    articleType: 'compact',
    sourceType: 'official-other',
    stages: ['got'],
    cases: ['refugee'],
    relations: ['супруг', 'сожитель'],
    place: ['в Норвегии'],
    topic: 'после ВНЖ — язык',
    updated: '2026-05-12'
  },
  {
    id: 'sham-marriage-prevention',
    title: 'Когда брак считается фиктивным: как этого избежать',
    articleType: 'compact',
    sourceType: 'official-udi',
    stages: ['other'],
    cases: ['norwegian', 'skilled'],
    relations: ['супруг', 'сожитель', 'жених-невеста'],
    place: ['из-за границы', 'в Норвегии'],
    updated: '2026-05-12'
  }
];

// =====================================================
// ARTICLE_CONTENT — содержимое (блоки)
// =====================================================
// Полная схема блоков (v2):
//   tldr             — массив строк или строка
//   actionTitle      — заголовок блока actionNow (опц., по умолчанию "Что сделать сейчас")
//   actionNow        — массив строк (шаги). Поддерживает HTML для ссылок.
//   sections         — массив { title, body (HTML) }
//   paths            — массив { variant: 1|2|3, eyebrow, title, badge?, badgeKind?, body (HTML) }
//   faq              — массив { q, a (HTML) }
//   sectionsAfterFaq — массив { title, body (HTML) }
//   warn             — строка или HTML
//   tip              — строка или HTML
//   compare          — { udi, practice } (опц., только если есть содержательный контраст)
//   quotes           — массив { text, author }
//   sources          — массив { label, url }

window.ARTICLE_CONTENT = {

  // ============================================================
  // START — NORWEGIAN
  // ============================================================
  'start-norwegian': {
    tldr: [
      'Это обзорная статья для начала. Она показывает путь от проверки условий до подачи и ожидания решения.',
      'Главное до подачи: <strong>доход супруга</strong>, правильно оформленные документы и <strong>убедительные доказательства отношений</strong>.',
      'Закладывайте долгое ожидание. По кейсам последних месяцев — около 1,5–2 лет с момента подачи. Свежие сроки проверяйте на UDI.',
      'Подавать можно из России через VFS или из Норвегии, если уже есть подходящее основание для пребывания.'
    ],
    actionTitle: '🧭 Путь по шагам',
    actionNow: [
      'Проверьте, что доход супруга подходит под актуальное требование UDI.',
      'Решите, где подавать: через VFS из России или из Норвегии (если есть основание).',
      'Соберите документы по чек-листу UDI — точный список появится в личном кабинете после регистрации онлайн-заявки.',
      'Зарегистрируйте заявление на udi.no, оплатите пошлину и сдайте документы лично.',
      'Во время ожидания следите за сроками UDI и быстро отвечайте на запросы.',
      'После одобрения — оформите формальности въезда и регистрации в Норвегии.'
    ],
    sections: [
      {
        title: 'Что проверить до подачи',
        body: '<p><strong>Доход.</strong> Принимающая сторона должна соответствовать актуальному требованию UDI. Сумма пересматривается каждый год. Подробнее в статье <a data-article=income-req>«Требование по доходу принимающей стороны»</a>.</p><p><strong>Документы и отношения.</strong> Понадобятся документы о браке (с апостилем и переводом), документы супруга о доходе, доказательства реальной совместной истории — фото, поездки, переписка. Точный персональный список UDI составит после регистрации заявки.</p><p><strong>Жильё.</strong> У супруга должно быть место, где вы сможете жить вместе.</p>'
      },
      {
        title: 'Где подавать: из России или из Норвегии',
        body: '<p>Стандартный путь — подача из страны, где вы проживаете, через визовый центр VFS. Подача из Норвегии возможна не всегда — нужны определённые основания.</p><p>Подробно про оба варианта — в статье <a data-article=where-to-apply-norwegian>«Где подавать заявление: кейс «Гражданин Норвегии»»</a>.</p>'
      },
      {
        title: 'К чему морально готовиться',
        body: '<p>Самое сложное в процессе — не анкета, а ожидание и неопределённость. Сроки могут меняться после подачи, UDI может запросить дополнительные документы, а автоматические письма не всегда означают, что дело уже активно рассматривают.</p><p>По кейсам сообщества последних месяцев сроки рассмотрения для россиян — около 1,5–2 лет. Хорошая стратегия — вести календарь с датами всех шагов: это помогает спокойнее отслеживать процесс.</p>'
      }
    ],
    warn: '<p>Не воспринимайте эту статью как полный чек-лист. Она нужна, чтобы увидеть процесс целиком. Для подачи всегда используйте <strong>персональный чек-лист UDI</strong>, который появляется после заполнения онлайн-заявки на udi.no.</p>',
    tip: '<p>Если только начинаете — начните не с анкеты, а с <strong>проверки условий</strong>, особенно дохода супруга. Если что-то не сходится, лучше узнать в самом начале и спланировать.</p>',
    sources: [
      { label: 'UDI: Family immigration with a Norwegian or Nordic citizen', url: 'https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-norwegian-or-nordic-citizen/' },
      { label: 'UDI: Case processing times', url: 'https://www.udi.no/en/word-definitions/guide-to-case-processing-times-in-family-immigration-cases/' },
      { label: 'UDI: Document checklists', url: 'https://www.udi.no/en/word-definitions/checklists-which-explain-which-documents-you-must-hand-in-with-your-application/' }
    ]
  },

  // ============================================================
  // START — EU/EEA
  // ============================================================
  'start-eu': {
    tldr: [
      'Этот кейс устроен иначе, чем с супругом-норвежцем: вы получаете <strong>карту резидента семьи гражданина ЕС/ЕЭЗ</strong> по правилам ЕЭЗ, а не обычный семейный ВНЖ.',
      'Главные плюсы: <strong>нет требования по доходу</strong> в обычной форме, <strong>нет пошлины</strong>, первое разрешение обычно сразу <strong>на 5 лет</strong>, право на работу появляется с момента подачи.',
      'Главное условие: супруг должен «реализовывать право на проживание» в Норвегии — работать, быть самозанятым, учиться или иметь свои средства.',
      'Реалистичный срок по кейсам сообщества — 2–6 месяцев. По правилу ЕС решение должно быть принято в течение 6 месяцев.'
    ],
    actionTitle: '🧭 Путь по шагам',
    actionNow: [
      'Проверьте, что супруг реализует право на проживание: рабочий контракт, самозанятость, учёба или достаточные средства.',
      'Решите, где подавать: чаще всего это полиция в Норвегии (если можете легально въехать). Альтернатива — посольство Норвегии.',
      'Соберите документы по чек-листу UDI — точный список появится в личном кабинете после регистрации онлайн-заявки.',
      'Зарегистрируйте заявление на udi.no — важно выбрать форму <strong>«Residence card for family members of EU/EEA nationals»</strong>, не обычное family immigration.',
      'Сдайте документы лично в полиции или визовом центре и дождитесь решения.',
      'После одобрения — оформите формальности регистрации в Норвегии.'
    ],
    sections: [
      {
        title: 'Чем этот путь отличается от кейса с норвежцем',
        body: '<p><strong>Это другой закон.</strong> Воссоединение с гражданином ЕС/ЕЭЗ идёт по правилам ЕЭЗ: Норвегия применяет директиву ЕС 2004/38/EC через соглашение ЕЭЗ.</p><p><strong>Что проще:</strong> нет обычного требования по доходу, нет пошлины, первое разрешение обычно дают сразу на 5 лет, право работать появляется с момента подачи (после получения skattekort).</p><p><strong>Что сложнее:</strong> жёнам и мужьям граждан ЕС/ЕЭЗ <strong>не положены бесплатные курсы норвежского от коммуны</strong> — только платные. Ваш статус зависит от того, сохраняет ли супруг право на проживание.</p>'
      },
      {
        title: 'Что значит «реализует право на проживание»',
        body: '<p>Гражданство ЕС само по себе не даёт автоматического права на воссоединение в Норвегии. Супруг должен показать, что он реально живёт в Норвегии на одном из оснований:</p><ul><li>работает по найму;</li><li>ведёт самозанятость или бизнес;</li><li>учится и имеет достаточные средства;</li><li>имеет собственные средства, чтобы содержать себя и семью без социальной помощи.</li></ul><p>Это ключевое условие. Его проверяют при первой подаче, продлении и переходе к постоянной карте.</p>'
      },
      {
        title: 'Где подавать: из России или из Норвегии',
        body: '<p>По кейсам сообщества самый частый сценарий — подача в полиции в Норвегии. Для въезда до подачи может пригодиться гостевая виза C по директиве 2004/38/EC через консульство третьей страны Шенгена. Подробно — в статье <a data-article=where-to-apply-eu>«Где подавать заявление: кейс «ЕС/ЕЭЗ»»</a>.</p>'
      }
    ],
    warn: '<p>Если ваш кейс — <strong>невеста гражданина ЕС из России</strong>, обратите внимание: с декабря 2024 года Министерство труда приостановило обработку заявлений ВНЖ-fiancée по правилам ЕЭЗ для граждан России. По кейсам сообщества обходной путь — заключить брак в третьей стране и подаваться сразу как супруги.</p><p>Не воспринимайте эту статью как полный чек-лист. Имя формы для этого кейса — <strong>Residence card for family members of EU/EEA nationals</strong>, не Family immigration. Визовые центры и полиция иногда направляют по ошибочному маршруту, поэтому полезно иметь под рукой ссылки на нужные страницы UDI.</p>',
    tip: '<p>Право работать с момента подачи — большой плюс этого кейса. Но по опыту участниц чата: если в ВНЖ откажут, работа за период ожидания может задним числом считаться незаконной. Не стройте долгосрочные обязательства до получения решения.</p><p>Если у вас есть высшее образование, можно параллельно начать его признание через HK-dir — это бесплатно. Подробнее в статье <a data-article=edu-recognition>«Признание образования»</a>.</p>',
    sources: [
      { label: 'UDI: Residence card for family members of EU/EEA nationals', url: 'https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-an-eueea-national/' },
      { label: 'UDI: FAQ about family immigration', url: 'https://www.udi.no/en/answer-pages/answers-family-immigration/' },
      { label: 'EU Directive 2004/38/EC', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004L0038' }
    ]
  },

  // ============================================================
  // START — SKILLED WORKER
  // ============================================================
  'start-skilled': {
    tldr: [
      'Skilled worker — это путь ВНЖ, основанный на <strong>высшем образовании или квалификации супруга и оффере от норвежского работодателя</strong>. Вы подаёте на семейное воссоединение с ним.',
      'Главное преимущество: можно подавать <strong>пакетом</strong>. Заявление супруга и ваше рассматриваются вместе, и ответы приходят одновременно.',
      'Главные условия: квалификация и оффер у супруга, доход соответствует требованию UDI, отношения подтверждены.',
      'Реалистичный срок по кейсам сообщества — 4–6 месяцев, если работодатель ведёт подачу через консультанта. Самостоятельная подача может занять дольше.'
    ],
    actionTitle: '🧭 Путь по шагам',
    actionNow: [
      'Дождитесь оффера супруга от норвежского работодателя и начала оформления skilled worker permit.',
      'Уточните, сопровождает ли работодатель семейную подачу через консультанта — это часто сильно упрощает процесс.',
      'Соберите документы по чек-листу UDI — точный список появится в личном кабинете после регистрации онлайн-заявки.',
      'Зарегистрируйте заявление на udi.no, оплатите пошлину и сдайте документы в VFS или полиции.',
      'Во время ожидания решения работать нельзя.',
      'После одобрения — оформите формальности въезда и регистрации в Норвегии.'
    ],
    sections: [
      {
        title: 'Что проверить до подачи',
        body: '<p><strong>Квалификация супруга.</strong> Skilled worker — это статус, который опирается на высшее образование, профессиональную подготовку или специальные квалификации. У супруга должен быть оффер от конкретного норвежского работодателя.</p><p><strong>Доход.</strong> Супруг как принимающая сторона должен соответствовать требованию UDI по доходу. Подробнее в статье <a data-article=income-req>«Требование по доходу принимающей стороны»</a>.</p><p><strong>Документы и отношения.</strong> Понадобятся документы о браке с апостилем и переводом, документы супруга о доходе и квалификации, доказательства отношений и базовые документы о жилье. Точный список — после регистрации заявки.</p>'
      },
      {
        title: 'Главное преимущество: подача пакетом',
        body: '<p>Если семья подаёт одновременно с заявлением супруга на skilled worker permit, UDI обычно рассматривает заявления вместе. Это значит, что вам не нужно сначала ждать ВНЖ супруга, а потом отдельно ждать семейное воссоединение.</p><p>По кейсам сообщества пакетная подача через консультанта работодателя часто занимает около 4–6 месяцев. Это один из самых быстрых сценариев среди всех кейсов.</p><p>Работодатель может нанять юридическую фирму или релокационного консультанта, который ведёт подачу за всю семью. Иногда это входит в relocation package.</p>'
      },
      {
        title: 'Где подавать и как ждать',
        body: '<p>Стандартный путь — подача из страны проживания через визовый центр VFS. Если вы сами подходите под критерии skilled worker по образованию, может быть возможна подача из Норвегии. Подробно — в статье <a data-article=where-to-apply-skilled>«Где подавать заявление: кейс «Skilled worker»»</a>.</p><p>По правилам UDI работать во время ожидания решения в Норвегии нельзя, включая удалённую работу. Запрет действует для любых работодателей — норвежских, европейских, российских. Если вы ожидаете решение дома, в стране гражданства — продолжаете работать как обычно: UDI не регулирует работу за пределами Норвегии.</p>'
      },
      {
        title: 'К чему морально готовиться',
        body: '<p>Этот путь обычно проходит чище, если работодатель ведёт процесс. Но ваш статус зависит от ВНЖ супруга — если он теряет работу, ему обычно даётся время на поиск новой, но ситуация становится стрессовой для всей семьи. По возможности подавайте одновременно.</p><p>В отличие от кейса ЕС/ЕЭЗ, после получения ВНЖ супруги Skilled worker обычно имеют право на бесплатные языковые курсы от коммуны.</p>'
      }
    ],
    warn: '<p>Не воспринимайте эту статью как полный чек-лист. Она нужна, чтобы увидеть процесс целиком. Для подачи всегда используйте <strong>персональный чек-лист UDI</strong>, который появляется после заполнения онлайн-заявки.</p>',
    tip: '<p>Если у работодателя супруга нет релокационного консультанта — спросите. Иногда такая поддержка предоставляется, но не озвучивается автоматически. Профессиональное сопровождение снимает много вопросов и ускоряет процесс.</p><p>Если у вас есть высшее образование, параллельно с ожиданием ВНЖ можно начать его признание через HK-dir. Это бесплатно и пригодится для работы в Норвегии. Подробнее — в статье <a data-article=edu-recognition>«Признание образования»</a>.</p>',
    sources: [
      { label: 'UDI: Family immigration with a citizen of a country outside the EU/EEA', url: 'https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-a-citizen-of-a-country-outside-the-eueea/' },
      { label: 'UDI: Skilled workers', url: 'https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/' },
      { label: 'UDI: Income requirement', url: 'https://www.udi.no/en/word-definitions/income-requirement-in-family-immigration-cases-/' }
    ]
  },

  // ============================================================
  // START — REFUGEE
  // ============================================================
  'start-refugee': {
    tldr: [
      'Этот кейс — для семей, где супруг получил в Норвегии <strong>защиту или статус беженца</strong>. Семейное воссоединение идёт с особыми сроками и важным исключением.',
      '<strong>Ключевое условие для освобождения от требования по доходу:</strong> брак был заключён до переезда супруга в Норвегию.',
      'Главные сроки: <strong>6 месяцев</strong> на онлайн-регистрацию заявления и <strong>12 месяцев</strong> на личную сдачу документов с даты decision letter.',
      'Если уложиться в сроки — требование по доходу не применяется. Если пропустить окно — действуют обычные правила.'
    ],
    actionTitle: '🧭 Путь по шагам',
    actionNow: [
      'Получите от супруга decision letter UDI и зафиксируйте дату — от неё считаются сроки.',
      'Зарегистрируйте заявление онлайн на udi.no <strong>в течение 6 месяцев</strong> с даты decision letter.',
      'Соберите документы по чек-листу UDI — точный список появится в личном кабинете после регистрации.',
      'Сдайте документы лично в посольстве или VFS <strong>в течение 12 месяцев</strong> с даты decision letter.',
      'Если кейс сложный, обратитесь за бесплатной или профильной юридической помощью (например, NOAS).',
      'После одобрения и приезда — оформите формальности регистрации и отдельно рассмотрите derived refugee status.'
    ],
    sections: [
      {
        title: 'Освобождение от требования по доходу — главный бонус',
        body: '<p>В обычном семейном кейсе принимающая сторона должна показать доход. Для беженцев есть важное исключение: человек может только начинать строить жизнь и работу в Норвегии.</p><p><strong>Условия освобождения:</strong></p><ul><li>брак был заключён до переезда супруга в Норвегию;</li><li>заявление зарегистрировано онлайн в течение 6 месяцев с даты decision letter;</li><li>документы сданы лично в течение 12 месяцев с той же даты.</li></ul><p>Если хотя бы одно условие не выполнено, применяются обычные правила и требование по доходу возвращается. Подробнее в статье <a data-article=income-req>«Требование по доходу принимающей стороны»</a>.</p>'
      },
      {
        title: 'Что значит «брак до переезда»',
        body: '<p>UDI важно, чтобы семейные отношения существовали до того, как супруг покинул страну происхождения и приехал в Норвегию. Это подтверждается свидетельством о браке с датой до переезда, а также доказательствами отношений: фото, перепиской, совместными документами.</p><p>Если вы поженились уже после переезда супруга, освобождение от дохода обычно не действует. В такой ситуации лучше отдельно свериться с UDI или юристом.</p>'
      },
      {
        title: 'Где подавать и как ждать',
        body: '<p>Стандартный путь — подача через посольство Норвегии или VFS в стране, где вы находитесь. Онлайн-регистрация — это только первый шаг. Заявление считается поданным после личной сдачи документов.</p><p>Запись может быть не сразу, поэтому не откладывайте — особенно важно не пропустить окно 6 месяцев на регистрацию.</p>'
      },
      {
        title: 'После приезда — производный статус беженца',
        body: '<p>После переезда по семейному ВНЖ можно отдельно подать на <strong>derived refugee status</strong> — производный статус беженца, связанный со статусом супруга. Такой статус может дать дополнительные права и проездной документ беженца.</p><p>Но с этим документом нельзя ездить в страну, от которой была получена защита: это может поставить статус под угрозу.</p>'
      },
      {
        title: 'К чему морально готовиться',
        body: '<p>Главный стресс в этом кейсе — сроки. 6 месяцев проходят быстро, особенно если документы находятся в разных странах и требуют апостиля, перевода или восстановления. Воссоединение с беженцем часто происходит после долгой разлуки и сильного стресса — поэтому готовиться стоит и к документам, и к адаптации семьи после переезда.</p><p>После получения ВНЖ супруги беженцев обычно имеют право на бесплатные языковые курсы и курс обществознания от коммуны.</p>'
      }
    ],
    warn: '<p>Не воспринимайте эту статью как полный чек-лист. Она нужна, чтобы увидеть процесс целиком. Если у супруга <strong>коллективная защита</strong> (как у многих украинцев), правила могут отличаться — этот кейс нужно проверять отдельно с UDI или юристом.</p>',
    tip: '<p>Главный приоритет — уложиться в окно 6 месяцев на регистрацию. Даже если все документы ещё не готовы, регистрация запускает счётчик. Параллельно занимайтесь сбором документов и записью на личную сдачу.</p><p>Если у вас есть высшее образование, параллельно с ожиданием ВНЖ можно начать его признание через HK-dir. Это бесплатно и пригодится для работы в Норвегии после переезда. Подробнее в статье <a data-article=edu-recognition>«Признание образования»</a>.</p>',
    sources: [
      { label: 'UDI: Family immigration with a person who has protection', url: 'https://www.udi.no/en/word-definitions/family-immigration-with-a-person-who-has-protection-asylum-in-norway/' },
      { label: 'UDI: Protection for family members of refugees', url: 'https://www.udi.no/en/want-to-apply/protection-asylum/protection-asylum-for-family-members-of-refugees/' },
      { label: 'UNHCR Norway: Applying for family reunification', url: 'https://help.unhcr.org/norway/applying-for-family-reunification/' }
    ]
  },

  // ============================================================
  // 1. INCOME REQUIREMENT
  // ============================================================
  'income-req': {
    tldr: [
      'Принимающая сторона должна подтвердить достаточный регулярный доход. Конкретная сумма зависит от кейса. Актуальный порог проверяйте на UDI.',
      'Постоянный контракт UDI воспринимает увереннее, чем временный. Главное — UDI должен поверить, что доход сохранится ещё минимум год.',
      'Накопления, недвижимость, разовая продажа имущества и доход самого заявителя — UDI не учитывает.',
      'Для норвежцев и Skilled worker — фиксированный денежный порог. Для граждан ЕС/ЕЭЗ — другой принцип, без чёткой суммы. Для беженцев есть исключение: при подаче в установленные сроки требование по доходу не применяется.'
    ],
    actionNow: [
      'Узнайте свой порог дохода на сайте UDI — для каждого кейса (норвежец, ЕС/ЕЭЗ, Skilled worker, студент, беженец) правила разные.',
      'Соберите документы, подтверждающие доход референс-персоны: трудовой договор, расчётные листы, справку NAV. Точный список сверьте с персональным чек-листом UDI после регистрации онлайн-заявки.',
      'Если доход не покрывает порог — посмотрите, какие у вашего кейса есть исключения, или подайте позже.'
    ],
    sections: [
      {
        title: 'Что считается доходом',
        body: '<p>UDI считает только регулярный денежный доход референс-персоны: зарплата, стипендия, гранты, студенческий заём от Lånekassen.</p><p>UDI <strong>не учитывает:</strong> накопления на счёте, недвижимость, разовые продажи имущества (например, машины), возврат налога, доход самого заявителя — даже если он работает удалённо или у него свой бизнес.</p><p>Доход проверяется на двух временных горизонтах: на момент рассмотрения заявления (текущий уровень) и за прошлый год (по налоговому расчёту, skatteoppgjør). UDI берёт данные напрямую из Skatteetaten.</p>'
      }
    ],
    faq: [
      { q: 'Доход считается до налогов или после?', a: 'До налогов. По-норвежски это «brutto» — именно эту цифру UDI сверяет с порогом.' },
      { q: 'В старых обсуждениях видела меньшую сумму — она ещё актуальна?', a: 'Скорее всего, нет. Порог регулярно индексируется и в последние годы менялся. Если в архивах чата встречаете старую цифру — она просто из другого времени. Смотрите актуальный порог на UDI.' },
      { q: 'Нужен постоянный контракт или временный тоже подходит?', a: 'Подойдёт и постоянный, и временный. Главное — чтобы UDI поверил, что доход на этом уровне продержится ещё минимум год. С временным контрактом сложнее: чем ближе к концу срока, тем хуже.' },
      { q: 'Если супруг — студент, действуют те же правила?', a: 'Нет, для студентов есть отдельная специфика и пониженный порог при определённых условиях. Подробно — в статье <a data-article=student-spouse>«Если супруг — студент: какая учёба даёт право на воссоединение»</a>.' },
      { q: 'Учитывается ли недвижимость, накопления или мой собственный доход?', a: 'Нет. UDI смотрит только на регулярный доход референс-персоны (супруга). Активы и доход заявителя в кейсе не учитываются.' },
      { q: 'Отличается ли порог дохода для норвежцев и для граждан ЕС?', a: 'Да, сильно. Для норвежцев и Skilled worker — фиксированная сумма. Для граждан ЕС/ЕЭЗ нет такой суммы: они должны «реализовывать право на проживание» и обеспечивать семью так, чтобы не обращаться за социальной помощью.' },
      { q: 'Что делать, если UDI прислал письмо с запросом нового контракта во время ожидания?', a: 'Обычно это значит, что UDI хочет убедиться, что доход всё ещё на нужном уровне. Ответьте быстро (срок указан в письме), приложите свежий контракт и расчётные листы. Если контракт изменился в худшую сторону — желательно проконсультироваться, потому что это может привести к отказу.' },
      { q: 'Что делать, если доход супруга не достигает минимума?', a: 'Вариантов немного. Можно подождать и подать позже — после повышения зарплаты или нового контракта. Подача с недостаточным доходом — почти гарантированный отказ.' },
      { q: 'Нужна ли справка из NAV о том, что супруг не получает пособий?', a: 'Обычно входит в чек-лист. Это справка, что за последние 12 месяцев референс-персона не получала «социальной помощи» (sosialhjelp) — иначе UDI откажет, и нужно будет ждать год после прекращения выплат. Формально UDI убрал её из публичного чек-листа, но без неё неоднократно приходил отказ — прикладывайте всегда.' },
      { q: 'Если отказали из-за отсутствующей справки NAV — апелляция или переподача?', a: 'У вас две развилки: апелляция или переподача с приложенной справкой. По мнению участников сообщества, переподача может быть быстрее, но это индивидуально и зависит от обстоятельств кейса.' }
    ],
    sectionsAfterFaq: [
      {
        title: 'Особенности для кейса «Беженец»',
        body: '<p>Если ваш супруг — беженец или получил защиту в Норвегии, требование по доходу к нему не применяется — но только если уложиться в строгие сроки регистрации заявления и подачи документов.</p><p>Точные сроки и условия — в статье <a data-article=refugee-6-month-window>«Окно 6 месяцев: главный срок для беженцев»</a>.</p>'
      },
      {
        title: 'Особенности для кейса «ЕС/ЕЭЗ»',
        body: '<p>Если принимающая сторона — гражданин ЕС/ЕЭЗ (не Норвегии), правил с фиксированной суммой нет. Гражданин ЕС/ЕЭЗ должен работать, быть самозанятым, учиться или иметь собственные средства, и иметь возможность содержать семью без обращения за пособиями. Точную сумму UDI не публикует, оценка идёт индивидуально.</p>'
      },
      {
        title: 'Особенности для кейса «Студент»',
        body: '<p>Если референс-персона — студент, UDI применяет пониженный порог дохода, но только при выполнении ряда условий. Главное узкое место: иностранным студентам Lånekassen обычно недоступен, а стипендий университета редко хватает на нужную сумму. Сбережения, недвижимость и доход самого заявителя не «дотягивают» исключение.</p><p>Подробно — в статье <a data-article=student-spouse>«Если супруг — студент: какая учёба даёт право на воссоединение»</a>.</p>'
      }
    ],
    warn: '<p>Срок 6 месяцев на регистрацию для беженцев пропустить нельзя — после регистрации можно собирать документы дольше, но окно регистрации жёсткое.</p>',
    tip: '<p>Перед подачей зайдите на skatteetaten.no и проверьте свой налоговый расчёт за прошлый год. Если есть расхождения с расчётными листами — лучше разобраться до подачи, чем во время рассмотрения.</p><p>Если во время ожидания от UDI пришло автоматическое письмо с просьбой обновить данные о доходе — это не повод для паники и не значит, что «взялись за дело». Это плановое информационное письмо.</p>',
    compare: {
      udi: 'UDI чётко указывает сумму и виды дохода. Налоговые данные берёт напрямую из Skatteetaten.',
      practice: 'UDI смотрит не только на цифру, но и на «устойчивость» дохода: лучше показать стабильную картину, чем резкие скачки в последних расчётных листах.'
    },
    quotes: [
      { text: 'У меня был отказ из-за отсутствия документа от нав (мы звонили в udi они сказали док им не нужен). Сейчас справку от нав официально с сайта убрали и тут даже не угадаешь, если не знаешь, что такой пункт был.', author: 'Участник сообщества, 06.11.2025 · супруг-норвежец, ВНЖ со второго раза' },
      { text: 'Первый раз мы подавались на визу D, чтобы приехать и подать документы в Норвегии. Нам отказали, потому что дохода не было вообще, кроме стипендии от универа. Наличие недвижимости, машины и сбережений достаточных, чтобы спокойно жить несколько лет, их не убедил.', author: 'Участник сообщества, 01.02.2026 · супруг-норвежец, студент магистратуры' }
    ],
    sources: [
      { label: 'UDI: Income requirement in family immigration cases', url: 'https://www.udi.no/en/word-definitions/income-requirement-in-family-immigration-cases-/' },
      { label: 'UDI: Subsistence requirement for family immigration', url: 'https://www.udi.no/en/word-definitions/subsistence-requirement-for-family-immigration/' }
    ]
  },

  // ============================================================
  // 2. VISA D
  // ============================================================
  'visa-d': {
    tldr: [
      'Виза D — это <strong>въездная</strong> виза, не ВНЖ. Даёт право один раз заехать в Норвегию, чтобы оформить карту ВНЖ.',
      'Стандартный путь: получаете её <strong>после</strong> одобрения ВНЖ. До одобрения посольство выдаёт визу D редко.',
      'После въезда в Норвегию — короткий срок, чтобы явиться в полицию. Срок указан в самой визе.',
      'Для супругов граждан ЕС/ЕЭЗ виза D обычно не нужна — у них другой путь въезда.'
    ],
    actionNow: [
      'Дождитесь одобрения ВНЖ от UDI — до этого визу D почти никогда не выдают.',
      'После одобрения подайте на визу D через тот же визовый центр, через который подавали на ВНЖ.',
      'Запланируйте въезд в Норвегию в течение действующего коридора и явку в полицию в первые дни после прилёта.'
    ],
    sections: [
      {
        title: 'Что такое виза D',
        body: '<p>Виза D — это <strong>въездная виза</strong>, которая даёт право заехать в Норвегию. Сама по себе она не равна ВНЖ и не даёт права жить и работать в стране. Все права появляются, когда вы лично приходите в полицию по месту жительства и оформляете карту ВНЖ.</p><p>У визы D есть две важные временные рамки: <strong>коридор для въезда</strong> и <strong>срок действия после въезда</strong>. Конкретные значения указаны в самой визе и могут отличаться в разных кейсах.</p>'
      },
      {
        title: 'Когда виза D выдаётся',
        body: '<p><strong>После одобрения ВНЖ</strong> — стандартный путь. Это самая частая ситуация: UDI одобрил ВНЖ, и теперь нужна виза, чтобы заехать. По кейсам сообщества — обычно оформляется быстро.</p><p><strong>До одобрения ВНЖ</strong> — теоретически возможно, но на практике редко. Посольство выдаёт визу D только если уверено, что ВНЖ почти наверняка будет одобрен. Большинству, кто пробует получить визу D «авансом», отказывают.</p><p>Кому посольство в принципе может рассмотреть визу D до одобрения ВНЖ: супругам граждан Норвегии, супругам обладателей ПМЖ, супругам Skilled worker с работодателем в Норвегии, родителям ребёнка с норвежским гражданством.</p>'
      },
      {
        title: 'Если паспорт остаётся в посольстве — виза D без отдельной пошлины',
        body: '<p>По кейсам сообщества — у визы D после одобрения ВНЖ есть два возможных сценария подачи, и они <strong>отличаются по пошлине</strong>.</p><p><strong>Сценарий 1. Паспорт остался в посольстве при подаче на ВНЖ.</strong> Если вы оставили паспорт в посольстве и не запрашивали его обратно — после одобрения ВНЖ визу D вклеивают в паспорт автоматически. Отдельной заявки и <strong>отдельной пошлины не требуется</strong>: всё включено в первоначальную подачу на ВНЖ.</p><p><strong>Сценарий 2. Отдельное заявление на визу D.</strong> Если паспорт после подачи был возвращён (или подача на ВНЖ шла без сдачи паспорта), то на визу D нужно подавать отдельным заявлением. В этом случае <strong>пошлина платится отдельно</strong> — даже несмотря на то, что это «вторая часть» того же процесса воссоединения.</p><p>Сценарий 2 также относится к тем, кто решает подать на визу D <strong>до решения по ВНЖ</strong>, чтобы ждать в Норвегии. В этом случае это полностью самостоятельный процесс посольства — со своим сроком рассмотрения и своей пошлиной.</p>'
      }
    ],
    faq: [
      { q: 'Чем виза D отличается от ВНЖ?', a: 'Виза D — только въездная. Она нужна, чтобы заехать в Норвегию. Право жить и работать даёт уже карта ВНЖ, которую вы получаете в полиции после прибытия.' },
      { q: 'Сколько стоит виза D?', a: 'Близко к стоимости визы C. Подача идёт через ту же форму, плюс оплата доставки паспорта обратно. Актуальную стоимость смотрите на сайте посольства или VFS.' },
      { q: 'Нужно ли платить отдельную пошлину за визу D, если ВНЖ одобрили?', a: 'Зависит от того, где сейчас ваш паспорт. Если он остался в посольстве после подачи на ВНЖ — визу D вклеят без отдельной заявки и без отдельной пошлины. Если паспорт был возвращён или вы подаёте на визу D отдельно (например, чтобы ждать решения в Норвегии) — пошлина платится отдельно.' },
      { q: 'Сколько времени рассматривается виза D?', a: 'Зависит от сценария. После одобрения ВНЖ — обычно быстро, в пределах недель. Это вклейка визы в уже одобренное дело. При отдельной подаче до решения по ВНЖ — это самостоятельный процесс посольства. Официальный ориентир — несколько недель, но по кейсам последних месяцев фактическое ожидание растягивается до нескольких месяцев. UDI на эти сроки не влияет — решение принимает посольство.' },
      { q: 'Можно ли подавать на визу D одновременно с заявлением на ВНЖ?', a: 'Технически можно, но по кейсам сообщества — высокий процент отказов. Распространённая причина — отсутствие документа, которого не было в публичном чек-листе UDI. Стратегия многих участников: сначала подать на ВНЖ, дождаться передачи в UDI, и только потом подавать на визу D со всеми возможными справками.' },
      { q: 'Что если посольство попросит исправить ошибку в заявлении на визу D?', a: 'По опыту одного из участников — посольство может сдвинуть «дату начала рассмотрения» на момент, когда исправление поступило, а не на дату первоначальной подачи. То есть отсчёт срока пойдёт заново. Стоит готовить пакет максимально полным с первого раза.' },
      { q: 'Биометрия для визы D — отдельная от визы C?', a: 'По кейсам сообщества — да, отдельная. Старые биометрические данные не используются. Если у вас уже сдана биометрия для одной визы, для другой может потребоваться сдать заново. Уточняйте при подаче.' },
      { q: 'Что делать с паспортом, пока он в посольстве?', a: 'Можно оформить второй заграничный паспорт и пользоваться им для других поездок. Если первый паспорт срочно понадобился — напишите в посольство, паспорт можно запросить обратно (по доверенности тоже). Имейте в виду: если паспорт забрать обратно, после одобрения ВНЖ за визой D придётся подавать заново — отдельным заявлением и с отдельной пошлиной.' },
      { q: 'Можно ли подать на визу D повторно после отказа?', a: 'Да. Можно подать письменную апелляцию (klage), но она идёт долго. Чаще быстрее и дешевле подать заново со всеми возможными справками — особенно если причина отказа в одной недостающей бумаге.' },
      { q: 'Что если поменять тип заявки — например, с C на D?', a: 'По кейсам сообщества — очередь начинается заново. UDI запрашивает дополнительные документы и переклассифицирует заявление. Срок отсчитывается от момента переклассификации, а не от первой подачи.' }
    ],
    sectionsAfterFaq: [
      {
        title: 'Что делать после получения визы D',
        body: '<p>После того как получили визу D, шаги такие:</p><ul><li>Спланируйте въезд в течение коридора, указанного в самой визе.</li><li>В первые дни после прилёта явитесь в полицию по месту жительства — конкретный срок указан в визе. Если не уложиться, могут возникнуть проблемы с оформлением карты.</li><li>Закажите карту ВНЖ. После её получения уже можно свободно выезжать и въезжать в Норвегию.</li></ul>'
      },
      {
        title: 'Если супруг — гражданин ЕС/ЕЭЗ',
        body: '<p>Супругам граждан ЕС/ЕЭЗ (не Норвегии) виза D обычно не выдаётся — у них другой путь въезда. По кейсам сообщества посольство Норвегии в Москве в таких случаях предлагает оформить визу C с сопроводительным письмом, ссылающимся на директиву ЕС 2004/38/EC.</p>'
      }
    ],
    warn: '<p>Виза D даёт право только въехать. Она <strong>не даёт</strong> права работать, учиться или жить в Норвегии до того, как вы оформите карту ВНЖ в полиции. Все права появляются после явки в полицию и получения карты.</p><p>Срок явки в полицию — короткий (несколько дней с момента въезда). Точное число дней указано в самой визе. Не пропустите его.</p>',
    tip: '<p>Если ваш план — приехать в Норвегию во время ожидания ВНЖ, виза D обычно <strong>не первый выбор</strong>. Чаще проще и реалистичнее: обычная шенгенская виза C на короткий визит, безвиз (если ваше гражданство это позволяет) или путь по директиве 2004/38/EC для супругов граждан ЕС/ЕЭЗ.</p>',
    compare: {
      udi: 'Виза D — особый тип визы, которую выдаёт посольство, а не UDI. UDI указывает категории, кому она в принципе может быть выдана до одобрения ВНЖ.',
      practice: 'В сообществе визу D называют «полуживотным»: при сходных вводных кому-то выдают, кому-то отказывают. После одобрения ВНЖ — обычно дают быстро. При отдельной подаче до решения по ВНЖ фактическое ожидание в последних кейсах растягивается до нескольких месяцев — UDI на эти сроки не влияет, решение принимает посольство.'
    },
    quotes: [
      { text: 'Виза Д это не то же самое, что воссоединение. Это въездная виза. А вот её вам уже дали, чтобы вы приехали в Норвегию и получили резидентскую карточку.', author: 'Участник сообщества, 07.11.2025' },
      { text: 'Вероятность 50/50 получить визу Д — о ней так мало известно, что это какое-то существующее-несуществующее животное, которое кто-то видел, а кто-то не видел.', author: 'Участник сообщества, 22.01.2026 · супруг-норвежец' },
      { text: 'Я платила за визу Д. Сначала на ВНЖ, через 4 месяца на визу Д.', author: 'Участница сообщества, 24.05.2026 · супруг-норвежец, ВНЖ получен' }
    ],
    sources: [
      { label: 'UDI: Entry visas (D-visas)', url: 'https://www.udi.no/en/want-to-apply/visit-and-vacation/visa-for-entering-norway-and-the-schengen-area/' }
    ]
  },

  // ============================================================
  // 3. VISA C — GUEST VISA
  // ============================================================
  'visa-c-guest': {
    tldr: [
      'Виза C — короткая шенгенская виза (до 90 дней). Её используют, чтобы приехать к супругу в Норвегию: до подачи на ВНЖ, чтобы её подать, или просто навестить во время ожидания решения.',
      'Путей три, и они разные по сложности и шансам: через Норвегию, через другую страну Шенгена, по директиве ЕС 2004/38/EC (только если ваш супруг — гражданин ЕС/ЕЭЗ).',
      'До подачи на ВНЖ норвежскую визу C получить обычно несложно — это стандартный гостевой кейс. После подачи посольство сомневается в возвращении, и отказы становятся вероятны. Тогда люди часто оформляют визу через другую страну Шенгена.',
      'Виза C не даёт права работать. Продлить её больше 90 дней нельзя.'
    ],
    actionNow: [
      'Определите свой путь по кейсу супруга — варианты ниже подходят разным ситуациям.',
      'Подготовьте документы для выбранного пути: пакеты сильно отличаются.',
      'Запланируйте поездку в пределах разрешённых 90 дней — продление невозможно.'
    ],
    sections: [
      {
        title: 'Кто такой Skilled worker в этой статье',
        body: '<p>В контексте гостевой визы UDI оперирует двумя разными значениями термина «Skilled worker» — это часто путает. Уточняем один раз, дальше по тексту используем без скобок:</p><ul><li><strong>Skilled worker (статус заявителя по образованию)</strong> — это про <strong>вас</strong>, приезжающую сторону. Если у вас есть высшее образование или приравненная квалификация, UDI «classes you as a skilled worker» даже при семейной миграции к мужу-норвежцу. Это даёт расширенные права: ехать в Норвегию по визе другой страны Шенгена, подать ВНЖ из Норвегии, оставаться до окончания рассмотрения.</li><li><strong>Skilled worker (кейс воссоединения)</strong> — это <strong>отдельный кейс</strong>, где принимающая сторона — иностранец с ВНЖ Skilled worker через норвежского работодателя. К нему вы приезжаете по семейной миграции.</li></ul><p>В тексте ниже под «Skilled worker» имеется в виду <strong>первое значение</strong> — про вашу квалификацию по образованию — если явно не указано иное.</p>'
      }
    ],
    paths: [
      {
        variant: 1,
        eyebrow: 'Путь 1 · Основной путь для кейса «Гражданин Норвегии»',
        title: 'Виза C от Норвегии',
        badge: 'сложно после подачи на ВНЖ',
        badgeKind: 'warn',
        body: '<p>Подача через визовый центр Норвегии (VFS).</p><p>Это обычная гостевая виза для посещения супруга в Норвегии. Подходит всем, в первую очередь — заявителям, не квалифицирующимся как Skilled worker по образованию и не являющимся членами семьи гражданина ЕС/ЕЭЗ. Для них Путь 1 — основной.</p><p>Насколько просто получить визу — зависит от вашего сценария:</p><p><strong>До подачи на ВНЖ — просто посетить супруга.</strong> Стандартный гостевой кейс, никаких особенностей. Подаётесь как обычный турист, с приглашением от супруга. Получить визу обычно несложно — у вас ещё нет «причины остаться», и посольство не сомневается в возвращении.</p><p><strong>До подачи на ВНЖ — приехать, чтобы подать ВНЖ из Норвегии.</strong> Технически возможно только заявителям со статусом Skilled worker (по образованию) и членам семей граждан ЕС/ЕЭЗ — у остальных нет права подачи из Норвегии в принципе. По практике сообщества: в анкете на визу C цель указывают как обычный визит к супругу, не «подача ВНЖ».</p><p><strong>Приехал в гости, во время визита решил подать.</strong> Нормальный сценарий — UDI его допускает. Если вы Skilled worker (по образованию) или член семьи гражданина ЕС/ЕЭЗ и подача из Норвегии вам разрешена, можно зарегистрировать заявление пока виза действительна.</p><p><strong>После подачи ВНЖ — приехать на время ожидания.</strong> Здесь начинается главная сложность. Посольство сомневается, что вы вернётесь. UDI прямо предупреждает: посольство «может счесть маловероятным, что вы вернётесь до окончания визы». По практике сообщества — отказы здесь не редкость.</p><p><strong>Что повышает шансы во всех сценариях:</strong> обратные билеты, действующая работа, недвижимость, родственники. Особенно важно после подачи ВНЖ.</p><p><strong>Если визу дали:</strong> обязательно вернитесь до окончания визы — иначе UDI откажет в ВНЖ. Исключение: если UDI одобрит ВНЖ, пока вы в Норвегии, возвращаться не нужно.</p>'
      },
      {
        variant: 2,
        eyebrow: 'Путь 2 · Самый частый путь — но с важными ограничениями',
        title: 'Шенгенская виза другой страны',
        badge: 'самый частый путь',
        badgeKind: 'popular',
        body: '<p>Стандартный туристический путь — подаётесь, например, во Францию или Италию, получаете шенген как обычный турист.</p><p><strong>Кому UDI разрешает этот въезд в Норвегию:</strong> заявителям со статусом Skilled worker (по образованию) и членам семьи граждан ЕС/ЕЭЗ. Им разрешено приезжать с гостевой визой другой страны Шенгена и оставаться в Норвегии до окончания рассмотрения, даже если виза истекает.</p><p><strong>Кому UDI прямо не рекомендует этот путь:</strong> всем остальным заявителям, включая обычный кейс «жена/муж норвежца» без высшего образования. UDI предупреждает: если в Норвегии станет известно, что цель приезда — не туризм, а семейная встреча или подача на ВНЖ, в ВНЖ могут отказать за указание ложной информации при получении визы.</p><p><strong>Как это происходит на практике:</strong> большинство людей едут именно этим путём. Виза оформляется на конкретную туристическую поездку в страну, выдающую визу. После получения визы — и особенно если виза мульти на полгода-год — её часто используют для последующих поездок по Шенгену, в том числе в Норвегию.</p><p><strong>Когда важна «обкатка» визы:</strong> если вы Skilled worker (по образованию) или член семьи гражданина ЕС/ЕЭЗ и приезжаете подавать ВНЖ из Норвегии, стоит показать, что виза использовалась по её прямому назначению: сначала поехать в страну выдачи, провести там несколько дней, и только потом ехать в Норвегию.</p>'
      },
      {
        variant: 3,
        eyebrow: 'Путь 3 · Лайфхак для супругов граждан ЕС/ЕЭЗ',
        title: 'Виза C по директиве ЕС 2004/38/EC',
        badge: 'приоритет + бесплатно',
        badgeKind: 'loophole',
        body: '<p>Если ваш супруг — гражданин ЕС/ЕЭЗ (не Норвегии), у вас есть право на упрощённую визу по директиве 2004/38/EC. Норвегия применяет её через соглашение ЕЭЗ.</p><p><strong>Что даёт:</strong> бесплатно, минимальный пакет документов, приоритетная обработка. По кейсам сообщества — мульти-виза обычно за 2-3 недели, но срок зависит от страны выдачи и конкретного консульства.</p><p><strong>Минимальный пакет:</strong> анкета страны, выдающей визу; копия паспорта супруга; брачное свидетельство; сопроводительное письмо со ссылкой на директиву 2004/38/EC. Справки с работы и выписки из банка по этой директиве не требуются.</p><p><strong>Юридическая логика:</strong> директива работает, когда гражданин ЕС/ЕЭЗ реализует право на свободное передвижение — то есть едет в страну Шенгена, гражданином которой он сам не является. Если супруг — гражданин Польши и живёт в Норвегии, директива работает: он реализует право, находясь не в Польше. Если супруг — гражданин Польши и живёт в Польше, директива не работает: он у себя дома.</p><p><strong>Где не сработает:</strong> подача в консульство страны, гражданином которой является ваш супруг. Подача в норвежский визовый центр для поездки к супругу-европейцу, живущему в Норвегии, тоже обычно не работает. Подавайтесь в консульство любой третьей страны Шенгена — например, во Францию или Италию.</p><p><strong>Как это происходит на практике:</strong> люди оформляют визу под планируемую совместную поездку с супругом в страну, выдающую визу — например, во Францию. После получения визы (часто мульти на полгода) её используют для дальнейших поездок по Шенгену, в том числе в Норвегию. Перед использованием визы для Норвегии её обкатывают по назначению — заехать через страну выдачи, побыть там несколько дней. Если планы на поездку поменялись после получения визы — это не проблема; виза остаётся действительной для любых поездок по Шенгену.</p>'
      }
    ],
    faq: [
      { q: 'На сколько дней дают визу C?', a: 'Максимум — до 90 дней в любой период из 180. Конкретный срок указан в самой визе и может быть меньше: посольство иногда даёт ровно на даты поездки. По директиве 2004/38/EC чаще выдают мульти-визу на полгода или год.' },
      { q: 'Сколько дней рассматривается виза C?', a: 'Стандартный срок — несколько недель (точные значения смотрите на сайте визового центра выбранной страны). По директиве 2004/38/EC обработка приоритетная — по кейсам сообщества обычно 2-3 недели, но срок зависит от страны выдачи и конкретного консульства.' },
      { q: 'Можно ли приехать в гости до подачи на ВНЖ?', a: 'Да, это обычный гостевой кейс. Подаётесь на норвежскую визу C через VFS, с приглашением от супруга — никаких особенностей. Сложности с получением визы возникают после подачи на ВНЖ, когда посольство сомневается, что вы вернётесь.' },
      { q: 'Приехал в гости, во время визита решил подать ВНЖ — это нормально?', a: 'Да. UDI допускает такой сценарий: пока виза C действительна, можно зарегистрировать заявление, если подача из Норвегии вам в принципе разрешена (Skilled worker по образованию, члены семей граждан ЕС/ЕЭЗ). Цель визы менялась естественно — это не обман.' },
      { q: 'Можно ли по визе C подать на ВНЖ уже в Норвегии?', a: 'Только заявителям со статусом Skilled worker (по образованию) и членам семей граждан ЕС/ЕЭЗ. Остальным UDI право подачи из Норвегии не даёт. Если виза получена в обычном порядке как туристическая, и выяснится, что цель — подача на ВНЖ, могут отказать в ВНЖ за ложную информацию.' },
      { q: 'Что будет, если приехать в Норвегию по шенгену другой страны?', a: 'Зависит от вашего сценария. Если вы Skilled worker (по образованию) или член семьи гражданина ЕС/ЕЭЗ — UDI этот въезд разрешает, в гости приехать можно. При подаче ВНЖ из Норвегии важно, чтобы виза была обкатана по назначению. Если вы не Skilled worker и подали ВНЖ из посольства своей страны — даже просто приезд в гости UDI прямо не рекомендует: ваше заявление на ВНЖ может быть отклонено за ложную информацию при получении визы. Для этой категории основной путь — норвежская виза C (Путь 1).' },
      { q: 'Закрыты ли остальные страны Шенгена после отказа Норвегии?', a: 'Нет. Отказ конкретной страны не отмечается в паспорте, и можно подаваться в другую страну. По кейсам сообщества — после отказа Норвегии заявители получали визы Италии, Венгрии и Франции (иногда не сразу, через несколько месяцев).' },
      { q: 'Можно ли продлить визу C, если ВНЖ ещё не пришёл?', a: 'Нет. Виза C — это короткая виза, продлить её больше 90 дней в полугодии нельзя. Если 90 дней закончились, нужно выезжать из Шенгена.' },
      { q: 'Что делать, если в визе C от Норвегии отказали?', a: 'Можно подать апелляцию (поможет приложить маршрутный лист и сопроводительное письмо), но это долго. Чаще быстрее подать через другую страну Шенгена.' }
    ],
    warn: '<p>Виза C не даёт права работать в Норвегии — только приехать к супругу. Все рабочие права появляются только после получения ВНЖ.</p><p>Правила выдачи виз и въезда в страны Шенгена сейчас часто меняются: запуск системы Entry/Exit, требования к биометрическим паспортам в разных странах, требования к страховке. Перед поездкой проверьте актуальные правила <strong>именно той страны</strong>, через которую планируете ехать.</p>',
    tip: '<p>Если ваш супруг — гражданин ЕС/ЕЭЗ, путь 3 (директива 2004/38/EC) почти всегда оказывается самым удобным. Бесплатно, минимум документов, обычно мульти-виза за пару недель. Многие пропускают этот путь, потому что просто не знают о нём.</p>',
    compare: {
      udi: 'Приезжать в Норвегию по гостевой визе другой страны Шенгена UDI прямо разрешает только заявителям со статусом Skilled worker (по образованию) и членам семей граждан ЕС/ЕЭЗ. Остальным — не рекомендует, заявление на ВНЖ может быть отклонено за ложную информацию.',
      practice: 'Skilled worker и члены семей граждан ЕС часто едут именно через другую страну Шенгена — UDI это разрешает. Перед подачей ВНЖ из Норвегии визу обычно «обкатывают» по назначению: заезжают через страну выдачи, проводят там несколько дней, используют визу по её прямой цели. Обычным заявителям этот путь UDI не рекомендует — даже для простого приезда в гости.'
    },
    quotes: [
      { text: 'Я получаю визу по директиве ЕС 2004/38/EC для посещения мужа. Но как ни иронично — не через Норвегию, а через другие страны Шенгена, а потом еду в Норвегию. Эта виза не применяется, если гражданин ЕС находится в своей собственной стране.', author: 'Участник сообщества, 26.12.2025 · муж — гражданин ЕС' },
      { text: 'У меня был отказ на Францию, я подала спустя 5 месяцев на Венгрию — мне выдали шенген, но однократный.', author: 'Участник сообщества, 13.11.2025' },
      { text: 'У меня они не увидели «достаточной связи с родиной» и послали.', author: 'Участник сообщества, 13.11.2025 · после подачи на ВНЖ, отказ в гостевой' }
    ],
    sources: [
      { label: 'UDI: Visa for entering Norway and the Schengen area', url: 'https://www.udi.no/en/want-to-apply/visit-and-vacation/visa-for-entering-norway-and-the-schengen-area/' },
      { label: 'UDI: Have applied — Family immigration', url: 'https://www.udi.no/en/have-applied/family-immigration/' },
      { label: 'UDI: EU/EEA citizen — directive 2004/38/EC', url: 'https://www.udi.no/en/word-definitions/eu-eea-citizen/' }
    ]
  },

  // ============================================================
  // 4. EDUCATION RECOGNITION
  // ============================================================
  'edu-recognition': {
    tldr: [
      'Признание иностранного образования в Норвегии делает <strong>HK-dir</strong> (Norwegian Directorate for Higher Education and Skills). Это бесплатная процедура.',
      'Подавать можно <strong>дистанционно, ещё до получения ВНЖ</strong> — параллельно с ожиданием UDI. Это экономит до полугода после переезда.',
      'Документы те же, что вы и так готовите для UDI: диплом и приложение с оценками, апостиль, перевод.',
      'Для большинства профессий признание НЕ обязательно — работодатель сам оценивает квалификацию. Обязательно только для <strong>регулируемых профессий</strong>: медицина, педагогика, юристы, инженеры в отдельных областях.'
    ],
    actionNow: [
      'Проверьте на <a href="https://hkdir.no/en/foreign-education" target="_blank" rel="noopener">hkdir.no</a>, регулируется ли ваша профессия в Норвегии. Если да — нужна авторизация от профильного ведомства, не только признание HK-dir.',
      'Подготовьте документы: диплом, приложение с оценками, апостиль, перевод на английский или норвежский.',
      'Подайте заявку онлайн через портал HK-dir — можно из любой страны.'
    ],
    sections: [
      {
        title: 'Зачем нужно признание',
        body: '<p>В Норвегии признание иностранного образования — <strong>не универсальное требование для работы</strong>. Для большинства профессий работодатель сам оценивает, подходит ли ваша квалификация для конкретной позиции.</p><p>Признание помогает:</p><ul><li>Подтвердить уровень и объём вашей учёбы в норвежских терминах (бакалавр / магистр / PhD), что упрощает оценку для работодателя.</li><li>Получить авторизацию для работы в <strong>регулируемых профессиях</strong>: врач, медсестра, парамедик, учитель, инженер по строительным конструкциям, юрист и др. Без авторизации в этих профессиях работать нельзя.</li><li>Поступить в норвежский университет или колледж на программу более высокого уровня (например, в магистратуру).</li></ul>'
      },
      {
        title: 'Когда подавать на признание',
        body: '<p><strong>Можно ещё до получения ВНЖ.</strong> Подача в HK-dir дистанционная и не требует норвежского личного номера или ВНЖ — достаточно создать аккаунт «utenlandsk bruker» (иностранный пользователь) на портале HK-dir.</p><p>Это означает, что параллельно с ожиданием решения UDI можно начать процесс признания. По опыту сообщества — рассмотрение занимает около полугода. Если начать сразу после подачи на ВНЖ, к моменту переезда документы о признании уже могут быть готовы.</p>'
      },
      {
        title: 'Какие документы нужны',
        body: '<p>Базовый комплект для общего признания:</p><ul><li>Диплом об образовании (бакалавр, магистр, PhD или среднее профессиональное).</li><li>Приложение к диплому с оценками (transcript of records).</li><li>Апостиль на оригинал диплома и приложения.</li><li>Перевод документов на английский или норвежский (присяжный или сертифицированный).</li><li>Копия паспорта.</li></ul><p>Удобный момент: <strong>апостиль и перевод документов об образовании вы и так готовите для подачи на ВНЖ</strong>. Те же файлы можно использовать для HK-dir.</p>'
      }
    ],
    faq: [
      { q: 'HK-dir и NOKUT — это одно и то же?', a: 'С 1 января 2023 года функцию признания иностранного образования передали из NOKUT в HK-dir. В чате и старых обсуждениях вам могут встретиться оба названия — это об одном процессе. Сейчас актуальный сайт — hkdir.no.' },
      { q: 'Сколько стоит подача?', a: 'Сама заявка в HK-dir бесплатна. Расходы возникают только на апостиль и перевод документов — но эти же документы вы готовите и для UDI, поэтому никаких дополнительных трат именно для признания обычно нет.' },
      { q: 'Сколько времени рассматривают?', a: 'Стандартный срок — несколько месяцев, по опыту сообщества около полугода. Точные сроки указаны на hkdir.no и могут различаться по программам.' },
      { q: 'Что такое automatic recognition и кому подходит?', a: 'Это упрощённая процедура для отдельных стран и типов дипломов: HK-dir опубликовал стандартное информационное письмо, которое можно скачать без подачи заявки. Полный список стран и программ — на hkdir.no. Если ваша программа в этом списке, заявку можно не подавать.' },
      { q: 'Можно ли работать без признания?', a: 'Для большинства профессий — да. Работодатель сам оценивает квалификацию по диплому и опыту. Признание HK-dir — это просто стандартизированное подтверждение, которое упрощает работодателю задачу. Для регулируемых профессий (медицина, педагогика, юристы) — нет, без авторизации работать нельзя.' },
      { q: 'Регулируется ли моя профессия в Норвегии?', a: 'Полный список регулируемых профессий и контактов профильных ведомств — на сайте hkdir.no в разделе «regulated professions». Для каждой регулируемой профессии есть своё ведомство (например, для медицинских — Helsedirektoratet), и заявку на авторизацию подаёте туда, не в HK-dir.' },
      { q: 'Что если мою специальность не признают?', a: 'По опыту сообщества — не все российские специальности автоматически признаются эквивалентом норвежского образования. Перед подачей стоит проверить статус своей программы в базе уже признанных дипломов на hkdir.no. Если автоматического признания нет, по результатам полной заявки могут признать частично, на меньшее количество кредитов, или запросить дополнительные документы.' }
    ],
    warn: '<p>Если ваша профессия — регулируемая в Норвегии (особенно медицина, педагогика, юристы), <strong>одного признания HK-dir недостаточно</strong>. Дополнительно нужна авторизация от профильного ведомства: для медицинских профессий — Helsedirektoratet, для учителей — отдельная схема через HK-dir. Без неё работать по специальности нельзя.</p>',
    tip: '<p>Подавайте на признание сразу, как только подали на ВНЖ — это параллельный процесс, и документы у вас уже на руках. Получите две полезные бумаги примерно в одно и то же время: ВНЖ и признание образования.</p>',
    quotes: [
      { text: 'Признали моё российское среднее медицинское образование в Норвегии. Присвоили квалификацию парамедика. От момента подачи документов прошло полгода и затрачено 0 рублей — разве что на перевод и апостиль документа об образовании, но это я и так делала для подачи на ВНЖ.', author: 'Участник сообщества, 27.11.2024 · среднее медицинское образование' }
    ],
    sources: [
      { label: 'HK-dir: Recognition of foreign education', url: 'https://hkdir.no/en/foreign-education' },
      { label: 'HK-dir: How to apply for recognition', url: 'https://hkdir.no/en/foreign-education/education-from-outside-of-norway/recognition-of-foreign-higher-education-bachelor-master-and-phd/how-to-apply-foreign-higher-education' },
      { label: 'Helsedirektoratet (для медицинских профессий)', url: 'https://www.helsedirektoratet.no/' }
    ]
  },

  // ============================================================
  // WHERE TO APPLY
  // ============================================================
  'where-to-apply': {
    tldr: [
      'Существует два типа подачи: <strong>из страны гражданства</strong> (через VFS) или <strong>из Норвегии</strong> (в полицию). Главная разница — где вы физически ждёте решение.',
      'Доступные варианты зависят от вашего кейса воссоединения — выберите свой кейс ниже.'
    ],
    sections: [
      {
        title: 'Варианты подачи по кейсам',
        body: '<ul><li><strong>Гражданин Норвегии</strong> — стандартный путь через VFS из России. Из Норвегии можно подавать, если у заявителя есть высшее образование (статус Skilled worker по UDI). <a data-article=where-to-apply-norwegian>Подробнее →</a></li><li><strong>ЕС/ЕЭЗ</strong> — отдельный процесс через карту резидента семьи граждан ЕС, подача обычно в полиции в Норвегии. <a data-article=where-to-apply-eu>Подробнее →</a></li><li><strong>Skilled worker</strong> — стандартный путь через VFS из России, либо подача в Норвегии параллельно с заявлением супруга, если ваш статус позволяет. <a data-article=where-to-apply-skilled>Подробнее →</a></li><li><strong>Беженец</strong> — стандартный путь через VFS из страны проживания. Главное — успеть зарегистрировать заявление в течение 6 месяцев. <a data-article=where-to-apply-refugee>Подробнее →</a></li></ul>'
      }
    ],
    warn: '<p>Подача из Норвегии по шенгенской визе другой страны — серая зона. UDI прямо разрешает такой въезд только заявителям со статусом Skilled worker (по образованию заявителя) и членам семей граждан ЕС/ЕЭЗ. Для остальных это сценарий с риском для ВНЖ.</p><p>Подробно про въезд по разным типам виз — в статье <a data-article=visa-c-guest>«Гостевая виза C: как приехать к супругу в Норвегию»</a>.</p>',
    sources: [
      { label: 'UDI: Frequently asked questions about family immigration', url: 'https://www.udi.no/en/answer-pages/answers-family-immigration/' },
      { label: 'UDI: Family immigration overview', url: 'https://www.udi.no/en/want-to-apply/family-immigration/' }
    ]
  },

  // ============================================================
  // WHERE TO APPLY — NORWEGIAN
  // ============================================================
  'where-to-apply-norwegian': {
    tldr: [
      'Стандартный путь для большинства — подача из России через визовый центр VFS, ожидание решения дома.',
      'Подача из Норвегии возможна, <strong>только если у заявителя есть высшее или средне-специальное образование</strong> — это даёт статус Skilled worker по UDI. Тогда документы сдаются в полицию по месту жительства супруга, ожидание — в Норвегии.',
      'Самый рабочий вариант приехать для подачи из Норвегии по практике сообщества — норвежская виза C на посещение супруга.',
      'Если ждёте решение в Норвегии — по правилам UDI работать нельзя, включая удалённую работу.'
    ],
    actionNow: [
      'Решите, где хотите проводить время ожидания решения — это год-полтора, иногда два. Дома или в Норвегии рядом с супругом.',
      'Если рассматриваете подачу из Норвегии — проверьте, подходит ли ваше образование под критерии UDI <strong>до поездки</strong>. Если не подходит — путь Skilled worker для вас закрыт.',
      'Если подходит — соберите диплом с апостилем и переводом на английский заранее. Без него подача из Норвегии невозможна.'
    ],
    sections: [
      {
        title: 'Стандартный путь — подача из России через VFS',
        body: '<p>Это основной путь для большинства заявителей в кейсе «Гражданин Норвегии». Подходит всем без исключений.</p><p>Документы сдаются в визовый центр VFS в России, время ожидания решения вы проводите дома, продолжаете работать. По кейсам сообщества срок рассмотрения для россиян сейчас — около 1,5–2 лет.</p>'
      },
      {
        title: 'Подача из Норвегии — через статус Skilled worker (по образованию)',
        body: '<p>Это альтернативный путь, доступный <strong>только</strong> тем, у кого есть высшее или средне-специальное образование. Если его нет — этот путь закрыт.</p><p>UDI признаёт квалификацию Skilled worker, если у вас есть завершённое высшее образование (минимум бакалавр), завершённое средне-специальное образование (минимум 3 года на уровне upper secondary, специальность признаётся в Норвегии) или специальная квалификация через долгий профессиональный опыт (около 6 лет) в сочетании с курсами и образованием.</p><p><strong>Не подходит:</strong> школьный аттестат, неоконченное высшее, краткосрочные курсы без аккредитации.</p>'
      },
      {
        title: 'Как приехать в Норвегию для подачи',
        body: '<p>Самый рабочий путь по практике сообщества — норвежская виза C на посещение супруга. Получаете обычную гостевую визу от Норвегии через VFS, приезжаете, обращаетесь в полицию с дипломом. Подробно про этот и другие пути въезда — в статье <a data-article=visa-c-guest>«Гостевая виза C: как приехать к супругу в Норвегию»</a>.</p>'
      },
      {
        title: 'Можно ездить туда-обратно во время ожидания',
        body: '<p>Подача из Норвегии не означает, что вы «застряли» там на весь срок ожидания. Если вы приехали по гостевой шенгенской визе, вы можете свободно выезжать и возвращаться — главное соблюдать правила пребывания (90 дней из 180 в Шенгене).</p><p>UDI прямо разрешает: можно оставаться в Норвегии до решения, даже если виза истечёт во время ожидания.</p>'
      }
    ],
    faq: [
      { q: 'Нужен ли мне диплом, если я подаюсь по семейной миграции?', a: 'Для самой семейной миграции — нет. Диплом нужен только если вы хотите подаваться из Норвегии — он даёт статус Skilled worker (по образованию).' },
      { q: 'Какие документы нужны для подтверждения статуса Skilled worker?', a: 'Диплом о высшем или средне-специальном образовании, с апостилем на оригинале и переводом на английский язык. Перевод должен быть сделан аккредитованным переводчиком.' },
      { q: 'А если у меня безвизовое гражданство (например, второй паспорт)?', a: 'Если у вас есть гражданство страны, не требующей визы для въезда в Норвегию (США, Канада, многие страны Латинской Америки), вы можете подать ВНЖ из Норвегии без статуса Skilled worker. Для российских граждан этот путь не работает.' },
      { q: 'Какой статус нужен у супруга, чтобы я могла подаваться по кейсу «Гражданин Норвегии»?', a: 'Супруг должен иметь гражданство Норвегии или одной из Северных стран (Швеция, Дания, Финляндия, Исландия). Если у него ПМЖ или ВНЖ Skilled worker — это другой кейс воссоединения.' }
    ],
    warn: '<p>По опыту сообщества, сотрудники полиции в Норвегии не всегда знают актуальные правила UDI. Бывают случаи, когда сотрудник говорит, что вы не имеете право подавать из Норвегии — хотя на UDI это разрешено. Помогает: распечатать соответствующий раздел сайта UDI и показать.</p>',
    tip: '<p>Если рассматриваете подачу из Норвегии — посчитайте финансовую подушку. Год-полтора без дохода (включая удалённую работу) — серьёзная статья расходов.</p><p>Если ваше образование точно подходит под Skilled worker — подготовьте диплом с апостилем и переводом <strong>в России, до поездки</strong>. Делать это уже в Норвегии будет дольше и дороже.</p>',
    compare: {
      udi: 'Главное правило — подача из страны гражданства. Подача из Норвегии — исключение для тех, кто квалифицируется как Skilled worker по образованию. UDI прямо пишет: «There are only a few situations where applying for family immigration while in Norway is acceptable».',
      practice: 'Подача в Норвегии через диплом — рабочий путь, проверенный многими кейсами сообщества. Многие заявители совмещают ожидание в Норвегии с поездками домой — это разрешено правилами пребывания.'
    },
    quotes: [
      { text: 'У меня работник тоже не очень попался, запутал все документы, а потом в самом конце сказал, что я вообще не могу подавать из Норвегии. Но я сказала уверенно, что могу, и нашла скрины UDI, где написано, что можно по любому шенгену и с дипломом.', author: 'Участник сообщества, 22.01.2026 · диплом высшего, подача в полиции' },
      { text: 'Вам нужен диплом о средне-специальном или высшем образовании с апостилем и переводом на английский язык предоставить в полицию при подачи документов на воссоединение. Только в таком случае вы можете ожидать решения в Норвегии.', author: 'Участник сообщества, 11.12.2024 · подача в Норвегии через диплом' }
    ],
    sources: [
      { label: 'UDI: Family immigration — apply from outside or inside Norway', url: 'https://www.udi.no/en/answer-pages/answers-family-immigration/' },
      { label: 'UDI: Skilled workers', url: 'https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/' },
      { label: 'UDI: Have applied — Family immigration', url: 'https://www.udi.no/en/have-applied/family-immigration/' }
    ]
  },

  // ============================================================
  // WHERE TO APPLY — EU
  // ============================================================
  'where-to-apply-eu': {
    tldr: [
      'Это <strong>отдельная процедура</strong> — не семейная миграция в обычном смысле. Вы подаёте на «карту резидента семьи граждан ЕС/ЕЭЗ» по директиве 2004/38/EC.',
      'Стандартный путь — подача в полиции в Норвегии. Подача из посольства тоже возможна, но менее распространена.',
      'По сравнению с кейсом «Гражданин Норвегии»: бесплатно (нет пошлины), быстрее (4–6 месяцев), сразу 5 лет ВНЖ, можно работать с момента подачи через skattekort.',
      'Условие: муж — гражданин ЕС/ЕЭЗ, живущий в Норвегии. Если он живёт в стране своего гражданства, директива не работает.'
    ],
    actionNow: [
      'Убедитесь, что супруг реализует право на проживание в Норвегии — работает, ведёт бизнес, учится или имеет достаточные средства. Без этого карта резидента не выдаётся.',
      'Определитесь, хотите ли подаваться из посольства (через VFS) или из Норвегии (в полиции). Стандартный путь по практике сообщества — в Норвегии.',
      'Если планируете подачу в Норвегии — узнайте про норвежскую визу C по директиве 2004/38: она бесплатна, оформляется приоритетно, обычно мульти на полгода-год.'
    ],
    sections: [
      {
        title: 'Как работает схема: карта резидента, не семейный ВНЖ',
        body: '<p>В отличие от кейса «Гражданин Норвегии», вы подаёте <strong>не на семейный ВНЖ</strong>, а на <strong>карту резидента семьи граждан ЕС/ЕЭЗ</strong> (residence card for family members of EU/EEA nationals). Норвегия применяет директиву ЕС 2004/38/EC через соглашение ЕЭЗ.</p><p><strong>Ключевые отличия:</strong></p><ul><li><strong>Бесплатно</strong> — пошлина 11 900 NOK не взимается.</li><li><strong>Быстрее</strong> — обычно 4–6 месяцев. UDI обязан рассмотреть в течение 6 месяцев по европейским правилам.</li><li><strong>Сразу 5 лет ВНЖ</strong> — не схема 1+2 года, а одна карта на 5 лет.</li><li><strong>Работа с момента подачи</strong> — через skattekort (налоговая карта).</li><li><strong>Нет права на бесплатные курсы норвежского</strong> — только платные.</li></ul>'
      },
      {
        title: 'Подача в Норвегии — стандартный путь',
        body: '<p>По практике сообщества большинство жён граждан ЕС подаются <strong>в полиции в Норвегии</strong>. Причина: это быстрее, и въезд в Норвегию для жён граждан ЕС упрощён.</p><p><strong>Как приехать:</strong> самый удобный путь — норвежская гостевая виза C по директиве 2004/38/EC. Она бесплатна, оформляется приоритетно (обычно 2–3 недели), часто мульти на полгода-год. Подробно — в статье <a data-article=visa-c-guest>«Гостевая виза C: как приехать к супругу в Норвегию»</a>, Путь 3.</p><p><strong>Что происходит дальше:</strong> после приезда регистрируете заявление онлайн на udi.no, записываетесь в полицию по месту жительства супруга, приходите на запись и сдаёте документы.</p>'
      },
      {
        title: 'Право работать с момента подачи',
        body: '<p>В отличие от кейса Норвежца, в кейсе ЕС вы можете работать сразу после подачи. Нужно оформить tax deduction card (skattekort) в Skatteetaten и предоставить документ, подтверждающий, что ваш супруг имеет право проживания в Норвегии.</p><p><strong>Важный нюанс:</strong> если в карте резидента в итоге откажут — работа задним числом будет считаться незаконной. Это риск, который стоит держать в голове.</p>'
      },
      {
        title: 'Можно ездить туда-обратно во время ожидания',
        body: '<p>UDI прямо разрешает: можно оставаться в Норвегии до решения даже после окончания визы, а также свободно выезжать и возвращаться, соблюдая общие правила пребывания (90 дней из 180 в Шенгене).</p>'
      },
      {
        title: 'Иногда у вас есть выбор схемы',
        body: '<p>В некоторых ситуациях UDI разрешает выбрать между картой резидента ЕС и обычным семейным ВНЖ. Карта резидента — бесплатно и быстрее, но постоянное право проживания только через 5 лет, курсы языка платные. Семейный ВНЖ — пошлина 11 900 NOK, дольше, но ПМЖ через 3 года и бесплатные курсы норвежского. Подробнее на UDI: udi.no → «The difference between a family immigration permit and a residence card».</p>'
      }
    ],
    faq: [
      { q: 'Сколько ждать решение?', a: 'По европейским правилам UDI обязан рассмотреть заявление в течение 6 месяцев. По кейсам сообщества — обычно 4 месяца через полицию Осло.' },
      { q: 'Какой статус должен быть у супруга?', a: 'Супруг должен быть гражданином ЕС/ЕЭЗ (не Норвегии) и проживать в Норвегии, реализуя право на проживание: работать, вести бизнес, учиться или иметь собственные средства.' },
      { q: 'Что значит «гражданин ЕС живёт в Норвегии»?', a: 'Это значит, что он находится в Норвегии не как у себя дома. Директива 2004/38/EC работает, когда гражданин ЕС реализует право на свободное передвижение. Если муж — поляк, живущий в Польше — директива не применяется. Если поляк, живущий в Норвегии — применяется.' },
      { q: 'Можно ли начать работать сразу после подачи?', a: 'Да. Оформляете skattekort (налоговую карту) в Skatteetaten и можете работать. Учтите риск: если в карте откажут, работа будет считаться незаконной задним числом.' },
      { q: 'Карта резидента ЕС или обычный семейный ВНЖ — что лучше?', a: 'Зависит от приоритетов. Карта ЕС — бесплатно, быстрее, сразу 5 лет, но платные курсы языка и более долгий срок до ПМЖ. Семейный ВНЖ — пошлина 11 900 NOK, дольше, но бесплатные курсы и ПМЖ через 3 года.' }
    ],
    warn: '<p>Карта резидента ЕС даёт право работать в Норвегии — но только при условии, что супруг продолжает реализовывать право проживания. Если он потеряет работу или перестанет соответствовать критериям UDI, ваше право пребывания тоже может оказаться под вопросом. Это <strong>производное право</strong> — оно зависит от статуса супруга.</p>',
    tip: '<p>Если ваш супруг — гражданин ЕС, путь через карту резидента почти всегда быстрее и проще, чем обычный семейный ВНЖ. Но сравните оба варианта по UDI до подачи — особенно если для вас важны бесплатные курсы норвежского и быстрый ПМЖ.</p><p>При подаче в Норвегии — берите все документы о праве проживания супруга (контракт, выписки, регистрация в Skatteetaten). По кейсам сообщества полиция Осло проверяет именно это.</p>',
    compare: {
      udi: 'UDI оформляет это как отдельную процедуру по правилам ЕЭЗ. Срок рассмотрения — до 6 месяцев. Право на работу появляется с момента подачи через skattekort, но требует подтверждения статуса супруга.',
      practice: 'Кейсы ЕС в полиции Осло часто закрываются за 4 месяца — быстрее, чем заявленные 6. Без собеседования, если документы в порядке. Сравнительно с кейсом Норвежца — это самый быстрый и удобный путь воссоединения.'
    },
    quotes: [
      { text: 'Сегодня пришел имейл что дали внж. Подавалась в середине февраля 25 г на воссоединение с гражданином ЕС в полиции в Норвегии. На собеседование не звали.', author: 'Участник сообщества, 22.06.2025 · муж — гражданин Польши, подача в полиции Осло, 4 месяца' },
      { text: 'Зато работать с момента подачи на внж с гр ЕС. Но мне в полиции сказали, что если мне откажут в ВНЖ — моя работа будет считаться незаконной.', author: 'Участник сообщества, 28.01.2026 · муж — гражданин ЕС' },
      { text: 'Да, 5 лет, но потому что муж гражданин ЕС у меня, а не Норвегии.', author: 'Участник сообщества, 03.05.2025 · муж — гражданин ЕС, ВНЖ сразу на 5 лет' }
    ],
    sources: [
      { label: 'UDI: Residence card for family members of EU/EEA nationals', url: 'https://www.udi.no/en/want-to-apply/family-immigration/residence-card-for-family-members-of-eueea-nationals-/' },
      { label: 'UDI: Family member of an EU/EEA national', url: 'https://www.udi.no/en/want-to-apply/residence-under-the-eueeu-regulations/family-member-of-an-eueea-national/' },
      { label: 'UDI: The difference between a family immigration permit and a residence card', url: 'https://www.udi.no/en/word-definitions/the-difference-between-a-family-immigration-permit-and-a-residence-card/' },
      { label: 'UDI: Frequently asked questions about family immigration', url: 'https://www.udi.no/en/answer-pages/answers-family-immigration/' }
    ]
  },

  // ============================================================
  // WHERE TO APPLY — REFUGEE
  // ============================================================
  'where-to-apply-refugee': {
    tldr: [
      'Если ваш супруг получил защиту в Норвегии, подача идёт стандартно — из страны проживания через VFS.',
      'Главное в этом кейсе — <strong>два жёстких дедлайна</strong>: зарегистрировать заявление онлайн в течение 6 месяцев, сдать документы в посольстве — в течение 1 года.',
      'Если уложиться в дедлайны — нет требования по доходу к супругу. Если пропустить — стандартные правила, включая порог дохода.'
    ],
    actionNow: [
      'Узнайте точную дату решения, которым супругу предоставили защиту в Норвегии. От этой даты отсчитываются оба дедлайна.',
      'Зарегистрируйте онлайн-заявление и оплатите пошлину до окончания 6 месяцев. Это первый дедлайн.',
      'Запланируйте визит в посольство / VFS до окончания 12 месяцев. Это второй дедлайн.'
    ],
    sections: [
      {
        title: 'Как подаётся заявление',
        body: '<p>Стандартный путь — подача из страны проживания через визовый центр VFS. Документы сдаются лично, биометрия — там же.</p><p>Подача из Норвегии для кейса беженца практически не применяется: заявитель обычно находится за пределами Норвегии — в стране гражданства или третьей стране.</p>'
      },
      {
        title: 'Два дедлайна — главное правило этого кейса',
        body: '<p>Если ваш супруг получил защиту (asylum) в Норвегии, для вас действует упрощённый порядок воссоединения <strong>только при соблюдении двух дедлайнов</strong>:</p><p><strong>Первый дедлайн — 6 месяцев.</strong> В течение 6 месяцев с даты решения о защите супруга должно быть зарегистрировано электронное заявление в портале UDI и оплачена пошлина.</p><p><strong>Второй дедлайн — 1 год.</strong> В течение 12 месяцев с той же даты вы должны явиться в норвежское посольство или визовый центр и сдать все документы лично. <strong>Только в этот момент заявление считается официально поданным.</strong></p><p>Если уложитесь в оба дедлайна — UDI не предъявляет требования к доходу супруга. Это критично, потому что только что получивший защиту человек обычно не имеет работы и не соответствует общему порогу дохода.</p><p>Подробно про дедлайны и стратегию подачи — в статье <a data-article=refugee-6-month-window>«Окно 6 месяцев: главный срок для беженцев»</a>.</p>'
      },
      {
        title: 'Что если дедлайн пропущен',
        body: '<p>Если пропустить 6-месячный дедлайн, заявление всё равно можно подать — но <strong>по стандартным правилам семейной миграции</strong>. Это означает: применяется требование по доходу супруга (для большинства это блокер), срок рассмотрения — стандартный (по кейсам сообщества для россиян 1,5–2 года).</p><p>UDI допускает исключения в особых случаях (серьёзные обстоятельства, помешавшие подаче в срок), но это редкость.</p>'
      }
    ],
    faq: [
      { q: 'От какой даты считаются 6 месяцев?', a: 'От даты, указанной в решении UDI, которым супругу была предоставлена защита. Эта дата указана в письме-решении.' },
      { q: 'Что входит в «зарегистрировать заявление онлайн»?', a: 'Заполнить форму в портале UDI «My applications» и оплатить пошлину. Это можно сделать дистанционно из любой страны.' },
      { q: 'В каком посольстве сдавать документы?', a: 'В норвежском посольстве или визовом центре VFS в стране вашего проживания. Если вы не в стране гражданства — в стране, где вы легально находитесь.' },
      { q: 'Если супруг ещё не получил решение о защите — когда подавать?', a: 'Дождитесь решения. Дедлайны начинают считаться с момента положительного решения о защите супруга — раньше подавать нет смысла, кейс будет отклонён.' },
      { q: 'Можно ли подавать вместе с детьми?', a: 'Да. Дети до 18 лет могут быть включены в то же заявление о семейной миграции, дедлайны для них общие.' }
    ],
    warn: '<p>Заявление считается официально поданным <strong>только в момент сдачи документов в посольстве лично</strong>. Регистрация онлайн и оплата пошлины — это первая часть. Если не успеть на сдачу документов в течение 12 месяцев, ваша подача не засчитывается, даже если онлайн-часть была сделана вовремя.</p>',
    tip: '<p>Записывайтесь на визит в посольство / VFS <strong>сразу после получения решения супруга</strong>, не откладывайте. В некоторых странах запись может быть на 2–3 месяца вперёд, и если ждать до последнего — можно не успеть в 12-месячный дедлайн.</p>',
    compare: {
      udi: 'UDI оформляет упрощённый порядок для семей беженцев — без требования к доходу, при соблюдении 6-месячного дедлайна на регистрацию и 12-месячного на сдачу документов.',
      practice: 'Главный риск — не успеть в дедлайн. Особенно если супруг не сразу получил решение о защите или если вы находитесь в стране со сложной записью в посольство. Начинайте процесс сразу же.'
    },
    sources: [
      { label: 'UDI: Two deadlines for family immigration with a refugee in Norway', url: 'https://www.udi.no/en/important-messages/new-deadline-for-registering-your-application-for-you-who-are-applying-for-family-immigration-with-a-refugee-in-norway/' },
      { label: 'UDI: Income requirement — exception for refugees', url: 'https://www.udi.no/en/word-definitions/income-requirement-in-family-immigration-cases-/' }
    ]
  },

  // ============================================================
  // WHERE TO APPLY — SKILLED
  // ============================================================
  'where-to-apply-skilled': {
    tldr: [
      'Этот кейс — когда ваш супруг переезжает в Норвегию по программе Skilled worker. Вы подаёте по семейной миграции к нему.',
      'Два основных сценария: подать <strong>одновременно</strong> с супругом (тогда решения приходят вместе) или подать <strong>позже</strong>, когда супруг уже в Норвегии.',
      'Подача обычно из страны гражданства через VFS. Подача из Норвегии возможна, если у вас есть свой статус Skilled worker по образованию.',
      'Если ждёте решение в Норвегии — по правилам UDI работать нельзя, включая удалённую работу.'
    ],
    actionNow: [
      'Определитесь со сценарием: подаёте одновременно с супругом или позже, когда он уже в Норвегии.',
      'Уточните у работодателя супруга, есть ли юр. сопровождение / консультант по релокации. Если есть — он может взять на себя и вашу подачу.',
      'Подготовьте документы для подачи через VFS или рассмотрите подачу в Норвегии, если у вас есть свой статус Skilled worker по образованию.'
    ],
    sections: [
      {
        title: 'Сценарий 1: одновременная подача с супругом',
        body: '<p>Если ваш супруг ещё не уехал в Норвегию или только подаёт документы на Skilled worker, у вас есть удобная возможность — подать на семейную миграцию одновременно с ним.</p><p>UDI прямо разрешает: если члены семьи подают заявления одновременно, решения по всем заявлениям приходят в одно время. По кейсам сообщества для семей Skilled worker сроки сравнительно короткие — около 3 месяцев на оформление ВНЖ супруга через работодателя, семейные дела рассматриваются параллельно.</p>'
      },
      {
        title: 'Сценарий 2: подача позже, когда супруг уже в Норвегии',
        body: '<p>Это более распространённый сценарий: супруг уехал работать в Норвегию, обосновался, и теперь вы подаётесь к нему.</p><p>Подача идёт стандартно — обычно через VFS из страны гражданства. Если у вас есть <strong>свой статус Skilled worker по образованию</strong> (высшее или средне-специальное), у вас есть альтернатива — приехать в Норвегию по визе C и подать в полиции. Подробно про этот путь — в статье <a data-article=where-to-apply-norwegian>«Где подавать заявление: кейс «Гражданин Норвегии»»</a>.</p>'
      },
      {
        title: 'Можно ездить туда-обратно во время ожидания',
        body: '<p>Если вы подались в Норвегии и ждёте решения — вы не обязаны там «застрять». UDI прямо разрешает: можно оставаться в Норвегии до решения даже после окончания визы, и можно выезжать/возвращаться, соблюдая общие правила пребывания (90 дней из 180 в Шенгене).</p>'
      }
    ],
    faq: [
      { q: 'Можно ли работать в Норвегии во время ожидания решения?', a: 'Нет. UDI прямо запрещает любую работу, включая удалённую, до получения ВНЖ. Это касается всех, кто физически находится в Норвегии в ожидании. Если ожидаете дома — продолжаете работать как обычно.' },
      { q: 'Если муж уже работает в Норвегии полгода — можно ли мне подаваться?', a: 'Да. Это обычный сценарий — подача после того, как супруг обосновался в Норвегии. Подаётесь через VFS из страны гражданства по семейной миграции.' },
      { q: 'Что если работодатель супруга подключил консультанта/юриста по релокации?', a: 'По кейсам сообщества это даёт удобство: записи в полицию, документы и подача делаются дистанционно через консультанта. UDI это воспринимает позитивно. Уточните у компании супруга, есть ли такая услуга.' },
      { q: 'Какой статус мужа должен быть, чтобы попадать в кейс «Skilled worker»?', a: 'Супруг должен иметь действующий ВНЖ Skilled worker через норвежского работодателя. Если у супруга другой тип ВНЖ (например, исследователь) — кейс может отличаться, проверьте на UDI.' }
    ],
    warn: '<p>Семейная миграция к Skilled worker — это всё ещё семейная миграция, не рабочая программа. Вы сами получаете ВНЖ через семейный путь, и пока ВНЖ не получен — работать нельзя. Это особенно важно для тех, кто планирует приехать заранее и ждать решение в Норвегии.</p>',
    tip: '<p>Если есть возможность подать одновременно с супругом — это сильно облегчает жизнь. Не нужно ждать, пока он обоснуется, и потом проходить процедуру отдельно. Уточните у работодателя сроки подачи документов и постарайтесь синхронизироваться.</p>',
    compare: {
      udi: 'UDI прямо допускает одновременную подачу членов семьи и обещает синхронные решения. Срок рассмотрения дела Skilled worker супруга — около 3 месяцев, семейные дела рассматриваются параллельно.',
      practice: 'Для семей Skilled worker процесс часто проходит быстрее и комфортнее, чем для других кейсов — особенно если работодатель супруга подключает юр. сопровождение. Биометрию семья сдаёт уже в Норвегии после приезда.'
    },
    quotes: [
      { text: 'Моему мужу ВНЖ по работе выдали за 3 месяца. Всю работу по подаче документов делал работодатель из Норвегии (точнее юр. фирма по договору с работодателем). Всё было дистанционно.', author: 'Участник сообщества, 29.04.2026 · муж — Skilled worker, семья подавалась дистанционно' }
    ],
    sources: [
      { label: 'UDI: Skilled workers — family immigration', url: 'https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/' },
      { label: 'UDI: Frequently asked questions about family immigration', url: 'https://www.udi.no/en/answer-pages/answers-family-immigration/' },
      { label: 'UDI: Have applied — Family immigration', url: 'https://www.udi.no/en/have-applied/family-immigration/' }
    ]
  },

  // ============================================================
  // STUDENT SPOUSE
  // ============================================================
  'student-spouse': {
    tldr: [
      'Не всякая учёба супруга в Норвегии даёт вам право на воссоединение.',
      '<strong>Подходит:</strong> университет, колледж (vitenskapelig høgskole), языковой курс для Skilled worker.',
      '<strong>Не подходит:</strong> folkehøgskole (народная школа), videregående (старшая школа), Bibelskole (библейская школа).',
      'Главная сложность кейса: обычное требование по доходу к супругу-студенту тоже применяется, и набрать его одной стипендией почти невозможно.'
    ],
    actionNow: [
      'Уточните тип учебного заведения супруга — подходит ли оно под критерии UDI.',
      'Посмотрите, какие источники дохода у супруга на год вперёд: стипендия, грант, заём Lånekassen, частичная работа.',
      'Если доход на грани — посмотрите статью <a href="#"><a data-article=income-req>«Требование по доходу принимающей стороны»</a> на предмет исключений.'
    ],
    sections: [
      {
        title: 'Какая учёба засчитывается',
        body: '<p>UDI признаёт учёбу супруга как основание для семейного воссоединения только если это:</p><ul><li>Университет (universitet)</li><li>Научный колледж (vitenskapelig høgskole)</li><li>Языковой курс, признанный для Skilled worker</li></ul><p>Не признаются:</p><ul><li>Folkehøgskole (народные школы — учёба «для себя», без степени)</li><li>Videregående skole (старшая школа)</li><li>Bibelskole (библейские школы)</li><li>Краткосрочные курсы и онлайн-программы без аккредитации</li></ul>'
      },
      {
        title: 'Главная сложность — доход',
        body: '<p>Стандартное требование по доходу UDI к супругу-студенту тоже применяется. Для иностранного студента в Норвегии это узкое место:</p><ul><li>Lånekassen (норвежский студенческий заём) иностранным студентам обычно недоступен.</li><li>Стипендий и грантов от университета на покрытие нужной суммы дохода обычно не хватает.</li><li>Поэтому многие супруги-студенты сначала ищут подработку или ждут окончания учёбы, чтобы подавать на семейное воссоединение.</li></ul><p>Для студентов есть пониженный порог дохода (351 432 NOK по состоянию на 2026 год вместо обычной планки), но это исключение работает только если <strong>сам доход</strong> — стипендия, грант, зарплата или их комбинация — покрывает эту сумму. Активы и доход самого заявителя не помогают «дотянуть» исключение.</p><p>Подробнее в статье <a href="#"><a data-article=income-req>«Требование по доходу принимающей стороны»</a>.</p>'
      },
      {
        title: 'Период учёбы и ПМЖ',
        body: '<p>Время, проведённое супругом в Норвегии в статусе студента, <strong>не засчитывается в стаж для ПМЖ</strong> — ни ему, ни приехавшему по семейному воссоединению супругу. Для ПМЖ нужен другой статус (работа, ВНЖ Skilled worker, и т.д.).</p>'
      },
      {
        title: 'Сроки и порядок рассмотрения',
        body: '<p>Заявка студента и семейная заявка обычно не обрабатываются параллельно: сначала UDI рассматривает заявку самого студента, потом — семейную. Это может удлинять общий срок переезда семьи.</p>'
      }
    ],
    faq: [
      { q: 'Если супруг учится в folkehøgskole — можно ли подавать на семейное воссоединение?', a: 'Нет, folkehøgskole не признаётся UDI как основание для воссоединения. Нужно дождаться, пока супруг перейдёт на другой статус (например, поступит в университет или получит работу).' },
      { q: 'Можно ли подавать одновременно с заявкой супруга?', a: 'Заявки рассматриваются последовательно: сначала студент, потом семья. Параллельная подача не ускорит процесс.' },
      { q: 'Если у супруга только стипендия — реально ли набрать порог дохода?', a: 'Очень сложно. Большинство университетских стипендий ниже порога. Lånekassen иностранцам обычно недоступен. На практике многие ждут, пока супруг найдёт работу или окончит учёбу.' },
      { q: 'А если у меня самого есть доход — это поможет?', a: 'Нет. UDI смотрит только на доход референс-персоны (супруга в Норвегии). Ваш доход в кейсе не учитывается.' }
    ],
    warn: '<p>Период учёбы в Норвегии <strong>не засчитывается в стаж для ПМЖ</strong>. Если вы планируете долгосрочный переезд и думаете о ПМЖ через 3–5 лет, учитывайте, что начнётся отсчёт стажа только после смены статуса супруга на рабочий или Skilled worker.</p>',
    sources: [
      { label: 'UDI: Frequently asked questions about family immigration', url: 'https://www.udi.no/en/answer-pages/answers-family-immigration/' },
      { label: 'UDI: Income requirement', url: 'https://www.udi.no/en/word-definitions/income-requirement-in-family-immigration-cases-/' }
    ]
  },

  // ============================================================
  // REFUGEE 6-MONTH WINDOW
  // ============================================================
  'refugee-6-month-window': {
    tldr: [
      'Если ваш супруг получил защиту в Норвегии — у вас есть <strong>6 месяцев</strong> на онлайн-регистрацию заявки на воссоединение.',
      'Срок отсчитывается с даты, когда супруг получил свой ВНЖ в Норвегии (decision letter).',
      'Если успели — освобождаетесь от требования по доходу.',
      'Если не успели — придётся подавать как все остальные, со всеми требованиями.',
      'После регистрации на личную сдачу документов есть ещё до года.'
    ],
    actionNow: [
      'Узнайте у супруга точную дату decision letter UDI — от неё считаются все сроки.',
      'Зарегистрируйте онлайн-заявку на udi.no в течение 6 месяцев с этой даты.',
      'После регистрации — запишитесь на личную сдачу документов в посольстве или VFS, и сдайте документы в течение года.'
    ],
    sections: [
      {
        title: 'Что значит «зарегистрировать»',
        body: '<p>Зарегистрировать заявку — это:</p><ul><li>заполнить онлайн-форму на udi.no;</li><li>оплатить пошлину или получить освобождение от неё.</li></ul><p>Личная сдача документов — отдельный шаг, на него есть <strong>до года</strong> с даты decision letter.</p><p>Важно: онлайн-регистрация без оплаты или без личной сдачи документов в течение года не считается полноценной подачей. Окно 6 месяцев действует только если оба шага последовательно сделаны вовремя.</p>'
      },
      {
        title: 'Что вы получаете в этом окне',
        body: '<p>Если уложились в сроки:</p><ul><li><strong>Не применяется требование по доходу</strong> к супругу. В обычном кейсе принимающая сторона должна показать значительный регулярный доход — для беженцев это исключение.</li><li>Все остальные требования (документы о браке, доказательства отношений, жильё) остаются обычными.</li></ul><p>Если окно пропущено — действуют обычные правила с требованием по доходу. Это часто становится критическим препятствием, потому что человек со статусом беженца в Норвегии редко имеет высокий стабильный доход в первые годы.</p>'
      },
      {
        title: 'Дополнительное условие: брак до переезда',
        body: '<p>Освобождение от дохода действует только если брак был заключён до переезда супруга в Норвегию. Если вы поженились уже после того, как супруг получил защиту — освобождение обычно не применяется, даже если успели подать в окно. В такой ситуации лучше отдельно свериться с UDI или юристом.</p>'
      }
    ],
    faq: [
      { q: 'Что если 6 месяцев уже прошли?', a: 'Можно подавать как обычная семейная миграция, но тогда применяется требование по доходу. Подробнее в статье <a href="#"><a data-article=income-req>«Требование по доходу принимающей стороны»</a>.' },
      { q: 'Сроки считаются от какой даты?', a: 'От даты decision letter UDI, в котором супруг получил свою защиту/ВНЖ беженца. Уточните дату у супруга — она напечатана в самом письме.' },
      { q: 'Можно ли продлить окно 6 месяцев?', a: 'Нет, это жёсткий срок. В исключительных случаях (тяжёлая болезнь, активные военные действия в стране супруга) UDI может рассмотреть индивидуально, но это не гарантированно.' },
      { q: 'Если коллективная защита (например, украинцы) — действует ли то же окно?', a: 'Правила для коллективной защиты могут отличаться. Для конкретного кейса стоит свериться с UDI или юристом — общие правила <a data-article=refugee-6-month-window>«окно 6 месяцев»</a> сформулированы для статуса беженца индивидуально.' }
    ],
    warn: '<p>Срок 6 месяцев — жёсткий. Если документы ещё не готовы — <strong>зарегистрируйте заявку онлайн всё равно</strong>, это запустит счётчик. Подготовку документов и личную сдачу можно делать параллельно в течение оставшегося года.</p><p>Если супруг получил коллективную защиту (как многие украинцы), правила могут отличаться — проверяйте отдельно с UDI или профильным юристом (например, NOAS).</p>',
    tip: '<p>Главный приоритет в первые недели после decision letter супруга — <strong>онлайн-регистрация и оплата пошлины</strong>. Без этого счётчик не запустится, и окно может закрыться, пока вы готовите документы.</p>',
    sources: [
      { label: 'UDI: Family immigration with a person who has protection', url: 'https://www.udi.no/en/word-definitions/family-immigration-with-a-person-who-has-protection-asylum-in-norway/' },
      { label: 'UDI: Income requirement (см. раздел исключений для беженцев)', url: 'https://www.udi.no/en/word-definitions/income-requirement-in-family-immigration-cases-/' }
    ]
  },

  // ============================================================
  // AFTER REFUSAL
  // ============================================================
  'after-refusal': {
    tldr: [
      'После отказа есть два пути: <strong>подать апелляцию</strong> (klage) или <strong>переподать заявление</strong> заново.',
      'Апелляция занимает много месяцев — по опыту чата от 6 месяцев и больше. Переподача с дополнительными документами часто быстрее.',
      'Если причина отказа в одной недостающей бумаге — почти всегда быстрее переподать, чем апеллировать.',
      'В Норвегии есть <strong>бесплатная юридическая помощь</strong> (fri rettshjelp) по некоторым категориям дел, включая депортацию. По обычным семейным отказам — обычно за свой счёт.'
    ],
    actionNow: [
      'Прочитайте текст отказа внимательно: причина важна для выбора между апелляцией и переподачей.',
      'Если причина — недостающий документ, который у вас на руках есть: переподача обычно быстрее.',
      'Если причина спорная (например, UDI сомневается в подлинности брака): рассмотрите апелляцию, при необходимости с юристом.',
      'Проверьте сроки апелляции, указанные в самом отказе — обычно 3 недели от получения письма.'
    ],
    sections: [
      {
        title: 'Апелляция (klage)',
        body: '<p>Апелляция — это формальное обжалование решения UDI. Подаётся в саму UDI, которая может изменить решение или передать дело в UNE (комиссия по обжалованию иммиграционных решений).</p><p><strong>Сроки:</strong> обычно есть 3 недели на подачу апелляции с момента получения отказа. Если пропустили — апелляция, как правило, не принимается, но в исключительных случаях UDI может пойти навстречу.</p><p><strong>Длительность рассмотрения:</strong> по опыту чата апелляция занимает минимум полгода, часто больше. За это время может быть подан и рассмотрен новый кейс — поэтому многие выбирают переподачу.</p><p><strong>Важный нюанс:</strong> во время рассмотрения апелляции по той же категории заявления подать нельзя. То есть нельзя одновременно апеллировать отказ по визе D и подавать новую визу D.</p>'
      },
      {
        title: 'Переподача',
        body: '<p>Переподача — это новое заявление с теми же или дополненными документами. Подаётся как обычно, с новой пошлиной.</p><p><strong>Когда переподача быстрее апелляции:</strong></p><ul><li>Причина отказа — один недостающий документ, который у вас сейчас есть.</li><li>Причина — устаревшая информация (например, изменился доход или контракт супруга).</li><li>Документы изначально были неполные, и вы готовы подать полный пакет.</li></ul><p><strong>Когда переподача не поможет:</strong></p><ul><li>UDI сомневается в подлинности отношений — повторная подача с теми же доказательствами обычно не меняет результат.</li><li>Не выполнено основное требование (например, доход не достигает порога) — нужно сначала исправить ситуацию.</li></ul>'
      },
      {
        title: 'Когда нужен юрист',
        body: '<p>Юрист точно нужен, если:</p><ul><li>Речь идёт о депортации или потере уже выданного ВНЖ.</li><li>UDI обвиняет в фиктивном браке или ложной информации.</li><li>Несколько отказов подряд с непонятными причинами.</li><li>Сложный кейс (например, статус беженца, дети, болезни).</li></ul><p>В Норвегии для некоторых категорий дел доступна <strong>бесплатная юридическая помощь (fri rettshjelp)</strong>, например по делам о депортации. Платные услуги адвоката по семейной миграции обычно стоят от 10 000 NOK и выше — конкретные суммы зависят от юриста и кейса.</p>'
      },
      {
        title: 'Право оставаться в Норвегии после отказа',
        body: '<p>Если вы находитесь в Норвегии на момент отказа и подаёте апелляцию — само по себе это <strong>не даёт автоматического права остаться</strong>. Право остаться есть только если у вас уже есть другое легальное основание (например, действующая виза или ВНЖ другой страны ЕС).</p><p>Если виза истекла на момент отказа — придётся уехать на время рассмотрения апелляции.</p>'
      }
    ],
    faq: [
      { q: 'Сколько по времени рассматривается апелляция?', a: 'По опыту чата — минимум полгода, часто больше. Точные сроки UDI публикует на своём сайте, но они могут отличаться от фактических.' },
      { q: 'Можно ли подать переподачу, пока идёт апелляция по тому же кейсу?', a: 'По той же категории заявления — обычно нет. Например, нельзя одновременно апеллировать отказ по визе D и подавать новую визу D. По другой категории (например, обычный шенген) — можно.' },
      { q: 'Стоит ли всегда брать юриста?', a: 'Не всегда. Для простых причин отказа (недостающий документ, устаревший контракт) юрист может не понадобиться — переподача с правильными документами часто решает вопрос. Юрист критически нужен в сложных кейсах: депортация, обвинение в фиктивном браке, повторные отказы.' },
      { q: 'Что такое fri rettshjelp?', a: 'Это бесплатная юридическая помощь от норвежского государства по определённым категориям дел. По делам о депортации она обычно доступна, по обычным семейным отказам — реже. Информация — на сайте Statsforvalteren или у самих юристов, которые работают с fri rettshjelp.' },
      { q: 'Что делать, если причина отказа — недостающий документ, которого нет в чек-листе UDI?', a: 'По опыту чата такие случаи бывают. Типичный пример — справка NAV о том, что супруг не получает социальной помощи. Совет участников: при переподаче прикладывайте всё, что относится к теме отказа, даже если этого нет в публичном чек-листе.' }
    ],
    warn: '<p>Апелляция блокирует переподачу той же категории заявления — пока идёт рассмотрение, новое заявление того же типа не принимается. Это важно знать заранее: иногда выгоднее сразу переподать, чем «застрять» в апелляции на полгода.</p><p>Если на момент отказа вы находитесь в Норвегии по гостевой визе и виза скоро закончится — будьте готовы выехать к моменту истечения визы. Сама подача апелляции не продлевает право пребывания.</p>',
    tip: '<p>Перед выбором между апелляцией и переподачей задайте себе один вопрос: <strong>«Если я подам тот же пакет документов ещё раз — изменится ли что-то?»</strong></p><ul><li>Если <strong>да</strong> (добавился документ, изменился контракт, новый доход) — переподача почти всегда быстрее.</li><li>Если <strong>нет</strong> (UDI оценивает то же самое) — апелляция логичнее, но имеет смысл идти с юристом.</li></ul>',
    compare: {
      udi: 'UDI указывает формальные сроки апелляции (обычно 3 недели), порядок подачи и категории fri rettshjelp. Также UDI публикует усреднённые сроки рассмотрения апелляций.',
      practice: 'По опыту чата фактические сроки апелляций часто длиннее официальных. Многие участники выбирают переподачу, если есть простая причина отказа. Универсальный совет сообщества: «прикладывайте всё, что относится к теме отказа — лишних документов не бывает».'
    },
    quotes: [
      { text: 'Был отказ из за отсутствия документа от нав (мы звонили в udi они сказали док им не нужен). Даже если в списке чего-то нет и мы это не принесли, это не может не служить поводом для отказа.', author: 'Участник сообщества, 06.11.2025 · супруг-норвежец, повторная подача — успешно' },
      { text: 'Я видела что это занимает 6 месяцев и что вроде как подаваться на такую же визу нельзя пока апелляция рассматривается.', author: 'Участник сообщества, 11.07.2025 · после отказа в визе D' },
      { text: 'С нами связался адвокат, который взялся за дело и как я поняла в Норвегии есть fri rettshjelp и наше дело по депортации подходит под эту категорию.', author: 'Участник сообщества, 25.01.2026 · дело о депортации' }
    ],
    sources: [
      { label: 'UDI: Right to appeal a refusal', url: 'https://www.udi.no/en/word-definitions/right-to-appeal-against-a-refusal/' },
      { label: 'UNE (комиссия по обжалованию)', url: 'https://www.une.no/en/' },
      { label: 'Statsforvalteren — fri rettshjelp', url: 'https://www.statsforvalteren.no/' }
    ]
  },

  // ============================================================
  // RELATIONSHIP EVIDENCE
  // ============================================================
  'relationship-evidence': {
    tldr: [
      'UDI хочет убедиться, что отношения настоящие — а не оформлены ради ВНЖ.',
      'Главные доказательства: документ о браке или сожительстве, совместные фото, переписка, общие финансы и поездки.',
      'Чем дольше отношения и чем больше совместной истории — тем легче UDI принять решение.',
      'Особое внимание UDI уделяет коротким бракам, дистанционным отношениям и парам с большой разницей в возрасте — таким парам нужно прикладывать больше доказательств.'
    ],
    actionNow: [
      'Соберите документ, формализующий отношения: свидетельство о браке, документ о сожительстве или подтверждение помолвки.',
      'Подготовьте материалы за весь период отношений, а не только за последний год: фото из разных моментов, переписка, поездки.',
      'Если отношения короткие или в основном дистанционные — приложите больше материала и подумайте над сопроводительным письмом.'
    ],
    sections: [
      {
        title: 'Что обычно прикладывают',
        body: '<p>Точный персональный чек-лист появится в вашем кабинете на udi.no после регистрации онлайн-заявки. Категории, которые обычно нужны:</p><ul><li><strong>Формализация отношений:</strong> свидетельство о браке (с апостилем и переводом), документ о сожительстве, документ о помолвке.</li><li><strong>Визуальная история:</strong> совместные фото из разных периодов отношений (обычно прикладывают 5–10 штук).</li><li><strong>Совместные поездки:</strong> билеты, бронирования отелей, штампы в паспорте.</li><li><strong>Переписка:</strong> скриншоты сообщений за длительный период, с датами.</li><li><strong>Общие финансы и быт:</strong> совместные счета, договоры аренды на двоих, общие подписки или абонементы.</li><li><strong>Дети (если есть):</strong> свидетельство о рождении общих детей.</li></ul>'
      },
      {
        title: 'Когда UDI смотрит особенно внимательно',
        body: '<p>UDI уделяет дополнительное внимание следующим ситуациям:</p><ul><li><strong>Короткий брак.</strong> Если брак заключён недавно и без долгой истории отношений до него.</li><li><strong>Дистанционные отношения.</strong> Если пара никогда не жила вместе или жила вместе мало.</li><li><strong>Большая разница в возрасте.</strong> Это не запрет, но требует более подробного объяснения отношений.</li><li><strong>Брак сразу после знакомства.</strong> Особенно если знакомство было онлайн и короткое.</li><li><strong>Расхождения в показаниях.</strong> Если на интервью супруги дают разные ответы на одни и те же вопросы.</li></ul><p>В этих случаях стоит прикладывать больше материала и, возможно, сопроводительное письмо с объяснением истории отношений.</p>'
      },
      {
        title: 'Интервью — не обязательная часть',
        body: '<p>UDI вызывает на интервью <strong>не всех</strong>. По опыту чата интервью назначают, когда есть сомнения в подлинности отношений или в каких-то документах. Если интервью назначили — это не равно отказу, но к нему стоит подготовиться: обоим супругам полезно вспомнить ключевые даты и события совместной истории.</p>'
      }
    ],
    faq: [
      { q: 'Нужно ли свидетельство о рождении ребёнка, если детей нет?', a: 'Нет, этот документ обязателен только если у вас есть общие дети.' },
      { q: 'Сколько фото обычно прикладывают?', a: 'По опыту участников чата — 5–10 фото из разных периодов отношений. Главное не количество, а разнообразие: разные годы, разные места, разный контекст (праздники, путешествия, обычная жизнь).' },
      { q: 'Если мы поженились недавно — нас обязательно вызовут на интервью?', a: 'Нет, не обязательно. Интервью назначают при сомнениях. Чтобы сомнений было меньше — прикладывайте больше материалов о периоде до брака: фото, переписку, поездки.' },
      { q: 'Подойдёт ли переписка из мессенджеров (Telegram, WhatsApp) как доказательство?', a: 'Да, скриншоты переписки — обычное доказательство. Главное, чтобы были видны даты и продолжительность общения.' },
      { q: 'Что делать, если фото и переписки за ранний период нет?', a: 'Прикладывайте всё, что есть, и опишите в сопроводительном письме причины (например, переписка велась в мессенджере, который больше не работает). UDI оценивает картину в целом.' }
    ],
    warn: '<p>UDI обращает внимание на расхождения в показаниях супругов. Если будут вызваны на интервью — оба супруга должны помнить ключевые факты: где и когда познакомились, когда впервые встретились лично, когда поженились, как и где сделали предложение. Расхождения могут быть основанием для дополнительных вопросов или отказа.</p>',
    tip: '<p>Если отношения короткие или в основном дистанционные, имеет смысл приложить <strong>сопроводительное письмо</strong> с историей отношений: как познакомились, что было общего в первые месяцы, как развивались отношения. Это помогает UDI увидеть картину целиком, а не оценивать пакет документов как набор разрозненных файлов.</p>',
    sources: [
      { label: 'UDI: FAQ — family immigration (про доказательства отношений)', url: 'https://www.udi.no/en/answer-pages/answers-family-immigration/' }
    ]
  },

  // ============================================================
  // HOUSING REQUIREMENT
  // ============================================================
  'housing-requirement': {
    tldr: [
      'У супруга должно быть жильё, в котором планируется совместная жизнь.',
      'Конкретных метров и комнат UDI не требует, но жильё должно быть «адекватно» размеру семьи.',
      'Подойдёт собственное, арендованное или предоставленное работодателем — главное иметь документ.',
      'В договоре аренды не должно быть запрета на проживание дополнительных жильцов, желательно ваше имя в нём.'
    ],
    actionNow: [
      'Уточните у супруга, на каком основании он живёт в жилье (собственность / аренда / служебное).',
      'Проверьте, нет ли в договоре аренды запрета на дополнительных жильцов, и попросите супруга добавить ваше имя в договор заранее.',
      'Если планируете переезд в более просторное жильё после получения ВНЖ — лучше сделать это до подачи или приложить новый договор.'
    ],
    sections: [
      {
        title: 'Что подходит как жильё',
        body: '<p>Точный персональный чек-лист появится в вашем кабинете на udi.no после регистрации онлайн-заявки. В большинстве случаев подходит:</p><ul><li><strong>Собственная квартира или дом</strong> супруга — с документом о собственности.</li><li><strong>Арендованное жильё</strong> с действующим договором (leiekontrakt) на имя супруга.</li><li><strong>Жильё от работодателя</strong> — со специальным подтверждающим документом.</li><li><strong>Жильё у родственников</strong> — возможно, но требует более подробного обоснования.</li></ul>'
      },
      {
        title: 'Особенности по кейсам',
        body: '<p><strong>Для гражданина ЕС/ЕЭЗ</strong> формальных требований к жилью нет. Главное — реальное совместное проживание и регистрация по одному адресу.</p><p><strong>Для студента</strong> требования стандартные. Если супруг живёт в студенческом общежитии — нужно проверить, разрешено ли там проживание с супругом, и получить письменное подтверждение от руководства общежития.</p><p><strong>Для беженца</strong> жильё проверяется так же, как в обычном кейсе, но без требования по доходу к самому жилью.</p>'
      },
      {
        title: 'Какие документы предоставить',
        body: '<p><ul><li>Договор аренды или документ о собственности.</li><li>Подтверждение от работодателя — если жильё служебное.</li><li>Регистрация в Folkeregisteret (норвежский регистр населения) — для супруга, на актуальный адрес.</li></ul></p>'
      }
    ],
    faq: [
      { q: 'UDI требует определённое количество метров или комнат?', a: 'Нет, единого стандарта нет. Главное — наличие легального жилья и документа. Если есть дети, UDI смотрит, чтобы жильё было адекватно размеру семьи.' },
      { q: 'Если в договоре аренды только имя супруга, нужно ли добавлять моё?', a: 'Желательно. UDI это явно не требует, но позже это может пригодиться в Skatteetaten при получении D-номера. Поэтому проще добавить ваше имя в договор заранее.' },
      { q: 'Подойдёт ли студенческое общежитие?', a: 'Зависит от правил общежития — нужно письменное подтверждение от руководства, что вы можете жить вместе с супругом.' },
      { q: 'Можно ли подавать, если супруг живёт у родственников?', a: 'Да, но это требует более подробного объяснения и подтверждения от хозяев жилья. UDI хочет увидеть, что у вас есть место для совместного проживания.' },
      { q: 'Что если мы планируем переехать в новое жильё через 2–3 месяца после подачи?', a: 'Лучше дождаться переезда и приложить новый договор. Если подаёте до переезда — приложите текущий договор и упомяните, что переезд планируется.' }
    ],
    warn: '<p>Если в договоре аренды прописан запрет на проживание дополнительных жильцов — это может стать проблемой. Желательно, чтобы арендодатель <strong>письменно подтвердил</strong>, что не возражает против совместного проживания.</p><p>Отдельный практический нюанс: при получении D-номера в Skatteetaten после прибытия они могут попросить, чтобы <strong>ваше имя было вписано в договор аренды</strong> — одного имени супруга может быть недостаточно. Поэтому имеет смысл заранее попросить супруга добавить ваше имя в договор или подготовить альтернативные документы, связывающие вас с Норвегией (абонемент в библиотеку, запись на курсы).</p>',
    tip: '<p>Если планируете переезд в более просторное жильё после получения ВНЖ — лучше сделать это <strong>до подачи</strong> или приложить новый договор близко к дате подачи.</p><p>Также имеет смысл заранее попросить супруга вписать ваше имя в договор аренды — это упростит получение D-номера в Skatteetaten после переезда.</p>',
    compare: {
      udi: 'UDI не указывает точную площадь или количество комнат. Главное — наличие легального жилья и договора. Жильё должно быть «адекватно» размеру семьи.',
      practice: 'UDI рассматривает каждый случай отдельно. Если есть сомнения, имеет смысл приложить план или фотографии жилья и пояснение, как разместится семья.'
    },
    quotes: [
      { text: 'У нас в договоре аренды только имя мужа. В Skatteetaten мне сказали — нужно, чтобы и моё имя было в договоре, или принести любое подтверждение связи с Норвегией: абонемент в библиотеку, запись на курсы. Поэтому имеет смысл заранее попросить мужа добавить ваше имя в договор.', author: 'Участник сообщества, 17.09.2025 · супруг работает в Норвегии' }
    ],
    sources: [
      { label: 'UDI: Family immigration with a Norwegian or Nordic citizen', url: 'https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-norwegian-or-nordic-citizen/' }
    ]
  },

  // ============================================================
  // AGE 24 RULE
  // ============================================================
  'age-24-rule': {
    tldr: [
      'Если вы или ваш партнёр живёт в Норвегии меньше 2 лет, <strong>обоим должно быть не менее 24 лет</strong>.',
      'Цель правила — защита от вынужденных браков.',
      'Правило не применяется, если вы жили вместе или были женаты 2+ года <strong>до переезда</strong> супруга в Норвегию.',
      'Также не применяется, если вы поженились или жили вместе уже в Норвегии и оба имели легальный статус.',
      'Для женихов/невест правило применяется почти всегда.'
    ],
    actionNow: [
      'Проверьте возраст обоих супругов и стаж совместной жизни до переезда супруга в Норвегию.',
      'Если оба моложе 24 — проверьте, не подходит ли ваша ситуация под исключения ниже.',
      'Если ни одно из исключений не подходит — придётся подавать после того, как оба достигнут 24 лет.'
    ],
    sections: [
      {
        title: 'Когда правило не применяется',
        body: '<p>Правило 24 лет <strong>не применяется</strong>, если:</p><ul><li>Вы были женаты или жили вместе <strong>2+ года до переезда</strong> референс-персоны в Норвегию. Это самое частое исключение.</li><li>Вы поженились или жили вместе уже в Норвегии, и оба имели легальный статус (ВНЖ или гражданство).</li></ul>'
      },
      {
        title: 'Возможные индивидуальные исключения',
        body: '<p>В отдельных случаях UDI может сделать исключение, даже если общие правила формально не выполняются:</p><ul><li>Если вы из страны, где принудительные браки крайне маловероятны.</li><li>Если очевидно, что брак добровольный — например, однополая пара или партнёры из разных культурных/религиозных сред.</li></ul><p>Такие исключения индивидуальны и не гарантированы — стоит проконсультироваться с UDI или юристом.</p>'
      }
    ],
    faq: [
      { q: 'Правило применяется к обоим или только к иностранному супругу?', a: 'К обоим. Оба супруга должны быть не моложе 24 лет.' },
      { q: 'Что если одному 24, а второму 23?', a: 'Правило не выполнено — нужно, чтобы оба достигли 24 лет, или подходило одно из исключений.' },
      { q: 'Как доказать 2 года совместной жизни до переезда супруга?', a: 'Документы о совместной аренде, общие счета, фото и переписка за весь период. Подробнее в статье <a href="#"><a data-article=samboer-cohabitation>«Сожительство (samboer): как подтвердить 2 года совместной жизни»</a>.' },
      { q: 'Жениху/невесте тоже нужно 24 года?', a: 'Да, для женихов/невест правило применяется почти всегда. Исключения по сожительству до переезда обычно не работают для не зарегистрированного брака.' },
      { q: 'Если правило не выполнено — что делать?', a: 'Ждать. Либо до момента, когда оба достигнут 24 лет, либо до момента, когда супруг проживёт в Норвегии 2+ года.' }
    ],
    sources: [
      { label: 'UDI: Requirement to be at least 24 years old', url: 'https://www.udi.no/en/word-definitions/requirement-to-be-at-least-24-years-old-in-applications-for-family-immigration/' }
    ]
  },

  // ============================================================
  // APPLICATION DOCUMENTS
  // ============================================================
  'application-documents': {
    tldr: [
      'После онлайн-заявки UDI автоматически генерирует <strong>ваш персональный чек-лист</strong> — это и есть основной список документов.',
      'Универсальные базовые: паспорт, документ о браке (с апостилем и переводом), документы супруга о доходе и жилье, фото.',
      'Перевод документов делается у <strong>сертифицированного (присяжного) переводчика</strong> — нотариус не нужен.',
      'Порядок важен: сначала апостиль на оригинал, потом перевод. Не наоборот.',
      'Делайте сканы и копии <strong>всех</strong> документов до сдачи — это пригодится для апелляции или повторной подачи.'
    ],
    actionNow: [
      'Зарегистрируйте онлайн-заявку на udi.no — после этого появится ваш персональный чек-лист.',
      'Соберите документы по чек-листу. Если по какой-то категории сомневаетесь — прикладывайте всё, что относится к теме.',
      'Перед сдачей сделайте сканы и копии всех документов для архива.'
    ],
    sections: [
      {
        title: 'Категории документов',
        body: '<p>Точный список — в вашем личном чек-листе UDI после онлайн-регистрации. Состав может меняться, поэтому сверяйтесь перед самой подачей. Универсальные категории:</p><p><strong>От заявителя (того, кто переезжает):</strong></p><ul><li>Действующий паспорт.</li><li>Заполненная и подписанная анкета.</li><li>Подтверждение оплаты пошлины.</li><li>Цветные паспортные фото.</li><li>Документ о браке или сожительстве (с апостилем и переводом).</li><li>Доказательства отношений: совместные фотографии, переписка, поездки.</li></ul><p><strong>От референс-персоны (того, кто в Норвегии):</strong></p><ul><li>Копия паспорта.</li><li>Налоговый расчёт (skatteoppgjør) за прошлый год.</li><li>Последние расчётные листы (обычно 3 месяца).</li><li>Трудовой договор.</li><li>Договор аренды (leiekontrakt) или документ о собственности.</li><li>Справка из NAV, что не получал социальной помощи.</li></ul>'
      },
      {
        title: 'Как готовятся документы',
        body: '<p><strong>Апостиль.</strong> Документы из стран Гаагской конвенции (включая Россию) требуют апостиль. Ставит ведомство, выдавшее документ (ЗАГС, Минюст, Минобрнауки), не нотариус. Подробнее — в статье <a href="#"><a data-article=apostille-legalization>«Апостиль и легализация документов»</a>.</p><p><strong>Перевод.</strong> Делается у сертифицированного (присяжного) переводчика на норвежский или английский. Нотариус не нужен. Апостиль ставится на оригинал, потом этот апостилированный документ переводят — переводится в том числе текст самого апостиля.</p><p><strong>Копии и оригиналы.</strong> На самой подаче в визовом центре или полиции у вас могут забрать оригиналы свидетельств о браке и о рождении. По опыту участников чата оригиналы возвращают через визовый центр примерно за неделю с оплатой доставки.</p>'
      }
    ],
    faq: [
      { q: 'Нужно ли свидетельство о рождении? И апостиль с переводом на него?', a: 'Своё свидетельство о рождении обычно не входит в обязательный список для воссоединения с супругом. Оно нужно, если переезжают дети или если UDI запросит. Если решили приложить — апостиль и перевод обязательны.' },
      { q: 'Нужен ли мой диплом при подаче?', a: 'Для воссоединения с супругом диплом заявителя НЕ требуется. Он нужен только если подаётесь из Норвегии как Skilled worker (через собственное образование). Подробнее — в статье <a data-article=where-to-apply-norwegian>«Где подавать заявление: из России или из Норвегии»</a>.' },
      { q: 'Как правильно оформить перевод документов — нужен ли нотариус?', a: 'Перевод делается сертифицированным переводчиком. Нотариус НЕ нужен.' },
      { q: 'В каком порядке делать апостиль и перевод?', a: 'Сначала апостиль на оригинал. Потом перевод (включая текст апостиля). Если перевели сначала — придётся всё переделывать.' },
      { q: 'Нужны ли копии документов и как их заверить?', a: 'Копии при подаче делает сам визовый центр или полиция — оригиналы вы не отдаёте на постоянно (но могут забрать на время для проверки). Заверять нотариально не нужно. Желательно иметь свои копии для архива.' },
      { q: 'Какие совместные фотографии нужны и сколько?', a: 'Конкретного списка нет. По опыту участников 5–10 фотографий из разных периодов отношений (свадьба, путешествия, праздники, повседневность) обычно достаточно. Можно распечатать на одном-двух листах с подписями. Особенно важны, если брак короткий или дистанционный.' },
      { q: 'Нужна ли справка о несудимости?', a: 'По умолчанию нет — UDI не требует её от заявителя. Может запросить в отдельных случаях, но это не входит в стандартный чек-лист.' },
      { q: 'Нужна ли медицинская справка или флюорография при подаче?', a: 'При подаче — нет. Флюорография может потребоваться <strong>после приезда</strong> в Норвегию для жителей определённых стран, и делается уже на месте.' },
      { q: 'Что такое «четырёхлетнее требование» (four-year requirement)?', a: 'Это правило для случаев, когда отношения возникли уже после переезда референс-персоны в Норвегию: тогда супруг должен сначала проработать или проучиться в Норвегии 4 года. Для большинства кейсов с уже существующим браком это требование не применяется.' }
    ],
    warn: '<p>Прикладывайте «всё, что относится к теме», даже если документа нет в публичном чек-листе UDI. По опыту чата отсутствие документа (например, справки NAV) часто становится причиной отказа — даже когда UDI по телефону говорит, что документ не обязателен.</p>',
    tip: '<p>Делайте 2–3 копии всех документов и сканируйте всё в высоком разрешении <strong>до сдачи</strong>. Это пригодится для апелляции, если что-то пойдёт не так, или для повторной подачи.</p><p>Если вы заполняете анкету UDI и видите поля разной длины (например, 3 см на «как познакомились» и 15 см на «что сказали бы родители если бы вы отказались жениться») — это не случайно. UDI хочет понять, что брак добровольный, без давления семьи или принуждения. Заполняйте подробно именно длинные поля.</p>',
    compare: {
      udi: 'На сайте UDI приведены универсальные чек-листы по типу заявителя. Реальный список генерируется автоматически после онлайн-подачи.',
      practice: 'В практике сообщества часто всплывают «неочевидные» документы: совместные поездки, скриншоты переписки за длительный период, чеки совместных покупок. Особенно важны для UDI как доказательство добровольности брака.'
    },
    quotes: [
      { text: 'Консультант говорит, что UDI хочет понимать, что у вас нормальный добровольный союз, и что вас никто не купил и не платил калым. Это чуть ли не важнее, чем доказать реальность отношений.', author: 'Участник сообщества, 14.05.2025 · супруг — Skilled worker' },
      { text: 'Я отправляла им оригинал свидетельства о браке обыкновенным письмом в Осло (скатетатен) вернулась обратно через 3-4 недели.', author: 'Участник сообщества, 16.01.2026 · о возврате оригиналов из Skatteetaten' }
    ],
    sources: [
      { label: 'UDI: Checklists for required documentation', url: 'https://www.udi.no/en/word-definitions/checklists-which-explain-which-documents-you-must-hand-in-with-your-application/' }
    ]
  },

  // ============================================================
  // POLICE APPOINTMENT PREPARE
  // ============================================================
  'police-appointment-prepare': {
    tldr: [
      'Запись делается через <strong>politiet.no</strong> — в полицию по адресу планируемого проживания в Норвегии.',
      'Записи может не быть на <strong>1–3 месяца вперёд</strong> — записывайтесь сразу после оплаты пошлины.',
      'На приёме сдаёте документы и биометрию.',
      'Если свободных слотов нет — позвоните в UDI и сообщите, что пытались записаться. Это сохранит ваши права на время ожидания.',
      'По опыту участников чата сроки часто короче официальных: например, на сайте «10 недель», а реально приём через 7.'
    ],
    actionNow: [
      'После оплаты пошлины зайдите на politiet.no и запишитесь на ближайший доступный слот.',
      'Если ближайший слот через несколько месяцев — записывайтесь всё равно, дальше дело не двинется.',
      'Если у полиции нет слотов в ближайшие 4 недели — позвоните в UDI, чтобы зафиксировать факт попытки записи.'
    ],
    sections: [
      {
        title: 'Как работает запись',
        body: '<p>Записываетесь онлайн на politiet.no в полицейский участок по адресу планируемого совместного проживания (не по адресу, где находитесь физически в момент записи).</p><p>На приёме:</p><ul><li>Сдаёте документы по чек-листу UDI.</li><li>Сдаёте биометрию (отпечатки пальцев, фото).</li><li>Полиция регистрирует заявление и передаёт в UDI.</li></ul><p>После приёма документы могут несколько недель оставаться в полиции — это нормально. Для кейсов с гражданином ЕС полиция Осло иногда передаёт в UDI на следующий день.</p>'
      },
      {
        title: 'Если запись очень далеко',
        body: '<p>UDI признаёт, что запись бывает на много месяцев вперёд. Если вы зарегистрировали заявку онлайн и не можете записаться вовремя — права сохраняются (включая возможность оставаться легально), если вы успели сделать онлайн-регистрацию.</p><p><strong>Что делать:</strong></p><ul><li>Сохраните подтверждение онлайн-регистрации UDI.</li><li>Позвоните в UDI и сообщите, что не можете записаться.</li><li>Записывайтесь на первый доступный слот, даже если он через несколько месяцев.</li></ul>'
      },
      {
        title: 'Подача в Норвегии по шенгенской визе',
        body: '<p>Если вы в Норвегии по шенгенской визе и записались на сдачу документов в полицию, важно: <strong>онлайн-подача без явки в полицию не считается «подачей»</strong>. Право оставаться легально зависит от соблюдения сроков визы и факта явки в полицию.</p><p>По опыту участников чата после онлайн-подачи у вас обычно есть <strong>7 дней</strong> до фактической записи в полицию на сдачу биометрии — это уточнение получено напрямую от UDI. Если виза заканчивается в момент подачи — это критично.</p>'
      }
    ],
    faq: [
      { q: 'Куда записываться, если ещё не знаю точно, где буду жить?', a: 'Лучше определиться с адресом до записи. Запись делается в полицию по этому адресу. Если адрес меняется до приёма — лучше отменить и записаться заново в новый участок.' },
      { q: 'Что если у меня шенгенская виза заканчивается до даты записи?', a: 'По опыту чата это рабочая практика, если: вы успели онлайн-подать заявление до окончания визы; запись назначена; вы остаётесь в Норвегии до самой записи. Сама подача апелляции права остаться не даёт — основание — факт подачи на ВНЖ.' },
      { q: 'Сотрудники полиции отказывают мне в приёме — что делать?', a: 'Бывают случаи, когда сотрудник говорит, что вы не имеете права подавать из Норвегии — даже если по UDI это разрешено. По опыту участников чата помогает распечатать соответствующий раздел сайта UDI и показать на месте.' },
      { q: 'Можно ли изменить место подачи после записи?', a: 'Можно — отменить запись и записаться в другой участок. Но если перенос произошёл рядом с датой приёма, удобнее прийти и попросить переоформить.' },
      { q: 'Что делать, если записи нет на 3 месяца вперёд?', a: 'Это нормально для крупных полицейских участков (Осло, Берген, Тронхейм). Записывайтесь на самый ранний слот и звоните в UDI, чтобы зафиксировать факт.' }
    ],
    warn: '<p>Если у вас шенгенская виза заканчивается до даты приёма в полиции — обязательно убедитесь, что онлайн-регистрация на udi.no сделана до окончания визы. Без неё право оставаться в Норвегии не сохраняется.</p><p>Сотрудники полиции <strong>не всегда знают актуальные правила UDI</strong>. По опыту чата помогает иметь под рукой распечатку соответствующей страницы udi.no — и не сдаваться, если сотрудник говорит «у вас нет права подавать».</p>',
    tip: '<p>Записывайтесь как можно раньше — сразу после оплаты пошлины. Слоты в крупных городах могут заполниться на 2–3 месяца вперёд. Чем раньше запись — тем раньше дело попадёт в UDI.</p>',
    quotes: [
      { text: 'У меня работник тоже не очень попался, запутал все документы, а потом в самом конце сказал, что я вообще не могу подавать из Норвегии. Но я сказала уверенно, что могу, и нашла скрины UDI, где написано, что можно по любому шенгену и с дипломом.', author: 'Участник сообщества, 22.01.2026 · подача в полиции через диплом' }
    ],
    sources: [
      { label: 'UDI: Booking and attending an appointment', url: 'https://www.udi.no/en/word-definitions/booking-of-an-appointment/' },
      { label: 'politiet.no', url: 'https://www.politiet.no/en/services/residence-permits-and-protection/' }
    ]
  },

  // ============================================================
  // APOSTILLE LEGALIZATION
  // ============================================================
  'apostille-legalization': {
    tldr: [
      'Документы из стран Гаагской конвенции (включая Россию) требуют <strong>апостиль</strong>, не консульскую легализацию.',
      'Апостиль ставит <strong>ведомство, выдавшее документ</strong> (ЗАГС, Минюст, Минобрнауки), не нотариус.',
      'Порядок: <strong>сначала апостиль на оригинал, потом перевод</strong>. Перевод включает текст самого апостиля.',
      'Срок жизни апостиля — бессрочный, но UDI обычно хочет «свежие» документы (не старше 6–12 месяцев).',
      'Двойной апостиль (на оригинал и на перевод) необязателен, но не вызывает у UDI проблем.'
    ],
    actionNow: [
      'Соберите список документов, которые нужно апостилировать (свидетельства о браке/рождении, справки, диплом если нужен).',
      'Поставьте апостиль в России — в ведомстве, выдавшем документ.',
      'Сделайте перевод апостилированного документа у сертифицированного (присяжного) переводчика.'
    ],
    sections: [
      {
        title: 'Где ставят апостиль в России',
        body: '<ul><li><strong>Свидетельство о браке/рождении</strong> — в управлении ЗАГС субъекта, выдавшего документ.</li><li><strong>Справки МВД (несудимость и др.)</strong> — в Главном управлении МВД.</li><li><strong>Диплом</strong> — в Министерстве науки и высшего образования (Минобрнауки).</li><li><strong>Судебные документы</strong> — в Министерстве юстиции.</li></ul><p>Важно: апостиль ставится в том же субъекте, где выдан документ. Если свидетельство о браке выдано в Москве, апостиль ставится в московском ЗАГСе.</p>'
      },
      {
        title: 'Порядок: апостиль, потом перевод',
        body: '<p>Правильный порядок:</p><ol><li>Апостиль на оригинал документа.</li><li>Перевод (включая текст самого апостиля) у сертифицированного переводчика.</li></ol><p>Если сделать наоборот (перевод, потом апостиль) — придётся всё переделывать. Апостиль на перевод сам по себе бесполезен: UDI нужен апостиль на оригинал, а не на перевод.</p>'
      },
      {
        title: 'Двойной апостиль',
        body: '<p>По опыту участников чата некоторые делают «двойной» апостиль — на оригинал и потом ещё на перевод. Это не обязательное требование UDI, но и проблем не вызывает. Если хотите подстраховаться — можно сделать.</p>'
      },
      {
        title: 'Срок действия',
        body: '<p>Сам апостиль бессрочный. Но UDI обычно хочет, чтобы документы были «свежие» — не старше 6–12 месяцев. Если у вас старое свидетельство о браке, можно либо получить повторное (новое) свидетельство и поставить на него новый апостиль, либо приложить к старому свежую справку из ЗАГС с апостилем.</p>'
      }
    ],
    faq: [
      { q: 'Можно ли поставить апостиль у нотариуса?', a: 'Нет. Нотариус не уполномочен ставить апостиль. Только государственные ведомства, выдавшие документ.' },
      { q: 'Сколько стоит апостиль в России?', a: 'Госпошлина устанавливается отдельно для каждого типа документа. Актуальные суммы — на сайте соответствующего ведомства.' },
      { q: 'Что если документ выдан не в России, а в другой стране СНГ?', a: 'Большинство стран СНГ — участники Гаагской конвенции, поэтому требуется апостиль (не консульская легализация). Конкретный порядок зависит от страны выдачи.' },
      { q: 'Что делать, если страна не участник Гаагской конвенции?', a: 'Нужна консульская легализация — через посольство Норвегии в стране выдачи документа. Это сложнее и дольше, чем апостиль. Уточняйте порядок у конкретного посольства.' },
      { q: 'Можно ли использовать электронный апостиль?', a: 'Если страна выдачи документа выдаёт электронный апостиль — да, обычно принимается. Бумажная версия универсальнее.' }
    ],
    sources: [
      { label: 'UDI: Checklists for required documentation', url: 'https://www.udi.no/en/word-definitions/checklists-which-explain-which-documents-you-must-hand-in-with-your-application/' }
    ]
  },

  // ============================================================
  // PROCESSING TIMES
  // ============================================================
  'processing-times': {
    tldr: [
      'Реалистичные сроки сильно зависят от кейса. Для жены гражданина Норвегии в 2025–2026 это около <strong>1,5–2 лет с момента подачи</strong> — это устойчивый тренд за последние полтора года.',
      'Для жены гражданина ЕС/ЕЭЗ — обычно 2–4 месяца (по правилу директивы решение должно быть принято в течение 6 месяцев).',
      'Для семей Skilled worker через консультанта работодателя — 4–6 месяцев.',
      'Сроки <strong>могут расти</strong> после подачи: UDI обновляет очередь динамически.',
      'Беременность и маленькие дети <strong>не дают</strong> приоритета. Приоритет — только при тяжёлой болезни или гуманитарных обстоятельствах.'
    ],
    actionNow: [
      'Найдите свой кейс в гиде UDI «Guide to waiting time» и зафиксируйте текущий ориентир.',
      'Заведите календарь с ключевыми датами: онлайн-регистрация, оплата, сдача документов, передача в UDI.',
      'Раз в 1–2 месяца проверяйте личный кабинет на udi.no — UDI присылает обновления, но иногда их можно пропустить.'
    ],
    sections: [
      {
        title: 'Сроки по кейсам',
        body: '<p>Точные значения — на странице UDI «Guide to waiting time» (обновляется ежемесячно). Реалистичные ориентиры на 2025–2026 по кейсам сообщества:</p><ul><li><strong>Жена гражданина Норвегии (подача из России):</strong> 1,5–2 года.</li><li><strong>Жена гражданина ЕС/ЕЭЗ (карта резидента, подача в полиции Норвегии):</strong> 2–4 месяца. По правилу директивы — не более 6 месяцев.</li><li><strong>Skilled worker через консультанта работодателя:</strong> 5–6 месяцев.</li><li><strong>Skilled worker самостоятельная подача:</strong> приближается к кейсу гражданина Норвегии.</li></ul><p>Эти сроки — ориентир. UDI прямо пишет, что цифры на сайте — это «guidance», а не обещание.</p>'
      },
      {
        title: 'Тренд: сроки растут',
        body: '<p>За последние 1,5 года лаг очереди UDI вырос с примерно 12 до 17 месяцев. Это устойчивый тренд, а не сезонные колебания. Если вы видите старые гайды UDI «8–14 месяцев» — они устарели.</p><p>Историческая редкость: в 2023 — начале 2024 годов отдельные кейсы из России обрабатывались за 1,5–4 месяца, если все документы были идеальны. К 2025 году эта быстрая дорожка практически исчезла. Не закладывайте такие сроки в свой план.</p>'
      },
      {
        title: 'Как работает очередь',
        body: '<p>UDI обрабатывает заявления <strong>в порядке поступления</strong>, кроме приоритетных кейсов. Это значит:</p><ul><li>Сначала дело лежит в полиции (несколько недель — несколько месяцев).</li><li>Потом передаётся в UDI и встаёт в очередь.</li><li>Когда очередь доходит — назначается офицер, который рассматривает дело.</li><li>Между назначением офицера и решением — ещё несколько недель.</li></ul><p>UDI обновляет очередь динамически: если изначально вам сказали «6 месяцев», а к моменту рассмотрения сроки выросли до 9 — применяется обновлённая оценка.</p>'
      },
      {
        title: 'Можно ли ускорить',
        body: '<p>Очень редко. UDI рассматривает запросы приоритета только в случаях:</p><ul><li>Тяжёлая болезнь референс-персоны или заявителя.</li><li>Особые гуманитарные обстоятельства.</li></ul><p>Беременность и маленькие дети сами по себе приоритета <strong>не дают</strong>. Запрос на приоритет подаётся <strong>только письменно</strong> с обоснованием через личный кабинет.</p>'
      }
    ],
    faq: [
      { q: 'Что значит, если дело долго остаётся у полиции и не передаётся в UDI?', a: 'Это нормально. Полиция сначала проверяет полноту документов, регистрирует и только потом отправляет в UDI. Этап может занять от нескольких недель до пары месяцев. Для кейсов с гражданином ЕС полиция Осло иногда передаёт в UDI на следующий день.' },
      { q: 'Как отслеживать статус заявления?', a: 'Через личный кабинет «My applications» на udi.no. Раз в месяц UDI присылает email или SMS со статусом.' },
      { q: 'Могут ли сроки рассмотрения увеличиться после подачи?', a: 'Да. UDI обновляет очередь динамически. Если изначально вам сказали «6 месяцев», а к моменту рассмотрения сроки выросли до 9 — применяется обновлённая оценка.' },
      { q: 'Беременность даёт право на приоритет?', a: 'Нет. Беременность сама по себе не является основанием для приоритета. UDI прямо указывает это на своём сайте.' },
      { q: 'Что делать, если я жду больше года и нет движения?', a: 'Через 12+ месяцев имеет смысл периодически проверять личный кабинет и звонить в UDI. Иногда они делают запрос на дополнительные документы (например, актуальный трудовой договор), но уведомление можно пропустить, и дело будет стоять без движения.' },
      { q: 'Как считается срок: с даты онлайн-регистрации или с даты сдачи документов в полиции/VFS?', a: 'Обычно — с даты официальной регистрации заявления, которая фиксируется после личной сдачи документов. Онлайн-регистрация — это только первый шаг.' }
    ],
    warn: '<p>Лучше планировать на максимальный срок и <strong>не строить планы, привязанные к конкретной дате</strong>. По данным независимых СМИ, отдельные дела достигают 25 месяцев. Sivilombudet (омбудсмен) неоднократно критиковал UDI за чрезмерные сроки.</p><p>После 12 месяцев ожидания периодически проверяйте личный кабинет и пробуйте звонить в UDI: иногда они делают запрос на дополнительные документы, но уведомление можно пропустить, и дело будет стоять без движения.</p>',
    tip: '<p>Заведите календарь с ключевыми датами: регистрация заявки, оплата пошлины, сдача документов, дата начала рассмотрения по гиду UDI. Это помогает быстрее увидеть, когда дело движется, и обращаться в UDI с конкретными вопросами, если что-то застряло.</p><p>Полезно сравнивать сроки с другими в сообществе, кто подавал в то же время — это даёт более реалистичную картину, чем официальные оценки UDI.</p>',
    compare: {
      udi: 'UDI обновляет гид по срокам ежемесячно. Раз в месяц приходит email/SMS со статусом. UDI прямо пишет, что сроки — это «guidance», а не обещание.',
      practice: 'По хронике одобрений 2025 года в сообществе: жена-россиянка + муж-норвежец (через посольство) — 16–17 месяцев. Жена-россиянка + муж-гражданин ЕС в полиции Осло — 2–4 месяца, иногда быстрее. Семья Skilled worker через консультанта — около 5–6 месяцев. Кейсы 18+ месяцев бывают, особенно при подаче из Норвегии с супругом-норвежцем.'
    },
    quotes: [
      { text: 'Сейчас они сроки даже не пишут. При вводных: жена — гражданка РФ, муж — гражданин Норвегии, нет совместных детей и первая подача — они с 1 марта 2026 по 1 мая 2026 будут рассматривать заявления, поданные до 1 ноября 2024. Считайте, 1,5–2 года.', author: 'Участник сообщества, 08.04.2026 · супруг-норвежец, ВНЖ получен' },
      { text: 'Я из России подавалась, и да, полтора месяца всего ждала. Повезло, считаю.', author: 'Участник сообщества, 31.07.2024 · историческая быстрая обработка, сейчас редкость' }
    ],
    sources: [
      { label: 'UDI: Guide to waiting time in family immigration cases', url: 'https://www.udi.no/en/word-definitions/guide-to-case-processing-times-in-family-immigration-cases/' }
    ]
  },

  // ============================================================
  // SITUATION CHANGED
  // ============================================================
  'situation-changed': {
    tldr: [
      'Любые серьёзные изменения нужно сообщать UDI письменно — через личный кабинет «My applications».',
      '<strong>Адрес:</strong> обязательно сообщать. Можно через UDI или сразу через Folkeregisteret (если есть личный номер).',
      '<strong>Доход повысился:</strong> лучше сообщить и приложить новые документы, особенно если доход был на грани минимума — это может усилить кейс.',
      '<strong>Семья (развод, новый брак, рождение ребёнка):</strong> обязательно сообщать.',
      'Чем раньше сообщите — тем меньше риск отказа за «ввод в заблуждение».'
    ],
    actionNow: [
      'Зайдите в личный кабинет на udi.no — «My applications».',
      'Подготовьте документы, подтверждающие изменение (например, новый трудовой договор, свидетельство о рождении).',
      'Отправьте сообщение в UDI через форму обратной связи в кабинете, приложив документы.'
    ],
    sections: [
      {
        title: 'Какие изменения нужно сообщать',
        body: '<p><strong>Обязательно сообщать:</strong></p><ul><li>Изменение адреса заявителя или супруга.</li><li>Серьёзные изменения семейного положения: развод, новый брак, рождение или усыновление ребёнка.</li><li>Смерть супруга — кейс может перейти в другую категорию.</li><li>Изменение паспорта (продление, замена).</li><li>Изменение работы супруга (новый работодатель, изменение зарплаты).</li></ul><p><strong>Лучше сообщить, но не строго обязательно:</strong></p><ul><li>Повышение дохода — особенно если доход был на грани минимума.</li><li>Получение новых документов, относящихся к кейсу (например, если поступил диплом из аккредитации).</li><li>Изменение жилья супруга.</li></ul><p><strong>Можно не сообщать:</strong></p><ul><li>Бытовые изменения, не относящиеся к кейсу (например, новый банковский счёт, не используемый для подачи).</li></ul>'
      },
      {
        title: 'Почему важно сообщать',
        body: '<p>UDI ценит <strong>актуальность данных</strong> на момент принятия решения. Если в момент рассмотрения окажется, что ваши данные устарели (например, у супруга новая зарплата, которой нет в кейсе) — UDI запросит обновление, и это замедлит дело. В худшем случае может прийти отказ за «ввод в заблуждение», если в кейсе указано одно, а реальная ситуация другая.</p>'
      },
      {
        title: 'Как сообщать',
        body: '<p>Все изменения сообщаются <strong>письменно</strong> через личный кабинет на udi.no. По телефону или устно сообщать не стоит — нужен документальный след.</p><p>В сообщении укажите:</p><ul><li>DUF-номер вашего заявления.</li><li>Что именно изменилось (адрес / семья / доход).</li><li>С какой даты.</li><li>Приложите подтверждающий документ.</li></ul>'
      }
    ],
    faq: [
      { q: 'Что делать, если адрес меняется уже несколько раз во время ожидания?', a: 'Сообщать каждое изменение через личный кабинет. UDI это нормально — людям нужно жить. Главное — чтобы на момент решения был актуальный адрес.' },
      { q: 'Доход супруга вырос — обязательно ли сообщать?', a: 'Не строго обязательно, но рекомендуется. Если изначальный доход был на грани минимума — новый, более высокий, документ усиливает кейс. Если изначальный доход был сильно выше минимума — можно не сообщать.' },
      { q: 'Родился ребёнок во время ожидания — нужно ли это сообщать?', a: 'Да, обязательно. Это меняет состав семьи и может повлиять на оценку UDI. Также имеет смысл сразу подумать про статус ребёнка — у него может быть автоматическое норвежское гражданство, если у супруга есть.' },
      { q: 'Развелись с супругом во время ожидания — что делать?', a: 'Сообщать обязательно. В этом случае кейс семейного воссоединения, скорее всего, будет закрыт. Дальше нужно отдельно изучать опции.' },
      { q: 'Что если я переезжаю в другую страну на время ожидания?', a: 'Сообщать. Иногда это нормально, иногда вызывает вопросы — UDI может посчитать, что вы не реально планируете жить с супругом в Норвегии.' },
      { q: 'Можно ли сообщить устно по телефону?', a: 'Нет. Все изменения сообщаются письменно через личный кабинет — нужен документальный след.' }
    ],
    warn: '<p>Не скрывайте изменения в надежде, что UDI не заметит. Если в момент решения окажется, что в кейсе устаревшие данные — это может стать причиной отказа за «ввод в заблуждение». Восстановить доверие после этого сложнее, чем заранее сообщить об изменении.</p>',
    tip: '<p>Сохраняйте копии всех сообщений в UDI и подтверждений отправки. Если что-то пойдёт не так, у вас будет документальный след того, что вы обновили данные вовремя.</p>',
    sources: [
      { label: 'UDI: Have applied — Family immigration', url: 'https://www.udi.no/en/have-applied/family-immigration/' }
    ]
  },

  // ============================================================
  // POLICE REGISTRATION CARD
  // ============================================================
  'police-registration-card': {
    tldr: [
      'После одобрения ВНЖ нужно явиться в полицию по месту проживания для получения карты.',
      'Записываетесь онлайн на politiet.no — в полицию по адресу проживания в Норвегии.',
      'На приёме сдаёте биометрию (фото + отпечатки), полиция заказывает карту.',
      'Карта приходит <strong>по почте через 3+ недель</strong> после приёма.',
      'На почтовом ящике <strong>обязательно</strong> должно быть ваше имя — иначе карта не дойдёт.'
    ],
    actionNow: [
      'После одобрения ВНЖ запишитесь онлайн на politiet.no — в полицию по адресу проживания.',
      'На приёме сдайте биометрию (если ещё не сдавали) и получите подтверждение, что карта заказана.',
      'Убедитесь, что ваше имя есть на почтовом ящике — обычная почта дойдёт только так.'
    ],
    sections: [
      {
        title: 'Запись и приём',
        body: '<p>Записываетесь онлайн на politiet.no в полицию по адресу проживания. На приёме:</p><ul><li>Сдаёте биометрию (фото и отпечатки пальцев) — если не сдавали раньше.</li><li>Полиция проверяет ваши документы и оформляет заказ на карту.</li><li>Получаете подтверждение, что карта заказана.</li></ul><p>Сам приём обычно занимает 15–30 минут.</p>'
      },
      {
        title: 'Получение карты',
        body: '<p>Карта ВНЖ приходит <strong>по почте</strong> через 3 недели и больше после приёма. Срок может варьироваться — зависит от загрузки центра, который выпускает карты.</p><p><strong>Важно:</strong> на почтовом ящике должно быть ваше имя. Без имени почта Норвегии не оставит письмо в ящике — карта вернётся отправителю. Если живёте у супруга и его имя — другое, либо добавьте своё имя на ящик, либо договоритесь о другом способе получения.</p>'
      },
      {
        title: 'Если карта потеряется',
        body: '<p>Если карта не дошла или потерялась — нужно сообщить в полицию и заказать повторную. Повторная отправка обычно занимает ещё около 10 дней. Дополнительной пошлины обычно нет, если карта потеряна в почтовой системе.</p>'
      },
      {
        title: 'Срок 7 дней — гибкий',
        body: '<p>По официальным правилам после въезда нужно явиться в полицию в ближайшие 7 дней. На практике, если у полиции нет свободных слотов — они принимают позже, отмечая что вы прибыли раньше.</p><p>По опыту участников чата если слотов нет в первые 7 дней, на приём можно прийти и через несколько недель — нужно только сохранить подтверждение, что вы пытались записаться вовремя.</p>'
      }
    ],
    faq: [
      { q: 'Что делать, если запись только через несколько недель?', a: 'Записывайтесь на первый доступный слот. Срок 7 дней — гибкий: главное, чтобы запись была зафиксирована, и вы пришли на приём.' },
      { q: 'Можно ли поручить родственнику получить карту вместо меня?', a: 'Нет, карта именная и приходит лично. Получаете только вы.' },
      { q: 'Карта пришла, но в ней ошибка — что делать?', a: 'Сообщить в полицию или UDI. Карту переоформят без дополнительной пошлины, если ошибка по вине ведомства.' },
      { q: 'Сколько действует карта?', a: 'Зависит от типа ВНЖ. Для семейного воссоединения с гражданином Норвегии обычно 1 год (первая карта) или 2–3 года (последующие). Для карты резидента ЕС/ЕЭЗ — обычно 5 лет.' },
      { q: 'Что если я переехал в другой регион Норвегии после приёма, но до получения карты?', a: 'Сообщить в полицию через личный кабинет UDI или напрямую в полицию. Карту перенаправят на новый адрес.' }
    ],
    warn: '<p>На почтовом ящике обязательно должно быть <strong>ваше имя</strong>. Норвежская почта строго следует правилу: нет имени — нет доставки. Карта вернётся отправителю, и повторная отправка займёт ещё около 10 дней.</p><p>Если живёте у супруга и его имя на ящике — добавьте своё имя или поговорите с соседями/арендодателем.</p>',
    tip: '<p>Перед приёмом в полиции возьмите с собой: паспорт, решение UDI (PDF из личного кабинета), подтверждение записи. Не оставляйте оригинал паспорта в полиции — обычно его проверяют и возвращают сразу.</p>',
    quotes: [
      { text: 'По правилам я должна была в полицию в ближайшие 7 дней попасть с момента прибытия в страну, на что ему ответили: всё Ок, мы у себя отметили, что вы приедете раньше, но у нас нет свободного времени вас принять.', author: 'Участник сообщества, 04.06.2025 · о гибкости срока 7 дней' },
      { text: 'Я в итоге через 4 недели только пошла, никто ничего не сказал.', author: 'Участник сообщества, 21.06.2024 · подтверждение гибкости срока' }
    ],
    sources: [
      { label: 'UDI: Application approved — Residence card', url: 'https://www.udi.no/en/received-an-answer/application-approved/residence-card-eea/' },
      { label: 'politiet.no', url: 'https://www.politiet.no/en/services/residence-permits-and-protection/' }
    ]
  },

  // ============================================================
  // D-NUMBER FODSELSNUMMER
  // ============================================================
  'd-number-fodselsnummer': {
    tldr: [
      'После приёма в полиции UDI уведомляет налоговую (Skatteetaten).',
      'Через примерно <strong>2 недели</strong> приходит письмо с номером.',
      '<strong>D-номер</strong> — временный, выдают если ВНЖ короче 6 месяцев.',
      '<strong>Fødselsnummer</strong> (личный номер) — постоянный, выдают если ВНЖ дольше 6 месяцев.',
      'С любым из этих номеров можно открывать банк, идти к врачу, начать оформление BankID или MinID.'
    ],
    actionNow: [
      'После приёма в полиции — подождите примерно 2 недели, пока придёт письмо от Skatteetaten.',
      'Проверьте, какой номер вам выдали — D или fødselsnummer.',
      'С номером на руках начинайте оформлять банк, врача (fastlege), и BankID/MinID.'
    ],
    sections: [
      {
        title: 'Чем отличаются D-номер и fødselsnummer',
        body: '<p><strong>D-номер (D-nummer):</strong></p><ul><li>Временный.</li><li>Выдают, если ВНЖ выдан на срок короче 6 месяцев.</li><li>Также выдают краткосрочным работникам, посетителям с долгими делами в Норвегии.</li><li>Подходит для базовых операций: банк, налоги, медицина.</li></ul><p><strong>Fødselsnummer (личный номер):</strong></p><ul><li>Постоянный.</li><li>Выдают тем, кто планирует жить в Норвегии 6+ месяцев.</li><li>Подходит для всех функций норвежского общества: ВНЖ, банк, BankID, медицина, образование, выборы (для граждан).</li></ul><p>Какой именно номер выдают — решает налоговая, исходя из типа ВНЖ. Заявитель не выбирает.</p>'
      },
      {
        title: 'Если получили не тот номер',
        body: '<p>Если выдали D-номер, а должны были fødselsnummer — обратитесь в Folkeregisteret напрямую через skatteetaten.no. Они проверят и пересмотрят.</p><p>Это может случиться, если в системе ВНЖ был помечен как краткосрочный по технической ошибке.</p>'
      },
      {
        title: 'BankID vs MinID',
        body: '<p>После получения номера можно начать оформлять цифровую идентификацию:</p><ul><li><strong>BankID</strong> — основная цифровая ID Норвегии. Нужна для большинства государственных и частных сервисов. <strong>Требует fødselsnummer</strong> — с D-номером BankID не оформить.</li><li><strong>MinID</strong> — альтернатива для тех, у кого только D-номер. Имеет более ограниченный функционал, но позволяет пользоваться основными государственными сервисами.</li></ul><p>Получается замкнутый круг: пока ВНЖ короткий — D-номер — нет BankID — нет доступа к некоторым сервисам. С получением fødselsnummer проблема решается.</p>'
      },
      {
        title: 'DUF-номер до получения карты ВНЖ',
        body: '<p>Пока вы ждёте D-номер или fødselsnummer, у вас уже есть <strong>DUF-номер</strong> — он был присвоен при подаче заявления и указан в подтверждении UDI.</p><p>DUF-номер можно использовать как идентификатор: в спортзалах, на курсах, в клубах и других местах, где нужна идентификация. По опыту участников чата в 90% случаев DUF-номер принимают. Если не принимают — покажите распечатанную бумагу из UDI с присвоенным DUF.</p>'
      }
    ],
    faq: [
      { q: 'Сколько ждать письма с номером?', a: 'Обычно около 2 недель после приёма в полиции. Может быть быстрее или дольше — зависит от загрузки Skatteetaten.' },
      { q: 'Что если письмо не пришло через месяц?', a: 'Позвоните в Skatteetaten или зайдите на skatteetaten.no, чтобы уточнить статус. Иногда письмо теряется или приходит на неправильный адрес — лучше уточнить.' },
      { q: 'Можно ли открыть банк до получения номера?', a: 'Большинство банков требуют D-номер или fødselsnummer для открытия счёта. До получения номера — обычно нет.' },
      { q: 'Что делать, если мне нужен fødselsnummer, а выдали D-номер?', a: 'Обратиться в Folkeregisteret через skatteetaten.no и попросить пересмотр. Объяснить, что ВНЖ долгосрочный.' },
      { q: 'D-номер автоматически меняется на fødselsnummer при продлении ВНЖ?', a: 'Нет, автоматически не меняется. Нужно обратиться в Folkeregisteret и попросить смену номера на основании нового ВНЖ.' },
      { q: 'Можно ли получить BankID до прилёта в Норвегию?', a: 'Нет. BankID требует личного посещения банка с документами в Норвегии.' }
    ],
    warn: '<p>С D-номером <strong>нельзя получить BankID</strong> — это базовая цифровая идентификация для большинства норвежских сервисов. Если ВНЖ долгосрочный, но Skatteetaten почему-то выдала D-номер вместо fødselsnummer — обратитесь к ним за пересмотром. Без BankID многие коммунальные и государственные услуги недоступны.</p>',
    tip: '<p>Пока ждёте номер, не сидите без дела — у вас уже есть <strong>DUF-номер</strong> из подтверждения подачи UDI. С ним можно записаться в спортзал, на курсы, в клубы. Если где-то не принимают — покажите распечатанную бумагу из UDI с DUF и объясните, что номер закреплён за вами.</p>',
    quotes: [
      { text: 'D-nummer — это временный номер, который вам дают, если вы приехали меньше, чем на полгода. Если дольше, то это сразу fødselsnummer.', author: 'Участник сообщества, 30.01.2026' },
      { text: 'Я называю DUF номер. Если не прокатывает — показываю распечатанную бумагу из UDI, где написано, что заявление принято на рассмотрение и присвоен этот номер DUF (он закреплён за человеком).', author: 'Участник сообщества, 11.11.2024 · использование DUF до получения номера' },
      { text: 'Чтобы на них зарегистрироваться требуется электронное подтверждение. Пока у вас нет BankID это может быть MinID, но его только с D nummer можно получить. Замкнутый круг.', author: 'Участник сообщества, 20.03.2026 · о ловушке BankID' }
    ],
    sources: [
      { label: 'Skatteetaten: D-nummer and personal identification number', url: 'https://www.skatteetaten.no/en/person/foreign/' },
      { label: 'UDI: FAQ — family immigration', url: 'https://www.udi.no/en/answer-pages/answers-family-immigration/' }
    ]
  },

  // ============================================================
  // VFS APPOINTMENT
  // ============================================================
  'vfs-appointment': {
    tldr: [
      'После заполнения онлайн-заявки на udi.no и оплаты пошлины — записывайтесь в визовый центр VFS или норвежское посольство <strong>сразу</strong>: очередь может быть на несколько недель вперёд.',
      'Запись делается через сайт VFS Global или посольство — <strong>не через UDI</strong>.',
      'На приёме сдаёте оригиналы документов и биометрию (фото + отпечатки пальцев).',
      'Личное присутствие каждого заявителя обязательно — включая несовершеннолетних детей.',
      'Оригиналы документов обычно возвращают сразу или через визовый центр в течение недели.'
    ],
    actionNow: [
      'Заполните онлайн-анкету на udi.no и оплатите пошлину.',
      'Скачайте сгенерированный персональный чек-лист документов.',
      'Запишитесь в VFS или посольство <strong>сразу</strong> — не ждите готовности всех документов, запись делается заранее.',
      'Распечатайте анкету и возьмите с собой оригиналы и копии всех документов из чек-листа.'
    ],
    sections: [
      {
        title: 'Что взять с собой на приём',
        body: '<p>Это базовый список. Полный актуальный чек-лист генерируется индивидуально на udi.no после заполнения онлайн-анкеты — сверьтесь с ним перед самой подачей.</p><ul><li>Распечатанная анкета UDI, подписанная вами</li><li>Подтверждение оплаты пошлины</li><li>Все документы из персонального чек-листа (оригиналы и копии)</li><li>Действующий загранпаспорт</li><li>Фото (если требуется по чек-листу)</li></ul>'
      },
      {
        title: 'Где записываться: VFS или посольство',
        body: '<p>Визовые центры VFS работают в нескольких городах России — Москве, Санкт-Петербурге, Мурманске и других. Актуальный список и слоты — на сайте VFS Global Norway. В некоторых странах VFS нет — тогда подача только через посольство Норвегии.</p>'
      },
      {
        title: 'Как возвращают оригиналы',
        body: '<p>На приёме у вас могут временно забрать оригиналы свидетельства о браке и о рождении — для сканирования. По опыту участников сообщества оригиналы возвращают через визовый центр с оплатой доставки в течение примерно недели.</p>'
      }
    ],
    faq: [
      { q: 'Можно ли записаться в VFS, пока не все документы готовы?', a: 'Да, и так обычно и делают. Запись может быть на несколько недель вперёд — записывайтесь сразу после оплаты пошлины, пока собираете документы.' },
      { q: 'Информация от колл-центра VFS расходится с тем, что написано на сайте UDI. Кому верить?', a: 'По опыту сообщества, колл-центр VFS иногда даёт неверную информацию — особенно по нестандартным вопросам (дети, подача из Норвегии, виза D). В спорных ситуациях проверяйте напрямую через посольство Норвегии или udi.no.' },
      { q: 'Можно ли после подачи забрать паспорт обратно — например, для поездки?', a: 'Да. Если паспорт находится в посольстве или VFS, можно написать в посольство и запросить его возврат. По опыту сообщества это работает.' },
      { q: 'Что делать, если запись в VFS слишком далеко, а пошлина уже оплачена?', a: 'Записывайтесь на ближайший доступный слот, даже если он через несколько недель. Подтверждение онлайн-регистрации и оплаты пошлины сохраняет ваши права на время ожидания приёма.' }
    ],
    warn: '<p>Колл-центр VFS Global обрабатывает вопросы по многим странам и не всегда точно знает специфику норвежских правил. Информацию из колл-центра стоит перепроверять на udi.no или напрямую в посольстве Норвегии — особенно по нестандартным кейсам.</p>',
    tip: '<p>Когда записываетесь в VFS, сразу оформите доставку паспорта — это сэкономит время на получение. Сканируйте все оригиналы перед сдачей: копии пригодятся, если что-то потеряется или понадобится апелляция.</p>',
    sources: [
      { label: 'UDI: Booking and attending an appointment', url: 'https://www.udi.no/en/word-definitions/booking-of-an-appointment/' },
      { label: 'VFS Global Norway', url: 'https://www.vfsglobal.com/norway/russia/' }
    ]
  },

  // ============================================================
  // EU EEA PROCESS
  // ============================================================
  'eu-eea-process': {
    tldr: [
      'Это <strong>другая процедура</strong> — не стандартная семейная миграция, а «карта резидента» (oppholdskort) по правилам ЕС/ЕЭЗ.',
      'Подача <strong>бесплатная</strong> — никакой пошлины 11 900 NOK.',
      'Нет фиксированного требования по доходу — нужно лишь, чтобы принимающая сторона реализовывала право на проживание.',
      'Можно работать сразу после подачи — нужна только налоговая карта (skattekort).',
      'Первая карта резидента выдаётся на <strong>5 лет</strong> (а не на 1+2 года, как в кейсе с норвежцем).',
      'Сроки рассмотрения короче — обычно 2–4 месяца при подаче в полиции Норвегии.'
    ],
    actionNow: [
      'Убедитесь, что принимающая сторона реализует право на проживание: есть трудовой договор, самозанятость, документы об учёбе или собственные средства.',
      'Зайдите на udi.no → «Want to apply» → выберите форму для карты резидента члена семьи гражданина ЕС/ЕЭЗ (не обычную family immigration).',
      'Решите, где подавать: в полиции Норвегии (если можете въехать легально) или в посольстве за границей.',
      'Соберите документы по чек-листу, который UDI генерирует после заполнения анкеты.'
    ],
    sections: [
      {
        title: 'Почему действуют другие правила',
        body: '<p>Норвегия не входит в ЕС, но входит в ЕЭЗ (EEA). По соглашению ЕЭЗ Норвегия применяет директиву ЕС 2004/38/EC — закон о свободном передвижении граждан ЕС/ЕЭЗ и их семей.</p><p>Главная идея: гражданин ЕС/ЕЭЗ имеет право жить и работать в любой стране ЕЭЗ. Супруг из третьей страны (например, из России) получает «производное право» — то же самое, но через партнёра-гражданина ЕС.</p>'
      },
      {
        title: 'Что значит «реализует право на проживание»',
        body: '<p>Само по себе гражданство ЕС/ЕЭЗ не даёт автоматического права на воссоединение в Норвегии. Принимающая сторона должна подтвердить, что реально живёт в Норвегии на одном из оснований:</p><ul><li>работает по найму (рабочий контракт и payslips);</li><li>ведёт самозанятость или бизнес;</li><li>учится и имеет достаточные средства (+ нужна частная медстраховка на 12 месяцев);</li><li>имеет собственные средства, достаточные для содержания семьи без социальной помощи.</li></ul><p>Это ключевое условие — его проверяют при первой подаче, продлении и переходе к постоянной карте.</p>'
      },
      {
        title: 'Чем этот путь отличается от кейса с норвежцем',
        body: '<table><tr><th></th><th>Кейс ЕС/ЕЭЗ</th><th>Кейс норвежца</th></tr><tr><td>Пошлина</td><td>0 NOK</td><td>~11 900 NOK</td></tr><tr><td>Требование по доходу</td><td>Нет фиксированного</td><td>416 512 NOK/год</td></tr><tr><td>Срок первого ВНЖ</td><td>5 лет</td><td>1 год, потом 2 года</td></tr><tr><td>Право на работу</td><td>С момента подачи</td><td>После одобрения ВНЖ</td></tr><tr><td>Сроки рассмотрения</td><td>2–4 месяца (полиция НО)</td><td>12–20 месяцев</td></tr></table>'
      },
      {
        title: 'Где подавать и как ждать',
        body: '<p>Самый распространённый сценарий — подача в полиции Норвегии. Если вы можете легально въехать (по шенгенской визе или безвизу), приезжаете, записываетесь в полицию и сдаёте документы лично.</p><p>Для въезда до подачи может пригодиться виза C по директиве 2004/38/EC — она бесплатна для родственников граждан ЕС и оформляется через консульство страны Шенгена (не Норвегии).</p><p>По европейскому правилу (директива 2004/38/EC) дело должно быть рассмотрено в течение 6 месяцев. Полиция Осло передаёт дело в UDI на следующий день после подачи документов.</p>'
      },
      {
        title: 'Что нужно от заявителя',
        body: '<ul><li>Действующий загранпаспорт</li><li>Свидетельство о браке (с апостилем и переводом)</li><li>Паспорт принимающей стороны как гражданина ЕС/ЕЭЗ</li><li>Документы о работе, учёбе или собственных средствах принимающей стороны</li><li>Совместные документы (для подтверждения настоящего брака)</li></ul>'
      }
    ],
    faq: [
      { q: 'Дают ли бесплатные языковые курсы в кейсе ЕС/ЕЭЗ?', a: 'Стандартное право на бесплатные курсы (как у супругов норвежцев) — нет. Можно записаться на курсы через коммуну за плату или искать другие варианты. Это один из минусов кейса ЕС/ЕЭЗ по сравнению с кейсом норвежца.' },
      { q: 'Что если принимающая сторона потеряет работу во время ожидания?', a: 'Есть переходный период: если стаж меньше года — право на проживание сохраняется на 6 месяцев, если больше года — на неопределённый срок, пока ищет работу. Уточните актуальные условия на udi.no при смене ситуации.' },
      { q: 'Если у принимающей стороны есть гражданство ЕС и планируется получение норвежского — стоит ли переходить на кейс норвежца?', a: 'Это вопрос стратегии. Кейс ЕС/ЕЭЗ даёт быструю выдачу ВНЖ сразу на 5 лет без пошлины, но без права на бесплатные курсы. Кейс норвежца даёт больше прав на интеграцию, но процесс дольше и дороже.' },
      { q: 'Можно ли в кейсе ЕС/ЕЭЗ подаваться из Норвегии, если въехали по шенгенской визе другой страны?', a: 'Технически да — но нужно убедиться, что въезд легальный. По опыту сообщества подача в полиции Норвегии в этом кейсе работает быстрее.' },
      { q: 'Что значит «реализует право на проживание» — учёба тоже подходит?', a: 'Да. Учёба в Норвегии — одно из четырёх допустимых оснований. При учёбе дополнительно потребуется частная медстраховка на 12 месяцев.' },
      { q: 'Получает ли супруг гражданина ЕС постоянную карту после 5 лет автоматически?', a: 'Нет, автоматически — нет. После 5 лет непрерывного легального проживания нужно подать заявку на постоянную карту резидента.' },
      { q: 'Что если у партнёров есть общий ребёнок — это даёт какие-то преимущества?', a: 'Семьи с детьми UDI и полиция Осло обычно рассматривают приоритетно. По опыту сообщества дела с общим ребёнком в кейсе ЕС/ЕЭЗ закрывались за 55 дней до 2 месяцев.' }
    ],
    warn: '<p>Если принимающая сторона не реализует право на проживание (не работает, не учится, нет средств) — права на карту резидента нет. Это самая частая причина отказа в кейсе ЕС/ЕЭЗ.</p>',
    tip: '<p>При подаче важно выбрать на udi.no именно форму для карты резидента члена семьи гражданина ЕС/ЕЭЗ, а не обычную family immigration. Ошибка в выборе формы замедляет обработку.</p>',
    compare: {
      udi: 'Кейс ЕС/ЕЭЗ — другая правовая база. UDI обрабатывает заявки по правилам ЕЭЗ. По директиве 2004/38/EC решение должно быть принято в течение 6 месяцев.',
      practice: 'По кейсам сообщества 2025 года подача в полиции Осло с гражданином ЕС рассматривалась за 2–4 месяца, иногда быстрее. Дело передаётся в UDI на следующий день после сдачи документов в полиции.'
    },
    quotes: [
      { text: 'Подавалась 14 февраля 2025 в полиции Осло на воссоединение с гражданином ЕС. На собеседование не звали. 22 июня 2025 пришёл имейл, что дали ВНЖ — итого 4 месяца.', author: 'Участник сообщества, 22.06.2025 · муж — гражданин Польши, подача в полиции Осло' },
      { text: 'В UDI на следующий день после подачи доков в полиции было передано мое дело.', author: 'Участник сообщества, 03.07.2025 · муж — гражданин ЕС' }
    ],
    sources: [
      { label: 'UDI: Residence card for family members of EU/EEA nationals', url: 'https://www.udi.no/en/want-to-apply/family-immigration/residence-card-for-family-members-of-eueea-nationals-/' },
      { label: 'UDI: EEA nationals', url: 'https://www.udi.no/en/want-to-apply/family-immigration/eea-nationals/' }
    ]
  },

  // ============================================================
  // CERTIFIED TRANSLATION
  // ============================================================
  'certified-translation': {
    tldr: [
      'Документы не на норвежском или английском нужно перевести у <strong>сертифицированного (присяжного) переводчика</strong>.',
      'Нотариус не нужен — только сертифицированный переводчик.',
      'В Норвегии это называется statsautorisert translatør (государственно авторизованный переводчик).',
      'Сначала апостиль на оригинал — потом перевод. Если перевести сначала, придётся переделывать.',
      'На переводе должны быть указаны данные переводчика и дата.'
    ],
    actionNow: [
      'Получите апостиль на оригинал документа (ЗАГС, МВД, Минюст — в зависимости от документа).',
      'Передайте апостилированный оригинал сертифицированному переводчику — переводится вся страница, включая текст апостиля.',
      'Проверьте, что на готовом переводе стоит подпись переводчика, его данные и дата.',
      'Сделайте 2–3 копии готового перевода до сдачи в VFS или полицию.'
    ],
    sections: [
      {
        title: 'Где найти переводчика',
        body: '<p><strong>В России:</strong> Посольство Норвегии рекомендует конкретные бюро. Уточняйте список на сайте посольства или в визовом центре VFS — он периодически обновляется. На сайте российского консульства в Норвегии также публикуется список аккредитованных бюро.</p><p><strong>В Норвегии:</strong> Официальный реестр письменных переводчиков — Translatørportalen. В паре русский–норвежский насчитывается несколько сотен специалистов.</p>'
      },
      {
        title: 'Что переводится',
        body: '<p>Переводится всё, что не на норвежском или английском. Типичные документы для воссоединения:</p><ul><li>Свидетельство о браке</li><li>Свидетельство о рождении (если требуется)</li><li>Справки о доходах, занятости, несудимости</li></ul><p>Переводится весь документ включая апостиль — не только основной текст.</p>'
      }
    ],
    faq: [
      { q: 'На какой язык переводить — норвежский или английский?', a: 'Оба принимаются. Норвежский предпочтительнее — но если найти хорошего переводчика на английский проще, это тоже подходит.' },
      { q: 'Как долго действует перевод?', a: 'Технически бессрочно. Но если оригинал документа «устарел» по меркам UDI (справки о доходах, занятости) — перевод тоже придётся обновить вместе с новым оригиналом.' },
      { q: 'Можно ли сделать апостиль и на оригинал, и на перевод?', a: 'Да, такой «двойной апостиль» работает и принимается UDI. Но он не обязателен — стандартный порядок: апостиль только на оригинал, перевод без отдельного апостиля.' },
      { q: 'Что делать, если в Норвегии нет переводчика для моего языка?', a: 'Можно перевести документы в стране выдачи через сертифицированное бюро — и привезти готовые. UDI принимает переводы, сделанные за пределами Норвегии, если выполнены сертифицированным переводчиком с понятными реквизитами.' }
    ],
    warn: '<p>Некоторые посольства и визовые центры принимают переводы только от бюро из своего рекомендованного списка. Уточняйте это заранее — не все переводчики из официальных реестров автоматически подходят для подачи именно через VFS.</p>',
    tip: '<p>Сканируйте все переводы в высоком разрешении сразу после получения. Копии пригодятся при продлении ВНЖ, апелляции или если оригинал потеряется при пересылке.</p>',
    sources: [
      { label: 'UDI: Checklists for required documentation', url: 'https://www.udi.no/en/word-definitions/checklists-which-explain-which-documents-you-must-hand-in-with-your-application/' },
      { label: 'Translatørportalen (реестр переводчиков в Норвегии)', url: 'https://www.statsautoriserte-translatorer.no/' }
    ]
  },

  // ============================================================
  // TRACK APPLICATION STATUS
  // ============================================================
  'track-application-status': {
    tldr: [
      'Главный инструмент — личный кабинет <strong>«My applications»</strong> на udi.no. Заходите туда, а не звоните.',
      'UDI присылает email или SMS раз в месяц — но уведомления можно пропустить. Проверяйте кабинет сами.',
      'Статус «Under processing» значит, что дело в работе. «Information requested» — нужно действовать немедленно.',
      'По телефону UDI статус обычно не сообщает — только через личный кабинет.',
      'Если после 12 месяцев ожидания нет движения — имеет смысл позвонить самим: иногда UDI запрашивал документы, но уведомление не дошло.'
    ],
    actionNow: [
      'Зайдите в личный кабинет на udi.no («My applications») — там актуальный статус вашего дела.',
      'Проверяйте кабинет раз в 1–2 месяца, не полагайтесь только на email-уведомления.',
      'Если видите статус «Information requested» — отвечайте немедленно, не пропускайте дедлайн.'
    ],
    sections: [
      {
        title: 'Что значат разные статусы',
        body: '<ul><li><strong>Submitted</strong> — заявка подана, ждёт начала рассмотрения.</li><li><strong>Under processing</strong> — кто-то в UDI начал работать с делом.</li><li><strong>Information requested</strong> — UDI хочет дополнительные документы или информацию. Действуйте быстро: обычно даётся 2–4 недели.</li><li><strong>Decision made</strong> — решение принято, скоро придёт письмо.</li></ul>'
      },
      {
        title: 'Дополнительные инструменты',
        body: '<p>Помимо личного кабинета, на udi.no есть <strong>«Guide to waiting time»</strong> — гид по срокам. Там видно, заявки какого периода сейчас обрабатываются. Гид обновляется раз в месяц и полезен для понимания, на каком вы месте в очереди.</p>'
      }
    ],
    faq: [
      { q: 'Что делать, если статус не меняется несколько месяцев?', a: 'Это нормально — дела могут долго стоять в очереди без видимых изменений. Однако после 12 месяцев ожидания стоит периодически позвонить в UDI: по опыту сообщества UDI иногда направлял запрос на доп. документы, но уведомление не доходило, и дело стояло без движения.' },
      { q: 'Как узнать свой DUF-номер?', a: 'DUF-номер (номер дела) есть в подтверждении регистрации заявки и в личном кабинете. Запишите его — он понадобится при любом обращении в UDI.' },
      { q: 'Насколько точен гид по срокам на udi.no?', a: 'Гид даёт ориентир, но не обещание. По опыту участников сообщества реальные сроки нередко превышают официальные. Сверяйтесь с теми, кто подавал примерно в то же время — это даёт более реалистичную картину.' },
      { q: 'Что если email от UDI не приходит вообще?', a: 'Проверьте папку «Спам» и убедитесь, что в личном кабинете указан актуальный адрес. По опыту сообщества, уведомления иногда не доходят технически. Регулярно заходите в кабинет напрямую.' }
    ],
    warn: '<p>По опыту сообщества, UDI иногда направляет запрос на дополнительные документы (например, обновлённый трудовой договор), но уведомление не доходит. Дело при этом стоит без движения. Если ждёте больше 12 месяцев — звоните в UDI сами и уточняйте, не нужно ли что-то досылать.</p>',
    tip: '<p>Заведите отдельную папку в почте для писем от UDI и настройте пересылку, чтобы не пропустить «Information requested». DUF-номер сохраните отдельно — он нужен при каждом обращении.</p>',
    sources: [
      { label: 'UDI: Have applied — Family immigration', url: 'https://www.udi.no/en/have-applied/family-immigration/' },
      { label: 'UDI: Guide to waiting time', url: 'https://www.udi.no/en/word-definitions/guide-to-case-processing-times-in-family-immigration-cases/' }
    ]
  },

  // ============================================================
  // INTERVIEW REQUESTED
  // ============================================================
  'interview-requested': {
    tldr: [
      'Запрос на интервью означает, что UDI хочет лично пообщаться с вами или принимающей стороной — это <strong>не отказ и не плохой знак</strong>.',
      'Интервью проводят очно — в отделении UDI или по видеосвязи. В некоторых случаях приглашают обоих партнёров.',
      'Отказываться от интервью не стоит — это влечёт отказ по делу.',
      'Цель — проверить, что отношения реальные: подготовьтесь рассказать о совместной жизни, планах, истории знакомства.'
    ],
    actionNow: [
      'Прочитайте письмо от UDI внимательно: кого приглашают, когда и куда.',
      'Подтвердите участие в указанный срок (как правило, нужно ответить письменно или через личный кабинет).',
      'Если дата не подходит — свяжитесь с UDI заранее и попросите перенос: обычно это возможно.',
      'Подготовьтесь: история знакомства, совместный быт, планы, переписка, фото — всё, что показывает реальные отношения.'
    ],
    sections: [
      {
        title: 'По каким случаям UDI чаще запрашивает интервью',
        body: '<p>UDI запрашивает интервью по своему усмотрению. Как правило, это происходит, когда дело кажется недостаточно убедительным или когда партнёры знакомы недолго, заявитель ранее получал отказ, или документальных доказательств мало. Интервью — не знак подозрения, а стандартная проверка.</p>'
      },
      {
        title: 'Что обычно спрашивают',
        body: '<p>Вопросы направлены на проверку того, что отношения настоящие. Типичные темы:</p><ul><li>Как познакомились, где и когда</li><li>Как выглядит ваш совместный быт</li><li>Кто что готовит, кто ходит за покупками, как проводите время</li><li>Планы: дети, жильё, работа</li><li>Как общаетесь, пока живёте раздельно</li></ul><p>Ответы заявителя и принимающей стороны сравнивают — важно, чтобы они совпадали в ключевых деталях.</p>'
      },
      {
        title: 'Онлайн или очно',
        body: '<p>UDI может провести интервью по видеосвязи, если личная явка затруднена. Запрашивать удалённый формат нужно заранее. Уточните в письме или свяжитесь с UDI — не все дела допускают онлайн-формат.</p>'
      }
    ],
    faq: [
      { q: 'Нам запросили интервью — это плохой знак?', a: 'Нет. По опыту сообщества дела, по которым проводилось интервью, нередко заканчивались положительно. Интервью — дополнительная проверка, а не предвестник отказа.' },
      { q: 'Нужен ли переводчик на интервью?', a: 'Если вы недостаточно владеете норвежским или английским, можно попросить переводчика. Уточните при подтверждении интервью — UDI обычно организует переводчика по запросу.' },
      { q: 'Что если принимающая сторона не может прийти на интервью?', a: 'Свяжитесь с UDI заранее и объясните причину. Интервью можно перенести или провести в другом формате, но полностью уклоняться не стоит — это создаёт негативное впечатление.' },
      { q: 'Через сколько после интервью принимается решение?', a: 'По опыту сообщества — от нескольких недель до нескольких месяцев. Интервью не гарантирует ускорения, но иногда после него решение приходит быстрее.' }
    ],
    warn: '<p>Если вы проигнорируете приглашение на интервью без объяснения причин — UDI может вынести решение без учёта вашей позиции, и это почти всегда отказ. Обязательно отвечайте на письмо в срок.</p>',
    tip: '<p>Перед интервью договоритесь с принимающей стороной и вместе вспомните ключевые детали: дату первой встречи, совместные поездки, бытовые привычки. Несовпадение в мелочах — это нормально, но принципиальные расхождения могут насторожить инспектора.</p>',
    sources: [
      { label: 'UDI: About interviews in family immigration cases', url: 'https://www.udi.no/en/word-definitions/interview/' }
    ]
  },

  // ============================================================
  // PRIORITY REQUEST
  // ============================================================
  'priority-request': {
    tldr: [
      'UDI может рассматривать заявку в приоритетном порядке — но только в исключительных случаях.',
      'Наличие детей в семье — самое веское основание для приоритета.',
      'Стандартный запрос («хочу побыстрее») <strong>не работает</strong>.',
      'Приоритет не гарантирован — UDI решает по своему усмотрению.',
      'Подавать запрос нужно письменно, с документами, подтверждающими основание.'
    ],
    actionNow: [
      'Оцените, есть ли у вас веское основание: дети, медицинская ситуация, другие тяжёлые обстоятельства.',
      'Если есть — напишите письменный запрос в UDI через личный кабинет или по контактной форме на udi.no.',
      'Приложите документы, подтверждающие причину (свидетельства о рождении, медицинские справки и т.д.).',
      'Ждите ответа от UDI — они рассматривают запрос и уведомляют о решении.'
    ],
    sections: [
      {
        title: 'Какие основания UDI считает достаточными',
        body: '<p>UDI публично не раскрывает полный перечень оснований, но по опыту сообщества и официальным формулировкам наиболее принимаемые:</p><ul><li><strong>Общие несовершеннолетние дети</strong> — особенно если дети живут с одним родителем, а второй ждёт ВНЖ. Это самое весомое основание.</li><li><strong>Серьёзное заболевание</strong> у заявителя или принимающей стороны, при котором разлучение несёт медицинский риск.</li><li><strong>Дети разлучены с одним из родителей</strong> — особенно маленькие дети.</li></ul><p>Общие доводы («нам очень нужно», «долго ждём») — не основание для приоритета.</p>'
      },
      {
        title: 'Как формулировать запрос',
        body: '<p>Пишите чётко и коротко: кто вы, ваш DUF-номер, суть обстоятельств и что именно просите (приоритетное рассмотрение). Прикладывайте конкретные документы. Эмоциональные обращения без документального подкрепления редко дают результат.</p>'
      }
    ],
    faq: [
      { q: 'Семьи с детьми рассматриваются быстрее автоматически?', a: 'Не автоматически, но это самое сильное основание для запроса. По опыту сообщества, UDI относится к таким случаям серьёзно. Запрос всё равно нужно подавать письменно.' },
      { q: 'Что если UDI отклонит запрос на приоритет?', a: 'Дело продолжает рассматриваться в обычном порядке. Отказ в приоритете не влияет на само решение по ВНЖ.' },
      { q: 'Можно ли попросить адвоката подать запрос?', a: 'Да. Адвокат по иммиграционному праву может грамотно обосновать запрос — это увеличивает шансы, особенно в нестандартных ситуациях.' },
      { q: 'Влияет ли повторный запрос на рассмотрение?', a: 'Слишком частые обращения без новых оснований могут раздражать, но формально на решение по делу не влияют. Подавайте повторный запрос только если появились новые обстоятельства.' }
    ],
    warn: '<p>Запрос приоритета не ускоряет дело автоматически. UDI рассматривает каждый запрос отдельно. Если основание формальное, ответ может быть просто отказом в приоритете — без объяснений.</p>',
    tip: '<p>Если вы ждёте больше 12 месяцев и есть дети — обязательно подавайте запрос письменно. По опыту сообщества, иногда именно после такого письма дело сдвигалось с мёртвой точки.</p>',
    sources: [
      { label: 'UDI: Have applied — Family immigration', url: 'https://www.udi.no/en/have-applied/family-immigration/' }
    ]
  },

  // ============================================================
  // ADDITIONAL DOCUMENTS REQUESTED
  // ============================================================
  'additional-documents-requested': {
    tldr: [
      'Запрос UDI на доп. документы — это не отказ, а уточнение. Отвечать нужно быстро.',
      'Как правило, UDI даёт <strong>2–4 недели</strong> на ответ. Дедлайн пропускать нельзя.',
      'Если документы сложно собрать за это время — немедленно пишите в UDI и просите продление.',
      'Игнорирование запроса = отказ по делу.',
      'Уведомление не всегда доходит — проверяйте статус в личном кабинете на udi.no сами.'
    ],
    actionNow: [
      'Прочитайте письмо от UDI внимательно: что именно запрашивается и до какого числа.',
      'Если дедлайн не успеваете — сразу же напишите в UDI и попросите продление с объяснением причины.',
      'Соберите нужные документы и загрузите через личный кабинет или отправьте по указанному каналу.',
      'После отправки сохраните подтверждение и обновите статус в личном кабинете.'
    ],
    sections: [
      {
        title: 'Что обычно запрашивают',
        body: '<p>Типичные запросы на доп. документы:</p><ul><li>Обновлённый трудовой договор или справка с работы (если прошёл год с момента подачи)</li><li>Подтверждение совместного проживания (договор аренды, оплаченные счета)</li><li>Свежие банковские выписки</li><li>Доказательства отношений (переписка, фото, история поездок)</li><li>Медицинские документы — в отдельных кейсах</li></ul>'
      },
      {
        title: 'Почему уведомление могло не дойти',
        body: '<p>По опыту сообщества, UDI иногда присылает запрос документов на email — но письмо попадает в спам или не доходит вообще. При этом дело стоит без движения, а статус в личном кабинете меняется на «Information requested».</p><p>Именно поэтому важно регулярно заходить в личный кабинет udi.no — не только ждать уведомлений. Особенно актуально, если ожидание уже длится больше 12 месяцев.</p>'
      },
      {
        title: 'Как загружать документы',
        body: '<p>Дополнительные документы загружаются через личный кабинет «My applications» на udi.no. Если UDI указал другой канал (например, попросил направить по email или на конкретный адрес) — следуйте инструкции в письме.</p><p>Сохраняйте подтверждение каждой загрузки — дата и состав отправки пригодятся при апелляции, если решение будет отрицательным.</p>'
      }
    ],
    faq: [
      { q: 'Можно ли попросить продление дедлайна?', a: 'Да, и это работает. По опыту сообщества, UDI обычно даёт дополнительное время, если вы объясните причину задержки. Главное — написать до истечения срока, а не после.' },
      { q: 'Что если запрошенный документ невозможно получить (например, потерян)?', a: 'Напишите в UDI с объяснением ситуации. Предложите альтернативные доказательства. Решение о том, принять ли замену, остаётся за инспектором — но игнорировать запрос точно хуже.' },
      { q: 'Влияет ли запрос доп. документов на итоговое решение?', a: 'Сам по себе — нет. Это нормальная часть процесса. Важно, что и как вы предоставите в ответ.' },
      { q: 'Что если уже отправили документы, но статус не изменился?', a: 'Подождите несколько дней: обновление статуса в личном кабинете может немного запаздывать. Если через неделю статус не изменился — напишите в UDI с подтверждением отправки.' }
    ],
    warn: '<p>По опыту сообщества: некоторые заявители узнавали о запросе доп. документов только через несколько месяцев после его отправки — потому что не заходили в личный кабинет и не видели изменения статуса. К тому времени дедлайн уже прошёл. Проверяйте статус сами, не реже раза в месяц.</p>',
    tip: '<p>Когда отвечаете на запрос — приложите немного больше, чем запросили. Например, если просят трудовой договор, добавьте последний payslip. Это снижает вероятность повторного запроса и показывает, что ситуация стабильная.</p>',
    sources: [
      { label: 'UDI: Have applied — Family immigration', url: 'https://www.udi.no/en/have-applied/family-immigration/' },
      { label: 'UDI: Contact information', url: 'https://www.udi.no/en/contact-udi/' }
    ]
  },

  // ============================================================
  // FIRST STEPS AFTER APPROVAL
  // ============================================================
  'first-steps-after-approval': {
    tldr: [
      'Получили положительное решение — теперь последовательность бытовых шагов в первые недели.',
      '<strong>В течение 7 дней после приезда</strong> (или после решения, если уже в Норвегии) — запишитесь в полицию для получения ВНЖ-карты.',
      'Цепочка: полиция → D-номер/fødselsnummer от Skatteetaten → ВНЖ-карта по почте → Folkeregisteret → fastlege → банк.',
      '<strong>До получения ВНЖ-карты не уезжайте из Норвегии</strong> — без неё нельзя пересекать границу.',
      'На почтовом ящике обязательно должно быть ваше имя — иначе карта не дойдёт.'
    ],
    actionNow: [
      'Запишитесь онлайн на politiet.no — в полицию по адресу проживания.',
      'Приходите на приём с паспортом и решением UDI.',
      'Убедитесь, что ваше имя есть на почтовом ящике — карта придёт обычной почтой.',
      'После получения номера от Skatteetaten — займитесь Folkeregisteret, банком, врачом и языковыми курсами.'
    ],
    sections: [
      {
        title: 'Цепочка событий: чего ждать в первые недели',
        body: '<p>После одобрения ВНЖ всё идёт по понятной последовательности:</p><ol><li><strong>Приём в полиции</strong> — сдаёте биометрию (если не сдавали раньше), полиция заказывает карту. Подробнее — в статье <a data-article=police-registration-card>«Регистрация в полиции и получение ВНЖ-карты»</a>.</li><li><strong>~2 недели после приёма</strong> — приходит письмо от Skatteetaten с D-номером или fødselsnummer. Подробнее — в статье <a data-article=d-number-fodselsnummer>«Получение D-номера и личного номера (fødselsnummer)»</a>.</li><li><strong>~3 недели после приёма</strong> — по почте приходит ВНЖ-карта.</li><li><strong>После получения fødselsnummer</strong> — регистрация по адресу в Folkeregisteret. Подробнее — в статье <a data-article=folkeregisteret-registration>«Регистрация по адресу в Folkeregisteret»</a>.</li><li><strong>Параллельно</strong> — открытие банковского счёта, BankID, выбор fastlege, запись на языковые курсы.</li></ol>'
      },
      {
        title: 'Срок 7 дней — гибкий',
        body: '<p>По официальным правилам после въезда нужно явиться в полицию в ближайшие 7 дней. На практике, если у полиции нет свободных слотов, они принимают позже — главное записаться вовремя и сохранить подтверждение записи.</p>'
      },
      {
        title: 'Что не делать в первые недели',
        body: '<ul><li><strong>Не уезжайте из Норвегии до получения карты.</strong> Без карты ВНЖ въезд обратно через границу будет затруднён — придётся оформлять отдельную визу D.</li><li><strong>Не убирайте своё имя с почтового ящика.</strong> Письма от Skatteetaten и сама ВНЖ-карта приходят обычной почтой, имя на ящике обязательно.</li><li><strong>Не откладывайте Folkeregisteret.</strong> Без регистрации по адресу нельзя выбрать fastlege, и часть социальных сервисов будет недоступна.</li></ul>'
      }
    ],
    faq: [
      { q: 'Что считается «днём приезда» — въезд по штампу или дата заселения?', a: 'Полиция и UDI считают день, когда вы фактически въехали в Норвегию по штампу в паспорте. Если уже были в Норвегии при получении решения — это день получения решения.' },
      { q: 'Можно ли уехать из Норвегии до получения карты, если очень нужно?', a: 'Можно, но придётся отдельно оформлять визу D для возврата — это лишние недели и расходы. Лучше дождаться карты.' },
      { q: 'Что если я живу временно у супруга, а имя на почтовом ящике только его?', a: 'Добавьте своё имя на ящик письменно (наклейка, маркер) или договоритесь с почтальоном. Без вашего имени почта Норвегии не оставит письма в ящике — они вернутся отправителю.' },
      { q: 'В каком порядке записываться: сначала полиция или сначала Folkeregisteret?', a: 'Сначала полиция. Она запускает цепочку: уведомляет Skatteetaten, та выдаёт номер, и только после этого можно регистрироваться в Folkeregisteret.' }
    ],
    warn: '<p>До получения ВНЖ-карты пересекать границу нельзя без визы D. Если планируете поездку на родину или в другую страну в первые недели — лучше отложить до получения карты.</p>',
    tip: '<p>Заведите календарь с тремя ключевыми датами: приём в полиции, ожидаемое письмо от Skatteetaten (+2 недели), ожидаемая карта (+3 недели). Если по любой из дат всё стоит — звоните сами.</p>',
    sources: [
      { label: 'UDI: Application approved — Residence card', url: 'https://www.udi.no/en/received-an-answer/application-approved/residence-card-eea/' }
    ]
  },

  // ============================================================
  // FOLKEREGISTERET REGISTRATION
  // ============================================================
  'folkeregisteret-registration': {
    tldr: [
      'После получения <strong>fødselsnummer</strong> — регистрируетесь по адресу в Folkeregisteret (реестре населения).',
      'Регистрация — через skatteetaten.no, форма <strong>«Flyttemelding fra utlandet»</strong> (переезд из-за границы).',
      'Открывает доступ к семейному врачу (fastlege), социальным услугам, NAV, школам.',
      'С <strong>D-номером</strong> регистрация в Folkeregisteret обычно не требуется — Folkeregisteret фиксирует только постоянных жителей.',
      'Если переезжаете внутри Норвегии — обновляете адрес тоже через Folkeregisteret.'
    ],
    actionNow: [
      'Дождитесь письма с fødselsnummer от Skatteetaten.',
      'Войдите на skatteetaten.no через MinID или BankID.',
      'Заполните форму «Flyttemelding fra utlandet» — укажите норвежский адрес проживания.',
      'Подтвердите регистрацию документами, если Skatteetaten запросит (договор аренды, документ собственности).'
    ],
    sections: [
      {
        title: 'Что даёт регистрация',
        body: '<p>Регистрация в Folkeregisteret подтверждает, что вы постоянный житель Норвегии по конкретному адресу. От этого статуса зависит многое:</p><ul><li><strong>Выбор семейного врача (fastlege)</strong> — без регистрации недоступен.</li><li><strong>Социальные услуги через NAV</strong> — пособия, поддержка при безработице.</li><li><strong>Запись детей в школу или детский сад.</strong></li><li><strong>Полный налоговый резидентский статус.</strong></li><li><strong>Получение приглашения на бесплатные языковые курсы</strong> от коммуны.</li></ul>'
      },
      {
        title: 'Если переезжаете внутри Норвегии',
        body: '<p>При смене адреса в Норвегии нужно подать <strong>«Flyttemelding innenfor Norge»</strong> через тот же портал skatteetaten.no. Сделать это нужно в течение 8 дней после переезда. Если адрес не обновлён, почта от UDI, NAV и других служб может теряться.</p>'
      },
      {
        title: 'Что если адрес — у супруга или сожителя',
        body: '<p>Folkeregisteret иногда просит подтверждение, что вы реально живёте по указанному адресу. По опыту сообщества, договор аренды только на имя супруга могут не принять — могут попросить либо добавить ваше имя в договор, либо предоставить альтернативные доказательства (счета на ваше имя, документы о посещении курсов и т. п.).</p>'
      }
    ],
    faq: [
      { q: 'Можно ли зарегистрироваться в Folkeregisteret с D-номером?', a: 'Обычно нет. Folkeregisteret регистрирует только постоянных жителей — тех, кто планирует жить в Норвегии 6+ месяцев. С D-номером вы по умолчанию считаетесь временным резидентом. Если ВНЖ долгосрочный, но выдали D-номер — сначала обратитесь в Skatteetaten за пересмотром на fødselsnummer.' },
      { q: 'Сколько времени занимает обработка Flyttemelding?', a: 'Обычно несколько дней до пары недель. Если Skatteetaten запросит дополнительные документы — дольше. После обработки регистрация отображается в личном кабинете на skatteetaten.no.' },
      { q: 'Что если Skatteetaten не принимает мой адрес?', a: 'По опыту сообщества чаще всего проблема — в договоре аренды только на имя супруга. Варианты: попросить супруга добавить ваше имя в договор; предоставить альтернативные подтверждения связи с адресом (счета, абонементы, документы курсов).' },
      { q: 'Можно ли зарегистрироваться без физической явки в Skatteetaten?', a: 'Сейчас большая часть процесса делается онлайн через skatteetaten.no. Личная явка может потребоваться для подтверждения личности — но не всегда. Skatteetaten уведомит, если потребуется прийти.' }
    ],
    warn: '<p>По опыту сообщества Skatteetaten иногда отказывается принимать договор аренды только на имя супруга — требуют, чтобы и ваше имя было в договоре, либо просят альтернативные доказательства проживания по адресу. Имеет смысл заранее попросить добавить своё имя в договор или собрать другие подтверждения.</p>',
    tip: '<p>Сразу после регистрации скачайте подтверждение из личного кабинета на skatteetaten.no — оно может понадобиться при открытии банка, оформлении страховки и других бытовых процедурах.</p>',
    sources: [
      { label: 'Skatteetaten: Flytte til Norge', url: 'https://www.skatteetaten.no/person/flytte/flytte-til-norge/' },
      { label: 'Skatteetaten: Folkeregister', url: 'https://www.skatteetaten.no/person/folkeregister/' }
    ]
  },

  // ============================================================
  // NORWEGIAN LANGUAGE COURSES
  // ============================================================
  'norwegian-language-courses': {
    tldr: [
      'После получения ВНЖ записывайтесь в <strong>коммуне (kommune)</strong>, где живёте — программа norskopplæring.',
      'Объём бесплатного обучения зависит от вашего ВНЖ и коммуны.',
      'Супруги граждан Норвегии и беженцев — обычно имеют право на больший объём бесплатных часов.',
      'Супруги граждан <strong>ЕС/ЕЭЗ</strong> — автоматического права на бесплатные курсы <strong>не имеют</strong>.',
      'Не откладывайте — по опыту сообщества коммуна может аннулировать право, если не зарегистрироваться в течение пары месяцев после приглашения.'
    ],
    actionNow: [
      'На сайте своей коммуны найдите раздел «Voksenopplæring» или «Norskopplæring».',
      'Заполните онлайн-форму или придите лично с ВНЖ-картой и fødselsnummer.',
      'Пройдите тестирование уровня — обычно курс начинают с A1 (если нет предыдущих знаний).',
      'Запишитесь на ближайший набор — занятия обычно начинаются раз в семестр.'
    ],
    sections: [
      {
        title: 'Что входит в бесплатные курсы',
        body: '<p>Программа norskopplæring обычно включает два компонента:</p><ul><li><strong>Норвежский язык</strong> — уровни A1–B1 (для некоторых кейсов выше).</li><li><strong>Курс обществознания (samfunnskunnskap)</strong> — короткий курс о норвежском обществе, культуре, правах и обязанностях. Тест по обществознанию можно сдавать на родном языке.</li></ul><p>После прохождения нужного объёма нужно сдавать языковые тесты — они потребуются при подаче на ПМЖ и гражданство.</p>'
      },
      {
        title: 'Кому положены бесплатные курсы',
        body: '<ul><li><strong>Супруги граждан Норвегии</strong> — да, бесплатно.</li><li><strong>Супруги Skilled worker</strong> — да, бесплатно (по большинству коммун).</li><li><strong>Супруги беженцев</strong> — да, и обычно через более полную программу интеграции (introduksjonsprogrammet).</li><li><strong>Супруги граждан ЕС/ЕЭЗ</strong> — обычно нет. Бесплатные курсы не положены автоматически. Альтернатива — программа коммуны «jobbsjansen», доступная не везде.</li></ul>'
      },
      {
        title: 'Формат: норвежский или английский',
        body: '<p>В некоторых коммунах есть выбор формата:</p><ul><li>Курсы на норвежском с нуля — обычно 3 раза в неделю в течение 2–3 лет (более интенсивно).</li><li>Курсы на английском — обычно 1 раз в неделю и короче (менее интенсивно).</li></ul><p>Не все коммуны предлагают английский вариант. Уточняйте на сайте конкретной коммуны.</p>'
      },
      {
        title: 'Что делать в кейсе ЕС/ЕЭЗ',
        body: '<p>Если супруг — гражданин ЕС/ЕЭЗ и бесплатные курсы не положены:</p><ul><li><strong>Программа «jobbsjansen»</strong> через коммуну/NAV — программа интеграции для женщин-иммигранток. Включает языковые курсы и производственную практику с пособием. Условие: уровень языка от A2. Не доступно во всех коммунах.</li><li><strong>Платные частные курсы</strong> — Folkeuniversitetet, Lingu, Alfaskolen и др.</li><li><strong>Самостоятельное обучение</strong> — Duolingo, Anki, norskappen, ютуб-каналы; учебники Stein på stein и Historie om Nils.</li></ul>'
      }
    ],
    faq: [
      { q: 'Что будет, если не пойти на курсы сразу после приглашения коммуны?', a: 'По опыту сообщества, если не зарегистрироваться в течение ~2 месяцев после приглашения, право на бесплатные курсы может быть аннулировано. Точный срок различается по коммунам — уточняйте на сайте своей коммуны или в письме-приглашении.' },
      { q: 'Где сдавать тест по обществознанию (samfunnskunnskap)?', a: 'Тест сдают в коммуне после прохождения курса обществознания. Сдать можно на родном языке — материалы для подготовки есть на samfunnskunnskap.no.' },
      { q: 'Можно ли пропускать занятия?', a: 'Регулярное посещение требуется — коммуны фиксируют присутствие. Длительные пропуски без уважительной причины могут привести к исключению из программы.' },
      { q: 'Что делать, если в моей коммуне сложно записаться на бесплатные курсы?', a: 'Свяжитесь напрямую с отделом образования взрослых в коммуне (voksenopplæring). Если коммуна откладывает место — это можно оспаривать письменно. По опыту сообщества, обращение с конкретным письменным запросом обычно ускоряет процесс.' }
    ],
    warn: '<p>В кейсе ЕС/ЕЭЗ бесплатные курсы не положены автоматически. Платные альтернативы могут стоить значительно — около 3 400 NOK в месяц по опыту сообщества (~40 800 NOK за год). Стоит заранее посмотреть, есть ли в коммуне программа «jobbsjansen» или другие субсидируемые опции.</p>',
    tip: '<p>Используйте бесплатные онлайн-ресурсы как дополнение или альтернативу: <strong>Duolingo</strong> для начала, <strong>Anki</strong> для интервального повторения слов, <strong>norskappen</strong> для артиклей, ютуб-каналы. По опыту участников сообщества учебники <strong>Stein på stein</strong> и <strong>Historie om Nils</strong> хорошо работают для самостоятельного изучения.</p>',
    sources: [
      { label: 'UDI: Norwegian language training', url: 'https://www.udi.no/en/word-definitions/norwegian-language-training-/' },
      { label: 'Kompetanse Norge: Norskopplæring', url: 'https://www.kompetansenorge.no/' }
    ]
  },

  // ============================================================
  // BANK ACCOUNT AND BANKID
  // ============================================================
  'bank-account-bankid': {
    tldr: [
      'Для счёта в норвежском банке нужны: <strong>D-номер или fødselsnummer</strong>, паспорт, адрес, ВНЖ-карта.',
      'Без номеров счёт открыть почти невозможно (редкие исключения — некоторые отделения DNB).',
      '<strong>BankID</strong> — основная электронная подпись Норвегии. Выдаётся банком после открытия счёта. <strong>Требует fødselsnummer</strong>.',
      '<strong>MinID</strong> — альтернатива для тех, у кого только D-номер. Меньше функций, но позволяет пользоваться основными госсервисами.',
      'BankID/MinID нужны для всех онлайн-сервисов: udi.no, skatteetaten.no, NAV, helsenorge.no.'
    ],
    actionNow: [
      'После получения D-номера или fødselsnummer запишитесь в банк (DNB, Nordea, Sparebank1 и др.).',
      'Приходите лично с паспортом, ВНЖ-картой, документом с адресом и письмом от Skatteetaten с номером.',
      'Откройте счёт, оформите BankID (если у вас fødselsnummer) или MinID (если только D-номер).'
    ],
    sections: [
      {
        title: 'Что нужно для открытия счёта',
        body: '<p>Стандартный пакет:</p><ul><li>Паспорт.</li><li>ВНЖ-карта.</li><li>Подтверждение адреса в Норвегии (договор аренды, документ собственности, регистрация в Folkeregisteret).</li><li>Письмо от Skatteetaten с D-номером или fødselsnummer.</li><li>Иногда — справка о работе или источнике средств.</li></ul>'
      },
      {
        title: 'Какие банки выбрать',
        body: '<ul><li><strong>DNB</strong> — самый крупный банк, отделения по всей Норвегии. По опыту сообщества иногда открывают счёт по паспорту до получения номеров — зависит от отделения.</li><li><strong>Nordea</strong> — норвежско-шведский, удобен для тех, кто работает в Швеции.</li><li><strong>Sbanken, Sparebank1</strong> — онлайн-банки, обычно дешевле в обслуживании, но требуют норвежский номер для открытия счёта.</li><li><strong>Региональные сберегательные банки</strong> — есть в каждом регионе, иногда более гибкие при первом контакте.</li></ul>'
      },
      {
        title: 'BankID vs MinID',
        body: '<p><strong>BankID</strong> — главная электронная подпись Норвегии. Требует <strong>fødselsnummer</strong> — с D-номером не оформляется. Выдаётся банком после открытия счёта. Используется в банках, UDI, Skatteetaten, NAV, helsenorge.no, страховых компаниях.</p><p><strong>MinID</strong> — альтернатива на основе D-номера. Выдаётся через Skatteetaten (по почте приходит код активации). Имеет ограниченный функционал — не работает во всех сервисах, где требуется BankID. Подходит для базовых государственных сервисов.</p><p>Подробнее про разницу D-номера и fødselsnummer — в статье <a data-article=d-number-fodselsnummer>«Получение D-номера и личного номера (fødselsnummer)»</a>.</p>'
      }
    ],
    faq: [
      { q: 'Можно ли открыть счёт онлайн, без визита в отделение?', a: 'По большинству банков — нет, первый счёт открывается лично. Это требование закона о борьбе с отмыванием средств (KYC). После открытия можно вести счёт онлайн.' },
      { q: 'Что если в банке отказали в открытии счёта?', a: 'Попробуйте другой банк — каждый банк имеет свои внутренние правила. По опыту сообщества DNB и региональные сберегательные банки чаще берут новых иностранных клиентов. Если несколько банков подряд отказывают — можно письменно запросить причину отказа.' },
      { q: 'Можно ли иметь несколько счетов в разных банках?', a: 'Да, ограничений нет. Иногда удобно иметь два: один основной (с зарплатой и BankID), другой накопительный.' },
      { q: 'Если уже есть BankID и открываю счёт в новом банке — нужна ли новая?', a: 'BankID привязан к личности, а не к банку. Если откроете счёт в другом банке, можете либо использовать существующий BankID, либо оформить новый — большинство банков поддерживают переход.' }
    ],
    warn: '<p>С <strong>D-номером BankID не оформить</strong> — только MinID. Если ВНЖ долгосрочный (12+ месяцев), но Skatteetaten выдала D-номер вместо fødselsnummer — обратитесь напрямую в Folkeregisteret через skatteetaten.no за пересмотром. Без BankID часть коммунальных и государственных сервисов будет недоступна.</p>',
    tip: '<p>Сразу после открытия счёта оформите <strong>Vipps</strong> — приложение для быстрых переводов между норвежскими счетами. В Норвегии им пользуются почти все: при делёжке счёта в кафе, переводах между знакомыми, в магазинах.</p>',
    sources: [
      { label: 'UDI: Application approved — Residence card', url: 'https://www.udi.no/en/received-an-answer/application-approved/residence-card-eea/' },
      { label: 'BankID Norge', url: 'https://www.bankid.no/' }
    ]
  },

  // ============================================================
  // HEALTHCARE FASTLEGE
  // ============================================================
  'healthcare-fastlege': {
    tldr: [
      'После регистрации в Folkeregisteret выбираете семейного врача — <strong>fastlege</strong>.',
      'Делается онлайн на <strong>helsenorge.no</strong>, нужен fødselsnummer и BankID/MinID.',
      'Fastlege — ваш основной бесплатный (с символической доплатой) доступ к медицине.',
      '<strong>Helsekort</strong> — электронная карта, привязанная к fødselsnummer. Отдельно ничего не выдают.',
      'Экстренная помощь — <strong>legevakten</strong>, работает без записи и без выбора fastlege.',
      '<strong>Стоматология взрослым</strong> в Норвегии не покрыта государственной медициной — платная.'
    ],
    actionNow: [
      'Зарегистрируйтесь в Folkeregisteret (если ещё не сделано).',
      'Войдите на helsenorge.no через BankID или MinID.',
      'Выберите fastlege — в разделе «Bytte fastlege» доступны врачи с открытыми местами по вашей коммуне.',
      'Подтвердите выбор. Через несколько дней врач прикреплён к вам.'
    ],
    sections: [
      {
        title: 'Что включает медицина по fastlege',
        body: '<p>Все основные приёмы у врача общей практики — за символическую доплату (egenandel). Обычно включают: профилактические визиты, диагностику, рецепты, направления к специалистам, базовую лабораторную диагностику, наблюдение хронических заболеваний.</p><p>Существует «потолок» доплат за год (frikort) — после его достижения остальные визиты бесплатны.</p>'
      },
      {
        title: 'Если есть только D-номер',
        body: '<p>С D-номером в большинстве коммун выбрать fastlege нельзя — система helsenorge.no требует fødselsnummer. Альтернативы:</p><ul><li><strong>Экстренная помощь legevakten</strong> — доступна всем, кто находится в Норвегии.</li><li><strong>Частные клиники</strong> — за полную стоимость.</li><li>В отдельных коммунах с D-номером всё же можно прикрепиться к fastlege — уточняйте в своей коммуне.</li></ul>'
      },
      {
        title: 'Стоматология',
        body: '<p>Государственная медицина в Норвегии <strong>не покрывает</strong> стоматологию для взрослых (старше 18 лет, кроме отдельных случаев — травмы, особые заболевания, малоимущие). Все визиты к зубному — за полную стоимость через частные клиники.</p><p>Стоматология для детей до 18 лет — бесплатная через государственную систему.</p>'
      },
      {
        title: 'Экстренная помощь',
        body: '<ul><li><strong>Legevakten</strong> — экстренный медицинский пункт. Работает без записи. Идёте, если ситуация срочная, но не критическая.</li><li><strong>113</strong> — экстренный телефон скорой помощи для критических ситуаций.</li></ul>'
      }
    ],
    faq: [
      { q: 'Сколько ждать, пока станет доступен выбранный fastlege?', a: 'Прикрепление обычно занимает несколько дней до пары недель — зависит от обработки в системе helsenorge.no. Пока не прикреплены — можно пользоваться legevakten.' },
      { q: 'Можно ли поменять fastlege, если врач не подошёл?', a: 'Да, можно менять через helsenorge.no — обычно до двух раз в год без ограничений. Если в коммуне мало свободных мест, выбор может быть ограничен.' },
      { q: 'Что делать, если мой fastlege долго не принимает?', a: 'Запишитесь к нему через helsenorge.no или по телефону. Если срочно, и приём не доступен в ближайшее время — идите в legevakten.' },
      { q: 'Покрывается ли стоматология беременных?', a: 'Базовая стоматология для беременных — обычно с частичной скидкой, но не полностью бесплатна. Уточняйте конкретные льготы у своего fastlege или в коммуне.' },
      { q: 'Покрываются ли услуги психолога?', a: 'Через fastlege можно получить направление к психологу — часть приёмов покрывается государственной медициной. Психологи в частной практике без направления — за полную стоимость.' }
    ],
    warn: '<p>До получения fødselsnummer и регистрации в Folkeregisteret семейный врач недоступен. В этот период вся медицина — через legevakten (платно/с egenandel) или через частные клиники за полную стоимость. По опыту сообщества частные клиники не принимают международные страховки, и приём обычно стоит несколько сотен крон.</p>',
    tip: '<p>После выбора fastlege установите приложение <strong>Helsenorge</strong> на телефон — там можно записываться на приём, видеть направления, читать результаты анализов, получать рецепты. Это удобнее, чем звонить в клинику.</p>',
    sources: [
      { label: 'Helsenorge: Find a regular GP', url: 'https://www.helsenorge.no/en/find-a-regular-gp/' },
      { label: 'Helsenorge: Frikort', url: 'https://www.helsenorge.no/en/payment-for-health-services/frikort-for-helsetjenester/' }
    ]
  },

  // ============================================================
  // WORK AFTER PERMIT
  // ============================================================
  'work-after-permit': {
    tldr: [
      'После получения карты ВНЖ — <strong>да, можно работать</strong> без отдельного разрешения.',
      'До получения карты, но <strong>после положительного решения</strong> UDI — обычно тоже можно, если в решении это указано.',
      'Нужно получить <strong>налоговую карту (skattekort)</strong> на skatteetaten.no — иначе работодатель будет удерживать 50% налога.',
      'В кейсе <strong>ЕС/ЕЭЗ</strong> работать можно сразу после подачи на карту резидента (нужна только skattekort).',
      'В кейсе <strong>Skilled worker</strong> возможна редкая опция «early employment start» — начало работы до получения ВНЖ.'
    ],
    actionNow: [
      'Получите skattekort на skatteetaten.no — войдите через BankID или MinID, оформите налоговую карту.',
      'Передайте работодателю номер skattekort или подтверждение, что она оформлена.',
      'Если ВНЖ-карта ещё не пришла — можно работать на основании решения UDI; покажите его работодателю.'
    ],
    sections: [
      {
        title: 'Skattekort: что это и зачем',
        body: '<p>Skattekort — налоговая карта, которая определяет, сколько работодатель удерживает с вашей зарплаты. Если карты нет, удерживается максимум — <strong>50%</strong>. После оформления — обычная ставка (обычно 25–35% в зависимости от дохода).</p><p>Оформляется быстро онлайн через skatteetaten.no: войти через BankID или MinID → заполнить форму с предполагаемым доходом за год → получить расчёт ставки. Работодатель сам подтягивает информацию из Skatteetaten — бумажную карту вручную передавать не нужно.</p>'
      },
      {
        title: 'Особенности по кейсам',
        body: '<p><strong>Гражданин Норвегии / Skilled worker / Беженец:</strong> до получения ВНЖ работать нельзя (кроме редких исключений типа «early employment start»). После получения — можно сразу, нужна только skattekort.</p><p><strong>Гражданин ЕС/ЕЭЗ:</strong> можно работать с момента подачи на карту резидента — не нужно ждать самой карты. Это одно из преимуществ кейса ЕС/ЕЭЗ.</p>'
      },
      {
        title: 'Skilled worker: early employment start',
        body: '<p>Редкая опция для семей, где принимающая сторона — Skilled worker. При подаче можно запросить «early employment start» (раннее начало работы) через полицию. Не для всех кейсов — зависит от типа работы, опыта, оценки полиции. Если одобрено — можно начать работать до получения ВНЖ-карты.</p>'
      }
    ],
    faq: [
      { q: 'Что делать, если до получения ВНЖ нашёлся хороший оффер?', a: 'Если ВНЖ ещё не одобрен — работать нельзя. Работодатель может задержать оффер до решения UDI или оформить контракт с отложенной датой начала. В кейсе Skilled worker можно запросить «early employment start» через полицию.' },
      { q: 'Можно ли работать удалённо на работодателя из России во время ожидания?', a: 'Удалённая работа на работодателя из России обычно не запрещается норвежским правом, но могут быть налоговые последствия. Норвежского работодателя — нельзя без ВНЖ или рабочего разрешения.' },
      { q: 'Что если работодатель просит ВНЖ-карту, а карта ещё не пришла?', a: 'Покажите положительное решение UDI и подтверждение, что карта в обработке. По опыту сообщества большинства работодателей этого достаточно. Если работодатель настаивает на физической карте — это его внутреннее правило, не норвежский закон.' },
      { q: 'Нужно ли отдельное разрешение на работу для каждого кейса?', a: 'Нет. Семейный ВНЖ автоматически включает право на работу (full employment rights) — без ограничений по типу работы или работодателю.' },
      { q: 'Что если хочется работать на себя или открыть фирму?', a: 'Семейный ВНЖ обычно даёт право и на самозанятость. Открытие фирмы — отдельный процесс через Brønnøysundregistrene. Стоит проконсультироваться с бухгалтером перед регистрацией.' }
    ],
    warn: '<p>Работать на норвежского или европейского работодателя <strong>без действующего ВНЖ или рабочей визы запрещено</strong> — даже удалённо. Нарушение может привести к проблемам при продлении ВНЖ и будущих заявках. Если есть сомнения, можно ли работать — лучше уточнить у UDI письменно перед началом.</p>',
    tip: '<p>После оформления skattekort проверяйте свой годовой налоговый расчёт (skatteoppgjør) в начале следующего года — там видно, не переплатили ли вы налоги. Часто бывает возврат, особенно если начали работу в середине года.</p>',
    sources: [
      { label: 'UDI: Documenting legal residency while waiting for residence card', url: 'https://www.udi.no/en/important-messages/documenting-legal-residence-while-you-are-waiting-for-a-residence-card/' },
      { label: 'Skatteetaten: Skattekort', url: 'https://www.skatteetaten.no/person/skatt/skattekort/' }
    ]
  },

  // ============================================================
  // RENEWAL APPLICATION
  // ============================================================
  'renewal-application': {
    tldr: [
      'Подавайте на продление <strong>за 3 месяца</strong> до окончания текущего ВНЖ — это рекомендация UDI.',
      'Если есть <strong>BankID</strong> — продление полностью онлайн, без приёма в полиции.',
      'Без BankID — нужна запись в полицию для сдачи биометрии.',
      'Если подали <strong>за 1+ месяц</strong> до окончания текущего ВНЖ — сохраняете все права (работа, поездки, NAV) на время рассмотрения.',
      'Если опоздали и ВНЖ истёк — теряются права на работу, поездки и часть социальных сервисов до решения по продлению.'
    ],
    actionNow: [
      'За 3 месяца до окончания ВНЖ — войдите в личный кабинет на udi.no через BankID.',
      'Выберите тип заявки «Renewal of family immigration permit».',
      'Заполните онлайн-форму, оплатите пошлину, загрузите документы по чек-листу.',
      'Если нет BankID — после онлайн-регистрации запишитесь в полицию.'
    ],
    sections: [
      {
        title: 'Когда именно подавать',
        body: '<p>UDI рекомендует подавать <strong>за 3 месяца до окончания</strong> текущего ВНЖ:</p><ul><li><strong>За 3 месяца</strong> — оптимально. У UDI есть время рассмотреть до истечения текущего ВНЖ.</li><li><strong>За 1+ месяц</strong> — допустимо. Все права сохраняются на время рассмотрения, даже если решение придёт после истечения старого ВНЖ.</li><li><strong>Меньше месяца или после истечения</strong> — рискованно. Часть прав может приостановиться.</li></ul>'
      },
      {
        title: 'Как происходит продление онлайн (с BankID)',
        body: '<p>Весь процесс через личный кабинет на udi.no: вход через BankID → выбор «Renew family immigration permit» → заполнение онлайн-формы (UDI подтянет ваши данные из предыдущей заявки) → оплата пошлины → загрузка документов по персональному чек-листу → отправка. В полицию идти не нужно — биометрия из первой подачи действует.</p>'
      },
      {
        title: 'Как происходит продление без BankID',
        body: '<p>Без BankID часть процесса делается онлайн (регистрация и оплата), но потом обязательна запись в полицию для сдачи биометрии или подтверждения личности. Запись делается через politiet.no.</p>'
      },
      {
        title: 'Что значит «сохранение прав»',
        body: '<p>Если вы подали на продление <strong>до истечения</strong> текущего ВНЖ, у вас сохраняются: право на работу, право на поездки в Шенген, доступ к NAV, медицине, образованию, регистрация в Folkeregisteret.</p><p>Это право подтверждается документом «kvittering for søknad» (подтверждение подачи). Сохраняйте его и предъявляйте, если возникнут вопросы у работодателя, банка или при пересечении границы.</p>'
      },
      {
        title: 'Если ВНЖ-карта истекает во время рассмотрения',
        body: '<p>Сама ВНЖ-карта (пластиковая) может физически истечь до получения решения по продлению. Внутри Норвегии — права сохраняются на основании поданной заявки. Поездки за рубеж — ограничены. Без действующей карты въезд обратно может быть затруднён. Если нужно ехать за рубеж — заранее уточните в UDI возможность получения временного документа.</p>'
      }
    ],
    faq: [
      { q: 'До окончания ВНЖ несколько недель, только сейчас узнал что надо продлевать — что делать?', a: 'Подайте онлайн прямо сейчас. Даже неполный пакет лучше, чем пропуск дедлайна — UDI обычно запрашивает недостающие документы отдельно. Главное — успеть зарегистрировать заявку до истечения.' },
      { q: 'Можно ли подать на продление, если уже выехал из Норвегии?', a: 'Технически да — личный кабинет UDI работает из любой страны. Но продление подаётся как «находящийся в Норвегии». Если вы за рубежом, это может вызвать дополнительные вопросы — возвращайтесь в Норвегию до подачи, если возможно.' },
      { q: 'Что если ВНЖ продляют по другому основанию (например, был student, стал family)?', a: 'Это не продление, а новая заявка. Подаёте как новый кейс по новому основанию, со всеми требованиями. Очередь рассмотрения может начаться заново.' },
      { q: 'Меняется ли требование по доходу при продлении?', a: 'Да, требование по доходу к принимающей стороне сохраняется при продлении. UDI снова проверит, что доход держится на нужном уровне.' },
      { q: 'Можно ли продлить ВНЖ дистанционно, без приезда в Норвегию?', a: 'Если есть BankID — да, онлайн. Если BankID нет — нужно прийти лично в полицию в Норвегии. Из-за рубежа продлить нельзя.' },
      { q: 'Сколько занимает рассмотрение продления?', a: 'Обычно быстрее первой подачи. Уточняйте по «Guide to waiting time» на udi.no, тип заявки — renewal.' },
      { q: 'Можно ли подать продление за 6 месяцев до окончания?', a: 'Технически да. Но смысла обычно нет: продление не делается «впрок», и новый ВНЖ начинает отсчитываться с момента окончания старого.' },
      { q: 'Что если в личном кабинете нет опции продления?', a: 'Проверьте, что зашли с того же BankID, на который было зарегистрировано первое заявление. Если кабинет пуст — обратитесь в UDI через форму обратной связи.' }
    ],
    warn: '<p>Если ваш ВНЖ — для жениха/невесты (forlovede), он <strong>не продляется</strong>. После свадьбы нужно подать новую заявку как супруг — это отдельная процедура.</p>',
    tip: '<p>Сохраните электронное подтверждение подачи продления (kvittering) — оно работает как временный документ, подтверждающий ваш легальный статус. Полезно показать работодателю или при общении с NAV/банком, если процесс затягивается.</p>',
    compare: {
      udi: 'Подавать рекомендуется за 3 месяца до окончания. Подача за 1+ месяц гарантирует сохранение прав на время рассмотрения.',
      practice: 'По опыту сообщества подача за 1–2 месяца до истечения проходит чисто. Главный риск — забыть про дедлайн и подать после истечения. Личные кабинеты UDI стабильны, но иногда не показывают опцию продления — стоит проверить заранее, не оставлять на последний день.'
    },
    sources: [
      { label: 'UDI: Want to renew — Family immigration', url: 'https://www.udi.no/en/want-to-renew/family-immigration/' }
    ]
  },

  // ============================================================
  // RENEWAL DOCUMENTS
  // ============================================================
  'renewal-documents': {
    tldr: [
      'Базовый пакет тот же: паспорт, документы о доходе принимающей стороны, документы о жилье, справка из NAV.',
      'Дополнительно нужны <strong>доказательства, что вы всё ещё живёте вместе</strong>: договор аренды на двоих, общие счета, фото за прошедший период.',
      '<strong>Свидетельство о браке заново апостилировать не нужно</strong> — UDI его уже видел.',
      'Если за период первого ВНЖ родился общий ребёнок — приложите свидетельство о рождении.',
      'Точный список — в <strong>персональном чек-листе</strong>, который UDI генерирует после онлайн-регистрации продления.'
    ],
    actionNow: [
      'Зайдите в личный кабинет на udi.no и начните регистрацию продления.',
      'После регистрации скачайте персональный чек-лист — это основной ориентир.',
      'Соберите документы по чек-листу.',
      'Загрузите всё через личный кабинет.'
    ],
    sections: [
      {
        title: 'Что обычно проверяет UDI при продлении',
        body: '<ul><li><strong>Доход принимающей стороны</strong> держится на нужном уровне.</li><li><strong>Совместное проживание продолжается</strong> — реально, не на бумаге.</li><li><strong>Ничего критичного не изменилось</strong> в семейной ситуации (новый брак, развод, изменения с детьми).</li><li><strong>Все условия предыдущего ВНЖ соблюдались</strong> весь период.</li></ul>'
      },
      {
        title: 'Что добавить к стандартному пакету',
        body: '<ul><li><strong>Доказательства реального совместного проживания за период ВНЖ</strong> — обновлённый договор аренды, общие банковские счета или коммунальные платежи, фото с разными датами.</li><li><strong>Налоговая декларация (skatteoppgjør)</strong> принимающей стороны — за прошлый год.</li><li><strong>Свежие пэйслипы</strong> принимающей стороны — обычно за последние 3 месяца.</li><li><strong>Свежая справка из NAV</strong> — что принимающая сторона не получает социальной помощи. По опыту сообщества её стоит прикладывать всегда, даже если её нет в публичном чек-листе UDI.</li></ul>'
      },
      {
        title: 'Чего повторно прикладывать не нужно',
        body: '<ul><li><strong>Апостилированное свидетельство о браке</strong> — UDI его уже видел при первой подаче.</li><li><strong>Биометрию</strong> — если есть BankID, повторная биометрия не требуется.</li><li><strong>Документы об образовании</strong> — обычно не запрашиваются при продлении.</li></ul>'
      }
    ],
    faq: [
      { q: 'Что делать, если принимающая сторона сменила работу за период ВНЖ?', a: 'Прикладывайте текущий трудовой договор и свежие пэйслипы. Смена работодателя не страшна, если доход держится на нужном уровне. UDI важна стабильная картина дохода, а не конкретное место работы.' },
      { q: 'Что если в первом ВНЖ был один партнёр, а сейчас в браке другой?', a: 'Это не продление, а новый кейс. Нужно подавать заново как новая семейная миграция, со всеми требованиями.' },
      { q: 'Живём по разным адресам по уважительной причине — как доказывать совместное проживание?', a: 'UDI принимает раздельное проживание по объективным причинам, если отношения остаются настоящими. Приложите объяснительное письмо, документы об учёбе или работе, доказательства поддержания связи. Это исключительная ситуация — лучше проконсультироваться с UDI заранее.' },
      { q: 'Нужны ли при продлении подтверждения отношений (фото, переписка)?', a: 'Обычно не в таком объёме, как при первой подаче. Но базовые подтверждения совместной жизни за прошедший период укрепят кейс, особенно если возникнут вопросы.' }
    ],
    warn: '<p>По опыту сообщества справку из NAV (об отсутствии социальной помощи) стоит прикладывать всегда — даже если её сейчас нет в публичном чек-листе UDI. Несколько участников сообщества получали отказ из-за её отсутствия. Безопаснее иметь.</p>',
    tip: '<p>Если за период ВНЖ был перерыв в работе у принимающей стороны (декрет, больничный) — приложите подтверждающие документы (sykepenger, foreldrepenger из NAV). Это покажет, что доход не упал из-за нарушений.</p>',
    sources: [
      { label: 'UDI: Want to renew — Family immigration', url: 'https://www.udi.no/en/want-to-renew/family-immigration/' }
    ]
  },

  // ============================================================
  // PERMANENT RESIDENCE CONDITIONS
  // ============================================================
  'permanent-residence-conditions': {
    tldr: [
      'ПМЖ обычно доступен после <strong>3 лет непрерывного проживания</strong> в Норвегии с ВНЖ семейной миграции — для большинства кейсов.',
      'Для семейной миграции к беженцу (с производным статусом) — <strong>5 лет</strong>.',
      'Все требования предыдущих ВНЖ должны соблюдаться весь период (доход принимающей стороны, проживание вместе).',
      'Нужен <strong>языковой тест (A2)</strong> и тест по обществоведению (с сентября 2025 — обязательны).',
      'Нужен <strong>собственный доход</strong> заявителя — около 279 000 NOK в год (актуальную сумму проверяйте на udi.no).',
      'Есть <strong>лимит на отсутствие в Норвегии</strong> — не больше 7 месяцев суммарно за 3 года.'
    ],
    actionNow: [
      'Проверьте, что у вас уже есть требуемый стаж (3 или 5 лет) с действующим ВНЖ семейной миграции.',
      'Подайте на продление обычного ВНЖ, если стаж ещё не набран, или сразу на ПМЖ, если набран.',
      'Сдайте языковой тест норвежского (A2) и тест по обществоведению.',
      'Соберите документы о собственном доходе за последние 12 месяцев.',
      'Подайте на ПМЖ через личный кабинет udi.no.'
    ],
    sections: [
      {
        title: 'Сроки по кейсам',
        body: '<ul><li><strong>Гражданин Норвегии / Skilled worker / Беженец (стандартный путь):</strong> 3 года непрерывного проживания с ВНЖ семейной миграции.</li><li><strong>Член семьи беженца с производным статусом:</strong> 5 лет.</li><li><strong>Гражданин ЕС/ЕЭЗ — другая система:</strong> 5 лет непрерывного проживания с картой резидента, после чего можно подавать на постоянную карту резидента (не та же процедура, что классический ПМЖ).</li></ul>'
      },
      {
        title: 'Что значит «непрерывно»',
        body: '<p>Между ВНЖ не должно быть перерыва — каждый следующий ВНЖ должен начинаться сразу после предыдущего, без пропуска даже в один день. На практике это значит — подавать на продление <strong>до окончания</strong> текущего ВНЖ.</p><p>Лимиты на длительное отсутствие в Норвегии:</p><ul><li>Для 3-летнего стажа — <strong>не больше 7 месяцев</strong> за границей суммарно.</li><li>Для 5-летнего стажа — <strong>не больше 10 месяцев</strong> суммарно.</li></ul><p>Длительные отсутствия (больше 6 месяцев подряд) могут считаться «прерыванием» — даже если в сумме не превышаете лимит.</p>'
      },
      {
        title: 'Финансовое требование к заявителю',
        body: '<p>В отличие от первого ВНЖ, где доход требуется от принимающей стороны, для ПМЖ доход требуется уже <strong>от вас</strong>. Сумма — около 279 000 NOK в год до налогов (проверяйте актуальную на udi.no). Считается доход за последние 12 месяцев до подачи.</p><p>Засчитываются: зарплата, родительские выплаты, sykepenger, пенсии, гранты Lånekassen. Не засчитываются: introduksjonsstønad, большинство NAV-пособий.</p>'
      },
      {
        title: 'Языковой и обществоведческий тесты',
        body: '<p>С сентября 2025 для ПМЖ нужно сдать:</p><ul><li><strong>Устный тест норвежского на A2</strong> — через коммуну или сертифицированный центр.</li><li><strong>Тест по обществоведению (samfunnskunnskap)</strong> — можно сдавать на родном языке.</li></ul><p>От тестов можно освободиться при определённых условиях (норвежская школа, ВУЗ). Подробнее — в статье <a data-article=pr-language-tests>«Языковой и обществоведческий тесты для ПМЖ»</a>.</p>'
      },
      {
        title: 'Дополнительные требования',
        body: '<ul><li><strong>Чистая судимость.</strong> Серьёзные нарушения могут привести к отказу или задержке.</li><li><strong>Соблюдение всех условий ВНЖ</strong> весь период — не работать вне разрешённых рамок, сообщать UDI о значимых изменениях.</li><li><strong>Действующий ВНЖ на момент подачи</strong> — нельзя подавать на ПМЖ, если текущий ВНЖ истёк.</li></ul>'
      }
    ],
    faq: [
      { q: 'Считается ли период учёбы (student permit) в стаж для ПМЖ?', a: 'Нет, период со student permit обычно не засчитывается. ПМЖ строится на стаже с ВНЖ семейной миграции.' },
      { q: 'Уезжала на 6 месяцев на работу за рубеж — это прерывает стаж?', a: 'Зависит от длины и обстоятельств. По правилам UDI длительное отсутствие (6+ месяцев подряд) может прервать стаж. Если ситуация уважительная — командировка от норвежского работодателя или учёба — стоит проконсультироваться с UDI заранее.' },
      { q: 'Получит ли мой ребёнок ПМЖ автоматически вместе со мной?', a: 'Нет, не автоматически. Если ребёнок в Норвегии на ВНЖ — он подаёт отдельно по своему кейсу.' },
      { q: 'Что если были перерывы в работе (декрет, болезнь, увольнение)?', a: 'Перерывы по уважительным причинам обычно не считаются нарушением условий. Главное — сохранять ВНЖ и сообщать UDI о значимых изменениях.' },
      { q: 'Можно ли подать на ПМЖ ровно в день, когда исполняется 3 года?', a: 'Технически да — но лучше подавать до окончания текущего ВНЖ. Подача после истечения может усложнить процесс.' },
      { q: 'Что если не сдала языковой тест с первого раза?', a: 'Тест можно пересдавать. Подача на ПМЖ — после того, как все тесты сданы. Если ПМЖ нужен срочно, а тест не сдан, придётся продлевать обычный ВНЖ.' },
      { q: 'Что меняется при получении ПМЖ?', a: 'С ПМЖ: срок ВНЖ становится постоянным; право на работу не привязано к семейной ситуации; развод или смерть супруга больше не угрожает вашему статусу. При длительном отсутствии в Норвегии (2+ года) ПМЖ может быть аннулирован.' },
      { q: 'Можно ли подать на ПМЖ через 3 года, если первый ВНЖ был на 1 год и потом продлили на 2 года?', a: 'Да. Стандартная схема для семейной миграции к гражданину Норвегии: 1 год → 2 года → ПМЖ. Главное — что общий стаж проживания с действующим ВНЖ — 3 года.' }
    ],
    warn: '<p>С сентября 2025 языковой тест и тест по обществоведению <strong>обязательны</strong> для ПМЖ. Раньше требовали только пройти курсы — теперь тесты обязательны. Это изменение в правилах, многие участники сообщества обнаружили его в процессе подготовки.</p>',
    tip: '<p>За год до подачи на ПМЖ начните копить документы: налоговые расчёты, договоры аренды, справки о доходе, подтверждения сдачи тестов. Это сильно ускорит подачу.</p>',
    compare: {
      udi: 'Сроки чёткие — 3 или 5 лет в зависимости от кейса. Все условия документированы.',
      practice: 'По опыту сообщества жёны граждан Норвегии получают ПМЖ через 3 года (1+2+ПМЖ). Жёны граждан ЕС идут по другой схеме — ВНЖ сразу на 5 лет, потом постоянная карта резидента. Двойное гражданство Норвегия разрешает с 2020 года — отказываться от российского при получении норвежского не нужно.'
    },
    sources: [
      { label: 'UDI: Permanent residence permit', url: 'https://www.udi.no/en/want-to-apply/permanent-residence/permanent-residence-permit/' },
      { label: 'UDI: Changes to PR requirements (Sept 2025)', url: 'https://www.udi.no/en/important-messages/changes-to-the-requirements-for-a-permanent-residence-permit/' }
    ]
  },

  // ============================================================
  // PR LANGUAGE TESTS
  // ============================================================
  'pr-language-tests': {
    tldr: [
      '<strong>С сентября 2025</strong> — для ПМЖ обязательно сдать устный тест норвежского на A2 и тест по обществоведению.',
      'До этого требовали только пройти курсы — теперь курсы не обязательны, но тесты — да.',
      '<strong>Тест по обществоведению можно сдавать на родном языке.</strong>',
      'От тестов можно освободиться, если есть оценка ≥2 по норвежскому или обществоведению из норвежской школы или ВУЗа.',
      'Возрастные рамки: <strong>18–67 лет</strong>. Вне их — освобождение от тестов.'
    ],
    actionNow: [
      'Подайте заявку на сдачу тестов через свою коммуну или на kompetansenorge.no.',
      'Сдайте устный тест норвежского на A2 в сертифицированном центре.',
      'Сдайте тест по обществоведению — на родном языке, если так удобнее.',
      'Сохраните сертификаты — они понадобятся при подаче на ПМЖ.'
    ],
    sections: [
      {
        title: 'Что входит в каждый тест',
        body: '<p><strong>Устный тест норвежского (A2):</strong> уровень A2, устный, с экзаменатором. Темы — повседневные ситуации (магазин, врач, работа, семья). Длительность около 25–30 минут.</p><p><strong>Тест по обществоведению (samfunnskunnskap):</strong> письменный, тестовые вопросы. Темы — норвежская история, политика, права и обязанности, культура. Можно сдавать на родном языке. Длительность около 90 минут.</p>'
      },
      {
        title: 'Кто освобождён от тестов',
        body: '<ul><li><strong>Возраст до 18 лет или старше 67 лет</strong> — тесты не нужны.</li><li><strong>Норвежская школа или ВУЗ</strong> — если есть оценка ≥2 по норвежскому или по обществоведению из аккредитованного норвежского учебного заведения, тест считается сданным.</li><li><strong>Медицинские причины</strong> — в исключительных случаях, по запросу с медицинскими документами.</li></ul>'
      },
      {
        title: 'Куда подавать заявку',
        body: '<p>Через свою коммуну — раздел Voksenopplæring или Norskopplæring. Через сертифицированные тестовые центры — список на kompetansenorge.no. Тесты платные (если не входят в бесплатную программу через коммуну).</p>'
      }
    ],
    faq: [
      { q: 'Сколько раз можно пересдавать тест?', a: 'Ограничений на количество попыток нет. Но каждая пересдача обычно платная. Готовьтесь основательно, чтобы сдать с первого раза.' },
      { q: 'Уже сдавала Norskprøve в рамках курсов — нужно ли пересдавать?', a: 'Если есть действующий сертификат A2 от Norskprøve, он засчитывается для ПМЖ. Дополнительно сдавать не нужно.' },
      { q: 'Как готовиться к обществоведческому тесту?', a: 'Материалы для подготовки — на samfunnskunnskap.no. По опыту сообщества, материалы можно изучать на русском (через переводчик). В учебниках норвежского для курсов (Stein på stein и др.) часть материала тоже покрыта.' },
      { q: 'Долго ли действителен сертификат A2?', a: 'Сертификат бессрочный — его не нужно пересдавать со временем. Главное — иметь его на момент подачи на ПМЖ.' },
      { q: 'Где брать оригиналы сертификатов для подачи на ПМЖ?', a: 'Сертификаты выдают тестовые центры или коммуны. Электронные копии обычно принимаются — но имейте бумажный оригинал на случай запроса.' }
    ],
    warn: '<p>Изменение правил с сентября 2025 — действующий режим, который застаёт многих врасплох. До этого хватало посещения курсов без сдачи теста. Если вы планировали ПМЖ по старым правилам — пересмотрите план: тесты теперь обязательны.</p>',
    tip: '<p>Тест по обществоведению на родном языке упрощает задачу — но материалы лучше всё равно изучить серьёзно. По опыту сообщества вопросы охватывают темы, которые могут показаться неочевидными (история Норвегии, политическая система, права коренных народов).</p>',
    sources: [
      { label: 'UDI: Changes to PR requirements', url: 'https://www.udi.no/en/important-messages/changes-to-the-requirements-for-a-permanent-residence-permit/' },
      { label: 'Kompetanse Norge: Norskprøven', url: 'https://www.kompetansenorge.no/' }
    ]
  },

  // ============================================================
  // PR INCOME REQUIREMENT
  // ============================================================
  'pr-income-requirement': {
    tldr: [
      'Для ПМЖ требуется <strong>собственный доход заявителя</strong> (вас), а не принимающей стороны — это главное отличие от первой подачи.',
      'Сумма — около 279 000 NOK в год до налогов (актуальную проверяйте на udi.no).',
      'Считается доход за <strong>последние 12 месяцев</strong> до подачи.',
      '<strong>Засчитываются:</strong> зарплата, родительские выплаты, sykepenger, пенсии, гранты Lånekassen.',
      '<strong>Не засчитываются:</strong> introduksjonsstønad (пособие интеграционной программы), большинство NAV-пособий.'
    ],
    actionNow: [
      'Соберите подтверждения дохода за последние 12 месяцев: пэйслипы, контракт, налоговая декларация.',
      'Если получаете родительские выплаты, sykepenger или гранты — приложите соответствующие документы.',
      'Зайдите на skatteetaten.no и скачайте налоговый расчёт за прошлый год (skatteoppgjør).',
      'Сравните свои документы с актуальной суммой требования на udi.no.'
    ],
    sections: [
      {
        title: 'Что засчитывается в доход',
        body: '<ul><li><strong>Зарплата (lønn)</strong> — основной источник.</li><li><strong>Родительские выплаты (foreldrepenger)</strong> — полностью засчитываются.</li><li><strong>Больничные (sykepenger)</strong> — засчитываются.</li><li><strong>Пенсии</strong> — государственные и частные.</li><li><strong>Гранты от Lånekassen</strong> — стипендии для студентов засчитываются.</li><li><strong>Доход от самозанятости</strong> — если зарегистрирован в Brønnøysundregistrene и подтверждён налоговой декларацией.</li></ul>'
      },
      {
        title: 'Что не засчитывается',
        body: '<ul><li><strong>Introduksjonsstønad</strong> — пособие в рамках программы интеграции для семей беженцев. Это не доход в понимании UDI.</li><li><strong>Большинство NAV-пособий</strong> — sosialhjelp, dagpenger и др.</li><li><strong>Доход супруга/принимающей стороны</strong> — для ПМЖ уже не считается, нужен ваш собственный.</li></ul>'
      },
      {
        title: 'Чем отличается от требования для первой подачи',
        body: '<table><tr><th></th><th>Первая подача</th><th>ПМЖ</th></tr><tr><td>От кого требуется</td><td>Принимающая сторона</td><td>Вы (заявитель)</td></tr><tr><td>Сумма</td><td>~416 512 NOK/год</td><td>~279 000 NOK/год</td></tr><tr><td>Период</td><td>Прошедший и будущий</td><td>Последние 12 месяцев</td></tr></table>'
      },
      {
        title: 'Что если доход не дотягивает',
        body: '<p>Варианты ограничены: подождать с подачей, пока доход не наберётся за 12 месяцев; продлить обычный ВНЖ ещё на 1–2 года, накапливая стаж работы; в отдельных случаях — обратиться в UDI за исключением (требует серьёзных оснований).</p>'
      }
    ],
    faq: [
      { q: 'Что если работала неполную ставку — доход всё равно считается?', a: 'Да, считается весь фактический доход за 12 месяцев, независимо от ставки. Главное — сумма за год.' },
      { q: 'Засчитывается ли доход с самозанятости?', a: 'Да, если самозанятость зарегистрирована в Brønnøysundregistrene и доход подтверждён налоговой декларацией. Понадобятся: skatteoppgjør, инвойсы, банковские выписки.' },
      { q: 'Что если не было 12 месяцев непрерывной работы — были перерывы?', a: 'Считается весь доход за 12 месяцев, даже если работа была не непрерывной. Если перерывы заполнены sykepenger или foreldrepenger — они тоже засчитываются.' },
      { q: 'Я в декрете — foreldrepenger засчитываются как доход?', a: 'Да, foreldrepenger полностью засчитываются. Если они выплачиваются на нужный уровень (зависит от вашей зарплаты до декрета) — требование выполнено.' },
      { q: 'Как UDI проверяет мой доход?', a: 'UDI запрашивает данные напрямую из Skatteetaten. Вам нужно приложить документы, подтверждающие источники (контракт, справки), но саму сумму UDI увидит автоматически.' }
    ],
    warn: '<p>Introduksjonsstønad (пособие в программе интеграции для семей беженцев) не считается доходом для ПМЖ. Если вы только что закончили программу интеграции и не работали отдельно — у вас может не быть 12 месяцев «правильного» дохода. Стоит планировать работу заранее или продлить обычный ВНЖ ещё на год.</p>',
    tip: '<p>Перед подачей зайдите на skatteetaten.no и проверьте свой налоговый расчёт за прошлый год. Если есть расхождения с пэйслипами — лучше разобраться с этим до подачи на ПМЖ, чем во время рассмотрения.</p>',
    sources: [
      { label: 'UDI: Permanent residence permit', url: 'https://www.udi.no/en/want-to-apply/permanent-residence/permanent-residence-permit/' },
      { label: 'Skatteetaten', url: 'https://www.skatteetaten.no/' }
    ]
  },

  // ============================================================
  // CITIZENSHIP PATH
  // ============================================================
  'citizenship-path': {
    tldr: [
      'Гражданство Норвегии — обычно через <strong>8 лет</strong> легального проживания.',
      'Для супругов граждан Норвегии — <strong>3 года брака + 7 лет в Норвегии</strong>.',
      'Для беженцев — через 7 лет.',
      'Условия: ПМЖ, сданные тесты, отсутствие судимости, отсутствие задолженностей.',
      '<strong>С 2020 года Норвегия разрешает двойное гражданство</strong> — отказываться от российского/иного при получении норвежского не нужно.'
    ],
    actionNow: [
      'Подождите, пока наберётся требуемый стаж (обычно 7–8 лет).',
      'Подготовьте документы: ПМЖ, сертификаты тестов, документы о доходе, справку об отсутствии судимости.',
      'Подайте заявление через udi.no — кейс «Citizenship».',
      'Сдайте дополнительные тесты, если нужно (для гражданства требования жёстче, чем для ПМЖ).'
    ],
    sections: [
      {
        title: 'Сроки по кейсам',
        body: '<ul><li><strong>Стандартный путь:</strong> 8 лет легального проживания в Норвегии за последние 11 лет (можно с перерывами в пределах разрешённых лимитов).</li><li><strong>Супруг гражданина Норвегии:</strong> 3 года в браке + 7 лет в Норвегии. Сроки могут идти параллельно.</li><li><strong>Беженцы:</strong> через 7 лет после получения статуса.</li><li><strong>Граждане Северных стран:</strong> через 2 года.</li><li><strong>Дети до 18 лет</strong> — упрощённый порядок, обычно вместе с родителями.</li></ul>'
      },
      {
        title: 'Что нужно для гражданства',
        body: '<ul><li><strong>ПМЖ</strong> — обязательно. Без ПМЖ гражданство не дают.</li><li><strong>Языковые тесты</strong> — норвежский на B1 (выше, чем для ПМЖ A2) или соответствующий сертификат.</li><li><strong>Тест по обществоведению</strong> — тот же, что для ПМЖ.</li><li><strong>Отсутствие судимости</strong> — серьёзные правонарушения могут отложить или сделать гражданство недоступным.</li><li><strong>Отсутствие крупных долгов</strong> — задолженности перед государством нужно погасить.</li></ul>'
      },
      {
        title: 'Двойное гражданство',
        body: '<p>С 1 января 2020 года Норвегия официально разрешает двойное гражданство. При получении норвежского гражданства не нужно отказываться от других гражданств. Норвегия не требует справок об отказе.</p><p>Но важно: страна вашего другого гражданства может иметь свои правила. Например, нужно ли уведомлять Россию о двойном гражданстве — отдельный вопрос российского законодательства.</p>'
      },
      {
        title: 'Чем гражданство отличается от ПМЖ',
        body: '<ul><li><strong>Гражданство постоянное и не аннулируется</strong> при длительном отсутствии в Норвегии (ПМЖ — может).</li><li><strong>Право голоса</strong> на всех выборах (с ПМЖ — только на местных).</li><li><strong>Норвежский паспорт</strong> — упрощает поездки и переезд в другие страны.</li><li><strong>Полное равенство</strong> с другими норвежцами по всем правам и обязанностям.</li></ul>'
      }
    ],
    faq: [
      { q: 'Можно ли подать на гражданство, не имея ПМЖ?', a: 'Нет. Гражданство — следующий шаг после ПМЖ. Без действующего ПМЖ заявление не принимается.' },
      { q: 'Уехала на год за рубеж после ПМЖ — это прерывает стаж для гражданства?', a: 'Зависит от длины и обстоятельств. Длительное отсутствие (год+) может прервать стаж. По возвращении возможно придётся ждать заново.' },
      { q: 'Сколько обычно занимает рассмотрение заявления на гражданство?', a: 'Дольше, чем ВНЖ-заявки — обычно 18–24 месяца. Это сложная проверка по многим параметрам.' },
      { q: 'Что если есть задолженность по налогам или штрафам?', a: 'Лучше погасить до подачи. UDI может отложить рассмотрение или отказать, если есть значимые долги перед государством.' },
      { q: 'Получает ли ребёнок норвежское гражданство автоматически, если я его получаю?', a: 'Для ребёнка нужно подавать отдельную заявку. Но процедура для детей упрощённая, и обычно идёт быстрее.' },
      { q: 'Нужно ли мужу-норвежцу что-то делать, чтобы я получила гражданство?', a: 'Нет, его участие минимально — нужна копия его паспорта, документы о браке. Основное проходите вы сами.' }
    ],
    warn: '<p>Двойное гражданство Норвегия разрешает, но это <strong>не значит, что другие страны его признают</strong>. Россия, например, требует уведомления о наличии иностранного гражданства. Проверьте правила своей страны гражданства перед получением норвежского — могут быть обязанности по уведомлению или регистрации.</p>',
    tip: '<p>Начните копить документы за 1–2 года до планируемой подачи. Сертификаты тестов получите заранее — их можно сдавать ещё с ПМЖ. Справку об отсутствии судимости в России обновляйте каждые несколько лет — она имеет срок действия.</p>',
    sources: [
      { label: 'UDI: Want to apply — Citizenship', url: 'https://www.udi.no/en/want-to-apply/citizenship/' }
    ]
  },

  // ============================================================
  // PREGNANCY WHILE WAITING
  // ============================================================
  'pregnancy-while-waiting': {
    tldr: [
      'Беременность сама по себе <strong>не даёт автоматического приоритета</strong> у UDI.',
      'Можно подать запрос на приоритет с обоснованием (медицинские риски, необходимость родов в Норвегии) — но решение зависит от документов.',
      '<strong>Если родить в Норвегии до получения ВНЖ:</strong> ребёнок получит норвежское гражданство автоматически, если один из родителей — гражданин Норвегии.',
      'Понадобятся <strong>дополнительные документы после рождения</strong> — свидетельство о рождении ребёнка.',
      'Медицинская помощь беременным в Норвегии доступна тем, кто <strong>легально находится</strong> в стране, даже без fødselsnummer.'
    ],
    actionNow: [
      'Сообщите UDI об изменении семейной ситуации (беременность) через личный кабинет.',
      'Решите, где планируете рожать — это влияет на следующие шаги.',
      'Если в Норвегии — оформите доступ к медицине (даже без fødselsnummer возможны варианты для беременных).',
      'Подумайте о подаче запроса на приоритет, если есть медицинские основания.'
    ],
    sections: [
      {
        title: 'Что меняется в кейсе UDI',
        body: '<p>Беременность сама по себе — <strong>не основание для приоритета</strong>. UDI прямо указывает на своём сайте: ожидание ребёнка не является достаточной причиной для ускорения.</p><p>Однако вы можете подать запрос на приоритет, если есть конкретные основания: медицинские риски (сложная беременность), необходимость родов в Норвегии, особые гуманитарные обстоятельства. Запрос подаётся письменно через личный кабинет с документальными подтверждениями.</p>'
      },
      {
        title: 'Если рождаете в Норвегии',
        body: '<p><strong>Если один из родителей — гражданин Норвегии:</strong> ребёнок получает норвежское гражданство <strong>автоматически</strong> при рождении, независимо от того, есть ли у вас ВНЖ.</p><p><strong>Если оба родителя — иностранцы (например, кейс Skilled worker):</strong> ребёнок не получает гражданство автоматически. Но у него возникает право на ВНЖ через родителей — подаётся отдельное заявление на семейную миграцию для ребёнка.</p>'
      },
      {
        title: 'Если рождаете до решения по своему ВНЖ',
        body: '<p>После рождения ребёнка — сообщите UDI через личный кабинет. UDI обычно запрашивает свидетельство о рождении. Иногда UDI принимает решение по семье одновременно — и по вам, и по ребёнку.</p>'
      },
      {
        title: 'Медицинская помощь беременным',
        body: '<p>Беременные в Норвегии имеют право на медицинскую помощь, даже если ещё нет ВНЖ и нет fødselsnummer: скрининг и наблюдение во время беременности доступны через государственную медицину; роды — государственный сектор не отказывает. Сумма доплат зависит от статуса.</p>'
      }
    ],
    faq: [
      { q: 'Примут ли меня к врачу, если беременна и нет fødselsnummer?', a: 'Базовая помощь беременным доступна всем легально находящимся в Норвегии. Стартовая точка — обращение к fastlege супруга или в коммуну. Направят к midwife (jordmor) и в роддом по месту жительства.' },
      { q: 'Что если планирую роды дома, в России — это повлияет на кейс UDI?', a: 'Нет, на сам кейс ВНЖ это не повлияет. Но после родов нужно будет подать на ВНЖ для ребёнка отдельно, если он не норвежец автоматически.' },
      { q: 'Можно ли использовать беременность как аргумент в апелляции?', a: 'Только если есть конкретные обстоятельства (медицинские риски, необходимость родов в Норвегии). Сама по себе беременность не отменяет основание отказа.' },
      { q: 'Покрываются ли роды в Норвегии для беременной без ВНЖ?', a: 'Базовая помощь — да, через государственный сектор. Но могут быть доплаты или счета после родов, если нет статуса резидента. Лучше уточнить заранее в роддоме или коммуне.' },
      { q: 'Ребёнок родился за рубежом, потом приеду в Норвегию — нужно ли подавать ВНЖ на ребёнка отдельно?', a: 'Если один из родителей — гражданин Норвегии, ребёнку нужно оформить норвежский паспорт в посольстве. Если оба родителя — иностранцы, нужно подавать на ВНЖ для ребёнка отдельно.' }
    ],
    warn: '<p>Беременность не даёт автоматического приоритета у UDI. Не рассчитывайте, что ВНЖ ускорят «потому что беременна» — нужны конкретные документальные основания.</p>',
    tip: '<p>Если планируете беременность во время ожидания ВНЖ — оформите международную медстраховку с покрытием беременности. По опыту сообщества норвежские частные клиники не принимают международные страховки, но в государственном секторе помощь оказывают.</p>',
    sources: [
      { label: 'UDI: Have applied — Family immigration', url: 'https://www.udi.no/en/have-applied/family-immigration/' },
      { label: 'Helsenorge: Pregnancy', url: 'https://www.helsenorge.no/en/pregnancy-and-maternity-care/' }
    ]
  },

  // ============================================================
  // CHILDREN BORN DURING PROCESS
  // ============================================================
  'children-born-during-process': {
    tldr: [
      'Если <strong>хотя бы один родитель — гражданин Норвегии</strong>, ребёнок получает норвежское гражданство <strong>автоматически</strong> при рождении. Место рождения не важно.',
      'Если <strong>оба родителя — иностранцы</strong>, ребёнок гражданство Норвегии <strong>не получает</strong> автоматически.',
      'Для ребёнка-гражданина Норвегии нужно оформить <strong>норвежский паспорт</strong> — в посольстве или коммуне.',
      'Если ребёнок не норвежец, но один из родителей имеет норвежский ВНЖ — ребёнок имеет право на ВНЖ через семейную миграцию.',
      '<strong>Пошлины за ВНЖ для детей до 18 лет нет.</strong>'
    ],
    actionNow: [
      'Сразу после рождения зарегистрируйте ребёнка в коммуне (если рождён в Норвегии) или в стране рождения.',
      'Получите свидетельство о рождении с апостилем и переводом (если рождён за рубежом).',
      'Если один из родителей — норвежец, оформите норвежский паспорт ребёнку в посольстве или коммуне.',
      'Если ребёнок не норвежец и нужен ВНЖ — подайте на семейную миграцию для него.'
    ],
    sections: [
      {
        title: 'Если один родитель — гражданин Норвегии',
        body: '<p>Ребёнок получает норвежское гражданство автоматически по закону «гражданство по родителю». Не имеет значения: место рождения (Норвегия или любая страна); семейное положение родителей (брак не обязателен, если отцовство установлено).</p><p>Что делать: зарегистрировать рождение в местном ЗАГСе или коммуне; если рождено за рубежом — получить международное свидетельство о рождении; обратиться в посольство Норвегии (если за рубежом) или Skatteetaten (если в Норвегии) для оформления норвежского паспорта.</p>'
      },
      {
        title: 'Если оба родителя — иностранцы',
        body: '<p>Ребёнок не становится гражданином Норвегии при рождении, даже если рождён в Норвегии. <strong>Норвегия не применяет принцип «гражданства по рождению» (jus soli).</strong></p><p>Но у ребёнка возникает право на ВНЖ через семейную миграцию, если хотя бы один родитель имеет действующий норвежский ВНЖ. Пошлина за ребёнка до 18 лет не взимается. Документы: свидетельство о рождении ребёнка, паспорта родителей, документы о ВНЖ родителя.</p>'
      },
      {
        title: 'Если родители в разводе или один не родной',
        body: '<p>По опыту сообщества для подачи на ВНЖ ребёнку от предыдущего брака требуется <strong>письменное согласие второго родителя</strong> на переезд ребёнка в Норвегию. Это согласие оформляется в посольстве Норвегии в стране проживания второго родителя.</p>'
      },
      {
        title: 'Если ребёнок родился в Норвегии у родителей-иностранцев и потом уехал',
        body: '<p>По кейсу из сообщества: если у ребёнка не было оформленного норвежского статуса (паспорт, ВНЖ) и он провёл годы за рубежом, возвращение в Норвегию проходит как обычная семейная миграция. Сам факт рождения в Норвегии не даёт автоматических прав на возврат.</p>'
      }
    ],
    faq: [
      { q: 'Родила в Норвегии до получения своего ВНЖ — какой статус у ребёнка?', a: 'Если отец — гражданин Норвегии, ребёнок гражданин Норвегии автоматически. Если отец иностранец, у ребёнка нет автоматического статуса — нужно подавать на ВНЖ через одного из родителей, у которого есть ВНЖ.' },
      { q: 'Родила в России до получения ВНЖ — что с ребёнком?', a: 'Ребёнок имеет гражданство той страны. Если отец — гражданин Норвегии, ребёнок дополнительно получает норвежское гражданство — оформляется в посольстве. Если оба родителя — иностранцы, гражданство Норвегии не возникает.' },
      { q: 'Можно ли подать на ВНЖ для ребёнка одновременно с моим ВНЖ?', a: 'Да, обычно так и делают. Заявка на ребёнка прикрепляется к вашему делу, и UDI рассматривает их одновременно.' },
      { q: 'Платится ли пошлина за ВНЖ для ребёнка?', a: 'Нет, дети до 18 лет в семейной миграции освобождены от пошлины UDI.' },
      { q: 'Что делать, если бывший супруг не хочет дать согласие на переезд ребёнка?', a: 'Без письменного согласия второго родителя UDI обычно не одобряет переезд ребёнка. Варианты: добиться согласия через переговоры; обратиться в норвежский суд для решения о месте жительства ребёнка; в крайних случаях — консультация с адвокатом по семейному праву.' },
      { q: 'Где оформить норвежский паспорт ребёнку?', a: 'В Норвегии — через Skatteetaten после регистрации ребёнка в Folkeregisteret. За рубежом — в посольстве Норвегии (нужна предварительная запись).' }
    ],
    warn: '<p>Если ребёнок рождается в Норвегии у родителей-иностранцев, он автоматически гражданство Норвегии <strong>не получает</strong>. Это распространённое заблуждение — Норвегия не применяет «гражданство по рождению» как США. Не рассчитывайте на этот сценарий при планировании.</p>',
    tip: '<p>Если планируете рожать в Норвегии или за рубежом — заранее уточните в посольстве Норвегии (если за рубежом) или коммуне (если в Норвегии), какие документы понадобятся для регистрации рождения и оформления статуса ребёнка. Документация может занять несколько недель.</p>',
    sources: [
      { label: 'UDI: Want to apply — Family immigration (children)', url: 'https://www.udi.no/en/want-to-apply/family-immigration/' },
      { label: 'UDI: Citizenship by birth', url: 'https://www.udi.no/en/want-to-apply/citizenship/' }
    ]
  },

  // ============================================================
  // SAMBOER COHABITATION
  // ============================================================
  'samboer-cohabitation': {
    tldr: [
      'Чтобы подавать как сожители (samboere), а не супруги — нужны <strong>2+ года совместной жизни</strong> в одном домохозяйстве.',
      'Альтернатива двум годам: <strong>общий ребёнок</strong> (рождённый или ожидаемый).',
      'Обоим партнёрам должно быть <strong>не меньше 24 лет</strong> — это правило одинаково для брака и сожительства.',
      'Никто не может одновременно состоять в <strong>зарегистрированном браке</strong> с другим человеком.',
      'Если совместное проживание было в Норвегии — оба должны были иметь <strong>легальный статус</strong> в этот период.'
    ],
    actionNow: [
      'Соберите документы, подтверждающие 2+ года совместной жизни: договор аренды или собственности, общие счета, регистрацию на одном адресе.',
      'Если есть общий ребёнок — приложите свидетельство о рождении (или подтверждение беременности).',
      'Подавайте на семейную миграцию по форме для сожителей.'
    ],
    sections: [
      {
        title: 'Что считается совместной жизнью',
        body: '<p>UDI понимает samboerskap как <strong>реальное совместное проживание в одном домохозяйстве</strong>. Это не просто отношения «вместе уже два года» — нужно фактически жить под одной крышей.</p><p>Если за эти 2 года были длительные периоды раздельного проживания (по работе, учёбе, между странами), стоит приложить объяснение причин, показать переписку и поездки за этот период и при необходимости продлить документально подтверждённый период.</p>'
      },
      {
        title: 'Что прикладывать',
        body: '<ul><li><strong>Общий договор аренды или документ о собственности</strong> — главный документ.</li><li><strong>Регистрация на одном адресе</strong> — выписка из реестра.</li><li><strong>Совместные счета</strong> — банковские, коммунальные, страховые.</li><li><strong>Совместные фото и путешествия</strong> за период.</li><li><strong>Свидетельства родственников или друзей</strong> — иногда принимаются как дополнительное подтверждение.</li></ul>'
      },
      {
        title: 'Альтернатива: общий ребёнок',
        body: '<p>Если у вас есть общий ребёнок (или вы ждёте ребёнка), требование 2 лет совместной жизни <strong>не применяется</strong>. Достаточно подтвердить родительство: свидетельство о рождении ребёнка с указанием обоих родителей или медицинское подтверждение беременности и документ об установлении отцовства.</p>'
      }
    ],
    faq: [
      { q: 'Что если жили вместе, но регистрация была у каждого по своему адресу?', a: 'Формальная регистрация на одном адресе — сильный аргумент, но не единственный. Если фактически жили вместе — приложите альтернативные доказательства: договор аренды на двоих, общие счета, переписку с указанием общего адреса. UDI оценивает картину в целом.' },
      { q: 'Засчитывается ли период длинных отношений на расстоянии (long-distance) в эти 2 года?', a: 'Нет. UDI считает только период фактического совместного проживания. Время в отношениях до переезда к партнёру не идёт в зачёт. Это частая ловушка: пара 5 лет «вместе», но реально под одной крышей жили только 6 месяцев — этого недостаточно.' },
      { q: 'Можно ли подавать как samboer, если в одной из стран наше сожительство юридически не признано?', a: 'Да. UDI оценивает фактическое совместное проживание, а не юридический статус самборства в стране проживания. Главное — документально подтвердить факт жизни вместе.' },
      { q: 'Что если ребёнок не общий — он от прошлых отношений одного из партнёров?', a: 'Ребёнок от прошлых отношений не отменяет требование 2 лет совместной жизни. Только общий ребёнок (биологический или усыновлённый совместно) даёт это исключение.' }
    ],
    warn: '<p>Если вы планируете именно сожительство (а не брак), и у вас нет общего ребёнка, период совместного проживания — самый уязвимый пункт. UDI смотрит документы строго: разовые поездки или гостевые визиты не считаются. Лучше подавать после уверенных 2 лет с полным документальным подтверждением, чем рисковать отказом.</p>',
    tip: '<p>Если совместная жизнь была в нескольких странах — соберите документы из каждой страны и расположите их в хронологическом порядке. Это помогает UDI увидеть непрерывную линию, а не разрозненные фрагменты.</p>',
    sources: [
      { label: 'UDI: Family immigration with a Norwegian or Nordic citizen', url: 'https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-norwegian-or-nordic-citizen/' }
    ]
  },

  // ============================================================
  // EU EEA RESIDENCE RIGHT
  // ============================================================
  'eu-eea-residence-right': {
    tldr: [
      'Чтобы вы получили карту резидента члена семьи гражданина ЕС/ЕЭЗ — принимающая сторона должна <strong>активно реализовывать право на проживание</strong> в Норвегии.',
      'Это значит: <strong>работает, ведёт самозанятость, учится или имеет собственные средства</strong> на содержание семьи.',
      'Просто наличие гражданства ЕС/ЕЭЗ — недостаточно.',
      'Если принимающая сторона учится или живёт на свои средства — нужна <strong>частная медстраховка на 12 месяцев</strong>.',
      'Если потеряет работу — есть <strong>переходный период</strong>, в течение которого право сохраняется.'
    ],
    actionNow: [
      'Определите, на каком основании принимающая сторона реализует право на проживание: работа, самозанятость, учёба или собственные средства.',
      'Соберите соответствующие документы (контракт + пэйслипы / регистрация бизнеса / документы об учёбе + страховка / банковские выписки).',
      'Подавайте на карту резидента члена семьи гражданина ЕС/ЕЭЗ через udi.no.'
    ],
    sections: [
      {
        title: 'Четыре основания для права на проживание',
        body: '<p><strong>1. Работа по найму:</strong> трудовой договор с норвежским работодателем + пэйслипы за последние 3 месяца + регистрация в Skatteetaten.</p><p><strong>2. Самозанятость:</strong> регистрация бизнеса в Brønnøysundregistrene + документы о деятельности + налоговая декларация.</p><p><strong>3. Учёба в Норвегии:</strong> документ о зачислении + подтверждение средств + <strong>частная медстраховка на 12 месяцев</strong> (обязательно).</p><p><strong>4. Собственные средства:</strong> банковские выписки или другие доказательства финансовой независимости + <strong>частная медстраховка на 12 месяцев</strong> (обязательно).</p><p>В отличие от семейной миграции к гражданину Норвегии, нет фиксированной суммы дохода — UDI оценивает индивидуально.</p>'
      },
      {
        title: 'Если принимающая сторона теряет работу',
        body: '<p>После увольнения право на проживание не пропадает сразу:</p><ul><li><strong>Стаж работы больше 1 года</strong> — право сохраняется бессрочно, пока человек зарегистрирован в NAV как соискатель работы.</li><li><strong>Стаж работы меньше 1 года</strong> — право сохраняется ещё 6 месяцев.</li><li><strong>Если уволился сам</strong> — право работника теряется, но можно перейти на другое основание.</li></ul><p>Если принимающая сторона теряет работу во время вашего ожидания решения, её основание для пребывания может пропасть — и ваша заявка тоже окажется под вопросом.</p>'
      },
      {
        title: 'Это проверяют на всех этапах',
        body: '<p>UDI проверяет реализацию права на проживание: при первой подаче на карту резидента, при продлении (карта действует 5 лет, но условие должно сохраняться) и при переходе к постоянной карте резидента через 5 лет.</p>'
      }
    ],
    faq: [
      { q: 'Что если у принимающей стороны временный контракт — это считается работой?', a: 'Да, временный контракт считается реализацией права работника, пока контракт действует. По окончании временного контракта снова срабатывают правила переходного периода.' },
      { q: 'Засчитывается ли удалённая работа на работодателя из другой страны?', a: 'Это сложный случай. Удалённая работа на компанию вне ЕЭЗ обычно не считается «реализацией права работника в Норвегии». Принимающей стороне в этом случае может потребоваться перейти на основание «собственные средства» с медстраховкой.' },
      { q: 'Что если средства накопления есть, но нет дохода — этого достаточно?', a: 'Может быть. UDI смотрит, хватит ли средств на жизнь семьи без социальной помощи. Чем больше сумма и чем дольше она может покрывать расходы — тем убедительнее. Также обязательна частная медстраховка.' },
      { q: 'Учёба в каком формате засчитывается?', a: 'Полноценная учёба в аккредитованном норвежском учебном заведении — университет, колледж, профессиональная программа. Короткие или языковые курсы обычно не считаются.' },
      { q: 'Что если принимающая сторона работает в другой стране ЕС/ЕЭЗ, а живёт в Норвегии?', a: 'Это нестандартная ситуация — лучше проконсультироваться с UDI напрямую.' }
    ],
    warn: '<p>Если в течение вашего ожидания принимающая сторона перестаёт реализовывать право на проживание — основание для вашего пребывания тоже исчезает. Это риск отказа в карте резидента или её отзыва. Следите за статусом партнёра и сообщайте UDI о значимых изменениях.</p>',
    tip: '<p>Если основание — работа, сохраняйте контракт + последние 3 пэйслипа + skattekort в одной папке. При запросах UDI это сэкономит время. Если меняется работа — обновляйте пакет сразу, не ждите запроса.</p>',
    sources: [
      { label: 'UDI: FAQ — EU/EEA', url: 'https://www.udi.no/en/answer-pages/answers-eueea/' },
      { label: 'UDI: Residence card for family members of EU/EEA nationals', url: 'https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-an-eueea-national/' }
    ]
  },

  // ============================================================
  // APPLY WITH SKILLED WORKER
  // ============================================================
  'apply-with-skilled-worker': {
    tldr: [
      'Если принимающая сторона <strong>только переезжает в Норвегию</strong> как Skilled worker, заявление семьи можно подать <strong>одновременно</strong> с её заявкой.',
      'UDI обычно рассматривает обе заявки <strong>вместе</strong> и присылает решения одновременно.',
      'Это один из самых <strong>быстрых сценариев</strong> — 4–6 месяцев при подаче через консультанта работодателя.',
      'Заявка семьи регистрируется <strong>отдельно</strong> со своей пошлиной, в форме указывается DUF-номер принимающей стороны.',
      'Все требования по доходу, жилью и отношениям проверяются ровно так же, как при обычной семейной миграции.'
    ],
    actionNow: [
      'Уточните у принимающей стороны: оформляет ли она заявку сама или через консультанта работодателя.',
      'Если через консультанта — спросите, может ли он вести и семейную подачу (это часто входит в relocation package).',
      'Дождитесь, когда заявка принимающей стороны будет зарегистрирована и получит DUF-номер.',
      'Подайте отдельную заявку на семейную миграцию, указав DUF-номер партнёра как reference.'
    ],
    sections: [
      {
        title: 'Почему этот путь быстрее',
        body: '<p>Стандартная семейная миграция к гражданину Норвегии — 12–20 месяцев. Семейная миграция к Skilled worker, подаваемая одновременно с заявкой принимающей стороны — обычно 4–6 месяцев.</p><p>UDI обрабатывает оба дела как <strong>связанный пакет</strong>: они проходят одних и тех же сотрудников, проверяются одновременно, и решения выдаются параллельно. Это удобнее для семьи и эффективнее для UDI.</p>'
      },
      {
        title: 'Что нужно для одновременной подачи',
        body: '<ul><li><strong>Заявка Skilled worker уже зарегистрирована</strong> — без неё семейную подачу прикрепить не к чему. Сначала принимающая сторона регистрирует свою заявку, получает DUF-номер.</li><li><strong>Своя онлайн-заявка</strong> на семейную миграцию — на udi.no, отдельная форма.</li><li><strong>DUF-номер партнёра</strong> — указывается в форме как reference.</li><li><strong>Своя пошлина</strong> — стандартная для семейной миграции.</li><li><strong>Все обычные документы</strong> семейной миграции: паспорт, свидетельство о браке с апостилем и переводом, документы о жилье, документы о доходе принимающей стороны.</li></ul>'
      },
      {
        title: 'Если консультант работодателя ведёт процесс',
        body: '<p>По опыту сообщества, многие крупные работодатели в Норвегии предлагают релокационный пакет, в который входит работа иммиграционного консультанта. Они часто ведут подачу всей семьи разом, знают актуальные требования UDI и уменьшают вероятность ошибок.</p><p>Стоит уточнить у работодателя на этапе оффера, покрывает ли relocation package семью.</p>'
      },
      {
        title: 'Если подача не пакетом',
        body: '<p>Если принимающая сторона уже получила ВНЖ Skilled worker, и вы подаёте позже — это стандартная семейная миграция, и пакетных преимуществ нет. Сроки в этом случае обычные для семейной миграции к Skilled worker (4–6 месяцев при порядке с документами).</p>'
      }
    ],
    faq: [
      { q: 'Должна ли заявка партнёра быть уже одобрена, чтобы можно было подать семейную?', a: 'Нет — главное, чтобы она была зарегистрирована и был DUF-номер. UDI рассматривает их вместе и принимает решения параллельно.' },
      { q: 'Что если партнёр меняет работодателя во время рассмотрения нашей семейной заявки?', a: 'Это требует обновления документов в обеих заявках. Уведомьте UDI через личный кабинет и приложите новый трудовой договор.' },
      { q: 'Могут ли заявку партнёра одобрить, а семейную отказать?', a: 'Технически да, если по семейной не выполнены требования (не подтверждены отношения или жильё). На практике, при пакетной подаче через консультанта это редкость.' },
      { q: 'Что если я хочу подавать из Норвегии, а партнёр подаёт из-за рубежа?', a: 'Можно. UDI рассматривает каждую заявку с того места, откуда она подана, но связь через DUF-номер сохраняется.' }
    ],
    warn: '<p>Регистрировать свою заявку <strong>до</strong> того, как у партнёра появился DUF-номер, нельзя — её не к чему привязать. Если подаёте без консультанта самостоятельно, особенно внимательно следите за этим моментом.</p>',
    tip: '<p>Если есть выбор — настойчиво просите работодателя включить семейную подачу в relocation package. Это сильно увеличивает шансы на быстрое и беспроблемное прохождение. Хорошие консультанты экономят месяцы.</p>',
    sources: [
      { label: 'UDI: Family immigration with a citizen of a country outside the EU/EEA', url: 'https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-a-citizen-of-a-country-outside-the-eueea/' }
    ]
  },

  // ============================================================
  // FEES
  // ============================================================
  'fees': {
    tldr: [
      'За подачу заявки на семейную миграцию берётся <strong>государственная пошлина</strong> — сумма зависит от типа заявки.',
      'Граждане <strong>ЕС/ЕЭЗ и члены их семей</strong> от пошлины освобождены.',
      '<strong>Дети до 18 лет</strong> от пошлины освобождены.',
      'Семьи <strong>беженцев</strong> платят сниженную пошлину или не платят совсем.',
      'Пошлина <strong>не возвращается</strong> при отказе или отзыве заявки.'
    ],
    actionNow: [
      'Проверьте на udi.no актуальный размер пошлины для вашего типа заявки (суммы обновляются ежегодно).',
      'Если вы гражданин ЕС/ЕЭЗ или ваш принимающий партнёр — гражданин ЕС/ЕЭЗ — убедитесь, что выбрана правильная форма без пошлины.',
      'Оплатите пошлину на этапе регистрации заявки и сразу скачайте PDF-подтверждение оплаты.'
    ],
    sections: [
      {
        title: 'Кто освобождён от пошлины',
        body: '<ul><li><strong>Граждане ЕС/ЕЭЗ и члены их семей</strong> — при подаче через ЕС/ЕЭЗ-форму.</li><li><strong>Дети до 18 лет</strong> — в любом сценарии.</li><li><strong>Члены семьи лица с защитой (беженец)</strong> — сниженная или нулевая пошлина, зависит от конкретного типа заявки.</li><li><strong>Подача апелляции</strong> в UNE — бесплатно.</li></ul>'
      },
      {
        title: 'За что и когда платить',
        body: '<p>Пошлина оплачивается <strong>при первичной регистрации заявки</strong> на udi.no. Без оплаты заявка не считается принятой.</p><p>При продлении ВНЖ — пошлина берётся снова. При подаче на ПМЖ — своя пошлина.</p><p>Актуальные суммы всегда публикуются на udi.no — лучше проверять непосредственно перед подачей, так как суммы пересматриваются раз в год (обычно в январе).</p>'
      },
      {
        title: 'Что важно знать о пошлинах',
        body: '<ul><li>Пошлина <strong>не возвращается</strong> — ни при отказе, ни если передумали подавать, ни при ошибке в форме.</li><li>Если выбрали <strong>неправильный тип заявки</strong> и оплатили — деньги не вернут, придётся платить снова за правильную форму.</li><li>Оплатить может <strong>другой человек</strong> — это разрешено. Но квитанция должна быть привязана к конкретной заявке.</li></ul>'
      }
    ],
    faq: [
      { q: 'Нужно ли платить пошлину гражданам Украины с временной защитой?', a: 'Зависит от типа статуса и заявки. При наличии временной защиты (kollektiv beskyttelse) — семейные заявки могут подаваться с льготной или нулевой пошлиной. Проверьте на udi.no актуальное исключение для украинцев.' },
      { q: 'Заплатил пошлину, но передумал подавать. Можно вернуть?', a: 'Нет. Пошлина не возвращается ни при каких обстоятельствах, включая передумавших, получивших отказ и ошибочные подачи.' },
      { q: 'Можно ли оплатить с чужой карты — например, партнёра?', a: 'Да, это разрешено. Важно, чтобы квитанция об оплате была сохранена и корректно привязана к заявке по reference number.' },
      { q: 'Сайт UDI показывает сумму — но она другая, чем я читал в интернете. Чему верить?', a: 'Верить только официальному сайту udi.no в момент подачи. Суммы обновляются ежегодно в январе, и статьи в интернете (включая форумы) быстро устаревают.' },
      { q: 'При продлении ВНЖ пошлина такая же, как при первом разрешении?', a: 'Может отличаться — суммы для первичной подачи и продления разные. Всегда проверяйте именно для вашего типа действия на udi.no.' }
    ],
    warn: '<p>Если вы подаёте по ЕС/ЕЭЗ-основанию, на сайте иногда по умолчанию выбирается форма с пошлиной. Внимательно проверяйте, что используете правильную форму (без пошлины). Переплаченную пошлину не вернут.</p>',
    tip: '<p>Сразу после оплаты скачайте PDF-подтверждение транзакции. Если возникнут технические проблемы с подачей, это подтверждение поможет доказать факт оплаты.</p>',
    sources: [
      { label: 'UDI: Fees', url: 'https://www.udi.no/en/want-to-apply/fees/' }
    ]
  },

  // ============================================================
  // INTRODUCTION PROGRAM
  // ============================================================
  'introduction-program': {
    tldr: [
      '<strong>Introduksjonsprogrammet</strong> — обязательная программа интеграции для членов семьи беженцев и лиц с защитой.',
      'Длится <strong>до 2 лет</strong> (в некоторых случаях до 3), включает норвежский язык, общественные знания и профессиональное ориентирование.',
      'На время участия выплачивается <strong>introduksjonsstønad</strong> — денежное пособие (~2 «базовые ставки» NAV в год).',
      'Регистрироваться и начинать нужно через <strong>коммуну</strong> после приезда.',
      'Программа <strong>не засчитывается как доход</strong> при проверке требования к доходу для ПМЖ.'
    ],
    actionNow: [
      'Как только приедете в Норвегию — обратитесь в коммуну (kommune) для регистрации на программу.',
      'Уточните в коммуне формат: что входит, расписание, где занятия.',
      'Сохраняйте подтверждения об участии — они могут понадобиться для будущих заявок.',
      'Заранее узнайте, что introduksjonsstønad не учитывается как доход для целей ПМЖ, и планируйте параллельную работу или иной доход, если целитесь на ПМЖ.'
    ],
    sections: [
      {
        title: 'Что входит в программу',
        body: '<p>Программа строится из трёх блоков:</p><ul><li><strong>Норвежский язык</strong> — обучение до уровня B1 (разговорный), занятия в языковой школе коммуны.</li><li><strong>Samfunnskunnskap</strong> (знания об обществе) — обязательный курс на знакомом языке: как устроена Норвегия, права и обязанности, здравоохранение, образование.</li><li><strong>Профессиональное ориентирование</strong> — помощь с поиском работы или учёбы после программы.</li></ul>'
      },
      {
        title: 'Кому положена',
        body: '<p><strong>Члены семьи беженцев и лиц с защитой</strong> — обязательно участвуют в programmet при воссоединении семьи.</p><p><strong>Другие категории</strong> (члены семьи граждан Норвегии, ЕС/ЕЭЗ, Skilled worker) — не входят в программу автоматически. Некоторые коммуны предлагают схожие добровольные курсы, но это отдельная история.</p>'
      },
      {
        title: 'Сколько длится',
        body: '<p>Базовый срок — <strong>2 года</strong>. Если за 2 года уровень не достигнут или есть объективные причины (болезнь, уход за детьми) — коммуна может продлить до <strong>3 лет</strong>.</p><p>В период программы вы «заняты» официально: нельзя просто уйти работать без согласования с коммуной.</p>'
      },
      {
        title: 'Introduksjonsstønad: что это и сколько',
        body: '<p>На время участия в программе выплачивается <strong>introduksjonsstønad</strong> — ежемесячное пособие. Размер привязан к базовой ставке NAV (G): примерно 2 G в год.</p><p>Важно: это <strong>не считается income</strong> при проверке требования к доходу для ПМЖ (permanent residence). Для ПМЖ нужен реальный трудовой доход или социальное пособие определённого типа — introduksjonsstønad туда не входит.</p>'
      },
      {
        title: 'Это обязательная программа',
        body: '<p>Отказаться нельзя. Отсутствие на занятиях или игнорирование программы может повлечь приостановку пособия и осложнить продление ВНЖ. Коммуна фиксирует посещаемость.</p>'
      }
    ],
    faq: [
      { q: 'Что если коммуна не предлагает программу или нет мест?', a: 'Коммуна обязана обеспечить программу — это законодательное требование. Если возникают задержки или отказы, можно обратиться в IMDi (Integrerings- og mangfoldsdirektoratet) с жалобой.' },
      { q: 'Можно ли работать параллельно с программой?', a: 'В принципе — да, с согласования коммуны. Но программа строится как полный рабочий день (обычно с 8:00 до 15:00), и параллельная работа требует гибкости с обеих сторон.' },
      { q: 'Что если хочу учиться в университете вместо этой программы?', a: 'Можно попробовать согласовать с коммуной замену части программы на университетское обучение — коммуны имеют некоторую гибкость. Но это решается индивидуально.' },
      { q: 'Что происходит после окончания программы?', a: 'Пособие заканчивается, и вы должны самостоятельно трудоустроиться или продолжить учёбу. Коммуна помогает с поиском работы в рамках последнего блока программы.' },
      { q: 'Связана ли программа с получением ПМЖ?', a: 'Участие в программе — не прямое требование для ПМЖ. Но уровень норвежского B1 (которого добиваются в программе) является требованием для ПМЖ. Так что косвенная связь есть.' }
    ],
    warn: '<p><strong>Introduksjonsstønad не засчитывается как доход</strong> при проверке финансового требования для ПМЖ. Если вы рассчитываете на ПМЖ через 3 года, планируйте параллельную работу или другой задекларированный доход — иначе может не хватить на пороговое значение.</p>',
    tip: '<p>Свяжитесь с коммуной сразу после приезда, не ждите официального письма. Некоторые коммуны начинают регистрацию только при явлении заявителя лично. Чем раньше начнёте — тем раньше закончите.</p>',
    sources: [
      { label: 'IMDi: Introduksjonsprogrammet', url: 'https://www.imdi.no/introduksjonsprogram/' },
      { label: 'UDI: Family immigration with a refugee', url: 'https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-a-refugee/' }
    ]
  },

  // ============================================================
  // SHAM MARRIAGE PREVENTION
  // ============================================================
  'sham-marriage-prevention': {
    tldr: [
      'UDI <strong>стандартно проверяет все заявки</strong> на признаки фиктивности — это не обвинение, а часть процесса.',
      '<strong>Сигналы фиктивности</strong> — это комбинации факторов (короткое знакомство, большая разница в возрасте, расстояние), а не один признак.',
      '<strong>Совместные документы + последовательные ответы</strong> обоих партнёров — ключевая защита.',
      'UDI может <strong>отдельно прислать анкету принимающей стороне</strong> — ответы сравниваются с вашими.',
      'Несоответствия в ответах — одна из самых частых причин отказов, связанных с фиктивностью.'
    ],
    actionNow: [
      'До подачи обсудите с партнёром ключевые факты: где познакомились, первая встреча, предложение руки/сожительства, совместные поездки.',
      'Соберите документы, подтверждающие историю отношений: фото разных периодов, переписка, авиабилеты, совместные финансовые записи.',
      'Сохраните скриншоты своих ответов в форме UDI сразу после отправки — до того как партнёр заполнит свою анкету.'
    ],
    sections: [
      {
        title: 'Что UDI считает «сигналами фиктивности»',
        body: '<p>Ни один из этих признаков сам по себе не означает отказ — UDI смотрит на <strong>комбинацию</strong>:</p><ul><li><strong>Короткое знакомство</strong> — менее 6–12 месяцев до регистрации брака.</li><li><strong>Большая разница в возрасте</strong> — особенно если 15+ лет.</li><li><strong>Значительные культурные или языковые барьеры</strong>.</li><li><strong>Знакомство исключительно онлайн</strong>, никогда не встречались лично до брака.</li><li><strong>Недавний развод</strong> одного из партнёров перед подачей.</li><li><strong>Противоречия в ответах</strong> — главный красный флаг: разные версии истории знакомства, дат, поездок.</li></ul>'
      },
      {
        title: 'Отдельная анкета принимающей стороны',
        body: '<p>UDI может (и нередко делает) отдельно отправить <strong>письменную анкету</strong> на адрес принимающей стороны в Норвегии. Письмо приходит в конверте — спустя недели или месяцы после вашей подачи. В анкете те же вопросы: где познакомились, когда, как развивались отношения.</p><p>Ответы сравниваются с вашими. Если совпадают — это плюс. Если расходятся — это может стать основанием для отказа или вызова на интервью.</p><p>Практический совет: прежде чем подавать заявку, сохраните скриншоты ваших ответов и <strong>поделитесь ими с партнёром</strong>, чтобы ответы были согласованы.</p>'
      },
      {
        title: 'Как готовить документы',
        body: '<ul><li><strong>Фотографии</strong> разных периодов отношений — с датами и, по возможности, с геолокацией.</li><li><strong>Переписка</strong> — не обязательно сдавать всё, но распечатки ключевых периодов помогают.</li><li><strong>Авиабилеты и въездные штампы</strong> — подтверждают реальные встречи.</li><li><strong>Совместные финансы</strong> — общие расходы, переводы, совместные покупки.</li><li><strong>Свидетельства третьих лиц</strong> — письма или декларации от родственников, знакомых, знающих пару.</li></ul>'
      },
      {
        title: 'Если получили отказ по причине фиктивности',
        body: '<p>Отказ по признаку фиктивности можно <strong>обжаловать в UNE</strong> (Utlendingsnemnda) — апелляция бесплатна. При апелляции важно предоставить конкретные доказательства, опровергающие выявленные несоответствия.</p><p>Также можно <strong>подать новую заявку</strong> с более полным пакетом документов. Если ситуация сложная — консультация с иммиграционным адвокатом оправдана.</p>'
      }
    ],
    faq: [
      { q: 'Правда, что есть «4-летнее требование» против фиктивных браков?', a: 'Это не совсем так. Есть правило, что при определённых обстоятельствах принимающая сторона должна прожить в Норвегии 4 года до того, как может спонсировать семейную миграцию. Но это не «антификтивное» правило само по себе — это одно из условий для подачи.' },
      { q: 'Разница в возрасте 15+ лет — это автоматический красный флаг?', a: 'Большая разница в возрасте — один из сигналов, который UDI учитывает вместе с другими факторами. Сама по себе — не основание для отказа. Но в комбинации с коротким знакомством или противоречиями — усиливает подозрения.' },
      { q: 'Могут ли вызвать обоих партнёров на отдельные интервью?', a: 'Да. UDI может вызвать обоих на интервью в полицейский участок (politiet), проводить их отдельно и затем сравнивать ответы.' },
      { q: 'Что если я не хочу указывать некоторые детали — например, как познакомились?', a: 'Скрывать информацию в заявке не стоит — это воспринимается хуже, чем честный рассказ о нестандартной ситуации. Если знакомство было через приложение или с нюансами — лучше описать прямо и честно.' },
      { q: 'Нужен ли адвокат при обычной подаче, чтобы защититься от обвинений в фиктивности?', a: 'При стандартной подаче с полным пакетом документов и согласованными ответами адвокат необязателен. Адвокат полезен, если уже получили отказ или знаете, что ситуация нестандартная.' }
    ],
    warn: '<p>Большинство отказов, связанных с фиктивностью, происходит из-за <strong>расхождения между ответами партнёров</strong> в анкетах — а не из-за каких-то реальных проблем с отношениями. Перед подачей обсудите ключевые даты и факты вместе, чтобы не было неожиданных противоречий.</p>',
    tip: '<p>Сразу после отправки своей формы на udi.no сделайте скриншоты всех ответов. Когда через несколько месяцев принимающая сторона получит свою анкету — у вас будет точная копия ваших ответов, от которой можно отталкиваться.</p>',
    sources: [
      { label: 'UDI: Family immigration with a Norwegian or Nordic citizen', url: 'https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-norwegian-or-nordic-citizen/' },
      { label: 'UDI: 24-year requirement', url: 'https://www.udi.no/en/word-definitions/24-year-requirement/' }
    ]
  }

};

// =====================================================
// THEMES — Telegram theme palettes (без изменений)
// =====================================================
window.THEMES = {
  ios_light: {
    bg: '#EFEFF4', secondary_bg: '#FFFFFF', section_bg: '#FFFFFF', tertiary_bg: '#F2F2F7',
    text: '#000000', hint: '#8E8E93', subtitle: '#8E8E93', section_header: '#6D6D72',
    button: '#007AFF', button_text: '#FFFFFF', accent_text: '#007AFF', link: '#007AFF',
    destructive: '#FF3B30', header_bg: '#F8F8F8', divider: 'rgba(60,60,67,0.12)',
    plate_shadow: '0 0 0 0.5px rgba(0,0,0,0.04)'
  },
  ios_dark: {
    bg: '#000000', secondary_bg: '#1C1C1E', section_bg: '#1C1C1E', tertiary_bg: '#2C2C2E',
    text: '#FFFFFF', hint: '#8E8E93', subtitle: '#8E8E93', section_header: '#8E8E93',
    button: '#007AFF', button_text: '#FFFFFF', accent_text: '#0A84FF', link: '#0A84FF',
    destructive: '#FF453A', header_bg: '#1C1C1E', divider: 'rgba(84,84,88,0.34)',
    plate_shadow: 'none'
  },
  android_light: {
    bg: '#F1F2F4', secondary_bg: '#FFFFFF', section_bg: '#FFFFFF', tertiary_bg: '#E8EAEC',
    text: '#000000', hint: '#707579', subtitle: '#707579', section_header: '#3390EC',
    button: '#3390EC', button_text: '#FFFFFF', accent_text: '#3390EC', link: '#3390EC',
    destructive: '#E53935', header_bg: '#3390EC', header_text: '#FFFFFF',
    divider: 'rgba(0,0,0,0.08)', plate_shadow: 'none'
  },
  android_dark: {
    bg: '#0F0F0F', secondary_bg: '#1F1F1F', section_bg: '#1F1F1F', tertiary_bg: '#2A2A2A',
    text: '#FFFFFF', hint: '#AAAAAA', subtitle: '#AAAAAA', section_header: '#8AB4F7',
    button: '#8AB4F7', button_text: '#FFFFFF', accent_text: '#8AB4F7', link: '#8AB4F7',
    destructive: '#FF6B6B', header_bg: '#212121', header_text: '#FFFFFF',
    divider: 'rgba(255,255,255,0.08)', plate_shadow: 'none'
  }
};

window.ACCENTS = {
  blue: { ios: '#007AFF', androidLight: '#3390EC', androidDark: '#8AB4F7' },
  teal: { ios: '#5AC8FA', androidLight: '#2AABEE', androidDark: '#7AC8F7' },
  green: { ios: '#34C759', androidLight: '#4CAF50', androidDark: '#81C995' },
  violet: { ios: '#AF52DE', androidLight: '#8E44AD', androidDark: '#C58AF9' },
  orange: { ios: '#FF9500', androidLight: '#F57C00', androidDark: '#FFB74D' }
};
