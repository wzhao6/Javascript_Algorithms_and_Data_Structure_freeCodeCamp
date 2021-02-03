function convertToRoman(num) {
    const n = num.toString();
    let cov = [["I", "V", "X"], 
                ["X", "L", "C"],
                ["C", "D", "M"],
                ["M", "V ̅", "X ̅"]];
    let result = "";
    for (let i=0; i<n.length; i++) {
        let covID = n.length - i -1;
        if (n[i] == 0) {
            covID -= 1;
            continue;
        }
        if (n[i] > 0 && n[i] < 4) {
            result += cov[covID][0].repeat(n[i]);
        }
        else if (n[i] == 4) {
            result += cov[covID][0] + cov[covID][1];
        }
        else if (n[i] > 4 && n[i] < 9) {
            result += cov[covID][1] + cov[covID][0].repeat(n[i]-5);
        }
        else {
            result += cov[covID][0] + cov[covID][2];
        }

    }
    return result;

}

convertToRoman(2014);