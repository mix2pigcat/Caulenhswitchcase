function numberdays() {
    let day = parseInt(document.getElementById('day').value);
        switch (day) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById('output').innerHTML = ('Tháng có 31 ngày');
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById('output').innerHTML = (' Tháng có 30 ngày');
                break;
            case 2:
                document.getElementById('output').innerHTML = ('Tháng có 28,29 ngày');
                break;
            default:{
                alert("ban hay nhap lai so");
            }
        }
    }
