/* eslint-disable @next/next/no-img-element -- Static app screenshots are deployed as pre-optimized Sites assets. */

const downloadUrl =
  "https://github.com/Pure727/CADS2026_web/releases/latest/download/ROUTINE-v1.0-20260729.apk";

const features = [
  {
    marker: "학교",
    title: "나이스 시간표를 그대로",
    description:
      "학교와 학년, 반을 선택하면 나이스 시간표를 불러옵니다. 직접 만든 시간표와 함께 여러 개를 관리할 수도 있어요.",
  },
  {
    marker: "지금",
    title: "현재 수업을 놓치지 않게",
    description:
      "진행 중인 수업과 쉬는 시간 뒤 다음 수업을 상태바에서 바로 확인합니다. 방학 일정이 있는 날에는 알림을 자동으로 쉴 수 있어요.",
  },
  {
    marker: "달력",
    title: "학교와 나의 일정을 한곳에",
    description:
      "학사일정과 개인 일정을 월간 캘린더에 모아 보고, 원하는 날짜에 맞춰 미리 알림을 받을 수 있습니다.",
  },
  {
    marker: "백업",
    title: "바뀐 휴대폰에서도 그대로",
    description:
      "시간표와 일정을 클라우드에 안전하게 백업하고 복원합니다. 자동 백업을 켜두면 변경한 내용도 챙겨 보관해요.",
  },
];

