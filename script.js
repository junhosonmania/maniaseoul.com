let data = [
    // [현재] mania seoul (구분: 'mania')
    ['2026/04/26', '???', '???', '???', 'Promoter', 'mania'],
    ['2026/03/29', '???', '???', '???', 'Promoter', 'mania'],
    ['2026/01/24', 'bar italia + bongjeingan live n seoul', 'bar italia, bongjeingan', 'Musinsa Garage', 'Promoter', 'mania'],
    ['2026/01/18', 'Wisp Live In Seoul', 'Wisp', 'Musinsa Garage', 'Promoter', 'mania'],
    ['2025/10/17', 'Pearl & The Oysters Live in Seoul', 'Pearl & The Oysters', 'West Bridge Live Hall', 'Promoter', 'mania'],
    ['2025/06/06', 'bed live in seoul', 'bed', 'Veloso Hongdae', 'Promoter', 'mania'],
    ['2025/03/03', 'HMLTD 포원스인마랖 IN SEOUL', 'HMLTD', 'Musinsa Garage', 'Promoter', 'mania'],

    // [과거] 이전 경력 (구분: 'past')
    ['2025/02/20', 'Geordie Greep Live in Seoul', 'Geordie Greep', 'Rolling Hall', 'Promoter', 'past'],
    ['2024/12/08', 'Photay Live in Seoul', 'Photay', 'Channel1969', 'Promoter', 'past'],
    ['2024/11/05', 'Hiatus Kaiyote Live in Seoul', 'Hiatus Kaiyote', 'YES24 LIVE HALL', 'Promoter', 'past'],
    ['2024/10/09', 'John Carroll Kirby Live in Seoul', 'John Carroll Kirby', 'Rolling Hall', 'Promoter', 'past'],
    ['2024/07/30', 'King Krule Extra Night in Seoul', 'King Krule', 'Rolling Hall', 'Promoter', 'past'],
    ['2024/07/27-28', 'HAVE A NICE TRIP 2024', 'King Krule, Sampha, Alvvays...', 'KINTEX HALL 2', 'Programmer', 'past'],
    ['2024/04/28', 'shame live in seoul', 'shame', 'HyundaiCard UNDERSTAGE', 'Promoter', 'past'], 
    ['2024/04/20', 'King Gnu Asia Tour \'THE GREATEST UNKNOWN\' in Seoul', 'King Gnu', 'Olympic Hall', 'Hospitality', 'past'], 
    ['2024/03/31', 'KNOWER LIVE IN SEOUL', 'KNOWER', 'Musinsa Garage', 'Promoter', 'past'], 
    ['2024/03/10', 'amazarashi Asia Tour 2024 \'Eternal City\' in Seoul', 'amazarashi', 'Mapo Art Center Art Hall MAC', 'Hospitality', 'past'], 
    ['2024/03/02', 'Oneothrix Point Never AGAIN LIVE - Seoul', 'Oneothrix Point Never', 'Musinsa Garage', 'Promoter', 'past'], 
    ['2023/11/29', 'Benny Sings Live in Seoul', 'Benny Sings', 'HyundaiCard UNDERSTAGE', 'Promoter', 'past'], 
    ['2023/11/23', 'Otoboke Beaver Live in Seoul', 'Otoboke Beaver', 'Rolling Hall', 'Promoter', 'past'], 
    ['2023/10/02-03', 'ELLEGARDEN LIVE IN SEOUL "Boys are Back in the East Tour 2023"', 'ELLEGARDEN', 'YES24 LIVE HALL', 'Hospitality', 'past'], 
    ['2023/09/19', 'Mndsgn Live in Seoul', 'Mndsgn', 'Veloso Hongdae', 'Promoter', 'past'], 
    ['2023/09/04', 'HMLTD 레츠뻐킹두잇 IN SEOUL', 'HMLTD', 'Channel1969', 'Promoter', 'past'], 
    ['2023/08/02', 'Louis Cole Live in Seoul', 'Louis Cole', 'YES24 LIVE HALL', 'Promoter', 'past'], 
    ['2023/07/28', 'black midi live in seoul 2023', 'black midi', 'Nodeul Live House', 'Promoter', 'past'], 
    ['2023/03/29', 'Sunset Rollercoaster "Infinity Sunset Tour" in Seoul', 'Sunset Rollercoaster', 'YES24 LIVE HALL', 'Promoter', 'past'], 
    ['2022/12/02', 'black midi live in seoul', 'black midi', 'Rolling Hall', 'Promoter', 'past']
];

let sortStatus = Array(5).fill('none');

