<div align="center">
<br/>

<a href="https://42nomad.kr"><img src="https://user-images.githubusercontent.com/84768491/278297634-d95feea7-c189-4e7c-ab26-8a721d93be05.png"/></a>

<b>42 서울 자리 및 회의실 확인 서비스</b>

---
</div>

## 💡 프로젝트 소개

42NOMAD는 매일 자리를 찾아 방랑하는 모든 노마드, 카뎃들의 <b>슬기로운 42생활을 위한 안내서가 될 서비스</b>입니다.<br/>
42서울에는 고정적으로 사용하는 자리가 없습니다.<br/>
내가 선호하는 자리도, 내가 사용하고 싶은 회의실도 모두 직접 찾아가 사용가능여부를 확인해야 합니다.<br/>
그래서, 저희는 42NOMAD를 만들었습니다.<br/>
### 42NOMAD에서는 전부 알 수 있습니다! 

## 🖥 화면 및 기능 설명
  ![Group 10-3](https://github.com/42nomad/frontend/assets/46983641/b86918e2-5ae4-4b8b-b744-7e6acf88b94e)

- login 페이지
   - 42 intra oauth를 통해 로그인이 가능합니다.

- 자리확인 페이지
   - 42nomad의 메인화면입니다. 자리 검색, 즐겨찾기, 히스토리 칩메뉴가 있습니다.
   - 자리검색 : 드롭다운을 통해 검색이 가능하고, 검색된 자리에 대해 즐겨찾기 등록을 할 수 있습니다. 
 - 즐겨찾기 : 즐겨찾기 된 자리들을 모아 한페이지에서 확인할 수 있습니다. 알림 설정 버튼을 클릭시 알림 설정 on/ off가 가능합니다. 알림 설정된 자리가 사용가능하면 slack 에 알림이 전송됩니다. 
'+'버튼을 클릭하면 자리 검색창이 뜨고, 해당 창에서 검색후 즐겨찾기에 추가할 수 있습니다.
   - 히스토리 : 이전에 앉았던 자리들을 최대 5자리까지 확인할 수 있습니다. 

- 사이드바
   - 각 메뉴를 클릭하면 해당 페이지로 이동할 수 있습니다.

- 회의실 페이지
   - 내비게이터를 이용해 다음 맵, 이전 맵으로 전환이 가능합니다. 
   - 사용중인 회의실은 초록색, 비어있는 회의실은 흰색으로 표시되고, 실물 iot버튼을 이용해 사용중 on/off를 할 수 있습니다. 
   - 알림 설정 버튼을 클릭하면 알림 설정 on/off가 가능합니다. 알림 설정된 회의실의 상태가 업데이트 될 때마다 실시간으로 slack알림이 전송됩니다.

- 클러스터 맵 페이지
   - 내비게이터를 이용해 다음 클러스터 맵, 이전 클러스터 맵으로 전환이 가능합니다. 
   - 첫번째 클러스터 맵은 전체 클러스터 현황으로, 각 클러스터의 로그인 좌석 비율을 채도로 구분하여 밀집도를 한눈에 확인할 수 있습니다.
   - 전체 클러스터 현황에서 각 클러스터를 클릭하면 해당 클러스터 맵으로 이동합니다.
   - 사용중인 좌석은 초록색, 비어있는 좌석은 회색, 로그아웃 후 42분 내의 좌석은 연한 초록색으로 표시되며, 좌석을 클릭하면 사용중인 사람의 인트라 id 혹은 로그아웃 후 경과 시간이 표시됩니다. 
   - 우측 하단의 맵 아이콘을 클릭하면 전체 클러스터 현황으로 이동합니다.

- 분실물 게시판 페이지
   - 분실물 등록하기 카드를 클릭하면 분실물 등록 페이지로 이동합니다.
   - 게시물을 클릭하면 해당 게시글의 상세페이지로 이동합니다.
   - 분실물 게시글 상세 페이지
      - 습득한 물건에 대한 사진, 습득위치, 날짜, 작성자, 보관 위치등 상세 정보가 표시됩니다.
      - 목록 버튼을 클릭하면 분실물 게시판페이지로 이동합니다.
   - 분실물 게시글 작성 페이지 
      - '+' 버튼 클릭시 습득물에 대한 사진을 첨부할 수 있습니다.
      - 습득위치, 보관 위치를 입력할 수 있고, 작성자 및 날짜는 수정할 수 없습니다.

- 마이페이지
   - 로고를 클릭하면 이동할 페이지를 선택할 수 있습니다.
   - 즐겨찾는 자리를 모아보고, 추가하거나 삭제할 수 있습니다. 
   - 내가 쓴 분실물 게시글을 모아 관리를 할 수 있습니다. 

- 통계 페이지
   - 관리자를 위한 즐겨찾기 및 회의실에 대한 통계를 확인하고 엑셀로 다운로드 할 수 있습니다. 
   - 기간과 확인하고 싶은 클러스터를 설정하고, 사용횟수와 누적시간을 기준으로 정렬할 수 있습니다. 

## 📌 실행 방법
```
(+ .env_sample 추가)
npm install 
npm run dev
```

## 🔨 기술 스택 및 지원 브라우저
<div align="center">
  <div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
  </div>
  <div>
    <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
    <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white">
    <img src="https://github.com/42nomad/frontend/assets/84768491/51e08f21-2aa0-49d8-8254-c4f601b7c7df" width="30px">
  </div>
  <div>
    <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">
    <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
    <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">
    <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
    <img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white">
  </div>
<br/>
  
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung |
| --------- | --------- | --------- | --------- | --------- |
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |
</div>

## 🗂 디렉터리 구조
```
./
├── public/
│   ├── favicon.ico    
│   └── index.html
└── src/
│   ├── assets/      
│   │   ├── fonts/
│   │   └── images/
│   ├── components/    # 공용 컴포넌트
│   │   └── App.tsx
│   ├── interfaces/    # 모든 인터페이스
│   ├── pages/         # 각 페이지의 view와 logic
│   │   └── domainName/
│   │       ├── logics/
│   │       └── views/
│   ├── services/      # API 호출 함수
│   ├── store/         # 상태관리 (redux) 관련 코드
│   ├── styles/        # 공용 스타일 변수
│   └── utils/         # 공용 인스턴스 및 함수
└────── index.tsx   
```

## 🤙 커밋 규칙
```
[FEAT] : 기능 추가
[FIX] : 기능 수정 (이슈 해결)
[HOTFIX] : 기능 수정 (테스트 필요)
[DOCS] : 문서 수정
[REFACTOR] : 기능 변경 없이 코드 수정
[STYLE] : 디자인 관련 코드 수정
[COMMENT] : 주석 변경
[TEST] : 테스트 코드 작성
[RENAME] : 디렉토리 변경, 파일 삭제 및 이동 등 코드와 관련 없는 수정

ex) [FEAT] : resolve #12 message
```

## 👩‍💻 팀원 소개
<div align="center">
  
|팀원|역할|
|---|---|
|**🍟 [heeskim](https://github.com/lampolar)**|즐겨찾기, 자리 검색, 회의실, 통계, 어드민 페이지 구현|
|**🧸 [sojoo](https://github.com/zoovely)**|로그인, 클러스터 맵, 분실물 게시판, 마이 페이지 구현|

<img src="https://simpleicons.org/icons/github.svg" width="15px"> [Back-end Repository](https://github.com/42nomad/backend)

</div>
