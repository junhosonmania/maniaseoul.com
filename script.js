let data = [
    ['2025/06/06', 'bed live in seoul', 'bed', 'Veloso Hongdae', 'Promoter'],
    ['2025/03/03', 'HMLTD 포원스인마랖 IN SEOUL', 'HMLTD', 'Musinsa Garage', 'Promoter'],
    ['2025/02/20', 'Geordie Greep Live in Seoul', 'Geordie Greep', 'Rolling Hall', 'Promoter'],
    ['2024/12/08', 'Photay Live in Seoul', 'Photay', 'Channel1969', 'Promoter'],
    ['2024/11/05', 'Hiatus Kaiyote Live in Seoul', 'Hiatus Kaiyote', 'YES24 LIVE HALL', 'Promoter'],
    ['2024/10/09', 'John Carroll Kirby Live in Seoul', 'John Carroll Kirby', 'Rolling Hall', 'Promoter'],
    ['2024/07/30', 'King Krule Extra Night in Seoul', 'King Krule', 'Rolling Hall', 'Promoter'],
    ['2024/07/27-28', 'HAVE A NICE TRIP 2024', 'King Krule, Sampha, Alvvays...', 'KINTEX HALL 2', 'Programmer'],
    ['2024/04/28', 'shame live in seoul', 'shame', 'HyundaiCard UNDERSTAGE', 'Promoter'], 
    ['2024/04/20', 'King Gnu Asia Tour \'THE GREATEST UNKNOWN\' in Seoul', 'King Gnu', 'Olympic Hall', 'Hospitality'], 
    ['2024/03/31', 'KNOWER LIVE IN SEOUL', 'KNOWER', 'Musinsa Garage', 'Promoter'], 
    ['2024/03/10', 'amazarashi Asia Tour 2024 \'Eternal City\' in Seoul', 'amazarashi', 'Mapo Art Center Art Hall MAC', 'Hospitality'], 
    ['2024/03/02', 'Oneothrix Point Never AGAIN LIVE - Seoul', 'Oneothrix Point Never', 'Musinsa Garage', 'Promoter'], 
    ['2023/11/29', 'Benny Sings Live in Seoul', 'Benny Sings', 'HyundaiCard UNDERSTAGE', 'Promoter'], 
    ['2023/11/23', 'Otoboke Beaver Live in Seoul', 'Otoboke Beaver', 'Rolling Hall', 'Promoter'], 
    ['2023/10/02-03', 'ELLEGARDEN LIVE IN SEOUL "Boys are Back in the East Tour 2023"', 'ELLEGARDEN', 'YES24 LIVE HALL', 'Hospitality'], 
    ['2023/09/19', 'Mndsgn Live in Seoul', 'Mndsgn', 'Veloso Hongdae', 'Promoter'], 
    ['2023/09/04', 'HMLTD 레츠뻐킹두잇 IN SEOUL', 'HMLTD', 'Channel1969', 'Promoter'], 
    ['2023/08/02', 'Louis Cole Live in Seoul', 'Louis Cole', 'YES24 LIVE HALL', 'Promoter'], 
    ['2023/07/28', 'black midi live in seoul 2023', 'black midi', 'Nodeul Live House', 'Promoter'], 
    ['2023/03/29', 'Sunset Rollercoaster "Infinity Sunset Tour" in Seoul', 'Sunset Rollercoaster', 'YES24 LIVE HALL', 'Promoter'], 
    ['2022/12/02', 'black midi live in seoul', 'black midi', 'Rolling Hall', 'Promoter']
];
let sortStatus = Array(data[0].length).fill('none');


