document.addEventListener('DOMContentLoaded', function() {
  
  // 1. 상단 네비게이션 메뉴 관련 기능
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
      showSection('all-section');
    });
  }

  // 2. 신규 영웅 데이터 배열 ('신규영웅/' 폴더 경로 적용)
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

  // 3. 신규 영웅 카드 출력 함수 (높이 및 세로선 수평 통일)
  function renderNewHeroes() {
    const heroContainer = document.getElementById('new-hero-container');
    if (!heroContainer) return;

    heroContainer.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${newHeroesData.map(hero => `
          <div class="bg-slate-900 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-xl h-full">
            
            <!-- 상단 헤더 영역 -->
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">${hero.type}</span>
                <span class="text-xs font-bold bg-amber-500 text-slate-950 px-2.5 py-1 rounded-lg border border-amber-400">${hero.badge}</span>
              </div>

              <h2 class="text-lg font-bold text-slate-100 mb-2 h-14 flex items-center leading-snug line-clamp-2">
                ${hero.name}
              </h2>
              
              <div class="flex items-center gap-1.5 text-[11px] text-amber-300 bg-amber-500/10 px-2.5 py-1.5 rounded-lg border border-amber-500/20 mb-4 w-full justify-center">
                <i class="fa-regular fa-clock shrink-0"></i>
                <span class="font-medium truncate">${hero.period}</span>
              </div>
            </div>

            <!-- 메인 일러스트 이미지 -->
            <div class="bg-white rounded-xl p-2 border border-slate-700 mb-4 flex justify-center items-center overflow-hidden cursor-zoom-in group h-80" onclick="openModal('${hero.mainImg}')">
              <img src="${hero.mainImg}" alt="${hero.name}" class="w-full h-full object-contain mx-auto group-hover:scale-105 transition-transform" onerror="this.style.display='none'">
            </div>

            <!-- 핵심 카드 요약 -->
            <p class="text-xs text-slate-300 bg-slate-800/80 p-3 rounded-lg border border-slate-700/80 leading-relaxed h-20 overflow-y-auto">
              💡 ${hero.summary}
            </p>

          </div>
        `).join('')}
      </div>
    `;
  }

  // 4. 원본 이미지 확대 라이트박스 팝업
  window.openModal = function(src) {
    let modal = document.getElementById('img-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'img-modal';
      modal.className = 'fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out hidden';
      modal.onclick = () => modal.classList.add('hidden');
      modal.innerHTML = `
        <div class="relative max-w-5xl max-h-[90vh] overflow-auto rounded-xl bg-white p-2">
          <img id="modal-img" src="" class="w-full h-auto object-contain mx-auto">
          <button class="absolute top-3 right-3 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow">&times;</button>
        </div>
      `;
      document.body.appendChild(modal);
    }
    document.getElementById('modal-img').src = src;
    modal.classList.remove('hidden');
  };

 // 2. 마수전 데이터 ('마수전/' 폴더 경로 및 추천영웅 티어표 이미지 적용)
  const beastData = {
    hresvelgr: {
      name: "🦅 흐레스벨그 마수전",
      imgSrc: "흐레스벨그.png",
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수", "4층: 초월마수"],
      recommendDeck: "토르 / 메겔다 / UR 멜리오다스 / 얼티밋 이스탈린 / 다이앤",
      // 가로로 나열될 추천 영웅 아이콘 목록
      recommendHeroes: [
        { name: "티르", img: "영웅/티르.png" },
        { name: "메겔다", img: "영웅/메겔다.png" },
        { name: "토르", img: "영웅/토르.png" },
        { name: "UR 멜리오다스", img: "영웅/멜리오다스.png" }
      ],
      summary: `[기본 설정 및 특성]
• 악연 효과: 파티에 토르 편성 시 토르 치명 피해 30% 증가, 아군 영웅 기본 능력치 10% 증가
• 마수 특징: 디버프 면역 / 아군의 생명력을 제외한 생명 관련 능력 40% 감소

[1층 (마수)]
• 3페이즈: 마수 50% 브레이크
• 4페이즈: 마수 50% 브레이크, 방어력 및 인내율 크게 증가`
    },
    eikthyrnir: {
      name: "🦌 에이크쉬르니르 마수전",
      imgSrc: "마수전/에이크쉬르니르.png",
      tierImg: "마수전/에이크쉬르니르-추천영웅.jpg",
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수", "4층: 초월마수"],
      recommendDeck: "요르문간드 / 프레이 / 빛엘리 / 다이앤",
      summary: "• 속성 순환 사이클 (근➔체➔속) 관리 및 요르문간드 성물 활용"
    },
    skollhati: {
      name: "🐺 스콜과 하티 마수전",
      imgSrc: "마수전/스콜과 하티.png",
      tierImg: "마수전/스콜과 하티-추천영웅.jpg",
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수", "4층: 초월마수"],
      recommendDeck: "도나르 / 탐나는 로키 트라브 / 프레이 / 마엘",
      summary: "• 두 마리 게이지 균등 감소 및 햇빛/달빛 버프 교대 관리"
    },
    nidhoggr: {
      name: "🐍 니드호그 마수전",
      imgSrc: "마수전/니드호그.png",
      // 니드호그는 종족별 이미지가 여러 개이므로 대표 이미지 지정 (필요시 교체)
      tierImg: "마수전/니드호그-추천영웅.여신.jpg", 
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수"],
      recommendDeck: "마엘 / 빛엘리 / 프레이야 / 마르가렛",
      summary: "• 자세 해제 스킬 필수 사용 및 단계별 불사 게이지 조절"
    },
    ratatoskr: {
      name: "🐿️ 라타토스크 마수전",
      imgSrc: "마수전/라타토스크.png",
      tierImg: "마수전/라타토스크-추천영웅.jpg",
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수"],
      recommendDeck: "발렌티 / 신각 킹 / 다이앤 / 엘리자베스",
      summary: "• 통나무 위치별 디버프 관리 및 특수 기믹 파훼"
    },
    surtr: {
      name: "🔥 수르트 & 태초의 불꽃",
      imgSrc: "마수전/수르트&태초의 불꽃.png",
      tierImg: "", // 수르트는 이미지 업로드 시 파일명 입력
      stages: ["1층: 마수", "2층: 대마수", "3층: 초마수"],
      recommendDeck: "불구대천 멜리오다스 / 신각킹 / 여멜 / 여반",
      summary: "• 자세 해제 및 과열 스택 해제 위주 속전속결"
    }
  };

 // 1. 마수전 공략 출력 함수 (추천 덱 텍스트 제거)
  function renderBeastInfo(beastKey) {
    const data = beastData[beastKey];
    if (!data) return;

    const stageBadges = data.stages.map(stage => {
      const isTranscendent = stage.includes("초월마수");
      const badgeStyle = isTranscendent 
        ? "bg-amber-500/20 text-amber-400 border-amber-500/50" 
        : "bg-slate-800 text-slate-300 border-slate-700";
      return `<span class="border text-xs font-semibold px-2.5 py-1 rounded-md ${badgeStyle}">${stage}</span>`;
    }).join(' ');

    // 티어표 이미지 영역
    const tierImgHtml = data.tierImg ? `
      <div class="mt-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
        <span class="text-xs text-amber-400 font-bold block mb-3 flex items-center gap-1.5">
          <i class="fa-solid fa-list-check"></i> 마수전 추천 영웅 티어표
        </span>
        <div class="bg-white rounded-lg p-2 border border-slate-600 cursor-zoom-in overflow-hidden flex justify-center group" onclick="openModal('${data.tierImg}')">
          <img src="${data.tierImg}" alt="${data.name} 추천 영웅" class="max-h-[450px] w-auto object-contain mx-auto group-hover:scale-102 transition-transform" onerror="this.parentElement.style.display='none'">
        </div>
        <p class="text-[11px] text-slate-400 text-center mt-2">* 이미지를 클릭하시면 원본으로 크게 보실 수 있습니다.</p>
      </div>
    ` : '';

    pveContent.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-5 border-b border-slate-700 pb-4">
        <img src="${data.imgSrc}" alt="${data.name}" class="w-16 h-16 object-contain rounded-xl bg-slate-800 p-1 border border-slate-700" onerror="this.style.display='none'">
        <div>
          <h3 class="text-xl font-bold text-amber-400 mb-2">${data.name}</h3>
          <div class="flex flex-wrap gap-1.5">${stageBadges}</div>
        </div>
      </div>

      <div class="text-sm text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-lg border border-slate-800 mb-4">
        <span class="text-xs text-slate-400 font-bold block mb-2"><i class="fa-solid fa-circle-info"></i> 핵심 공략 요점</span>
        <p class="whitespace-pre-line">${data.summary}</p>
      </div>

      ${tierImgHtml}
    `;
  }

  // 6. 기사단 보스전 데이터 ('기사단 보스전/' 폴더 경로 적용)
  const guildData = {
    akumu: {
      name: "👹 아쿠무 (기사단 보스)",
      imgSrc: "기사단 보스전/아쿠무.png",
      recommendDeck: "고서 / 젤드리스 / 지왕 멜리오다스 / 에스타로사",
      summary: "• 디버프 미션 및 스킬 순서 조절을 통한 고득점 산출"
    },
    kelak: {
      name: "⚔️ 켈라크 (기사단 보스)",
      imgSrc: "기사단 보스전/켈라크.png",
      recommendDeck: "더 윈 메이저 / 빛엘리 / 고서 / 프레이",
      summary: "• 딜 버프 중첩 타이밍을 노려 누적 폭딜"
    },
    eineck: {
      name: "🛡️ 에이네크 (기사단 보스)",
      imgSrc: "기사단 보스전/에이네크.png",
      recommendDeck: "체력 속성 중심 극딜 조합",
      summary: "• 방어력 감소 디버프 기반 타격"
    },
    belgius: {
      name: "⚡ 베르기우스 (기사단 보스)",
      imgSrc: "기사단 보스전/베르기우스.png",
      recommendDeck: "자세 해제 및 버프 해제 조합",
      summary: "• 베르기우스의 버프 및 반격 자세 해제"
    },
    canopus: {
      name: "🌟 카노푸스 (기사단 보스)",
      imgSrc: "기사단 보스전/카노푸스.png",
      recommendDeck: "신각 킹 / 빛엘리 / 마엘 / 고서",
      summary: "• 광역 스킬 중심의 신성 버프 해제 관리"
    }
  };

  // 7. 기타 PVE 데이터 ('마신왕전/', '최고신전/' 폴더 경로 적용)
  const pveOtherData = {
    demonking: {
      title: "👑 마신왕전 공략",
      imgSrc: "마신왕전/마신왕.png",
      deck: "지왕 멜리오다스 / 빛엘리 / 고서 / 젤드리스",
      summary: "마신왕의 규율 스킬 조건을 맞춰 패시브 스택을 무력화하는 것이 핵심입니다."
    },
    supreme: {
      title: "✨ 최고신전 공략",
      imgSrc: "최고신전/boss.png",
      deck: "최고신 전용 특수 패시브 대응 조합",
      summary: "은총 버프 해제 타이밍 및 궁극기 차단 패턴 대응이 핵심입니다."
    }
  };

  const pveMainTabs = document.querySelectorAll('.pve-main-tab');
  const beastSubMenu = document.getElementById('beast-sub-menu');
  const guildSubMenu = document.getElementById('guild-sub-menu');
  const beastTabs = document.querySelectorAll('.beast-tab');
  const guildTabs = document.querySelectorAll('.guild-tab');
  const pveContent = document.getElementById('pve-content');

  // 2. 기사단 보스전 출력 함수 (추천 덱 텍스트 제거)
  function renderGuildInfo(guildKey) {
    const data = guildData[guildKey];
    if (!data) return;

    pveContent.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-5 border-b border-slate-700 pb-4">
        <img src="${data.imgSrc}" alt="${data.name}" class="w-16 h-16 object-contain rounded-xl bg-slate-800 p-1 border border-slate-700" onerror="this.style.display='none'">
        <div>
          <h3 class="text-xl font-bold text-amber-400">${data.name}</h3>
        </div>
      </div>

      <div class="text-sm text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-lg border border-slate-800">
        <span class="text-xs text-slate-400 font-bold block mb-2"><i class="fa-solid fa-circle-info"></i> 핵심 공략 요점</span>
        <p class="whitespace-pre-line">${data.summary}</p>
      </div>
    `;
  }

  // 3. 기타 PVE 출력 함수 (추천 덱 텍스트 제거)
  function renderOtherPveInfo(pveKey) {
    const data = pveOtherData[pveKey];
    if (!data) return;

    pveContent.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-5 border-b border-slate-700 pb-4">
        <img src="${data.imgSrc}" alt="${data.title}" class="w-16 h-16 object-contain rounded-xl bg-slate-800 p-1 border border-slate-700" onerror="this.style.display='none'">
        <div>
          <h3 class="text-xl font-bold text-amber-400">${data.title}</h3>
        </div>
      </div>

      <div class="text-sm text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-lg border border-slate-800">
        <span class="text-xs text-slate-400 font-bold block mb-2"><i class="fa-solid fa-circle-info"></i> 핵심 공략 요점</span>
        <p>${data.summary}</p>
      </div>
    `;
  }

  // PVE 메인 카테고리 탭 클릭 이벤트
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
        beastSubMenu.classList.remove('hidden');
        guildSubMenu.classList.add('hidden');
        renderBeastInfo('hresvelgr');
        beastTabs.forEach(t => {
          t.classList.remove('bg-amber-500', 'text-slate-950');
          t.classList.add('bg-slate-700', 'text-slate-200');
        });
        beastTabs[0].classList.remove('bg-slate-700', 'text-slate-200');
        beastTabs[0].classList.add('bg-amber-500', 'text-slate-950');
      } else if (pveKey === 'guild') {
        beastSubMenu.classList.add('hidden');
        guildSubMenu.classList.remove('hidden');
        renderGuildInfo('akumu');
        guildTabs.forEach(t => {
          t.classList.remove('bg-amber-500', 'text-slate-950');
          t.classList.add('bg-slate-700', 'text-slate-200');
        });
        guildTabs[0].classList.remove('bg-slate-700', 'text-slate-200');
        guildTabs[0].classList.add('bg-amber-500', 'text-slate-950');
      } else {
        beastSubMenu.classList.add('hidden');
        guildSubMenu.classList.add('hidden');
        renderOtherPveInfo(pveKey);
      }
    });
  });

  // 마수전 세부 탭 클릭 이벤트
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

  // 기사단 세부 탭 클릭 이벤트
  guildTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      guildTabs.forEach(t => {
        t.classList.remove('bg-amber-500', 'text-slate-950');
        t.classList.add('bg-slate-700', 'text-slate-200');
      });
      this.classList.remove('bg-slate-700', 'text-slate-200');
      this.classList.add('bg-amber-500', 'text-slate-950');

      renderGuildInfo(this.getAttribute('data-guild'));
    });
  });

  // 초기 시작 렌더링
  renderNewHeroes();
  renderBeastInfo('hresvelgr');

});
