# Passit Presentation

정가 기반 안전한 티켓 중개 플랫폼 - 프로젝트 발표 자료

## 📁 프로젝트 구조

```
presentation/
├── index.html              # 메인 인덱스 (목차)
├── assets/
│   ├── css/
│   │   └── common.css     # 공통 스타일
│   └── js/
│       └── navigation.js  # 키보드 네비게이션
└── slides/
    ├── 01-cover.html
    ├── 02-agenda.html
    ├── 03-overview.html
    ├── 04-goals-kpi.html
    ├── 05-key-features.html
    ├── 06-business-requirements.html
    ├── 07-non-functional-requirements.html
    ├── 08-system-architecture.html
    ├── 09-microservices.html
    ├── 10-event-driven.html
    ├── 11-tech-stack.html
    ├── 12-service-features.html
    ├── 13-database-design.html
    ├── 14-aws-infrastructure.html
    ├── 15-cicd-pipeline.html
    ├── 16-automation-scalability.html
    ├── 17-security-observability.html
    ├── 18-achievements-future.html
    └── 19-qa.html
```

## 🚀 사용 방법

### 1. 로컬에서 실행

```bash
# Python 간단한 HTTP 서버
python3 -m http.server 8000

# Node.js http-server (설치 필요)
npx http-server -p 8000

# VS Code Live Server 확장 사용
```

브라우저에서 `http://localhost:8000` 접속

### 2. 직접 파일 열기

`index.html` 파일을 브라우저에서 직접 열기

### 3. Netlify로 배포

#### 방법 1: Netlify CLI 사용

```bash
# Netlify CLI 설치 (전역)
npm install -g netlify-cli

# Netlify 로그인
netlify login

# 배포
netlify deploy --prod
```

#### 방법 2: Netlify 웹 인터페이스 사용

1. [Netlify](https://www.netlify.com/)에 가입/로그인
2. "Add new site" → "Deploy manually" 클릭
3. 프로젝트 폴더를 드래그 앤 드롭하거나 zip 파일 업로드
4. 배포 완료!

#### 방법 3: Git 연동 (자동 배포)

1. GitHub/GitLab/Bitbucket에 프로젝트 푸시
2. Netlify에서 "Add new site" → "Import an existing project" 선택
3. 저장소 연결
4. 빌드 설정:
   - **Base directory**: (비워두기)
   - **Build command**: (비워두기 - 빌드 불필요)
   - **Publish directory**: `.` (루트 디렉토리)
5. "Deploy site" 클릭

배포 후 자동으로 URL이 생성되며, 이후 Git에 푸시할 때마다 자동으로 재배포됩니다.

## ⌨️ 키보드 네비게이션

- **← (왼쪽 화살표)** : 이전 슬라이드
- **→ (오른쪽 화살표)** : 다음 슬라이드
- **Space** : 다음 슬라이드
- **PageUp** : 이전 슬라이드
- **PageDown** : 다음 슬라이드
- **Home** : 첫 번째 슬라이드
- **End** : 마지막 슬라이드
- **ESC** : 목차로 돌아가기

## 🎯 주요 기능

- ✅ **19개 슬라이드** 분리된 HTML 파일
- ✅ **키보드 네비게이션** 지원
- ✅ **공통 스타일** CSS 분리
- ✅ **반응형 디자인** (1280x720 최적화)
- ✅ **자동 페이지 번호** 표시
- ✅ **네비게이션 버튼** (홈, 이전, 다음)

## 📋 슬라이드 목록

1. **Cover** - Passit 프로젝트 표지
2. **Agenda** - 발표 순서
3. **프로젝트 개요** - 목표 및 주요 특징
4. **목표 및 KPI** - 프로젝트 목표 및 성공 지표
5. **주요 특징** - 핵심 기능 하이라이트
6. **비즈니스 요구사항** - 핵심 기능 명세
7. **비기능 요구사항** - 고가용성, 확장성, 보안
8. **시스템 아키텍처** - 전체 구조 개요
9. **마이크로서비스** - 서비스 구성 및 책임
10. **이벤트 기반 아키텍처** - 비동기 통신 흐름
11. **기술 스택** - Backend, Data, DevOps
12. **서비스별 기능** - 주요 개발 내용
13. **데이터베이스 설계** - ERD 및 스키마
14. **AWS 인프라** - 클라우드 구성
15. **CI/CD 파이프라인** - 배포 전략 및 GitOps
16. **자동화 및 확장성** - 오토스케일링, 무중단 배포
17. **보안 및 관찰성** - 네트워크, 데이터, 모니터링
18. **성과 및 향후 계획** - 달성 내용과 로드맵
19. **Q&A** - 질의 응답

## 🎨 커스터마이징

### 스타일 수정

`assets/css/common.css` 파일에서 공통 스타일 수정 가능

### 네비게이션 수정

`assets/js/navigation.js` 파일에서 키보드 단축키 및 동작 수정 가능

## 💡 팁

- 프레젠테이션 모드: 브라우저 전체화면 (F11)
- 개발자 도구로 실시간 스타일 조정 가능
- 슬라이드별 독립적인 HTML로 개별 수정 가능

## 📝 참고사항

- **슬라이드 13-19번**은 간소화된 버전입니다.
- 필요시 원본 HTML 내용을 참고하여 상세 내용 추가 가능
- 모든 외부 리소스는 CDN을 통해 로드됩니다 (인터넷 연결 필요)

## 🔧 기술 스택

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (Vanilla)
- Font Awesome Icons
- Noto Sans KR Font

---

**Passit Team** | 2026.01
