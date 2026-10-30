document.addEventListener('DOMContentLoaded', function() {
  
  // 1. 상단 메뉴 및 페이지 전환 로직
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.content-section');
  const logoBtn = document.getElementById('logo-btn');

  function showSection(targetId) {
    sections.forEach(section => section.classList.add('hidden'));

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.remove('hidden');
    }

    navButtons.forEach(btn => {
      if (btn.getAttribute('data-target') === targetId) {
        btn.classList.add('text-amber-400', 'border-b-2', 'border-amber-400');
        btn.classList.remove('text-slate-300');
      } else {
        btn.classList.remove('text-amber-400', 'border-b-2', 'border-amber-400');
        btn.classList.add('text-slate-300');
      }
    });
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      showSection(this.getAttribute('data-target'));
    });
  });

  if (logoBtn) {
    logoBtn.addEventListener('click', function() {
      showSection('pickup-hero-section');
    });
  }


  // 2. 전체 픽업표 (픽업표/pickup.png) 렌더링 로직
  const pickupTableContent = document.getElementById('pickup-table-content');

  function renderPickupTable() {
    if (!pickupTableContent) return;

    pickupTableContent.innerHTML = `
      <p class="text-sm text-slate-300 mb-3 font-semibold">
        <i class="fa-solid fa-bell text-amber-400"></i> 전체 기간 추천 영웅 종합 픽업표입니다.
      </p>
      <div class="flex justify-center w-full">
        <img src="픽업표/pickup.png" alt="전체 픽업표" class="max-w-full h-auto rounded-lg border border-slate-700 shadow-lg" onerror="this.alt='이미지를 찾을 수 없습니다: 픽업표/pickup.png'">
      </div>
    `;
  }

  renderPickupTable();


  // 3. 신규 영웅 데이터 및 화면 출력 로직 ('신규영웅/' 폴더 경로)
  const newHeroesData = [
    {
      name: "【풍요의 여왕】 미의 여신 프레이야",
      type: "SSR / 속력 속성",
      badge: "신규 SSR 영웅",
      period: "10월 22일(목) 점검 후 ~ 11월 5일(목) 점검 전",
      mainImg: "신규영웅/프레이야.jpg",
      summary: "마수전 니드호그 등 고난도 PVE 콘텐츠에서 핵심 딜러 및 특수 기믹 파훼용으로 맹활약하는 캐릭터입니다."
    },
    {
      name: "【마음의 괴도단】 조커",
      type: "SSR / 어둠 속성",
      badge: "P5R 콜라보 SSR",
      period: "10월 29일(목) 점검 후 ~ 11월 12일(목) 점검 전",
      mainImg: "신규영웅/조커.jpg",
      summary: "P5R 콜라보 한정 SSR 영웅. 강력한 어둠 속성 딜러이자 페르소나 총공격 기믹을 활용한 핵심 한정 캐릭터입니다."
    },
    {
      name: "【마음의 괴도단】 바이올렛",
      type: "SSR / 근력 속성",
      badge: "P5R 콜라보 SSR",
      period: "10월 29일(목) 점검 후 ~ 11월 12일(목) 점검 전",
      mainImg: "신규영웅/바이올렛.jpg",
      summary: "P5R 콜라보 한정 SSR 영웅. 검술 및 급소 타격 위주의 높은 치명 딜링 성능을 보유한 서브 딜러입니다."
    },
    {
      name: "【마음의 괴도단】 퀸",
      type: "SSR / 속력 속성",
      badge: "P5R 콜라보 SSR",
      period: "10월 29일(목) 점검 후 ~ 11월 12일(목) 점검 전",
      mainImg: "신규영웅/퀸.jpg",
      summary: "P5R 콜라보 한정 SSR 영웅. 아군 보호 및 시너지 버프, 디버프 해제 기믹을 지닌 전투 지원형 캐릭터입니다."
    },
    {
      name: "【마음의 괴도단】 모나",
      type: "SR / 속력 속성",
      badge: "P5R 콜라보 이벤트 배포",
      period: "10월 29일(목) 점검 후 ~ 11월 12일(목) 점검 전",
      mainImg: "신규영웅/모나.jpg",
      summary: "P5R 콜라보 출석 및 이벤트 참여 시 100% 무료 배포되는 SR 영웅. 유용한 서포트 스킬셋을 갖추고 있습니다."
    }
  ];

  function renderNewHeroes() {
    const container = document.getElementById('new-heroes-container');
    if (!container) return;

    container.innerHTML = newHeroesData.map(hero => `
      <div class="bg-slate-900/80 border border-slate-700 rounded-lg p-4 flex flex-col sm:flex-row gap-4 items-center">
        <img src="${hero.mainImg}" alt="${hero.name}" class="w-24 h-32 object-cover rounded-md border border-slate-600" onerror="this.alt='이미지 업로드 대기중'">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[11px] px-2 py-0.5 rounded font-bold">${hero.badge}</span>
            <span class="text-xs text-slate-400">${hero.type}</span>
          </div>
          <h3 class="text-base font-bold text-slate-100 mb-1">${hero.name}</h3>
          <p class="text-xs text-amber-300/80 mb-2"><i class="fa-regular fa-clock"></i> ${hero.period}</p>
          <p class="text-xs text-slate-300 leading-relaxed">${hero.summary}</p>
        </div>
      </div>
    `).join('');
  }

  renderNewHeroes();


  // 4. 마수전 6종 데이터 ('마수전/영웅/' 폴더 경로)
  const beastData = {
    hresvelgr: {
      name: "🦅 흐레스벨그 마수전",
      imgSrc: "흐레스벨그.png",
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수", "4층: 초월마수"],
      recommendDeck: "토르 / 메겔다 / UR 멜리오다스 / 얼티밋 이스탈린 / 다이앤",
      recommendHeroes: [
        { name: "티르", img: "마수전/영웅/티르.png" },
        { name: "메겔다", img: "마수전/영웅/메겔다.png" },
        { name: "토르", img: "마수전/영웅/토르.png" },
        { name: "UR 멜리오다스", img: "마수전/영웅/멜리오다스.png" }
      ],
      summary: `[진행 규칙] 1~3층 Auto(소탕) 지원 / 4층 초월마수 무제한 도전 가능

[기본 설정 및 특성]
• 악연 효과: 파티에 토르 편성 시 토르 치명 피해 30% 증가, 아군 영웅 기본 능력치 10% 증가
• 마수 특징: 디버프 면역 / 아군의 생명력을 제외한 생명 관련 능력 40% 감소

[1층 (마수)]
• 3페이즈: 마수 50% 브레이크
• 4페이즈: 마수 50% 브레이크, 방어력 및 인내율 크게 증가

[2층 (대마수)]
• 1페이즈: 마수 50% 브레이크
• 2페이즈: 매 턴 강력한 전체기 사용(도발 중인 아군 존재 시 회피), 사망 시 방어력 100% 체력으로 부활

[3층 (초마수)]
• 1~2페이즈: 마수 50% 브레이크
• 3페이즈: 마수 35% 브레이크, 매 적군 턴마다 아군 스킬 타입 봉쇄 (자세 > 디버프 > 버프 > 공격 > 필살기)
• 4페이즈: 마수 35% 브레이크, 2턴마다 아군 공격력 40% 감소 & 공격스킬만 사용 가능 디버프 부여

[4층 (초월마수)]
• 1페이즈: 마수 20% 브레이크, 아군 디버프 1개당 마수 방어력 50% 증가
• 2페이즈: 마수 20% 브레이크, 랭크 2 이상 동일 랭크 스킬 3장 사용 시 [흐레스벨그의 가호] 부여 (가호 보유 시 주피 300% 증가 및 회복 불가 패턴 빗나감)
• 3페이즈: 마수 25% 브레이크, 불사가 8개 부여 (뇌격/낙뢰/증폭/강격 피격 시 1개 해제, 쇄도 피격 시 1개 증가), 치명타 미발생 시 마수 주피증 / 발생 시 2개 해제, 스킬 타입 순차 봉쇄
• 4페이즈: 마수 25% 브레이크, 치명타 여부에 따라 마수 주피증/해제, 마수 남은 체력 구간별 능력치 증가 & [흐레스벨그의 분노] 디버프 부여 (7개 중첩 시 500,000 피해)`
    },
    eikthyrnir: {
      name: "🦌 에이크쉬르니르 마수전",
      imgSrc: "에이크쉬르니르.png",
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수", "4층: 초월마수"],
      recommendDeck: "요르문간드 / 프레이 / 빛엘리 / 다이앤",
      summary: `[진행 규칙] 1~3층 Auto(소탕) 지원 / 4층 초월마수 무제한 도전 가능

[기본 설정 및 특성]
• 악연 효과: 파티에 요르문간드 편성 시 요르문간드 모든 능력치 10% 증가, 아군 영웅 기본 능력치 10% 증가
• 마수 특징: 디버프 및 반사 피해 면역 / 회피 무시 / 1~3층 아군 생명 제외 생명 관련 능력 40% 감소
• 속성 사이클: {근➔체➔속} or {체➔속➔근} or {속➔근➔체} 순 스킬 사용 (마수 자세 시 사이클 성공하면 자세 해제)
• 피해 고정: 피해 고정 적용 시 모든 피해를 1로 받음`
    },
    skollhati: {
      name: "🐺 스콜과 하티 마수전",
      imgSrc: "스콜과 하티.png",
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수", "4층: 초월마수"],
      recommendDeck: "도나르 / 탐나는 로키 트라브 / 프레이 / 마엘",
      summary: `[진행 규칙] 1~3층 Auto(소탕) 지원 / 4층 초월마수 무제한 도전 가능

[기본 설정 및 특성]
• 악연 효과: 파티에 도나르 편성 시 도나르 모든 능력치 20% 증가 및 각 페이즈 시작 시 아군 스킬 랭크 업
• 마수 구분: 하양(4층 노랑) = [스콜] / 검정 = [하티]
• 마수 특징: 디버프 면역 / 1~3층은 특이 기믹 없이 두 마리 체력 균등 관리 및 디버프 해제 위주 공략`
    },
    nidhoggr: {
      name: "🐍 니드호그 마수전",
      imgSrc: "니드호그.png",
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수"],
      recommendDeck: "마엘 / 빛엘리 / 프레이야 / 마르가렛",
      summary: `[진행 규칙] 1~3층 Auto(소탕) 지원

[기본 설정 및 특성]
• 패시브 특성: 아군의 생명력을 제외한 생명 관련 능력 40% 감소
• 핵심 요점: 자세 해제 스킬 필수 배치 / 각 층·페이즈별 불사게이지증감 스킬 및 약점 종류 숙지`
    },
    ratatoskr: {
      name: "🐿️ 라타토스크 마수전",
      imgSrc: "라타토스크.png",
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수"],
      recommendDeck: "발렌티 / 신각 킹 / 다이앤 / 엘리자베스",
      summary: `[진행 규칙] 1~3층 Auto(소탕) 지원

[기본 설정 및 특성]
• 패시브 특성: 아군의 생명 제외 생명 관련 능력 40% 감소 / 통나무 효과는 마수 위치 시 마수에도 적용
• 핵심 메커니즘: 디버프 종류 및 개수에 따른 마수의 통나무 위치 이동 / 디버프 면역 아군 존재 시 턴 시작/다음 페이즈 이동 때 아군 버프 해제`
    },
    surtr: {
      name: "🔥 수르트 & 태초의 불꽃",
      imgSrc: "수르트&태초의 불꽃.png",
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수"],
      recommendDeck: "불구대천 멜리오다스 / 신각킹 / 여멜 / 여반",
      summary: "• 스펠 오브 케나즈 및 레바테인 기믹 파훼. 자세 해제 및 과열 해제 스킬 관리."
    }
  };

  // 5. 기타 PVE 데이터 (마신왕전 / 최고신전)
  const pveOtherData = {
    demonking: {
      title: "👑 마신왕전 공략",
      imgSrc: "마신왕.png",
      deck: "지왕 멜리오다스 / 빛엘리 / 고서 / 젤드리스",
      summary: "마신왕의 와일드 카운트 기믹을 계산하여 카드 이동 및 연쇄 스킬 사용 타이밍을 맞추는 것이 핵심입니다."
    },
    supreme: {
      title: "✨ 최고신전 공략",
      imgSrc: "boss.png",
      deck: "최고신 전용 특수 패시브 대응 조합",
      summary: "은총 및 신성 버프 해제 타이밍과 궁극기 차단 패턴 관리가 공략의 핵심입니다."
    }
  };


  // 6. PVE 탭 전환 및 렌더링 로직
  const pveMainTabs = document.querySelectorAll('.pve-main-tab');
  const beastSubMenu = document.getElementById('beast-sub-menu');
  const beastTabs = document.querySelectorAll('.beast-tab');
  const pveContent = document.getElementById('pve-content');

  function renderBeastInfo(beastKey) {
    const data = beastData[beastKey];
    if (!data || !pveContent) return;

    const stageBadges = data.stages.map(stage => {
      const isTranscendent = stage.includes("초월마수");
      const badgeStyle = isTranscendent 
        ? "bg-amber-500/20 text-amber-400 border-amber-500/50" 
        : "bg-slate-800 text-slate-300 border-slate-700";
      return `<span class="border text-xs font-semibold px-2.5 py-1 rounded-md ${badgeStyle}">${stage}</span>`;
    }).join(' ');

    let heroIconsHtml = '';
    if (data.recommendHeroes && data.recommendHeroes.length > 0) {
      heroIconsHtml = `
        <div class="mt-3 pt-3 border-t border-slate-700/60">
          <span class="text-xs text-slate-400 font-bold block mb-2"><i class="fa-solid fa-shield-halved"></i> 추천 영웅 구성</span>
          <div class="flex flex-wrap items-center gap-3">
            ${data.recommendHeroes.map(hero => `
              <div class="flex flex-col items-center gap-1 group">
                <img src="${hero.img}" alt="${hero.name}" class="w-12 h-12 rounded-lg border border-slate-600 object-cover shadow-md transition-transform group-hover:scale-105" onerror="this.src='logo.png'">
                <span class="text-[11px] font-medium text-slate-300">${hero.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    pveContent.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-5 border-b border-slate-700 pb-4">
        <img src="${data.imgSrc}" alt="${data.name}" class="w-16 h-16 object-contain rounded-xl bg-slate-800 p-1 border border-slate-700" onerror="this.style.display='none'">
        <div>
          <h3 class="text-xl font-bold text-amber-400 mb-2">${data.name}</h3>
          <div class="flex flex-wrap gap-1.5">${stageBadges}</div>
        </div>
      </div>
      
      <div class="bg-slate-800 p-4 rounded-lg mb-4 border border-slate-700">
        <span class="text-xs text-amber-400 font-bold block mb-1"><i class="fa-solid fa-users"></i> 추천 덱 조합</span>
        <p class="text-sm font-semibold text-slate-200">${data.recommendDeck}</p>
        ${heroIconsHtml}
      </div>

      <div class="text-sm text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-lg border border-slate-800">
        <span class="text-xs text-slate-400 font-bold block mb-2"><i class="fa-solid fa-circle-info"></i> 핵심 공략 요점</span>
        <p class="whitespace-pre-line">${data.summary}</p>
      </div>
    `;
  }

  function renderOtherPveInfo(pveKey) {
    const data = pveOtherData[pveKey];
    if (!data || !pveContent) return;

    pveContent.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-5 border-b border-slate-700 pb-4">
        <img src="${data.imgSrc}" alt="${data.title}" class="w-16 h-16 object-contain rounded-xl bg-slate-800 p-1 border border-slate-700" onerror="this.style.display='none'">
        <div>
          <h3 class="text-xl font-bold text-amber-400">${data.title}</h3>
        </div>
      </div>

      <div class="bg-slate-800 p-4 rounded-lg mb-4 border border-slate-700">
        <span class="text-xs text-amber-400 font-bold block mb-1"><i class="fa-solid fa-users"></i> 추천 덱 조합</span>
        <p class="text-sm font-semibold text-slate-200">${data.deck}</p>
      </div>

      <div class="text-sm text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-lg border border-slate-800">
        <span class="text-xs text-slate-400 font-bold block mb-2"><i class="fa-solid fa-circle-info"></i> 핵심 공략 요점</span>
        <p>${data.summary}</p>
      </div>
    `;
  }

  pveMainTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      pveMainTabs.forEach(t => {
        t.classList.remove('bg-amber-500', 'text-slate-950');
        t.classList.add('bg-slate-700', 'text-slate-200');
      });
      this.classList.remove('bg-slate-700', 'text-slate-200');
      this.classList.add('bg-amber-500', 'text-slate-950');

      const pveKey = this.getAttribute('data-pve');

      if (pveKey === 'beast') {
        if (beastSubMenu) beastSubMenu.classList.remove('hidden');
        renderBeastInfo('hresvelgr');
        beastTabs.forEach(t => {
          t.classList.remove('bg-amber-500', 'text-slate-950');
          t.classList.add('bg-slate-700', 'text-slate-200');
        });
        if (beastTabs[0]) {
          beastTabs[0].classList.remove('bg-slate-700', 'text-slate-200');
          beastTabs[0].classList.add('bg-amber-500', 'text-slate-950');
        }
      } else {
        if (beastSubMenu) beastSubMenu.classList.add('hidden');
        renderOtherPveInfo(pveKey);
      }
    });
  });

  beastTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      beastTabs.forEach(t => {
        t.classList.remove('bg-amber-500', 'text-slate-950');
        t.classList.add('bg-slate-700', 'text-slate-200');
      });
      this.classList.remove('bg-slate-700', 'text-slate-200');
      this.classList.add('bg-amber-500', 'text-slate-950');

      renderBeastInfo(this.getAttribute('data-beast'));
    });
  });

  // 초기 상태 실행 (기본 마수전 렌더링)
  renderBeastInfo('hresvelgr');

});
