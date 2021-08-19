const url = 'https://dukwoo.github.io/personality-test'
const title = '회사 생활로 알아보는 나에게 어울리는 동물 테스트';
const hash = '%23동물 테스트 %23동물 성격 유형 %23회사 생활로 알아보는 동물 테스트'

const fb = () => {
	window.open("https://www.facebook.com/sharer/sharer.php?u=" + url + "&t=" + title + '' + hash,
		"facebooksharedialog","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
	return false;
}

const tw = () => { 
	let name = document.querySelector('.result').innerHTML; 
	//class="result"인 태그의 내용물을 name에 대입. 
	
	switch (name) {
		case '미어캣':
		case '영양':
		case '하마':
		case '기린':
		default:
			name+='입니다.';
	}

	window.open("https://twitter.com/intent/tweet?text=" + title + "%0A" + "저는" + name + "" + hash + "%0A" + url,
		"twittersharedialog","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
	return false;
}

const nv = () => {
	window.open("http://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title,
	"naversharedialog", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
	return false;
}

const band = () => {
	 window.open('https://band.us/plugin/share?url=' + url + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	return false;
}
