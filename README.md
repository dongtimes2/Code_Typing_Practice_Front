<div align="center" style="max-width: 100%;">
  <h1>Code Typing Practice</h1>
  <img width="300" style="max-width: 100%" src="https://github.com/user-attachments/assets/e06a175a-ed84-4007-8097-f302d9912c56"/><br/>
</div>

<hr/>
<div align="center" style="max-width: 100%;">
  
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
  | :---: | :---: | :---: | :---: |
  | 119.0 ~ latest | 119.0 ~ latest | 17.1 ~ latest |지원하나 제공하지 않음|
</div>
<hr />

### 참고

<details>
<summary>Electron을 제공하지 못하는 이유</summary>
<div>

&nbsp;  
Electron의 경우 빌드물을 정상적으로 배포하기 위해서는 code signing 인증 과정을 거쳐야 합니다.  
인증을 거치기 위해서는 인증 기관을 통해 인증서를 발급받아야 하는데, 발급에 필요한 비용이 최소 30만원으로 매우 비쌌기 때문에, 경제적인 이유로 인증 절차를 포기할 수 밖에 없었습니다.  
인증서 없이 빌드물을 배포할 경우, 운영체제 단에서 프로그램의 실행을 막거나 보안 경고를 띄우기 때문에, 결과적으로 배포는 지원하지 않기로 결정하였습니다.  

</div>
</details>

<details>
<summary>Electron 빌드물 실행 영상</summary>
<div>

https://github.com/dongtimes2/readme_image/assets/98700888/a1b88d91-ba07-4634-b41e-67b4b4d339c4

</div>
</details>

# 개요

- 프로젝트 이름: 🧑‍💻Code Typing Practice🧑‍💻
- 프로젝트 소개: 영타가 느린 개발자를 위해 만들어진, 코드 타자 연습 웹 어플리케이션
- 개발 기간
  - 최초 개발: 2022.06 - 2022.06 (기획: 1주, 개발: 2주)
  - 리뉴얼: 2023.11 ~
- 멤버: 강민성, 유동하, 최현오

# 이용 방법

<details>
<summary>로그인</summary>
<div>

