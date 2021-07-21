const url = new url('https://dukwoo.github.io/personality-test'); //(수정) 
const title = '회사 생활로 알아보는 나에게 어울리는 동물 테스트';
const hash = '%23동물 테스트 %23동물 성격 유형 %23회사 생활로 알아보는 동물 테스트'; //(수정)

const fb = () => {
	window.open("http://www.facebook.com/sharer/sharer.php?u=" + url + "&t=" + title + '' + hash,
		"facebooksharedialog","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
	return false;
}

const tw = () => { //(수정)
	let name = document.querySelector('.result').innerHTML; 
	//class="result"인 태그의 내용물을 name에 대입. 
	
	switch (name) {
		case '미어캣':
		case '영양':
		case '하마':
		case '기린':
		default:
			name+='입니다.';
			break;
	}

	window.open("https://twitter.com/intent/tweet?text=" + title + "%0A" + "저는" + name + "" + hash + "%0A" + url,
		"twittersharedialog","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
	return false;
}

const nv = () => {
	window.open("http://share.naver.com/web/shareView?url=https://dev-dain.github.io/10-things-test&title=\
		[%EC%9D%B4%EB%AF%B8%EC%A7%80%ED%85%8C%EC%8A%A4%ED%8A%B8]%20%EB%82%98%EB%A5%BC%20%EC%95%8C%EC%95%84%EB%B3%\
		B4%EB%8A%94%2010%EA%B0%80%EC%A7%80%20%EC%A7%88%EB%AC%B8" + url + "&title=" + title,
	"naversharedialog", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
	return false;
}

const band = () => {
	 window.open('https://band.us/plugin/share?url=' + url + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	return false;
}