function generateTable() {
    let tbody = document.querySelector("#dataTable tbody");
    tbody.innerHTML = "";

    let previousType = null;

    for (let i = 0; i < data.length; i++) {
        let currentType = data[i][5]; 

        // [수정됨] 구분선 문구 변경
        if (previousType !== null && currentType !== previousType) {
            let dividerRow = tbody.insertRow();
            dividerRow.className = "divider-row"; 
            let dividerCell = dividerRow.insertCell(0);
            dividerCell.colSpan = 5; 
            dividerCell.innerHTML = `
                <div class="divider-content">
                    <span>Before Mania, Junho Son worked on...</span>
                </div>`;
        }

        let row = tbody.insertRow();

        for (let j = 0; j < 5; j++) {
            let cell = row.insertCell(j);
            let cellContent = document.createElement('span');

            if (j === 1) { 
                let link = document.createElement('a');
                let artist = data[i][2];
                let title = data[i][1];

                if (artist === 'King Gnu') link.href = 'kinggnu.html';
                else if (artist === 'KNOWER') link.href = 'knower.html';
                else if (artist === 'amazarashi') link.href = 'amazarashi.html';
                else if (artist === 'Oneothrix Point Never') link.href = 'opn.html';
                else if (artist === 'Benny Sings') link.href = 'bennysings.html';
                else if (artist === 'Otoboke Beaver') link.href = 'otobokebeaver.html';
                else if (artist === 'ELLEGARDEN') link.href = 'ellegarden.html';
                else if (artist === 'Mndsgn') link.href = 'mndsgn.html';
                else if (artist === 'HMLTD') link.href = 'hmltd.html';
                else if (artist === 'Louis Cole') link.href = 'louiscole.html';
                else if (title === 'black midi live in seoul 2023') link.href = 'bm2023.html';
                else if (artist === 'Sunset Rollercoaster') link.href = 'ssrc.html';
                else if (title === 'black midi live in seoul') link.href = 'bm.html';
                else if (artist === 'shame') link.href = 'shame.html';
                else if (artist === 'King Krule, Sampha, Alvvays...') link.href = 'HANT2024.html';
                else if (artist === 'King Krule') link.href = 'kk.html';
                else if (artist === 'John Carroll Kirby') link.href = 'jck.html';
                else if (artist === 'Hiatus Kaiyote') link.href = 'hk.html';
                else if (artist === 'Photay') link.href = 'photay.html';
                else if (artist === 'Geordie Greep') link.href = 'geordie.html';
                else if (title === 'HMLTD 포원스인마랖 IN SEOUL') link.href = 'hmltd2.html';
                else if (artist === 'bed') link.href = 'bed.html';

                link.textContent = data[i][j];
                cellContent.appendChild(link);
            } else {
                cellContent.textContent = data[i][j];
            }
            cell.appendChild(cellContent);
        }
        previousType = currentType;
    }
}

function sortTable(columnIndex) {
    let currentStatus = sortStatus[columnIndex];

    if (currentStatus === 'none' || currentStatus === 'desc') {
        data.sort((a, b) => {
            if (a[columnIndex] < b[columnIndex]) return -1;
            if (a[columnIndex] > b[columnIndex]) return 1;
            return 0;
        });
        sortStatus = Array(5).fill('none');
        sortStatus[columnIndex] = 'asc';
    } else if (currentStatus === 'asc') {
        data.sort((a, b) => {
            if (a[columnIndex] > b[columnIndex]) return -1;
            if (a[columnIndex] < b[columnIndex]) return 1;
            return 0;
        });
        sortStatus = Array(5).fill('none');
        sortStatus[columnIndex] = 'desc';
    }
    generateTable();
}

function changeLanguage() {
    let languageSelect = document.getElementById("languageSelect");
    let selectedLanguage = languageSelect ? languageSelect.value : 'en';

    let dateHeader = document.getElementById("dateHeader");
    if(dateHeader) dateHeader.textContent = (selectedLanguage === 'ko') ? '날짜' : 'DATE';
    
    let artistHeader = document.getElementById("artistHeader");
    if(artistHeader) artistHeader.textContent = (selectedLanguage === 'ko') ? '아티스트' : 'ARTIST';
    
    let titleHeader = document.getElementById("titleHeader");
    if(titleHeader) titleHeader.textContent = (selectedLanguage === 'ko') ? '공연' : 'TITLE';
    
    let venueHeader = document.getElementById("venueHeader");
    if(venueHeader) venueHeader.textContent = (selectedLanguage === 'ko') ? '베뉴' : 'VENUE';
    
    let partHeader = document.getElementById("partHeader");
    if(partHeader) partHeader.textContent = (selectedLanguage === 'ko') ? '담당' : 'ROLE';

    generateTable();
}

generateTable();
