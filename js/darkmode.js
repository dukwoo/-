let flag = false; //var 안쓰고, let, const ?
const head = document.getElementsByTagName('head')[0]; //head가 여러 개

const dark_css = document.createElement('link'); //만든 후에 부모객체에 추가해야만 나타남.
dark_css.rel = 'stylesheet';
dark_css.type = 'text/css';
dark_css.href = 'css+img/darkmode.css'; //스타일 파일 이름. '/' 경로를 의미.

// 함수 생성.
const goDark = () => {
	flag = true; //여기선 true, 여기 밖에선 false로 
	head.appendChild(dark_css); //head 부모 객체에 link 자식 객체 추가. 
}

// [== const goDark = function() { } ] 함수 생성

const goLight = () => {
	flag = false;
	if (head.lastChild === dark_css) {
		head.removeChild(dark_css);
	}
}

const isDarkMode = () => {
	(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? goDark() : goLight(); 
	// 조건 연산 => 조건문 ? true일 경우 실행 : false일 경우 실행.
}

const switchMode = () => flag ? goLight() : goDark();

isDarkMode();
