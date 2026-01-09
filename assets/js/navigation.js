// 슬라이드 네비게이션 스크립트
(function() {
    'use strict';

    // 현재 슬라이드 번호 추출
    function getCurrentSlideNumber() {
        const path = window.location.pathname;
        const match = path.match(/(\d+)-[^/]+\.html$/);
        return match ? parseInt(match[1], 10) : null;
    }

    // 슬라이드 파일명 배열
    const slides = [
        '01-cover.html',
        '02-agenda.html',
        '03-overview.html',
        '04-goals-kpi.html',
        '05-key-features.html',
        '06-business-requirements.html',
        '07-non-functional-requirements.html',
        '08-system-architecture.html',
        '09-microservices.html',
        '10-event-driven.html',
        '11-tech-stack.html',
        '12-service-features.html',
        '13-database-design.html',
        '14-aws-infrastructure.html',
        '15-cicd-pipeline.html',
        '16-automation-scalability.html',
        '17-security-observability.html',
        '18-achievements-future.html',
        '19-qa.html'
    ];

    // 슬라이드 이동 함수
    function navigateToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > slides.length) {
            return;
        }
        const slideFile = slides[slideNumber - 1];
        const currentPath = window.location.pathname;
        const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
        window.location.href = basePath + '/' + slideFile;
    }

    // 이전 슬라이드로 이동
    function goToPreviousSlide() {
        const current = getCurrentSlideNumber();
        if (current && current > 1) {
            navigateToSlide(current - 1);
        }
    }

    // 다음 슬라이드로 이동
    function goToNextSlide() {
        const current = getCurrentSlideNumber();
        if (current && current < slides.length) {
            navigateToSlide(current + 1);
        }
    }

    // 첫 번째 슬라이드로 이동
    function goToFirstSlide() {
        navigateToSlide(1);
    }

    // 마지막 슬라이드로 이동
    function goToLastSlide() {
        navigateToSlide(slides.length);
    }

    // 목차로 돌아가기
    function goToIndex() {
        const currentPath = window.location.pathname;
        const basePath = currentPath.substring(0, currentPath.lastIndexOf('/slides'));
        window.location.href = basePath + '/index.html';
    }

    // 키보드 이벤트 리스너
    document.addEventListener('keydown', function(event) {
        // 입력 필드에 포커스가 있을 때는 네비게이션 무시
        const activeElement = document.activeElement;
        if (activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
        )) {
            return;
        }

        switch(event.key) {
            case 'ArrowLeft':
            case 'PageUp':
                event.preventDefault();
                goToPreviousSlide();
                break;
            case 'ArrowRight':
            case ' ':
            case 'PageDown':
                event.preventDefault();
                goToNextSlide();
                break;
            case 'Home':
                event.preventDefault();
                goToFirstSlide();
                break;
            case 'End':
                event.preventDefault();
                goToLastSlide();
                break;
            case 'Escape':
                event.preventDefault();
                goToIndex();
                break;
        }
    });

    // 전역 함수로 노출 (버튼에서 사용)
    window.navigateToSlide = navigateToSlide;
    window.goToPreviousSlide = goToPreviousSlide;
    window.goToNextSlide = goToNextSlide;
    window.goToFirstSlide = goToFirstSlide;
    window.goToLastSlide = goToLastSlide;
    window.goToIndex = goToIndex;
    window.getCurrentSlideNumber = getCurrentSlideNumber;
    window.getTotalSlides = function() { return slides.length; };
})();