function generateTable() {
    let tbody = document.querySelector("#dataTable tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let row = tbody.insertRow(i);

        for (let j = 0; j < data[i].length; j++) {
            let cell = row.insertCell(j);
            let cellContent = document.createElement('span');

            if (j === 1) {  // title 열에 해당하는 경우
                let link = document.createElement('a');

                // 각 행에 대한 링크 지정
                if (data[i][2] === 'King Gnu') {
                    link.href = 'kinggnu.html';
                } else if (data[i][2] === 'KNOWER') {
                    link.href = 'knower.html';
                } else if (data[i][2] === 'amazarashi') {
                    link.href = 'amazarashi.html';
                } else if (data[i][2] === 'Oneothrix Point Never') {
                    link.href = 'opn.html';
                } else if (data[i][2] === 'Benny Sings') {
                    link.href = 'bennysings.html';
                } else if (data[i][2] === 'Otoboke Beaver') {
                    link.href = 'otobokebeaver.html';
                } else if (data[i][2] === 'ELLEGARDEN') {
                    link.href = 'ellegarden.html';
                } else if (data[i][2] === 'Mndsgn') {
                    link.href = 'mndsgn.html';
                } else if (data[i][2] === 'HMLTD') {
                    link.href = 'hmltd.html';
                } else if (data[i][2] === 'Louis Cole') {
                    link.href = 'louiscole.html';
                } else if (data[i][1] === 'black midi live in seoul 2023') {
                    link.href = 'bm2023.html';
                } else if (data[i][2] === 'Sunset Rollercoaster') {
                    link.href = 'ssrc.html';
                } else if (data[i][1] === 'black midi live in seoul') {
                    link.href = 'bm.html';
                } else if (data[i][2] === 'shame') {
                    link.href = 'shame.html';
                } else if (data[i][2] === 'King Krule, Sampha, Alvvays...') {
                    link.href = 'HANT2024.html';
                } else if (data[i][2] === 'King Krule') {
                    link.href = 'kk.html';
                } else if (data[i][2] === 'John Carroll Kirby') {
                    link.href = 'jck.html';
                } else if (data[i][2] === 'Hiatus Kaiyote') {
                    link.href = 'hk.html';
                } else if (data[i][2] === 'Photay') {
                    link.href = 'photay.html';
                } else if (data[i][2] === 'Geordie Greep') {
                    link.href = 'geordie.html';
                } else if (data[i][1] === 'HMLTD 포원스인마랖 IN SEOUL') {
                    link.href = 'hmltd2.html';
                } else if (data[i][2] === 'bed') {
                    link.href = 'bed.html';
                }


                link.textContent = data[i][j];
                cellContent.appendChild(link);
            } else {
                cellContent.textContent = data[i][j];
            }

            cell.appendChild(cellContent);
        }
    }
}

// 예시 데이터

// 테이블 생성 함수 호출
generateTable();


function sortTable(columnIndex) {
    let currentStatus = sortStatus[columnIndex];

    if (currentStatus === 'none' || currentStatus === 'desc') {
        data.sort((a, b) => {
            if (a[columnIndex] < b[columnIndex]) return -1;
            if (a[columnIndex] > b[columnIndex]) return 1;
            return 0;
        });

        sortStatus = Array(data[0].length).fill('none');
        sortStatus[columnIndex] = 'asc';
    } else if (currentStatus === 'asc') {
        data.sort((a, b) => {
            if (a[columnIndex] > b[columnIndex]) return -1;
            if (a[columnIndex] < b[columnIndex]) return 1;
            return 0;
        });

        sortStatus = Array(data[0].length).fill('none');
        sortStatus[columnIndex] = 'desc';
    }

    generateTable();
}

function changeLanguage() {
    let languageSelect = document.getElementById("languageSelect");
    let selectedLanguage = languageSelect.value;

    // 헤더 텍스트 변경
    document.getElementById("dateHeader").textContent = (selectedLanguage === 'ko') ? '날짜' : 'DATE';
    document.getElementById("artistHeader").textContent = (selectedLanguage === 'ko') ? '아티스트' : 'ARTIST';
    document.getElementById("titleHeader").textContent = (selectedLanguage === 'ko') ? '공연' : 'TITLE';
    document.getElementById("venueHeader").textContent = (selectedLanguage === 'ko') ? '베뉴' : 'VENUE';
    document.getElementById("partHeader").textContent = (selectedLanguage === 'ko') ? '담당' : 'ROLE';

    // 기타 언어에 따라 추가적인 텍스트 변경이 필요한 경우 여기에 추가

    // 테이블 재생성
    generateTable();
}

// 초기 테이블 생성
generateTable();