const screenshots = [
  {
    src: "/screenshots/home.png",
    alt: "ROUTINE 홈 화면",
    label: "오늘의 흐름",
    caption: "현재 수업, TODO와 자주 쓰는 기능을 한눈에",
  },
  {
    src: "/screenshots/timetable.png",
    alt: "창동고 3학년 11반 ROUTINE 시간표 상세 화면",
    label: "3학년 11반 시간표",
    caption: "나이스 시간표를 불러오고 직접 편집",
  },
  {
    src: "/screenshots/calendar.png",
    alt: "ROUTINE 월간 캘린더 화면",
    label: "통합 캘린더",
    caption: "학교별 학사일정과 개인 일정을 함께 관리",
  },
  {
    src: "/screenshots/notifications.png",
    alt: "ROUTINE 방학 알림 설정 화면",
    label: "스마트 알림",
    caption: "방학에는 수업 알림을 알아서 쉬기",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ROUTINE 홈으로 이동">
          <img src="/app-icon.png" alt="" width="44" height="44" />
          <span>ROUTINE</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#features">기능</a>
          <a href="#screenshots">화면</a>
          <a href="#install">설치 안내</a>
        </nav>
        <a className="header-download" href={downloadUrl}>
          APK 다운로드
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            학생을 위한 통합 스케줄러
          </p>
          <h1>ROUTINE</h1>
          <p className="hero-description">
            시간표, 학사일정, 나의 계획까지 흩어진 학교생활을 하나로.
            <br className="desktop-only" /> 매일 확인하기 편한 루틴을 만들어
            보세요.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={downloadUrl}>
              <span aria-hidden="true">↓</span>
              Android용 다운로드
            </a>
            <a className="secondary-button" href="#screenshots">
              앱 화면 보기
            </a>
          </div>
          <div className="release-meta" aria-label="앱 지원 정보">
            <span>Android 7.0+</span>
            <span>버전 1.0</span>
            <span>2026.07.29</span>
          </div>
          <p className="beta-notice">
            현재 파일은 개발자 디버그 서명의 테스트 배포판입니다.
          </p>
        </div>

        <div className="hero-visual" aria-label="ROUTINE 앱 홈 화면 미리보기">
          <div className="ambient-card ambient-card-top">
            <span>지금</span>
            <strong>수업 시간이 아니에요</strong>
            <small>다음 수업도 미리 확인해요</small>
          </div>
          <div className="phone phone-hero">
            <div className="phone-speaker" />
            <img src="/screenshots/home.png" alt="ROUTINE 앱 홈 화면" />
          </div>
          <div className="ambient-card ambient-card-bottom">
            <span className="mint-dot" />
            <div>
              <strong>오늘 일정 1개</strong>
              <small>기말고사 · 오전 9시 알림</small>
            </div>
          </div>
        </div>
      </section>

      <section className="now-strip" aria-label="ROUTINE 핵심 가치">
        <div className="now-icon" aria-hidden="true">
          지금
        </div>
        <div>
          <p>수업, 일정, 알림이 자연스럽게 이어지는 하루</p>
          <strong>학교생활의 다음 순간을 ROUTINE이 먼저 챙겨요.</strong>
        </div>
        <span className="now-arrow" aria-hidden="true">
          →
        </span>
      </section>

      <section className="section features-section" id="features">
        <div className="section-heading">
          <p className="section-kicker">ROUTINE이 해주는 일</p>
          <h2>필요한 순간에, 필요한 정보만</h2>
          <p>
            복잡한 설정 없이 학교생활에 꼭 필요한 기능을 차분하게
            모았습니다.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-marker">{feature.marker}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-story" aria-label="주요 기능 자세히 보기">
        <div className="story-row">
          <div className="story-copy">
            <span className="story-tag">시간표</span>
            <h2>학교 시간표를 불러오고, 나에게 맞게</h2>
            <p>
              학교 검색부터 반 선택까지 한 번에 연결됩니다. 불러온 수업을
              바꾸거나 빈 교시에 과목을 직접 추가해 나만의 시간표를 완성할 수
              있어요.
            </p>
            <ul>
              <li>여러 시간표 생성 및 관리</li>
              <li>나이스 고등학교 시간표 연동</li>
              <li>요일·교시별 수업 직접 편집</li>
            </ul>
          </div>
          <div className="story-phone-wrap lavender-glow">
            <div className="phone">
              <div className="phone-speaker" />
              <img
                src="/screenshots/timetable.png"
                alt="나이스에서 불러온 ROUTINE 시간표 화면"
              />
            </div>
          </div>
        </div>

        <div className="story-row story-row-reverse">
          <div className="story-copy">
            <span className="story-tag story-tag-mint">캘린더</span>
            <h2>학사일정과 나의 계획을 한 달에</h2>
            <p>
              시험, 방학 같은 학교 일정과 개인 일정을 같은 달력에서 확인하세요.
              일정마다 색을 고르고 당일 또는 원하는 날 전에 알림을 받을 수
              있습니다.
            </p>
            <ul>
              <li>나이스 학사일정 월별 가져오기</li>
              <li>하루·기간·시간 일정 지원</li>
              <li>일정별 색상과 미리 알림 설정</li>
            </ul>
          </div>
          <div className="story-phone-wrap mint-glow">
            <div className="phone">
              <div className="phone-speaker" />
              <img
                src="/screenshots/calendar.png"
                alt="학사일정과 개인 일정을 표시한 ROUTINE 캘린더"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section screenshots-section" id="screenshots">
        <div className="section-heading section-heading-left screen-heading">
          <p className="section-kicker">앱 화면</p>
          <p className="screen-lead">
            ROUTINE의 실제 화면을 그대로 확인해 보세요.
          </p>
        </div>

        <article className="responsive-showcase">
          <div className="responsive-showcase-copy">
            <span className="story-tag">반응형 UI</span>
            <h2>두 화면 모두에 자연스럽게 맞춰지는 UI</h2>
            <p>
              좁은 화면과 넓은 화면 어디에서든 ROUTINE의 정보 구조와 여백이
              화면 비율에 맞춰 자연스럽게 적용됩니다.
            </p>
            <div className="ratio-list" aria-label="지원 화면 유형">
              <span>좁은 화면</span>
              <span>넓은 화면</span>
              <span>반응형 레이아웃</span>
            </div>
          </div>
          <figure className="responsive-showcase-visual">
            <img
              src="/screenshots/responsive-ui-showcase.png"
              alt="갤럭시 Z Fold의 커버 화면과 펼친 화면에 적용된 ROUTINE 반응형 UI"
              loading="lazy"
            />
            <figcaption>
              갤럭시 Z Fold의 커버 화면과 펼친 화면을 활용한 적용 예시입니다.
            </figcaption>
          </figure>
        </article>
        <div className="screenshot-grid">
          {screenshots.map((screenshot) => (
            <figure className="screenshot-card" key={screenshot.label}>
              <div className="screenshot-frame">
                <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
              </div>
              <figcaption>
                <strong>{screenshot.label}</strong>
                <span>{screenshot.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section install-section" id="install">
        <div className="install-card">
          <div className="install-copy">
            <span className="story-tag">Android 설치</span>
            <h2>지금, 나만의 ROUTINE을 시작하세요</h2>
            <p>
              APK 파일을 내려받은 뒤 Android의 안내에 따라 설치하면 됩니다.
            </p>
            <a className="primary-button primary-button-light" href={downloadUrl}>
              <span aria-hidden="true">↓</span>
              ROUTINE v1.0 다운로드
            </a>
            <small>APK · 약 23.1MB · Android 7.0 이상</small>
          </div>
          <ol className="install-steps">
            <li>
              <span>1</span>
              <div>
                <strong>APK 다운로드</strong>
                <p>위 버튼을 눌러 설치 파일을 저장하세요.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>설치 허용</strong>
                <p>필요한 경우 브라우저의 ‘알 수 없는 앱 설치’를 허용하세요.</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>ROUTINE 실행</strong>
                <p>알림 권한을 허용하면 수업과 일정을 놓치지 않아요.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="trust-grid">
          <article>
            <span>권한</span>
            <h3>필요한 권한만 사용해요</h3>
            <p>
              학교 정보와 백업을 위한 인터넷, 수업·일정 안내를 위한 알림,
              재부팅 후 알림 복원을 위한 권한을 사용합니다.
            </p>
          </article>
          <article>
            <span>무결성</span>
            <h3>다운로드 파일을 확인하세요</h3>
            <p className="hash-label">SHA-256</p>
            <code>
              198E7DD3 C722BA0C 46F9DAF2 07569ED2 586473E0 19756176
              B1C5EAC3 1A0965A1
            </code>
          </article>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <img src="/app-icon.png" alt="" width="40" height="40" />
          <span>ROUTINE</span>
        </a>
        <p>학생의 하루를 더 단순하고 선명하게.</p>
        <div>
          <a href="https://github.com/Pure727/CADS2026_web">GitHub</a>
          <span>© 2026 ROUTINE</span>
        </div>
      </footer>
    </main>
  );
}