|메인 화면|로그인 화면|
|:---:|:---:|
|![main](https://github.com/dongtimes2/readme_image/assets/98700888/7e9af24d-d384-473a-b70a-92ed6482a83f)|![login](https://github.com/dongtimes2/readme_image/assets/98700888/b4372cda-cafc-4c2c-832f-000942d086ac)|
|헤더 우측의 로그인 버튼을 클릭하면 로그인 페이지로 이동합니다|네이버 로그인을 할 수 있습니다|

|로그인이 완료된 이후||
|:---:|:---:|
|![login_success](https://github.com/dongtimes2/readme_image/assets/98700888/56143eca-54d8-42db-b386-efd3ad98f44c)|![blank](https://github.com/dongtimes2/readme_image/assets/98700888/3e8f75bb-2799-43f7-b6c9-ddf144b88d0f)|
|로그인이 완료되면 다시 메인 페이지로 리다이렉트됩니다<br>네이버 계정의 닉네임과 프로필 사진이 우측 바에 표시됩니다|&nbsp;&nbsp;&nbsp;&nbsp;|
</div>
</details>

<details>
<summary>시작하기</summary>
<div>

|메인 화면|연습모드 선택 모달|
|:---:|:---:|
|![cards](https://github.com/dongtimes2/readme_image/assets/98700888/56143eca-54d8-42db-b386-efd3ad98f44c)|![practice_type](https://github.com/dongtimes2/readme_image/assets/98700888/f7507f8d-2625-4094-a06f-fc98933f76df)|
|메인 화면에는 각 프로그래밍 언어의 로고와 설명이 담긴 카드가 여러 개 표시됩니다|시작하기 버튼을 클릭하면 연습 종류를 선택할 수 있는 모달이 표시됩니다<br>연습 버튼을 클릭할 경우 연습 페이지로 이동합니다|
</div>
</details>

<details>
<summary>낱말 연습</summary>
<div>

|낱말 연습 화면|연습 결과 화면|
|:--:|:--:|
|![word](https://github.com/dongtimes2/readme_image/assets/98700888/cfa6f467-8a2e-47f8-b485-0f586cf98f1b)|![word_result](https://github.com/dongtimes2/readme_image/assets/98700888/3c7471ec-9940-470e-bcaf-446090d68d4e)|
|프로그래밍 언어가 사용하는 키워드로 낱말 연습 문제가 구성됩니다<br>화면 상단에는 '정확도', '오타수', '진행도'가 표시되며, 하단에는 문제와 유저가 입력한 텍스트가 표시됩니다<br>옳게 입력했는지, 혹은 틀리게 입력했는지에 따라 유저가 입력한 텍스트의 색상이 다르게 표시됩니다|모든 연습을 마쳤을 경우 연습 결과 모달이 나타납니다<br>|
</div>
</details>

<details>
<summary>문장 연습</summary>
<div>

|문장 연습 화면|문장 연습 결과|
|:--:|:--:|
|![sentence](https://github.com/dongtimes2/readme_image/assets/98700888/c2971a1a-8083-4121-9db0-27518b77d967)|![sentence_result](https://github.com/dongtimes2/readme_image/assets/98700888/eb3ead1f-7462-40af-8a92-8ca217833ec2)|
|프로그래밍 언어 코드 한 줄로 문장 연습 문제가 구성됩니다<br>화면 상단에는 '현재 타수', '평균 타수', '현재 정확도', '누적 정확도', '진행도'가 표시되며, <br>하단에는 문제와 유저가 입력한 텍스트가 표시됩니다<br>옳게 입력했는지, 혹은 틀리게 입력했는지에 따라 유저가 입력한 텍스트의 색상이 다르게 표시됩니다|모든 연습을 마쳤을 경우 연습 결과 모달이 나타납니다|
</div>
</details>

<details>
<summary>설정 및 기록</summary>
<div>

|메인 화면|설정 화면|
|:--:|:--:|
|![main](https://github.com/dongtimes2/readme_image/assets/98700888/56143eca-54d8-42db-b386-efd3ad98f44c)|![settings](https://github.com/dongtimes2/readme_image/assets/98700888/e55603c6-57a3-42f0-85dd-df6080770264)|
|로그인했을 경우 헤더 우측에 '설정' 버튼이 표시됩니다<br>설정 버튼을 누를 경우 설정 화면으로 이동합니다|설정 화면에서는 환경 설정을 할 수 있고, 유저의 연습 기록도 열람할 수 있습니다<br>'풀 연습문제 개수', '효과음', '색약 모드' 여부를 설정할 수 있고,<br>'최근 20개 연습 결과 기록', '평균 정확도' 및 '평균 타수' 기록을 확인할 수 있습니다|
</div>
</details>

# 기술 스택

리뉴얼을 거치면서 기술 스택을 변경하였습니다.  
이전에 사용된 기술 스택은 취소선 처리하였습니다.

## 프론트엔드

### 핵심

- React
- ~~React-Redux, Redux Toolkit~~ => Zustand
  - redux는 작성해야 될 코드의 양이 너무나 많다는 단점이 있습니다.  
  Zustand는 provider로 감쌀 필요가 없다는 점, 적은 코드로도 사용할 수 있다는 점, npm trend에서의 점유율이 높다는 점을 근거로 도입하였습니다.  
  그 결과 이전 대비 유지보수하기 용이한 코드가 되었습니다.  
- ~~Redux-Saga~~ => @tanstack/react-query
  - 서버로부터 가져온 데이터를 상태관리 하기 위해 비동기 작업이 가능한 redux-saga를 도입하여 목적을 달성하고자 하였습니다.  
  하지만 코드의 양이 너무나 많고, 추후에 코드 작업을 할 때 코드를 이해하려는데 걸리는 시간이 이에 비례한다는 문제점이 있었습니다.  
  또한 react-query는 간단한 코드를 이용하여 서버 데이터를 캐싱하는데 특화된 라이브러리이므로, 상기한 목적을 달성하고 문제를 해결하고자 도입하였습니다.
- ~~CSSS~~ => emotion
  - css 파일을 컴포넌트화 하여 재사용할 수 있다는점, CSS-in-JS 스타일을 통해 css 파일을 따로 만들지 않아도 되어 작업이 용이하다는 점을 근거로 도입하였습니다.
- ~~firebase~~ => REST-API를 이용한 자체 구현
  - electron으로 빌드했을 때 firebase 인증이 제대로 되지 않는다는점, firebase의 용량이 커 빌드시간이 오래 소요된다는 점을 근거로 firebase를 제거하였고, 소셜 로그인을 지원하는 서비스가 제공하는 rest api를 이용한 인증 방법을 도입하였습니다.  
- Electron

### 그 외

- husky
- msw

### 테스트 환경

- vitest

### 배포

- ~~Netlify~~ => AWS
  - 프론트와 백엔드의 배포 환경을 한 가지로 통일하기 위해 aws로 이전하였습니다.

## 백엔드

### 핵심

- TypeScript
- Express
- MongoDB

### 그 외

- jwt
- husky

### 테스트 환경

- supertest
- jest
- mongodb-memory-server

### 배포

- AWS

# 기술 및 구현 상세 내용

## 타수 측정

문장 연습에서 사용되는 타수 측정 공식은 아래와 같습니다.  
&nbsp;  
$`CurrentTypingSpeed = \frac{CorrectWordCount}{Seconds} \times 60 - BackspaceCount \times 3 `$
&nbsp;  
&nbsp;  
일반적으로 타수는 분 당 얼마나 많은 글자를 입력했는가를 의미합니다.  
하지만 어플리케이션 개발 당시 참고로 삼았던 '한컴 타자 연습'의 경우, 오타 정정을 위해 백스페이스키를 입력할 때 타수가 깎인다는 점을 확인했습니다.  
따라서 패널티를 구현하기 위해 백스페이스키를 입력했을 경우, 이에 비례하여 타수가 감점되도록 구현하였습니다.  
&nbsp;  
한편 타자가 매우 빠른 유저가 1초가 지나기도 전에 타이핑을 마쳤을 경우, 타수 측정 공식에서 분모가 0이 되어 결과값이 Infinity가 되는 문제가 발생했습니다.  
따라서 시간이 흐르는 간격을 1초 단위에서 0.01초 단위로 좁혔고, 문제를 해결할 수 있었습니다.  
&nbsp;  
또한 리뉴얼 작업을 거치면서 더 나은 성능을 위해 타수 측정 로직을 분리하였습니다.  
기존 코드의 경우 한 컴포넌트가 input 이벤트와 1초 미만의 간격으로 이루어지는 실시간 타수 측정을 모두 수행하였기 때문에 컴포넌트가 수행하는 작업이 너무나 비대했고, 브라우저 환경에 따라 병목에 의한 성능 하락이 발생하기 쉬웠습니다.  
이를 해결하기 위해 타수를 계산하는 부분은 따로 custom hook을 만들었고, setTimeout을 통해 1초 미만 간격으로 작동하는 타이머는 web worker 환경에서 돌아가도록 분리하였습니다.  
그 결과 컴포넌트의 크기가 매우 간소해졌을뿐더러, main 스레드에 가해지는 부하(Scripting)도 기존대비 8.3%p 감소한 수치를 확인할 수 있었습니다.

|기존|Web worker 도입 이후|
|:--:|:--:|
|![before](https://github.com/dongtimes2/readme_image/assets/98700888/73cc503a-dd52-4056-a1b4-fe5378c939a6)|![after](https://github.com/dongtimes2/readme_image/assets/98700888/23fc22df-d727-499c-abeb-c09f82e9f0d2)|

<br>

## 휴먼에러 막기

### 도입 배경

프로그래밍 언어는 영어, 숫자, 특수기호로 구성되어 있습니다. (일부 난해한 언어 제외)  
어플리케이션의 목적은 프로그래밍 언어를 따라 치는 것이기 때문에 앞서 언급한 값만 입력으로 받을 필요성이 있었습니다.  
그렇지 않을 경우, 의도하지 않은 동작이 발생할 수 있기 때문입니다.  
&nbsp;  
대표적인 예시로 화살표 키가 있습니다.  
화살표키는 input의 커서를 이동시키기 때문에, 항상 문자열 끝에서만 값이 입력되고 삭제되어야 한다는 일관된 규칙을 적용하는데 어려움이 생깁니다.  
따라서 각각의 키에 바인딩된 코드를 모두 조사한 다음, 그 중에서 입력되면 안되는 키만을 모은 배열을 추가로 작성하여 필터링 과정에 활용하였고, 잘못된 입력으로 인한 버그 발생 가능성을 낮추는데 성공하였습니다.  

### 동작 과정

input이 발생했을 때 이벤트 동작이 onKeyDown -> onChange -> onKeyUp 순으로 진행된다는 점을 이용하였습니다.  
아래 그림은 진행 과정을 다이어그램으로 나타낸 것입니다.  
boolean값을 저장하는 useRef 변수를 하나 생성한 뒤, onKeyDown 이벤트 함수 내부에서 입력값이 올바른지의 여부를 판정하여 변수에 결과를 저장합니다.  
이후 onChange 이벤트로 넘어갔을 때, 변수에 저장된 값이 참일 경우에만 onChange 이벤트 로직이 실행되어 input value가 바뀌도록 구현하였습니다.  

![input_evnet](https://github.com/dongtimes2/readme_image/assets/98700888/8ddc049d-bce5-421a-b2da-c6e2c8da7292)

<br>

## jwt를 활용한 소셜 로그인

### 도입 배경

기존에는 소셜 로그인을 구현할 때 firebase 라이브러리를 이용하였으나 라이브러리 크기가 너무 커 빌드하는 시간이 오래 걸렸고, electron으로 빌드한 환경에서 제대로 동작하지 않는다는 치명적인 단점이 있었습니다.  
따라서 리뉴얼을 거치며 firebase를 제거하고, REST-API를 활용한 네이버 소셜 로그인 방식으로 변경하였습니다.  
그 결과 어플리케이션의 크기도 줄일 수 있었고, electron으로 빌드한 환경에서도 소셜 로그인을 동작시킬 수 있었습니다.  

### 동작 과정

![diagram](https://github.com/dongtimes2/readme_image/assets/98700888/45c05e60-bfa2-43ea-a971-424edfa18711)

### token을 이용한 보안

refresh token의 만료기간은 2주로 잡았습니다.  
refresh token은 서버로부터 cookie에 담겨 전달되는데, httpOnly와 secure 옵션을 주어 xss 공격을 방지하고자 하였고, sameSite 속성에 strict 값을 주어 csrf 공격을 예방하고자 하였습니다.
또한 access token의 만료기간은 1시간으로 짧게 잡아, 토큰이 탈취되더라도 피해를 줄이고자 하였습니다.  

<br>

## 새로고침 로그인 유지 및 라우팅 접근 제한

### 도입 배경

로그인 이후 유저의 닉네임 및 프로필 사진 정보를 전역 상태관리 라이브러리에 보관하였으나, 새로고침이 발생했을 때 값이 모두 초기화되어 결과적으로 로그인이 풀리는 현상이 발생하였습니다.  
따라서 새로고침이 발생했을 때도 로그인을 유지시키는 방법이 필요했습니다.  
또한 로그인 하지 않은 유저는 특정 페이지(연습하기, 설정)에 접근할 수 없도록 막을 필요성이 있었습니다.  

### 토큰 컨트롤러 class 구현

이 어플리케이션은 token을 이용한 인증/인가 작업을 수행하기 때문에, 클라이언트가 서버로부터 발급받은 token을 용이하게 관리할 필요성이 있습니다.  
따라서 '토큰 컨트롤러'라는 이름을 가진 class를 생성하여, localStorage에 access token을 저장하거나 삭제하거나 불러오는 메서드를 각각 구현하였습니다.  
그 결과 단순한 메서드 호출로도 access token을 관리할 수 있게 되었습니다.

### 전역 상태관리와 custom hook의 결합

로그인 정보는 모든 페이지에서 사용되기 때문에, 전역 상태관리 라이브러리에 유저 정보를 저장했으며, custom hook을 만들어 로그인 여부 확인 및 로그아웃 기능을 구현하였습니다. 이 때 custom hook은 전역 상태관리 라이브러리에 저장된 값을 기반으로 돌아가도록 하였습니다.  
아래는 custom hook의 구조를 표현한 의사코드 입니다.

```js
const useAuth = () => {
  const isLoggedin = 전역 상태관리 라이브러리 값();
  const setIsLoggedin = 전역 상태관리 라이브러리 값();

  const tokenController = useMemo(() => {
    return new TokenController();
  }, []);

  const logout = () => {
    setIsLoggedin(false);
    tokenController.clear();
  };

  useEffect(() => {
    const accessToken = tokenController.getAccessToken();

    if (accessToken) {
      setIsLoggedin(true);
    }
  }, [
    setIsLoggedin,
    tokenController,
  ]);

  return { isLoggedin, setIsLoggedin, logout };
};

```

새로고침이 발생하여 전역 상태 라이브러리 값이 초기화되어도, localStorage에 access token 값이 저장되어있다면 로그인 상태를 그대로 유지시키도록 하였습니다.  
이때 악의적인 유저가 임의로 localStorage를 조작하여 access token 필드에 임의의 값을 넣는 행위를 할 가능성이 있으나, 올바르지 않은 access token이 서버로 전달되어 401 응답을 받았을 경우, 바로 로그아웃 및 초기화면으로 redirect 시키는 로직을 구현함으로서 의도하지 않은 동작이 일어나지 않도록 하였습니다.

<br>

## 색약 모드 및 WCAG 2.1 준수

어플리케이션이 맨 처음 개발되고 난 뒤, QA를 위해 부트캠프 동기생을 대상으로 알파 테스트를 진행하였습니다.  
그 결과 한 유저로부터 정타/오타 판별을 위해 사용되는 글자의 색 구분이 색약이 있는 사람에게는 힘들다는 피드백을 얻었습니다.  
맨 처음 버전에서는 연두색과 핑크색만을 이용하여 정타/오타 구분을 했는데, 적록색약이 있는 사람들에게는 매우 불편한 디자인이 될 수 있다는 점을 깨달았습니다.  
따라서 색약 모드를 추가하여 파란색과 노란색으로 정타/오타가 구분되도록 구현하였고, 결과적으로 적록색약이 있는 사람도 편리하게 이용할 수 있도록 접근성을 향상시켰습니다.  

|일반 모드|색약 모드|
|:--:|:--:|
|![normal](https://github.com/dongtimes2/readme_image/assets/98700888/debeb674-9960-4970-99f8-bd7658838c37)|![color_weakness](https://github.com/dongtimes2/readme_image/assets/98700888/207e9d64-12a4-4381-8729-57e2a186f4e0)|

&nbsp;  
또한 리뉴얼을 거치며 WCAG(웹 접근성 가이드라인)에 맞추어 어플리케이션의 디자인을 교체하였습니다.  
어플리케이션에 적용된 모든 색상 조합은 WCAG 2.1 AAA 레벨을 만족하며, 시각 장애가 있는 유저도 불편함 없이 이용할 수 있도록 구성하였습니다.

|기존 디자인|&nbsp;&nbsp;&nbsp;&nbsp;새로운 디자인|
|:--:|:--:|
|![old](https://github.com/dongtimes2/readme_image/assets/98700888/cd9744b6-6e85-4f80-93be-46abe16c82c2)|![new](https://github.com/dongtimes2/readme_image/assets/98700888/cc588390-4736-4a5b-8f33-5ed23454195f)|
|흰 배경과 연두색 글자의 명암비가 2.42:1로<br>WCAG 2.1 AAA 레벨을 만족시키지 않는다|어두운 배경과 연두색 글자의 명암비가 9.8:1로<br>WCAG 2.1 AAA 레벨을 만족한다|
|![old](https://github.com/dongtimes2/readme_image/assets/98700888/dff51453-0b10-4b47-9d86-55a6e955ee71)|![new](https://github.com/dongtimes2/readme_image/assets/98700888/ba2459de-3a3d-49c3-bd99-de5a4a611b83)|
|배경색, 키보드 배경색, 키보드 버튼색의 색상 차이가 모호하여<br>색맹 유저는 색을 구분하는 것이 힘들다|색상 차이가 분명하여<br>색맹 유저도 색의 차이를 구분할 수 있다|

<br>

## ELECTRON 및 소셜로그인  

### 도입 배경

기존 프로젝트에서 가장 큰 난관이었던 부분 중 하나는 바로 electron으로 빌드한 어플리케이션은 소셜 로그인이 작동하지 않는다는 점이었습니다.  
따라서 firebase 라이브러리 대신, REST-API를 이용한 소셜 로그인을 도입하게 되었습니다.  
&nbsp;  
REST-API를 이용한 소셜 로그인 방식은 대부분 callback url을 필요로 합니다.  
즉 소셜 로그인이 성공했을 때, OAuth 서버가 특정 callback url로 접속함으로서 로그인이 완료되었음을 알리는 방식입니다.  
하지만 electron으로 빌드한 어플리케이션은 http url이 아닌 file url을 가지고 있기 때문에 http 방식의 callback url 방식을 그대로 사용할 경우 어플리케이션이 OAuth 서버로부터 응답을 받을 수 없다는 문제가 발생합니다.  
이 문제를 해결하기 위해 electron의 ipc를 활용하였습니다.  

### 구현 상세

유저가 소셜 로그인을 시도할 경우, 네이버 로그인 창(renderer)을 새롭게 열어 로그인하도록 하였습니다.  
이후 로그인 결과가 redirect url로 전송된다는 점에 착안하여, 로그인 창이 redirect url로 전환되었을 때를 감지(will-navigate)하도록 하였습니다.  
네이버의 경우, redirect url에 access token 문자열이 쿼리스트링으로 전달되기 때문에 이를 파싱하여 access token을 얻은 다음, 이를 ipc 통신을 통해 로그인 컴포넌트 페이지에게 전달하였습니다.  
이후의 로그인 과정은 앞서 설명한 다이어그램 과정과 동일합니다.  

![electron_login](https://github.com/dongtimes2/readme_image/assets/98700888/bcadd10c-e44a-41b4-a318-ba68a2ec9419)

<br>

## 빌드 시간  

프론트엔드의 경우, 기존에는 CRA를 사용했으나 리뉴얼을 거치며 vite로 마이그레이션을 거쳤습니다.  
vite로 옮긴 이유는 빌드 시간을 단축하기 위함입니다.  
빌드시간이 단축될수록 변경사항에 대한 빠른 배포가 가능해집니다.  
또한 프론트엔드 배포 과정에서 github action을 도입하였는데, 빌드 시간이 길면 github action을 사용하는 시간이 늘어나, 기본 제공 시간을 빠르게 소진하게 되어 추가 과금이 발생할 가능성이 높기 때문입니다.  

아래는 빌드시간을 비교한 그림입니다.  
시간 측정을 위해 vercel 배포 도구를 활용하였습니다. (실제 배포에서는 vercel을 사용하지 않음)  
그 결과 빌드시간이 78% 감소했음을 파악할 수 있었습니다.  

|CRA(기존)|VITE(리뉴얼)|
|:--:|:--:|
|![before_build](https://github.com/dongtimes2/readme_image/assets/98700888/3ff5a300-7854-44c0-aefa-021d9b12ce0d)|![after_build](https://github.com/dongtimes2/readme_image/assets/98700888/91305d15-c1bd-4c75-a6aa-ffab5f045931)|
|평균 빌드시간: 3분|평균 빌드시간: 39초|

<br>

## 상태 관리

### react-query

어플리케이션 특성상 최신 데이터를 서버로부터 계속해서 받아올 필요성이 없기 때문에, 한 번 받은 데이터를 오랫동안 캐싱해야 서버의 부하를 기여할 수 있다고 판단하였습니다.  
이를 위해, 기존에는 Redux Toolkit에 Redux-Saga를 사용하여 서버로 가져온 데이터를 저장하였습니다.  
하지만 Redux-Saga를 통해 한 개의 기능을 구현하기 위해서는 많은 양의 코드를 작성해야 했기 때문에 '유지보수' 측면에서 매우 불리하다고 판단했습니다. 추후에 기능을 추가할 때 또다시 많은 코드를 작성해야 할 뿐만 아니라 기존에 작성된 코드를 다시 이해하는 데에도 많은 시간이 필요하기 때문입니다.  
따라서 react-query를 도입하여, 데이터를 갱신할 필요성이 없는 부분에 충분한 stale time 및 garbage collection time을 주어 서버의 부하를 낮추었습니다.  

<br>

## AWS 배포
|프론트엔드|백엔드|
|:---:|:---:|
|![front](https://github.com/dongtimes2/readme_image/assets/98700888/86861956-207b-4540-a57a-24aa63396b08)|![back](https://github.com/dongtimes2/readme_image/assets/98700888/b1fb3ee7-d983-4312-94a4-81b6de645d64)|


# 개발 가이드

## 환경 변수

프로젝트 폴더 root 위치에 .env 파일을 만들고 다음과 같이 환경변수를 설정해주어야 합니다.

### 프론트엔드

```
VITE_SERVER_URL  // 백엔드 서버 주소입니다.
VITE_SERVER_URL_DEV  // 테스트용 백엔드 서버 주소입니다.
VITE_NAVER_LOGIN_CLIENT_ID  // 네이버 api에서 발급받은 클라이언트 ID 입니다.
VITE_NAVER_LOGIN_CLIENT_ID_DEV  // 테스트 용도의 클라이언트 ID 입니다.
VITE_NAVER_LOGIN_CALLBACK_URL  // 네이버 소셜 로그인이 완료된 이후의 콜백 url 주소입니다. 네이버에서 등록한 주소와 정확히 일치해야 합니다.
VITE_NAVER_LOGIN_CALLBACK_URL_DEV  // 테스트 용도의 콜백 url 주소입니다.
VITE_NAVER_LOGIN_STATE  // 임의의 문자열입니다. 백엔드에서 사용할 때에도 동일한 값을 사용해야 합니다.
```

### 백엔드

```
MONGO_DB_URL  // mongodb 주소입니다.
MONGO_DB_DEV_URL  // 개발용으로 사용되는 mongodb 주소입니다.
PORT  // 백엔드 포트 번호입니다. 기본 8000번으로 세팅되어 있습니다.
CLIENT_URL  // 프론트엔드 주소입니다.
SERVER_URL  // 백엔드 서버 주소입니다.
TOKEN_SECRET_KEY  // token secret에 사용되는 임의의 문자열입니다.
NAVER_LOGIN_CLIENT_ID  // 네이버 api에서 발급받은 클라이언트 ID 입니다.
NAVER_LOGIN_CLIENT_ID_DEV  // 테스트 용도의 클라이언트 ID 입니다.
NAVER_LOGIN_CLIENT_SECRET  // 네이버 api에서 발급받은 클라이언트 secret입니다.
NAVER_LOGIN_CLIENT_SECRET_DEV  // 테스트 용도의 클라이언트 secret입니다.
```

## 빌드

### 프론트엔드

웹 어플리케이션으로 빌드할 경우, 빌드 결과물은 ./build 폴더에 생성되며  
electron으로 빌드할 경우, 빌드 결과물은 ./dist 폴더에 생성됩니다.  

```sh
$ npm install

# 웹 어플리케이션으로 빌드
$ npm run build

# electron으로 빌드
$ npm run build:e
```

### 백엔드

백엔드 빌드 결과물은 ./dist 폴더에 생성됩니다.  

```sh
$ npm install

$ npm run build

# 빌드한 결과물 실행
# 전역 환경에 pm2가 설치되어 있어야 올바르게 동작합니다.
$ npm start
```

# version
node.js: 18.17.1(LTS), npm: 9.6.7 버전으로 개발되었습니다.  
.nvmrc 파일이 포함되어 있으므로, nvm이 설치되어있는 환경이라면 따로 버전을 설정할 필요가 없습니다.  

# 개발 역사

## 기획 mockup

[figma 페이지로 이동하기](https://www.figma.com/file/hesgkPNGnrlidqc6lLjV8h/Code-Typing-Practice?node-id=0%3A1)

# (리뉴얼 이전) 작업 기여

- 강민성
  - 스타일 작업
  - 문제 데이터와 유저 입력 데이터간 정답 비교 로직
  - 타수 계산 로직
  - 키보드 자판 구현 및 로직

- 유동하
  - 백엔드 코드 및 로그인 인증 절차
  - redux-saga를 통한 데이터 저장 과정
  - 모달 화면 작업
  - electron 도입 및 설정

- 최현오
  - 문장 연습의 점수 기능
  - 테스트 코드
  - 사운드 기능
  - 금지된 키보드 입력 판정 로직

# 소감

<details>
<summary><span style="font-size:18px">강민성</span></summary>
<div markdown="1">
어느 정도 프로젝트가 완성되고 같은 기수분들을 대상으로 테스트를 진행하였습니다.

그 중 한 분으로부터 타자 검증시 옳고 틀림을 구분하는 색상이 구분이 되지 않는다는 피드백을 받았습니다.
저희의 디자인은 연두색과 분홍색을 사용했기 때문인데, 이쁘면 그만이지라는 마인드로 색에 대한 감각이 좋지 못한 분들까지 생각을 못했었습니다.
내부 회의 결과 발표 날짜까지 얼마 남지 않았지만, 시간을 좀 더 쓰면 이 부분은 추가해볼만한 기능이라고 생각해 그날 바로 작업에 착수 하였고, 모든 색약에 대응 하지 못했지만 적록 색약부분에 대한 처리는 하였습니다.
사실, 이런 경험은 처음이라 이런 기능을 추가하는 것 자체가 유저에게 편의성을 제공하는 것인지, 차별을 만드는 것인지에 대한 생각이 들기도 했습니다.
사용자 피드백은 고객이 직접 자신의 시간과 공을 들여 만들어주는 고 관여 데이터입니다. 이런 특성 탓에 사용자 피드백은 우리 서비스를 사용자의 시각으로 바라 볼 훌륭한 기회를 제공해줬습니다. 사용자의 입장에서 그들을 공감하려는 시도는, 서비스 개선 측면에서 가치있는 정보를 찾아내는데 큰 도움이 된다 생각합니다.
반면, 한 명 한명의 피드백이 정규분포상의 어디쯤에 위치하는 의견일지, 성급한 일반화를 하는 것은 아닌지 늘 경계도 필요하다는 생각도 들었습니다.
아무리 고객의 입장이 되어보고 공감을 통해 제품을 관통하는 통찰을 찾아냈다 하더라고 팀 내에 적절하게 공유되어야 진정한 가치가 있다고 생각합니다.
이번 플젝을 통해서 개발 기술적인 면은 물론 이런 좋은 경험도 할 수 있게 되어 너무 재밌었고 이러한 기회를 마련해주신 켄님과 멘토님들 그리고 12기 여러분 모두에게 감사의 인사를 드립니다.

</div>
</details>

<details>
<summary><span style="font-size:18px">유동하</span></summary>
<div markdown="1">
지금까지 계속해서 혼자 개발을 진행하였는데, 팀 프로젝트를 하며 개발의 흐름을 몸소 체험할 수 있게 되었습니다.

협업 과정을 통해 많은 것을 배울 수 있었는데, 그 중 가장 중요하다고 느낀 것은 바로 코드리뷰라고 생각합니다.
사람은 완전한 존재가 아니라고 생각하기 때문에, 누군가가 나의 실수를 잡아주고 교정해주는 과정, 그리고 더 나은 방향을 제시해줄 수 있는 과정이 코드리뷰라고 느꼈습니다.

일정이 너무 바빠서, 혹은 딜레이가 되어서 정신 없어서 코드리뷰를 제대로 하지 못한 순간이 꽤 있었습니다. 돌이켜 생각해보니, 코드 리뷰를 제대로 하지 못해 문제가 있는 코드가 메인 브렌치에 merge 되어 나중에 이를 바로잡는데 더 많은 시간이 쓰였던 것을 생각해보면, 코드 리뷰하는 시간이 결코 아깝지 않은 시간임을 깨닫게 되었습니다.

코딩을 할 때 기획, 설계, 검토하는 과정을 결코 시간 낭비로 여겨서는 안 된다는 것을 절실히 느꼈습니다. 꼼꼼함이 부족할 수록, 추후에 발생하는 문제를 해결하는데 더 많은 시간이 들어간다는 사실을 크게 배웠습니다.

앞으로 협업 작업을 할 때 양질의 코드를 위해, 저런 과정 하나하나를 소홀히 여기지 않는 개발자로 거듭나도록 할 계획입니다.

</div>
</details>

<details>
<summary><span style="font-size:18px">최현오</span></summary>
<div markdown="1">
지금까지 배워온 부분을 토대로 처음으로 진행한 프로젝트였고, 많은 것을 배울 수 있는 팀 프로젝트였습니다.

프로젝트 아이디어 기획부터 계획, git 관리, 구현 기능 분배, 배포까지 모두 다 직접 누구의 도움도 없이 팀원들과 함께 계획을 세우고 진행해야되는 부분이라 처음에는 많이 막막하고 어떻게해야될지 몰랐었는데, 팀원들과 소통을하고 제가 모르는 부분들은 도움을 주면서 저도 빠르게 적응해서 열심히 프로젝트를 진행할 수 있었습니다.

프로젝트가 계획대로 잘 진행되고 있는 상황에서 제가 긴 글타자 기능 구현을 맡으면서 기능 구현에 어려움이 있었습니다.
깔끔한 긴 글 타자 연습기능을 만들기 위해 계속해서 코드를 구현하고 수정하고 한 결과, 시간이 조금 걸렸지만 최대한 계획한 방향으로 기능을 구현할 수 있었습니다.

이런 기능 구현 업무를 맡아 하면서 느낀 점은 팀원들에게 피해가 가지않게 맡은 부분에 있어서 책임감을 가지고 끝까지 해결할 수 있는 능력이 필요하다고 느끼게 되었고, 기능 구현에 성공했을 때의 성취감도 느낄 수 있었습니다.
또한 회사에서도 매 프로젝트마다 기능구현을 맡아서 업무를 수행해야할텐데 계획에 차질없이 정확하게 기능이 구현될 수 있도록 코드를 작성할 수 있어야한다는 것을 깨달았습니다.

팀원들과 만든 타자기능 웹사이트를 배포를 하고 저희 프로젝트 사이트를 다른 동기분들에게 공유하여 피드백을 받아 필요한 기능을 추가해보았습니다.
피드백으로 타자연습에서 색깔이 나오는 부분에 있어서 ‘적록색약을 가지고 있는 사람들을 위해서 색깔 변경 모드가 있으면 좋겠다’ 라는 의견을 받았었는데 정말 뜻 깊은 의견이라고 생각했습니다.
그 이유는 저희가 프로젝트를 만들면서 어떻게보면 당연하다고 생각하고 누구나 이 색깔로 타자치는 부분이 맞고 틀림을 판단할 수 있을 거라 생각하였는데, 이런 피드백과 같은 부분을 개발자들은 세세하게 신경쓰고 유저들의 입장에서 개발하는 자세를 가져야 된다는 것을 깨달았기 때문입니다.

팀원들과 기획부터 배포까지 같이 하면서 많은 부분들을 배우고 경험할 수 있는 의미있는 첫 팀프로젝트였고, 이런 경험을 할 수 있게해준 팀원들과 바닐라코딩에도 감사의 인사를 전하고 싶습니다.

</div>
</details>
