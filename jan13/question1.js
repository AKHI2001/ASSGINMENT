document.write('<h3>Matrix</31>')

var matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]];
var n = matrix.length
var sum =0;
for(let i =0;i<n;i++){
    document.write('<br>');

    for(let j =0;j<n;j++){
        document.write(matrix[i][j]);

        document.write(" ");

        if(i == j){
            sum = sum+matrix[i][j];
        }
    }
}

document.write('<br>')

document.write('<h4>Sum of diagonal elements</h4>')

document.write(sum);